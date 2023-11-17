---
title: PerformanceElementTiming.id
slug: Web/API/PerformanceElementTiming/id
---

{{SeeCompatTable}}{{Non-Standard_Header}}{{APIRef("Element Timing API")}}

La propriété en lecture seule **`id`** de l'interface [`PerformanceElementTiming`](/fr/docs/Web/API/PerformanceElementTiming) renvoie l'[`id`](/fr/docs/Web/HTML/Global_attributes#attr-id) de l'élément associé.

## Syntaxe

```js
var id = PerformanceElementTiming.id;
```

### Valeur

Une chaîne de caractères [`DOMString`](/fr/docs/Web/API/DOMString).

## Exemples

Dans cet exemple, l'appel à `entry.id` entraînera l'affichage dans la console du code `myImage`, qui est l'[`id`](/fr/docs/Web/HTML/Global_attributes#attr-id) de l'élément image.

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
      console.log(entry.id);
    }
  });
});
observer.observe({ entryTypes: ["element"] });
```

> **Note :** Cet exemple utilise l'interface [`PerformanceObserver`](/fr/docs/Web/API/PerformanceObserver) pour créer une liste d'événements de mesure des performances. Dans notre cas, nous observons l'élément [`entryType`](/fr/docs/Web/API/PerformanceEntry/entryType) `element` afin d'utiliser l'interface `PerformanceElementTiming`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
