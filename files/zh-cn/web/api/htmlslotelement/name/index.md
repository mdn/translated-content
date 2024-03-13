---
title: HTMLSlotElement.name
slug: Web/API/HTMLSlotElement/name
---

{{APIRef("Shadow DOM API")}}

元素{{domxref("HTMLSlotElement")}}的**name**属性，可以获取和设置属性值。插槽提供了 web 组件的摆放位置，辅助用户布局。

## 语法

```plain
var name = htmlSlotElement.name
htmlSlotElement.name = name
```

### 值

一个 {{domxref('DOMString')}}.

## 例子

下面的片段来自 [slotchange example](https://github.com/mdn/web-components-examples/tree/master/slotchange) ([see it live also](https://mdn.github.io/web-components-examples/slotchange/)).

```js
let slots = this.shadowRoot.querySelectorAll("slot");
slots[1].addEventListener("slotchange", function (e) {
  let nodes = slots[1].assignedNodes();
  console.log(
    'Element in Slot "' +
      slots[1].name +
      '" changed to "' +
      nodes[0].outerHTML +
      '".',
  );
});
```

这里我们获取所有插槽的引用，然后给模板里的第二个插槽增加事件— 跟踪内容变化。

每当附加在插槽中的内容变化，我们都记录插槽相关的内容。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
