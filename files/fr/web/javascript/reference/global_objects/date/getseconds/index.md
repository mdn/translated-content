---
title: Date.prototype.getSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getSeconds
---

{{JSRef}}

La méthode **`getSeconds()`** renvoie les secondes pour la date renseignée d'après l'heure locale.

{{EmbedInteractiveExample("pages/js/date-getseconds.html")}}

## Syntaxe

```js
dateObj.getSeconds();
```

### Valeur de retour

La valeur renvoyée par `getSeconds()` est un entier entre 0 et 59 correspondant au nombre de secondes pour la date donnée selon l'heure locale.

## Exemples

### Utiliser `getSeconds()`

La seconde instruction ci-dessous assigne la valeur 30 à la variable `secondes`, selon la valeur de l'objet {{jsxref("Date")}} `noel95`.

```js
var noel95 = new Date("December 25, 1995 23:15:30");
var secondes = noel95.getSeconds();

console.log(secondes); //30
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
