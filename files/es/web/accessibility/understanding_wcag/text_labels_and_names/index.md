---
title: Etiquetas de texto y nombres
slug: Web/Accessibility/Understanding_WCAG/Text_labels_and_names
---

Hay muchas situaciones en las cuales un control, dialogo o cualquier otra característica de un sitio web deberían recibir un nombre o etiqueta descriptiva para permitir a los usuarios de técnologías asistivas entender cual es su propósito y ser capaz de entenderlo y operarlo correctamente. Hay un número de diferentes tipos de problemas en esta categoría, dependientes del contexto, y cada uno tiene su propia solución. Los diferentes problemas y soluciones son discutidas en las secciones posteriores.

## Utilizar el atributo alt para etiquetar elementos que ocupen un área que tiene el atributo href

En mapas de imágenes, cada elemento {{htmlelement("area")}} con un atributo `alt` definiendo un nombre que describa el recurso al que enlaza el area. Fallar al hacer eso provoca que un mapa de imagen sea difícil de usar para usuarios que usen tecnología asistiva — ellos necesitan texto alternativo para ser capaces de entender el propósito de una imagen.

### Ejemplos

El siguiente ejemplo muestra un simple mapa de imagen (tomada de [H24: Providing text alternatives for the area elements of image maps](https://www.w3.org/TR/WCAG20-TECHS/H24.html)):

```
<img src="welcome.gif" usemap="#map1"
    alt="Areas in the library. Select an area for
more information on that area." />
<map id="map1" name="map1">
  <area shape="rect" coords="0,0,30,30"
    href="reference.html" alt="Reference" />
  <area shape="rect" coords="34,34,100,100"
    href="media.html" alt="Audio visual lab" />
</map>
```

Ver la [página de referencia del elemento](/es/docs/Web/HTML/Element/area) [`<area>`](/es/docs/Web/HTML/Element/area) para unu ejemplo interactivo.

### Ver también

- {{htmlelement("area")}}
- [H24: Providing text alternatives for the area elements of image maps](https://www.w3.org/TR/WCAG20-TECHS/H24.html)

## Los diálogos deberían ser etiquetados

Para cualquier contenedor cuyo contenido actue como una caja de diálogo (por ejemplo, un modal preguntando al usuario realizar una elección o responder a una acción siendo tomada), debe tener una etiqueta descriptiva o nombre, para que la tecnología asistiva le permita al usuario descrubir fácilmente cual es su propósito.

Una caja de diálogo es generalmente denominada con un ARIA [`role="dialog"`](/es/docs/Web/Accessibility/ARIA/Roles/dialog_role) o [`role="alertdialog"`](/es/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alertdialog_role); se puede usar tanto el atributo [`aria-label`](/es/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) o [`aria-labelledby`](/es/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) para proporcionar una etiqueta.

### Ejemplos

El siguiente ejemplo muestra una caja de dialogo sencilla, definida como `role="dialog"` y etiquetada con `aria-labelledby`.

```
<div role="dialog" aria-labelledby="dialog1Title" aria-describedby="dialog1Desc">
  <h2 id="dialog1Title">Your personal details were successfully updated</h2>
  <p id="dialog1Desc">You can change your details at any time in the user account section.</p>
  <button>Close</button>
</div>
```

Si la caja de diálogo no tiene un encabezado, se puede usar `aria-label` para contener la etiqueta de texto:

```
<div role="dialog" aria-label="Personal details updated confirmation">
  <p>Your personal details were successfully updated. You can
    change your details at any time in the user account section.</p>
  <button>Close</button>
</div>
```

### Ver también

- [`role="dialog"`](/es/docs/Web/Accessibility/ARIA/Roles/dialog_role)
- [`role="alertdialog"`](/es/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alertdialog_role)
- [`aria-label`](/es/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute)
- [`aria-labelledby`](/es/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute)
- [WAI-ARIA: dialog role](https://www.w3.org/TR/wai-aria-1.2/#dialog)
- [Dialog authoring practices](https://www.w3.org/TR/wai-aria-practices/#dialog_roles_states_props)

## Los documentos deben tener un título

Es importante que cada documento HTML, incluya un elemento {{htmlelement("title")}} que describa el propósito de la página. Una técnica común de navegación para usuarios que usan tecnologías asistivas es inferir el contenido de la página leyendo su título. Si no hay título disponible, tienen que navegar por la página para determinar su contenido, lo cual puede ser un proceso largo y confuso.

### Ejemplos

El título para el artículo de refencia sobre el elemento {{htmlelement("title")}} es como sigue:

```
<title>&lt;title&gt;: The Document Title element - HTML: Hypertext Markup Language | MDN</title>
```

Otro ejemplo podría ser:

```
<title>Fill in your details to register — myGov services</title>
```

Para ayudar al usuario, se puede actualizar el titulo de la página para reflejar cambios significativos al estado de la página (como problemas en la validación de un formulario):

```
<title>2 errors — Fill in your details to register — myGov services</title>
```

### Ver también

- {{htmlelement("title")}}

## Contenido incrustado debe ser etiquetado

Asegurarse que elementos que incrusten contenido tengan un atributo título que describa el contenido incrustado. Esto incluye al elemento {{htmlelement("embed")}} y al elemento {{htmlelement("object")}}. Estos elementos son usualmente definidos por un contenido gráfico, similar a un elemento {{HTMLelement("img")}}. Un título descriptivo ayuda a los usuarios de tecnologías asistivas entender que muestra el elemento.

## Figuras con leyendas opcionales deberían ser etiquetadas

Para una mejor accesibilidad, incluir un {{HTMLElement("figcaption")}} dentro de un elemento {{HTMLElement("figure")}}, incluso si hacerlo es opcional técnicamente. La leyenda es adicional a cualquier texto alternativo en las imágenes dentro de la figura. La leyenda describe el proósito de una figura en el documento, que puede ser diferente de una descripción sencilla de un elemento visual, tal como lo proporciona el texto alternativo.

### Ejemplo

El siguiente ejemplo muestra código para una figura con un pie de página. El atributo `alt` del elemento {{htmlelement("img")}} describe la apariencia de la imagen; el elemento {{htmlelement("figcaption")}} lo describe desde una perspectiva funcional (en este caso, el nombre en latín de la flor de la imagen).

```
<figure>
  <img src="milkweed.jpg"
      alt="Black and white close-up photo of milkweed flowers">
 <figcaption>Asclepias verticillata</figcaption>
</figure>
```

## Los elementos de un conjuto campos deben ser etiquetados

Los elementos de un conjunto de campos (fieldset) deben tener un texto descriptivo, similar a otros elementos del formulario. Utilice el elemento {{htmlelement("legend")}} para describir el propósito de un conjunto de campos (fieldset).

## Utilizar una leyenda para etiquetar un conjunto de campos

Al agrupar un conjunto de elementos de un formulario con un elemento {{htmlelement("fieldset")}}, se debería incluir un elemento {{htmlelement("legend")}} anidado dento de éste, conteninedo una clara descripción del grupo.

Usuarios de tecnologías asistivas encuentras esta descripción útil cuando tratan de entender el propósito del grupo. Sin la leyenda, tienen que navegar individualmente por todos los controles del formulario en el grupo para inferir una idea del propósito general, lo que puede resultar confuso.

### Ejemplo

```
<form>
  <fieldset>
    <legend>Choose your favorite monster</legend>

    <input type="radio" id="kraken" name="monster">
    <label for="kraken">Kraken</label><br/>

    <input type="radio" id="sasquatch" name="monster">
    <label for="sasquatch">Sasquatch</label><br/>

    <input type="radio" id="mothman" name="monster">
    <label for="mothman">Mothman</label>
  </fieldset>
</form>
```

Puede ver un ejemplo interactivo en la [página de referencia de `<fieldset>`](/es/docs/Web/HTML/Element/fieldset).

### Ver también

- {{htmlelement("fieldset")}}
- {{htmlelement("legend")}}

## Los elementos de un formulario deben estar etiquetados

Todos los elementos dentro de un formulario deben tener un elemento {{htmlelement("label")}} que identifique su propósito. Esto aplica a todos los tipos de elementos {{htmlelement("input")}}, como también para elementos {{htmlelement("button")}}, {{htmlelement("output")}}, {{htmlelement("select")}}, {{htmlelement("textarea")}}, {{htmlelement("progress")}} y {{htmlelement("meter")}}, como para cualquier elemento con el [ARIA role](/es/docs/Web/Accessibility/ARIA/Roles/Switch_role) [`switch`](/es/docs/Web/Accessibility/ARIA/Roles/Switch_role).

El elemento del formulario puede ser puesto dentro de un elemento {{htmlelement("label")}}, en cuyo caso la asociación entre el elemento del formulario y la etiqueta es obvia por la estructura. O, se puede crear una asociación entre un {{htmlelement("label")}} y el elemento del formulario al especificar el valor `id` del elemento del formulario y el valor del atributo `for` de la etiqueta.

### Ejemplos

```
<label>I agree to the terms and conditions.
  <input type="checkbox" id="terms">
</label>

<input type="checkbox" id="emailoptin">
<label for="emailoptin">Yes, please send me news about this product.</label>
```

## Los elementos de un formulario deberían tener una etiqueta de texto visible

En adición a tener un elemento {{htmlelement("label")}} para cada elemento del formulario, estas etiquetas deberían ser visibles, no ocultarse. Las etiquetas visbles ayudan a _todos_ los usuarios entender el propósito de un elemento de formulario. No dependa de un texto temporal porque éste desaparece tan pronto como el usuario empieza a escribir.

## Los elementos marco ('frame') deben estar etiquetados

Los elementos marco ('frame'), tanto {{htmlelement("iframe")}} como el obsoleto y antiguo {{htmlelement("frame")}}, deben tener un título para describir el contenido del marco. Utilice el atributo `title` para etiquetar un elemento 'frame'. Sin un título, los usuarios que usen una tecnología asistiva tienen que navegar dentro del marco para entender que contiene, lo que puede ser difícil y confuso.

El elemento `<frame>` ya no forma parte de la especificación HTML en la versión HTML5. El soporte podría ser abandonado por los navegadores en el futuro. Además, es difícil para los lectores de pantalla el navegar páginas con elementos `<frame>`. Para una mejor accesibilidad y mantenimiento futuro, se debe rediseñar cualquier página que use marcos y reemplazarlos con el uso de CSS para lograr un diseño similar.

Como una mejor práctica, también proporcionar un {{htmlelement("title")}} para el documento que esta encapsulado en el marco, con un contenido identico al atributo `title` del marco. (Esto asumiendo que el documento encapsulado esta en control de uno, si no, tratar de coincidir el atributo `title` del marco con el título del documento.) Algunos lectores de pantalla reemplazan el contenido del atributo `title` con el contenido del {{htmlelement("title")}} del documento encapsulado. Es más seguro y más accesible el proporcionar el mismo título en ambos lugares.

### Ejemplos

```
<iframe
    title="MDN Web docs"
    width="300"
    height="200"
    src="https://developer.mozilla.org">
</iframe>
```

## Usar el atributo alt para etiquetar elementos mglyph

Al escribir ecuaciones con MathML, a cada elemento {{mathmlelement("mglyph")}} se le debe asignar el atributo `alt` conteniendo un nombre que describa el símbolo. Puesto que los elementos `mglyph` son usados para símbolos no estándar sin definiciones Unicode, los lectores de pantalla no serán capaces de automáticamente nombrarlos. El texto alternativo ayuda a los usuarios de lectores de pantalla entender el símbolo.

## Los encabezados deben ser etiquetados

Asegurarse que los encabezados tengan un contenido no vacío y no estén ocultos como con el CSS `display:none` o `aria-hidden=true`. Los usuarios de lectores de pantalla confían en los encabezados para entender la estructura y el contenido de un documento.

Además, es importante usar los [elementos de encabezado](/es/docs/Web/HTML/Element/Heading_Elements) sólo para los encabezados de sección reales, y no como una forma rápida de hacer que el texto se destaque. Los lectores de pantalla suelen "hojear" los encabezados de una página, de manera muy parecida a los usuarios con visión, el texto que no sea encabezado que se marca con elementos de encabezamiento puede causar confusión.

## Los encabezados deberían tener contenido de texto visible

Asegurarse que los encabezados tengan un contenido no vacío y no estén ocultos como con el CSS `display:none` or `aria-hidden=true`. Los usuarios de lectores de pantalla confían en los encabezados para entender la estructura y el contenido de un documento. No use encabezados para marcar imágenes u otro contenido gráfico.

## Utilizar el atributo title para describir el contenido de un \<iframe>

Asegurarse que los elementos {{htmlelement("iframe")}} tienen un atributo `title` para describir el contenido de un marco. Sin un título, los usuarios de tecnologías asistivas tienen que navegar dentro del marco para entender que contiene, lo que puede ser difícil y confuso.

Una mejor práctica consiste en proveer un {{htmlelement("title")}} al documento encapsulado por el marco, con un contenido identico al atributo `title` del marco. (Asumiendo que el documento encapsulado es propio, si no, tratar de hacer coincidir el atributo `title` del marco con el título del documento.) Algunos lectores de pantalla reemplazan el contenido del atributo `title` con el contenido del {{htmlelement("title")}} del documento encapsulado. Es más seguro y accesible definir el mismo título en ambos lugares.

## Contenido con imágenes deben ser etiquetados

Proporcionar un texto descriptivo para todas las imágenes y elementos parecidos a imágenes que tengan contenido (es decir que no sean decorativos. Esto incluye imágenes SVG, elementos {{htmlelement("img")}}, {{htmlelement("canvas")}}, {{htmlelement("map")}}, y {{htmlelement("area")}}, así como elementos {{htmlelement("input")}} donde este definido `type=image` y elementos {{htmlelement("object")}} donde el `type` empiece con `image/`. La forma típica de hacer esto es con el atributo `alt`. Asegurarse de que la descripción trasmite lo que muestra la imagen

### Ejemplo

```
<img src="milkweed.jgp"
     alt="Black and white close-up photo of milkweed flowers">
```

## Elementos interactivos deben ser etiquetados

Si un elemento esta destinado para que los usuarios interactúen con él, debe estar etiquetado. Los elementos interactivos incluyen enlaces ({{htmlelement("a")}}), elementos de un formulario, botones, y cualquier elemento que tenga manejadores de eventos para ratón o teclado. La forma para etiquetar un elemento depende de su tipo: para elementos de un formulario, utilizar un {{htmlelement("label")}}; para enlaces, botones y elementos sobre los que se puede hacere click, el contenido del texto del elemento suele proporcionar la etiqueta. Si no existe otra opción para etiquetar un elemento, utilizar el atributo [`aria-label`](/es/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute).

## Usar el atributo label en elementos optgroup

En un elemento {{htmlelement("optgroup")}}, utilizar el atributo `label` para describir el gupo para que tecnologías asistivas puedan acceder a dicha descripción para sus usuarios.

### Ejemplo

En este ejemplo, el atributo `label` en los elementos `<optgroup>` da un nombre de categoría para el grupo de opciones.

```
<label for="dino-select">Choose a dinosaur:</label>
<select id="dino-select">
    <optgroup label="Theropods">
        <option>Tyrannosaurus</option>
        <option>Velociraptor</option>
        <option>Deinonychus</option>
    </optgroup>
    <optgroup label="Sauropods">
        <option>Diplodocus</option>
        <option>Saltasaurus</option>
        <option>Apatosaurus</option>
    </optgroup>
</select>
```

## Las barras de herramientas deben ser etiquetadas cuando haya más de una barra

Si se define más una barra de herramientas en una aplicación web utilizando el rol ARIA `toolbar`, se debe usar el atributo [`aria-label`](/es/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) para etiquetar cada una de ellas de manera que pueda ser descrita por la tecnología de asistencia. Es una buena práctica etiquetar una barra de herramientas aún cuando solo haya una en la página

### Ver también

- [Ejemplo de una barra de herramienta W3C ARIA (W3C ARIA toolbar example)](https://www.w3.org/TR/wai-aria-practices/examples/toolbar/toolbar.html)

## Criterios de aprobación relacionados a WCAG

- [1.1.1 Contenido no textual (A)](https://www.w3.org/TR/WCAG21/#non-text-content)
  - : Todo contenido no textual que es presentado al usuario tiene un texto alternativo que sirve un propósito similar, excepto para las situaciones listadas en el enlace anterior.
- [2.4.4 Propósito del enlace (en contexto) (A)](https://www.w3.org/TR/WCAG21/#link-purpose-in-context)
  - : El propósito de cada enlace puede determinarse a partir del texto del enlace o del texto del enlace en conjunto con contexto determinado programáticamente, salvo cuando el propósito del enlace sea ambiguo para los usuarios en general.
- [2.4.9 Propósito del enlace (sólo el enlace) (AAA)](https://www.w3.org/TR/WCAG21/#link-purpose-link-only)
  - : Se dispone de un mecanismo que permite identificar el propósito de cada enlace a partir del texto del enlace solamente, excepto cuando el propósito del enlace es ambiguo para los usuarios en general.
