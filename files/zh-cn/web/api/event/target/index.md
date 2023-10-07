---
title: Event.target
slug: Web/API/Event/target
---

{{ ApiRef("DOM") }}

{{domxref("Event")}} 接口的 **`target`** 只读属性是对事件分派到的对象的引用。当事件处理器在事件的冒泡或捕获阶段被调用时，它与 {{domxref("event.currentTarget")}} 不同。

## 值

与 {{domxref("EventTarget")}} 有关。

## 示例

`event.target` 属性可以用来实现**事件委托** (**event delegation**)。

```js
// Make a list
var ul = document.createElement("ul");
document.body.appendChild(ul);

var li1 = document.createElement("li");
var li2 = document.createElement("li");
ul.appendChild(li1);
ul.appendChild(li2);

function hide(e) {
  // e.target 引用着 <li> 元素
  // 不像 e.currentTarget 引用着其父级的 <ul> 元素。
  e.target.style.visibility = "hidden";
}

// 添加监听事件到列表，当每个 <li> 被点击的时候都会触发。
ul.addEventListener("click", hide, false);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

在 IE6-8 中，事件模型与标准不同。使用非标准的 [`element.attachEvent()`](http://msdn.microsoft.com/en-us/library/ie/ms536343%28v=vs.85%29.aspx) 方法绑定事件监听器。在该模型中，事件对象有一个 `srcElement` 属性，等价于`target` 属性。

```js
function hide(e) {
  // 支持 IE6-8
  var target = e.target || e.srcElement;
  target.style.visibility = "hidden";
}
```

## 相关链接

- [Comparison of Event Targets](/zh-CN/DOM/event/Comparison_of_Event_Targets)
- {{domxref("Event.currentTarget")}}
