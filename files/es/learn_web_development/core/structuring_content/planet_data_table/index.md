---
title: "Desafío: estructurar una tabla de datos planetarios"
short-title: "Desafío: tabla de datos planetarios"
slug: Learn_web_development/Core/Structuring_content/Planet_data_table
l10n:
  sourceCommit: ee677b2c4d4a226fe4aedf05b2b156cae8a2bb95
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content")}}

En este desafío te damos datos sobre los planetas de nuestro sistema solar. Tu tarea es estructurarlos en una tabla HTML accesible.

## Punto de partida

1. Crea una carpeta nueva llamada `planet-data-table` en un lugar adecuado de tu equipo (o abre un editor en línea y da los pasos necesarios para crear un proyecto nuevo).
2. Guarda el listado HTML siguiente en un archivo llamado `index.html` dentro de tu carpeta (o pégalo en el panel HTML de tu editor en línea).

   ```html
   <!doctype html>
   <html lang="es">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width" />
       <title>Tabla de datos planetarios</title>
       <link href="style.css" rel="stylesheet" type="text/css" />
     </head>
     <body>
       <h1>Tabla de datos planetarios</h1>
     </body>
   </html>
   ```

3. Guarda el listado CSS siguiente en un archivo llamado `style.css` dentro de tu carpeta (o pégalo en el panel CSS de tu editor en línea).

   ```css live-sample___planet-data-table
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

   .column-border {
     border: 2px solid black;
   }
   ```

4. Ten a mano los datos siguientes; tendrás que convertirlos en una tabla de datos HTML dentro de tu HTML.

   ```plain
   Filas

   Planetas terrestres

   Mercurio 0,330 4.879 5.427 3,7 4.222,6 57,9 167 0 El más cercano al Sol
   Venus 4,87 12.104 5.243 8,9 2.802,0 108,2 464 0
   La Tierra 5,97 12.756 5.514 9,8 24,0 149,6 15 1 Nuestro mundo
   Marte 0,642 6.792 3.933 3,7 24,7 227,9 -65 2 El planeta rojo

   Planetas jovianos

   Los gigantes de gas

   Júpiter 1.898 142.984 1.326 23,1 9,9 778,6 -110 67 El planeta más grande
   Saturno 568 120.536 687 9,0 10,7 1.433,5 -140 62

   Los gigantes de hielo

   Urano 86,8 51.118 1.271 8,7 17,2 2.872,5 -195 27
   Neptuno 102 49.528 1.638 11,0 16,1 4.495,1 -200 14

   Planetas enanos*

   Plutón 0,0146 2.370 2.095 0,7 153,3 5.906,4 -225 5 Dejó de considerarse un planeta en 2006, aunque esto <a href="https://www.usatoday.com/story/tech/2014/10/02/pluto-planet-solar-system/16578959/">sigue siendo objeto de debate</a>.

   Columnas

   Nombre
   Masa (10<sup>24</sup>kg)
   Diámetro (km)
   Densidad (kg/m<sup>3</sup>)
   Gravedad (m/s<sup>2</sup>)
   Duración del día (horas)
   Distancia del Sol (10<sup>6</sup>km)
   Temperatura media (°C)
   Número de lunas
   Observaciones

   Subtítulo

   Datos sobre los planetas de nuestro sistema solar (datos planetarios tomados de la <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/">hoja técnica de datos planetarios de la NASA, en unidades métricas</a>).
   ```

## Resumen del proyecto

Trabajas en una escuela; ahora mismo tu alumnado está estudiando los planetas de nuestro sistema solar y quieres darle un conjunto de datos fácil de consultar para buscar cifras y hechos sobre los planetas. Una tabla de datos HTML sería ideal: tienes que coger los datos en bruto de los que dispones y convertirlos en una tabla, siguiendo los pasos de abajo.

Todos los datos que necesitas están en el listado de arriba. Si te cuesta visualizarlos, echa un vistazo al ejemplo en vivo de más abajo, o prueba a dibujar un esquema.

1. Empieza la tabla dándole un contenedor exterior, una cabecera de tabla y un cuerpo de tabla. Para este ejemplo no necesitas pie de tabla.
2. Añade a tu tabla el subtítulo que se proporciona.
3. Añade a la cabecera de la tabla una fila que contenga todos los encabezados de columna.
4. Crea todas las filas de contenido dentro del cuerpo de la tabla, recordando marcar semánticamente como encabezados todos los encabezados de fila.
5. Asegúrate de que todo el contenido queda en la celda correcta: en los datos en bruto, cada fila de datos aparece junto al planeta al que corresponde.
6. Añade los atributos necesarios para que los encabezados de fila y de columna queden asociados sin ambigüedad a las filas, columnas o grupos de filas de los que son encabezado.
7. Añade un [borde](/es/docs/Web/CSS/Reference/Properties/border) negro alrededor únicamente de la columna que contiene los encabezados de fila con el nombre de cada planeta. Hazlo con una estructura `<colgroup>`/`<col>` adecuada y la clase `.column-border` que se proporciona en el CSS.

## Pistas y consejos

