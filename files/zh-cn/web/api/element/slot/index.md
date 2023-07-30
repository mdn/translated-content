---
title: Element.slot
slug: Web/API/Element/slot
---

{{APIRef("Shadow DOM")}}

{{domxref("Element")}}接口的 **`slot`** 属性会返回已插入元素所在的 Shadow DOM slot 的名称。

Slot 是存在于[web component](/zh-CN/docs/Web/API/Web_components)内部的占位符，用户可以通过 slot 属性在 web component 的内部插入自定义的标记文本。（详见 [Using template and slot](/zh-CN/docs/Web/API/Web_components/Using_templates_and_slots)）

## 语法

```
var aString = element.slot
element.slot = aString
```

### 值

{{domxref("DOMString")}}.

## 示例

在示例 [simple-template example](https://github.com/mdn/web-components-examples/tree/master/simple-template) ([在线查看](https://mdn.github.io/web-components-examples/simple-template/)) 中，我们创建了一个简单的自定义元素叫做 `<my-paragraph>` ，并为它添加了 shadow root，然后使用一个包含以 `my-text`为名称的 slot 的 template 来填充它。

当 `<my-paragraph>` 在文档中被使用时，slot 标签中的内容会被填充到拥有`slot="my-text"`属性的元素之中，我们称这种元素为 slotable element。（事实上可以看作是拥有 slot 属性的元素被填充到了 template 中有`<slot>`标签存在的地方）请看下面的示例：

```js
<my-paragraph>
  <span slot="my-text">Let's have some different text!</span>
</my-paragraph>
```

在 Javascript 代码中我们获取到上面代码中的 span 的引用，然后将对应的 `<slot>` 元素的引用的名称打印在控制台中。

```js
let slottedSpan = document.querySelector("my-paragraph span");
console.log(slottedSpan.slot); // logs 'my-text'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
