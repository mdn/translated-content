---
title: Conceptos básicos de las tablas HTML
short-title: Conceptos básicos de tablas
slug: Learn_web_development/Core/Structuring_content/HTML_table_basics
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}

Este artículo te ayudará a comenzar con las tablas HTML. Vamos a exponer conceptos básicos como filas y celdas, encabezados, celdas que abarcan varias columnas y filas, y la forma de agrupar todas las celdas de una columna para aplicarles estilo.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Familiaridad básica con HTML, como se cubre en
        <a href="/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Primeros pasos con HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados del aprendizaje:</th>
      <td>
        <ul>
          <li>Para qué sirven las tablas: estructurar datos tabulares.</li>
          <li>Para qué no sirven: la maquetación, ni <em>ninguna otra cosa</em>.</li>
          <li>Sintaxis básica de una tabla: <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> y <code>&lt;td&gt;</code>.</li>
          <li>Definir encabezados de tabla con <code>&lt;th&gt;</code>.</li>
          <li>Abarcar varias columnas y filas con <code>colspan</code> y <code>rowspan</code>.</li>
          <li>Agrupar columnas con <code>&lt;colgroup&gt;</code> y <code>&lt;col&gt;</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## ¿Qué es una tabla?

Una tabla es un conjunto estructurado de datos compuesto por filas y columnas (**datos tabulares**). Una tabla te permite consultar de forma rápida y sencilla valores que indican algún tipo de conexión entre distintos tipos de datos, por ejemplo una persona y su edad, o un día de la semana, o el horario de una piscina municipal.

![Una tabla de ejemplo que muestra nombres y edades de algunas personas: Chris 38, Dennis 45, Sarah 29, Karen 47.](numbers-table.png)

![Un horario de piscina que muestra una tabla de datos de ejemplo](swimming-timetable.png)

Las tablas se usan mucho en la sociedad humana, y desde hace mucho tiempo, como demuestra este documento del censo de los Estados Unidos de 1800:

![Un documento en pergamino muy antiguo; los datos no se leen con facilidad, pero se ve claramente que se está usando una tabla de datos.](1800-census.jpg)

No es de extrañar, por tanto, que quienes crearon HTML proporcionaran un medio para estructurar y presentar datos tabulares en la web.

### ¿Cómo funciona una tabla?

El aspecto básico de una tabla es que es un elemento rígido. Es fácil interpretar la información haciendo asociaciones visuales entre los encabezados de las filas y las columnas. Por ejemplo, observa la tabla siguiente y busca un gigante gaseoso joviano con 62 lunas. Puedes encontrar la respuesta asociando los encabezados de la fila y la columna correspondientes.

```html hidden
<table>
  <caption>
    Datos sobre los planetas de nuestro sistema solar (datos planetarios tomados
    de la hoja técnica sobre datos planetarios de la NASA (<a
      href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/"
      >Nasa's Planetary Fact Sheet - Metric</a
    >).
  </caption>
  <thead>
    <tr>
      <td colspan="2"></td>
      <th scope="col">Nombre</th>
      <th scope="col">Masa (10<sup>24</sup> kg)</th>
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
      <th colspan="2" rowspan="4" scope="rowgroup">Planetas terrestres</th>
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
      <td>Nuestro planeta</td>
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
        Desclasificado como planeta en 2006, pero aún es una
        <a
          href="https://www.usatoday.com/story/tech/2014/10/02/pluto-planet-solar-system/16578959/"
          >cuestión polémica</a
        >.
      </td>
    </tr>
  </tbody>
</table>
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid black;
}

th,
td {
  padding: 5px;
  border: 1px solid black;
}
```

{{EmbedLiveSample("¿Cómo_funciona_una_tabla", 100, 560)}}

Cuando se implementan correctamente, las herramientas de accesibilidad como los lectores de pantalla manejan bien las tablas HTML, así que una tabla HTML bien hecha debe mejorar la experiencia de las personas videntes e invidentes por igual.

### Dar estilo a las tablas

