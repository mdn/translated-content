---
title: Event：target 属性
slug: Web/API/Event/target
l10n:
  sourceCommit: 43bd906206282421a50dcf1347dcfa58ef910c55
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

{{domxref("Event")}} 接口的 **`target`** 只读属性是对事件被分派到的对象的引用。当事件处理器在事件的冒泡或捕获阶段被调用时，它与 {{domxref("Event.currentTarget")}} 不同。

## 值

关联的 {{domxref("EventTarget")}}。

## 示例

`event.target` 属性可以用于实现**事件委托**。

```js
// 创建列表
const ul = document.createElement("ul");
document.body.appendChild(ul);

const li1 = document.createElement("li");
const li2 = document.createElement("li");
ul.appendChild(li1);
ul.appendChild(li2);

function hide(evt) {
  // evt.target 指向被点击的 <li> 元素
  // 这与 evt.currentTarget 不同，后者在这个上下文中将指向父级 <ul>
  evt.target.style.visibility = "hidden";
}

// 将监听器附加到列表上
// 点击每个 <li> 时都会触发
ul.addEventListener("click", hide, false);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [事件冒泡](/zh-CN/docs/Learn_web_development/Core/Scripting/Event_bubbling)
