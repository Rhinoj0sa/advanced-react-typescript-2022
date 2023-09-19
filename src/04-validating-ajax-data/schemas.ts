import { z } from "zod";

export const pizzaSchema = z.object({
  name: z.string(),
  ingredients: z.array(z.string()),
  price: z.number(),
  extras: z.array(z.string()),
});

export const pizzasSchema=z.array(pizzaSchema);

export const extraIngredientSchema = z.object({
  name: z.string(),
  price: z.number(),
});

export const extraIngredientsSchema = z.record(extraIngredientSchema);
