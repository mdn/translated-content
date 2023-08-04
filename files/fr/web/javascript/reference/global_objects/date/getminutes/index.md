---
title: Date.prototype.getMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMinutes
---

{{JSRef}}

La méthode **`getMinutes()`** renvoie les minutes pour la date renseignée d'après l'heure locale.

{{EmbedInteractiveExample("pages/js/date-getminutes.html")}}

## Syntaxe

```js
dateObj.getMinutes();
```

### Valeur de retour

La valeur renvoyée par `getMinutes` est un entier entre 0 et 59 représentant le nombre de minutes pour la date indiquée, selon l'heure locale.

## Exemples

### Utiliser `getMinutes()`

La seconde instruction ci-dessous assigne la valeur 15 à la variable `minutes`, selon la valeur de l'objet {{jsxref("Date")}} `noel95`.

```js
var noel95 = new Date("December 25, 1995 23:15:00");
var minutes = noel95.getMinutes();

console.log(minutes); //15
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}
