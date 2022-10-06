---
title: Macros usadas comúnmente
slug: MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros
page-type: mdn-writing-guide
tags:
  - meta
  - writing-guide
---

{{MDNSidebar}}

Esta página enumera muchas de las macros de propósito general creadas para usarlas en MDN.
Para obtener información sobre cómo usar estas macros, consulta [Usar macros](/es/docs/MDN/Writing_guidelines/Page_structures/Macros).

Consulta [Otras macros](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Other) para obtener información sobre las macros que se utilizan con poca frecuencia, que se utilizan solo en contextos especiales o, están en desuso.

## Enlaces

MDN proporciona una serie de macros de enlaces para facilitar la creación de enlaces a páginas de referencia, entradas de glosario y otros temas.

Las macros de enlaces se recomiendan sobre los enlaces HTML normales porque son breves y fáciles de traducir.
Por ejemplo, no es necesario traducir un glosario o un vínculo de referencia creado con una macro: en otras configuraciones regionales, se vinculará automáticamente a la versión correcta del archivo.

### Enlaces del glosario

La macro [`Glossary`](https://github.com/mdn/yari/blob/main/kumascript/macros/Glossary.ejs) crea un enlace a la entrada de un término específico en el [glosario](/es/docs/Glossary) MDN.
Esta macro acepta un parámetro requerido y un parámetro opcional:

1. El nombre del término (como "HTML"): `\{{Glossary("HTML")}}` produce {{Glossary("HTML")}}
2. Opcional: el texto que se mostrará en el artículo en lugar del nombre del término: `\{{Glossary("CSS", "Hojas de estilo en cascada")}}` produce {{Glossary("CSS", "Hojas de estilo en cascada" )}}

### Enlace a páginas en referencias

Hay macros para enlaces independientes de la configuración regional a páginas en áreas de referencia específicas de MDN: JavaScript, CSS, elementos HTML, SVG, etc.

Las macros son fáciles de usar.
Como mínimo, todo lo que necesitas hacer es especificar el nombre del elemento al que vincular en el primer argumento.
La mayoría de las macros también tendrán un segundo argumento que te permite cambiar el texto a mostrar (la documentación se puede encontrar en los enlaces en la columna más a la izquierda a continuación).

<table class="standard-table">
  <thead>
    <tr>
      <th>Macro</th>
      <th>Enlaces a la página abajo</th>
      <th>Ejemplo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/main/kumascript/macros/cssxref.ejs">CSSxRef</a>
      </td>
      <td>
        <a href="/es/docs/Web/CSS/Reference">Referencia CSS</a> (/Web/CSS/Reference)
      </td>
      <td>
        <code>\{{CSSxRef("cursor")}}</code> resulta en {{CSSxRef("cursor")}}.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/main/kumascript/macros/DOMxRef.ejs">DOMxRef</a>
      </td>
      <td><a href="/es/docs/Web/API">Referencia DOM</a> (/Web/API)</td>
      <td>
        <code>\{{DOMxRef("Document")}}</code> o <code>\{{DOMxRef("document")}}</code> resulta en {{DOMxRef("Document")}},<br />
        <code>\{{DOMxRef("document.getElementsByName()")}}</code> resulta en {{DOMxRef("document.getElementsByName()")}}<br />
        <code>\{{DOMxRef("Node")}}</code> resulta en {{DOMxRef("Node")}}.<br />
        Puedes cambiar el texto a mostrar usando un segundo parámetro: <code>\{{DOMxRef("document.getElementsByName()","getElementsByName()")}}</code> da como resultado {{DOMxRef("document.getElementsByName()","getElementsByName()")}}.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/main/kumascript/macros/HTMLElement.ejs">HTMLElement</a>
      </td>
      <td>
        <a href="/es/docs/Web/HTML/Element">Referencia de elementos HTML</a> (/Web/HTML/Element)
      </td>
      <td>
        <code>\{{HTMLElement("select")}}</code> da como resultado {{HTMLElement("select")}}
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/main/kumascript/macros/htmlattrxref.ejs"
          >HTMLAttrxRef</a>
      </td>
      <td>
        <a href="/es/docs/Web/HTML/Global_attributes">Descripción del atributo HTML global</a>
        si solo especificas el nombre del atributo.<br />El atributo asociado con un elemento HTML específico si especificas un nombre de atributo y un nombre de elemento.
      </td>
      <td>
        <code>\{{HTMLAttrxRef("lang")}} </code>enlaza a la descripción del atributo global {{HTMLAttrxRef("lang")}}.<br />
        <code>\{{HTMLAttrxRef("type","input")}}</code> da como resultado un enlace al atributo {{htmlattrxref("type","input")}} (en el elemento {{HTMLElement( "input")}}).
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/main/kumascript/macros/jsxref.ejs">JSxRef</a>
      </td>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference">Referencia de JavaScript</a> (/Web/JavaScript/Reference).
      </td>
      <td>
        <code>\{{JSxRef("Promise")}}</code> da como resultado {{JSxRef("Promise")}}
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/main/kumascript/macros/SVGAttr.ejs">SVGAttr</a>
      </td>
      <td>
        <a href="/en-US/docs/Web/SVG/Attribute">Referencia de atributo SVG</a> (/Web/SVG/Attribute).
      </td>
      <td>
        <code>\{{SVGAttr("d")}}</code> da como resultado {{SVGAttr("d")}}
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="https://github.com/mdn/yari/tree/main/kumascript/macros/SVGElement.ejs">SVGElement</a>
      </td>
      <td>
        <a href="/en-US/docs/Web/SVG/Attribute">Referencia del elemento SVG</a> (/Web/SVG/Element).
      </td>
      <td>
        <code>\{{SVGElement("view")}}</code> resulta en {{SVGElement("view")}}
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="https://github.com/mdn/yari/blob/main/kumascript/macros/httpheader.ejs">HTTPHeader</a></code>
      </td>
      <td>
        <a href="/en-US/docs/Web/HTTP/Headers">Encabezados HTTP</a> (/Web/HTTP/Headers).
      </td>
      <td>
        <code>\{{HTTPHeader("ACCEPT")}}</code> da como resultado {{HTTPHeader("ACCEPT")}}
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/main/kumascript/macros/HTTPMethod.ejs">HTTPMethod</a>
      </td>
      <td>
        <a href="/en-US/docs/Web/HTTP/Methods">Métodos de solicitud HTTP</a> (/Web/HTTP/Methods).
      </td>
      <td>
        <code>\{{HTTPMethod("HEAD")}}</code> da como resultado {{HTTPMethod("HEAD")}}
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/main/kumascript/macros/HTTPStatus.ejs">HTTPStatus</a>
      </td>
      <td>
        <a href="/en-US/docs/Web/HTTP/Status">Códigos de estado de respuesta HTTP</a> (/Web/HTTP/Status)
      </td>
      <td>
        <code>\{{HTTPStatus("404")}}</code> da como resultado {{HTTPStatus("404")}}
      </td>
    </tr>
  </tbody>
</table>

### Enlace a errores

- Errores

  - [`bug`](https://github.com/mdn/yari/blob/main/kumascript/macros/bug.ejs) te permite enlazar a un error en bugzilla.mozilla.org fácilmente usando esta sintaxis: ` \{{Bug(123456)}}`.
    Esto te da: {{Bug(123456)}}.
  - [`WebkitBug`](https://github.com/mdn/yari/blob/main/kumascript/macros/WebkitBug.ejs) inserta un enlace a un error en la base de datos de errores de WebKit.
    Por ejemplo, `\{{WebkitBug(31277)}}` inserta {{WebkitBug(31277)}}.

### Ayuda de navegación para guías de varias páginas

[`Previous`](https://github.com/mdn/yari/blob/main/kumascript/macros/Previous.ejs), [`Next`](https://github.com/mdn/yari/blob/main/kumascript/macros/Next.ejs) y [`PreviousNext`](https://github.com/mdn/yari/blob/main/kumascript/macros/PreviousNext.ejs) proporcionan controles de navegación para artículos que son parte de secuencias.
Para las plantillas unidireccionales, el único parámetro necesario es la ubicación wiki del artículo anterior o siguiente en la secuencia.
Para [`PreviousNext`](https://github.com/mdn/yari/blob/main/kumascript/macros/PreviousNext.ejs), los dos parámetros necesarios son las ubicaciones wiki de los artículos correspondientes.
El primer parámetro es para el artículo anterior y el segundo es para el artículo siguiente.

## Código de ejemplo

### Muestras en vivo

- [`EmbedLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs) te permite incrustar la salida de un código de ejemplo en una página, como se describe en [Muestras en vivo ](/es/docs/MDN/Writing_guidelines/Page_structures/Live_samples).
- [`LiveSampleLink`](https://github.com/mdn/yari/blob/main/kumascript/macros/LiveSampleLink.ejs) crea un enlace a una página que contiene el resultado de un código de ejemplo en una página, como se describe en [Muestras en vivo](/es/docs/MDN/Writing_guidelines/Page_structures/Live_samples).
- [`EmbedGHLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedGHLiveSample.ejs) permite incrustar muestras en vivo desde páginas de GitHub.
  Puedes obtener más información en [GitHub live samples](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples#github_live_samples).

## Generar la barra lateral

Hay plantillas para casi todas las grandes colecciones de páginas.
Por lo general, se vinculan a la página principal de la referencia/guía/tutorial (esto a menudo es necesario porque nuestras migas de pan a veces no pueden hacer esto) y colocan el artículo en la categoría adecuada.

- [`CSSRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/CSSRef.ejs) genera la barra lateral para las páginas de referencia de CSS.
- [`HTMLRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLRef.ejs) genera la barra lateral para las páginas de referencia HTML.
- [`APIRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs) genera la barra lateral para las páginas de referencia de la API web.

## Formato de propósito general

### Indicadores en línea para la documentación de la API

[`optional_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/opcional_inline.ejs) y [`ReadOnlyInline`](https://github.com/mdn/yari/blob/main/kumascript/macros/ReadOnlyInline.ejs) se usan en la documentación de la API, generalmente cuando se describe la lista de propiedades de un objeto o los parámetros de una función.

Uso: `\{{Optional_Inline}}` o `\{{ReadOnlyInline}}`.
Ejemplo:

- `isCustomObject` {{ReadOnlyInline}}
  - : Indica, si `true`, que el objeto es personalizado.
- `parameterX` {{optional_inline}}
  - : Blah blah blah…

## Indicadores de estado y compatibilidad

### Indicadores en línea sin parámetros adicionales

#### No estándar

[`non-standard_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/Non-standard_Inline.ejs) inserta una marca en línea que indica que la API no se ha estandarizado y no está en una pista estándar.

##### Sintaxis

`\{{Non-standard_Inline}}`

##### Ejemplos

- Icono: {{Non-standard_Inline}}

#### Experimental

[`experimental_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/experimental_inline.ejs) inserta una marca en línea que indica que la API no está ampliamente implementada y puede cambiar en el futuro.

##### Sintaxis

`\{{Experimental_Inline}}`

##### Ejemplos

- Icono: {{Experimental_Inline}}

### Indicadores en línea que admiten la especificación de la tecnología

#### Obsoleto

[`deprecated_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Inline.ejs) inserta en línea una marca obsoleta ({{Deprecated_Inline}}) para desalentar el uso de un API que está oficialmente en desuso (o se ha eliminado).

##### Sintaxis

`\{{Deprecated_Inline}}`

##### Ejemplos

- Icono: {{Deprecated_Inline}}

### Indicadores de encabezado de página o sección

Estas plantillas tienen la misma semántica que sus contrapartes en línea descritas anteriormente.
Las plantillas se deben colocar directamente debajo del título de la página principal (o navegación de migas de pan, si está disponible) en la página de referencia.
También se pueden usar para marcar una sección en una página.

- [`non-standard_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Non-standard_Header.ejs): `\{{Non-standard_Header}}` {{Non-standard_Header}}
- [`SeeCompatTable`](https://github.com/mdn/yari/blob/main/kumascript/macros/SeeCompatTable.ejs) se debe usar en páginas que documentan [características experimentales](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
  Ejemplo: `\{{SeeCompatTable}}` {{SeeCompatTable}}
- [`deprecated_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Header.ejs): `\{{Deprecated_Header}}` {{Deprecated_Header}}
- [`secureContext_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/secureContext_header.ejs).
  Se debe utilizar en las páginas principales, como las páginas de la interfaz, las páginas de descripción general de la API y los puntos de entrada de la API (por ejemplo, `navigator.xyz`), pero normalmente no en las subpáginas, como las páginas de métodos y propiedades.
  Ejemplo: `\{{SecureContext_Header}}` {{SecureContext_Header}}

### Indicar que una función está disponible en *web workers*

La macro [`AvailableInWorkers`](https://github.com/mdn/yari/blob/main/kumascript/macros/AvailableInWorkers.ejs) inserta un cuadro de nota localizado que indica que una característica está disponible en un contexto [*web worker*](/es/docs/Web/API/Web_Workers_API).
Puedes usar el argumento `notservice` para indicar que una característica funciona en *web workers*, excepto en *service workers".

#### Sintaxis

```plain
\{{AvailableInWorkers}}
\{{AvailableInWorkers("notservice")}}
```

#### Ejemplos

{{AvailableInWorkers}}
{{AvailableInWorkers("notservice")}}
