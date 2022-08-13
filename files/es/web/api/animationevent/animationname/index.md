---
title: AnimationEvent.animationName
slug: Web/API/AnimationEvent/animationName
tags:
  - API
  - Animaciones Web
  - AnimationEvent
  - CSSOM
  - Experimental
  - Propiedad
  - Referencia
translation_of: Web/API/AnimationEvent/animationName
---
{{SeeCompatTable}}{{ apiref("Web Animations API") }}

La propiedad de solo-lectura **`AnimationEvent.animationName`** es un {{domxref("DOMString")}} conteniendo el valor de la propiedad de CSS {{cssxref("animation-name")}} asociada con la transición.

## Sintaxis

    name = AnimationEvent.animationName

## Especificaciones

| Especificación                                                                                                                       | Estatus                                  | Comentario          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------- |
| {{ SpecName('CSS3 Animations', '#AnimationEvent-animationName', 'AnimationEvent.animationName') }} | {{ Spec2('CSS3 Animations')}} | Definición Inicial. |

## Compatibilidad de navegadores

{{Compat("api.AnimationEvent.animationName")}}

##

## Ver también

- [Usando animaciones CSS](/es/docs/CSS/Using_CSS_animations)
- Las propiedades CSS relacionadas con animacióny reglas: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}.
- La interface {{domxref("AnimationEvent")}} a la cual pertenece.
