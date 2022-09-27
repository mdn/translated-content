---
title: XMLHttpRequestEventTarget
slug: Web/API/XMLHttpRequestEventTarget
---

{{APIRef("XMLHttpRequest")}}

`XMLHttpRequestEventTarget` 介面描述了一個 {{ domxref("XMLHttpRequest") }} 物件實體當中，所有可註冊事件處理器的屬性。

{{InheritanceDiagram}}

## 屬性

- {{ domxref("XMLHttpRequestEventTarget.onabort") }}
  - : Contains the function to call when a request is aborted and the {{event('abort')}} event is received by this object.
- {{ domxref("XMLHttpRequestEventTarget.onerror") }}
  - : Contains the function to call when a request encounters an error and the {{event('error')}} event is received by this object.
- {{ domxref("XMLHttpRequestEventTarget.onload") }}
  - : Contains the function to call when an HTTP request returns after successfully fetching content and the {{event('load')}} event is received by this object.
- {{ domxref("XMLHttpRequestEventTarget.onloadstart") }}
  - : Contains the function that gets called when the HTTP request first begins loading data and the {{event('loadstart')}} event is received by this object.
- {{ domxref("XMLHttpRequestEventTarget.onprogress") }}
  - : Contains the function that is called periodically with information about the progress of the request and the {{event('progress')}} event is received by this object.
- {{ domxref("XMLHttpRequestEventTarget.ontimeout") }}
  - : Contains the function that is called if the event times out and the {{event("timeout")}} event is received by this object; this only happens if a timeout has been previously established by setting the value of the `XMLHttpRequest` object's `timeout` attribute.
- {{ domxref("XMLHttpRequestEventTarget.onloadend") }}
  - : Contains the function that is called when the load is completed, even if the request failed, and the {{event('loadend')}} event is received by this object.

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{ domxref("XMLHttpRequest") }}
- [Using XMLHttpRequest](/zh-TW/DOM/XMLHttpRequest/Using_XMLHttpRequest)
