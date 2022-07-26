---
title: AbortController.abort()
slug: Web/API/AbortController/abort
translation_of: Web/API/AbortController/abort
original_slug: Web/API/FetchController/abort
---
{{APIRef("DOM")}}{{SeeCompatTable}}

The **`abort()`** method of the {{domxref("AbortController")}} interface aborts a DOM request (e.g. a Fetch request) before it has completed. This is able to abort [fetch requests](/en-US/docs/Web/API/fetch), consumption of any response {{domxref("Body")}}, and streams.

## Syntax

```js
controller.abort();
```

### Parameters

None.

### Return value

Void.

## Examples

In the following snippet, we aim to download a video using the [Fetch API](/en-US/docs/Web/API/Fetch_API).

We first create a controller using the {{domxref("AbortController.AbortController","AbortController()")}} constructor, then grab a reference to its associated {{domxref("AbortSignal")}} object using the {{domxref("AbortController.signal")}} property.

When the [fetch request](/en-US/docs/Web/API/fetch) is initiated, we pass in the `AbortSignal` as an option inside the request's options object (see `{signal}`, below). This associates the signal and controller with the fetch request and allows us to abort it by calling {{domxref("AbortController.abort()")}}, as seen below in the second event listener.

```js
var controller = new AbortController();
var signal = controller.signal;

var downloadBtn = document.querySelector('.download');
var abortBtn = document.querySelector('.abort');

downloadBtn.addEventListener('click', fetchVideo);

abortBtn.addEventListener('click', function() {
  controller.abort();
  console.log('Download aborted');
});

function fetchVideo() {
  ...
  fetch(url, {signal}).then(function(response) {
    ...
  }).catch(function(e) {
    reports.textContent = 'Download error: ' + e.message;
  })
}
```

> **备注：** When `abort()` is called, the `fetch()` promise rejects with an `AbortError`.

You can find a full working example on GitHub — see [abort-api](https://github.com/mdn/dom-examples/tree/master/abort-api) ([see it running live also](https://mdn.github.io/dom-examples/abort-api/)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat("api.AbortController.abort")}}

## See also

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
