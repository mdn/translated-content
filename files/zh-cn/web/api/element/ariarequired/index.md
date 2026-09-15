---
title: Element：ariaRequired 属性
slug: Web/API/Element/ariaRequired
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`ariaRequired`** 属性反映 `aria-required` 属性的值，指示在提交表单前该元素上需要用户输入。

> [!NOTE]
> 应尽可能使用 `type="text"` 的 HTML {{htmlelement("input")}} 元素或 {{htmlelement("textarea")}}，因为它们内置语义，无需 ARIA 属性。

## 值

具有以下值之一的字符串：

- `"true"`
  - ：用户需要在提交表单前为该元素提供输入。
- `"false"`
  - ：提交表单不需要用户输入。

## 示例

此示例中，ID 为 `txtBoxInput` 的元素上的 `aria-required` 属性设为 `"true"`，表示必须填写该输入。使用 `ariaRequired` 将其更新为 `"false"`。

```html
<div id="txtboxMultilineLabel">输入文章的标签</div>
<div
  role="textbox"
  id="txtBoxInput"
  contenteditable="true"
  aria-multiline="true"
  aria-labelledby="txtboxMultilineLabel"
  aria-required="true"></div>
```

```js
let el = document.getElementById("txtBoxInput");
console.log(el.ariaRequired); // "true"
el.ariaRequired = "false";
console.log(el.ariaRequired); // "false"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [ARIA：textbox 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
