---
title: Combinadores
slug: Learn/CSS/Building_blocks/Selectors/Combinators
translation_of: Learn/CSS/Building_blocks/Selectors/Combinators
original_slug: Learn/CSS/Building_blocks/Selectores_CSS/Combinadores
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks")}}

Los últimos selectores que veremos son los llamados selectores de combinación. Se llaman así porqué combinan otros selectores de manera que proporciona una relación útil entre ellos y la ubicación del contenido en el documento.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conocimientos básicos de informática, tener el
        <a
          href="https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/Instalacion_de_software_basico"
          >software básico</a
        >
        instalado, conocimientos básicos de
        <a
          href="https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/Manejando_los_archivos"
          >trabajar con archivos</a
        >, HTML básico (véase
        <a href="/es/docs/Learn/HTML/Introduccion_a_HTML"
          >Introducción al HTML</a
        >) y nociones de cómo funciona el CSS (véase
        <a href="/es/docs/Learn/CSS/First_steps">Primeros pasos con el CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Conocer los diferentes selectores de combinación que se pueden utilizar
        en el CSS.
      </td>
    </tr>
  </tbody>
</table>

## Selector de descendientes

Ya hemos visto los selectores de descendientes en artículos anteriores (selectores con espacios entre ellos):

```css
body article p
```

Estos selectores seleccionan elementos que son descendientes de otros selectores. No es necesario que sean hijos directos.

En el ejemplo siguiente seleccionamos solo el elemento `<p>` que hay dentro de un elemento con una clase `.box`.

{{EmbedGHLiveSample("css-examples/learn/selectors/descendant.html", '100%', 500)}}

## Selector de combinación de elementos hijo

El selector de combinación de elementos hijo es un símbolo de «mayor que» (`>`), que selecciona solo cuando los selectores identifican elementos que son hijos directos. Los elementos descendientes que se encuentran más abajo en la jerarquía no se seleccionan. Por ejemplo, para seleccionar solo los elementos `<p>` que son hijos directos de elementos `<article>`:

```css
article > p
```

En el ejemplo siguiente hay una lista ordenada anidada dentro de otra lista no ordenada. Utilizamos los selectores de elementos hijo para seleccionar solo los elementos `<li>` que son hijos directos de `<ul>` y les aplicamos un borde superior.

Si eliminamos el símbolo `>` que lo identifica como un selector de elementos hijo, lo convertimos en un selector de elementos descendientes y se aplicará el borde rojo a todos los elementos `<li>`.

{{EmbedGHLiveSample("css-examples/learn/selectors/child.html", '100%', 600)}}

## Hermanos adyacentes

El selector de elementos hermanos adyacentes (`+`) se utiliza para seleccionar un elemento que se encuentra justo al lado de otro elemento en el mismo nivel de la jerarquía. Por ejemplo, para seleccionar todos los elementos `<img>` que aparecen justo después de elementos `<p>`:

```css
p + img
```

El caso de uso más común es modificar el párrafo que va justo después del título, como en el ejemplo siguiente. Vamos a buscar un párrafo que sea directamente adyacente a `<h1>` y le vamos a aplicar un estilo.

Si insertas algún otro elemento, como `<h2>` entre las etiquetas `<h1>` y `<p>`, verás que el selector ya no selecciona el párrafo y no se muestra con los mismos colores de fondo y de primer plano que cuando es adyacente.

{{EmbedGHLiveSample("css-examples/learn/selectors/adjacent.html", '100%', 800)}}

## Hermanos generales

Si deseas seleccionar los hermanos de un elemento, incluso si no son directamente adyacentes, puedes utilizar el combinador de hermanos general (`~`). Por ejemplo, para seleccionar todos los elementos `<img>` que aparecen _después_ de los elementos `<p>`, hacemos esto:

```css
p ~ img
```

En el ejemplo siguiente seleccionamos todos los elementos `<p>` que vienen después de `<h1>`, y aunque en el documento también hay un `<div>`, se selecciona incluso la etiqueta `<p>` que viene después.

{{EmbedGHLiveSample("css-examples/learn/selectors/general.html", '100%', 600)}}

## El uso de selectores de combinación

Puedes combinar cualquiera de los selectores de los artículos anteriores con selectores de combinación para seleccionar una parte del documento. Por ejemplo, podrías utilizar el código siguiente para seleccionar elementos de una lista con una clase «a» que son hijos directos de `<ul>`:

```css
ul > li[class="a"]  {  }
```

Ten cuidado cuando creas largas listas de selectores que seleccionan partes del documento muy específicas. Te será difícil volver a utilizar las reglas CSS porque has definido un selector muy específico para la ubicación del elemento en el marcado.

A menudo es mejor crear una clase sencilla y aplicarla al elemento en cuestión. Dicho esto, tu conocimiento de los selectores de combinación te será muy útil si necesitas modificar algo del documento y no puedes acceder al código HTML (tal vez porque se haya generado a partir de CMS).

## Comprueba tus habilidades

Hemos cubierto mucho terreno en este artículo. ¿Recuerdas la información más importante? Encontrarás más pruebas para verificar que retienes esa información en [Test your skills: Selectors](/es/docs/Learn/CSS/Building_blocks/Selectors/Selectors_Tasks).

## Continuamos

Esta es la última sección de nuestros artículos sobre selectores. A continuación vamos a pasar a otra parte importante del CSS: [el modelo de caja CSS](/es/docs/Learn/CSS/Building_blocks/El_modelo_de_caja).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks")}}

## En este módulo

1. [La cascada y la herencia](/es/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
2. [Selectores CSS](/es/docs/Learn/CSS/Building_blocks/Selectors)

    - [Selectores de tipo, de clase y de ID](/es/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
    - [Selectores de atributo](/es/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
    - [Las pseudoclases y los pseudoelementos](/es/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
    - [Selectores de combinación](/es/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

3. [El modelo de caja](/es/docs/Learn/CSS/Building_blocks/The_box_model)
4. [Fondos y bordes](/es/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
5. [El uso de diferentes direcciones de texto](/es/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
6. [El desbordamiento de los contenidos](/es/docs/Learn/CSS/Building_blocks/Overflowing_content)
7. [Los valores y las unidades](/es/docs/Learn/CSS/Building_blocks/Values_and_units)
8. [Elementos de dimensionado en CSS](/es/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
9. [Elementos de imagen, de media y de formulario](/es/docs/Learn/CSS/Building_blocks/Images_media_form_elements)
10. [Estilo de las tablas](/es/docs/Learn/CSS/Building_blocks/Styling_tables)
11. [Depurar el CSS](/es/docs/Learn/CSS/Building_blocks/Debugging_CSS)
12. [Organizar el CSS](/es/docs/Learn/CSS/Building_blocks/Organizing)
