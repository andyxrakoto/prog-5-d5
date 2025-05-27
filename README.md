# ☕ BrewMaster - Coffee Vending 

**BrewMaster** est une maquette logicielle d’un distributeur automatique de café. L’objectif est de représenter les fonctionnalités essentielles d’une vraie machine à café via une structure claire, modulaire et évolutive.

---

## 🚧 En cours de conception

> Ce projet est uniquement destiné à des fins d’analyse et de modélisation. Il n’est pas fonctionnel, mais sert de base à la réflexion autour d’un système interactif simple.

---

## 📚 Cas d'utilisation prévus

Voici les interactions de base prises en compte dans ce modèle :

- **Paiement** – Insérer un jeton ou effectuer un paiement virtuel.
- **Choix du café** – Sélectionner une boisson parmi celles proposées.
- **Distribution** – Récupérer la boisson préparée automatiquement.

---

## 🔁 Logique générale

[Étape 1] Payer
↓
[Étape 2] Sélectionner un café
↓
[Étape 3] Récupérer le café


---

## ⚙️ Fonctionnalités simulées

### Paiement
- Acceptation de différentes méthodes de paiement.
- Détection d’inactivité (expiration du délai d’attente).

### Choix de boisson
- Vérification que l’option choisie est disponible.
- Gestion du stock et des options valides.

### Livraison
- Préparation et service du café si toutes les conditions sont réunies.
- Mise à jour du stock interne après chaque commande.

---

## ❌ Gestion des erreurs prévues

| Erreur                   | Déclenchement                                                      |
|--------------------------|---------------------------------------------------------------------|
| `TimeoutAfterPayment`    | Aucune sélection effectuée dans le temps imparti après paiement.   |
| `InvalidSelectionError`  | L’utilisateur a choisi une option inexistante ou indisponible.     |
| `EmptyStockError`        | Le café sélectionné est en rupture de stock.                       |

---

## 🧩 Structure orientée objet

### Modules principaux

- `PaymentHandler` : Gère les paiements et la détection de délai.
- `SelectionManager` : Affiche les cafés disponibles et valide les choix.
- `DeliveryUnit` : S’occupe de la distribution et de la mise à jour du stock.
- `ErrorController` : Centralise la détection et la gestion des anomalies système.

---

Ce projet ne prévoit pas d’intégration externe. Il est conçu comme un exercice de réflexion/conception.

---
