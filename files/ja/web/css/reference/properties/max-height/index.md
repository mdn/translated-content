---
title: max-height
slug: Web/CSS/Reference/Properties/max-height
original_slug: Web/CSS/max-height
l10n:
  sourceCommit: 9a3940b0231838338f65ae1c37d5b874439a3d43
---

**`max-height`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の最大高を設定します。これは {{Cssxref("height")}} プロパティの[使用値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#使用値)が、 `max-height` に指定した値を上回ることを防ぎます。

{{InteractiveExample("CSS デモ: max-height")}}

```css interactive-example-choice
max-height: 150px;
```

```css interactive-example-choice
max-height: 7em;
```

```css interactive-example-choice
max-height: 75%;
```

```css interactive-example-choice
max-height: 10px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box where you can change the maximum height. <br />This will limit
    how tall the box can be, potentially causing an overflow.
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

`max-height` は {{cssxref("height")}} を上書きしますが、 {{cssxref("min-height")}} は `max-height` を上書きします。

## 構文

```css
/* <length> 値 */
max-height: 3.5em;
max-height: anchor-size(height);
max-height: calc(anchor-size(--myAnchor self-block, 250px) + 2em);

/* <percentage> 値 */
max-height: 75%;

/* キーワード値 */
max-height: none;
max-height: max-content;
max-height: min-content;
max-height: fit-content;
max-height: fit-content(20em);
max-height: stretch;

/* グローバル値 */
max-height: inherit;
max-height: initial;
max-height: revert;
max-height: revert-layer;
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
- `fit-content`
  - : 利用できる空間を使用しますが、 [max-content](/ja/docs/Web/CSS/Reference/Values/max-content) を超えないようにします。すなわち、 `min(max-content, max(min-content, stretch))` です。
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : 利用可能な空白を指定された引数で置き換えた `fit-content` 式を使用します。すなわち、 `min(max-content, max(min-content, 引数))` です。
- `stretch`
  - : 要素の[マージンボックス](/ja/docs/Learn_web_development/Core/Styling_basics/Box_model#ボックスの構成)の最大の高さを、[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block#包含ブロックの識別)の高さに制限します。マージンボックスが包含ブロック内で利用できる空間をすべて満たそうとするため、 `100%` と似たような動作をしますが、結果として得られるサイズは [box-sizing](/ja/docs/Web/CSS/Reference/Properties/box-sizing) で決定されるボックスではなく、マージンボックスに適用されます。

    > [!NOTE]
    > ブラウザーが `stretch` 値のために使用する別名と実装状況については、[ブラウザーの互換性](#ブラウザーの互換性)の節を参照してください。

## アクセシビリティ

テキストを大きくするためにページを拡大したときに、 `max-height` を設定した要素が切り取られたり、他のコンテンツを覆い隠したりしないことを確認してください。

- [MDN WCAG を理解する ― ガイドライン 1.4 の解説](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### パーセント値とキーワード値を用いた max-height の設定

```css
table {
  max-height: 75%;
}

form {
  max-height: none;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("min-height")}}
- {{Cssxref("height")}}
- {{cssxref("max-inline-size")}}
- {{cssxref("max-block-size")}}
- {{cssxref("box-sizing")}}
- [CSS 基本ボックスモデル入門](/ja/docs/Web/CSS/Guides/Box_model/Introduction)
- [CSS ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model)モジュール
