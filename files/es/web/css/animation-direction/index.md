---
title: animation-direction
slug: Web/CSS/animation-direction
---

{{ CSSRef() }}

{{ SeeCompatTable() }}

## Resumen

La propiedad CSS `animation-direction` indica si la animación debe retroceder hasta el fotograma de inicio al finalizar la secuencia o si debe comenzar desde el principio al llegar al final.

Es conveniente usar la propiedad abreviada {{ cssxref("animation") }} para ajustar todas las propiedades de animación una sola vez.

{{cssinfo}}

## Sintaxis

```
Gramática formal: [ normal | reverse | alternate | alternate-reverse ] [, [ normal | reverse | alternate | alternate-reverse ] ]*

animation-direction: normal
animation-direction: reverse
animation-direction: alternate
animation-direction: alternate-reverse
animation-direction: normal, reverse
animation-direction: alternate, reverse, normal
```

### Valores

- `normal`
  - : Cada vez que termina un ciclo, la animación se reinicia al estado inicial y comienza desde el principio. Este es el comportamiento por defecto.
- `alternate`
  - : La animación, al terminar un ciclo, invierte su dirección. Es decir, los pasos de la animación se ejecutan al revés. Además, las funciones de tiempo también se invierten; por ejemplo una animación `ease-in` se convierte en una animación con `ease-out` cuando se reproduce al revés. El contador que determina si la iteración es par o impar comienza en uno.
- `reverse`
  - : Cada ciclo de la animación se reproduce al revés . Cada vez que comienza un ciclo de animación, ésta se posiciona en el estado final y comienza desde ahí.
- `alternate-reverse`
  - : Es similar a `alternate` pero la animación se reproduce al revés. Es decir la animación se posiciona en el estado final, comienza a reproducirse al reves y, cuando llega al inicio vuelve a reproducirse de forma normal hasta llegar al final de la secuencia. Y vuelve otra vez a repetirse. El contador que determina si la iteración es par o impar comienza en uno.

## Ejemplos

Visitar [animaciones CSS](/es/docs/Web/CSS/CSS_animations/Using_CSS_animations) para ver algunos ejemplos.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Consulte también

- [Usando animaciones CSS](/es/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- {{ domxref("AnimationEvent", "AnimationEvent") }}
