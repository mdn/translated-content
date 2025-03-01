---
title: Combinadores
slug: Learn_web_development/Core/Styling_basics/Combinators
l10n:
  sourceCommit: a92e10b293358bc796c43d5872a8981fd988a005
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics")}}

Los selectores finales que veremos se llaman combinadores. Los combinadores se utilizan para combinar otros selectores de una manera que nos permite seleccionar elementos basándonos en su ubicación en el DOM en relación con otros elementos (por ejemplo, hijo o hermano).

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conceptos básicos de HTML (estudiar
        <a href="/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Sintaxis HTML básica</a
        >), <a href="/es/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">Selectores CSS básicos<a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados del aprendizaje:</th>
      <td>
        <ul>
          <li>El concepto básico de combinadores.</li>
          <li>Combinadores descendientes e hijos.</li>
          <li>Combinadores de hermanos adyacentes y generales.</li>
          <li>Anidamiento.</li>
          <li>Combinación de combinadores con selectores.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Combinador descendiente

El **combinador descendiente**, que normalmente se representa con un simple carácter de espacio (<code> </code>), combina dos selectores de tal manera que los elementos que coinciden con el segundo selector se seleccionan si tienen un elemento ancestro (padre, padre del padre, padre del padre del padre, etc.) que coincida con el primer selector. Los selectores que utilizan un combinador descendiente se denominan _selectores descendientes_.

```css
body article p {
}
```

En el siguiente ejemplo, estamos haciendo coincidir solo el elemento `<p>` que está dentro de un elemento con la clase `.box`.

```html live-sample___descendant
<div class="box"><p>Text in .box</p></div>
<p>Text not in .box</p>
```

```css live-sample___descendant
.box p {
  color: red;
}
```

{{EmbedLiveSample("descendant")}}

## Combinador hijo

El **combinador hijo** (`>`) se coloca entre dos selectores CSS. Coincide solo con aquellos elementos que coinciden con el segundo selector que son hijos directos de los elementos que coinciden con el primero. Los elementos descendientes más abajo en la jerarquía no coinciden. Por ejemplo, para seleccionar solo los elementos `<p>` que son hijos directos de los elementos `<article>`:

```css
article > p
```

En este siguiente ejemplo, tenemos una lista ordenada ({{htmlelement("ol")}}) anidada dentro de una lista desordenada ({{htmlelement("ul")}}). El combinador hijo selecciona solo aquellos elementos `<li>` que son hijos directos de un `<ul>` y les aplica un estilo con un borde superior.

Si elimina el `>` que designa esto como un combinador hijo, termina con un selector descendiente y todos los elementos `<li>` obtendrán un borde rojo.

```html live-sample___child
<ul>
  <li>Unordered item</li>
  <li>
    Unordered item
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </li>
</ul>
```

```css live-sample___child
ul > li {
  border-top: 5px solid red;
}
```

{{EmbedLiveSample("child")}}

## Combinador de hermanos adyacentes

El **combinador de hermanos adyacentes** (`+`) se coloca entre dos selectores CSS. Coincide solo con aquellos elementos que coinciden con el segundo selector que vienen justo después del elemento que coincide con el primer selector. Por ejemplo, para seleccionar todos los elementos `<img>` que están inmediatamente precedidos por un elemento `<p>`:

```css
p + img
```

Un caso de uso común es hacer algo con un párrafo que sigue a un encabezado, como en el ejemplo a continuación. En ese ejemplo, estamos buscando cualquier párrafo que comparta un elemento padre con un `<h1>` e inmediatamente sigue a ese `<h1>`.

Si inserta algún otro elemento como un `<h2>` entre el `<h1>` y el `<p>`, verá que el párrafo ya no coincide con el selector y, por lo tanto, no se le aplica el color de fondo y el color de primer plano cuando el elemento es adyacente.

```html live-sample___adjacent
<article>
  <h1>Un encabezado</h1>
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
</article>
```

```css live-sample___adjacent
body {
  font-family: sans-serif;
}

h1 + p {
  font-weight: bold;
  background-color: #333;
  color: #fff;
  padding: 0.5em;
}
```

