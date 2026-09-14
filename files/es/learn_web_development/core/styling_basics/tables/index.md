---
title: Estilizando tablas
slug: Learn_web_development/Core/Styling_basics/Tables
l10n:
  sourceCommit: 56ccb15b023cb11234cd044a68d6d3a93e752326
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics/Home_color_scheme_search", "Learn_web_development/Core/Styling_basics")}}

Aplicar estilos a una tabla HTML no es el trabajo más glamuroso del mundo, pero a veces hay que hacerlo. Este artículo explica cómo hacer que las tablas HTML se vean bien, destacando algunas técnicas específicas de estilo para tablas.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        <a href="/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Sintaxis HTML básica</a
        > y <a href="/es/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics"
          >tablas HTML</a
        >, <a href="/es/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Valores y unidades</a> y <a href="/es/docs/Learn_web_development/Core/Styling_basics/Sizing">Tamaño</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados del aprendizaje:</th>
      <td>
        <ul>
          <li>Manejar el espaciado en tablas, incluyendo el colapso de bordes.</li>
          <li>Destacar claramente las distintas regiones de una tabla, incluyendo encabezados, título, cabecera, cuerpo y pie.</li>
          <li>Cómo implementar las rayas de cebra, y por qué son útiles.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Una tabla HTML típica

Comencemos por ver una tabla HTML típica. Bueno, digo típica porque la mayoría de los ejemplos de tablas HTML tratan sobre zapatos, el clima o empleados; decidimos hacer las cosas más interesantes creando una tabla sobre bandas de punk famosas del Reino Unido. El marcado es el siguiente:

```html live-sample___unstyled live-sample___punk-style live-sample___best-practice-style
<table>
  <caption>
    A summary of the UK's most famous punk bands
  </caption>
  <thead>
    <tr>
      <th scope="col">Band</th>
      <th scope="col">Year formed</th>
      <th scope="col">No. of Albums</th>
      <th scope="col">Most famous song</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Buzzcocks</th>
      <td>1976</td>
      <td>9</td>
      <td>Ever fallen in love (with someone you shouldn't've)</td>
    </tr>
    <tr>
      <th scope="row">The Clash</th>
      <td>1976</td>
      <td>6</td>
      <td>London Calling</td>
    </tr>
    <tr>
      <th scope="row">The Damned</th>
      <td>1976</td>
      <td>10</td>
      <td>Smash it up</td>
    </tr>
    <tr>
      <th scope="row">Sex Pistols</th>
      <td>1975</td>
      <td>1</td>
      <td>Anarchy in the UK</td>
    </tr>
    <tr>
      <th scope="row">Sham 69</th>
      <td>1976</td>
      <td>13</td>
      <td>If The Kids Are United</td>
    </tr>
    <tr>
      <th scope="row">Siouxsie and the Banshees</th>
      <td>1976</td>
      <td>11</td>
      <td>Hong Kong Garden</td>
    </tr>
    <tr>
      <th scope="row">Stiff Little Fingers</th>
      <td>1977</td>
      <td>10</td>
      <td>Suspect Device</td>
    </tr>
    <tr>
      <th scope="row">The Stranglers</th>
      <td>1974</td>
      <td>17</td>
      <td>No More Heroes</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2">Total albums</th>
      <td colspan="2">77</td>
    </tr>
  </tfoot>
</table>
```

