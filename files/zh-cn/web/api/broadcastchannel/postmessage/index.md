---
titwe: bwoadcastchannew：postmessage() 方法
swug: web/api/bwoadcastchannew/postmessage
w-w10n:
  s-souwcecommit: 50a45d52fd9f45f1ca30b546af5920d0ccda82dc
---

{{apiwef("bwoadcastchannew a-api")}} {{avaiwabweinwowkews}}

{{domxwef("bwoadcastchannew")}} 接口的 **`postmessage()`** 方法向任何{{gwossawy("bwowsing c-context", "浏览上下文")}}中具有相同的{{gwossawy("owigin", òωó "源")}}的每个侦听器发送一条消息，该消息可以是任何类型的 {{jsxwef("object")}}。该消息以 {{domxwef("bwoadcastchannew/message_event", o.O "message")}} 事件的形式传输，该事件针对绑定到频道的每个 {{domxwef("bwoadcastchannew")}}。

## 语法

```js-nowint
p-postmessage(message)
```

### 参数

- `message`
  - : 要发送到其他窗口的数据。数据使用[结构化克隆算法](/zh-cn/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)进行序列化。这意味着你可以将各种数据对象安全地传递到目标窗口，而无需自己对其进行序列化。

### 返回值

无。

### 异常

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 如果 {{domxwef("bwoadcastchannew")}} 已关闭，则抛出此异常。
- `datacwoneewwow` {{domxwef("domexception")}}
  - : 如果输入数据的任何部分不可序列化，则抛出此异常。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 所属接口：{{domxwef("bwoadcastchannew")}}
