---
title: String.prototype.strike()
slug: Web/JavaScript/Reference/Global_Objects/String/strike
---

{{JSRef}}{{deprecated_header}}

La méthode **`strike()`** permet de créer un élément HTML {{HTMLElement("strike")}} qui permet d'afficher la chaîne comme un texte barré.

## Syntaxe

```js
str.strike();
```

### Valeur de retour

Une chaîne de caractères représentant un élément HTML {{HTMLElement("strike")}}.

## Description

Cette méthode encadre la chaîne de caractères dans une balise `<strike>` :
`"<strike>str</strike>`"

## Exemples

Les méthodes suivantes peuvent être utilisées pour modifier le formatage d'une chaîne de caractères :

```js
var worldString = "Coucou monde";

console.log(worldString.blink());
console.log(worldString.bold());
console.log(worldString.italics());
console.log(worldString.strike());
```

Cela produira le code HTML suivant dans la console :

```html
<blink>Coucou monde</blink>
<b>Coucou monde</b>
<i>Coucou monde</i>
<strike>Coucou monde</strike>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
