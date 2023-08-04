---
title: Animation.reverse()
slug: Web/API/Animation/reverse
---

{{APIRef("Web Animations")}}

El método `Animation.reverse()` de la interfaz {{ domxref("Animation") }} Interface invierte la dirección de reproducción, lo que significa que la animación termina al principio. Si se llama en una animación sin reproducir, toda la animación se reproduce al revés. Si se llama en una animación pausada, continúa a la inversa.

## Sintaxis

```js
animation.reverse();
```

### Parámetros

Ningun.

### Valor devuelto

{{jsxref("undefined")}}

## Ejemplos

En el ejemplo [Growing/Shrinking Alice Game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) , hacer click o tocar la botella, hace que la animación de crecimiento de Alicia(`aliceChange`) sea reproducida al revés, lo que la hace más pequeña. Esto se hace estableciendo el {{ domxref("Animation.playbackRate") }} de `aliceChange` en `-1` de esta forma:

```js
var shrinkAlice = function () {
  // reproduce la animación de Alicia al revés.
  aliceChange.playbackRate = -1;
  aliceChange.play();

  // reproduce la animación de la botella.
  drinking.play();
};
```

Pero también se podría haber hecho lamando a `reverse()` en `aliceChange` así:

```js
var shrinkAlice = function () {
  // reproduce la animación de Alicia al revés.
  aliceChange.reverse();

  // reproduce la animación de la botella.
  drinking.play();
};
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Web Animations API](/es/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}} para otros métodos y propiedades que puedes usar para el control de animaciones en páginas web.
- {{domxref("Animation.pause()")}} para pausar una animación.
- {{domxref("Animation.play()")}} para reproducir una animación hacia adelante.
