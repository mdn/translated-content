---
title: CloseEvent()
slug: Web/API/CloseEvent/CloseEvent
tags:
  - API
  - CloseEvent
  - コンストラクター
  - リファレンス
browser-compat: api.CloseEvent.CloseEvent
translation_of: Web/API/CloseEvent/CloseEvent
---
{{APIRef("Websockets API")}}

**`CloseEvent()`** コンストラクターは新しい {{domxref("CloseEvent")}} オブジェクトを作成します。

## 構文

```js
new CloseEvent(typeArg);
new CloseEvent(typeArg, closeEventInit);
```

### 値

- `typeArg`
  - : {{domxref("DOMString")}} で、このイベントの名前を表します。
- `closeEventInit` {{optional_inline}}

  - : `CloseEventInit` 辞書で、以下のフィールドがあります。

    - `"wasClean"`: オプションで既定値は `false` です。論理型であり、接続がきれいに閉じたかどうかを示します。
    - `"code"`: オプションで既定値は `0` です。 `unsigned short` 型で、サーバーから送られる接続クローズコードです。
    - `"reason"`: オプションで既定値は `''` です。 {{domxref("DOMString")}} 型で、サーバーが接続を閉じる理由を人間が理解できる形で表したものです。

    > **Note:** `CloseEventInit` 辞書は {{domxref("Event.Event", "EventInit")}} 辞書のフィールドも受け入れます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CloseEvent")}}: 作成するオブジェクトのインターフェイス。
