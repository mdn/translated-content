---
title: String.prototype.sup()
slug: Web/JavaScript/Reference/Global_Objects/String/sup
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/sup
original_slug: Web/JavaScript/Reference/Objets_globaux/String/sup
---
{{JSRef}} {{deprecated_header}}

La méthode **`sup()`** crée un élément HTML {{HTMLElement("sup")}} qui entraîne l'affichage de la chaîne en exposant.

## Syntaxe

    str.sup()

### Valeur de retour

Une chaîne de caractères représentant un élément HTML {{HTMLElement("sup")}}.

## Description

La méthode `sup` encapsule une chaîne dans une balise `<sup>` :
`"<sup>str</sup>`".

## Exemples

L'exemple suivant utilise les méthodes {{jsxref("String.prototype.sub()", "sub()")}} et `sup` pour mettre en forme une chaîne :

```js
var superText = "exposant";
var subText = "indice";

console.log("Ceci illustre l'affichage d'un texte en " + superText.sup() + ".");
// Ceci illustre l'affichage d'un texte en <sup>exposant</sup>.
console.log("Ceci illustre l'affichage d'un texte en " + subText.sub() + ".");
Ceci illustre l'affichage d'un texte en <sub>indice</sub>.
```

## Spécifications

| Spécification                                                                                        | État                         | Commentaires                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES6', '#sec-string.prototype.sup', 'String.prototype.sup')}}     | {{Spec2('ES6')}}         | Définition initiale. Implémentée avec JavaScript 1.0. Définie dans l'annexe B (normative) pour les fonctionnalités ECMAScript additionnelles des navigateurs web. |
| {{SpecName('ESDraft', '#sec-string.prototype.sup', 'String.prototype.sup')}} | {{Spec2('ESDraft')}} | Définition initiale. Implémentée avec JavaScript 1.0. Définie dans l'annexe B (normative) pour les fonctionnalités ECMAScript additionnelles des navigateurs web. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.sup")}}

## Voir aussi

- {{jsxref("String.prototype.sub()")}}
