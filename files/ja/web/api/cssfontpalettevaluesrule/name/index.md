---
title: "CSSFontPaletteValuesRule: name プロパティ"
short-title: name
slug: Web/API/CSSFontPaletteValuesRule/name
l10n:
  sourceCommit: 48813be4b5187c6a17e744e7f9ba37a146302847
---

{{APIRef("CSSOM")}}

**`name`** は {{domxref("CSSFontPaletteValuesRule")}} インターフェイスの読み取り専用プロパティで、関連付けられた {{CSSxRef("@font-palette-values")}} アットルールを識別する名前を表します。有効な名前は常に 2 つのダッシュで始まり、 `--Alternate` のようになります。

## 値

2 つのダッシュで始まる文字列です。

## 例

### アットルールの名前の読み取り

この例では、最初に {{cssxref("@import")}} および {{cssxref("@font-palette-values")}} アットルールを定義します。そして、 {{cssxref("@font-palette-values")}} ルールを読み込み、その名前を表示します。これらのルールは文書に追加された最後のスタイルシートに存在するため、パレットは文書内の最後のスタイルシート (`document.styleSheets[document.styleSheets.length-1].cssRules`) が返す 2 つ目の {{domxref("CSSRule")}} にあります。つまり、 `rules[1]` は `CSSFontPaletteValuesRule` オブジェクトを返し、そこから `name` にアクセスすることができます。

#### HTML

```html-nolint
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
log.textContent += ` ${fontPaletteValuesRule.name}`;
```

#### 結果ｓ

{{EmbedLiveSample("Read the at-rule's name", "100", "40")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@font-palette-values")}} アットルール
