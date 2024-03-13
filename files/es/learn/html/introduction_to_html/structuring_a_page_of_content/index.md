---
title: Estructuración de una Página de contenido
slug: Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content
---

{{LearnSidebar}}{{PreviousMenu("Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}

La estructuración de una página de contenido lista para su uso mediante CSS es una habilidad muy importante para dominar, por lo que en esta evaluación verá su capacidad para pensar en cómo podría finalizar una página buscando y eligiendo la semántica estructural adecuada para construir un diseño en la parte superior.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisitos:</th>
      <td>
        <span id="result_box" lang="es"
          ><span
            >Antes de intentar esta evaluación, usted debería haber trabajado ya
            en el resto del curso, con un énfasis particular en la
          </span></span
        ><a
          href="/es/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure"
          >Estructura del Documento y del Sitio Web.</a
        ><a
          href="https://developer.mozilla.org/es/docs/Learn/HTML/Introduccion_a_HTML/estructura"
          >.</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        <span id="result_box" lang="es"
          ><span
            >Probar el conocimiento de las estructuras de páginas web y cómo
            representar un prototipado de diseño prospectivo en el
            marcado.</span
          ></span
        >
      </td>
    </tr>
  </tbody>
</table>

## Punto de partida

Para comenzar esta evaluación, debería tomar el [archivo zip que contiene todos los activos de inicio](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/structuring-a-page-of-content-start/assets.zip?raw=true). El archivo zip contiene:

- El HTML que necesitas para añadir marcado estructural.
- CSS para dar el estilo a tu marcado.
- Las imágenes que serán utilizadas en la página.

Crée el ejemplo en su ordenador personal, o como alternativa utilize un sitio como [JSBin](http://jsbin.com/) o [Glitch](https://glitch.com/) para hacer su evaluación.

## Breve Proyecto

Para este proyecto, su tarea es tomar el contenido de la página principal de un sitio web de observación de aves y añadir elementos estructurales a la misma para que pueda tener un diseño de página aplicado a ella. Necesita tener:

- Un encabezado que abarca todo el ancho del sitio que contiene el título principal de la página, el logotipo del sitio y el menú de navegación. El título y el logotipo aparecen lado a lado una vez que se aplica el estilo, y la navegación aparece debajo de esos dos elementos.
- Un área de contenido principal que contiene dos columnas: un bloque principal para contener el texto de bienvenida y una barra lateral para contener miniaturas de imágenes.
- Un pie de página que contiene información sobre derechos de autor y créditos.

Debe agregar una presentación adecuada para:

- El encabezado
- El menú de navegación
- El contenido principal
- El texto de bienvenida
- La barra lateral de imágenes
- El pié de página

También debería:

- Aplicar el CSS proporcionado a la página agregando otro elemento {{htmlelement ("link")}} justo debajo del existente que se proporciona al principio.

## Consejos

- Utilize el [validador de HTML W3C](https://validator.w3.org/) para validar su HTML; Obtendrá puntos de bonificación si valida tanto como sea posible (la línea "googleapis" es una línea utilizada para importar fuentes personalizadas en la página del servicio Google Fonts, no se valida, así que no te preocupes. )
- No necesita saber CSS para hacer esta evaluación; Sólo tiene que poner el CSS proporcionado dentro de un elemento HTML.
- El CSS proporcionado está diseñado para que cuando se agreguen los elementos estructurales correctos al marcado, aparezcan verdes en la página representada.
- Si se está quedando atascado y no puede imaginar ni qué elementos poner ni donde ponerlos , a menudo ayuda a dibujar un diagrama de bloques simple del diseño de página, y escribir en los elementos que usted piensa que debe envolver cada bloque.

## Ejemplo

La siguiente captura de pantalla muestra un ejemplo de cómo podría verse la letra después de haber sido marcada.

![El ejemplo terminado para la evaluación; una página web simple sobre la observación de aves, que incluye un encabezado de "Observación de aves", fotos de aves y un mensaje de bienvenida](example-page.png)

## Evaluación

Si está siguiendo esta evaluación como parte de un curso organizado, debe ser capaz de dar su trabajo a su maestro / mentor para el marcado. Si usted está aprendiendo por si mismo, entonces puede obtener la guía de marcado con bastante facilidad preguntando sobre ello en la lista de correo [dev-mdc](https://lists.mozilla.org/listinfo/dev-mdc), o en el canal IRC [#mdn](irc://irc.mozilla.org/mdn) en [Mozilla IRC](https://wiki.mozilla.org/IRC). Pruebe a hacer el ejercicio primero - ¡No hay nada que ganar por hacer trampa!

{{PreviousMenu("Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}
