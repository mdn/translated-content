---
title: Node：isDefaultNamespace() 方法
short-title: isDefaultNamespace()
slug: Web/API/Node/isDefaultNamespace
l10n:
  sourceCommit: f9c2ae293074c49f1ed2b86913ef24b0042e0047
---

{{APIRef("DOM")}}

{{domxref("Node")}} 接口的 **`isDefaultNamespace()`** 方法接受一个命名空间 URI 作为参数，并返回一个布尔值。如果该命名空间是该节点的默认命名空间，则返回 `true`，否则返回 `false`。要获取默认命名空间，可以向 {{domxref("Node.lookupNamespaceURI()")}} 传入 `null`。

## 语法

```js-nolint
isDefaultNamespace(namespaceURI)
```

### 参数

- `namespaceURI`
  - : 一个表示要检查的命名空间的字符串。空字符串等同于 `null`。
    > [!NOTE]
    > `namespaceURI` 不是可选参数，但它可以为 `null`。

### 返回值

一个布尔值 `true` 或 `false`，用于指示传入的参数是否为默认命名空间。其效果等同于执行 `node.lookupNamespaceURI(null) === namespaceURI`。

## 示例

> [!NOTE]
> 此示例运行在一个 HTML 文档中，其中 `xmlns:` 属性会被忽略（`xmlns:xlink` 除外）。Firefox 会将所有元素的命名空间 URI 设置为 `null`，而 Chrome 和 Safari 则会正确地为 HTML、SVG 和 MathML 元素设置默认命名空间 URI。如果你希望进行更有意义的测试，可以打开一个独立的 [SVG](/zh-CN/docs/Web/SVG) 文档，并在其上下文中执行脚本。

```html
<div class="hidden">
  <div>测试 HTML 元素</div>
  <svg>
    <text>测试 SVG 元素</text>
  </svg>
  <svg xmlns:xlink="http://www.w3.org/1999/xlink" id="with-xlink">
    <text>带 xlink 的测试 SVG 元素</text>
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
    console.log(el, uri, el.isDefaultNamespace(uri));
    row.appendChild(document.createElement("td")).textContent = String(
      el.isDefaultNamespace(uri),
    );
  }
}
```

{{ EmbedLiveSample('示例','100%',190) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Node.lookupNamespaceURI")}}
- {{domxref("Node.lookupPrefix")}}
