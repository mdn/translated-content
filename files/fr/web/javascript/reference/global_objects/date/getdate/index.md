---
title: Date.prototype.getDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDate
---

{{JSRef}}

La méthode **`getDate()`** retourne le jour du mois pour la date spécifiée d'après l'heure locale.

{{InteractiveExample("JavaScript Demo: Date.getDate()")}}

```js interactive-example
const birthday = new Date("August 19, 1975 23:15:30");
const date1 = birthday.getDate();

console.log(date1);
// Expected output: 19
```

## Syntaxe

```js
dateObj.getDate();
```

### Paramètres

Aucun.

### Valeur de retour

Un entier entre 1 et 31 correspondant au jour du mois de la date indiquée selon l'heure locale.

## Exemples

### Utiliser `getDate()`

La seconde instruction ci-dessous affecte la valeur 25 à la variable `jour`, d'après la valeur de l'objet {{jsxref("Date")}} `Noel95`.

```js
var Noel95 = new Date("December 25, 1995 23:15:00");
var jour = Noel95.getDate();

console.log(jour); // 25
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
