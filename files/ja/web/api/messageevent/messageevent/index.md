---
title: MessageEvent()
slug: Web/API/MessageEvent/MessageEvent
l10n:
  sourceCommit: b7556b71e1fc3e89057671b372871e9f33d3f0b8
---

{{APIRef("HTML DOM")}}

**`MessageEvent()`** コンストラクターは新しい {{domxref("MessageEvent")}} オブジェクトのインスタンスを作成します。

## 構文

```js
new MessageEvent(type);
new MessageEvent(type, options);
```

### 引数

- `type`
  - : 文字列で、このイベントの名前を示します。
    大文字と小文字を区別し、ブラウザーは常に `message` を設定します。
- `options` {{optional_inline}}
  - : _{{domxref("Event/Event", "Event()")}} で定義されたプロパティに加え_、以下のプロパティを持つことができるオブジェクトです。
    - `data` {{optional_inline}}
      - : MessageEvent に含めたいデータ。
        これは任意のデータ型であり、指定しない場合は既定で `null` になります。
    - `origin` {{optional_inline}}
      - : 文字列で、メッセージの発信元を表します。
        指定しなかった場合の既定値は空文字列 ("") です。
    - `lastEventId` {{optional_inline}}
      - : 文字列で、このイベントの一意な ID を表します。
        指定しなかった場合の既定値は空文字列 ("") です。
    - `source` {{optional_inline}}
      - : メッセージの送信元を表す `MessageEventSource` （{{domxref("Window")}}、{{domxref("MessagePort")}}、{{domxref("ServiceWorker")}} の何れかのオブジェクト）を指定します。設定されていない場合の既定値は `null` です。
    - `ports` {{optional_inline}}
      - : {{domxref("MessagePort")}} オブジェクトの配列で、メッセージが（チャンネルメッセージングや共有ワーカーにメッセージを送信する場合など、適切な場合に）送信されるチャンネルに関連するポートを表します。
        指定しない場合の既定値は空の配列 (`[]`) になります。

## 返値

新しい {{domxref("MessageEvent")}} オブジェクトです。

## 例

```js
const myMessage = new MessageEvent("message", {
  data: "hello",
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ExtendableMessageEvent")}} — このインターフェイスに似ていますが、もっと柔軟性が必要なインターフェイスで使用されます。
