---
title: "HTMLSourceElement : propriété sizes"
short-title: sizes
slug: Web/API/HTMLSourceElement/sizes
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("HTML DOM")}}

La propriété **`sizes`** de l'interface {{DOMxRef("HTMLSourceElement")}} est une chaîne de caractères représentant une liste d'une ou plusieurs tailles, correspondant aux tailles entre les points de rupture, auxquelles la ressource s'applique.

Elle reflète l'attribut `sizes` de l'élément HTML {{HTMLElement("source")}}.

## Valeur

Une chaîne de caractères.

## Exemples

```html
<picture>
  <source
    id="el"
    srcset="medium-pic.jpg"
    type="image/jpeg"
    sizes="(50em <= width <= 60px) 50em,
           (30em <= width < 50em) 30em" />
</picture>
```

```js
const el = document.getElementById("el");
console.log(el.sizes); // Affiche : "(50em <= width <= 60px) 50em, (30em <= width < 50em) 30em"
el.sizes = "(50em <= width <= 60px) 100em, (30em <= width < 50em) 60em"; // Met à jour la valeur de sizes
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLImageElement.sizes")}}
- La propriété {{DOMxRef("HTMLSourceElement.media")}}
- La propriété {{DOMxRef("HTMLSourceElement.type")}}
- La propriété {{DOMxRef("HTMLSourceElement.src")}}
- La propriété {{DOMxRef("HTMLSourceElement.srcset")}}
- L'élément HTML {{HTMLElement("source")}}
- L'élément HTML {{HTMLElement("picture")}}
- L'élément HTML {{HTMLElement("audio")}}
- L'élément HTML {{HTMLElement("video")}}
