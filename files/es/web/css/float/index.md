---
title: float
slug: Web/CSS/float
---

{{CSSRef}}

La propiedad CSS `float` ubica un elemento al lado izquierdo o derecho de su contenedor, permitiendo a los elementos de texto y en línea aparecer a su costado. El elemento es removido del normal flujo de la página, aunque aún sigue siendo parte del flujo (a diferencia del [posicionamiento absoluto](/es/docs/Web/CSS/position#Absolute_positioning)).

{{EmbedInteractiveExample("pages/css/float.html")}}

La fuente de este ejemplo interactivo está almacenada en un repositorio de GitHub. Si deseas contribuír a los ejemplos interactivos del proyecto, por favor clonar <https://github.com/mdn/interactive-examples> y enviarnos una solicitud de extracción -pull request-.

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

Nota: Al referirse a una propiedad desde JavaScript como un miembro del objeto [element.style](/es/DOM/element#element.style), hay que tener en cuenta que los navegadores modernos soportan `float` pero en navegadores más antiguos hay que escribir la propiedad como `cssFloat`, otros navegadores como Internet Explorer 8 y anteriores utilizan `styleFloat`. Fue una excepción a la regla, que el nombre del miembro DOM sea el nombre _camel-case_ (styleFloat) del nombre CSS (style-float) separado por guión (debido al hecho que "float" es una palabra reservada en JavaScript, es necesario escapar "class" como "className" y escapar "for" de la etiqueta como "htmlFor" ).

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

[Ver El Ejemplo Vivo](/samples/cssref/float.html)

Como se ha mencionado más arriba, cuando un elemento flota, es removido del flujo normal del documento (aunque sigue perteneciendo a él). Se cambia hacia la izquierda, o hacia la derecha, hasta que toca el límite de su caja contenedora, u _otro elemento flotante._

En este ejemplo, hay tres cuadrados de color. Dos flotan hacia la izquierda, y uno hacia la derecha. Nota cómo el segundo cuadrado de la izquierda se coloca a la derecha del primero. Si agregamos cuadrados adicionales se continuarían apilando hacia la derecha, hasta que hayan llenado la caja contenedora, y luego rellenarían la siguiente línea.

Un elemento flotante es al menos tan alto como su elemento hijo flotante más alto. En el ejemplo se le da al elemento padre `width: 100%` y la propiedad de flotante para asegurar que es lo suficientemente alto para encajar con sus hijos flotantes, y asegurar que ocupa el ancho -width- del padre de modo de no tener que limpiar su pariente adyacente.

**HTML**

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

**CSS**

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

- [CSS 1](http://www.w3.org/TR/CSS1#float)
- [CSS 2.1](http://www.w3.org/TR/CSS21/visuren.html#propdef-float)

### Compatibilidad de navegadores

| Navegador         | Versión mínima |
| ----------------- | -------------- |
| Internet Explorer | 4              |
| Netscape          | 4              |
| Opera             | 3.5            |

### Ver también

{{ Cssxref("clear") }}, {{ Cssxref("display") }}, {{ Cssxref("position") }}

Categorías

Interwiki Language
