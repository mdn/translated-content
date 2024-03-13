---
title: Controles de formulario originales
slug: Learn/Forms/Basic_native_form_controls
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/How_to_structure_an_HTML_form", "Learn/Forms/HTML5_input_types", "Learn/Forms")}}

En el [artículo anterior](/es/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form), marcamos un ejemplo de formulario web funcional, presentamos algunos controles de formulario y elementos estructurales comunes, y nos centramos en las mejores prácticas de accesibilidad. A continuación, veremos con detalle las funciones de los diferentes controles de formulario, o _widgets_, y estudiaremos todas las diferentes opciones de que se dispone para la recopilación de diferentes tipos de datos. En este artículo en particular, veremos el conjunto original de controles de formulario, disponible en todos los navegadores desde los primeros días de la web.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conocimientos básicos de informática y de
        <a href="/es/docs/Learn/HTML/Introduccion_a_HTML">lenguaje HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Comprender en detalle el conjunto original de controles de formulario
        originales disponibles en los navegadores para la recopilación de datos
        y su implementación con HTML.
      </td>
    </tr>
  </tbody>
</table>

Ya conoces algunos elementos de formulario, incluidos {{HTMLelement ('form')}}, {{HTMLelement ('fieldset')}}, {{HTMLelement ('legend')}}, {{HTMLelement ('textarea' )}}, {{HTMLelement ('label')}}, {{HTMLelement ('button')}} y {{HTMLelement ('input')}}. Este artículo expone:

- Los tipos de entrada comunes {{HTMLelement('input/button', 'button')}}, {{HTMLelement('input/checkbox', 'checkbox')}}, {{HTMLelement('input/file', 'file')}}, {{HTMLelement('input/hidden', 'hidden')}}, {{HTMLelement('input/image', 'image')}}, {{HTMLelement('input/password', 'password')}}, {{HTMLelement('input/radio', 'radio')}}, {{HTMLelement('input/reset', 'reset')}}, {{HTMLelement('input/submit', 'submit')}} y {{HTMLelement('input/text', 'text')}}.
- Algunos de los atributos que comunes para todos los controles de formulario.

