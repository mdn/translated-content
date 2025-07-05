---
title: "Desafío: Crear un elegante documento con membrete"
slug: Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension", "Learn_web_development/Core/Styling_basics/Cool-looking_box", "Learn_web_development/Core/Styling_basics")}}

Si quieres causar una buena impresión, escribir una carta en un bonito papel con membrete puede ser un muy buen comienzo. En este desafío, crearás una plantilla en línea para lograr ese aspecto.

## Punto de partida

Para comenzar este desafío, debes:

- Hacer copias locales del [HTML](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/index.html) y [CSS](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/style.css) — guárdalos como `index.html` y `style.css` en un nuevo directorio.
- Guardar copias locales de las imágenes [superior](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/top-image.png), [inferior](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/bottom-image.png) y [logo](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/logo.png) en el mismo directorio que tus archivos de código.

Alternativamente, podrías usar un editor en línea como [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) o [Glitch](https://glitch.com/).
Podrías pegar el HTML y completar el CSS en uno de estos editores en línea.

> [!NOTE]
> Si te quedas atascado, puedes comunicarte con nosotros en uno de nuestros [canales de comunicación](/es/docs/MDN/Community/Communication_channels).

## Resumen del proyecto

Se te han proporcionado los archivos necesarios para crear una plantilla de papel con membrete. Solo necesitas juntar los archivos. Para llegar allí, necesitas:

### El documento principal

- Aplica el CSS al HTML.
- Agrega un estilo de fondo a la carta que:
  - Fija la imagen superior a la parte superior de la carta
  - Fija la imagen inferior a la parte inferior de la carta
  - Agrega un gradiente semitransparente sobre la parte superior de ambos fondos anteriores que le da a la carta un poco de textura. Hazlo ligeramente oscuro cerca de la parte superior e inferior, pero completamente transparente para una gran parte del centro.

- Agrega otro estilo de fondo que simplemente agregue la imagen superior a la parte superior de la carta, como una alternativa para los navegadores que no admiten la declaración anterior.
- Agrega un color de fondo blanco a la carta.
- Agrega un borde sólido de 1 mm en la parte superior e inferior de la carta, en un color que esté en consonancia con el resto de la combinación de colores.

### El logo

- Al {{htmlelement("Heading_Elements", "h1")}}, agrega el logo como imagen de fondo.
- Agrega un filtro al logo para darle una sutil sombra paralela.
- Ahora comenta el filtro e implementa la sombra paralela de una manera diferente (un poco más compatible con todos los navegadores), que aún siga la forma de la imagen redonda.

## Pistas y consejos

- Recuerda que puedes crear una alternativa para navegadores más antiguos colocando primero la versión alternativa de un estilo, seguida de la versión que funciona solo en los navegadores más nuevos. Los navegadores más antiguos aplicarán la primera declaración e ignorarán la segunda, mientras que los navegadores más nuevos aplicarán la primera y luego la anularán con la segunda.
- Si lo deseas, siéntete libre de crear tus propios gráficos para el desafío.

## Ejemplo

La siguiente captura de pantalla muestra un ejemplo de cómo podría verse el diseño terminado:

![Página completa A4 con borde decorativo superior e inferior compuesto de formas naranjas y rojas, y una insignia roja y verde con la leyenda Compañía asombrosa escrita en ella, debajo del borde superior. Encima del borde inferior hay una dirección postal.](letterhead.png)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension", "Learn_web_development/Core/Styling_basics/Cool-looking_box", "Learn_web_development/Core/Styling_basics")}}
