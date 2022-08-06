---
title: String.prototype.strike()
slug: Web/JavaScript/Reference/Global_Objects/String/strike
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/strike
original_slug: Web/JavaScript/Reference/Objets_globaux/String/strike
---
{{JSRef}}{{deprecated_header}}

La méthode **`strike()`** permet de créer un élément HTML {{HTMLElement("strike")}} qui permet d'afficher la chaîne comme un texte barré.

## Syntaxe

```js
str.strike()
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

| Spécification                                                                                                | État                         | Commentaires                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES6', '#sec-string.prototype.strike', 'String.prototype.strike')}}     | {{Spec2('ES6')}}         | Définition initiale. Implémentée dans JavaScript 1.0. Définie dans l'annexe B (normative) pour les fonctionnalités ECMAScript additionnelles pour les navigateurs web. |
| {{SpecName('ESDraft', '#sec-string.prototype.strike', 'String.prototype.strike')}} | {{Spec2('ESDraft')}} | Définie dans l'annexe B (normative) pour les fonctionnalités ECMAScript additionnelles pour les navigateurs web.                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.strike")}}

## Voir aussi

- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
