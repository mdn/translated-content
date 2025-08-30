---
title: Element：ariaKeyShortcuts 属性
slug: Web/API/Element/ariaKeyShortcuts
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`ariaKeyShortcuts`** 属性反射 `aria-keyshortcuts` 属性的值。该属性表示开发者为激活或聚焦某个元素而实现的键盘快捷键。

## 值

字符串。

## 示例

在本示例中，ID 为 `skip-link` 的元素上的 `aria-keyshortcuts` 属性被设置为“Alt+Shift+A”。通过使用 `ariaKeyShortcuts`，我们将该值更新为“Alt+Shift+M”。

```html
<a id="skip-link" href="#content" aria-keyshortcuts="Alt+Shift+A">
  跳转到内容
</a>
```

```js
let el = document.getElementById("saveChanges");
console.log(el.ariaKeyShortcuts); // “Alt+Shift+A”
el.ariaKeyShortcuts = "Alt+Shift+M";
console.log(el.ariaKeyShortcuts); // “Alt+Shift+M”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
