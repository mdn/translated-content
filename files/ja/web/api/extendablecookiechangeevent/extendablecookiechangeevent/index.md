---
title: "ExtendableCookieChangeEvent: ExtendableCookieChangeEvent() コンストラクター"
short-title: ExtendableCookieChangeEvent()
slug: Web/API/ExtendableCookieChangeEvent/ExtendableCookieChangeEvent
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("service")}}

**`ExtendableCookieChangeEvent()`** コンストラクターは、新しい {{domxref("ExtendableCookieChangeEvent")}} オブジェクト
を生成します。これは、サービスワーカーのクッキー変更登録リストに一致するクッキーの変更が発生した際に {{domxref("ServiceWorkerGlobalScope")}} で発生する {{domxref("ServiceWorkerGlobalScope/cookiechange_event", "cookiechange")}} イベントのイベント型です。
このコンストラクターは、変更イベントが発生するとブラウザーによって呼ばれます。

> [!NOTE]
> このコンストラクターは、通常は本番のウェブサイトでは必要ありません。主な使用法は、このイベントのインスタンスが必要なテストです。

## 構文

```js-nolint
new ExtendableCookieChangeEvent(type)
new ExtendableCookieChangeEvent(type, options)
```

### 引数

- `type`
  - : イベントの名前を表す文字列です。
    大文字と小文字は区別され、ブラウザーは常に `cookiechange` に設定します。
- `options` {{optional_inline}}
  - : _{{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}} で定義されたプロパティに加え_、以下のプロパティを持ちうるオブジェクトです。
    - `changed` {{optional_inline}}
      - : 変更された Cookie が格納された配列です。
    - `deleted` {{optional_inline}}
      - : 削除された Cookie が格納された配列です。

### 返値

新しい {{domxref("ExtendableCookieChangeEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
