---
title: overflow (excedente)
slug: Web/CSS/overflow
translation_of: Web/CSS/overflow
---
{{ CSSRef() }}

## Sumario

La propiedad CSS `overflow` especifica: si recortar contenido, dibujar barras de desplazamiento o mostrar el contenido excedente en un elemento a nivel de bloque.

Usando la propiedad `overflow` con un valor distinto a `visible`, valor por defecto, creará un nuevo [contexto de formatos de bloques](/es/docs/CSS/block_formatting_context "CSS/block_formatting_context"). Esto es técnicamente necesario debido a que si un elemento flotante interceptara con otros forzaría a reajustar el contenido alrededor de los elementos que se interceden. El reajuste sucedería luego de cada desplazamiento, y llevaría a un desplazamiento demasiado lento.

Nótese que, cambiando programáticamente el valor de `scrollTop` al elemento HTML relevante, incluso cuando `overflow` tenga el valor `hidden` un elemento podría necesitar ser desplazado.

{{cssinfo}}

## Sintaxis

    Sintáxis formal: {{csssyntax("overflow")}}

    overflow: visible
    overflow: hidden
    overflow: scroll
    overflow: auto

    overflow: inherit

### Valores

- `visible`
  - : Valor por defecto. El contenido no es recortado, podría ser dibujado fuera de la caja contenedora.
- `hidden`
  - : El contenido es recortado y no se muestran barras de posición.
- `scroll`
  - : El contenido es recortado y el navegador web usa las barras de desplazamiento, se haya recortado contenido o no. Esto previene cualquier problema con las barras de desplazamiento apareciendo o desapareciendo en un entorno dinámico. Puede que las impresoras impriman contenido excedente.
- `auto`
  - : Depende del agente de usuario. Navegadores de escritorio como Firefox proveen barras de desplazamiento si hay contenido excedente.

#### Extensiones de Mozilla

- `-moz-scrollbars-none `{{ obsolete_inline() }}
  - : Usar `overflow:hidden`.
- `-moz-scrollbars-horizontal `{{ Deprecated_inline() }}
  - : Es preferible el uso de {{ Cssxref("overflow-x") }} y {{ Cssxref("overflow-y") }}.
- `-moz-scrollbars-vertical `{{ Deprecated_inline() }}
  - : Es preferible el uso de {{ Cssxref("overflow-x") }} y {{ Cssxref("overflow-y") }}.
- \-moz-hidden-unscrollable {{ non-standard_inline() }}
  - : Es usada principalmente para uso interno y por temas. Deshabilita el desplazamiento en elementos XML root y `<html>`, `<body>` usando las flechas del teclado o la rueda del ratón.

## Ejemplos

```css
p {
     width: 12em;
     border: dotted;
     overflow: visible;   /* dibuja barras si es necesario */
}
```

`visible` (por defecto)
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

    p { overflow: hidden; /* no se dibujan barras */ }

`overflow: hidden`
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

    p { overflow: scroll; /* se dibujan ambas barras */ }

`overflow: scroll`
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

    p { overflow: auto; /* se dibujan barras según se necesite */ }

`overflow: auto`
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

## Especificaciones

| Especificación                                                                   | Estado                           | Comentario   |
| -------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{ SpecName('CSS3 Box', '#overflow1', 'overflow') }}             | {{ Spec2('CSS3 Box') }} | Sin cambios. |
| {{ SpecName('CSS2.1', 'visufx.html#overflow', 'overflow') }} | {{ Spec2('CSS2.1') }}     |              |

## Compatibilidad en navegadores

{{Compat("css.properties.overflow")}}

## Véase también

- Propiedades CSS relacionadas: {{ cssxref("text-overflow") }}, {{ cssxref("white-space") }}, {{ Cssxref("overflow-x") }}, {{ Cssxref("overflow-y") }}, {{ Cssxref("clip") }}, {{ Cssxref("display") }} (
