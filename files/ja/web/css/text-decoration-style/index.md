---
title: text-decoration-style
slug: Web/CSS/text-decoration-style
---

{{CSSRef}}

[CSS](/ja/docs/Web/CSS) の **`text-decoration-style`** プロパティは、 {{ cssxref("text-decoration-line") }} で指定された線の種類を設定します。線の種類はすべての線に適用され `text-decoration-line` で定義された線ごとに異なる種類を定義する方法はありません。

{{EmbedInteractiveExample("pages/css/text-decoration-style.html")}}

文字列を貫く線で文字列が削除されたことを示すように、指定された装飾が特定の意味を持つ場合は、 {{ HTMLElement("del") }} や {{ HTMLElement("s") }} といった HTML タグでその意味を示すことが推奨されます。ブラウザーはスタイルを無効にする場合がありますが、そのようなときでも意味論上の意味が失われません。

線の装飾に関する複数のプロパティを一度に設定するときは、代わりに一括指定の {{cssxref("text-decoration")}} プロパティを使用したほうが便利かもしれません。

## 構文

```css
/* キーワード値 */
text-decoration-style: solid;
text-decoration-style: double;
text-decoration-style: dotted;
text-decoration-style: dashed;
text-decoration-style: wavy;

/* グローバル値 */
text-decoration-style: inherit;
text-decoration-style: initial;
text-decoration-style: revert;
text-decoration-style: unset;
```

### 値

- solid
  - : 単独線を描画します。
- double
  - : 二重線を描画します。
- dotted
  - : 点線を描画します。
- dashed
  - : 破線を描画します。
- wavy
  - : 波線を描画します。
- \-moz-none{{ non-standard_inline }}
  - : 線を描画しません。代わりに {{ cssxref("text-decoration-line") }}`: none` を使用してください。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_a_wavy_underline">波線の下線を設定</h3>

```css
.example {
  -moz-text-decoration-line: underline;
  -moz-text-decoration-style: wavy;
  -moz-text-decoration-color: red;
  -webkit-text-decoration-line: underline;
  -webkit-text-decoration-style: wavy;
  -webkit-text-decoration-color: red;
}
```

#### CSS

```css
.wavy {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: red;
}
```

#### HTML

```html
<p class="wavy">このテキストには付近に赤い波線があります。</p>
```

#### 結果

{{ EmbedLiveSample('Setting_a_wavy_underline', '', '', '') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 複数の行内装飾プロパティを一度に設定するときは、代わりに一括指定の {{cssxref("text-decoration")}} プロパティを使った方が便利かもしれません。
