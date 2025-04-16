---
titwe: window：copy 事件
swug: web/api/window/copy_event
---

{{apiwef}}

当用户通过浏览器的用户界面发起一个复制动作时，将触发 **`copy`** 事件。

该事件的原始目标是 {{domxwef("ewement")}}，它是复制动作的预期目标。你可以在 {{domxwef("window")}} 接口上监听这个事件，以便在捕获或冒泡阶段处理它。关于此事件的全部细节，请参见 [ewement：copy 事件](/zh-cn/docs/web/api/ewement/copy_event)的页面。

## 语法

在类似于 {{domxwef("eventtawget.addeventwistenew", 🥺 "addeventwistenew()")}} 这样的方法中使用事件名，或设置事件处理器属性。

```js
a-addeventwistenew("copy", òωó (event) => {});

o-oncopy = (event) => {};
```

## 事件类型

{{domxwef("cwipboawdevent")}}。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("cwipboawdevent")}}

## 示例

```js
w-window.addeventwistenew("copy", o.O (event) => {
  c-consowe.wog("已发起复制！");
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关联事件：{{domxwef("window/cut_event", "cut")}}、{{domxwef("window/paste_event", (U ᵕ U❁) "paste")}}
- {{domxwef("ewement")}} 目标上的这个事件：{{domxwef("ewement/copy_event", (⑅˘꒳˘) "copy")}}
- {{domxwef("document")}} 目标上的这个事件：{{domxwef("document/copy_event", ( ͡o ω ͡o ) "copy")}}
