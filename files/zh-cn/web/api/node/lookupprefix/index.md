---
title: Node：lookupPrefix() 方法
slug: Web/API/Node/lookupPrefix
l10n:
  sourceCommit: f9c2ae293074c49f1ed2b86913ef24b0042e0047
---

{{APIRef("DOM")}}

{{domxref("Node")}} 接口的 **`lookupPrefix()`** 方法返回一个字符串，其中包含给定命名空间 URI 的前缀（如果存在），如果不存在则返回 `null`。如果可能存在多个前缀，则返回第一个前缀。

## 语法

```js-nolint
lookupPrefix(namespace)
```

### 参数

- `namespace`
  - : 一个字符串，包含需要查找的命名空间。空字符串等价于 `null`，且都会导致函数返回 `null`。
    > [!NOTE]
    > 此参数不是可选的，但是可以设置为 `null`。

### 返回值

包含相应前缀的字符串，如果没有找到，则返回 `null`。如果 `namespace` 为 null 或空字符串，则 `lookupPrefix()` 返回 `null`。

如果节点是 {{domxref("DocumentType")}} 或 {{domxref("DocumentFragment")}}，`lookupPrefix()` 总是返回 `null`。

## 示例

> [!NOTE]
> 此示例在 HTML 文档中运行，其中 `xmlns:` 属性会被忽略（`xmlns:xlink` 除外）。Firefox 将所有元素的命名空间 URI 设置为 `null`，而 Chrome 和 Safari 会正确设置 HTML、SVG 和 MathML 元素的默认命名空间 URI。若需进行更具意义的测试，可打开独立的 [SVG](/zh-CN/docs/Web/SVG) 文档并在其上下文中执行脚本。

```html
<div class="hidden">
  <div>测试 HTML 元素</div>
  <svg>
    <text>测试 SVG 元素</text>
  </svg>
  <svg xmlns:xlink="http://www.w3.org/1999/xlink" id="with-xlink">
    <text>含有 xlink 的测试 SVG 函数</text>
  </svg>
  <math>测试 MathML 元素</math>
</div>

<table>
  <thead>
    <tr>
      <th><code>namespaceURI</code></th>
      <th><code>&lt;div&gt;</code></th>
      <th><code>&lt;svg&gt;</code></th>
      <th><code>&lt;svg xmlns:xlink&gt;</code></th>
      <th><code>&lt;math&gt;</code></th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
```

```css hidden
.hidden {
  display: none;
}
```

```js
const htmlElt = document.querySelector("div");
const svgElt = document.querySelector("svg");
const svgEltXLink = document.querySelector("#with-xlink");
const mathElt = document.querySelector("math");

const tbody = document.querySelector("tbody");

for (const uri of [
  "http://www.w3.org/2000/xmlns/",
  "http://www.w3.org/XML/1998/namespace",
  "http://www.w3.org/1999/xhtml",
  "http://www.w3.org/2000/svg",
  "http://www.w3.org/1999/xlink",
  "http://www.w3.org/1998/Math/MathML",
  "",
  null,
]) {
  const row = document.createElement("tr");
  tbody.appendChild(row);
  row.appendChild(document.createElement("td")).textContent =
    JSON.stringify(uri);
  for (const el of [htmlElt, svgElt, svgEltXLink, mathElt]) {
    console.log(el, uri, el.lookupPrefix(uri));
    row.appendChild(document.createElement("td")).textContent = String(
      el.lookupPrefix(uri),
    );
  }
}
```

{{ EmbedLiveSample('示例','100%',190) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
