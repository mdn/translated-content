---
title: Estilos fundamentales de texto y fuentes
slug: Learn_web_development/Core/Text_styling/Fundamentals
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}

En este artículo comenzarás tu camino hacia el dominio del estilo de texto con {{glossary("CSS")}}. Aquí repasaremos todos los fundamentos básicos del estilo de texto y fuentes en detalle, incluyendo cómo establecer el peso, la familia y el estilo de la fuente, la propiedad abreviada de fuente, la alineación de texto y otros efectos, y el espaciado entre líneas y letras.

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
          <li>Comprender los conceptos de familias de fuentes, pilas de fuentes (font stacks) y fuentes seguras para la web.</li>
          <li>Establecer el color, peso, tamaño y estilo de la fuente.</li>
          <li>Establecer la alineación, transformación y decoración del texto.</li>
          <li>Establecer la altura de línea.</li>
          <li>Saber que existen otras propiedades de estilo de texto y fuentes, y sentirse motivado a explorarlas.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## ¿Qué implica dar estilo al texto en CSS?

El texto dentro de un elemento se dispone dentro del [cuadro de contenido](/es/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) del elemento. Comienza en la parte superior izquierda del área de contenido (o en la parte superior derecha, en el caso de contenido en idiomas RTL), y fluye hacia el final de la línea. Una vez que llega al final, pasa a la siguiente línea y vuelve a fluir hasta el final. Este patrón se repite hasta que todo el contenido se ha colocado dentro del cuadro. El contenido de texto se comporta efectivamente como una serie de elementos en línea, disponiéndose en líneas adyacentes entre sí, y sin crear saltos de línea hasta que se alcanza el final de la línea, o a menos que fuerces un salto de línea manualmente usando el elemento {{htmlelement("br")}}.

> [!NOTE]
> Si el párrafo anterior te deja confundido, no importa: vuelve atrás y revisa nuestro artículo [Modelo de caja](/es/docs/Learn_web_development/Core/Styling_basics/Box_model) para repasar la teoría del modelo de caja antes de continuar.

Las propiedades CSS utilizadas para dar estilo al texto generalmente se dividen en dos categorías, que veremos por separado en este artículo:

- **Estilos de fuente**: Propiedades que afectan a la fuente de un texto, por ejemplo, qué fuente se aplica, su tamaño, y si es negrita, cursiva, etc.
- **Estilos de diseño de texto**: Propiedades que afectan el espaciado y otras características de diseño del texto, permitiendo manipular, por ejemplo, el espacio entre líneas y letras, y cómo se alinea el texto dentro del cuadro de contenido.

> [!NOTE]
> Ten en cuenta que el texto dentro de un elemento se ve afectado como una sola entidad. No puedes seleccionar y dar estilo a subsecciones de texto a menos que las envuelvas en un elemento apropiado (como {{htmlelement("span")}} o {{htmlelement("strong")}}), o utilices un pseudoelemento específico de texto como {{cssxref("::first-letter")}} (selecciona la primera letra del texto de un elemento), {{cssxref("::first-line")}} (selecciona la primera línea del texto de un elemento), o {{cssxref("::selection")}} (selecciona el texto actualmente resaltado por el cursor).

## Fuentes

Sigamos directamente para ver las propiedades para dar estilo a las fuentes. En este ejemplo, aplicaremos algunas propiedades CSS a la siguiente muestra de HTML:

