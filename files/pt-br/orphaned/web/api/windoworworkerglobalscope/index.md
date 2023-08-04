---
title: WindowOrWorkerGlobalScope
slug: orphaned/Web/API/WindowOrWorkerGlobalScope
---

{{ApiRef()}}

O [mixin](https://medium.com/javascript-scene/functional-mixins-composing-software-ffb66d5e731c) WindowOrWorkerGlobalScope descreve vários recursos comuns às interfaces Window e WorkerGlobalScope. Cada uma dessas interfaces pode, obviamente, adicionar mais recursos além dos listados abaixo.

> **Nota:** `WindowOrWorkerGlobalScope` é um mixin e não uma interface; você não pode atualmente criar um objeto do tipo `WindowOrWorkerGlobalScope`.

## Properties

These properties are defined on the {{domxref("WindowOrWorkerGlobalScope")}} mixin, and implemented by {{domxref("Window")}} and {{domxref("WorkerGlobalScope")}}.

- {{domxref("WindowOrWorkerGlobalScope.caches")}} {{readOnlyinline}}
  - : Returns the {{domxref("CacheStorage")}} object associated with the current context. This object enables functionality such as storing assets for offline use, and generating custom responses to requests.
- {{domxref("WindowOrWorkerGlobalScope.indexedDB")}} {{readonlyInline}}
  - : Provides a mechanism for applications to asynchronously access capabilities of indexed databases; returns an {{domxref("IDBFactory")}} object.
- {{domxref("WindowOrWorkerGlobalScope.isSecureContext")}} {{readOnlyinline}}
  - : Returns a boolean indicating whether the current context is secure (`true`) or not (`false`).
- {{domxref("WindowOrWorkerGlobalScope.origin")}} {{readOnlyinline}}
  - : Returns the origin of the global scope, serialized as a string.

## Methods

These properties are defined on the {{domxref("WindowOrWorkerGlobalScope")}} mixin, and implemented by {{domxref("Window")}} and {{domxref("WorkerGlobalScope")}}.

- {{domxref("WindowOrWorkerGlobalScope.atob()")}}
  - : Decodes a string of data which has been encoded using base-64 encoding.
- {{domxref("WindowOrWorkerGlobalScope.btoa()")}}
  - : Creates a base-64 encoded ASCII string from a string of binary data.
- {{domxref("WindowOrWorkerGlobalScope.clearInterval()")}}
  - : Cancels the repeated execution set using {{domxref("WindowOrWorkerGlobalScope.setInterval()")}}.
- {{domxref("WindowOrWorkerGlobalScope.clearTimeout()")}}
  - : Cancels the delayed execution set using {{domxref("WindowOrWorkerGlobalScope.setTimeout()")}}.
- {{domxref("WindowOrWorkerGlobalScope.createImageBitmap()")}}
  - : Accepts a variety of different image sources, and returns a {{domxref("Promise")}} which resolves to an {{domxref("ImageBitmap")}}. Optionally the source is cropped to the rectangle of pixels originating at _(sx, sy)_ with width sw, and height sh.
- {{domxref("WindowOrWorkerGlobalScope.fetch()")}}
  - : Starts the process of fetching a resource from the network.
- {{domxref("WindowOrWorkerGlobalScope.setInterval()")}}
  - : Schedules a function to execute every time a given number of milliseconds elapses.
- {{domxref("WindowOrWorkerGlobalScope.setTimeout()")}}
  - : Schedules a function to execute in a given amount of time.

## Specifications

| Specification                                                                                                                                                            | Status                               | Comment                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | --------------------------------------------- |
| {{SpecName("HTML WHATWG",'webappapis.html#windoworworkerglobalscope-mixin', '<code>WindowOrWorkerGlobalScope</code> mixin')}} | {{Spec2('HTML WHATWG')}}     | This is where the main mixin is defined.      |
| {{SpecName('Fetch','#fetch-method','fetch()')}}                                                                                                         | {{Spec2('Fetch')}}             | Definition of the `fetch()` method.           |
| {{SpecName('Service Workers', '#self-caches', 'caches')}}                                                                                             | {{Spec2('Service Workers')}} | Definition of the `caches` property.          |
| {{SpecName('IndexedDB 2', '#dom-windoworworkerglobalscope-indexeddb', 'indexedDB')}}                                                         | {{Spec2('IndexedDB 2')}}     | Definition of the `indexedDB` property.       |
| {{SpecName('Secure Contexts', 'webappapis.html#dom-origin', 'isSecureContext')}}                                                             | {{Spec2('Secure Contexts')}} | Definition of the `isSecureContext` property. |

## See also

- {{domxref("Window")}}
- {{domxref("WorkerGlobalScope")}}
