---
title: <source>
slug: Web/HTML/Element/source
---

El **elemento HTML `<source>`** especifica recursos de medios múltiples para los elementos {{HTMLElement("picture")}}, {{HTMLElement("audio")}}, o {{HTMLElement("video")}}. Es un elemento vacío. Normalmente se utiliza para servir el mismo contenido multimedia en [varios formatos soportados por diferentes navegadores](/es/docs/Media_formats_supported_by_the_audio_and_video_elements).

{{EmbedInteractiveExample("pages/tabbed/source.html", "tabbed-standard")}}

La fuente de este ejemplo interactivo se almacena en un repositorio de GitHub. Si desea contribuir al proyecto de ejemplos interactivos, por favor clone [https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples)y envíenos una solicitud de pull.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/docs/Web/HTML/Content_categories"
          >Categorías de contenido</a
        >
      </th>
      <td>Ninguna.</td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>Ninguno, esto es un {{Glossary("empty element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Omisión de Etiqueta</th>
      <td>
        Debe tener una etiqueta inicial, pero no debe tener una etiqueta final.
      </td>
    </tr>
    <tr>
      <th scope="row"><dfn>Padres permitidos</dfn></th>
      <td>
        <div>
          Un elemento multimedia—{{HTMLElement("audio")}} o
          {{HTMLelement("video")}}—y se debe colocar antes que cualquier
          <a href="/es/docs/HTML/Content_categories#Flow_content"
            >contenido de flujo</a
          >
          o elemento {{HTMLElement("track")}}.
        </div>
        <div>
          Un elemento {{HTMLElement("picture")}}, y se debe colocar
          antes del elemento {{HTMLElement("img")}}.
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td>Ninguno</td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <th></th>
      <td>{{domxref("HTMLSourceElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento incluye los [atributos globales](/es/docs/HTML/Global_attributes).

- `sizes` {{experimental_inline}}
  - : Es una lista de tamaños del origen que describe el ancho renderizado final de la imagen representada por el origen. Cada tamaño de origen consiste de una lista separada por comas de pares de longitud de condición de medios. Esta información es utilizada por el navegador para determinar, antes de distribuir la página, qué imagen definida en [`srcset`](/es/docs/Web/HTML/Element/source#srcset) se utilizará.
    El atributo `sizes` tiene un efecto solo cuando el elemento {{HTMLElement("source")}} es hijo directo de un elemento {{HTMLElement("picture")}}.
- `src`
  - : Es la ubicación del recurso multimedia, requerido por los elementos {{HTMLElement("audio")}} y {{HTMLElement("video")}}. El valor de este atributo es ignorado cuando el elemento `<source>` se coloca dentro de un elemento {{HTMLElement("picture")}}.
- `srcset` {{experimental_inline}}

  - : Una lista de una o más cadenas separadas por comas que indican un conjunto de posibles imágenes representadas por la fuente para que las utilice el navegador. Cada cadena se compone de:

    1. una URL a una imagen,
    2. un descriptor de ancho, que es un entero positivo seguido directamente por `'w'`. El valor predeterminado, si falta, es el infinito.
    3. un descriptor de densidad de píxeles, que es un número flotante positivo seguido directamente por `'x'`. El valor predeterminado, si falta, es `1x`.

    Cada cadena en la lista debe tener al menos un descriptor de ancho o un descriptor de densidad de píxeles para que sea válido. Entre los elementos de la lista, solo debe haber una cadena que contenga la misma tupla de descriptor de ancho y descriptor de densidad de píxeles.
    El navegador elige la imagen más adecuada para mostrar en un momento determinado.
    El atributo `srcset` solo tiene efecto cuando el elemento {{HTMLElement("source")}} es hijo directo de un elemento {{HTMLElement("picture")}}.

- `type`
  - : El tipo MIME del recurso, opcionalmente con un parámetro `codecs`. Consultar [RFC 4281](https://tools.ietf.org/html/rfc4281)para obtener información sobre cómo especificar los códecs.
- `media` {{experimental_inline}}
  - : [Consulta multimedia](/es/docs/CSS/Media_queries) de los medios destinados al recurso; esto solo debe usarse en un elemento {{HTMLElement("picture")}}.

Si el atributo `type` no se especifica, el tipo de medio se recupera del servidor y se verifica para ver si el agente de usuario puede manejarlo; si no se puede procesar, se comprueba el siguiente `<source>`. Si se especifica el atributo `type`, se compara con los tipos que puede presentar el agente de usuario y, si no se reconoce, el servidor ni siquiera recibe consultas; en su lugar, el siguiente elemento `<source>` se comprueba a la vez.

## Ejemplos

Este ejemplo muestra cómo ofrecer un video en formato Ogg para usuarios cuyos navegadores admiten el formato Ogg, y un video en formato QuickTime para usuarios cuyos navegadores lo admiten. Si el navegador no admite los elementos `audio` o `video`, se muestra un aviso. Si el navegador admite los elementos pero no admite ninguno de los formatos especificados, se genera un evento `error` y los controles de medios predeterminados (si están habilitados) indicarán un error. Consulte también la lista de [formatos de medios compatibles con los elementos de audio y video](/es/docs/Media_formats_supported_by_the_audio_and_video_elements) en varios navegadores.

```html
<video controls>
  <source src="foo.webm" type="video/webm" />
  <source src="foo.ogg" type="video/ogg" />
  <source src="foo.mov" type="video/quicktime" />
  Lo lamento; su navegador no soporta video HTML5.
</video>
```

Para obtener más ejemplos, consulte [Uso de audio y video en Firefox](/es/docs/Using_HTML5_audio_and_video).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- Elemento {{HTMLElement("picture")}}
- Elemento {{HTMLElement("audio")}}
- Elemento {{HTMLElement("video")}}

{{HTMLSidebar}}
