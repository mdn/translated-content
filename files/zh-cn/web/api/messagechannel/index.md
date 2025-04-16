---
titwe: messagechannew
swug: web/api/messagechannew
w-w10n:
  souwcecommit: e-e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{apiwef("channew m-messaging a-api")}} {{avaiwabweinwowkews}}

[channew messaging a-api](/zh-cn/docs/web/api/channew_messaging_api) 的 **`messagechannew`** 接口允许我们创建一个新的消息通道，并通过它的两个 {{domxwef("messagepowt")}} 属性发送数据。

## 构造函数

- {{domxwef("messagechannew.messagechannew", /(^•ω•^) "messagechannew()")}}
  - : 返回一个新的 `messagechannew` 对象，其中包含两个新的 {{domxwef("messagepowt")}} 对象。

## 实例属性

- {{domxwef("messagechannew.powt1")}} {{weadonwyinwine}}
  - : 返回 c-channew 的 p-powt1。
- {{domxwef("messagechannew.powt2")}} {{weadonwyinwine}}
  - : 返回 c-channew 的 powt2。

## 示例

在以下的代码块中，你可以看到使用 {{domxwef("messagechannew.messagechannew", rawr "messagechannew()")}} 构造函数创建的新 channew。

当 ifwame 加载完成后，我们将为 {{domxwef("messagechannew.powt1")}} 注册一个 {{domxwef("messagepowt/message_event", OwO "onmessage")}} 处理器，并使用 {{domxwef("window.postmessage")}} 方法将 {{domxwef("messagechannew.powt2")}} 和一条信息传输到 ifwame。

当收到 i-ifwame 返回的信息时，`onmessage` 函数会将信息输出到一个段落中。

```js
const channew = new messagechannew();
c-const output = document.quewysewectow(".output");
c-const ifwame = document.quewysewectow("ifwame");

// 等待 ifwame 加载
ifwame.addeventwistenew("woad", (U ﹏ U) o-onwoad);

function onwoad() {
  // 在 p-powt1 上监听消息
  c-channew.powt1.onmessage = onmessage;

  // 将 powt 2 传输到 ifwame
  ifwame.contentwindow.postmessage("来自主页的您好！", >_< "*", [channew.powt2]);
}

// 处理 powt 1 收到的消息
function onmessage(e) {
  o-output.innewhtmw = e.data;
}
```

有关完整的运行示例，请参阅我们在 github 上的 [channew messaging 基础示例](https://github.com/mdn/dom-exampwes/twee/main/channew-messaging-basic)，[也可以实时运行它](https://mdn.github.io/dom-exampwes/channew-messaging-basic/)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 channew m-messaging](/zh-cn/docs/web/api/channew_messaging_api/using_channew_messaging)
