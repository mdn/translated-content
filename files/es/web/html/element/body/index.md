---
title: "<body>: El elemento body del documento"
slug: Web/HTML/Element/body
---

{{HTMLSidebar}}

El **elemento `<body>` de HTML** representa el contenido de un documento HTML. Solo puede haber un elemento `<body>` en un documento.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/docs/Web/HTML/Content_categories"
          >Categorías de contenido</a
        >
      </th>
      <td>
        <a
          href="/es/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#Section_Elements_in_HTML5"
          >Secciones en HTML5</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>
        <a href="/es/docs/Web/HTML/Content_categories#Flow_content"
          >Flujo de contenido</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiqueta</th>
      <td>
        La etiqueta de inicio se puede omitir si lo primero que hay dentro no es
        un carácter de espacio, comentario, elemento
        {{HTMLElement("script")}} o elemento
        {{HTMLElement("style")}}. La etiqueta final se puede omitir si
        el elemento <code>&#x3C;body></code> tiene contenido o tiene una
        etiqueta de inicio y no va seguido inmediatamente de un comentario.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenedores autorizados</th>
      <td>
        Debe ser el segundo elemento de un elemento
        {{HTMLElement("html")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Rol de ARIA implícito</th>
      <td>
        <a href="/es/docs/Web/Accessibility/ARIA/Roles/Document_Role"
          >document</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td>No se permite <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>
        {{DOMxRef("HTMLBodyElement")}}
        <ul>
          <li>
            El elemento <code>&#x3C;body></code> expone la interfaz
            {{DOMxRef("HTMLBodyElement")}}.
          </li>
          <li>
            Puedes acceder al elemento <code>&#x3C;body></code> a través de la
            propiedad {{DOMxRef("document.body")}}.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento incluye los [atributos globales](/es/docs/Web/HTML/Global_attributes).

- `alink` {{deprecated_inline}}
  - : Color del texto de los hipervínculos cuando se selecciona. _Este método no es conforme a la especificación, utiliza la propiedad {{CSSxRef("color")}} de CSS junto con la pseudoclase {{CSSxRef(":active")}} en su lugar._
- `background` {{deprecated_inline}}
  - : URI de una imagen para usar como fondo. _Este método no es conforme, usa la propiedad CSS {{CSSxRef("background")}} en el elemento_.
- `bgcolor` {{deprecated_inline}}
  - : Color de fondo del documento. _Este método no es conforme, utiliza la propiedad CSS {{CSSxRef("background-color")}} en el elemento_.
- `bottommargin` {{deprecated_inline}}
  - : El margen de la parte inferior del _\<body>_. _Este método no es conforme, usa la propiedad CSS {{CSSxRef("margin-bottom")}} en el elemento_.
- `leftmargin` {{deprecated_inline}}
  - : El margen de la izquierda del _\<body>_. _Este método no es conforme, usa la propiedad CSS {{CSSxRef("margin-left")}} en el elemento en su lugar_.
- `link` {{deprecated_inline}}
  - : Color del texto de los enlaces de hipertexto no visitados. _Este método no es conforme, usa la propiedad {{CSSxRef("color")}} de CSS junto con la pseudoclase {{CSSxRef(":link")}} en su lugar_.
- `onafterprint`
  - : Función para llamar después de que el usuario haya impreso el documento.
- `onbeforeprint`
  - : Función para llamar cuando el usuario solicita la impresión del documento.
- `onbeforeunload`
  - : Función para llamar cuando se está a punto de descargar el documento.
- `onblur`
  - : Función para llamar cuando el documento pierde el foco.
- `onerror`
  - : Función para llamar cuando el documento no se carga correctamente.
- `onfocus`
  - : Función para llamar cuando el documento recibe el foco.
- `onhashchange`
  - : Función para llamar cuando la parte del identificador del fragmento (comenzando con el carácter de almohadilla (`'#'` también conocido como numeral)) de la dirección actual del documento ha cambiado.
- `onlanguagechange` {{experimental_inline}}
  - : Función para llamar cuando cambiaron los idiomas preferidos.
- `onload`
  - : Función a llamar cuando se haya terminado de cargar el documento.
- `onmessage`
  - : Función para llamar cuando el documento ha recibido un mensaje.
- `onoffline`
  - : Función para llamar cuando falla la comunicación de la red.
- `ononline`
  - : Función para llamar cuando se restablece la comunicación de la red.
- `onpopstate`
  - : Función para llamar cuando el usuario ha navegado el historial de sesiones.
- `onredo`
  - : Función para llamar cuando el usuario ha avanzado en el historial de deshacer transacciones.
- `onresize`
  - : Función para llamar cuando el documento ha cambiado de tamaño.
- `onstorage`
  - : Función para llamar cuando el área de almacenamiento ha cambiado.
- `onundo`
  - : Función para llamar cuando el usuario ha retrocedido en el historial de deshacer transacciones.
- `onunload`
  - : Función para llamar cuando el documento se vaya.
- `rightmargin` {{deprecated_inline}}
  - : El margen de la derecha del _\<body>_. _Este método no es conforme, usa la propiedad CSS {{CSSxRef("margin-right")}} en el elemento_.
- `text` {{deprecated_inline}}
  - : Color de primer plano del texto. _Este método no es conforme, usa la propiedad CSS {{CSSxRef("color")}} en el elemento_.
- `topmargin` {{deprecated_inline}}
  - : El margen de la parte superior del _\<body>_. _Este método no es conforme, usa la propiedad CSS {{CSSxRef("margin-top")}} en el elemento_.
- `vlink` {{deprecated_inline}}
  - : Color del texto de los enlaces de hipertexto visitados. _Este método no es conforme, utiliza la propiedad {{CSSxRef("color")}} de CSS junto con la pseudoclase {{CSSxRef(":visited")}} en su lugar_.

## Ejemplo

```html
<html>
  <head>
    <title>Título del documento</title>
  </head>
  <body>
    <p>Este es un párrafo</p>
  </body>
</html>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- {{HTMLElement("html")}}
- {{HTMLElement("head")}}
