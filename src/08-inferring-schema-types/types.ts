import {z} from 'zod';
import {extraIngredientSchema, extraIngredientsSchema, pizzaSchema} from "./schemas";

export type Pizza = z.infer<typeof pizzaSchema>;
export type ExtraIngredient = z.infer<typeof extraIngredientSchema>
export type ExtraIngredients = z.infer<typeof extraIngredientsSchema>
export type PizzaOnOrder = {
    name: string;
    price: number;
    extraIngredients: ExtraIngredient[];
};
