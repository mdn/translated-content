---
title: height
slug: Web/CSS/height
---

{{CSSRef}}

**`height`** は CSS のプロパティで、要素の高さを指定します。既定では、このプロパティは[コンテンツ領域](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#content-area)の高さを定義します。{{cssxref("box-sizing")}} が `border-box` に設定されていた場合は、 [境界領域](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#border-area)の高さを定義します。

{{EmbedInteractiveExample("pages/css/height.html")}}

{{cssxref("min-height")}} および {{cssxref("max-height")}} プロパティは `height` を上書きします。

## 構文

```css
/* <length> 値 */
height: 120px;
height: 10em;

/* <percentage> 値 */
height: 75%;

/* キーワード値 */
height: max-content;
height: min-content;
height: fit-content(20em);
height: auto;

/* グローバル値 */
height: inherit;
height: initial;
height: revert;
height: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : 絶対値で高さを定義します。
- {{cssxref("&lt;percentage&gt;")}}
  - : 包含ブロックの高さのパーセントで高さを定義します。
- `auto`
  - : 指定された要素の高さをブラウザーが計算して決めます。
- `max-content`
  - : 本来の望ましい高さです。
- `min-content`
  - : 本来の最小の高さです。
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : 利用可能な空間に対して fit-content 式を使用し、指定された引数に置き換えられます。すなわち `min(max-content, max(min-content, <length-percentage>))` です。

## アクセシビリティの考慮

要素の `height` は、テキストを大きくするためにページを拡大したとき、切り捨てたられたり他のコンテンツを邪魔したりしないように設定するよう確認してください。

- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_height_using_pixels_and_percentages">ピクセル数とパーセント値を使用して高さを設定</h3>

#### HTML

```html
<div id="taller">I'm 50 pixels tall.</div>
<div id="shorter">I'm 25 pixels tall.</div>
<div id="parent">
  <div id="child">I'm half the height of my parent.</div>
</div>
```

#### CSS

```css
div {
  width: 250px;
  margin-bottom: 5px;
  border: 2px solid blue;
}

#taller {
  height: 50px;
}

#shorter {
  height: 25px;
}

#parent {
  height: 100px;
}

#child {
  height: 50%;
  width: 75%;
}
```

#### 結果

{{EmbedLiveSample('Setting_height_using_pixels_and_percentages', 'auto', 240)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ボックスモデル](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- {{cssxref("width")}}
- {{cssxref("box-sizing")}}
- {{cssxref("min-height")}}, {{cssxref("max-height")}}
- 対応する論理的プロパティ: {{cssxref("block-size")}}, {{cssxref("inline-size")}}
