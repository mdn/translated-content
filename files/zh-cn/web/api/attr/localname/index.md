---
title: Attr：localName 属性
short-title: localName
slug: Web/API/Attr/localName
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("DOM")}}

{{domxref("Attr")}} 接口的 **`localName`** 只读属性返回属性*限定名*的*本地部分*，也就是去掉前面命名空间后的属性名。例如，如果限定名是 `xml:lang`，且该元素支持该命名空间，则返回的本地名是 `lang`。

无论创建属性时使用何种大小写，本地名始终为小写。

> [!NOTE]
> HTML 仅在 SVG 和 MathML 元素上支持一组固定的命名空间。它们是 `xml`（用于 `xml:lang` 属性）、`xlink`（用于 `xlink:href`、`xlink:show`、`xlink:target` 和 `xlink:title` 属性）以及 `xpath`。
>
> 这意味着 HTML 元素属性的本地名始终等于其限定名：冒号被当作普通字符。在 XML 中（如 SVG 或 MathML），冒号表示前缀的结束，其前面是命名空间；本地名可能与限定名不同。

## 值

一个表示该属性限定名的本地部分的字符串。

## 示例

当你点击相应按钮时，以下示例会显示前两个元素各自第一个属性的本地名。{{SVGElement("svg")}} 元素属于 XML 且支持命名空间，因此本地名（`lang`）与限定名 `xml:lang` 不同。{{HTMLElement("label")}} 元素属于 HTML，不支持命名空间，因此本地名和限定名都是 `xml:lang`。

### HTML

```html
<svg xml:lang="en-US" class="struct" height="1" width="1">点我</svg>
<label xml:lang="en-US" class="struct"></label>

<p>
  <button>显示 &lt;svg&gt; 的值</button>
  <button>显示 &lt;label&gt; 的值</button>
</p>

<p>
  属性 <code>xml:lang</code> 的本地部分：
  <output id="result">无。</output>
</p>
```

### JavaScript

```js
const elements = document.querySelectorAll(".struct");
const buttons = document.querySelectorAll("button");
const outputEl = document.querySelector("#result");

let i = 0;
for (const button of buttons) {
  const element = elements[i];
  button.addEventListener("click", () => {
    const attribute = element.attributes[0];
    outputEl.value = attribute.localName;
  });
  i++;
}
```

{{ EmbedLiveSample('示例','100%',100) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Attr.name")}} 属性，返回属性的限定名；以及 {{domxref("Attr.prefix")}}，命名空间前缀。
- {{domxref("Element.localName()")}} 属性，返回 {{domxref("Element")}} 的本地名。
