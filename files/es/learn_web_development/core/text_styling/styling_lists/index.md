---
title: Aplicación de estilo a listas
slug: Learn_web_development/Core/Text_styling/Styling_lists
l10n:
  sourceCommit: 1b7c3c1e03f14c3878e4d8518b0f1a89bedfdc9c
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Fundamentals", "Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling")}}

Las [listas](/es/docs/Learn_web_development/Core/Structuring_content/Lists) se comportan como cualquier otro texto en su mayor parte, pero hay algunas propiedades CSS específicas de las listas que debes conocer, así como algunas prácticas recomendadas a tener en cuenta. Este artículo te lo explica.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        <a href="/es/docs/Learn_web_development/Core/Structuring_content"
          >Estructurar contenido con HTML</a
        > y
        <a href="/es/docs/Learn_web_development/Core/Styling_basics">Fundamentos de estilo con CSS</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>Espaciado de los elementos de lista, por ejemplo con margin o line-height.</li>
          <li>Uso de las propiedades <code>list-style</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Un ejemplo básico de lista

Veamos un ejemplo básico de lista. A lo largo de este artículo veremos listas no ordenadas, listas ordenadas y listas de descripciones; todas tienen características de estilo similares, además de algunas que son particulares de cada una.

El HTML para nuestro ejemplo de lista se ve así:

```html live-sample___unstyled live-sample___initial-style live-sample___finished-style
<h2>Lista de la compra (no ordenada)</h2>

<p>
  Párrafo de referencia, párrafo de referencia, párrafo de referencia, párrafo
  de referencia, párrafo de referencia, párrafo de referencia.
</p>

<ul>
  <li>Hummus</li>
  <li>Pita</li>
  <li>Ensalada verde</li>
  <li>Halloumi</li>
</ul>

<h2>Lista de receta (ordenada)</h2>

<p>
  Párrafo de referencia, párrafo de referencia, párrafo de referencia, párrafo
  de referencia, párrafo de referencia, párrafo de referencia.
</p>

<ol>
  <li>Tuesta la pita, déjala enfriar y luego córtala por el borde.</li>
  <li>
    Fríe el halloumi en una sartén antiadherente poco profunda, hasta que se
    dore por ambos lados.
  </li>
  <li>Lava y corta la ensalada.</li>
  <li>Rellena la pita con ensalada, hummus y halloumi frito.</li>
</ol>

<h2>Lista de descripción de ingredientes</h2>

<p>
  Párrafo de referencia, párrafo de referencia, párrafo de referencia, párrafo
  de referencia, párrafo de referencia, párrafo de referencia.
</p>

<dl>
  <dt>Hummus</dt>
  <dd>
    Una salsa espesa hecha generalmente con garbanzos triturados junto con
    tahini, zumo de limón, sal, ajo y otros ingredientes.
  </dd>
  <dt>Pita</dt>
  <dd>Un pan plano suave y ligeramente fermentado.</dd>
  <dt>Halloumi</dt>
  <dd>
    Un queso semiduro, sin madurar y en salmuera, con un punto de fusión más
    alto de lo habitual, elaborado normalmente con leche de cabra u oveja.
  </dd>
  <dt>Ensalada verde</dt>
  <dd>
    Esas verduras saludables que muchos solo usamos para decorar los kebabs.
  </dd>
</dl>
```

Sin ningún estilo aplicado, esto se representa así:

{{embedlivesample("unstyled", "100%", 400)}}

Investiga estos elementos de lista utilizando las [herramientas de desarrollador de tu navegador](/es/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools); observarás un par de valores de estilo predeterminados:

- Los elementos {{htmlelement("ul")}} y {{htmlelement("ol")}} tienen un {{cssxref("margin")}} superior e inferior de `16px` (`1em`) y un {{cssxref("padding-left")}} de `40px` (`2.5em`). Si el atributo de direccionalidad [`dir`](/es/docs/Web/HTML/Reference/Global_attributes/dir) se establece en de derecha a izquierda (`rtl`) para los elementos `ul` y `ol`, en ese caso entra en juego {{cssxref("padding-right")}}, cuyo valor predeterminado es `40px` (`2.5em`).
- Los elementos de lista ({{htmlelement("li")}}) no tienen valores de espaciado predeterminados.
- El elemento {{htmlelement("dl")}} tiene un {{cssxref("margin")}} superior e inferior de `16px` (`1em`), pero no tiene ningún {{cssxref("padding")}} establecido.
- Los elementos {{htmlelement("dd")}} tienen un {{cssxref("margin-left")}} de `40px` (`2.5em`).
- Los elementos {{htmlelement("p")}} que hemos incluido como referencia tienen un {{cssxref("margin")}} superior e inferior de `16px` (`1em`), igual que los diferentes tipos de lista.