```html live-sample___0unstyled live-sample___1color live-sample___2fonts live-sample___3font-style live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
<h1>Tommy the cat</h1>

<p>Well I remember it as though it were a meal ago…</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

### Color

La propiedad {{cssxref("color")}} establece el color del contenido en primer plano de los elementos seleccionados, que generalmente es el texto, pero también puede incluir otras cosas, como un subrayado o superrayado colocado sobre el texto usando la propiedad {{cssxref("text-decoration")}}.

`color` puede aceptar cualquier [unidad de color CSS](/es/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color), por ejemplo:

```css live-sample___1color live-sample___2fonts live-sample___3font-style live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
p {
  color: red;
}
```

Esto hará que los párrafos se vuelvan rojos, en lugar del negro predeterminado estándar del navegador, así:

{{ EmbedLiveSample('1color', '100%', 230) }}

### Familias de fuentes

Para establecer una fuente diferente para tu texto, usas la propiedad {{cssxref("font-family")}}; esto te permite especificar una fuente (o lista de fuentes) para que el navegador la aplique a los elementos seleccionados. El navegador solo aplicará una fuente si está disponible en la máquina desde la que se accede al sitio web; si no, simplemente usará una [fuente predeterminada](#fuentes_predeterminadas) del navegador. Un ejemplo simple se ve así:

```css
p {
  font-family: "Arial";
}
```

Esto haría que todos los párrafos de una página adopten la fuente Arial, que se encuentra en cualquier computadora.

> [!NOTE]
> El scrim de Scrimba [Web-safe fonts](https://scrimba.com/learn-html-and-css-c0p/~01r?via=mdn) <sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> ofrece una guía interactiva sobre por qué son importantes las fuentes, las fuentes seguras para la web, y cómo especificar fuentes en CSS, junto con un desafío para poner a prueba tus conocimientos

#### Fuentes seguras para la web

Hablando de la disponibilidad de fuentes, solo existe un cierto número de fuentes que están generalmente disponibles en todos los sistemas y que, por lo tanto, pueden usarse sin mucha preocupación. Estas son las llamadas **fuentes seguras para la web**.

La mayoría de las veces, como desarrolladores web queremos tener un control más específico sobre las fuentes usadas para mostrar nuestro contenido de texto. El problema es encontrar una manera de saber qué fuente está disponible en la computadora usada para ver nuestras páginas web. No hay forma de saber esto en todos los casos, pero se sabe que las fuentes seguras para la web están disponibles en casi todas las instancias de los sistemas operativos más usados (Windows, macOS, las distribuciones de Linux más comunes, Android, e iOS).

La lista de fuentes realmente seguras para la web cambiará a medida que evolucionen los sistemas operativos, pero es razonable considerar las siguientes fuentes como seguras para la web, al menos por ahora (muchas de ellas se popularizaron gracias a la iniciativa de Microsoft _[Core fonts for the Web](https://es.wikipedia.org/wiki/Core_fonts_for_the_Web)_ de finales de los años 90 y principios de los 2000):

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Tipo genérico</th>
      <th scope="col">Notas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Arial</td>
      <td>sans-serif</td>
      <td>
        Suele considerarse una buena práctica añadir también <em>Helvetica</em> como
        alternativa preferida a <em>Arial</em>, ya que, aunque sus formas de fuente
        son casi idénticas, se considera que <em>Helvetica</em> tiene una forma más
        agradable, aunque <em>Arial</em> esté disponible más ampliamente.
      </td>
    </tr>
    <tr>
      <td>Courier New</td>
      <td>monospace</td>
      <td>
        Algunos sistemas operativos tienen una versión alternativa (posiblemente más
        antigua) de la fuente <em>Courier New</em> llamada <em>Courier</em>. Se
        considera una buena práctica usar ambas, con <em>Courier New</em> como la
        alternativa preferida.
      </td>
    </tr>
    <tr>
      <td>Georgia</td>
      <td>serif</td>
      <td></td>
    </tr>
    <tr>
      <td>Times New Roman</td>
      <td>serif</td>
      <td>
        Algunos sistemas operativos tienen una versión alternativa (posiblemente más
        antigua) de la fuente <em>Times New Roman</em> llamada <em>Times</em>. Se
        considera una buena práctica usar ambas, con <em>Times New Roman</em> como la
        alternativa preferida.
      </td>
    </tr>
    <tr>
      <td>Trebuchet MS</td>
      <td>sans-serif</td>
      <td>
        Debes tener cuidado al usar esta fuente: no está ampliamente disponible en
        sistemas operativos móviles.
      </td>
    </tr>
    <tr>
      <td>Verdana</td>
      <td>sans-serif</td>
      <td></td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Entre varios recursos, el sitio web [cssfontstack.com](https://www.cssfontstack.com/) mantiene una lista de fuentes seguras para la web disponibles en los sistemas operativos Windows y macOS, lo cual puede ayudarte a decidir qué consideras seguro para tu uso.

> [!NOTE]
> Existe una forma de descargar una fuente personalizada junto con una página web, que te permite personalizar el uso de fuentes como quieras: las **fuentes web**. Esto es un poco más complejo, y lo veremos en un [artículo aparte](/es/docs/Learn_web_development/Core/Text_styling/Web_fonts) más adelante en el módulo.

#### Fuentes predeterminadas

CSS define cinco nombres genéricos para las fuentes: `serif`, `sans-serif`, `monospace`, `cursive` y `fantasy`. Estos son muy genéricos, y la fuente exacta usada a partir de estos nombres genéricos puede variar entre cada navegador y cada sistema operativo en el que se muestren. Representa un _escenario en el peor de los casos_, en el que el navegador intentará dar lo mejor de sí para proporcionar una fuente que se vea apropiada. `serif`, `sans-serif` y `monospace` son bastante predecibles y deberían ofrecer algo razonable. Por otro lado, `cursive` y `fantasy` son menos predecibles, y recomendamos usarlas con mucho cuidado, probando sobre la marcha.

Los cinco nombres se definen de la siguiente manera:

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">Término</th>
      <th scope="col">Definición</th>
      <th scope="col">Ejemplo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>serif</code></td>
      <td>
        Fuentes que tienen serifas (los adornos y otros pequeños detalles que ves
        en los extremos de los trazos en algunos tipos de letra).
      </td>
      <td id="serif-example">
        <pre class="brush: html hidden">My big red elephant</pre>
        <pre class="brush: css hidden">
body {
  font-family: serif;
}</pre
        >
        {{EmbedLiveSample("serif-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td><code>sans-serif</code></td>
      <td>Fuentes que no tienen serifas.</td>
      <td id="sans-serif-example">
        <pre class="brush: html hidden">My big red elephant</pre>
        <pre class="brush: css hidden">
body {
  font-family: sans-serif;
}</pre
        >
        {{EmbedLiveSample("sans-serif-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td><code>monospace</code></td>
      <td>
        Fuentes en las que cada carácter tiene el mismo ancho, típicamente usadas
        en listados de código.
      </td>
      <td id="monospace-example">
        <pre class="brush: html hidden">My big red elephant</pre>
        <pre class="brush: css hidden">
body {
  font-family: monospace;
}</pre
        >
        {{EmbedLiveSample("monospace-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td><code>cursive</code></td>
      <td>
        Fuentes destinadas a imitar la escritura a mano, con trazos fluidos y
        conectados.
      </td>
      <td id="cursive-example">
        <pre class="brush: html hidden">My big red elephant</pre>
        <pre class="brush: css hidden">
body {
  font-family: cursive;
}</pre
        >
        {{EmbedLiveSample("cursive-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td><code>fantasy</code></td>
      <td>Fuentes destinadas a ser decorativas.</td>
      <td id="fantasy-example">
        <pre class="brush: html hidden">My big red elephant</pre>
        <pre class="brush: css hidden">
body {
  font-family: fantasy;
}</pre
        >
        {{EmbedLiveSample("fantasy-example", 100, 60)}}
      </td>
    </tr>
  </tbody>
</table>

#### Pilas de fuentes

Como no puedes garantizar la disponibilidad de las fuentes que quieres usar en tus páginas web (incluso una fuente web _podría_ fallar por alguna razón), puedes proporcionar una **pila de fuentes (font stack)** para que el navegador tenga varias fuentes entre las que elegir. Esto implica un valor de `font-family` que consiste en varios nombres de fuentes separados por comas, por ejemplo:

```css
p {
  font-family: "Trebuchet MS", "Verdana", sans-serif;
}
```

En ese caso, el navegador comienza por el principio de la lista y comprueba si esa fuente está disponible en la máquina. Si lo está, aplica esa fuente a los elementos seleccionados. Si no, pasa a la siguiente fuente, y así sucesivamente.

Es una buena idea proporcionar un nombre de fuente genérico adecuado al final de la pila, de modo que, si ninguna de las fuentes listadas está disponible, el navegador pueda al menos proporcionar algo aproximadamente adecuado. Para enfatizar este punto, a los párrafos se les asigna la fuente serif predeterminada del navegador si no hay otra opción disponible (que normalmente es Times New Roman), ¡lo cual no es adecuado para una fuente sans-serif!

> [!NOTE]
> Aunque puedes usar nombres de familias de fuentes que contienen un espacio, como `Trebuchet MS`, sin encerrar el nombre entre comillas, para evitar errores de escape se recomienda encerrar entre comillas los nombres de familias de fuentes que contengan espacios en blanco, dígitos o caracteres de puntuación distintos del guion.

> [!WARNING]
> Cualquier nombre de familia de fuente que pudiera interpretarse erróneamente como un nombre de familia genérico o una palabra clave de CSS debe ir entre comillas. Aunque los nombres de familias de fuentes pueden incluirse como un {{cssxref("custom-ident")}} o un {{cssxref("string")}}, los nombres de familias de fuentes que coincidan con el valor de una propiedad CSS global, como `initial` o `inherit`, o que tengan el mismo nombre que una de las familias de fuentes genéricas, como `sans-serif` o `fantasy`, deben incluirse como una cadena entre comillas. De lo contrario, el nombre de la familia de fuente se interpretará como la palabra clave CSS o el nombre de familia genérico equivalente. Cuando se usan como palabras clave, los nombres de familias de fuentes genéricas —`serif`, `sans-serif`, `monospace`, `cursive` y `fantasy`— y las palabras clave globales de CSS NO deben ir entre comillas, ya que las cadenas no se interpretan como palabras clave CSS.

#### Un ejemplo de font-family

Añadamos algo a nuestro ejemplo anterior, dándole a los párrafos una fuente sans-serif:

```css live-sample___2fonts live-sample___3font-style live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
p {
  color: red;
  font-family: "Helvetica", "Arial", sans-serif;
}
```

Esto nos da el siguiente resultado:

{{ EmbedLiveSample('2fonts', '100%', 220) }}

### Tamaño de fuente

En el artículo [Valores y unidades de CSS](/es/docs/Learn_web_development/Core/Styling_basics/Values_and_units) del módulo anterior, repasamos las unidades de longitud y tamaño. El tamaño de fuente (establecido con la propiedad {{cssxref("font-size")}}) puede tomar valores medidos en la mayoría de estas unidades (y otras, como los [porcentajes](/es/docs/Learn_web_development/Core/Styling_basics/Values_and_units#percentages)); sin embargo, las unidades más comunes que usarás para dimensionar el texto son:

- `px` (píxeles): la cantidad de píxeles de alto que quieres que tenga el texto. Esta es una unidad absoluta, es decir, produce el mismo valor computado final para la fuente en la página en prácticamente cualquier situación.
- `em`: 1 `em` es igual al tamaño de fuente establecido en el elemento padre del elemento actual al que estamos dando estilo (más específicamente, el ancho de una letra M mayúscula contenida dentro del elemento padre). Esto puede volverse complicado de calcular si tienes muchos elementos anidados con diferentes tamaños de fuente establecidos, pero es posible, como verás más abajo. ¿Por qué molestarse? Resulta bastante natural una vez que te acostumbras, y puedes usar `em` para dimensionar todo, no solo el texto. Puedes tener un sitio web entero dimensionado usando `em`, lo cual facilita el mantenimiento.
- `rem`: estas funcionan igual que `em`, excepto que 1 `rem` es igual al tamaño de fuente establecido en el elemento raíz del documento (es decir, {{htmlelement("html")}}), no en el elemento padre. Esto hace que sea mucho más fácil hacer los cálculos para determinar tus tamaños de fuente.

El `font-size` de un elemento se hereda del elemento padre de ese elemento. Todo esto comienza con el elemento raíz de todo el documento — {{htmlelement("html")}} — cuyo `font-size` estándar está establecido en `16px` en todos los navegadores. Cualquier párrafo (u otro elemento que no tenga un tamaño diferente establecido por el navegador) dentro del elemento raíz tendrá un tamaño final de `16px`. Otros elementos pueden tener tamaños predeterminados diferentes. Por ejemplo, un elemento {{htmlelement("Heading_Elements", "h1")}} tiene un tamaño de `2em` establecido por defecto, por lo que tendrá un tamaño final de `32px`.

Las cosas se vuelven más complicadas cuando empiezas a alterar el tamaño de fuente de elementos anidados. Por ejemplo, si tuvieras un elemento {{htmlelement("article")}} en tu página, y establecieras su `font-size` en 1.5 `em` (lo cual se computaría a un tamaño final de 24 `px`), y luego quisieras que los párrafos dentro de los elementos `<article>` tuvieran un tamaño de fuente computado de 20 `px`, ¿qué valor de `em` usarías?

```html
<!-- document base font-size is 16px -->
<article>
  <!-- If my font-size is 1.5em -->
  <p>My paragraph</p>
  <!-- How do I compute to 20px font-size? -->
