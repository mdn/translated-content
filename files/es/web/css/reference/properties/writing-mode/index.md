---
title: Propiedad CSS `writing-mode`
short-title: writing-mode
slug: Web/CSS/Reference/Properties/writing-mode
l10n:
  sourceCommit: e57e3fdd4ab6fb372ddc3d78e5b428f318202426
---

La propiedad [CSS](/es/docs/Web/CSS) **`writing-mode`** establece si las líneas de texto se disponen en horizontal o en vertical, así como la dirección en la que fluye el texto.

{{InteractiveExample("Demo de CSS: writing-mode")}}

```css interactive-example-choice
writing-mode: horizontal-tb;
```

```css interactive-example-choice
writing-mode: vertical-lr;
```

```css interactive-example-choice
writing-mode: vertical-rl;
```

```css interactive-example-choice
writing-mode: sideways-rl;
```

```css interactive-example-choice
writing-mode: sideways-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  padding: 0.75em;
  width: 80%;
  max-height: 300px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  margin: 10px;
}
```

## Sintaxis

```css
/* Valores de palabras clave */
writing-mode: horizontal-tb;
writing-mode: vertical-rl;
writing-mode: vertical-lr;
writing-mode: sideways-rl;
writing-mode: sideways-lr;

/* Valores globales */
writing-mode: inherit;
writing-mode: initial;
writing-mode: revert;
writing-mode: revert-layer;
writing-mode: unset;
```

### Valores

Esta propiedad se especifica con una de las siguientes palabras clave:

- `horizontal-tb`
  - : En los sistemas de escritura `ltr`, el contenido fluye en horizontal de izquierda a derecha. En los sistemas `rtl`, fluye en horizontal de derecha a izquierda. La siguiente línea horizontal se coloca debajo de la anterior.
- `vertical-rl`
  - : En los sistemas de escritura `ltr`, el contenido fluye en vertical de arriba abajo y la siguiente línea vertical se coloca a la izquierda de la anterior. En los sistemas `rtl`, el contenido fluye en vertical de abajo arriba y la siguiente línea vertical se coloca a la izquierda de la anterior.
- `vertical-lr`
  - : En los sistemas de escritura `ltr`, el contenido fluye en vertical de arriba abajo y la siguiente línea vertical se coloca a la derecha de la anterior. En los sistemas `rtl`, el contenido fluye en vertical de abajo arriba y la siguiente línea vertical se coloca a la derecha de la anterior.
- `sideways-rl`
  - : En los sistemas de escritura `ltr`, el contenido fluye en vertical de arriba abajo. En los sistemas `rtl`, fluye en vertical de abajo arriba. Todos los glifos, incluso los de los sistemas de escritura verticales, se colocan de lado hacia la derecha.
- `sideways-lr`
  - : En los sistemas de escritura `ltr`, el contenido fluye en vertical de abajo arriba. En los sistemas `rtl`, fluye en vertical de arriba abajo. Todos los glifos, incluso los de los sistemas de escritura verticales, se colocan de lado hacia la izquierda.
- `lr`
  - : Obsoleto, salvo en los documentos SVG1. En CSS, usa `horizontal-tb` en su lugar.
- `lr-tb`
  - : Obsoleto, salvo en los documentos SVG1. En CSS, usa `horizontal-tb` en su lugar.
- `rl`
  - : Obsoleto, salvo en los documentos SVG1. En CSS, usa `horizontal-tb` en su lugar.
- `tb`
  - : Obsoleto, salvo en los documentos SVG1. En CSS, usa `vertical-lr` en su lugar.
- `tb-lr` {{Deprecated_Inline}}
  - : Obsoleto, salvo en los documentos SVG1. En CSS, usa `vertical-lr` en su lugar.
- `tb-rl`
  - : Obsoleto, salvo en los documentos SVG1. En CSS, usa `vertical-rl` en su lugar.

## Descripción

La propiedad `writing-mode` establece si las líneas de texto se disponen en horizontal o en vertical. Especifica la _dirección del flujo de bloque_, que es la dirección en la que se apilan los contenedores a nivel de bloque y la dirección en la que fluye el contenido a nivel de línea dentro de un contenedor de bloque. Por tanto, también determina el orden del contenido a nivel de bloque.

