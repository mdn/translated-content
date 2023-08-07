---
title: "-webkit-overflow-scrolling"
slug: Web/CSS/-webkit-overflow-scrolling
---

{{CSSRef}}{{Non-standard_header}}

La propiedad CSS `-webkit-overflow-scrolling` controla si los dispositivos táctiles usan el desplazamiento momentum o inercial (momentum-based scroll) para el elemento dado.

{{cssinfo}}

## Valores

- `auto`
  - : Usa el desplazamiento (scroll) normal, donde el contenido deja inmediatamente de desplazarse cuando quitas el dedo de la pantalla.
- `touch`
  - : Use el desplazamiento momentum o inercial, donde el contenido sigue desplazándose después incluso de haber acabado el gesto de control y de haber quitado el dedo de la pantalla. La velocidad y duración de esta continuación es proporcional a cuán fuerte fue el gesto de desplazamiento o scroll. Además se crea un nuevo contexto de apilado (stacking context).

### Sintaxis Formal

{{csssyntax}}

## Ejemplos

### HTML

```html
<div class="scroll-touch">
  <p>This paragraph has momentum scrolling</p>
</div>
<div class="scroll-auto">
  <p>This paragraph does not.</p>
</div>
```

### CSS

```css
div {
  width: 100%;
  overflow: auto;
}

p {
  width: 200%;
  background: #f5f9fa;
  border: 2px solid #eaf2f4;
  padding: 10px;
}

.scroll-touch {
  -webkit-overflow-scrolling: touch; /* Lets it scroll lazy */
}

.scroll-auto {
  -webkit-overflow-scrolling: auto; /* Stops scrolling immediately */
}
```

### Resultado

{{EmbedLiveSample('Examples')}}

## Especificaciones

No es parte de ninguna especificación. Apple tiene una [descripción en la Referencia CSS de Safari.](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/css/property/-webkit-overflow-scrolling)

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Artículo en CSS-Tricks con ejemplo](http://css-tricks.com/snippets/css/momentum-scrolling-on-ios-overflow-elements/)
- [Smashing Magazine- describiendo el efecto del scroll con rebote y cómo funciona en diferentes navegadores](https://www.smashingmagazine.com/2018/08/scroll-bouncing-websites/)
