---
title: "Desafío: Comprensión fundamental del diseño"
slug: Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/Scripting", "Learn_web_development/Core/CSS_layout")}}

Si has trabajado en este módulo, ya habrás cubierto los conceptos básicos de lo que necesitas saber para hacer diseño CSS hoy en día, y también para trabajar con CSS más antiguo. Esta tarea pondrá a prueba parte de tu conocimiento mediante el desarrollo de un diseño de página web simple utilizando una variedad de técnicas.

## Punto de partida

Puedes descargar el HTML, CSS y un conjunto de seis imágenes [aquí](https://github.com/mdn/learning-area/tree/main/css/css-layout/fundamental-layout-comprehension).

Guarda el documento HTML y la hoja de estilo en un directorio en tu computadora, y agrega las imágenes en una carpeta llamada `images`. Abrir el archivo `index.html` en un navegador debería darte una página con un estilo básico pero sin diseño, que debería verse algo como la imagen a continuación.

![Punto de partida de la tarea de diseño. Los elementos no están dispuestos de forma ordenada. Hay un título de sitio web, encima de una barra de navegación negra con 5 enlaces alineados a la izquierda, seguido del título de la publicación del blog y el contenido de la publicación. Entre el título del blog y el contenido del blog hay una foto que está alineada a la izquierda.](layout-task-start.png)

Este punto de partida tiene todo el contenido de tu diseño como lo muestra el navegador en flujo normal.

Alternativamente, podrías usar un editor en línea como [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) o [Glitch](https://glitch.com/).
Si usas un editor en línea, deberás cargar las imágenes y reemplazar los valores en los atributos `src` para que apunten a las nuevas ubicaciones de las imágenes.

> [!NOTE]
> Si te quedas atascado, puedes comunicarte con nosotros en uno de nuestros [canales de comunicación](/es/docs/MDN/Community/Communication_channels).

## Resumen del proyecto

Se te ha proporcionado algo de HTML sin formato, CSS básico e imágenes; ahora necesitas crear un diseño para el diseño.

### Tus tareas

Ahora debes implementar tu diseño. Las tareas que debes lograr son:

1. Mostrar los elementos de navegación en una fila, con una cantidad igual de espacio entre los elementos.
2. La barra de navegación debe desplazarse con el contenido y luego quedar fija en la parte superior de la ventana gráfica cuando la alcance.
3. La imagen que está dentro del artículo debe tener texto ajustado a su alrededor.
4. Los elementos {{htmlelement("article")}} y {{htmlelement("aside")}} deben mostrarse como un diseño de dos columnas. Las columnas deben tener un tamaño flexible para que si la ventana del navegador se reduce, las columnas se vuelvan más estrechas.
5. Las fotografías deben mostrarse como una cuadrícula de dos columnas con un espacio de 1 píxel entre las imágenes.

## Pistas y consejos

No necesitarás editar el HTML para lograr este diseño y las técnicas que debes usar son:

- Flexbox
- Grid
- Flotación
- Posicionamiento

Hay algunas formas en que podrías lograr algunas de estas tareas, y a menudo no hay una única forma correcta o incorrecta de hacer las cosas. Prueba algunos enfoques diferentes y ve cuál funciona mejor. Toma notas mientras experimentas.

## Ejemplo

La siguiente captura de pantalla muestra un ejemplo de cómo debería verse el diseño terminado para el diseño:

![Sitio web de la tarea de diseño terminada. Los elementos están dispuestos de forma ordenada. Hay un título de sitio web, encima de una barra de navegación negra que contiene 5 enlaces espaciados uniformemente. Debajo de la barra de navegación, hay dos secciones. En el lado izquierdo hay una publicación de blog: un título de publicación de blog seguido del contenido de la publicación. El contenido del blog se ajusta alrededor de una foto que está alineada a la izquierda. En el lado derecho hay un título de 'fotografía' sobre un grupo de imágenes dispuestas en una cuadrícula de dos imágenes de ancho.](layout-task-complete.png)
