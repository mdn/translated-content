---
title: Animation.id
slug: Web/API/Animation/id
tags:
  - API
  - Animacion
  - Animaciones Web
  - Experimental
  - Reference
  - id
translation_of: Web/API/Animation/id
---
{{ SeeCompatTable() }}{{ APIRef("Web Animations") }}

La propiedad **`Animation.id`** de la [Web Animations API](/es/docs/Web/API/Web_Animations_API) devuelve o establece una cadena(string) utilizado para identificar la animación.

## Sintaxis

    var animationsId = Animation.id;

    Animation.id = newIdString;

### Valor

Un {{domxref("DOMString")}} que se puede usar para identificar la animación, o `null` si la animación no tiene `id`.

## Ejemplos

En el ejemplo [Follow the White Rabbit](http://codepen.io/rachelnabors/pen/eJyWzm?editors=0010), puedes asignar a `rabbitDownAnimation` un `id` de esta manera:

```js
rabbitDownAnimation.effect.id = "rabbitGo";
```

## Especificaciones

| Specification                                                                                | Status                               | Comment         |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | --------------- |
| {{SpecName('Web Animations', '#dom-animation-id', 'Animation.id' )}} | {{Spec2('Web Animations')}} | Editor's draft. |

## Compatibilidad del navegador

{{Compat("api.Animation.id")}}

## Ver también

- {{domxref("KeyframeEffect")}}
- [Web Animations API](/es/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
