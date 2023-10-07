---
title: PerformanceElementTiming.identifier
slug: Web/API/PerformanceElementTiming/identifier
---

{{SeeCompatTable}}{{Non-Standard_Header}}{{APIRef("Element Timing API")}}

La propriété en lecture seule **`identifier`** de l'interface [`PerformanceElementTiming`](/fr/docs/Web/API/PerformanceElementTiming) renvoie la valeur de l'attribut [`elementtiming`](/fr/docs/Web/HTML/Attributes/elementtiming) sur l'élément.

## Syntaxe

```js
var identifier = PerformanceElementTiming.identifier;
```

### Valeur

Une chaîne de caractères [`DOMString`](/fr/docs/Web/API/DOMString).

## Examples

Dans cet exemple, la valeur de [`elementtiming`](/fr/docs/Web/HTML/Attributes/elementtiming) est `big-image`. L'appel à `entry.indentifier` renvoie donc la chaîne de caractères `big-image`.

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
      console.log(entry.naturalWidth);
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
