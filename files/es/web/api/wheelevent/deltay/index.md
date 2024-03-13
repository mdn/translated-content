---
title: WheelEvent.deltaY
slug: Web/API/WheelEvent/deltaY
---

{{APIRef("DOM Events")}}

La propiedad de solo lectura **`WheelEvent.deltaY`** es un `double` que representa la cantidad de deslizamiento vertical en la unidad {{domxref("WheelEvent.deltaMode")}} .

## Sintaxis

```
var dY = event.deltaY;
```

## Ejemplo

```js
var syntheticEvent = new WheelEvent("syntheticWheel", {
  deltaY: 4,
  deltaMode: 0,
});

console.log(syntheticEvent.deltaY);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver más

- [`wheel`](/es/docs/Web/Reference/Events/wheel)
- {{domxref("WheelEvent")}}
