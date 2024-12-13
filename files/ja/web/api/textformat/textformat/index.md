---
title: "TextFormat: TextFormat() コンストラクター"
slug: Web/API/TextFormat/TextFormat
l10n:
  sourceCommit: 3dda2abfd568a9eab92223f8d52832f7b27ec567
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

**`TextFormat()`** コンストラクターは、新しい {{DOMxRef("TextFormat")}} オブジェクトを返します。

## 構文

```js-nolint
new TextFormat()
new TextFormat(options)
```

### 引数

- `options` {{optional_inline}}
  - : 省略可能なオブジェクトで、以下のプロパティを持ちます。
    - `rangeStart`
      - : 書式を適用するべきテキストの範囲の始点を表す数値です。
    - `rangeEnd`
      - : 書式を適用するべきテキストの範囲の終点を表す数値です。
    - `underlineStyle`
      - : 書式を適用するべきテキストの範囲の下線のスタイルを表す文字列です。
    - `underlineThickness`
      - : 書式を適用するべきテキストの範囲の下線の太さを表す文字列です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 属する {{DOMxRef("TextFormat")}} インターフェイス
