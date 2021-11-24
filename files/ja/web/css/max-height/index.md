---
title: max-height
slug: Web/CSS/max-height
tags:
  - CSS
  - CSS プロパティ
  - レイアウト
  - 最大
  - リファレンス
  - 寸法
  - height
  - limit
  - max-height
  - recipe:css-property
  - size
browser-compat: css.properties.max-height
translation_of: Web/CSS/max-height
---
{{CSSRef}}

**`max-height`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の最大高を設定します。これは {{Cssxref("height")}} プロパティの[使用値](/ja/docs/Web/CSS/used_value)が、 `max-height` に指定した値を上回ることを防ぎます。

{{EmbedInteractiveExample("pages/css/max-height.html")}}

`max-height` は {{cssxref("height")}} を上書きしますが、 {{cssxref("min-height")}} は `max-height` を上書きします。

## 構文

```css
/* <length> 値 */
max-height: 3.5em;

/* <percentage> 値 */
max-height: 75%;

/* キーワード値 */
max-height: none;
max-height: max-content;
max-height: min-content;
max-height: fit-content(20em);

/* グローバル値 */
max-height: inherit;
max-height: initial;
max-height: revert;
max-height: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : `max-height` を絶対的な値で定義します。
- {{cssxref("&lt;percentage&gt;")}}
  - : `max-height` を包含ブロックの高さに対するパーセント値で定義します。
- `none`
  - : ボックスの寸法を制限しません。
- `max-content`
  - : 内容物が推奨する `max-height` です。
- `min-content`
  - : 内容物の最小の `max-height` です。
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : 利用可能な空白を指定された引数で置き換えた `fit-content` 式を使用します。すなわち、 `min(max-content, max(min-content, 引数))` です。

## アクセシビリティの考慮

テキストを大きくするためにページを拡大したときに、 `max-height` を設定した要素が切り取られたり、他のコンテンツを覆い隠したりしないことを確認してください。

- [MDN WCAG を理解する ― ガイドライン 1.4 の解説](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### パーセント値とキーワード値を用いた max-height の設定

```css
table { max-height: 75%; }

form { max-height: none; }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ボックスモデル](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)、 {{cssxref("box-sizing")}}
- {{Cssxref("height")}}, {{Cssxref("min-height")}}
- 対応する論理プロパティ: {{cssxref("max-inline-size")}}, {{cssxref("max-block-size")}}
