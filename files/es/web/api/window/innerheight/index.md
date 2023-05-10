---
title: window.innerHeight
slug: Web/API/Window/innerHeight
---

{{APIRef}}

Propiedad solo lectura del objeto window.

Representa la altura (en pixeles) del viewport

## Sintaxis

```js
var alturaDelViewport = window.innerHeight;
```

### Valor

Como retorno, la propiedad innerHeight del objeto window nos retornara un valor de tipo entero, que representara (en pixeles) la altura del viewport.

La propiedad `window.innerHeight` es solo de lectura; Y no tiene un valor por defecto.

## Notas

La propiedad innerHeight es soportada por cualquier objeto de ventana. Pudiendo ejectutarse en un conjunto de marcos (\<frameset> \</frameset>). O en una ventana secundaria.

Es un algoritmo para obtener la altura del viewport, excluyendo si se representa la barra de desplazamiento horizontal

### Ejemplo

### Asumiendo un frameset

```js
var alturaViewport = window.innerHeight;

var alturaViewport = self.innerHeight;
// self es window
```

**otra forma de obtener la altura (aúnque, no del viewport, síno de la ventana), es usando la propiedad outerHeight, del objeto window.**

### Ejemplo (Grafica)

![innerHeight vs outerHeight illustration](firefoxinnervsouterheight2.png)

## Especificaciones

{{Specifications}}

## Tambien me intersa

- {{domxref("window.innerWidth")}}
- {{domxref("window.outerHeight")}}
- {{domxref("window.outerWidth")}}
