---
title: CSSFontFeatureValuesRule
slug: Web/API/CSSFontFeatureValuesRule
l10n:
  sourceCommit: dd3be0c826d1a611b13c98e7e0b4c38d8eb3b146
---

{{APIRef("CSSOM")}}

**`CSSFontFeatureValuesRule`** インターフェイスは {{cssxref("@font-feature-values")}} [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)を表し、開発者が開発者が各フォントフェイスに対して、 {{cssxref("font-variant-alternates")}} で使用する機能インデックスを指定するための共通の名前を割り当てることができます。

{{InheritanceDiagram}}

## インスタンスプロパティ

_祖先である {{domxref("CSSRule")}} から継承したプロパティがあります。_

- {{domxref("CSSFontFeatureValuesRule.fontFamily")}}
  - : このルールが適用されるフォントファミリを示す文字列です。

## インスタンスメソッド

_祖先である {{domxref("CSSRule")}} から継承したメソッドがあります。_

## 例

### フォントファミリーの読み取り

この例では、 2 つの {{cssxref("@font-feature-values")}} を宣言しています。 1 つは _Font One_ フォントファミリー用、他の 1 つは _Font Two_ フォントファミリ用です。そして、 CSSOM を使用して、これらのフォントファミリーを読み取り、ログに出力しています。

#### HTML

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

## 関連情報

- {{cssxref("@font-feature-values")}}
