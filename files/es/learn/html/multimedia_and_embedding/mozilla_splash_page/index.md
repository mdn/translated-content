---
title: Página de bienvenida de Mozilla
slug: Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page
---

{{LearnSidebar}}{{PreviousMenu("Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}

En esta evaluación, pondremos a prueba tu conocimiento de algunas de las técnicas mostradas en los artículos de este módulo, ¡para que tú agregues algunas imágenes y videos a una página de bienvenida de Mozzilla!.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Antes de intentar esta evaluación, ya deberías conocer el módulo de
        <a href="/es/docs/Learn/HTML/Multimedia_and_embedding"
          >Multimedia e inserción</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Prueba cuánto sabes de la incorporación de imágenes y videos en páginas
        web, marcos y técnicas de imagen receptiva a HTML.
      </td>
    </tr>
  </tbody>
</table>

## Punto de partida

Para comenzar esta evaluación, necesitas el HTML y todas las imágenes de [mdn-splash-page-start](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/mdn-splash-page-start/) que tienes en la carpeta de GitHub. Guarda el contenido de [index.html](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/mdn-splash-page-start/index.html) en un archivo llamado `index.html` en tu disco local, en una nueva carpeta. Guarda [pattern.png](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/mdn-splash-page-start/pattern.png) en la misma carpeta (haciendo click derecho en la imagen y seleccionando la opción guardar).

Accede a las diferentes imágenes en la carpeta de [originals](https://github.com/mdn/learning-area/tree/master/html/multimedia-and-embedding/mdn-splash-page-start/originals) y guárdalas también de la misma manera. De momento puedes guardarlas en una carpeta diferente, ya que podrías necesitar modificarlas usando un editor de gráficos antes de que estén listas para usarlas.

También puedes usar una herramienta en línea como [Glitch](https://glitch.com/) para crear tu ejemplo. Esto puede ser útil si quieres evaluarlo o pedir ayuda — consulta la sección [Assessment or further help](#assessment_or_further_help) al final de esta página.

> **Nota:** El archivo HTML de ejemplo contiene bastante CSS para dar estilo a la página. No necesitas tocar el CSS, solo el HTML dentro del elemento {{htmlelement("body")}}, mientras que insertes el marcado correctamente, el estilo se mantendrá.

## Resumen del proyecto

En esta evaluación, te presentamos una página de bienvenida de Mozzilla en su mayoría terminada, que tiene como objetivo decir algo agradable e interesante sobre lo que significa Mozilla, y proporcionar algunos enlaces a recursos adicionales. Desafortunadamente, aún no se han agregado imágenes o videos, ¡este es tu trabajo!. Debes añadir algunos elementos para que la página se vea bien y tenga sentido. Las siguientes subsecciones detallan lo que tienes que hacer:

### Preparar las imágenes

Usa tu editor de imágenes favorito, y utiliza medidas de 400px de ancho y 120px de alto para:

- `firefox_logo-only_RGB.png`
- `firefox-addons.jpg`
- `mozilla-dinosaur-head.png`

Nómbralas por ejemplo, `firefoxlogo400.png` y `firefoxlogo120.png`.

Junto con `mdn.svg`, estas imágenes serán tus iconos para vincular a otros recursos, dentro del área `further-info`. Debes vincular al logo de Firefox en el encabezado del sitio. Guarda copias de todos estos dentro de la misma carpeta que `index.html`.

A continuación, crea una versión horizontal de 1200px de `red-panda.jpg`, y una versión vertical de 600px que muestre al panda en una toma de primer plano. Una vez más, ponle un nombre para que puedas identificarlos fácilmente. Guarda una copia de ambos en la misma carpeta que `index.html`.

> **Nota:** Debes optimizar las imágenes JPG y PNG para que sean lo más pequeñas posible, viéndose bien. [tinypng.com](https://tinypng.com/) es un gran servicio para hacerlo fácilmente.

### Añadir logo al encabezado

El elemento {{htmlelement("header")}}, añade el elemento {{htmlelement("img")}} que insertará la versión pequeña del logotipo de Firefox al encabezado.

### Añadir un video al contenido del artículo principal

Justo dentro del elemento {{htmlelement("article")}} (debajo de la etiqueta de apertura), inserta el video de Youtube <https://www.youtube.com/watch?v=ojcNcvb1olg>, utilizando las herramientas de YouTube para generar el código. El video debe tener 400px de ancho.

### Agregar imágenes receptivas a los enlaces de información adicional

Dentro de {{htmlelement("div")}} con clase `further-info` encontrarás cuatro elementos {{htmlelement("a")}} -cada uno de los cuales vincula a una página interesante relacionada con Mozilla-. Para completar esta sección, debes insertar un elemento {{htmlelement("img")}} dentro de cada uno que contenga los atributos [`src`](/es/docs/Web/HTML/Element/img#src), [`alt`](/es/docs/Web/HTML/Element/img#alt), [`srcset`](/es/docs/Web/HTML/Element/img#srcset) y [`sizes`](/es/docs/Web/HTML/Element/img#sizes).

En cada caso, (excepto uno que es inherentemente receptivo) queremos que el navegador sirva la versión 120px cuando el ancho de la ventana de visualización sea de 500px o menos, o la versión de 400px en otro caso.

¡Asegúrate de hacer coincidir las imágenes correctas con los enlaces correctos!

> **Nota:** para probar correctamente los ejemplos `srcset`/`sizes` necesitarás cargar tu sitio a un servidor (usar [Github pages](/es/docs/Learn/Common_questions/Using_Github_pages) es una solución fácil y gratis), y desde allí puedes probar si funcionan correctamente usando herramientas de desarrollo del navegador como Firefox [Network Monitor](/es/docs/Tools/Network_Monitor).

### Un "red-panda" con arte dirigido

Dentro del elemento {{htmlelement("div")}} con clase `red-panda`, queremos insertar un elemento {{htmlelement("picture")}} que permita una imagen pequeña del panda si la ventana tiene 600px de ancho o menos, y la gran imagen del paisaje en caso contrario.

## Ejemplo

Las siguientes capturas de pantalla muestran como debería verse la página de bienvenida después de haber sido marcada correctamente, en una pantalla ancha y estrecha.

![A wide shot of our example splash page](wide-shot.png)

![A narrow shot of our example splash page](narrow-shot.png)

## Evaluación o ayuda adicional

Si quieres evaluar tu trabajo, estás atorado o quieres pedir ayuda:

1. Pon tu trabajo en un editor en línea para compartir, como [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/). Glitch es probablemente el mejor para este ejemplo, porque permite cargar propiedades como imágenes, mientras que algunas de las otras herramientas no lo hacen.
2. Escribe una publicación solicitando evaluación y/o ayuda en el foro [MDN Discourse forum](https://discourse.mozilla.org/c/mdn). Agrega la etiqueta "aprendizaje" a tu publicación para que podamos encontrarla más fácilmente. Tu publicación debe incluir:

   - Un título descriptivo como "Evaluación para página de bienvenida de Mozilla".
   - Detalles de lo que quiera que hagamos, por ejemplo, lo que ya has intentado, si estás atascado y necesitas ayuda.
   - Un enlace al ejemplo que deseas evaluar o en el que necesitas ayuda, en un editor en línea. Ésta es una buena práctica: es muy difícil ayudar a alguien con un problema de codificación si no puede ver su código.
   - Un enlace a la página de evaluación actual, para que podamos encontrar la pregunta con la que desea ayuda.

{{PreviousMenu("Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}
