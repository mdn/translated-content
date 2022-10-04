---
title: '<script>: El elemento Script'
slug: Web/HTML/Element/script
tags:
  - Element
  - Elemento
  - HTML
  - HTML scripting
  - HTML script
  - HTML: Flow content
  - HTML: flujo de contenido
  - HTML: Metadata content
  - HTML: Contenido de metadatos
  - HTML: Phrasing content
  - HTML: Redacción de contenido
  - HTML: Script-supporting element
  - HTML: Compatibilidad con el elemento script
  - Referencia
  - Reference
  - Script
  - Web
  - tag
browser-compat: html.elements.script
---

{{HTMLRef}}

El elemento **`<script>`** [HTML](/es/docs/Web/HTML) se utiliza para incrustar código ejecutable o datos; este generalmente se usa para incrustar o hacer referencia a código JavaScript. El elemento `<script>` también se puede usar con otros lenguajes, tal como los lenguajes de programación [WebGL](/es/docs/Web/API/WebGL_API) GLSL shader y [JSON](/es/docs/Glossary/JSON).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/docs/Web/Guide/HTML/Content_categories"
          >Categorías de contenido</a
        >
      </th>
      <td>
        <a href="/es/docs/Web/Guide/HTML/Content_categories#contenido_de_metadatos"
          >Contenido de metadatos</a
        >,
        <a href="/es/docs/Web/Guide/HTML/Content_categories#flujo_de_contenido"
          >Flujo de contenido</a
        >,
        <a href="/es/docs/Web/Guide/HTML/Content_categories#contenido_de_redacción"
          >Contenido de redacción</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>Script dinámico como <code>text/javascript</code>.</td>
    </tr>
    <tr>
      <th scope="row">Etiquetas por omisión</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Padres permitidos</th>
      <td>
        Cualquier elemento que acepte
        <a href="/es/docs/Web/Guide/HTML/Content_categories#contenido_de_metadatos"
          >contenido de metadatos</a
        >, o cualquier elemento que acepte
        <a href="/es/docs/Web/Guide/HTML/Content_categories#contenido_de_redacción"
          >contenido de redacción</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rol ARIA implícito</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Sin rol correspondiente</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td><code>rol</code> no permitido</td>
    </tr>
    <tr>
      <th scope="row">interfaz DOM</th>
      <td>{{DOMxRef("HTMLScriptElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento incluye los [atributos globales](/es/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("async")}}

  - : Para los scripts clásicos, si el atributo `async` está presente, el script clásico se buscará en paralelo al análisis y se evaluará tan pronto como esté disponible.

    Para [scripts del módulo](/es/docs/Web/JavaScript/Guide/Modules), si el atributo `async` está presente, los scripts y todas sus dependencias se ejecutarán en la cola diferida, por lo tanto, se obtendrán en paralelo al análisis y serán evaluados tan pronto como estén disponibles.

    Este atributo permite la eliminación de **JavaScript que bloquea el analizador** donde el navegador tendría que cargar y evaluar scripts antes de continuar con el análisis. `defer` tiene un efecto similar en este caso.

    Este es un atributo booleano: la presencia de un atributo booleano en un elemento representa el valor `true` y la ausencia del atributo representa el valor `false`.

    Consulta [Compatibilidad con navegadores](#compatibilidad_con_navegadores) para obtener notas sobre la compatibilidad con navegadores. Consulta también [Scripts asíncronos para `asm.js`](/en-US/docs/Games/Techniques/Async_scripts).

- {{htmlattrdef("crossorigin")}}
  - : Los elementos `script` normales pasan información mínima a {{DOMxRef('Window.error_event', 'window.onerror')}} para scripts que no pasan las comprobaciones estándar {{Glossary("CORS")}}. Para permitir el registro de errores para sitios que usan un dominio separado para medios estáticos, usa este atributo. Consulte [Atributos de configuración CORS](/es/docs/Web/HTML/Attributes/crossorigin) para obtener una explicación más descriptiva de sus argumentos válidos.
- {{htmlattrdef("defer")}}

  - : Este atributo booleano se establece para indicar a un navegador que el script se debe ejecutar después de analizar el documento, pero antes de activar {{DOMxRef("Document/DOMContentLoaded_event", "DOMContentLoaded")}}.

    Los scripts con el atributo `defer` evitarán que se active el evento `DOMContentLoaded` hasta que el script se haya cargado y terminado de evaluar.

    > **Precaución:** Este atributo no se debe usar si el atributo `src` está ausente (es decir, para scripts en línea), en este caso no tendría efecto.
    >
    > El atributo `defer` no tiene efecto en [module scripts](/es/docs/Web/JavaScript/Guide/Modules) — de manera predeterminada difieren.

    Los scripts con el atributo `defer` se ejecutarán en el orden en que aparecen en el documento.

    Este atributo permite la eliminación de **JavaScript que bloquea el analizador** donde el navegador tendría que cargar y evaluar scripts antes de continuar con el análisis. `async` tiene un efecto similar en este caso.

- {{htmlattrdef("fetchpriority")}} {{Experimental_Inline}}

  - : Proporciona una pista de la prioridad relativo de uso al obtener un script externo. Valores permitidos:

    - `high`
      - : Señala una búsqueda de alta prioridad en relación con otros scripts externos.
    - `low`
      - : Señala una recuperación de baja prioridad en relación con otros scripts externos.
    - `auto`
      - : Predeterminado: Indica la determinación automática de la prioridad de obtención en relación con otros scripts externos.

- {{htmlattrdef("integrity")}}
  - : este atributo contiene metadatos en línea que un agente de usuario puede usar para verificar que un recurso obtenido se entregó sin manipulaciones inesperadas. Consulta [Integridad de los subrecursos](/en-US/docs/Web/Security/Subresource_Integrity).
- {{htmlattrdef("nomodule")}}
  - : Este atributo booleano se establece para indicar que el script no se debe ejecutar en navegadores compatibles con [módulos ES](/es/docs/Web/JavaScript/Guide/Modules) — en efecto, esto se puede usar para servir scripts alternativos para navegadores más antiguos que no admiten el código JavaScript modular.
- {{htmlattrdef("nonce")}}
  - : Un nonce criptográfico (número usado una vez) para permitir scripts en un [script-src Content-Security-Policy](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src). El servidor debe generar un valor *nonce* único cada vez que transmite una política. Es fundamental proporcionar un *nonce* que no se pueda adivinar, ya que eludir la política de un recurso es trivial.
- {{htmlattrdef("referrerpolicy")}}

  - : indica qué [referente](/en-US/docs/Web/API/Document/referrer) enviar al obtener el script o los recursos obtenidos por el script:

    - `no-referrer`: No se enviará el encabezado {{HTTPHeader("Referer")}}.
    - `no-referrer-when-downgrade`: el encabezado {{HTTPHeader("Referer")}} no se enviará a {{Glossary("origin")}} sin {{Glossary("TLS")}} ({{Glossary("HTTPS")}}).
    - `origin`: La referencia enviada se limitará al origen de la página de referencia: su [esquema](/es/docs/Learn/Common_questions/What_is_a_URL), {{Glossary("host")}}, y {{Glossary("port")}}.
    - `origin-when-cross-origin`: El remitente —`referrer`— enviado a otros orígenes se limitará al esquema, el host y el puerto. Las navegaciones en el mismo origen seguirán incluyendo la ruta.
    - `same-origin`: Se enviará una referencia para {{Glossary("Same-origin policy", "same origin")}}, pero las solicitudes de origen cruzado no contendrán información del remitente —`referrer`—.
    - `strict-origin`: Solo envía el origen del documento como remitente cuando el nivel de seguridad del protocolo permanezca igual (HTTPS→HTTPS), pero no lo envía a un destino menos seguro (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (predeterminado): Envía una URL completa cuando realice una solicitud del mismo origen, solo envía el origen cuando el nivel de seguridad del protocolo permanezca igual (HTTPS→HTTPS), y no envía ningún encabezado a un destino menos seguro (HTTPS→HTTP).
    - `unsafe-url`: El referente incluirá el origen _y_ la ruta (pero no el [fragmento](/en-US/docs/Web/API/HTMLAnchorElement/hash), [contraseña](/en-US/docs /Web/API/HTMLAnchorElement/password), o [nombre de usuario](/en-US/docs/Web/API/HTMLAnchorElement/username)). **Este valor no es seguro** porque filtra orígenes y rutas de recursos protegidos por TLS a orígenes no seguros.

    > **Nota:** Un valor de cadena vacío (`""`) es tanto el valor predeterminado como un valor alternativo si `referrerpolicy` no es compatible. Si `referrerpolicy` no se especifica explícitamente en el elemento `<script>`, adoptará una política de referencia de nivel superior, es decir, una establecida en todo el documento o dominio. Si una política de nivel superior no está disponible, la cadena vacía se trata como si fuera equivalente a `strict-origin-when-cross-origin`.

- {{htmlattrdef("src")}}
  - : Este atributo especifica el URI de un script externo; esto se puede usar como una alternativa para incrustar un script directamente dentro de un documento.
- {{htmlattrdef("type")}}

  - : Este atributo indica el tipo de script representado. El valor de este atributo estará en una de las siguientes categorías:

    - **Omitido o un tipo MIME de JavaScript:** Esto indica que el script es JavaScript. La especificación HTML insta a los autores para omitir el atributo en lugar de proporcionar un tipo MIME redundante. En navegadores anteriores, esto identificaba el lenguaje del script del código incrustado o importado (a través del atributo `src`). Los tipos MIME de JavaScript están [enumerados en la especificación](/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types#text_javascript).
    - **`module`:** Hace que el código sea tratado como un módulo de JavaScript. Se difiere el procesamiento del contenido del script. Los atributos `charset` y `defer` no tienen efecto.
      Para obtener información sobre el uso de `module`, consulta nuestra guía [Módulos JavaScript](/es/docs/Web/JavaScript/Guide/Modules).
      A diferencia de los scripts clásicos, los scripts de módulos requieren el uso del protocolo CORS para la obtención de origen cruzado.
    - **Cualquier otro valor:** El contenido incrustado se trata como un bloque de datos que no será procesado por el navegador. Los desarrolladores deben usar un tipo MIME válido que no sea un tipo MIME JavaScript para indicar bloques de datos. El atributo `src` será ignorado.

### Atributos obsoletos

- {{htmlattrdef("charset")}} {{Deprecated_inline}}
  - : Si está presente, su valor debe ser una coincidencia ASCII que no distinga entre mayúsculas y minúsculas para "`utf-8`". No es necesario especificar el atributo `charset`, porque los documentos deben usar UTF-8, y el elemento `script` hereda del documento su codificación de caracteres.
- {{htmlattrdef("language")}} {{Deprecated_inline}} {{Non-standard_Inline}}
  - : Al igual que el atributo `type`, este atributo identifica el lenguaje de programación en uso. Sin embargo, a diferencia del atributo `type`, los posibles valores de este atributo nunca se estandarizaron. En su lugar, se debe usar el atributo `type`.

## Notas

Scripts sin los atributos {{HTMLAttrxRef("async", "script")}}, {{HTMLAttrxRef("defer", "script")}} o `type="module"`, así como scripts en línea sin el atributo `type ="module"`, se recuperan y ejecutan inmediatamente, antes de que el navegador continúe analizando la página.

El script se debe servir con el tipo MIME `text/javascript`, pero los navegadores son indulgentes y solo los bloquean si el script se sirve con un tipo de imagen (`image/*`); un tipo de video (`video/*`); un tipo de audio (`audio/*`); o `texto/csv`. Si el script está bloqueado, se envía un {{DOMxRef("Element/error_event", "error")}} al elemento; de lo contrario, se envía un evento {{DOMxRef("Element/load_event", "load")}} enviado.

## Ejemplos

### Uso básico

Estos ejemplos muestran cómo importar un script (externo) usando el elemento `<script>`.

```html
<script src="javascript.js"></script>
```

Y los siguientes ejemplos muestran cómo colocar un script (en línea) dentro del elemento `<script>`.

```html
<script>
  alert("¡Hola Mundo!");
</script>
```

### Respaldo del módulo

Los navegadores que admiten el valor `module` para el atributo {{htmlattrxref("type", "script")}} ignoran cualquier script con un atributo `nomodule`. Eso te permite usar scripts de módulo al mismo tiempo que proporciona scripts de respaldo marcados como `nomodule` para navegadores no compatibles.

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### Incrustar datos en HTML

También puedes usar el elemento `<script>` para incrustar datos en HTML con renderizado de lado del servidor especificando un tipo MIME válido que no sea JavaScript en el atributo `type`.

```html
<!-- Generado por el servidor -->
<script id="data" type="application/json">
  {
    "userId": 1234,
    "userName": "Juan Pérez",
    "memberSince": "2000-01-01T00:00:00.000Z"
  }
</script>

<!-- Static -->
<script>
  const userInfo = JSON.parse(document.getElementById("data").text);
  console.log("Información del usuario: %o", userInfo);
</script>
```

## Especificaciones

{{Specifications}}

## Compatibilidad del navegador

{{Compat}}

### Notas de compatibilidad

En los navegadores antiguos que no admiten el atributo `async`, los scripts insertados en el analizador bloquean el analizador; Los `script-inserted` en scripts se ejecutan de forma asíncrona en IE y WebKit, pero de forma síncrona en Opera y Firefox anterior a 4. En Firefox 4, la propiedad DOM `async` tiene como valor predeterminado `true` para los scripts `script-created`, por lo que el comportamiento predeterminado coincide con el comportamiento de IE y WebKit.

Para solicitar que los scripts externos insertados en el script se ejecuten en el orden de inserción en los navegadores donde `document.createElement("script").async` se evalúa como `true` (tal como Firefox 4), establece `async="false"` en los scripts que deseas mantener en orden.

> **Precaución:** Nunca llames a `document.write()` desde un script asíncrono. En Firefox 3.6, llamar a `document.write()` tiene un efecto impredecible. En Firefox 4, llamar a `document.write()` desde un script asíncrono no tiene ningún efecto (aparte de imprimir una advertencia en la consola de errores).

## Ve también

- {{DOMxRef("document.currentScript")}}
- [Tabla de compatibilidad de eventos de nodos `<script>` y `<link>` de Ryan Grove](https://pie.gd/test/script-link-events/)
- [Artículo de Flavio Copes sobre la carga eficiente de JavaScript y la explicación de las diferencias entre `async` y `defer`](https://flaviocopes.com/javascript-async-defer/)
- [Módulos JavaScript](/es/docs/Web/JavaScript/Guide/Modules) guía
