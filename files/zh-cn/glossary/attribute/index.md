---
title: 属性（Attribute）
slug: Glossary/Attribute
l10n:
  sourceCommit: 26635ef6b1a40e538501bd81fdcf98725e14e6ea
---

**属性**（Attribute）可扩展 {{Glossary("HTML")}} 或 {{Glossary("XML")}} {{Glossary("element", "元素")}}，改变其行为或提供元数据。

属性的形式总是 `name="value"`（属性的标识符后跟相关的值）。你可能会看到没有等号或值的属性。这是在 HTML 中提供空字符串。但是，在 XML 中这是无效的：XML 要求所有属性都有显式值。

许多 HTML 属性是{{Glossary("Boolean/HTML", "布尔属性")}}。这些属性的值仅由属性的存在或不存在来控制。参见{{Glossary("Boolean/HTML", "布尔属性")}}以获取更多信息。

## 属性的反射

属性可以*反射*到特定接口的特定属性中。这意味着标签属性的值可以通过访问接口属性来读取，并可通过将接口属性设置为不同的值来修改标签属性的值性。

例如，下面的 `placeholder` 反射为 {{domxref("HTMLInputElement.placeholder")}}。

考虑这段 HTML 代码：

```html
<input placeholder="原始占位符" />
```

我们可以使用以下代码检查 {{domxref("HTMLInputElement.placeholder")}} 与属性之间的反射：

```js
const input = document.querySelector("input");
const attr = input.getAttributeNode("placeholder");
console.log(attr.value);
console.log(input.placeholder); // 与 `attr.value` 打印的值相同

// 更改占位符的值也会更改反射属性的值。
input.placeholder = "修改过的占位符";
console.log(attr.value); // 打印 `修改过的占位符`
```

## 参见

- [HTML 属性参考](/zh-CN/docs/Web/HTML/Reference/Attributes)
- 关于 HTML 的[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)的信息
- [W3C XML 推荐标准](https://www.w3.org/TR/xml#sec-starttags)中的 XML StartTag 属性推荐标准
- 相关术语：
  - {{Glossary("Element", "元素")}}
  - {{Glossary("Tag", "标签")}}
  - {{Glossary("HTML")}}
  - {{Glossary("XML")}}
  - {{Glossary("Boolean/HTML", "布尔属性")}}
  - {{Glossary("Enumerated", "枚举属性")}}
