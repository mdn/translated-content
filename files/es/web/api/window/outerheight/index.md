---
title: Window.outerHeight
slug: Web/API/Window/outerHeight
---

{{APIRef}}

## Sumario

`Window.outerHeight` obtiene la altura en pixeles de toda la ventana del navegador. Representa el alto de toda la ventana, incluyendo la barra de notificaciones (si se encuentra) y los bordes.

Esta propiedad es de sólo lectura, no tiene valor por defecto

## Sintaxis

```js
outWindowHeight = window.outerHeight;
```

Al obtener, `outWindowHeight` contiene el alto de la ventana.

## Notas

Para cambiar el tamaño de una ventana, ver {{domxref("window.resizeBy()")}} y {{domxref("window.resizeTo()")}}.

Para obtener la altura interna de una ventana, por ejemplo, el alto de una página siendo desplegada, ver {{domxref("window.innerHeight")}}.

### Ejemplo gráfico

La siguiente figura muestra la diferencia entre `innerHeight` y `outerHeight`.

![innerHeight vs outerHeight illustration](firefoxinnervsouterheight2.png)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{domxref("window.innerHeight")}}
- {{domxref("window.innerWidth")}}
- {{domxref("window.outerWidth")}}
- {{domxref("window.resizeBy()")}}
- {{domxref("window.resizeTo()")}}