</article>
```

Necesitarías establecer su valor `em` en 20/24, o 0.83333333 `em`. Los cálculos pueden ser complicados, así que debes tener cuidado con cómo das estilo a las cosas. Es mejor usar `rem` cuando puedas para mantener las cosas simples, y evitar establecer el `font-size` de elementos contenedores cuando sea posible.

### Estilo de fuente, peso de fuente, transformación de texto y decoración de texto

CSS ofrece cuatro propiedades comunes para alterar el peso visual/énfasis del texto:

- {{cssxref("font-style")}}: se usa para activar o desactivar el texto en cursiva. Los valores posibles son los siguientes (rara vez usarás esto, a menos que quieras desactivar algún estilo en cursiva por alguna razón):
  - `normal`: establece el texto con la fuente normal (desactiva cualquier cursiva existente).
  - `italic`: establece el texto para usar la versión en cursiva de la fuente, si está disponible; si no, simulará la cursiva usando oblicua en su lugar.
  - `oblique`: establece el texto para usar una versión simulada de una fuente en cursiva, creada inclinando la versión normal.

- {{cssxref("font-weight")}}: establece qué tan negrita es el texto. Tiene muchos valores disponibles por si tienes muchas variantes de fuente disponibles (como _-light_, _-normal_, _-bold_, _-extrabold_, _-black_, etc.), pero en la práctica rara vez usarás alguno que no sea `normal` y `bold`:
  - `normal`, `bold`: peso de fuente normal y negrita.
  - `lighter`, `bolder`: establece el grosor del elemento actual para que sea un paso más ligero o más pesado que el grosor de su elemento padre.
  - `100` – `900`: valores numéricos de grosor que proporcionan un control más fino que las palabras clave anteriores, si es necesario.

- {{cssxref("text-transform")}}: te permite establecer que tu fuente sea transformada. Los valores incluyen:
  - `none`: evita cualquier transformación.
  - `uppercase`: transforma todo el texto a mayúsculas.
  - `lowercase`: transforma todo el texto a minúsculas.
  - `capitalize`: transforma todas las palabras para que tengan la primera letra en mayúscula.
  - `full-width`: transforma todos los glifos para que se escriban dentro de un cuadrado de ancho fijo, similar a una fuente monoespaciada, permitiendo alinear, por ejemplo, caracteres latinos junto con glifos de idiomas asiáticos (como chino, japonés, coreano).

- {{cssxref("text-decoration")}}: establece/quita decoraciones de texto en las fuentes (principalmente lo usarás para quitar el subrayado predeterminado de los enlaces al darles estilo). Los valores disponibles son:
  - `none`: quita cualquier decoración de texto ya presente.
  - `underline`: subraya el texto.
  - `overline`: le da al texto una línea superior.
  - `line-through`: pone una línea que atraviesa el texto (tachado).

  Debes tener en cuenta que {{cssxref("text-decoration")}} puede aceptar múltiples valores a la vez si quieres añadir varias decoraciones simultáneamente, por ejemplo, `text-decoration: underline overline`. Ten en cuenta también que {{cssxref("text-decoration")}} es una propiedad abreviada de {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}} y {{cssxref("text-decoration-color")}}. Puedes usar combinaciones de estos valores de propiedad para crear efectos interesantes, por ejemplo: `text-decoration: line-through red wavy`.

Veamos cómo añadir algunas de estas propiedades a nuestro ejemplo:

```css live-sample___3font-style live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
html {
  font-size: 10px;
}

