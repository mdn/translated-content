---
title: String.prototype.sub()
slug: Web/JavaScript/Reference/Global_Objects/String/sub
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/sub
original_slug: Web/JavaScript/Reference/Objets_globaux/String/sub
---
{{JSRef}}{{deprecated_header}}

La méthode **`sub()`** crée un élément HTML {{HTMLElement("sub")}} qui entraîne l'affichage de la chaîne en indice.

## Syntaxe

```js
str.sub()
```

### Valeur de retour

Une chaîne de caractères représentant un élément HTML {{HTMLElement("sub")}}.

## Description

La méthode `sub` encapsule une chaîne dans une balise `<sub>` :
`"<sub>str</sub>`".

## Exemples

L'exemple suivant utilise les méthodes `sub()` et {{jsxref("String.prototype.sup()", "sup()")}} pour mettre en forme une chaîne :

```js
var superText = "exposant";
var subText = "indice";

console.log("Ceci illustre l'affichage d'un texte en " + superText.sup() + ".");
// "Ceci illustre l'affichage d'un texte en <sup>expostant</sup>

console.log("Ceci illustre l'affichage d'un texte en " + subText.sub() + ".");
// "Ceci illustre l'affichage d'un texte en <sub>indice</sub>
```

## Spécifications

| Spécification                                                                                        | État                         | Commentaire                                                                                                                                                       |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES6', '#sec-string.prototype.sub', 'String.prototype.sub')}}     | {{Spec2('ES6')}}         | Définition initiale. Implementée avec JavaScript 1.0. Définie dans l'annexe B (normative) des fonctionnalités ECMAScript additionnelles pour les navigateurs web. |
| {{SpecName('ESDraft', '#sec-string.prototype.sub', 'String.prototype.sub')}} | {{Spec2('ESDraft')}} | Définie dans l'annexe B (normative) des fonctionnalités ECMAScript additionnelles pour les navigateurs web.                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.sub")}}

## Voir aussi

- {{jsxref("String.prototype.sup()")}}
