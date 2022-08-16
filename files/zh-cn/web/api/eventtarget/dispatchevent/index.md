---
title: EventTarget.dispatchEvent
slug: Web/API/EventTarget/dispatchEvent
---
{{APIRef("DOM Events")}}

向一个指定的事件目标派发一个[事件](/zh-CN/docs/Web/API/Event), 并以合适的顺序**同步调用**目标元素相关的事件处理函数。标准事件处理规则 (包括事件捕获和可选的冒泡过程) 同样适用于通过手动的使用`dispatchEvent()`方法派发的事件。

## 语法

```
cancelled = !target.dispatchEvent(event)
```

### 参数

- `event` 是要被派发的事件对象。
- `target` 被用来初始化 事件 和 决定将会触发 目标。

### 返回值

- 当该事件是可取消的 (cancelable 为 true) 并且至少一个该事件的 事件处理方法 调用了{{domxref("Event.preventDefault()")}}，则返回值为`false`；否则返回`true`。

如果该被派发的事件的事件类型 (event's type) 在方法调用之前没有被经过初始化被指定，就会抛出一个 `UNSPECIFIED_EVENT_TYPE_ERR` 异常，或者如果事件类型是`null`或一个空字符串. event handler 就会抛出未捕获的异常； 这些 event handlers 运行在一个嵌套的调用栈中： 他们会阻塞调用直到他们处理完毕，但是异常不会冒泡。

## 注意

与浏览器原生事件不同，原生事件是由 DOM 派发的，并通过[event loop](/zh-CN/docs/Web/JavaScript/EventLoop)异步调用事件处理程序，而`dispatchEvent()`则是同步调用事件处理程序。在调用`dispatchEvent()`后，所有监听该事件的事件处理程序将在代码继续前执行并返回。

`dispatchEvent()`是 create-init-dispatch 过程的最后一步，用于将事件调度到实现的事件模型中。可以使用[Event](/zh-CN/docs/Web/API/Event/Event)构造函数来创建事件。

另请参阅 [Event object reference](/zh-CN/docs/DOM/event).

## 例子

参考 [Creating and triggering events](/zh-CN/docs/Web/Guide/DOM/Events/Creating_and_triggering_events).

## 规范

{{Specifications}}

## Browser compatibility

{{Compat}}
