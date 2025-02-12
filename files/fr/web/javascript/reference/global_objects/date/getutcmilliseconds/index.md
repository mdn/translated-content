---
title: Date.prototype.getUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
---

{{JSRef}}

La méthode **`getUTCMilliseconds()`** renvoie les millièmes de secondes pour la date renseignée selon UTC.

{{InteractiveExample("JavaScript Demo: Date.getUTCMilliseconds()")}}

```js interactive-example
const exampleDate = new Date("2018-01-02T03:04:05.678Z"); // 2 January 2018, 03:04:05.678 (UTC)

console.log(exampleDate.getUTCMilliseconds());
// Expected output: 678
```

## Syntaxe

```js
dateObj.getUTCMilliseconds();
```

### Valeur de retour

Un entier entre 0 et 999 correspondant au nombre de millisecondes pour la date indiquée, selon le temps universel.

> [!NOTE]
> Le résultat de cette méthode n'est pas le temps "Epoch". Si on veut obtenir le nombre de millisecondes depuis le premier janvier 1970, on utilisera la méthode {{jsxref("Date.prototype.getTime()")}}.

## Exemples

### Utiliser `getUTCMilliseconds()`

L'exemple suivant assigne les millièmes de secondes pour la date actuelle à la variable `ms`.

```js
var aujourdhui = new Date();
var ms = aujourdhui.getUTCMilliseconds();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
