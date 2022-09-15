---
title: String.prototype.italics()
slug: Web/JavaScript/Reference/Global_Objects/String/italics
tags:
  - Déprécié
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/italics
original_slug: Web/JavaScript/Reference/Objets_globaux/String/italics
---
{{JSRef}}{{deprecated_header}}

La méthode **`italics()`** permet de créer un élément HTML {{HTMLElement("i")}} qui permet de représenter la chaîne courante en italique.

## Syntaxe

```js
str.italics()
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

| Spécification                                                                                                    | État                         | Commentaires                                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES6', '#sec-string.prototype.italics', 'String.prototype.italics')}}     | {{Spec2('ES6')}}         | Définition initiale. Implémentée dans JavaScript 1.0. Définie dans l'annexe B (normative) pour les fonctionnalités ECMAScript additionnelles pour les navigateurs web. |
| {{SpecName('ESDraft', '#sec-string.prototype.italics', 'String.prototype.italics')}} | {{Spec2('ESDraft')}} | Définie dans l'annexe B (normative) pour les fonctionnalités ECMAScript additionnelles pour les navigateurs web.                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.italics")}}

## Voir aussi

- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.strike()")}}
