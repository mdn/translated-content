---
title: Diseño web adaptable
slug: Learn_web_development/Core/CSS_layout/Responsive_Design
l10n:
  sourceCommit: 4c58f4735f986a91bee1b77e336143630df727a2
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}

El _diseño web adaptable_ (RWD, _responsive web design_) es un enfoque de diseño web para que las páginas web se vean bien en todos los tamaños y resoluciones de pantalla, garantizando a la vez una buena usabilidad. Es la forma de diseñar para una web multidispositivo. En este artículo te ayudaremos a entender algunas técnicas que puedes usar para dominarlo.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        <a href="/es/docs/Learn_web_development/Core/Structuring_content"
          >Estructurar el contenido con HTML</a
        >,
        <a href="/es/docs/Learn_web_development/Core/Styling_basics">Fundamentos de estilo con CSS</a>,
        <a href="/es/docs/Learn_web_development/Core/Text_styling/Fundamentals">Estilos fundamentales de texto y fuentes</a>,
        y estar familiarizado con los <a href="/es/docs/Learn_web_development/Core/CSS_layout/Introduction">conceptos fundamentales del diseño con CSS</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>Qué es el diseño adaptable: diseñar los diseños web para que sean flexibles y funcionen bien en distintos tamaños de pantalla, resoluciones, etc.</li>
          <li>La relación entre las herramientas de diseño modernas, como grid y flexbox, y el diseño adaptable.</li>
          <li>Los conceptos en los que se basa el uso de las consultas de medios para el diseño adaptable, incluidos el enfoque «primero móvil» (<em>mobile first</em>) y los puntos de ruptura.</li>
          <li>Por qué hace falta <code>&lt;meta viewport=""&gt;</code> para que los documentos web se muestren correctamente en los dispositivos móviles.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## El precursor del diseño adaptable: el diseño web para móviles

Antes de que el diseño web adaptable se convirtiera en el enfoque estándar para que los sitios web funcionaran en distintos tipos de dispositivos, los desarrolladores web hablaban de diseño web para móviles, desarrollo web para móviles o, a veces, diseño apto para móviles. Básicamente son lo mismo que el diseño web adaptable: el objetivo es asegurarse de que los sitios web funcionen bien en dispositivos con distintas características físicas (tamaño de pantalla, resolución) en cuanto al diseño, el contenido (texto y multimedia) y el rendimiento.

La diferencia tiene que ver sobre todo con los dispositivos implicados y con las tecnologías disponibles para crear soluciones:

- Antes hablábamos de escritorio o móvil, pero ahora hay muchos tipos de dispositivos disponibles, como equipos de escritorio, portátiles, móviles, tabletas, relojes, etc. En lugar de atender a unos pocos tamaños de pantalla distintos, ahora tenemos que diseñar los sitios de forma defensiva para atender a los tamaños y resoluciones de pantalla habituales, además de a los desconocidos.
- Antes, los dispositivos móviles tenían poca potencia en cuanto a CPU/GPU y ancho de banda disponible. Algunos no admitían CSS o ni siquiera HTML y, por eso, era habitual detectar el navegador en el servidor para determinar el tipo de dispositivo o navegador antes de servir un sitio que el dispositivo pudiera manejar. A menudo se servían a los dispositivos móviles experiencias muy sencillas y básicas, porque era todo lo que podían manejar. Hoy en día, los dispositivos móviles pueden manejar las mismas tecnologías que las computadoras de escritorio, así que estas técnicas son menos habituales.
  - Aun así, deberías usar las técnicas que se tratan en este artículo para ofrecer a los usuarios móviles una experiencia adecuada, porque todavía hay limitaciones como la duración de la batería y el ancho de banda de las que preocuparse.
  - La experiencia de usuario sigue siendo importante. Por ejemplo, un usuario móvil de un sitio de viajes quizá solo quiera consultar los horarios y los retrasos de los vuelos, y no que le muestren un globo terráqueo animado en 3D con las rutas de vuelo y la historia de tu empresa.
