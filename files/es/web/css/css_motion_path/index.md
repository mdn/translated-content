---
title: CSS Motion Path
slug: Web/CSS/CSS_motion_path
---

{{CSSRef}}{{seecompattable}}

**Motion Path** es un módulo CSS que permite animar cualquier objeto gráfico a lo largo de una ruta personalizada.

La idea es que cuando se deseaba animar un elemento que se movía a lo largo de un "path", anteriormente solo teniamos las propiedades de animación, posición, etc. a nuestra disposición, lo que no era ideal y solo permitía movimientos simples. Con {{cssxref("offset-path")}} puedes definir un "path" específico de cualquier forma que se quiera. Luego se animará a lo largo de ese "path" animando {{cssxref("offset-distance")}}, y variar la rotación en algún punto usando {{cssxref("offset-rotate")}}.

## Ejemplo básico

```html
<div id="motion-demo"></div>
```

```css
#motion-demo {
  offset-path: path("M20,20 C20,100 200,0 200,100");
  animation: move 3000ms infinite alternate ease-in-out;
  width: 40px;
  height: 40px;
  background: cyan;
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

{{EmbedLiveSample('Basic_example', '100%', 150)}}

## Referéncia

### Propiedades

- {{cssxref("offset")}}
- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