## Manejar el espaciado de la lista

Al aplicar estilo a las listas, necesitas ajustar sus estilos para que mantengan el mismo espaciado vertical que los elementos que las rodean (como párrafos e imágenes; a veces denominado ritmo vertical), y el mismo espaciado horizontal entre sí. Un CSS típico de estilo y espaciado de texto podría verse así:

```css live-sample___initial-style live-sample___list-style-type live-sample___list-style-position live-sample___custom-bullets live-sample___finished-style
/* Estilos generales */

html {
  font-family: "Helvetica", "Arial", sans-serif;
  font-size: 10px;
}

h2 {
  font-size: 2rem;
}

ul,
ol,
dl,
p {
  font-size: 1.5rem;
}

li,
p {
  line-height: 1.5;
}

/* Estilos para las listas de descripciones */

dd,
dt {
  line-height: 1.5;
}

dt {
  font-weight: bold;
}
```

- La primera regla establece un tipo de letra para todo el sitio y un tamaño de letra base de 10px. Estos valores se heredan para toda la página.
- Las reglas 2 y 3 establecen tamaños de letra relativos para los títulos, los diferentes tipos de listas (que heredan los hijos de los elementos de listas), y los párrafos. Esto significa que todos los párrafos y todas las listas tendrán el mismo tamaño de letra y el mismo espaciado superior e inferior, lo que ayudará a mantener el ritmo vertical constante.
- La regla 4 establece el mismo {{cssxref("line-height")}} en los párrafos y los elementos de las listas, de modo que todos los párrafos y todos los elementos individuales de las listas tendrán el mismo espaciado entre las líneas. Esto también ayudará a mantener el ritmo vertical consistente.
- Las reglas 5 y 6 se aplican a la lista de descripciones. Establecemos el mismo `line-height` en los términos y las descripciones de la lista de descripciones, así como hicimos con los párrafos y los elementos de la lista. De nuevo, ¡la coherencia es buena! También hacemos que los términos de las descripciones tengan un estilo de negrita, para que destaquen visualmente.

Al aplicarlo al HTML que mostramos antes, nuestro código se representa así:

{{embedlivesample("initial-style", "100%", 400)}}

## Estilos específicos de las listas

Ahora que hemos analizado las técnicas generales de espaciado para las listas, exploremos algunas propiedades específicas de las listas. Para empezar, hay tres propiedades que debes conocer, que pueden establecerse en los elementos {{htmlelement("ul")}} o {{htmlelement("ol")}}:

- {{cssxref("list-style-type")}}: Establece el tipo de viñetas para la lista, por ejemplo, viñetas cuadradas o circulares para una lista no ordenada, o números, letras o números romanos para una lista ordenada.
- {{cssxref("list-style-position")}}: Establece si las viñetas, al inicio de cada elemento, aparecen dentro o fuera de las listas.
- {{cssxref("list-style-image")}}: Te permite usar una imagen personalizada para la viñeta, en lugar de un cuadrado o círculo básico.

### Estilos de las viñetas

Como se mencionó antes, la propiedad {{cssxref("list-style-type")}} te permite establecer qué tipo de viñeta usar. En nuestro ejemplo, hemos establecido que se usen números romanos en mayúsculas para la lista ordenada, con:

```html hidden live-sample___list-style-type live-sample___list-style-position
<ol>
  <li>Tuesta la pita, déjala enfriar y luego córtala por el borde.</li>
  <li>
    Fríe el halloumi en una sartén antiadherente poco profunda, hasta que se
    dore por ambos lados.
  </li>
  <li>Lava y corta la ensalada.</li>
  <li>Rellena la pita con ensalada, hummus y halloumi frito.</li>
</ol>
```

```css live-sample___list-style-type
ol {
  list-style-type: upper-roman;
}
```

Esto nos da el siguiente aspecto:

{{embedlivesample("list-style-type", "100%", 120)}}

Puedes encontrar muchas más opciones si echas un vistazo a la página de referencia de {{cssxref("list-style-type")}}.

### Posición de la viñeta

La propiedad {{cssxref("list-style-position")}} establece si las viñetas aparecen dentro de los elementos de la lista, o fuera de ellos antes del inicio de cada elemento. El valor predeterminado es `outside`, que hace que las viñetas se sitúen fuera de los elementos de lista, como se observa arriba.

Si estableces el valor en `inside`, las viñetas se ubicarán dentro de las líneas:

```css live-sample___list-style-position live-sample___finished-style
ol {
  list-style-type: upper-roman;
  list-style-position: inside;
}
```

{{embedlivesample("list-style-position", "100%", 120)}}

