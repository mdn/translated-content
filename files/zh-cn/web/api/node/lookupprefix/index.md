---
title: Node：lookupPrefix() 方法
slug: Web/API/Node/lookupPrefix
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

{{domxref("Node")}} 接口的 **`lookupPrefix()`** 方法返回一个字符串，其中包含给定命名空间 URI 的前缀（如果存在），
，如果不存在则返回 `null`。如果可能存在多个前缀，则返回第一个前缀。

## 语法

```js-nolint
lookupPrefix(namespace)
```

### 参数

- `namespace`
  - : 一个字符串，包含需要查找的命名空间。
    > [!NOTE]
    > 此参数不是可选的，但是可以设置为 `null`。

### 返回值

包含相应前缀的字符串，如果没有找到，则返回 `null`。如果 `namespace` 为空或空字符串，则 `lookupPrefix()` 返回 `null`。

如果节点是 {{domxref("DocumentType")}} 或 {{domxref("DocumentFragment")}}，`lookupPrefix()` 总是返回 `null`。

## 示例

```html
<code>http://www.w3.org/2000/svg</code> 在 &lt;output&gt;
元素上的前缀：<output>未经测试</output>。<br />
<code>http://www.w3.org/XML/1998/namespace</code> 在 &lt;output&gt;
元素上的前缀：<output>未经测试</output>。<br />
<code>http://www.w3.org/TR/html4/</code> 在 &lt;output&gt;
元素上的前缀：<output>未经测试</output>。<br />
<code>https://www.w3.org/1999/xlink</code> 在 &lt;output&gt;
元素上的前缀：<output>未经测试</output>。<br />
<code>http://www.w3.org/2000/svg</code> 在 &lt;svg&gt;
元素上的前缀：<output>未经测试</output>。<br />
<code>https://www.w3.org/1999/xlink</code> 在 &lt;svg&gt;
元素上的前缀：<output>未经测试</output>。<br />
<code>http://www.w3.org/XML/1998/namespace</code> 在 &lt;svg&gt;
元素上的前缀：<output>未经测试</output>。<br />
<svg xmlns:t="http://www.w3.org/2000/svg" height="1"></svg>
<button>点击这里查看结果</button>
```

```js
const button = document.querySelector("button");
button.addEventListener("click", () => {
  const aHtmlElt = document.querySelector("output");
  const aSvgElt = document.querySelector("svg");

  const result = document.getElementsByTagName("output");
  result[0].value = aHtmlElt.lookupPrefix("http://www.w3.org/2000/svg"); // true
  result[1].value = aHtmlElt.lookupPrefix(
    "http://www.w3.org/XML/1998/namespace",
  ); // false
  result[2].value = aHtmlElt.lookupPrefix("http://www.w3.org/TR/html4/"); // true
  result[3].value = aHtmlElt.lookupPrefix("https://www.w3.org/1999/xlink"); // false
  result[4].value = aSvgElt.lookupPrefix("http://www.w3.org/2000/svg"); // true
  result[5].value = aSvgElt.lookupPrefix("https://www.w3.org/1999/xlink"); // true
  result[6].value = aSvgElt.lookupPrefix(
    "http://www.w3.org/XML/1998/namespace",
  ); // false
});
```

{{ EmbedLiveSample('示例','100%',190) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [http://www.w3.org/TR/DOM-Level-3-Cor...amespacePrefix](https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix)
