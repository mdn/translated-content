---
title: GlobalEventHandlers.onloadstart
slug: Web/API/HTMLMediaElement/loadstart_event
---

{{ApiRef}}

La propriété **`onloadstart`** du "mixin" {{domxref("GlobalEventHandlers")}} Un gestionnaire d'évènement représentant le code à appeler lorsque l'évènement `loadstart` est déclenché (quand la progression est commencée sur le chargement d'une ressource).

## Syntaxe

```js
img.onloadstart = funcRef;
```

### Valeur

`funcRef` est la fonction du gestionnaire à appeler lorsque l'évènement `loadstart` de la ressource est déclenché.

## Exemples

### Contenu HTML

```html
<img src="myImage.jpg" />
```

### Contenu JavaScript

```js
// 'loadstart' est lancé le premier, puis 'load', puis 'loadend'

image.addEventListener("load", function (e) {
  console.log("Image loaded");
});

image.addEventListener("loadstart", function (e) {
  console.log("Image load started");
});

image.addEventListener("loadend", function (e) {
  console.log("Image load finished");
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
