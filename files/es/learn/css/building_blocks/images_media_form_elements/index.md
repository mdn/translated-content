---
title: Imágenes, medios y elementos de formulario
slug: Learn/CSS/Building_blocks/Images_media_form_elements
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks")}}

En este artículo vamos a ver cómo se tratan ciertos elementos especiales en CSS. Las imágenes y otros medios y los elementos de formulario presentan un comportamiento algo distinto que otros elementos CSS, como las cajas, en cuanto a aplicación de estilo. Comprender qué es y qué no es posible te ahorrará frustraciones, y en este artículo vamos a destacar algunas de las cuestiones principales que necesitas saber.

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
        >, conocimientos básicos de HTML (véase
        <a href="/es/docs/Learn/HTML/Introduccion_a_HTML">Introducción a HTML</a
        >) y nociones de cómo funciona el CSS (véase
        <a href="/es/docs/Learn/CSS/First_steps">Primeros pasos con CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Comprender el modo en que algunos elementos se comportan de manera
        inusual cuando se diseñan con CSS.
      </td>
    </tr>
  </tbody>
</table>

## Elementos de reemplazo

Las imágenes y los vídeos se describen como **[elementos de reemplazo](/es/docs/Web/CSS/Elemento_reemplazo)**. Esto significa que el CSS no puede intervenir en aspectos del diseño interno de estos elementos, sino solo a su posición en la página y algunos otros aspectos. Sin embargo, como veremos, hay varias cosas que el CSS puede hacer con una imagen.

También se describen ciertos elementos de reemplazo que, como las imágenes y vídeos, presentan una **relación de aspecto**. Esto significa que tienen un tamaño definido tanto en la dimensión horizontal (x) como en la vertical (y), y por defecto se mostrarán con las dimensiones intrínsecas del archivo.

## El tamaño de las imágenes

Como ya conoces de estos artículos, todo en CSS genera una caja. Si colocas una imagen dentro de una caja que es más pequeña o más grande que las dimensiones intrínsecas del archivo de imagen en cualquier dirección, aparecerá más pequeño que la caja o se desbordará. Debes decidir qué hacer con el desbordamiento.

En el ejemplo siguiente hay dos cajas, ambas de 200 píxeles de tamaño:

- Una contiene una imagen que es más pequeña de 200 píxeles: es más pequeña que la caja y no se expande para rellenarla.
- La otra es más grande de 200 píxeles y desborda la caja.

{{EmbedGHLiveSample("css-examples/learn/images/size.html", '100%', 1000)}}

¿Qué podemos hacer con el problema del desbordado?

Como aprendimos en [nuestro artículo anterior](/es/docs/Learn/CSS/Building_blocks/Dimensionar_elementos_en_CSS), una técnica común es hacer que el la propiedad {{cssxref ("max-width")}} de una imagen sea 100%. Esto permite que la imagen tenga un tamaño menor que la caja, pero no que tenga un tamaño mayor. Esta técnica funciona con otros elementos de reemplazo, como [`<video>`](/es/docs/Web/HTML/Elemento/video) o [`<iframe>`](/es/docs/Web/HTML/Elemento/iframe).

**Añade `max-width: 100%` al elemento `<img>` del ejemplo anterior. Verás que la imagen más pequeña permanece sin cambios, pero la más grande se reduce hasta caber en la caja.**

Puedes tomar otras decisiones sobre las imágenes dentro de los contenedores. Por ejemplo, es posible que desees cambiar el tamaño de una imagen para que cubra una caja por completo.

La propiedad {{cssxref ("object-fit")}} puede ser de gran ayuda. Cuando se usa `object-fit`, el elemento de reemplazo puede dimensionarse para adaptarse a una caja de varias maneras.

A continuación, hemos utilizado el valor `cover`, que reduce el tamaño de la imagen a la vez que mantiene la relación de aspecto hasta que rellena toda la caja. Al mantenerse la relación de aspecto, la caja corta algunas partes de la imagen.

{{EmbedGHLiveSample("css-examples/learn/images/object-fit.html", '100%', 1000)}}

Si usamos el valor `contain`, la imagen se reduce hasta que es lo bastante pequeña para caber dentro de la caja. Esto puede dar lugar a un formato panorámico si la imagen no presenta la misma relación de aspecto que la caja.

También puedes probar el valor `fill`, que rellena la caja, pero no mantiene la relación de aspecto.

## Elementos de reemplazo en una compaginación

A medida que vayas usando diversas técnicas de diseño CSS en elementos de reemplazo, irás descubriendo que se comportan de manera ligeramente diferente a otros elementos. Por ejemplo, en un diseño flexible o en un diseño de página de cuadrícula, los elementos se expanden por defecto hasta que llenan toda el área. En cambio, las imágenes no se expanden, sino que se alinean con el inicio del área de la cuadrícula o del contenedor flexible.

Puedes ver esto en el ejemplo siguiente, en que hay un contenedor de con dos columnas y dos filas, que tiene cuatro elementos. Todos los elementos `<div>` tienen un color de fondo y se estiran para llenar la fila y la columna. La imagen, sin embargo, no se expande.

{{EmbedGHLiveSample("css-examples/learn/images/layout.html", '100%', 1000)}}

Si sigues estos artículos en orden, no habrás llegado todavía a la compaginación. Ten en cuenta solo que cuando los elementos de reemplazo forman parte de una cuadrícula o un diseño flexible, presentan comportamientos predeterminados diferentes, en esencia para evitar que el diseño los expanda de manera extraña.

Para forzar que la imagen se expanda para llenar la celda de la cuadrícula en la que se encuentra, tendrías que hacer algo como lo siguiente:

```css
img {
  width: 100%;
  height: 100%;
}
```

Sin embargo, esto deformaría la imagen, por lo que probablemente no es lo que querrías hacer.

## Los elementos de formulario

Los elementos de formulario pueden ser un problema si queremos diseñar con CSS, y el [artículo sobre formularios web](/es/docs/Learn/HTML/Forms) contiene guías detalladas sobre los aspectos más complicados relativos a este tema, que no vamos a repetir en este artículo. Hay algunos conceptos básicos clave que vale la pena destacar en esta sección.

Muchos controles de formulario se añaden con el elemento [`<input>`](/es/docs/Web/HTML/Element/input): este elemento define desde campos de formulario simples, como entradas de texto, hasta campos más complejos añadidos en HTML5, como selectores de color y fecha. Hay algunos elementos adicionales, como [`<textarea>`](/es/docs/Web/HTML/Element/textarea) para la entrada de texto multilínea, y también elementos que se utilizan para contener y etiquetar partes de formularios como [`<fieldset>`](/es/docs/Web/HTML/Element/fieldset) y [`<legend>`](/es/docs/Web/HTML/Element/legend).

El HTML5 también incluye atributos que permiten a los desarrolladores web indicar qué campos son obligatorios e incluso el tipo de contenido que debe introducirse. Si el usuario añade algo inesperado o deja un campo obligatorio en blanco, el navegador puede mostrar un mensaje de error. Los diversos navegadores no presentan ningún estilo coherente ni ninguna homogeneización en cuanto a la personalización que permiten para tales elementos.

### Aplicar estilo a los elementos de entrada de texto

Los elementos que permiten la entrada de texto, como `<input type="text">`, algunos tipos específicos como `<input type="email">` y el elemento `<textarea>` son bastante fáciles de diseñar y tienden a comportarse como otras cajas de tu página. Sin embargo, el estilo predeterminado de estos elementos es diferente según el sistema operativo y el navegador con el que el usuario visite el sitio.

En el ejemplo siguiente hemos diseñado algunas entradas de texto con CSS: puedes ver que algunos elementos como los bordes, los márgenes y el área de relleno se aplican como es de esperar. Utilizamos selectores de atributos para apuntar a los diferentes tipos de entrada. Intenta cambiar el aspecto de este formulario ajustando los bordes, añadiendo colores de fondo a los campos y cambiando las fuentes y área de relleno.

{{EmbedGHLiveSample("css-examples/learn/images/form.html", '100%', 1000)}}

> **Advertencia:** Al cambiar el estilo de los elementos de formulario debes asegurarte de que para el usuario sigue siendo obvio que se trata de elementos de formulario. Podrías crear una entrada de formulario sin bordes y un fondo que sea casi indistinguible del contenido que lo rodea, pero esto haría que sea muy difícil de reconocer y completar.

Como se explica en los artículos sobre [el diseño de formularios](/es/docs/Learn/HTML/Forms/Styling_HTML_forms) en la parte HTML de esta web, el sistema operativo presenta muchos de los tipos de entrada más complejos y son inaccesibles para el diseño. Por lo tanto, siempre debes suponer que los formularios se verán de manera bastante diferentes para los distintos visitantes, y deberás probar los formularios complejos en diversos navegadores.

### Herencia y elementos de formulario

En algunos navegadores, los elementos de formulario no heredan el estilo de letra por defecto. Por lo tanto, si deseas asegurarte de que tus campos de formulario usan la letra que se define para el cuerpo o para un elemento principal, debes añadir esta regla a tu CSS.

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

### Elementos de formulario y tamaño de la caja

Los elementos de formulario utilizan reglas diferentes en los diversos navegadores para el dimensionado de las cajas de los diferentes controles de formulario. Ya cubrimos la propiedad `box-sizing` en [el artículo sobre el modelo de cajas](/es/docs/Learn/CSS/Building_blocks/El_modelo_de_caja). Puedes usar este conocimiento cuando diseñes formularios que garanticen una experiencia homogénea en cuanto a los anchos y las alturas de los elementos de formulario.

Por coherencia, es una buena idea establecer los márgenes y el área de relleno en `0` para todos los elementos, y luego establecerlos de nuevo al diseñar cada uno de los controles de formulario.

```css
button,
input,
select,
textarea {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
```

### Otros ajustes útiles

Además de las reglas ya mencionadas, también debes configurar `overflow: auto` en `<textarea>` para que Internet Explorer no muestre una barra de desplazamiento cuando no hay necesidad:

```css
textarea {
  overflow: auto;
}
```

### Ponerlo todo junto en un «Reinicio»

Como último paso podemos resumir las diversas propiedades expuestas en el «reinicio de formulario» siguiente para proporcionar una base coherente sobre la que trabajar. Esto incluye todos los elementos mencionados en las tres últimas secciones:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

textarea {
  overflow: auto;
}
```

> **Nota:** Muchos desarrolladores utilizan las hojas de estilo de normalización para crear un conjunto de estilos de línea base para usar en todos los proyectos. Por lo general, estas hojas hacen cosas similares a las que acabamos de describir y garantizan que cualquier cosa que pueda ser diferente en distintos navegadores tenga establecido un valor por defecto coherente antes de que tú hagas tu propio trabajo con el CSS. Aunque ya no son tan importantes como lo eran antes, porque los navegadores suelen ser más homogéneos que en el pasado. Sin embargo, si deseas ver un ejemplo, consulta [Normalize.css](http://necolas.github.io/normalize.css/), que es una hoja de estilo muy popular que muchos proyectos utilizan como base.

Para obtener más información sobre los formularios de estilo, echa un vistazo a los dos artículos en la sección HTML de estas guías.

- [Diseño de formularios web](/es/docs/Learn/HTML/Forms/Styling_HTML_forms)
- [Aspectos avanzados de aplicación de estilo a formularios](/es/docs/Learn/Forms/Advanced_form_styling)

## Resumen

En este artículo hemos destacado algunas de las diferencias que se presentan cuando trabajas con imágenes o media, y otros elementos inusuales, en CSS. En el artículo siguiente veremos algunos consejos que te resultarán útiles cuando tengas que diseñar tablas HTML.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks")}}
