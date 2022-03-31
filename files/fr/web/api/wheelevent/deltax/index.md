---
title: WheelEvent.deltaX
slug: Web/API/WheelEvent/deltaX
tags:
  - API
  - DOM
  - Lecture seulement
  - Propriété
  - Reference
  - Référence(2)
  - WheelEvent
translation_of: Web/API/WheelEvent/deltaX
---
{{APIRef("DOM Events")}}

La propriété en lecture seule **`WheelEvent.deltaX`** est un `double` représentant la quantité de défilement horizontal dans l'unité {{domxref("WheelEvent.deltaMode")}}.

## Syntaxe

    var dX = event.deltaX;

## Exemple

```js
var syntheticEvent = new WheelEvent("syntheticWheel", {"deltaX": 4, "deltaMode": 0});

console.log(syntheticEvent.deltaX);
```

## Spécifications

| Spécification                                                                                    | Statut                           | Commantaire         |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName('DOM3 Events','#widl-WheelEvent-deltaX','WheelEvent.deltaX')}} | {{Spec2('DOM3 Events')}} | Définiton initiale. |

## Compatibilité des navigateurs

{{Compat("api.WheelEvent.deltaX")}}

## Voir aussi

- {{ event("wheel") }}
- {{domxref("WheelEvent")}}
