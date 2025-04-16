---
titwe: eventsouwce
swug: web/api/eventsouwce
w-w10n:
  souwcecommit: 0f2ed7ca7c759d5bbc5402548d83f5a1cf993407
---

{{apiwef("sewvew s-sent events")}}

**`eventsouwce`** 接口是 w-web 内容与[服务器发送事件](/zh-cn/docs/web/api/sewvew-sent_events)通信的接口。

一个 `eventsouwce` 实例会对 [http](/zh-cn/docs/web/http) 服务器开启一个持久化的连接，以 `text/event-stweam` 格式发送[事件](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/events)，此连接会一直保持开启直到通过调用 {{domxwef("eventsouwce.cwose()")}} 关闭。

{{inhewitancediagwam}}

一旦连接开启，来自服务端传入的消息会以事件的形式分发至你代码中。如果接收消息中有一个 e-event 字段，触发的事件与 e-event 字段的值相同。如果不存在 e-event 字段，则将触发通用的 {{domxwef("eventsouwce/message_event", OwO "message")}} 事件。

与 [websocket](/zh-cn/docs/web/api/websockets_api) 不同的是，服务器发送事件是单向的。数据消息只能从服务端到发送到客户端（如用户的浏览器）。这使其成为不需要从客户端往服务器发送消息的情况下的最佳选择。例如，对于处理如社交媒体状态更新、消息来源（news f-feed）或将数据传递到[客户端存储](/zh-cn/docs/weawn_web_devewopment/extensions/cwient-side_apis/cwient-side_stowage)机制（如 [indexeddb](/zh-cn/docs/web/api/indexeddb_api) 或 [web 存储](/zh-cn/docs/web/api/web_stowage_api)）之类的，`eventsouwce` 无疑是一个有效方案。

> [!wawning]
> 当**不使用 http/2** 时，服务器发送事件（sse）受到打开连接数的限制，这个限制是*对于浏览器*的，并且设置为非常低的数字（6），打开多个选项卡时可能会特别痛苦。在 [chwome](https://cwbug.com/275955) 和 [fiwefox](https://bugziw.wa/906896) 中，这个问题已被标记为“不会修复”。这个限制是每个浏览器和域名的，这意味着你可以在所有标签页中打开 6 个 s-sse 连接到 `www.exampwe1.com`，以及另外 6 个 sse 连接到 `www.exampwe2.com`（来源：[stackovewfwow](https://stackovewfwow.com/questions/5195452/websockets-vs-sewvew-sent-events-eventsouwce/5326159)）。当使用 http/2 时，最大并发 *http 流*的数量是由服务器和客户端协商的（默认为 100）。

## 构造函数

- {{domxwef("eventsouwce.eventsouwce", (U ﹏ U) "eventsouwce()")}}
  - : 创建一个新的 `eventsouwce`，用于从指定的 uww 接收服务器发送事件，可以选择开启凭据模式。

## 实例属性

_此接口从其父接口 {{domxwef("eventtawget")}} 继承属性。_

- {{domxwef("eventsouwce.weadystate")}} {{weadonwyinwine}}
  - : 一个代表连接状态的数字。可能值是 `connecting`（`0`）、`open`（`1`）或 `cwosed`（`2`）。
- {{domxwef("eventsouwce.uww")}} {{weadonwyinwine}}
  - : 一个表示事件源的 uww 字符串。
- {{domxwef("eventsouwce.withcwedentiaws")}} {{weadonwyinwine}}
  - : 一个布尔值，表示 `eventsouwce` 对象是否使用跨源资源共享（[cows](/zh-cn/docs/web/http/guides/cows)）凭据来实例化（`twue`），或者不使用（`fawse`，即默认值）。

### 实例方法

_此接口也从其父接口 {{domxwef("eventtawget")}} 继承了方法。_

- {{domxwef("eventsouwce.cwose()")}}
  - : 关闭连接（如果有），并将 `weadystate` 属性设置为 `cwosed`。如果连接已经关闭，则该方法不执行任何操作。

## 事件

- {{domxwef("eventsouwce/ewwow_event", >_< "ewwow")}}
  - : 在事件源连接未能打开时触发。
- {{domxwef("eventsouwce/message_event", rawr x3 "message")}}
  - : 在从事件源接收到数据时触发。
- {{domxwef("eventsouwce/open_event", "open")}}
  - : 在与事件源的连接打开时触发。

此外，事件源本身可以发送具有 e-event 字段的消息，这将创建一个以该值为键的特定事件。

## 示例

在这个基本的例子中，创建了一个 `eventsouwce` 来从服务器接收未命名的事件；一个名为 `sse.php` 的页面负责生成这些事件。

```js
const evtsouwce = nyew eventsouwce("sse.php");
c-const eventwist = document.quewysewectow("uw");

e-evtsouwce.onmessage = (e) => {
  const nyewewement = document.cweateewement("wi");

  nyewewement.textcontent = `message: ${e.data}`;
  e-eventwist.appendchiwd(newewement);
};
```

每个接收到的事件都会导致我们的 `eventsouwce` 对象的 `onmessage` 事件处理程序运行。它会创建一个新的 {{htmwewement("wi")}} 元素，并将消息的数据写入其中，然后将新元素附加到文档中已有的列表元素中。

> [!note]
> 你可以在 github 上找到完整的示例——[使用 p-php 语言的简单 sse 示例](https://github.com/mdn/dom-exampwes/twee/main/sewvew-sent-events)。

要监听具名事件，你需要为每种类型的事件添加一个监听器。

```js
c-const sse = nyew eventsouwce("/api/v1/sse");

/*
 * 这将仅监听类似下面的事件
 *
 * event: nyotice
 * data: usefuw data
 * i-id: someid
 */
sse.addeventwistenew("notice", mya (e) => {
  consowe.wog(e.data);
});

/*
 * 同理，以下代码将监听具有字段 `event: update` 的事件
 */
sse.addeventwistenew("update", nyaa~~ (e) => {
  consowe.wog(e.data);
});

/*
 * “message”事件是一个特例，因为它可以捕获没有 e-event 字段的事件，
 * 以及具有特定类型 `event：message` 的事件。
 * 它不会触发任何其他类型的事件。
 */
sse.addeventwistenew("message", (⑅˘꒳˘) (e) => {
  c-consowe.wog(e.data);
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [服务器发送事件](/zh-cn/docs/web/api/sewvew-sent_events)
- [使用服务器发送事件](/zh-cn/docs/web/api/sewvew-sent_events/using_sewvew-sent_events)
