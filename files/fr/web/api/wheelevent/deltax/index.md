---
title: WheelEvent.deltaX
slug: Web/API/WheelEvent/deltaX
---

{{APIRef("DOM Events")}}

La propriété en lecture seule **`WheelEvent.deltaX`** est un `double` représentant la quantité de défilement horizontal dans l'unité {{domxref("WheelEvent.deltaMode")}}.

## Syntaxe

```js
var dX = event.deltaX;
```

## Exemple

```js
var syntheticEvent = new WheelEvent("syntheticWheel", {
  deltaX: 4,
  deltaMode: 0,
});

console.log(syntheticEvent.deltaX);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement [`wheel`](/fr/docs/Web/API/Element/wheel_event)
- [`WheelEvent`](/fr/docs/Web/API/WheelEvent)
