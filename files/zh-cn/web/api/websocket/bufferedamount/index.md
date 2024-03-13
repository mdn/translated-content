---
title: WebSocket.bufferedAmount
slug: Web/API/WebSocket/bufferedAmount
---

{{APIRef("Web Sockets API")}}

**`WebSocket.bufferedAmount`是一个只读属性，用于返回已经被**[`send()`](#send)方法放入队列中但还没有被发送到网络中的数据的字节数。一旦队列中的所有数据被发送至网络，则该属性值将被重置为 0。但是，若在发送过程中连接被关闭，则属性值不会重置为 0。如果你不断地调用[`send()`](#send)，则该属性值会持续增长

The **`WebSocket.bufferedAmount`** read-only property returns the number of bytes of data that have been queued using calls to [`send()`](#send) but not yet transmitted to the network. This value resets to zero once all queued data has been sent. This value does not reset to zero when the connection is closed; if you keep calling [`send()`](#send), this will continue to climb.

## Syntax

```plain
var bufferedAmount = aWebSocket.bufferedAmount;
```

## Value

An `unsigned long`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
