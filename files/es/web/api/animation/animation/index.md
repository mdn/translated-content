---
title: Animation()
slug: Web/API/Animation/Animation
tags:
  - Animacion
translation_of: Web/API/Animation/Animation
original_slug: Web/API/Animation/Animación
---
{{ SeeCompatTable() }}{{ APIRef("Web Animations API") }}

El constructor **`Animation()`** de [Web Animations API](/es/docs/Web/API/Web_Animations_API) devuelve una instancia del objeto `Animation`.

## Sintaxis

    var animation = new Animation([effect][, timeline]);

### Parámetros

- `effect` {{optional_inline}}
  - : El efecto objetivo, es un objeto de la interfaz {{domxref("AnimationEffectReadOnly")}} ,para asignarlo a la animación. Aunque en el futuro podrían ser asignados otros efectos como `SequenceEffect` o `GroupEffect`, el único efecto disponible actualmente es {{domxref("KeyframeEffect")}}. Este puede ser `null` (valor por defecto) para indicar que no debe aplicarse ningún efecto.
- `timeline` {{optional_inline}}
  - : Especifica el `timeline` con el que asociar la animación, como un objeto de tipo basado en la interfaz {{domxref("AnimationTimeline")}} . Actualmente el único tipo de línea de tiempo disponible es {{domxref("DocumentTimeline")}}, pero en el futuro habrá lineas de tiempo asociadas , por ejemplo, con gestos o desplazamiento. El valor por defecto es {{domxref("Document.timeline")}}, pero puede ser establecido en `null`.

## Ejemplos

En el ejemplo [Follow the White Rabbit](http://codepen.io/rachelnabors/pen/eJyWzm/?editors=0010), el constructor `Animation()` es usado para crear una `Animation` para el `rabbitDownKeyframes` utilizando el `timeline` del documento:

```js
var rabbitDownAnimation = new Animation(rabbitDownKeyframes, document.timeline);
```

## Especificaciones

| Specification                                                                                        | Status                               | Comment         |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------ | --------------- |
| {{SpecName('Web Animations', '#dom-animation-animation', 'Animation()' )}} | {{Spec2('Web Animations')}} | Editor's draft. |

## Compatibilidad del navegador

{{Compat("api.Animation.Animation")}}

## Ver también

- [Web Animations API](/es/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
