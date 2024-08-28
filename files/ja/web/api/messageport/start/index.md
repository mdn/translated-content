---
title: "MessagePort: start() メソッド"
short-title: start()
slug: Web/API/MessagePort/start
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

**`start()`** は {{domxref("MessagePort")}} インターフェイスのメソッドで、ポート上のキューに置かれたメッセージの送信を開始します。このメソッドは、{{domxref("EventTarget.addEventListener")}} を使用する場合のみ必要になります。{{domxref("MessagePort.message_event")}} を使用する場合は暗黙に実行されます。

## 構文

```js-nolint
start()
```

### 返値

なし。

### 引数

なし ({{jsxref("undefined")}})。

## 例

次のコードブロックには、`handleMessage` ハンドラー関数があり、`onmessage` を使用して、メッセージがこのドキュメントに送り返された時に実行されます:

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [チャンネルメッセージングの使用](/ja/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
