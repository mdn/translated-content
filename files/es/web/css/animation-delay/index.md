---
title: animation-delay
slug: Web/CSS/animation-delay
---

{{ CSSRef() }}

{{ SeeCompatTable() }}

## Resumen

La propiedad [CSS](/en/CSS) `animation-delay` especifica el tiempo de retardo que debe transcurrir antes de comenzar la animación. Esto permite que la secuencia de animación no comience nada más ser aplicada a un elemento.

El valor 0, que es el valor por defecto, indica que la animación debería comenzar inmediatamente. Usando otro valor, definimos el retardo entre el momento en que el elemento recibe la animación y el comienzo de la secuencia de la misma.

Si especificamos un valor negativo, la animación comenzará inmediatamente, pero no desde el principio de la misma, sino desde el punto que le hemos indicado. Por ejemplo, si ponemos un retardo de -1s, la animación se iniciará inmediatamente pero comenzará en el segundo 1 de la secuencia.

Si se especifica un valor negativo para el retraso de la animación, pero el valor de inicio es implícito, el valor inicial es tomado desde el momento en que la animación es aplicada al elemento.

A menudo es conveniente usar la propiedad abreviada {{ cssxref("animation") }} para ajustar las propiedades de animación una sola vez.

{{cssinfo}}

## Sintaxis

```
Gramática formal: <time> [, <time>]*

animation-delay: 3s
animation-delay: 2s, 4ms
```

### Valores

- `<time>`
  - : El espacio de tiempo que debe transcurrir desde que la animación se aplica al elemento y el comienzo de la misma. Podemos especificarlo en segundos (usando `s`) o milisegundos (usando `ms`). Si no especificamos la unidad, la sentencia no será válida.

## Ejemplos

Visitar [animaciones CSS](/es/CSS/Usando_animaciones_CSS) para ver algunos ejemplos.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Consulte también

- [Usando animaciones CSS](/es/docs/CSS/Using_CSS_animations)
- {{ domxref("AnimationEvent", "AnimationEvent") }}
