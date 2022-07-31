---
title: max-width
slug: Web/CSS/max-width
tags:
  - CSS
  - CSS プロパティ
  - レイアウト
  - Limits
  - 最大
  - リファレンス
  - 寸法
  - max-width
  - recipe:css-property
  - size
  - width
browser-compat: css.properties.max-width
translation_of: Web/CSS/max-width
---
{{CSSRef}}

**`max-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の最大幅を設定します。これは {{Cssxref("width")}} プロパティの[使用値](/ja/docs/Web/CSS/used_value)が、 `max-width` で指定した値を上回ることを防ぎます。

{{EmbedInteractiveExample("pages/css/max-width.html")}}

`max-width` は {{cssxref("width")}} を上書きしますが、 {{cssxref("min-width")}} は `max-width` を上書きします。

## 構文

```css
/* <length> 値 */
max-width: 3.5em;

/* <percentage> 値 */
max-width: 75%;

/* キーワード値 */
max-width: none;
max-width: max-content;
max-width: min-content;
max-width: fit-content(20em);

/* グローバル値 */
max-width: inherit;
max-width: initial;
max-width: revert;
max-width: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : `max-width` を絶対的な値で定義します。
- {{cssxref("&lt;percentage&gt;")}}
  - : `max-width` を包含ブロックの幅に対するパーセント値で定義します。
- `none`
  - : ボックスの寸法を制限しません。
- `max-content`
  - : 内容物が推奨する `max-width` です。
- `min-content`
  - : 内容物の最小の `max-width` です。
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : 利用可能な空白を指定された引数で置き換えた `fit-content` 式を使用します。すなわち、 `min(max-content, max(min-content, 引数))` です。

## アクセシビリティの考慮

ページを拡大縮小して文字サイズを拡大した際に、 `max-width` を設定した要素が他のコンテンツを切り捨てたり妨げたりしないことを確認してください。

- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_max_width_in_pixels">最大幅をピクセル単位で設定</h3>

この例では、 "child" の幅が 150 ピクセルか "parent" の幅のどちらか小さい方になります。

#### HTML

```html
<div id="parent">
  <div id="child">
    Fusce pulvinar vestibulum eros, sed luctus ex lobortis quis.
  </div>
</div>
```

#### CSS

```css
#parent {
  background: lightblue;
  width: 300px;
}

#child {
  background: gold;
  width: 100%;
  max-width: 150px;
}
```

#### 結果

{{EmbedLiveSample("Setting_max_width_in_pixels", 350, 100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ボックスモデル](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model), {{cssxref("box-sizing")}}
- {{cssxref("width")}}, {{cssxref("min-width")}}
- 対応する論理的プロパティ: {{cssxref("max-inline-size")}}, {{cssxref("max-block-size")}}
