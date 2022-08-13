---
title: Location
slug: Web/API/Location
tags:
  - API
  - HTML DOM
  - Interface
  - Location
  - NeedsTranslation
  - Reference
  - TopicStub
translation_of: Web/API/Location
---
{{APIRef("HTML DOM")}}

The **`Location`** interface represents the location (URL) of the object it is linked to. Changes done on it are reflected on the object it relates to. Both the {{domxref("Document")}} and {{domxref("Window")}} interface have such a linked `Location`, accessible via {{domxref("Document.location")}} and {{domxref("Window.location")}} respectively.

## Properties

_The `Location`_ _interface doesn't inherit any property, but implements those from {{domxref("URLUtils")}}._

- {{domxref("Location.href")}}
  - : Is a {{domxref("DOMString")}} containing the entire URL. If changed, the associated document navigates to the new page. It can be set from a different origin than the associated document.
- {{domxref("Location.protocol")}}
  - : Is a {{domxref("DOMString")}} containing the protocol scheme of the URL, including the final `':'`.
- {{domxref("Location.host")}}
  - : Is a {{domxref("DOMString")}} containing the host, that is the _hostname_, a `':'`, and the _port_ of the URL.
- {{domxref("Location.hostname")}}
  - : Is a {{domxref("DOMString")}} containing the domain of the URL.
- {{domxref("Location.port")}}
  - : Is a {{domxref("DOMString")}} containing the port number of the URL.
- {{domxref("Location.pathname")}}
  - : Is a {{domxref("DOMString")}} containing an initial `'/'` followed by the path of the URL.
- {{domxref("Location.search")}}
  - : Is a {{domxref("DOMString")}} containing a `'?'` followed by the parameters or "querystring" of the URL. Modern browsers provide [URLSearchParams](/pl/docs/Web/API/URLSearchParams/get#Example) and [URL.searchParams](/pl/docs/Web/API/URL/searchParams#Example) to make it easy to parse out the parameters from the querystring.
- {{domxref("Location.hash")}}
  - : Is a {{domxref("DOMString")}} containing a `'#'` followed by the fragment identifier of the URL.
- {{domxref("Location.username")}}
  - : Is a {{domxref("DOMString")}} containing the username specified before the domain name.
- {{domxref("Location.password")}}
  - : Is a {{domxref("DOMString")}} containing the password specified before the domain name.
- {{domxref("Location.origin")}} {{readOnlyInline}}
  - : Returns a {{domxref("DOMString")}} containing the canonical form of the origin of the specific location.

## Methods

_The `Location`_ _interface doesn't inherit any method_, but implements those from {{domxref("URLUtils")}}\_\_

- {{domxref("Location.assign()")}}
  - : Loads the resource at the URL provided in parameter.
- {{domxref("Location.reload()")}}
  - : Reloads the resource from the current URL. Its optional unique parameter is a {{domxref("Boolean")}}, which, when it is `true`, causes the page to always be reloaded from the server. If it is `false` or not specified, the browser may reload the page from its cache.
- {{domxref("Location.replace()")}}
  - : Replaces the current resource with the one at the provided URL. The difference from the `assign()` method is that after using `replace()` the current page will not be saved in session {{domxref("History")}}, meaning the user won't be able to use the _back_ button to navigate to it.
- {{domxref("Location.toString()")}}
  - : Returns a {{domxref("DOMString")}} containing the whole URL. It is a synonym for {{domxref("URLUtils.href")}}, though it can't be used to modify the value.

## Examples

```js
// Create anchor element and use href property for the purpose of this example
// A more correct alternative is to browse to the URL and use document.location or window.location
var url = document.createElement('a');
url.href = 'https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container';
console.log(url.href);      // https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container
console.log(url.protocol);  // https:
console.log(url.host);      // developer.mozilla.org:8080
console.log(url.hostname);  // developer.mozilla.org
console.log(url.port);      // 8080
console.log(url.pathname);  // /en-US/search
console.log(url.search);    // ?q=URL
console.log(url.hash);      // #search-results-close-container
console.log(url.origin);    // https://developer.mozilla.org
```

## Specifications

| Specification                                                                                            | Status                           | Comment                                          |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------ |
| {{SpecName('HTML WHATWG', "browsers.html#the-location-interface", "Location")}} | {{Spec2('HTML WHATWG')}} | No change from {{SpecName("HTML5 W3C")}}. |
| {{SpecName('HTML5 W3C', "browsers.html#the-location-interface", "Location")}} | {{Spec2('HTML5 W3C')}}     | Initial definition.                              |

## Browser compatibility

{{Compat("api.Location")}}

## See also

- Two methods creating such an object: {{domxref("Window.location")}} and {{domxref("Document.location")}}.
- URL related interfaces: {{domxref("URL")}}, {{domxref("URLSearchParams")}} and {{domxref("HTMLHyperlinkElementUtils")}}
