---
title: "ExtendableCookieChangeEvent: ExtendableCookieChangeEvent() コンストラクター"
slug: Web/API/ExtendableCookieChangeEvent/ExtendableCookieChangeEvent
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

**`ExtendableCookieChangeEvent()`** コンストラクターは、{{domxref("ServiceWorkerRegistration/cookiechange_event", "ServiceWorkerRegistration.oncookiechange()")}} に渡されるイベント型である新しい {{domxref("ExtendableCookieChangeEvent")}} オブジェクトを生成します。このコンストラクターは、変更イベントが発生するとブラウザーによって呼ばれます。

> [!NOTE]
> このコンストラクターは、通常は製品のウェブサイトでは必要ありません。主な使用法は、このイベントのインスタンスが必要なテストです。

## 構文

```js-nolint
new ExtendableCookieChangeEvent(type)
new ExtendableCookieChangeEvent(type, options)
```

### 引数

- `type`
  - : イベントの名前を表す文字列です。大文字と小文字は区別され、ブラウザーは常に `cookiechange` に設定します。
- `options` {{optional_inline}}
  - : _{{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}} で定義されたプロパティに加え_、以下のプロパティを持ちうるオブジェクトです。
    - `changed`
      - : 変更された Cookie が格納された配列です。
    - `deleted`
      - : 削除された Cookie が格納された配列です。

### 返値

新しい {{domxref("ExtendableCookieChangeEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