La tabla está bien marcada, es fácil de estilizar y accesible, gracias a características como [`scope`](/es/docs/Web/HTML/Reference/Elements/th#scope), {{htmlelement("caption")}}, {{htmlelement("thead")}}, {{htmlelement("tbody")}}, etc. Por desgracia, no se ve muy bien. Con solo el estilo predeterminado del navegador se ve apretada, difícil de leer y un poco aburrida:

{{embedlivesample("unstyled", "", "200")}}

Necesitamos usar algo de CSS para arreglar esto. Puedes aplicar estilos a una tabla de la forma que quieras usando CSS. Por ejemplo, creamos este diseño de aspecto bastante "punk":

```css hidden live-sample___punk-style
/* font import */
@import "https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap";

/* spacing */
table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid purple;
}

thead th {
  line-height: 1.5;
}

thead th:nth-child(1) {
  width: 30%;
}

thead th:nth-child(2) {
  width: 20%;
}

thead th:nth-child(3) {
  width: 15%;
}

thead th:nth-child(4) {
  width: 35%;
}

th,
td {
  padding: 20px;
}

/* typography */
html {
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}

thead th,
tfoot th {
  font-family: "Rock Salt", cursive;
}

th {
  letter-spacing: 2px;
}

td {
  letter-spacing: 1px;
}

tbody td {
  text-align: center;
}

tfoot th {
  text-align: right;
}

/* graphics */
thead,
tfoot {
  background: url("https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/leopardskin.jpg");
  color: white;
}

thead th,
tfoot th,
tfoot td {
  background: linear-gradient(to bottom, rgb(0 0 0 / 0.1), rgb(0 0 0 / 0.5));
  border: 3px solid purple;
  text-shadow: 1px 1px 1px black;
}

tbody tr:nth-child(odd) {
  background-color: #ff33cc;
}

tbody tr:nth-child(even) {
  background-color: #e495e4;
}

tbody tr {
  background-image: url("https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/noise.png");
}

table {
  background-color: #ff33cc;
}

/* caption */
caption {
  font-family: "Rock Salt", cursive;
  padding: 20px;
  font-style: italic;
  caption-side: bottom;
  color: #666666;
  text-align: right;
  letter-spacing: 1px;
}
```

{{embedlivesample("punk-style", "", "500")}}

Sin embargo, este diseño es bastante chillón. En este artículo, te guiaremos para marcarla siguiendo algunas buenas prácticas de diseño de tablas, tal como se describe en [Web Typography: designing tables to be read not looked at](https://alistapart.com/article/web-typography-tables/).

## Cómo empezar a aplicar estilos a nuestra tabla

Vamos a recorrer juntos el proceso de aplicar estilos a nuestro ejemplo de tabla.

1. Para empezar, haz una copia local del marcado de ejemplo [mostrado anteriormente](#una_tabla_html_típica) y guárdalo en un directorio de trabajo en algún lugar de tu computadora.
2. A continuación, crea un archivo nuevo llamado `style.css` y guárdalo en el mismo directorio que tus otros archivos.
3. Enlaza el CSS al HTML colocando la siguiente línea de HTML dentro de tu {{htmlelement("head")}}:

   ```html
   <link href="style.css" rel="stylesheet" />
   ```

Carga tu HTML en un navegador para ver cómo se ve de forma predeterminada.

## Actualizar la fuente

Este es un punto menor, y no estrictamente relevante para el estilo de tablas, pero pensamos que la fuente predeterminada se veía un poco demasiado formal para una tabla sobre bandas punk. Comienza tu CSS agregando la siguiente regla:

```css
html {
  font-family: "Helvetica", "Arial", sans-serif;
}
```

## Espaciado

Lo primero que tenemos que hacer con nuestra tabla es solucionar el espaciado — ¡el estilo predeterminado de las tablas es tan apretado! Para hacerlo, agrega el siguiente CSS al final de tu archivo `style.css`:

```css
table {
  table-layout: fixed;
  width: 90%;
  margin: 10px auto;
  border-collapse: collapse;
}

th,
td {
  padding: 0.6em;
}
```

Las partes más importantes a tener en cuenta son las siguientes:

- Generalmente es buena idea establecer un valor {{cssxref("table-layout")}} de `fixed` en tu tabla, ya que hace que la tabla se comporte de forma un poco más predecible por defecto. Normalmente, las columnas de una tabla tienden a dimensionarse según la cantidad de contenido que contienen, lo que produce resultados extraños. Con `table-layout: fixed`, puedes dimensionar tus columnas según el ancho de sus encabezados, y luego gestionar su contenido según corresponda. Chris Coyier trata esta técnica con más detalle en [Fixed Table Layouts](https://css-tricks.com/fixing-tables-long-strings/).

- Hemos combinado el diseño fijo con un {{cssxref("width")}} del `90%` y un {{cssxref("margin")}} de `10px auto`. Estas configuraciones hacen que la tabla llene la mayor parte del viewport y quede centrada horizontalmente.

- Un valor {{cssxref("border-collapse")}} de `collapse` es una buena práctica estándar para cualquier tarea de estilizado de tablas. Por defecto, cuando estableces bordes en los elementos de una tabla, todos tendrán espacio entre ellos, como muestra la siguiente imagen: ![una tabla de 2 por 2 con espaciado predeterminado entre los bordes, mostrando que no hay colapso de bordes](no-border-collapse.png) Esto no se ve muy bien (aunque podría ser el aspecto que quieres, ¡quién sabe!). Con `border-collapse: collapse;` establecido, los bordes colapsan en uno solo, lo que se ve mucho mejor: ![una tabla de 2 por 2 con la propiedad border-collapse establecida en collapse, mostrando que los bordes colapsan en uno solo](border-collapse.png)
- Hemos establecido algo de {{cssxref("padding")}} en los elementos {{htmlelement("th")}} y {{htmlelement("td")}} — esto le da a los elementos de datos algo de espacio para respirar, haciendo que la tabla se vea mucho más legible.

Guarda tu código y actualiza tu navegador para ver los resultados.

## Alineación

A continuación, nos ocuparemos de la alineación de los diferentes tipos de datos dentro de sus celdas. Las buenas prácticas indican que debes alinear el texto a la izquierda y los números a la derecha; el siguiente CSS logrará eso, así que agrégalo ahora al final de tu archivo CSS.

```css
tr :nth-child(2),
tr :nth-child(3) {
  text-align: right;
  width: 15%;
}

tr :nth-child(1),
tr :nth-child(4) {
  text-align: left;
  width: 35%;
}

tfoot tr :nth-child(1) {
  text-align: right;
}

tfoot tr :nth-child(2) {
  text-align: left;
}
```

Aquí hemos usado la pseudoclase {{cssxref(":nth-child")}}; un selector útil que te permite seleccionar un hijo numerado específico de un elemento, o una secuencia específica. Aquí la usamos para seleccionar elementos `<td>` específicos dentro de los elementos <th>.

Fíjate en que también hemos establecido anchos específicos en las filas de la tabla, con las filas que contienen texto configuradas mucho más anchas que las que contienen números. Esta es una buena idea — las filas que contienen más contenido necesitan más espacio para tener la mayor posibilidad de que su contenido quede en una sola línea. Las filas que contienen menos contenido no necesitan tanto espacio para mostrar sus datos, y de hecho, si les das mucho espacio, los datos se pierden un poco en el espacio y por lo tanto son más difíciles de leer.

También deberíamos asegurarnos de que nuestros elementos de datos estén alineados en la parte superior de sus celdas, en lugar de en el medio. Para lograr esto, podemos usar la propiedad {{cssxref("vertical-align")}}. Actualiza tu regla `th, td` existente a la siguiente:

```css
th,
td {
  vertical-align: top;
  padding: 0.3em;
}
```

De nuevo, guarda y actualiza para ver el efecto de tus últimas actualizaciones de CSS.

## Agregar bordes

La tabla ya se ve mucho mejor, pero deberíamos agregar algunos bordes para proporcionar separación visual entre el `<caption>` de la tabla, los datos y la fila de totales en la parte inferior. Para hacerlo, agrega las siguientes reglas a tu CSS:

```css
tfoot {
  border-top: 1px solid #999999;
}
```

A continuación, actualiza tu regla `table` existente a la siguiente:

```css
table {
  table-layout: fixed;
  width: 90%;
  margin: 10px auto;
  border-collapse: collapse;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #999999;
}
```

Guarda y actualiza; ¡tu tabla debería estar empezando a verse bastante legible ahora!

## Rayas de cebra

Queríamos dedicar una sección aparte para mostrarte cómo implementar **rayas de cebra** — filas de color alternadas que hacen que las distintas filas de datos de tu tabla sean más fáciles de interpretar y leer. Agrega el siguiente CSS al final de tu archivo `style.css`:

```css
tbody tr:nth-child(odd) {
  background-color: #eeeeee;
}
```

Anteriormente viste el selector {{cssxref(":nth-child")}} usado para seleccionar elementos hijo específicos. También se le puede dar una fórmula como parámetro, de modo que seleccione una secuencia de elementos. La fórmula `2n+1` seleccionaría todos los hijos con número impar (1, 3, 5, etc.) y la fórmula `2n` seleccionaría todos los hijos con número par (2, 4, 6, etc.) Hemos usado la palabra clave `odd` en nuestro código, que es un atajo para la fórmula `2n+1` (`even` es el atajo para `2n`).

De nuevo, no olvides guardar y actualizar para ver el resultado.

## Aplicar estilos al título

Queda una última cosa por hacer con nuestra tabla — aplicar estilos al título. Para hacerlo, agrega lo siguiente al final de tu archivo `style.css`:

```css
caption {
  padding: 1em;
  font-style: italic;
  caption-side: bottom;
  letter-spacing: 1px;
}
```

No hay nada destacable aquí, excepto por la propiedad {{cssxref("caption-side")}}, a la que se le ha dado un valor de `bottom`. Esto hace que el título se posicione en la parte inferior de la tabla.

## Tabla terminada

El diseño final de tu tabla debería verse así:

```css hidden live-sample___best-practice-style
html {
  font-family: "Helvetica", "Arial", sans-serif;
}

table {
  table-layout: fixed;
  width: 90%;
  margin: 10px auto;
  border-collapse: collapse;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #999999;
}

th,
td {
  vertical-align: top;
  padding: 0.6em;
}

tr :nth-child(2),
tr :nth-child(3) {
  text-align: right;
  width: 15%;
}

tr :nth-child(1),
tr :nth-child(4) {
  text-align: left;
  width: 35%;
}

tfoot tr :nth-child(1) {
  text-align: right;
}

tfoot tr :nth-child(2) {
  text-align: left;
}

tfoot {
  border-top: 1px solid #999999;
}

tbody tr:nth-child(odd) {
  background-color: #eeeeee;
}

caption {
  padding: 1em;
  font-style: italic;
  caption-side: bottom;
  letter-spacing: 1px;
}
```

{{embedlivesample("best-practice-style", "", "520")}}

## Consejos rápidos para el estilo de tablas

Antes de continuar, pensamos en proporcionarte una lista rápida de los puntos más útiles ilustrados anteriormente:

- Haz que el marcado de tu tabla sea lo más simple posible, y mantén las cosas flexibles.
- Usa {{cssxref("table-layout", "table-layout: fixed")}} para crear un diseño de tabla más predecible que te permita establecer fácilmente los anchos de columna estableciendo {{cssxref("width")}} en sus encabezados ({{htmlelement("th")}}).
- Usa {{cssxref("border-collapse", "border-collapse: collapse")}} para hacer que los bordes de los elementos de la tabla colapsen entre sí, produciendo un aspecto más prolijo y fácil de controlar.
- Usa {{htmlelement("thead")}}, {{htmlelement("tbody")}} y {{htmlelement("tfoot")}} para dividir tu tabla en fragmentos lógicos y proporcionar lugares adicionales donde aplicar CSS, de modo que sea más fácil superponer estilos entre sí si es necesario.
- Usa rayas de cebra para que las filas alternas sean más fáciles de leer.
- Usa {{cssxref("text-align")}} para alinear el texto de tus elementos {{htmlelement("th")}} y {{htmlelement("td")}}, para que las cosas se vean más prolijas y sean más fáciles de seguir.

## Resumen

Con el estilo de tablas ya detrás de nosotros, necesitamos algo más para ocupar nuestro tiempo. El siguiente artículo explora la depuración de CSS — cómo resolver problemas como diseños que no se ven como deberían, o propiedades que no se aplican cuando crees que deberían hacerlo. Esto incluye información sobre el uso de las herramientas de desarrollo del navegador para encontrar soluciones a tus problemas.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics/Home_color_scheme_search", "Learn_web_development/Core/Styling_basics")}}
