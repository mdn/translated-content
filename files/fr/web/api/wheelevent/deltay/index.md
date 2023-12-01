---
title: WheelEvent.deltaY
slug: Web/API/WheelEvent/deltaY
---

{{APIRef("DOM Events")}}

La propriété en lecture seule **`WheelEvent.deltaY`** est un `double` représentant la quantité de défilement vertical dans l'unité {{domxref("WheelEvent.deltaMode")}}.

## Syntaxe

```js
var dY = event.deltaY;
```

## Exemple

```js
var syntheticEvent = new WheelEvent("syntheticWheel", {
  deltaY: 4,
  deltaMode: 0,
});

console.log(syntheticEvent.deltaY);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement [`wheel`](/fr/docs/Web/API/Element/wheel_event)
- [`WheelEvent`](/fr/docs/Web/API/WheelEvent)
