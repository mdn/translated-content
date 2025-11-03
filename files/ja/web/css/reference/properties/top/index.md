---
title: top
slug: Web/CSS/Reference/Properties/top
original_slug: Web/CSS/top
l10n:
  sourceCommit: b5d025c25b6dd3f7ed0b82c4abed0b25f6462a5e
---

**`top`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[位置指定要素](/ja/docs/Web/CSS/Reference/Properties/position)の垂直位置の決定に関与します。位置指定されていない要素には効果はありません。

{{InteractiveExample("CSS デモ: top")}}

```css interactive-example-choice
top: 0;
```

```css interactive-example-choice
top: 4em;
```

```css interactive-example-choice
top: 10%;
```

```css interactive-example-choice
top: 20px;
```

```html interactive-example
<section id="default-example">
  <div class="example-container">
    <div id="example-element">I am absolutely positioned.</div>
    <p>
      As much mud in the streets as if the waters had but newly retired from the
      face of the earth, and it would not be wonderful to meet a Megalosaurus,
      forty feet long or so, waddling like an elephantine lizard up Holborn
      Hill.
    </p>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 0.75em solid;
  padding: 0.75em;
  text-align: left;
  position: relative;
  width: 100%;
  min-height: 200px;
}

#example-element {
  background-color: #264653;
  border: 4px solid #ffb500;
  color: white;
  position: absolute;
  width: 140px;
  height: 60px;
}
```

`top` の効果は、要素がどの様に配置されているか（つまり、 {{cssxref("position")}} プロパティの値）によって変わります。

- `position` が `absolute` または `fixed` に設定されている場合、 `top` プロパティは要素の上辺と包含ブロックの上辺との間の距離を指定します。
- `position` が `relative` に設定されている場合、 `top` プロパティは要素の上辺が通常位置から下方へ移動する量を指定します。
- `position` が `sticky` に設定されている場合、 `top` プロパティは粘着制約矩形の計算に使用されます。
- `position` が `static` に設定されている場合、 `top` プロパティは*効果がありません*。

`top` と {{cssxref("bottom")}} の両方が指定されている場合は、 3 つの異なる場合があります。

- `position` が `absolute` または `fixed` に設定されており、 {{cssxref("height")}} が指定されていない（`auto` または `100%` である）場合、 `top` および `bottom` の両方が尊重されます。
- `position` が `relative` に設定されているか、 `height` が指定されている場合、 `top` プロパティが優先され、 `bottom` プロパティは無視されます。
- `position` が `sticky` に設定されている場合、 `top` と `bottom` の両方の値が考慮されます。つまり、粘着位置指定要素は、要素の位置ボックスがそのブロック内に収まっている限り、これら 2 つのプロパティの値に基づいて、そのブロック内で上下に移動できる可能性があります。

## 構文

```css
/* <length> 値 */
top: 3px;
top: 2.4em;

/* 包含ブロックの高さに対する <percentage> */
top: 10%;

/* キーワード値 */
top: auto;

/* グローバル値 */
top: inherit;
top: initial;
top: revert;
top: revert-layer;
top: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : 負、null、または正の {{cssxref("&lt;length&gt;")}} で、以下のものを表します。
    - *絶対位置指定要素*の場合は、包含ブロックの上辺までの距離。
    - *相対位置指定要素*の場合は、通常の位置からの下方向への移動量。

- {{cssxref("&lt;percentage&gt;")}}
  - : 包含ブロックの高さに対する {{cssxref("&lt;percentage&gt;")}} です。
- `auto`
  - : 以下のように指定します。
    - *絶対位置指定要素*では、要素の位置は {{Cssxref("bottom")}} プロパティに基づいて決まり、 `height: auto` は内容物の高さに基づいて決まります。また、 `bottom` も `auto` であった場合は、要素は垂直方向には静的要素が配置される場合と同様に配置されます。
    - *相対位置指定要素*では、通常の位置から要素までの距離は {{Cssxref("bottom")}} に基づきます。また、 `bottom` も `auto` であった場合は、垂直方向には移動しません。

- `inherit`
  - : 値が親要素（包含ブロックとは限りません）の計算値と同じであることを示すキーワードです。そして、この計算値は {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, または `auto` キーワードと同様に扱われます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 位置指定要素を上から 10% に設定

```css
body {
  background: beige;
}

div {
  position: absolute;
  top: 10%;
  right: 40%;
  bottom: 20%;
  left: 15%;
  background: gold;
  border: 1px solid blue;
}
```

```html
<div>この内容の寸法は、辺の位置によって決まります。</div>
```

{{EmbedLiveSample('Examples','100%','200')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("inset")}}: 関連するすべてのプロパティである {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("right")}} の一括指定
- 対応する論理的プロパティ: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, {{cssxref("inset-inline-end")}} および一括指定の {{cssxref("inset-block")}} と {{cssxref("inset-inline")}}
- {{cssxref("position")}}
