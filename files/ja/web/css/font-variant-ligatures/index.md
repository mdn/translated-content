---
title: font-variant-ligatures
slug: Web/CSS/font-variant-ligatures
---

{{CSSRef}}

**`font-variant-ligatures`** は CSS のプロパティで、適用される用途の文字コンテンツで使われる{{Glossary("ligature", "合字")}}および{{Glossary("contextual forms", "文脈に合わせた字形")}}を制御します。これにより、結果のテキストでより調和した形を利用することができます。

{{EmbedInteractiveExample("pages/css/font-variant-ligatures.html")}}

## 構文

```css
/* キーワード値 */
font-variant-ligatures: normal;
font-variant-ligatures: none;
font-variant-ligatures: common-ligatures; /* <common-lig-values> */
font-variant-ligatures: no-common-ligatures; /* <common-lig-values> */
font-variant-ligatures: discretionary-ligatures; /* <discretionary-lig-values> */
font-variant-ligatures: no-discretionary-ligatures; /* <discretionary-lig-values> */
font-variant-ligatures: historical-ligatures; /* <historical-lig-values> */
font-variant-ligatures: no-historical-ligatures; /* <historical-lig-values> */
font-variant-ligatures: contextual; /* <contextual-alt-values> */
font-variant-ligatures: no-contextual; /* <contextual-alt-values> */

/* グローバル値 */
font-variant-ligatures: inherit;
font-variant-ligatures: initial;
font-variant-ligatures: revert;
font-variant-ligatures: revert-layer;
font-variant-ligatures: unset;
```

`font-variant-ligatures` プロパティは、以下の一覧のキーワード値のうち一つで指定します。

### 値

- `normal`
  - : 正しいレンダリングに必要な通常の合字や文脈書式を有効にします。有効になる合字と書式は、フォント、言語、および書法の種類によって異なります。これが既定値です。
- `none`
  - : 一般的なものであっても、すべての合字や文脈書式を無効にします。
- _\<common-lig-values>_

  - : `fi`, `ffi`, `th` などの、よくある合字を制御します。 OpenType の値 `liga` および `clig` に対応します。2 つの値が指定できます。

    - `common-ligatures`: これらの合字を有効にします。なお、キーワード `normal` はこれらの合字を有効にします。
    - `no-common-ligatures`: これらの合字を無効にします。

- _\<discretionary-lig-values>_

  - : フォントに依存し文字デザイナーが定義する特定の合字を制御します。対応する OpenType の値は `dlig` です。2 つの値が指定できます。

    - `discretionary-ligatures`: これらの合字を有効にします。
    - `no-discretionary-ligatures`: これらの合字を無効にします。なお、キーワード `normal` はふつう、これらの合字を無効にします。

- _\<historical-lig-values>_

  - : 古い本で歴史的に使用された、ドイツ語の tz を ꜩ と表示するような合字です。対応する OpenType の値は `hlig` です。2 つの値が指定できます。

    - `historical-ligatures`: これらの合字を有効にします。
    - `no-historical-ligatures` これらの合字を無効にします。なお、キーワード `normal` はふつう、これらの合字を無効にします。

- _\<contextual-alt-values>_

  - : 字形を文脈に合わせるかどうかを制御します。つまり、字形を周囲の文字に合わせるかどうかです。対応する OpenType の値は `calt` です。2 つの値が指定できます。

    - `contextual`: 文脈的な変更を使用するよう指定します。なお、キーワード `normal` はこれらの合字も有効にします。
    - `no-contextual`: 使用を避けます。

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

### フォントの合字と文脈に合わせた字形の設定

#### HTML

```html
<link href="//fonts.googleapis.com/css?family=Lora" rel="stylesheet" />
<p class="normal">
  normal<br />
  if fi ff tf ft jf fj
</p>
<p class="none">
  none<br />
  if fi ff tf ft jf fj
</p>
<p class="common-ligatures">
  common-ligatures<br />
  if fi ff tf ft jf fj
</p>
<p class="no-common-ligatures">
  no-common-ligatures<br />
  if fi ff tf ft jf fj
</p>
<p class="discretionary-ligatures">
  discretionary-ligatures<br />
  if fi ff tf ft jf fj
</p>
<p class="no-discretionary-ligatures">
  no-discretionary-ligatures<br />
  if fi ff tf ft jf fj
</p>
<p class="historical-ligatures">
  historical-ligatures<br />
  if fi ff tf ft jf fj
</p>
<p class="no-historical-ligatures">
  no-historical-ligatures<br />
  if fi ff tf ft jf fj
</p>
<p class="contextual">
  contextual<br />
  if fi ff tf ft jf fj
</p>
<p class="no-contextual">
  no-contextual<br />
  if fi ff tf ft jf fj
</p>
<p class="contextual">
  contextual<br />
  if fi ff tf ft jf fj
</p>
```

#### CSS

```css
p {
  font-family: Lora, serif;
}
.normal {
  font-variant-ligatures: normal;
}

.none {
  font-variant-ligatures: none;
}

.common-ligatures {
  font-variant-ligatures: common-ligatures;
}

.no-common-ligatures {
  font-variant-ligatures: no-common-ligatures;
}

.discretionary-ligatures {
  font-variant-ligatures: discretionary-ligatures;
}

.no-discretionary-ligatures {
  font-variant-ligatures: no-discretionary-ligatures;
}

.historical-ligatures {
  font-variant-ligatures: historical-ligatures;
}

.no-historical-ligatures {
  font-variant-ligatures: no-historical-ligatures;
}

.contextual {
  font-variant-ligatures: contextual;
}

.no-contextual {
  font-variant-ligatures: no-contextual;
}

.contextual {
  font-variant-ligatures: contextual;
}
```

#### 結果

{{ EmbedLiveSample('Setting font ligatures and contextual forms', '', '700') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("font-variant-alternates")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant")}}
- {{cssxref("font-variant-numeric")}}
