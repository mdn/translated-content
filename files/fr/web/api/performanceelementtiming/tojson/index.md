---
title: PerformanceElementTiming.toJSON()
slug: Web/API/PerformanceElementTiming/toJSON
---

{{APIRef("Element Timing API")}}

La méthode **`toJSON()`** de l'interface [`PerformanceElementTiming`](/fr/docs/Web/API/PerformanceElementTiming) est un sérialiseur standard. Elle renvoie une représentation JSON des propriétés de l'objet.

## Syntaxe

```js
var json = PerformanceElementTiming.toJSON();
```

### Valeur de retour

- `json`
  - : Un objet JSON qui est la sérialisation de l'objet [`PerformanceElementTiming`](/fr/docs/Web/API/PerformanceElementTiming).

## Exemples

Dans cet exemple, l'appel de `entry.toJSON()` renvoie une représentation JSON de l'objet [`PerformanceElementTiming`](/fr/docs/Web/API/PerformanceElementTiming), avec les informations sur l'élément image.

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
      console.log(entry.toJSON());
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
