---
title: "CookieChangeEvent: CookieChangeEvent() コンストラクター"
slug: Web/API/CookieChangeEvent/CookieChangeEvent
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{SeeCompatTable}}

**`CookieChangeEvent()`** コンストラクターは、{{domxref("CookieStore/change_event", "CookieStore.onchange()")}} に渡されるイベント型である新しい {{domxref("CookieChangeEvent")}} オブジェクトを生成します。このコンストラクターは、変更イベントが発生するとブラウザーにより呼ばれます。

> [!NOTE]
> このコンストラクターは、通常は製品のウェブサイトでは必要ありません。主な使用法は、このイベントのインスタンスが必要なテストです。

## 構文

```js-nolint
new CookieChangeEvent(type)
new CookieChangeEvent(type, options)
```

### 引数

- `type`
  - : イベントの名前を表す文字列です。大文字と小文字は区別され、ブラウザーは常に `cookiechange` に設定します。
- `options` {{Optional_Inline}}
  - : _{{domxref("Event/Event", "Event()")}} で定義されたプロパティに加え_、以下のプロパティを持ちうるオブジェクトです。
    - `changed`
      - : 変更された Cookie が格納された配列です。
    - `deleted`
      - : 削除された Cookie が格納された配列です。

### 返値

新しい {{domxref("CookieChangeEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
