---
title: link
slug: Web/HTML/Element/link
---

{{HTMLSidebar}}

El **elemento HTML `<link>`** especifica la relación entre el documento actual y un recurso externo. Los usos posibles de este elemento incluyen la definición de un marco relacional para navegación. Este elemento es más frecuentemente usado para enlazar hojas de estilos.

> **Nota:** El atributo [`rel`](/es/docs/Web/HTML/Element/link#rel) puede ser establecido con muchos valores diferentes. Estos se encuentran [listados](/es/docs/Web/HTML/Tipos_de_enlaces) en una página separada.

| [Categorías de contenido](/es/docs/Web/Guide/HTML/categorias_de_contenido) | Contenido en metadatos. Si [`itemprop`](/es/docs/Web/HTML/Element/link#itemprop) está presente: [contenido dinámico](/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_dinámico) y [contenido textual o estático](/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_textual_o_estático) |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contenido permitido                                                        | Ninguno, es un {{Glossary("empty element", "elemento vacío")}}.                                                                                                                                                                                                                                         |
| Omisión de etiqueta                                                        | Siendo un elemento vacío, la etiqueta de inicio debe estar presente y la etiqueta de cierre no debe estarlo                                                                                                                                                                                             |
| Elementos padre permitidos                                                 | Cualquier elemento que acepte elementos de metadatos. Si está presente el atributo [`itemprop`](/es/docs/Web/HTML/Element/link#itemprop): cualquier elemento que acepte [contenido textual o estático](/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_textual_o_estático).                   |
| Interfaz DOM                                                               | {{domxref("HTMLLinkElement")}}                                                                                                                                                                                                                                                                          |

## Atributos

Este elemento incluye los [atributos globales](/es/docs/Web/HTML/Atributos_Globales).

- `charset`{{deprecated_inline}}
  - : Este atributo define la codificación de caracteres del recurso enlazado. El valor es un espacio y/o una lista de grupos de caracteres según se define en {{rfc(2045)}}, separados por coma. El valor predeterminado es `iso-8859-1`.
    > **Nota:** Este atributo es obsoleto y **no debe ser usado por autores**. Para conseguir su mismo efecto, se recomienda usar el encabezado HTTP Content-Type en el recurso enlazado.
- `crossorigin`
  - : Este atributo enumerado indica si se debe usar CORS cuando se solicite una imagen relacionada. Las [imágenes con CORS habilitado](/es/docs/Web/HTML/Imagen_con_CORS_habilitado) pueden ser reutilizadas en el elemento {{HTMLElement("canvas")}} sin que estén _corruptas_.Los valores permitidos son:_ `"anonymous"`
    _ : Una solicitud a un origen cruzado (esto es, con el encabezado HTTP `Origin:`) es realizada, pero no se envían credenciales (es decir, no se envían cookies, ni certificado X.509, ni datos de autenticación básica HTTP). Si el servidor no otorga credenciales al sitio de origen (por no enviar el encabezado HTTP `Access-Control-Allow-Origin:`) la imagen estará _corrupta_, y su uso estará restringido.
    - `"use-credentials"`
      - : Una solicitud a un origen cruzado (esto es, con el encabezado HTTP `Origin:`) es realizada, enviando credenciales (es decir, se envían cookies, certificado y autenticación básica HTTP). Si el servidor no otorga credenciales al sitio de origen (a través del encabezado HTTP `Access-Control-Allow-Credentials:`), la imagen estará _corrupta_, y su uso estará restringido.Si no está presente, el recurso es obtenido sin una solicitud CORS (sin enviar el encabezado HTTP `Origin:`), previniendo así su uso no corrupto en elementos {{HTMLElement('canvas')}}. Si se introduce un valor no permitido, se maneja como si usara el valor **anonymous**. Véase [atributos de configuración CORS](/es/docs/Web/HTML/Atributos_de_configuracion_CORS) para más información.
- `disabled` {{Non-standard_inline}}

  - : Este atributo es usado para deshabilitar una relación de enlace. Agregando programación, este atributo puede ser usado para habilitar o deshabilitar la relación con distintas hojas de estilos.
    > **Nota:** Aunque no hay atributo `disabled` en el estándar de HTML, **sí** hay un atributo `disabled` en el objeto DOM `HTMLLinkElement`.El uso de `disabled` como atributo HTML no es estándar, y solo puede ser usado en algunos navegadores ([W3 #27677](https://www.w3.org/Bugs/Public/show_bug.cgi?id=27677)). **No debe usarse**. Para lograr un efecto similar, se puede usar una de las siguientes técnicas:
    >
    > - Si el atributo `disabled` fue añadido directamente al elemento en la página, no incluya el elemento {{HTMLElement("link")}} en vez de eso;
    > - Establezca la **propiedad** `disabled` del objeto DOM `StyleSheet` vía programación.

- `href`
  - : Este atributo especifica la {{glossary("URL")}} del recurso enlazado. La URL debe ser absoluta o relativa.
- `hreflang`
  - : Este atributo indica el idioma del recurso enlazado. Es meramente informativo. Los valores permitidos son determinados por la [BCP47](http://www.ietf.org/rfc/bcp/bcp47.txt). Se recomienda usar este atributo solamente si el atributo [`href`](/es/docs/Web/HTML/Element/a#href) está presente.
- `integrity` {{experimental_inline}}
  - : Contiene metadatos en línea, el valor criptográfico codificado a base 64 de un recurso (archivo) que se le está indicando al navegador que obtenga, el cual puede ser utilizado por el agente usuario para verificar si el recurso obtenido ha sido entregado libre de manipulaciones inesperadas. Véase [Integridad de subrecursos](/es/docs/Web/Security/Subresource_Integrity).
- `media`

  - : Este atributo especifica el tipo de medio al que aplica el recurso enlazado. Su valor debe ser un [media query](/es/docs/CSS/Media_queries). Este atributo es usado principalmente cuando se enlaza a una hoja de esetilos externa en la que se le permita al agenete usuario seleccionar la que mejor se adapte al dispositivo sobre el que se ejecuta.
    > **Nota:**
    >
    > - En HTML 4, esto puede ser solamente una lista simple de literales de medios separadas por espacio, es decir, [tipos de medios y grupos](/es/docs/Web/CSS/@media), donde se definían valores para este atributo, tales como `print`, `screen`, `aural`, `braille`. HTML5 extiende esto a cualquier clase de [media queries](/es/docs/CSS/Media_queries), los cuales son un superconjunto de los valores permitidos de HTML 4.
    > - Los navegadores que no soporten los [Media Queries de CSS3](/es/docs/CSS/Media_queries) no necesariamente reconocerán el enlace adecuado; no olvide establecer enlaces de _fallback_, usando los conjuntos de media queriese definidos en HTML 4.

- `methods` {{Non-standard_inline}}
  - : El valor de este atributo provee información acerca de las funciones que podrían ser ejecutadas en un objeto. Los valores son generalmente indicados por el protocolo HTTP cuando se usa, pero podrían (por razones similares a las del atributo **title**) ser usados para incluir información de ayuda por adelantado en el enlace. Por ejemplo, el navegador podría elegir una representación diferente de un enlace como una función de los métodos especificados; algo que es buscable podría tener un ícono diferente, o un enlace externo podría dibujar una indicación de que se dejará el sitio actual. Este atributo no está bien comprendido, ni soportado, aun por el navegador en el que se definió, Internet Explorer 4. Véase [Propiedades de métodos (MSDN)](http://msdn.microsoft.com/en-us/library/ms534168%28VS.85%29.aspx).
- `referrerpolicy` {{experimental_inline}}
  - : Una cadena de texto que indica el referente a usar cuando se obtenga el recurso:\* `'no-referrer'` significa que el encabezado {{HTTPHeader("Referer")}} no será enviado.
    - `'no-referrer-when-downgrade'` significa que no se enviará el encabezado {{HTTPHeader("Referer")}} cuando se navegue a un origen sin TLS (HTTPS). Este es el comportamiento predeterminado del agente usuario, si no se especifica una política distinta.
    - `'origin'` significa que el referente será el origen de la página, qué es básicamente el esquema, host y puerto.
    - `'origin-when-cross-origin'` significa que la navegación a otros orígenes estará limitada por el esquema, el host y el puerto, mientras que navegar dentro del mismo origen incluirá la ruta del referente
    - `'unsafe-url'` significa que el referente incluirá el origen y ruta (sin el fragmento, contraseña o nombre de usuario). Este caso es inseguro porque permite filtrar orígenes y rutas desde recursos protegidos por TLS a orígenes inseguros.
- `rel`
  - : Este atributo indica la relación del documento enlazado con el actual. El atributo debe ser una lista de [tipos de enlaces](/es/docs/Web/HTML/Tipos_de_enlaces) separados por espacio. El uso más común para este atributo es especificar el enlace a una hoja de estilos externa: el atributo **rel** se establece con valor `stylesheet`, y el atributo **href** se establece con la URL de la hoja de estilos externa para dar formato a la página. WebTV también soporta el uso del valor `next` en **rel** para precargar la siguiente página en una serie de documentos.
- `rev`{{deprecated_inline}}
  - : El valor de este atributo muestra la relación del documento actual al documento enlazado, como se define en el atributo [`href`](/es/docs/Web/HTML/Element/link#href). En consecuencia, este atributo define la relación inversa, en comparación al valor del atributo **rel**. Los [tipos de enlace](/es/docs/Web/HTML/Tipos_de_enlaces) para este atributo son similares a los disponibles para [`rel`](/es/docs/Web/HTML/Element/link#rel).
    > **Nota:** Este atributo es obsoleto en HTML5. **No debe usarse**. Para lograr este efecto, use el atributo [`rel`](/es/docs/Web/HTML/Element/link#rel) con el [tipo de enlace](/es/docs/Web/HTML/Tipos_de_enlaces) contrario, por ejemplo, made debe reemplazar a author. Además, este atributo no significa _revision_ y no debe ser usado con un número de versión, que es desafortunadamente el caso de muchos sitios.
- `sizes`

  - : Este atributo define los tamaños de los íconos para medios visuales contenidos en el recurso. Debe estar presente solo si el atributo [`rel`](/es/docs/Web/HTML/Element/link#rel) contiene el [tipo de enlace](/es/docs/Web/HTML/Tipos_de_enlaces) icon. Puede tener los siguientes valores:
    - `any`, significa que el ícono puede ser escalado a cualquier tamaño, ya que está en un formato vectorial, como `image/svg+xml`.
    - una lista de tamaños separados por espacios en blanco, cada uno en formato `<anchura en píxeles>` x `<altura en píxeles>` or `<anchura en píxeles>` X `<altura en píxeles>`. Cada uno de estos tamaños debe estar contenido en el recurso.
      > **Nota:**
      >
      > - La mayoría de los formatos de ícono solo permiten almacenar un ícono; por lo que la mayoría de las ocasiones, el atributo [`sizes`](/es/docs/Web/HTML/Global_attributes#sizes) contiene solamente una entrada. El formato ICO de Microsoft lo hace, así como el formato ICN de Apple. Siendo ICO más común, es el que se recomienda usar.
      > - iOS de Apple no soporta este atributo, por lo que iPhone y iPad de Apple usan [tipos de enlaces](/es/docs/Web/HTML/Tipos_de_enlaces) especiales, no estándares, para definir los íconos a usar como Web Clip o contenedor de inicio: apple-touch-icon y apple-touch-startup-icon.

- `target`{{Non-standard_inline}}
  - : Define el nombre del frame o ventana que tendrá la relación de enlace o que mostrará la representación de algun recurso enlazado.
- `title`
  - : El atributo `title` tiene semántica particular para el elemento `<link>`. Cuando se usa en una etiqueta `<link rel="stylesheet">`, define una [hoja de estilos preferida o alternativa](/es/docs/Web/CSS/Alternative_style_sheets). El uso incorrecto de este atributo podría [provocar que la hoja de estilos sea ignorada](/es/docs/Correctly_Using_Titles_With_External_Stylesheets).
- `type`
  - : Este atributo es usado para definir el tipo de contenido al que se enlaza. El valor del atributo debe ser un tipo MIME, como **text/html**, **text/css**. El uso común de este atributo es para definir el tipo de hoja de estilos enlazada, y el valor más común es **text/css**, el cual indica un formato de Hoja de Estilos en Cascada.

## Ejemplos

### Incluyendo una hoja de estilos

Para incluir una hoja de estilos en una página, use la siguiente sintaxis:

```html
<link href="style.css" rel="stylesheet" />
```

### Proporcionando hojas de estilos alternativas

También se pueden especificar [hojas de estilos alternativas](/es/docs/Web/CSS/Alternative_style_sheets).

El usuario puede elegir cuál hoja de estilos usar, seleccionándola desde el menú Ver > Estilo de Página. Esto proporciona una manera en que los usuarios pueden ver múltiples versiones de una misma página.

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### Eventos de carga de hojas de estilos

Se puede determinar cuando una hoja de estilos fue cargada estableciendo la ejecución de un evento `load` en el elemento; de forma similar, se puede detectar si ocurrió un error al procesar una hoja de estilos, observando el evento `error`:

```html
<script>
  function sheetLoaded() {
    // Hacer algo interesante; la hoja de estilos ha sido cargada
  }

  function sheetError() {
    alert("¡Ocurrió un error al cargar la hoja de estilos!");
  }
</script>

<link
  rel="stylesheet"
  href="mystylesheet.css"
  onload="sheetLoaded()"
  onerror="sheetError()" />
```

> **Nota:** El evento `load` se dispara una vez que la hoja de estilos y todo su contenido importado ha sido cargado y procesado, e inmediatamente antes de que los estilos sean aplicados al contenido.

## Notas

- Una etiqueta `<link>` puede ocurrir solo en el elemento head; sin embargo, pueden haber múltiples ocurrencias de `<link>`.
- HTML 3.2 define solamente los atributos **href**, **rel**, **rev**, y **title** para el elemento link.
- HTML 2 define los atributos **href**, **methods**, **rel**, **rev**, **title**, y **urn** para el elemento `<link>`. Los atributos **methods** y **urn** fueron eliminados más adelante de las especificaciones.
- Las especificaciones HTML y XHTML definen controladores de evento para el elemento `<link>`, pero no está claro cómo serían usados.
- En XHTML 1.0, elementos vacíos como `<link>` requieren una diagonal de cierre: `<link />`.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Tabla de compatibilidad de eventos en \<script> y \<link>, por Ryan Grove](http://pieisgood.org/test/script-link-events/)
