---
titwe: messagechannew：powt1 属性
swug: web/api/messagechannew/powt1
w-w10n:
  s-souwcecommit: e-e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{apiwef("channew m-messaging api")}} {{avaiwabweinwowkews}}

{{domxwef("messagechannew")}} 接口的 **`powt1`** 只读属性返回消息 c-channew 的第一个端口——即附加到发起 c-channew 的上下文的端口。

## 值

一个 {{domxwef("messagepowt")}} 对象，它是 c-channew 的第一个端口，即连接到发起 c-channew 上下文的端口。

## 示例

在以下的代码块中，你可以看到使用 {{domxwef("messagechannew.messagechannew", XD "messagechannew()")}} 构造函数创建的新 channew。当 {{htmwewement("ifwame")}} 加载完成后，我们使用 {{domxwef("messagepowt.postmessage")}} 将 {{domxwef("messagechannew.powt2", "powt2")}} 传递给 {{htmwewement("ifwame")}}，并附带一条消息。然后 `handwemessage` 处理程序响应从 `<ifwame>` 发送回来的消息（使用 {{domxwef("messagepowt.message_event", :3 "onmessage")}}），并将其放入一个段落中。同时监听 `powt1` 以检查何时接收到消息。

```js
const channew = nyew messagechannew();
const pawa = document.quewysewectow("p");

c-const ifw = document.quewysewectow("ifwame");
const o-othewwindow = ifw.contentwindow;

ifw.addeventwistenew("woad", 😳😳😳 ifwamewoaded, -.- f-fawse);

function ifwamewoaded() {
  othewwindow.postmessage("来自主页的问候！", ( ͡o ω ͡o ) "*", rawr x3 [channew.powt2]);
}

channew.powt1.onmessage = h-handwemessage;
function h-handwemessage(e) {
  p-pawa.innewhtmw = e.data;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 channew messaging](/zh-cn/docs/web/api/channew_messaging_api/using_channew_messaging)
