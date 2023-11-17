---
title: "Evaluación: Solución de problemas de accesibilidad"
slug: Learn/Accessibility/Accessibility_troubleshooting
---

{{LearnSidebar}}{{PreviousMenu("Learn/Accessibility/Mobile", "Learn/Accessibility")}}

En la evaluación de este módulo, le presentamos un sitio simple con una serie de problemas de accesibilidad que necesita diagnosticar y corregir.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Conocimiento de informática básica, una comprensión básica de HTML, CSS
        y JavaScript, una comprensión de los artículos anteriores del curso.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectivo:</th>
      <td>
        Probar los conocimientos básicos de los fundamentos de accesibilidad.
      </td>
    </tr>
  </tbody>
</table>

## Punto de partida

Para iniciar esta evaluación, debe ir y tomar el [archivo ZIP que contiene los archivos que componen el ejemplo.](https://github.com/mdn/learning-area/blob/master/accessibility/assessment-start/assessment-files.zip?raw=true) Descomprima el contenido en un nuevo directorio en algún lugar del equipo local.

Alternativamente, podría usar un sitio como [JSBin](http://jsbin.com/) o [Glitch](https://glitch.com/) para hacer su evaluación. Puede pegar el HTML, CSS y JavaScript en uno de estos editores en línea. Si el editor en línea que está utilizando no tiene un panel CSS/JS independiente, no dude en colocarlos en elementos apropiados `<style>` / `<script>.`

El sitio de evaluación terminado debe tener este aspecto:

![](assessment-site-finished.png)

Verá algunas diferencias/problemas con la visualización del estado inicial de la evaluación — esto se debe principalmente a las diferencias en el marcado, que a su vez causan algunos problemas de estilo, ya que el CSS no se aplica correctamente. No se preocupe, ¡estará solucionando estos problemas en las próximas secciones!

> **Nota:** Si se queda atorado, pídanos ayuda — consulta la sección [Evaluación o más ayuda](/es/docs/Learn/Accessibility/Accessibility_troubleshooting#Assessment_or_further_help) en la parte inferior de esta página.

## Resumen del proyecto

Para este proyecto, se le presenta un sitio ficticio de la naturaleza que muestra un artículo "fáctico" sobre los osos. Tal como está, tiene una serie de problemas de accesibilidad: su tarea es explorar el sitio existente y solucionarlos lo mejor de sus capacidades, respondiendo a las preguntas que se indican a continuación.

### Color

El texto es difícil de leer debido al esquema de color actual. ¿Puede realizar una prueba del contraste de color actual (texto/fondo), notificar los resultados de la prueba y, a continuación, corregirla cambiando los colores asignados?

### HTML Semántico

1. El contenido todavía no es muy accesible: informe sobre lo que sucede cuando intenta navegar por él mediante un lector de pantalla.
2. ¿Puede actualizar el texto del artículo para facilitar la navegación de los usuarios del lector de pantalla?
3. La parte del menú de navegación del sitio (limitada por `<div class="nav"></div>`) podría ser más accesible poniéndolo en un elemento semántico HTML5 adecuado. ¿A cuál debería actualizarse? Realice la actualización.

> **Nota:** Tendrá que actualizar los selectores de reglas CSS que estilan las etiquetas a sus equivalentes adecuados para los encabezados semánticos. Una vez que agregue elementos de párrafo, notará que el estilo se ve mejor.

### Las imágenes

Las imágenes son actualmente inaccesibles para los usuarios del lector de pantalla. ¿Puede arreglarlo?

### El reproductor de audio

1. El reproductor de `<audio>` no es accesible para personas con discapacidad auditiva (sordos) - ¿podría añadir algún tipo de alternativa accesible para estos usuarios?
2. El reproductor de `<audio>` no es accesible para aquellos que utilizan navegadores más antiguos que no admiten audio HTML5. ¿Cómo podrías permitir que sigan accediendo al audio?

### Los formularios

1. El elemento `<input>` en el formulario de búsqueda en la parte superior se podría hacer con una etiqueta, pero no queremos agregar una etiqueta de texto visible que potencialmente estropearía el diseño y realmente no es necesaria para los usuarios sin discapacidad visual. ¿Cómo podría agregar una etiqueta a la que solo puedan acceder los lectores de pantalla?
2. Los dos elementos `<input>` del formulario en el comentario tienen etiquetas de texto visibles, pero no están inequívocamente asociados con sus etiquetas, ¿cómo lograría esto? Tenga en cuenta que también tendrá que actualizar parte de la regla CSS.

### El control de mostrar/ocultar comentarios

El botón de control de mostrar/ocultar comentarios no es accesible por teclado actualmente. ¿Puede hacerlo accesible al teclado, tanto en términos de enfocarlo usando la tecla de tabulación como de activarlo usando la tecla de retorno?

### La tabla

La tabla de datos no es muy accesible actualmente: es difícil para los usuarios del lector de pantalla asociar filas y columnas de datos, y la tabla tampoco tiene ningún tipo de resumen para dejar claro lo que muestra. ¿Puede agregar algunas características a su HTML para solucionar este problema?

### ¿Otras consideraciones?

¿Puede enumerar dos ideas más para mejoras que podrían hacer que el sitio web sea más accesible?

## Evaluación o más ayuda

Si desea que se evalúe su trabajo, o si está atorado y desea pedir ayuda:

1. Ponga su trabajo en un editor compartible en línea como [CodePen,](https://codepen.io/) [jsFiddle](https://jsfiddle.net/)o [Glitch](https://glitch.com/).
2. Escribe una publicación pidiendo evaluación y/o ayuda en la categoría Aprendizaje del [foro de discurso mdn](https://discourse.mozilla.org/c/mdn/learn). Su publicación debe incluir:Un título descriptivo como "Evaluación deseada para la solución de problemas de accesibilidad".
   - Detalles de lo que ya ha intentado, y lo que le gustaría que hagamos, por ejemplo, si está atascado y necesita ayuda, o quiere una evaluación.
   - Un enlace al ejemplo con el que desea evaluar o necesita ayuda, en un editor de compartición en línea (como se mencionó en el paso 1 anterior). Esta es una buena práctica a adquirir - es muy difícil ayudar a alguien con un problema de codificación si no se puede ver su código.
   - Un enlace a la tarea actual o página de evaluación, para que podamos encontrar la pregunta con la que desea ayuda.

{{PreviousMenu("Learn/Accessibility/Mobile", "Learn/Accessibility")}}
