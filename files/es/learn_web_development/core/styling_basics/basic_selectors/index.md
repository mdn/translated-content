---
title: Selectores CSS básicos
short-title: Selectores básicos
slug: Learn_web_development/Core/Styling_basics/Basic_selectors
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}

Ya has visto cómo, en {{Glossary("CSS")}}, los selectores se usan para seleccionar los elementos {{glossary("HTML")}} de nuestras páginas web a los que queremos dar estilo. Hay una gran variedad de selectores CSS disponibles, que permiten una precisión muy fina al seleccionar los elementos a los que dar estilo, y en los próximos artículos veremos los distintos tipos en profundidad. En este artículo repasaremos algunos fundamentos de los selectores, incluidos los selectores básicos de tipo, de clase y de ID, y las listas de selectores. También presentaremos el selector universal.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Conceptos básicos de HTML (estudia
        <a href="/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Sintaxis básica de HTML</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>Los tipos de selectores básicos: de tipo de elemento, de clase y de ID.</li>
          <li>Entender que los ID son únicos en cada documento: deberías usar un ID para seleccionar un elemento concreto.</li>
          <li>Entender que un elemento puede tener varias clases, y que estas se pueden usar para ir añadiendo estilos por capas según haga falta.</li>
          <li>Las listas de selectores.</li>
          <li>El selector universal.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## ¿Qué es un selector?

Un selector CSS es la primera parte de una regla CSS. Es un patrón de elementos y otros términos que indica al navegador a qué elementos HTML hay que aplicar los valores de las propiedades CSS de la regla. Al elemento o los elementos seleccionados por el selector se les llama _sujeto del selector_.

![Un fragmento de código con el h1 resaltado.](selector.png)

En artículos anteriores conociste varios selectores y aprendiste que hay selectores que seleccionan partes del documento de distintas formas; por ejemplo, seleccionando un elemento como `h1` o una clase como `.special`. Empecemos repasando los principales que ya has visto.

## Selectores de tipo

Un **selector de tipo** a veces se llama _selector de nombre de etiqueta_ o _selector de elemento_, porque selecciona una etiqueta o un elemento HTML de tu documento. En el ejemplo siguiente, hemos usado los selectores `span`, `em` y `strong`.

Prueba a editar el siguiente ejemplo (haz clic en **"Play"** para abrirlo en el MDN Playground) para añadir una regla CSS que seleccione el elemento `<h1>` y cambie su color a azul:

```html live-sample___type
<h1>Selectores de tipo</h1>
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis
  <span>kohlrabi welsh onion</span> daikon amaranth tatsoi tomatillo melon azuki
  bean garlic.
</p>

<p>
  Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley
  shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra
  wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
</p>

<p>
  Turnip greens yarrow ricebean rutabaga <em>endive cauliflower</em> sea lettuce
  kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
  purslane kale. Celery potato scallion desert raisin horseradish spinach
</p>
```

```css live-sample___type
body {
  font-family: sans-serif;
}

span {
  background-color: yellow;
}

strong {
  color: rebeccapurple;
}

em {
  color: rebeccapurple;
}
```

{{EmbedLiveSample("type", "", "280px")}}

## Selectores de clase

El selector de clase, que distingue entre mayúsculas y minúsculas, empieza con un carácter de punto (`.`). Selecciona todo lo que haya en el documento que tenga aplicada esa clase. En el ejemplo en vivo de abajo, hemos creado una clase llamada `highlight` y la hemos aplicado en varios lugares del documento. Todos los elementos con esa clase aparecen resaltados.

```html live-sample___class
<h1 class="highlight">Selectores de clase</h1>
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis
  <span class="highlight">kohlrabi welsh onion</span> daikon amaranth tatsoi
  tomatillo melon azuki bean garlic.
</p>

<p class="highlight">
  Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley
  shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra
  wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
</p>
```

```css live-sample___class
body {
  font-family: sans-serif;
}

.highlight {
  background-color: yellow;
}
```

{{EmbedLiveSample("class", "", "220px")}}

### Jugar con los selectores de clase

Prueba a editar el ejemplo anterior (con el MDN Playground) para hacer los siguientes cambios:

1. Edita el HTML para cambiar el contenido al que se aplican los estilos de `.highlight`. Por ejemplo, podrías añadir algunos elementos `<span>` que envuelvan distintas partes del contenido existente y aplicarles la clase `highlight`, quitar algunas clases `highlight` existentes o añadir contenido nuevo al que aplicar la clase `highlight`.
2. Edita el CSS para modificar las declaraciones de la regla `.highlight`, añadiendo otras nuevas si te apetece, y fíjate en cómo afecta al estilo de todos los elementos que tienen aplicada la clase `highlight`.
3. Crea en el CSS una nueva regla de clase con declaraciones distintas (por ejemplo, con el selector `.highlight2`) y prueba a aplicarla a parte de tu HTML.

### Seleccionar clases en elementos concretos

Puedes crear un selector que seleccione elementos concretos con la clase aplicada. En el siguiente ejemplo, resaltaremos un `<span>` con la clase `highlight` de forma distinta a un encabezado `<h1>` con la clase `highlight`. Para ello, usamos el selector de tipo del elemento que queremos seleccionar, con la clase añadida mediante un punto, sin espacios en blanco entre ambos.

```html live-sample___class-type
<h1 class="highlight">Selectores de clase</h1>
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis
  <span class="highlight">kohlrabi welsh onion</span> daikon amaranth tatsoi
  tomatillo melon azuki bean garlic.
</p>

<p class="highlight">
  Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley
  shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra
  wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
</p>
```

```css live-sample___class-type
body {
  font-family: sans-serif;
}

span.highlight {
  background-color: yellow;
}

h1.highlight {
  background-color: pink;
}
```

{{EmbedLiveSample("class-type", "", "200px")}}

Este enfoque reduce el alcance de una regla. La regla solo se aplicará a esa combinación concreta de elemento y clase. Tendrías que añadir otro selector si quisieras que la regla se aplicara a otros elementos.

### Seleccionar un elemento si tiene más de una clase aplicada

Puedes aplicar varias clases a un elemento y seleccionarlas por separado, o seleccionar el elemento solo cuando estén presentes todas las clases del selector. Puede ser útil al construir componentes que se pueden combinar de distintas formas en tu sitio.

En el ejemplo de abajo, tenemos un `<div>` que contiene una nota. El borde gris se aplica cuando la caja tiene la clase `notebox`. Si además tiene la clase `warning` o `danger`, cambiamos el {{cssxref("border-color")}}.

Podemos indicar al navegador que solo queremos que coincida con el elemento si tiene las dos clases aplicadas encadenándolas sin espacios en blanco entre ellas. Verás que el último `<div>` no recibe ningún estilo, porque solo tiene la clase `danger`. Para recibir estilos, también necesita la clase `notebox`.

```html live-sample___class-many
<div class="notebox">Esta es una nota informativa.</div>

<div class="notebox warning">Esta nota muestra una advertencia.</div>

<div class="notebox danger">¡Esta nota muestra peligro!</div>

<div class="danger">
  Esta no recibirá estilo: también necesita tener la clase notebox
</div>
```

```css live-sample___class-many
body {
  font-family: sans-serif;
}

.notebox {
  border: 4px solid #666666;
  padding: 0.5em;
  margin: 0.5em;
}

.notebox.warning {
  border-color: orange;
  font-weight: bold;
}

.notebox.danger {
  border-color: red;
  font-weight: bold;
}
```

{{EmbedLiveSample("class-many", "", "200px")}}

## Selectores de ID

El selector de ID, que distingue entre mayúsculas y minúsculas, empieza con `#` en lugar de con un punto, pero se usa igual que un selector de clase. La diferencia es que un ID solo se puede usar una vez por página, y los elementos solo pueden tener un único valor de `id`. Un selector de ID selecciona un elemento con un `id` concreto, y puedes anteponer al ID un selector de tipo para seleccionar el elemento solo si coinciden tanto el elemento como el ID. Puedes ver estos dos usos en el siguiente ejemplo:

```html live-sample___id
<h1 id="heading">Selector de ID</h1>
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
  daikon amaranth tatsoi tomatillo melon azuki bean garlic.
</p>

<p id="one">
  Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley
  shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra
  wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
</p>
```

```css live-sample___id
body {
  font-family: sans-serif;
}

#one {
  background-color: yellow;
}

h1#heading {
  color: rebeccapurple;
}
```

{{EmbedLiveSample("id", "", "200px")}}

> [!WARNING]
> Usar el mismo ID varias veces en un documento puede parecer que funciona para dar estilo, pero no lo hagas. Da lugar a código no válido y provocará comportamientos extraños en muchos sitios.

### Jugar con los selectores de ID

Prueba a editar el ejemplo anterior para hacer los siguientes cambios:

1. Edita el HTML para aplicar los estilos de `#one` al primer párrafo en lugar de al segundo.
2. Edita el CSS para modificar las declaraciones de los selectores de ID, y fíjate en cómo cambia el aspecto del HTML.

## Listas de selectores

Si quieres aplicar el mismo CSS a varios elementos, puedes combinar selectores individuales en una _lista de selectores_. La regla se aplica entonces a todos los selectores individuales. Por ejemplo, si tengo el mismo CSS para un `h1` y para un selector `.special`, podría escribirlo como dos reglas separadas.

```css
h1 {
  color: blue;
}

.special {
  color: blue;
}
```

También podría combinarlos en una lista de selectores añadiendo una coma entre ellos.

```css-nolint
h1, .special {
  color: blue;
}
```

Se permiten espacios en blanco antes o después de la coma. Quizá también te resulten más legibles los selectores si cada uno está en una línea nueva.

```css
h1,
.special {
  color: blue;
}
```

### Jugar con las listas de selectores

En el ejemplo de abajo, prueba a combinar los dos selectores que tienen declaraciones idénticas. El resultado visual debería ser el mismo después.

```html live-sample___selector-list
<h1>Selectores de tipo</h1>
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis
  <span>kohlrabi welsh onion</span> daikon amaranth tatsoi tomatillo melon azuki
  bean garlic.
</p>

<p>
  Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley
  shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra
  wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
</p>

<p>
  Turnip greens yarrow ricebean rutabaga <em>endive cauliflower</em> sea lettuce
  kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
  purslane kale. Celery potato scallion desert raisin horseradish spinach
</p>
```

```css live-sample___selector-list
body {
  font-family: sans-serif;
}
span {
  background-color: yellow;
}

strong {
  color: rebeccapurple;
}

em {
  color: rebeccapurple;
}
```

{{EmbedLiveSample("selector-list", "", "280px")}}

### Selectores no válidos en las listas de selectores

Cuando agrupas selectores de esta forma, si algún selector no es sintácticamente válido, se ignorará toda la regla.

En el siguiente ejemplo, se ignorará la regla con el selector de clase no válido, mientras que el `h1` seguirá recibiendo estilo.

```css-nolint
h1 {
  color: blue;
}

..special {
  color: blue;
}
```

Sin embargo, al combinarlos, ni el `h1` ni la clase recibirán estilo, porque se considera que toda la regla no es válida.

```css-nolint
h1, ..special {
  color: blue;
}
```

## El selector universal

El selector universal se indica con un asterisco (`*`). Selecciona todo lo que hay en el documento. Si `*` se encadena con un [combinador de descendientes](/es/docs/Web/CSS/Reference/Selectors/Descendant_combinator), selecciona todo lo que hay dentro de ese elemento antecesor. Por ejemplo, `p *` selecciona todos los elementos anidados dentro del elemento `<p>`.

En el siguiente ejemplo, usamos el selector universal para quitar los márgenes de todos los elementos. En lugar del estilo predeterminado del navegador, que separa los encabezados y los párrafos con márgenes, todo queda junto.

```html live-sample___universal
<h1>Selector universal</h1>
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis
  <span>kohlrabi welsh onion</span> daikon amaranth tatsoi tomatillo melon azuki
  bean garlic.
</p>

<p>
  Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley
  shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra
  wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
</p>
```

```css live-sample___universal
body {
  font-family: sans-serif;
}

* {
  margin: 0;
}
```

{{EmbedLiveSample("universal")}}

Este tipo de comportamiento a veces se ve en las «hojas de estilo de restablecimiento» (_reset stylesheets_), que eliminan todo el estilo del navegador. Como el selector universal hace cambios globales, lo usamos en situaciones muy concretas, como la que se describe a continuación.

### Usar el selector universal para que tus selectores sean más fáciles de leer

Un uso del selector universal es hacer que los selectores sean más fáciles de leer y más intuitivos. Por ejemplo, si quisiéramos seleccionar todos los elementos descendientes de un elemento `<article>` que sean el primer hijo de su padre, incluidos los hijos directos, podríamos usar la pseudoclase {{cssxref(":first-child")}}. Aprenderemos más sobre esto en [pseudoclases y pseudoelementos](/es/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements):

```css
article :first-child {
  font-weight: bold;
}
```

Sin embargo, este selector se podría confundir con `article:first-child`, que selecciona cualquier elemento `<article>` que sea el primer hijo de otro elemento.

Para evitar esta confusión, podríamos añadir el selector universal a la pseudoclase `:first-child`, para que quede más claro lo que hace el selector. Selecciona _cualquier_ elemento que sea el primer hijo de un elemento `<article>`, o el primer hijo de cualquier elemento descendiente de `<article>`:

```css
article *:first-child {
  font-weight: bold;
}
```

Ambos son equivalentes, pero a algunas personas la segunda opción les resulta más fácil de leer.

> [!NOTE]
> Es poco probable que veas esta técnica muy usada en los sitios web publicados. En MDN, por ejemplo, no la usamos mucho. Aun así, deberías plantearte usarla en tu código si te resulta más fácil de entender.

## Resumen

En este artículo hemos repasado los selectores CSS, que te permiten seleccionar elementos HTML concretos, y hemos visto los selectores de tipo, de clase y de ID con un poco más de profundidad que antes. En el siguiente artículo nos adentraremos en los selectores de atributo.

> [!NOTE]
> Para ver una lista completa de selectores, consulta nuestra [referencia de selectores CSS](/es/docs/Web/CSS/Guides/Selectors).

## Véase también

- [CSS classes](https://scrimba.com/the-frontend-developer-career-path-c0j/~01d?via=mdn), Scrimba <sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#enlaces_externos_o_embebidos)</sup>
  - : Una lección interactiva que ofrece algunas indicaciones sobre las clases CSS.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}
