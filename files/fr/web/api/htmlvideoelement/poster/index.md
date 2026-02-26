---
title: "HTMLVideoElement : propriété poster"
short-title: poster
slug: Web/API/HTMLVideoElement/poster
l10n:
  sourceCommit: 85e913af9f01e216149d3381586eb0c784fefff7
---

{{APIRef("HTML DOM")}}

La propriété **`poster`** de l'interface {{DOMxRef("HTMLVideoElement")}} est une chaîne de caractères qui reflète l'URL d'une image à afficher lorsqu'aucune donnée vidéo n'est disponible. Si la propriété ne représente pas une URL valide, aucune image d'affiche ne sera affichée.

Elle reflète l'attribut `poster` de l'élément HTML {{HTMLElement("video")}}.

## Valeur

Une chaîne de caractères.

## Exemples

```html
<video
  id="media"
  src="https://exemple.com/video.mp4"
  poster="https://exemple.com/poster.jpg"></video>
```

```js
const el = document.getElementById("media");
console.log(el.poster); // Affiche : "https://exemple.com/poster.jpg"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
