---
title: CSSFontPaletteValuesRule
slug: Web/API/CSSFontPaletteValuesRule
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("CSSOM")}}

**`CSSFontPaletteValuesRule`** インターフェイスは {{cssxref("@font-palette-values")}} [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)を表します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_祖先である {{domxref("CSSRule")}} から継承したプロパティがあります。_

- {{domxref("CSSFontPaletteValuesRule.name")}} {{ReadOnlyInline}}
  - : フォントパレットの名前の文字列です。
- {{domxref("CSSFontPaletteValuesRule.fontFamily")}} {{ReadOnlyInline}}
  - : ルールを適用するフォントファミリーを示す文字列。
- {{domxref("CSSFontPaletteValuesRule.basePalette")}} {{ReadOnlyInline}}
  - : ルールに関連付けられたベースパレットを示す文字列。
- {{domxref("CSSFontPaletteValuesRule.overrideColors")}} {{ReadOnlyInline}}
  - : 上書きされるベースパレットの色と新しい色を示す文字列。

## インスタンスメソッド

_祖先である {{domxref("CSSRule")}} から継承したメソッドがあります。_

## 例

### CSSOM を使用した関連するフォントファミリーの読み取り

この例では、最初に {{cssxref("@import")}} および {{cssxref("@font-palette-values")}} アットルールを定義します。そして、 {{cssxref("@font-palette-values")}} ルールを読み込み、その名前を表示します。これらのルールは文書に追加された最後のスタイルシートに存在するため、パレットは文書内の最後のスタイルシート (`document.styleSheets[document.styleSheets.length-1].cssRules`) が返す 2 つ目の {{domxref("CSSRule")}} にあります。つまり、 `rules[1]` は `CSSFontPaletteValuesRule` オブジェクトを返し、そこから `fontFamily` にアクセスすることができます。

#### HTML

```html
<pre id="log">@font-palette-values アットルールのフォントファミリー:</pre>
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

{{EmbedLiveSample("Read associated font family using CSSOM", "100", "40")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@font-palette-values")}}
