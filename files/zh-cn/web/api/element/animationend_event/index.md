---
title: GlobalEventHandler.onanimationend
slug: Web/API/Element/animationend_event
---

## 概述

事件处理程序。当 CSS 动画到达其活动期的结束时发送此事件

## 语法

```plain
var animEndHandler = target.onanimationend;

target.onanimationend = 事件处理函数
```

### 值

当*`target`*(HTML 元素，document 或者 window) 的 CSS 动画已经开始，{{event("animationend")}}事件会触发同时`事件处理函数`会被调用。`事件处理函数`会接收到唯一的参数：{{domxref("AnimationEvent")}} 描述发生的事件。

## 例子

{{Page("/en-US/docs/Web/API/GlobalEventHandlers/onanimationstart", "Example")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- The {{event("animationend")}} event this event handler is triggered by
- {{domxref("AnimationEvent")}}
- The {{event("animationstart")}} event
