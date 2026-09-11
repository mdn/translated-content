---
title: Accesibilidad de las tablas HTML
short-title: Accesibilidad de tablas
slug: Learn_web_development/Core/Structuring_content/Table_accessibility
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}

En el artículo anterior vimos una de las funcionalidades más importantes para hacer accesibles las tablas HTML a las personas con discapacidad visual: el elemento {{htmlelement("th")}}. En este artículo seguimos por ese camino y vemos más funcionalidades de accesibilidad de las tablas HTML, como los subtítulos y resúmenes, agrupar las filas en secciones de cabecera, cuerpo y pie, y delimitar el ámbito de columnas y filas.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Los fundamentos de HTML (consulta
        <a href="/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Primeros pasos con HTML</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados del aprendizaje:</th>
      <td>
        <ul>
          <li>Entender los problemas de accesibilidad asociados a las tablas.</li>
          <li>Añadir subtítulos a las tablas.</li>
          <li>Estructurar mejor las tablas con cabecera, cuerpo y pie.</li>
          <li>Crear asociaciones adicionales entre encabezados y celdas con los atributos <code>scope</code>, <code>id</code> y <code>headers</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Repaso: las tablas para personas con discapacidad visual

Repasemos brevemente cómo usamos las tablas de datos. Una tabla puede ser una herramienta muy práctica para acceder rápido a los datos y consultar valores distintos. Por ejemplo, basta un vistazo a la tabla siguiente para averiguar cuántos anillos se vendieron en Gante durante agosto de 2016. Para entender su información hacemos asociaciones visuales entre los datos de la tabla y los encabezados de su columna o de su fila.

<table>
  <caption>Artículos vendidos en agosto de 2016</caption>
  <thead>
    <tr>
      <td colspan="2" rowspan="2"></td>
      <th colspan="3" scope="colgroup">Ropa</th>
      <th colspan="2" scope="colgroup">Accesorios</th>
    </tr>
    <tr>
      <th scope="col">Pantalones</th>
      <th scope="col">Faldas</th>
      <th scope="col">Vestidos</th>
      <th scope="col">Pulseras</th>
      <th scope="col">Anillos</th>
    </tr>
  </thead>
  <tbody>
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
      <th rowspan="2" scope="rowgroup">Países Bajos</th>
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

Pero ¿y si no puedes hacer esas asociaciones visuales? ¿Cómo se lee entonces una tabla como la anterior? Las personas con discapacidad visual suelen usar un [lector de pantalla](/es/docs/Glossary/Screen_reader) que les lee en voz alta la información de las páginas web. Eso no supone ningún problema con el texto corriente, pero interpretar una tabla puede ser todo un reto para una persona ciega. Aun así, con el marcado adecuado podemos sustituir las asociaciones visuales por asociaciones programáticas.

> [!NOTE]
> Según los [datos de la OMS de 2017](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment), unos 253 millones de personas viven con alguna discapacidad visual.

### Usar encabezados de columna y de fila

Los lectores de pantalla identifican todos los encabezados y los usan para crear asociaciones programáticas entre ellos y las celdas con las que se relacionan. La combinación de encabezados de columna y de fila identifica e interpreta los datos de cada celda, de modo que quien usa un lector de pantalla pueda interpretar la tabla de forma parecida a como lo hace quien la ve.

Ya tratamos los encabezados en el artículo anterior; consulta [Añadir encabezados con elementos \<th>](/es/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#añadir_encabezados_con_elementos_th).

## Añadir un subtítulo a tu tabla con \<caption>

Puedes darle un subtítulo a tu tabla metiéndolo en un elemento {{htmlelement("caption")}} y anidándolo dentro del elemento {{htmlelement("table")}}. Debes ponerlo justo debajo de la etiqueta de apertura `<table>`.

```html
<table>
  <caption>
    Dinosaurios del período jurásico
  </caption>
  <!-- … -->
</table>
```

Como puedes deducir del breve ejemplo anterior, el subtítulo está pensado para contener una descripción del contenido de la tabla. Resulta útil para cualquiera que quiera hacerse una idea rápida de si la tabla le sirve mientras hojea la página, pero sobre todo para las personas ciegas. En vez de tener que escuchar el contenido de muchas celdas sólo para averiguar de qué trata la tabla, se puede apoyar en el subtítulo y decidir entonces si la lee con más detalle.

El subtítulo se coloca justo debajo de la etiqueta `<table>`.

> [!NOTE]
> El atributo [`summary`](/es/docs/Web/HTML/Reference/Elements/table#summary) también se puede usar en el elemento `<table>` para proporcionar una descripción, y los lectores de pantalla también lo leen. Aun así, recomendamos usar el elemento `<caption>`, porque `summary` está obsoleto y quien ve la página no puede leerlo (no aparece en ella).

### Practicar con el subtítulo de una tabla

Llegados aquí vamos a pedirte que pruebes a añadir un subtítulo a una tabla HTML, usando el horario escolar que viste en el artículo anterior.

1. Copia el primer bloque HTML de [Agrupar columnas con `<colgroup>` y `<col>`](/es/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#agrupar_columnas_con_colgroup_y_col) en un archivo HTML de tu equipo, o en un editor en línea como [CodePen](https://codepen.io/) o [JSBin](https://jsbin.com/).
2. Añade un subtítulo adecuado a la tabla.
3. Guarda tu código y mira cómo queda.

<details>
<summary>Haz clic aquí para ver la solución</summary>

Tu HTML terminado debería verse más o menos así:

```html
<table>
  <caption>
    Horario semanal de clases de idiomas de St. Winnifred
  </caption>
  <colgroup>
    <col span="2" />
    <col class="column-background" />
    <col class="column-fixed-width" />
    <col class="column-background" />
    <col class="column-background-border" />
    <col span="2" class="column-fixed-width" />
  </colgroup>

  <!-- Resto del código omitido por brevedad -->
</table>
```

</details>

## Añadir estructura con \<thead>, \<tbody> y \<tfoot>

A medida que tus tablas se vuelven algo más complejas, conviene darles más definición estructural. Una forma clara de hacerlo es con {{htmlelement("thead")}}, {{htmlelement("tbody")}} y {{htmlelement("tfoot")}}, que te permiten marcar una sección de cabecera, otra de cuerpo y otra de pie.

Estos elementos no hacen necesariamente que la tabla sea más accesible para quien usa un lector de pantalla, ni suponen por sí solos ninguna mejora visual, pero son muy útiles para aplicar mejoras de estilo y de maquetación con CSS, lo que sí puede mejorar la accesibilidad. Por poner algún ejemplo interesante: en una tabla larga podrías hacer que la cabecera y el pie se repitieran en cada página impresa, o que el cuerpo se mostrara en una sola página y su contenido estuviera disponible desplazándose arriba y abajo.

Para usarlos, deben incluirse en este orden:

- El elemento `<thead>` debe envolver la parte de la tabla que es la cabecera, que suele ser la primera fila con los encabezados de columna, aunque no siempre tiene por qué serlo. Si usas elementos {{htmlelement("col")}} o {{htmlelement("colgroup")}}, la cabecera de la tabla debe ir justo debajo de ellos.
- El elemento `<tbody>` tiene que envolver la parte principal del contenido de la tabla, la que no es cabecera ni pie, y debe ir después del `<thead>`.
- El elemento `<tfoot>` tiene que envolver la parte de la tabla que es el pie, que podría ser, por ejemplo, una fila final con la suma de los elementos de las filas anteriores. El `<tfoot>` debe ir después del `<tbody>`.

> [!NOTE]
> El `<tbody>` se incluye siempre de forma implícita en toda tabla aunque no lo especifiques en tu código. Para comprobarlo, abre uno de tus ejemplos anteriores que no lo incluya y mira el código HTML en las [herramientas de desarrollo del navegador](/es/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools): verás que el navegador ha añadido esa etiqueta por ti. Quizá te preguntes por qué molestarse en incluirla: conviene hacerlo porque te da más control sobre la estructura y el estilo de tu tabla.

### Añadir estructura a una tabla de registro de gastos

Vamos a poner en práctica estos elementos nuevos.

1. Antes que nada, crea un archivo HTML nuevo llamado `spending-record.html` y pon el HTML siguiente dentro del `<body>`:

   ```html
   <h1>Mi registro de gastos</h1>

   <table>
     <caption>
       En qué decidí gastar mi dinero
     </caption>
     <tr>
       <th>Compra</th>
       <th>Lugar</th>
       <th>Fecha</th>
       <th>Valoración</th>
       <th>Coste (€)</th>
     </tr>
     <tr>
       <td>Corte de pelo</td>
       <td>Peluquería</td>
       <td>12/09</td>
       <td>Buena idea</td>
       <td>30</td>
     </tr>
     <tr>
       <td>Lasaña</td>
       <td>Restaurante</td>
       <td>12/09</td>
       <td>Me arrepiento</td>
       <td>18</td>
     </tr>
     <tr>
       <td>Zapatos</td>
       <td>Zapatería</td>
       <td>13/09</td>
       <td>Me arrepiento mucho</td>
       <td>65</td>
     </tr>
     <tr>
       <td>Pasta de dientes</td>
       <td>Supermercado</td>
       <td>13/09</td>
       <td>Bien</td>
       <td>5</td>
     </tr>
     <tr>
       <td>SUMA</td>
       <td>118</td>
     </tr>
   </table>
   ```

2. A continuación, crea un archivo CSS llamado `minimal-table.css` en el mismo directorio que tu archivo HTML y rellénalo con este contenido:

   ```css live-sample___finished-table-structure
   html {
     font-family: sans-serif;
   }

   table {
     border-collapse: collapse;
     border: 2px solid rgb(200 200 200);
     letter-spacing: 1px;
     font-size: 0.8rem;
   }

   td,
   th {
     border: 1px solid rgb(190 190 190);
     padding: 10px 20px;
   }

   th {
     background-color: rgb(235 235 235);
   }

   td {
     text-align: center;
   }

   tr:nth-child(even) td {
     background-color: rgb(250 250 250);
   }

   tr:nth-child(odd) td {
     background-color: rgb(245 245 245);
   }

   caption {
     padding: 10px;
   }
   ```

3. Añade un elemento `<link>` al `<head>` de tu HTML para aplicarle el CSS (consulta [Aplicar CSS y JavaScript al HTML](/es/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#aplicando_css_y_javascript_al_html) si necesitas ayuda).

4. Prueba a meter la fila evidente de encabezados dentro de un elemento `<thead>`, la fila «SUMA» dentro de un `<tfoot>` y el resto del contenido dentro de un `<tbody>`.
5. Después, añade un atributo [`colspan`](/es/docs/Web/HTML/Reference/Elements/td#colspan) para que la celda «SUMA» abarque las cuatro primeras columnas, de modo que el número aparezca al pie de la columna «Coste».
6. Vamos a añadir algo de estilo sencillo a la tabla, para que te hagas una idea de lo útiles que resultan estos elementos al aplicar CSS. Añade lo siguiente a tu archivo CSS:

   ```css live-sample___finished-table-structure
   tbody {
     font-size: 95%;
     font-style: italic;
   }

   tfoot {
     font-weight: bold;
   }
   ```

   > [!NOTE]
   > No esperamos que entiendas del todo el CSS ahora mismo. Aprenderás más cuando recorras nuestros módulos de CSS (empezando por [Fundamentos de estilo con CSS](/es/docs/Learn_web_development/Core/Styling_basics), que incluye un artículo dedicado a [dar estilo a tablas](/es/docs/Learn_web_development/Core/Styling_basics/Tables)).

7. Guarda, recarga y mira el resultado. Si los elementos `<tbody>` y `<tfoot>` no estuvieran, tendrías que escribir selectores y reglas mucho más complicados para aplicar el mismo estilo.

El ejemplo terminado debería verse así:

{{embedlivesample("finished-table-structure", "100%", "300")}}

<details>
<summary>Haz clic aquí para ver la solución</summary>

Tu HTML terminado debería verse más o menos así:

```html live-sample___finished-table-structure
<table>
  <caption>
    En qué decidí gastar mi dinero
  </caption>
  <thead>
    <tr>
      <th>Compra</th>
      <th>Lugar</th>
      <th>Fecha</th>
      <th>Valoración</th>
      <th>Coste (€)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Corte de pelo</td>
      <td>Peluquería</td>
      <td>12/09</td>
      <td>Buena idea</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Lasaña</td>
      <td>Restaurante</td>
      <td>12/09</td>
      <td>Me arrepiento</td>
      <td>18</td>
    </tr>
    <tr>
      <td>Zapatos</td>
      <td>Zapatería</td>
      <td>13/09</td>
      <td>Me arrepiento mucho</td>
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
  <tfoot>
    <tr>
      <td colspan="4">SUMA</td>
      <td>118</td>
    </tr>
  </tfoot>
</table>
```

</details>

## El atributo `scope`

El atributo [`scope`](/es/docs/Web/HTML/Reference/Elements/th#scope) se puede añadir al elemento `<th>` para indicar a los lectores de pantalla exactamente de qué celdas es encabezado: ¿lo es de la fila en la que está, o de la columna? Volviendo a nuestro ejemplo del registro de gastos, podrías definir sin ambigüedad los encabezados de columna como tales de esta forma:

```html
<thead>
  <tr>
    <th scope="col">Compra</th>
    <th scope="col">Lugar</th>
    <th scope="col">Fecha</th>
    <th scope="col">Valoración</th>
    <th scope="col">Coste (€)</th>
  </tr>
</thead>
```

Y cada fila podría tener un encabezado definido así (si añadiéramos encabezados de fila además de los de columna):

```html
<tr>
  <th scope="row">Corte de pelo</th>
  <td>Peluquería</td>
  <td>12/09</td>
  <td>Buena idea</td>
  <td>30</td>
</tr>
```

Los lectores de pantalla reconocen un marcado estructurado así, y permiten por ejemplo leer de una vez toda la columna o toda la fila.

`scope` tiene dos valores posibles más: `colgroup` y `rowgroup`. Se usan en los encabezados que se sitúan por encima de varias columnas o filas. Si vuelves a la tabla «Artículos vendidos en agosto de 2016» del principio de esta sección, verás que la celda «Ropa» está por encima de las celdas «Pantalones», «Faldas» y «Vestidos». Todas ellas deben marcarse como encabezados (`<th>`), pero «Ropa» es un encabezado que está por encima y define los otros tres subencabezados. Por eso «Ropa» debe llevar el atributo `scope="colgroup"`, mientras que los demás llevarían `scope="col"`:

```html
<thead>
  <tr>
    <th colspan="3" scope="colgroup">Ropa</th>
  </tr>
  <tr>
    <th scope="col">Pantalones</th>
    <th scope="col">Faldas</th>
    <th scope="col">Vestidos</th>
  </tr>
</thead>
```

Lo mismo aplica a los encabezados de varias filas agrupadas. Mira otra vez la tabla «Artículos vendidos en agosto de 2016», fijándote esta vez en las filas con los encabezados «Ámsterdam» y «Utrecht» (`<th>`). Verás que el encabezado «Países Bajos», también marcado como `<th>`, abarca ambas filas y es el encabezado de los otros dos subencabezados. Por tanto, hay que especificar `scope="rowgroup"` en esa celda de encabezado para ayudar a los lectores de pantalla a crear las asociaciones correctas:

```html
<tr>
  <th rowspan="2" scope="rowgroup">Países Bajos</th>
  <th scope="row">Ámsterdam</th>
  <td>89</td>
  <td>34</td>
  <td>69</td>
</tr>
<tr>
  <th scope="row">Utrecht</th>
  <td>80</td>
  <td>12</td>
  <td>43</td>
</tr>
```

## Los atributos `id` y `headers`

Una alternativa al atributo `scope` es usar los atributos [`id`](/es/docs/Web/HTML/Reference/Global_attributes/id) y [`headers`](/es/docs/Web/HTML/Reference/Elements/td#headers) para crear asociaciones entre las celdas de datos y las de encabezado.

Un elemento `<th>` puede servir de encabezado para una celda de datos (`<td>`) o, en tablas más complejas, para otra celda de encabezado (`<th>`). Esto te permite crear encabezados por capas o agrupados, en los que un encabezado describe a varios otros.

El atributo `headers` sirve para enlazar una celda, `<td>` o `<th>`, con una o varias celdas de encabezado. Toma una lista de {{Glossary("string", "cadenas")}} separadas por espacios; el orden de las cadenas no importa. Cada cadena debe coincidir con el `id` único de un elemento `<th>` con el que la celda está asociada.

Este método le da a tu tabla HTML una definición más explícita de la posición de cada celda, a partir de los encabezados de la columna y la fila a las que pertenece, algo parecido a una hoja de cálculo. Para que funcione bien, tu tabla debería incluir encabezados tanto de columna como de fila.

Veamos una parte del ejemplo «Artículos vendidos en agosto de 2016» para entender cómo se usan los atributos `id` y `headers`:

1. Añade un `id` único a cada elemento `<th>` de la tabla.
2. Para las celdas de encabezado: añade un atributo `headers` a cada `<th>` que actúe como subencabezado, es decir, a toda celda de encabezado que tenga otro encabezado por encima. El valor es el `id` del encabezado de nivel superior. En nuestro ejemplo, `"clothes"` para los encabezados de columna y `"belgium"` para el de fila.
3. Para las celdas de datos: añade un atributo `headers` a cada `<td>` y pon los `id` de los `<th>` asociados en una lista separada por espacios. Puedes proceder como en una hoja de cálculo: localiza la celda de datos y después los encabezados de fila y de columna que la describen. El orden de los `id` no importa, pero mantenerlo constante ayuda a organizarse y mejora la legibilidad del código.

```html
<thead>
  <tr>
    <th></th>
    <th></th>
    <th id="clothes" colspan="3">Ropa</th>
  </tr>
  <tr>
    <th></th>
    <th></th>
    <th id="trousers" headers="clothes">Pantalones</th>
    <th id="skirts" headers="clothes">Faldas</th>
    <th id="dresses" headers="clothes">Vestidos</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th id="belgium" rowspan="2">Bélgica</th>
    <th id="antwerp" headers="belgium">Amberes</th>
    <td headers="belgium antwerp clothes trousers">56</td>
    <td headers="belgium antwerp clothes skirts">22</td>
    <td headers="belgium antwerp clothes dresses">43</td>
  </tr>
  <tr>
    <th id="ghent" headers="belgium">Gante</th>
    <td headers="belgium ghent clothes trousers">41</td>
    <td headers="belgium ghent clothes skirts">17</td>
    <td headers="belgium ghent clothes dresses">35</td>
  </tr>
</tbody>
```

En este ejemplo:

- El `<th>` de `"Bélgica"` usa `rowspan="2"` para abarcar tanto `"Amberes"` como `"Gante"`.
- Las celdas de encabezado de ciudad (`"Amberes"` y `"Gante"`) usan el atributo `headers` para referirse a `"belgium"` y mostrar así que pertenecen al grupo de Bélgica.
- Cada `<td>` incluye un atributo `headers` con el país (`belgium`), la ciudad (`antwerp` o `ghent`), el grupo (`clothes`) y la prenda concreta (`trousers`, `skirts` o `dresses`).

> [!NOTE]
> Este método crea asociaciones muy precisas entre encabezados y celdas de datos, pero usa **mucho** más marcado y no deja margen para errores. El enfoque de `scope` suele ser suficiente para la mayoría de las tablas.

## Jugar con scope y headers

En este último ejercicio te pediremos que pruebes a usar `scope` y `headers` en la tabla de ejemplo que presentamos más arriba.

1. Primero haz copias locales de [items-sold.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold.html) y [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css) en un directorio nuevo.
2. Prueba a añadir los atributos `scope` adecuados para hacer esta tabla más accesible.
3. Haz otra copia de los archivos iniciales en otro directorio local.
4. Esta vez haz la tabla más accesible creando asociaciones precisas y explícitas con los atributos `id` y `headers`.

<details>
<summary>Haz clic aquí para ver la solución</summary>

El primer ejemplo HTML terminado debería verse más o menos así:

```html
<table>
  <caption>
    Artículos vendidos en agosto de 2016
  </caption>
  <thead>
    <tr>
      <td colspan="2" rowspan="2"></td>
      <th colspan="3" scope="colgroup">Ropa</th>
      <th colspan="2" scope="colgroup">Accesorios</th>
    </tr>
    <tr>
      <th scope="col">Pantalones</th>
      <th scope="col">Faldas</th>
      <th scope="col">Vestidos</th>
      <th scope="col">Pulseras</th>
      <th scope="col">Anillos</th>
    </tr>
  </thead>
  <tbody>
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
      <th rowspan="2" scope="rowgroup">Países Bajos</th>
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
```

Y el segundo debería verse así:

```html
<table>
  <caption>
    Artículos vendidos en agosto de 2016
  </caption>
  <thead>
    <tr>
      <td colspan="2" rowspan="2"></td>
      <th colspan="3" id="clothes">Ropa</th>
      <th colspan="2" id="accessories">Accesorios</th>
    </tr>
    <tr>
      <th id="trousers" headers="clothes">Pantalones</th>
      <th id="skirts" headers="clothes">Faldas</th>
      <th id="dresses" headers="clothes">Vestidos</th>
      <th id="bracelets" headers="accessories">Pulseras</th>
      <th id="rings" headers="accessories">Anillos</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="3" id="belgium">Bélgica</th>
      <th id="antwerp" headers="belgium">Amberes</th>
      <td headers="antwerp belgium clothes trousers">56</td>
      <td headers="antwerp belgium clothes skirts">22</td>
      <td headers="antwerp belgium clothes dresses">43</td>
      <td headers="antwerp belgium accessories bracelets">72</td>
      <td headers="antwerp belgium accessories rings">23</td>
    </tr>
    <tr>
      <th id="ghent" headers="belgium">Gante</th>
      <td headers="ghent belgium clothes trousers">46</td>
      <td headers="ghent belgium clothes skirts">18</td>
      <td headers="ghent belgium clothes dresses">50</td>
      <td headers="ghent belgium accessories bracelets">61</td>
      <td headers="ghent belgium accessories rings">15</td>
    </tr>
    <tr>
      <th id="brussels" headers="belgium">Bruselas</th>
      <td headers="brussels belgium clothes trousers">51</td>
      <td headers="brussels belgium clothes skirts">27</td>
      <td headers="brussels belgium clothes dresses">38</td>
      <td headers="brussels belgium accessories bracelets">69</td>
      <td headers="brussels belgium accessories rings">28</td>
    </tr>
    <tr>
      <th rowspan="2" id="netherlands">Países Bajos</th>
      <th id="amsterdam" headers="netherlands">Ámsterdam</th>
      <td headers="amsterdam netherlands clothes trousers">89</td>
      <td headers="amsterdam netherlands clothes skirts">34</td>
      <td headers="amsterdam netherlands clothes dresses">69</td>
      <td headers="amsterdam netherlands accessories bracelets">85</td>
      <td headers="amsterdam netherlands accessories rings">38</td>
    </tr>
    <tr>
      <th id="utrecht" headers="netherlands">Utrecht</th>
      <td headers="utrecht netherlands clothes trousers">80</td>
      <td headers="utrecht netherlands clothes skirts">12</td>
      <td headers="utrecht netherlands clothes dresses">43</td>
      <td headers="utrecht netherlands accessories bracelets">36</td>
      <td headers="utrecht netherlands accessories rings">19</td>
    </tr>
  </tbody>
</table>
```

También puedes encontrar los ejemplos terminados en GitHub:

- Para el primero, consulta [items-sold-scope.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-scope.html) ([míralo también en vivo](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html)).
- Para el segundo, consulta [items-sold-headers.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-headers.html) ([míralo también en vivo](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html)).

</details>

## Resumen

Hay algunas cosas más que podrías aprender sobre las tablas en HTML, pero con esto tienes todo lo que necesitas por ahora. A continuación puedes ponerte a prueba con nuestro desafío de tablas HTML. ¡Que lo disfrutes!

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content")}}
