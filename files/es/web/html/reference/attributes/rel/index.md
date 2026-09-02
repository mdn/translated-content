---
title: Atributo HTML `rel`
short-title: rel
slug: Web/HTML/Reference/Attributes/rel
l10n:
  sourceCommit: db443a6062d0e858a62af2f9a3a7558335ffd2dd
---

El atributo **`rel`** define la relación entre un recurso enlazado y el documento actual. Es válido en los elementos {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} y {{htmlelement('form')}}, y los valores admitidos dependen del elemento en el que se encuentre el atributo.

El tipo de relación lo indica el valor del atributo `rel`, que, si está presente, debe ser un conjunto desordenado de palabras clave únicas separadas por espacios. A diferencia de un nombre de `class`, que no expresa semántica, el atributo `rel` debe expresar tokens que sean semánticamente válidos tanto para las máquinas como para las personas. Los registros vigentes para los posibles valores del atributo `rel` son el [registro de relaciones de enlace de la IANA](https://www.iana.org/assignments/link-relations/link-relations.xhtml), el [HTML Living Standard](https://html.spec.whatwg.org/multipage/links.html#linkTypes) y la página de edición libre [existing-rel-values](https://microformats.org/wiki/existing-rel-values) del wiki de microformats, [tal como sugiere](https://html.spec.whatwg.org/multipage/links.html#other-link-types) el Living Standard. Si se usa un valor de `rel` que no aparece en ninguna de estas tres fuentes, algunos validadores de HTML (como el [servicio de validación de marcado del W3C](https://validator.w3.org/)) generarán una advertencia.

La siguiente tabla enumera algunas de las palabras clave existentes más importantes. Cada palabra clave dentro de un valor separado por espacios debe ser única dentro de ese valor.

| Valor de `rel`                                                                                | Descripción                                                                                                                                                                                                                                                                                    | {{htmlelement('link')}} | {{htmlelement('a')}} y {{htmlelement('area')}} | {{htmlelement('form')}} |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ---------------------------------------------- | ----------------------- |
| [`alternate`](#alternate)                                                                     | Representaciones alternativas del documento actual.                                                                                                                                                                                                                                            | Enlace                  | Enlace                                         | No permitido            |
| [`author`](#author)                                                                           | Autor del documento o artículo actual.                                                                                                                                                                                                                                                         | Enlace                  | Enlace                                         | No permitido            |
| [`bookmark`](#bookmark)                                                                       | Enlace permanente a la sección contenedora más cercana.                                                                                                                                                                                                                                        | No permitido            | Enlace                                         | No permitido            |
| [`canonical`](#canonical)                                                                     | URL preferida para el documento actual.                                                                                                                                                                                                                                                        | Enlace                  | No permitido                                   | No permitido            |
| [`compression-dictionary`](/es/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary) | Enlaza a un {{glossary("Compression dictionary transport", "diccionario de compresión")}} que puede usarse para comprimir futuras descargas de los recursos de este sitio.                                                                                                                     | Enlace                  | No permitido                                   | No permitido            |
| [`dns-prefetch`](/es/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch)                     | Indica al navegador que resuelva de forma anticipada el DNS del origen del recurso de destino.                                                                                                                                                                                                 | Recurso externo         | No permitido                                   | No permitido            |
| [`external`](#external)                                                                       | El documento referenciado no forma parte del mismo sitio que el documento actual.                                                                                                                                                                                                              | No permitido            | Anotación                                      | Anotación               |
| [`expect`](#expect)                                                                           | Si se usa junto con [`blocking="render"`](/es/docs/Web/HTML/Reference/Elements/link), permite que la página quede [bloqueada para el renderizado](/es/docs/Glossary/Render_blocking) hasta que se analicen las partes esenciales del documento, de modo que se renderice de forma consistente. | Enlace                  | No permitido                                   | No permitido            |
| [`help`](#help)                                                                               | Enlace a la ayuda contextual.                                                                                                                                                                                                                                                                  | Enlace                  | Enlace                                         | Enlace                  |
| [`icon`](#icon)                                                                               | Un icono que representa al documento actual.                                                                                                                                                                                                                                                   | Recurso externo         | No permitido                                   | No permitido            |
| [`license`](#license)                                                                         | Indica que el contenido principal del documento actual está cubierto por la licencia de derechos de autor descrita en el documento referenciado.                                                                                                                                               | Enlace                  | Enlace                                         | Enlace                  |
| [`manifest`](/es/docs/Web/HTML/Reference/Attributes/rel/manifest)                             | Manifiesto de la aplicación web.                                                                                                                                                                                                                                                               | Enlace                  | No permitido                                   | No permitido            |
| [`me`](/es/docs/Web/HTML/Reference/Attributes/rel/me)                                         | Indica que el documento actual representa a la persona propietaria del contenido enlazado.                                                                                                                                                                                                     | Enlace                  | Enlace                                         | No permitido            |
| [`modulepreload`](/es/docs/Web/HTML/Reference/Attributes/rel/modulepreload)                   | Indica al navegador que obtenga de forma anticipada el script y lo almacene en el mapa de módulos del documento para evaluarlo más tarde. Opcionalmente, también pueden obtenerse las dependencias del módulo.                                                                                 | Recurso externo         | No permitido                                   | No permitido            |
| [`next`](#next)                                                                               | Indica que el documento actual forma parte de una serie y que el documento referenciado es el siguiente de esa serie.                                                                                                                                                                          | Enlace                  | Enlace                                         | Enlace                  |
| [`nofollow`](#nofollow)                                                                       | Indica que el autor original o el editor del documento actual no avala el documento referenciado.                                                                                                                                                                                              | No permitido            | Anotación                                      | Anotación               |
| [`noopener`](/es/docs/Web/HTML/Reference/Attributes/rel/noopener)                             | Crea un contexto de navegación de nivel superior que no sea auxiliar, siempre que el hipervínculo fuera a crear alguno de los dos (es decir, cuando el atributo `target` tiene un valor adecuado para ello).                                                                                   | No permitido            | Anotación                                      | Anotación               |
| [`noreferrer`](/es/docs/Web/HTML/Reference/Attributes/rel/noreferrer)                         | No se incluirá ninguna cabecera `Referer`. Además, tiene el mismo efecto que `noopener`.                                                                                                                                                                                                       | No permitido            | Anotación                                      | Anotación               |
| [`opener`](#opener)                                                                           | Crea un contexto de navegación auxiliar cuando el hipervínculo, de otro modo, crearía un contexto de navegación de nivel superior que no sea auxiliar (es decir, cuando tiene `"_blank"` como valor del atributo `target`).                                                                    | No permitido            | Anotación                                      | Anotación               |
| [`pingback`](#pingback)                                                                       | Indica la dirección del servidor de pingback que gestiona los pingbacks del documento actual.                                                                                                                                                                                                  | Recurso externo         | No permitido                                   | No permitido            |
| [`preconnect`](/es/docs/Web/HTML/Reference/Attributes/rel/preconnect)                         | Especifica que el agente de usuario debe conectarse de forma anticipada al origen del recurso de destino.                                                                                                                                                                                      | Recurso externo         | No permitido                                   | No permitido            |
| [`prefetch`](/es/docs/Web/HTML/Reference/Attributes/rel/prefetch)                             | Especifica que el agente de usuario debe obtener y almacenar en caché de forma anticipada el recurso de destino, ya que es probable que se necesite en una navegación posterior.                                                                                                               | Recurso externo         | No permitido                                   | No permitido            |
| [`preload`](/es/docs/Web/HTML/Reference/Attributes/rel/preload)                               | Especifica que el agente de usuario debe obtener y almacenar en caché de forma anticipada el recurso de destino para la navegación actual, según el destino potencial indicado por el atributo [`as`](/es/docs/Web/HTML/Reference/Elements/link) (y la prioridad asociada a ese destino).      | Recurso externo         | No permitido                                   | No permitido            |
| [`prerender`](/es/docs/Web/HTML/Reference/Attributes/rel/prerender) {{deprecated_inline}}     | Especifica que el agente de usuario debe obtener de forma anticipada el recurso de destino y procesarlo de manera que ayude a ofrecer una respuesta más rápida en el futuro. Esta funcionalidad fue reemplazada por la [Speculation Rules API](/es/docs/Web/API/Speculation_Rules_API).        | Recurso externo         | No permitido                                   | No permitido            |
| [`prev`](#prev)                                                                               | Indica que el documento actual forma parte de una serie y que el documento referenciado es el anterior de esa serie.                                                                                                                                                                           | Enlace                  | Enlace                                         | Enlace                  |
| [`privacy-policy`](#privacy-policy)                                                           | Ofrece un enlace a la información sobre las prácticas de recopilación y uso de datos que aplican al documento actual.                                                                                                                                                                          | Enlace                  | Enlace                                         | No permitido            |
| [`search`](#search)                                                                           | Ofrece un enlace a un recurso que puede usarse para buscar en el documento actual y sus páginas relacionadas.                                                                                                                                                                                  | Enlace                  | Enlace                                         | Enlace                  |
| [`stylesheet`](#stylesheet)                                                                   | Importa una hoja de estilos.                                                                                                                                                                                                                                                                   | Recurso externo         | No permitido                                   | No permitido            |
| [`tag`](#tag)                                                                                 | Indica una etiqueta (identificada por la dirección dada) que se aplica al documento actual.                                                                                                                                                                                                    | No permitido            | Enlace                                         | No permitido            |
| [`terms-of-service`](#terms-of-service)                                                       | Enlace al acuerdo, o términos de servicio, entre el proveedor del documento y las personas que deseen usarlo.                                                                                                                                                                                  | Enlace                  | Enlace                                         | No permitido            |

El atributo `rel` es relevante para los elementos {{htmlelement('link')}}, {{htmlelement('a')}}, {{htmlelement('area')}} y {{htmlelement('form')}}, aunque algunos valores solo son relevantes para un subconjunto de estos elementos. Como ocurre con todos los valores de atributos de palabra clave en HTML, estos valores no distinguen entre mayúsculas y minúsculas.

El atributo `rel` no tiene un valor predeterminado. Si se omite el atributo o ninguno de sus valores es compatible, el documento no tiene ninguna relación particular con el recurso de destino más allá de que existe un hipervínculo entre ambos. En ese caso, en {{htmlelement('link')}} y {{htmlelement('form')}}, si el atributo `rel` está ausente, no tiene palabras clave, o no incluye una o más de las palabras clave anteriores separadas por espacios, el elemento no crea ningún enlace. {{htmlelement('a')}} y {{htmlelement('area')}} sí crearán enlaces, pero sin una relación definida.

## Valor

- `alternate`
  - : Indica una representación alternativa del documento actual. Válido para {{htmlelement('link')}}, {{htmlelement('a')}} y {{htmlelement('area')}}, su significado depende de los valores de los demás atributos.
    - Junto con la palabra clave [`stylesheet`](#stylesheet) en un `<link>`, crea una [hoja de estilos alternativa](/es/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet).

      ```html
      <!-- una hoja de estilos persistente -->
      <link rel="stylesheet" href="default.css" />
      <!-- hojas de estilos alternativas -->
      <link
        rel="alternate stylesheet"
        href="highcontrast.css"
        title="Alto contraste" />
      ```

    - Junto con un atributo [`hreflang`](/es/docs/Web/HTML/Reference/Elements/link#hreflang) que difiere del idioma del documento, indica una traducción.
    - Junto con el atributo [`type`](/es/docs/Web/HTML/Reference/Elements/link#type) con el valor `"application/rss+xml"` o `"application/atom+xml"`, crea un hipervínculo que referencia un feed de sindicación.

      ```html
      <link
        rel="alternate"
        type="application/atom+xml"
        href="posts.xml"
        title="Blog" />
      ```

    - De lo contrario, crea un hipervínculo que referencia una representación alternativa del documento actual, cuya naturaleza viene dada por los atributos [`hreflang`](/es/docs/Web/HTML/Reference/Elements/link#hreflang) y [`type`](/es/docs/Web/HTML/Reference/Elements/link#type).
      - Si se indica `hreflang` junto con `alternate`, y el valor de `hreflang` difiere del idioma del documento actual, indica que el documento referenciado es una traducción.
      - Si se indica `type` junto con `alternate`, indica que el documento referenciado tiene un formato alternativo (como un PDF).
      - Los atributos `hreflang` y `type` pueden indicarse ambos junto con `alternate`.

      ```html
      <link
        rel="alternate"
        href="/fr/html/print"
        hreflang="fr"
        type="text/html"
        media="print"
        title="HTML en francés (para imprimir)" />
      <link
        rel="alternate"
        href="/fr/pdf"
        hreflang="fr"
        type="application/pdf"
        title="PDF en francés" />
      ```

- `author`
  - : Indica que el documento referenciado ofrece más información sobre el autor del documento o artículo actual. Relevante para los elementos {{htmlelement('link')}}, {{htmlelement('a')}} y {{htmlelement('area')}}.

    Con {{htmlelement('a')}} y {{htmlelement('area')}}, indica que el documento enlazado (o `mailto:`) ofrece información sobre el autor del elemento {{htmlelement('article')}} contenedor más cercano, si lo hay; en caso contrario, sobre el documento completo.

    Con {{htmlelement('link')}}, representa al autor del documento completo.

    > [!NOTE]
    > Por razones históricas, el valor de atributo obsoleto `rev="made"` se trata como `rel="author"`.

- `bookmark`
  - : Relevante como valor del atributo `rel` para los elementos {{htmlelement('a')}} y {{htmlelement('area')}}. Ofrece un enlace permanente al elemento {{htmlelement('article')}} contenedor más cercano, si existe. Si no hay ningún elemento `<article>` contenedor, ofrece un enlace permanente a la sección con la que el elemento de enlace está más estrechamente asociado.
- `canonical`
  - : Válido para {{htmlelement('link')}}, define la URL preferida para el documento actual, lo cual ayuda a los motores de búsqueda a reducir el contenido duplicado.
- `compression-dictionary` {{experimental_inline}}
  - : Válido para {{htmlelement('link')}}, define un {{glossary("Compression dictionary transport", "diccionario de compresión")}} que puede usarse para comprimir futuras descargas de los recursos de este sitio, de modo que su tamaño sea menor que con la compresión estándar.
- `dns-prefetch`
  - : Relevante para el elemento {{htmlelement('link')}} tanto en {{htmlelement('body')}} como en {{htmlelement('head')}}, indica al navegador que resuelva de forma anticipada el DNS del origen del recurso de destino. Es útil para recursos que probablemente se necesiten, ya que ayuda a reducir la latencia y, por lo tanto, mejora el rendimiento cuando finalmente se accede a esos recursos, dado que el navegador ya resolvió de forma anticipada el DNS del origen del recurso indicado. Consulta [dns-prefetch](/es/docs/Web/Performance/Guides/dns-prefetch), descrito en [resource hints](https://w3c.github.io/resource-hints/).
- `external`
  - : Relevante para {{htmlelement('form')}}, {{htmlelement('a')}} y {{htmlelement('area')}}, indica que el documento referenciado no forma parte del sitio actual. Puede combinarse con selectores de atributos para diferenciar visualmente los enlaces externos e indicar que se abandonará el sitio actual.
- `expect` {{experimental_inline}}
  - : Permite que el bloqueo del [renderizado](/es/docs/Glossary/Render_blocking) de la página se retrase hasta que se analicen las partes esenciales del documento, de modo que se renderice de forma consistente. Ten en cuenta que el bloqueo del renderizado solo ocurre si se complementa con el atributo [`blocking="render"`](/es/docs/Web/HTML/Reference/Elements/link).

    > [!NOTE]
    > Consulta [Estabilizar el estado de la página para que las transiciones entre documentos sean consistentes](/es/docs/Web/API/View_Transition_API/Using) para más información sobre su uso.

- `help`
  - : Relevante para {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} y {{htmlelement('area')}}, la palabra clave `help` indica que el contenido enlazado ofrece ayuda contextual, con información sobre el elemento padre que define el hipervínculo y sus elementos hijos. Cuando se usa dentro de `<link>`, la ayuda corresponde a todo el documento. Cuando se incluye en {{htmlelement('a')}} y {{htmlelement('area')}}, y si es compatible, el valor predeterminado de {{cssxref('cursor')}} será `help` en lugar de `pointer`.
- `icon`
  - : Válido con {{htmlelement('link')}}, el recurso enlazado representa el icono del documento actual, es decir, un recurso para representar la página en la interfaz de usuario.

    El uso más común del valor `icon` es el favicon:

    ```html
    <link rel="icon" href="favicon.ico" />
    ```

    Si hay varios `<link rel="icon">`, el navegador usa sus atributos [`media`](/es/docs/Web/HTML/Reference/Elements/link#media), [`type`](/es/docs/Web/HTML/Reference/Elements/link#type) y [`sizes`](/es/docs/Web/HTML/Reference/Elements/link#sizes) para seleccionar el icono más adecuado. Si varios iconos son igual de adecuados, se usa el último. Si más tarde se determina que el icono más adecuado no es apropiado, por ejemplo porque usa un formato no compatible, el navegador pasa al siguiente más adecuado, y así sucesivamente.

    > [!NOTE]
    > El atributo [`crossorigin`](/es/docs/Web/HTML/Reference/Attributes/crossorigin) no es compatible con `rel="icon"` en navegadores basados en Chromium. Consulta el [issue abierto de Chromium](https://crbug.com/1121645).

    > [!NOTE]
    > El iOS de Apple no usa este tipo de enlace, ni el atributo [`sizes`](/es/docs/Web/HTML/Reference/Elements/link#sizes) como sí lo hacen otros navegadores móviles, para seleccionar un icono de página web para Web Clip o una imagen de inicio.
    > En su lugar, usa los atributos no estándar [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) y [`apple-touch-startup-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6), respectivamente.

    > [!NOTE]
    > El tipo de enlace `shortcut` suele verse antes de `icon`, pero este tipo de enlace no cumple con los estándares, se ignora y **quienes desarrollan sitios web no deben usarlo más**.

- `license`
  - : Válido en los elementos {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("form")}} y {{HTMLElement("link")}}, el valor `license` indica que el hipervínculo lleva a un documento que describe la información de la licencia; es decir, que el contenido principal del documento actual está cubierto por la licencia de derechos de autor descrita en el documento referenciado. Si no está dentro del elemento {{HTMLElement("head")}}, el estándar no distingue si el hipervínculo se aplica a una parte específica del documento o al documento completo. Solo los datos de la página pueden indicarlo.

    ```html
    <link rel="license" href="#license" />
    ```

    > [!NOTE]
    > Aunque se reconoce, el sinónimo `copyright` es incorrecto y debe evitarse.

- `manifest`
  - : [Manifiesto de la aplicación web](/es/docs/Web/Progressive_web_apps/Manifest). Requiere el uso del protocolo CORS para la obtención del recurso entre orígenes.
- `modulepreload`
  - : Útil para mejorar el rendimiento y relevante para {{htmlelement('link')}} en cualquier parte del documento, establecer `rel="modulepreload"` indica al navegador que obtenga de forma anticipada el script (y sus dependencias) y lo almacene en el mapa de módulos del documento para evaluarlo más tarde. Los enlaces `modulepreload` pueden garantizar que la obtención por red se complete con el módulo listo (aunque no evaluado) en el mapa de módulos, antes de que realmente se necesite. Consulta también [`modulepreload`](/es/docs/Web/HTML/Reference/Attributes/rel/modulepreload).
- `next`
  - : Relevante para {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} y {{htmlelement('area')}}, el valor `next` indica que el documento actual forma parte de una serie y que el documento referenciado es el siguiente de esa serie. Cuando se incluye en un `<link>`, los navegadores pueden asumir que ese documento se obtendrá a continuación y tratarlo como una sugerencia de recursos.
- `nofollow`
  - : Relevante para {{htmlelement('form')}}, {{htmlelement('a')}} y {{htmlelement('area')}}, la palabra clave `nofollow` indica a los rastreadores de los motores de búsqueda que ignoren la relación del enlace. La relación `nofollow` puede indicar que quien posee el documento actual no avala el documento referenciado. Suele incluirse por parte de especialistas en SEO que buscan hacer pasar sus granjas de enlaces por páginas que no son spam.
- `noopener`
  - : Relevante para {{htmlelement('form')}}, {{htmlelement('a')}} y {{htmlelement('area')}}, crea un contexto de navegación de nivel superior que no es un contexto de navegación auxiliar, en caso de que el hipervínculo fuera a crear alguno de los dos (es decir, cuando tiene un valor adecuado en el atributo `target`). En otras palabras, hace que el enlace se comporte como si [`window.opener`](/es/docs/Web/API/Window/opener) fuera `null` y se hubiera establecido `target="_parent"`.

    Es lo opuesto a [`opener`](#opener).

- `noreferrer`
  - : Relevante para {{htmlelement('form')}}, {{htmlelement('a')}} y {{htmlelement('area')}}, incluir este valor hace que el referente sea desconocido (no se incluirá ninguna cabecera `Referer`) y crea un contexto de navegación de nivel superior, como si también se hubiera establecido `noopener`.
- `opener`
  - : Crea un contexto de navegación auxiliar cuando el hipervínculo, de otro modo, crearía un contexto de navegación de nivel superior que no es auxiliar (es decir, cuando el atributo `target` tiene el valor `"_blank"`). En la práctica, es lo opuesto a [noopener](#noopener).
- `pingback`
  - : Indica la dirección del servidor de pingback que gestiona los pingbacks del documento actual. Consulta la [especificación de Pingback](https://www.hixie.ch/specs/pingback/pingback).
- `preconnect`
  - : Ofrece al navegador una sugerencia para que abra una conexión con el sitio web enlazado de forma anticipada, sin revelar ninguna información privada ni descargar contenido, de modo que, si se sigue el enlace, el contenido enlazado pueda obtenerse más rápido.
- `prefetch`
  - : Especifica que el agente de usuario debe obtener y almacenar en caché de forma anticipada el recurso de destino, ya que es probable que se necesite en una navegación posterior.
    Consulta {{Glossary("prefetch")}} para más información.
- `preload`
  - : Especifica que el agente de usuario debe obtener y almacenar en caché de forma anticipada el recurso de destino para la navegación actual, según el destino potencial indicado por el atributo [`as`](/es/docs/Web/HTML/Reference/Elements/link#as) (y la prioridad asociada a ese destino). Consulta la página del valor [`preload`](/es/docs/Web/HTML/Reference/Attributes/rel/preload) para más información.
- `prerender` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Especifica que el agente de usuario debe obtener de forma anticipada el recurso de destino y procesarlo de manera que ayude a ofrecer una respuesta más rápida en el futuro, por ejemplo, obteniendo sus subrecursos o realizando parte del renderizado. Esta funcionalidad fue reemplazada por la [Speculation Rules API](/es/docs/Web/API/Speculation_Rules_API).
- `prev`
  - : Similar a la palabra clave [`next`](#next), relevante para {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} y {{htmlelement('area')}}, el valor `prev` indica que el documento actual forma parte de una serie y que el documento referenciado es el anterior de esa serie.

    Nota: El sinónimo `previous` es incorrecto y no debe usarse.

- `privacy-policy`
  - : Válido para los elementos {{htmlelement('a')}}, {{htmlelement('area')}} y {{htmlelement('link')}}, el valor `privacy-policy` indica que el documento referenciado es la política de privacidad que describe las prácticas de recopilación y uso de datos del documento actual.
- `search`
  - : Relevante para los elementos {{htmlelement('form')}}, {{htmlelement('link')}}, {{htmlelement('a')}} y {{htmlelement('area')}}, la palabra clave `search` indica que el hipervínculo referencia un documento cuya interfaz está diseñada específicamente para buscar en el documento actual, el sitio y los recursos relacionados; es decir, ofrece un enlace a un recurso que puede usarse para buscar.

    Si el atributo [`type`](/es/docs/Web/HTML/Reference/Elements/link#type) tiene el valor `application/opensearchdescription+xml`, el recurso es un complemento [OpenSearch](/es/docs/Web/XML/Guides/OpenSearch) que puede añadirse fácilmente a la interfaz de Firefox.

- `stylesheet`
  - : Válido para el elemento {{htmlelement('link')}}, importa un recurso externo para usarlo como hoja de estilos. El atributo [`type`](/es/docs/Web/HTML/Reference/Elements/link#type) no es necesario si se trata de una hoja de estilos `text/css`, ya que ese es el valor predeterminado. Si no es una hoja de estilos de tipo `text/css`, es recomendable declarar el tipo.

    Aunque este atributo define el enlace como una hoja de estilos, la interacción con otros atributos y términos clave dentro del valor de `rel` determina si la hoja de estilos se descarga o se usa.

    Cuando se usa junto con la palabra clave [`alternate`](#alternate), define una hoja de estilos alternativa. En ese caso, incluye un [`title`](/es/docs/Web/HTML/Reference/Elements/link#title) que no esté vacío.

    La hoja de estilos externa no se usará, ni siquiera se descargará, si el medio no coincide con el valor del atributo [`media`](/es/docs/Web/HTML/Reference/Elements/link#media).

    Requiere el uso del protocolo CORS para la obtención del recurso entre orígenes.

- `tag`
  - : Válido para los elementos {{htmlelement('a')}} y {{htmlelement('area')}}, indica una etiqueta (identificada por la dirección dada) que se aplica al documento actual. El valor `tag` denota que el enlace hace referencia a un documento que describe una etiqueta aplicable al documento en el que se encuentra. Este tipo de enlace no está pensado para las etiquetas dentro de una nube de etiquetas, ya que esas etiquetas se aplican a un grupo de páginas, mientras que el valor `tag` del atributo `rel` es para un único documento.

- `terms-of-service`
  - : Válido para los elementos {{htmlelement('a')}}, {{htmlelement('area')}} y {{htmlelement('link')}}, el valor `terms-of-service` indica que el documento referenciado corresponde a los Términos de servicio, los cuales describen los acuerdos entre quien provee el documento actual y quienes deseen utilizarlo.

### Valores no estándar

- [`apple-touch-icon`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4)
  - : Especifica el icono de una aplicación web en un dispositivo iOS.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("HTMLLinkElement.relList")}}
- {{domxref("HTMLAnchorElement.relList")}}
- {{domxref("HTMLAreaElement.relList")}}
