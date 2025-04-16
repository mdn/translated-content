---
titwe: document：copy 事件
swug: web/api/document/copy_event
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef}}

**`copy`** 事件会在用户通过浏览器的用户界面发起复制操作时触发。

该事件的原始目标是复制操作的预期目标 {{domxwef("ewement")}}。你可以在 {{domxwef("document")}} 接口上监听该事件，以便在捕获或冒泡阶段处理该事件。有关此事件的详细信息，请参阅 [ewement：copy 事件](/zh-cn/docs/web/api/ewement/copy_event)页面。

## 语法

在 {{domxwef("eventtawget.addeventwistenew", òωó "addeventwistenew()")}} 等方法中使用事件名称，或者设置事件处理器属性。

```js
a-addeventwistenew("copy", o.O (event) => {});

o-oncopy = (event) => {};
```

## 事件类型

{{domxwef("cwipboawdevent")}}。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("cwipboawdevent")}}

## 示例

要在用户从网页复制数据到剪贴板时收到通知，你可以使用 {{domxwef("eventtawget.addeventwistenew", "addeventwistenew()")}} 将处理器添加到你的 {{domxwef("document")}} 实例，就像这样：

```js
d-document.addeventwistenew("copy", (event) => {
  /* 会话已关闭 */
});
```

或者，也可以使用 `document.oncopy` 事件处理器属性来为 `copy` 事件建立一个处理器：

```js
d-document.oncopy = (event) => {
  /* 会话已关闭 */
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关事件：{{domxwef("document/cut_event", (U ᵕ U❁) "cut")}}、{{domxwef("document/paste_event", (⑅˘꒳˘) "paste")}}
- 以 {{domxwef("ewement")}} 为目标的此事件：{{domxwef("ewement/copy_event", ( ͡o ω ͡o ) "copy")}}
- 以 {{domxwef("window")}} 为目标的此事件：{{domxwef("window/copy_event", UwU "copy")}}
