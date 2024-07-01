---
title: animation-name
slug: Web/CSS/animation-name
---

{{CSSRef}}{{SeeCompatTable}}

## Resumen

La propiedad [CSS](/es/docs/CSS) animation-name especifica una lista de animaciones que se deben aplicar al elemento seleccionado. Cada nombre indica un {{cssxref("@keyframes")}} esta regla define los valores de las propiedades de la secuencia de animación.

A menudo es conveniente utilizar la propiedad abrevieda {{cssxref("animation")}} para ajustar todas las propiedades de animación a la vez.

{{cssinfo}}

## Sintaxis

```
Sintaxis formal: {{csssyntax("animation-name")}}

animation-name: none;
animation-name: test_05;
animation-name: -specific;
animation-name: sliding-vertically;

animation-name: test1;
animation-name: test1, animation4;
animation-name: none, -moz-specific, sliding;

animation-name: initial;
animation-name: inherit;
animation-name: unset;
```

### Valores

`<single-animation-name>` es una de las siguientes palabras clave:

- `none`
  - : Es una palabra clave especial que denota que no hay fotogramas (keyframes) clave. Se puede utilizar para desactivar una animación sin cambiar el orden de los otros identificadores, o para desactivar animaciones procedentes de las cascada.
- {{cssxref("custom-ident","&lt;custom-ident&gt;")}}
  - : Cadena que identifica la animación. Este identificador está compuesto por una combinación de letras mayúsculas y minúsculas de la "A"a la "Z", números del 0 al 9, guiones bajos "\_" y/o guiones "-". el primer caracter siempre debe ser una letra, ni un numero, excepto un guión (no se pueden poner dos guiones seguidos o más al principio del nombre.) No puede usarse `none`, `unset`, `initial`, o `inherit` ni ninguna combinación de estos casos.

## Ejemplos

Ver ejemplos [CSS animations](/es/docs/CSS/CSS_animations).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Usando CSS animations](/es/docs/CSS/Tutorials/Using_CSS_animations)
- {{domxref("AnimationEvent", "AnimationEvent")}}
