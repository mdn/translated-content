---
title: "CSSFontFeatureValuesRule: fontFamily プロパティ"
short-title: fontFamily
slug: Web/API/CSSFontFeatureValuesRule/fontFamily
l10n:
  sourceCommit: 4904c4f3e4ea8f8efd27e9cf51b51d5c5a03de26
---

{{ APIRef("CSSOM") }}

**`fontFamily`** は {{domxref("CSSConditionRule")}} インターフェイスのプロパティで、適用するフォントファミリーの名前を表します。

## 値

文字列です。

## 例

### フォントファミリーの読み取り

この例では、 2 つの {{cssxref("@font-feature-values")}} を宣言しています。 1 つは _Font One_ フォントファミリー用、他の 1 つは _Font Two_ フォントファミリ用です。そして、 CSSOM を使用して、これらのフォントファミリーを読み取り、ログに出力しています。

```html
<pre id="log"></pre>
```

#### CSS

```css
/* Font One の "nice-style" のアットルール */
@font-feature-values Font One {
  @styleset {
    nice-style: 12;
  }
}

/* Font Two の "nice-style" のアットルール */
@font-feature-values Font Two {
  @styleset {
    nice-style: 4;
  }
}

/* 単一の宣言でアットルールを適用 */
.nice-look {
  font-variant-alternates: styleset(nice-style);
}
```

#### JavaScript

```js
const log = document.getElementById("log");
const rules = document.styleSheets[document.styleSheets.length - 1].cssRules;

const fontOne = rules[0]; // CSSFontFeatureValuesRule
log.textContent = `1 つ目の '@font-feature-values' ファミリー: "${fontOne.fontFamily}"\n`;

const fontTwo = rules[1]; // もう一つの CSSFontFeatureValuesRule
log.textContent += `2 つ目の '@font-feature-values' ファミリー: "${fontTwo.fontFamily}"`;
```

{{EmbedLiveSample("read_font_family", "100%", "75px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
