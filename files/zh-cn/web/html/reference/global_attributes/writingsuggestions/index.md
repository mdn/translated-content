---
title: HTML writingsuggestions 全局属性
slug: Web/HTML/Reference/Global_attributes/writingsuggestions
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`writingsuggestions`** [全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)是一个代表是否需要在此元素范围内启用浏览器提供的写作建议的{{glossary("enumerated", "枚举")}}属性。

有些浏览器会在用户输入可编辑字段时向其提供写作建议。建议通常以灰色文本的形式出现，位于文本光标之后，完成用户的句子。虽然这对用户很有帮助，但在某些情况下，例如在提供特定网站的写作建议时，开发人员可能希望关闭写作建议。

`writingsuggestions` 属性可以在像 {{htmlelement('input')}} 和 {{htmlelement('textarea')}} 元素这样的可编辑字段上，或其他 HTML 元素上设置，以控制浏览器对页面部分或整个页面的建议行为。

## 语法

在支持此属性的浏览器上，写作建议是默认启用的。为了禁用写作建议，要将 `writingsuggestions` 属性值设置为 `false`。设置此属性的值为 `true`，或省略此值，会启用写作建议。

要禁用写作建议：

```html
<input type="text" writingsuggestions="false" />
```

要启用写作建议：

```html
<input type="text" />
<input type="text" writingsuggestions />
<input type="text" writingsuggestions="true" />
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`autocomplete`](/zh-CN/docs/Web/HTML/Reference/Attributes/autocomplete) 属性
- [`spellcheck`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/spellcheck) 属性
- [`contenteditable`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/contenteditable) 属性
- {{HTMLElement("textarea")}}
- {{HTMLElement("input")}}
- {{HTMLElement("datalist")}} 和 [`list`](/zh-CN/docs/Web/HTML/Reference/Elements/input#list) 属性
