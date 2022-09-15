---
title: String.prototype.big()
slug: Web/JavaScript/Reference/Global_Objects/String/big
tags:
  - Dépréciée
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/big
original_slug: Web/JavaScript/Reference/Objets_globaux/String/big
---
{{JSRef}}{{deprecated_header}}

La méthode **`big()`** crée un élément HTML {{HTMLElement("big")}} qui affichera la chaine de caractères avec une taille de police importante.

> **Note :** L'élément `<big>` a été retiré de [HTML5](/fr/docs/Web/Guide/HTML/HTML5) et ne doit pas être utilisé. À la place, les développeurs web doivent utiliser les propriétés [CSS](/fr/docs/Web/CSS).

## Syntaxe

```js
str.big()
```

### Valeur de retour

Une chaîne de caractères qui représente un élément HTML {{HTMLElement("big")}}.

## Description

La méthode `big()` place la chaine de caractères dans une balise `<big>` :
`"<big>str</big>`"

## Exemples

L'exemple suivant montre les méthodes de `String` pour changer la taille d'une chaine de caractères :

```js
var chaîneMonde = "Coucou monde";

console.log( chaîneMonde.small()     ); // <small>Coucou monde</small>
console.log( chaîneMonde.big()       ); // <big>Coucou monde</big>
console.log( chaîneMonde.fontsize(7) ); // <fontsize=7>Coucou monde</fontsize>
```

Avec l'objet {{domxref("HTMLElement.style", "element.style")}}, il est possible d'accéder à l'attribut `style` de l'élément et de le manipuler. Par exemple :

```js
document.getElementById('idÉlément').style.fontSize = '2em'
```

## Spécifications

| Spécification                                                                                        | État                         | Commentaires                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES6', '#sec-string.prototype.big', 'String.prototype.big')}}     | {{Spec2('ES6')}}         | Définition initiale. Implémentée dans JavaScript 1.0. Définie dans l'annexe normative pour les fonctionnalités supplémentaires des navigateurs web. |
| {{SpecName('ESDraft', '#sec-string.prototype.big', 'String.prototype.big')}} | {{Spec2('ESDraft')}} | Définie dans l'annexe B (normative) pour les fonctionnalités ECMAScript supplémentaires des navigateurs web.                                        |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.big")}}

## Voir aussi

- {{jsxref("String.prototype.fontsize()")}}
- {{jsxref("String.prototype.small()")}}
