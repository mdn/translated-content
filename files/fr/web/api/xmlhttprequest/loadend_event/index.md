---
title: GlobalEventHandlers.onloadend
slug: Web/API/XMLHttpRequest/loadend_event
---

{{ApiRef}}

La propriété **`onloadend`** du "mixin" {{domxref("GlobalEventHandlers")}} Un gestionnaire d'évènement représentant le code à appeler lorsque l'évènement `loadend` est déclenché (quand la progression est arrêtée sur le chargement d'une ressource).

## Syntaxe

```js
img.onloadend = funcRef;
```

### Valeur

`funcRef` est la fonction du gestionnaire à appeler quand l'évènement `loadend` de la ressource est déclenché.

## Exemples

### Contenu HTML

```html
<img src="myImage.jpg" />
```

### Contenu JavaScript

```js
// 'loadstart' est le premier lancé, puis 'load', puis 'loadend'

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
