---
title: ::after
slug: Web/CSS/::after
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

En CSS, **`::after`** crea un [pseudoelemento](/es/docs/Web/CSS/Pseudo-elements) que es el último hijo del elemento seleccionado. Es comúnmente usado para añadir contenido cosmético a un elemento con la propiedad {{CSSxRef("content")}}. Está en línea de forma predeterminada.

{{InteractiveExample("CSS Demo: ::after", "tabbed-standard")}}

```css interactive-example
a::after {
  content: " (" attr(href) ")";
}

.dead-link {
  text-decoration: line-through;
}

.dead-link::after {
  content: url("/shared-assets/images/examples/warning.svg");
  display: inline-block;
  width: 12px;
  height: 12px;
}
```

```html interactive-example
<p>
  El pez vela recibe su nombre debido a su aleta dorsal en forma de vela y es
  ampliamente considerado el pez más rápido del océano.
  <a href="https://en.wikipedia.org/wiki/Sailfish"
    >Puedes leer más sobre ello aquí</a
  >.
</p>

<p>
  El pez león rojo es un pez escorpión depredador que vive en los arrecifes de
  coral del océano Indo-Pacífico y, más recientemente, en el Atlántico
  occidental.
  <a href="" class="dead-link">Puedes leer más sobre ello aquí</a>.
</p>
```

## Sintaxis

```css-nolint
::after {
  content: /* valor */;
  /* propiedades */
}
```

## Descripción

El pseudoelemento `::after` es una caja en línea generada como una hija inmediata del elemento al que está asociado, o el «elemento de origen». Se utiliza a menudo para añadir contenido cosmético a un elemento a través de la propiedad {{CSSxRef("content")}}, como iconos, comillas, u otra decoración.

Los pseudoelementos `::after` no se pueden aplicar a _{{ glossary("replaced elements")}}_ como {{htmlelement("img")}}, cuyo contenido es determinado por recursos externos y no se ven afectados por los estilos del documento actual.

Un pseudoelemento `::after` con un valor de {{cssxref("display")}} igual a `list-item` se comporta como un elemento de lista, y por lo tanto puede generar un pseudoelemento {{cssxref("::marker")}} igual que un elemento {{htmlelement("li")}}.

Si la propiedad [`content`](/es/docs/Web/CSS/content) no está especificada, tiene un valor inválido, o tiene `normal` o `none` como valor, el pseudoelemento `::after` no se renderizará. Se comporta como si se hubiera establecido `display: none`.

> [!NOTE]
> La especificación [Selectors Level 3](https://drafts.csswg.org/selectors-3/#gen-content) introdujo la notación de doble punto `::after` para distinguir las [pseudoclasses](/es/docs/Web/CSS/Pseudo-classes) de los [pseudoelementos](/es/docs/Web/CSS/Pseudo-elements). Los navegadores también aceptan la notación de un solo punto `:after`, introducida en CSS2.

## Accesibilidad

Se desaconseja utilizar un pseudoelemento `::after` para añadir contenido, ya que no es accesible de forma fiable para los lectores de pantalla.

## Ejemplos

### Ejemplo básico

Vamos a crear dos clases: una para los párrafos aburridos y otra para los emocionantes. Podemos utilizar estas clases para añadir pseudoelementos al final de los párrafos.

#### HTML

```html
<p class="boring-text">Aquí hay un texto viejo y aburrido.</p>
<p>Aquí hay un texto normal que no es ni aburrido ni emocionante.</p>
<p class="exciting-text">Contribuir a MDN es fácil y divertido.</p>
```

#### CSS

```css
.exciting-text::after {
  content: " <- ¡IMPRESIONANTE!";
  color: darkgreen;
  font-weight: bolder;
}

.boring-text::after {
  content: " <- ABURRIDO";
  color: darkviolet;
  font-weight: bolder;
}
```

#### Resultado

{{EmbedLiveSample('Ejemplo_básico', 500, 150)}}

### Ejemplo decorativo

Podemos estilizar texto o imágenes con la propiedad {{CSSxRef("content")}} casi como queramos.

#### HTML

```html
<span class="ribbon">Mira el recuadro naranja después de este texto. </span>
```

#### CSS

```css
.ribbon {
  background-color: #5bc8f7;
}

.ribbon::after {
  content: "Esta es una elegante caja naranja.";
  background-color: #ffba10;
  border-color: black;
  border-style: dotted;
}
```

#### Resultado

{{EmbedLiveSample('Ejemplo_decorativo', 450, 20)}}

### Tooltips

Este ejemplo usa `::after` en conjunto con la expresión CSS [`attr()`](/es/docs/Web/CSS/attr) y un [atributo de datos personalizado](/es/docs/Web/HTML/Reference/Global_attributes/data-*) `data-description` para crear tooltips. ¡No es necesario JavaScript!

También podemos ayudar a los usuarios de teclado con esta técnica, añadiendo un `tabindex` de `0` para hacer que cada `span` sea enfocable desde el teclado, y utilizando un selector CSS `:focus`. Esto demuestra lo flexibles que `::before` y `::after` pueden ser, aunque para una experiencia más accesible, probablemente sea más apropiado un widget de divulgación semántica creado de alguna otra forma (como con elementos [details y summary](/es/docs/Web/HTML/Reference/Elements/details)).

#### HTML

```html
<p>
  Aquí tenemos un poco de
  <span
    tabindex="0"
    data-description="colección de palabras y signos de puntuación">
    texto
  </span>
  con algunos
  <span
    tabindex="0"
    data-description="pequeñas ventanas emergentes que aparecen al pasar el ratón por encima">
    tooltips </span
  >.
</p>
```

#### CSS

```css
span[data-description] {
  position: relative;
  text-decoration: underline;
  color: #00f;
  cursor: help;
}

span[data-description]:hover::after,
span[data-description]:focus::after {
  content: attr(data-description);
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

### Pseudoelementos anidados `::after::marker`

El [pseudoelemento anidado](/es/docs/Web/CSS/Pseudo-elements#nesting_pseudo-elements) `::after::marker` selecciona el {{CSSxRef("::marker")}} de lista de un pseudoelemento `::after` que es a su vez un elemento de lista, es decir, que tiene su propiedad {{CSSxRef("display")}} establecida a `list-item`.

En esta demo, generamos elementos de lista adicionales antes y después de un menú de navegación de lista utilizando `::before` y `::after` (configurándolos a `display: list-item` para que se comporten como elementos de lista). Luego usamos `ul::before::marker` y `ul::after::marker` para dar a sus marcadores de lista un color diferente.

#### HTML

```html
<ul>
  <li><a href="#">Introducción</a></li>
  <li><a href="#">Para empezar</a></li>
  <li><a href="#">Conceptos básicos</a></li>
</ul>
```

#### CSS

```css
ul {
  font-size: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
}

ul::before,
ul::after {
  display: list-item;
  color: orange;
}

ul::before {
  content: "Inicio";
}

ul::after {
  content: "Final";
}

ul::before::marker,
ul::after::marker {
  color: red;
}
```

#### Resultado

{{EmbedLiveSample('Pseudoelementos anidados `::after::marker`', 450, 200)}}

Mientras que las viñetas de lista de los tres elementos de navegación se generan porque son elementos `<li>`, «Inicio» y «Fin» se han insertado mediante pseudoelementos y se utiliza `::marker` para dar estilo a sus viñetas.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{CSSxRef("::before")}}
- {{CSSxRef("content")}}