> **Nota:** Las características que se consideran en este artículo son compatibles con todos los navegadores, lo que no es el caso para todos los controles de formulario. En los próximos dos artículos vamos a exponer los controles de formulario que se han añadido a HTML5 más recientemente. Si quieres una referencia más avanzada, consulta nuestra [referencia a elementos de formulario HTML](/es/docs/Web/HTML/Elemento#Formularios), y en particular nuestra extensa referencia a [tipos \<input>](/es/docs/Web/HTML/Elemento/input).

## Campos de entrada de texto

Los campos de texto {{htmlelement ("input")}} son los controles de formulario más básicos. Son un modo muy cómodo de permitir al usuario introducir cualquier tipo de datos, y ya hemos visto algunos ejemplos sencillos.

> **Nota:** Los campos de texto de los formularios HTML son controles de entrada de texto sencillos sin formato. Esto significa que no puedes usarlos para aplicar una [edición enriquecida](/es/docs/Rich-Text_Editing_in_Mozilla) (negrita, cursiva, etc.). Todos los controles de formulario que encuentres con texto enriquecido son controles de formulario personalizados creados con HTML, CSS y JavaScript.

Todos los controles de texto básicos comparten algunos comportamientos comunes:

- Se pueden marcar como [`readonly`](/es/docs/Web/HTML/Element/input#readonly) (el usuario no puede modificar el valor de entrada, pero este se envía con el resto de los datos del formulario) o [`disabled`](/es/docs/Web/HTML/Element/input#disabled) (el valor de entrada no se puede modificar y nunca se envía con el resto de los datos del formulario).
- Pueden tener un [`placeholder`](/es/docs/Web/HTML/Element/input#placeholder); se trata de un texto que aparece dentro de la caja de entrada de texto y que se usa para describir brevemente el propósito de la caja de texto.
- Pueden presentar una limitación de [tamaño](/es/docs/Web/HTML/Attributes/size) (el tamaño físico de la caja de texto) y de la [extensión máxima](/es/docs/Web/HTML/Attributes/maxlength) (el número máximo de caracteres que se pueden poner en la caja de texto).
- Admiten [corrección ortográfica](/es/docs/HTML/Element/input#attr-spellcheck) (utilizando el atributo [`spellcheck`](/es/docs/Web/HTML/Attributes/spellcheck)), si el navegador la admite.

> **Nota:** El elemento {{htmlelement ("input")}} es único entre los elementos HTML porque puede tomar muchas formas diferentes según el valor de su atributo. Se utiliza para crear la mayoría de los tipos de controles de formulario, que incluyen campos de texto de una sola línea, controles para la fecha y la hora, controles sin introducción de texto, como casillas de verificación, botones de opción y selectores de color, y botones.

### Campos de texto de una sola línea

Un campo de texto de una sola línea se crea utilizando un elemento {{HTMLElement ("input")}} cuyo valor de atributo [`type`](/es/docs/Web/HTML/Element/input#type) se establece en `text`, u omitiendo por completo el atributo [`type`](/es/docs/Web/HTML/Element/input#type) (`text` es el valor predeterminado). El valor `text` de este atributo también es el valor alternativo si el navegador no reconoce el valor que has especificado para el atributo [`type`](/es/docs/Web/HTML/Element/input#type) (por ejemplo, si especificas `type="color"` y el navegador no está dotado en origen de un control de selección de colores).

> **Nota:** Puedes encontrar ejemplos de todos los tipos de campo de texto de una sola línea en GitHub en [single-line-text-fields.html](https://github.com/mdn/learning-area/blob/master/html/forms/native-form-widgets/single-line-text-fields.html) ([o consultarlo en vivo](https://mdn.github.io/learning-area/html/forms/native-form-widgets/single-line-text-fields.html)).

Aquí hay un ejemplo básico de campo de texto de una sola línea:

```html
<input type="text" id="comment" name="comment" value="I'm a text field" />
```

Los campos de texto de una sola línea solo tienen una restricción verdadera: si escribes el texto con saltos de línea, el navegador elimina esos saltos de línea antes de enviar los datos al servidor.

_La captura de pantalla siguiente muestra los tipos de entrada de texto predeterminado, activo (con el foco) y deshabilitado en Firefox 71 y Safari en macOS y en Chrome 79 y Edge 18 en Windows 10._

![Captura de pantalla del atributo deshabilitado y predeterminado: estilo para una entrada de texto activa (con el foco) en Firefox, Safari, Chrome y Edge.](disabled.png)

> **Nota:** HTML5 ha mejorado el campo de texto básico original de una sola línea al añadir valores especiales para el atributo [`type`](/es/docs/Web/HTML/Element/input#type) que imponen restricciones de validación específicas y otras características, por ejemplo, específicas para introducir direcciones URL o números. Los expondremos en el artículo siguiente: [Los tipos de entrada en HTML5](/es/docs/Learn/Forms/HTML5_input_types).

#### Campo de contraseña

Uno de los tipos de entrada originales era el tipo de campo de texto `password`:

```html
<input type="password" id="pwd" name="pwd" />
```

El valor de la contraseña no añade restricciones especiales al texto que se introduce, pero oculta el valor que se introduce en el campo (por ejemplo, con puntos o asteriscos) para impedir que otros puedan leerlo.

Ten en cuenta que esto es solo una función de interfaz de usuario; a menos que envíes tu formulario en modo seguro, se enviará como texto plano, lo que es malo desde el punto de vista de la seguridad porque alguien con malas intenciones podría interceptar tus datos y robar tus contraseñas, datos de tarjetas de crédito o cualquier otra cosa que hayas enviado. La mejor manera de proteger a los usuarios de esto es alojar cualquier página que contenga formularios en una ubicación de conexión segura (es decir, en una dirección `https://`), de modo que los datos se cifren antes de enviarse.

Los navegadores reconocen las implicaciones de seguridad de enviar datos de formulario por una conexión insegura y disponen de mensajes de advertencia para disuadir a los usuarios de usar formularios no seguros. Para obtener más información sobre las implementaciones de Firefox al respecto, consulta el artículo [Contraseñas inseguras](/es/docs/Seguridad/ContraseñasInseguras).

### Contenido oculto

Otro control de texto original es el tipo de entrada `hidden`. Se usa para crear un control de formulario que es invisible para el usuario, pero que aun así se envía al servidor junto con el resto de los datos del formulario una vez se transmiten; por ejemplo, es posible que desees enviar una marca de tiempo al servidor que indique cuándo se realizó un pedido. Al estar oculto, el usuario no puede ver ni editar su valor intencionadamente, el control nunca recibirá el foco y un lector de pantalla tampoco lo detectará.

```html
<input type="hidden" id="timestamp" name="timestamp" value="1286705410" />
```

Si creas un elemento así, es necesario establecer sus atributos `name` y `value`. Su valor puede establecerse dinámicamente a través de JavaScript. El tipo de entrada oculta no debe tener ninguna etiqueta asociada.

Otros tipos de entrada de texto, como {{HTMLElement ("input / search", "search")}}, {{HTMLElement ("input / url", "url")}} y {{HTMLElement ("input / tel" , "tel")}}, se añadieron con HTML5. Se tratarán en el próximo artículo: Tipos de entrada HTML5.

## Elementos de selección: casillas de verificación y botones de opción

Los elementos de selección (o _checkable items_, en inglés) son controles cuyo estado puede cambiar cuando se hace clic en ellos o en sus etiquetas asociadas. Hay dos tipos de elementos de selección: las casillas de verificación (o _check boxes_) y los botones de opción (o _radio buttons_). Ambos usan el atributo `checked` para indicar si el control de formulario está seleccionado por defecto o no.

Vale la pena señalar que estos controles no se comportan exactamente como otros controles de formulario. Para la mayoría de los controles de formulario, cuando se envía el formulario, se envían todos los controles que tienen un atributo [`name`](/es/docs/Web/HTML/Attributes/name), incluso si en ellos no se ha introducido ningún valor. En el caso de elementos de selección, sus valores se envían solo si están seleccionados. Si no están seleccionados, no se envía nada, ni siquiera su nombre. Si están seleccionados pero no tienen ningún valor asignado, el nombre se envía con el valor _on._

> **Nota:** Puedes encontrar los ejemplos de esta sección en GitHub como [checkable-items.html](https://github.com/mdn/learning-area/blob/master/html/forms/native-form-widgets/checkable-items.html) ([o consultarlos en vivo](https://mdn.github.io/learning-area/html/forms/native-form-widgets/checkable-items.html)).

Para una usabilidad/accesibilidad óptima, te recomendamos delimitar cada lista de elementos que estén relacionados entre sí dentro de un elemento {{htmlelement ("fieldset")}} con un elemento {{htmlelement ("legend")}} que proporcione una descripción general de la lista. Cada par individual de elementos {{htmlelement ("label")}}/{{htmlelement ("input")}} ha de estar contenido en un elemento de lista propio (o similar). El elemento {{htmlelement ('label')}} asociado se coloca en general inmediatamente después del botón de opción o la casilla de verificación, con las instrucciones para el grupo de botones de opción o casillas de verificación, que suelen ser el contenido del elemento {{htmlelement ("legend")}}. Observa las estructuras de ejemplo en los ejemplos asociados anteriores.

### Casillas de verificación

Las casillas de verificación se crean estableciendo el atributo [`type`](/es/docs/Web/HTML/Attributes/type) del elemento {{HTMLElement ("input")}} en el valor {{HTMLElement ("input / checkbox", "checkbox")}}.

```html
<input type="checkbox" id="carrots" name="carrots" value="carrots" checked />
```

Al incluir el atributo [`checked`](/es/docs/Web/HTML/Attributes/checked), la casilla de verificación se marca automáticamente cuando se carga la página. Al hacer clic en la casilla de verificación o en su etiqueta asociada, la casilla de verificación se activa o desactiva.

Las capturas de pantalla siguientes muestran casillas de verificación predeterminadas, activas (con el foco) y deshabilitadas en Firefox 71 y Safari 13 en macOS y Chrome 79 y Edge 18 en Windows 10:

![Casillas de verificación predeterminadas, activas y deshabilitadas en Firefox 71 y Safari 13 en Mac y Chrome 79 y Edge 18 en Windows 10](checkboxes.png)

> **Nota:** Las casillas de verificación y los botones de opción con atributo [`checked`](/es/docs/Web/HTML/Attributes/checked) al cargarse coinciden con la pseudoclase {{cssxref ('<code>:default</code>')}}, incluso aunque ya no estén seleccionadas. Las que están seleccionadas coinciden con la pseudoclase `{{cssxref(':checked')}}`.

Debido a su naturaleza activa-inactiva, las casillas de verificación se consideran botones de conmutación, y muchos desarrolladores y diseñadores han ampliado el estilo de casilla de verificación predeterminado para crear botones que parecen interruptores de conmutación. Aquí puedes ver un [ejemplo en acción](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/) (observa también el [código fuente](https://github.com/mdn/learning-area/blob/master/html/forms/toggle-switch-example/index.html)).

### Botón de opción

Un botón de opción se crea estableciendo el atributo [`type`](/es/docs/Web/HTML/Element/input#type) del elemento {{HTMLElement ("input")}} en el valor `radio`:

```html
<input type="radio" id="soup" name="meal" checked />
```

Es posible asociar diversos botones de opción. Si comparten el mismo valor de atributo [`name`](/es/docs/Web/HTML/Element/input#name), se considera que están en el mismo grupo de botones. Solo un botón dentro de un grupo puede estar activado en cada momento. Esto significa que cuando uno de ellos se selecciona, todos los demás se deseleccionan automáticamente. Al enviar el formulario, solo se envía el valor del botón de opción seleccionado. Si ninguno de ellos está seleccionado, se considera que el conjunto completo de botones de opción está en un estado desconocido y no se envía ningún valor con el formulario. Cuando en un grupo de botones con el mismo nombre se selecciona uno de los botones de opción, no es posible deseleccionar todos los botones sin reiniciar el formulario.

```html
<fieldset>
  <legend>¿Cuál es tu comida favorita?</legend>
  <ul>
    <li>
      <label for="soup">Sopa</label>
      <input type="radio" id="soup" name="meal" value="soup" checked />
    </li>
    <li>
      <label for="curry">Curry</label>
      <input type="radio" id="curry" name="meal" value="curry" />
    </li>
    <li>
      <label for="pizza">Pizza</label>
      <input type="radio" id="pizza" name="meal" value="pizza" />
    </li>
  </ul>
</fieldset>
```

Las capturas de pantalla siguientes muestran botones de opción sin seleccionar y seleccionados, algunos con el foco y otros desactivados sin seleccionar y seleccionados, en Firefox 71 y Safari 13 en MacOS y Chrome 79 y Edge 18 en Windows 10.

![Botones de opción en Firefox 71 y Safari 13 en Mac y Chrome 79 y Edge 18 en Windows 10](radios.png)

## Botones

El botón de opción no es realmente un botón, a pesar de su nombre; sigamos adelante y echemos un vistazo a los controles de formulario que son botones propiamente. Hay tres tipos de entrada según el tipo de botones que se utilicen:

- `submit`
  - : Envía los datos del formulario al servidor. Para los elementos {{HTMLElement ("button")}}, omitir el atributo `type` (o introducir un valor de tipo no válido) da como resultado un botón de envío (_submit_).
- `reset`
  - : Restablece todos los controles de formulario a sus valores por defecto.
- `button`
  - : Botones que no tienen efecto automático, pero que se pueden personalizar con código JavaScript.

Además, el elemento {{htmlelement ("button")}} puede tomar un atributo `type` para imitar estos tres tipos de entrada. La diferencia principal entre los dos es que los elementos `<button>` propiamente admiten aplicación de estilo en mayor medida.

> **Nota:** El tipo de entrada `image` también se representa como un botón. También desarrollaremos este tema más adelante.

> **Nota:** Puedes encontrar los ejemplos de esta sección en GitHub como [button-examples.html](https://github.com/mdn/learning-area/blob/master/html/forms/native-form-widgets/button-examples.html) ([o consultarlos en vivo](https://mdn.github.io/learning-area/html/forms/native-form-widgets/button-examples.html)).

A continuación puedes encontrar ejemplos de cada tipo de botón `<input>`, junto con el tipo de botón equivalente.

### enviar

```html
<button type="submit">Este es un <strong>botón de envío</strong></button>

<input type="submit" value="Este es un botón de envío" />
```

### reiniciar

```html
<button type="reset">Este es un <strong>botón de reinicio</strong></button>

<input type="reset" value="Este es un botón de reinicio" />
```

### anónimo

```html
<button type="button">Este es un <strong>botón anónimo</strong></button>

<input type="button" value="Este es un botón anónimo" />
```

Los botones siempre se comportan igual, independientemente de su usas un elemento {{HTMLElement ("button")}} o un elemento {{HTMLElement ("input")}}. Sin embargo, como puedes ver en los ejemplos, los elementos {{HTMLElement ("button")}} te permiten usar HTML en tu contenido, que se inserta entre las etiquetas `<button>` de apertura y cierre. Los elementos {{HTMLElement ("input")}}, por otro lado, son elementos vacíos; el contenido que muestran está inserto en el atributo `value` y, por lo tanto, solo acepta contenido de texto sin formato.

Los ejemplos siguientes muestran los tipos de entrada de botones predeterminados, activos y deshabilitados: en Firefox 71 y Safari 13 en macOS, y Chrome 79 y Edge 18 en Windows 10.

![Tipos de entrada de botones predeterminados, activos y deshabilitados en Firefox 71 y Safari 13 en Mac y Chrome 79 y Edge 18 en Windows 10](buttons.png)

### Botón de imagen

El control **botón de imagen** se muestra exactamente como un elemento {{HTMLElement ("img")}}, excepto que cuando el usuario hace clic en él, se comporta como un botón de envío.

Se crea un botón de imagen usando un elemento {{HTMLElement ("input")}} con su atributo [`type`](/es/docs/Web/HTML/Element/input#type) establecido en el valor `image`. Este elemento admite exactamente el mismo conjunto de atributos que el elemento {{HTMLElement ("img")}}, además de todos los atributos que admiten el resto de botones de formulario.

```html
<input type="image" alt="¡Púlsame!" src="my-img.png" width="80" height="30" />
```

Si el botón de imagen se usa para enviar un formulario, este control no envía su valor; en lugar de ello se envían las coordenadas X e Y del clic que se ha hecho sobre la imagen (las coordenadas son relativas a la imagen, lo que significa que la esquina superior izquierda de la imagen representa la coordenada (0, 0)). Las coordenadas se envían como dos pares clave/valor:

- La clave del valor X es el valor del atributo [`name`](/es/docs/Web/HTML/Element/input#name) seguido de la cadena de caracteres «_.x_».
- La clave del valor Y es el valor del atributo [`name`](/es/docs/Web/HTML/Element/input#name) seguido de la cadena de caracteres «_.y_».

Por ejemplo, cuando haces clic en las coordenadas (123, 456) de la imagen y se hace el envío por el método `get`, verás los valores añadidos a la URL de la manera siguiente:

```
http://foo.com?pos.x=123&pos.y=456
```

Esta es una forma muy cómoda de construir un «mapa dinámico». La forma en que se envían y recuperan estos valores se detalla en el artículo [Enviar los datos del formulario](/es/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data).

## Selector de archivos

Hay un último tipo de `<input>` que nos llegó a principios del HTML: el tipo entrada de archivo. Los formularios pueden enviar archivos a un servidor (esta acción específica también se detalla en el artículo [Enviar los datos del formulario](/es/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data)). El control de selección de archivos se puede usar para elegir uno o más archivos para enviar.

Para crear un [control de selección de archivos](/es/docs/Web/HTML/Element/input/file), utilizas el elemento {{HTMLElement ("input")}} con su atributo [`type`](/es/docs/Web/HTML/Element/input#type) establecido en `file`. Es posible restringir los tipos de archivos que se aceptan utilizando el atributo [`accept`](/es/docs/Web/HTML/Element/input#accept). Además, puedes permitir que el usuario elija más de un archivo añadiendo el atributo [`multiple`](/es/docs/Web/HTML/Element/input#multiple).

#### Ejemplo

En este ejemplo, se crea un control de selección de archivos que solicita archivos de imágenes gráficas. El usuario puede seleccionar múltiples archivos en este caso.

```html
<input type="file" name="file" id="file" accept="image/*" multiple />
```

En algunos dispositivos móviles, el control de selección de archivos puede acceder a fotos, vídeos y audio capturados directamente por la cámara y el micrófono del dispositivo y añadir información de captura al atributo `accept` de la manera siguiente:

```html
<input type="file" accept="image/*;capture=camera" />
<input type="file" accept="video/*;capture=camcorder" />
<input type="file" accept="audio/*;capture=microphone" />
```

## Atributos comunes

Muchos de los elementos que se utilizan para definir controles de formulario tienen sus atributos específicos propios. Sin embargo, hay un conjunto de atributos que son comunes para todos los elementos de formulario. Ya has conocido algunos, pero a continuación encontrarás una lista de esos atributos comunes para referencias futuras:

| Nombre del atributo                                   | Valor por defecto | Descripción                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`autofocus`](/es/docs/Web/HTML/Attributes/autofocus) | false             | Este atributo booleano te permite especificar que el elemento ha de tener el foco de entrada automáticamente cuando se carga la página. En un documento, solo un elemento asociado a un formulario puede tener este atributo especificado.                                                                                                                                                    |
| [`disabled`](/es/docs/Web/HTML/Attributes/disabled)   | false             | Este atributo booleano indica que el usuario no puede interactuar con el elemento. Si no se especifica este atributo, el elemento hereda su configuración del elemento que lo contiene, por ejemplo, {{HTMLElement ("fieldset")}}. Si el elemento que lo contiene no tiene el atributo establecido en `disabled`, el elemento está habilitado.                                                |
| [`form`](/es/docs/Web/HTML/Attributes/form)           |                   | El elemento `<form>` con el que está asociado el control, que se usa cuando no está anidado dentro de ese formulario. El valor del atributo debe ser el atributo `id` de un elemento {{HTMLElement ("form")}} del mismo documento. Esto te permite asociar un formulario con un control de formulario que esté fuera de aquel, incluso si está dentro de un elemento de formulario diferente. |
| [`name`](/es/docs/Web/HTML/Attributes/name)           |                   | El nombre del elemento; se envía con los datos del formulario.                                                                                                                                                                                                                                                                                                                                |
| [`value`](/es/docs/Web/HTML/Attributes/value)         |                   | El valor inicial del elemento.                                                                                                                                                                                                                                                                                                                                                                |

## Conclusión

Este artículo ha expuesto los tipos de entrada más antiguos: el conjunto original que se introdujo en los primeros días de HTML, que es compatible con todos los navegadores. En el artículo siguiente veremos los valores del atributo `type` que se han añadido en HTML5 más recientemente.

{{PreviousMenuNext("Learn/Forms/How_to_structure_an_HTML_form", "Learn/Forms/HTML5_input_types", "Learn/Forms")}}

### Temas avanzados

- [Enviar formularios con JavaScript](/es/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript)
- [Cómo crear widgets de formularios personalizados](/es/docs/Learn/HTML/Forms/How_to_build_custom_form_widgets)
- [Formularios HTML en navegadores antiguos](/es/docs/Learn/HTML/Forms/HTML_forms_in_legacy_browsers)
- [Cuestiones avanzadas de aplicación de estilo para formularios HTML](/es/docs/Learn/HTML/Forms/Advanced_styling_for_HTML_forms)
- [Tabla de compatibilidad de los controles de formulario](/es/docs/Learn/HTML/Forms/Property_compatibility_table_for_form_widgets)
