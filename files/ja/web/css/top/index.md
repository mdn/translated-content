---
title: top
slug: Web/CSS/top
---

{{CSSRef}}

**`top`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[位置指定要素](/ja/docs/Web/CSS/position)の垂直位置の決定に関与します。位置指定されていない要素には効果はありません。

{{EmbedInteractiveExample("pages/css/top.html")}}

`top` の効果は、要素がどの様に配置されているか (つまり、 {{cssxref("position")}} プロパティの値) によって変わります。

- `position` が `absolute` または `fixed` に設定されている場合、 `top` プロパティは要素の上辺と包含ブロックの上辺との間の距離を指定します。
- `position` が `relative` に設定されている場合、 `top` プロパティは要素の上辺が通常位置から下方へ移動する量を指定します。
- `position` が `sticky` に設定されている場合、 `top` プロパティは粘着制約矩形の計算に使用されます。
- `position` が `static` に設定されている場合、 `top` プロパティは*効果がありません*。

`top` と {{cssxref("bottom")}} の両方が指定されており、 `position` が `absolute` または `fixed` に設定されており、_かつ_ {{cssxref("height")}} が未指定 (`auto` または `100%` のどちらか) の場合は、 `top` と `bottom` の距離が尊重されます。それ以外の場合、 {{cssxref("height")}} が何らかの形で制約されていた場合、または `position` が `relative` に設定されていた場合は、 `top` プロパティが優先されて `bottom` プロパティは無視されます。

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
  - : 値が親要素 (包含ブロックとは限りません) の計算値と同じであることを示すキーワードです。そして、この計算値は {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, または `auto` キーワードと同様に扱われます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

<h2 id="Examples">例</h2>

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
