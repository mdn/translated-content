---
title: URL
slug: Web/API/URL
tags:
  - API
  - Experimental
  - NeedsTranslation
  - TopicStub
  - URL API
translation_of: Web/API/URL
---
{{ApiRef("URL API")}} {{SeeCompatTable}}

The **`URL`** interface represent an object providing static methods used for creating object URLs.

When using a user agent where no constructor has been implemented yet, it is possible to access such an object using the {{domxref("Window.URL")}} properties (prefixed with Webkit-based browser as `Window.webkitURL`).

## Properties

_Implements properties defined in {{domxref("URLUtils")}}._

- {{domxref("URLUtils.href")}}
  - : Is a {{domxref("DOMString")}} containing the whole URL.
- {{domxref("URLUtils.protocol")}}
  - : Is a {{domxref("DOMString")}} containing the protocol scheme of the URL, including the final `':'`.
- {{domxref("URLUtils.host")}}
  - : Is a {{domxref("DOMString")}} containing the host, that is the _hostname_, a `':'`, and the _port_ of the URL.
- {{domxref("URLUtils.hostname")}}
  - : Is a {{domxref("DOMString")}} containing the domain of the URL.
- {{domxref("URLUtils.port")}}
  - : Is a {{domxref("DOMString")}} containing the port number of the URL.
- {{domxref("URLUtils.pathname")}}
  - : Is a {{domxref("DOMString")}} containing an initial `'/'` followed by the path of the URL.
- {{domxref("URLUtils.search")}}
  - : Is a {{domxref("DOMString")}} containing a `'?'` followed by the parameters of the URL.
- {{domxref("URLUtils.hash")}}
  - : Is a {{domxref("DOMString")}} containing a `'#'` followed by the fragment identifier of the URL.
- {{domxref("URLUtils.username")}}
  - : Is a {{domxref("DOMString")}} containing the username specified before the domain name.
- {{domxref("URLUtils.password")}}
  - : Is a {{domxref("DOMString")}} containing the password specified before the domain name.
- {{domxref("URLUtils.origin")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMString")}} containing the origin of the URL, that is its scheme, its domain and its port.

- {{domxref("URLUtils.searchParams")}}
  - : Returns a {{domxref("URLSearchParams")}} object allowing to access the GET query arguments contained in the URL.

## Constructor

- {{domxref("URL.URL", "URL()")}}
  - : Creates and return a `URL` object composed from the given parameters.

## Methods

_The `URL` interface implements methods defined in {{domxref("URLUtils")}}._

- {{domxref("URLUtils.toString()")}}
  - : Returns a {{domxref("DOMString")}} containing the whole URL. It is a synonym for {{domxref("URLUtils.href")}}, though it can't be used to modify the value.

## Static methods

- {{ domxref("URL.createObjectURL()") }}
  - : Returns a {{domxref("DOMString")}} containing a unique blob URL, that is a URL with `blob:` as its scheme, followed by an opaque string uniquely identifying the object in the browser.
- {{ domxref("URL.revokeObjectURL()") }}
  - : Revokes an object URL previously created using {{ domxref("URL.createObjectURL()") }}.

## Specifications

| Specification                                                            | Status                       | Comment                                                                           |
| ------------------------------------------------------------------------ | ---------------------------- | --------------------------------------------------------------------------------- |
| {{SpecName('File API', '#creating-revoking', 'URL')}} | {{Spec2('File API')}} | Added the static methods `URL.createObjectURL()` and ` URL.revokeObjectURL``() `. |
| {{SpecName('URL', '#api', 'Node')}}                         | {{Spec2('URL')}}         | Initial definition (implements `URLUtils`).                                       |

## Browser compatibility

{{Compat}}

\[1] From Gecko 2 (Firefox 4) to Gecko 18 included, Gecko supported this interface with the non-standard `nsIDOMMozURLProperty` internal type. As the only to access such an object was through {{domxref("window.URL")}}, in practice, this didn't make any difference.

## Chrome Code - Scope Availability

To use from chrome code, JSM and Bootstrap scope, you have to import it like this:

```js
Cu.importGlobalProperties(['URL']);
```

`URL` is available in Worker scopes.

## See also

- Property allowing to get such an object: {{domxref("Window.URL")}}.
- [Components.utils.importGlobalProperties](/de/docs/Components.utils.importGlobalProperties)
