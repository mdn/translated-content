---
title: <input type ="button">
slug: Web/HTML/Element/input/button
---

{{HTMLSidebar}}

El elemento HTML **`<input type="button">`** es una versión específica del elemento **`<input>`**`,` que se usa para crear un botón en el que se puede hacer click sin ningún valor por defecto, es decir, **no tiene un comportamiento predeterminado** como por ejemplo **`<input type="reset">`** . En HTML5 ha sido sustituido por el elemento **[\<button>](/es/docs/Web/HTML/Element/button)**.

Los navegadores generan un controlador para un botón clickable sin valor por defecto. El botón puede contener cualquier texto. El controlador puede varíar de un navegador a otro.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a
          href="/es/docs/HTML/Content_categories"
          title="HTML/Content_categories"
          >Categorías de contenido</a
        >
      </th>
      <td>
        <a
          href="/es/docs/HTML/Content_categories#Flow_content"
          title="HTML/Content categories#Flow content"
          >Contenido de flujo</a
        >,
        <a
          href="/es/docs/HTML/Content_categories#Phrasing_content"
          title="HTML/Content categories#Phrasing content"
          >contenido de fraseo</a
        >,
        <a
          href="/es/docs/HTML/Content_categories#Interactive_content"
          title="HTML/Content categories#Interactive content"
          >contenido interactivo</a
        >,
        <a
          href="/es/docs/HTML/Content_categories#Form_listed"
          title="HTML/Content categories#Form listed"
          >listado</a
        >,
        <a
          href="/es/docs/HTML/Content_categories#Form_labelable"
          title="HTML/Content categories#Form labelable"
          >etiquetable</a
        >, y elementos
        <a
          href="/es/docs/HTML/Content_categories#Form_submittable"
          title="HTML/Content categories#Form submittable"
          >entregables</a
        >
        con
        <a
          href="/es/docs/HTML/Content_categories#Form-associated_"
          title="HTML/Content categories#Form-associated "
          >contenido asociado a los formularios</a
        >, contenido evidente.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>
        <a
          href="/es/docs/HTML/Content_categories#Phrasing_content"
          title="HTML/Content_categories#Phrasing_content"
          >Contenido de fraseo</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiquetas</th>
      <td>Ninguna, las etiquetas de inicio y cierre son obligatorias.</td>
    </tr>
    <tr>
      <th scope="row">Elementos padre permitidos</th>
      <td>
        Cualquier elemento que acepte
        <a
          href="/es/docs/HTML/Content_categories#Phrasing_content"
          title="HTML/Content_categories#Phrasing_content"
          >contenido de fraseo</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>
        <a
          href="/es/docs/Web/API/HTMLButtonElement"
          title="The HTMLButtonElement interface provides properties and methods (beyond the \<button> object interface it also has available to them by inheritance) for manipulating the layout and presentation of button elements."
          ><code>HTMLButtonElement</code></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tipo de elemento</th>
      <td>Inline</td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento puede tener cualquiera de los [atributos globales](/es/docs/HTML/Global_attributes) además de los siguientes:

