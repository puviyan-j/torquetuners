import { z } from "zod";

export const BatteriesSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be 10 digits"),
  type: z.enum(["2 wheeler", "4 wheeler"], {
    message: "Please select a service",
  }),
});

export type BatteriesFormData = z.infer<typeof BatteriesSchema>;
