---
title: PerformanceElementTiming.renderTime
slug: Web/API/PerformanceElementTiming/renderTime
---

{{APIRef("Element Timing API")}}

La propriété en lecture seule **`renderTime`** de l'interface [`PerformanceElementTiming`](/fr/docs/Web/API/PerformanceElementTiming) renvoie le temps écoulé pour le rendu de l'élément associé.

## Syntaxe

```js
var renderTime = PerformanceElementTiming.renderTime;
```

### Valeur

Un objet [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) avec le temps de rendu de l'élément.

Pour les images, il s'agira de l'**horodatage du rendu de l'image**. Ceci est défini comme le moment du rendu suivant le chargement complet de l'image. Si la vérification de l'autorisation de temporisation échoue (comme défini par l'en-tête [Timing-allow-origin](/fr/docs/Web/HTTP/Headers/Timing-Allow-Origin)), ceci retournera 0.

Pour les nœuds de texte, il s'agira de l'**horodatage du rendu du texte**. Ceci est défini comme le moment où l'élément est affiché à l'écran.

## Exemples

Dans cet exemple, appeler `entry.renderTime` renvoie le temps de rendu de l'élément image.

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
      console.log(entry.renderTime);
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
