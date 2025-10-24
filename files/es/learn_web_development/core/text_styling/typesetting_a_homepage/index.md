---
title: "Desafío: Diseñar la página de inicio de una escuela comunitaria"
slug: Learn_web_development/Core/Text_styling/Typesetting_a_homepage
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/CSS_layout", "Learn_web_development/Core/Text_styling")}}

En este desafío, pondremos a prueba tu comprensión de todas las técnicas de estilo de texto que hemos cubierto a lo largo de este módulo pidiéndote que diseñes el texto para la página de inicio de una escuela comunitaria. Es posible que te diviertas un poco en el camino.

## Punto de partida

Para comenzar este desafío, debes:

- Ve y obtén los archivos [HTML](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/index.html) y [CSS](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/style.css) para el ejercicio, y el [icono de enlace externo](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/external-link-52.png) proporcionado.
- Haz una copia de ellos en tu computadora local.

Alternativamente, podrías usar un editor en línea como [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) o [Glitch](https://glitch.com/).
Podrías pegar el HTML y completar el CSS en uno de estos editores en línea, y usar [este icono de enlace externo](https://mdn.github.io/learning-area/css/styling-text/typesetting-a-homepage-start/external-link-52.png) como imagen de fondo.

> [!NOTE]
> Si te quedas atascado, puedes comunicarte con nosotros en uno de nuestros [canales de comunicación](/es/docs/MDN/Community/Communication_channels).

## Resumen del proyecto

Se te ha proporcionado un HTML sin formato para la página de inicio de una universidad comunitaria imaginaria, además de un CSS que le da estilo a la página en un diseño de tres columnas y proporciona algunos otros estilos rudimentarios. Debes escribir tus adiciones de CSS debajo del comentario en la parte inferior del archivo CSS para asegurarte de que sea fácil marcar las partes que has hecho. No te preocupes si algunos de los selectores son repetitivos; te dejaremos en este caso.

Fuentes:

- En primer lugar, descarga un par de fuentes tipográficas (tipografías) de uso gratuito. Debido a que esto es una universidad, las fuentes deben elegirse para darle a la página una sensación bastante seria, formal y confiable: una fuente serif en todo el sitio para el texto general del cuerpo, junto con una sans-serif o slab serif para los encabezados podría ser agradable.
- Utiliza un servicio adecuado para generar código `@font-face` a prueba de balas para estas dos fuentes.
- Aplica tu fuente del cuerpo a toda la página y tu fuente del encabezado a tus encabezados.

Estilo general del texto:

- Dale a la página un `font-size` en todo el sitio de `10px`.
- Dale a tus encabezados y otros tipos de elementos tamaños de fuente apropiados definidos utilizando una unidad relativa adecuada.
- Dale a tu texto del cuerpo un `line-height` adecuado.
- Centra tu encabezado de nivel superior en la página.
- Dale a tus encabezados un poco de `letter-spacing` para que no estén demasiado apretados y permitir que las letras respiren un poco.
- Dale a tu texto del cuerpo algo de `letter-spacing` y `word-spacing`, según corresponda.
- Dale al primer párrafo después de cada encabezado en `<section>` un poco de sangría de texto, digamos 20px.

Enlaces:

- Dale a los estados de enlace, visitado, enfocado y sobre él algunos colores que combinen con el color de las barras horizontales en la parte superior e inferior de la página.
- Haz que los enlaces estén subrayados de forma predeterminada, pero cuando estés sobre ellos o los enfoques, el subrayado desaparezca.
- Elimina el contorno de enfoque predeterminado de TODOS los enlaces en la página.
- Dale al estado activo un estilo notablemente diferente para que se destaque bien, pero haz que aún encaje con el diseño general de la página.
- Haz que los enlaces _externos_ tengan el icono de enlace externo insertado junto a ellos.

Listas:

- Asegúrate de que el espaciado de tus listas y elementos de lista funcione bien con el estilo de la página en general. Cada elemento de la lista debe tener el mismo `line-height` que una línea de párrafo, y cada lista debe tener el mismo espaciado en la parte superior e inferior que el que tienes entre los párrafos.
- Dale a tus elementos de la lista una buena viñeta apropiada para el diseño de la página. Depende de ti si eliges una imagen de viñeta personalizada o algo más.

Menú de navegación:

- Dale estilo a tu menú de navegación para que armonice con la página.

## Pistas y consejos

- No necesitas editar el HTML de ninguna manera para este ejercicio.
- No necesariamente tienes que hacer que el menú de navegación parezca botones, pero debe ser un poco más alto para que no se vea sin sentido en el lado de la página; también recuerda que debes hacer de este un menú de navegación vertical.

## Ejemplo

La siguiente captura de pantalla muestra un ejemplo de cómo podría verse el diseño terminado:

![Una captura de pantalla del diseño del desafío terminado. El encabezado superior dice 'St Huxley's Community College'. Hay una línea roja que separa el encabezado del banner del contenido. El contenido principal tiene tres columnas, dos que contienen texto y una barra de navegación vertical en la tercera columna.](example2.png)
