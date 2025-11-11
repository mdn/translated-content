---
title: float
slug: Web/CSS/float
---

La propiedad CSS `float` ubica un elemento al lado izquierdo o derecho de su contenedor, permitiendo a los elementos de texto y en línea aparecer a su costado. El elemento es removido del normal flujo de la página, aunque aún sigue siendo parte del flujo (a diferencia del [posicionamiento absoluto](/es/docs/Web/CSS/position#absolute_positioning)).

{{InteractiveExample("CSS Demo: float")}}

```css interactive-example-choice
float: none;
```

```css interactive-example-choice
float: left;
```

```css interactive-example-choice
float: right;
```

```css interactive-example-choice
float: inline-start;
```

```css interactive-example-choice
float: inline-end;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">Float me</div>
    As much mud in the streets as if the waters had but newly retired from the
    face of the earth, and it would not be wonderful to meet a Megalosaurus,
    forty feet long or so, waddling like an elephantine lizard up Holborn Hill.
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 1px solid #c5c5c5;
  padding: 0.75em;
  text-align: left;
  width: 80%;
  line-height: normal;
}

#example-element {
  border: solid 10px #efac09;
  background-color: #040d46;
  color: white;
  padding: 1em;
  width: 40%;
}
```

Un elemento **flotante** es un elemento en el que el {{ Cssxref("computed value", "valor calculado") }} de `float` _no_ es igual a `none`.

Como `float` implica el uso del layout de bloques, este modifica el valor calculado de los valores {{cssxref("display")}} , en algunos casos:

| **Valor especificado** | **Valor Computado** |
| ---------------------- | ------------------- |
| inline                 | block               |
| inline-block           | block               |
| inline-table           | table               |
| table-row              | block               |
| table-row-group        | block               |
| table-column           | block               |
| table-column-group     | block               |
| table-cell             | block               |
| table-caption          | block               |
| table-header-group     | block               |
| table-footer-group     | block               |
| inline-flex            | flex                |
| inline-grid            | grid                |
| otros                  | sin cambios         |

Nota: Al referirse a una propiedad desde JavaScript como un miembro del objeto [element.style](/es/docs/Web/API/Element#element.style), hay que tener en cuenta que los navegadores modernos soportan `float` pero en navegadores más antiguos hay que escribir la propiedad como `cssFloat`, otros navegadores como Internet Explorer 8 y anteriores utilizan `styleFloat`. Fue una excepción a la regla, que el nombre del miembro DOM sea el nombre _camel-case_ (styleFloat) del nombre CSS (style-float) separado por guión (debido al hecho que "float" es una palabra reservada en JavaScript, es necesario escapar "class" como "className" y escapar "for" de la etiqueta como "htmlFor" ).

## Sintáxis

```
/* Valores clave || Keyword values */
float: left;
float: right;
float: none;
float: inline-start;
float: inline-end;

/* Valores globales || Global values */
float: inherit;
float: initial;
float: unset;
```

### Valores

**`left`**

El elemento debe flotar a la izquierda de su bloque contenedor.

**`right`**

El elemento debe flotar a la derecha de su bloque contenedor.

**`none`**

El elemento no deberá flotar.

**`inline-start`**

El elemento debe flotar en el costado de inicio de su bloque contenedor. Esto es el lado izquierdo con scripts `ltr` y el lado derecho con scripts `rtl`.

- `inline-end`
  - : El elemento debe flotar en el costado de término de su bloque contenedor . Esto es el lado derecho con scripts `ltr` y el lado izquierdo con scripts `rtl`.

## Definición Formal

{{cssinfo}}

## Sintáxis Formal

{{csssyntax}}

## Ejemplos

### Como son ubicados los elements flotantes

[Ver El Ejemplo Vivo](https://mdn.dev/archives/media/samples/cssref/float.html)

Como se ha mencionado más arriba, cuando un elemento flota, es removido del flujo normal del documento (aunque sigue perteneciendo a él). Se cambia hacia la izquierda, o hacia la derecha, hasta que toca el límite de su caja contenedora, u _otro elemento flotante._

En este ejemplo, hay tres cuadrados de color. Dos flotan hacia la izquierda, y uno hacia la derecha. Nota cómo el segundo cuadrado de la izquierda se coloca a la derecha del primero. Si agregamos cuadrados adicionales se continuarían apilando hacia la derecha, hasta que hayan llenado la caja contenedora, y luego rellenarían la siguiente línea.

Un elemento flotante es al menos tan alto como su elemento hijo flotante más alto. En el ejemplo se le da al elemento padre `width: 100%` y la propiedad de flotante para asegurar que es lo suficientemente alto para encajar con sus hijos flotantes, y asegurar que ocupa el ancho -width- del padre de modo de no tener que limpiar su pariente adyacente.

#### HTML

```html
<section>
  <div class="left">1</div>
  <div class="left">2</div>
  <div class="right">3</div>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique
    sapien ac erat tincidunt, sit amet dignissim lectus vulputate. Donec id
    iaculis velit. Aliquam vel malesuada erat. Praesent non magna ac massa
    aliquet tincidunt vel in massa. Phasellus feugiat est vel leo finibus
    congue.
  </p>
</section>
```

#### CSS

```css
section {
  border: 1px solid blue;
  width: 100%;
  float: left;
}

div {
  margin: 5px;
  width: 50px;
  height: 150px;
}

.left {
  float: left;
  background: pink;
}

.right {
  float: right;
  background: cyan;
}
```

**RESULTADO:**

{{EmbedLiveSample('','400','180')}}

### Limpiando (clearing) flotantes

A veces querrás forzar un item a moverse por debajo de elementos flotantes. Por ejemplo, párrafos que han de permanecer adyacentes a elementos flotantes, pero forzar a los encabezados a estar en su propia línea. Para ello revisa el siguiente ejemplo: {{cssxref("clear")}}

### Especificaciones

{{Specifications}}

### Compatibilidad con navegadores

{{Compat}}

### Ver también

{{ Cssxref("clear") }}, {{ Cssxref("display") }}, {{ Cssxref("position") }}
