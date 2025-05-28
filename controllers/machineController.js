import { processPayment } from '../services/paymentService.js';
import { chooseCoffee } from '../services/coffeeService.js';
import { distributeCoffee } from '../services/distributionService.js';

export function runMachine(state, payment, coffeeChoice) {
  try {
    processPayment(payment, state);
    chooseCoffee(coffeeChoice, state);
    distributeCoffee();
    console.log('🔁 Fin de l’opération.');
  } catch (error) {
    console.error(`❌ Erreur : ${error.message}`);
  }
}