También puedes [echar un vistazo al ejemplo en vivo de los datos de los planetas](https://mdn.github.io/learning-area/html/tables/planets-data/) en GitHub. Una cosa que notarás es que allí la tabla se lee bastante mejor: esto se debe a que la tabla que ves más arriba en esta página tiene un estilo mínimo, mientras que la versión de GitHub tiene aplicado un CSS bastante más elaborado.

No te hagas ilusiones: para que las tablas sean eficaces en la web, necesitas aportar cierta información de estilo con [CSS](/es/docs/Learn_web_development/Core/Styling_basics), además de una buena estructura sólida con HTML. En esta lección nos centramos en la parte de HTML; aprenderás a dar estilo a las tablas más adelante, en nuestra lección [Dar estilo a tablas](/es/docs/Learn_web_development/Core/Styling_basics/Tables).

En este módulo no nos centraremos en CSS, pero te proporcionamos una hoja de estilos CSS mínima para que la uses y tus tablas se lean mejor que con el estilo predeterminado que se obtiene sin dar ningún estilo. Puedes encontrar la [hoja de estilos aquí](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css), y también una [plantilla HTML](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) que la aplica; juntas te darán un buen punto de partida para experimentar con tablas HTML.

### ¿Cuándo no debes usar tablas HTML?

Las tablas HTML deben usarse para datos tabulares (información que resulta fácil de manejar en filas y columnas): para eso están diseñadas. Por desgracia, mucha gente solía usar tablas HTML para maquetar páginas web, por ejemplo una fila para la cabecera de la página, una fila para cada columna de contenido, una fila para el pie, etc. Esta técnica se usaba en el pasado porque la compatibilidad con CSS en los navegadores era mucho más limitada. Los navegadores modernos tienen una compatibilidad sólida con CSS, así que las maquetaciones basadas en tablas ya no son necesarias. Hoy son extremadamente raras, pero todavía puedes verlas en algunos rincones de la web.

En resumen, usar tablas para maquetar en vez de [técnicas de maquetación con CSS](/es/docs/Learn_web_development/Core/CSS_layout) es mala idea. Los motivos principales son estos:

1. **Las tablas de maquetación reducen la accesibilidad para las personas con discapacidad visual**: los [lectores de pantalla](/es/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers), que usan las personas ciegas, interpretan las etiquetas que hay en una página HTML y leen su contenido en voz alta. Como las tablas no son la herramienta adecuada para maquetar, y el marcado es más complejo que con las técnicas de maquetación de CSS, la salida del lector de pantalla resultará confusa para quien lo usa.
2. **Las tablas producen sopa de etiquetas**: como se ha mencionado, las maquetaciones con tablas suelen implicar estructuras de marcado más complejas que las técnicas de maquetación adecuadas. Esto puede hacer que el código sea más difícil de escribir, mantener y depurar.
3. **Las tablas no son adaptables automáticamente**: cuando usas contenedores de maquetación adecuados (como {{htmlelement("header")}}, {{htmlelement("section")}}, {{htmlelement("article")}} o {{htmlelement("div")}}), su ancho es de forma predeterminada el 100 % del elemento padre. Las tablas, en cambio, se dimensionan de forma predeterminada según su contenido, así que hacen falta medidas adicionales para que el estilo de una maquetación con tablas funcione bien en una variedad de dispositivos.

## Crea tu primera tabla

Ya hemos hablado bastante de teoría, así que vamos a meternos en un ejemplo práctico y a construir una tabla sencilla.

1. Antes que nada, haz una copia de [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) y [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) en un directorio nuevo de tu equipo. La plantilla HTML ya contiene un elemento `<link>` que aplica el CSS al HTML, así que no tienes que preocuparte por eso.
2. El contenido de toda tabla va encerrado entre estas dos etiquetas: **[`<table></table>`](/es/docs/Web/HTML/Reference/Elements/table)**. Agrégalas dentro del `body` de tu HTML.
3. El contenedor más pequeño dentro de una tabla es una celda, que se crea con un elemento **[`<td>`](/es/docs/Web/HTML/Reference/Elements/td)** («td» viene de _table data_, datos de tabla). Agrega lo siguiente dentro de las etiquetas de tu tabla:

   ```html
   <td>Hola, soy tu primera celda.</td>
   ```

4. Si queremos una fila de cuatro celdas, tenemos que copiar estas etiquetas tres veces. Actualiza el contenido de tu tabla para que quede así:

   ```html
   <td>Hola, soy tu primera celda.</td>
   <td>Soy tu segunda celda.</td>
   <td>Soy tu tercera celda.</td>
   <td>Soy tu cuarta celda.</td>
   ```

Como verás, las celdas no se colocan una debajo de otra, sino que se alinean automáticamente entre sí en la misma fila. Cada elemento `<td>` crea una sola celda y juntas forman la primera fila. Cada celda que agregamos hace que la fila se alargue.

Para que esta fila deje de crecer y las celdas siguientes empiecen a colocarse en una segunda fila, tenemos que usar el elemento [`<tr>`](/es/docs/Web/HTML/Reference/Elements/tr) («tr» viene de _table row_, fila de tabla). Vamos a investigarlo ahora.

1. Coloca las cuatro celdas que ya has creado dentro de etiquetas `<tr>`, así:

   ```html
   <tr>
     <td>Hola, soy tu primera celda.</td>
     <td>Soy tu segunda celda.</td>
     <td>Soy tu tercera celda.</td>
     <td>Soy tu cuarta celda.</td>
   </tr>
   ```

2. Ahora que has hecho una fila, prueba a hacer una o dos más: cada fila hay que envolverla en un elemento `<tr>` adicional, con cada celda contenida en un `<td>`.

<details>
<summary>Haz clic aquí para ver la solución</summary>

Tu HTML terminado debería verse más o menos así:

```html
<table>
  <tr>
    <td>Hola, soy tu primera celda.</td>
    <td>Soy tu segunda celda.</td>
    <td>Soy tu tercera celda.</td>
    <td>Soy tu cuarta celda.</td>
  </tr>

  <tr>
    <td>Segunda fila, primera celda.</td>
    <td>Celda 2.</td>
    <td>Celda 3.</td>
    <td>Celda 4.</td>
  </tr>
</table>
```

</details>

## Añadir encabezados con elementos \<th>

Ahora vamos a centrarnos en los encabezados de tabla: celdas especiales que van al comienzo de una fila o columna y definen el tipo de datos que contiene esa fila o columna (por ejemplo, observa las celdas «Persona» y «Edad» del primer ejemplo que se muestra en este artículo). Para ilustrar por qué son útiles, echa un vistazo al ejemplo de tabla siguiente. En primer lugar, el código fuente:

```html live-sample___table-headers
<table>
  <tr>
    <td>&nbsp;</td>
    <td>Knocky</td>
    <td>Flor</td>
    <td>Ella</td>
    <td>Juan</td>
  </tr>
  <tr>
    <td>Raza</td>
    <td>Jack Russell</td>
    <td>Caniche</td>
    <td>Perro callejero</td>
    <td>Cocker Spaniel</td>
  </tr>
  <tr>
    <td>Edad</td>
    <td>16</td>
    <td>9</td>
    <td>10</td>
    <td>5</td>
  </tr>
  <tr>
    <td>Propietario</td>
    <td>Suegra</td>
    <td>Yo</td>
    <td>Yo</td>
    <td>Cuñada</td>
  </tr>
  <tr>
    <td>Hábitos alimenticios</td>
    <td>Se come las sobras de todos</td>
    <td>Picotea la comida</td>
    <td>Buena comedora</td>
    <td>Come hasta reventar</td>
  </tr>
</table>
```

```css hidden live-sample___table-headers
table {
  border-collapse: collapse;
}
td,
th {
  border: 1px solid black;
  padding: 10px 20px;
}
```

Y ahora la tabla ya renderizada:

{{EmbedLiveSample("table-headers", "", "250")}}

El problema aquí es que, aunque más o menos se entiende lo que pasa, no resulta tan fácil relacionar los datos entre sí como podría serlo. Si los encabezados de fila y de columna destacaran de alguna manera, sería mucho mejor.

### Añadir encabezados a la tabla de perros

Ahora nos gustaría que probaras a mejorar el ejemplo de la tabla de perros añadiendo algunos encabezados.

1. Primero, haz otra copia de nuestros archivos [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) y [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) en un directorio nuevo de tu equipo.
2. Añade el código siguiente dentro del `<body>` de tu HTML:

   ```html
   <h1>Tabla de perros</h1>
   <table>
     <tr>
       <td>&nbsp;</td>
       <td>Knocky</td>
       <td>Flor</td>
       <td>Ella</td>
       <td>Juan</td>
     </tr>
     <tr>
       <td>Raza</td>
       <td>Jack Russell</td>
       <td>Caniche</td>
       <td>Perro callejero</td>
       <td>Cocker Spaniel</td>
     </tr>
     <tr>
       <td>Edad</td>
       <td>16</td>
       <td>9</td>
       <td>10</td>
       <td>5</td>
     </tr>
     <tr>
       <td>Propietario</td>
       <td>Suegra</td>
       <td>Yo</td>
       <td>Yo</td>
       <td>Cuñada</td>
     </tr>
     <tr>
       <td>Hábitos alimenticios</td>
       <td>Se come las sobras de todos</td>
       <td>Picotea la comida</td>
       <td>Buena comedora</td>
       <td>Come hasta reventar</td>
     </tr>
   </table>
   ```

3. Para que los encabezados de la tabla se reconozcan como encabezados, tanto visual como semánticamente, puedes usar el elemento [`<th>`](/es/docs/Web/HTML/Reference/Elements/th) («th» viene de _table header_, encabezado de tabla). Funciona exactamente igual que un `<td>`, salvo que denota un encabezado y no una celda normal. Ve a tu HTML y cambia por elementos `<th>` todos los elementos `<td>` que rodean los encabezados de la tabla.
4. Guarda tu HTML y cárgalo en un navegador: deberías ver que ahora los encabezados se ven como encabezados.

<details>
<summary>Haz clic aquí para ver la solución</summary>

Tu HTML terminado debería verse más o menos así:

```html
<table>
  <tr>
    <td>&nbsp;</td>
    <th>Knocky</th>
    <th>Flor</th>
    <th>Ella</th>
    <th>Juan</th>
  </tr>
  <tr>
    <th>Raza</th>
    <td>Jack Russell</td>
    <td>Caniche</td>
    <td>Perro callejero</td>
    <td>Cocker Spaniel</td>
  </tr>
  <tr>
    <th>Edad</th>
    <td>16</td>
    <td>9</td>
    <td>10</td>
    <td>5</td>
  </tr>
  <tr>
    <th>Propietario</th>
    <td>Suegra</td>
    <td>Yo</td>
    <td>Yo</td>
    <td>Cuñada</td>
  </tr>
  <tr>
    <th>Hábitos alimenticios</th>
    <td>Se come las sobras de todos</td>
    <td>Picotea la comida</td>
    <td>Buena comedora</td>
    <td>Come hasta reventar</td>
  </tr>
</table>
```

</details>

### ¿Por qué son útiles los encabezados?

Ya hemos respondido en parte a esta pregunta: es más fácil encontrar los datos que buscas cuando los encabezados destacan claramente, y en general el diseño se ve mejor.

> [!NOTE]
> Los encabezados de tabla vienen con algo de estilo predeterminado: aparecen en negrita y centrados aunque no añadas tu propio estilo a la tabla, para ayudarles a destacar.

Los encabezados de tabla tienen además otra ventaja: junto con el atributo `scope` (que veremos en el artículo siguiente), permiten hacer las tablas más accesibles asociando cada encabezado con todos los datos de la misma fila o columna. Los lectores de pantalla pueden entonces leer de una vez toda una fila o columna de datos, lo cual resulta bastante útil.

## Permitir que las celdas abarquen varias filas y columnas

A veces queremos que las celdas abarquen varias filas o columnas. Toma el ejemplo sencillo siguiente, que muestra los nombres de algunos animales comunes. En algunos casos queremos mostrar los nombres de los machos y las hembras junto al nombre del animal. A veces no, y en esos casos queremos que el nombre del animal abarque toda la tabla.

El marcado inicial se ve así:

```html live-sample___multiple-rows-columns
<table>
  <tr>
    <th>Animales</th>
  </tr>
  <tr>
    <th>Hipopótamo</th>
  </tr>
  <tr>
    <th>Caballo</th>
    <td>Yegua</td>
  </tr>
  <tr>
    <td>Semental</td>
  </tr>
  <tr>
    <th>Cocodrilo</th>
  </tr>
  <tr>
    <th>Pollo</th>
    <td>Gallina</td>
  </tr>
  <tr>
    <td>Gallo</td>
  </tr>
</table>
```

```css hidden live-sample___multiple-rows-columns
table {
  border-collapse: collapse;
}
td,
th {
  border: 1px solid black;
  padding: 10px 20px;
}
```

Pero el resultado no es exactamente lo que queremos:

{{EmbedLiveSample("multiple-rows-columns", "", "350")}}

### Arreglar la disposición con `rowspan` y `colspan`

Necesitamos una forma de que «Animales», «Hipopótamo» y «Cocodrilo» abarquen dos columnas, y que «Caballo» y «Pollo» abarquen hacia abajo dos filas. Por suerte, los encabezados y las celdas de tabla tienen los atributos `colspan` y `rowspan`, que nos permiten hacer justamente eso. Ambos aceptan un valor numérico sin unidades, que equivale al número de filas o columnas que quieres abarcar. Por ejemplo, `colspan="2"` hace que una celda abarque dos columnas.

Vamos a usar `colspan` y `rowspan` para mejorar esta tabla.

1. Haz otra copia local de nuestros archivos [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) y [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) en un directorio nuevo de tu equipo.
2. Añade lo siguiente dentro del `<body>` de tu HTML:

   ```html
   <table>
     <tr>
       <th>Animales</th>
     </tr>
     <tr>
       <th>Hipopótamo</th>
     </tr>
     <tr>
       <th>Caballo</th>
       <td>Yegua</td>
     </tr>
     <tr>
       <td>Semental</td>
     </tr>
     <tr>
       <th>Cocodrilo</th>
     </tr>
     <tr>
       <th>Pollo</th>
       <td>Gallina</td>
     </tr>
     <tr>
       <td>Gallo</td>
     </tr>
   </table>
   ```

3. A continuación, usa `colspan` para que «Animales», «Hipopótamo» y «Cocodrilo» abarquen dos columnas.
4. Por último, usa `rowspan` para que «Caballo» y «Pollo» abarquen dos filas.
5. Guarda y abre tu código en un navegador para ver la mejora.

<details>
<summary>Haz clic aquí para ver la solución</summary>

Tu HTML terminado debería verse más o menos así:

```html
<table>
  <tr>
    <th colspan="2">Animales</th>
  </tr>
  <tr>
    <th colspan="2">Hipopótamo</th>
  </tr>
  <tr>
    <th rowspan="2">Caballo</th>
    <td>Yegua</td>
  </tr>
  <tr>
    <td>Semental</td>
  </tr>
  <tr>
    <th colspan="2">Cocodrilo</th>
  </tr>
  <tr>
    <th rowspan="2">Pollo</th>
    <td>Gallina</td>
  </tr>
  <tr>
    <td>Gallo</td>
  </tr>
</table>
```

</details>

## Agrupar columnas con `<colgroup>` y `<col>`

Hay una forma de apuntar a columnas enteras de una tabla como una sola entidad, por ejemplo al aplicar estilos a una tabla (algo que aprenderás más adelante en [Dar estilo a tablas](/es/docs/Learn_web_development/Core/Styling_basics/Tables)). A medida que ganes experiencia creando tablas HTML, descubrirás que aplicar un color de fondo, por ejemplo, a todas las celdas de una sola columna es más difícil de lo que parece. Los elementos {{htmlelement("colgroup")}} y {{htmlelement("col")}} ofrecen una solución a este problema.

El elemento `<colgroup>` debe incluirse como hijo de la tabla, justo después de la etiqueta de apertura `<table>`. Dentro del elemento `<colgroup>` puedes incluir uno o más elementos `<col>`, que representan grupos de columnas. El elemento `<col>` puede incluir un atributo `span` que indica el número de columnas de ese grupo. También puede incluir atributos globales como `style` (si quieres apuntar al grupo con estilos en línea) o `class` (si quieres apuntar a ese grupo con CSS o JavaScript mediante un nombre de clase). Los elementos `<col>` representan las columnas de la tabla desde el principio, por ejemplo desde el lado izquierdo en una tabla escrita en un idioma que se lee de izquierda a derecha, como el español.

Veamos un ejemplo para entenderlo. La tabla siguiente muestra un horario escolar:

```html live-sample___colgroup-col
<h1>Horario escolar de idiomas</h1>

<table>
  <colgroup>
    <col span="2" />
    <col class="column-background" />
    <col class="column-fixed-width" />
    <col class="column-background" />
    <col class="column-background-border" />
    <col span="2" class="column-fixed-width" />
  </colgroup>
  <tr>
    <td>&nbsp;</td>
    <th>Lun</th>
    <th>Mar</th>
    <th>Mié</th>
    <th>Jue</th>
    <th>Vie</th>
    <th>Sáb</th>
    <th>Dom</th>
  </tr>
  <tr>
    <th>1.ª hora</th>
    <td>Inglés</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>Alemán</td>
    <td>Neerlandés</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <th>2.ª hora</th>
    <td>Inglés</td>
    <td>Inglés</td>
    <td>&nbsp;</td>
    <td>Alemán</td>
    <td>Neerlandés</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <th>3.ª hora</th>
    <td>&nbsp;</td>
    <td>Alemán</td>
    <td>&nbsp;</td>
    <td>Alemán</td>
    <td>Neerlandés</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <th>4.ª hora</th>
    <td>&nbsp;</td>
    <td>Inglés</td>
    <td>&nbsp;</td>
    <td>Inglés</td>
    <td>Neerlandés</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
</table>
```

En esta tabla hay ocho columnas. Veamos más de cerca la estructura de `<colgroup>` y `<col>` para mostrar cómo les afecta:

```html
<colgroup>
  <col span="2" />
  <col class="column-background" />
  <col class="column-fixed-width" />
  <col class="column-background" />
  <col class="column-background-border" />
  <col span="2" class="column-fixed-width" />
</colgroup>
```

Si observamos los elementos `<col>`:

- El primero tiene `span="2"`, así que representa la primera _y_ la segunda columna desde la izquierda de la tabla. No apuntamos a estas columnas con ningún estilo, pero necesitamos incluirlo para poder apuntar a las columnas siguientes.
- El segundo y el cuarto no tienen el atributo `span`, así que representan una sola columna: la tercera y la quinta, respectivamente. Tienen aplicada la clase `column-background`.
- El tercero no tiene el atributo `span` y tiene aplicada la clase `column-fixed-width`. Representa la cuarta columna.
- El quinto no tiene el atributo `span` y tiene aplicada la clase `column-background-border`. Representa la sexta columna.
- El sexto tiene `span="2"` y la clase `column-fixed-width`. Representa la séptima y la octava columna.

Hemos ocultado la mayor parte del CSS de este ejemplo, pero te mostramos las reglas que aplican estilos a los elementos `<col>` que tienen las clases `column-background`, `column-fixed-width` y `column-background-border`:

```css hidden live-sample___colgroup-col
html {
  font-family: sans-serif;
}

body {
  margin: 0 20px;
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

td {
  text-align: center;
}
```

```css live-sample___colgroup-col
.column-background {
  background-color: #97db9a;
}

.column-fixed-width {
  width: 40px;
}

.column-background-border {
  background-color: #dcc48e;
  border: 4px solid #c1437a;
}
```

- Los elementos `<col>` con la clase `column-background` tienen un color de fondo sólido.
- Los elementos `<col>` con la clase `column-fixed-width` tienen un ancho fijo estrecho.
- El elemento `<col>` con la clase `column-background-border` tiene un color de fondo sólido y un borde grueso.

No hace falta que te preocupes ahora por cómo funciona el CSS; lo aprenderás en detalle más adelante, en nuestro módulo [Fundamentos de estilo con CSS](/es/docs/Learn_web_development/Core/Styling_basics).

Veamos cómo se renderiza el código anterior:

{{embedlivesample("colgroup-col", "100%", 400)}}

Fíjate en cómo las distintas columnas reciben los estilos especificados en las clases.

> [!NOTE]
> Aunque `<colgroup>` y `<col>` sirven sobre todo para dar estilo, son una funcionalidad de HTML, así que los hemos cubierto aquí y no en nuestros módulos de CSS. También es justo decir que son una funcionalidad _limitada_: como se muestra en la [página de referencia de `<colgroup>`](/es/docs/Web/HTML/Reference/Elements/colgroup#usage_notes), sólo se puede aplicar un subconjunto limitado de estilos a un elemento `<col>`, y la mayoría del resto de ajustes que estuvieron disponibles históricamente están obsoletos (eliminados, o marcados para su eliminación).

## Repaso interactivo de los conceptos de tablas

El contenido incrustado a continuación, de Scrimba<sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>, ofrece una lección interactiva que resume la mayoría de las técnicas cubiertas en este artículo. Échale un vistazo para repasar los puntos clave y practicar un poco más.

<mdn-scrim-inline url="https://scrimba.com/frontend-path-c0j/~03s" scrimtitle="HTML tables"></scrim-inline>

## Resumen

Con esto terminan los conceptos básicos de las tablas HTML. En el artículo siguiente veremos algunas funcionalidades adicionales que sirven para hacer las tablas HTML más accesibles a las personas con discapacidad visual.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}
