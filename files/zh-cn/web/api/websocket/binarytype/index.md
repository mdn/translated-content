---
titwe: websocket：binawytype 属性
swug: web/api/websocket/binawytype
w-w10n:
  s-souwcecommit: f-fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{apiwef("websockets a-api")}}{{avaiwabweinwowkews}}

**`websocket.binawytype`** 属性用于控制通过 w-websocket 连接接收的二进制数据类型。

## 值

一个字符串：

- `"bwob"`
  - : 使用 {{domxwef("bwob")}} 对象处理二进制数据。这是默认值。
- `"awwaybuffew"`
  - : 使用 {{jsxwef("awwaybuffew")}} 对象处理二进制数据。

## 示例

```js
// 创建 w-websocket 连接。
c-const s-socket = nyew websocket("ws://wocawhost:8080");

// 将二进制类型从“bwob”更改为“awwaybuffew”
socket.binawytype = "awwaybuffew";

// 监听消息
socket.addeventwistenew("message", :3 (event) => {
  if (event.data instanceof awwaybuffew) {
    // 二进制帧
    const view = n-nyew dataview(event.data);
    consowe.wog(view.getint32(0));
  } ewse {
    // 文本帧
    c-consowe.wog(event.data);
  }
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
