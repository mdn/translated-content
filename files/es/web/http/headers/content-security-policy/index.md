---
title: Content-Security-Policy
slug: Web/HTTP/Headers/Content-Security-Policy
---

{{HTTPSidebar}}

La cabecera HTTP **`Content-Security-Policy`** en la respuesta permite a los administradores de un sitio web controlar los recursos que el User-Agent puede cargar a una pagina. Con algunas (Poquísimas) excepciones, las políticas implican principalmente especificar el servidor de origen la protección de puntos finales del script. Esto ayuda a protegerse contra ataques Cross-site scripting ({{Glossary("XSS")}}).

Para mas información, ve también este articulo en [Content Security Policy (CSP)](/es/docs/Web/HTTP/CSP).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabecera</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Sintaxis

```
Content-Security-Policy: <policy-directive>; <policy-directive>
```

## Directivas

### {{Glossary("Fetch directive", "Fetch directives")}}

"Fetch directives" controla la ubicación o ubicaciones desde la cual se pueden cargar ciertos tipos de recursos

#### Lista de Content Security Policy Fetch directives

- {{CSP("child-src")}}

  - : Define los origenes válidos para [web workers](/es/docs/Web/API/Web_Workers_API) y contextos de navegación anidados cargados usando elementos como {{HTMLElement("frame")}} and {{HTMLElement("iframe")}}.

    > **Advertencia:** En lugar de **`child-src`**, los autores quienes deseen regular los contextos de navegación anidados y "workers" deberían usar las directivas {{CSP("frame-src")}} y {{CSP("worker-src")}}, respectivamente.

- {{CSP("connect-src")}}
  - : Restringe las URLs que pueden ser cargados usando scripts.
- {{CSP("default-src")}}
  - : Serves as a fallback for the other {{Glossary("Fetch directive", "fetch directives")}}.
- {{CSP("font-src")}}
  - : Especifica origenes válidos para las fuentes cargadas usando {{cssxref("@font-face")}}.
- {{CSP("frame-src")}}
  - : Especifica origenes válidos para contextos de navageción anidada cargados usando elementos como {{HTMLElement("frame")}} y {{HTMLElement("iframe")}}.
- {{CSP("img-src")}}
  - : Especifica origenes válidos de imágenes y favicons.
- {{CSP("manifest-src")}}
  - : Especifica origenes válidos de archivos de manifiesto de una aplicación.
- {{CSP("media-src")}}
  - : Especifica origenes válidos para carga de archivos usando elementos como {{HTMLElement("audio")}} , {{HTMLElement("video")}} y {{HTMLElement("track")}}.
- {{CSP("object-src")}}

  - : Specifies valid sources for the {{HTMLElement("object")}}, {{HTMLElement("embed")}}, and {{HTMLElement("applet")}} elements.

    Elements controlled by `object-src` are perhaps coincidentally considered legacy HTML elements and aren't recieving new standardized features (such as the security attributes `sandbox` or `allow` for `<iframe>`). Therefore it is **recommended** to restrict this fetch-directive (e.g. explicitly set `object-src 'none'` if possible).

- {{CSP("prefetch-src")}}
  - : Specifies valid sources to be prefetched or prerendered.
- {{CSP("script-src")}}
  - : Specifies valid sources for JavaScript.
- {{CSP("style-src")}}
  - : Specifies valid sources for stylesheets.
- {{CSP("webrtc-src")}} {{experimental_inline}}
  - : Specifies valid sources for [WebRTC](/docs/Web/API/WebRTC_API) connections.
- {{CSP("worker-src")}}
  - : Specifies valid sources for {{domxref("Worker")}}, {{domxref("SharedWorker")}}, or {{domxref("ServiceWorker")}} scripts.

### {{Glossary("Document directive", "Document directives")}}

Document directives govern the properties of a document or [worker](/es/docs/Web/API/Web_Workers_API) environment to which a policy applies.

- {{CSP("base-uri")}}
  - : Restricts the URLs which can be used in a document's {{HTMLElement("base")}} element.
- {{CSP("plugin-types")}}
  - : Restricts the set of plugins that can be embedded into a document by limiting the types of resources which can be loaded.