{{EmbedLiveSample("adjacent", "", "220px")}}

## Combinador de hermanos generales

Si desea seleccionar hermanos de un elemento, incluso si no son directamente adyacentes, puede usar el **combinador de hermanos generales** (`~`). Para seleccionar todos los elementos `<img>` que vienen _en cualquier lugar_ después de los elementos `<p>`, haríamos esto:

```css
p ~ img
```

En el siguiente ejemplo, estamos seleccionando todos los elementos `<p>` que vienen después del `<h1>`, e incluso aunque también hay un `<div>` en el documento, se selecciona el `<p>` que viene después.

```html live-sample___general
<article>
  <h1>Un encabezado</h1>
  <p>Yo soy un párrafo.</p>
  <div>Yo soy un div</div>
  <p>Yo soy otro párrafo.</p>
</article>
```

```css live-sample___general
body {
  font-family: sans-serif;
}

h1 ~ p {
  font-weight: bold;
  background-color: #333;
  color: #fff;
  padding: 0.5em;
}
```

{{EmbedLiveSample("general", "", "220px")}}

## Creación de selectores complejos con anidamiento

El [módulo de anidamiento CSS](/es/docs/Web/CSS/CSS_nesting/Using_CSS_nesting#combinators) le permite escribir reglas anidadas que utilizan combinadores para crear [selectores complejos](/es/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector).

```css
p {
  ~ img {
  }
}
/* Esto es interpretado por el navegador como */
p ~ img {
}
```

El [selector de anidamiento `&`](/es/docs/Web/CSS/Nesting_selector) también se puede utilizar para crear selectores complejos:

```css
p {
  & img {
  }
}
/* Esto es interpretado por el navegador como */
p img {
}
```

Aquí hay un ejemplo que demuestra selectores complejos:

```html live-sample___nesting
<article>
  <h1>Un encabezado</h1>
  <p>Yo soy un párrafo.</p>
  <div>Yo soy un div</div>
  <p>Yo soy otro párrafo.</p>
</article>
```

```css live-sample___nesting
body {
  font-family: sans-serif;
}

h1 {
  & ~ p {
    /* esto es interpretado por el navegador como h1 ~ p */
    font-weight: bold;
    background-color: #333;
    color: #fff;
    padding: 0.5em;
  }
}
```

{{EmbedLiveSample("nesting", "", "220px")}}

> [!NOTE]
> En el ejemplo anterior, no se requiere el selector de anidamiento `&`, pero agregarlo ayuda a mostrar explícitamente que se está utilizando el anidamiento CSS.

## Combinación de combinadores con selectores

Puede combinar cualquiera de los selectores que descubrimos en lecciones anteriores con combinadores para seleccionar parte de su documento. Por ejemplo, para seleccionar elementos de lista con una `class` de `a` que son hijos directos de un `<ul>`, intente lo siguiente:

```css
ul > li[class="a"] {
}
```

Tenga cuidado, sin embargo, al crear grandes listas de selectores que seleccionan partes muy específicas de su documento. Será difícil reutilizar las reglas CSS ya que ha hecho que el selector sea muy específico para la ubicación de ese elemento en el marcado.

A menudo, es mejor crear una clase simple y aplicarla al elemento en cuestión. Dicho esto, su conocimiento de los combinadores será muy útil si necesita diseñar algo en su documento y no puede acceder al HTML, tal vez debido a que está siendo generado por un {{Glossary("CMS")}}.

## ¡Pon a prueba tus habilidades!

Has llegado al final de nuestro conjunto de lecciones sobre selectores, pero ¿puedes recordar la información más importante? Puede encontrar más pruebas para verificar que ha retenido esta información antes de continuar: consulte [Pon a prueba tus habilidades: Selectores](/es/docs/Learn_web_development/Core/Styling_basics/Basic_selectors/Selectors_Tasks).

## Resumen

Eso es todo por ahora sobre selectores. A continuación, pasaremos a otra parte importante de CSS: el modelo de caja.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics")}}
