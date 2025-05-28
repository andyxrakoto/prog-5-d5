export function processPayment(amount, state) {
    if (amount <= 0) throw new Error('Montant invalide');
    state.moneyInserted += amount;
    console.log(`💰 Paiement accepté: ${amount}€`);
  }
  