### Uso de una imagen personalizada como viñeta

La propiedad {{cssxref("list-style-image")}} te permite usar una imagen personalizada para tu viñeta. La sintaxis se ve así:

```css
ul {
  list-style-image: url("https://mdn.github.io/shared-assets/images/examples/star-shape.png");
}
```

Sin embargo, esta propiedad es un poco limitada en cuanto al control de la posición, el tamaño, etc. de las viñetas. Es mejor usar la familia de propiedades {{cssxref("background")}}, sobre la que aprendiste en nuestra lección anterior de [Fondos y bordes](/es/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders).

En nuestro ejemplo terminado, hemos aplicado estilo a la lista no ordenada de la siguiente manera:

```html hidden live-sample___custom-bullets
<ul>
  <li>Hummus</li>
  <li>Pita</li>
  <li>Ensalada verde</li>
  <li>Halloumi</li>
</ul>
```

```css live-sample___custom-bullets live-sample___finished-style
ul {
  padding-left: 2rem;
  list-style-type: none;
}

ul li {
  padding-left: 2rem;
  background-image: url("https://mdn.github.io/shared-assets/images/examples/star-shape.png");
  background-position: 0 0;
  background-size: 1.6rem 1.6rem;
  background-repeat: no-repeat;
}
```

Aquí hemos hecho lo siguiente:

- Establecer el {{cssxref("padding-left")}} del {{htmlelement("ul")}} en `20px`, en vez de sus `40px` predeterminados, y luego establecer la misma cantidad en los elementos de la lista. Esto es para que, en general, los elementos de la lista sigan alineados con los de la lista ordenada y las descripciones de la lista de descripciones, pero los elementos de lista tengan algo de relleno para que las imágenes de fondo se ubiquen dentro. Si no hiciéramos esto, las imágenes de fondo se solaparían con el texto de los elementos de la lista, lo que quedaría desordenado.
- Establecer el {{cssxref("list-style-type")}} en `none`, para que no aparezca ninguna viñeta de forma predeterminada. En su lugar, vamos a usar las propiedades {{cssxref("background")}} para manejar las viñetas.
- Insertar una viñeta en cada elemento de la lista no ordenada. Las propiedades relevantes son las siguientes:
  - {{cssxref("background-image")}}: Hace referencia a la ruta del archivo de imagen que quieres usar como viñeta.
  - {{cssxref("background-position")}}: Define en qué lugar del fondo del elemento seleccionado va a aparecer la imagen; en este caso decimos `0 0`, lo que significa que la viñeta aparecerá en la esquina superior izquierda de cada elemento de lista.
  - {{cssxref("background-size")}}: Establece el tamaño de la imagen de fondo. Idealmente queremos que las viñetas sean del mismo tamaño que los elementos de lista (o solo un poco menores o mayores). Usamos un tamaño de `1.6rem` (`16px`), que encaja muy bien con el relleno de `20px` que hemos previsto para que quepa la viñeta; 16px más 4px de espacio entre la viñeta y el texto del elemento de lista funciona bien.
  - {{cssxref("background-repeat")}}: De forma predeterminada, las imágenes de fondo se repiten hasta rellenar todo el espacio de fondo disponible. En este caso solo queremos una copia de la imagen, así que establecemos esta propiedad en `no-repeat`.

Esto nos da el siguiente resultado:

{{embedlivesample("custom-bullets", "100%", 120)}}

### Propiedad abreviada list-style

Las tres propiedades mencionadas arriba pueden establecerse todas mediante una única propiedad abreviada, {{cssxref("list-style")}}. Por ejemplo, el siguiente CSS:

```css
ul {
  list-style-type: square;
  list-style-image: url("example.png");
  list-style-position: inside;
}
```

Podría reemplazarse por esto:

```css
ul {
  list-style: square url("example.png") inside;
}
```

Los valores pueden escribirse en cualquier orden, y puedes usar uno, dos o los tres (los valores predeterminados que se usan para las propiedades que no se incluyen son `disc`, `none` y `outside`). Si se especifican tanto un `type` como una `image`, el tipo se usa como opción de respaldo en caso de que la imagen no se pueda cargar por algún motivo.

## Ejemplo completo

En las últimas secciones te hemos mostrado los efectos de algunas características de lista de forma aislada. Cuando las aplicamos todas juntas a nuestro listado HTML inicial, el resultado es el siguiente:

{{embedlivesample("finished-style", "100%", 400)}}

## Control de numeración de las listas

A veces puedes querer numerar las listas de manera diferente, por ejemplo, empezando por un número que no sea el 1, o contando hacia atrás, o contando en pasos de más de una unidad. HTML y CSS tienen algunas herramientas para ayudarte con esto.

