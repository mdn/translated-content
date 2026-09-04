---
title: Element：assignedSlot 属性
short-title: assignedSlot
slug: Web/API/Element/assignedSlot
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Shadow DOM")}}

{{domxref("Element")}} 接口的 **`assignedSlot`** 只读属性返回一个 {{domxref("HTMLSlotElement")}}，表示该节点插入其中的 {{htmlelement("slot")}} 元素。

## 值

一个 {{domxref('HTMLSlotElement')}} 实例；若元素未分配给插槽，或者关联的影子根以 {{domxref("ShadowRoot.mode", "mode")}} 为 `closed` 的方式附加（详情参见 {{domxref("Element.attachShadow")}}），则为 `null`。

## 示例

在我们的[简单模板示例](https://github.com/mdn/web-components-examples/tree/main/simple-template)（[查看在线示例](https://mdn.github.io/web-components-examples/simple-template/)）中，创建了一个简单的自定义元素 `<my-paragraph>`：为其附加 shadow root，再用一个含名为 `my-text` 的插槽的模板内容填充它。

在文档中使用 `<my-paragraph>` 时，通过在该元素内加入一个 [`slot`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/slot) 属性值为 `my-text` 的可插槽元素来填充该插槽。示例如下：

```html
<my-paragraph>
  <span slot="my-text">使用不同的文本！</span>
</my-paragraph>
```

在 JavaScript 文件中，获取上面所示 {{htmlelement("span")}} 的引用，然后记录插入 `<span>` 的原始 `<slot>` 元素的引用。

```js
let slottedSpan = document.querySelector("my-paragraph span");
console.log(slottedSpan.assignedSlot); // 记录 '<slot name="my-text">'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
