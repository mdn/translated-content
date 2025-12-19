---
title: "HTMLEmbedElement : propriété src"
short-title: src
slug: Web/API/HTMLEmbedElement/src
l10n:
  sourceCommit: a0460b9c26f5ad9b8bbc9cc569f4fdd8058aec8f
---

{{APIRef("HTML DOM")}}

La propriété **`src`** de l'interface {{DOMxRef("HTMLEmbedElement")}} retourne une chaîne de caractères indiquant l'URL de la ressource intégrée.

Elle reflète l'attribut `src` de l'élément HTML {{HTMLElement("embed")}}.

## Valeur

Une chaîne de caractères.

## Exemples

```html
<embed
  id="el"
  type="video/quicktime"
  src="movie.mov"
  width="640"
  height="480"
  title="Titre de ma vidéo" />
```

```js
const el = document.getElementById("el");
console.log(el.src); // Sortie : "movie.mov"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
