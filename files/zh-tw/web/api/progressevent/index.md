---
title: ProgressEvent
slug: Web/API/ProgressEvent
---

{{APIRef("DOM Events")}}

The **`ProgressEvent`** interface represents events measuring progress of an underlying process, like an HTTP request (for an `XMLHttpRequest`, or the loading of the underlying resource of an {{HTMLElement("img")}}, {{HTMLElement("audio")}}, {{HTMLElement("video")}}, {{HTMLElement("style")}} or {{HTMLElement("link")}}).

## 建構式

- {{domxref("ProgressEvent.ProgressEvent", "ProgressEvent()")}}
  - : Creates a `ProgressEvent` event with the given parameters.

## 屬性

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("ProgressEvent.lengthComputable")}} {{readonlyInline}}
  - : Is a {{domxref("Boolean")}} flag indicating if the total work to be done, and the amount of work already done, by the underlying process is calculable. In other words, it tells if the progress is measurable or not.
- {{domxref("ProgressEvent.loaded")}} {{readonlyInline}}
  - : Is an `unsigned long long` representing the amount of work already performed by the underlying process. The ratio of work done can be calculated with the property and `ProgressEvent.total`. When downloading a resource using HTTP, this only represent the part of the content itself, not headers and other overhead.
- {{domxref("ProgressEvent.total")}} {{readonlyInline}}
  - : Is an `unsigned long long` representing the total amount of work that the underlying process is in the progress of performing. When downloading a resource using HTTP, this only represent the content itself, not headers and other overhead.

## 方法

_Also inherits methods_ from its parent {{domxref("Event")}}.

- {{domxref("ProgressEvent.initProgressEvent()")}} {{deprecated_inline}}{{non-Standard_inline}}
  - : Initializes a `ProgressEvent` created using the deprecated {{domxref("Document.createEvent()", "Document.createEvent(\"ProgressEvent\")")}} method.

## 範例

The following example adds a `ProgressEvent` to a new {{domxref("XMLHTTPRequest")}} and uses it to display the status of the request.

```js
  var progressBar = document.getElementById("p"),
      client = new XMLHttpRequest()
  client.open("GET", "magical-unicorns")
  client.onprogress = function(pe) {
    if(pe.lengthComputable) {
      progressBar.max = pe.total
      progressBar.value = pe.loaded
    }
  }
  client.onloadend = function(pe) {
    progressBar.value = pe.loaded
  }
  client.send()
```

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- The {{domxref("Event")}} base interface.
