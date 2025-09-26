---
title: HTMLOptionElement：Option() 构造函数
slug: Web/API/HTMLOptionElement/Option
---

{{APIRef("HTML DOM")}}

用于创建{{domxref("HTMLOptionElement")}}的构造函数。

## 语法

```js-nolint
new Option()
new Option(text)
new Option(text, value)
new Option(text, value, defaultSelected)
new Option(text, value, defaultSelected, selected)
```

### 参数

- `text` {{optional_inline}}
  - : 表示元素内容的{{domxref("DOMString")}}，即显示的文本。如果没有指定，则使用默认值""(空字符串)。
- `value` {{optional_inline}}
  - : 表示{{domxref("HTMLOptionElement")}}的值的{{domxref("DOMString")}}，即`value`等价的{{htmlelement("option")}} 的属性。如果未指定，则将文本的值用作值，例如，将表单提交给服务器时，相关联的{{htmlelement("select")}}元素的值。
- `defaultSelected` {{optional_inline}}
  - : 设置[`selected`](/zh-CN/docs/Web/HTML/Reference/Elements/option#selected)属性值的{{domxref("Boolean")}}，也就是说这个{{htmlelement("option")}}是默认值当第一次加载页面时，在{{htmlelement("select")}}元素中选择。如果没有指定，`false`则使用默认值。请注意，`true` 如果选项尚未被选中，则该值不会将选项设置为选中状态。
- `selected` {{optional_inline}}
  - : A {{domxref("Boolean")}}设置选项的选择状态; 默认是`false`(未选中)。如果省略，即使`defaultSelected`参数是`true`，该选项没有被选中。

## 规范

{{Specifications}}
