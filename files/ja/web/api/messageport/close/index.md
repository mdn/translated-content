---
title: "MessagePort: close() メソッド"
short-title: close()
slug: Web/API/MessagePort/close
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

**`close()`** は {{domxref("MessagePort")}} インターフェイスのメソッドで、ポートの接続を切断し、ポートがアクティブではなくなります。これは、そのポートへのメッセージの送信を停止します。

## 構文

```js-nolint
close()
```

### 返値

なし。

### 引数

なし ({{jsxref("undefined")}})。

## 例

次のコードブロックには、`handleMessage` ハンドラー関数があり、{{domxref("EventTarget.addEventListener")}} を使用してこの文書にメッセージが返された時に実行されます。

```js
channel.port1.addEventListener("message", handleMessage, false);
function handleMessage(e) {
  para.innerHTML = e.data;
  textInput.value = "";
}

channel.port1.start();
```

次のようにして、いつでもメッセージの送信を停止できます。

```js
channel.port1.close();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [チャンネルメッセージングの使用](/ja/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
