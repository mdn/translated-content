---
title: Selectores de tipo, clase e ID
slug: Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks")}}

En este artículo vamos a echar un vistazo a los selectores más simples de que dispones y que seguramente serán los que utilices con mayor frecuencia.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conocimientos básicos de informática, tener el
        <a
          href="https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/Instalacion_de_software_basico"
          >software básico instalado</a
        >, conocimientos básicos de
        <a
          href="https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/Manejando_los_archivos"
          >trabajar con archivos</a
        >, HTML básico (véase
        <a href="/es/docs/Learn/HTML/Introduccion_a_HTML">Introducción a HTML</a
        >) y nociones de cómo funciona el CSS (véase
        <a href="/es/docs/Learn/CSS/First_steps">Primeros pasos con CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Conocer los diferentes selectores CSS que podemos utilizar para aplicar
        CSS a un documento.
      </td>
    </tr>
  </tbody>
</table>

## Tipos de selectores

Un **selector de tipo** también recibe el nombre de _selector de nombre de etiqueta_ o _selector de elemento_ porque selecciona un elemento/etiqueta HTML del documento. En el ejemplo siguiente hemos utilizado los selectores span, em y strong. Se aplica estilo a todas las instancias de los elementos `<span>`, `<em>` y `<strong>`.

**Trata de añadir una regla CSS que seleccione el elemento `<h1>` y cambie su color para que se vea azul.**

{{EmbedGHLiveSample("css-examples/learn/selectors/type.html", '100%', 1100)}}

## El selector universal

El selector universal se indica con un asterisco (`*`) y selecciona todos los elementos del documento (o del elemento padre si está encadenado con otro elemento y un operador de combinación descendente, por ejemplo). En el ejemplo siguiente hemos utilizado el selector universal para eliminar los márgenes en todos los elementos. Esto significa que en lugar de la opción predeterminada de aplicación de estilos del navegador, que muestra los títulos de encabezado y los párrafos separados por un margen de respeto, todo se mostrará pegado y no resultará tan fácil distinguir los diversos párrafos.

{{EmbedGHLiveSample("css-examples/learn/selectors/universal.html", '100%', 750)}}

Es posible observar este tipo de comportamiento en las «hojas de estilo de puesta a cero» (o «hojas de estilo _reset_»), que anulan el formato del navegador. Fueron muy populares en un momento dado; sin embargo, excluir todo el estilo significa que luego tienes que ponerlo todo de nuevo. Por este motivo tendemos a utilizar el selector universal con mucho cuidado, y para situaciones muy específicas como la que se describe a continuación.

### Uso del selector universal para facilitar la legibilidad de tus selectores

Uno de los usos del selector universal es facilitar la legibilidad de los selectores y clarificar sus funciones. Por ejemplo, si quiero seleccionar el primer elemento hijo de cualquier elemento `<article>` y poner ese elemento, cualquiera que sea, en negrita, puedo utilizar el selector {{cssxref(":first-child")}}, que veremos con mayor detalle más adelante en el artículo de [pseudoclases y pseudoelementos](/es/docs/Learn/CSS/Building_blocks/Selectores_CSS/Pseudo-clases_y_pseudo-elementos), como selector descendente junto con el selector de elemento `<article>`:

```css
article :first-child {
}
```

Sin embargo, esto podría confundirse con `article:first-child`, que selecciona cualquier elemento `<article>` que sea el primer elemento hijo de otro elemento.

Para evitar esta confusión podemos añadir al selector `:first-child` el selector universal. De este modo la función del selector resulta obvia: seleccionará _cualquier_ elemento que entre en la jerarquía de primer hijo de un elemento `<article>`:

```css
article *:first-child {
}
```

## Selectores de clase

El selector de clase comienza con un punto (`.`) y selecciona todo elemento del documento que esté afectado por esa clase. En el ejemplo siguiente hemos creado una clase llamada `.highlight` y la hemos aplicado en varios lugares del documento. Todos los elementos a los que se aplique esta clase se resaltarán en amarillo.

{{EmbedGHLiveSample("css-examples/learn/selectors/class.html", '100%', 750)}}

### Delimitación de clases en elementos particulares

Puedes crear un selector que seleccionará los elementos concretos que estén afectados por esa clase. En el ejemplo siguiente vamos a introducir un resaltado en un elemento `<span>` con una clase `highlight` del de los títulos `<h1>` con clase `highlight`. Para ello hay que anexar esa clase al selector de tipo correspondiente al elemento que queremos delimitar, sin dejar entre ellos ningún espacio.

{{EmbedGHLiveSample("css-examples/learn/selectors/class-type.html", '100%', 750)}}

Este enfoque hace el elemento CSS menos reutilizable porque la clase solo se aplicará a ese elemento en particular y tendrás que agregar otro selector en caso que quieras que las normas también se apliquen a otros elementos.

### Delimitar un elemento afectado por más de una clase

Puedes aplicar más de una clase a un elemento y delimitarlos de forma individual o seleccionar el elemento cuando todas las clases están presentes en el selector. Puede ser útil cuando se trabaja con componentes que se pueden combinar de maneras diferentes en tu página web.

En el ejemplo siguiente hay un elemento `<div>` que contiene una nota. El borde gris se aplica cuando la caja tiene una clase `notebox`. Si además tiene una clase `warning` o `danger`, la propiedad {{cssxref("border-color")}} cambia.

Para decirle al navegador que solo queremos seleccionar el elemento si incluye todas estas clases, las encadenamos juntas sin ningún espacio entre ellas.

{{EmbedGHLiveSample("css-examples/learn/selectors/class-many.html", '100%', 900)}}

## Selectores de ID

Un selector de ID comienza con un carácter `#` en lugar de un punto, pero se utiliza básicamente de la misma manera que un selector de clase. Sin embargo, un ID se puede utilizar una sola vez en cada documento, y a cada elemento solo se le puede aplicar un único `id`. Puede seleccionar un elemento que tenga propiedad `id` y ese ID puede ir precedido de un selector de tipo que seleccionará el elemento solo si el elemento y el ID coinciden. En el ejemplo siguiente puedes ver todos estos usos:

{{EmbedGHLiveSample("css-examples/learn/selectors/id.html", '100%', 750)}}

> **Nota:** Como aprendimos en el artículo sobre la especificidad, un ID tiene una especificidad muy alta y anula la mayoría de los otros selectores. Esto puede dificultar su uso. En la mayoría de los casos es preferible añadir una clase al elemento en lugar de utilizar un ID. Sin embargo, si el ID es la única manera de seleccionar el elemento (tal vez porque no tengas acceso al marcado y, por lo tanto, no lo puedes editar) no hay ningún problema en utilizarlo.

## En el próximo artículo

Seguiremos con la descripción de los selectores examinando los [selectores de atributo](/es/docs/Learn/CSS/Building_blocks/Selectores_CSS/Selectores_de_atributos).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks")}}
