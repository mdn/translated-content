---
title: "CookieChangeEvent: CookieChangeEvent() コンストラクター"
short-title: CookieChangeEvent()
slug: Web/API/CookieChangeEvent/CookieChangeEvent
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

**`CookieChangeEvent()`** コンストラクターは、新しい {{domxref("CookieChangeEvent")}} オブジェクトを生成します。これは {{domxref("CookieStore")}} で発生する {{domxref("CookieStore/change_event", "change")}} イベントのイベント型です。
このコンストラクターは、変更イベントが発生した際にブラウザーによって呼び出されます。

> [!NOTE]
> このコンストラクターは、通常は本番のウェブサイトでは必要ありません。主な使用法は、このイベントのインスタンスが必要なテストです。

## 構文

```js-nolint
new CookieChangeEvent(type)
new CookieChangeEvent(type, options)
```

### 引数

- `type`
  - : イベントの名前を表す文字列です。大文字と小文字は区別され、ブラウザーは常に `change` に設定します。
- `options` {{Optional_Inline}}
  - : _{{domxref("Event/Event", "Event()")}} で定義されたプロパティに加え_、以下のプロパティを持ちうるオブジェクトです。
    - `changed` {{Optional_Inline}}
      - : 変更された Cookie が格納された配列です。
    - `deleted` {{Optional_Inline}}
      - : 削除された Cookie が格納された配列です。

### 返値

新しい {{domxref("CookieChangeEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
