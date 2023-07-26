---
title: animation-fill-mode
slug: Web/CSS/animation-fill-mode
---

{{ CSSRef() }}{{ SeeCompatTable() }}

## Definición

La propiedad [CSS](/en/CSS) `animation-fill-mode` especifica el modo en que una animación CSS aplica sus estilos, estableciendo su persistencia y estado final tras su ejecución.

{{cssinfo}}

## Sintaxis

```css
/* Single animation */
animation-fill-mode: none;
animation-fill-mode: forwards;
animation-fill-mode: backwards;
animation-fill-mode: both;

/* Multiple animations */
animation-fill-mode: none, backwards;
animation-fill-mode: both, forwards, none;

/* Global values */
animation-fill-mode: inherit;
animation-fill-mode: initial;
animation-fill-mode: revert;
animation-fill-mode: revert-layer;
animation-fill-mode: unset;
```

### Valores

- `none`
  - : La animación no aplicará los estilos antes ni después de su ejecución.
- `forwards`
  - : El objeto sobre el que se aplica la animación quedará con los valores y estilos que le aplique el último keyframe de la ejecución de la animación. El último valor dependerá del valor de {{ cssxref("animation-direction") }} y {{ cssxref("animation-iteration-count") }}:
    | `animation-direction` | `animation-iteration-count` | ultimo keyframe encontrado |
    | --------------------- | --------------------------- | -------------------------- |
    | `normal` | even o odd | `100%` or `to` |
    | `reverse` | even o odd | `0%` or `from` |
    | `alternate` | even | `0%` or `from` |
    | `alternate` | odd | `100%` or `to` |
    | `alternate-reverse` | even | `100%` or `to` |
    | `alternate-reverse` | odd | `0%` or `from` |
- `backwards`
  - : La animación aplicará los valores definidos en el primer [keyframe](/es/docs/CSS/@keyframes) tan pronto como se aplique al objeto, y los retendrá durante el tiempo de {{ cssxref("animation-delay") }}. El primer keyframe dependerá del valor de {{ cssxref("animation-direction") }}:
    | `animation-direction` | primer keyframe |
    | ------------------------------- | --------------- |
    | `normal` o `alternate` | `0%` or `from` |
    | `reverse` o `alternate-reverse` | `100%` or `to` |
- `both`
  - : La animación seguirá las reglas de las opciones forwards y backwards, extendiendo las propiedades de la animación en ambas direcciones.

## Ejemplos

Puedes ver el efecto de animation-fill-mode en el siguiente ejemplo. Para animaciones que iteran de forma infinita, puede que quieras que al final de cada iteración queden en su estado final mejor que en el estado inicial.

HTML

```html
<p>Mueve el raton sobre la caja gris</p>
<div class="demo">
  <div class="grows">Esto sólo crece</div>
  <div class="growsandstays">Esto crece y se queda grande</div>
</div>
```

CSS

```css
.demo {
  border-top: 100px solid #ccc;
  height: 300px;
  font-family: sans-serif;
}
@keyframes grow {
  0% {
    font-size: 0;
  }
  100% {
    font-size: 40px;
  }
}
@-webkit-keyframes grow {
  0% {
    font-size: 0;
  }
  100% {
    font-size: 40px;
  }
}
.demo:hover .grows {
  animation-name: grow;
  animation-duration: 3s;
  -webkit-animation-name: grow;
  -webkit-animation-duration: 3s;
}
.demo:hover .growsandstays {
  animation-name: grow;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  -webkit-animation-name: grow;
  -webkit-animation-duration: 3s;
  -webkit-animation-fill-mode: forwards;
}
```

{{ EmbedLiveSample('Example',700,300) }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Usando CSS Animations](/es/docs/CSS/Tutorials/Using_CSS_animations)
- {{ domxref("AnimationEvent", "AnimationEvent") }}