h1 {
  font-size: 5rem;
  text-transform: capitalize;
}

h1 + p {
  font-weight: bold;
}

p {
  font-size: 1.5rem;
  color: red;
  font-family: "Helvetica", "Arial", sans-serif;
}
```

Nuestro nuevo resultado se ve así:

{{ EmbedLiveSample('3font-style', '100%', 260) }}

### Sombras de texto

Puedes aplicar sombras a tu texto usando la propiedad {{cssxref("text-shadow")}}. Esta puede tomar hasta cuatro valores, como se muestra en el ejemplo a continuación:

```css
text-shadow: 4px 4px 5px red;
```

Las cuatro propiedades son las siguientes:

1. El desplazamiento horizontal de la sombra respecto al texto original: puede tomar la mayoría de las [unidades de longitud y tamaño](/es/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) de CSS disponibles, pero lo más común es que uses `px`; los valores positivos mueven la sombra hacia la derecha, y los negativos hacia la izquierda. Este valor debe incluirse.
2. El desplazamiento vertical de la sombra respecto al texto original. Se comporta de forma similar al desplazamiento horizontal, excepto que mueve la sombra hacia arriba/abajo, no hacia la izquierda/derecha. Este valor debe incluirse.
3. El radio de desenfoque: un valor más alto significa que la sombra se dispersa más ampliamente. Si este valor no se incluye, el valor predeterminado es 0, lo que significa sin desenfoque. Puede tomar la mayoría de las [unidades de longitud y tamaño](/es/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) de CSS disponibles.
4. El color base de la sombra, que puede tomar cualquier [unidad de color CSS](/es/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color). Si no se incluye, el valor predeterminado es [`currentColor`](/es/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword), es decir, el color de la sombra se toma de la propiedad {{cssxref("color")}} del elemento.

#### Múltiples sombras

Puedes aplicar múltiples sombras al mismo texto incluyendo varios valores de sombra separados por comas, por ejemplo:

```css live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
h1 {
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
}
```

Si aplicáramos esto al elemento {{htmlelement("Heading_Elements", "&lt;h1>")}} en nuestro ejemplo de Tommy The Cat, terminaríamos con esto:

{{ EmbedLiveSample('4shadows', '100%', 260) }}

> [!NOTE]
> Puedes ver ejemplos más interesantes del uso de `text-shadow` en el artículo de Sitepoint [Moonlighting with CSS text-shadow](https://www.sitepoint.com/moonlighting-css-text-shadow/).

## Diseño de texto

Con las propiedades básicas de fuente ya cubiertas, veamos las propiedades que podemos usar para afectar el diseño del texto.

### Alineación de texto

La propiedad {{cssxref("text-align")}} se usa para controlar cómo se alinea el texto dentro de su cuadro de contenido contenedor. Los valores disponibles se listan a continuación. Funcionan de manera muy similar a como lo hacen en una aplicación de procesador de texto normal:

- `left`: justifica el texto a la izquierda.
- `right`: justifica el texto a la derecha.
- `center`: centra el texto.
- `justify`: hace que el texto se extienda, variando los espacios entre las palabras para que todas las líneas de texto tengan el mismo ancho. Debes usar esto con cuidado; puede verse fatal, especialmente cuando se aplica a un párrafo con muchas palabras largas. Si vas a usar esto, también deberías considerar usar algo más junto con ello, como {{cssxref("hyphens")}}, para dividir algunas de las palabras más largas entre líneas.

Si aplicáramos `text-align: center;` al elemento {{htmlelement("Heading_Elements", "&lt;h1>")}} en nuestro ejemplo, terminaríamos con esto:

```css hidden live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
h1 {
  text-align: center;
}
```

{{ EmbedLiveSample('5text-align', '100%', 260) }}

### Altura de línea

La propiedad {{cssxref("line-height")}} establece la altura de cada línea de texto. Esta propiedad no solo puede tomar la mayoría de las [unidades de longitud y tamaño](/es/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths), sino que también puede tomar un valor sin unidad, que actúa como un multiplicador y generalmente se considera la mejor opción. Con un valor sin unidad, el {{cssxref("font-size")}} se multiplica y da como resultado el `line-height`. El texto del cuerpo generalmente se ve mejor y es más fácil de leer cuando las líneas están espaciadas. La altura de línea recomendada es de alrededor de 1.5 a 2 (doble espacio). Para establecer nuestras líneas de texto a 1.6 veces la altura de la fuente, usaríamos:

```css live-sample___6line-height live-sample___7letter-word-spacing
p {
  line-height: 1.6;
}
```

Aplicar esto a los elementos {{htmlelement("p")}} en nuestro ejemplo nos daría este resultado:

{{ EmbedLiveSample('6line-height', '100%', 300) }}

### Espaciado entre letras y palabras

Las propiedades {{cssxref("letter-spacing")}} y {{cssxref("word-spacing")}} te permiten establecer el espaciado entre letras y palabras en tu texto. No las usarás muy a menudo, pero podrías encontrarles utilidad para lograr un aspecto específico, o para mejorar la legibilidad de una fuente particularmente densa. Pueden tomar la mayoría de las [unidades de longitud](/es/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths).

Para ilustrarlo, podríamos aplicar algo de espaciado entre palabras y letras a la primera línea de cada elemento {{htmlelement("p")}} en nuestra muestra de HTML con:

```css live-sample___7letter-word-spacing
p::first-line {
  letter-spacing: 4px;
  word-spacing: 4px;
}
```

Esto renderiza nuestro HTML como:

{{ EmbedLiveSample('7letter-word-spacing', '100%', 330) }}

### Otras propiedades que vale la pena revisar

Las propiedades anteriores te dan una idea de cómo empezar a dar estilo al texto en una página web, pero hay muchas más propiedades que podrías usar. Aquí solo quisimos cubrir las más importantes. Una vez que te hayas acostumbrado a usar las anteriores, también deberías explorar las siguientes:

Estilos de fuente:

- {{cssxref("font-variant")}}: alterna entre versalitas y las alternativas de fuente normal.
- {{cssxref("font-kerning")}}: activa y desactiva las opciones de interletraje (kerning) de la fuente.
- {{cssxref("font-feature-settings")}}: activa y desactiva varias características de fuentes [OpenType](https://es.wikipedia.org/wiki/OpenType).
- {{cssxref("font-variant-alternates")}}: controla el uso de glifos alternativos para una fuente determinada.
- {{cssxref("font-variant-caps")}}: controla el uso de glifos de mayúsculas alternativos.
- {{cssxref("font-variant-east-asian")}}: controla el uso de glifos alternativos para escrituras del este de Asia, como el japonés y el chino.
- {{cssxref("font-variant-ligatures")}}: controla qué ligaduras y formas contextuales se usan en el texto.
- {{cssxref("font-variant-numeric")}}: controla el uso de glifos alternativos para números, fracciones y marcadores ordinales.
- {{cssxref("font-variant-position")}}: controla el uso de glifos alternativos de tamaños más pequeños posicionados como superíndice o subíndice.
- {{cssxref("font-size-adjust")}}: ajusta el tamaño visual de la fuente independientemente de su tamaño de fuente real.
- {{cssxref("font-stretch")}}: alterna entre las posibles versiones alternativas estiradas de una fuente determinada.
- {{cssxref("text-underline-position")}}: especifica la posición de los subrayados establecidos usando el valor `underline` de la propiedad `text-decoration-line`.
- {{cssxref("text-rendering")}}: intenta realizar alguna optimización en el renderizado del texto.

Estilos de diseño de texto:

- {{cssxref("text-indent")}}: especifica cuánto espacio horizontal debe dejarse antes del inicio de la primera línea del contenido de texto.
- {{cssxref("text-overflow")}}: define cómo se les señala a los usuarios el contenido desbordado que no se muestra.
- {{cssxref("white-space")}}: define cómo se manejan los espacios en blanco y los saltos de línea asociados dentro del elemento.
- {{cssxref("word-break")}}: especifica si se deben dividir las líneas dentro de las palabras.
- {{cssxref("direction")}}: define la dirección del texto. (Esto depende del idioma y, por lo general, es mejor dejar que HTML se encargue de esa parte, ya que está vinculada al contenido del texto).
- {{cssxref("hyphens")}}: activa y desactiva la separación silábica (guionado) para los idiomas compatibles.
- {{cssxref("line-break")}}: relaja o refuerza la separación de líneas para idiomas asiáticos.
- {{cssxref("text-align-last")}}: define cómo se alinea la última línea de un bloque o de una línea, justo antes de un salto de línea forzado.
- {{cssxref("text-orientation")}}: define la orientación del texto en una línea.
- {{cssxref("overflow-wrap")}}: especifica si el navegador puede o no dividir líneas dentro de las palabras para evitar el desbordamiento.
- {{cssxref("writing-mode")}}: define si las líneas de texto se disponen horizontal o verticalmente y la dirección en la que fluyen las líneas siguientes.

## Propiedad abreviada de fuente

Muchas propiedades de fuente también pueden establecerse a través de la propiedad abreviada {{cssxref("font")}}. Estas se escriben en el siguiente orden: {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}, {{cssxref("font-stretch")}}, {{cssxref("font-size")}}, {{cssxref("line-height")}}, y {{cssxref("font-family")}}.

Entre todas estas propiedades, solo `font-size` y `font-family` son obligatorias al usar la propiedad abreviada `font`.

Se debe colocar una barra diagonal entre las propiedades {{cssxref("font-size")}} y {{cssxref("line-height")}}.

Un ejemplo completo se vería así:

```css
font:
  italic normal bold normal 3em/1.5 "Helvetica",
  "Arial",
  sans-serif;
