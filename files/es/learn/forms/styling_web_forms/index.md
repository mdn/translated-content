---
title: Estilizando formularios HTML
slug: Learn/Forms/Styling_web_forms
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Other_form_controls","Learn/Forms/Advanced_form_styling","Learn/Forms")}}

En los artículos anteriores vimos todo el HTML que necesitas para crear y estructurar tus formularios HTML. En este artículo veremos como usar [CSS](/es/docs/Web/CSS) para estilizar nuestros formularios. Esto historicamente ha sido díficil — cada control tiene un nivel de dificultad distinta — pero se esta volviendo más fácil a medida de que los navegadores antiguos son retirados, y los modernos nos abren más posibilidades.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Conocimientos básicos de informática y una comprensión básica de
        <a href="/es/docs/Learn/HTML/Introduction_to_HTML">HTML</a> y
        <a href="/es/docs/Learn/CSS/First_steps">CSS</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Comprender los problemas detrás del diseño de formularios y
        aprender algunas de las técnicas básicas de diseño que le serán útiles.
      </td>
    </tr>
  </tbody>
</table>

## ¿Porqué es tan difícil aplicar estilos a formularios con CSS?

Se añadieron los controles de formulario en la [2ª especificación HTML](https://www.ietf.org/rfc/rfc1866.txt) en 1995; CSS fue lanzado a finales de 1996, y ningún navegador lo implementó correctamente por años. Los navegadores le dejaban el trabajo de manejar y renderizar los formularios a los sistemas operativos.

Aun con CSS permitiendo estilizar HTML, los fabricantes de navegadores han sido — y son, hasta el día de hoy — reacios a permitir el estilizado de estos porque los usuarios estaban acostumbrados al estilo de sus plataformas. Esto ha cambiado. Los dueños de los sitios web quieren estilos que encajen con el diseño de sus páginas más que nunca, y la plataforma web ha cambiado para hacer esto posible.

Para algunos controles, todavía es díficil reconstruirlos para permitir que se puedan estilizar, pero ya podemos usar CSS para estilizar muchas partes de los formularios, pero hay que estar atentos; tienes que tener cuidado para no romper la funcionalidad de este.

### No todos los controles se crean igual con CSS

Actualmente aun se encuentran dificultades cuando se utiliza CSS con formularios; estos problemas se pueden dividir en tres categorías.

#### Lo bueno

A algunos elementos se les puede dar estilo con pocos o ningún problema independientemente de la plataforma. Entre estos se incluyen los siguientes elementos estructurales:

1. {{HTMLElement("form")}}
2. {{HTMLElement("fieldset")}} y {{HTMLElement("legend")}}
3. {{HTMLElement("input")}} de una sola línea (p.ej. de tipo text, url, email...), a excepción de [`<input type="search">`](/es/docs/Web/HTML/Element/input/search).
4. {{HTMLElement("textarea")}} de multiples líneas
5. Botones (ambos {{HTMLElement("input")}} y {{HTMLElement("input")}})
6. {{HTMLElement("label")}}
7. {{HTMLElement("output")}}

#### Lo malo

Algunos elementos son más díficiles de estilizar, llegando a necesitar CSS complejo o trucos muy específicos:

- Casillas de verificación ([checkbox](/es/docs/Web/HTML/Element/input/checkbox)) y botones de opción ([radio](/es/docs/Web/HTML/Element/Input/radio)).
- [`<input type="search">`](/es/docs/Web/HTML/Element/input/search)

Veremos como trabajar con estos casos específicos en el artículo [Estilizado avanzado para formularios HTML](/es/docs/Learn/Forms/Advanced_styling_for_HTML_forms).

#### Lo feo

En algunos elementos, simplemente no se puede utilizar CSS. Incluyendo a:

- [`<input type="color">`](/es/docs/Web/HTML/Element/input/color)
- Controles relacionados al tiempo como [`<input type="datetime-local">`](/es/docs/Web/HTML/Element/input/datetime-local)
- [`<input type="range">`](/es/docs/Web/HTML/Element/input/range)
- [`<input type="file">`](/es/docs/Web/HTML/Element/input/file)
- Elementos involucrados en la creación de controles de selección como {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} y {{HTMLElement("datalist")}}.
- {{HTMLElement("progress")}} y {{HTMLElement("meter")}}

Una vez más, describiremos lo que se puede hacer en términos de estilo de estos elementos en [Estilo de formulario avanzado](/es/docs/Learn/Forms/Advanced_form_styling).

El verdadero problema con todos estos controles es que tienen una estructura muy compleja, y más allá de algunos estilos básicos (como cambiar el ancho o el margen del control), generalmente no tiene la capacidad de diseñar los componentes internos de los controles (como el calendario del selector de fecha, o el botón en `<select>` que hace que se muestre la lista de opciones) que conforman esos controles.

Si desea personalizar a fondo esos controles, realmente tiene que crear los suyos usando HTML, CSS y JavaScript. Esto está más allá del alcance de los artículos de formularios principales, pero lo analizamos en un artículo avanzado [Cómo crear controles de formulario personalizados](/es/docs/Learn/Forms/How_to_build_custom_form_controls).

> **Nota:** Hay algunos pseudoelementos CSS propietarios disponibles que le permiten diseñar componentes internos de estos controles de formulario, como {{cssxref('::-moz-range-track')}}, pero estos no son consistentes entre los navegadores , por lo que no se puede confiar. También los mencionaremos más adelante.

## Lo bueno

Para diseñar controles de formulario que son fáciles de diseñar con CSS, no debería tener mucha dificultad, ya que en su mayoría se comportan como cualquier otro elemento HTML. Ya vimos algunos estilos de formularios simples en [Su primer formulario](/es/docs/Learn/Forms/Your_first_form), y el módulo de [bloques de construcción de CSS](/es/docs/Learn/CSS/Building_blocks) también contiene algunos [elementos esenciales de estilo de formulario útiles](/es/docs/Learn/CSS/Building_blocks/Images_media_form_elements#form_elements).

Además de las herramientas básicas de CSS mencionadas anteriormente, también se nos han proporcionado varios selectores (pseudoclases de interfaz de usuario) que permiten diseñar según el estado actual de la interfaz de usuario. Los cubrimos en detalle en el siguiente artículo, [pseudoclases de interfaz de usuario](/es/docs/Learn/Forms/UI_pseudo-classes).

Veremos un ejemplo al final de este artículo para darle más ideas sobre el estilo y la ubicación básicos de los controles de formulario. Sin embargo, antes de hacerlo, nos gustaría decir algunas palabras sobre aspectos específicos del diseño de formularios que vale la pena conocer.

### Fuentes (tipografía) y texto

Las funciones de fuente y texto CSS se pueden usar fácilmente con cualquier control (y sí, puede usar {{cssxref("@font-face")}} con controles de formulario). Sin embargo, el comportamiento del navegador suele ser inconsistente. De forma predeterminada, algunos controles no heredan {{cssxref("font-family")}} y {{cssxref("font-size")}} de sus padres. En su lugar, muchos navegadores utilizan la apariencia predeterminada del sistema. Para que la apariencia de sus formularios sea consistente con el resto de su contenido, puede agregar las siguientes reglas a su hoja de estilo:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

El valor de la propiedad {{cssxref('inherit')}} hace que el valor de la propiedad coincida con el valor calculado de la propiedad de su elemento principal; hereda el valor del padre.

Las capturas de pantalla a continuación muestran la diferencia. A la izquierda está la representación predeterminada de un `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">`, y un `<button>` en Chrome en macOS, con el estilo de fuente predeterminado de la plataforma en uso. A la derecha están los mismos elementos, con nuestra regla de estilo anterior aplicada.

![Controles de formulario con familias de fuentes predeterminadas y heredadas. Por defecto, algunos tipos son serif y otros son sans serif. La herencia debería cambiar las fuentes de todos a la familia de fuentes de los padres, en este caso, un párrafo. Curiosamente, la entrada de tipo enviar no se hereda del párrafo principal.](forms_fontfamily.png)

Los valores predeterminados difieren en varias formas. La herencia debería cambiar sus fuentes a la de la familia de fuentes principal; en este caso, la fuente serif predeterminada del contenedor principal. Todos lo hacen, con una extraña excepción: `<input type="submit">` no hereda del párrafo principal en Chrome. Más bien, usa {{cssxref('font-family#Values', 'font-family: system-ui')}}. ¡Esta es otra razón para usar elementos `<button>` sobre sus tipos de entrada equivalentes!

Hay mucho debate sobre si los formularios se ven mejor usando los estilos predeterminados del sistema o estilos personalizados diseñados para coincidir con su contenido. Esta decisión es tuya, como diseñador de su sitio o aplicación web.

### Tamaño de caja

Todos los campos de texto tienen soporte completo para cada propiedad relacionada con el modelo de caja CSS, como {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}} , {{cssxref("margin")}} y {{cssxref("border")}}. Sin embargo, como antes, los navegadores se basan en los estilos predeterminados del sistema cuando muestran estos controles. Depende de usted definir cómo desea combinarlos en su contenido. Si desea mantener la apariencia nativa de los controles, enfrentará algunas dificultades si desea darles un tamaño uniforme.

**Esto se debe a que cada control tiene sus propias reglas para el borde, el relleno (_padding_) y el margen**. Para dar el mismo tamaño a varios controles diferentes, puede usar la propiedad {{cssxref("box-sizing")}} junto con algunos valores consistentes para otras propiedades:

```css
input,
textarea,
select,
button {
  width: 150px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
```

En la captura de pantalla a continuación, la columna de la izquierda muestra la representación predeterminada de los controles de entrada `<input type="radio">`, `<input type="checkbox">`, `<input type="range">`, `<input type="text">`, `<input type="date">`, {{htmlelement('select')}}, {{htmlelement('textarea')}}, `<input type="submit">`, y {{htmlelement('button')}}. La columna de la derecha, por otro lado, muestra los mismos elementos con nuestra regla anterior aplicada a ellos. Observe cómo esto nos permite asegurarnos de que todos los elementos ocupen la misma cantidad de espacio, a pesar de las reglas predeterminadas de la plataforma para cada tipo de control.

![Las propiedades del modelo de caja afectan a la mayoría de los tipos de entrada.](boxmodel_formcontrols1.png)

Lo que puede no ser evidente a través de la captura de pantalla es que los controles de radio y casilla de verificación aún se ven iguales, pero están centrados en el espacio horizontal de 150px provisto por la propiedad {{cssxref('width')}}. Es posible que otros navegadores no centren los controles, pero se adhieren al espacio asignado.

### Ubicación de la leyenda

El elemento {{HTMLElement("legend")}} está bien para darle estilo, pero puede ser un poco complicado controlar su ubicación. De forma predeterminada, siempre se coloca sobre el borde superior de su padre {{HTMLElement("fieldset")}}, cerca de la esquina superior izquierda. Para colocarlo en otro lugar, por ejemplo, dentro del conjunto de campos en algún lugar, o cerca de la esquina inferior izquierda, debe confiar en el posicionamiento.

Tome el siguiente ejemplo:

{{EmbedGHLiveSample("learning-area/html/forms/native-form-widgets/positioned-legend.html", '100%', 400)}}

Para posicionar la leyenda de esta manera, usamos el siguiente CSS (otras declaraciones eliminadas por brevedad):

```css
fieldset {
  position: relative;
}

legend {
  position: absolute;
  bottom: 0;
  right: 0;
}
```

El `<fieldset>` también debe posicionarse, de modo que `<legend>` se posicione en relación con él (de lo contrario, `<legend>` se ubicaría en relación con `<body>`).

El elemento {{HTMLElement("legend")}} es muy importante para la accesibilidad; las tecnologías de asistencia lo hablarán como parte de la etiqueta de cada elemento de formulario dentro del conjunto de campos, pero usar una técnica como la anterior está bien. El contenido de la leyenda aún se pronunciará de la misma manera; es sólo la posición visual la que ha cambiado.

> **Nota:** También puede usar la propiedad {{cssxref("transform")}} para ayudar a posicionar su `<legend>`. Sin embargo, cuando lo coloca, por ejemplo, con un `transform: translateY();`, se mueve pero deja un feo espacio en el borde del `<fieldset>`, del que no es fácil deshacerse.

## Un ejemplo de estilo específico

Veamos un ejemplo concreto de cómo diseñar un formulario HTML. Construiremos un formulario de contacto de "postal" de aspecto elegante; [ver aquí para la versión final](https://mdn.github.io/learning-area/html/forms/postcard-example/).

Si desea continuar con este ejemplo, haga una copia local de [postcard-start.html file](https://github.com/mdn/learning-area/blob/master/html/forms/postcard-example/postcard-start.html) y siga las instrucciones a continuación.

### HTML

El HTML es solo un poco más complicado que el ejemplo que usamos en [el primer artículo de esta guía](/es/docs/Learn/Forms/Your_first_form); solo tiene algunos IDs adicionales y un encabezado.

```html
<form>
  <h1>to: Mozilla</h1>

  <div id="from">
    <label for="name">from:</label>
    <input type="text" id="name" name="user_name" />
  </div>

  <div id="reply">
    <label for="mail">reply:</label>
    <input type="email" id="mail" name="user_email" />
  </div>

  <div id="message">
    <label for="msg">Your message:</label>
    <textarea id="msg" name="user_message"></textarea>
  </div>

  <div class="button">
    <button type="submit">Send your message</button>
  </div>
</form>
```

Agregue el código anterior en el cuerpo de su HTML.

### Organizando tus recursos

¡Aquí es donde la diversión comienza! Antes de iniciar a codificar, necesitamos tres recursos adicionales:

1. [El fondo de la postal](/es/docs/Learn/Forms/Styling_web_forms/background.jpg): Descargue esta imagen y guárdela en el mismo directorio que su archivo HTML de trabajo.
2. Una fuente de máquina de escribir: [La fuente "Secret Typewriter" de fontsquirrel.com](https://www.fontsquirrel.com/fonts/Secret-Typewriter): descargue el archivo TTF en el mismo directorio que el anterior.
3. Una fuente dibujada a mano: [La fuente "Journal" de fontsquirrel.com](https://www.fontsquirrel.com/fonts/Journal): Descargue el archivo TTF en el mismo directorio que el anterior.

Tus fuentes necesitan más procesamiento antes de comenzar:

1. Vaya al [generador de fuentes web fontsquirrel](https://www.fontsquirrel.com/tools/webfont-generator).
2. Usando el formulario, cargue sus dos archivos de fuente y genere un kit de fuente web. Descargue el kit a su computadora.
3. Descomprima el archivo zip descargado.
4. Dentro del contenido descomprimido encontrará algunos archivos de fuentes (al momento de escribir este artículo, dos archivos `.woff` y dos archivos `.woff2`; pueden variar en el futuro). Copie estos archivos en un directorio llamado `fonts`, en el mismo directorio que antes. Estamos usando dos archivos diferentes para cada fuente para maximizar la compatibilidad del navegador; consulte nuestro artículo de [fuentes web](/es/docs/Learn/CSS/Styling_text/Web_fonts) para obtener mucha más información.

### CSS

Ahora podemos profundizar en el CSS para el ejemplo. Agregue todos los bloques de código que se muestran a continuación dentro del elemento {{htmlelement("style")}}, uno tras otro.

#### Diseño general

Primero, nos preparamos definiendo nuestras reglas {{cssxref("@font-face")}} y todos los estilos básicos establecidos en los elemetos {{HTMLElement("body")}} y {{HTMLElement("form")}}. Si la salida de fontsquirrel fue diferente a lo que describimos anteriormente, puede encontrar los bloques `@font-face` correctos dentro de su kit webfont descargado, en el archivo `stylesheet.css` (deberá reemplazar los bloques `@font-face` a continuación con ellos y actualice las rutas a los archivos de fuentes):

```css
@font-face {
  font-family: "handwriting";
  src:
    url("fonts/journal-webfont.woff2") format("woff2"),
    url("fonts/journal-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "typewriter";
  src:
    url("fonts/veteran_typewriter-webfont.woff2") format("woff2"),
    url("fonts/veteran_typewriter-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

body {
  font: 1.3rem sans-serif;
  padding: 0.5em;
  margin: 0;
  background: #222;
}

form {
  position: relative;
  width: 740px;
  height: 498px;
  margin: 0 auto;
  padding: 1em;
  box-sizing: border-box;
  background: #fff url(background.jpg);

  /* creamos nuestra malla (grid) */
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 10em 1em 1em 1em;
}
```

Tenga en cuenta que hemos utilizado [CSS Grid](/es/docs/Web/CSS/CSS_Grid_Layout) y [Flexbox](/es/docs/Web/CSS/CSS_Flexible_Box_Layout) para diseñar el formulario. Usando esto, podemos posicionar fácilmente nuestros elementos, incluido el título y todos los elementos del formulario:

```css
h1 {
  font:
    1em "typewriter",
    monospace;
  align-self: end;
}

#message {
  grid-row: 1 / 5;
}

#from,
#reply {
  display: flex;
}
```

#### Etiquetas y controles

Ahora podemos empezar a trabajar en los propios elementos del formulario. Primero, asegurémonos de que los {{HTMLElement("label")}} tengan la fuente correcta:

```css
label {
  font:
    0.8em "typewriter",
    sans-serif;
}
```

Los campos de texto requieren algunas reglas comunes. En otras palabras, eliminamos sus {{cssxref("border","borders")}} y {{cssxref("background","backgrounds")}}, y redefinimos sus {{cssxref("padding")}} y {{cssxref("margin")}}:

```css
input,
textarea {
  font:
    1.4em/1.5em "handwriting",
    cursive,
    sans-serif;
  border: none;
  padding: 0 10px;
  margin: 0;
  width: 80%;
  background: none;
}
```

Cuando uno de estos campos tienen el foco, lo resaltamos con un fondo transparente gris claro (siempre es importante tener un estilo de foco, para la usabilidad y la accesibilidad del teclado):

```css
input:focus,
textarea:focus {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}
```

Ahora que nuestros campos de texto están completos, necesitamos ajustar la visualización de los campos de texto de una y varias líneas para que coincidan, ya que normalmente no se verán igual usando los valores predeterminados.

#### Ajustando las áreas de texto

Los elementos {{HTMLElement("textarea")}} se representan de forma predeterminada como un elemento de bloque en línea. Las dos cosas importantes aquí son las propiedades {{cssxref("resize")}} y {{cssxref("overflow")}}. Si bien nuestro diseño es un diseño de tamaño fijo, y podríamos usar la propiedad `resize` para evitar que los usuarios cambien el tamaño de nuestro campo de texto de varias líneas, es mejor no evitar que los usuarios cambien el tamaño de un `textarea` si así lo desean. La propiedad {{cssxref("overflow")}} se usa para hacer que el campo se represente de manera más consistente en todos los navegadores. Algunos navegadores tienen por defecto el valor `auto`, mientras que otros tienen por defecto el valor `scroll`. En nuestro caso, es mejor asegurarse de que todos usen `auto`:

```css
textarea {
  display: block;

  padding: 10px;
  margin: 10px 0 0 -10px;
  width: 100%;
  height: 90%;

  border-right: 1px solid;

  /* resize  : none; */
  overflow: auto;
}
```

#### Dar estilo al botón de enviar

El elemento {{HTMLElement("button")}} es realmente conveniente para diseñar con CSS; puedes hacer lo que quieras, incluso usando [pseudo-elementos](/es/docs/Web/CSS/Pseudo-elements):

```css
button {
  padding: 5px;
  font: bold 0.6em sans-serif;
  border: 2px solid #333;
  border-radius: 5px;
  background: none;
  cursor: pointer;
  transform: rotate(-1.5deg);
}

button:after {
  content: " >>>";
}

button:hover,
button:focus {
  outline: none;
  background: #000;
  color: #fff;
}
```

### El resultado final

¡Y voilá! Su formulario ahora debería verse así:

![](updated-form-screenshot.jpg)

> **Nota:** Si su ejemplo no funciona como esperaba y desea compararlo con nuestra versión, puede encontrarlo en GitHub; [verlo en vivo](https://mdn.github.io/learning-area/html/forms/postcard-example/) (ver también el [código fuente](https://github.com/mdn/learning-area/tree/master/html/forms/postcard-example)).

## ¡Pon a prueba tus habilidades!

Has llegado al final de este artículo, pero ¿puedes recordar la información más importante? Puedes encontrar algunas pruebas adicionales para verificar que ha retenido esta información antes de continuar; consulte [Ponga a prueba sus habilidades: Conceptos básicos de estilo](/es/docs/Learn/Forms/Test_your_skills:_Styling_basics).

## Resumen

Como puede ver, siempre que queramos crear formularios con solo campos de texto y botones, es fácil diseñarlos usando CSS. [En el próximo artículo](/es/docs/Learn/Forms/Advanced_form_styling), veremos cómo manejar los controles de formulario que caen en las categorías "malo" y "feo".

{{PreviousMenuNext("Learn/Forms/Other_form_controls","Learn/Forms/Advanced_form_styling","Learn/Forms")}}

### Temas avanzados

- [Cómo crear controles de formulario personalizados](/es/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Envío de formularios a través de JavaScript](/es/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Tabla de compatibilidad de propiedades para controles de formulario](/es/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
