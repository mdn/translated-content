---
title: Document.write()
slug: Web/API/Document/write
---

{{ ApiRef("DOM") }}

{{domxref("document.open()")}}에 의해 열린 문서 스팀에 텍스트 스트링을 적는다.

> **참고:** 주: as `document.write` writes to the document **stream**, calling `document.write` on a closed (loaded) document automatically calls `document.open`, [which will clear the document](/ko/docs/Web/API/document.open#Notes).

## 구문

```js
document.write(markup);
```

### 매개변수

- `markup`
  - : document 문성에 씌여질 텍스트를 포함하고 있는 스트링.

### 예

```html
<html>

<head>
  <title>write example</title>

  <script>
    function newContent() {
      alert("load new content");
      document.open();
      document.write("<h1>Out with the old - in with the new!</h1>");
      document.close();
    }
  </script>
</head>

<body onload="newContent();">
  <p>Some original document content.</p>
</body>

</html>
```

## 주

Writing to a document that has already loaded without calling {{domxref("document.open()")}} will automatically call `document.open`. Once you have finished writing, it is recommended to call {{domxref("document.close()")}} to tell the browser to finish loading the page. The text you write is parsed into the document's structure model. In the example above, the `h1` element becomes a node in the document.

If the `document.write()` call is embedded within an inlined HTML `<script>` tag, then it will not call `document.open()`. For example:

```html
<script>
  document.write("<h1>Main title</h1>")
</script>
```

> **참고:** `document.write` and `document.writeln` [do not work in XHTML documents](/ko/docs/Archive/Web/Writing_JavaScript_for_HTML) (you'll get a "Operation is not supported" \[`NS_ERROR_DOM_NOT_SUPPORTED_ERR`] error in the error console). This happens when opening a local file with the .xhtml file extension or for any document served with an `application/xhtml+xml` {{Glossary("MIME type")}}. More information is available in the [W3C XHTML FAQ](http://www.w3.org/MarkUp/2004/xhtml-faq#docwrite).

> **참고:** `document.write` in [deferred](/ko/docs/Web/HTML/Element/script#attr-defer) or [asynchronous](/ko/docs/Web/HTML/Element/script#attr-async) scripts will be ignored, and you'll get a message like "A call to `document.write()` from an asynchronously-loaded external script was ignored" in the error console.

> **참고:** In Edge only, calling `document.write` more than once in an iframe causes the error SCRIPT70: Permission denied.

> **참고:** Starting in 55, Chrome will not execute `<script>` elements injected via `document.write()` in case of an HTTP cache miss for users on a 2G connection.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{ domxref("element.innerHTML") }}
- {{ domxref("document.createElement()") }}
