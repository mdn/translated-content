---
title: String.prototype.italics()
slug: Web/JavaScript/Reference/Global_Objects/String/italics
---

{{JSRef}}{{deprecated_header}}

La méthode **`italics()`** permet de créer un élément HTML {{HTMLElement("i")}} qui permet de représenter la chaîne courante en italique.

## Syntaxe

```js
str.italics();
```

### Valeur de retour

Une chaîne de caractères représentant un élément HTML {{HTMLElement("i")}}.

## Description

La méthode `italics` encadre la chaîne de caractères dans une balise `<i>` :
`"<i>str</i>`"

## Exemples

Les méthodes des chaînes de caractères peuvent être utilisées pour changer le formatage d'une chaîne de caractères :

```js
var worldString = "Coucou monde";

console.log(worldString.blink());
console.log(worldString.bold());
console.log(worldString.italics());
console.log(worldString.strike());
```

Cet exemple permet de produire le fragment HTML suivant dans la console :

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
- {{jsxref("String.prototype.strike()")}}
