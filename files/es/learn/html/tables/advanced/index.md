---
title: Funciones avanzadas de las tablas HTML y accesibilidad
slug: Learn/HTML/Tables/Advanced
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Tables/Basics", "Learn/HTML/Tables/Structuring_planet_data", "Learn/HTML/Tables")}}

En el segundo artículo de este módulo, analizamos algunas características más avanzadas de las tablas HTML, como los subtítulos/resúmenes, la agrupación de filas en las secciones del encabezado, el cuerpo y el pie de página; y también analizamos la accesibilidad de las tablas para usuarios con discapacidad visual.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conceptos básicos de HTML (ver
        <a href="/es/docs/Learn/HTML/Introduccion_a_HTML"
          >Introducción al HTML</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprender las características más avanzadas de las tablas HTML y la
        accesibilidad de las tablas.
      </td>
    </tr>
  </tbody>
</table>

## Añadir un subtítulo a tu tabla con \<caption>

Puedes dar un título a tu tabla colocándolo dentro de un elemento {{htmlelement ("caption")}} y anidándolo dentro del elemento {{htmlelement ("table")}}. Debes ponerlo justo debajo de la etiqueta de apertura `<table>`.

```html
<table>
  <caption>
    Dinosaurios en el período Jurásico
  </caption>

  ...
</table>
```

Como puedes deducir a partir del breve ejemplo anterior, el título debe contener una descripción del contenido de la tabla. Esto es útil para todos los lectores que deseen descubrir de un vistazo si la tabla les resulta útil mientras ojean la página, pero es útil especialmente para usuarios ciegos. En lugar de que un lector de pantalla lea el contenido de muchas celdas solo para averiguar de qué trata la tabla, el lector puede contar con el título para luego decidir si leer la tabla con mayor detalle.

Los subtítulos se colocan directamente debajo de la etiqueta `<table>`.

> **Nota:** El atributo [`summary`](/es/docs/Web/HTML/Element/table#summary) también se puede usar en el elemento `table` para proporcionar una descripción; los lectores de pantalla también lo leen. Sin embargo, recomendamos usar el elemento `caption`, porque [`summary`](/es/docs/Web/HTML/Element/table#summary) está {{glossary("obsoleto")}} conforme a la especificación HTML5 y porque los usuarios sin discapacidad visual no pueden leerlo (no aparece en la página).

### Aprendizaje activo: Añadir un subtítulo

Vamos a probarlo con un ejemplo del artículo anterior.

1. Abre el ejemplo del horario de clases de la profesora de idiomas del final de [conocimientos básicos de las tablas HTML](/es/docs/Learn/HTML/Tablas/Conceptos_b%C3%A1sicos_de_las_tablas_HTML#Aprendizaje_activo_colgroup_y_col), o haz una copia local de nuestro archivo [timetable-fixed.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/timetable-fixed.html).
2. Añade un título adecuado a la tabla.
3. Guarda tu código, ábrelo en un navegador y observa qué aspecto presenta.

> **Nota:** Puedes encontrar nuestra versión en GitHub: consulta [timetable-caption.html](https://github.com/mdn/learning-area/blob/master/html/tables/advanced/timetable-caption.html) ([mirar en vivo](http://mdn.github.io/learning-area/html/tables/advanced/timetable-caption.html)).

## Añadir estructura con \<thead>, \<tfoot> y \<tbody>

A medida que la estructura de las tablas se vuelve más compleja, es útil darles una estructura más definida. Una forma clara de hacerlo es con {{htmlelement ("thead")}}, {{htmlelement ("tfoot")}} y {{htmlelement ("tbody")}}, que te permiten marcar un encabezado, un pie de página y una sección del cuerpo de la tabla.

Estos elementos no mejoran las características de accesibilidad de la tabla para los usuarios de lectores de pantalla ni su aspecto visual en sí. Sin embargo, son muy útiles para la aplicación de estilo y la compaginación, porque actúan como soportes útiles para añadir CSS a tu tabla. Como ejemplos interesantes, en el caso de una tabla extensa, puedes hacer que el encabezado y el pie de página se repitan en cada página impresa, y también que el cuerpo de la tabla se muestre en una sola página y desplazarte por los contenidos arriba y abajo con la barra de desplazamiento.

Para utilizarlos:

- El elemento `<thead>` debe delimitar el encabezado de la tabla; esta suele ser la primera fila, que contiene los encabezados de las columnas, pero no siempre es así. Si utilizas los elementos {{htmlelement ("col")}}/{{htmlelement ("colgroup")}}, el encabezado de la tabla debe estar justo debajo.
- El elemento `<tfoot>` delimita la parte de la tabla correspondiente al pie de página; esta podría ser una fila final con elementos en las filas anteriores. Puedes incluir el pie de página de la tabla justo en la parte inferior de la tabla, donde esperarías que esté, o justo debajo del encabezado (y el navegador lo mostrará aun así en la parte inferior de la tabla).
- El elemento `<tbody>` delimita las otras partes del contenido de la tabla que no están en el encabezado o en el pie de página de la tabla. Aparecerá debajo del encabezado de la tabla o, a veces, en el pie de página, según cómo hayas decidido estructurarlo.

> **Nota:** `<tbody>` se incluye siempre en todas las tablas de forma implícita si no lo especificas en tu código. Para comprobarlo, abre uno de tus ejemplos anteriores que no incluya `<tbody>` y mira el código HTML en las [herramientas de desarrollo de tu navegador](/es/docs/Learn/Common_questions/What_are_browser_developer_tools); verás que el navegador ha añadido esta etiqueta. Quizás te preguntes por qué deberías molestarte en incluirlo. Debes hacerlo para tener más control sobre la estructura y el estilo de la tabla.

### Aprendizaje activo: Añadir estructura a la tabla

Pongamos en acción estos elementos nuevos.

1. En primer lugar, haz una copia local de [spending-record.html](https://github.com/mdn/learning-area/blob/master/html/tables/advanced/spending-record.html) y [minimal-table.css](https://github.com/mdn/learning-area/blob/master/html/tables/advanced/minimal-table.css) en una carpeta nueva de tu ordenador.
2. Intenta abrirlo en un navegador: observarás que se ve bien, pero podría mejorarse. La fila «SUM», que contiene una suma de las cantidades gastadas, parece estar en el lugar equivocado, y faltan algunos detalles del código.
3. Coloca la fila de encabezados dentro de un elemento `<thead>`, la fila «SUM» dentro de un elemento `<tfoot>`, y el resto del contenido dentro de un elemento `<tbody>`.
4. Guarda y actualiza, y observa que añadir el elemento `<tfoot>` ha provocado que la fila «SUM» pase al final de la tabla.
5. Luego, añade un atributo [`colspan`](/es/docs/Web/HTML/Element/td#colspan) para que la celda «SUM» abarque las primeras cuatro columnas, de modo que el número aparezca en la parte inferior de la columna «Costes».
6. Vamos a añadir un estilo adicional sencillo a la tabla para que veas cuán útiles son estos elementos para aplicar CSS. Dentro del encabezado del documento HTML hay un elemento {{htmlelement ("style")}} vacío. Añade a este elemento las líneas de código CSS siguientes:

   ```css
   tbody {
     font-size: 95%;
     font-style: italic;
   }

   tfoot {
     font-weight: bold;
   }
   ```

7. Guarda, actualiza, y échale un vistazo al resultado. Si los elementos `<tbody>` y `<tfoot>` no estuvieran en su lugar, tendrías que escribir selectores/reglas mucho más complicados para obtener la misma aplicación de estilo.

> **Nota:** No esperamos que comprendas completamente el CSS en este momento. Aprenderás más sobre el tema cuando llegues a nuestros módulos CSS ([Introducción al CSS](/es/docs/Learn/CSS/First_steps) es un buen lugar para comenzar; también tenemos un artículo específico sobre [Aplicar estilo a las tablas](/es/docs/Learn/CSS/Building_blocks/Styling_tables)).

Tu tabla final debería tener un aspecto similar al siguiente:

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Mi historial de gastos</title>
    <style>
      html {
        font-family: sans-serif;
      }

      table {
        border-collapse: collapse;
        border: 4px solid rgb(200, 200, 200);
        letter-spacing: 1px;
        font-size: 0.8rem;
      }

      td,
      th {
        border: 2px solid rgb(190, 190, 190);
        padding: 10px 20px;
      }

      th {
        background-color: rgb(235, 235, 235);
      }

      td {
        text-align: center;
      }

      tr:nth-child(even) td {
        background-color: rgb(250, 250, 250);
      }

      tr:nth-child(odd) td {
        background-color: rgb(245, 245, 245);
      }

      caption {
        padding: 10px;
      }

      tbody {
        font-size: 90%;
        font-style: italic;
      }

      tfoot {
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <table>
      <caption>
        Cómo elegí gastar mi dinero
      </caption>
      <thead>
        <tr>
          <th>Compra</th>

          <th>Ubicación</th>
          <th>Fecha</th>
          <th>Revisión</th>

          <th>Coste (€)</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <td colspan="4">SUM</td>
          <td>118</td>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td>Corte de pelo</td>

          <td>Peluquería</td>
          <td>12/09</td>

          <td>Gran idea</td>
          <td>30</td>
        </tr>
        <tr>
          <td>Lasaña</td>

          <td>Restaurante</td>
          <td>12/09</td>
          <td>Arrepentimiento</td>
          <td>18</td>
        </tr>
        <tr>
          <td>Zapatos</td>
          <td>Zapatería</td>
          <td>13/09</td>

          <td>Mucho arrepentimiento</td>
          <td>65</td>
        </tr>
        <tr>
          <td>Pasta de dientes</td>
          <td>Supermercado</td>
          <td>13/09</td>

          <td>Bien</td>
          <td>5</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
```

{{ EmbedLiveSample('Hidden_example', '100%', 300, "", "", "hide-codepen-jsfiddle") }}

> **Nota:** También puedes encontrarlo en GitHub como [spending-record-finished.html](https://github.com/mdn/learning-area/blob/master/html/tables/advanced/spending-record-finished.html) (o consultarlo también [en vivo](http://mdn.github.io/learning-area/html/tables/advanced/spending-record-finished.html)).

## Anidar tablas

Es posible anidar una tabla dentro de otra, siempre que incluyas la estructura completa, incluido el elemento `<table>`. Por lo general, esto no se recomienda, porque se obtiene un marcado más confuso y menos accesible para los usuarios que usan lectores de pantalla, y además, en muchos casos sería posible sencillamente insertar celdas/filas/columnas adicionales en la tabla. Sin embargo, a veces es necesario, por ejemplo, si deseas importar contenido de forma sencilla desde otras fuentes.

El marcado siguiente muestra una tabla anidada simple:

```html
<table id="tabla1">
  <tr>
    <th>título1</th>
    <th>título2</th>
    <th>título3</th>
  </tr>
  <tr>
    <td id="nested">
      <table id="tabla2">
        <tr>
          <td>celda1</td>
          <td>celda2</td>
          <td>celda3</td>
        </tr>
      </table>
    </td>
    <td>celda2</td>
    <td>celda3</td>
  </tr>
  <tr>
    <td>celda4</td>
    <td>celda5</td>
    <td>celda6</td>
  </tr>
</table>
```

La salida se verá así:

<table id="table1">
  <tbody>
    <tr>
      <th>título1</th>
      <th>título2</th>
      <th>título3</th>
    </tr>
    <tr>
      <td id="nested">
        <table id="table2">
          <tbody>
            <tr>
              <td>celda1</td>
              <td>celda2</td>
              <td>celda3</td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>celda2</td>
      <td>celda3</td>
    </tr>
    <tr>
      <td>celda4</td>
      <td>celda5</td>
      <td>celda6</td>
    </tr>
  </tbody>
</table>

## Tablas para usuarios con discapacidad visual

Repasemos brevemente cómo usamos las tablas de datos. Una tabla puede ser una herramienta útil porque nos proporciona un acceso rápido a unos datos y nos permite buscar entre valores diferentes. Por ejemplo, echa un vistazo a la tabla siguiente para saber cuántos anillos se vendieron en Gante en agosto pasado. Para comprender la información que contiene la tabla, establecemos asociaciones visuales entre los datos de la tabla y sus encabezados de columna y/o fila.

<table>
  <caption>
    Artículos vendidos en agosto de 2016
  </caption>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <th colspan="3" scope="colgroup">Ropa</th>
      <th colspan="2" scope="colgroup">Accesorios</th>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <th scope="col">Pantalones</th>
      <th scope="col">Faldas</th>
      <th scope="col">Vestidos</th>
      <th scope="col">Pulseras</th>
      <th scope="col">Anillos</th>
    </tr>
    <tr>
      <th rowspan="3" scope="rowgroup">Bélgica</th>
      <th scope="row">Amberes</th>
      <td>56</td>
      <td>22</td>
      <td>43</td>
      <td>72</td>
      <td>23</td>
    </tr>
    <tr>
      <th scope="row">Gante</th>
      <td>46</td>
      <td>18</td>
      <td>50</td>
      <td>61</td>
      <td>15</td>
    </tr>
    <tr>
      <th scope="row">Bruselas</th>
      <td>51</td>
      <td>27</td>
      <td>38</td>
      <td>69</td>
      <td>28</td>
    </tr>
    <tr>
      <th rowspan="2" scope="rowgroup">Los países bajos</th>
      <th scope="row">Ámsterdam</th>
      <td>89</td>
      <td>34</td>
      <td>69</td>
      <td>85</td>
      <td>38</td>
    </tr>
    <tr>
      <th scope="row">Utrecht</th>
      <td>80</td>
      <td>12</td>
      <td>43</td>
      <td>36</td>
      <td>19</td>
    </tr>
  </tbody>
</table>

Pero, ¿y si no puedes hacer esas asociaciones visuales? ¿Cómo podrías leer una tabla como la anterior? Las personas con discapacidad visual a menudo usan un lector de pantalla que les lee la información de las páginas web. Esto no resulta un problema cuando lees un texto sin formato, pero interpretar una tabla puede ser un gran desafío para una persona ciega. Sin embargo, con el marcado adecuado podemos reemplazar las asociaciones visuales por otras asociaciones de tipo programático.

> **Nota:** Hay en torno a 253 millones de personas con discapacidad visual según los [datos de la OMS de 2017](https://www.who.int/es/news-room/fact-sheets/detail/blindness-and-visual-impairment).

Esta sección del artículo proporciona técnicas adicionales para conferir a las tablas la mayor accesibilidad posible.

### Usar encabezados de columna y fila

Los lectores de pantalla identificarán todos los encabezados y los usarán para hacer asociaciones programáticas entre esos encabezados y las celdas con las que se relacionan. La combinación de encabezados por columna y fila identificará e interpretará los datos de cada celda para que los usuarios que usan lectores de pantalla puedan interpretar la tabla de manera similar a como lo hace un usuario sin discapacidad visual.

Ya expusimos los encabezados en nuestro artículo anterior; consulta [Añadir encabezados con elementos \<th>](/es/docs/Learn/HTML/Tablas/Conceptos_b%C3%A1sicos_de_las_tablas_HTML#A%C3%B1adir_encabezados_con_elementos_%3Cth%3E).

### El atributo scope

Un nuevo tema para este artículo es el atributo [`scope`](/es/docs/Web/HTML/Element/th#scope), que se puede añadir al elemento `<th>` para indicar a los lectores de pantalla exactamente para qué celdas es el encabezado. Volviendo a nuestro ejemplo anterior de registro de gastos, podrías definir los encabezados de columna inequívocamente como encabezados de columna de este modo:

```html
<thead>
  <tr>
    <th scope="col">Compra</th>
    <th scope="col">Ubicación</th>
    <th scope="col">Fecha</th>
    <th scope="col">Revisión</th>
    <th scope="col">Coste (€)</th>
  </tr>
</thead>
```

Y también cada fila podría tener un encabezado definido de esta manera (si añadimos encabezados de fila y encabezados de columna):

```html
<tr>
  <th scope="row">Corte de pelo</th>

  <td>Peluquería</td>
  <td>12/09</td>

  <td>Gran idea</td>
  <td>30</td>
</tr>
```

Los lectores de pantalla reconocerán el marcado estructurado de esta manera y permitirán a tus usuarios, por ejemplo, leer toda la columna o fila a la vez.

El atributo `scope` tiene dos valores posibles más: `colgroup` y `rowgroup`. Se utilizan para encabezados que se encuentran sobre la parte superior de varias columnas o filas. Si vuelves a echar un vistazo a la tabla «Artículos vendidos en agosto de 2016» al comienzo de esta sección, verás que la celda «Ropa» se encuentra encima de las celdas «Pantalones», «Faldas» y «Vestidos» Todas estas celdas deben estar marcadas como encabezados (`<th>`), pero «Ropa» es un encabezado que está por encima y define los otros tres subencabezados. Por lo tanto, «Ropa» debería incluir un atributo `scope="colgroup"`, mientras que los demás tendrían un atributo `scope="col"`.

### Los atributos de id y encabezados

Una alternativa al uso del atributo `scope` es usar los atributos [`id`](/es/docs/Web/HTML/Global_attributes#id) y [`headers`](/es/docs/Web/HTML/Element/td#headers) para crear asociaciones entre encabezados y celdas. La forma en que se usan es la siguiente:

1. Añades un `id` único a cada elemento `<th>`.
2. Añades un atributo `headers` a cada elemento `<td>`. Cada atributo `headers` debe contener una lista de los `id` de todos los elementos `<th>` que actúan como encabezado de esa celda, separados por espacios.

Esto le da a tu tabla HTML una definición explícita de la posición de cada celda en la tabla definida por los encabezados de cada columna y fila de la que forma parte, como en una hoja de cálculo. Para que funcione bien, la tabla necesita tanto encabezados de columna como encabezados de fila.

Volviendo a nuestro ejemplo de gastos, los dos fragmentos anteriores podrían reescribirse así:

```html
<thead>
  <tr>
    <th id="purchase">Compra</th>
    <th id="location">Ubicación</th>
    <th id="date">Fecha</th>
    <th id="evaluation">Revisión</th>
    <th id="cost">Coste (€)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th id="haircut">Corte de pelo</th>
    <td headers="location haircut">Peluquería</td>
    <td headers="date haircut">12/09</td>
    <td headers="evaluation haircut">Gran idea</td>
    <td headers="cost haircut">30</td>
  </tr>

  ...
</tbody>
```

> **Nota:** Este método crea asociaciones muy precisas entre los encabezados y las celdas de datos, pero utiliza **un montón** más de código de marcado y no permite errores. El enfoque `scope` suele bastar para la mayoría de las tablas.

### Aprendizaje activo: jugar con scope y headers

1. Para este ejercicio final, te proponemos que primero hagas copias locales de [items-sold.html](https://github.com/mdn/learning-area/blob/master/html/tables/advanced/items-sold.html) y [minimal-table.css](https://github.com/mdn/learning-area/blob/master/html/tables/advanced/minimal-table.css) en un directorio nuevo.
2. Ahora intenta añadir los atributos `scope` adecuados para hacer que esta tabla sea más accesible.
3. Por último, haz otra copia de los archivos originales, y esta vez añade accesibilidad a la tabla utilizando los atributos `id` y `headers`.

> **Nota:** Puedes verificar tu trabajo con nuestros ejemplos terminados: consulta [items-sold-scope.html](https://github.com/mdn/learning-area/blob/master/html/tables/advanced/items-sold-scope.html) ([consúltalo en vivo](http://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html)) y [items-sold-headers.html](https://github.com/mdn/learning-area/blob/master/html/tables/advanced/items-sold-headers.html) ([consúltalo en vivo](http://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html)).

## Resumen

Podrías aprender algo más sobre las tablas en HTML, pero en realidad te hemos proporcionado toda la información que necesitas saber en este momento. En este punto, es posible que desees ir y aprender sobre la aplicación de estilo a tablas HTML: consulta [Aplicar estilo a las tablas](/es/docs/Learn/CSS/Building_blocks/Styling_tables).

{{PreviousMenuNext("Learn/HTML/Tables/Basics", "Learn/HTML/Tables/Structuring_planet_data", "Learn/HTML/Tables")}}