```

## Jugando con el estilo del texto

Bien, ahora te toca a ti. Para esta tarea, no tenemos ningún ejercicio específico para que hagas. Solo nos gustaría que jugaras un poco con algunas propiedades de fuente/diseño de texto. ¡Descubre por ti mismo qué puedes lograr!

1. Haz clic en **"Play"** en el bloque de código a continuación para editar el ejemplo en el MDN Playground.
2. Añade algunas declaraciones a la regla `p { }` vacía proporcionada para cambiar el estilo del texto proporcionado. Sé todo lo creativo que quieras.

Si cometes un error, puedes borrar tu trabajo usando el botón _Reset_ en el MDN Playground. Consulta las secciones anteriores del artículo para encontrar más información sobre los estilos de fuente y texto que puedes establecer.

```html live-sample___fonts_text
<p>Some sample text for your delight</p>
```

```css-nolint live-sample___fonts_text
p {

}
```

{{ EmbedLiveSample('fonts_text', "100%", 60) }}

## Resumen

¡Esperamos que hayas disfrutado jugando con el texto en este artículo! El siguiente artículo te dará todo lo que necesitas saber sobre cómo dar estilo a las listas en HTML.

## Véase también

- [All about the CSS font-family property](https://explainers.dev/font-family/), explainers.dev
- [Web-safe fonts](https://scrimba.com/the-frontend-developer-career-path-c0j/~02b?via=mdn), Scrimba <sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}
