---
title: performance.timeOrigin
slug: Web/API/Performance/timeOrigin
tags:
  - API
  - Experimental
  - High Resolution Time API
  - Performance
  - Property
  - Propriété
  - Reference
  - timeOrigin
translation_of: Web/API/Performance/getEntriesByName
---
{{SeeCompatTable}}{{APIRef("High Resolution Time")}}

La propriété en lecture seule **`timeOrigin`** de l'interface {{domxref("Performance")}} renvoie l'horodatage haute résolution de l'heure de début de la mesure de performance.

{{AvailableInWorkers}}

## Syntaxe

```js
  var timeOrigin = performance.timeOrigin
```

### Valeur

Un horodatage haute résolution (voir le type [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp)).

## Spécifications

| Spécification                                                                                    | Statut                                       |
| ------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| {{SpecName('Highres Time Level 2','#timeorigin-attribute','timeOrigin')}} | {{Spec2('Highres Time Level 2')}} |

## Compatibilité des navigateurs

{{Compat("api.Performance.timeOrigin")}}
