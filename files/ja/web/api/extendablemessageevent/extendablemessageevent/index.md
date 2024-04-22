---
title: ExtendableMessageEvent()
slug: Web/API/ExtendableMessageEvent/ExtendableMessageEvent
l10n:
  sourceCommit: 5f80944f03f785c729c12ac143cf88a1c12e72cd
---

{{APIRef("Service Workers API")}}

**`ExtendableMessageEvent()`** コンストラクターは、新しい {{domxref("ExtendableMessageEvent")}} オブジェクトのインスタンスを作成します。

## 構文

```js-nolint
new ExtendableMessageEvent(type)
new ExtendableMessageEvent(type, options)
```

### 引数

- `type`
  - : 文字列で、イベントの名前です。
    大文字小文字を区別し、ブラウザーは `messageerror` または `message` を設定します。
- `options` {{optional_inline}}
  - : _{{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}} で定義されたプロパティに加えて_、下記のプロパティを持つオブジェクトです。
    - `data` {{optional_inline}}
      - : イベントのデータです。これはどのデータ型でもかまいません。既定値は `null` です。
    - `origin` {{optional_inline}}
      - : 文字列で、対応するサービスワーカーの環境設定オブジェクトのオリジンを定義します。
        既定値は `""` です。
    - `lastEventId` {{optional_inline}}
      - : 文字列で、イベントソースの最後のイベント ID を定義します。
    - `source` {{optional_inline}}
      - : メッセージを送信した {{domxref("Client")}}、{{domxref("ServiceWorker")}}、{{domxref("MessagePort")}} のいずれかです。
        既定値は `null` です。
    - `ports` {{optional_inline}}
      - : メッセージを送信するチャネルに接続された {{domxref("MessagePort")}} オブジェクトを含む配列です。
        既定値は空の配列です。

### 返値

新しい {{domxref("ExtendableMessageEvent")}} オブジェクトです。

## 例

```js
const options = {
  data: "hello message",
  source: MessagePortReference,
  ports: MessagePortListReference,
};

const myEME = new ExtendableMessageEvent("message", init);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)（英語）
- [ServiceWorker の準備はできていますか？](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- [チャンネルメッセージング](/ja/docs/Web/API/Channel_Messaging_API)
