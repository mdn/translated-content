---
title: Window.moveBy()
slug: Web/API/Window/moveBy
---

{{APIRef}}

## Resumen

Mueve la actual ventana a consecuencia de una cantidad especificada.

## Sintaxis

```js
window.moveBy(deltaX, deltaY);
```

### Parametros

- `deltaX` es la cantidad de pixeles a mover la ventana horizontalmente.
- `deltaY` es la cantidad de pixeles a mover la ventana verticalmente.

## Ejemplo

```js
function budge() {
  moveBy(10, -10);
}
```

## Notes

Puedes usar numeros negativos como parametros para esta función. Esta función realiza un movimiento relativo mientras que {{domxref("window.moveTo")}} hace un movimiento absoluto.

Desde Firefox 7, no es posible para un sitio web mover una ventana en el navegador, deacuerdo con las [siguientes reglas](https://bugzilla.mozilla.org/show_bug.cgi?id=565541#c24):

1. No puedes mover una ventana o pestaña que no haya sido creada por window\.open.
2. No puedes mover una ventana o pestaña cuando esta en una ventana con más de una sola pestaña.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{domxref("window.moveTo")}}
