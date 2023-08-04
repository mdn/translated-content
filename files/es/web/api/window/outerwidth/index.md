---
title: Window.outerWidth
slug: Web/API/Window/outerWidth
---

{{APIRef}}

## Sumario

`Window.outerWidth` obtiene el ancho exterior del navegador. Representa el ancho total de la ventana incluyendo las barras laterales (si es expandida), interfaz grafíca y los de elementos para redimencionado de bordes.

Esta propiedad es de sólo lectura; no tiene valores por default.

## Sintaxis

```js
outWindowWidth = window.outerWidth;
```

Lo que retorna `outWindowWidth` es el ancho exterior del navegador.

## Notas

Para cambiar el tamaño de la ventana, ver {{domxref("window.resizeBy()")}} y {{domxref("window.resizeTo()")}}.

Para obtener el ancho exterior de la ventana, i.e. el ancho de la pagina desplegada, ver {{domxref("window.innerWidth")}}.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{domxref("window.outerHeight")}}, {{domxref("window.innerHeight")}}, {{domxref("window.innerWidth")}}
- {{domxref("window.resizeBy()")}}, {{domxref("window.resizeTo()")}}
