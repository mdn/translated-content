---
title: Document：write() 方法
slug: Web/API/Document/write
l10n:
  sourceCommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{ApiRef("DOM")}}

> **警告：** 强烈不建议使用 `document.write()` 方法。
>
> 正如 [HTML 规范本身所警告的](<https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document.write()>)：
>
> > 这种方法具有非常特殊的行为。在某些情况下，当解析器运行时，此方法可能会影响 [HTML 解析器](https://html.spec.whatwg.org/multipage/parsing.html#html-parser)的状态，导致生成的 DOM 与文档源代码不符（例如，如果写入的字符串为“`<plaintext>`”或者“`<!--`”）。其他情况下，该调用可能会先清除当前页面，就像调用了 [`document.open()`](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-document-open) 一样。更多情况下，该方法会被直接忽略或抛出异常。用户代理[被明确允许避免执行通过此方法插入的 `script` 元素](https://html.spec.whatwg.org/multipage/parsing.html#document-written-scripts-intervention)。更糟糕的是，这种方法的确切行为在某些情况下取决于网络延迟，这可能导致难以调试的故障。鉴于上述原因，我们强烈反对使用这种方法。因此，避免使用 `document.write()`——如果允许的话，更新仍在使用它的任何现有代码。

**`document.write()`** 方法将文本字符串写入由 {{domxref("document.open()")}} 打开的文档流。

> **备注：** 因为 `document.write()`是写入文档**流**的，所以在已关闭（已加载）的文档上调用 `document.write()` 会自动调用 `document.open()`，[这将清空文档](/zh-CN/docs/Web/API/Document/open#备注)。

## 语法

```js-nolint
write(markup)
```

### 参数

- `markup`
  - : 包含要写入文档的文本的字符串。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```html
<html lang="zh-CN">
  <head>
    <title>编写示例</title>

    <script>
      function newContent() {
        document.open();
        document.write("<h1>旧的不去，新的不来！</h1>");
        document.close();
      }
    </script>
  </head>

  <body onload="newContent();">
    <p>一些原始文档内容。</p>
  </body>
</html>
```

{{EmbedLiveSample("示例")}}

## 备注

你编写的文本会被解析为文档结构模型。在上面示例中，`h1` 元素成为文档中的一个节点。

Writing to a document that has already loaded without calling {{domxref("document.open()")}} will automatically call `document.open()`. After writing, call {{domxref("document.close()")}} to tell the browser to finish loading the page.

如果 `document.write()` 调用嵌入了行级 HTML `<script>` 标签，则不会调用 `document.open()`。例如：

```html
<script>
  document.write("<h1>主标题</h1>");
</script>
```

> **备注：** **document.write()**（类似于 **document.writeIn**）在 XHTML 文档中无法正常工作（你会在控制台收到“Operation is not supported”（`NS_ERROR_DOM_NOT_SUPPORTED_ERR`）的错误）。当以 .xhtml 文件扩展名打开本地文件或任何使用 application/xhtml+xml {{Glossary("MIME type", "MIME 类型")}}的文档时，就会出现这种情况。更多详细信息，请参阅 [W3C XHTML 常见问题解答](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite)。

> **备注：** 在 [deferred](/zh-CN/docs/Web/HTML/Element/script#defer) 或 [asynchronous](/zh-CN/docs/Web/HTML/Element/script#async) 脚本中使用 `document.write()` 将被忽略，并且你会在错误控制台中收到类似于“A call to `document.write()` from an asynchronously-loaded external script was ignored”的消息。

> **备注：** 仅在 Edge 中，在 `document.write()` 中多次调用 {{HTMLElement("iframe")}} 会导致错误“SCRIPT70: Permission denied”。

> **备注：** 从版本 55 开始，当满足特定条件时，Chrome 将不会执行通过 `document.write()` 将不会执行通过 `<script>` 元素。有关详细信息，请参阅[干预 document.write()](https://developer.chrome.com/blog/removing-document-write/)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("element.innerHTML")}}
- {{domxref("document.createElement()")}}
