---
title: BackgroundFetchUpdateUIEvent()
slug: Web/API/BackgroundFetchUpdateUIEvent/BackgroundFetchUpdateUIEvent
l10n:
  sourceCommit: 9ad07c43f42e14278a4040fd554af33699aea632
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

コンストラクター **`BackgroundFetchUpdateUIEvent()`** は新しく {{domxref("BackgroundFetchUpdateUIEvent")}} オブジェクトを生成します。 このコンストラクターは通常、使用されることはありません。なぜなら、これらのオブジェクトはブラウザーによって自動で生成され、バックグラウンドのフェッチイベントのコールバックに渡されるからです。

## 構文

```js-nolint
new BackgroundFetchEvent(type, options)
```

### 引数

- `type`
  - : イベント名の文字列。
    大文字と小文字は区別されます。ブラウザーはこれを `backgroundfetchsuccess` または `backgroundfetchfail` に設定します。
- `options`
  - : _{{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}} で定義されたプロパティに加えて_、下記のプロパティを持つオブジェクト。
    - `registration`
      - : {{domxref("BackgroundFetchRegistration")}} オブジェクト。

### 返値

新しく生成された {{domxref("BackgroundFetchUpdateUIEvent")}} オブジェクト。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
