---
title: WheelEvent.deltaY
slug: Web/API/WheelEvent/deltaY
tags:
  - API
  - DOM
  - Lecture seulement
  - Propriété
  - Reference
  - Référence(2)
  - WheelEvent
translation_of: Web/API/WheelEvent/deltaY
---
{{APIRef("DOM Events")}}

La propriété en lecture seule **`WheelEvent.deltaY`** est un `double` représentant la quantité de défilement vertical dans l'unité {{domxref("WheelEvent.deltaMode")}}.

## Syntaxe

    var dY = event.deltaY;

## Exemple

```js
var syntheticEvent = new WheelEvent("syntheticWheel", {"deltaY": 4, "deltaMode": 0});

console.log(syntheticEvent.deltaY);
```

## Spécifications

| Spécification                                                                                    | Statut                           | Commantaire          |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('DOM3 Events','#widl-WheelEvent-deltaY','WheelEvent.deltaY')}} | {{Spec2('DOM3 Events')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.WheelEvent.deltaY")}}

## Voir aussi

- {{ event("wheel") }}
- {{domxref("WheelEvent")}}
