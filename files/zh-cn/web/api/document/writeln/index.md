---
title: Document：writeln() 方法
slug: Web/API/Document/writeln
l10n:
  sourceCommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{ ApiRef("DOM") }}

> [!WARNING]
> 强烈不建议使用 `document.writeln()` 方法。
>
> 正如 [HTML 规范本身所警告的](<https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document.write()>)：
>
> > 这种方法具有非常特殊的行为。在某些情况下，当解析器运行时，此方法可能会影响 [HTML 解析器](https://html.spec.whatwg.org/multipage/parsing.html#html-parser)的状态，导致生成的 DOM 与文档源代码不符（例如，如果写入的字符串为“`<plaintext>`”或“`<!--`”）。其他情况下，该调用可能会先清除当前页面，就像调用了 [`document.open()`](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-document-open) 一样。更多情况下，该方法会被直接忽略或抛出异常。用户代理[被明确允许避免执行通过此方法插入的 `script` 元素](https://html.spec.whatwg.org/multipage/parsing.html#document-written-scripts-intervention)。更糟糕的是，这种方法的确切行为在某些情况下取决于网络延迟，这可能导致难以调试的故障。鉴于上述原因，我们强烈反对使用这种方法。因此，避免使用 `document.writeln()`——如果允许的话，更新仍在使用它的任何现有代码。

向文档写入一串文本后跟一个换行符。

## 语法

```js-nolint
writeln(line)
```

### 参数

- `line` 是包含一行文本的字符串。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
document.writeln("<p>输入密码：</p>");
```

## 备注

**document.writeln** 与 {{domxref("document.write")}} 相同，但是加了一个换行符。

> **备注：** **document.writeln**（类似于 **document.write**）在 XHTML 文档中无法正常工作（你会在控制台收到“Operation is not supported”（`NS_ERROR_DOM_NOT_SUPPORTED_ERR`）的错误）。当以 .xhtml 文件扩展名打开本地文件或任何使用 application/xhtml+xml MIME 类型的文档时，就会出现这种情况。更多详细信息，请参阅 [W3C XHTML 常见问题解答](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
