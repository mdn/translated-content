---
title: font-kerning
slug: Web/CSS/font-kerning
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

**`font-kerning`** は [CSS](/ja/docs/Web/CSS) のプロパティで、フォントに存在するカーニング情報の使用を制御します。

{{EmbedInteractiveExample("pages/css/font-kerning.html")}}

*カーニング*は、文字の間隔をどれだけ取るかを定義します。_well-kerned_ フォントでは、この機能は文字間を他と比較してより整った読みやすい間隔にします。

例えば、下の画像では、左の例ではカーニングが使われていませんが、右の例ではカーニングが使われています。

![font-kerning の例](font-kerning.png)

## 構文

```css
font-kerning: auto;
font-kerning: normal;
font-kerning: none;

/* グローバル値 */
font-kerning: inherit;
font-kerning: initial;
font-kerning: revert;
font-kerning: revert-layer;
font-kerning: unset;
```

### 値

- `auto`
  - : このキーワードは、カーニングを使用するかをブラウザーに任せます。フォントサイズが小さい場合はカーニングが不自然になることがあるため、ブラウザーは無効化するでしょう。これは既定値です。
- `normal`
  - : このキーワードは、カーニングを適用するよう要求します。
- `none`
  - : このキーワードは、ブラウザーがフォントのカーニング情報を使用しないようにします。

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

### カーニングの有無

#### HTML

```html live-sample___enabling_and_disabling_kerning
<div id="kern"></div>
<div id="no-kern"></div>
<textarea id="input">AV T. ij</textarea>
```

#### CSS

```css live-sample___enabling_and_disabling_kerning
div {
  font-size: 2rem;
  font-family: "Times New Roman";
}

#no-kern {
  font-kerning: none;
}

#kern {
  font-kerning: normal;
}
```

#### JavaScript

```js live-sample___enabling_and_disabling_kerning
const input = document.getElementById("input");
const kern = document.getElementById("kern");
const noKern = document.getElementById("no-kern");

input.addEventListener("keyup", () => {
  kern.textContent = input.value; /* コンテンツを更新 */
  noKern.textContent = input.value;
});

kern.textContent = input.value; /* コンテンツを初期化 */
noKern.textContent = input.value;
```

{{ EmbedLiveSample('Enabling_and_disabling_kerning') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("font-variant")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-synthesis")}}, {{cssxref("letter-spacing")}}
