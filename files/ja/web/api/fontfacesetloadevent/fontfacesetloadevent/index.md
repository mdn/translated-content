---
title: "FontFaceSetLoadEvent: FontFaceSetLoadEvent() コンストラクター"
short-title: FontFaceSetLoadEvent()
slug: Web/API/FontFaceSetLoadEvent/FontFaceSetLoadEvent
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

**`FontFaceSetLoadEvent()`** コンストラクターは、 {{domxref("FontFaceSetLoadEvent")}} オブジェクトを返します。これは {{domxref("FontFaceSet")}} の読み込みのたびに発生します。

## 構文

```js-nolint
new FontFaceSetLoadEvent(type)
new FontFaceSetLoadEvent(type, options)
```

### 引数

- `type`
  - : イベント名の文字列です。
    大文字と小文字が区別され、ブラウザーは常に `loading`、`loadingdone`、`loadingerror` のいずれかに設定します。
- `options` {{optional_inline}}
  - : オブジェクトで、_{{domxref("Event/Event", "Event()")}} で定義されているプロパティに加え_、以下のプロパティを持つことができます。
    - `fontfaces` {{optional_inline}}
      - : {{domxref("FontFace")}} の配列です。既定値は空配列です。

### 返値

新しい {{domxref("FontFaceSetLoadEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
