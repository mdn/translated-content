---
title: XMLHttpRequest 中的 HTML
slug: Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest
---

{{APIRef("XMLHttpRequest")}}

W3C {{domxref("XMLHttpRequest")}} 规范为 {{domxref("XMLHttpRequest")}} 添加 [HTML](/zh-CN/docs/Web/HTML) 解析功能，此前它仅支持 {{Glossary("XML")}} 解析。该功能允许 Web 应用程序使用 `XMLHttpRequest` 获得已解析的 {{Glossary("DOM")}} 形式的 HTML 资源。

要了解如何使用 `XMLHttpRequest`，请参阅[使用 XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)。

## 局限性

为了阻止同步使用 `XMLHttpRequest`，HTML 支持在同步模式下是不可用的。另外，只有当 {{domxref("XMLHttpRequest.responseType", "responseType")}} 属性被设置为 `"document"` 时，才会有 HTML 支持。这一限制避免了当遗留代码在默认模式下使用 `XMLHttpRequest` 来检索 {{domxref("XMLHttpRequest.responseText", "responseText")}}，对 `text/html` 资源进行无用的解析而浪费时间。同时，这个限制也避免了遗留代码的问题，这些代码假定 {{domxref("XMLHttpRequest.responseXML", "responseXML")}} 对于 HTTP 错误页面（通常有一个 `text/html` 响应体）是 `null`。

## 用法

使用 {{domxref("XMLHttpRequest")}} 检索作为 DOM 的 HTML 资源，就像使用 `XMLHttpRequest` 检索作为 DOM 的 XML 资源一样，只是你不能使用同步模式，你必须在调用 {{domxref("XMLHttpRequest.open", "open()")}} 之后，{{domxref("XMLHttpRequest.send", "send()")}} 之前，将字符串 `"document"` 分配给 {{domxref("XMLHttpRequest", "responseType")}} 对象的属性，来明确请求一个文档。

```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
  console.log(xhr.responseXML.title);
};
xhr.open("GET", "file.html");
xhr.responseType = "document";
xhr.send();
```

## 特性检测

### 方法 1

该方法依赖于功能的“强制异步”性质。当你试图设置 `XMLHttpRequest` 对象的 `responseType` 时，它以“同步”方式打开。这在实现该功能的浏览器中会出现错误，而在其他浏览器中则可以正常工作。

```js
function HTMLinXHR() {
  if (!window.XMLHttpRequest) {
    return false;
  }
  const req = new window.XMLHttpRequest();
  req.open("GET", window.location.href, false);
  try {
    req.responseType = "document";
  } catch (e) {
    return true;
  }
  return false;
}
```

[在 JSFiddle 中查看](https://jsfiddle.net/HTcKP/1/)

这种方法是同步的，不依赖外部资源，尽管它可能不像下面描述的方法 2 那样可靠，因为它不检查实际功能，而是检查该功能的指示。

### 方法 2

在 {{domxref("XMLHttpRequest")}} 中准确检测一个浏览器是否支持 HTML 解析有两个挑战。首先，检测结果是以异步方式获得的，因为只有在异步模式下才有 HTML 支持。其次，你必须通过 HTTP 实际获取一个测试文档，因为用 `data:` URL 进行测试，最终会同时测试 `data:` URL 支持。

因此，为了检测 HTML 支持，服务器上需要一个测试 HTML 文件。这个测试文件很小，其 XML 格式不是很完整：

```js
<title>&amp;&<</title>
```

如果文件名为 `detect.html`，以下功能可用于检测 HTML 解析支持：

```js
function detectHtmlInXhr(callback) {
  if (!window.XMLHttpRequest) {
    setTimeout(function () {
      callback(false);
    }, 0);

    return;
  }
  let done = false;
  const xhr = new window.XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && !done) {
      done = true;
      callback(
        !!(
          xhr.responseXML &&
          xhr.responseXML.title &&
          xhr.responseXML.title === "&&<"
        ),
      );
    }
  };
  xhr.onabort = xhr.onerror = () => {
    if (!done) {
      done = true;
      callback(false);
    }
  };
  try {
    xhr.open("GET", "detect.html");
    xhr.responseType = "document";
    xhr.send();
  } catch (e) {
    setTimeout(function () {
      if (!done) {
        done = true;
        callback(false);
      }
    }, 0);
  }
}
```

参数 `callback` 是一个函数，如果 HTML 解析是支持的，则将以 `true` 作为唯一参数被异步调用，如果不支持 HTML 解析，则为 `false`。

[在 JSFiddle 中查看](https://jsfiddle.net/xfvXR/1/)

## 字符编码

如果在 HTTP {{HTTPHeader("Content-Type")}} 标头中声明了字符编码，则使用该字符编码。否则，如果存在字节顺序标记，则使用由字节顺序标记指示的编码。否则，如果存在 {{HTMLElement("meta")}} 元素声明文件的前 1024 个字节中的编码，则使用该编码。否则，文件被解码为 UTF-8。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("XMLHttpRequest")}}
- [使用 XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
