---
title: PerformanceElementTiming.naturalHeight
slug: Web/API/PerformanceElementTiming/naturalHeight
tags:
  - API
  - Property
  - Propriété
  - Reference
  - naturalHeight
  - PerformanceElementTiming
translation_of: Web/API/PerformanceElementTiming/naturalHeight
---
{{APIRef("Element Timing API")}}

La propriété en lecture seule **`naturalHeight`** de l'interface [`PerformanceElementTiming`](/fr/docs/Web/API/PerformanceElementTiming) renvoie la hauteur intrinsèque de l'élément image.

## Syntaxe

```js
var height = PerformanceElementTiming.naturalHeight;
```

### Valeur

Un entier de 32 bits non signé (_unsigned long_) qui est la hauteur intrinsèque de l'image si cela est appliqué à une image, 0 pour le texte.

## Exemples

Dans cet exemple, le fichier image a une largeur de 1000px et une hauteur de 750px. L'appel de `entry.naturalHeight` renvoie `750`, c'est-à-dire la hauteur intrinsèque en pixels.

```html
<img src="image.jpg" alt="une belle image" elementtiming="big-image" id="myImage">
```

```js
const observer = new PerformanceObserver((list) => {
  let entries = list.getEntries().forEach(function (entry) {
    if (entry.identifier === "big-image") {
      console.log(entry.naturalHeight);
    }
  });
});
observer.observe({ entryTypes: ["element"] });
```

> **Note :** Cet exemple utilise l'interface [`PerformanceObserver`](/fr/docs/Web/API/PerformanceObserver) pour créer une liste d'événements de mesure des performances. Dans notre cas, nous observons l'élément [`PerformanceEntry.entryType`](/fr/docs/Web/API/PerformanceEntry/entryType) afin d'utiliser l'interface `PerformanceElementTiming`.

## Specifications

| Spécification                                                                                                                                                    | Statut                                   | Commentaire         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------- |
| {{SpecName('Element Timing API','#dom-performanceelementtiming-naturalheight','PerformanceElementTiming.naturalHeight')}} | {{Spec2('Element Timing API')}} | Initial definition. |

## Compatibilité des navigateurs

{{Compat("api.PerformanceElementTiming.naturalHeight")}}
