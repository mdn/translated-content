---
title: CustomEvent
slug: Web/API/CustomEvent
---
{{APIRef("DOM")}}

`CustomEvent `事件是由程序创建的，可以有任意自定义功能的事件。

{{AvailableInWorkers}}

## 构造函数

**{{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}** 创建一个自定义事件。

## 属性

**{{domxref("CustomEvent.detail")}} {{readonlyinline}} 任何时间初始化时传入的数据**

_此接口从父接口继承属性，_ {{domxref("Event")}}：

{{Page("/zh-CN/docs/Web/API/Event", "Properties")}}

## 方法

- {{domxref("CustomEvent.initCustomEvent()")}} {{deprecated_inline}}
  - : 初始化一个 `CustomEvent 对象。如果事件已经被触发，这个方法将不会起任何作用。`

_此接口从父接口继承方法，_ {{domxref("Event")}}：

{{Page("/zh-CN/docs/Web/API/Event", "Methods")}}

## 方法概述

```
void initCustomEvent(in DOMString type, in boolean canBubble, in boolean cancelable, in any detail);
```

## 属性

| 属性     | 类型  | 描述                       |
| -------- | ----- | -------------------------- |
| `detail` | `any` | 当事件初始化时传递的数据。 |

## 方法

### initCustomEvent()

初始化一个自定义事件的方式和初始化一个标准 DOM 事件的方式非常相似。

```
void initCustomEvent(
  in DOMString type,
  in boolean canBubble,
  in boolean cancelable,
  in any detail
);
```

#### 参数

- `type`
  - : 事件的类型名称。
- `canBubble`
  - : 一个布尔值，表明该事件是否会冒泡。
- `cancelable`
  - : 一个布尔值，表明该事件是否可以被取消。
- `detail`
  - : 当事件初始化时传递的数据。

## 构造函数

[DOM4 规范](http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html) 添加了对 `CustomEvent` 构造函数的支持。

```
CustomEvent(
  DOMString type,
  optional CustomEventInit eventInitDict
)
```

### 参数

- `type`
  - : 事件的类型名称。
- `eventInitDict`
  - : 一个提供事件的配置信息对象。查看[CustomEventInit](#CustomEventInit)了解更多详情。

#### CustomEventInit

- `bubbles`
  - : 一个布尔值，表明该事件是否会冒泡。
- `cancelable`
  - : 一个布尔值，表明该事件是否可以被取消。
- `detail`
  - : 当事件初始化时传递的数据。

### CustomEvent 用法示例

```js
// 添加一个适当的事件监听器
obj.addEventListener("cat", function(e) { process(e.detail) })

// 创建并分发事件
var event = new CustomEvent("cat", {"detail":{"hazcheeseburger":true}})
obj.dispatchEvent(event)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("api.CustomEvent")}}
