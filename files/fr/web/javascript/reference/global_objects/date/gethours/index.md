---
title: Date.prototype.getHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getHours
---

{{JSRef}}

La méthode **`getHours()`** renvoie l'heure pour la date renseignée, d'après l'heure locale.

{{EmbedInteractiveExample("pages/js/date-gethours.html")}}

## Syntaxe

```js
dateObj.getHours();
```

### Valeur de retour

Un entier, compris entre 0 et 23 qui indique l'heure de la date indiquée selon l'heure locale.

## Exemples

### Utiliser `getHours()`

La seconde instruction ci-dessous assigne la valeur 23 à la variable `heure`, selon la valeur de l'objet {{jsxref("Date")}} `noel95`.

```js
var noel95 = new Date("December 25, 1995 23:15:00");
var heure = noel95.getHours();

console.log(heure); //23
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
