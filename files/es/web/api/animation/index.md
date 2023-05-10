---
title: Animation
slug: Web/API/Animation
---

{{ APIRef("Web Animations") }}

La interfaz `Animation` de la [Web Animations API](/es/docs/Web/API/Web_Animations_API) representa un reproductor de animación y proporciona controles de reproducción y una línea de tiempo para un nodo o una fuente de animación.

## Constructor

- {{domxref("Animation.Animation()", "Animation()")}}
  - : Crea una nueva instancia de objeto `Animation`.

## Propiedades

- {{domxref("Animation.currentTime")}}
  - : El valor del tiempo de la animación actual en milisegundos , ya sea en ejecución o en pausa. Si la animación carece de {{domxref("AnimationTimeline", "timeline")}}, está inactivo, o no se ha reproducido todavía, su valor es `null`.

<!---->

- {{domxref("Animation.effect")}}
  - : Obtiene y establece el {{domxref("AnimationEffectReadOnly")}} asociado con esta animación. Normalmente, este será un objeto {{domxref("KeyframeEffect")}}.
- {{domxref("Animation.finished")}} {{readOnlyInline}}
  - : Devuelve la Promesa actual terminada para esta animación.

<!---->

- {{domxref("Animation.id")}}
  - : Obtiene y establece la `String` usada para identificar la animación.
- {{domxref("Animation.playState")}} {{readOnlyInline}}
  - : Devuelve un valor enumerado que describe el estado de la reproducción de una animación.

<!---->

- {{domxref("Animation.playbackRate")}}
  - : Obtiene o establece la velocidad de reproducción de la animación.

<!---->

- {{domxref("Animation.ready")}} {{readOnlyInline}}
  - : Devuelve la Promesa actual lista para esta animación.

<!---->

- {{domxref("Animation.startTime")}}
  - : Obiene o establece la hora programada en la que debe comenzar la reproducción de la animación.

<!---->

- {{domxref("Animation.timeline")}}
  - : Obtiene o establece el {{domxref("AnimationTimeline", "timeline")}} asociado con esta animación.

### Manejadores de eventos

- {{domxref("Animation.oncancel")}}
  - : Obtiene y establece en manejador de eventos para el evento `cancel`.
- {{domxref("Animation.onfinish")}}
  - : Obtiene y establece en manejador de eventos para el evento `finish` .

## Métodos

- {{domxref("Animation.cancel()")}}
  - : Borra todos los {{domxref("KeyframeEffect", "keyframeEffects")}} causados por la animación y aborta su reproducción.

<!---->

- {{domxref("Animation.finish()")}}
  - : Busca cualquier final de una animación, dependiendo de si la animación se está reproduciendo o invirtiendo.

<!---->

- {{domxref("Animation.pause()")}}
  - : Pone la reproducción en pausa.

<!---->

- {{domxref("Animation.play()")}}
  - : Busca el final de una animación, dependiendo de si la animación se está reproduciendo o si se está invirtiendo.

<!---->

- {{domxref("Animation.reverse()")}}
  - : Invierte la dirección de reproducción, deteniéndose al comienzo de la animación. Si la animación finaliza o no se activa, volverá a reproducirse desde el final al principio.

<!---->

- {{domxref("Animation.updatePlaybackRate()")}}
  - : Establece la velocidad de la animación después de sincronizar por primera vez su posición de reproducción.

## Problemas de accesibilidad

Las animaciones titilantes e intermitentes pueden causar dificultades a las personas con discapacidades cognitivas como Trastorno por Déficit de Atención con Hiperactividad (ADHD) además de causar ataques a personas con cinestosis, epilepsia, migranias o síndrome de sensibilidad escotópica.

Considera ofrecer un mecanismo para pausar o deshabilitar las animaciones, así como utilizar [Reduced Motion Media Query](/es/docs/Web/CSS/@media/prefers-reduced-motion) para crear una experiencia complementaria para los usuarios que han expresado su preferencia por experiencias no animadas.

- [Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity)
- [An Introduction to the Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Understanding WCAG, Guideline 2.2 explanations](/es/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.2_%E2%80%94_Enough_Time_Provide_users_enough_time_to_read_and_use_content)
- [Understanding Success Criterion 2.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [API de Animaciones Web](/es/docs/Web/API/Web_Animations_API)
