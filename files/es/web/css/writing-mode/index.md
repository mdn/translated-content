---
title: writing-mode
slug: Web/CSS/writing-mode
---

{{SeeCompatTable}}

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
    <th>Value</th>
    <th>Vertical script</th>
    <th>Horizontal (LTR) script</th>
    <th>Horizontal (RTL) script</th>
    <th>Mixed script</th>
  </tr>
  <tr>
    <td>horizontal-tb</td>
    <td class="example Text1"><span>我家没有电脑。</span></td>
    <td class="example Text1"><span>Example text</span></td>
    <td class="example Text1"><span>מלל ארוך לדוגמא</span></td>
    <td class="example Text1"><span>1994年に至っては</span></td>
  </tr>
  <tr>
    <td>vertical-lr</td>
    <td class="example Text2"><span>我家没有电脑。</span></td>
    <td class="example Text2"><span>Example text</span></td>
    <td class="example Text2"><span>מלל ארוך לדוגמא</span></td>
    <td class="example Text2"><span>1994年に至っては</span></td>
  </tr>
  <tr>
    <td>vertical-rl</td>
    <td class="example Text3"><span>我家没有电脑。</span></td>
    <td class="example Text3"><span>Example text</span></td>
    <td class="example Text3"><span>מלל ארוך לדוגמא</span></td>
    <td class="example Text3"><span>1994年に至っては</span></td>
  </tr>
  <tr>
    <td>sideways-lr</td>
    <td class="example Text4"><span>我家没有电脑。</span></td>
    <td class="example Text4"><span>Example text</span></td>
    <td class="example Text4"><span>מלל ארוך לדוגמא</span></td>
    <td class="example Text4"><span>1994年に至っては</span></td>
  </tr>
  <tr>
    <td>sideways-rl</td>
    <td class="example Text5"><span>我家没有电脑。</span></td>
    <td class="example Text5"><span>Example text</span></td>
    <td class="example Text5"><span>מלל ארוך לדוגמא</span></td>
    <td class="example Text5"><span>1994年に至っては</span></td>
  </tr>
</table>
```

```css hidden
table {
  border-collapse: collapse;
}
td,
th {
  border: 1px black solid;
  padding: 3px;
}
th {
  background-color: lightgray;
}
.example {
  height: 75px;
  width: 75px;
}
```

```css hidden
.example.Text1 span,
.example.Text1 {
  writing-mode: horizontal-tb;
}

.example.Text2 span,
.example.Text2 {
  writing-mode: vertical-lr;
}

.example.Text3 span,
.example.Text3 {
  writing-mode: vertical-rl;
}

.example.Text4 span,
.example.Text4 {
  writing-mode: sideways-lr;
}

.example.Text5 span,
.example.Text5 {
  writing-mode: sideways-rl;
}
```

{{EmbedLiveSample("Example", 400, 430)}}

### Resultado efectivo

![](screenshot_2020-02-05_21-04-30.png)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Atributo de SVG [`writing-mode`](/es/docs/Web/SVG/Attribute/writing-mode)
- {{Cssxref("direction")}}
- {{Cssxref("unicode-bidi")}}
- {{Cssxref("text-orientation")}}
- {{Cssxref("text-combine-upright")}}
