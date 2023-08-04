---
title: "<iframe>: el elemento Inline Frame"
slug: Web/HTML/Element/iframe
---

{{HTMLSidebar}}

El **elemento HTML `<iframe>`** (de inline frame) representa un {{Glossary("contexto de navegación")}} anidado, el cual permite incrustrar otra página HTML en la página actual.

{{EmbedInteractiveExample("pages/tabbed/iframe.html", "tabbed-standard")}}

Cada elemento `<iframe>` tiene su propio [historial de sesión](/es/docs/Web/API/History) y su propio objeto [Documento](/es/docs/Web/API/Document). El contexto de navegación que incluye el contenido implícito se llama _contexto de navegación principal_. El contexto de navegación de nivel superior (que no tiene padre) es típicamente la ventana del navegador, representado por el objeto {{domxref("Window")}}.

> **Advertencia:** Debido a que cada contexto de navegación es un entorno de documento completo, cada `<iframe>` en una página requiere más memoria y otros recursos informáticos. Aunque teóricamente puede utilizar tantos `<iframe>` como desee, compruebe si hay problemas de rendimiento.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/docs/Web/Guide/HTML/categorias_de_contenido"
          >Categorías de contenidos</a
        >
      </th>
      <td>
        <a
          href="/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_dinámico"
          >Contenido dinámico</a
        >,
        <a
          href="/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_textual_o_estático"
          >contenido textual o estático</a
        >, contenido incrustado, contenido interactivo,
        <a
          href="/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_tangible"
          >contenido tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>
        Contenido alternativo que normalmente no se renderiza para los
        navegadores que no son compatibles con el elemento
        <code>&#x3C;iframe></code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiqueta</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Elementos padres permitidos</th>
      <td>Cualquier elemento que acepte contenido incrustado.</td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td>
        <a href="/es/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Roles/document_role"><code>document</code></a>,
        <a href="/es/docs/Web/Accessibility/ARIA/Roles/img_role"><code>img</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>{{domxref("HTMLIFrameElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento admite [atributos globales](/es/docs/Web/HTML/Atributos_Globales).

- En el atributo `target` de los elementos {{HTMLElement("a")}}, {{HTMLElement("from")}} y {{HTMLElement("base")}}.
- En el atributo `formtarget` de los elementos {{HTMLElement("input")}} y {{HTMLElement("button")}}
- En el parámetro `windowName` en el método {{domxref("Window.open()","window.open()")}}.

<!---->

- `allow`
  - : Especifíca una [política de características](/es/docs/Web/HTTP/Feature_Policy) para el `<iframe>`. Vea el articulo [Privacy, permissions, and information security](/es/docs/Web/Privacy) para detalles en temas de seguridad y como `<iframe>` funciona con las Politicas de Herramientas para mantener los sistemas seguros.
- `allowfullscreen`

  - : Definido como `true` si el `<iframe>` puede activar el modo a pantalla completa llamando al método {{domxref("Element.requestFullscreen", "requestFullscreen()")}}.

    > **Nota:** Se considera un atributo heredado y se redefine como `allow="fullscreen"`.

- `allowpaymentrequest`

  - : Definido como `true` si se debe permitir que un `<iframe>` de origen cruzado pueda invocar el [API de solicitud de pago](/es/docs/Web/API/Payment_Request_API). <

    > **Nota:** Se considera un atributo heredado y se redefine como `allow="payment"`.

- `csp` {{experimental_inline}}
  - : Una [Politica de Seguridad del Contenido](/es/docs/Web/HTTP/CSP) aplicada para el recurso incrustado. Vea {{domxref("HTMLIFrameElement.csp")}} para detalles.
- `height`
  - : Indica la altura del frame en HTML5 en píxeles CSS, o en HTML4.01 en píxeles o como un porcentaje.
- `importance` {{experimental_inline}}

  - : La prioridad de descarga en el recurso para el atributo `src` del `<iframe>`. Valores permitidos:

    - `auto`: (default) Sin preferencia. El buscador utiliza sus propias heurísticas para decidir la prioridad del recurso.
    - `high`: El recurso debe ser descargado antes que otros recursos de baja-prioridad de los recursos de la página.
    - `low`: El recurso debe ser descargado después de otros recursos de alta-prioridad de los recursos de la página.

- `name`

  - : Nombre objetivo para el contexto de navegación incrustado. Se puede utilizar:

    - En el atributo target de los elementos {{HTMLElement("a")}}, {{HTMLElement("from")}} y {{HTMLElement("base")}}.
    - En el atributo formtarget de los elementos {{HTMLElement("input")}} y {{HTMLElement("button")}}
    - En el parámetro windowName en el método {{domxref("Window.open()","window.open()")}}.

- `referrerpolicy`

  - : Indicates which [referrer](/es/docs/Web/API/Document/referrer) to send when fetching the frame's resource:

    - `no-referrer`: The {{HTTPHeader("Referer")}} header will not be sent.
    - `no-referrer-when-downgrade` (default): The {{HTTPHeader("Referer")}} header will not be sent to {{Glossary("origin")}}s without {{Glossary("TLS")}} ({{Glossary("HTTPS")}}).
    - `origin`: The sent referrer will be limited to the origin of the referring page: its [scheme](/es/docs/Archive/Mozilla/URIScheme), {{Glossary("host")}}, and {{Glossary("port")}}.
    - `origin-when-cross-origin`: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.
    - `same-origin`: A referrer will be sent for {{Glossary("Same-origin policy", "same origin")}}, but cross-origin requests will contain no referrer information.
    - `strict-origin`: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don't send it to a less secure destination (HTTPS→HTTP).
    - `strict-origin-when-cross-origin`: Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP).
    - `unsafe-url`: The referrer will include the origin _and_ the path (but not the [fragment](/es/docs/Web/API/HTMLHyperlinkElementUtils/hash), [password](/es/docs/Web/API/HTMLHyperlinkElementUtils/password), or [username](/es/docs/Web/API/HTMLHyperlinkElementUtils/username)). **This value is unsafe**, because it leaks origins and paths from TLS-protected resources to insecure origins.

- `sandbox`

  - : Applies extra restrictions to the content in the frame. The value of the attribute can either be empty to apply all restrictions, or space-separated tokens to lift particular restrictions:

    - `allow-forms`: Allows the resource to submit forms. If this keyword is not used, form submission is blocked.
    - `allow-modals`: Lets the resource [open modal windows](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-modals-flag).
    - `allow-orientation-lock`: Lets the resource [lock the screen orientation](/es/docs/Web/API/Screen/lockOrientation).
    - `allow-pointer-lock`: Lets the resource use the [Pointer Lock API](/es/docs/WebAPI/Pointer_Lock).
    - `allow-popups`: Allows popups (such as `window.open()`, `target="_blank"`, or `showModalDialog()`). If this keyword is not used, the popup will silently fail to open.
    - `allow-popups-to-escape-sandbox`: Lets the sandboxed document open new windows without those windows inheriting the sandboxing. For example, this can safely sandbox an advertisement without forcing the same restrictions upon the page the ad links to.
    - `allow-presentation`: Lets the resource start a [presentation session](/es/docs/Web/API/PresentationRequest).
    - `allow-same-origin`: If this token is not used, the resource is treated as being from a special origin that always fails the {{Glossary("same-origin policy")}}.
    - `allow-scripts`: Lets the resource run scripts (but not create popup windows).
    - `allow-storage-access-by-user-activation` {{experimental_inline}}: Lets the resource request access to the parent's storage capabilities with the [Storage Access API](/es/docs/Web/API/Storage_Access_API).
    - `allow-top-navigation`: Lets the resource navigate the top-level browsing context (the one named `_top`).
    - `allow-top-navigation-by-user-activation`: Lets the resource navigate the top-level browsing context, but only if initiated by a user gesture.

    > **Nota:**
    >
    > - When the embedded document has the same origin as the embedding page, it is **strongly discouraged** to use both `allow-scripts` and `allow-same-origin`, as that lets the embedded document remove the `sandbox` attribute — making it no more secure than not using the `sandbox` attribute at all.
    > - Sandboxing is useless if the attacker can display content outside a sandboxed `iframe` — such as if the viewer opens the frame in a new tab. Such content should be also served from a _separate origin_ to limit potential damage.
    > - The `sandbox` attribute is unsupported in Internet Explorer 9 and earlier.

- `seamless`
  - : This Boolean attribute indicates that the browser should render the inline frame in a way that makes it appear to be part of the containing document, for example by applying CSS styles that apply to the `<iframe>` to the contained document before styles specified in that document, and by opening links in the contained documents in the parent browsing context (unless another setting prevents this).
- `src`
  - : The URL of the page to embed.
- `srcdoc`
  - : The content of the page that the embedded context is to contain.
- `width`
  - : Indicates the width of the frame in HTML5 in CSS pixels, or in HTML4.01 in pixels or as a percentage.

### Atributos obsoletos

Estos atributos están obsoletos y es posible que ya no sean compatibles con todos los agentes de usuario. No debe utilizarlos en contenido nuevo y tratar de eliminarlos del contenido existente.

- `align` {{deprecated_inline}}
  - : La alineación de este elemento con respecto al contexto que lo rodea.
- `frameborder` {{ deprecated_inline}}
  - : El valor 1 (por defecto) indica al navegador establecer una frontera entre este marco y todo otro marco. El valor 0 indica que el navegador no establece una frontera entre este marco y otros marcos.
- `longdesc` {{ deprecated_inline}}
  - : Una URI de una descripción larga del marco. Debido al mal uso generalizado, esto no es útil para navegadores no visuales.
- `marginheight` {{ deprecated_inline }}
  - : La cantidad de espacio en píxeles entre el contenido del marco y sus márgenes superior e inferior.
- `marginwidth` {{ deprecated_inline }}
  - : La cantidad de espacio en píxeles entre el contenido del marco y sus márgenes izquierdo y derecho.
- `scrolling` {{ deprecated_inline }}

  - : Indica cuándo el navegador debe proporcionar una barra de desplazamiento para el marco:

    - `auto`: Sólo cuando el contenido del marco es mayor que sus dimensiones.
    - `yes`: Muestra siempre una barra de desplazamiento.
    - `no`: No muestr la barra de desplazamiento nunca.

### Atributos no estándar

- `mozbrowser` {{non-standard_inline}}

  - : &#x20;

    > **Nota:** See [Error 1318532 en Firefox](https://bugzil.la/1318532) for exposing this to WebExtensions in Firefox.

    Makes the `<iframe>` act like a top-level browser window. See [Browser API](/es/docs/Mozilla/Gecko/Chrome/API/Browser_API) for details.
    **Available only to [WebExtensions](/es/docs/Mozilla/Add-ons/WebExtensions).**

- `mozallowfullscreen` {{ non-standard_inline() }}
  - : In Gecko 9.0 or later, this attribute can be set to `true` if the frame is allowed to be placed into full screen mode by calling its {{ domxref("element.mozRequestFullScreen()") }} method. If this isn't set, the element can't be placed into full screen mode.
- `webkitallowfullscreen` {{ non-standard_inline() }}
  - : In Chrome 17 or later (and maybe earlier), this attribute can be set to `true` if the frame is allowed to be placed into full screen mode by calling its {{ domxref("element.webkitRequestFullScreen()") }} method. If this isn't set, the element can't be placed into full screen mode.
- `mozapp` {{ non-standard_inline() }}
  - : For frames hosting an [open web app](/en/Apps), this specifies the URL of the [app manifest](/en/Apps/Manifest). This ensures that the app is loaded with the right permissions. See [Using the Browser API](/en/DOM/Using_the_Browser_API) for details. Available in Gecko 13.0 and later.
- `remote` {{ non-standard_inline() }}
  - : Load the frame's page in a separate content process.

## Secuencia de comandos

Inline frames, like {{HTMLElement("frame")}} elements, are included in the {{domxref("window.frames")}} pseudo-array.

With the DOM {{domxref("HTMLIFrameElement")}} object, scripts can access the {{domxref("window")}} object of the framed resource via the {{domxref("HTMLIFrameElement.contentWindow", "contentWindow")}} property. The {{domxref("HTMLIFrameElement.contentDocument", "contentDocument")}} property refers to the `document` inside the `<iframe>`, same as `contentWindow.document`.

From the inside of a frame, a script can get a reference to its parent window with {{domxref("window.parent")}}.

Script access to a frame's content is subject to the {{Glossary("same-origin policy")}}. Scripts cannot access most properties in other `window` objects if the script was loaded from a different origin, including scripts inside a frame accessing the frame's parent. Cross-origin communication can be achieved using {{domxref("Window.postMessage()")}}.

## Ejemplos

### Un \<iframe> simple

Un `<iframe>` en acción. Después de crear el marco, cuando el usuario hace clic en un botón, su título se muestra en una alerta.

#### HTML

```html
<iframe
  src="https://example.org"
  title="iframe Example 1"
  width="400"
  height="300">
  <p>Your browser does not support iframes.</p>
</iframe>
```

#### Resultado

{{ EmbedLiveSample('Example1', 640,400)}}

### Abrir un enlace en un \<iframe> en otra pestaña

En este ejemplo, se muestra un mapa de Google en un marco.

#### HTML

```html
<iframe
  id="Example2"
  title="iframe Example 2"
  width="400"
  height="300"
  style="border:none"
  src="https://maps.google.com/maps?f=q&source=s_q&q=buenos+aires&sll=37.0625,-95.677068&sspn=38.638819,80.859375&t=h&hnear=Buenos+Aires,+Argentina&z=11&ll=-34.603723,-58.381593&output=embed">
</iframe>
```

#### Resultado

{{ EmbedLiveSample('Example2', 640, 400)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
