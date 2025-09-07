---
title: Date.prototype.toTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toTimeString
---

{{JSRef}}

La méthode **`toTimeString()`** renvoie la partie « heure » de l'objet `Date` dans un format lisible par un humain, en anglais américain.

{{InteractiveExample("JavaScript Demo: Date.toTimeString()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

console.log(event.toTimeString());
// Expected output: "23:15:30 GMT+0200 (CEST)"
// Note: your timezone may vary
```

## Syntaxe

```js
dateObj.toTimeString();
```

### Valeur de retour

Une chaîne de caractères qui représente l'heure de la date indiquée dans un format anglais américain.

## Description

Une instance de {{jsxref("Date")}} représente un instant précis dans le temps. Appeler {{jsxref("Date.toString", "toString()")}} renverra la date formatée de façon à être lisible par un humain, en anglais américain. Pour le moteur JavaScript [SpiderMonkey](/fr/docs/SpiderMonkey), ceci consiste en la partie « date » (jour, mois, année) suivie de la partie « heure » (heures, minutes, secondes, et fuseau horaire). Parfois, il est préférable d'obtenir seulement la partie « heure » ; c'est ce que renvoie la méthode `toTimeString().`

La méthode `toTimeString()` est particulièrement utile parce que les moteurs implémentant [ECMA-262](/fr/docs/Web/JavaScript/Reference/JavaScript_technologies_overview) peuvent obtenir des résultats différents avec la méthode {{jsxref("Date.prototype.toString()", "toString()")}} (en effet, le format dépend de l'implémentation). Ceci peut empêcher les manipulations de textes simples d'avoir des résultats cohérents au sein des différents moteurs/navigateurs.

## Exemple

### Utiliser `toTimeString()`

```js
var d = new Date(1993, 6, 28, 14, 39, 7);

console.log(d.toString()); // Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)
console.log(d.toTimeString()); // 14:39:07 GMT-0600 (PDT)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toString()")}}
