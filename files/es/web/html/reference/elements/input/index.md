---
title: "`<input>`: el elemento HTML de entrada"
short-title: <input>
slug: Web/HTML/Reference/Elements/input
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

El elemento **`<input>`** [HTML](/es/docs/Web/HTML) se usa para crear controles interactivos en formularios web con el fin de recibir datos del usuario. Existe una amplia variedad de tipos de datos de entrada y widgets de control disponibles, según el dispositivo y el {{Glossary("user agent", "agente de usuario")}}. El elemento `<input>` es uno de los más potentes y complejos de todo HTML debido a la gran cantidad de combinaciones posibles entre tipos de entrada y atributos.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;text&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="name">Nombre (de 4 a 8 caracteres):</label>

<input
  type="text"
  id="name"
  name="name"
  required
  minlength="4"
  maxlength="8"
  size="10" />
```

```css interactive-example
label {
  display: block;
  font:
    1rem "Fira Sans",
    sans-serif;
}

input,
label {
  margin: 0.4rem 0;
}
```

## Tipos de \<input>

La forma en que funciona un `<input>` varía considerablemente según el valor de su atributo [`type`](#type), por lo que cada tipo se documenta en sus propias páginas de referencia. Si no se especifica este atributo, el tipo predeterminado que se adopta es `text`.

Los tipos disponibles son los siguientes:

<table class="no-markdown">
  <colgroup>
    <col />
    <col style="width: 50%" />
    <col />
  </colgroup>
  <thead>
    <tr>
      <th>Tipo</th>
      <th>Descripción</th>
      <th>Ejemplos básicos</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("input/button", "button")}}</td>
      <td>
        Un botón pulsable sin comportamiento predeterminado, que muestra el valor del atributo <a href="#value"><code>value</code></a>, vacío de forma predeterminada.
      </td>
      <td id="examplebutton">
        <pre class="brush: html hidden">
&#x3C;input type="button" name="button" value="Botón" /></pre>
        {{EmbedLiveSample("examplebutton",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/checkbox", "checkbox")}}</td>
      <td>Una casilla de verificación que permite seleccionar o deseleccionar valores individuales.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        Un control para especificar un color; abre un selector de color al activarse en los navegadores compatibles.
      </td>
      <td id="examplecolor">
        <pre class="brush: html hidden">
&#x3C;input type="color" name="color"/></pre>
        {{EmbedLiveSample("examplecolor",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/date", "date")}}</td>
      <td>
        Un control para introducir una fecha (año, mes y día, sin hora).
        Abre un selector de fecha o ruedas numéricas para año, mes y día
        al activarse en los navegadores compatibles.
      </td>
      <td id="exampledate">
        <pre class="brush: html hidden">
&#x3C;input type="date" name="date"/></pre>
        {{EmbedLiveSample("exampledate",200,55)}}
      </td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td>
        Un control para introducir una fecha y hora, sin zona horaria. Abre un
        selector de fecha o ruedas numéricas para los componentes de fecha y hora al activarse en los navegadores compatibles.
      </td>
      <td id="exampledtl">
        <pre class="brush: html hidden">
&#x3C;input type="datetime-local" name="datetime-local"/></pre>
        {{EmbedLiveSample("exampledtl",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/email", "email")}}</td>
      <td>
        Un campo para editar una dirección de correo electrónico. Se ve como un
        input de <code>text</code>, pero incluye parámetros de validación y muestra el teclado
        correspondiente en los navegadores y dispositivos compatibles con teclados dinámicos.
      </td>
      <td id="exampleemail">
        <pre class="brush: html hidden">
&#x3C;input type="email" name="email"/></pre>
        {{EmbedLiveSample("exampleemail",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/file", "file")}}</td>
      <td>
        Un control que permite al usuario seleccionar un archivo.
        Usa el atributo <a href="#accept"><code>accept</code></a> para definir los tipos de archivo que el control puede seleccionar.
      </td>
      <td id="examplefile">
        <pre class="brush: html hidden">
&#x3C;input type="file" accept="image/*, text/*" name="file"/></pre>
        {{EmbedLiveSample("examplefile",'100%',55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/hidden", "hidden")}}</td>
      <td>
        Un control que no se muestra en pantalla, pero cuyo valor se envía al
        servidor. Hay un ejemplo en la siguiente columna, ¡pero está oculto!
      </td>
      <td id="examplehidden">
        <pre class="brush: html hidden">
&#x3C;input id="userId" name="userId" type="hidden" value="abc123" /></pre
        >
        {{EmbedLiveSample("examplehidden",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/image", "image")}}</td>
      <td>
        Un botón <code>submit</code> gráfico. Muestra una imagen definida por el atributo <code>src</code>.
        El atributo <a href="#alt"><code>alt</code></a> se muestra si falta el <a href="#src"><code>src</code></a> de la imagen.
      </td>
      <td id="exampleimage">
        <pre class="brush: html hidden">
&#x3C;input type="image" name="image" src="" alt="entrada de imagen"/></pre>
        {{EmbedLiveSample("exampleimage",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td>Un control para introducir un mes y un año, sin zona horaria.</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        Un control para introducir un número. Muestra un spinner y añade
        validación predeterminada. Muestra un teclado numérico en algunos
        dispositivos con teclados dinámicos.
      </td>
      <td id="examplenumber">
        <pre class="brush: html hidden">
&#x3C;input type="number" name="number"/></pre>
        {{EmbedLiveSample("examplenumber",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/password", "password")}}</td>
      <td>
        Un campo de texto de una sola línea cuyo valor se oculta.
        Alerta al usuario si el sitio no es seguro.
      </td>
      <td id="examplepassword">
        <pre class="brush: html hidden">
&#x3C;input type="password" name="password"/></pre>
        {{EmbedLiveSample("examplepassword",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/radio", "radio")}}</td>
      <td>
        Un botón de radio que permite seleccionar un único valor entre varias opciones con el mismo valor <a href="#name"><code>name</code></a>.
      </td>
      <td id="exampleradio">
        <pre class="brush: html hidden">
&#x3C;input type="radio" name="radio"/></pre
        >
        {{EmbedLiveSample("exampleradio",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td>
        Un control para introducir un número cuyo valor exacto no es importante.
        Se muestra como un widget de rango que, de forma predeterminada, toma el valor intermedio.
        Se usa junto con <a href="#min"><code>min</code></a> y <a href="#max"><code>max</code></a> para definir el rango de valores aceptables.
      </td>
      <td id="examplerange">
        <pre class="brush: html hidden">
&#x3C;input type="range" name="range" min="0" max="25"/></pre>
        {{EmbedLiveSample("examplerange",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/reset", "reset")}}</td>
      <td>
        Un botón que restablece el contenido del formulario a sus valores predeterminados. No se recomienda su uso.
      </td>
      <td id="examplereset">
        <pre class="brush: html hidden">
&#x3C;input type="reset" name="reset"/></pre
        >
        {{EmbedLiveSample("examplereset",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/search", "search")}}</td>
      <td>
        Un campo de texto de una sola línea para introducir cadenas de búsqueda.
        Los saltos de línea se eliminan automáticamente del valor introducido. Puede
        incluir un icono para borrar el contenido en los navegadores compatibles.
        Muestra un icono de búsqueda en lugar de la tecla Intro en algunos
        dispositivos con teclados dinámicos.
      </td>
      <td id="examplesearch">
        <pre class="brush: html hidden">
&#x3C;input type="search" name="search"/></pre>
        {{EmbedLiveSample("examplesearch",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/submit", "submit")}}</td>
      <td>Un botón que envía el formulario.</td>
      <td id="examplesubmit">
        <pre class="brush: html hidden">
&#x3C;input type="submit" name="submit"/></pre>
        {{EmbedLiveSample("examplesubmit",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/tel", "tel")}}</td>
      <td>
        Un control para introducir un número de teléfono. Muestra un teclado
        telefónico en algunos dispositivos con teclados dinámicos.
      </td>
      <td id="exampletel">
        <pre class="brush: html hidden">
&#x3C;input type="tel" name="tel"/></pre>
        {{EmbedLiveSample("exampletel",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/text", "text")}}</td>
      <td>
        El valor predeterminado. Un campo de texto de una sola línea. Los
        saltos de línea se eliminan automáticamente del valor introducido.
      </td>
      <td id="exampletext">
        <pre class="brush: html hidden">
&#x3C;input type="text" name="text"/></pre
        >
        {{EmbedLiveSample("exampletext",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td>Un control para introducir un valor de hora sin zona horaria.</td>
      <td id="exampletime">
        <pre class="brush: html hidden">
&#x3C;input type="time" name="time"/></pre>
        {{EmbedLiveSample("exampletime",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/url", "url")}}</td>
      <td>
        Un campo para introducir una URL. Se ve como un campo de <code>text</code>, pero
        incluye parámetros de validación y muestra el teclado correspondiente
        en los navegadores y dispositivos compatibles con teclados dinámicos.
      </td>
      <td id="exampleurl">
        <pre class="brush: html hidden">
&#x3C;input type="url" name="url"/></pre
        >
        {{EmbedLiveSample("exampleurl",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td>
        Un control para introducir una fecha compuesta por un número de año-semana y un número de semana, sin zona horaria.
      </td>
      <td id="exampleweek">
        <pre class="brush: html hidden">
&#x3C;input type="week" name="week"/></pre>
        {{EmbedLiveSample("exampleweek",200,55)}}
      </td>
    </tr>
    <tr>
      <th colspan="3">Valores obsoletos</th>
    </tr>
    <tr>
      <td><code>datetime</code> {{deprecated_inline}}</td>
      <td>
        Un control para introducir una fecha y hora (hora, minuto, segundo y fracción de segundo) basada en la zona horaria UTC.
      </td>
      <td id="exampledatetime">
        <pre class="brush: html hidden">
&#x3C;input type="datetime" name="datetime"/></pre>
        {{EmbedLiveSample("exampledatetime",200,75)}}
      </td>
    </tr>
  </tbody>
</table>

## Atributos

El elemento `<input>` es tan potente debido a sus atributos; el atributo [`type`](#type), descrito con los ejemplos anteriores, es el más importante. Dado que cada elemento `<input>`, sin importar su tipo, se basa en la interfaz {{domxref("HTMLInputElement")}}, técnicamente todos comparten exactamente el mismo conjunto de atributos. Sin embargo, en la práctica, la mayoría de los atributos solo tienen efecto en un subconjunto específico de tipos de entrada. Además, la forma en que algunos atributos afectan a un input depende de su tipo, con un impacto distinto según el caso.

Esta sección incluye una tabla con todos los atributos junto con una breve descripción. A continuación, se presenta una lista que describe cada atributo con mayor detalle e indica con qué tipos de entrada están asociados. Los atributos comunes a la mayoría o a todos los tipos de entrada se definen con mayor detalle más adelante. Los atributos exclusivos de tipos de entrada específicos —o aquellos comunes a todos los tipos pero que presentan comportamientos especiales al utilizarse con un tipo concreto— se documentan en las páginas correspondientes a dichos tipos.

Los atributos del elemento `<input>` incluyen los [atributos globales de HTML](/es/docs/Web/HTML/Reference/Global_attributes) y, además:

| Atributo                                      | Tipo(s)                                                                     | Descripción                                                                                                   |
| --------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                      | Pista sobre el tipo de archivo esperado en los controles de carga de archivos                                 |
| [`alpha`](#alpha)                             | `color`                                                                     | Opacidad del color                                                                                            |
| [`alt`](#alt)                                 | `image`                                                                     | Atributo alt para el tipo image. Obligatorio por motivos de accesibilidad                                     |
| [`autocapitalize`](#autocapitalize)           | todos excepto `url`, `email` y `password`                                   | Controla la capitalización automática del texto introducido.                                                  |
| [`autocomplete`](#autocomplete)               | todos excepto `checkbox`, `radio` y los botones                             | Sugerencia para la función de autocompletado de formularios                                                   |
| [`capture`](#capture)                         | `file`                                                                      | Método de captura de medios en los controles de carga de archivos                                             |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                         | Indica si el control está marcado                                                                             |
| [`colorspace`](#colorspace)                   | `color`                                                                     | El [espacio de color](/es/docs/Glossary/Color_space) que debe usarse para seleccionar el valor del color      |
| [`dirname`](#dirname)                         | `hidden`, `text`, `search`, `url`, `tel`, `email`                           | Nombre del campo de formulario que se usa para enviar la direccionalidad del elemento al enviar el formulario |
| [`disabled`](#disabled)                       | todos                                                                       | Indica si el control de formulario está deshabilitado                                                         |
| [`form`](#form)                               | todos                                                                       | Asocia el control con un elemento form                                                                        |
| [`formaction`](#formaction)                   | `image`, `submit`                                                           | URL que se usa para enviar el formulario                                                                      |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                           | Tipo de codificación de los datos del formulario que se usa al enviarlo                                       |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                           | Método HTTP que se usa para enviar el formulario                                                              |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                           | Omite la validación de los controles del formulario al enviarlo                                               |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                           | Contexto de navegación para el envío del formulario                                                           |
| [`height`](#height)                           | `image`                                                                     | Igual que el atributo height de {{htmlelement('img')}}; dimensión vertical                                    |
| [`list`](#list)                               | todos excepto `hidden`, `password`, `checkbox`, `radio` y los botones       | Valor del atributo id del elemento {{htmlelement('datalist')}} de las opciones de autocompletado.             |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`        | Valor máximo                                                                                                  |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                         | Longitud máxima (en número de caracteres) de `value`                                                          |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`        | Valor mínimo                                                                                                  |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                         | Longitud mínima (en número de caracteres) de `value`                                                          |
| [`multiple`](#multiple)                       | `email`, `file`                                                             | Booleano. Indica si se permiten varios valores                                                                |
| [`name`](#name)                               | todos                                                                       | Nombre del control de formulario. Se envía junto con el formulario como parte de un par nombre/valor          |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                         | Patrón que debe coincidir con `value` para que sea válido                                                     |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`               | Texto que aparece en el control de formulario cuando no tiene ningún valor establecido                        |
| [`popovertarget`](#popovertarget)             | `button`                                                                    | Designa un `<input type="button">` como control de un elemento popover                                        |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                                    | Especifica la acción que debe realizar un control de popover                                                  |
| [`readonly`](#readonly)                       | todos excepto `hidden`, `range`, `color`, `checkbox`, `radio` y los botones | Booleano. El valor no se puede editar                                                                         |
| [`required`](#required)                       | todos excepto `hidden`, `range`, `color` y los botones                      | Booleano. Se requiere un valor o que el elemento esté marcado para poder enviar el formulario                 |
| [`size`](#size)                               | `text`, `search`, `url`, `tel`, `email`, `password`                         | Tamaño del control                                                                                            |
| [`src`](#src)                                 | `image`                                                                     | Igual que el atributo `src` de {{htmlelement('img')}}; dirección del recurso de imagen                        |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`        | Valores incrementales válidos                                                                                 |
| [`switch`](#switch)                           | `checkbox`                                                                  | Indica si el input checkbox debe representarse como un switch                                                 |
| [`type`](#type)                               | todos                                                                       | Tipo de control de formulario                                                                                 |
| [`value`](#value)                             | todos excepto `image`                                                       | El valor del control. Cuando se especifica en el HTML, corresponde al valor inicial                           |
| [`width`](#width)                             | `image`                                                                     | Igual que el atributo `width` de {{htmlelement('img')}}                                                       |

A continuación de las descripciones de los atributos estándar se incluyen algunos atributos adicionales no estándar.

### Atributos individuales

- [`accept`](/es/docs/Web/HTML/Reference/Attributes/accept)
  - : Válido únicamente para el tipo de entrada `file`, el atributo `accept` define qué tipos de archivo se pueden seleccionar en un control de carga `file`. Consulta el tipo de entrada {{HTMLElement("input/file", "file")}}.

- `alpha` {{experimental_inline}}
  - : Válido únicamente para el tipo de entrada `color`, el atributo `alpha` permite al usuario final establecer la opacidad del color que está seleccionando.

- `alt`
  - : Válido únicamente para el botón `image`, el atributo `alt` proporciona texto alternativo para la imagen, mostrando su valor si falta el [`src`](#src) de la imagen o si esta no llega a cargarse. Consulta el tipo de entrada {{HTMLElement("input/image", "image")}}.

- `autocapitalize`
  - : Controla si el texto introducido se capitaliza automáticamente y, en tal caso, de qué manera. Consulta la página del atributo global [`autocapitalize`](/es/docs/Web/HTML/Reference/Global_attributes/autocapitalize) para más información.

- [`autocomplete`](/es/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : (**No** es un atributo booleano). El atributo [`autocomplete`](/es/docs/Web/HTML/Reference/Attributes/autocomplete) toma como valor una cadena separada por espacios que describe, si corresponde, qué tipo de funcionalidad de autocompletado debe ofrecer el input. Una implementación típica de autocompletado recuerda valores introducidos previamente en el mismo campo, pero también pueden existir formas más complejas de autocompletado. Por ejemplo, un navegador podría integrarse con la lista de contactos de un dispositivo para autocompletar direcciones `email` en un campo de correo electrónico. Consulta [`autocomplete`](/es/docs/Web/HTML/Reference/Attributes/autocomplete) para conocer los valores permitidos.

    El atributo `autocomplete` es válido en `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` y `password`. Este atributo no tiene efecto en los tipos de entrada que no devuelven datos numéricos o de texto, siendo válido para todos los tipos de entrada excepto `checkbox`, `radio`, `file` o cualquiera de los tipos de botón.

    Consulta el [atributo `autocomplete`](/es/docs/Web/HTML/Reference/Attributes/autocomplete) para más información, incluida la relacionada con la seguridad de las contraseñas y la forma en que `autocomplete` se comporta de manera ligeramente distinta en `hidden` respecto a otros tipos de entrada.

- `autofocus`
  - : Un atributo booleano que, si está presente, indica que el input debe recibir el foco automáticamente cuando la página haya terminado de cargarse (o cuando se haya mostrado el elemento {{HTMLElement("dialog")}} que lo contiene).

    > [!NOTE]
    > Un elemento con el atributo `autofocus` puede recibir el foco antes de que se dispare el evento {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}.

    Ningún documento puede tener más de un elemento con el atributo `autofocus`. Si se coloca en más de un elemento, recibe el foco el primero que tenga el atributo.

    El atributo `autofocus` no se puede usar en inputs de tipo `hidden`, ya que estos no pueden recibir el foco.

    > [!WARNING]
    > Enfocar un control de formulario automáticamente puede confundir a las personas con discapacidad visual que usan tecnología de lectura de pantalla, así como a personas con discapacidades cognitivas. Cuando se asigna `autofocus`, los lectores de pantalla "teletransportan" al usuario hasta el control de formulario sin avisarle antes.

    Ten especial cuidado con la accesibilidad al aplicar el atributo `autofocus`. Enfocar un control automáticamente puede provocar que la página se desplace al cargarse. El foco también puede hacer que se muestren teclados dinámicos en algunos dispositivos táctiles. Aunque un lector de pantalla anunciará la etiqueta del control de formulario que recibe el foco, no anunciará nada anterior a esa etiqueta, y un usuario vidente con un dispositivo pequeño también perderá el contexto que aportaba el contenido previo.

- [`capture`](/es/docs/Web/HTML/Reference/Attributes/capture)
  - : Introducido en la especificación HTML Media Capture y válido únicamente para el tipo de entrada `file`, el atributo `capture` define qué medio —micrófono, video o cámara— debe usarse para capturar un nuevo archivo que subir mediante el control `file`, en los escenarios compatibles. Consulta el tipo de entrada {{HTMLElement("input/file", "file")}}.
- `checked`
  - : Válido tanto para el tipo `radio` como para `checkbox`, `checked` es un atributo booleano. Si está presente en un tipo `radio`, indica que ese botón de radio es el que está seleccionado actualmente dentro del grupo de botones con el mismo nombre. Si está presente en un tipo `checkbox`, indica que la casilla está marcada de forma predeterminada (al cargar la página). _No_ indica si la casilla está marcada en un momento dado: si su estado cambia, este atributo de contenido no refleja el cambio. (Solo se actualiza el [atributo IDL `checked` de `HTMLInputElement`](/es/docs/Web/API/HTMLInputElement)).

    > [!NOTE]
    > A diferencia de otros controles, el valor de las casillas de verificación y los botones de radio solo se incluye en los datos enviados si están `checked` en ese momento. Si lo están, se envían el nombre y el valor de los controles marcados.
    >
    > Por ejemplo, si una casilla cuyo `name` es `fruit` tiene un `value` de `cherry` y está marcada, los datos del formulario enviados incluirán `fruit=cherry`. Si la casilla no está activa, no aparece en absoluto en los datos del formulario. El `value` predeterminado para las casillas de verificación y los botones de radio es `on`.

- `colorspace` {{experimental_inline}}
  - : Válido únicamente para el tipo de entrada `color`, el atributo `colorspace` especifica el [espacio de color](/es/docs/Glossary/Color_space) que utiliza el input de `type="color"`. Los posibles valores {{Glossary("enumerated", "enumerados")}} son:
    - `"limited-srgb"`: El color está en el espacio de color {{glossary("RGB", "sRGB")}}. Esto incluye valores {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}}, {{cssxref("color_value/hwb", "hwb()")}} y {{cssxref("hex-color")}}. El valor del color se limita a 8 bits por componente `r`, `g` y `b`. Este es el valor predeterminado.
    - `"display-p3"`: El [espacio de color Display P3](/es/docs/Glossary/Color_space#display-p3), por ejemplo, `color(display-p3 1.84 -0.19 0.72 / 0.6)`

- [`dirname`](/es/docs/Web/HTML/Reference/Attributes/dirname)
  - : Válido para los tipos de entrada `hidden`, `text`, `search`, `url`, `tel` y `email`, el atributo `dirname` permite enviar la direccionalidad del elemento. Cuando se incluye, el control de formulario se envía con dos pares nombre/valor: el primero es [`name`](#name) y [`value`](#value), y el segundo es el valor del atributo `dirname` como nombre, con un valor de `ltr` o `rtl` según lo establezca el navegador.

    ```html
    <form action="page.html" method="post">
      <label>
        Fruta:
        <input type="text" name="fruit" dirname="fruit-dir" value="cherry" />
      </label>
      <input type="submit" />
    </form>
    <!-- page.html?fruit=cherry&fruit-dir=ltr -->
    ```

    Al enviar el formulario anterior, el input hace que se envíen tanto el par `name` / `value` de `fruit=cherry` como el par `dirname`/ dirección de `fruit-dir=ltr`.
    Para más información, consulta el [atributo `dirname`](/es/docs/Web/HTML/Reference/Attributes/dirname).

- [`disabled`](/es/docs/Web/HTML/Reference/Attributes/disabled)
  - : Un atributo booleano que, si está presente, indica que el usuario no debe poder interactuar con el input. Los inputs deshabilitados suelen representarse con un color más tenue o mediante alguna otra señal que indique que el campo no está disponible para su uso.

    En concreto, los inputs deshabilitados no reciben el evento {{domxref("Element/click_event", "click")}}, y tampoco se envían junto con el formulario.

    > [!NOTE]
    > Aunque la especificación no lo exige, Firefox, de forma predeterminada, [conserva el estado dinámico de deshabilitado](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) de un `<input>` entre cargas de página. Usa el atributo [`autocomplete`](#autocomplete) para controlar esta funcionalidad.

- [`form`](/es/docs/Web/HTML/Reference/Attributes/form)
  - : Una cadena que especifica el elemento {{HTMLElement("form")}} con el que está asociado el input (es decir, su **formulario propietario**). El valor de esta cadena, si está presente, debe coincidir con el [`id`](#id) de un elemento `<form>` en el mismo documento. Si no se especifica este atributo, el elemento `<input>` se asocia con el formulario contenedor más cercano, si existe alguno.

    El atributo `form` te permite colocar un input en cualquier parte del documento pero incluirlo en un formulario ubicado en otro lugar.

    > [!NOTE]
    > Un input solo puede asociarse con un formulario.

- `formaction`
  - : Válido únicamente para los tipos de entrada `image` y `submit`. Consulta el tipo de entrada {{HTMLElement("input/submit", "submit")}} para más información.
- `formenctype`
  - : Válido únicamente para los tipos de entrada `image` y `submit`. Consulta el tipo de entrada {{HTMLElement("input/submit", "submit")}} para más información.
- `formmethod`
  - : Válido únicamente para los tipos de entrada `image` y `submit`. Consulta el tipo de entrada {{HTMLElement("input/submit", "submit")}} para más información.
- `formnovalidate`
  - : Válido únicamente para los tipos de entrada `image` y `submit`. Consulta el tipo de entrada {{HTMLElement("input/submit", "submit")}} para más información.
- `formtarget`
  - : Válido únicamente para los tipos de entrada `image` y `submit`. Consulta el tipo de entrada {{HTMLElement("input/submit", "submit")}} para más información.
- `height`
  - : Válido únicamente para el botón de entrada `image`, `height` indica la altura del archivo de imagen que se mostrará para representar el botón de envío gráfico. Consulta el tipo de entrada {{HTMLElement("input/image", "image")}}.
- `id`
  - : Atributo global válido para todos los elementos, incluidos todos los tipos de entrada; define un identificador único (ID) que debe ser único en todo el documento. Su propósito es identificar el elemento al enlazarlo. El valor se usa como valor del atributo `for` de {{htmlelement('label')}} para vincular la etiqueta con el control de formulario. Consulta {{htmlelement('label')}}.
- `inputmode`
  - : Un valor global válido para todos los elementos que indica a los navegadores qué tipo de configuración de teclado virtual utilizar al editar el elemento o su contenido. Los valores incluyen `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal` y `search`.
- `list`
  - : El valor asignado al atributo `list` debe ser el {{domxref("Element.id", "id")}} de un elemento {{HTMLElement("datalist")}} ubicado en el mismo documento. El `<datalist>` proporciona una lista de valores predefinidos que se sugieren al usuario para este input. Los valores de la lista que no sean compatibles con el [`type`](#type) no se incluyen entre las opciones sugeridas. Los valores proporcionados son sugerencias, no requisitos: los usuarios pueden elegir un valor de esta lista predefinida o proporcionar uno diferente.

    Es válido en `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` y `color`.

    Según las especificaciones, el atributo `list` no es compatible con los tipos `hidden`, `password`, `checkbox`, `radio`, `file`, ni con ninguno de los tipos de botón.

    Según el navegador, el usuario puede ver una paleta de colores personalizada sugerida, marcas a lo largo de un rango, o incluso un input que se abre como un {{HTMLElement("select")}} pero que permite valores no incluidos en la lista. Consulta la [tabla de compatibilidad con navegadores](/es/docs/Web/HTML/Reference/Elements/datalist#compatibilidad_con_navegadores) para conocer el comportamiento en los demás tipos de entrada.

    Consulta el elemento {{htmlelement('datalist')}}.

- [`max`](/es/docs/Web/HTML/Reference/Attributes/max)
  - : Válido en `date`, `month`, `week`, `time`, `datetime-local`, `number` y `range`, define el valor más alto dentro del rango de valores permitidos. Si el [`value`](#value) introducido en el elemento lo supera, el elemento falla la [validación de restricciones](/es/docs/Web/HTML/Guides/Constraint_validation). Si el valor del atributo `max` no es un número, el elemento no tiene valor máximo.

    Existe un caso especial: si el tipo de dato es periódico (como en fechas u horas), el valor de `max` puede ser menor que el de `min`, lo que indica que el rango puede dar la vuelta; por ejemplo, esto permite especificar un rango horario de 10 p. m. a 4 a. m.

- [`maxlength`](/es/docs/Web/HTML/Reference/Attributes/maxlength)
  - : Válido en `text`, `search`, `url`, `tel`, `email` y `password`, define la longitud máxima de cadena (medida en {{glossary("UTF-16", "unidades de código UTF-16")}}) que el usuario puede introducir en el campo. Debe ser un valor entero igual o mayor que 0. Si no se especifica `maxlength`, o se especifica un valor no válido, el campo no tiene longitud máxima. Este valor también debe ser mayor o igual que el de `minlength`.

    El input fallará la [validación de restricciones](/es/docs/Web/HTML/Guides/Constraint_validation) si la longitud del texto introducido en el campo supera el límite de `maxlength` {{glossary("UTF-16", "unidades de código UTF-16")}}. De forma predeterminada, los navegadores impiden que el usuario introduzca más caracteres de los permitidos por el atributo `maxlength`. La validación de restricciones solo se aplica cuando el usuario modifica el valor. Consulta [Validación en el lado del cliente](#validación_en_el_lado_del_cliente) para más información.

- [`min`](/es/docs/Web/HTML/Reference/Attributes/min)
  - : Válido en `date`, `month`, `week`, `time`, `datetime-local`, `number` y `range`, define el valor más negativo dentro del rango de valores permitidos. Si el [`value`](#value) introducido en el elemento es menor que este, el elemento falla la [validación de restricciones](/es/docs/Web/HTML/Guides/Constraint_validation). Si el valor del atributo `min` no es un número, el elemento no tiene valor mínimo.

    Este valor debe ser menor o igual al valor del atributo `max`. Si el atributo `min` está presente pero no se especifica o no es válido, no se aplica ningún valor `min`. Si el atributo `min` es válido y un valor no vacío es menor que el mínimo permitido por `min`, la validación de restricciones impedirá el envío del formulario. Consulta [Validación en el lado del cliente](#validación_en_el_lado_del_cliente) para más información.

    Existe un caso especial: si el tipo de dato es periódico (como fechas u horas), el valor de `max` puede ser menor que el de `min`, lo que indica que el rango puede dar la vuelta; por ejemplo, esto permite especificar un rango horario de 10 p. m. a 4 a. m.

- [`minlength`](/es/docs/Web/HTML/Reference/Attributes/minlength)
  - : Válido en `text`, `search`, `url`, `tel`, `email` y `password`, define la longitud mínima de cadena (medida en {{glossary("UTF-16", "unidades de código UTF-16")}}) que el usuario puede introducir en el campo. Debe ser un valor entero no negativo, menor o igual que el especificado por `maxlength`. Si no se especifica `minlength`, o se especifica un valor no válido, el input no tiene longitud mínima.

    El input fallará la [validación de restricciones](/es/docs/Web/HTML/Guides/Constraint_validation) si la longitud del texto introducido es menor que `minlength` {{glossary("UTF-16", "unidades de código UTF-16")}}, lo que impedirá el envío del formulario. La validación de restricciones solo se aplica cuando el usuario cambia el valor. Consulta [Validación en el lado del cliente](#validación_en_el_lado_del_cliente) para más información.

- [`multiple`](/es/docs/Web/HTML/Reference/Attributes/multiple)
  - : El atributo booleano `multiple`, si se establece, indica que el usuario puede introducir direcciones de correo separadas por comas en el widget de email, o elegir más de un archivo con el input `file`. Consulta los tipos de entrada {{HTMLElement("input/email", "email")}} y {{HTMLElement("input/file", "file")}}.

- `name`
  - : Una cadena que especifica un nombre para el control de entrada. Este nombre se envía junto con el valor del control cuando se envían los datos del formulario.

    Considera `name` como un atributo obligatorio (aunque no lo sea). Si un input no tiene `name` especificado, o `name` está vacío, ¡el valor no se envía junto con el formulario! (Tampoco se envían los controles deshabilitados, los botones de radio sin marcar, las casillas de verificación sin marcar ni los botones de reinicio).

    Hay dos casos especiales:
    1. `_charset_`: Si se usa como nombre de un elemento `<input>` de tipo {{HTMLElement("input/hidden", "hidden")}}, el {{Glossary("user agent", "agente de usuario")}} establece automáticamente el `value` del input con la codificación de caracteres usada para enviar el formulario.
    2. `isindex`: Por razones históricas, no se permite el nombre [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name).

    El atributo [`name`](#name) genera un comportamiento particular en los botones de radio.

    Solo se puede marcar un botón de radio a la vez dentro de un grupo con el mismo nombre. Al seleccionar cualquier botón de radio de ese grupo, se deselecciona automáticamente el que estuviera marcado en el mismo grupo. Si se envía el formulario, se envía el valor de ese único botón marcado junto con el nombre.

    Al navegar con Tab por una serie de botones de radio con el mismo nombre, si uno está marcado, ese es el que recibe el foco. Si no están agrupados en el orden del código fuente y uno del grupo está marcado, al llegar al primero del grupo la navegación con Tab omite todos los que no estén marcados. Es decir, si uno está marcado, Tab omite los botones de radio sin marcar del grupo. Si ninguno está marcado, el grupo recibe el foco al llegar al primer botón con ese nombre.

    Una vez que uno de los botones de radio de un grupo tiene el foco, las teclas de flecha permiten navegar por todos los botones de radio con el mismo nombre, incluso si no están agrupados en el orden del código fuente.

    Cuando a un elemento input se le asigna un `name`, ese nombre pasa a formar parte de la propiedad {{domxref("HTMLFormElement.elements")}} del elemento form propietario. Si tienes un input cuyo `name` es `guest` y otro cuyo `name` es `hat-size`, puedes usar el siguiente código:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    Tras ejecutar este código, `guestName` será el {{domxref("HTMLInputElement")}} correspondiente al campo `guest`, y `hatSize` el objeto del campo `hat-size`.

    > [!WARNING]
    > Evita asignar a los elementos de formulario un `name` que coincida con una propiedad integrada del formulario, ya que en ese caso sobrescribirías la propiedad o el método predefinido con esta referencia al input correspondiente.

- [`pattern`](/es/docs/Web/HTML/Reference/Attributes/pattern)
  - : Válido en `text`, `search`, `url`, `tel`, `email` y `password`, el atributo `pattern` se usa para compilar una expresión regular que el [`value`](#value) del input debe cumplir para pasar la [validación de restricciones](/es/docs/Web/HTML/Guides/Constraint_validation). Debe ser una expresión regular de JavaScript válida, del tipo usado por {{jsxref("RegExp")}} y documentado en nuestra [guía sobre expresiones regulares](/es/docs/Web/JavaScript/Guide/Regular_expressions). No se deben incluir barras diagonales alrededor del texto del patrón. Al compilar la expresión regular:
    1. el patrón se envuelve implícitamente con `^(?:` y `)$`, de modo que se requiera la coincidencia con el valor _completo_ del input, es decir, `^(?:<patrón>)$`.
    2. se especifica el indicador `'v'` para que el patrón se trate como una secuencia de puntos de código Unicode, en lugar de {{Glossary("ASCII")}}.

    Si el atributo `pattern` está presente pero no tiene valor especificado o no es válido, no se aplica ninguna expresión regular y el atributo se ignora por completo. Si el atributo pattern es válido y un valor no vacío no coincide con el patrón, la validación de restricciones impedirá el envío del formulario. Si está presente [`multiple`](/es/docs/Web/HTML/Reference/Attributes/multiple), la expresión regular compilada se compara con cada valor separado por comas.

    > [!NOTE]
    > Si usas el atributo `pattern`, informa al usuario sobre el formato esperado incluyendo un texto explicativo cercano. También puedes incluir un atributo [`title`](#title) para explicar los requisitos que debe cumplir el patrón; la mayoría de los navegadores muestran este title como un tooltip. La explicación visible es obligatoria por accesibilidad. El tooltip es solo una mejora adicional.

    Consulta [Validación en el lado del cliente](#validación_en_el_lado_del_cliente) para más información.

- [`placeholder`](/es/docs/Web/HTML/Reference/Attributes/placeholder)
  - : Válido en `text`, `search`, `url`, `tel`, `email`, `password` y `number`, el atributo `placeholder` ofrece al usuario una breve pista del tipo de información esperada en el campo. Debe ser una palabra o frase corta que sugiera el tipo de dato esperado, en lugar de una explicación o instrucción. El texto _no debe_ incluir saltos de línea. Por ejemplo, si un campo debe capturar el nombre de pila del usuario y su etiqueta es "Nombre", un placeholder adecuado podría ser "p. ej., Mustafa".

    > [!NOTE]
    > El atributo `placeholder` no es tan útil semánticamente como otras formas de explicar tu formulario, y puede causar problemas técnicos inesperados en tu contenido. Consulta [Etiquetas](#etiquetas) para más información.

- `popovertarget`
  - : Convierte un elemento `<input type="button">` en un botón de control de popover; toma como valor el ID del elemento popover que va a controlar. Consulta la página principal de la {{domxref("Popover API", "Popover API", "", "nocode")}} para más detalles. Establecer una relación entre un popover y su botón invocador mediante el atributo `popovertarget` tiene dos efectos adicionales útiles:
    - El navegador crea una relación implícita [`aria-details`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) y [`aria-expanded`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) entre el popover y el invocador, y coloca el popover en una posición lógica dentro del orden de navegación por teclado cuando se muestra. Esto hace que el popover sea más accesible para usuarios de teclado y de tecnologías de asistencia (AT) (consulta también [Características de accesibilidad de los popover](/es/docs/Web/API/Popover_API/Using)).
    - El navegador crea una referencia de anclaje implícita entre ambos, lo que facilita mucho posicionar los popovers en relación con sus controles mediante [Posicionamiento de anclaje CSS](/es/docs/Web/CSS/Guides/Anchor_positioning). Consulta [Posicionamiento de anclaje de popover](/es/docs/Web/API/Popover_API/Using) para más detalles.

- `popovertargetaction`
  - : Especifica la acción que se realizará en un elemento popover controlado por un `<input type="button">`. Los valores posibles son:
    - `"hide"`
      - : El botón ocultará un popover que esté mostrándose. Si intentas ocultar un popover que ya está oculto, no se realiza ninguna acción.
    - `"show"`
      - : El botón mostrará un popover que esté oculto. Si intentas mostrar un popover que ya se está mostrando, no se realiza ninguna acción.
    - `"toggle"`
      - : El botón alterna el popover entre mostrado y oculto. Si el popover está oculto, se mostrará; si se está mostrando, se ocultará. Si se omite `popovertargetaction`, `"toggle"` es la acción predeterminada que realizará el botón de control.

- [`readonly`](/es/docs/Web/HTML/Reference/Attributes/readonly)
  - : Un atributo booleano que, cuando está presente, indica que el usuario no debe poder editar el valor del input. El atributo `readonly` es compatible con los tipos de entrada `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number` y `password`.

    Consulta [Atributo HTML: `readonly`](/es/docs/Web/HTML/Reference/Attributes/readonly) para más información.

- [`required`](/es/docs/Web/HTML/Reference/Attributes/required)
  - : `required` es un atributo booleano que, cuando está presente, indica que el usuario debe especificar un valor para el input antes de poder enviar el formulario propietario. El atributo `required` es compatible con los inputs `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio` y `file`.

    Consulta [Validación en el lado del cliente](#validación_en_el_lado_del_cliente) y [Atributo HTML: `required`](/es/docs/Web/HTML/Reference/Attributes/required) para más información.

- [`size`](/es/docs/Web/HTML/Reference/Attributes/size)
  - : Válido en `email`, `password`, `tel`, `url` y `text`, el atributo `size` especifica cuánto del input se muestra. Básicamente produce el mismo resultado que establecer la propiedad CSS {{cssxref("width")}}, con algunas particularidades. La unidad real del valor depende del tipo de entrada. Para `password` y `text` es un número de caracteres (o unidades `em`) con un valor predeterminado de `20`; para los demás, son píxeles (o unidades `px`). El `width` de CSS tiene prioridad sobre el atributo `size`.

- `src`
  - : Válido únicamente para el botón de entrada `image`, `src` es una cadena que especifica la URL del archivo de imagen que se mostrará para representar el botón de envío gráfico. Consulta el tipo de entrada {{HTMLElement("input/image", "image")}}.

- [`step`](/es/docs/Web/HTML/Reference/Attributes/step)
  - : Válido en `date`, `month`, `week`, `time`, `datetime-local`, `number` y `range`, el atributo [`step`](/es/docs/Web/HTML/Reference/Attributes/step) es un número que especifica la granularidad que debe cumplir el valor. Solo son válidos los valores que representan un número entero de pasos desde la base del paso. La base del paso es [`min`](/es/docs/Web/HTML/Reference/Attributes/min) si está especificado, [`value`](#value) en caso contrario, o `0` si no se proporciona ninguno de los dos (excepto para `week`, cuya base de paso predeterminada es −259,200,000, correspondiente al inicio de la semana `1970-W01`).

    Si no se incluye explícitamente:
    - `step` toma el valor predeterminado 1 para `number` y `range`.
    - Cada tipo de entrada de fecha/hora tiene un valor `step` predeterminado adecuado para su tipo; consulta las páginas de cada input: [`date`](/es/docs/Web/HTML/Reference/Elements/input/date#step), [`datetime-local`](/es/docs/Web/HTML/Reference/Elements/input/datetime-local#step), [`month`](/es/docs/Web/HTML/Reference/Elements/input/month#step), [`time`](/es/docs/Web/HTML/Reference/Elements/input/time#step) y [`week`](/es/docs/Web/HTML/Reference/Elements/input/week#step).

    El valor debe ser un número positivo (entero o decimal) o el valor especial `any`, lo que significa que no se aplica ningún incremento, y se permite cualquier valor (salvo otras restricciones, como [`min`](/es/docs/Web/HTML/Reference/Attributes/min) y [`max`](/es/docs/Web/HTML/Reference/Attributes/max)).

    Por ejemplo, si tienes `<input type="number" min="10" step="2">`, cualquier entero par igual o mayor que `10` es válido. Si se omite, en `<input type="number">` cualquier entero es válido, pero los decimales (como `4.2`) no lo son, porque `step` toma el valor predeterminado `1`. Para que `4.2` fuera válido, `step` tendría que establecerse en `any`, 0.1, 0.2, o el valor de `min` tendría que terminar en `.2`, como en `<input type="number" min="-5.2">`.

    > [!NOTE]
    > Cuando los datos introducidos por el usuario no se ajustan a la configuración de pasos, el valor se considera inválido en la validación de restricciones y coincidirá con la pseudoclase `:invalid`.

    Consulta [Validación en el lado del cliente](#validación_en_el_lado_del_cliente) para más información.

- [`switch`](/es/docs/Web/HTML/Reference/Elements/input/checkbox#switch) {{experimental_inline}} {{non-standard_inline}}
  - : Válido únicamente en inputs `checkbox`, `switch` es un atributo booleano que indica si el input checkbox debe representarse como un switch.

    > [!NOTE]
    > Este atributo aún es experimental y tiene compatibilidad limitada con los navegadores. El atributo se ignora en los navegadores no compatibles.

- `tabindex`
  - : Atributo global válido para todos los elementos, incluidos todos los tipos de entrada; es un atributo entero que indica si el elemento puede recibir el foco de entrada (si es enfocable) y si debe participar en la navegación secuencial por teclado. Dado que todos los tipos de entrada, salvo el tipo hidden, son enfocables, este atributo no debería usarse en controles de formulario, ya que hacerlo requeriría gestionar el orden de foco de todos los elementos del documento, con el riesgo de perjudicar la usabilidad y la accesibilidad si se hace incorrectamente.

- `title`
  - : Atributo global válido para todos los elementos, incluidos todos los tipos de entrada, que contiene un texto con información orientativa relacionada con el elemento al que pertenece. Esta información suele presentarse al usuario como un tooltip, aunque no necesariamente. El `title` NO debe usarse como explicación principal del propósito del control de formulario. En su lugar, usa el elemento {{htmlelement('label')}} con un atributo `for` cuyo valor sea el [`id`](#id) del control de formulario. Consulta [Etiquetas](#etiquetas) más abajo.

- `type`
  - : Una cadena que especifica el tipo de control a mostrar. Por ejemplo, para crear una casilla de verificación se usa el valor `checkbox`. Si se omite (o se especifica un valor desconocido), se usa el tipo de entrada `text`, creando un campo de texto plano.

    Los valores permitidos se enumeran más arriba, en [Tipos de input](#tipos_de_input).

- `value`
  - : El valor del control de entrada. Cuando se especifica en el HTML, es el valor inicial, y a partir de ahí se puede modificar o consultar en cualquier momento mediante JavaScript, accediendo a la propiedad `value` del objeto {{domxref("HTMLInputElement")}} correspondiente. El atributo `value` siempre es opcional, aunque debería considerarse obligatorio para `checkbox`, `radio` y `hidden`.

- `width`
  - : Válido solo para el botón de entrada `image`, `width` es el ancho del archivo de imagen que se mostrará para representar el botón de envío gráfico. Consulta el tipo de entrada {{HTMLElement("input/image", "image")}}.

### Atributos no estándar

Los siguientes atributos no estándar también están disponibles en algunos navegadores. Como regla general, debes evitar usarlos salvo que sea inevitable.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Atributo</th>
      <th scope="col">Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#incremental"><code>incremental</code></a></td>
      <td>
        Indica si se deben enviar eventos repetidos {{domxref("HTMLInputElement/search_event", "search")}} para permitir actualizar los resultados de búsqueda en tiempo real mientras el usuario sigue editando el valor del campo.
        <strong>Solo WebKit y Blink (Safari, Chrome, Opera, etc.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code> {{deprecated_inline}}</td>
      <td>
        <p>Una cadena que indica el tipo de acción que se realizará cuando el usuario
        presione la tecla <kbd>Enter</kbd> o <kbd>Return</kbd> mientras edita el
        campo; se usa para determinar una etiqueta adecuada para esa tecla en un
        teclado virtual. <strong>Como este atributo está obsoleto, usa <a href="/es/docs/Web/HTML/Reference/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> en su lugar.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Establece la orientación del control deslizante de rango. <strong>Solo Firefox</strong>.
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        El número máximo de elementos que deben mostrarse en la lista desplegable de búsquedas anteriores. <strong>Solo Safari.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        Un valor booleano que indica si solo se debe permitir al usuario elegir un directorio (o directorios, si también está presente <a href="#multiple"><code>multiple</code></a>)
      </td>
    </tr>
  </tbody>
</table>

- `incremental` {{non-standard_inline}}
  - : El atributo booleano `incremental` es una extensión de WebKit y Blink (compatible, por tanto, con Safari, Opera, Chrome, etc.) que, si está presente, le indica al {{Glossary("user agent", "agente de usuario")}} que trate el input como una búsqueda en vivo. Mientras el usuario edita el valor del campo, el agente de usuario envía eventos {{domxref("HTMLInputElement/search_event", "search")}} al objeto {{domxref("HTMLInputElement")}} que representa el cuadro de búsqueda. Esto permite que tu código actualice los resultados de búsqueda en tiempo real mientras el usuario edita la consulta.

    Si no se especifica `incremental`, el evento {{domxref("HTMLInputElement/search_event", "search")}} solo se envía cuando el usuario inicia una búsqueda de forma explícita (por ejemplo, presionando la tecla <kbd>Enter</kbd> o <kbd>Return</kbd> mientras edita el campo).

    El evento `search` está limitado en frecuencia, de modo que no se envía más a menudo que un intervalo definido por la implementación.

- `orient` {{non-standard_inline}}
  - : Similar a la propiedad CSS no estándar -moz-orient, que afecta a los elementos {{htmlelement('progress')}} y {{htmlelement('meter')}}, el atributo `orient` define la orientación del control deslizante de rango. Los valores incluyen `horizontal`, que representa el rango de forma horizontal, y `vertical`, que lo representa de forma vertical. Consulta [Crear controles de formulario verticales](/es/docs/Web/CSS/Guides/Writing_modes/Vertical_controls) para conocer un enfoque moderno para crear controles de formulario verticales.

- `results` {{non-standard_inline}}
  - : El atributo `results`, compatible solo con Safari, es un valor numérico que permite sobrescribir el número máximo de entradas que se muestran en el menú desplegable nativo del elemento `<input>` de las búsquedas anteriores.

    El valor debe ser un número decimal no negativo. Si no se proporciona, o se indica un valor no válido, se usa el número máximo predeterminado del navegador.

- `webkitdirectory` {{non-standard_inline}}
  - : El atributo booleano `webkitdirectory`, si está presente, indica que solo los directorios deben estar disponibles para que el usuario los seleccione en la interfaz del selector de archivos. Consulta {{domxref("HTMLInputElement.webkitdirectory")}} para más detalles y ejemplos.

    Aunque originalmente solo se implementó en navegadores basados en WebKit, `webkitdirectory` también se puede usar en Microsoft Edge, así como en Firefox 50 y versiones posteriores. Sin embargo, aunque tiene un soporte relativamente amplio, todavía no es estándar y no debe usarse a menos que no tengas otra alternativa.

## Métodos

La interfaz {{domxref("HTMLInputElement")}}, que representa los elementos `<input>` en el DOM, ofrece los siguientes métodos. También están disponibles los métodos especificados por las interfaces padre {{domxref("HTMLElement")}}, {{domxref("Element")}}, {{domxref("Node")}} y {{domxref("EventTarget")}}.

- {{domxref("HTMLInputElement.checkValidity", "checkValidity()")}}
  - : Devuelve `true` si el valor del elemento pasa las comprobaciones de validez; de lo contrario, devuelve `false` y dispara un evento {{domxref("HTMLInputElement.invalid_event", "invalid")}} en el elemento.
- {{domxref("HTMLInputElement.reportValidity", "reportValidity()")}}
  - : Devuelve `true` si el valor del elemento pasa las comprobaciones de validez; de lo contrario, devuelve `false`, dispara un evento {{domxref("HTMLInputElement.invalid_event", "invalid")}} en el elemento y (si el evento no se cancela) informa del problema al usuario.
- {{domxref("HTMLInputElement.select", "select()")}}
  - : Selecciona todo el contenido del elemento `<input>`, si su contenido es seleccionable. Para elementos sin contenido de texto seleccionable (como un selector visual de color o un input de fecha con calendario), este método no hace nada.
- {{domxref("HTMLInputElement.setCustomValidity", "setCustomValidity()")}}
  - : Establece un mensaje personalizado que se mostrará si el valor del elemento de entrada no es válido.
- {{domxref("HTMLInputElement.setRangeText", "setRangeText()")}}
  - : Establece el contenido del rango de caracteres especificado del elemento de entrada con una cadena dada. Está disponible un parámetro `selectMode` que permite controlar cómo se ve afectado el contenido existente.
- {{domxref("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}
  - : Selecciona el rango de caracteres especificado dentro de un elemento de entrada textual. No hace nada en los inputs que no se presentan como campos de texto.
- {{domxref("HTMLInputElement.showPicker", "showPicker()")}}
  - : Muestra el selector del navegador para el elemento de entrada, el mismo que normalmente aparecería al seleccionar el elemento, pero activado mediante la pulsación de un botón u otra interacción del usuario.
- {{domxref("HTMLInputElement.stepDown", "stepDown()")}}
  - : Disminuye el valor de un input numérico en uno, de forma predeterminada, o en el número de unidades especificado.
- {{domxref("HTMLInputElement.stepUp", "stepUp()")}}
  - : Incrementa el valor de un input numérico en uno o en el número de unidades especificado.

## CSS

Al ser elementos reemplazados, los inputs cuentan con algunas características que no se aplican a elementos que no son de formulario. Existen selectores CSS que pueden apuntar específicamente a controles de formulario según sus características de interfaz, conocidos como pseudoclases de interfaz de usuario (UI). El elemento input también se puede seleccionar por tipo mediante selectores de atributo. Además, hay algunas propiedades especialmente útiles.

### Pseudoclases de interfaz de usuario

<table class="no-markdown">
  <caption>
    Pseudoclases relevantes para el
    elemento
    <code>&#x3C;input></code>:
  </caption>
  <thead>
    <tr>
      <th>Pseudoclase</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{Cssxref(":enabled")}}</td>
      <td>
        Cualquier elemento actualmente habilitado que se pueda activar (seleccionar,
        hacer clic, escribir, etc.) o recibir el foco, y que además tenga un
        estado deshabilitado en el que no se pueda activar ni recibir el foco.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Cualquier elemento actualmente deshabilitado que tenga un estado habilitado,
        es decir, que de otro modo podría activarse (seleccionarse, recibir clics,
        escritura, etc.) o recibir el foco si no estuviera deshabilitado.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-only")}}</td>
      <td>Elemento que el usuario no puede editar</td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-write")}}</td>
      <td>Elemento que el usuario puede editar.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":placeholder-shown")}}</td>
      <td>
        Elemento que actualmente muestra <a href="#placeholder">texto <code>placeholder</code></a>,
        incluidos los elementos <code>&#x3C;input></code> y {{HTMLElement("textarea")}} que tienen el atributo <a href="#placeholder"><code>placeholder</code></a> presente y que, por el momento, no tienen ningún valor.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Elementos de formulario que son el predeterminado dentro de un grupo de
        elementos relacionados. Coincide con los tipos de entrada {{HTMLElement("input/checkbox", "checkbox")}} y
        {{HTMLElement("input/radio", "radio")}} que estaban marcados al cargar o renderizar la página.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Coincide con los tipos de entrada {{HTMLElement("input/checkbox", "checkbox")}} y
        {{HTMLElement("input/radio", "radio")}} que están marcados en ese momento
        (y con el {{HTMLElement("option")}} de un
        {{HTMLElement("select")}} que está seleccionado actualmente).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        Elementos {{HTMLElement("input/checkbox", "checkbox")}}
        cuya propiedad indeterminate se ha establecido en true mediante JavaScript,
        elementos {{HTMLElement("input/radio", "radio")}}, cuando todos los
        botones de radio con el mismo valor de name en el formulario están sin marcar, y
        elementos {{HTMLElement("progress")}} en estado indeterminado
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Controles de formulario a los que se les puede aplicar validación de
        restricciones y que actualmente son válidos.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Controles de formulario a los que se aplica validación de restricciones y
        que actualmente no son válidos. Coincide con un control de formulario
        cuyo valor no cumple las restricciones establecidas por sus atributos, como
        <a href="#required"><code>required</code></a>,
        <a href="#pattern"><code>pattern</code></a>,
        <a href="#step"><code>step</code></a> y <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        Un input no vacío cuyo valor actual está dentro de los límites del
        rango especificados por los atributos <a href="#min"><code>min</code></a> y <a href="#max"><code>max</code></a>, y por <a href="#step"><code>step</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        Un input no vacío cuyo valor actual NO está dentro de los límites del
        rango especificados por los atributos <a href="#min"><code>min</code></a>
        y <a href="#max"><code>max</code></a>, o que
        no cumple la restricción de <a href="#step"><code>step</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        Elemento <code>&#x3C;input></code>, {{HTMLElement("select")}} o {{HTMLElement("textarea")}} que tiene establecido el atributo <a href="#required"><code>required</code></a>.
        Solo coincide con elementos que pueden ser obligatorios.
        Incluir el atributo en un elemento que no admite ser obligatorio no produce coincidencia.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        Elemento <code>&#x3C;input></code>, {{HTMLElement("select")}} o
        {{HTMLElement("textarea")}} que NO tiene establecido el atributo <a href="#required"><code>required</code></a>.
        No coincide con elementos que no pueden ser obligatorios.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":blank")}}</td>
      <td>
        Elementos <code>&#x3C;input></code> y {{HTMLElement("textarea")}} que actualmente no tienen ningún valor.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":user-invalid")}}</td>
      <td>
        Similar a <code>:invalid</code>, pero se activa al perder el foco (blur).
        Coincide con un input no válido, pero solo después de la interacción del usuario, por ejemplo al enfocar el control, al abandonarlo o al
        intentar enviar el formulario que contiene el control no válido.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":open")}}</td>
      <td>
        Elementos <code>&lt;input&gt;</code> que muestran un selector para que el usuario elija un valor (por ejemplo <a href="/es/docs/Web/HTML/Reference/Elements/input/color"><code>&lt;input type="color"&gt;</code></a>) — pero solo cuando el elemento está en el estado abierto, es decir, cuando el selector se muestra.
      </td>
    </tr>
  </tbody>
</table>

#### Ejemplo de pseudoclases

Podemos aplicar estilos a la etiqueta de una casilla de verificación según si está marcada o no. En este ejemplo, aplicamos estilos a {{cssxref('color')}} y {{cssxref('font-weight')}} del {{htmlelement('label')}} que aparece justo después de un input marcado. No aplicamos ningún estilo si el `input` no está marcado.

```html hidden
<input id="checkboxInput" type="checkbox" />
<label for="checkboxInput">Activa o desactiva la casilla de verificación</label>
```

```css
input:checked + label {
  color: red;
  font-weight: bold;
}
```

{{EmbedLiveSample('Ejemplo_de_pseudoclases', 500, 80)}}

### Selectores de atributo

Es posible apuntar a distintos tipos de controles de formulario según su [`type`](#type) usando [selectores de atributo](/es/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors). Los selectores de atributos CSS coinciden con los elementos basándose en la presencia de un atributo o en el valor de un atributo determinado.

```css
/* coincide con un input de contraseña */
input[type="password"] {
}

/* coincide con un control de formulario cuyos valores válidos están limitados a un rango de valores */
input[min][max] {
}

/* coincide con un control de formulario con un atributo pattern */
input[pattern] {
}
```

### ::placeholder

De forma predeterminada, el texto del placeholder tiene una apariencia translúcida o gris claro. El pseudoelemento {{cssxref('::placeholder')}} representa el [texto `placeholder`](#placeholder) del input. Se puede estilizar con un subconjunto limitado de propiedades CSS.

```css
::placeholder {
  color: blue;
}
```

En una regla que use `::placeholder` en su selector solo se puede usar el subconjunto de propiedades CSS que se aplican al pseudoelemento {{cssxref("::first-line")}}.

### caret-color

Una propiedad específica de los elementos relacionados con la introducción de texto es la propiedad CSS {{cssxref("caret-color")}}, que permite establecer el color con el que se dibuja el cursor de texto:

#### HTML

```html
<label for="textInput">Fíjate en el cursor rojo:</label>
<input id="textInput" class="custom" size="32" />
```

#### CSS

```css
input.custom {
  caret-color: red;
  font:
    16px "Helvetica",
    "Arial",
    sans-serif;
}
```

#### Resultado

{{EmbedLiveSample('caret-color', 500, 80)}}

### field-sizing

La propiedad {{cssxref("field-sizing")}} permite controlar el comportamiento de dimensionamiento de los inputs de formulario (es decir, de forma predeterminada reciben un tamaño preferido fijo). Esta propiedad permite anular ese comportamiento predeterminado, dejando que los controles de formulario ajusten su tamaño al de su contenido.

Esta propiedad se suele usar para crear campos de formulario que se ajustan a su contenido y crecen a medida que se introduce más texto. Funciona con tipos de entrada que aceptan texto directo (por ejemplo, [`text`](/es/docs/Web/HTML/Reference/Elements/input/text) y [`url`](/es/docs/Web/HTML/Reference/Elements/input/url)), con el tipo de entrada [`file`](/es/docs/Web/HTML/Reference/Elements/input/file), y con elementos {{htmlelement("textarea")}}.

### object-position y object-fit

En ciertos casos (normalmente en inputs no textuales e interfaces especializadas), el elemento `<input>` es un {{ glossary("replaced elements", "elemento reemplazado")}}. Cuando lo es, la posición y el tamaño del elemento dentro de su marco se pueden ajustar mediante las propiedades CSS {{cssxref("object-position")}} y {{cssxref("object-fit")}}.

### Estilo

Para más información sobre cómo aplicar color a los elementos en HTML, consulta:

- [Aplicar color a elementos HTML usando CSS](/es/docs/Web/CSS/Guides/Colors/Applying_color).

Consulta también:

- [Estilo de formularios HTML](/es/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Estilo avanzado para formularios HTML](/es/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling), y

## Funcionalidades adicionales

### Etiquetas

Las etiquetas son necesarias para asociar texto de ayuda con un `<input>`. El elemento {{HTMLElement("label")}} proporciona información explicativa sobre un campo de formulario que _siempre_ resulta adecuada (aparte de cualquier inquietud de diseño que puedas tener). Nunca es mala idea usar `<label>` para explicar qué se debe ingresar en un `<input>` o {{HTMLElement("textarea")}}.

#### Etiquetas asociadas

El emparejamiento semántico de los elementos `<input>` y `<label>` es útil para las tecnologías de asistencia, como los lectores de pantalla. Al emparejarlos mediante el atributo [`for`](/es/docs/Web/HTML/Reference/Elements/label#for) del `<label>`, vinculas la etiqueta con el input de forma que los lectores de pantalla puedan describir los inputs a los usuarios con mayor precisión.

No basta con tener texto plano junto al elemento `<input>`. Por el contrario, la usabilidad y la accesibilidad requieren incluir un {{HTMLElement("label")}}, ya sea implícito o explícito:

```html
<!-- inaccesible -->
<p>Introduce tu nombre: <input id="name" type="text" size="30" /></p>

<!-- etiqueta implícita -->
<p>
  <label>Introduce tu nombre: <input id="name" type="text" size="30" /></label>
</p>

<!-- etiqueta explícita -->
<p>
  <label for="name">Introduce tu nombre: </label>
  <input id="name" type="text" size="30" />
</p>
```

El primer ejemplo no es accesible: no existe ninguna relación entre el texto y el elemento `<input>`.

Además de un nombre accesible, la etiqueta ofrece una zona de "impacto" más grande para que los usuarios de mouse y de pantallas táctiles puedan hacer clic o tocar. Al emparejar un `<label>` con un `<input>`, hacer clic en cualquiera de los dos enfocará el `<input>`. Si usas texto plano para "etiquetar" tu input, esto no ocurrirá. Que el texto forme parte del área de activación del input resulta útil para las personas con dificultades de control motriz.

Como desarrolladores web, es importante que nunca demos por hecho que las personas van a saber todo lo que nosotros sabemos. La diversidad de personas que usan la web —y, por extensión, tu sitio web— prácticamente garantiza que algunos de tus visitantes tendrán procesos de pensamiento o circunstancias distintas que los llevarán a interpretar tus formularios de forma muy diferente a la tuya si no cuentan con etiquetas claras y bien presentadas.

#### Los placeholders no son accesibles

El atributo [`placeholder`](#placeholder) permite especificar un texto que aparece dentro del propio área de contenido del elemento `<input>` cuando está vacío. Nunca debería ser necesario el placeholder para entender tus formularios. No es una etiqueta y no debe usarse como sustituto, porque no lo es. El placeholder se usa para dar una idea de cómo debería lucir el valor introducido, no como explicación o instrucción.

El placeholder no solo es inaccesible para los lectores de pantalla, sino que además desaparece en cuanto el usuario introduce cualquier texto en el control de formulario, o si el control ya tiene un valor. Los navegadores con funciones de traducción automática de páginas pueden omitir los atributos al traducir, por lo que el `placeholder` podría no traducirse.

> [!NOTE]
> No utilices el atributo [`placeholder`](#placeholder) si puedes evitarlo. Si necesitas etiquetar un elemento `<input>`, usa el elemento {{HTMLElement("label")}}.

### Validación en el lado del cliente

> [!WARNING]
> La validación en el lado del cliente es útil, pero _no_ garantiza que el servidor reciba datos válidos. Si los datos deben tener un formato específico, verifícalo _siempre_ también en el lado del servidor, y devuelve una [respuesta HTTP `400`](/es/docs/Web/HTTP/Reference/Status/400) si el formato no es válido.

Además de poder usar CSS para aplicar estilos a los inputs según sus estados de interfaz {{cssxref(":valid")}} o {{cssxref(":invalid")}} —según el estado actual de cada input, como se indicó antes en la sección [Pseudoclases de interfaz de usuario](#pseudoclases_de_interfaz_de_usuario)—, el navegador realiza validación en el lado del cliente al (intentar) enviar el formulario. Al enviarlo, si hay algún control de formulario que no supera la validación de restricciones, los navegadores compatibles muestran un mensaje de error en el primer control no válido, ya sea un mensaje predeterminado según el tipo de error o uno que hayas definido tú.

Algunos tipos de entrada y otros atributos limitan qué valores son válidos para un input determinado. Por ejemplo, `<input type="number" min="2" max="10" step="2">` significa que solo son válidos los números 2, 4, 6, 8 o 10. Podrían producirse varios errores, entre ellos `rangeUnderflow` si el valor es menor que 2, `rangeOverflow` si es mayor que 10, `stepMismatch` si el valor es un número entre 2 y 10 pero no un entero par (no cumple los requisitos del atributo `step`), o `typeMismatch` si el valor no es un número.

En los tipos de entrada cuyo dominio de valores posibles es periódico (es decir, al llegar al valor más alto, los valores vuelven al principio en lugar de terminar), es posible que los valores de las propiedades [`max`](#max) y [`min`](#min) aparezcan invertidos, lo que indica que el rango de valores permitidos comienza en `min`, da la vuelta hasta el valor más bajo posible y continúa hasta alcanzar `max`. Esto resulta especialmente útil para fechas y horas, como cuando quieres permitir un rango de 8 p. m. a 8 a. m.:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Ciertos atributos y sus valores pueden provocar un {{domxref('ValidityState')}} de error específico:

<table class="no-markdown">
  <caption>
    Los errores del objeto de validez dependen de los atributos de <code>&lt;input&gt;</code>
    y de sus valores:
  </caption>
  <thead>
    <tr>
      <th scope="col">Atributo</th>
      <th scope="col">Propiedad relevante</th>
      <th scope="col">Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#max"><code>max</code></a></td>
      <td>{{domxref('validityState.rangeOverflow')}}</td>
      <td>
        Ocurre cuando el valor es mayor que el máximo definido por
        el atributo <code>max</code>
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>{{domxref('validityState.tooLong')}}</td>
      <td>
        Ocurre cuando el número de caracteres es mayor que el número permitido por la propiedad <code>maxlength</code>
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>{{domxref('validityState.rangeUnderflow')}}</td>
      <td>
        Ocurre cuando el valor es menor que el mínimo definido por el atributo <code>min</code>
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>{{domxref('validityState.tooShort')}}</td>
      <td>
        Ocurre cuando el número de caracteres es menor que el requerido por la propiedad <code>minlength</code>
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>{{domxref('validityState.patternMismatch')}}</td>
      <td>
        Ocurre cuando se incluye un atributo pattern con una expresión regular válida y <code>value</code> no coincide con ella.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>{{domxref('validityState.valueMissing')}}</td>
      <td>
        Ocurre cuando el atributo <code>required</code> está presente, pero el valor es <code>null</code>, o el radio o checkbox no está marcado.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>{{domxref('validityState.stepMismatch')}}</td>
      <td>
        El valor no coincide con el incremento de step. El incremento predeterminado es <code>1</code>, por lo que en <code>type="number"</code>
        solo son válidos los enteros si no se incluye step. <code>step="any"</code> nunca genera este error.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>{{domxref('validityState.typeMismatch')}}</td>
      <td>
        Ocurre cuando el valor no es del tipo correcto; por ejemplo, un email que no contiene una <code>@</code> o una url que no incluye protocolo.
      </td>
    </tr>
  </tbody>
</table>

Si un control de formulario no tiene el atributo `required`, ningún valor, una cadena vacía, no es no válido. Incluso si están presentes los atributos anteriores, con la excepción de `required`, una cadena vacía no generará un error.

Podemos establecer límites sobre los valores que aceptamos, y los navegadores compatibles validarán de forma nativa estos valores de formulario y alertarán al usuario si hay algún error al enviarlo.

Además de los errores descritos en la tabla anterior, la interfaz `validityState` contiene las propiedades booleanas de solo lectura `badInput`, `valid` y `customError`. El objeto de validez incluye:

- {{domxref('validityState.valueMissing')}}
- {{domxref('validityState.typeMismatch')}}
- {{domxref('validityState.patternMismatch')}}
- {{domxref('validityState.tooLong')}}
- {{domxref('validityState.tooShort')}}
- {{domxref('validityState.rangeUnderflow')}}
- {{domxref('validityState.rangeOverflow')}}
- {{domxref('validityState.stepMismatch')}}
- {{domxref('validityState.badInput')}}
- {{domxref('validityState', 'validityState.valid')}}
- {{domxref('validityState', 'validityState.customError')}}

En cada una de estas propiedades booleanas, un valor `true` indica que la razón especificada por la que la validación puede haber fallado es verdadera, con la excepción de la propiedad `valid`, que es `true` si el valor del elemento cumple todas las restricciones.

Si hay un error, los navegadores compatibles alertarán al usuario e impedirán el envío del formulario. Una advertencia: si se establece un error personalizado con un valor verdadero (cualquier cosa que no sea una cadena vacía o `null`), se impedirá el envío del formulario. Si no hay ningún mensaje de error personalizado y ninguna de las demás propiedades devuelve true, `valid` será true y el formulario podrá enviarse.

```js
function validate(input) {
  let validityState = input.validity;
  if (validityState.valueMissing) {
    input.setCustomValidity("Se requiere un valor");
  } else if (validityState.rangeUnderflow) {
    input.setCustomValidity("Tu valor es demasiado bajo");
  } else if (validityState.rangeOverflow) {
    input.setCustomValidity("Tu valor es demasiado alto");
  } else {
    input.setCustomValidity("");
  }
}
```

La última línea, que establece el mensaje de validez personalizado como cadena vacía, es fundamental. Si el usuario comete un error y se establece la validez, el envío fallará, incluso si todos los valores son válidos, hasta que el mensaje sea `null`.

#### Ejemplo de error de validación personalizado

Si quieres mostrar un mensaje de error personalizado cuando un campo no supera la validación, debes usar la [API de validación de restricciones](/es/docs/Learn_web_development/Extensions/Forms/Form_validation#validar_formularios_utilizando_javascript) disponible en los elementos `<input>` (y relacionados). Toma como ejemplo el siguiente formulario:

```html
<form>
  <label for="name"
    >Introduce tu nombre de usuario (letras mayúsculas y minúsculas):
  </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Enviar</button>
</form>
```

Las funciones básicas de validación de formularios HTML harán que se muestre un mensaje de error predeterminado si intentas enviar el formulario sin rellenarlo correctamente, o con un valor que no coincide con el `pattern`.

Si en cambio quisieras mostrar mensajes de error personalizados, podrías usar JavaScript como el siguiente:

```js
const nameInput = document.querySelector("input");

nameInput.addEventListener("input", () => {
  nameInput.setCustomValidity("");
  nameInput.checkValidity();
});

nameInput.addEventListener("invalid", () => {
  if (nameInput.value === "") {
    nameInput.setCustomValidity("¡Introduce tu nombre de usuario!");
  } else {
    nameInput.setCustomValidity(
      "El nombre de usuario solo puede contener letras mayúsculas y minúsculas. ¡Inténtalo de nuevo!",
    );
  }
});
```

El ejemplo se muestra así:

{{EmbedLiveSample('Ejemplo_de_error_de_validación_personalizado')}}

En resumen:

- Comprobamos el estado de validez del elemento de entrada cada vez que cambia su valor, ejecutando el método `checkValidity()` a través del manejador del evento `input`.
- Si el valor no es válido, se dispara un evento `invalid` y se ejecuta la función manejadora de ese evento `invalid`. Dentro de ella determinamos, mediante un bloque `if ()`, si el valor no es válido porque está vacío o porque no coincide con el patrón, y establecemos un mensaje de error de validez personalizado.
- Como resultado, si el valor del input no es válido cuando se presiona el botón de envío, se mostrará uno de los mensajes de error personalizados.
- Si es válido, el formulario se enviará con normalidad. Para que esto ocurra, hay que cancelar la validez personalizada invocando `setCustomValidity()` con una cadena vacía. Por eso lo hacemos cada vez que se dispara el evento `input`. Si no lo haces, y previamente se había establecido una validez personalizada, el input se registrará como no válido aunque en el momento del envío contenga un valor válido.

> [!NOTE]
> Valida siempre las restricciones de entrada tanto en el lado del cliente como en el del servidor. La validación de restricciones no elimina la necesidad de validar también en el _lado del servidor_. Los navegadores antiguos o los usuarios malintencionados aún pueden enviar valores no válidos.

> [!NOTE]
> Firefox admitía un atributo de error propietario,`x-moz-errormessage`, en muchas versiones, lo que permitía establecer mensajes de error personalizados de forma similar. Se eliminó a partir de la versión 66 (consulta el [error 1513890 de Firefox](https://bugzil.la/1513890)).

### Localización

Los valores de entrada permitidos para ciertos tipos de `<input>` dependen de la configuración regional. En algunas regiones, 1,000.00 es un número válido, mientras que en otras la forma válida de ingresar ese número es 1.000,00.

Firefox utiliza la siguiente heurística para determinar la configuración regional para validar la entrada del usuario (al menos para `type="number"`):

- Intenta con el idioma especificado por un atributo `lang`/`xml:lang` en el elemento o en cualquiera de sus ancestros.
- Intenta con el idioma especificado en algún encabezado HTTP `Content-Language`. O bien,
- Si no se especifica ninguno, usa la configuración regional del navegador.

## Accesibilidad

### Etiquetas

Al incluir inputs, es un requisito de accesibilidad añadir etiquetas junto a ellos. Esto es necesario para que quienes usan tecnologías de asistencia puedan saber para qué sirve el input. Además, al hacer clic o tocar una etiqueta se enfoca el control de formulario asociado. Esto mejora la accesibilidad y la usabilidad para los usuarios videntes, ya que aumenta el área en la que se puede hacer clic o tocar para activar el control. Resulta especialmente útil (e incluso necesario) en los botones de radio y las casillas de verificación, que son pequeños. Para más información sobre etiquetas en general, consulta [Etiquetas](#etiquetas).

A continuación se muestra un ejemplo de cómo asociar el `<label>` con un elemento `<input>` siguiendo el estilo anterior. Debes asignar al `<input>` un atributo `id`. El `<label>` necesita entonces un atributo `for` cuyo valor sea el mismo que el `id` del input.

```html
<label for="peas">¿Te gustan los guisantes?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Tamaño

Los elementos interactivos, como los inputs de formulario, deben ofrecer un área lo bastante grande como para que resulte fácil activarlos. Esto ayuda a muchas personas, incluidas aquellas con dificultades de control motriz y quienes usan formas de entrada poco precisas, como un lápiz óptico o los dedos. Se recomienda un tamaño interactivo mínimo de 44×44 [píxeles CSS](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels).

- [Understanding Success Criterion 2.5.5: Target Size | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Target Size and 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Quick test: Large touch targets - The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

## Resumen técnico

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/docs/Web/HTML/Guides/Content_categories">Categorías de contenido</a>
      </th>
      <td>
        <a href="/es/docs/Web/HTML/Guides/Content_categories#flujo_de_contenido">Flujo de Contenido</a>, enlistado, enviable, restablecible, elemento asociado a formulario,
        <a href="/es/docs/Web/HTML/Guides/Content_categories#contenido_de_redacción">contenido de redacción</a>. Si su <a href="#type"><code>type</code></a> no es
        <code>hidden</code>, entonces es elemento etiquetable y contenido palpable.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>Ninguno; es un {{Glossary("void element", "elemento vacío")}}.</td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiqueta</th>
      <td>Debe tener etiqueta de apertura y no debe tener etiqueta de cierre.</td>
    </tr>
    <tr>
      <th scope="row">Elementos padre permitidos</th>
      <td>
        Cualquier elemento que acepte
        <a href="/es/docs/Web/HTML/Guides/Content_categories#contenido_de_redacción">contenido de redacción</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rol ARIA implícito</th>
      <td>
        <ul>
          <li>
            <code>type=button</code>:
            <code
              ><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=checkbox</code>:
            <code><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role">checkbox</a></code>
          </li>
          <li>
            <code>type=email</code>
            <ul>
              <li>
                sin atributo <code>list</code>:
                <code
                  ><a
                    href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                con atributo <code>list</code>: <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=image</code>:
            <code
              ><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=number</code>: <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role"><code>spinbutton</code></a>
          </li>
          <li><code>type=radio</code>: <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role"><code>radio</code></a></li>
          <li><code>type=range</code>: <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role"><code>slider</code></a></li>
          <li>
            <code>type=reset</code>:
            <code><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=search</code>
            <ul>
              <li>
                sin atributo <code>list</code>: <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role"><code>searchbox</code></a>
              </li>
              <li>
                con atributo <code>list</code>: <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=submit</code>:
            <code
              ><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=tel</code>
            <ul>
              <li>
                sin atributo <code>list</code>:
                <code><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                con atributo <code>list</code>: <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=text</code>
            <ul>
              <li>
                sin atributo <code>list</code>:
                <code><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                con atributo <code>list</code>: <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=url</code>
            <ul>
              <li>
                sin atributo <code>list</code>:
                <code
                  ><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a ></code>
              </li>
              <li>
                con atributo <code>list</code>: <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=color|date|datetime-local|file|hidden|month|password|time|week</code>:
            <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">sin rol correspondiente</a>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td>
        <ul>
          <li>
            <code>type=button</code>: <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role"><code>checkbox</code></a>,
            <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>,
            <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a>,
            <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role"><code>menuitem</code></a>,
            <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
            <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>menuitemradio</code></a>,
            <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>option</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role"><code>radio</code></a>,
            <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role"><code>switch</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role"><code>tab</code></a>
          </li>
          <li>
            <code>type=checkbox</code>: <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a> cuando se usa
            con <code>aria-pressed</code>,
            <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
            <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>option</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role"><code>switch</code></a>
          </li>
          <li>
            <code>type=image</code>: <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a>,
            <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role"><code>menuitem</code></a>,
            <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
            <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>menuitemradio</code></a>,
            <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role"><code>radio</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role"><code>switch</code></a>
          </li>
          <li>
            <code>type=radio</code>: <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>menuitemradio</code></a>
          </li>
          <li>
            <code>type=text</code> sin atributo <code>list</code>:
            <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role"><code>searchbox</code></a>,
            <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role"><code>spinbutton</code></a>
          </li>
          <li>
            <code>type=color|date|datetime-local|email|file|hidden|</code>
              <code>month|number|password|range|reset|search|submit|tel|url|week</code>
            o <code>text</code> con atributo <code>list</code>: no se permite ningún
            <code>role</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>{{domxref("HTMLInputElement")}}</td>
    </tr>
  </tbody>
</table>

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Propiedad CSS {{cssxref("appearance")}}
- [Tu primer formulario HTML](/es/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Cómo estructurar un formulario HTML](/es/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Los widgets de formulario nativos](/es/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Enviar datos de formulario](/es/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- [Validación de restricciones de formulario](/es/docs/Web/HTML/Guides/Constraint_validation)
- [Estilo de formularios HTML](/es/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
