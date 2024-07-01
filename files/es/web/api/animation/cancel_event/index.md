---
title: Animation.oncancel
slug: Web/API/Animation/cancel_event
---

{{ APIRef("Web Animations") }}

La propiedad `oncancel` de la interfaz {{domxref("Animation")}} de la [Web Animations API](/es/docs/Web/API/Web_Animations_API) es el manejador de eventos para el evento [`cancel`](/es/docs/Web/Reference/Events/cancel) .

El evento `cancel` puede ser activado manualmente con {{domxref("Animation.cancel()")}} cuando la animación entra en estado de reproducción `"idle"(inactivo)` desde otro estado, como cuando una animación se elimina de un elemento antes de que termine de reproducirse.

> **Nota:** La creación de una nueva animación, inicialmente inactiva, no activa el evento [`cancel`](/es/docs/Web/Reference/Events/cancel) en la nueva animación.

## Sintaxis

```js
var cancelHandler = Animation.oncancel;

Animation.oncancel = cancelHandler;
```

### Valor

Una función que será ejecutada cuando la animación sea cancelada, o `null` si no hay un manejador de eventos [`cancel`](/es/docs/Web/Reference/Events/cancel).

## Ejemplos

Si esta animación es cancelada, elimina su elemento.

```js
animation.oncancel = animation.effect.target.remove();
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Web Animations API](/es/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
- The [`cancel`](/es/docs/Web/Reference/Events/cancel) event
