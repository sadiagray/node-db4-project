const recipes = [
    { recipe_name: 'Fridge Fajitas'},
    { recipe_name: 'Pot Pie'},
    { recipe_name: 'Peas & Rice'},
]

const ingredients = [
    { ingredient_name: 'Bell Pepper & Onion' , ingredient_unit: 'cup' },
    { ingredient_name: 'Leftover Meat' , ingredient_unit: 'lbs' },
    { ingredient_name: 'Oil' , ingredient_unit: 'tblspn' },
    { ingredient_name: 'Queso' , ingredient_unit: 'ounces' },
    { ingredient_name: 'Tortillas' , ingredient_unit: 'pkg' },
    { ingredient_name: 'Pie Crust' , ingredient_unit: 'pkg' },
    { ingredient_name: 'Frozen Peas' , ingredient_unit: 'pkg' },
    { ingredient_name: 'Frozen Carrots' , ingredient_unit: 'pkg' },
    { ingredient_name: 'Milk' , ingredient_unit: 'cups' },
    { ingredient_name: 'Broth' , ingredient_unit: 'cups' },
    { ingredient_name: 'Flour' , ingredient_unit: 'tblspn' },
    { ingredient_name: 'Butter' , ingredient_unit: 'tblspn' },
    { ingredient_name: 'Salt & Pepper' , ingredient_unit: 'tblspn' },
    { ingredient_name: 'Spices' , ingredient_unit: 'tblspn' },
    { ingredient_name: 'Water' , ingredient_unit: 'cup' },
    { ingredient_name: 'Rice' , ingredient_unit: 'cups' },
]

const step_ingredients = [
    //Fridge Fajita
    { step_id: 1, ingredient_id: 1, quantity: 3},
    { step_id: 2, ingredient_id: 3, quantity: 2},
    { step_id: 4, ingredient_id: 2, quantity: 2},
    { step_id: 4, ingredient_id: 14, quantity: 2},
    { step_id: 5, ingredient_id: 4, quantity: 16},
    { step_id: 6, ingredient_id: 12, quantity: 1},
    { step_id: 6, ingredient_id: 5, quantity: 1},
    //Pot Pie
    { step_id: 7, ingredient_id: 12, quantity: 2},
    { step_id: 8, ingredient_id: 11, quantity: 3},
    { step_id: 9, ingredient_id: 9, quantity: 2},
    { step_id: 10, ingredient_id: 10, quantity: 1},
    { step_id: 11, ingredient_id: 13, quantity: 1},
    { step_id: 12, ingredient_id: 2, quantity: 2},
    { step_id: 12, ingredient_id: 8, quantity: 0.5},
    { step_id: 12, ingredient_id: 7, quantity: 0.5},
    { step_id: 13, ingredient_id: 6, quantity: 1},
    //Peas & Rice
    { step_id: 16, ingredient_id: 3, quantity: 2},
    { step_id: 17, ingredient_id: 7, quantity: 0.5},
    { step_id: 17, ingredient_id: 13, quantity: 1},
    { step_id: 17, ingredient_id: 14, quantity: 1},
    { step_id: 18, ingredient_id: 15, quantity: 6},
    { step_id: 19, ingredient_id: 16, quantity: 3},

]

const steps = [
    //Fridge Fajits
    { step_text: 'Slice Bell Peppers and Onions', step_number: 1, recipe_id: 1 },
    { step_text: 'Heat oil in pan', step_number: 2, recipe_id: 1 },
    { step_text: 'Add Peppers and Onions, cook until Peppers are soft and onions are clear', step_number: 3, recipe_id: 1 },
    { step_text: 'Add Leftover Meat, chopped or shredded, add spices', step_number: 4, recipe_id: 1 },
    { step_text: 'Melt Queso', step_number: 5, recipe_id: 1 },
    { step_text: 'In seperate pan, butter one side of your tortilla, lay the buttered side on the pan, spoon over Peppers Onions and Meat, then drizzle Queso. Fold over tortilla and toast lightly', step_number: 6, recipe_id: 1 },
    //Pot Pie
    { step_text: 'Melt Butter in pan', step_number: 1, recipe_id: 2 },
    { step_text: 'Add Flour and whisk, let flour brown for 2 minutes', step_number: 2, recipe_id: 2 },
    { step_text: 'Slowly whisk in milk, small amounts and let it combine and thicken before adding more', step_number: 3, recipe_id: 2 },
    { step_text: 'Slowly add broth in the same meathod as the milk', step_number: 4, recipe_id: 2 },
    { step_text: 'Salt and Pepper to taste', step_number: 5, recipe_id: 2 },
    { step_text: 'Add Leftover Meat, Peas & Carrots', step_number: 6, recipe_id: 2 },
    { step_text: 'Line pan with pre-made pie crust, put the pan in the oven while it pre-heats to allow bottom to begin cooking', step_number: 7, recipe_id: 2 },
    { step_text: 'Take the pan out before the crust begins to brown, add the filling and cover it with top crust. Put 4-5 holes in top crust', step_number: 8, recipe_id: 2 },
    { step_text: 'Return pie to oven. Let cook until all crust is fully done and beginning to brown.', step_number: 9, recipe_id: 2 },
    //Peas & Rice
    { step_text: 'Heat Oil in pan', step_number: 1, recipe_id: 3 },
    { step_text: 'Add Peas, Spices, Salt & Pepper to the oil. Cook until Peas begin to brown but not burn', step_number: 2, recipe_id: 3 },
    { step_text: 'Add Water and bring to a boil', step_number: 3, recipe_id: 3 },
    { step_text: 'Add Rice and return to boil, then reduce heat and cover', step_number: 4, recipe_id: 3 },
    { step_text: 'Cook until all water is gone and rice is tender, do not fluff during cooking', step_number: 5, recipe_id: 3 },
]

exports.seed = async function (knex) {
    await knex ('recipes').insert(recipes)
    await knex ('ingredients').insert(ingredients)
    await knex ('steps').insert(steps)
    await knex ('step_ingredients').insert(step_ingredients)    
}