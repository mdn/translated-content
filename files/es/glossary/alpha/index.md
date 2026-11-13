---
title: Alfa (canal alfa)
slug: Glossary/Alpha
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

El **canal alfa** especifica la opacidad de un {{CSSxRef("&lt;color&gt;")}}. Los colores se representan de forma digital como un conjunto de números, cada uno de los cuales indica la intensidad o el nivel de un componente específico del color. Cada uno de estos componentes se denomina **canal**. En un archivo de imagen típico, los canales de color describen cuánto rojo, verde y azul se combinan para formar el color final. Para representar un color a través del cual se puede ver el fondo hasta cierto punto, se añade un cuarto canal al color: el canal alfa.

Por ejemplo, el color `#8921F2` (que también puede expresarse como `rgb(137 33 242)` o `hsl(270 89% 54)`) es un bonito tono de morado. A continuación puedes ver un pequeño recuadro de ese color en la esquina superior izquierda y otro recuadro del _mismo_ color, pero con un canal alfa con una opacidad del 50% (o 0.5), `#8921F280`, donde `80` es el equivalente hexadecimal del 50%. Este color también puede definirse como `rgb(137 33 242 / 50%)` o `hsl(270 89% 54 / 50%)`. Ambos recuadros aparecen dibujados sobre un párrafo de texto.

![Imagen que muestra el efecto de un canal alfa en un color.](alpha-channel-example.png)

Como puedes ver, el color sin canal alfa oculta por completo el texto del fondo, mientras que el recuadro con canal alfa lo deja visible a través del morado.

## Véase también

- [Colores CSS](/es/docs/Web/CSS/Guides/Colors)
- [Aprender: valores y unidades](/es/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [Guía sobre tipos y formatos de archivos de imagen](/es/docs/Web/Media/Guides/Formats/Image_types)
- [Composición alfa](https://es.wikipedia.org/wiki/Composici%C3%B3n_alfa) en Wikipedia
- [Modelo de color RGBA](https://es.wikipedia.org/wiki/Espacio_de_color_RGBA) en Wikipedia
- [Canal (imagen digital)](<https://es.wikipedia.org/wiki/Canal_(imagen_digital)>) en Wikipedia
