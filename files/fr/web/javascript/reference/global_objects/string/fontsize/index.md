---
title: String.prototype.fontsize()
slug: Web/JavaScript/Reference/Global_Objects/String/fontsize
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/fontsize
original_slug: Web/JavaScript/Reference/Objets_globaux/String/fontsize
---
{{JSRef}}{{deprecated_header}}

La propriété **`fontsize()`** permet de créer un élément HTML {{HTMLElement("font")}} qui permet d'afficher la chaîne de caractères dans une fonte de taille donnée.

> **Note :** L'élément \<font> a été retiré dans [HTML5](/fr/docs/Web/Guide/HTML/HTML5) et ne devrait plus être utilisé. Les propriétés [CSS](/fr/docs/Web/CSS) permettent de modifier les aspects de mise en forme et doivent donc être utilisées à la place.

## Syntaxe

```js
str.fontsize(taille)
```

### Paramètres

- `taille`
  - : Un entier compris entre 1 et 7 ou une chaîne de caractère représentant un nombre signé entre 1 et 7.

### Valeur de retour

Une chaîne de caractères représentant un élément HTML {{HTMLElement("font")}}.

## Description

Lorsque le paramètre utilisé est un entier, la taille de la chaîne `str` correspondra à l'une des 7 tailles définies. Lorsque le paramètre utilisé est une chaîne de caractères (par exemple "-2"), la taille de la fonte sera ajustée relativement à la taille définie par l'élément {{HTMLElement("basefont")}}.

## Exemples

L'exemple qui suit illustre comment utiliser les méthodes pour les chaînes de caractères afin de modifier la taille d'une chaîne de caractères :

```js
var worldString = "Coucou monde";

console.log(worldString.small()); // <small>Coucou monde</small>
console.log(worldString.big()); // <big>Coucou monde</big>
console.log(worldString.fontsize(7)); // <font size="7">Coucou monde</fontsize>
```

L'objet {{domxref("HTMLElement.style", "element.style")}} permet d'utiliser l'attribut `style` de l'élément et de le manipuler de façon générique. Par exemple :

```js
document.getElementById('IdElement').style.fontSize = '0.7em'
```

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires                                                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES6', '#sec-string.prototype.fontsize', 'String.prototype.fontsize')}}         | {{Spec2('ES6')}}         | Définition initiale. Implémentée dans JavaScript 1.0. Définie dans l'annexe B (normative) pour les fonctionnalités ECMAScript additionnelles pour les navigateurs web. |
| {{SpecName('ESDraft', '#sec-string.prototype.fontsize', 'String.prototype.fontsize')}} | {{Spec2('ESDraft')}} | Définie dans l'annexe B (normative) pour les fonctionnalités ECMAScript additionnelles pour les navigateurs web.                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.fontsize")}}

## Voir aussi

- {{jsxref("String.prototype.big()")}}
- {{jsxref("String.prototype.small()")}}
