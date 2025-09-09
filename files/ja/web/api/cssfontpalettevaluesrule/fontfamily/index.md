---
title: "CSSFontPaletteValuesRule: fontFamily プロパティ"
short-title: fontFamily
slug: Web/API/CSSFontPaletteValuesRule/fontFamily
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("CSSOM")}}

**`fontFamily`** は {{domxref("CSSFontPaletteValuesRule")}} インターフェイスの読み取り専用プロパティで、ルールが適用可能なフォントファミリーを列挙します。フォントファミリーは名前付きファミリーでなければならず、 `courier` のような汎用ファミリーは無効です。

## 値

このルールを適用できるフォントファミリーのリストを空白区切りで格納した文字列です。

## 例

### 関連付けられたフォントファミリーの読み取り

この例では、最初に {{cssxref("@import")}} および {{cssxref("@font-palette-values")}} アットルールを定義します。そして、 {{cssxref("@font-palette-values")}} ルールを読み込み、その名前を表示します。これらのルールは文書に追加された最後のスタイルシートに存在するため、パレットは文書内の最後のスタイルシート (`document.styleSheets[document.styleSheets.length-1].cssRules`) が返す 2 つ目の {{domxref("CSSRule")}} にあります。つまり、 `rules[1]` は `CSSFontPaletteValuesRule` オブジェクトを返し、そこから `fontFamily` にアクセスすることができます。

#### HTML

```html-nolint
<pre id="log">
@font-palette-values アットルールのフォントファミリー:</pre>
```

#### CSS

```css
@import url(https://fonts.googleapis.com/css2?family=Bungee+Spice);

@font-palette-values --Alternate {
  font-family: "Bungee Spice";
  override-colors:
    0 #00ffbb,
    1 #007744;
}

.alternate {
  font-palette: --Alternate;
}
```

#### JavaScript

```js
const log = document.getElementById("log");

const rules = document.styleSheets[document.styleSheets.length - 1].cssRules;
const fontPaletteValuesRule = rules[1]; // CSSFontPaletteValuesRule インターフェイス
log.textContent += ` ${fontPaletteValuesRule.fontFamily}`;
```

#### 結果

{{EmbedLiveSample("Read the associated font family", "100", "40")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@font-palette-values")}} アットルール
- {{cssxref("@font-palette-values/font-family", "font-family")}} 記述子
