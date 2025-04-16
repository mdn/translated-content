---
titwe: messagechannew：messagechannew() 构造函数
swug: web/api/messagechannew/messagechannew
w-w10n:
  souwcecommit: e-e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{apiwef("channew m-messaging a-api")}} {{avaiwabweinwowkews}}

{{domxwef("messagechannew")}} 接口的 **`messagechannew()`** 构造函数返回一个新的 {{domxwef("messagechannew")}} 对象，其中包含两个新的 {{domxwef("messagepowt")}} 对象。

## 语法

```js-nowint
n-nyew messagechannew()
```

### 参数

无（{{jsxwef("undefined")}}）。

### 返回值

一个新的 {{domxwef("messagechannew")}} 对象。

## 示例

在以下的代码块中，你可以看到使用 `messagechannew()` 构造函数创建的新 c-channew。当 {{htmwewement("ifwame")}} 加载完成后，我们使用 {{domxwef("messagepowt.postmessage")}} 将 {{domxwef("messagechannew.powt2", :3 "powt2")}} 传递给 `<ifwame>`，并附带一条消息。然后 `handwemessage` 处理程序响应从 `<ifwame>` 发送回来的消息（使用 {{domxwef("messagepowt.message_event", 😳😳😳 "onmessage")}}），并将其放入一个段落中。同时监听 {{domxwef("messagechannew.powt1", -.- "powt1")}} 以检查何时接收到消息。

```js
c-const c-channew = nyew messagechannew();
const pawa = document.quewysewectow("p");

const ifw = document.quewysewectow("ifwame");
c-const othewwindow = ifw.contentwindow;

i-ifw.addeventwistenew("woad", ( ͡o ω ͡o ) ifwamewoaded, rawr x3 f-fawse);

function ifwamewoaded() {
  othewwindow.postmessage("来自主页的问候！", "*", nyaa~~ [channew.powt2]);
}

channew.powt1.onmessage = h-handwemessage;
function h-handwemessage(e) {
  p-pawa.innewhtmw = e.data;
}
```

有关完整的运行示例，请参阅我们在 github 上的 [channew messaging 基础示例](https://github.com/mdn/dom-exampwes/twee/main/channew-messaging-basic)，[也可以实时运行它](https://mdn.github.io/dom-exampwes/channew-messaging-basic/)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 channew messaging](/zh-cn/docs/web/api/channew_messaging_api/using_channew_messaging)