### start

El atributo [`start`](/es/docs/Web/HTML/Reference/Elements/ol) te permite empezar la numeración de la lista en un número diferente de 1. El siguiente ejemplo:

```html live-sample___counting-control
<ol start="4">
  <li>Tuesta la pita, déjala enfriar y luego córtala por el borde.</li>
  <li>
    Fríe el halloumi en una sartén antiadherente poco profunda, hasta que se
    dore por ambos lados.
  </li>
  <li>Lava y corta la ensalada.</li>
  <li>Rellena la pita con ensalada, hummus y halloumi frito.</li>
</ol>
```

Te da el siguiente resultado:

{{ EmbedLiveSample('counting-control', '100%', 150) }}

### reversed

El atributo [`reversed`](/es/docs/Web/HTML/Reference/Elements/ol) hará que la numeración de la lista empiece a contar hacia abajo en lugar de hacia arriba. El siguiente ejemplo:

```html live-sample___counting-control-reversed
<ol start="4" reversed>
  <li>Tuesta la pita, déjala enfriar y luego córtala por el borde.</li>
  <li>
    Fríe el halloumi en una sartén antiadherente poco profunda, hasta que se
    dore por ambos lados.
  </li>
  <li>Lava y corta la ensalada.</li>
  <li>Rellena la pita con ensalada, hummus y halloumi frito.</li>
</ol>
```

Te da el siguiente resultado:

{{ EmbedLiveSample('counting-control-reversed', '100%', 150) }}

> [!NOTE]
> Si en una lista invertida hay más elementos de lista que el valor establecido para el atributo `start`, la numeración continuará hasta cero y luego con valores negativos.

### value

El atributo [`value`](/es/docs/Web/HTML/Reference/Elements/li) te permite establecer valores numéricos específicos para tus elementos de lista. El siguiente ejemplo:

```html counting-control-values
<ol>
  <li value="2">
    Tuesta la pita, déjala enfriar y luego córtala por el borde.
  </li>
  <li value="4">
    Fríe el halloumi en una sartén antiadherente poco profunda, hasta que se
    dore por ambos lados.
  </li>
  <li value="6">Lava y corta la ensalada.</li>
  <li value="8">Rellena la pita con ensalada, hummus y halloumi frito.</li>
</ol>
```

Te da el siguiente resultado:

{{ EmbedLiveSample('counting-control-values', '100%', 150) }}

> [!NOTE]
> Incluso si utilizas un valor no numérico de {{cssxref("list-style-type")}}, igualmente necesitas usar los valores numéricos equivalentes en el atributo `value`.

## Tu turno: aplicando estilo a una lista anidada

Es hora de que completes otra tarea. Esta vez queremos que tomes lo que has aprendido más arriba y pruebes a aplicar estilo a una lista anidada.

1. Haz clic en **"Play"** en el bloque de código de abajo para editar el ejemplo en el MDN Playground.
2. Aplica a la lista no ordenada viñetas cuadradas.
3. Da a los elementos de la lista no ordenada y a los de la lista ordenada un `line-height` de `1.5` respecto de su `font-size`.
4. Establece que la lista ordenada tenga viñetas en letras minúsculas.
5. Siéntete libre de jugar con el ejemplo de lista tanto como quieras, probando tipos de viñetas, espaciados, o cualquier otra cosa que te apetezca usar.

Si cometes un error, puedes borrar tu trabajo usando el botón _Reset_ en el MDN Playground. Si te quedas realmente atascado, puedes ver la solución debajo del resultado del ejemplo.

```html live-sample___styling_lists
<ul>
  <li>Primero, enciende la vela.</li>
  <li>Luego, abre la caja.</li>
  <li>
    Finalmente, coloca los tres objetos mágicos dentro de la caja, en este orden
    exacto, para completar el hechizo:
    <ol>
      <li>El libro de hechizos</li>
      <li>La varita brillante</li>
      <li>La estatua del duende</li>
    </ol>
  </li>
</ul>
```

```css live-sample___styling_lists

```

{{ EmbedLiveSample('styling_lists', "100%", 160) }}

<details>
<summary>Haz clic aquí para mostrar la solución</summary>

Tu CSS terminado debería verse algo así:

```css
ul {
  list-style-type: square;
}

li {
  line-height: 1.5;
}

ol {
  list-style-type: lower-alpha;
}
```

</details>

## Resumen

La aplicación de estilo a listas se domina con relativa facilidad una vez que conoces algunos principios básicos y propiedades específicas asociados. En el artículo siguiente vamos a continuar con las técnicas de aplicación de estilo a enlaces.

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Fundamentals", "Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling")}}
