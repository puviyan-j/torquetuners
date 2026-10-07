import { z } from "zod";

export const waterwashSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be 10 digits"),
});

export type waterwashSchemaFormData = z.infer<typeof waterwashSchema>;
