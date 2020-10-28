import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/mealsAction";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
};

const mealReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
          const index = state.favoriteMeals.findIndex(
            (meal) => meal.id === action.mealId
          );
          const favMeals = [...state.favoriteMeals];
          if (index >= 0) {
            favMeals.splice(index, 1);
          } else {
            favMeals.push(state.meals.find((meal) => meal.id === action.mealId));
          }
          return {
            ...state,
            favoriteMeals: favMeals,
          };
        default:
          return state;
    }
};

export default mealReducer;
