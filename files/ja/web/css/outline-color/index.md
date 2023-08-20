---
title: outline-color
slug: Web/CSS/outline-color
---

{{CSSRef}}

**`outline-color`** は CSS のプロパティで、要素の輪郭線の色を設定します。

{{EmbedInteractiveExample("pages/css/outline-color.html")}}

## 構文

```css
/* <color> 値 */
outline-color: #f92525;
outline-color: rgb(30, 222, 121);
outline-color: blue;

/* キーワード値 */
outline-color: invert;

/* グローバル値 */
outline-color: inherit;
outline-color: initial;
outline-color: revert;
outline-color: unset;
```

`outline-color` プロパティは、以下に挙げた値のうちの一つで指定します。

### 値

- {{cssxref("&lt;color&gt;")}}
  - : 輪郭線の色で、`<color>` で指定します。
- `invert`
  - : 輪郭線が見えるように、背景色を反転させます。なお、ブラウザーがこの値に対応することは必須ではありません。対応しない場合は、このキーワードは無効とみなされます。

## 解説

輪郭線は要素の周囲、 {{cssxref("border")}} の外側に描かれる線です。要素の境界線とは異なり、輪郭線は要素の枠の外側に描かれ、他のコンテンツと重複することがあります。一方、境界線はページのレイアウトに実際に影響を与え、他のどの要素とも (明示的に重複させない限り) 重複しないように合わせます。

輪郭線の表示方法を定義する際は、一括指定プロパティの {{cssxref("outline")}} を使用したほうが普通は便利です。

## アクセシビリティの考慮

独自の[フォーカススタイル](/ja/docs/Web/CSS/:focus)を作成するときに、ふつう {{cssxref("outline")}} プロパティを調整します。輪郭線の色を変更するのであれば、輪郭線と、それが配置される部分の背景のコントラスト比が、弱視の人でも知覚できるよう高くなっているか確認することが重要です。

色のコントラスト比は、テキスト及び背景色の明度の値を比較することで決定されます。現在の[ウェブコンテンツアクセシビリティガイドライン (Web Content Accessibility Guidelines, WCAG)](https://www.w3.org/WAI/intro/wcag) によれば、文字列コンテンツで 4.5:1 以上、見出しのような大きめの文字列で 3:1 以上のコントラスト比が求められています。大きめの文字列とは、太字ならば 18.66px 以上、または 24px 以上と定義されています。

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_a_solid_blue_outline">青い実線の輪郭線の設定</h3>

#### HTML

```html
<p>見ての通り、輪郭線は青です。</p>
```

#### CSS

```css
p {
  outline: 2px solid; /* 輪郭線の幅と種類 */
  outline-color: #0000ff; /* 輪郭線を青にする */
  margin: 5px;
}
```

#### 結果

{{ EmbedLiveSample('Setting_a_solid_blue_outline') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("outline")}}
- {{cssxref("outline-color")}}
- {{cssxref("outline-style")}}
- {{cssxref("outline-width")}}
- {{cssxref("&lt;color&gt;")}} データ型
- その他の色に関するプロパティ: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}
- [CSS を使用した HTML の要素への色の適用](/ja/docs/Web/HTML/Applying_color)
