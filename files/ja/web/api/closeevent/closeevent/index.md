---
title: "CloseEvent: CloseEvent() コンストラクター"
slug: Web/API/CloseEvent/CloseEvent
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("Websockets API")}}

**`CloseEvent()`** コンストラクターは新しい {{domxref("CloseEvent")}} オブジェクトを生成します。

## 構文

```js-nolint
new CloseEvent(type)
new CloseEvent(type, options)
```

### 値

- `type`
  - : このイベントの名前を示す文字列です。
    大文字小文字を区別し、ブラウザーは常に `close` を設定します。
- `options` {{optional_inline}}
  - : オブジェクトで、_{{domxref("Event/Event", "Event()")}} で定義されているものに加え_、次のプロパティを持ちます。
    - `wasClean` {{optional_inline}}
      - : 論理値で、接続がきれいに閉じたかどうかを示します。既定値は `false` です。
    - `code` {{optional_inline}}
      - : 整数で、サーバーから送られる接続クローズコードを表します。既定値は `0` です。
    - `reason` {{optional_inline}}
      - : 文字列で、サーバーが接続を閉じる理由を人間が理解できる形で表したものです。既定値は `''` です。

## 返値

新しい {{domxref("CloseEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CloseEvent")}}: 作成するオブジェクトのインターフェイス。
