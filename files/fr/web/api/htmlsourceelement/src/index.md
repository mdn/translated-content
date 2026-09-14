---
title: "HTMLSourceElement : propriété src"
short-title: src
slug: Web/API/HTMLSourceElement/src
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("HTML DOM")}}

La propriété **`src`** de l'interface {{DOMxRef("HTMLSourceElement")}} est une chaîne de caractères indiquant l'URL d'une ressource média à utiliser comme source pour l'élément.

Elle reflète l'attribut `src` de l'élément HTML {{HTMLElement("source")}} imbriqué dans un élément HTML {{HTMLElement("audio")}} ou {{HTMLElement("video")}}. Elle n'a pas de sens et est ignorée lorsqu'elle est imbriquée dans un élément HTML {{HTMLElement("picture")}}.

## Valeur

Une chaîne de caractères&nbsp;; l'URL d'une ressource source à utiliser dans l'élément.

## Exemples

```html
<video>
  <source
    id="el"
    src="large.webp"
    type="video/webp"
    media="screen and (600px <= width <= 800px)" />
</video>
```

```js
const el = document.getElementById("el");
console.log(el.src); // Affiche : "large.webp"
el.src = "medium.webp"; // Met à jour la valeur de src
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLSourceElement.type")}}
- La propriété {{DOMxRef("HTMLSourceElement.srcset")}}
- La propriété {{DOMxRef("HTMLSourceElement.media")}}
- La propriété {{DOMxRef("HTMLSourceElement.sizes")}}
- L'élément HTML {{HTMLElement("source")}}
- L'élément HTML {{HTMLElement("audio")}}
- L'élément HTML {{HTMLElement("video")}}
