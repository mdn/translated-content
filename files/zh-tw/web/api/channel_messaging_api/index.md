---
title: Channel Messaging API
slug: Web/API/Channel_Messaging_API
---

{{DefaultAPISidebar("Channel Messaging API")}}

Channel Messaging API 讓同屬一份文件不同瀏覽環境的兩份程式腳本 (如兩個 IFrame、或主頁面和 IFrame、文件和 {{domxref("SharedWorker")}}、或兩個 worker)，也能夠經由雙向 channel (通道) 兩端的 port (連接阜) 直接傳遞訊息互相溝通。

{{AvailableInWorkers}}

## Channel 訊息概念與使用情境

{{domxref("MessageChannel.MessageChannel", "MessageChannel()")}} 建構子產生 channel， 一但生成了，便可以存取 channel 兩端的 port: {{domxref("MessageChannel.port1")}} 和 {{domxref("MessageChannel.port2")}}，這兩個屬性會回傳 domxref("MessagePort")}} objects.)。建立 channel 的 app 使用 port1，另一端用 port2，利用 {{domxref("window.postMessage")}} 方法帶入參數，向 port2 傳送訊息以及移轉物件 (這裡也就是只 port)。

一但可移轉物件被移轉後，前任擁有者便失去所有權，例如當 port 移轉出去後，原本持有該 port 的環境便不能再使用之。目前可移轉物件只有 {{domxref("ArrayBuffer")}} 以及 {{domxref("MessagePort")}}。

另一端的瀏覽環境則藉由 {{domxref("MessagePort.onmessage")}} 監聽訊息、從訊息事件物件的 data 屬性擷取訊息資料，然後再呼叫 {{domxref("MessagePort.postMessage")}} 回傳訊息。

如果想關閉訊息 channel，則呼叫 {{domxref("MessagePort.close")}}。

更多 API 使用細節請見 [Using channel messaging](/zh-TW/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)。

## Channel 訊息介面

- {{domxref("MessageChannel")}}
  - : 生成一個新的 message channel。
- {{domxref("MessagePort")}}
  - : 控制 port，用來傳送和監聽訊息。
- {{domxref("PortCollection")}}
  - : `MessagePort`s 陣列，實驗性質方案；用來同時廣播到多個訊息 port。

## 範例

- Github 上有 [channel messaging basic demo](https://github.com/mdn/channel-messaging-basic-demo) ([run it live too](https://mdn.github.io/channel-messaging-basic-demo/))，一個簡單示範主頁和 {{htmlelement("iframe")}} 間的訊息溝通。
- 還有 [multimessaging demo](https://github.com/mdn/channel-messaging-multimessage) ([run this live](https://mdn.github.io/channel-messaging-multimessage/))，較為複雜的例子。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 延伸閱讀

- [Using channel messaging](/zh-TW/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
- [Web Workers API](/zh-TW/docs/Web/API/Web_Workers_API)
- [Broadcast Channel API](/zh-TW/docs/Web/API/Broadcast_Channel_API)
