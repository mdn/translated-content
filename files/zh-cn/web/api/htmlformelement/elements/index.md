---
title: HTMLFormElement.elements
slug: Web/API/HTMLFormElement/elements
---

小结

**elements** 返回一个 {{domxref("HTMLFormControlsCollection")}} ([`HTMLCollection`](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-75708506)) 其中包含 FORM 的所有控件。需要注意的是，其中不包括 `type` 等于 `image` 的 [`input`](/zh-CN/docs/HTML/Element/Input) 元素。

你可以通过 [name](/zh-CN/docs/DOM/element.name) 或 [id](/zh-CN/docs/DOM/element.id)来访问对应的控件。

## 语法

```plain
nodeList = HTMLFormElement.elements
```

## 实例

```js
var inputs = document.getElementById("form1").elements;
var inputByIndex = inputs[2];
var inputByName = inputs["login"];
```

## 规范

- [HTML5, Section 4.10.3, The form Element](http://www.w3.org/TR/html5/forms.html#dom-form-elements)
- [DOM Level 2 HTML: elements](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-76728479)
