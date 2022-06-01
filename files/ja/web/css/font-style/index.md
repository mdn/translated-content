---
title: font-style
slug: Web/CSS/font-style
tags:
  - CSS
  - CSS フォント
  - CSS プロパティ
  - リファレンス
  - ウェブ
  - font
  - recipe:css-property
browser-compat: css.properties.font-style
translation_of: Web/CSS/font-style
---
{{CSSRef}}

**`font-style`** は [CSS](/ja/docs/Web/CSS) のプロパティで、{{cssxref("font-family")}} の中で通常体 (normal)、筆記体 (italic)、斜体 (oblique) のどのスタイルにするか設定します。

{{EmbedInteractiveExample("pages/css/font-style.html")}}

**italic** フォントフェイスは通常、本質的に筆記体であり、装飾されていない書体より水平方向の幅が小さいのが一般的です。一方 **oblique** フェイスはたいてい、通常のフェイスを傾けただけです。 italic と oblique のいずれも、通常のフェイスの字形を人工的に傾けることによってシミュレートされます (この制御については {{cssxref("font-synthesis")}} をご覧ください)。

## 構文

```css
font-style: normal;
font-style: italic;
font-style: oblique;
font-style: oblique 10deg;

/* グローバル値 */
font-style: inherit;
font-style: initial;
font-style: revert;
font-style: unset;
```

`font-style` プロパティは、以下の一覧から選択した単一のキーワードで指定し、キーワードが `oblique` であれば任意で角度を含めることができます。

### 値

- `normal`
  - : {{Cssxref("font-family")}} の中で `normal` に分類されているフォントを選択します。
- `italic`
  - : `italic` として分類されているフォントを選択します。 italic フェイスが使用できない場合は、代わりに `oblique` に分類されているフォントを選択します。どちらも利用できない場合は、スタイルは人工的にシミュレートされます。
- `oblique`
  - : `oblique` として分類されているフォントを選択します。 oblique フェイスが使用できない場合は、代わりに `italic` に分類されているフォントを選択します。どちらも利用できない場合は、スタイルは人工的にシミュレートされます。
- `oblique` [`<angle>`](/ja/docs/Web/CSS/angle)

  - : `oblique` として分類されているフォントを選択し、加えてテキストの傾きの角度を指定します。選択されたフォントファミリで１つまたは複数の oblique フェイスが利用できる場合、指定した角度に最も近いものが選択されます。 oblique フェイスが利用できない場合、ブラウザーは通常のフェイスを指定した大きさだけ傾けることで、 oblique バージョンを作成します。有効な値は-90以上90以下の角度の値です。角度が指定されない場合、14度の角度が使用されます。正の数では行末に向けて傾け、負の数では行頭に向けて傾けます。

    一般に、要求された角度が14度以上の場合、大きな角度が推奨されます。その他の場合は、より小さい角度が推奨されます (アルゴリズムの詳細は、仕様書の [font matching section](https://drafts.csswg.org/css-fonts-4/#font-matching-algorithm) を参照してください)。

### 可変フォント

可変フォントでは、 oblique フェイスをどれだけ傾けるかの角度を細かく制御することができます。 `<angle>` 修飾子を `oblique` キーワードに使用して選択することができます。

TrueType または OpenType の可変フォントでは、 `"slnt"` 変数が oblique の傾く角度を様々に実装するために使用され、 `"ital"` 変数の値が 1 ならば、 italic の値を使用します。 {{cssxref("font-variation-settings")}} を参照してください。

> **Note:** 次の例を動作させるには、 CSS Fonts Level 4 の `font-style: oblique` が `<angle>` を受け入れる構文に対応したブラウザーが必要です。デモは `font-style: oblique 23deg;` を読み込みます。この値を変更すると、テキストの傾きが変わるのを確認することができます。

{{EmbedGHLiveSample("css-examples/variable-fonts/oblique.html", '100%', 860)}}

## アクセシビリティの考慮

テキストの長い区間に渡って `font-style` の値を `italic` に設定すると、失読症のような認知問題を抱える人にとって読むのが難しくなる可能性があります。

- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Understanding WCAG 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Font_styles">フォントスタイル</h3>

```html hidden
<p class="normal">This paragraph is normal.</p>
<p class="italic">This paragraph is italic.</p>
<p class="oblique">This paragraph is oblique.</p>
```

```css
.normal {
  font-style: normal;
}

.italic {
  font-style: italic;
}

.oblique {
  font-style: oblique;
}
```

{{ EmbedLiveSample('Font_styles') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- [基本的なテキストとフォントの装飾](/ja/docs/Learn/CSS/Styling_text/Fundamentals)
