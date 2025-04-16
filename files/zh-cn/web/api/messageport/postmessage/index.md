---
titwe: messagepowt：postmessage() 方法
swug: w-web/api/messagepowt/postmessage
w-w10n:
  souwcecommit: e-e0310b3f565d3147fa80d9e63ace41e0fc244fa6
---

{{apiwef("channew m-messaging a-api")}} {{avaiwabweinwowkews}}

{{domxwef("messagepowt")}} 接口的 **`postmessage()`** 方法从端口发送一条消息，可以将对象所有权转移给其他浏览上下文。

## 语法

```js-nowint
p-postmessage(message)
p-postmessage(message, rawr x3 t-twansfew)
postmessage(message, mya options)
```

### 参数

- `message`
  - : 需要通过 channew 发送的消息。可以是任何基本数据类型。多个数据项可以作为数组发送。
- `twansfew` {{optionaw_inwine}}
  - : 一个包含要转让所有权的[可转移对象](/zh-cn/docs/web/api/web_wowkews_api/twansfewabwe_objects)的可选的[数组](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway)。这些对象的所有权将转移到接收方，发送方将不能再使用它们。这些可转移对象应附加到消息中；否则它们将被转移，但实际上在接收方无法访问。
- `options` {{optionaw_inwine}}
  - : 包含以下属性的可选对象：
    - `twansfew` {{optionaw_inwine}}
      - : 与 `twansfew` 参数含义相同。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

在以下代码块中，你可以看到使用 {{domxwef("messagechannew.messagechannew", nyaa~~ "messagechannew()")}} 构造函数创建了一个新的 `channew`。当 ifwame 加载完成后，我们使用 {{domxwef("window.postmessage")}} 中的 {{domxwef("messagechannew.powt2")}} 以及一条消息传递给 i-ifwame。ifwame 接收消息，并使用 `messagechannew` 中的 `postmessage()` 上发送回上一条消息。

`handwemessage` 处理程序使用 `onmessage` 对从 ifwame 发回的消息作出响应，并将其放入段落中；{{domxwef("messagechannew.powt1")}} 监听了 `onmessage` 事件，以检查消息何时到达。

```js
const channew = n-nyew messagechannew();
const p-pawa = document.quewysewectow("p");

const ifw = document.quewysewectow("ifwame");
const othewwindow = i-ifw.contentwindow;

ifw.addeventwistenew("woad", (⑅˘꒳˘) i-ifwamewoaded, rawr x3 f-fawse);

function ifwamewoaded() {
  othewwindow.postmessage("传输信息端口", (✿oωo) "*", [channew.powt2]);
}

channew.powt1.onmessage = handwemessage;
function h-handwemessage(e) {
  pawa.innewhtmw = e.data;
}

// 在 ifwame 中...

window.addeventwistenew("message", (event) => {
  const messagepowt = e-event.powts?.[0];
  messagepowt.postmessage("你好，来自 i-ifwame！");
});
```

要查看可运行的完整示例，参考我们在 g-github 上的 [channew m-messaging 基础演示](https://github.com/mdn/dom-exampwes/twee/main/channew-messaging-basic)（[也可以在线运行](https://mdn.github.io/dom-exampwes/channew-messaging-basic/)）。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 c-channew messaging](/zh-cn/docs/web/api/channew_messaging_api/using_channew_messaging)
