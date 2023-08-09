---
title: Estilizando tablas
slug: Learn/CSS/Building_blocks/Styling_tables
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks")}}

Aplicar estilos a una tabla HTML no es el trabajo más interesante del mundo, pero a veces hay que hacerlo. Este artículo proporciona una guía para hacer que las tablas HTML presenten un aspecto agradable, para ello usaremos algunas de las características específicas para tablas que hemos destacado en artículos anteriores.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conocimientos básicos de HTML (véase
        <a href="/es/docs/Learn/HTML/Introduction_to_HTML"
          >Introducción a HTML</a
        >) y <a href="/es/docs/Learn/HTML/Tables">tablas HTML</a>, y nociones de
        cómo funciona el CSS (véase
        <a href="/es/docs/Learn/CSS/First_steps">Introducción al CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Aprender a aplicar estilo a tablas HTML de una forma efectiva.</td>
    </tr>
  </tbody>
</table>

## Una tabla HTML típica

Comencemos por echar un vistazo a una tabla HTML típica. Bueno, decimos típica porque la mayoría de los ejemplos de tablas HTML son sobre zapatos, el tiempo o empleados; y hemos decidido hacer las cosas más interesantes creando una tabla sobre grupos de música punk famosos del Reino Unido. El código es el siguiente:

```html
<table summary="Los grupos de música punk más famosos del Reino Unido">
  <caption>
    Un resumen de los grupos de música punk más famosos del Reino Unido
  </caption>
  <thead>
    <tr>
      <th scope="col">Grupo</th>
      <th scope="col">Año de formación</th>
      <th scope="col">Número de álbumes</th>
      <th scope="col">Canción más conocida</th>
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

    ... se han eliminado algunas filas por abreviar

    <tr>
      <th scope="row">The Stranglers</th>
      <td>1974</td>
      <td>17</td>
      <td>No More Heroes</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2">Número total de álbumes</th>
      <td colspan="2">77</td>
    </tr>
  </tfoot>
</table>
```

La tabla está bien creada, puede aplicársele estilo fácilmente y presenta características de accesibilidad gracias a propiedades como [`scope`](/es/docs/Web/HTML/Element/th#scope), {{htmlelement("caption")}}, [`summary`](/es/docs/Web/HTML/Element/table#summary), {{htmlelement("thead")}}, {{htmlelement("tbody")}}, etc. Por desgracia, no presenta un aspecto agradable cuando se muestra en pantalla (puedes ver el ejemplo en [punk-bands-unstyled.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-unstyled.html)):

![](table-unstyled.png)

Tal y como está, es aburrida y difícil de leer. Necesitamos usar algo de CSS para arreglar esto.

## Aprendizaje activo: Aplicar estilo a nuestra tabla

En esta sección de aprendizaje activo vamos a aplica estilo a nuestra tabla juntos.

1. Para comenzar, crea una copia local del [código de ejemplo](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/styling-tables/punk-bands-unstyled.html), descarga las dos imágenes ([noise](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/styling-tables/noise.png) y [leopardskin](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/styling-tables/leopardskin.jpg)), y pon los tres archivos en alguna carpeta de tu ordenador.
2. Ahora crea un archivo nuevo llamado `style.css` y guárdalo con el resto de archivos, en la misma carpeta.
3. Enlaza el CSS al HTML copiando la línea siguiente en {{htmlelement("head")}}:

   ```html
   <link href="style.css" rel="stylesheet" type="text/css" />
   ```

### Espaciado y distribución

Lo primero que hay que hacer es solucionar los aspectos de espaciado/distribución; ¡el estilo por defecto de la tabla es tan apretado! Para ello, añadimos el CSS siguiente al archivo `style.css`:

```css
/* spacing */

table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid purple;
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
```

Las partes más importantes que destacamos son:

- En general es una buena idea establecer un valor {{cssxref("table-layout")}} en `fixed` para la tabla porque le proporciona un comportamiento predeterminado predecible. Normalmente se tiende a dar un tamaño de columna según la cantidad de contenido que haya en estas, lo que suele producir resultados extraños. Con `table-layout: fixed`, puedes dar a las columnas un tamaño de acuerdo con el ancho de sus celdas de encabezado y a continuación gestionar los contenidos de la forma que te parezca más adecuada. Por esto hemos seleccionado los cuatro encabezados con el selector `thead th:nth-child(n)` ({{cssxref(":nth-child")}}) (Seleccionar el descendiente enésimo que es un elemento {{htmlelement("th")}} en una secuencia dentro del elemento {{htmlelement("thead")}}) y, dados estos, asignar los porcentajes de anchura. Chris Coyier expone esta técnica con más detalle en [Fixed Table Layouts](https://css-tricks.com/fixing-tables-long-strings/).<br><br>

  Hemos emparejado esto con un {{cssxref("width")}} del 100%, que significa que la tabla llenará cualquier contenedor en la que se ubique, y presentará unas buenas características adaptativas (aunque podría requerir algo más de trabajo para que se vea bien en pantallas de anchuras estrechas).

- Un valor {{cssxref("border-collapse")}} de `collapse` es una buena práctica estándar para cualquier tarea de aplicación de estilo a tablas. Por defecto, cuando estableces los bordes de los elementos de la tabla, quedará un espacio entre ellos, como se muestra en la imagen siguiente. ![](no-border-collapse.png) Esto no presenta un aspecto agradable (aunque puede ser el aspecto que buscas, ¡quién sabe!). Si estableces `border-collapse: collapse;`, los bordes se reducen a uno, y así presenta un aspecto mucho más agradable: ![](border-collapse.png)
- Hemos puesto un borde ({{cssxref("border")}}) alrededor de la tabla, que es necesario, porque vamos a poner bordes en la cabecera de la tabla y después en el pie; queda raro e inconexo si no pones ningún borde a la tabla que la delimite del resto de los elementos del exterior y quedan huecos.
- Hemos puesto área de relleno ({{cssxref("padding")}}) en los elementos {{htmlelement("th")}} y {{htmlelement("td")}}; esto da a los datos espacio para que respiren y mejora la legibilidad de la tabla.

En este punto, nuestra tabla ya presenta un aspecto mucho más agradable:

![](table-with-spacing.png)

### Un poco de tipografía

Ahora arreglaremos un poco nuestro texto.

En primer lugar, hemos ido a [Google Fonts](https://www.google.com/fonts) y hemos encontrado un tipo de letra adecuado para una tabla sobre bandas punk. Puedes buscar uno diferente si lo deseas; solo tienes que reemplazar el elemento {{htmlelement ("link")}} que te hemos proporcionado y la declaración {{cssxref ("font-family")}} personalizada por las que te proporcione Google Fonts.

Primero, añade el elemento {{htmlelement ("link")}} siguiente a tu encabezado HTML, justo encima del elemento `<link>`:

```html
<link
  href="https://fonts.googleapis.com/css?family=Rock+Salt"
  rel="stylesheet"
  type="text/css" />
```

Ahora añade el CSS siguiente a tu archivo `style.css`, debajo de la línea añadida anterior:

```css
/* typography */

html {
  font-family: "helvetica neue", helvetica, arial, sans-serif;
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
```

En realidad aquí no hay nada que sea específico para las tablas. En general, modificamos el estilo de la letra para facilitar la lectura:

- Hemos establecido una lista global de fuentes Sans Serif. Esto es puramente una elección de estilo. También hemos configurado nuestro tipo de letra personalizada en los encabezados que hay dentro de los elementos {{htmlelement ("thead")}} y {{htmlelement ("tfoot")}} para dotarlos de una encantadora sucia estética punk.
- Hemos establecido algunos {{cssxref("letter-spacing")}} en los encabezados y las celdas, porque creemos que ayuda a la legibilidad. De nuevo es, sobre todo, una elección estilística.
- Hemos establecido en el elemento {{htmlelement("tbody")}} el centrado del texto en las celdas de la tabla para que se queden alineadas con los encabezados. Por defecto, en {{cssxref("text-align")}} se asigna un valor `left` para las celdas, y un valor `center` para los encabezados, pero a menudo queda mejor disponer las alineaciones de texto establecidas de la misma manera en ambos. El peso predeterminado para la negrita en los tipos de letra de los encabezados basta para diferenciar su aspecto.
- Hemos establecido el texto del encabezado alineado a la derecha en el elemento {{htmlelement ("tfoot")}} para que visualmente quede mejor asociado con sus datos.

El resultado se ve un poco más limpio:

![](table-with-typography.png)

### Gráficos y colores

Ahora, ¡a por los gráficos y los colores! Puesto que la tabla rezuma contenido y actitud punk, vamos a darle un brillante estilo imponente que le pegue. No te preocupes, no tienes que hacer tus tablas tan extremadas: puedes optar por algo más sutil y de buen gusto.

Empieza añadiendo el CSS siguiente a tu archivo `style.css`, de nuevo al final:

```css
thead,
tfoot {
  background: url(leopardskin.jpg);
  color: white;
  text-shadow: 1px 1px 1px black;
}

thead th,
tfoot th,
tfoot td {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.5)
  );
  border: 3px solid purple;
}
```

Una vez más, aquí no hay nada específico para las tablas, pero vale la pena señalar algunas cosas.

Hemos añadido una imagen de fondo ({{cssxref("background-image")}}) a los elementos {{htmlelement("thead")}} y {{htmlelement("tfoot")}}, y hemos cambiado el ({{cssxref("color")}}) de todo el texto del encabezado y el pie de página por el blanco (y le hemos dado una sombra, {{cssxref("text-shadow")}}) para que sea legible. Siempre debes asegurarte de que tu texto contraste bien con el fondo, para que sea legible.

También hemos añadido un degradado lineal a los elementos {{htmlelement("th")}} y {{htmlelement("td")}} del encabezado y el pie de página para obtener un poco de textura, y también hemos dado a esos elementos un borde púrpura brillante. Es útil tener múltiples elementos anidados disponibles para que puedas superponer estilos. Sí, podríamos haber colocado tanto la imagen de fondo como el gradiente lineal en los elementos {{htmlelement ("thead")}} y {{htmlelement ("tfoot")}} utilizando múltiples imágenes de fondo, pero decidimos hacerlo por separado por los navegadores más antiguos que no admiten múltiples imágenes de fondo o gradientes lineales.

#### Rayas de cebra

Queremos dedicar una sección independiente a mostrarte cómo implementar **rayas de cebra**, alternando filas de color que facilitan el análisis y la legibilidad de las diversas filas de datos de la tabla. Añade el CSS siguiente al final de tu archivo `style.css`:

```css
tbody tr:nth-child(odd) {
  background-color: #ff33cc;
}

tbody tr:nth-child(even) {
  background-color: #e495e4;
}

tbody tr {
  background-image: url(noise.png);
}

table {
  background-color: #ff33cc;
}
```

- Ya has visto el selector {{cssxref(":nth-child")}}, que se usa para seleccionar elementos hijo específicos. También se le puede dar una fórmula como parámetro, de modo que seleccione una secuencia de elementos. La fórmula `2n-1` seleccionaría todos los elementos hijo impares (1, 3, 5, etc.), y la fórmula `2n`, todos los elementos hijo pares (2, 4, 6, etc.) Nosotros hemos utilizado las palabras clave `odd` y `even` en nuestro código, que hacen exactamente lo mismo que las fórmulas mencionadas. En este caso, damos a las filas pares y a las impares (espeluznantes) colores diferentes.
- También hemos añadido un mosaico de fondo repetitivo a todas las filas del cuerpo de la tabla, que es solo un poco de ruido (un `.png` semitransparente con un poco de distorsión visual) para proporcionar algo de textura.
- Por último, le hemos dado a toda la tabla un color de fondo sólido para que los navegadores que no admiten el selector `:nth-child` todavía dispongan de un fondo para las filas del cuerpo de la tabla.

Esta explosión de colores da como resultado el aspecto siguiente:

![](table-with-color.png)

Esto puede quedar un poco exagerado y no ser de tu agrado, pero el punto que tratamos de explicar es que las tablas no tienen por qué ser aburridas ni académicas.

### Aplicar estilo al título

Hay una última cosa que hacer con nuestra tabla: aplicar estilo al título. Para ello, añade al final de tu archivo `style.css` lo siguiente:

```css
caption {
  font-family: "Rock Salt", cursive;
  padding: 20px;
  font-style: italic;
  caption-side: bottom;
  color: #666;
  text-align: right;
  letter-spacing: 1px;
}
```

Aquí no hay nada notable, excepto la propiedad {{cssxref ("caption-side")}}, a la que se le ha dado un valor `bottom`. Esto coloca el título en la parte inferior de la tabla, lo que junto con el resto de declaraciones nos proporciona este aspecto final (puedes verlo vivo en [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html)):

![](table-with-caption.png)

## Aprendizaje activo: Aplica estilo a tu tabla

En este punto, nos gustaría que tomes nuestro ejemplo de tabla HTML (¡o que uses uno propio!) y que le apliques estilo para obtener algo considerablemente mejor diseñado y menos llamativo que nuestra tabla.

## Consejos rápidos para el diseño de tablas

Antes de seguir adelante, creemos que tendríamos que proporcionar una lista rápida de los puntos más útiles que acabamos de ilustrar:

- Haz el marcado de la tabla lo más simple posible y mantén las cosas flexibles. Por ejemplo, con el uso de porcentajes, para que el diseño sea más adaptativo.
- Usa {{cssxref("table-layout")}}`: fixed` para crear un diseño de tabla más predecible que te permita establecer con facilidad los anchos de columna configurando {{cssxref("width")}} en sus encabezados ({{htmlelement("th")}}).
- Usa {{cssxref ("border-collapse")}}`: collapse` para que los bordes de los elementos de la tabla colapsen entre sí y proporcionen una apariencia más ordenada y más fácil de controlar.
- Usa {{htmlelement ("thead")}}, {{htmlelement ("tbody")}} y {{htmlelement ("tfoot")}} para dividir la tabla en fragmentos lógicos y proporcionar lugares adicionales para aplicarle CSS, para superponer estilos entre sí con más facilidad, si es necesario.
- Usa rayas de cebra en filas alternativas para facilitar la legibilidad.
- Usa {{cssxref ("text-align")}} para alinear el texto en tus elementos {{htmlelement ("th")}} y {{htmlelement ("td")}}, para ordenar los elementos y facilitar su legibilidad.

## Resumen

Después de aplicar estilo a las tablas, necesitamos algo más en que ocupar nuestro tiempo. El artículo siguiente expone la depuración de documentos CSS, es decir, cómo resolver problemas como diseños de página que no presentan el aspecto que deberían, o propiedades que no se aplican cuando crees que deberían aplicarse. Esto incluye información sobre el uso de las herramientas DevTools del navegador para hallar soluciones a tus problemas.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks")}}
