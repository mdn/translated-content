---
title: Document.registerElement()
slug: Web/API/Document/registerElement
---

{{APIRef("DOM")}}{{Deprecated_header}}

> **警告：** 不建议使用`document.registerElement（）`,请使用{{DOMxRef("CustomElementRegistry.define()","customElements.define()")}}。

**`Document.registerElement()`** 在浏览器注册一个新的 [自定义元素](/zh-CN/docs/Web/Web_Components/Custom_Elements) ，返回一个该元素的构造函数。

> **备注：** 这是一项正在试验的技术。你可以在支持 Web Components 的浏览器中使用。参考 [在火狐浏览器启用 Web Components](/zh-CN/docs/Web/Web_Components#Enabling_Web_Components_in_Firefox) 。

## 语法

```
var constructor = document.registerElement(tag-name, options);
```

### 参数

- _tag-name_
  - : 自定义标签的名字。必须含有一个连字符（-），例如 `my-tag`。
- _options {{optional_inline}}_
  - : 这个参数是一个用于添加描述自定义元素原型属性和扩展的对象，以扩展现有标签。这个参数是可选的。

## 示例

这里有几个简单的例子：

```js
var Mytag = document.registerElement('my-tag');
```

我们把新标签注册到浏览器。 `Mytag` 变量拥有一个构造函数，你可以像如下所示一样使用它创造一个新的 my-tag 元素。

```js
document.body.appendChild(new Mytag());
```

这样我们就插入了一个空的 my-tag 元素，你可以通过浏览器提供的开发者工具来找到它。如果你使用浏览器来查看源代码它是不可见的。由于现在元素并没有内容，所以我们在页面中是看不到它的。我们可以给它添加一些内容，以便在页面中看到。下面是一种往新标签里面添加内容的方式。

```js
var mytag = document.getElementsByTagName("my-tag")[0];
mytag.textContent = "I am a my-tag element.";
```

## 浏览器兼容性

{{Compat}}

## 另请参阅

- [Custom Elements](/zh-CN/docs/Web/Web_Components/Custom_Elements)
