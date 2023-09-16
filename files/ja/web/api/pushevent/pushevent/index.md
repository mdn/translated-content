---
title: "PushEvent: PushEvent() コンストラクター"
short-title: PushEvent()
slug: Web/API/PushEvent/PushEvent
l10n:
  sourceCommit: bb65fd3482d5c3d32d1c56e5880600b1299f7669
---

{{APIRef("Push API")}}

**`PushEvent()`** コンストラクターは、新しい {{domxref("PushEvent")}} オブジェクトを生成します。このコンストラクターは、サービスワーカーにのみ公開されていることに注意してください。

## 構文

```js-nolint
new PushEvent(type)
new PushEvent(type, options)
```

## 引数

- `type`
  - : 文字列で、イベントの名前を示します。
    大文字小文字の区別があり、ブラウザーは `push` または `pushsubscriptionchange` に設定します。
- `options` {{optional_inline}}
  - : オブジェクトで、 _{{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}} で定義されているプロパティに加えて_、以下のプロパティを指定することができます。
    - `data`
      - : `PushEvent` に格納したいデータ（もしあれば）。コンストラクターが呼び出されると、結果オブジェクトの {{domxref("PushEvent.data")}} プロパティには、これらのバイト列を格納した新しい {{domxref("PushMessageData")}} オブジェクトが設定されます。

### 返値

新しい {{domxref("PushEvent")}} オブジェクトです。

## 例

```js
const dataInit = {
  data: "Some sample text",
};

const myPushEvent = new PushEvent("push", dataInit);

myPushEvent.data.text(); // 'Some sample text' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [プッシュ API](/ja/docs/Web/API/Push_API)
- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
