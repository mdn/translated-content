---
title: Dimensionar elementos en CSS
slug: Learn/CSS/Building_blocks/Sizing_items_in_CSS
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks")}}

En los diversos artículos vistos hasta ahora, has aprendido varias formas de dimensionar elementos en una página web utilizando CSS. Es importante que comprendas qué tamaños van a tener los diferentes elementos de tu diseño, y en este artículo vamos a resumir las diversas formas en que puedes asignar tamaños a los elementos con CSS y definir algunos términos relativos al dimensionado que te ayudarán en el futuro.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conocimientos básicos de informática, tener el
        <a
          href="/es/docs/Learn/Getting_started_with_the_web/Instalacion_de_software_basico"
          >software básico</a
        >
        instalado, conocimientos básicos de
        <a
          href="/es/docs/Learn/Getting_started_with_the_web/Manejando_los_archivos"
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
        Comprender las diferentes formas en que podemos dimensionar las cosas en
        CSS.
      </td>
    </tr>
  </tbody>
</table>

## El tamaño natural o intrínseco de las cosas

Los elementos HTML tienen un tamaño natural, establecido antes de que se vean afectados por cualquier código CSS. Un ejemplo sencillo es una imagen. Una imagen tiene un ancho y una altura que están definidos en el archivo de imagen que está incrustando en la página. Este tamaño se describe como el **tamaño intrínseco**, que proviene de la imagen misma.

Si colocas una imagen en una página y no cambias su altura y ancho, ya sea usando atributos en la etiqueta `<img>` o el CSS, se mostrará con ese tamaño intrínseco. En el ejemplo siguiente le hemos dado un borde a la imagen para que puedas ver la extensión del archivo.

{{EmbedGHLiveSample("css-examples/learn/sizing/intrinsic-image.html", '100%', 600)}}

Sin embargo, un elemento {{htmlelement ("div")}} vacío no tiene tamaño propio. Si añades un elemento {{htmlelement ("div")}} sin contenido a tu HTML, entonces debes darle un borde como hemos hecho con la imagen y verás una línea en la página. Se trata del borde del elemento replegado sobre sí mismo porque no hay contenido para mantenerlo abierto. En nuestro ejemplo siguiente, ese borde se extiende por todo el ancho del contenedor, porque es un elemento de nivel de bloque, un comportamiento con el que deberías comenzar a familiarizarte. No tiene altura (o tamaño en la dimensión de bloque) porque no hay contenido.

{{EmbedGHLiveSample("css-examples/learn/sizing/intrinsic-text.html", '100%', 500)}}

En el ejemplo anterior, añade texto al elemento vacío. Ahora el borde contiene ese texto porque la altura del elemento queda definida por el contenido. Por lo tanto, el tamaño de este elemento `<div>` en la dimensión del bloque proviene del tamaño del contenido. Nuevamente, este es el tamaño intrínseco del elemento: su tamaño está definido por su contenido.

## Configurar un tamaño específico

Por supuesto, podemos dar a los elementos de nuestro diseño un tamaño específico. Cuando asignas un tamaño a un elemento (al cual deberá ajustarse el contenido del elemento) nos referimos a este como **tamaño extrínseco**. Toma nuestro elemento `<div>` del ejemplo anterior: podemos darle valores específicos como {{cssxref ("width")}} y {{cssxref ("height")}}, y así tendrá ese tamaño sea cual sea su contenido. Como descubrimos en [nuestro artículo anterior sobre el desbordamiento](/es/docs/Learn/CSS/Building_blocks/Contenido_desbordado), una altura establecida puede causar el desbordamiento del contenido si hay más contenido del que cabe en el elemento.

{{EmbedGHLiveSample("css-examples/learn/sizing/height.html", '100%', 600)}}

Debido a este problema de desbordamiento, fijar la altura de los elementos con longitudes o porcentajes es algo que debemos hacer con mucho cuidado en la web.

### El uso de porcentajes

