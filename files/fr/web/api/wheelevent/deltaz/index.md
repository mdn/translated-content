---
title: WheelEvent.deltaZ
slug: Web/API/WheelEvent/deltaZ
---

{{APIRef("DOM Events")}}

La propriété en lecture seule **`WheelEvent.deltaZ`** est un `double` représentant la quantité de défilement le long de l'axe z, dans l'unité {{domxref("WheelEvent.deltaMode")}}.

## Syntaxe

```js
var dZ = event.deltaZ;
```

## Exemple

```js
var syntheticEvent = new WheelEvent("syntheticWheel", {
  deltaZ: 4,
  deltaMode: 0,
});

console.log(syntheticEvent.deltaZ);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement [`wheel`](/fr/docs/Web/API/Element/wheel_event)
- [`WheelEvent`](/fr/docs/Web/API/WheelEvent)
