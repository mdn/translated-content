---
title: Date.prototype.setDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setDate
---

{{JSRef}}

La méthode **`setDate()`** définit le jour du mois (relatif au début du mois courant) pour une date donnée.

{{InteractiveExample("JavaScript Demo: Date.setDate()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

event.setDate(24);

console.log(event.getDate());
// Expected output: 24

event.setDate(32);
// Only 31 days in August!

console.log(event.getDate());
// Expected output: 1
```

## Syntaxe

```js
dateObj.setDate(valeurJour);
```

### Paramètres

- `valeurJour`
  - : Un entier représentant le jour du mois.

### Valeur de retour

Le nombre de millisecondes écoulées entre le premier janvier 1970 00:00:00 UTC et la date résultante (l'objet {{jsxref("Date")}} est également modifié).

## Description

Si la `valeurJour` est en dehors des limites du mois courant, `setDate()` mettra à jour l'objet {{jsxref("Date")}} en conséquence.

Par exemple, si 0 est fourni pour `valeurJour`, la date sera défini sur le dernier jour du mois précédent.

Si on fournit un nombre négatif, la date sera déterminée à rebours à partir du dernier jour du mois précédent. Ainsi, avec -1, on obtiendrait la veille du dernier jour du mois précédent.

## Exemples

### Utiliser `setDate()`

```js
var theBigDay = new Date(1962, 6, 7); // 1962-07-06T23:00:00.000Z
theBigDay.setDate(24); // 1962-07-23T23:00:00.000Z
theBigDay.setDate(32); // 1962-07-31T23:00:00.000Z
theBigDay.setDate(22); // 1962-08-21T23:00:00.000Z
theBigDay.setDate(0); // 1962-07-30T23:00:00.000Z
theBigDay.setDate(98); // 1962-10-05T23:00:00.000Z
theBigDay.setDate(-50); // 1962-08-10T23:00:00.000Z
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.getDate()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
