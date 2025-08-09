---
title: "CSSFontPaletteValuesRule: overrideColors プロパティ"
short-title: overrideColors
slug: Web/API/CSSFontPaletteValuesRule/overrideColors
l10n:
  sourceCommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{APIRef("CSSOM")}}

**`overrideColors`** は {{domxref("CSSFontPaletteValuesRule")}} インターフェイスの読み取り専用プロパティで、代わりに使用する色インデックスと色のペアのリストの文字列です。これは、対応する {{cssxref("@font-palette-values/override-colors", "override-colors")}} 記述子と同じ形式で指定します。

## 値

色インデックスと色のペアをカンマ区切りで格納した文字列です。

## 例

### 上書きされる色の読み取り

この例では、最初にいくつかのアットルールを定義し、そのうちの 2 つの {{cssxref("@font-palette-values")}} を定義しています。これらのルールは文書に追加された最後のスタイルシートにあるため、パレットは文書内の最後のスタイルシート (`document.styleSheets[document.styleSheets.length-1].cssRules`) が返す 2 つ目の {{domxref("CSSRule")}} になります。

#### HTML

```html
<div class="hat">
  <div class="emoji colored-hat">🎩</div>
</div>
<button>色の切り替え</button>
<pre id="log"></pre>
```

#### CSS

```css
@font-face {
  font-family: "Noto Color Emoji";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/l/font?kit=Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabts6diywYkdG3gjD0U&skey=a373f7129eaba270&v=v24)
    format("woff2");
}

.emoji {
  font-family: "Noto Color Emoji";
  font-size: 3rem;
}

@font-palette-values --blue {
  font-family: "Noto Color Emoji";
  override-colors:
    3 rgb(1 28 193),
    4 rgb(60 124 230);
}

@font-palette-values --green {
  font-family: "Noto Color Emoji";
  override-colors:
    3 rgb(28 193 1),
    4 rgb(34 230 1);
}

.colored-hat {
  font-palette: --blue;
}
```

#### JavaScript

```js
const log = document.getElementById("log");
const button = document.querySelector("button");
const hat = document.querySelector(".colored-hat");
const rules = document.styleSheets[document.styleSheets.length - 1].cssRules;
const greenFontPaletteValuesRule = rules[3];
const blueFontPaletteValuesRule = rules[2];
log.textContent = `上書きした色: ${blueFontPaletteValuesRule.overrideColors}`;

button.addEventListener("click", (event) => {
  if (hat.style.fontPalette !== "--green") {
    hat.style.fontPalette = "--green";
    log.textContent = `上書きした色: ${greenFontPaletteValuesRule.overrideColors}`;
  } else {
    hat.style.fontPalette = "--blue";
    log.textContent = `上書きした色: ${blueFontPaletteValuesRule.overrideColors}`;
  }
});
```

#### 結果

{{EmbedLiveSample("Read the overridden colors", "100", "125")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@font-palette-values")}} アットルール
- {{cssxref("@font-palette-values/override-colors", "override-colors")}} 記述子
