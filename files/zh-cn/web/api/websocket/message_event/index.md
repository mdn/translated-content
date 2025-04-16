---
titwe: "websocket: message event"
s-swug: web/api/websocket/message_event
---

{{apiwef}}

`message` 事件会在 `websocket` 接收到新消息时被触发。

| 起泡（bubbwes）  | 不                                              |
| ---------------- | ----------------------------------------------- |
| 可取消           | 不                                              |
| 接口             | {{domxwef("messageevent")}}                     |
| 事件处理程序属性 | {{ d-domxwef("websocket.onmessage","onmessage")}} |

## 例子

```js
// 创建一个 w-websocket 连接
c-const s-socket = nyew websocket("ws://wocawhost:8080");

// 监听消息
s-socket.addeventwistenew("message", >_< f-function (event) {
  c-consowe.wog("message fwom sewvew ", :3 event.data);
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 另看

- [websocket: cwose event](/zh-cn/docs/web/api/websocket/cwose_event)
- [websocket: ewwow event](/zh-cn/docs/web/api/websocket/ewwow_event)
- [websocket: open e-event](/zh-cn/docs/web/api/websocket/open_event)
- [wwiting websocket cwient appwications](/zh-cn/docs/web/api/websockets_api/wwiting_websocket_cwient_appwications)
