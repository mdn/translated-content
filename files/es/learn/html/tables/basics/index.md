---
title: Conceptos básicos de las tablas HTML
slug: Learn/HTML/Tables/Basics
---

{{LearnSidebar}}{{NextMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}

Este artículo te ayudará a comenzar con las tablas HTML. Vamos a exponer conceptos básicos como filas y celdas, encabezados, celdas que abarcan múltiples columnas y filas, y la forma de agrupar todas las celdas de una columna para aplicarles estilo.

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
      <td>Adquirir conocimientos básicos de las tablas HTML.</td>
    </tr>
  </tbody>
</table>

## ¿Qué es una tabla?

Una tabla es un conjunto estructurado de datos distribuidos en filas y columnas (**datos tabulados**). Una tabla permite buscar con rapidez y facilidad valores entre diferentes tipos de datos que indiquen algún tipo de conexión. Por ejemplo, una persona y su edad, o un día de la semana o el horario de una piscina municipal.

![Una tabla de datos de ejemplo que muestra los nombres y las edades de algunas personas: Chris 38, Dennis 45, Sarah 29, Karen 47.](numbers-table.png)

![Una tabla de datos que muestra unos horarios de clases natación](swimming-timetable.png)

Las tablas se utilizan con mucha frecuencia en la sociedad desde hace años, como lo demuestra este documento censal de los EUA de 1800:

![Un pergamino muy antiguo; cuesta un poco leer los datos, pero muestra con claridad que las tablas de datos ya se utilizaban en 1800.](1800-census.jpg)

Por lo tanto, no es de extrañar que los creadores de HTML proporcionen un medio con el que estructurar y presentar datos en tablas en la web.

### ¿Cómo funciona una tabla?

El aspecto básico de una tabla es que es un elemento rígido. Es fácil interpretar la información haciendo asociaciones visuales entre los encabezados de las filas y las columnas. Por ejemplo, observa la tabla siguiente y busca un gigante de gas joviano con 62 lunas. Puedes encontrar la respuesta asociando los encabezados de la fila y la columna correspondientes.

<table>
  <caption>
    Datos sobre los planetas de nuestro sistema solar (datos planetarios tomados
    de la hoja técnica sobre datos planetarios de la NASA (<a
      href="http://nssdc.gsfc.nasa.gov/planetary/factsheet/"
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
          href="http://www.usatoday.com/story/tech/2014/10/02/pluto-planet-solar-system/16578959/"
          >cuestión polémica</a
        >.
      </td>
    </tr>
  </tbody>
</table>

Cuando se hace correctamente, incluso las personas ciegas pueden interpretar los datos de una tabla HTML. Una tabla HTML bien hecha debe mejorar la experiencia de los usuarios videntes e invidentes por igual.

### Dar estilo a las tablas

También puedes [echar un vistazo al ejemplo vivo](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) en GitHub. Observarás que la tabla que encontrarás allí tiene un aspecto más legible; esto se debe a que la tabla que ves en esta página tiene un estilo mínimo, mientras que en la de la versión de GitHub se ha aplicado un CSS más significativo.

No te hagas ilusiones; para que las tablas sean efectivas en la web, debes proporcionar cierta información de estilo con [CSS](/es/docs/Learn/CSS), así como una buena estructura sólida con HTML. En este módulo nos centramos en la parte HTML; para averiguar sobre la parte del CSS debes visitar nuestro artículo [Aplicar estilo a las tablas](/es/docs/Learn/CSS/Building_blocks/Styling_tables).

En este módulo no nos vamos a centrar en el CSS, sino que te vamos a proporcionar una hoja de estilo de CSS que dará a tus tablas algo más de legibilidad de la que se obtiene por defecto si no se proporciona ningún estilo. Puedes encontrar la hoja de estilo [aquí](https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css), así como también una [plantilla HTML](https://github.com/mdn/learning-area/blob/master/html/tables/basic/blank-template.html) para aplicar la hoja de estilo (te darán un buen punto de partida para experimentar con las tablas HTML).

### ¿Cuándo no debes usar tablas HTML?

Las tablas HTML están pensadas para utilizarse con datos tabulados. Por desgracia, mucha gente utiliza las tablas HTML para hacer compaginaciones de páginas web. Por ejemplo, una fila para contener la cabecera, una fila para contener las columnas de contenido, una fila para contener el pie de página, etc. Puede encontrar más detalles y un ejemplo en [Diseños de página](/es/docs/Learn/Accessibility/HTML#Page_layouts) en nuestro [Módulo de aprendizaje de accesibilidad](/es/docs/Learn/Accessibility). Se solía hacer este uso de las tablas porque la compatibilidad CSS entre navegadores solía ser terrible. Los diseños de tablas son mucho menos comunes hoy en día, pero aún se pueden ver en algunos rincones de la web.

En resumen, es una mala idea usar tablas para el diseño en lugar de las [técnicas de diseño CSS](/es/docs/Learn/CSS/CSS_layout). Las razones principales son las siguientes:

1. **Las tablas de diseño reducen la accesibilidad para los usuarios con discapacidad visual**: Los [lectores de pantalla](/es/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Screenreaders) que utilizan las personas con visibilidad reducida interpretan las etiquetas de una página HTML y leen su contenido para el usuario. Puesto que las tablas no son la herramienta adecuada para el diseño y el marcado es más complejo que con las técnicas de diseño CSS, la salida de los lectores de pantalla será confusa para estos usuarios.
2. **Las tablas generan estructuras incorrectas**: Como ya se mencionó, los diseños de tabla suelen involucrar estructuras de marcado más complejas que las técnicas de diseño. Esto puede dificultar la escritura, el mantenimiento y la depuración del código.
3. **Las tablas no tienen respuesta adaptativa automática**: Cuando usas contenedores de diseño adecuados (tales como {{HTMLElement ("header")}}, {{HTMLElement ("section")}}, {{HTMLElement ("article")}} o {{HTMLElement ("div")}}), su ancho predeterminado es el 100% de su elemento padre. En cambio, las tablas se dimensionan de forma predeterminada según su contenido, por lo que se necesitan medidas adicionales para que el diseño de la tabla funcione de manera efectiva en todos los dispositivos.

## Aprendizaje activo: Crea tu primera tabla

Ya hemos hablado bastante sobre la teoría de las tablas, así que veamos un ejemplo práctico y construyamos una tabla simple.

1. En primer lugar, haz una copia local de [blank-template.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/blank-template.html) y [minimal-table.css](https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css) en un directorio nuevo de tu ordenador.
2. El contenido de cada tabla está delimitado entre estas dos etiquetas: **[`<table></table>`](/es/docs/Web/HTML/Element/table)**. Añádelas al cuerpo de tu código HTML.
3. El contenedor más pequeño dentro de una tabla es una celda, que se crea con un elemento **[`<td>`](/es/docs/Web/HTML/Element/td)** ('td' significa 'table data', _datos de tabla_). Añade lo siguiente dentro de tus etiquetas de tabla:

   ```html
   <td>Hola, soy tu primera celda.</td>
   ```

4. Si quieres una fila de cuatro celdas, tienes que copiar estas etiquetas tres veces. Actualiza el contenido de la tabla para que se vea así:

   ```html
   <td>Hola, soy tu primera celda.</td>
   <td>Soy tu segunda celda.</td>
   <td>Soy tu tercera celda.</td>
   <td>Soy tu cuarta celda.</td>
   ```

Como verás, las celdas no se colocan una debajo de la otra, sino que se alinean automáticamente entre sí en la misma fila. Cada elemento \<td> crea una sola celda, y juntas forman la primera fila. Cada celda que agregamos hace crecer la fila.

Para detener el crecimiento de esta fila y comenzar a colocar las celdas posteriores en una segunda fila, necesitamos usar el elemento **[`<tr>`](/es/docs/Web/HTML/Element/tr)** ('tr' significa 'table raw', _fila de tabla_). Vamos a verlo en detalle.

1. Coloca las cuatro celdas que has creado dentro de las etiquetas `<tr>`, de esta forma:

   ```html
   <tr>
     <td>Hola, soy tu primera celda.</td>
     <td>Soy tu segunda celda.</td>
     <td>Soy tu tercera celda.</td>
     <td>Soy tu cuarta celda.</td>
   </tr>
   ```

2. Ahora que has hecho una fila, intenta hacer una o dos más: cada fila debe estar delimitada por un elemento `<tr>` adicional, con cada celda contenida en un `<td>`.

Esto debería dar como resultado una tabla similar a la siguiente:

<table>
  <tbody>
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
  </tbody>
</table>

> **Nota:** También puedes encontrar esto en GitHub como [simple-table.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/simple-table.html) (consúltalo [en vivo](http://mdn.github.io/learning-area/html/tables/basic/simple-table.html)).

## Añadir encabezados con elementos \<th>

Ahora nos vamos a centrar en los encabezados de tabla: celdas especiales que van al comienzo de una fila o columna y definen el tipo de datos que contiene esa fila o columna (por ejemplo, observa las celdas «Propietario» y «Edad» en el primer ejemplo que se muestra en este artículo). Para ilustrar por qué son útiles, echa un vistazo al ejemplo de tabla siguiente. En primer lugar, el código fuente:

```html
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
    <td>Hábitos alimentarios</td>
    <td>Come las sobras de todos</td>

    <td>Mordisquea la comida</td>
    <td>Come en abundancia</td>

    <td>Come hasta que revienta</td>
  </tr>
</table>
```

Ahora observa la tabla representada:

<table>
  <tbody>
    <tr>
      <td></td>
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
      <td>Hábitos alimentarios</td>
      <td>Come las sobras de todos</td>
      <td>Mordisquea la comida</td>
      <td>Come en abundancia</td>
      <td>Come hasta que revienta</td>
    </tr>
  </tbody>
</table>

El problema aquí es que, si bien puedes distinguir lo que sucede, no es tan fácil cruzar datos de referencia. Sería mucho mejor si los encabezados de las columnas y las filas se destacasen de alguna manera.

### Aprendizaje activo: encabezados de tabla

Intentemos mejorar esta tabla.

1. Primero, haz una copia local de nuestros archivos [dogs-table.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/dogs-table.html) y [minimal-table.css](https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css) en un directorio nuevo de tu ordenador. El HTML contiene el mismo ejemplo sobre perros que viste arriba.
2. Para reconocer los encabezados de la tabla como encabezados, tanto visual como semánticamente, puedes usar el elemento **[`<th>`](/es/docs/Web/HTML/Element/th)** ('th' significa 'table header', _encabezado de tabla_). Funciona exactamente igual que un `<td>`, excepto que denota un encabezado, no una celda normal. Entra en el código HTML, y cambiar todos los elementos `<td>` que delimitan los encabezados de tabla por elementos `<th>`.
3. Guarda tu HTML y cárgalo en un navegador. Los encabezados deberían verse como tal.

> **Nota:** Puedes encontrar nuestro ejemplo terminado en [dogs-table-fixed.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/dogs-table-fixed.html) en GitHub ([o consultarlo en vivo](http://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html)).

### ¿Por qué son útiles los encabezados?

Ya hemos respondido parcialmente a esta pregunta: es más fácil encontrar los datos que buscas cuando los encabezados se destacan con claridad, y el diseño suele presentar un aspecto mejor.

> **Nota:** Los encabezados de las tablas vienen con un estilo predeterminado: están en negrita y centrados (incluso si no añades tu estilo propio a la tabla) para que destaquen.

Los encabezados de tabla también presentan otra ventaja: junto con el atributo de `scope` (que veremos en el próximo artículo), mejoran la accesibilidad de las tablas porque asocian cada encabezado con todos los datos de la misma fila o columna. Así que los lectores de pantalla pueden leer una fila o columna de datos a la vez, lo cual es bastante útil.

## Celdas que abarcan varias filas y columnas

A veces queremos que las celdas abarquen varias filas o columnas. Toma el ejemplo siguiente, que muestra los nombres de algunos animales comunes. En algunos casos, queremos mostrar los nombres de los machos y las hembras junto al nombre del animal. A veces no lo queremos, y en tales casos queremos que el nombre del animal abarque toda la tabla.

El marcado inicial se ve así:

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

Pero la salida no nos da exactamente lo que queremos:

<table>
  <tbody>
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
  </tbody>
</table>

Necesitamos una forma de hacer que «Animales», «Hipopótamo» y «Cocodrilo» se extiendan dos columnas más allá, y «Caballo» y «Pollo» se extiendan dos filas más abajo. Por fortuna, los encabezados de tabla y las celdas tienen los atributos `colspan` y `rowspan`, que nos permiten hacer exactamente esas cosas. Ambos aceptan un valor numérico sin unidades, que es igual al número de filas o columnas que desea abarcar. Por ejemplo, `colspan="2"` extiende una celda dos columnas más allá.

Usemos `colspan` y `rowspan` para mejorar esta tabla.

1. Primero, haz una copia local de nuestros archivos [animals-table.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/animals-table.html) y [minimal-table.css](https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css) en un directorio nuevo de tu ordenador. El HTML contiene el mismo ejemplo sobre perros que viste arriba.
2. Luego, usa `colspan` para extender las celdas «Animales», «Hipopótamo» y «Cocodrilo» dos columnas más allá.
3. Por último, usa `rowspan` para extender las celdas de «Caballo» y «Pollo» dos filas más abajo.
4. Guarda tu código y ábrelo en un navegador para ver la mejora.

> **Nota:** Puedes encontrar nuestro ejemplo terminado en [animals-table-fixed.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/animals-table-fixed.html) en GitHub ([o consultarlo en vivo](http://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html)).

## Proporcionar un estilo común a las columnas

Hay una última característica de la que queremos hablar en este artículo antes de continuar. El HTML tiene un método para definir información de estilo para una columna completa de datos en un solo lugar: los elementos **[`<col>`](/es/docs/Web/HTML/Elemento/col)** y **[`<colgroup>`](/es/docs/Web/HTML/Elemento/colgroup)**. Estos atributos existen porque especificar el estilo de las columnas puede resultar enojoso e ineficiente; en general hay que especificar la información de estilo en _cada_ `<td>` o `<th>` de la columna, o utilizar un selector complejo como {{cssxref(":nth-child()")}}.

Tomemos el ejemplo sencillo siguiente:

```html
<table>
  <tr>
    <th>Dato 1</th>
    <th style="background-color: yellow">Dato 2</th>
  </tr>
  <tr>
    <td>Calcuta</td>
    <td style="background-color: yellow">Pizza</td>
  </tr>
  <tr>
    <td>Robots</td>
    <td style="background-color: yellow">Jazz</td>
  </tr>
</table>
```

Esto nos da el resultado siguiente:

<table>
  <tr>
    <th>Dato 1</th>
    <th style="background-color: yellow">Dato 2</th>
  </tr>
  <tr>
    <td>Calcuta</td>
    <td style="background-color: yellow">Pizza</td>
  </tr>
  <tr>
    <td>Robots</td>
    <td style="background-color: yellow">Jazz</td>
  </tr>
</table>

Esto no es ideal, porque hay que repetir la información de estilo en las tres celdas de la columna (en un proyecto real probablemente habría definida una clase `class` en las tres celdas y el estilo se especificaría en una hoja de estilo por separado). En vez de hacer esto, podemos especificar la información una sola vez, con un elemento `<col>`. Los elementos `<col>` se especifican dentro de un contenedor `<colgroup>` justo debajo de la etiqueta de apertura `<table>`. Podríamos crear el mismo efecto que vemos arriba especificando nuestra tabla de la manera siguiente:

```html
<table>
  <colgroup>
    <col />
    <col style="background-color: yellow" />
  </colgroup>
  <tr>
    <th>Dato 1</th>

    <th>Dato 2</th>
  </tr>
  <tr>
    <td>Calcuta</td>
    <td>Pizza</td>
  </tr>
  <tr>
    <td>Robots</td>
    <td>Jazz</td>
  </tr>
</table>
```

En efecto, definimos dos tipos de «columnas de estilo», una que especifica la información para la aplicación de estilo en cada columna. No aplicamos estilo a la primera columna, sino que aún tenemos que incluir un elemento `<col>` en blanco; de lo contrario, el estilo también se aplicaría a la primera columna.

Si quisiéramos aplicar la información de estilo a ambas columnas, podríamos incluir un elemento `<col>` con un atributo `span`, como este:

```html
<colgroup>
  <col style="background-color: yellow" span="2" />
</colgroup>
```

Al igual que `colspan` y `rowspan`, `span` toma un valor numérico sin unidades que especifica el número de columnas a las que se desea aplicar el estilo.

### Aprendizaje activo: colgroup y col

Ahora es el momento de intentarlo tú mismo.

A continuación puedes ver el horario de una profesora de idiomas. El viernes tiene que enseñar holandés todo el día, pero también enseña alemán durante unas horas los martes y los jueves, y quiere resaltar las columnas que contienen los días que da clase.

{{EmbedGHLiveSample("learning-area/html/tables/basic/timetable-fixed.html", '100%', 320)}}

Recrea la tabla a partir de los pasos siguientes.

1. Primero, haz una copia local de nuestro archivo [timetable.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/timetable.html) en un directorio nuevo de tu ordenador. El HTML contiene la misma tabla que viste arriba, menos la información de estilo de las columnas.
2. Añade un elemento `<colgroup>` en la parte superior de la tabla, justo debajo de la etiqueta `<table>`, en la que puedes añadir tus elementos `<col>` (consulta los pasos restantes a continuación).
3. Las dos primeras columnas deben dejarse sin estilo.
4. Añade un color de fondo a la tercera columna. El valor para tu atributo de `style` es `background-color:#97DB9A;`
5. Establece un ancho distinto para la cuarta columna. El valor de tu atributo de `style` es `width: 42px;`
6. Añade un color de fondo a la quinta columna. El valor para tu atributo de `style` es `background-color:#97DB9A;`
7. Añade un color de fondo diferente más un borde a la sexta columna, para indicar que este es un día especial porque da clases de un idioma diferente. Los valores para tu atributo de `style` son `background-color:#DCC48E; border:4px solid #C1437A;`
8. Los últimos dos días los tiene libres, así que no establezcas ningún color de fondo, pero sí un valor para el ancho; el valor para el atributo de `style` es `width: 42px;`

Mira cómo sigue en el ejemplo. Si te encallas o quieres verificar tu trabajo, puedes encontrar nuestra versión en GitHub como [timetable-fixed.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/timetable-fixed.html) (o también puedes consultarlo [en vivo](http://mdn.github.io/learning-area/html/tables/basic/timetable-fixed.html)).

## Resumen

Con esto casi hemos abarcado todos los conceptos básicos de las tablas HTML. En el próximo artículo, veremos algunas características un poco más avanzadas de las tablas y comenzaremos a pensar acerca de su accesibilidad para las personas con discapacidad visual.

{{NextMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}
