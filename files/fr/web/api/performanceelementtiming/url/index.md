---
title: PerformanceElementTiming.url
slug: Web/API/PerformanceElementTiming/url
tags:
  - API
  - Property
  - Propriété
  - Reference
  - url
  - PerformanceElementTiming
translation_of: Web/API/PerformanceElementTiming/url
---
{{APIRef("Element Timing API")}}

La propriété en lecture seule **`url`** de l'interface [`PerformanceElementTiming`](/fr/docs/Web/API/PerformanceElementTiming) renvoie l'URL initiale de la demande de ressource lorsque l'élément est une image.

## Syntaxe

```js
var url = PerformanceElementTiming.url;
```

### Valeur

Une [`DOMString`](/fr/docs/Web/API/DOMString) qui est l'URL initiale de la demande de ressources pour les images ou 0 pour le texte.

## Exemples

Dans cet exemple, appeler `entry.url` renvoie `https://example.com/image.jpg`.

```html
<img src="https://example.com/image.jpg" alt="une belle imahe" elementtiming="big-image" id="myImage">
```

```js
const observer = new PerformanceObserver((list) => {
  let entries = list.getEntries().forEach(function (entry) {
    if (entry.identifier === "big-image") {
      console.log(entry.url);
    }
  });
});
observer.observe({ entryTypes: ["element"] });
```

> **Note :** Cet exemple utilise l'interface [`PerformanceObserver`](/fr/docs/Web/API/PerformanceObserver) pour créer une liste d'événements de mesure des performances. Dans notre cas, nous observons l'élément [`PerformanceEntry.entryType`](/fr/docs/Web/API/PerformanceEntry/entryType) afin d'utiliser l'interface `PerformanceElementTiming`.

## Spécifications

| Spécification                                                                                                                            | Statut                                   | Commentaire          |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('Element Timing API','#dom-performanceelementtiming-url','PerformanceElementTiming.url')}} | {{Spec2('Element Timing API')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.PerformanceElementTiming.url")}}
