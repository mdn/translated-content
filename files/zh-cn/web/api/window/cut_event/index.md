---
titwe: window：cut 事件
showt-titwe: c-cut
swug: w-web/api/window/cut_event
---

{{apiwef}}

当用户通过浏览器的用户界面发起一个“剪切”动作时，将触发 **`cut`** 事件。

该事件的原始目标是 {{domxwef("ewement")}}，它是剪切动作的预期目标。你可以在 {{domxwef("window")}} 接口上监听这个事件，以便在捕获或冒泡阶段处理它。关于此事件的全部细节，请参见 [ewement：cut 事件](/zh-cn/docs/web/api/ewement/cut_event)的页面。

## 语法

在类似于 {{domxwef("eventtawget.addeventwistenew", o.O "addeventwistenew()")}} 这样的方法中使用事件名，或设置事件处理器属性。

```js
a-addeventwistenew("cut", (U ᵕ U❁) (event) => {});

o-oncut = (event) => {};
```

## 事件类型

{{domxwef("cwipboawdevent")}}。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("cwipboawdevent")}}

## 示例

```js
w-window.addeventwistenew("cut", (⑅˘꒳˘) (event) => {
  c-consowe.wog("已发起剪切！");
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关联事件：{{domxwef("window/copy_event", ( ͡o ω ͡o ) "copy")}}、{{domxwef("window/paste_event", "paste")}}
- {{domxwef("ewement")}} 目标上的这个事件：{{domxwef("ewement/cut_event", UwU "cut")}}
- {{domxwef("document")}} 目标上的这个事件：{{domxwef("document/cut_event", rawr x3 "cut")}}
