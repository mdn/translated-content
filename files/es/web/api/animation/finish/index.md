---
title: Animation.finish()
slug: Web/API/Animation/finish
---

{{APIRef("Web Animations")}}

El método `finish()` de la interfaz {{domxref("Animation")}} de la [Web Animations API](/es/docs/Web/API/Web_Animations_API) establece el tiempo de reproducción actual hasta el final de la animación correspondiente a la dirección de reproducción actual. Es decir, si la animación se está reproduciendo hacia adelante, establece el tiempo de reproducción a la longitud de la secuencia de animación, y si la animación se reproduce hacia atras, habiendo llamado a su método {{domxref("Animation.reverse", "reverse()")}}, establece el tiempo de la reproducción en 0.

## Sintaxis

```js
Animation.finish();
```

### Parámetros

Ningun.

### Valor devuelto

Ningun.

### Excepciones

- `InvalidState`
  - : La velocidad de reproducción del reproductor es 0 o la velocidad de reproducción de la animación es mayor que 0 y el tiempo de finalización de la animación es infinito.

## Ejemplos

El siguiente ejemplo muestra cómo usar el método `finish()` y captura un error `InvalidState`.

```js
interfaceElement.addEventListener("mousedown", function() {
  try {
    player.finish();
  } catch(e if e instanceof InvalidState) {
    console.log("finish() called on paused or finished animation.");
  } catch(e);
    logMyErrors(e); //pasa el objeto excepción al manejador de errores.
  }
});
```

El siguiente ejemplo finaliza todas las animaciones en un solo elemento, independientemente de su dirección de reproducción.

```js
elem.getAnimations().forEach(function (animation) {
  return animation.finish();
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Web Animations API](/es/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}} para otros métodos y propiedades que puede usar para controlar la animación de la página web.
- {{domxref("Animation.play()")}} para reproducir una animación hacia adelante.
- {{domxref("Animation.reverse()")}} para reproducir una animación hacia atrás.
