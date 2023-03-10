---
title: URL
slug: Web/API/URL
---

{{ApiRef("URL API")}} {{SeeCompatTable}}

**`URL`** 介面提供了建立 `URL` 物件的靜態方法。

使用尚未實作此物件的瀏覽器時，可以改用 {{domxref("Window.URL")}} 屬性來呼叫（基於 Webkit 或 Blink 引擎的瀏覽器可使用 `Window.webkitURL`）。

{{AvailableInWorkers}}

## 屬性

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
- {{domxref("URL.searchParams")}}
  - : Returns a {{domxref("URLSearchParams")}} object allowing to access the GET query arguments contained in the URL.

## 建構式

- {{domxref("URL.URL", "URL()")}}
  - : Creates and return a `URL` object composed from the given parameters.

## 方法

_The `URL` interface implements methods defined in {{domxref("URLUtils")}}._

- {{domxref("URLUtils.toString()")}}
  - : Returns a {{domxref("DOMString")}} containing the whole URL. It is a synonym for {{domxref("URLUtils.href")}}, though it can't be used to modify the value.

## 靜態方法

- {{domxref("URL.createObjectURL()")}}
  - : Returns a {{domxref("DOMString")}} containing a unique blob URL, that is a URL with `blob:` as its scheme, followed by an opaque string uniquely identifying the object in the browser.
- {{domxref("URL.revokeObjectURL()")}}
  - : Revokes an object URL previously created using {{domxref("URL.createObjectURL()")}}.

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- Property allowing to get such an object: {{domxref("Window.URL")}}.
- [Components.utils.importGlobalProperties](/zh-TW/docs/Components.utils.importGlobalProperties)
