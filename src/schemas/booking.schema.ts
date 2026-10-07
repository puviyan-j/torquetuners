import { z } from "zod";

export const bookingSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),

    phone: z.string().min(10, "Phone number must be 10 digits"),

    bike: z.string().min(1, "Please select your bike"),

    service: z.enum(["Pickup & Drop", "door step"], {
      message: "Please select a service",
    }),

    services: z.array(z.string()).min(1).optional(),

    brandmodel: z.string().min(1, "Please select your bike"),

    date: z.date(),
  })
  .superRefine((data, ctx) => {
    // Door step → at least one service must be selected
    if (data.service === "door step") {
      if (!data.services || data.services.length === 0) {
        ctx.addIssue({
          code: "custom",
          path: ["services"],
          message: "Please select at least one service",
        });
      }
    }
  });

export type BookingFormData = z.infer<typeof bookingSchema>;
