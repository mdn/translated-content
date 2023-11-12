---
title: "::before (:before)"
slug: Web/CSS/::before
---

{{CSSRef}}

En CSS, `::before` crea un [pseudoelemento](/es/docs/Web/CSS/Pseudo-elements) que es el primer hijo del elemento seleccionado. Es usado normalmente para añadir contenido estético a un elemento, usando la propiedad {{cssxref("content")}}. Este elemento se muestra en línea con el texto de forma predeterminada.

```css
/* Añade un corazón antes de los enlaces */
a::before {
  content: "♥";
}
```

> **Nota:** Los pseudoelementos generados por `::before` y `::after` son [contenidos por la caja de formato del elemento](https://www.w3.org/TR/CSS2/generate.html#before-after-content), y por lo tanto, no aplica a _[elementos de reemplazo](/es/docs/Web/CSS/Replaced_element)_ como los elementos {{htmlelement("img")}}, o {{htmlelement("br")}}.

## Sintaxis

{{csssyntax}}

> **Nota:** CSS3 introdujo la notación `::before` (con doble dos puntos) para diferenciar [pseudo-clases](/es/docs/Web/CSS/Pseudo-classes) con [pseudo-elementos](/es/docs/Web/CSS/Pseudo-elements). Los navegadores aceptan `:before`, añadido en CSS2.

## Ejemplos

### Añadiendo comillas

Un ejemplo simple del uso del pseudoelemento `::before` es el proporcionar comillas. Aquí, usamos `::before` y `{{Cssxref("::after")}}` para insertar caracteres de comillas.

#### HTML

```html
<q>Some quotes</q>, he said, <q>are better than none</q>.
```

#### CSS

```css
q::before {
  content: "«";
  color: blue;
}
q::after {
  content: "»";
  color: red;
}
```

#### Resultado

{{EmbedLiveSample('Añadiendo_comillas', '500', '50', '')}}

### Ejemplo decorativo

Podemos estilizar el texto o imágenes en la propiedad {{cssxref("content")}} de casi cualquier forma que queramos.

#### HTML

```html
<span class="ribbon">Notice where the orange box is.</span>
```

#### CSS

```css
.ribbon {
  background-color: #5bc8f7;
}

.ribbon::before {
  content: "Look at this orange box.";
  background-color: #ffba10;
  border-color: black;
  border-style: dotted;
}
```

#### Resultado

{{EmbedLiveSample('Ejemplo_decorativo', 450, 60)}}

### Lista de tareas

En este ejemplo, creamos una lista de tareas simple usando pseudo-elementos. Este método puede ser usado comúnmente para añadir detalles a la interfaz y mejorar su experiencia de usuario.

#### HTML

```html
<ul>
  <li>Buy milk</li>
  <li>Take the dog for a walk</li>
  <li>Exercise</li>
  <li>Write code</li>
  <li>Play music</li>
  <li>Relax</li>
</ul>
```

#### CSS

```css
li {
  list-style-type: none;
  position: relative;
  margin: 2px;
  padding: 0.5em 0.5em 0.5em 2em;
  background: lightgrey;
  font-family: sans-serif;
}

li.done {
  background: #ccff99;
}

li.done::before {
  content: "";
  position: absolute;
  border-color: #009933;
  border-style: solid;
  border-width: 0 0.3em 0.25em 0;
  height: 1em;
  top: 1.3em;
  left: 0.6em;
  margin-top: -1em;
  transform: rotate(45deg);
  width: 0.5em;
}
```

#### JavaScript

```js
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("done");
    }
  },
  false,
);
```

Aquí se está ejecutando el ejemplo de arriba. Nótese que no se están usando íconos, y la marca de selección en realidad es el pseudoelemento `::before` que ha sido estilizado en CSS. Puedes interactuar con el ejemplo para ver los cambios.

#### Resultado

{{EmbedLiveSample('Lista_de_tareas', 400, 300)}}

### Caracteres especiales

Como esto es CSS y no HTML, **no** se pueden usar entidades de marcado en los valores del contenido. Si se necesita usar caracteres especiales, y no se puede ingresar literalmente en la cadena de contenido CSS, se utiliza una secuencia de escape unicode, consistiendo de una barra invertida seguida de un valor unicode hexadecimal.

#### HTML

```html
<ol>
  <li>Crack Eggs into bowl</li>
  <li>Add Milk</li>
  <li>Add Flour</li>
  <li aria-current="step">Mix thoroughly into a smooth batter</li>
  <li>Pour a ladleful of batter onto a hot, greased, flat frying pan</li>
  <li>Fry until the top of the pancake loses its gloss</li>
  <li>Flip it over and fry for a couple more minutes</li>
  <li>serve with your favorite topping</li>
</ol>
```

#### CSS

```css
li {
  padding: 0.5em;
}

li[aria-current="step"] {
  font-weight: bold;
}

li[aria-current="step"]::after {
  content: " \21E6"; /* Hexadecimal for Unicode Leftwards white arrow*/
  display: inline;
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{Cssxref("::after")}}
- {{cssxref("content")}}
