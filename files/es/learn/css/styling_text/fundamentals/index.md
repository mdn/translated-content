---
title: Fundamentos de texto y fuentes tipográficas
slug: Learn/CSS/Styling_text/Fundamentals
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text")}}

En este artículo vas a iniciar tu viaje hacia el dominio la aplicación de estilos a textos con {{glossary("CSS")}}. Aquí trataremos en detalle todos los fundamentos básicos del diseño del texto y las fuentes tipográficas, incluyendo la configuración de su grosor, la familia y el estilo de letra, las propiedades abreviadas para los tipos de letra, la alineación del texto, el espaciado entre líneas y letras, y otros efectos.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conocimientos básicos de informática, conceptos básicos de HTML (estudio
        de
        <a href="/es/docs/Learn/HTML/Introduccion_a_HTML"
          >Introducción al HTML</a
        >), conceptos básicos de CSS (estudio de
        <a href="/es/docs/Learn/CSS/First_steps">Introducción al CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprender las propiedades y técnicas fundamentales necesarias para dar
        estilo al texto en las páginas web.
      </td>
    </tr>
  </tbody>
</table>

## ¿Qué implica aplicar estilo a texto en CSS?

Como ya habrás experimentado en tu trabajo con el HTML y el CSS, el texto incluido en un elemento se dispone dentro de la caja de contenido del elemento. Esta empieza en la parte superior izquierda del área de contenido (o en la esquina superior derecha, en el caso del contenido de los lenguajes RTL, o right-to-left, que se escriben de derecha a izquierda) y fluye hacia el final de la línea. Una vez que llega al final, baja a la línea siguiente y sigue, y luego continúa a la línea siguiente, hasta que todo el contenido se ha ubicado en la caja. El contenido de texto se comporta efectivamente como una serie de elementos en línea, distribuidos en líneas adyacentes entre sí, y sin crear saltos de línea hasta que se llega al final de la línea, a menos que se fuerce un salto de línea manual con el elemento {{htmlelement("br")}}.

> **Nota:** Si el párrafo anterior te parece confuso, no te preocupes: vuelve atrás y revisa el artículo sobre el [modelo de caja](/es/docs/Learn/CSS/Building_blocks/El_modelo_de_caja) antes de continuar.

Las propiedades CSS que se usan para aplicar estilo al texto pueden clasificarse generalmente en dos categorías, que veremos por separado en este artículo:

- **Estilos del tipo de letra**: Propiedades que afectan al texto (qué tipo de letra se usa, su tamaño, si es negrita, itálica, etc.).
- **Estilos de disposición del texto**: Propiedades que afectan al espaciado y otras características relativas a la disposición del texto, lo que permite la elección de, por ejemplo, el espacio entre líneas y letras, y el modo como el texto se alinea dentro de la caja contenedora.

> **Nota:** Ten en cuenta que el efecto se aplica sobre todo el texto que hay dentro de un elemento como si fuera una única entidad. No puedes seleccionar y dar estilo a subsecciones de texto, a menos que las delimites con algún elemento apropiado (como {{htmlelement("span")}} o {{htmlelement("strong")}}), o con un pseudoelemento específico para el texto como [::first-letter](/es/docs/Web/CSS/::first-letter) (selecciona la primera letra del texto de un elemento), [::first-line](/es/docs/Web/CSS/::first-line) (selecciona la primera línea del texto de un elemento), o [::selection](/es/docs/Web/CSS/::selection) (selecciona el texto que está resaltado por el cursor).

## Tipos de letra

Veamos las propiedades que permiten definir el estilo del tipo de letra. En este ejemplo aplicaremos algunas propiedades CSS diferentes al mismo ejemplo HTML, que presentamos a continuación:

```html
<h1>Tommy the cat</h1>

<p>Well I remember it as though it were a meal ago...</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

Puedes ver el [ejemplo completo en Github](http://mdn.github.io/learning-area/css/styling-text/fundamentals/) (consulta también [el código fuente](https://github.com/mdn/learning-area/blob/master/css/styling-text/fundamentals/index.html).)

### Color

La propiedad {{cssxref("color")}} establece el color del contenido de los elementos seleccionados (que normalmente es texto, pero también puede incluir un par cosas más, como un subrayado o una línea superpuesta al texto con la propiedad {{cssxref("text-decoration")}} ).

La propiedad `color` puede admitir cualquier [unidad de color CSS](/es/docs/Learn/CSS/Building_blocks/Valores_y_unidades_CSS), por ejemplo:

```css
p {
  color: red;
}
```

Esto mostrará el contenido de los párrafos en color rojo, en lugar del negro que es el estándar por defecto del navegador:

```html hidden
<h1>Tommy the cat</h1>

<p>Well I remember it as though it were a meal ago...</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

{{ EmbedLiveSample('Color', '100%', 220) }}

### Familia de tipos de letras

Usamos la propiedad {{cssxref("font-family")}} para definir un tipo de letra diferente para nuestro texto. Esta propiedad indica al navegador el tipo de letra (o una lista de tipos de letra) que debe aplicar a los elementos seleccionados. El navegador solo aplica el tipo de letra si la máquina que accede al sitio web dispone de ella; en caso contrario, simplemente usa el tipo de letra que tiene definido por defecto ([default font](#default_fonts)). Aquí tienes un ejemplo sencillo:

```css
p {
  font-family: arial;
}
```

Con esto, todos los párrafos de una página adoptan el tipo de letra Arial, que se encuentra en cualquier ordenador.

#### Tipos de letra seguros para la web

Solo hay un cierto número de tipos de letra que están disponibles en todos los sistemas en general, y que en consecuencia pueden utilizarse sin demasiadas preocupaciones. Son los llamados _tipos de letra seguros para la web_, o _**web safe fonts**_.

La mayor parte del tiempo, como desarrolladores web deseamos tener un control específico mayor sobre los tipos de letra con que se va a mostrar para mostrar nuestro contenido de texto. El problema está en encontrar una manera de saber de qué tipo de letra dispone el ordenador que se utiliza para acceder a nuestras páginas. No hay manera de saber esto en todos los casos, pero al menos contamos con que los tipos de letra seguros para la web están disponibles en casi todos los sistemas operativos más utilizados (las distribuciones Linux más comunes, Windows, Mac, Android, e iOS).

La lista de los tipos de letra seguros para la web cambia al ir evolucionando los sistemas operativos, pero es correcto considerar los tipos de letra siguientes como seguros para la web, al menos por ahora (muchos de ellos se han popularizado gracias a la iniciativa _[Core fonts for the web](https://es.wikipedia.org/wiki/Core_fonts_for_the_Web)_ de Microsoft, de finales de la década de 1990 y principios de la del 2000):

| Nombre          | Tipo de letra genérico | Observaciones                                                                                                                                                                                                                                          |
| --------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Arial           | sans-serif             | A menudo se considera una buena práctica añadir también _Helvética_ como opción preferida a _Arial_ porque, aunque tienen casi el mismo aspecto y _Arial_ está más ampliamente disponible, se considera que _Helvética_ tiene una forma más agradable. |
| Courier New     | monospace              | Algunos sistemas operativos cuentan con una versión alternativa (posiblemente más antigua) del tipo de letra _Courier New_ llamado _Courier_. Se considera una buena práctica usar ambos, con _Courier New_ como la opción preferida.                  |
| Georgia         | serif                  |                                                                                                                                                                                                                                                        |
| Times New Roman | serif                  | Algunos sistemas operativos cuentan con una versión alternativa (posiblemente más antigua) del tipo de letra _Times New Roman_ llamado _Times_. Se considera una buena práctica usar ambos, con _Times New Roman_ como la opción preferida.            |
| Trebuchet MS    | sans-serif             | Hay que tener cuidado al usar este tipo de letra porque no está ampliamente disponible en los sistemas operativos móviles.                                                                                                                             |
| Verdana         | sans-serif             |                                                                                                                                                                                                                                                        |

> **Nota:** Entre otros recursos, el sitio [cssfontstack.com](http://www.cssfontstack.com/) mantiene una lista de tipos de letra seguros disponibles en los sistemas operativos para Windows y Mac, que puede ayudarte en la toma de decisiones acerca de lo que consideras seguro para tus propósitos.

> **Nota:** Hay una manera de descargar un tipo de letra personalizado junto con la página web, que te permite personalizar el uso de los tipos de letra de la manera que desees: **web fonts**. Esto es un poco más complejo, y lo vamos a exponer más adelante en un [artículo independiente](/es/docs/Learn/CSS/Styling_text/Fuentes_web) del módulo.

#### Fuentes predeterminadas

CSS define cinco nombres genéricos para los tipos de letra `serif`, `sans-serif`, `monospace`, `cursive` y `fantasy`. Son muy genéricos y el tipo de letra exacto que se va a utilizar cuando se especifiquen dichos nombres dependerá de cada navegador y puede variar dependiendo del sistema operativo. Representa el _peor escenario posible_, en el que el navegador tratará de proporcionar al menos una fuente que parezca apropiada. `serif`, `sans-serif` y `monospace` son bastante predecibles y el navegador debería proporcionar algo razonable. Por otra parte, `cursive` y `fantasy` son menos predecibles y te recomendamos que las uses con cautela, y vayas probando a medida que avanzas.

Los cinco nombres se definen de la manera siguiente:

<!-- markdownlint-disable MD033 -->
<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Nombre</th>
   <th scope="col">Definición</th>
   <th scope="col">Ejemplo</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>serif</code></td>
   <td>Tipos de letra que tienen <em><a href="https://es.wikipedia.org/wiki/Gracia_(tipograf%C3%ADa)">serifas</a></em> (pequeños adornos, en general en los extremos de los trazos de los caracteres tipográficos)</td>
   <td><span style="font-family: serif;">Mi gran elefante rojo</span></td>
  </tr>
  <tr>
   <td><code>sans-serif</code></td>
   <td>Tipos de letra que carecen de <em>serifas</em>.</td>
   <td><span style="font-family: sans-serif;">Mi gran elefante rojo</span></td>
  </tr>
  <tr>
   <td><code>monospace</code></td>
   <td>Tipos de letra en que cada carácter tiene el mismo ancho; se usan con frecuencia en las listas de sentencias de los códigos de programación.</td>
   <td><span style="font-family: monospace;">Mi gran elefante rojo</span></td>
  </tr>
  <tr>
   <td><code>cursive</code></td>
   <td>Tipos de letra que intentan emular la letra manuscrita, con trazos fluidos y conectados.</td>
   <td><span style="font-family: cursive;">Mi gran elefante rojo</span></td>
  </tr>
  <tr>
   <td><code>fantasy</code></td>
   <td>Tipos de letra que pensados para ser decorativos.</td>
   <td><span style="font-family: fantasy;">Mi gran elefante rojo</span></td>
  </tr>
 </tbody>
</table>

#### Listas de tipos de letra

Ya que no puedes garantizar la disponibilidad de los tipos de letra que deseas utilizar (incluso un tipo de letra seguro para la web podría fallar por alguna razón), puedes proporcionar un **lista de tipos de letra** para que el navegador tenga diversos tipos de letra entre los que elegir. Consiste simplemente en introducirlo como el valor de `font-family`, que consistirá en una lista de diversos nombres de tipos de letra separados por comas, por ejemplo.

```css
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
```

En tal caso, el navegador comienza al principio de la lista y busca si el primer tipo de letra está disponible en la máquina. Si es así, aplica ese tipo de letra a los elementos seleccionados, y si no, lo intenta con el nombre siguiente de la lista; y así sucesivamente.

Es una buena idea proporcionar un nombre de tipo de letra genérico al final de la lista para que el navegador pueda al menos proporcionar algo aproximadamente adecuado en el caso de que ninguno de los tipos de letra que deseas esté disponible. Para ilustrar este punto: los navegadores asignan a los párrafos el tipo de letra _serif_ por defecto, que normalmente es Times New Roman, si no hay ninguna otra opción disponible, pero esto no resulta conveniente cuando se espera un tipo de letra _sans-serif_!

> **Nota:** Los nombres de los tipos de letra que están constituidos por más de una palabra (como `Trebuchet MS` ) han de ponerse entre comillas, por ejemplo `"Trebuchet MS"`.

#### Un ejemplo con font-family

Vamos a introducir en nuestro ejemplo anterior una fuente de tipo sans-serif para los párrafos:

```css
p {
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

Esto nos da el resultado siguiente:

```html hidden
<h1>Tommy the cat</h1>

<p>Well I remember it as though it were a meal ago...</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

{{ EmbedLiveSample('Un_ejemplo_con_font-family', '100%', 220) }}

### Tamaño de la letra

En el artículo sobre [Unidades y valores de CSS](/es/docs/Learn/CSS/Building_blocks/Valores_y_unidades_CSS) de nuestro módulo anterior, revisamos las unidades de longitud y tamaño. El tamaño del tipo de letra (establecido con la propiedad {{cssxref("font-size")}}) puede tomar valores medidos en la mayoría de estas unidades (y en otras, como [porcentajes](/es/docs/Learn/CSS/Building_blocks/Valores_y_unidades_CSS#Porcentajes)). Sin embargo, las unidades más comunes que vas a usar para ajustar el tamaño del texto son:

- Unidades `px` (píxeles): El número de píxeles de altura que deseas que tenga el texto. Esta es una unidad absoluta, da como resultado el mismo valor calculado final para el tipo de letra en la página en casi cualquier situación.
- Unidades `em`: 1em equivale al tamaño de tipo de letra que se haya establecido en el elemento padre del elemento activo al que aplicamos estilo (más específicamente, el ancho de una letra M mayúscula contenida dentro del elemento padre). Este puede ser complejo de resolver si hay muchos elementos anidados con diferentes tamaños de tipo de letra establecidos, pero es factible, como verás a continuación. Pero, ¿para qué molestarse en ello? Porque resulta bastante natural una vez que te acostumbras a ello, y puedes usar unidades `em` para establecer el tamaño de todo, no solo del texto. Puedes tener un sitio web completo dimensionado con unidades `em`, lo que facilita su mantenimiento.
- Unidades `rem`: Funcionan igual que las unidades `em`, excepto que 1`rem` equivale al tamaño del tipo de letra establecido en el elemento raíz del documento (es decir, en {{htmlelement("html")}}), no en el elemento padre. Esto facilita mucho los cálculos de los tamaños del tipo de letra, aunque te puede dar mucha guerra si quieres incluir navegadores que ya son muy antiguos porque las versiones de Internet Explorer 8 y anteriores no admiten la unidad `rem`.

La propiedad `font-size` de un elemento se hereda del elemento padre. Todo comienza con el elemento raíz de todo el documento ({{htmlelement("html")}}) cuya propiedad `font-size` se establece a en 16px como estándar en todos los navegadores. Cualquier párrafo (o cualquier otro elemento que no tenga un tamaño diferente establecido por el navegador) dentro del elemento raíz tendrá un tamaño final de 16px. Otros elementos pueden tener diferentes tamaños predeterminados, por ejemplo un elemento {{htmlelement("h1")}} tiene de manera predeterminada un tamaño establecido de 2em, por lo que tendrá un tamaño final de 32px.

Las cosas se vuelven más complicadas cuando se empieza a alterar el tamaño del tipo de letra de los elementos anidados. Por ejemplo, si tu página incluye un elemento {{htmlelement("article")}} y estableces un tamaño de fuente de `1.5em` (que resultará en un tamaño final de 24px), y luego quieres que los párrafos dentro del elemento `<article>` tengan un tamaño de letra calculado de 20px, ¿qué valor de unidad `em` deberías usar?

```html
<!-- El tamaño de letra base del documento es 16px -->
<article>
  <!-- Si mi tamaño de letra es 1.5em -->
  <p>Mi párrafo</p>
  <!-- ¿Cómo calculo el tamaño del tipo de letra para que de 20px? -->
</article>
```

Necesitarías establecer el valor en unidades `em` de 20/24, es decir, `0.83333333 em`. El cálculo puede ser complicado, por lo que hay que pensarlo bien a la hora de aplicar estilo a las cosas. Lo mejor es usar unidades `rem` donde se pueda, porque simplifican las cosas, y evitar establecer un tamaño de letra concreto para los elementos del contenedor, siempre que sea posible.

#### Un ejemplo sencillo de definición de tamaños

Al dimensionar el texto, en general es una buena idea establecer el tamaño básico del tipo de letra del documento (`font-size`) en 10 px, de modo que los cálculos son mucho más fáciles de resolver, puesto que entonces los valores (r)em que necesites son el tamaño del tipo de letra en píxeles dividido por 10, no por 16. Luego de hacer eso, puedes establecer con facilidad los diferentes tamaños de los tipos de letra de tu documento como desees. Es una buena idea hacer una lista de todos los conjuntos de reglas de tamaño de fuente (`font-size`) en una zona concreta de tu hoja de estilo para que resulten fáciles de encontrar.

Nuestro nuevo resultado es:

```html hidden
<h1>Tommy the cat</h1>

<p>Well I remember it as though it were a meal ago...</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

```css
html {
  font-size: 10px;
}

h1 {
  font-size: 2.6rem;
}

p {
  font-size: 1.4rem;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

{{ EmbedLiveSample('Un_ejemplo_sencillo_de_definición_de_tamaños', '100%', 220) }}

### Estilo y cuerpo del tipo de letra, efectos y decoración del texto

El CSS proporciona cuatro propiedades comunes para alterar el efecto visual / énfasis del texto:

- {{cssxref("font-style")}}: Se usa para activar y desactivar el texto en cursiva. Los valores posibles son los siguientes (raramente usarás esto, a menos que desees desactivar algún estilo de cursiva por alguna razón):

  - `normal`: Pone el texto en tipo de letra normal (desactiva la cursiva).
  - `italic`: Pone el texto en la versión cursiva del tipo de letra, si está disponible; si no está disponible, simulará cursiva con el modo `oblique` en su lugar.
  - `oblique`: Pone el texto en una versión de tipo de letra cursiva simulada, que se genera inclinando la versión normal.

- {{cssxref("font-weight")}}: Establece el grueso o peso del texto. Puede haber muchos valores si dispones de muchas variantes de fuente (como _-light_, _-normal_, _-bold_, _-extrabold_, _-black_, etc.), pero en realidad raramente usarás alguna de ellas, más allá de los estilos `normal` y `bold`:

  - `normal`, `bold`: Grueso del tipo de letra normal y **negrita**
  - `lighter`, `bolder`: Establece el grueso de la negrita del elemento activo un nivel por debajo o por encima del grueso de su elemento padre.
  - `100`–`900`: Valores numéricos de negrita, que proporcionan un control más detallado que las palabras clave anteriores, si es necesario.

- {{cssxref("text-transform")}}: Te permite practicar algunas transformaciones sobre tu tipo de letra. Los valores incluyen:

  - `none`: Impide cualquier transformación.
  - `uppercase`: Transforma TODO EL TEXTO A MAYÚSCULAS.
  - `lowercase`: Transforma todo el texto a minúsculas.
  - `capitalize`: Transforma Las Letras Iniciales De Cada Palabra A Mayúscula.
  - `full-width`: Transforma todos los caracteres para cada uno quede dentro de una caja de ancho fijo, similar a una fuente monoespaciada, lo que permite, por ejemplo, la alineación de caracteres latinos junto con caracteres asiáticos (chino, japonés, coreano.)

- {{cssxref("text-decoration")}}: Activa/desactiva decoraciones en los tipos de letra (usarás esto principalmente para desactivar el subrayado por defecto de los enlaces al aplicarles estilo). Los valores disponibles son:

  - `none`: Desactiva cualquier decoración de texto que presente.
  - `underline`: Subraya el texto.
  - `overline`: Proporciona al texto una línea superpuesta.
  - `line-through`: Coloca un tachado sobre el texto.

  Observa que {{cssxref("text-decoration")}} puede aceptar diversos valores a la vez, de modo que puedes incluir diversas decoraciones simultáneas, por ejemplo `text-decoration: underline overline`. Ten encuenta también que {{cssxref("text-decoration")}} es una propiedad abreviada de {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}} y {{cssxref("text-decoration-color")}}. Puedes utilizar combinaciones de los valores de esta propiedad para crear efectos interesantes, por ejemplo `text-decoration: line-through red wavy`.

Añadamos un par de estas propiedades a nuestro ejemplo. Nuestro nuevo resultado quedaría como este:

```html hidden
<h1>Tommy the cat</h1>

<p>Well I remember it as though it were a meal ago...</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

```css
html {
  font-size: 10px;
}

h1 {
  font-size: 2.6rem;
  text-transform: capitalize;
}

h1 + p {
  font-weight: bold;
}

p {
  font-size: 1.4rem;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

{{ EmbedLiveSample('Estilo_y_cuerpo_del_tipo_de_letra_efectos_y_decoración_del_texto', '100%', 220) }}

### Textos sombreados

Puedes aplicar sombras a tus textos con la propiedad {{cssxref("text-shadow")}}. Esta propiedad puede tomar hasta cuatro valores, como se muestra en ejemplo siguiente:

```css
text-shadow: 1px 1px 1px red;
```

Las cuatro propiedades son las siguientes:

1. El desplazamiento horizontal de la sombra desde el texto original; admite la mayoría de las [unidades y magnitudes](/es/docs/Learn/CSS/Building_blocks/Valores_y_unidades_CSS) de que dispone CSS, pero lo más habitual es usar `px`. Es un valor obligatorio.
2. El desplazamiento vertical de la sombra desde el texto original; se comporta básicamente igual que el desplazamiento horizontal, excepto porque mueve la sombra arriba/abajo, y no hacia derecha/izquierda. Es un valor obligatorio.
3. El radio de desenfoque; cuanto más alto es este valor, mayor es la dispersión de la sombra. Si no se incluye este valor, el valor por defecto es 0, y no hay desenfoque. Esta propiedad admite la mayoría de las [unidades y magnitudes](/es/docs/Learn/CSS/Building_blocks/Valores_y_unidades_CSS) de que dispone el CSS.
4. El color de base de la sombra, que admite cualquier [unidad de color de que dispone CSS](/es/docs/Learn/CSS/Building_blocks/Valores_y_unidades_CSS). Si no se incluye este valor, el valor predeterminado es `negro`.

> **Nota:** Los valores con desplazamiento positivo mueven la sombra hacia la derecha o hacia abajo, mientras que los valores con desplazamiento negativo, por ejemplo `-1px -1px`, mueven la sombrea hacia la izquierda o hacia arriba.

#### Sombras múltiples

Puedes aplicar diversas sombras al mismo texto incluyendo múltiples valores de sombra separados por comas, por ejemplo:

```css
text-shadow:
  -1px -1px 1px #aaa,
  0px 4px 1px rgba(0, 0, 0, 0.5),
  4px 4px 5px rgba(0, 0, 0, 0.7),
  0px 0px 7px rgba(0, 0, 0, 0.4);
```

Si aplicamos esto al elemento {{htmlelement("h1")}} de nuestro ejemplo _Tommy The Cat_, obtenemos esto:

```html hidden
<h1>Tommy the cat</h1>

<p>Well I remember it as though it were a meal ago...</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

```css hidden
html {
  font-size: 10px;
}

h1 {
  font-size: 26px;
  text-transform: capitalize;
  text-shadow:
    -1px -1px 1px #aaa,
    0px 2px 1px rgba(0, 0, 0, 0.5),
    2px 2px 2px rgba(0, 0, 0, 0.7),
    0px 0px 3px rgba(0, 0, 0, 0.4);
}

h1 + p {
  font-weight: bold;
}

p {
  font-size: 14px;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

{{ EmbedLiveSample('Sombras_múltiples', '100%', 220) }}

> **Nota:** Puedes ver más ejemplos interesantes del uso de `text-shadow` en el artículo de _Sitepoint_ [Moonlighting with CSS text-shadow](http://www.sitepoint.com/moonlighting-css-text-shadow/).

## Diseño del texto

Una vez tratadas las propiedades básicas para los tipos de letra, echemos un vistazo a las propiedades que podemos usar para la disposición del texto.

### Alineación del texto

La propiedad {{cssxref("text-align")}} se usa para controlar la forma en que el texto se alinea dentro de la caja que lo contiene. Los valores disponibles para esta propiedad son los siguientes, y funcionan de la misma forma que en una aplicación de procesamiento de texto:

- `left`: Alinea el texto por la izquierda.
- `right`: Alinea el texto por la derecha.
- `center`: Centra el texto.
- `justify`: Varía los espacios entre las palabras para que todas las líneas de texto tengan el mismo ancho. Debes usar este valor con prudencia porque puede quedar terrible, especialmente si el párrafo al que se aplica contiene muchas palabras largas. Si tienes intención de utilizar esta propiedad, también deberías pensar en alguna otra, como {{cssxref("hyphens")}}, para dividir las palabras largas entre las líneas.

Si aplicamos `text-align: center;` al elemento {{htmlelement("h1")}} de nuestro ejemplo, obtendremos esto:

```html hidden
<h1>Tommy the cat</h1>

<p>Well I remember as though it were a meal ago...</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

```css hidden
html {
  font-size: 10px;
}

h1 {
  font-size: 2.6rem;
  text-transform: capitalize;
  text-shadow:
    -1px -1px 1px #aaa,
    0px 2px 1px rgba(0, 0, 0, 0.5),
    2px 2px 2px rgba(0, 0, 0, 0.7),
    0px 0px 3px rgba(0, 0, 0, 0.4);
  text-align: center;
}

h1 + p {
  font-weight: bold;
}

p {
  font-size: 1.4rem;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

{{ EmbedLiveSample('Alineación_del_texto', '100%', 220) }}

### Interlineado

La propiedad {{cssxref("line-height")}} establece la altura entre cada línea de texto; esta propiedad admite la mayoría de las [unidades y magnitudes](/es/docs/Learn/CSS/Building_blocks/Valores_y_unidades_CSS), pero también puede tomar un valor sin unidades, que actúa como un multiplicador y generalmente se considera la mejor opción porque se multiplica la propiedad {{cssxref("font-size")}} para obtener la altura de la línea (`line-height`). El texto del cuerpo (`body`) generalmente se ve mejor y es más fácil de leer si hay más separación entre las líneas; la altura recomendada de la línea es entre 1.5-2 (a doble espacio). Por lo tanto, para configurar nuestras líneas de texto a 1.5 veces la altura de la fuente, deberías usar esto:

```css
line-height: 1.5;
```

Aplicando esto a los elementos {{htmlelement("p")}} en nuestro ejemplo nos daría este resultado:

```html hidden
<h1>Tommy the cat</h1>

<p>Well I remember it as though it were a meal ago...</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

```css hidden
html {
  font-size: 10px;
}

h1 {
  font-size: 2.6rem;
  text-transform: capitalize;
  text-shadow:
    -1px -1px 1px #aaa,
    0px 2px 1px rgba(0, 0, 0, 0.5),
    2px 2px 2px rgba(0, 0, 0, 0.7),
    0px 0px 3px rgba(0, 0, 0, 0.4);
  text-align: center;
}

h1 + p {
  font-weight: bold;
}

p {
  font-size: 1.4rem;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
  line-height: 1.5;
}
```

{{ EmbedLiveSample('Interlineado', '100%', 250) }}

### Espacio entre letras y espacio entre palabras

Las propiedades {{cssxref("letter-spacing")}} y {{cssxref("word-spacing")}} te permiten establecer el espacio entre las letras y entre las palabras del texto. No los usarás a menudo, pero podría ser útil para obtener una apariencia determinada o para mejorar la legibilidad de un tipo de letra particularmente denso. Estas propiedades admiten la mayoría de las [unidades y magnitudes](/es/docs/Learn/CSS/Building_blocks/Valores_y_unidades_CSS).

Así, como ejemplo, podemos aplicar a la primera línea de los elementos {{htmlelement("p")}} de nuestro ejemplo lo siguiente:

```css
p::first-line {
  letter-spacing: 2px;
  word-spacing: 4px;
}
```

y obtendremos:

```html hidden
<h1>Tommy the cat</h1>

<p>Well I remember it as though it were a meal ago...</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

```css hidden
html {
  font-size: 10px;
}

h1 {
  font-size: 2.6rem;
  text-transform: capitalize;
  text-shadow:
    -1px -1px 1px #aaa,
    0px 2px 1px rgba(0, 0, 0, 0.5),
    2px 2px 2px rgba(0, 0, 0, 0.7),
    0px 0px 3px rgba(0, 0, 0, 0.4);
  text-align: center;
}

h1 + p {
  font-weight: bold;
}

p::first-line {
  letter-spacing: 2px;
  word-spacing: 4px;
}

p {
  font-size: 1.4rem;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
  line-height: 1.5;
}
```

{{ EmbedLiveSample('Espacio_entre_letras_y_espacio_entre_palabras', '100%', 250) }}

### Otras propiedades interesantes

Las propiedades anteriores nos dan una idea de cómo empezar a aplicar texto a una página web, pero hay muchas más propiedades que puedes usar. Nuestro objetivo aquí es solo exponer las más importantes. Cuando te hayas acostumbrado a usar las propiedades anteriores, también deberías explorar las siguientes:

Aplicación de estilos a tipos de letra:

- {{cssxref("font-variant")}}: Cambia entre las opciones de versalita y normal del tipo de letra.
- {{cssxref("font-kerning")}}: Activa/Desactiva las opciones de interletraje del tipo de letra.
- {{cssxref("font-feature-settings")}}: Activa/Desactiva diversas características de los tipos de letra [OpenType](https://en.wikipedia.org/wiki/OpenType).
- {{cssxref("font-variant-alternates")}}: Controla el uso de los caracteres alternativos para un tipo de letra dado.
- {{cssxref("font-variant-caps")}}: Controla el uso de los caracteres alternativos de las mayúsculas.
- {{cssxref("font-variant-east-asian")}}: Controla el uso de los caracteres alternativos en textos en idiomas del Asia Oriental, como el japonés y el chino.
- {{cssxref("font-variant-ligatures")}}: Controla qué ligaduras y formas contextuales se usarán en el texto.
- {{cssxref("font-variant-numeric")}}: Controla el uso de los caracteres alternativos para números, fracciones y marcadores de ordinales.
- {{cssxref("font-variant-position")}}: Controla el uso de los caracteres alternativos de tamaños más pequeños posicionados como subíndice y superíndice.
- {{cssxref("font-size-adjust")}}: Ajusta el tamaño visual del texto independientemente del tamaño real del tipo de letra.
- {{cssxref("font-stretch")}}: Cambia entre posibles versiones ampliadas de un tipo de letra determinado.
- {{cssxref("text-underline-position")}}: Especifica la posición de los subrayados con el valor `underline` de la propiedad `text-decoration-line`.
- {{cssxref("text-rendering")}}: Intenta optimizar la representación del texto.

Estilos de disposición de los textos

- {{cssxref("text-indent")}}: Especifica el espacio horizontal que debe dejarse antes del comienzo de la primera línea del contenido de texto.
- {{cssxref("text-overflow")}}: Define cómo se señala el contenido que los usuarios no ven porque desborda.
- {{cssxref("white-space")}}: Define cómo se usan los espacios en blanco y los saltos de línea asociados dentro del elemento.
- {{cssxref("word-break")}}: Especifica si se deben dividir las palabras a final de línea.
- {{cssxref("direction")}}: Define la dirección del texto (esto depende del idioma, y por lo general es mejor dejar que HTML maneje esa parte, porque está vinculada al contenido del texto).
- {{cssxref("hyphens")}}: Activa/Desactiva la separación de palabras en los idiomas admitidos.
- {{cssxref("line-break")}}: Relaja o refuerza el salto de línea en los idiomas asiáticos.
- {{cssxref("text-align-last")}}: Define cómo es la alineación de la última línea de un bloque o línea justo antes de un salto de línea forzado.
- {{cssxref("text-orientation")}}: Define la orientación del texto en una línea.
- {{cssxref("word-wrap")}}: Especifica si el navegador puede dividir palabras a final de línea para evitar desbordamientos del contenido.
- {{cssxref("writing-mode")}}: Define si las líneas de texto se disponen en horizontal o en vertical y la dirección en la que fluyen las líneas subsiguientes.

## Propiedades abreviadas para los tipos de letra

Muchas propiedades relativas a los tipos de letra también pueden establecerse de forma abreviada con la propiedad {{cssxref("font")}}. Se escriben en el orden siguiente: {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}, {{cssxref("font-stretch")}}, {{cssxref("font-size")}}, {{cssxref("line-height")}}, and {{cssxref("font-family")}}.

De entre todas estas propiedades, solo `font-size` y `font-family` son obligatorias al usar la propiedad abreviada de `font`.

Se debe colocar una barra inclinada (_slash_) entre las propiedades {{cssxref("font-size")}} y {{cssxref("line-height")}}.

Un ejemplo completo se vería así:

```css
font:
  italic normal bold normal 3em/1.5 Helvetica,
  Arial,
  sans-serif;
```

## Aprendizaje activo: Jugar a aplicar estilos

En esta sección de aprendizaje activo no proponemos ningún ejercicio específico: Simplemente nos gustaría que juegues con algunas propiedades de diseño de tipo de letra / texto, ¡y a ver qué consigues! Puedes hacer esto con archivos HTML/CSS sin conexión, o puedes introducir tu código en el ejemplo editable en vivo a continuación.

Si te equivocas, puedes volver a empezar con el botón _Reinicio_.

```html hidden
<div
  class="body-wrapper"
  style="font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;">
  <h2>HTML Input</h2>
  <textarea
    id="code"
    class="html-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
  <p>Some sample text for your delight</p></textarea
  >

  <h2>CSS Input</h2>
  <textarea
    id="code"
    class="css-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
p {

  }</textarea
  >

  <h2>Output</h2>
  <div
    class="output"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;"></div>
  <div class="controls">
    <input
      id="reset"
      type="button"
      value="Reset"
      style="margin: 10px 10px 0 0;" />
  </div>
</div>
```

```js hidden
var htmlInput = document.querySelector(".html-input");
const cssInput = document.querySelector(".css-input");
const reset = document.getElementById("reset");
let htmlCode = htmlInput.value;
let cssCode = cssInput.value;
const output = document.querySelector(".output");

const styleElem = document.createElement("style");
const headElem = document.querySelector("head");
headElem.appendChild(styleElem);

function drawOutput() {
  output.innerHTML = htmlInput.value;
  styleElem.textContent = cssInput.value;
}

reset.addEventListener("click", function () {
  htmlInput.value = htmlCode;
  cssInput.value = cssCode;
  drawOutput();
});

htmlInput.addEventListener("input", drawOutput);
cssInput.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code', 700, 800) }}

## Resumen

Esperamos que hayas disfrutado jugando con el texto en este artículo. El próximo artículo te enseñará todo lo que necesitas saber sobre la aplicación de estilos de lista en HTML.

{{NextMenu("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text")}}
