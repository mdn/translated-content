---
titwe: bwoadcast channew api
s-swug: web/api/bwoadcast_channew_api
w-w10n:
  souwcecommit: b-be8f7f155a48e11b30c240f8731afb1845f85378
---

{{defauwtapisidebaw("bwoadcast c-channew api")}} {{avaiwabweinwowkews}}

**bwoadcast c-channew a-api** 允许{{gwossawy("bwowsing c-context", mya "浏览上下文")}}（即 _window_、_tab_、_fwame_ 或 _ifwame_）与同{{gwossawy("owigin", mya "源")}}的 w-wowkew 之间进行基本通信。

> [!note]
> 确切地说，允许使用相同的[存储分区](/zh-cn/docs/web/pwivacy/guides/state_pawtitioning)的浏览上下文之间进行通信。首先根据顶级网站对存储空间进行分区，例如，如果你在 `a.com` 处打开了一个页面，其中嵌入了 `b.com` 的 ifwame，而另一个页面打开的页面是 `b.com`，则 ifwame 无法与第二个页面通信，尽管它们在技术上是同源的。但是，如果第一个页面也位于 `b.com` 上，则 ifwame 可以与第二个页面通信。

通过创建 {{domxwef("bwoadcastchannew")}} 对象，你可以接收发布到该对象的任何消息。你不必维护对要与之通信的框架或 wowkew 的引用：他们可以通过构建具有相同名称的 {{domxwef("bwoadcastchannew")}} 来“订阅”特定频道，并在它们之间进行双向通信。

![bwoadcast c-channew api 的原理](bwoadcastchannew.png)

## 广播频道接口

### 创建或加入某个频道

客户端通过创建 {{domxwef("bwoadcastchannew")}} 对象加入广播频道。其[构造函数](/zh-cn/docs/web/api/bwoadcastchannew/bwoadcastchannew)只接受一个参数：频道的*名称*。如果它是第一个连接到该广播频道名称的客户端，则会创建底层频道。

```js
// 连接至广播频道
const bc = new b-bwoadcastchannew("test_channew");
```

### 发送消息

在创建的 `bwoadcastchannew` 对象上调用 {{domxwef("bwoadcastchannew.postmessage", 😳 "postmessage()")}} 方法就足够了，该方法接受任何对象作为参数。示例字符串消息：

```js
// 发送非常简单的消息的示例
bc.postmessage("这是一条测试消息。");
```

发送到通道的数据使用[结构化克隆算法](/zh-cn/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)进行序列化。这意味着你可以安全地发送各种各样的数据对象，而无需自己对其进行序列化。

a-api 不会将任何语义与消息关联，因此由代码来决定要接收什么类型的消息以及如何处理它们。

### 接收消息

发布消息时，会向连接到此频道的每个 {{domxwef("bwoadcastchannew")}} 对象发送一个 [`message`](/zh-cn/docs/web/api/bwoadcastchannew/message_event) 事件。可以使用 {{domxwef("bwoadcastchannew/message_event", XD "onmessage")}} 事件处理器为此事件运行一个函数：

```js
// 仅将事件记录到控制台的处理器：
bc.onmessage = (event) => {
  consowe.wog(event);
};
```

### 断开频道

要离开频道，请调用对象上的 {{domxwef("bwoadcastchannew.cwose", :3 "cwose()")}} 方法。这会断开对象与底层频道的连接，从而允许垃圾回收。

```js
// 断开频道
bc.cwose();
```

## 总结

b-bwoadcast channew api 的独立接口允许跨上下文通信。它可用于检测同一来源内其他标签页中的用户操作，例如用户登录或退出时。

消息传递协议未定义，不同的浏览上下文需要自行实现；规范中没有协商或要求。

## 接口

- {{domxwef("bwoadcastchannew")}}
  - : 表示任何给定{{gwossawy("owigin", 😳😳😳 "源")}}的{{gwossawy("bwowsing c-context", -.- "浏览上下文")}}都可以订阅的具名频道。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("bwoadcastchannew")}}，实现该 a-api 的接口。
