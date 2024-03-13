---
title: PerformanceElementTiming.intersectionRect
slug: Web/API/PerformanceElementTiming/intersectionRect
---

{{APIRef("Element Timing API")}}

La propriété en lecture seule **`intersectionRect`** de l'interface [`PerformanceElementTiming`](/fr/docs/Web/API/PerformanceElementTiming) renvoie le rectangle de l'élément dans la zone d'affichage (_viewport_).

## Syntaxe

```js
var rect = PerformanceElementTiming.intersectionRect;
```

### Valeur

Un objet [`DOMRectReadOnly`](/fr/docs/Web/API/DOMRectReadOnly) qui est le rectangle de l'élément dans la zone d'affichage.

Pour les images, il s'agit du rectangle d'affichage de l'image dans la zone d'affichage. Pour le texte, il s'agit du rectangle d'affichage du nœud dans la zone d'affichage. Il s'agit du plus petit rectangle qui contient l'union de tous les nœuds de texte appartenant à l'élément.

## Exemples

Dans cet exemple, l'appel à `entry.intersectionRect` renvoie un objet [`DOMRectReadOnly`](/fr/docs/Web/API/DOMRectReadOnly) avec le rectangle d'affichage de l'image.

```html
<img
  src="image.jpg"
  alt="une belle image"
  elementtiming="big-image"
  id="myImage" />
```

```js
const observer = new PerformanceObserver((list) => {
  let entries = list.getEntries().forEach(function (entry) {
    if (entry.identifier === "big-image") {
      console.log(entry.intersectionRect);
    }
  });
});
observer.observe({ entryTypes: ["element"] });
```

> **Note :** Cet exemple utilise l'interface [`PerformanceObserver`](/fr/docs/Web/API/PerformanceObserver) pour créer une liste d'événements de mesure des performances. Dans notre cas, nous observons l'élément [`PerformanceEntry.entryType`](/fr/docs/Web/API/PerformanceEntry/entryType) afin d'utiliser l'interface `PerformanceElementTiming`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
