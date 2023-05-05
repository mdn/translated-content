---
title: PushEvent()
slug: Web/API/PushEvent/PushEvent
l10n:
  sourceCommit: 2b8f5d9a29f00aea5d2edfa78d1fb90c51752858
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
  data : 'Some sample text'
}

const myPushEvent = new PushEvent('push', dataInit);

myPushEvent.data.text(); // 'Some sample text' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [プッシュ API](/ja/docs/Web/API/Push_API)
- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
