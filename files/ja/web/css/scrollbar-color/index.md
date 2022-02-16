---
title: scrollbar-color
slug: Web/CSS/scrollbar-color
tags:
  - CSS
  - CSS プロパティ
  - リファレンス
  - CSS スクロールバー
  - recipe:css-property
  - scrollbar-color
browser-compat: css.properties.scrollbar-color
translation_of: Web/CSS/scrollbar-color
---
{{CSSRef}}

**`scrollbar-color`** は [CSS](/ja/docs/Web/CSS) のプロパティで、スクロールバーのトラックとつまみの色を設定します。

**トラック**はスクロールバーの背景を表し、一般的にスクロール位置にかかわらず固定されています。

**つまみ**はスクロールバーの動く部分で、ふつうはトラックの上を動きます。

{{EmbedInteractiveExample("pages/css/scrollbar-color.html")}}

## 構文

```css
/* キーワード値 */
scrollbar-color: auto;

/* <color> 値 */
scrollbar-color: rebeccapurple green;   /* 二つの有効な色。
一つ目はスクロールバーのつまみ、二つ目はトラックに適用される。 */

/* グローバル値 */
scrollbar-color: inherit;
scrollbar-color: initial;
scrollbar-color: revert;
scrollbar-color: unset;
```

### 値

- `<scrollbar-color>`

  - : スクロールバーの色を定義します。

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>auto</code></td>
          <td>
            他にスクロールバーに関する色のプロパティがない場合、スクロールバーの位置を表す既定の表示になります。
          </td>
        </tr>
        <tr>
          <td><code>&#x3C;color> &#x3C;color></code></td>
          <td>
            最初の色をスクロールバーのつまみに、 2 番目の色をスクロールバーのトラックに適用します。
          </td>
        </tr>
      </tbody>
    </table>

    > **Note:** ユーザーエージェントはビューポートのルート要素に、何らかの `scrollbar-color` の値を適用しなければなりません。

## アクセシビリティの考慮

`scrollbar-color` プロパティで色の値を指定して使用する場合、指定した色の間に十分なコントラストがあることを確認してください。キーワード値の場合、ユーザーエージェントは使用する色の間に十分なコントラストがあることを保証してください。 [Techniques for WCAG 2.0: G183: Using a contrast ratio of 3:1](https://www.w3.org/TR/WCAG20-TECHS/G183.html) を参照してください。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### あふれた場合のスクロールバーに着色する

#### CSS

```css
.scroller {
  width: 300px;
  height: 100px;
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
}
```

#### HTML

```html
<div class="scroller">Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</div>
```

#### 結果

{{EmbedLiveSample("Coloring_overflow_scrollbars")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`scrollbar-width`](/ja/docs/Web/CSS/scrollbar-width)
- [`overflow`](/ja/docs/Web/CSS/overflow)
