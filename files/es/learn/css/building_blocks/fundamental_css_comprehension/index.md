---
title: Comprensión de los fundamentos de CSS
slug: Learn/CSS/Building_blocks/Fundamental_CSS_comprehension
---

{{LearnSidebar}}{{PreviousMenu("Learn/CSS/Introduction_to_CSS/Debugging_CSS", "Learn/CSS/Introduction_to_CSS")}}

Has avanzado mucho en este módulo, debes sentirte orgulloso de haber llegado hasta el final. El último paso antes de terminar es intentar el examen del módulo — que incluye completar varios ejercicios para crear el último diseño — una tarjeta de presentación/de jugador/perfil de redes sociales.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Antes de intentar esta evaluación, debería haber revisado todos los
        artículos en este módulo.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Probar la comprensión de los fundamentos de la teoría, sintaxis y
        mecánica de CSS.
      </td>
    </tr>
  </tbody>
</table>

## Punto de Partida

Para comenzar esta evaluación, debes:

- Ve y coge el [archivo HTML del ejercicio](https://github.com/mdn/learning-area/blob/master/css/introduction-to-css/fundamental-css-comprehension/index.html), y el [archivo de imagen asociada](https://github.com/mdn/learning-area/blob/master/css/introduction-to-css/fundamental-css-comprehension/chris.jpg), y guárdalos en un nuevo directorio en tu ordenador local. Si quieres usar tu propio archivo de imagen y rellenar tu propio nombre, eres bienvenido - sólo asegúrate de que la imagen es cuadrada.
- Coge el [archivo de texto de los recursos CSS](https://github.com/mdn/learning-area/blob/master/css/introduction-to-css/fundamental-css-comprehension/style-resources.txt) — este contiene un conjunto de selectores y conjuntos de reglas en estado puro que necesitarás estudiar y combinar para responder a parte de esta evaluación.

> **Nota:** Alternativamente, se puede utilizar un sitio como [JSBin](http://jsbin.com/) o [Glitch](https://glitch.com/) para hacer la evaluación. Puede pegar el HTML y completar el CSS en uno de estos editores en línea, y usar [esta URL](http://mdn.github.io/learning-area/css/introduction-to-css/fundamental-css-comprehension/chris.jpg) para apuntar el elemento `<img>` al archivo de imagen. Si el editor en línea que estás usando no tiene un panel CSS separado, no dudes en ponerlo en un elemento `<style>` en el encabezado del documento.

## Resumen del Proyecto

Se le ha proporcionado un poco de HTML puro y una imagen, y necesitas escribir el CSS necesario para darle estilo a una pequeña tarjeta de presentación en línea, que tal vez pueda servir como una tarjeta de jugador o de perfil en redes sociales. Las siguientes secciones describen lo que debes hacer.

Configuración básica:

- En primer lugar, crea un nuevo archivo en el mismo directorio que tus archivos HTML y de imagen. Llámalo algo realmente imaginativo como `style.css`.
- Vincula tu CSS a tu archivo HTML mediante un elemento `<link>`.
- Las dos primeras reglas en el archivo de recursos CSS son tuyas, ¡GRATIS! Después de que hayas terminado de regocijarte de tu buena fortuna, cópialas y pégalas en la parte superior de tu nuevo archivo CSS. Úsalas como prueba para asegurarte de que tu CSS se aplica correctamente a tu HTML.
- Sobre las dos reglas, agregue un comentario CSS con algún texto dentro para indicar que se trata de un conjunto de estilos generales para toda la página. "Estilos generales de la página" sería suficiente. También agrega tres comentarios más en la parte inferior del archivo CSS para indicar estilos específicos para la configuración del contenedor de la tarjeta, estilos específicos para el header y footer (encabezado y pie de página), y estilos específicos para el contenido principal de la tarjeta de presentación. De ahora en adelante, los estilos subsiguientes añadidos a la hoja de estilo deben organizarse en el lugar apropiado.

Encargandonos de los selectores y conjuntos de reglas proporcionados:

- A continuación, nos gustaría que examinaras los cuatro selectores y calcularas la especificidad de cada uno. Escríbelas en algún lugar donde las puedas encontrar más tarde, como en un comentario en la parte superior de tu CSS.
- Ahora es el momento de poner el selector correcto en el conjunto de reglas correcto! Tienes cuatro pares de selectores y reglas que coinciden en tus recursos de CSS. Hazlo ahora y agrégalos a tu archivo CSS. Necesitaras:

  - Asignar al contenedor principal de tarjetas un ancho/alto fijo (width/height), color de fondo sólido (background-color), borde (border) y radio de borde (border-radius), entre otras cosas.
  - Asigna al `header` un degradado (linear-gradient) de fondo que va de más oscuro a más claro, además de esquinas redondeadas que encajan con las esquinas redondeadas establecidas en el contenedor principal de tarjetas.
  - Asigna al pie de página un degradado (linear-gradient) de fondo que vaya de más claro a más oscuro, además de esquinas redondeadas que encajen con las esquinas redondeadas establecidas en el contenedor principal de tarjetas.
  - Asigna a la imagen un `float` a la derecha para que se pegue al lado derecho del contenido principal de la tarjeta de presentación, y dale una altura máxima (max-height) del 100% (un truco inteligente que asegura que crecerá/encogerá para que se mantenga a la misma altura que el contenedor principal, sin importar a que altura se trasforme).

- ¡Cuidado! Hay dos errores en los conjuntos de reglas proporcionados. Utilizando cualquier técnica que conozcas, localízalas y arréglalas antes de seguir adelante.

Nuevos conjuntos de reglas que necesitas escribir:

- Escribe un conjunto de reglas que apunte tanto al header de la tarjeta como al footer de la misma, dándoles una altura total de 50px, (que incluye una altura de contenido de 30px y un padding de 10px en todos los lados). Pero expresalo en `em`.
- El margen por defecto aplicado a los elementos `<h2>` y `<p>` por el navegador interferirá con nuestro diseño, así que escribe una regla que apunte a todos estos elementos y establezca su margen en 0.
- Para evitar que la imagen se derrame del contenido principal de la tarjeta de presentación (el elemento `<article>`), necesitamos darle una altura específica. Ajustar la altura del `<article>` a 120px, expresada en `em`. También asigna un `background-color` negro semitransparente, resultando en un tono ligeramente más oscuro que deja que el color rojo del fondo brille un poco también.
- Escribe un conjunto de reglas que le asigne al `<h2>` un `font-size` efectivo de 20px (pero expresado en `em`) y un `line-height` (altura de línea) apropiada para colocarlo en el centro de la caja de contenido del header. Recuerde que la altura de la caja de contenido debe ser de 30px - esto te proporciona todos los números que necesitas para calcular `line-height`.
- Escribe un conjunto de reglas que le asigne al `<p>` dentro del footer un `font-size` efectivo de 15px (pero expresado en `em`) y un `line-height` apropiada para colocarlo en el centro de la caja de contenido del footer. Recuerda que la altura de la caja de contenido debe ser de 30px - esto te proporciona todos los números que necesitas para calcular `line-height`.
- Como último toque, asigna al párrafo dentro del `<article>` un padding apropiado para que su borde izquierdo se alinee con el `<h2>` y el párrafo del footer, y ajuste su color para que sea bastante claro y sea fácil de leer.

Otras cosas en las que pensar:

- Obtendrás puntos adicionales si escribes tu CSS para una legibilidad máxima, con una declaración separada en cada línea.
- Deberás incluir `.card` al principio de la cadena de selección en todas tus reglas, para que estas reglas no interfieran con el estilo de cualquier otro elemento si la tarjeta de presentación se pusiera en una página con un montón de otro contenido.

## Consejos y Sugerencias

- No necesitas editar el HTML de ninguna manera, excepto para aplicar el CSS a tu HTML.
- Cuando intentes calcular el valor `em` que necesita para representar una cierta longitud de píxel, piensa en el tamaño de fuente base que tiene el elemento raíz (`<html>`) , y por el que necesita multiplicarse para obtener el valor deseado. Eso te dará tu valor, al menos en un caso sencillo como este.

## Ejemplo

La siguiente captura de pantalla muestra un ejemplo de cómo debe ser el diseño terminado:

![Una vista de la tarjeta de presentación terminada, muestra un encabezado y un pie de página del lector, y un panel central más oscuro que contiene los detalles principales y la imagen.](business-card.png)

## Evaluación

Si estás siguiendo esta evaluación como parte de un curso organizado, deberías ser capaz de entregar tu trabajo a tu profesor/mentor para que lo califique. Si eres autodidacta, entonces puedes obtener la guía de puntuación fácilmente preguntando en el hilo del [Discurso del Área de Aprendizaje](https://discourse.mozilla-community.org/t/learning-web-development-marking-guides-and-questions/16294), o en el canal IRC [#mdn](irc://irc.mozilla.org/mdn) en [Mozilla IRC](https://wiki.mozilla.org/IRC). Haz el ejercicio primero - ¡No hay nada que ganar haciendo trampa!

{{PreviousMenu("Learn/CSS/Introduction_to_CSS/Debugging_CSS", "Learn/CSS/Introduction_to_CSS")}}