- `disabled`

  - : Este atributo booleano indica que el usuario no puede interactuar con el botón. Si este atributo no está especificado, el botón hereda su configuración del elemento contenedor, por ejemplo, {{HTMLElement("fieldset")}}; si no hay elemento contenedor con el atributo **`disabled`** establecido, el botón estará habilitado. El valor de control desactivado no es enviado con el formulario y el evento `click` [no será enviado](https://html.spec.whatwg.org/multipage/forms.html#enabling-and-disabling-form-controls:-the-disabled-attribute) en los controles desactivados.

    Firefox, al contrario que otros navegadores, [mantiene por defecto el estado de desactivación dinámico](http://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) de un {{HTMLElement("button")}} a lo largo de las cargas de la página. Use el atributo [`autocomplete`](/es/docs/Web/HTML/Element/button#autocomplete) para controlar esta característica.

- `autofocus`
  - : Este atributo booleano le permite especificar que el botón deba tener el foco cuando la página se cargue, a no ser que el usuario lo anule, por ejemplo, escribiendo en otro cuadro de texto. Únicamente un elemento asociado con los formularios en un documento puede tener este atributo especificado.
- `autocomplete` {{non-standard_inline}}
  - : El uso de este atributo en un {{HTMLElement("button")}} es algo fuera de lo común, y específico de Firefox. Firefox, por defecto y al contrario de otros navegadores, [mantiene por defecto el estado de desactivación dinámico](http://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) de un {{HTMLElement("button")}} a lo largo de las cargas de la página. Establecer el valor de este atributo a `off` (`autocomplete="off"`) desactiva esta característica.
- `form`
  - : El elemento del formulario con el que el botón está asociado (es _dueño del formulario_). El valor del atributo debe ser el atributo **id** de un elemento {{HTMLElement("form")}} en el mismo documento. Si este atributo no está especificado, el elemento `<button>` debe ser hijo de un elemento "formulario". Este atributo le permite colocar elementos `<button>` en cualquier lugar de un documento, y no únicamento como hijos del elemento {{HTMLElement("form")}}.
- `formenctype`

  - : Debido a que el elemento de input es un botón de envío, el atributo **`formenctype`** especifica el tipo de contenido que se usa para enviar el formulario al servidor. Los valores posibles son:

    - `application/x-www-form-urlencoded`: Valor por defecto si el atributo no se especifica.
    - `multipart/form-data`: Este valor se usa si un elemento {{HTMLElement("input")}} es usado con el atributo [`type`](/es/docs/Web/HTML/Element/input#type) fijado a `file`.
    - `text/plain`

    Si este atributo se especifica, ignora el atributo [`enctype`](/es/docs/Web/HTML/Element/form#enctype) del formulario dueño del botón.

- `formaction`
  - : La URI de la aplicación que procesa la información enviada por le botón. Si se especifica se anula el atributo [`action`](/es/docs/Web/HTML/Element/form#action) del formulario dueño del botón.
- `formmethod`

  - : Debido a que el elemento input es un botón de envío, el atributo **`formmethod`** especifica el método HTTP que el navegador utilizará para enviar el formulario. Los valores posibles son:

    - `post`: Los datos del formulario son incluidos en su cuerpo y son enviados al servidor.
    - `get`: Los datos del formulario son agregados a la URI del formulario, utilizando un símbolo '?' como separador, la URI resultante es enviada al servidor. Use este método cuando el formulario no tenga efectos secundarios y contenga solo caracteres ASCII.

    Si se especifica, este atributo anula el atributo [`method`](/es/docs/Web/HTML/Element/form#method) del formulario dueño del elemento.

- `formnovalidate`
  - : Debido a que el elemento de input es un botón de envío, el atributo **`formnovalidate`** especifica que el formulario no debe ser validado cuando sea enviado. Si este atributo es especificado, se anula el atributo [`novalidate`](/es/docs/Web/HTML/Element/form#novalidate) del formulario dueño del elemento. Este atributo es Booleano.
- `formtarget`

  - : Debido a que el elemento de input es un botón de envío, el atributo **`formtarget`** es un nombre o palabra clave que indica donde mostrar la respuesta recibida después de enviar el formulario. Este es un nombre de, o palabra clave para, un _contexto navegable_ (por ejemplo, pestaña, ventana, o inline frame). Si este atributo es especificado, se sobreescribirá el atributo [`target`](/es/docs/Web/HTML/Element/form#target) del formulario dueño del elemento. Las siguientes palabras claves tienen significados especiales:

    - `_self`: Carga la respuesta en el mismo contexto navegable que el actual. Este valor es el predeterminado si el atributo no es especificado.
    - `_blank`: Carga la respuesta en un nuevo contexto navegable sin nombre.
    - `_parent`: Carga la respuesta en el contexto navegable padre del actual. Si no hay padre, esta opción se comporta igual que `_self`.
    - `_top`: Carga la respuesta en el contexto navegable superior (es el contexto navegable que es un ancestro del actual y no tiene padre). Si no hay padre, esta opción se comporta igual que `_self`.

- `name`
  - : El nombre del botón que será enviado con los datos del formulario.
- `type`

  - : El tipo dle botón. Los valores posibles son:

    - `submit`: El botón envía los datos del formulario al servidor. Este es el valor predeterminado si no se especifica el atributo, o si el atributo es cambiado dinámicamente a un valor inválido o vacío.
    - `reset`: El botón reinicia todos los controles a sus valores iniciales.
    - `button`: El botón no tiene comportamiento predeterminado. Puede haber scripts de la parte del cliente asociados a los eventos del elemento, que serán lanzados cuando el evento ocurra.

- `value`
  - : El valor inicial del botón.

## Ejemplos

Se crea un nuevo input tipo botón con el valor 'Click me'.

```html
<input type="button" value="Click me" />
```

## Especificaciones

{{Specifications}}

## Compatibilidad entre navegadores

{{Compat}}

## Ver también

- El elemento genérico {{HTMLElement("input")}} y la interface usada para manipularlo, {{domxref("HTMLInputElement")}}
- El reemplazo en HTML5 para **\<input type="button">**, el elemento **[\<button>](/es/docs/Web/HTML/Element/button)**.
