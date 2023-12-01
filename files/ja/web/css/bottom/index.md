---
title: bottom
slug: Web/CSS/bottom
---

{{CSSRef}}

**`bottom`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[位置指定要素](/ja/docs/Web/CSS/position)の垂直位置の設定に関与します。位置指定されていない要素には効果はありません。

{{EmbedInteractiveExample("pages/css/bottom.html")}}

`bottom` の効果は、要素がどの様に配置されているか (つまり、 {{cssxref("position")}} プロパティの値) によって変わります。

- `position` が `absolute` または `fixed` に設定されている場合、 `bottom` プロパティは要素の下辺と包含ブロックの下辺との間の距離を指定します。
- `position` が `relative` に設定されている場合、 `bottom` プロパティは要素の下辺が通常位置から上方向へ移動する量を指定します。
- `position` が `sticky` に設定されている場合、 `bottom` プロパティは sticky 制約の矩形を計算するために使用されます。
- `position` が `static` に設定されている場合、 `bottom` プロパティは*効果がありません*。

{{cssxref("top")}} と `bottom` の両方が指定されており、 `position` が `absolute` または `fixed` に設定されており、_かつ_ {{cssxref("height")}} が未指定 (`auto` または `100%` のどちらか) の場合は、 `top` と `bottom` の距離が尊重されます。それ以外の場合、 {{cssxref("height")}} が何らかの形で制約されていた場合、または `position` が `relative` に設定されていた場合は、 `top` プロパティが優先されて `bottom` プロパティは無視されます。

## 構文

```css
/* <length> 値 */
bottom: 3px;
bottom: 2.4em;

/* 包含ブロックの高さに対する <percentage> */
bottom: 10%;

/* キーワード値 */
bottom: auto;

/* グローバル値 */
bottom: inherit;
bottom: initial;
bottom: revert;
bottom: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}

  - : 負、null、または正の {{cssxref("&lt;length&gt;")}} で、以下のものを表します。

    - *絶対位置指定要素*の場合は、包含ブロックの下辺までの距離。
    - *相対位置指定要素*の場合は、通常の位置からの上方向への移動量。

- {{cssxref("&lt;percentage&gt;")}}
  - : 包含ブロックの高さに対する {{cssxref("&lt;percentage&gt;")}} です。
- `auto`

  - : 以下のように指定します。

    - *絶対位置指定要素*では、要素の位置は {{Cssxref("top")}} プロパティに基づいて決まり、 `height: auto` は内容物の高さに基づいて決まります。また、 `top` も `auto` であった場合は、要素は垂直方向には静的要素が配置される場合と同様に配置されます。
    - *相対位置指定要素*では、通常の位置から要素までの距離は {{Cssxref("top")}} に基づきます。また、 `top` も `auto` であった場合は、垂直方向には移動しません。

- `inherit`
  - : 値が親要素 (包含ブロックとは限りません) の計算値と同じであることを示すキーワードです。そして、この計算値は {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, または `auto` キーワードと同様に扱われます。

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

<h3 id="Absolute_and_fixed_positioning">絶対位置指定と固定位置指定</h3>

この例は、 {{cssxref("position")}} が `absolute` と `fixed` であった場合の `bottom` プロパティの動作の違いを示します。

#### HTML

```html
<p>
  This<br />is<br />some<br />tall,<br />tall,<br />tall,<br />tall,<br />tall<br />content.
</p>
<div class="fixed"><p>Fixed</p></div>
<div class="absolute"><p>Absolute</p></div>
```

#### CSS

```css
p {
  font-size: 30px;
  line-height: 2em;
}

div {
  width: 48%;
  text-align: center;
  background: rgba(55, 55, 55, 0.2);
  border: 1px solid blue;
}

.absolute {
  position: absolute;
  bottom: 0;
  left: 0;
}

.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
}
```

### 結果

{{EmbedLiveSample('Absolute_and_fixed_positioning','500','250')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("inset")}}: 関連するすべてのプロパティである {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("right")}} の一括指定
- 対応する論理的プロパティ: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, {{cssxref("inset-inline-end")}} および一括指定の {{cssxref("inset-block")}} と {{cssxref("inset-inline")}}
- {{cssxref("position")}}
