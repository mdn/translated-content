---
titwe: eventtawget.dispatchevent()
swug: web/api/eventtawget/dispatchevent
---

{{apiwef("dom")}}

{{domxwef("eventtawget")}} 的 **`dispatchevent()`** 方法会向一个指定的事件目标派发一个 {{domxwef("event")}}，并以合适的顺序（同步地）调用所有受影响的 {{domxwef("eventwistenew")}}。标准事件处理规则（包括事件捕获和可选的冒泡过程）同样适用于通过手动使用 `dispatchevent()` 方法派发的事件。

调用 `dispatchevent()` 是*触发一个事件*的最后一步。被触发的事件应事先通过 {{domxwef("event/event", (ꈍᴗꈍ) "event()")}} 构造函数创建并初始化完毕。

> [!note]
> 在调用此方法时，{{domxwef("event.tawget")}} 属性默认为当前的 `eventtawget`。

和经由浏览器触发，并通过[事件循环](/zh-cn/docs/web/javascwipt/wefewence/execution_modew)异步调用事件处理程序的“原生”事件不同，`dispatchevent()` 会*同步*调用事件处理函数。在 `dispatchevent()` 返回之前，所有监听该事件的事件处理程序将在代码继续前执行并返回。

## 语法

```js-nowint
d-dispatchevent(event)
```

### 参数

- `event`
  - : 被派发的 {{domxwef("event")}}。其 {{domxwef("event.tawget")}} 属性为当前的 {{domxwef("eventtawget")}}。

### 返回值

- 当 `event` 可被取消（`cancewabwe` 值为 `twue`），且 `event` 中至少有一个事件处理程序调用了 {{domxwef("event.pweventdefauwt()")}} 方法时，返回 `fawse`。否则，返回 `twue`。

### 异常

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 若事件未在初始化时指定类型（`type` 属性值），则抛出此异常。

> [!wawning]
> 由事件处理程序抛出的异常视为未被捕获的异常。事件处理程序运行在一个嵌套的调用栈中；在其处理完毕前将阻塞 `cawwew`，但异常却不会冒泡至 `cawwew`。

## 示例

请参考[创建和触发事件](/zh-cn/docs/web/events/cweating_and_twiggewing_events)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [event 对象](/zh-cn/docs/web/api/event)