- {{CSP("sandbox")}}
  - : Enables a sandbox for the requested resource similar to the {{HTMLElement("iframe")}} [`sandbox`](/es/docs/Web/HTML/Element/iframe#sandbox) attribute.
- {{CSP("disown-opener")}} {{deprecated_inline}}
  - : Ensures a resource will disown its opener when navigated to.

### {{Glossary("Navigation directive", "Navigation directives")}}

Navigation directives govern to which location a user can navigate to or submit a form to, for example.

- {{CSP("form-action")}}
  - : Restricts the URLs which can be used as the target of a form submissions from a given context.
- {{CSP("frame-ancestors")}}
  - : Specifies valid parents that may embed a page using {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, {{HTMLElement("embed")}}, or {{HTMLElement("applet")}}.
- {{CSP("navigate-to")}} {{experimental_inline}}
  - : Restricts the URLs to which a document can navigate by any means (a, form, window\.location, window\.open, etc.)

### {{Glossary("Reporting directive", "Reporting directives")}}

Reporting directives control the reporting process of CSP violations. See also the {{HTTPHeader("Content-Security-Policy-Report-Only")}} header.

- {{CSP("report-uri")}} {{deprecated_inline}}

  - : Instructs the user agent to report attempts to violate the Content Security Policy. These violation reports consist of {{Glossary("JSON")}} documents sent via an HTTP `POST` request to the specified URI.

    > **Advertencia:** Though the {{CSP("report-to")}} directive is intended to replace the deprecated **`report-uri`** directive, {{CSP("report-to")}} isn't supported in most browsers yet. So for compatibility with current browsers while also adding forward compatibility when browsers get {{CSP("report-to")}} support, you can specify both **`report-uri`** and {{CSP("report-to")}}:
    >
    > ```
    > Content-Security-Policy: ...; report-uri https://endpoint.example.com; report-to groupname
    > ```
    >
    > In browsers that support {{CSP("report-to")}}, the **`report-uri`** directive will be ignored.

- {{CSP("report-to")}} {{experimental_inline}}
  - : Fires a `SecurityPolicyViolationEvent`.

### Other directives

- {{CSP("block-all-mixed-content")}}
  - : Prevents loading any assets using HTTP when the page is loaded using HTTPS.
- {{CSP("referrer")}} {{deprecated_inline}}
  - : Used to specify information in the referer (sic) header for links away from a page. Use the {{HTTPHeader("Referrer-Policy")}} header instead.
- {{CSP("require-sri-for")}}
  - : Requires the use of {{Glossary("SRI")}} for scripts or styles on the page.

<!---->

- {{CSP("trusted-types")}} {{experimental_inline}}
  - : Used to specify a whitelist of [Trusted Types](https://github.com/WICG/trusted-types) policies (Trusted Types allows applications to lock down DOM XSS injection sinks to only accept non-spoofable, typed values in place of strings).

<!---->

- {{CSP("upgrade-insecure-requests")}}
  - : Instructs user agents to treat all of a site's insecure URLs (those served over HTTP) as though they have been replaced with secure URLs (those served over HTTPS). This directive is intended for web sites with large numbers of insecure legacy URLs that need to be rewritten.

## CSP in workers

[Workers](/es/docs/Web/API/Worker) en general no se rigen por las politicas de seguridad de contenido de el documento (o padre del worker) que los creó. To specify a content security policy for the worker, set a `Content-Security-Policy` response header for the request which requested the worker script itself.

The exception to this is if the worker script's origin is a globally unique identifier (for example, if its URL has a scheme of data or blob). In this case, the worker does inherit the content security policy of the document or worker that created it.

## Multiple content security policies

CSP allows multiple policies being specified for a resource, including via the `Content-Security-Policy` header, the {{HTTPHeader("Content-Security-Policy-Report-Only")}} header and a {{HTMLElement("meta")}} element.

You can use the `Content-Security-Policy` header more than once like in the example below. Pay special attention to the {{CSP("connect-src")}} directive here. Even though the second policy would allow the connection, the first policy contains `connect-src 'none'`. Adding additional policies _can only further restrict_ the capabilities of the protected resource, which means that there will be no connection allowed and, as the strictest policy, `connect-src 'none'` is enforced.

```
Content-Security-Policy: default-src 'self' http://example.com;
                         connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                         script-src http://example.com/
```

## Ejemplos

Example: Disable unsafe inline/eval, only allow loading of resources (images, fonts, scripts, etc.) over https:

```
// header
Content-Security-Policy: default-src https:

// meta tag
<meta http-equiv="Content-Security-Policy" content="default-src https:">
```

Example: Pre-existing site that uses too much inline code to fix but wants to ensure resources are loaded only over https and disable plugins:

```
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

Example: Don't implement the above policy yet; instead just report violations that would have occurred:

```
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-endpoint/
```

See [Mozilla Web Security Guidelines](https://wiki.mozilla.org/Security/Guidelines/Web_Security#Examples_5) for more examples.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mirar tambien

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Learn about: Content Security Policy](/docs/Web/HTTP/CSP)
- [Content Security in WebExtensions](/es/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Display security and privacy policies In Firefox Developer Tools](/es/docs/Tools/GCLI/Display_security_and_privacy_policies)
- [Adopting a strict policy](https://csp.withgoogle.com/docs/strict-csp.html)
