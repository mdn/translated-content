---
title: MessagePort.start()
slug: Web/API/MessagePort/start
---

{{APIRef("HTML DOM")}}

{{domxref("MessagePort")}} インターフェイスの **`start()`** メソッドは、ポート上のキューに置かれたメッセージの送信を開始します。このメソッドは、{{domxref("EventTarget.addEventListener")}} を使用する場合のみ必要になります。{{domxref("MessagePort.onmessage")}} を使用する場合は暗黙に実行されます。

{{AvailableInWorkers}}

## 構文

```
port.start()
```

### 戻り値

無効。

### 引数

なし。

## 例

次のコードブロックには、`handleMessage` ハンドラ関数があり、`onmessage` を使用して、メッセージがこのドキュメントに送り返された時に実行されます:

```js
channel.port1.onmessage = handleMessage;
function handleMessage(e) {
  para.innerHTML = e.data;
}
```

これを行うもう一つの方法は、{{domxref("EventTarget.addEventListener")}} を使用します。しかし、このメソッドが使用された場合、明示的に `start()` を呼び出してメッセージの送信を開始する必要があります:

```js
channel.port1.addEventListener("message", handleMessage, false);
function handleMessage(e) {
  para.innerHTML = e.data;
  textInput.value = "";
}

channel.port1.start();
```

## 仕様

{{Specifications}}

## ブラウザの実装状況

{{Compat("api.MessagePort.start")}}

## 関連情報

- [Using channel messaging](/ja/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
