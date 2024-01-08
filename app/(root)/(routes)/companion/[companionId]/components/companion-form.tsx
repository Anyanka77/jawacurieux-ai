"use client";

import axios from "axios";
import * as z from "zod";
import { Category, Companion } from "@prisma/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Wand2 } from "lucide-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { ImageUpload } from "@/components/image-upload";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const PREAMBLE = `Tu es Albert Einstein. Tu es un physicien renommé connu pour ta théorie de la relativité. Ton travail a façonné la physique moderne et tu as une curiosité insatiable pour l’univers. Tu possèdes un esprit ludique et connu pour ta coiffure emblématique. Connu pour ta curiosité ludique et ton esprit. Lorsque tu parles de l’univers, tes yeux s’illuminent d’un émerveillement enfantin. Tu trouves de la joie dans les sujets complexes et ris souvent de l'ironie de l'existence
`;

const SEED_CHAT = `Humain : Salut Albert, qu’est-ce que tu as en tête aujourd’hui ?
Albert : *avec un clin d’œil* Il suffit de réfléchir aux mystères de l’univers, comme toujours. La vie est un puzzle délicieux, ne pensez-vous pas?
Humain : Bien sûr, mais pas aussi profond que vos idées !
Albert : *gloussant* Rappelez-vous, l’univers ne garde pas ses secrets; il attend simplement que le cœur curieux les découvre.
`;

interface CompanionFormProps {
  initialData: Companion | null;
  categories: Category[];
}

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Le nom est requis",
  }),
  description: z.string().min(1, {
    message: "La description est requise",
  }),
  instructions: z.string().min(200, {
    message: "Les instructions sont requises avec un minimum de 200 caractères",
  }),
  seed: z.string().min(200, {
    message: "La graine est requise avec un minimum de 200 caractères",
  }),
  src: z.string().min(1, {
    message: "L'image est requise",
  }),
  categoryId: z.string().min(1, {
    message: "La catégorie est requise",
  }),
});

export const CompanionForm = ({
  categories,
  initialData,
}: CompanionFormProps) => {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: "",
      description: "",
      instructions: "",
      seed: "",
      src: "",
      categoryId: undefined,
    },
  });

  const isloading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (initialData) {
        await axios.patch(`/api/companion/${initialData.id}`, values);
      } else {
        await axios.post(`/api/companion`, values);
      }

      toast({
        description: "Compagnon créé avec succès.",
      });

      router.refresh();
      router.push("/");
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Quelque chose s'est mal passé.",
      });
    }
  };

  return (
    <div className="h-full p-4 space-y-2 max-w-3xl mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 pb-10"
        >
          <div className="space-y-2 w-full">
            <div>
              <h3 className="text-lg font-medium">Information Générale</h3>
              <p className="text-sm text-muted-foreground">
                Ajouter des informations générales sur le compagnon que vous
                souhaitez partager.
              </p>
            </div>
            <Separator className="bg-primary/10" />
          </div>
          <FormField
            name="src"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center justify-center space-y-4">
                <FormControl>
                  <ImageUpload
                    disabled={isloading}
                    onChange={field.onChange}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isloading}
                      placeholder="Einstein"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Ajouter le nom de votre compagnon.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="description"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isloading}
                      placeholder="Physicien génial, auteur de E = mc2"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Courte description de votre compagnon.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="categoryId"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Catégorie</FormLabel>
                  <Select
                    disabled={isloading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-background">
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Choisir une catégorie"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Sélectionner la catégorie de votre compagnon.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-2 w-full">
            <div>
              <h3 className="text-lg font-medium">Configuration</h3>
              <p className="text-sm text-muted-foreground">
                Détailler les instructions de votre compagnon.
              </p>
            </div>
            <Separator className="bg-primary/10" />
          </div>
          <FormField
            name="instructions"
            control={form.control}
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <FormLabel>Instructions</FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-background resize-none"
                    rows={7}
                    disabled={isloading}
                    placeholder={PREAMBLE}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Décrivez en détail l’histoire de votre compagnon et les
                  détails pertinents.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="seed"
            control={form.control}
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <FormLabel>Exemple de conversation</FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-background resize-none"
                    rows={7}
                    disabled={isloading}
                    placeholder={SEED_CHAT}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Décrivez en détail l’histoire de votre compagnon et les
                  détails pertinents.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex justify-center">
            <Button size="lg" disabled={isloading}>
              {initialData
                ? "Mettre à jour ton compagnon"
                : "Créer ton compagnon"}
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
