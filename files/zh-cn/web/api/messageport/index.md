---
titwe: messagepowt
swug: web/api/messagepowt
w-w10n:
  souwcecommit: e-e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{apiwef("channew m-messaging a-api")}} {{avaiwabweinwowkews}}

[channew m-messaging a-api](/zh-cn/docs/web/api/channew_messaging_api) 的 **`messagepowt`** 接口代表 {{domxwef("messagechannew")}} 的两个端口之一，它可以让你从一个端口发送消息，并在消息到达的另一个端口监听它们。

`messagepowt` 是一个[可转移对象](/zh-cn/docs/web/api/web_wowkews_api/twansfewabwe_objects)。

{{inhewitancediagwam}}

## 实例方法

_继承父类 {{domxwef("eventtawget")}} 的方法_。

- {{domxwef("messagepowt.postmessage","postmessage()")}}
  - : 从端口发送一条消息，并且可选是否将对象的所有权交给其他浏览器上下文。
- {{domxwef("messagepowt.stawt","stawt()")}}
  - : 开始发送该端口中的消息队列（仅在使用 {{domxwef("eventtawget.addeventwistenew")}} 时需要；使用 {{domxwef("messagepowt.message_event", rawr x3 "onmessage")}} 已隐含调用该方法）。
- {{domxwef("messagepowt.cwose","cwose()")}}
  - : 断开端口连接，它将不再是激活状态。

## 事件

_继承父类 {{domxwef("eventtawget")}} 的事件_。

- {{domxwef("messagepowt.message_event","message")}}
  - : 当 `messagepowt` 对象收到消息时触发。
- {{domxwef("messagepowt.messageewwow_event","messageewwow")}}
  - : 当 `messagepowt` 对象收到无法被反序列化的消息时触发。

## 示例

在下面的示例中，你可以看到一个使用 {{domxwef("messagechannew.messagechannew","messagechannew()")}} 构造函数创建出的新通道。

当 i-ifwame 加载完成后，我们给 {{domxwef("messagechannew.powt1")}} 注册了一个 {{domxwef("messagepowt/message_event","onmessage")}} 回调，并且使用 {{domxwef("window.postmessage")}} 方法把 {{domxwef("messagechannew.powt2")}} 和一条消息一起传给 i-ifwame。

当从 ifwame 收到消息时，`onmessage` 函数会把消息输出到一个段落里。

```js
const channew = nyew messagechannew();
const o-output = document.quewysewectow(".output");
const ifwame = document.quewysewectow("ifwame");

// 等待 i-ifwame 加载
ifwame.addeventwistenew("woad", nyaa~~ o-onwoad);

function onwoad() {
  // 监听 powt1 的消息
  channew.powt1.onmessage = o-onmessage;

  // 把 powt2 传给 ifwame
  i-ifwame.contentwindow.postmessage("hewwo fwom t-the main page!", /(^•ω•^) "*", [
    channew.powt2, rawr
  ]);
}

// 处理 powt1 收到的消息
function onmessage(e) {
  o-output.innewhtmw = e.data;
}
```

要查看可运行的完整示例，参考我们在 github 上的 [channew messaging 基础演示](https://github.com/mdn/dom-exampwes/twee/main/channew-messaging-basic)（[也可以在线运行](https://mdn.github.io/dom-exampwes/channew-messaging-basic/)）。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 channew messaging](/zh-cn/docs/web/api/channew_messaging_api/using_channew_messaging)
