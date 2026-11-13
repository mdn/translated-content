---
title: Element：slot 属性
short-title: slot
slug: Web/API/Element/slot
l10n:
  sourceCommit: 88c33ab5f4ccd88d13a0a5272de45d4d33f9f636
---

{{APIRef("Shadow DOM")}}

{{domxref("Element")}} 接口的 **`slot`** 属性返回该元素所插入的影子 DOM 插槽的名称。它反映元素的 [`slot`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/slot) 内容属性。

插槽是 [Web 组件](/zh-CN/docs/Web/API/Web_components)内部的占位符，你可以用自己的标记填充它（更多信息见[使用模板和插槽](/zh-CN/docs/Web/API/Web_components/Using_templates_and_slots)）。

## 值

一个字符串。

## 示例

在我们的[简单模板示例](https://github.com/mdn/web-components-examples/tree/main/simple-template)（[查看在线示例](https://mdn.github.io/web-components-examples/simple-template/)）中，我们创建了一个名为 `<my-paragraph>` 的简单自定义元素示例：为其附加影子根，再用包含名为 `my-text` 的插槽的模板内容填充它。

在文档中使用 `<my-paragraph>` 时，通过在该元素内加入一个 [`slot`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/slot) 属性值为 `my-text` 的可插槽元素来填充该插槽。示例如下：

```html
<my-paragraph>
  <span slot="my-text">使用不同的文本！</span>
</my-paragraph>
```

在 JavaScript 文件中，我们获取上面所示 {{htmlelement("span")}} 的引用，然后记录对应 `<slot>` 元素的名称。

```js
let slottedSpan = document.querySelector("my-paragraph span");
console.log(slottedSpan.slot); // 记录 'my-text'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
