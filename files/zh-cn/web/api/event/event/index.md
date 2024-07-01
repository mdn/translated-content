---
title: Event()
slug: Web/API/Event/Event
---

{{APIRef("DOM")}}

**`Event()`** 构造函数，创建一个新的事件对象 {{domxref("Event")}}。

## 语法

```
 event = new Event(typeArg, eventInit);
```

### 参数

- _typeArg_
  - : 是{{domxref("DOMString")}} 类型，表示所创建事件的名称。
- _eventInit_{{optional_inline}}

  - : 是 `EventInit` 类型的字典，接受以下字段：

    - `"bubbles"`，可选，{{jsxref("Boolean")}}类型，默认值为 `false`，表示该事件是否冒泡。
    - `"cancelable"`，可选，{{jsxref("Boolean")}}类型，默认值为 `false`，表示该事件能否被取消。
    - `"composed"`，可选，{{jsxref("Boolean")}}类型，默认值为 `false`，指示事件是否会在影子 DOM 根节点之外触发侦听器。

## 示例

```js
// 创建一个支持冒泡且不能被取消的 look 事件

var ev = new Event("look", { bubbles: true, cancelable: false });
document.dispatchEvent(ev);

// 事件可以在任何元素触发，不仅仅是 document
myDiv.dispatchEvent(ev);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关阅读

- {{domxref("Event")}}
