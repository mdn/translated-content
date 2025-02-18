---
title: Date.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
---

{{JSRef}}

La méthode **`toJSON()`** renvoie une chaîne représentant l'objet {{jsxref("Date")}} sous forme {{Glossary("JSON")}}

{{InteractiveExample("JavaScript Demo: Date.toJSON()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30 UTC");

const jsonDate = event.toJSON();

console.log(jsonDate);
// Expected output: "1975-08-19T23:15:30.000Z"

console.log(new Date(jsonDate).toUTCString());
// Expected output: "Tue, 19 Aug 1975 23:15:30 GMT"
```

## Syntaxe

```js
dateObj.toJSON();
```

### Valeur de retour

Une chaîne de caractères représentant la date indiquée.

## Description

Les instances de {{jsxref("Date")}} identifient un instant précis dans le temps. Appeler `toJSON()` renvoie une chaîne de caractères formatée en JSON (en utilisant {{jsxref("Date.prototype.toISOString", "toISOString()")}}), représentant la valeur de l'objet `Date`. Cette méthode est généralement utilisée, par défaut, pour sérialiser les objets `Date` lors d'une sérialisation au format JSON.

## Exemple

### Utiliser `toJSON()`

```js
var jsonDate = new Date().toJSON();
var retourVersDate = new Date(jsonDate);

console.log(jsonDate); //2015-10-26T07:46:36.611Z
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
