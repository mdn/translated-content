---
title: AnimationEvent
slug: Web/API/AnimationEvent
---

{{SeeCompatTable}}{{APIRef("Web Animations API")}}

La interfaz **`AnimationEvent`** representa los eventos que proporciona información relacionada con las [animaciones](/es/docs/Web/CSS/CSS_animations/Using_CSS_animations).

{{InheritanceDiagram}}

## Propiedades

_También hereda las propiedades de su padre {{domxref("Event")}}_.

- {{domxref("AnimationEvent.animationName")}} {{readonlyInline}}
  - : Es un {{domxref("DOMString")}} que contiene el valor de la propiedad CSS {{cssxref("animation-name")}} asociado con la transición.
- {{domxref("AnimationEvent.elapsedTime")}} {{readonlyInline}}
  - : Es un número flotante que da la cantidad de tiempo que ha estado corriendo la animación, en segundos, cuando este evento es disparado, excluyendo cualquier vez que la aimación fue pausada. Para un evento `"animationstart"`, `elapsedTime` es `0.0` a ménos que hubiera un valor negativo para {{cssxref("animation-delay")}}, en tal caso sería disparado el evento con `elapsedTime` conteniendo `(-1 *`_retraso_`)`.
- {{domxref("AnimationEvent.pseudoElement")}} {{readonlyInline}}
  - : Es un {{domxref("DOMString")}}, empezando con `'::'`, conteniendo el nombre del [pseudo-element](/es/docs/Web/CSS/Pseudo-elements) en el cual corre la animación. Si la animación no corre sobre un pseudo-element sino en el elemento, un string vacío: ''.

## Constructor

- {{domxref("AnimationEvent.AnimationEvent", "AnimationEvent()")}}
  - : Crea un evento `AnimationEvent` con los parametros dados.

## Métodos

_También hereda los métodos de su padre {{domxref("Event")}}_.

- {{domxref("AnimationEvent.initAnimationEvent()")}} {{non-standard_inline}}{{deprecated_inline}}
  - : Inicializa un evento `AnimationEvent` creado utilizando el método obsoleto {{domxref("Document.createEvent()", "Document.createEvent(\"AnimationEvent\")")}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Usando animaciones CSS](/es/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- Las propiedades CSS referentes a animación y reglas: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}.
