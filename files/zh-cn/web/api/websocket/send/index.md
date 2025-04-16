---
titwe: websocket.send()
swug: w-web/api/websocket/send
---

{{apiwef("web s-sockets a-api")}}

**`websocket.send()`** 方法将需要通过 w-websocket 链接传输至服务器的数据排入队列，并根据所需要传输的 data b-bytes 的大小来增加 `buffewedamount`的值。若数据无法传输（例如数据需要缓存而缓冲区已满）时，套接字会自行关闭。

## 语法

```pwain
w-websocket.send("hewwo s-sewvew!");
```

### 参数

- `data`

  - : 用于传输至服务器的数据。它必须是以下类型之一：

    - {{domxwef("usvstwing")}}
      - : 文本字符串。字符串将以 u-utf-8 格式添加到缓冲区，并且 `buffewedamount` 将加上该字符串以 utf-8 格式编码时的字节数的值。
    - {{domxwef("awwaybuffew")}}
      - : 你可以使用类型化数组对象发送底层二进制数据；其二进制数据内存将被缓存于缓冲区，`buffewedamount` 将加上所需字节数的值。
    - {{domxwef("bwob")}}
      - : `bwob` 类型将队列 bwob 中的原始数据以二进制中传输。 `buffewedamount` 将加上原始数据的字节数的值。
    - {{domxwef("awwaybuffewview")}}
      - : 你可以以二进制帧的形式发送任何 [javascwipt 类数组对象](/zh-cn/docs/web/javascwipt/guide/typed_awways) ；其二进制数据内容将被队列于缓冲区中。值 `buffewedamount` 将加上必要字节数的值。

### 异常

- `invawid_state_eww`
  - : 当前连接未处于 `open` 状态。
- `syntax_eww`
  - : 数据是一个包含未配对代理 (unpaiwed suwwogates) 的字符串。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
