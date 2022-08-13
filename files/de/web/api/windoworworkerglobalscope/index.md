---
title: WindowBase64
slug: Web/API/WindowOrWorkerGlobalScope
tags:
  - API
  - HTML-DOM
  - Helper
  - NeedsTranslation
  - TopicStub
  - WindowBase64
translation_of: Web/API/WindowOrWorkerGlobalScope
translation_of_original: Web/API/WindowBase64
original_slug: Web/API/WindowBase64
---
{{APIRef("HTML DOM")}}

The **`WindowBase64`** helper contains utility methods to convert data to and from base64, a binary-to-text encoding scheme. For example it is used in [data URIs](/de/docs/data_URIs).

There is no object of this type, though the context object, either the {{domxref("Window")}} for regular browsing scope, or the {{domxref("WorkerGlobalScope")}} for workers, implements it.

## Properties

_This helper neither defines nor inherits any properties._

## Methods

_This helper does not inherit any methods._

- {{domxref("WindowBase64.atob()")}}
  - : Decodes a string of data which has been encoded using base-64 encoding.
- {{domxref("WindowBase64.btoa()")}}
  - : Creates a base-64 encoded ASCII string from a string of binary data.

## Specifications

| Specification                                                                    | Status                           | Comment                                                                                                                  |
| -------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('HTML WHATWG', '#windowbase64', 'WindowBase64')}} | {{Spec2('HTML WHATWG')}} | No change since the latest snapshot, {{SpecName("HTML5.1")}}.                                                   |
| {{SpecName('HTML5.1', '#windowbase64', 'WindowBase64')}}     | {{Spec2('HTML5.1')}}     | Snapshot of {{SpecName("HTML WHATWG")}}. No change.                                                             |
| {{SpecName("HTML5 W3C", "#windowbase64", "WindowBase64")}}     | {{Spec2('HTML5 W3C')}}     | Snapshot of {{SpecName("HTML WHATWG")}}. Creation of `WindowBase64` (properties where on the target before it). |

## Browser compatibility

{{Compat}}

\[1] `atob()` is also available to XPCOM components implemented in JavaScript, even though {{domxref("Window")}} is not the global object in components.

## See also

- [Base64 encoding and decoding](/Web/API/WindowBase64/Base64_encoding_and_decoding)
- {{domxref("Window")}}, {{domxref("WorkerGlobalScope")}}, {{domxref("DedicatedWorkerGlobalScope")}}, {{domxref("SharedWorkerGlobalScope")}}, and {{domxref("ServiceWorkerGlobalScope")}}
