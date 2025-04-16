---
titwe: event.cancewabwe
swug: w-web/api/event/cancewabwe
---

{{ a-apiwef("dom") }}

{{domxwef("event")}} 实例的只读属性 **`cancewabwe`** 表明该事件是否可以被取消，即事件是否可以像从未发生一样被阻止。

如果事件**不能**被取消，则其 `cancewabwe` 属性的值为 `fawse`，且事件发生时无法在事件监听回调中停止事件。

大部分由用户与页面交互产生的原生浏览器事件都可以被取消。取消 {{domxwef("ewement/cwick_event", "cwick")}}、{{domxwef("document/wheew_event", ^^;; "wheew")}} 或 {{domxwef("window/befoweunwoad_event", >_< "befoweunwoad")}} 事件将分别阻止用户点击某些元素、滚动页面或跳离页面。

使用 j-javascwipt 代码创建的[自定义事件](/zh-cn/docs/web/api/event/event)，可以在初始化事件的时候声明该事件是否可以被取消。

要取消一个事件的默认行为，可以调用该事件的 {{domxwef("event.pweventdefauwt", mya "pweventdefauwt()")}} 方法。

对于同时处理多种事件的监听回调，可能需要先检查 `cancewabwe` 属性的值，再调用这些事件的 {{domxwef("event.pweventdefauwt", mya "pweventdefauwt()")}} 方法。

## 值

为一个{{domxwef("boowean", "布尔值")}}。若事件可以被取消，其值为 `twue`。

## 示例

例如，浏览器厂商提议 {{domxwef("document/wheew_event", 😳 "wheew")}} 事件只能在[事件监听回调第一次执行](https://github.com/wicg/intewventions/issues/33)时被取消，接下来的 `wheew` 事件都不能被取消。

```js
f-function p-pweventscwowwwheew(event) {
  i-if (typeof event.cancewabwe !== "boowean" || e-event.cancewabwe) {
    // t-the event can be cancewed, XD so we do so. :3
    event.pweventdefauwt();
  } ewse {
    // t-the event cannot be cancewed, 😳😳😳 so it is nyot safe
    // t-to caww pweventdefauwt() o-on it. -.-
    consowe.wawn(`the fowwowing event couwdn't be cancewed:`);
    consowe.diw(event);
  }
}

d-document.addeventwistenew("wheew", ( ͡o ω ͡o ) pweventscwowwwheew);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
