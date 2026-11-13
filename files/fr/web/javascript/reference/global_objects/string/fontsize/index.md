---
title: "String : méthode fontsize()"
short-title: fontsize()
slug: Web/JavaScript/Reference/Global_Objects/String/fontsize
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode **`fontsize()`** des valeurs {{JSxRef("String")}} crée une chaîne de caractères qui intègre cette chaîne de caractères dans un élément HTML {{HTMLElement("font")}} (`<font size="...">str</font>`), ce qui fait que cette chaîne de caractères est affichée dans la taille de police définie.

> [!NOTE]
> Toutes [les méthodes d'encapsulation HTML](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#méthodes_dencapsulation_html) sont obsolètes et ne sont standardisées que pour des raisons de compatibilité. Dans le cas de `fontsize()`, l'élément `<font>` lui-même a été retiré de la spécification HTML et ne doit plus être utilisé. Les développeur·euse·s web doivent utiliser les propriétés [CSS](/fr/docs/Web/CSS) à la place.

## Syntaxe

```js-nolint
fontsize(size)
```

### Paramètres

- `size`
  - : Un entier compris entre 1 et 7 ou une chaîne de caractères représentant un nombre signé entre 1 et 7.

### Valeur de retour

Une chaîne de caractères commençant par une balise de début `<font size="size">` (les guillemets doubles dans `size` sont remplacés par `&quot;`), suivie du texte `str`, et se terminant par une balise de fin `</font>`.

## Description

La méthode `fontsize()` se contente de joindre les parties de la chaîne de caractères sans aucune validation ni normalisation. Cependant, pour créer des éléments HTML {{HTMLElement("font")}} valides, lorsque vous définissez la taille sous forme d'entier, vous définissez la taille de la fonte de `str` sur l'une des 7 tailles définies. Vous pouvez définir `taille` sous forme de chaîne de caractères telle que `"-2"` ou `"+3"` pour ajuster la taille de la fonte de `str` par rapport à 3, la valeur par défaut.

## Exemples

L'exemple qui suit illustre comment utiliser les méthodes pour les chaînes de caractères afin de modifier la taille d'une chaîne de caractères&nbsp;:

```js
const contenuChaineCaracteres = "Bonjour, le monde";

document.body.innerHTML = contenuChaineCaracteres.fontsize(7);
```

Cela crée le HTML suivant&nbsp;:

```html
<font size="7">Bonjour, le monde</font>
```

> [!WARNING]
> Cette balise est invalide, car `font` n'est plus un élément valide.

Au lieu d'utiliser `fontsize()` et de créer directement du texte HTML, vous devez utiliser le CSS pour manipuler les polices. Par exemple, vous pouvez manipuler {{CSSxRef("font-size")}} avec l'attribut {{DOMxRef("HTMLElement/style", "element.style")}}&nbsp;:

```js
document.getElementById("IDdeVotreElement").style.fontSize = "7pt";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `String.prototype.fontsize` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `String.prototype.fontsize` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-string-html-methods)
- [Les méthodes d'encapsulation HTML](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#méthodes_dencapsulation_html)
- L'élément HTML {{HTMLElement("font")}}
