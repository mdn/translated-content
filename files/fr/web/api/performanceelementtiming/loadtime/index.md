---
title: PerformanceElementTiming.loadTime
slug: Web/API/PerformanceElementTiming/loadTime
---

{{APIRef("Element Timing API")}}

La propriété en lecture seule **`loadTime`** de l'interface [`PerformanceElementTiming`](/fr/docs/Web/API/PerformanceElementTiming) renvoie toujours 0 pour le texte. Pour les images, elle renvoie le temps qui est le plus tardif entre le moment où la ressource image est chargée et le moment où elle est attachée à l'élément.

## Syntaxe

```js
var loadTime = PerformanceElementTiming.loadTime;
```

### Valeur

Un objet [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) avec le temps de chargement de l'élément.

## Exemples

Dans cet exemple, l'appel à `entry.loadTime` renvoie le temps de chargement de l'image.

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
      console.log(entry.loadTime);
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
