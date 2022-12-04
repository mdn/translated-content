---
title: writing-mode
slug: Web/CSS/writing-mode
---

{{CSSRef}}{{SeeCompatTable}}

## Resumen

La propiedad **`writing-mode`** define si los renglones de texto se disponen horizontal o verticalmente y la dirección en que avanzan los bloques.

La propiedad especifica la _dirección de flujo de bloques_, que es la dirección en que se apilan los contenedores a nivel de bloque y la dirección en que el contenido a nivel de línea fluye dentro de un contenedor de bloque. Por ende, la propiedad `writing-mode` también determina la ordenación del contenido a nivel de bloque.

{{cssinfo}}

## Sintaxis

```css
/* Valores de la palabra clave */
writing-mode: horizontal-tb;
writing-mode: vertical-rl;
writing-mode: vertical-lr;

/* Valores globales */
writing-mode: inherit;
writing-mode: initial;
writing-mode: unset;
```

### Valores

- `horizontal-tb`
  - : El contenido fluye horizontalmente de izquierda a derecha y verticalmente de arriba hacia abajo. El próximo renglón horizontal se posiciona debajo del renglón anterior.
- `vertical-rl`
  - : El contenido fluye verticalmente de arriba hacia abajo y horizontalmente de derecha a izquierda. El próximo renglón vertical se posiciona a la izquierda del renglón anterior.
- `vertical-lr`
  - : El contenido fluye verticalmente de arriba hacia abajo y horizontalmente de izquierda a derecha. El próximo renglón vertical se posiciona a la derecha del renglón anterior.
- `sideways-rl`{{experimental_inline}}
  - : El contenido fluye verticalmente de arriba hacia abajo y todos los glifos, incluidos aquellos de los sistemas de escritura verticales, se colocan de lado hacia la derecha.

<!---->

- `sideways-lr`{{experimental_inline}}
  - : El contenido fluye verticalmente de arriba hacia abajo y todos los glifos, incluidos aquellos de los sistemas de escritura verticales, se colocan de lado hacia la izquierda.
- `lr` {{deprecated_inline}}
  - : Desaprobado, excepto en los documentos SVG1. En CSS utilice `horizontal-tb`.
- `lr-tb` {{deprecated_inline}}
  - : Desaprobado, excepto en los documentos SVG1. En CSS utilice `horizontal-tb`.
- `rl` {{deprecated_inline}}
  - : Desaprobado, excepto en los documentos SVG1. En CSS utilice `horizontal-tb`.
- `tb` {{deprecated_inline}}
  - : Desaprobado, excepto en los documentos SVG1. En CSS utilice `vertical-rl`.
- `tb-rl` {{deprecated_inline}}
  - : Desaprobado, excepto en los documentos SVG1. En CSS utilice `vertical-rl`.

### Sintaxis formal

{{csssyntax}}

## Ejemplo

```html hidden
<table>
    <tr>
        <th>value</th>
        <th>Sistema de escritura vertical</th>
        <th>Sistema de escritura horizontal</th>
        <th>Escritura mixta</th>
    </tr>
    <tr>
        <td>horizontal-tb</td>
        <td class="exampleText1">我家没有电脑。</td>
        <td class="exampleText1">Texto de ejemplo</td>
        <td class="exampleText1">1994年に至っては</td>
    </tr>
    <tr>
        <td>vertical-lr</td>
        <td class="exampleText2">我家没有电脑。</td>
        <td class="exampleText2">Texto de ejemplo</td>
        <td class="exampleText2">1994年に至っては</td>
    </tr>
    <tr>
        <td>vertical-rl</td>
        <td class="exampleText3">我家没有电脑。</td>
        <td class="exampleText3">Texto de ejemplo</td>
        <td class="exampleText3">1994年に至っては</td>
    </tr>
    <tr>
        <td>sideways-lr</td>
        <td class="exampleText4">我家没有电脑。</td>
        <td class="exampleText4">Texto de ejemplo</td>
        <td class="exampleText4">1994年に至っては</td>
    </tr>
    <tr>
        <td>sideways-rl</td>
        <td class="exampleText5">我家没有电脑。</td>
        <td class="exampleText5">Texto de ejemplo</td>
        <td class="exampleText5">1994年に至っては</td>
    </tr>
```

```css hidden
table { border-collapse:collapse; }
td, th {border: 1px black solid; padding: 3px; }
th {background-color: lightgray; }
.exampleText1 { width:75px; writing-mode: horizontal-tb; -webkit-writing-mode: horizontal-tb; -ms-writing-mode: horizontal-tb; }
.exampleText2 { height:75px; writing-mode: vertical-lr; -webkit-writing-mode: vertical-lr; -ms-writing-mode: vertical-lr; }
.exampleText3 { height:75px; writing-mode: vertical-rl; -webkit-writing-mode: vertical-rl; -ms-writing-mode: vertical-rl; }
.exampleText4 { height:75px; writing-mode: sideways-lr; -webkit-writing-mode: sideways-lr; -ms-writing-mode: sideways-lr; }
.exampleText5 { height:75px; writing-mode: sideways-rl; -webkit-writing-mode: sideways-rl; -ms-writing-mode: sideways-rl; }
```

{{EmbedLiveSample("Example", 400, 430)}}

### Resultado efectivo

![](https://mdn.mozillademos.org/files/12201/writing-mode-actual-result.png)

## Especificaciones

{{Specifications}}

## Compatibilidad entre navegadores

{{Compat("css.properties.writing-mode")}}

## Véase también

- Atributo de SVG [`writing-mode`](/es/docs/Web/SVG/Attribute/writing-mode)
- {{Cssxref("direction")}}
- {{Cssxref("unicode-bidi")}}
- {{Cssxref("text-orientation")}}
- {{Cssxref("text-combine-upright")}}
