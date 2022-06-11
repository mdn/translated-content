---
title: MessageEvent()
slug: Web/API/MessageEvent/MessageEvent
tags:
  - API
  - コンストラクター
  - DOM
  - MessageEvent
  - リファレンス
  - messaging
browser-compat: api.MessageEvent.MessageEvent
translation_of: Web/API/MessageEvent/MessageEvent
---
{{APIRef("HTML DOM")}}

**`MessageEvent()`** コンストラクターは新しい {{domxref("MessageEvent")}} オブジェクトのインスタンスを作成します。

## 構文

```js
new MessageEvent(type)
new MessageEvent(type, init)
```

### 引数

- **`type`**
  - : 作成される `MessageEvent` の種類を示す文字列です。
    よくある型の例としては `message`, `messageerror`, `connect` があります。
- **`init`** {{optional_inline}}

  - : 以下のプロパティを持つことができる辞書オブジェクトです。

    - `data`: MessageEvent に含まめたいデータ。
      これは任意のデータ型であり、指定しない場合は既定で `null` になります。
    - `origin`: メッセージの発信元を表す {{domxref("USVString")}} を指定します。指定しない場合の既定値は空文字列 ("") です。
    - `lastEventId`: イベントの一意な ID を表す {{domxref("DOMString")}} です。指定しない場合の既定値は空文字列 ("") です。
    - `source`: メッセージの送信元を表す `MessageEventSource` （{{domxref("WindowProxy")}}, {{domxref("MessagePort")}}, {{domxref("ServiceWorker")}} の何れかのオブジェクト）を指定します。設定されていない場合の既定値は `null` です。
    - `ports`: メッセージが（チャンネルメッセージングや共有ワーカーにメッセージを送信する場合など、適切な場合に）送信されるチャンネルに関連するポートを表す {{domxref("MessagePort")}} オブジェクトの配列です。指定しない場合の既定値は空の配列 (`[]`) になります。

## 例

```js
var myMessage = new MessageEvent('message', {
  data : 'hello'
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ExtendableMessageEvent")}} — このインターフェイスに似ていますが、もっと柔軟性が必要なインターフェイスで使用されます。
