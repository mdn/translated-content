---
title: "::after (:after)"
slug: Web/CSS/::after
---

{{CSSRef}}

En CSS, **`::after`** crea un [pseudo-elemento](/es/docs/Web/CSS/Pseudo-elements) que es el último hijo del elemento seleccionado. Es comunmente usado para añadir contenido cosmético a un elemento con la propiedad {{CSSxRef("content")}}.Es en linea (inline) de forma predeterminada.

```css
/* Añdade una flecha después de los enlaces */
a::after {
  content: "→";
}
```

> **Nota:** Los pseudo-elementos generados por `::before` y `::after` son [contenidos por la caja de formato del elemento](https://www.w3.org/TR/CSS2/generate.html#before-after-content), y por lo tanto no aplica a _[elementos reemplazados](/es/docs/Web/CSS/Replaced_element)_ como los elementos {{HTMLElement("img")}}, o {{HTMLElement("br")}}.

## Sintaxis

{{CSSSyntax}}

> **Nota:** CSS3 introdujo la notación `::after` (con doble dos puntos) para distinguir [pseudo-clases](/es/docs/Web/CSS/Pseudo-classes) de [pseudo-elementos](/es/docs/Web/CSS/Pseudo-elements). Los navegadores también aceptan `:after`, añadido en CSS2.

## Ejemplos

### Uso simple

Crearemos dos clases: una para párrafos aburridos y otra para párrafos interesantes. Después podremos resaltar cada párrafo añadiendo un pseudo-elemento al final del mismo.

#### HTML

```html
<p class="boring-text">Here is some plain old boring text.</p>
<p>Here is some normal text that is neither boring nor exciting.</p>
<p class="exciting-text">Contributing to MDN is easy and fun.</p>
```

#### CSS

```css
.exciting-text::after {
  content: " <- EXCITING!";
  color: green;
}

.boring-text::after {
  content: " <- BORING";
  color: red;
}
```

#### Resultado

{{EmbedLiveSample('Uso_simple', 500, 150)}}

### Ejemplo decorativo

Podemos estilizar el texto o imágenes de la propiedad {{cssxref("content")}} de casi cualquier forma que queramos.

#### HTML

```html
<span class="ribbon">Look at the orange box after this text. </span>
```

#### CSS

```css
.ribbon {
  background-color: #5bc8f7;
}

.ribbon::after {
  content: "This is a fancy orange box.";
  background-color: #ffba10;
  border-color: black;
  border-style: dotted;
}
```

#### Resultado

{{EmbedLiveSample('Ejemplo_decorativo', 450, 20)}}

### Tooltips

El siguiente ejemplo muestra el uso del [pseudo-elemento](/es/docs/Web/CSS/Pseudo-elements) `::after` en conjunto con la expresión CSS [`attr()`](/es/docs/Web/CSS/attr) y el [atributo data personalizado](/es/docs/Web/HTML/Global_attributes#attr-dataset) `data-descr` para crear un _tooltip_ de tipo glosario, completamente en CSS. Mira la vista previa más abajo, o también puedes ver el ejemplo en una [página separada.](/files/4591/css-only_tooltips.html)

#### HTML

```html
<p>
  Here we have some
  <span tabindex="0" data-descr="collection of words and punctuation"
    >text</span
  >
  with a few
  <span tabindex="0" data-descr="small popups that appear when hovering"
    >tooltips</span
  >.
</p>
```

#### CSS

```css
span[data-descr] {
  position: relative;
  text-decoration: underline;
  color: #00f;
  cursor: help;
}

span[data-descr]:hover::after,
span[data-descr]:focus::after {
  content: attr(data-descr);
  position: absolute;
  left: 0;
  top: 24px;
  min-width: 200px;
  border: 1px #aaaaaa solid;
  border-radius: 10px;
  background-color: #ffffcc;
  padding: 12px;
  color: #000000;
  font-size: 14px;
  z-index: 1;
}
```

#### Resultado

{{EmbedLiveSample('Tooltips', 450, 120)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{Cssxref("::before")}}
- {{cssxref("content")}}
