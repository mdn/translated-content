---
title: String.prototype.fixed()
slug: Web/JavaScript/Reference/Global_Objects/String/fixed
tags:
  - Déprécié
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/fixed
original_slug: Web/JavaScript/Reference/Objets_globaux/String/fixed
---
{{JSRef}}{{deprecated_header}}

La méthode **`fixed()`** permet de créer un élément HTML {{HTMLElement("tt")}}, ce qui permet d'afficher le texte de la chaîne de caractère dans une fonte à chasse fixe.

## Syntaxe

    str.fixed()

### Valeur de retour

Une chaîne de caractères représentant un élément HTML {{HTMLElement("tt")}}.

## Description

La méthode `fixed()` encadre une chaîne de caractères dans une balise `<tt>` :
`"<tt>str</tt>`"

## Exemples

L'exemple suivant illustre l'utilisation de la méthode `fixed` pour formater une chaîne de caractères :

```js
var worldString = "Coucou monde";

console.log(worldString.fixed());
// "<tt>Coucou monde</tt>"
```

## Spécifications

| Spécification                                                                                                | État                         | Commentaires                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES6', '#sec-string.prototype.fixed', 'String.prototype.fixed')}}         | {{Spec2('ES6')}}         | Définition initiale. Implémentée dans JavaScript 1.0. Définie dans l'annexe B (normative) pour les fonctionnalités ECMAScript additionnelles pour les navigateurs web. |
| {{SpecName('ESDraft', '#sec-string.prototype.fixed', 'String.prototype.fixed')}} | {{Spec2('ESDraft')}} | Définie dans l'annexe B (normative) pour les fonctionnalités ECMAScript additionnelles pour les navigateurs web.                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.fixed")}}

## Voir aussi

- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
