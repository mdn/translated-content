---
title: PerformanceElementTiming.element
slug: Web/API/PerformanceElementTiming/element
---

{{APIRef("Element Timing API")}}

La propriété en lecture seule **`element`** de l'interface [`PerformanceElementTiming`](/fr/docs/Web/API/PerformanceElementTiming) renvoie un [`Element`](/fr/docs/Web/API/Element) qui est une représentation littérale de l'élément associé.

## Syntaxe

```js
var element = PerformanceElementTiming.element;
```

### Valeur

Un objet de type [`Element`](/fr/docs/Web/API/Element).

## Exemples

Dans cet exemple, l'appel à `entry.element` va enregistrer dans la console `<img src="image.jpg" alt="une belle image" elementtiming="big-image">`.

```html
<img src="image.jpg" alt="une belle image" elementtiming="big-image" />
```

```js
const observer = new PerformanceObserver((list) => {
  let entries = list.getEntries().forEach(function (entry) {
    if (entry.identifier === "big-image") {
      console.log(entry.element);
    }
  });
});
observer.observe({ entryTypes: ["element"] });
```

> [!NOTE]
> Cet exemple utilise l'interface [`PerformanceObserver`](/fr/docs/Web/API/PerformanceObserver) pour créer une liste d'événements de mesure des performances. Dans notre cas, nous observons l'élément [`PerformanceEntry.entryType`](/fr/docs/Web/API/PerformanceEntry/entryType) afin d'utiliser l'interface `PerformanceElementTiming`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
