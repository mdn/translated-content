---
title: Channel Messaging API
slug: Web/API/Channel_Messaging_API
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{DefaultAPISidebar("Channel Messaging API")}} {{AvailableInWorkers}}

**Channel Messaging API** 允許兩個分別運行於不同瀏覽上下文且附加至同一文件的腳本（例如，兩個 IFrame，或主文件與一個 IFrame，兩個透過 {{domxref("SharedWorker")}} 的文件，或兩個 worker）直接進行通訊，透過雙向通道（或管道）在兩端的埠之間傳遞訊息。

## 概念與使用方式

可以使用 {{domxref("MessageChannel.MessageChannel", "MessageChannel()")}} 建構子來建立一個訊息通道。一旦建立後，通道的兩個埠可以透過 {{domxref("MessageChannel.port1")}} 和 {{domxref("MessageChannel.port2")}} 屬性存取（這兩者都會回傳 {{domxref("MessagePort")}} 物件）。建立通道的應用程式使用 `port1`，而另一端的應用程式使用 `port2`——你可以向 `port2` 發送訊息，並使用 {{domxref("window.postMessage")}} 傳遞兩個參數（要發送的訊息以及要轉移所有權的物件，在此情況下為埠本身）將埠轉移到另一個瀏覽上下文。

當這些可轉移物件被轉移後，它們在先前所屬的上下文中將無法再使用。例如一個埠，一旦被傳送，在原本的上下文中將無法再使用。

另一個瀏覽上下文可以使用 {{domxref("MessagePort.message_event", "onmessage")}} 監聽訊息，並透過事件的 `data` 屬性抓取訊息的內容。然後，你可以使用 {{domxref("MessagePort.postMessage")}} 回應，將訊息傳回原始文件。

當你想停止透過通道傳送訊息時，可以調用 {{domxref("MessagePort.close")}} 關閉埠。

在[使用通道訊息](/zh-TW/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)中了解更多有關如何使用此 API 的資訊。

## 介面

- {{domxref("MessageChannel")}}
  - : 建立一個新的訊息通道以傳送訊息。
- {{domxref("MessagePort")}}
  - : 控制訊息通道上的埠，允許從一個埠發送訊息並監聽另一個埠接收訊息。

## 範例

- 我們在 GitHub 上發布了一個[通道訊息基本範例](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic)（[也可以線上運行](https://mdn.github.io/dom-examples/channel-messaging-basic/)），展示了一個頁面與嵌入的 {{htmlelement("iframe")}} 之間進行單一訊息傳遞的簡單範例。
- 你還可以查看[多訊息範例](https://github.com/mdn/dom-examples/tree/main/channel-messaging-multimessage)（[線上運行](https://mdn.github.io/dom-examples/channel-messaging-multimessage/)），展示了一個稍微複雜的設置，可以在主頁面與 IFrame 之間傳送多個訊息。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用通道訊息](/zh-TW/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
- [Web Worker API](/zh-TW/docs/Web/API/Web_Workers_API)
- [Broadcast Channel API](/zh-TW/docs/Web/API/Broadcast_Channel_API)
