---
title: Date.prototype.toUTCString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toUTCString
---

{{JSRef}}

La méthode **`toUTCString()`** convertit une date en une chaîne de caractères, selon le fuseau horaire UTC.

{{EmbedInteractiveExample("pages/js/date-toutcstring.html")}}

## Syntaxe

```js
dateObj.toUTCString();
```

### Valeur de retour

Une chaîne de caractères représentant la date indiquée selon le fuseau horaire UTC.

## Description

La valeur renvoyée par `toUTCString()` est un texte au même format que celui renvoyé {{jsxref("Date.prototype.toString()")}} mais sans décalage de fuseau horaire (en UTC).

Avant ECMAScript 2018, le format de la valeur renvoyée pouvait varier selon les plateformes. La valeur la plus couramment renvoyée était une date formatée selon la RFC 1123, qui est une version mise à jour de la RFC 822.

## Exemples

### Utiliser `toUTCString()`

```js
var aujourdhui = new Date();
var UTCstring = aujourdhui.toUTCString();
// Mon, 03 Jul 2006 21:44:38 GMT
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toISOString()")}}
