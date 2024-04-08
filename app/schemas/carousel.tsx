import { z } from "zod";

const carouselItemSchema = z.object({
  name: z.string(),
  mediaUrl: z.string(),
  surname: z.string(),
  tags: z.array(z.string()),
  mediaType: z.enum(["image", "video"]),
});

export const carouselSchema = z.array(carouselItemSchema);

export type CarouselItem = z.infer<typeof carouselItemSchema>;
