---
title: Animation.ready
slug: Web/API/Animation/ready
---

{{ APIRef("Web Animations") }}

La propiedad de solo-lectura `Animation.ready` de la [Web Animations API](/es/docs/Web/API/Web_Animations_API) devuelve un {{jsxref("Promise")}} que se resuelve cuando la animación está lista para reproducirse. Una nueva 'promesa' es creada cada vez que la animación entra en [play state(estado de reproducción)](/es/docs/Web/API/Animation/playState) `"pending"(pendiente)` así como si la reproducción es cancelada, ya que en ambos escenarios, la animación estará lista para ser reiniciada.

> **Nota:** Dado que la misma {{jsxref("Promise")}} es usada para las solicitudes pendientes de `play` y `pause` , se recomienda a los autores que comprueben el estado de la animación cuando se resuelva la promesa.

## Sintaxis

```js
var readyPromise = Animation.ready;
```

### Valor

Un {{jsxref("Promise")}} que se resuelve cuando la animación esta lista para reproducirse. Por lo general, se usará una construcción similar a esta usando una promise lista:

```js
animation.ready.then(function () {
  // Hace lo que sea necesario cuando
  // la animación está lista para reproducirse
});
```

## Ejemplo

En el siguiente ejemplo, el estado de la animación será `running(reproduciendo)` cuando la **Promise actual** se resuelva ya que la animación no deja el estado de reproducción `pending` entre las llamadas `pause` and `play` ,por lo tanto, la **Promise actual** no cambia.

```js
animation.pause();
animation.ready.then(function () {
  // Displays 'running'
  alert(animation.playState);
});
animation.play();
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Web Animations API](/es/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
- {{domxref("Animation.playState")}}
