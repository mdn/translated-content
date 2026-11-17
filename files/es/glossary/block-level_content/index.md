---
title: Contenido a nivel de bloque
slug: Glossary/Block-level_content
l10n:
  sourceCommit: 96a73163513476fe49bfba695acedb7622135354
---

En CSS, el contenido que participa en el diseño en bloque se denomina **contenido a nivel de bloque**.

En un diseño en bloque, las cajas se disponen una tras otra, en vertical, empezando por la parte superior de un bloque contenedor. El borde exterior izquierdo de cada caja toca el borde izquierdo del bloque contenedor.\
Un elemento a nivel de bloque siempre empieza en una línea nueva. En los modos de escritura horizontales, como los del inglés o el árabe, ocupa todo el espacio horizontal de su elemento padre (contenedor) y un espacio vertical igual a la altura de su contenido, con lo que crea un "bloque".

> [!NOTE]
> El comportamiento anterior del diseño en bloque cambia si la propiedad {{cssxref("writing-mode")}} del bloque contenedor se establece en un valor distinto del [valor predeterminado](/es/docs/Web/CSS/Reference/Properties/writing-mode#definición_formal).

> [!NOTE]
> Históricamente, los elementos de HTML (_Lenguaje de marcado de hipertexto_) se clasificaban como elementos "a nivel de bloque" o elementos "en línea". Al tratarse de una característica de presentación, esta clasificación ahora se especifica en CSS.

## Ejemplos

En este ejemplo, se colocan dos elementos de párrafo ({{HTMLElement("p")}}) dentro de un {{HTMLElement("div")}}.

```html
<div>
  <p>
    Este es el primer párrafo. El color de fondo de estos párrafos se ha
    cambiado para distinguirlos de su elemento padre.
  </p>
  <p>Este es el segundo párrafo.</p>
</div>
```

De forma predeterminada, los elementos de párrafo ({{HTMLElement("p")}}) son elementos a nivel de bloque. Por eso se muestran con un diseño en bloque:

```css hidden
p {
  background-color: #8abb55;
}
```

{{EmbedLiveSample("Ejemplos")}}

## Véase también

- Términos relacionados del glosario:
  - {{glossary("Inline-level content", "Contenido a nivel de línea")}}
- [Contexto de formato de bloque](/es/docs/Web/CSS/Guides/Display/Block_formatting_context)
- {{cssxref("display")}}
- {{cssxref("writing-mode")}}
