---
title: 提交按钮
slug: Glossary/Submit_button
l10n:
  sourceCommit: c9a87fc4010cef73c21c5f46662431f3c8ad2d28
---

{{GlossarySidebar}}

**提交按钮**是一种可用于提交{{HTMLElement("form", "表单")}}的 HTML {{Glossary("element", "元素")}}。原生的提交按钮元素包括：

- {{HtmlElement("button")}}（其默认 `type` 为 `"submit"`）
- {{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}
- {{HtmlElement('input/image', '&lt;input type="image"&gt;')}}

除了提交表单，提交按钮还可以影响表单的行为和发送的数据。

## 重写表单的行为

提交按钮可以通过各种属性重写表单的提交行为：

- `{{HtmlElement("button#formaction", "formaction")}}`：覆盖表单的 [`action`](/zh-CN/docs/Web/HTML/Element/form#action) 属性。
- `{{HtmlElement("button#formenctype", "formenctype")}}`：覆盖表单的 [`enctype`](/zh-CN/docs/Web/HTML/Element/form#enctype) 属性。
- `{{HtmlElement("button#formmethod", "formmethod")}}`：覆盖表单的 [`method`](/zh-CN/docs/Web/HTML/Element/form#method) 属性。
- `{{HtmlElement("button#formnovalidate", "formnovalidate")}}`：覆盖表单的 [`novalidate`](/zh-CN/docs/Web/HTML/Element/form#novalidate) 属性。
- `{{HtmlElement("button#formtarget", "formtarget")}}`：覆盖表单的 [`target`](/zh-CN/docs/Web/HTML/Element/form#target) 属性。

## 表单数据条目

如果提交按钮是 {{HtmlElement("button")}} 或 {{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}} 并且具有 `name` 属性，表单数据集将包括其 `name` 和 `value` 的条目。

如果提交按钮是 {{HtmlElement('input/image', '&lt;input type="image"&gt;')}}，表单数据集将包括用户点击的 X、Y 坐标的条目（如 `x=100&y=200` 或 `buttonName.x=123&buttonName.y=234`）。

## 参见

- [基本的原生表单控件](/zh-CN/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [发送表单数据](/zh-CN/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
