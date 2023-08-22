---
title: "Evaluación: Estructurando datos planetarios"
slug: Learn/HTML/Tables/Structuring_planet_data
---

{{LearnSidebar}}{{PreviousMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}

En nuestra evaluación te proporcionamos datos sobre los planetas de nuestro sistema solar y tu los estructurarás en una tabla HTML.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Antes de comenzar esta evaluación deberías de haber leído los artículos
        de este módulo.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Comprobar si has comprendido las tablas HTML y las características
        asociadas.
      </td>
    </tr>
  </tbody>
</table>

## Punto de incio

Para comenzar esta evaluación, crea una copia local de [blank-template.html](https://github.com/mdn/learning-area/blob/master/html/tables/assessment-start/blank-template.html), [minimal-table.css](https://github.com/mdn/learning-area/blob/master/html/tables/assessment-start/minimal-table.css), y [planets-data.txt](https://github.com/mdn/learning-area/blob/master/html/tables/assessment-start/planets-data.txt) en una nueva carpeta de tu ordenador.

> **Nota:** Como alternativa, puedes usar una web como [JSBin](https://jsbin.com/) o [Glitch](https://glitch.com/) para realizar tu evaluación. Puedes pegar el HTML, CSS y JavaScript en uno de estos editores online. Si el editor online que estas usando no tiene paneles separados para JavaScript/CSS, sientete libre de ponerlos en línea dentro del mismo HTML mediante el uso de `<script>`/`<style>`.

## Resumen del proyecto

Estás trabajando en la escuela; tus estudiantes están estudiando los planetas de nuestro sistema solar y quieres proporcionarles una forma sencilla de seguir los datos para buscar hechos sobre los planetas. Una tabla HTML sería ideal — tienes que coger los datos que tienes disponibles y convertirlos en una tabla siguiendo los pasos de abajo.

La tabla finalizada debería de verse así:

![](assessment-table.png)

También puedes ver el ejemplo [aquí](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) (no mires el código fuente — ¡no hagas trampas!)

## Pasos para completarlo

Los siguientes pasos describen lo que necesitas para completar el ejemplo de la tabla. Todos los datos que necesitarás están en el archivo `planets-data.txt`. Si tienes problemas para visualizar los datos, mira el ejemplo de arriba o intentalo dibujando un diagrama.

1. Abre tu copia de `blank-template.html`, y comienza la tabla dándole un contenedor exterior, una cabecera y un cuerpo. No necesitas un pie de tabla en este ejemplo.
2. Añade el subtítulo proporcionado a tu tabla.
3. Añade una línea a la cabecera que contenga todos los encabezados de columna.
4. Crea todas las líneas con su contenido, asegurandote marcar como cabecera aquellas celdas que lo sean.
5. Asegurate de que el contenido esta insertado en las celdas correctas — en los datos del .txt, cada línea del planeta esta al lado de su planeta asociado.
6. Añade atributos para que las líneas y columnas del encabezado no se puedan confundir con las líneas, columnas o grupos de líneas a las que encabezan.
7. Añade un borde negro alrededor de la columna que contiene los nombres de los planetas y sus encabezados.

## Pistas y consejos

- La primera celda de la línea de enbezado tiene que estar en blanco y unir dos columnas.
- Los encabezados de la filas agrupadas (p. ej. _Jovian planets_) que están a la izquierda de los encabezados de nombres de planetas (p. ej. _Saturn_) son algo complicados de resolver — asegurate de que cada uno agrupa el número correcto de líneas y columnas
- Una manera de asociar encabezados con sus líneas/columnas es mucha más fácil que la otra.

## Evaluación

Si estas siguiendo esta evaluación como parte de un curso organizado, deberías de ser capaz de entregar tu trabajo a tu profesor(a)/mentor para ver la puntuación. Si estas aprendiendo por tu cuenta, puedes obtener la guía de puntuación preguntando en [Learning Area Discourse thread](https://discourse.mozilla-community.org/t/learning-web-development-marking-guides-and-questions/16294) o en el canal IRC [#mdn](irc://irc.mozilla.org/mdn) en [Mozilla IRC](https://wiki.mozilla.org/IRC). Intenta hacer el ejercicio primero — ¡haciendo trampas no aprenderás nada!

{{PreviousMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}