La dirección del flujo en los sistemas de escritura horizontales también depende de la [direccionalidad de ese sistema de escritura](https://www.w3.org/International/questions/qa-scripts.es.html), ya sea de izquierda a derecha (`ltr`, como el inglés y la mayoría de los demás idiomas) o de derecha a izquierda (`rtl`, como el hebreo o el árabe).

Cuando se aplica a un documento entero, debe establecerse en el elemento raíz (el elemento `html` en los documentos HTML).

## Definición formal

{{CSSInfo}}

## Sintaxis formal

{{CSSSyntax}}

## Ejemplos

### Uso de varios modos de escritura

Este ejemplo demuestra todos los modos de escritura, mostrando cada uno de ellos con texto en diversos idiomas.

#### HTML

El HTML consta de una {{HTMLElement("table")}} en la que cada fila corresponde a un modo de escritura y las columnas muestran texto en distintos sistemas de escritura con ese modo.

```html
<table>
  <caption>
    Uso de varios modos de escritura
  </caption>
  <thead>
    <tr>
      <th>Valor</th>
      <th>Sistema de escritura vertical</th>
      <th>Sistema de escritura horizontal (LTR)</th>
      <th>Sistema de escritura horizontal (RTL)</th>
      <th>Sistema de escritura mixto</th>
    </tr>
  </thead>
  <tbody>
    <tr class="text1">
      <th>horizontal-tb</th>
      <td>我家没有电脑。</td>
      <td>Texto de ejemplo</td>
      <td>מלל ארוך לדוגמא</td>
      <td>1994年に至っては</td>
    </tr>
    <tr class="text2">
      <th>vertical-lr</th>
      <td>我家没有电脑。</td>
      <td>Texto de ejemplo</td>
      <td>מלל ארוך לדוגמא</td>
      <td>1994年に至っては</td>
    </tr>
    <tr class="text3">
      <th>vertical-rl</th>
      <td>我家没有电脑。</td>
      <td>Texto de ejemplo</td>
      <td>מלל ארוך לדוגמא</td>
      <td>1994年に至っては</td>
    </tr>
    <tr class="experimental text4">
      <th>sideways-lr</th>
      <td>我家没有电脑。</td>
      <td>Texto de ejemplo</td>
      <td>מלל ארוך לדוגמא</td>
      <td>1994年に至っては</td>
    </tr>
    <tr class="experimental text5">
      <th>sideways-rl</th>
      <td>我家没有电脑。</td>
      <td>Texto de ejemplo</td>
      <td>מלל ארוך לדוגמא</td>
      <td>1994年に至っては</td>
    </tr>
  </tbody>
</table>
<p class="notice">
  Tu navegador no admite los valores <code>sideways-lr</code> o
  <code>sideways-rl</code>.
</p>
```

#### CSS

```css hidden
table {
  border-collapse: collapse;
}
td,
th {
  border: 2px black solid;
  padding: 4px;
}
th {
  background-color: lightgray;
}

.experimental {
  display: none;
}

.notice {
  display: table-row;
  font-weight: bold;
  text-align: center;
}

@supports (writing-mode: sideways-lr) {
  .experimental {
    display: table-row;
  }
  .notice {
    display: none;
  }
}
```

El CSS que ajusta la direccionalidad del contenido tiene este aspecto:

```css
.text1 td {
  writing-mode: horizontal-tb;
}

.text2 td {
  writing-mode: vertical-lr;
}

.text3 td {
  writing-mode: vertical-rl;
}

.text4 td {
  writing-mode: sideways-lr;
}

.text5 td {
  writing-mode: sideways-rl;
}
```

#### Resultado

{{EmbedLiveSample("Uso_de_varios_modos_de_escritura", 400, 700)}}

### Uso de writing-mode con transformaciones

Si tu navegador no admite `sideways-lr`, una alternativa es usar {{cssxref("transform")}} para conseguir un efecto similar, según la dirección del sistema de escritura.
El efecto de `vertical-rl` es el mismo que el de `sideways-lr`, así que no hace falta ninguna transformación en los sistemas de escritura de izquierda a derecha.
En algunos casos, basta con girar el texto 180 grados para lograr el efecto de `sideways-lr`, pero los glifos de las fuentes pueden no estar diseñados para girarse, por lo que el posicionamiento o el renderizado podrían no ser los esperados.

#### HTML

```html
<table>
  <caption>
    Uso de writing-mode con transformaciones
  </caption>
  <thead>
    <tr>
      <th>Vertical LR</th>
      <th>Vertical LR con transformación</th>
      <th>Sideways LR</th>
      <th>Solo rotación</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span class="vertical-lr">我家没有电脑。</span>
        <span class="vertical-lr">Texto de ejemplo</span>
      </td>
      <td>
        <span class="vertical-lr rotated">我家没有电脑。</span>
        <span class="vertical-lr rotated">Texto de ejemplo</span>
      </td>
      <td>
        <span class="sideways-lr">我家没有电脑。</span>
        <span class="sideways-lr">Texto de ejemplo</span>
      </td>
      <td>
        <span class="only-rotate">我家没有电脑。</span>
        <span class="only-rotate">Texto de ejemplo</span>
      </td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
.vertical-lr {
  writing-mode: vertical-lr;
}

.rotated {
  transform: rotate(180deg);
}

.sideways-lr {
  writing-mode: sideways-lr;
}

.only-rotate {
  inline-size: fit-content;
  transform: rotate(-90deg);
}
```

```css hidden
table {
  border-collapse: collapse;
}
td,
th {
  border: 2px black solid;
  padding: 4px;
}
th {
  background-color: lightgray;
}
span {
  display: inline-block;
  width: 1.5em;
  text-align: center;
}
```

#### Resultado

{{EmbedLiveSample("Uso_de_writing-mode_con_transformaciones", 400, 200)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{Cssxref("direction")}}
- {{Cssxref("unicode-bidi")}}
- {{Cssxref("text-orientation")}}
- {{Cssxref("text-combine-upright")}}
- [Propiedades lógicas de CSS](/es/docs/Web/CSS/Guides/Logical_properties_and_values)
- Módulo de [modos de escritura de CSS](/es/docs/Web/CSS/Guides/Writing_modes)
- Atributo {{SVGAttr("writing-mode")}} de SVG
- [Creación de controles de formulario verticales](/es/docs/Web/CSS/Guides/Writing_modes/Vertical_controls)
- [Manejo de diferentes direcciones de texto](/es/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
- [Estilos para texto vertical (chino, japonés, coreano y mongol)](https://www.w3.org/International/articles/vertical-text/) en W3.org (2022)
