---
title: Contenido desbordado
slug: Learn/CSS/Building_blocks/Overflowing_content
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks")}}

En este artículo veremos otro concepto importante en CSS: el **desbordamiento**. El desbordamiento es lo que sucede cuando hay demasiado contenido para que pueda caber cómodamente en una caja. En esta guía aprenderás qué es y cómo administrarlo.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conocimientos básicos de informática, tener el
        <a
          href="/es/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >software básico</a
        >
        instalado, conocimientos básicos de
        <a href="/es/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >trabajar con archivos</a
        >, conocimientos básicos de HTML (véase
        <a href="/es/docs/Learn/HTML/Introduction_to_HTML"
          >Introducción al HTML</a
        >) y nociones de CSS (véase
        <a href="/es/docs/Learn/CSS/First_steps">Primeros pasos con el CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Comprender el desbordamiento y cómo gestionarlo.</td>
    </tr>
  </tbody>
</table>

## ¿Qué es el desbordamiento?

Ya sabemos que todo en CSS está dentro de una caja, y que podemos restringir el tamaño de estas cajas asignándoles los valores {{cssxref ("width")}} y {{cssxref ("height")}} (o {{cssxref("inline-size")}} y {{cssxref("block-size")}}). **El desbordamiento es lo que sucede cuando hay demasiado contenido en una caja, y no cabe cómodamente en ella.** El CSS te proporciona varias herramientas para administrar este desbordamiento, y además es un concepto que resulta útil de conocer desde las primeras etapas. Te encontrarás con situaciones de desbordamiento con bastante frecuencia al escribir CSS, especialmente cuando profundices en compaginación con CSS.

## El CSS trata de evitar «la pérdida de datos»

Vamos a comenzar con dos ejemplos que demuestran cómo se comporta el CSS por defecto cuando ocurre un desbordamiento.

El primero consiste en una caja a la que se le ha restringido la dimensión al darle una altura. Luego hemos añadido más contenido del que cabe en la caja. El contenido se desborda y se distribuye desordenadamente sobre el párrafo que hay debajo de la caja.

{{EmbedGHLiveSample("css-examples/learn/overflow/block-overflow.html", '100%', 600)}}

El segundo consiste en una palabra dentro de una caja cuya dimensión en línea está restringida. La caja se ha hecho demasiado pequeña para que esa palabra quepa, y se desborda.

{{EmbedGHLiveSample("css-examples/learn/overflow/inline-overflow.html", '100%', 500)}}

Te debes estar preguntando por qué el CSS ha tomado por defecto el enfoque más bien desarreglado de provocar el desbordamiento desordenado del contenido. ¿Por qué no ocultar el contenido adicional o hacer crecer la caja?

Siempre que sea posible, el CSS no oculta su contenido; hacerlo provocaría la pérdida de datos, que generalmente es un problema. En términos de CSS, esto significa que una parte del contenido desaparece. El problema con que desaparezca contenido es que podría ser que no notaras que ha desaparecido. Tus visitantes podrían no darse cuenta de que ha desaparecido contenido. Si se trata del botón de envío de datos en un formulario, nadie podría completar el formulario, y ¡eso es un gran problema! Así que, en vez de esto, el CSS tiende a desbordarse de un modo que sea visible. Es probable que te des cuenta de ese desarreglo, o en el peor de los casos, que un visitante de tu sitio web te informe de que una parte del contenido se superpone y debas arreglarlo.

Si has restringido el tamaño de una caja con una anchura o una altura determinadas, el CSS asume que sabes lo que haces y que gestionas correctamente el potencial de desbordamiento. En general, restringir el tamaño de un bloque es problemático cuando el texto se va a poner en una caja, porque puede haber más texto del que te esperabas al diseñar el sitio o el tamaño del texto puede ser mayor, por ejemplo, si el usuario lo aumenta.

En los artículos siguientes veremos diferentes modos de controlar el tamaño que podrían ser menos propensos a desbordarse. Sin embargo, si necesitas un tamaño fijo, también puedes controlar cómo se comporta el desbordamiento. ¡Sigue leyendo!

## La propiedad `overflow`

La propiedad {{cssxref ("overflow")}} es el modo como tomas el control del desbordamiento de un elemento y le dices al navegador cómo desea que se comporte. El valor predeterminado para la propiedad `overflow` es `visible`, por lo que, de forma predeterminada vamos a poder ver cuándo se desborda nuestro contenido.

Si deseas cortar el contenido cuando se desborda, puedes establecer el valor `overflow: hidden` en tu caja, que hace exactamente lo que dice: ocultar el desbordamiento. Esto puede hacer que las cosas desaparezcan, por lo que solo debes utilizar esta opción si ocultar contenido no te va a causar ningún problema.

{{EmbedGHLiveSample("css-examples/learn/overflow/hidden.html", '100%', 600)}}

Quizás te gustaría añadir barras de desplazamiento cuando el contenido se desborde. Si usas `overflow: scroll`, tu navegador siempre mostrará barras de desplazamiento, incluso cuando no haya suficiente contenido para que pueda desbordarse. Es posible que desees hacer esto, porque evita que aparezcan y desaparezcan barras de desplazamiento según el contenido.

**Si en la caja siguiente eliminas parte del contenido, observarás que las barras de desplazamiento permanecen aun sin que haya nada que desplazar (o, como mucho, solo las pistas de la barra de desplazamiento).**

{{EmbedGHLiveSample("css-examples/learn/overflow/scroll.html", '100%', 600)}}

En el ejemplo anterior solo necesitamos desplazarnos en el eje `y`, sin embargo, obtenemos barras de desplazamiento en ambos ejes. En su lugar, puedes usar la propiedad {{cssxref ("overflow-y")}}, y establecer `overflow-y: scroll` para poder desplazarte solo por el eje _y_.

{{EmbedGHLiveSample("css-examples/learn/overflow/scroll-y.html", '100%', 600)}}

También puedes desplazarte por el eje _x_ usando {{cssxref ("overflow-x")}}, aunque esta no es una forma recomendada para manejar palabras largas. Si necesitas lidiar con una palabra larga en una caja pequeña, puedes consultar las propiedades {{cssxref ("word-break")}} o {{cssxref ("overflow-wrap")}}. Además, algunos de los métodos expuestos en el artículo [Elementos de dimensionado en CSS](/es/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS) pueden ayudarte a crear cuadros que se adapten mejor a cantidades variables de contenido.

{{EmbedGHLiveSample("css-examples/learn/overflow/scroll-x.html", '100%', 500)}}

Al igual que con el desplazamiento, obtendrás una barra de desplazamiento en la dimensión de desplazamiento independientemente de si hay suficiente contenido para provocar una barra de desplazamiento.

> **Nota:** observa que puedes especificar un desplazamiento en _x_ y en _y_ utilizando la propiedad `overflow` y pasando dos valores. Si especificas dos palabras clave, la primera se aplica a `overflow-x` y la segunda a `overflow-y`. De lo contrario, tanto `overflow-x` como `overflow-y` se fijan en el mismo valor. Por ejemplo, `overflow: scroll hidden` establece `overflow-x` en `scroll` y `overflow-y` en `hidden`.

Si deseas que aparezcan barras de desplazamiento solo si hay más contenido del que cabe en la caja, utiliza `overflow: auto`. En este caso, el navegador decide si muestra las barras de desplazamiento o no. Los navegadores de escritorio solo suelen hacerlo cuando hay contenido suficiente para causar desbordamiento.

**En el ejemplo siguiente, elimina parte del contenido hasta que quepa en la caja y observarás que las barras de desplazamiento desaparecen.**

{{EmbedGHLiveSample("css-examples/learn/overflow/auto.html", '100%', 600)}}

## `overflow` establece un contexto de formato de bloque

En CSS hay un concepto conocido como **block formatting context** o BFC (_contexto de formato de bloque_). No es algo de lo que debas preocuparte demasiado en este momento, pero es útil saber que cuando usas un valor de `overflow`, como `scroll` o `auto`, creas un BFC. El resultado es que el contenido de la caja al que acabas de cambiar el valor `overflow` se convierte en un minidiseño propio. Las cosas que están fuera del contenedor no pueden meterse en él, y nada puede sobresalir de esa caja hacia el diseño circundante. Esto es para permitir un comportamiento con desplazamiento, porque para poder crear una experiencia de desplazamiento consistente todo el contenido de tu caja ha de estar contenido en algo, y no puede superponerse con otros elementos de la página.

## Desbordamiento no deseado en diseño web

Los métodos de diseño modernos (explicados en el módulo [Diseñar con el CSS](/es/docs/Learn/CSS/CSS_layout)) gestionan muy bien el desbordamiento. Han sido diseñados para hacer frente al hecho de que tendemos a no poder predecir cuánto contenido habrá en la web. Sin embargo, en el pasado, los desarrolladores a menudo usaban alturas fijas para tratar de alinear los fondos de cajas que en realidad no tenían relación entre sí. Este método era frágil y, en una aplicación heredada, ocasionalmente puede aparecer una caja en que el contenido se superpone a otro contenido de la página. Si ves esto, sabrás que se trata de desbordamiento. Lo ideal sería volver a calcular el diseño para no tener que confiar tamaños de caja fijos.

Al desarrollar un sitio web, siempre debes tener en cuenta los problemas de desbordamiento. Debes probar diseños con cantidades grandes y pequeñas de contenido, aumentar el tamaño de letra... y asegurarte de que tu CSS puede hacerle frente sin ningún problema. Es probable que cambiar el valor de `overflow` para ocultar contenido o añadir barras de desplazamiento sea algo que debas reservar solo para unos pocos casos especiales, en que realmente desees una caja con barra de desplazamiento, por ejemplo.

## Pon a prueba tus conocimientos

Hay mucho que absorber en esta lección. ¿Recuerdas la información más importante? Para comprobarlo, ve a [Test your skills: overflow](/es/docs/Learn/CSS/Building_blocks/Overflow_Tasks).

## Resumen

Este breve artículo ha introducido el concepto de desbordamiento; ahora comprendes que el CSS intenta no hacer invisible el desbordamiento de contenido, porque esto provoca la pérdida de datos. Has descubierto que puedes gestionar el desbordamiento potencial y también que debes probar tu trabajo para asegurarte de que no causa un desbordamiento problemático accidentalmente.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks")}}
