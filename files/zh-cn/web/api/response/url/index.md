---
title: Response.url
slug: Web/API/Response/url
---

{{APIRef("Fetch")}}

The **`url`** read-only property of the {{domxref("Response")}} interface contains the URL of the response. The value of the `url` property will be the final URL obtained after any redirects.

## Syntax

```plain
var myURL = response.url;
```

### Value

A {{domxref("USVString")}}.

## Example

In our [Fetch Response example](https://github.com/mdn/fetch-examples/tree/gh-pages/fetch-response) (see [Fetch Response live](http://mdn.github.io/fetch-examples/fetch-response/)) we create a new {{domxref("Request")}} object using the {{domxref("Request.Request","Request()")}} constructor, passing it a JPG path. We then fetch this request using {{domxref("GlobalFetch.fetch","fetch()")}}, extract a blob from the response using {{domxref("Body.blob")}}, create an object URL out of it using {{domxref("URL.createObjectURL")}}, and display this in an {{htmlelement("img")}}.

Note that at the top of the `fetch()` block we log the response `URL` to the console.

```js
var myImage = document.querySelector('img');

var myRequest = new Request('flowers.jpg');

fetch(myRequest).then(function(response) {
  console.log(response.url); // returns https://developer.mozilla.org/en-US/docs/Web/API/Response/flowers.jpg
  response.blob().then(function(myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
