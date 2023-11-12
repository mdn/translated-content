---
title: animation-iteration-count
slug: Web/CSS/animation-iteration-count
---

{{ CSSRef() }}{{ SeeCompatTable() }}

## Resumen

La propiedad [CSS](/en/CSS) `animation-iteration-count` define el numero de veces que un ciclo de animación debe ser ejecutado antes de detenerse.

A menudo es conveniente utilizar la propiedad {{ cssxref("animation") }} para ajustar todas las propiedades de animación a la vez.

{{cssinfo}}

## Sintaxis

```
Sintaxis formal: {{csssyntax("animation-iteration-count")}}

animation-iteration-count: infinite;
animation-iteration-count: 3;
animation-iteration-count: 2.3;

animation-iteration-count: 2, 0, infinite;
```

### Valores

- `infinite`
  - : La animación se repetirá siempre.
- `<number>`
  - : El número de veces que la animación debe repetir: es 1 por defecto. Los valores negativos no son validos. Puede especificar valores no enteros para ejecutar parte de un ciclo de animación (por ejemplo 0.5 se ejecutara la mitad del ciclo de la animación).

## Ejemplos

Ver ejemplos [CSS animations](/es/docs/CSS/Using_CSS_animations).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Usando animaciones CSS](/es/docs/CSS/Tutorials/Using_CSS_animations)
- {{ domxref("AnimationEvent", "AnimationEvent") }}
