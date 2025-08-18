---
title: text-wrap
slug: Web/CSS/text-wrap
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

La propiedad abreviada de CSS **`text-wrap`** controla cómo se envuelve el texto dentro de un elemento. Los diferentes valores proporcionan:

- Mejoras tipográficas, por ejemplo, longitudes de línea más equilibradas en títulos divididos.
- Una forma de desactivar completamente el ajuste de texto.

> [!NOTE]
> Las propiedades {{CSSxRef("white-space-collapse")}} y `text-wrap` pueden declararse juntas usando la propiedad abreviada {{CSSxRef("white-space")}}.

{{InteractiveExample("CSS Demo: text-wrap")}}

```css interactive-example-choice
text-wrap: wrap;
```

```css interactive-example-choice
text-wrap: nowrap;
```

```css interactive-example-choice
text-wrap: balance;
```

```css interactive-example-choice
text-wrap: pretty;
```

```css interactive-example-choice
text-wrap: stable;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="whole-content-wrapper">
    <p>Edit the text in the box:</p>
    <div class="transition-all" id="example-element">
      <p contenteditable="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aut
        cum eum id quos est.
      </p>
    </div>
  </div>
</section>
```

```css interactive-example
.whole-content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

#example-element {
  border: 1px solid #c5c5c5;
  width: 250px;
}
```

## Propiedades constituyentes

Esta propiedad es una abreviatura de las siguientes propiedades de CSS:

- [`text-wrap-mode`](/es/docs/Web/CSS/text-wrap-mode)
- [`text-wrap-style`](/es/docs/Web/CSS/text-wrap-style)

## Sintaxis

```css
/* Valores de palabras clave */
text-wrap: wrap;
text-wrap: nowrap;
text-wrap: balance;
text-wrap: pretty;
text-wrap: stable;

/* Valores globales */
text-wrap: inherit;
text-wrap: initial;
text-wrap: revert;
text-wrap: revert-layer;
text-wrap: unset;
```

La propiedad `text-wrap` se especifica como una palabra clave única elegida de la lista de valores a continuación.

### Valores

- `wrap`
  - : El texto se envuelve en líneas en caracteres apropiados (por ejemplo, espacios en idiomas como el inglés que usan separadores de espacio) para minimizar el desbordamiento. Este es el valor predeterminado.
- `nowrap`
  - : El texto no se envuelve en líneas. Desbordará su elemento contenedor en lugar de dividirse en una nueva línea.
- `balance`
  - : El texto se envuelve de una manera que equilibra mejor el número de caracteres en cada línea, mejorando la calidad y la legibilidad del diseño. Dado que contar caracteres y equilibrarlos en varias líneas es computacionalmente costoso, este valor solo es compatible con bloques de texto que abarcan un número limitado de líneas (seis o menos para Chromium y diez o menos para Firefox).
- `pretty`
  - : Da como resultado el mismo comportamiento que `wrap`, excepto que el agente de usuario utilizará un algoritmo más lento que favorece un mejor diseño sobre la velocidad. Esto está destinado al texto principal donde se prefiere una buena tipografía sobre el rendimiento (por ejemplo, cuando se debe minimizar el número de palabras [huérfanas](/es/docs/Web/CSS/orphans)).
- `stable`
  - : Da como resultado el mismo comportamiento que `wrap`, excepto que cuando el usuario está editando el contenido, las líneas que preceden a las líneas que están editando permanecen estáticas en lugar de que todo el bloque de texto se vuelva a ajustar.

## Descripción

Hay dos formas en que el texto puede fluir a través de líneas dentro de un bloque de contenido, como un párrafo ({{HTMLElement("p")}}) o encabezados ({{HTMLElement("heading_elements","&lt;h1&gt;–&lt;h6&gt;")}}). Estos son _saltos de línea forzados_, que son controlados por el usuario, y _saltos de línea suaves_, que son controlados por el navegador. La propiedad `text-wrap` se puede usar para indicar al navegador cómo controlar los _saltos de línea suaves_.

El valor que elija para `text-wrap` depende de cuántas líneas de texto anticipe estilizar, si el texto es `contenteditable` (contenido editable), y si necesita priorizar la apariencia o el rendimiento.

Cuando el contenido estilizado se limitará a un número corto de líneas, como títulos, leyendas y citas en bloque, se puede agregar `text-wrap: balance` para equilibrar el número de caracteres en cada línea, mejorando la calidad y la legibilidad del diseño. Dado que los navegadores limitan el número de líneas afectadas por esta propiedad, el impacto de este valor en el rendimiento es insignificante.

Para secciones de texto más largas, se puede usar `text-wrap: pretty`. Tenga en cuenta que `pretty` tiene un efecto negativo en el rendimiento, por lo que solo debe usarse para bloques de texto más largos cuando el diseño es más importante que la velocidad.

El valor `stable` mejora la experiencia del usuario cuando se usa en [`contenteditable`](/es/docs/Web/HTML/Reference/Global_attributes/contenteditable) (contenido que es editable). Este valor asegura que, a medida que el usuario está editando texto, las líneas anteriores en el área que se está editando permanezcan estables.

## Definición formal

{{CSSInfo}}

## Sintaxis formal

{{CSSSyntax}}

## Ejemplos

### Comparación de valores básicos de text-wrap

#### HTML

```html
<h2 class="wrap" contenteditable="true">
  El comportamiento predeterminado; el texto en el título se envuelve
  "normalmente"
</h2>

<h2 class="nowrap" contenteditable="true">
  En este caso, el texto en el título no se envuelve y desborda el contenedor
</h2>

<h2 class="balance" contenteditable="true">
  En este caso, el texto en el título está bien equilibrado entre líneas
</h2>
```

### CSS

```css
.wrap {
  text-wrap: wrap;
}

.nowrap {
  text-wrap: nowrap;
}

.balance {
  text-wrap: balance;
}

h2 {
  font-size: 2rem;
  font-family: sans-serif;
}
```

#### Resultado

El texto en el ejemplo es editable. Cambie el texto, agregando palabras largas, para ver cómo las diferentes longitudes de la línea y las palabras impactan el envoltorio.

{{EmbedLiveSample("Ejemplos", "100%", 350)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con los navegadores

{{Compat}}

## Véase también

- {{CSSxRef("white-space")}}
- {{CSSxRef("white-space-collapse")}}
- [Módulo de texto CSS](/es/docs/Web/CSS/CSS_text)
- [CSS `text-wrap: balance`](https://developer.chrome.com/docs/css-ui/css-text-wrap-balance) en developer.chrome.com
- [CSS `text-wrap: pretty`](https://developer.chrome.com/blog/css-text-wrap-pretty/) en developer.chrome.com
