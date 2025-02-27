---
title: 使用频道传递消息
slug: Web/API/Channel_Messaging_API/Using_channel_messaging
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{DefaultAPISidebar("Channel Messaging API")}} {{AvailableInWorkers}}

[Channel Messaging API](/zh-CN/docs/Web/API/Channel_Messaging_API) 可以让两个在附加到同一文档的不同浏览上下文中运行的单独脚本（比如：两个 {{HTMLElement("iframe")}} 元素，或者主文档和一个 {{HTMLElement("iframe")}}，或者使用同一个 {{domxref("SharedWorker")}} 的两个文档）直接通信，通过两端都有端口的双向频道（或管道）相互传递消息。

在本文中，我们将探索这项技术的基本用法。

## 用例

频道消息传递在这样的场景中特别有用：假如你有一个社交站点，它在主界面中通过 iframe 内嵌了来自其他站点的内容，比如游戏，通讯录或者一个音乐播放器，有着个性化的音乐选择。当这些内容作为独立的单元时，一切都是 OK 的，但是当你想在主站点和 {{HTMLElement("iframe")}}，或者在不同的 {{HTMLElement("iframe")}} 间交互时，困难就出现了。举例来说，假如你想从主站点向通讯录里添加一个联系人；或者想从游戏里，把最高分加入到个人资料；又或者，希望从音频播放器里，添加新的背景音乐到游戏中？因为浏览器使用的安全模型，使用传统的 Web 技术来做这些事并不容易。你必须去考虑不同的源之间彼此是否信任，以及如何传递消息。

换个角度说，消息频道可以提供一个让你在不同的浏览上下文间传递数据的安全频道。

> [!NOTE]
> 要了解更多信息和想法，规范的[端口作为 Web 上一个对象兼容模型的基础](https://html.spec.whatwg.org/multipage/comms.html#ports-as-the-basis-of-an-object-capability-model-on-the-web)章节值得一读。

## 简单的示例

为了帮助你开始，我们在 Github 上发布了一些演示。一开始可以先看我们的[消息传递基本示例](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic)（[也可以在线运行](https://mdn.github.io/dom-examples/channel-messaging-basic/)），它展示了一个非常简单的消息传递，发生在页面和内嵌 {{htmlelement("iframe")}} 之间。

然后，看看我们的[多条消息传递演示](https://github.com/mdn/dom-examples/tree/main/channel-messaging-multimessage)（[在线运行](https://mdn.github.io/dom-examples/channel-messaging-multimessage/)），它展示了一个稍微复杂一点的例子，可以在主页面和 IFrame 之间发送多条消息。

本文中，我们重点说后面的这个例子。它看起来像是这样：

![演示中“你好，这是我的演示”以五条单独的消息发送。这些消息以项目符号列表的形式显示。](channel-messaging-demo.png)

## 创建频道

在例子的主页面，我们有一个简单的表单，内含一个文本输入框，用来输入要发送到 {{htmlelement("iframe")}} 的消息。我们还有一个段落，我们在稍后将会用它来显示 {{htmlelement("iframe")}} 回传回来的确认消息。

```js
const input = document.getElementById("message-input");
const output = document.getElementById("message-output");
const button = document.querySelector("button");
const iframe = document.querySelector("iframe");

const channel = new MessageChannel();
const port1 = channel.port1;

// 等待 iframe 加载
iframe.addEventListener("load", onLoad);

function onLoad() {
  // 监听按钮点击
  button.addEventListener("click", onClick);

  // 在 port1 监听消息
  port1.onmessage = onMessage;

  // 把 port2 传给 iframe
  iframe.contentWindow.postMessage("init", "*", [channel.port2]);
}

// 当按钮点击时，在 port1 上发送一个消息
function onClick(e) {
  e.preventDefault();
  port1.postMessage(input.value);
}

// 处理 port1 收到的消息
function onMessage(e) {
  output.innerHTML = e.data;
  input.value = "";
}
```

我们从使用 {{domxref( "MessageChannel.MessageChannel","MessageChannel()")}} 构造函数创建了一个消息频道开始。

当 IFrame 加载完成，我们在按钮上注册了 `onclick` 事件处理器，在 {{domxref("MessageChannel.port1")}} 注册了 `onmessage` 事件处理器。最后，我们使用 {{domxref("window.postMessage")}} 方法把 {{domxref("MessageChannel.port2")}} 传递给 IFrame。

让我们更详细地了解一下 `iframe.contentWindow.postMessage` 行的工作原理。它接受三个参数：

1. 被发送的消息。对于一开始的端口传递，这个消息可以是个空字符串，但是在例子里，我们传了 `'init'`。
2. 消息将被发送到的源。`*` 意思是“任何源”。
3. 一个对象，它的所有权会被传递给接受的浏览器上下文。在本例中，我们把 {{domxref("MessageChannel.port2")}} 传给了 IFrame，然后它就可以用于与主页面通信了。

当我们的按钮被点击时，我们阻止了默认的表单提交，然后把输入到输入框里的内容通过 {{domxref("MessageChannel")}} 发送给 IFrame。

## 在 IFrame 里接收端口和消息

在 IFrame 里，我们有下面的 JavaScript：

```js
const list = document.querySelector("ul");
let port2;

// 监听初始的端口传递消息
window.addEventListener("message", initPort);

// 设置传递过来的端口
function initPort(e) {
  port2 = e.ports[0];
  port2.onmessage = onMessage;
}

// 处理 port2 收到的消息
function onMessage(e) {
  const listItem = document.createElement("li");
  listItem.textContent = e.data;
  list.appendChild(listItem);
  port2.postMessage(`IFrame 收到的消息：“${e.data}”`);
}
```

当收到从主页面通过 {{domxref("window.postMessage")}} 方法传来的初始化消息时，我们运行 `initPort` 函数。它会保存传递过来的端口，并且注册了一个 onmessage 事件处理器，每当有消息通过我们的 {{domxref("MessageChannel")}} 传来时，它都会被调用。

当收到从主页面发来的消息时，我们创建一个列表项，并把它插入到这个无序列表中，然后把这个列表项的 {{domxref("Node.textContent","textContent")}} 设置为事件的 `data` 属性（里面包含真正的消息）。

接下来，我们通过在初始化时传递到 IFrame 的 {{domxref("MessageChannel.port2")}} 上调用 {{domxref("MessagePort.postMessage")}} 来使用消息频道将确认消息发送回主页面。

## 在主页面中接收确认消息

回到主页面，我们来一起看看 `onmessage` 事件处理器。

```js
// 处理 port1 上收到的消息
function onMessage(e) {
  output.innerHTML = e.data;
  input.value = "";
}
```

当收到从 IFrame 发来的确认消息，说明原始消息被成功接收时，它把确认消息输出到段落中，并清空输入框，为输入下一个要被发送的消息做准备。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Channel Messaging API](/zh-CN/docs/Web/API/Channel_Messaging_API)
- [Web Workers API](/zh-CN/docs/Web/API/Web_Workers_API)
- [Broadcast Channel API](/zh-CN/docs/Web/API/Broadcast_Channel_API)
