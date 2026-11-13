---
title: "FontFace: FontFace() コンストラクター"
short-title: FontFace()
slug: Web/API/FontFace/FontFace
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

**`FontFace()`** コンストラクターは、新しい {{domxref("FontFace")}} オブジェクトを構築します。

## 構文

```js-nolint
new FontFace(family, source)
new FontFace(family, source, descriptors)
```

### 引数

- `family`
  - : 要素をスタイル設定する際に、このフォントフェイスと照合するために使用することができるフォントファミリ名を指定します。

    {{cssxref("@font-face")}} の {{cssxref("@font-face/font-family", "font-family")}} 記述子と同じ型の値を取ります。
    この値は、 [`FontFace.family`](/ja/docs/Web/API/FontFace/family) プロパティを使用して読み込んだり設定したりすることもできます。

- `source`
  - : フォントのソースです。
    以下のいずれかにすることができます。
    - フォントフェイスファイルの URL。
    - [`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) または [`TypedArray`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) に入ったバイナリーのフォントフェイスデータ。

- `descriptors` {{optional_inline}}
  - : オブジェクトとして渡すオプションの記述子の集合。
    これは `@font-face` で利用できる任意の記述子を含むことができます。
    - `ascentOverride`
      - : {{cssxref("@font-face/ascent-override")}} で許可されでいる値と共に指定します。
    - `descentOverride`
      - : {{cssxref("@font-face/descent-override")}} で許可されでいる値と共に指定します。
    - `display`
      - : {{cssxref("@font-face/font-display")}} で許可されでいる値と共に指定します。
    - `featureSettings`
      - : {{cssxref("font-feature-settings")}} で許可されでいる値と共に指定します。
    - `lineGapOverride`
      - : {{cssxref("@font-face/line-gap-override")}} で許可されでいる値と共に指定します。
    - `stretch`
      - : {{cssxref("@font-face/font-stretch")}} で許可されでいる値と共に指定します。
    - `style`
      - : {{cssxref("@font-face/font-style")}} で許可されでいる値と共に指定します。
    - `unicodeRange`
      - : {{cssxref("@font-face/unicode-range")}} で許可されでいる値と共に指定します。
    - `variationSettings`
      - : {{cssxref("@font-face/font-variation-settings")}} で許可されでいる値と共に指定します。
    - `weight`
      - : {{cssxref("@font-face/font-weight")}} で許可されでいる値と共に指定します。

### 例外

- `SyntaxError` {{domxref("DOMException")}}
  - : 記述子の文字列が、対応する {{cssxref("@font-face")}} 記述子の文法に照合しないか、指定するバイナリーソースを読み込むことができない場合に発生します。
    このエラーでは {{domxref("FontFace.status")}} が `error` に設定されます。

## 例

```js
async function loadFonts() {
  const font = new FontFace("myfont", "url(myfont.woff)", {
    style: "normal",
    weight: "400",
    stretch: "condensed",
  });
  // wait for font to be loaded
  await font.load();
  // add font to document
  document.fonts.add(font);
  // enable font with CSS class
  document.body.classList.add("fonts-loaded");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@font-face")}}
