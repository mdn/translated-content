---
title: form
slug: Web/HTML/Element/form
---

## Resumen

El elemento HTML form (`<form>`) representa una sección de un documento que contiene controles interactivos que permiten a un usuario enviar información a un servidor web.

Es posible usar las pseudo-clasess de CSS [`:valid`](/es/CSS/%3Avalid) e [`:invalid`](/es/CSS/%3Ainvalid) para darle estilos a un elemento form.

## Contexto de uso

| Categorías de contenido | [Contenido dinámico](/en/HTML/Content_categories#flow_content)                                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contenido permitido     | [Contenido dinámico](/en/HTML/Content_categories#flow_content), pero sin contener elementos `<form>`                                                                                  |
| Omisión de etiquetas    | Ninguna, ambas, la etiqueta de apertura y cierre deben estar presentes                                                                                                                |
| Normative document      | [HTML5, section 4.10.3](http://www.w3.org/TR/html5/forms.html#the-form-element) ([HTML4.01, section 17.3](http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#h-17.3)) |

## Atributos

Como cualquier otro elemento HTML, este elemento soporta [atributos globales](/en/HTML/Global_attributes)

- `accept` {{deprecated_inline}}

  - : Una lista separada por comas de los tipos de contenido que el servidor acepta.

    > **Nota:** este atributo ha sido removido en HTML5 y no debe ser usado. En su lugar, usar el atributo **[accept](/es/HTML/Element/Input#attr-accept)** del elemento específico {{ HTMLElement("input") }}.

- `accept-charset`

  - : Una lista de codificación de caracteres que el servidor acepta. La lista puede ser delimitada por espacios o comas. El navegador los usa en el orden en que cada uno son listados. Los valores por defecto es la cadena reservada "UNKNOWN", en tal caso la codificación corresponde a la codificación del documento conteniendo el elemento form.

    HTML 4: En versiones anteriores de HTML, las diferentes codificaciones de caracteres pueden ser delimitadas por espacios o comas. Este no es más el caso en HTML5, donde sólo los espacios son correctos.

- `action`
  - : La URI de un programa que procesa la información enviada por medio del formulario. Este valor puede ser sobreescrito por un atributo [`formaction`](/es/docs/Web/HTML/Element/button#formaction) en un {{ HTMLElement("button") }} o en el elemento{{ HTMLElement("input") }}.
- `autocomplete`

  - : Indica cuales de los controles en este formulario puede tener sus valores automáticamente completados por el navegador. Esta configuración puede ser sobreescrita por un atributo `autocomplete` en un elemento que pertenezca al formulario:

    - `off`: El usuario debe ingresar explicitamente cada valor dentro de cada campo por cada uso, o el documento provee su propio método de autocompletado; el navegador no autocompleta las entradas.
    - `on`: El navegador puede completar automáticamente valores basados en lo que el usuario ha ingresado durante entradas previas al formulario.

    > **Nota:** si se establece `autocomplete` a un valor de `off` en un formulario porque el documento provee su propio auto-completado entonces también se debería establecer `autocomplete` al valor `off` para cada uno de los elementos de formulario `input` que el documento pueda autocompletar [Notas para Google Chrome](#notas_para_google_chrome).

- `enctype`

  - : Cuando el valor del atributo `method` es post, este atributo es el [tipo MIME](http://en.wikipedia.org/wiki/Mime_type) del contenido que es usado para enviar el formulario al servidor.
    Los posibles valores son:

    - `application/x-www-form-urlencoded`: El valor por defecto si un atributo no está especificado.
    - `multipart/form-data`: Usar este valor si se está usando el elemento {{ HTMLElement("input") }} con el atributo `type` ajustado a "file".
    - `text/plain` (HTML5)

    Este valor puede ser sobreescrito por un atributo[`formenctype`](/es/docs/Web/HTML/Element/button#formenctype)en un {{ HTMLElement("button") }} o un elemento {{ HTMLElement("input") }}.

- `method`

  - : El método [HTTP](http://www.w3.org/Protocols/rfc2616/rfc2616.html) que el navegador usa para enviar el formulario. Valores posibles son:

    - `post`: Corresponde al [método POST](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5) HTTP ; los datos del formulario son incluidos en el cuerpo del formulario y son enviados al servidor.
    - `get`: Corresponde al [método GET](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3) HTTP; los datos del formulario son adjuntados a la URI del atributo `action` , con un '?' como separador, y la URI resultante es enviada al servidor. Use este método cuando el formulario no tiene efectos secundarios y contiene solo caracteres ASCII.

    Este valor puede ser sobreescrito por un atributo [`formmethod`](/es/docs/Web/HTML/Element/button#formmethod) en un {{ HTMLElement("button") }} o elemento {{ HTMLElement("input") }}.

- `name`
  - : El nombre del formulario. En HTML4 ha quedado en desuso (debe usarse un id en su lugar). Debe ser único entre los formularios en un documento y no una cadena vacia en HTML5.
- `novalidate`
  - : Este atributo booleano indica que el formulario no es validado cuando es enviado. Si el atributo no existe [`formnovalidate`](/es/docs/Web/HTML/Element/button#formnovalidate) en un {{ HTMLElement("button") }} o en un elemento {{ HTMLElement("input") }} que pertenece al formulario.
- `target`

  - : Un nombre o keyword indicando donde mostrar la respuesta que es recibida después de enviar el formulario. En HTML 4, este es el nombre de, o una palabra clave, para un marco. En HTML5, es un nombre de, o palabra clave para, un contexto de navegación (por ejemplo, tab, window o marco en línea). Las siguientes palabras clave tienen significados especiales:

    - `_self`: Carga la respuesta dentro del mismo frame HTML 4 (o en HTML5, contexto de navegación) como el marco actual. Este valor es por defecto si el atributo no es especificado.
    - `_blank`: Carga la respuesta dentro de una nueva ventana sin nombre en HTML 4 o un contexto de navegación en HTML5.
    - `_parent`: Carga la respuesta en el marco padre del marco actual en HTML 4 o en el contexto de navegación padre del marco actual en HTML5. Si no hay marco padre, esta opción se comporta de la misma manera que \_self.
    - `_top`: HTML 4: Carga la respuesta en toda la ventana original, cancelando otros marcos. HTML5: Carga la respuesta en el contexto de navegación de más alto nivel (esto es, el contexto de navegación que es ancestro del actual, y no tiene padre). Si no hay padre, esta opción se comporta igual que \_self.

    HTML5: Este valor puede ser sobreescrito por un atributo [`formtarget`](/es/docs/Web/HTML/Element/button#formtarget) en un elemento {{ HTMLElement("button") }} o{{ HTMLElement("input") }}.

## Interfaz DOM

Este elemento implementa la interfaz [`HTMLFormElement`](/es/DOM/HTMLFormElement).

## Ejemplos

```html
<!-- Formulario simple que enviará una petición GET -->
<form action="">
  <label for="GET-name">Nombre:</label>
  <input id="GET-name" type="text" name="name" />
  <input type="submit" value="Save" />
</form>

<!-- Formulario simple que enviará una petición POST -->
<form action="" method="post">
  <label for="POST-name">Nombre:</label>
  <input id="POST-name" type="text" name="name" />
  <input type="submit" value="Save" />
</form>

<!-- Formulario con conjunto de campos, leyenda y etiqueta -->
<form action="" method="post">
  <fieldset>
    <legend>Título</legend>
    <input type="radio" name="radio" id="radio" />
    <label for="radio">Clic aquí</label>
  </fieldset>
</form>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Consulte también

Otros elementos que son usados para crear formularios: {{ HTMLElement("button") }}, {{ HTMLElement("datalist") }}, {{ HTMLElement("fieldset") }}, {{ HTMLElement("input") }},{{ HTMLElement("keygen") }}, {{ HTMLElement("label") }}, {{ HTMLElement("legend") }}, {{ HTMLElement("meter") }}, {{ HTMLElement("optgroup") }}, {{ HTMLElement("option") }}, {{ HTMLElement("output") }}, {{ HTMLElement("progress") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }}.