En muchos sentidos, los porcentajes actúan como unidades de longitud, y como discutimos en el [artículo sobre valores y unidades](/es/docs/Learn/CSS/Building_blocks/Valores_y_unidades_CSS#Porcentajes), a menudo se pueden usar indistintamente con longitudes. Cuando usas un porcentaje, debes tener claro de qué es porcentaje. En el caso de una caja dentro de otro contenedor, si a la caja secundaria le asignas un porcentaje al ancho, será un porcentaje del ancho del contenedor principal.

{{EmbedGHLiveSample("css-examples/learn/sizing/percent-width.html", '100%', 600)}}

Esto se debe a que los porcentajes se refieren al tamaño del bloque contenedor. Sin un porcentaje aplicado, nuestro elemento `<div>` ocuparía el 100% del espacio disponible, porque es un elemento de nivel de bloque. Si le damos un ancho porcentual, este se convierte en un porcentaje del espacio que normalmente ocuparía.

### Porcentaje de márgenes y áreas de relleno

Si configuras `margins` y `padding` como un porcentaje, puede que observes un comportamiento extraño. En el ejemplo siguiente hay una caja. Hemos asignado a la caja interna un margen ({{cssxref ("margin")}}) del 10% y una área de relleno ({{cssxref ("padding")}}) del 10%. El área de relleno y el margen de la parte superior e inferior de la caja son del mismo tamaño que el margen de la izquierda y de la derecha.

{{EmbedGHLiveSample("css-examples/learn/sizing/percent-mp.html", '100%', 700)}}

Podrías esperar, por ejemplo, que el porcentaje de los márgenes superior e inferior sea un porcentaje de la altura del elemento, y el porcentaje de los márgenes izquierdo y derecho sea un porcentaje del ancho del elemento. Sin embargo, ¡este no es el caso!

Cuando utilizas el margen y el área de relleno en porcentajes, el valor se calcula a partir del **tamaño en línea** del elemento, es decir, el ancho del elemento cuando se trabaja en un lenguaje horizontal. En nuestro ejemplo, todos los márgenes y el área de relleno son del 10% del ancho del elemento. Esto significa que puedes tener márgenes y relleno alrededor de la caja del mismo tamaño. Este es un hecho que vale la pena recordar si utilizas porcentajes de esta manera.

## Tamaños mínimo y máximo

Además de asignar a las cosas un tamaño fijo, podemos pedirle al CSS que asigne a un elemento un tamaño mínimo o máximo. Si tienes una caja que puede contener una cantidad variable de contenido y deseas que tenga siempre _al menos_ una altura determinada, puedes establecer la propiedad {{cssxref ("min-height")}}. La caja siempre tendrá al menos esta altura, pero crecerá si hay más contenido del que la caja puede contener.

En el ejemplo siguiente puedes ver dos cuadros, ambos con una altura definida de 150 píxeles. La caja de la izquierda tiene 150 píxeles de alto; la de la derecha contiene contenido que necesita más espacio, por lo que su tamaño supera los 150 píxeles.

{{EmbedGHLiveSample("css-examples/learn/sizing/min-height.html", '100%', 800)}}

Esto es muy útil para trabajar con cantidades de contenido variables y asimismo evitar desbordamientos.

Un uso común de {{cssxref ("max-width")}} es para reducir el tamaño de las imágenes si no hay suficiente espacio para mostrarlas en su ancho intrínseco, al asegurarte de que no serán mayores que ese ancho.

A modo de ejemplo, si para una imagen tienes que establecer `width: 100%` y su ancho intrínseco es menor que su contenedor, la imagen se verá obligada a expandirse y agrandarse, y se pixelará. Si su ancho intrínseco es mayor que su contenedor, se desbordará. No es probable que desees que suceda ninguno de estos casos.

Si en lugar de ello usas `max-width: 100%`, la imagen puede encogerse con respecto a su tamaño intrínseco, pero no se agranda más allá del 100% de su tamaño.

En el ejemplo siguiente hemos utilizado la misma imagen dos veces. La primera imagen tiene `width: 100%` y está en un contenedor que es más grande, por lo que se extiende hasta el ancho del contenedor. La segunda imagen tiene `max-width: 100%` y, por lo tanto, no se estira para llenar el recipiente. La tercera caja contiene la misma imagen de nuevo, también con `max-width: 100%`; pero en este caso puedes ver cómo se ha reducido para encajar en la caja.

{{EmbedGHLiveSample("css-examples/learn/sizing/max-width.html", '100%', 800)}}

Esta técnica se utiliza para dar a las imágenes una respuesta _adaptativa_, de modo que se reduzcan adecuadamente cuando se visualizan en un dispositivo más pequeño. Sin embargo, no es conveniente usar esta técnica para cargar imágenes demasiado grandes y luego reducirlas en el navegador. Las imágenes deben tener el tamaño adecuado, no deben ser más grandes de lo que sea necesario para el tamaño más grande que se muestran en el diseño. Descargar imágenes muy grandes ralentizará tu sitio y puede costarles más dinero a los usuarios si tienen una conexión tarifada.

> **Nota:** Obtén más información sobre las [técnicas adaptativas para las imágenes](/es/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

## Unidades de ventana gráfica

La ventana gráfica es el área visible de tu página en el navegador que utilizas para ver un sitio, y también tiene un tamaño. En CSS hay unidades que asociadas con el tamaño de la ventana gráfica: las unidades `vw` para el ancho y `vh` para la altura. Con estas unidades puedes establecer tamaños relativos a la ventana gráfica del usuario.

`1vh` es igual al 1% de la altura de visualización, y `1vw` es igual al 1% de la anchura. Puedes usar estas unidades para dimensionar cajas, pero también texto. En el ejemplo siguiente hay un cuadro que tiene un tamaño de 20vh y 20vw. La caja contiene una letra `A`, a la que se le ha dado un valor para {{cssxref ("font-size")}} de 10vh.

{{EmbedGHLiveSample("css-examples/learn/sizing/vw-vh.html", '100%', 600)}}

**Si cambias los valores `vh` y `vw`, cambia el tamaño de la caja o de la letra; cambiar el tamaño de la ventana gráfica también cambia esos tamaños porque están dimensionados en relación con el de la ventana gráfica. Para ver el cambio del ejemplo cuando cambias el tamaño de la ventana gráfica, debes cargar el ejemplo en una ventana nueva del navegador, que pueda cambiar de tamaño (ya que tu ventana gráfica es el `<iframe>` incrustado que contiene el ejemplo que se muestra arriba). [Abre el ejemplo](https://mdn.github.io/css-examples/learn/sizing/vw-vh.html), cambia el tamaño de la ventana del navegador y observa lo que ocurre con el tamaño de la caja y el texto.**

Cambiar los tamaños según la ventana gráfica puede ser útil en tus diseños. Por ejemplo, si deseas mostrar una sección principal a pantalla completa antes del resto del contenido, haz que esa parte de tu página de 100vh empuje el resto del contenido por debajo de la ventana gráfica, de modo que solo aparezca cuando desplacen los contenidos del documento con la barra de desplazamiento.

## Resumen

Este artículo te ha dado un resumen de algunos problemas clave con los que puedes encontrarte al dimensionar cosas en la web. Cuando llegues al artículo [Compaginar con CSS](/es/docs/Learn/CSS/CSS_layout), el tamaño va a ser un aspecto muy importante para dominar los diferentes métodos de compaginación, por lo que, antes de continuar, vale la pena comprender los conceptos que hemos expuesto en este artículo.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks")}}
