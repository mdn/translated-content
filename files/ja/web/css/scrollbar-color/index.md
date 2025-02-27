---
title: scrollbar-color
slug: Web/CSS/scrollbar-color
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

**`scrollbar-color`** は [CSS](/ja/docs/Web/CSS) のプロパティで、スクロールバーのトラックとつまみの色を設定します。

**トラック**はスクロールバーの背景を表し、一般的にスクロール位置にかかわらず固定されています。

**つまみ**はスクロールバーの動く部分で、ふつうはトラックの上を動きます。

`scrollbar-color` の値がドキュメントのルート要素に設定されている場合、その値はビューポートのスクロールバーに適用されます。

## 構文

```css
/* キーワード値 */
scrollbar-color: auto;

/* <color> 値 */
scrollbar-color: rebeccapurple green; /* 二つの有効な色。
一つ目はスクロールバーのつまみ、二つ目はトラックに適用される。 */

/* グローバル値 */
scrollbar-color: inherit;
scrollbar-color: initial;
scrollbar-color: revert;
scrollbar-color: revert-layer;
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

> **メモ:** [`@media (forced-colors: active)`](/ja/docs/Web/CSS/@media/forced-colors) とすると、`scrollbar-color` が `auto` になります。

## アクセシビリティ

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
  scrollbar-color: #007 #bada55;
}
```

#### HTML

```html
<div class="scroller">
  Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
  daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens
  corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts
  fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber
  earthnut pea peanut soko zucchini.
</div>
```

#### 結果

{{EmbedLiveSample("Coloring_overflow_scrollbars")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS オーバーフロー](/ja/docs/Web/CSS/CSS_overflow)モジュール
- [CSS スクロールバースタイル設定](/ja/docs/Web/CSS/CSS_scrollbars_styling)モジュール
- {{CSSxRef("overflow")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("scrollbar-width")}}
