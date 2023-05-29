---
title: URL
slug: Web/API/URL
---

{{ApiRef("URL API")}} {{SeeCompatTable}}

La interfaz **`URL`** representa a un objeto que provee métodos estáticos para crear objetos URL.

When using a user agent where no constructor has been implemented yet, it is possible to access such an object using the {{domxref("Window.URL")}} properties (prefixed with Webkit-based browser as `Window.webkitURL`).

{{AvailableInWorkers}}

## Properties

- {{domxref("URL.href")}}
  - : Is a {{domxref("DOMString")}} containing the whole URL.
- {{domxref("URL.protocol")}}
  - : Is a {{domxref("DOMString")}} containing the protocol scheme of the URL, including the final `':'`.
- {{domxref("URL.host")}}
  - : Is a {{domxref("DOMString")}} containing the host, that is the _hostname_, a `':'`, and the _port_ of the URL.
- {{domxref("URL.hostname")}}
  - : Is a {{domxref("DOMString")}} containing the domain of the URL.
- {{domxref("URL.port")}}
  - : Is a {{domxref("DOMString")}} containing the port number of the URL.
- {{domxref("URL.pathname")}}
  - : Is a {{domxref("DOMString")}} containing an initial `'/'` followed by the path of the URL.
- {{domxref("URL.search")}}
  - : Is a {{domxref("DOMString")}} containing a `'?'` followed by the parameters of the URL.
- {{domxref("URL.hash")}}
  - : Is a {{domxref("DOMString")}} containing a `'#'` followed by the fragment identifier of the URL.
- {{domxref("URL.username")}}
  - : Is a {{domxref("DOMString")}} containing the username specified before the domain name.
- {{domxref("URL.password")}}
  - : Is a {{domxref("DOMString")}} containing the password specified before the domain name.
- {{domxref("URL.origin")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMString")}} containing the origin of the URL, that is its scheme, its domain and its port.

<!---->

- {{domxref("URL.searchParams")}}
  - : Returns a {{domxref("URLSearchParams")}} object allowing to access the GET query arguments contained in the URL.

## Constructor

- {{domxref("URL.URL", "URL()")}}
  - : Creates and return a `URL` object composed from the given parameters.

## Methods

_The `URL` interface implements methods defined in {{domxref("URLUtils")}}._

- {{domxref("URLUtils.toString()")}}
  - : Returns a {{domxref("DOMString")}} containing the whole URL. It is a synonym for {{domxref("URLUtils.href")}}, though it can't be used to modify the value.

## Static methods

- {{domxref("URL.createObjectURL()")}}
  - : Returns a {{domxref("DOMString")}} containing a unique blob URL, that is a URL with `blob:` as its scheme, followed by an opaque string uniquely identifying the object in the browser.
- {{domxref("URL.revokeObjectURL()")}}
  - : Revokes an object URL previously created using {{domxref("URL.createObjectURL()")}}.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- Property allowing to get such an object: {{domxref("Window.URL")}}.
- [Components.utils.importGlobalProperties](/es/docs/Components.utils.importGlobalProperties)