- Las tecnologías modernas son mucho mejores para crear experiencias adaptables. Por ejemplo, las [tecnologías de imágenes y multimedia adaptables](#imágenes_y_multimedia_adaptables) permiten ahora servir el contenido multimedia adecuado a cada dispositivo sin tener que recurrir a técnicas como la detección en el servidor.

## Introducción al diseño web adaptable

HTML es fundamentalmente adaptable, o _fluido_. Si creas una página web que solo contenga HTML, sin CSS, y cambias el tamaño de la ventana, el navegador redistribuirá automáticamente el texto para que quepa en el viewport.

Aunque el comportamiento adaptable predeterminado pueda hacer pensar que no hace falta ninguna solución, las líneas de texto largas que se muestran a pantalla completa en un monitor ancho pueden ser difíciles de leer. Este problema se puede resolver con CSS, por ejemplo, creando columnas estrechas para limitar la longitud de las líneas. Sin embargo, esto puede crear problemas nuevos para los usuarios que estrechan la ventana del navegador o ven el sitio en un dispositivo móvil: las columnas se verán aplastadas y serán más difíciles de leer.

![Un diseño con dos columnas aplastadas en un viewport de tamaño móvil.](mdn-rwd-liquid.png)

Crear una página web que no cambie de tamaño estableciendo un ancho fijo tampoco funciona: provoca barras de desplazamiento en los dispositivos estrechos y demasiado espacio vacío en las pantallas anchas.

El diseño web adaptable, o RWD, es un enfoque de diseño que tiene en cuenta toda la gama de dispositivos y tamaños de dispositivo disponibles, y permite adaptarse automáticamente a la pantalla, ya se vea el contenido en una tableta, un teléfono, una televisión o un reloj.

El diseño web adaptable no es una tecnología independiente, sino un enfoque. Es un término que se usa para describir un conjunto de buenas prácticas que sirven para crear un diseño que pueda _adaptarse_ a cualquier dispositivo con el que se vea el contenido.

El término _diseño adaptable_ (_responsive design_), [acuñado por Ethan Marcotte en 2010](https://alistapart.com/article/responsive-web-design/), describía el uso de cuadrículas fluidas, imágenes fluidas y consultas de medios para crear contenido adaptable.

En aquella época, lo recomendado era usar `float` de CSS para el diseño y consultas de medios para consultar el ancho del navegador, creando diseños para distintos puntos de ruptura. Las imágenes fluidas se configuran para no superar el ancho de su contenedor: su propiedad `max-width` se establece en `100%`. Las imágenes fluidas se reducen cuando la columna que las contiene se estrecha, pero no crecen más allá de su tamaño intrínseco cuando la columna se ensancha. Esto permite que una imagen se reduzca para caber en su contenido en lugar de desbordarlo, pero que no crezca y se pixele si el contenedor se vuelve más ancho que la imagen.

Los métodos de diseño modernos de CSS son adaptables por naturaleza y, desde la publicación del artículo de Marcotte, tenemos multitud de características integradas en la plataforma web que facilitan el diseño de sitios adaptables.

El resto de este artículo explica las distintas características de la plataforma web que quizá quieras usar al crear un sitio adaptable.

## Consultas de medios

Las [consultas de medios](/es/docs/Web/CSS/Guides/Media_queries/Using) nos permiten hacer una serie de pruebas (por ejemplo, si la pantalla del usuario es más ancha que cierto ancho o tiene más de cierta resolución) y aplicar CSS de forma selectiva para dar a la página el estilo adecuado a las necesidades del usuario.

Por ejemplo, la siguiente consulta de medios comprueba si la página web actual se muestra como un medio de pantalla (y, por tanto, no es un documento impreso) y si el viewport tiene al menos `80rem` de ancho. La regla `.container` solo se aplicará si se cumplen estas dos condiciones.

```css
@media screen and (width >= 80rem) {
  .container {
    margin: 1em 2em;
  }
}
```

Puedes añadir varias consultas de medios en una hoja de estilo, para ajustar todo el diseño o partes de él a los distintos tamaños de pantalla. Los puntos en los que se introduce una consulta de medios y cambia el diseño se llaman _puntos de ruptura_ (_breakpoints_).

Un enfoque habitual al usar consultas de medios es crear un diseño sencillo de una sola columna para los dispositivos de pantalla estrecha (por ejemplo, los teléfonos móviles) y después comprobar si hay pantallas más anchas e implementar un diseño de varias columnas cuando sabes que hay suficiente ancho de pantalla para ello. Diseñar primero para móviles se conoce como diseño **primero móvil** (_mobile first_).

Si usas puntos de ruptura, las buenas prácticas recomiendan definirlos con [unidades relativas](/es/docs/Learn_web_development/Core/Styling_basics/Values_and_units#unidades_de_longitud_relativa) en lugar de con los tamaños absolutos de un dispositivo concreto.

Hay distintos enfoques para los estilos definidos dentro de un bloque de consulta de medios, desde usar consultas de medios para enlazar hojas de estilo con {{htmlelement("link")}} según rangos de tamaño del navegador hasta incluir solo variables de propiedades personalizadas que guardan los valores asociados a cada punto de ruptura.

Las consultas de medios pueden ayudar con el RWD, pero no son imprescindibles. Las cuadrículas flexibles, las unidades relativas y los valores mínimos y máximos de las unidades se pueden usar sin consultas de medios.

> [!NOTE]
> Scrimba tiene un tutorial llamado [Aside: Media queries](https://scrimba.com/frontend-path-c0j/~0j3?via=mdn) <sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#enlaces_externos_o_embebidos)</sup>, que ofrece una introducción interactiva a las consultas de medios y un desafío para comprobar que entiendes lo básico.

## Tecnologías de diseño adaptable

Los sitios adaptables se construyen sobre cuadrículas flexibles, lo que significa que no tienes que crear diseños perfectos al píxel para cada tamaño de dispositivo posible.

Con una cuadrícula flexible, puedes cambiar una característica o añadir un punto de ruptura y cambiar el diseño en el momento en que el contenido empieza a verse mal. Por ejemplo, para que las líneas no se vuelvan ilegiblemente largas a medida que aumenta el tamaño de la pantalla, puedes usar {{cssxref('columns')}}; si una caja se aplasta y queda con dos palabras por línea al estrecharse, puedes establecer un punto de ruptura.

Varios métodos de diseño, como [Flexbox](/es/docs/Learn_web_development/Core/CSS_layout/Flexbox) y [CSS Grid](/es/docs/Learn_web_development/Core/CSS_layout/Grids), son adaptables de forma predeterminada. Todos dan por sentado que intentas crear una cuadrícula flexible y te ofrecen formas más sencillas de hacerlo.

### Flexbox

En flexbox, los elementos flexibles se encogen o crecen, repartiendo el espacio entre ellos según el espacio de su contenedor. Cambiando los valores de `flex-grow` y `flex-shrink` puedes indicar cómo quieres que se comporten los elementos cuando tienen más o menos espacio a su alrededor.

En el ejemplo de abajo, cada elemento flexible ocupará la misma cantidad de espacio en el contenedor flexible, usando la forma abreviada `flex: 1`, como vimos antes (consulta [Flexbox: dimensionamiento flexible de los elementos flexibles](/es/docs/Learn_web_development/Core/CSS_layout/Flexbox#dimensionamiento_flexible_de_elementos_flexibles)).

```css
.container {
  display: flex;
}

.item {
  flex: 1;
}
```

Así es como podríamos usar flexbox con una consulta de medios para un diseño adaptable.

```html live-sample___flex-based-rwd
<div class="wrapper">
  <div class="col1">
    <p>
      Este diseño es adaptable. Mira qué pasa si haces la ventana del navegador
      más ancha o más estrecha.
    </p>
  </div>
  <div class="col2">
    <p>
      Una noche de noviembre de 1782, según cuenta la historia, dos hermanos
      estaban sentados junto al fuego en la pequeña ciudad francesa de Annonay,
      observando cómo las volutas de humo gris del hogar subían por la ancha
      chimenea. Se llamaban Stephen y Joseph Montgolfier, eran fabricantes de
      papel de oficio y tenían fama de ser reflexivos y de sentir un profundo
      interés por todo el conocimiento científico y los nuevos descubrimientos.
    </p>
    <p>
      Antes de aquella noche (una noche memorable, como se demostraría), cientos
      de millones de personas habían visto subir las volutas de humo de sus
      fuegos sin sacar de ello ninguna inspiración especial.
    </p>
  </div>
</div>
```

```css hidden live-sample___flex-based-rwd
body {
  font: 1.2em / 1.5 sans-serif;
  margin: 20px;
  padding: 0;
  background-color: #eeeeee;
}
.wrapper {
  max-width: 960px;
  margin: 2em auto;
}

.col1,
.col2 {
  background-color: white;
}
```

```css live-sample___flex-based-rwd
@media screen and (width >= 600px) {
  .wrapper {
    display: flex;
  }

  .col1 {
    flex: 1;
    margin-right: 5%;
  }

  .col2 {
    flex: 2;
  }
}
```

{{EmbedLiveSample("flex-based-rwd", "", "550px")}}

Cambia el tamaño de la ventana del navegador. El diseño pasará de una columna a dos columnas cuando el tamaño del ejemplo anterior cruce el umbral de `600px` de ancho.

### CSS grid

En el diseño de cuadrícula de CSS, la unidad `fr` permite repartir el espacio disponible entre las pistas de la cuadrícula. El siguiente ejemplo crea un contenedor de cuadrícula con tres pistas de tamaño `1fr`. Esto creará tres pistas de columna, cada una de las cuales ocupará una parte del espacio disponible en el contenedor. Ya viste este enfoque antes (consulta [Cuadrículas flexibles con la unidad fr](/es/docs/Learn_web_development/Core/CSS_layout/Grids#cuadrículas_flexibles_con_la_unidad_fr) para repasarlo).

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Así es como podríamos usar el diseño de cuadrícula con una consulta de medios para un diseño adaptable.

```html live-sample___grid-based-rwd
<div class="wrapper">
  <div class="col1">
    <p>
      Este diseño es adaptable. Mira qué pasa si haces la ventana del navegador
      más ancha o más estrecha.
    </p>
  </div>
  <div class="col2">
    <p>
      Una noche de noviembre de 1782, según cuenta la historia, dos hermanos
      estaban sentados junto al fuego en la pequeña ciudad francesa de Annonay,
      observando cómo las volutas de humo gris del hogar subían por la ancha
      chimenea. Se llamaban Stephen y Joseph Montgolfier, eran fabricantes de
      papel de oficio y tenían fama de ser reflexivos y de sentir un profundo
      interés por todo el conocimiento científico y los nuevos descubrimientos.
    </p>
    <p>
      Antes de aquella noche (una noche memorable, como se demostraría), cientos
      de millones de personas habían visto subir las volutas de humo de sus
      fuegos sin sacar de ello ninguna inspiración especial.
    </p>
  </div>
</div>
```

```css hidden live-sample___grid-based-rwd
body {
  font: 1.2em / 1.5 sans-serif;
  margin: 20px;
  padding: 0;
  background-color: #eeeeee;
}
.wrapper {
  max-width: 960px;
  margin: 2em auto;
}

.col1,
.col2 {
  background-color: white;
}
```

```css live-sample___grid-based-rwd
@media screen and (width >= 600px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 5%;
  }
}
```

{{EmbedLiveSample("grid-based-rwd", "", "550px")}}

De nuevo, prueba a cambiar el tamaño de la ventana del navegador: deberías ver que el diseño del ejemplo cambia en el umbral de `600px` de ancho, igual que en el ejemplo anterior.

## Imágenes y multimedia adaptables

Para asegurarte de que el contenido multimedia nunca sea más grande que su contenedor adaptable, puedes usar el siguiente enfoque:

```css
img,
picture,
video {
  max-width: 100%;
}
```

Esto escala los elementos multimedia para asegurarse de que nunca desborden sus contenedores.

> [!NOTE]
> Usar una sola imagen grande y reducirla para que quepa en los dispositivos pequeños desperdicia ancho de banda, porque se descargan imágenes más grandes de lo necesario. Además, puede verse mal: una imagen apaisada, por ejemplo, puede verse bien en un monitor panorámico, pero ser difícil de ver en un dispositivo móvil, al que le iría mejor una imagen vertical. Estos problemas se pueden resolver con el elemento {{htmlelement("picture")}} y los atributos `srcset` y `sizes` de {{htmlelement("img")}}. Son características avanzadas que quedan fuera del alcance de este curso, pero puedes encontrar una guía detallada en [Imágenes adaptables](/es/docs/Web/HTML/Guides/Responsive_images).

Otros consejos útiles:

- Asegúrate siempre de usar un formato de imagen adecuado para las imágenes de tu sitio web (como PNG o JPG) y de optimizar el tamaño del archivo con un editor gráfico antes de ponerlas en tu sitio web.
- Puedes usar características de CSS como los [degradados](/es/docs/Web/CSS/Guides/Images/Using_gradients) y las [sombras](/es/docs/Web/CSS/Reference/Properties/box-shadow) para implementar efectos visuales sin usar imágenes.
- Puedes usar consultas de medios dentro del atributo media de los elementos {{htmlelement("source")}} anidados dentro de elementos {{htmlelement("video")}}/{{htmlelement("audio")}} para servir los archivos de video o audio adecuados a cada dispositivo (video y audio adaptables).

## Tipografía adaptable

La tipografía adaptable consiste en cambiar los tamaños de fuente dentro de consultas de medios o en usar unidades de viewport para reflejar la mayor o menor cantidad de espacio de pantalla disponible.

### Usar consultas de medios para una tipografía adaptable

En este ejemplo, queremos que nuestro encabezado de nivel 1 mida `4rem`, es decir, cuatro veces nuestro tamaño de fuente base. ¡Es un encabezado enorme! Solo queremos este encabezado gigante en los tamaños de pantalla más grandes, así que primero le damos al encabezado un tamaño menor de `2rem` y después usamos consultas de medios para sobrescribirlo con el tamaño mayor si sabemos que el usuario tiene una pantalla de al menos `1200px` de ancho.

```css
html {
  font-size: 1em;
}

h1 {
  font-size: 2rem;
}

@media (width >= 1200px) {
  h1 {
    font-size: 4rem;
  }
}
```

El siguiente ejemplo es una versión modificada de nuestro ejemplo anterior de cuadrícula adaptable, que incluye un encabezado adaptable con el método descrito. En móviles, el encabezado es más pequeño, pero en el escritorio vemos el encabezado de mayor tamaño:

```html live-sample___type-rwd
<div class="wrapper">
  <div class="col1">
    <h1>¡Mira mi tamaño!</h1>
    <p>
      Este diseño es adaptable. Mira qué pasa si haces la ventana del navegador
      más ancha o más estrecha.
    </p>
  </div>
  <div class="col2">
    <p>
      Una noche de noviembre de 1782, según cuenta la historia, dos hermanos
      estaban sentados junto al fuego en la pequeña ciudad francesa de Annonay,
      observando cómo las volutas de humo gris del hogar subían por la ancha
      chimenea. Se llamaban Stephen y Joseph Montgolfier, eran fabricantes de
      papel de oficio y tenían fama de ser reflexivos y de sentir un profundo
      interés por todo el conocimiento científico y los nuevos descubrimientos.
    </p>
    <p>
      Antes de aquella noche (una noche memorable, como se demostraría), cientos
      de millones de personas habían visto subir las volutas de humo de sus
      fuegos sin sacar de ello ninguna inspiración especial.
    </p>
  </div>
</div>
```

```css live-sample___type-rwd
html {
  font-size: 1em;
}

body {
  font:
    1.2em "Helvetica",
    "Arial",
    sans-serif;
  margin: 20px;
  padding: 0;
  background-color: #eeeeee;
}
.wrapper {
  max-width: 960px;
  margin: 2em auto;
}

h1 {
  font-size: 2rem;
  margin: 0;
}

.col1,
.col2 {
  background-color: white;
}

@media screen and (width >= 600px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 5%;
  }

  h1 {
    font-size: 4rem;
  }
}
```

{{EmbedLiveSample("type-rwd", "", "550px")}}

Como en los ejemplos anteriores, prueba a cambiar el ancho de la ventana del navegador y fíjate en que, en el umbral de `600px` de ancho, no solo cambia el diseño, sino también el tamaño del encabezado.

Como muestra este enfoque de la tipografía, no tienes por qué limitar las consultas de medios a cambiar solo el diseño de la página. Se pueden usar para ajustar cualquier elemento y hacerlo más usable o atractivo en otros tamaños de pantalla.

### Usar unidades de viewport para una tipografía adaptable

Las unidades de viewport `vw` también se pueden usar para conseguir una tipografía adaptable, sin necesidad de establecer puntos de ruptura con consultas de medios. `1vw` equivale al uno por ciento del ancho del viewport, lo que significa que, si estableces el tamaño de fuente con `vw`, siempre estará relacionado con el tamaño del viewport.

```css
h1 {
  font-size: 6vw;
}
```

El problema de hacer lo anterior es que el usuario pierde la posibilidad de hacer zoom en el texto establecido con la unidad `vw`, porque ese texto siempre está relacionado con el tamaño del viewport. **Por lo tanto, nunca deberías establecer el texto solo con unidades de viewport**.

Hay una solución, que consiste en usar {{cssxref("calc()")}}. Si sumas la unidad `vw` a un valor establecido con un tamaño fijo, como `em` o `rem`, el texto seguirá pudiendo ampliarse. Básicamente, la unidad `vw` se suma a ese valor ampliado:

```css
h1 {
  font-size: calc(1.5rem + 4vw);
}
```

Esto significa que solo tenemos que especificar una vez el tamaño de fuente del encabezado, en lugar de establecerlo para móviles y redefinirlo en las consultas de medios. Así, la fuente aumenta gradualmente a medida que aumenta el tamaño del viewport.

```html live-sample___type-vw
<div class="wrapper">
  <div class="col1">
    <h1>¡Mira mi tamaño!</h1>
    <p>
      Este diseño es adaptable. Mira qué pasa si haces la ventana del navegador
      más ancha o más estrecha.
    </p>
  </div>
  <div class="col2">
    <p>
      Una noche de noviembre de 1782, según cuenta la historia, dos hermanos
      estaban sentados junto al fuego en la pequeña ciudad francesa de Annonay,
      observando cómo las volutas de humo gris del hogar subían por la ancha
      chimenea. Se llamaban Stephen y Joseph Montgolfier, eran fabricantes de
      papel de oficio y tenían fama de ser reflexivos y de sentir un profundo
      interés por todo el conocimiento científico y los nuevos descubrimientos.
    </p>
  </div>
</div>
```

```css live-sample___type-vw
body {
  font: 1.2em / 1.5 sans-serif;
  margin: 20px;
  padding: 0;
  background-color: #eeeeee;
}

.wrapper {
  max-width: 960px;
  margin: 2em auto;
}

h1 {
  font-size: calc(1.5rem + 4vw);
  margin: 0;
}

.col1,
.col2 {
  background-color: white;
}

@media screen and (width >= 600px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 5%;
  }
}
```

{{EmbedLiveSample("type-vw", "", "550px")}}

Prueba a cambiar el tamaño de la ventana del navegador, como antes, y fíjate en que esta vez el tamaño del encabezado aumenta _gradualmente_ a medida que cambia el ancho.

## La etiqueta meta viewport

Si miras el código fuente HTML de una página adaptable, normalmente verás la siguiente etiqueta {{htmlelement("meta")}} en el `<head>` del documento.

```html
<meta name="viewport" content="width=device-width" />
```

Esta etiqueta meta [`viewport`](/es/docs/Web/HTML/Reference/Elements/meta/name/viewport) indica a los navegadores móviles que deben establecer el ancho del viewport en el ancho del dispositivo, lo que muestra el documento con el tamaño optimizado para móviles que pretendías.

¿Por qué hace falta? Porque los navegadores móviles suelen mentir sobre el ancho de su viewport.

Esta etiqueta meta existe porque, cuando llegaron los primeros teléfonos inteligentes, la mayoría de los sitios no estaban optimizados para móviles. Por eso, el navegador móvil establecía el ancho del viewport en 980 píxeles, representaba la página con ese ancho y mostraba el resultado como una versión reducida del diseño de escritorio. Los usuarios podían hacer zoom y desplazarse por el sitio web para ver las partes que les interesaban, pero quedaba mal.

Al establecer `width=device-width`, sustituyes el valor predeterminado del dispositivo móvil, como el `width=980px` predeterminado del iPhone, por el ancho real del dispositivo. Sin ella, tu diseño adaptable con puntos de ruptura y consultas de medios puede no funcionar como pretendías en los navegadores móviles. Si tienes un diseño para pantallas estrechas que se activa con un ancho de viewport de 480px o menos, pero el dispositivo dice que mide 980px de ancho, ese usuario no verá tu diseño para pantallas estrechas.

**Así que _siempre_ deberías incluir la etiqueta meta viewport en la cabecera de tus documentos.**

Hay otras opciones que puedes poner dentro del atributo `content` de la etiqueta meta viewport; consulta la referencia de [`<meta name="viewport">`](/es/docs/Web/HTML/Reference/Elements/meta/name/viewport) para obtener más detalles.

## Resumen

El diseño adaptable se refiere al diseño de un sitio o una aplicación que se adapta al entorno en el que se ve. Abarca varias características y técnicas de CSS y HTML, y es básicamente la forma en que construimos los sitios web de forma predeterminada. Piensa en los sitios que visitas en tu teléfono: probablemente sea bastante raro encontrarte con un sitio que sea la versión de escritorio reducida, o en el que tengas que desplazarte hacia los lados para encontrar las cosas. Esto se debe a que la web ha adoptado este enfoque de diseño adaptable.

También se ha vuelto mucho más fácil conseguir diseños adaptables gracias a los métodos de diseño que se tratan en este artículo. Si hoy empiezas en el desarrollo web, tienes muchas más herramientas a tu disposición que en los primeros tiempos del diseño adaptable. Por eso conviene comprobar la antigüedad de los materiales que uses. Aunque los artículos históricos siguen siendo útiles, el uso moderno de CSS y HTML facilita muchísimo crear diseños elegantes y útiles, sea cual sea el dispositivo con el que tu visitante vea el sitio.

A continuación, estudiaremos las consultas de medios con más detalle y mostraremos cómo usarlas para resolver algunos problemas habituales.

## Véase también

- Trabajar con dispositivos de pantalla táctil:
  - Los [eventos táctiles](/es/docs/Web/API/Touch_events) permiten interpretar la actividad de los dedos (o de un lápiz óptico) en pantallas táctiles o paneles táctiles, y ofrecen una buena compatibilidad con interfaces de usuario táctiles complejas.
  - Usa las consultas de medios [pointer](/es/docs/Web/CSS/Reference/At-rules/@media/pointer) o [any-pointer](/es/docs/Web/CSS/Reference/At-rules/@media/any-pointer) para cargar CSS distinto en los dispositivos táctiles.
- [Guía de consultas de medios de CSS-Tricks](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- La [Frontend Developer Career Path](https://scrimba.com/the-frontend-developer-career-path-c0j?via=mdn) <sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#enlaces_externos_o_embebidos)</sup> de Scrimba enseña todo lo que necesitas saber para ser un desarrollador web front-end competente, con lecciones y desafíos interactivos divertidos, profesores expertos y una comunidad de apoyo. ¡Pasa de cero a conseguir tu primer trabajo front-end! Muchos de los componentes del curso están disponibles como versiones gratuitas independientes, entre ellos un módulo sobre diseño adaptable.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}
