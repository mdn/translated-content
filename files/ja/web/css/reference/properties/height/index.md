---
title: height
slug: Web/CSS/Reference/Properties/height
original_slug: Web/CSS/height
l10n:
  sourceCommit: 9a3940b0231838338f65ae1c37d5b874439a3d43
---

**`height`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の高さを指定します。既定では、このプロパティは[コンテンツ領域](/ja/docs/Web/CSS/Guides/Box_model/Introduction#コンテンツ領域)の高さを定義します。{{cssxref("box-sizing")}} が `border-box` に設定されていた場合は、 [境界領域](/ja/docs/Web/CSS/Guides/Box_model/Introduction#境界領域)の高さを定義します。

{{InteractiveExample("CSS デモ: height")}}

```css interactive-example-choice
height: 150px;
```

```css interactive-example-choice
height: 6em;
```

```css interactive-example-choice
height: 75%;
```

```css interactive-example-choice
height: auto;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box where you can change the height.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  justify-content: center;
  color: #ffffff;
}
```

{{cssxref("min-height")}} および {{cssxref("max-height")}} プロパティは `height` を上書きします。

> [!NOTE]
> 幾何プロパティとして、 `height` プロパティは、{{SVGElement("svg")}}、{{SVGElement("rect")}}、{{SVGElement("image")}}、{{SVGElement("foreignObject")}} の各 SVG 要素にも適用されます。 `auto` は `0` に、パーセント値は `<rect>` の場合は SVG ビューポートの高さに対する相対値に解決します。 CSS の `height` プロパティ値は、 SVG 要素に設定された {{SVGAttr("height")}} 属性値を上書きします。

## 構文

```css
/* <length> 値 */
height: 120px;
height: 10em;
height: 100vh;
height: anchor-size(height);
height: anchor-size(--myAnchor self-block, 250px);
height: clamp(200px, anchor-size(width));

/* <percentage> 値 */
height: 75%;

/* キーワード値 */
height: max-content;
height: min-content;
height: fit-content;
height: fit-content(20em);
height: auto;
height: minmax(min-content, anchor-size(width));
height: stretch;

/* グローバル値 */
height: inherit;
height: initial;
height: revert;
height: revert-layer;
height: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : 絶対値で高さを定義します。
- {{cssxref("&lt;percentage&gt;")}}
  - : [包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)の高さのパーセント値で高さを定義します。
- `auto`
  - : 指定された要素の高さをブラウザーが計算して決めます。
- `max-content`
  - : 本来の望ましい高さです。
- `min-content`
  - : 本来の最小の高さです。
- `fit-content`
  - : 利用できる空間を使用しますが、 [max-content](/ja/docs/Web/CSS/Reference/Values/max-content) を超えないようにします。すなわち、 `min(max-content, max(min-content, stretch))` です。
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : 利用可能な空間に対して fit-content 式を使用し、指定された引数に置き換えられます。すなわち `min(max-content, max(min-content, <length-percentage>))` です。
- `stretch`
  - : 要素の[マージンボックス](/ja/docs/Learn_web_development/Core/Styling_basics/Box_model#ボックスの構成)の高さを、[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block#包含ブロックの識別)の高さに設定します。マージンボックスが包含ブロック内で利用できる空間をすべて満たそうとするため、 100% と似たような動作をしますが、結果として得られるサイズは [box-sizing](/ja/docs/Web/CSS/Reference/Properties/box-sizing) で決定されるボックスではなく、マージンボックスに適用されます。

    > [!NOTE]
    > ブラウザーが `stretch` 値のために使用する別名と実装状況については、[ブラウザーの互換性](#ブラウザーの互換性)の節を参照してください。

## アクセシビリティ

要素の `height` は、テキストを大きくするためにページを拡大したとき、切り捨てたられたり他のコンテンツを邪魔したりしないように設定するよう確認してください。

- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### ピクセル数とパーセント値を使用して高さを設定

#### HTML

```html-nolint live-sample___setting_height_using_pixels_and_percentages
<div id="taller">これは 50 ピクセルの高さです。</div>
<div id="shorter">これは 25 ピクセルの高さです。</div>
<div id="parent">
  <div id="child">これは親の半分の高さです。</div>
</div>
```

#### CSS

```css live-sample___setting_height_using_pixels_and_percentages
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

- {{cssxref("width")}}
- {{cssxref("box-sizing")}}
- {{cssxref("min-height")}}, {{cssxref("max-height")}}
- {{cssxref("block-size")}}, {{cssxref("inline-size")}}
- {{cssxref("anchor-size()")}}
- {{cssxref("clamp", "clamp()")}}
- {{cssxref("clamp", "minmax()")}}
- [CSS 基本ボックスモデル入門](/ja/docs/Web/CSS/Guides/Box_model/Introduction)
- [CSS ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model)モジュール
