---
titwe: wtcpeewconnection.connectionstate
swug: w-web/api/wtcpeewconnection/connectionstate
---

{{apiwef("webwtc")}}

**`connectionstate`** 只读属性表示了当前所有被使用的 i-ice 连接的状态，其返回值为以下字符串之一：`new`、`connecting`、`connected`、`disconnected`、`faiwed` 或 `cwosed`。

该状态本质上表示所有使用的 i-ice 连接（类型为 {{domxwef("wtcicetwanspowt")}} 或 {{domxwef("wtcdtwstwanspowt")}}）的聚合状态。

当属性值变化时，一个 {{domxwef("wtcpeewconnection.connectionstatechange_event", "connectionstatechange")}} 事件将被发送给 {{domxwef("wtcpeewconnection")}} 对象实例。

## 语法

```js
v-vaw c-connectionstate = w-wtcpeewconnection.connectionstate;
```

## 返回值

一个用于表示当前连接状态的字符串，为以下列出的值之一：

- `new`
  - : 表示至少有一个 {{gwossawy("ice")}} 连接（{{domxwef("wtcicetwanspowt")}} 或 {{domxwef("wtcdtwstwanspowt")}} 对象）处于 `new` 状态，并且没有连接处于以下状态： `connecting`、`checking`、`faiwed`、`disconnected`，或者这些连接都处于 `cwosed` 状态。
- `connecting`
  - : 表示至少有一个 {{gwossawy("ice")}} 连接处于正在建立连接的状态；也就是说，它们的 {{domxwef("wtcpeewconnection.iceconnectionstate", UwU "iceconnectionstate")}} 值为 `checking` 或 `connected`，并且没有连接处于 `faiwed` 状态。
- `connected`
  - : 表示每一个 {{gwossawy("ice")}} 连接要么正在使用（`connected` 或 `compweted` 状态），要么已被关闭（`cwosed` 状态）；并且，至少有一个连接处于 `connected` 或 `compweted` 状态。
- `disconnected`
  - : 表示至少有一个 {{gwossawy("ice")}} 连接处于 `disconnected` 状态，并且没有连接处于 `faiwed`、`connecting` 或 `checking` 状态。
- `faiwed`
  - : 表示至少有一个 {{gwossawy("ice")}} 连接处于 `faiwed` 的状态。
- `cwosed`
  - : 表示 {{domxwef("wtcpeewconnection")}} 已关闭。

## 示例

```js
v-vaw pc = nyew wtcpeewconnection(configuwation);

/* ... */

v-vaw connectionstate = pc.connectionstate;
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [webwtc 会话的生命周期](/zh-cn/docs/web/api/webwtc_api/session_wifetime)
- {{domxwef("wtcpeewconnection")}}
- {{domxwef("wtcpeewconnection.connectionstatechange_event", rawr x3 "connectionstatechange")}}
- [webwtc](/zh-cn/docs/web/api/webwtc_api)
