---
title: Element：ariaLevel 属性
slug: Web/API/Element/ariaLevel
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`ariaLevel`** 属性反映 `aria-level` 属性的值，该属性定义元素在结构中的层级。

> [!NOTE]
> 应尽可能使用 HTML {{htmlelement("Heading_Elements", "h1")}} 或其他正确的标题级别，因为这些元素内置语义，无需 ARIA 属性。

## 值

包含整数的字符串。

## 示例

此示例中，ID 为 `main-heading` 的元素的 `aria-level` 属性设为 `"1"`。使用 `ariaLevel` 将其更新为 `"2"`。

```html
<div role="heading" id="main-heading" aria-level="1">这是页面主标题</div>
```

```js
let el = document.getElementById("main-heading");
console.log(el.ariaLevel); // "1"
el.ariaLevel = "2";
console.log(el.ariaLevel); // "2"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [ARIA：heading 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role)
