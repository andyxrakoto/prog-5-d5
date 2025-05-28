export function chooseCoffee(type, state) {
    const price = state.menu[type];
    if (!price) throw new Error('Café non disponible');
    if (state.moneyInserted < price) throw new Error('Fonds insuffisants');
  
    if (
      state.ingredients.water <= 0 ||
      state.ingredients.coffee <= 0 ||
      state.ingredients.cups <= 0
    ) {
      throw new Error('Ingrédients insuffisants');
    }
  
    state.moneyInserted -= price;
    state.ingredients.water--;
    state.ingredients.coffee--;
    state.ingredients.cups--;
    console.log(`☕ Préparation du ${type}...`);
  }
  