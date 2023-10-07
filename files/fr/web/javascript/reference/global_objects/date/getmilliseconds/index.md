---
title: Date.prototype.getMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds
---

{{JSRef}}

La méthode **`getMilliseconds()`** renvoie les millièmes de secondes de la date renseignée d'après l'heure locale.

{{EmbedInteractiveExample("pages/js/date-getmilliseconds.html")}}

## Syntaxe

```js
dateObj.getMilliseconds();
```

### Valeur de retour

Un nombre entre 0 et 999 indiquant le nombre de millisecondes pour la date indiquée, selon l'heure locale.

## Exemples

### Utiliser `getMilliseconds()`

L'exemple suivant assigne la partie des millièmes de secondes de l'heure courante à la variable `ms`.

```js
var aujd = new Date();
var ms = aujd.getMilliseconds();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
