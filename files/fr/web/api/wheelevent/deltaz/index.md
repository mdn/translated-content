---
title: WheelEvent.deltaZ
slug: Web/API/WheelEvent/deltaZ
tags:
  - API
  - DOM
  - Interface
  - Lecture seulement
  - Propriété
  - Reference
  - Référence(2)
  - WheelEvent
translation_of: Web/API/WheelEvent/deltaZ
---
{{APIRef("DOM Events")}}

La propriété en lecture seule **`WheelEvent.deltaZ`** est un `double` représentant la quantité de défilement le long de l'axe z, dans l'unité {{domxref("WheelEvent.deltaMode")}}.

## Syntaxe

    var dZ = event.deltaZ;

## Exemple

```js
var syntheticEvent = new WheelEvent("syntheticWheel", {"deltaZ": 4, "deltaMode": 0});

console.log(syntheticEvent.deltaZ);
```

## Spécifications

| Spécification                                                                                    | Statut                           | Commentaire          |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('DOM3 Events','#widl-WheelEvent-deltaZ','WheelEvent.deltaZ')}} | {{Spec2('DOM3 Events')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.WheelEvent.deltaZ")}}

## Voir aussi

- {{ event("wheel") }}
- {{domxref("WheelEvent")}}
