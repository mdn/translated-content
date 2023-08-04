---
title: document.write
slug: Web/API/Document/write
---

{{ApiRef("DOM")}}

**`Document.write()`** 方法将一个文本字符串写入一个由 {{domxref("document.open()")}} 打开的文档流（document stream）。

> **备注：** 因为 `document.write` 需要向文档**流**中写入内容，所以，若在一个已关闭（例如，已完成加载）的文档上调用 `document.write`，就会自动调用 `document.open`，[这将清空该文档的内容](/zh-CN/docs/Web/API/document.open#Notes)。

## 语法

```js
document.write(markup);
```

### 参数

- _markup_
  - _: 一个包含要写入文档的文本的字符串。_

### 示例

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title><code>document.write()</code> example</title>

    <script>
      function newContent() {
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

{{EmbedLiveSample("示例")}}

## 备注

向一个已经加载，并且没有调用过 {{domxref("document.open()")}} 的文档写入数据时，会自动调用 `document.open`。一旦完成了数据写入，建议调用 {{domxref("document.close()")}}，以告诉浏览器当前页面已经加载完毕。写入的数据会被解析到文档结构模型（DOM）里。在上面的例子里，元素 `h1` 会成为文档中的一个节点。

如果 `document.write()` 调用发生在 HTML 里的 `<script>` 标签中，那么它将不会自动调用 `document.open()`。详见如下例子：

```html
<script>
  document.write("<h1>Main title</h1>");
</script>
```

> **备注：** `document.write` 和 {{domxref("document.writeln")}} [在 XHTML 文档中不可用](/zh-CN/docs/Archive/Web/Writing_JavaScript_for_HTML)（控制台上会显示 "Operation is not supported"\[`NS_ERROR_DOM_NOT_SUPPORTED_ERR`] 的报错信息）。当打开本地的 .xhtml 格式的文件或任何其他 {{Glossary("MIME type", "MIME 类型")}}为 `application/xhtml+xml` 的文档时，均会报错。更多信息可查看 [W3C XHTML FAQ](http://www.w3.org/MarkUp/2004/xhtml-faq#docwrite)。

> **备注：** 在有[deferred](/zh-CN/docs/Web/HTML/Element/script#attr-defer) 或 [asynchronous](/zh-CN/docs/Web/HTML/Element/script#attr-async) 属性的 script 中，`document.write` 会被忽略，控制台会显示 "A call to `document.write()` from an asynchronously-loaded external script was ignored" 的报错信息。

> **备注：** 在 Edge 中，在 {{HTMLElement("iframe")}} 内部调用 `document.write` 多于一次时会引发错误 SCRIPT70: Permission denied。

> **备注：** 从 Chrome 55 开始，Chrome（可能）不会运行通过 `document.write()` 注入的`<script>`，以防止使用 2G 连接的用户找不到 HTTP 缓存。前往[此链接](https://developers.google.cn/web/updates/2016/08/removing-document-write)查看这种情况发生需要满足的条件。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ domxref("element.innerHTML") }}
- {{ domxref("document.createElement()") }}