- La primera celda de la fila de cabecera tiene que estar vacía y abarcar dos columnas.
- Los encabezados de grupo de filas (por ejemplo, _Planetas jovianos_) que van a la izquierda de los encabezados con el nombre del planeta (por ejemplo, _Saturno_) son algo más difíciles de resolver: tienes que asegurarte de que cada uno abarque el número correcto de filas y columnas.
- Una de las dos formas de asociar los encabezados con sus filas o columnas es bastante más sencilla que la otra.

## Ejemplo

Una vez marcada correctamente, la tabla debería verse así. Si te atascas, consulta la solución que hay debajo del ejemplo en vivo.

{{embedlivesample("planet-data-table", "100%", 650)}}

<details>
<summary>Haz clic aquí para ver la solución</summary>

Tu HTML terminado debería verse así:

```html live-sample___planet-data-table
<h1>Tabla de datos planetarios</h1>

<table>
  <caption>
    Datos sobre los planetas de nuestro sistema solar (datos planetarios tomados
    de la
    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/"
      >hoja técnica de datos planetarios de la NASA, en unidades métricas</a
    >).
  </caption>
  <colgroup>
    <col span="2" />
    <col class="column-border" />
    <col span="9" />
  </colgroup>
  <thead>
    <tr>
      <td colspan="2"></td>
      <th scope="col">Nombre</th>
      <th scope="col">Masa (10<sup>24</sup>kg)</th>
      <th scope="col">Diámetro (km)</th>
      <th scope="col">Densidad (kg/m<sup>3</sup>)</th>
      <th scope="col">Gravedad (m/s<sup>2</sup>)</th>
      <th scope="col">Duración del día (horas)</th>
      <th scope="col">Distancia del Sol (10<sup>6</sup>km)</th>
      <th scope="col">Temperatura media (°C)</th>
      <th scope="col">Número de lunas</th>
      <th scope="col">Observaciones</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="4" colspan="2" scope="rowgroup">Planetas terrestres</th>
      <th scope="row">Mercurio</th>
      <td>0,330</td>
      <td>4.879</td>
      <td>5.427</td>
      <td>3,7</td>
      <td>4.222,6</td>
      <td>57,9</td>
      <td>167</td>
      <td>0</td>
      <td>El más cercano al Sol</td>
    </tr>
    <tr>
      <th scope="row">Venus</th>
      <td>4,87</td>
      <td>12.104</td>
      <td>5.243</td>
      <td>8,9</td>
      <td>2.802,0</td>
      <td>108,2</td>
      <td>464</td>
      <td>0</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">La Tierra</th>
      <td>5,97</td>
      <td>12.756</td>
      <td>5.514</td>
      <td>9,8</td>
      <td>24,0</td>
      <td>149,6</td>
      <td>15</td>
      <td>1</td>
      <td>Nuestro mundo</td>
    </tr>
    <tr>
      <th scope="row">Marte</th>
      <td>0,642</td>
      <td>6.792</td>
      <td>3.933</td>
      <td>3,7</td>
      <td>24,7</td>
      <td>227,9</td>
      <td>-65</td>
      <td>2</td>
      <td>El planeta rojo</td>
    </tr>
    <tr>
      <th rowspan="4" scope="rowgroup">Planetas jovianos</th>
      <th rowspan="2" scope="rowgroup">Los gigantes de gas</th>
      <th scope="row">Júpiter</th>
      <td>1.898</td>
      <td>142.984</td>
      <td>1.326</td>
      <td>23,1</td>
      <td>9,9</td>
      <td>778,6</td>
      <td>-110</td>
      <td>67</td>
      <td>El planeta más grande</td>
    </tr>
    <tr>
      <th scope="row">Saturno</th>
      <td>568</td>
      <td>120.536</td>
      <td>687</td>
      <td>9,0</td>
      <td>10,7</td>
      <td>1.433,5</td>
      <td>-140</td>
      <td>62</td>
      <td></td>
    </tr>
    <tr>
      <th rowspan="2" scope="rowgroup">Los gigantes de hielo</th>
      <th scope="row">Urano</th>
      <td>86,8</td>
      <td>51.118</td>
      <td>1.271</td>
      <td>8,7</td>
      <td>17,2</td>
      <td>2.872,5</td>
      <td>-195</td>
      <td>27</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Neptuno</th>
      <td>102</td>
      <td>49.528</td>
      <td>1.638</td>
      <td>11,0</td>
      <td>16,1</td>
      <td>4.495,1</td>
      <td>-200</td>
      <td>14</td>
      <td></td>
    </tr>
    <tr>
      <th colspan="2" scope="rowgroup">Planetas enanos</th>
      <th scope="row">Plutón</th>
      <td>0,0146</td>
      <td>2.370</td>
      <td>2.095</td>
      <td>0,7</td>
      <td>153,3</td>
      <td>5.906,4</td>
      <td>-225</td>
      <td>5</td>
      <td>
        Dejó de considerarse un planeta en 2006, aunque esto
        <a
          href="https://www.usatoday.com/story/tech/2014/10/02/pluto-planet-solar-system/16578959/"
          >sigue siendo objeto de debate</a
        >.
      </td>
    </tr>
  </tbody>
</table>
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content")}}
