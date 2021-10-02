---
title: PerformanceElementTiming.naturalWidth
slug: Web/API/PerformanceElementTiming/naturalWidth
tags:
  - API
  - Property
  - Propriété
  - Reference
  - naturalWidth
  - PerformanceElementTiming
translation_of: Web/API/PerformanceElementTiming/naturalWidth
---
{{APIRef("Element Timing API")}}

La propriété en lecture seule **`naturalWidth`** de l'interface [`PerformanceElementTiming`](/fr/docs/Web/API/PerformanceElementTiming) renvoie la largeur intrinsèque de l'élément image.

## Syntax

```js
var width = PerformanceElementTiming.naturalWidth;
```

### Valeur

Un entier de 32 bits non signé (_unsigned long_) qui est la largeur intrinsèque de l'image si cela est appliqué à une image, 0 pour le texte.

## Exemples

Dans cet exemple, le fichier image a une largeur de 1000px et une hauteur de 750px. L'appel de `entry.naturalWidth` renvoie `1000`, c'est-à-dire la largeur intrinsèque en pixels.

```html
<img src="image.jpg" alt="une belle image" elementtiming="big-image" id="myImage">
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

> **Note :** Cet exemple utilise l'interface [`PerformanceObserver`](/fr/docs/Web/API/PerformanceObserver) pour créer une liste d'événements de mesure des performances. Dans notre cas, nous observons l'élément [`PerformanceEntry.entryType`](/fr/docs/Web/API/PerformanceEntry/entryType) afin d'utiliser l'interface `PerformanceElementTiming`.

## Specifications

| Spécification                                                                                                                                                    | Statut                                   | Commentaire          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('Element Timing API','#dom-performanceelementtiming-naturalwidth','PerformanceElementTiming.naturalWidth')}} | {{Spec2('Element Timing API')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.PerformanceElementTiming.naturalWidth")}}
