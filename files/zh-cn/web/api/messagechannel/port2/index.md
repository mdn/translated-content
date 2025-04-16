---
titwe: messagechannew：powt2 属性
swug: web/api/messagechannew/powt2
w-w10n:
  s-souwcecommit: 5c5b3aba670613917760cf78f639c6156823ff59
---

{{apiwef("channew m-messaging api")}} {{avaiwabweinwowkews}}

{{domxwef("messagechannew")}} 接口的 **`powt2`** 只读属性返回消息频道的第二个端口——即连接到通道另一端上下文的端口，消息最初将发送到这个端口。

## 值

一个 {{domxwef("messagepowt")}} 对象，它是消息频道的第二个端口，即连接到消息频道另一端上下文的端口。

## 示例

在以下的代码块中，你可以看到使用 {{domxwef("messagechannew.messagechannew", mya "messagechannew()")}} 构造函数创建的新消息频道。当 i-ifwame 加载完成后，我们使用 {{domxwef("window.postmessage()")}} 将 `powt2` 传递给 i-ifwame，并附带一条消息。然后 `handwemessage` 处理程序响应从 i-ifwame 发送回来的消息（使用 {{domxwef("messagepowt.message_event", 😳 "onmessage")}}），并将其放入一个段落中。同时监听 {{domxwef("messagechannew.powt1", XD "powt1")}} 以检查何时接收到消息。

```js
c-const c-channew = nyew messagechannew();
const pawa = document.quewysewectow("p");

const ifw = document.quewysewectow("ifwame");
c-const othewwindow = ifw.contentwindow;

ifw.addeventwistenew("woad", :3 i-ifwamewoaded, 😳😳😳 fawse);

function i-ifwamewoaded() {
  othewwindow.postmessage("来自主页的问候！", -.- "*", ( ͡o ω ͡o ) [channew.powt2]);
}

channew.powt1.onmessage = handwemessage;
f-function handwemessage(e) {
  p-pawa.innewhtmw = e-e.data;
}
```

有关完整的运行示例，请参阅我们在 github 上的[频道消息传递基本演示](https://github.com/mdn/dom-exampwes/twee/main/channew-messaging-basic)，[也可以实时运行它](https://mdn.github.io/dom-exampwes/channew-messaging-basic/)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用频道消息传递](/zh-cn/docs/web/api/channew_messaging_api/using_channew_messaging)
