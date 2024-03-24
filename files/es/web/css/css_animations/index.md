---
title: Animaciones CSS
slug: Web/CSS/CSS_animations
l10n:
  sourceCommit: 856b52f634b889084869d2ee0b8bb62c084be04d
---

{{CSSRef}}

El módulo **Animaciones CSS** le permite animar los valores de las propiedades CSS, como la posición del fondo y transformaciones, a lo largo del tiempo mediante el uso de fotogramas clave. Cada fotograma clave describe cómo debe renderizarse el elemento animado en un momento dado durante la secuencia de animación. Puede usar las propiedades en el módulo de animaciones para controlar la duración, el número de repeticiones, el inicio retrasado y otros aspectos de una animación.

### Animaciones en acción

Para ver la animación en el cuadro a continuación, haga clic en la casilla de verificación 'Reproducir la animación' o pase el cursor sobre el cuadro. Cuando la animación está activa, la nube en la parte superior cambia de forma, caen copos de nieve y el nivel de nieve en la parte inferior aumenta. Para pausar la animación, desmarque la casilla de verificación o aleje el cursor de la casilla.

{{EmbedGHLiveSample("css-examples/modules/animation.html", '100%', 650)}}

Esta animación de muestra usa {{cssxref("animation-iteration-count")}} para hacer que los copos caigan repetidamente, {{cssxref("animation-direction")}} para hacer que la nube se mueva de un lado a otro, {{cssxref( "animation-fill-mode")}} para aumentar el nivel de nieve en respuesta al movimiento de la nube y {{cssxref("animation-play-state")}} para pausar la animación.

Para ver el código de esta animación, [vea la fuente en GitHub](https://github.com/mdn/css-examples/blob/main/modules/animation.html).

## Referencia

### Propiedades

- {{cssxref("animation")}} abreviatura
- {{cssxref("animation-composition")}}
- {{cssxref("animation-delay")}}
- {{cssxref("animation-direction")}}
- {{cssxref("animation-duration")}}
- {{cssxref("animation-fill-mode")}}
- {{cssxref("animation-iteration-count")}}
- {{cssxref("animation-name")}}
- {{cssxref("animation-play-state")}}
- {{cssxref("animation-timing-function")}}
- {{cssxref("animation-timeline")}}

### Reglas arroba

- {{cssxref("@keyframes")}}

### Eventos

Todas las animaciones, incluso aquellas con 0 segundos de duración, lanzan eventos de animación.

- {{domxref("Element/animationstart_event", "animationstart")}}
- {{domxref("Element/animationend_event", "animationend")}}
- {{domxref("Element/animationcancel_event", "animationcancel")}}
- {{domxref("Element/animationiteration_event", "animationiteration")}}

### Interfaces

- [API de animaciones web](/es/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationEvent")}}
- {{domxref("CSSKeyframeRule")}}
- {{domxref("CSSKeyframesRule")}}

## Guías

- [Usando animaciones CSS](/es/docs/Web/CSS/CSS_animations/Using_CSS_animations)
  - : Tutorial paso a paso sobre cómo crear animaciones usando CSS. Este artículo describe las propiedades CSS y las reglas arroba relacionadas con la animación y cómo interactúan entre sí.
- [Consejos y trucos de animación CSS](/es/docs/Web/CSS/CSS_animations/Tips)
  - : Consejos y trucos para ayudarlo a aprovechar al máximo las animaciones CSS.

## Conceptos relacionados

- Propiedad CSS {{cssxref("will-change")}}
- Tipo de dato [`<easing-function>`](/es/docs/Web/CSS/easing-function)
- Consulta de medios [`prefers-reduced-motion`](/es/docs/Web/CSS/@media/prefers-reduced-motion)
- Término del glosario {{glossary("Bezier curve")}}

## Especificaciones

{{Specifications}}

## Véase también

- [Animaciones CSS basadas en desplazamiento](/es/docs/Web/CSS/CSS_scroll-driven_animations)
- Propiedades en el módulo CSS [transitions](/es/docs/Web/CSS/CSS_transitions) para activar animaciones en función de las acciones del usuario
- El elemento HTML {{htmlelement("canvas")}} junto con la [API de canvas](/es/docs/Web/API/Canvas_API) y la [API de WebGL](/es/docs/Web/API/WebGL_API) para dibujar gráficos y animaciones
- La interfaz {{domxref("SVGAnimationElement")}} para todas las interfaces de elementos relacionados con la animación, incluidas {{domxref("SVGAnimateElement")}}, {{domxref("SVGAnimateElement")}}, {{domxref("SVGAnimateColorElement")}}, {{domxref("SVGAnimateMotionElement")}} y {{domxref("SVGAnimateTransformElement")}}
