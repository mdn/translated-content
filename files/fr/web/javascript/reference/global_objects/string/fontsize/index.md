---
title: String.prototype.fontsize()
slug: Web/JavaScript/Reference/Global_Objects/String/fontsize
---

La propriété **`fontsize()`** permet de créer un élément HTML {{HTMLElement("font")}} qui permet d'afficher la chaîne de caractères dans une fonte de taille donnée.

> [!NOTE]
> Toutes [les méthodes d'encapsulation HTML](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#méthodes_dencapsulation_html) sont obsolètes et ne sont standardisées que pour des raisons de compatibilité. Dans le cas de `fontsize()`, l'élément `<font>` lui-même a été retiré de la spécification HTML et ne devrait plus être utilisé. Les développeur·euse·s web doivent utiliser les propriétés [CSS](/fr/docs/Web/CSS) à la place.

## Syntaxe

```js-nolint
fontsize(size)
```

### Paramètres

- `size`
  - : Un entier compris entre 1 et 7 ou une chaîne de caractères représentant un nombre signé entre 1 et 7.

### Valeur de retour

Une chaîne de caractères représentant un élément HTML {{HTMLElement("font")}}.

## Description

La méthode `fontsize()` se contente de joindre les parties de la chaîne de caractères sans aucune validation ni normalisation. Cependant, pour créer des éléments {{HTMLElement("font")}} valides, lorsque vous définissez la taille sous forme d'entier, vous définissez la taille de la fonte de `str` sur l'une des 7 tailles définies. Vous pouvez définir `taille` sous forme de chaîne de caractères telle que `"-2"` ou `"+3"` pour ajuster la taille de la fonte de `str` par rapport à 3, la valeur par défaut.

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
document.getElementById("IdElement").style.fontSize = "0.7em";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `String.prototype.fontsize` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [La prothèse d'émulation es-shims de `String.prototype.fontsize` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-string-html-methods)
- [Les méthodes d'encapsulation HTML](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#méthodes_dencapsulation_html)
- L'élément HTML {{HTMLElement("font")}}
