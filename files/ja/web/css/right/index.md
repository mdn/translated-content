---
title: right
slug: Web/CSS/right
tags:
  - CSS
  - CSS 位置指定レイアウト
  - CSS プロパティ
  - レイアウト
  - リファレンス
  - ウェブ
  - recipe:css-property
browser-compat: css.properties.right
translation_of: Web/CSS/right
---
{{CSSRef}}

**`right`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[位置指定要素](/ja/docs/Web/CSS/position)の水平位置の決定に関与します。位置指定されていない要素には効果はありません。

{{EmbedInteractiveExample("pages/css/right.html")}}

## 構文

```css
/* <length> 値 */
right: 3px;
right: 2.4em;

/* 包含ブロックの幅に対する <percentage> */
right: 10%;

/* キーワード値 */
right: auto;

/* グローバル値 */
right: inherit;
right: initial;
right: revert;
right: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}

  - : 負、null、または正の {{cssxref("&lt;length&gt;")}} で、以下のものを表します。

    - *絶対位置指定要素*の場合は、包含ブロックの右辺までの距離。
    - *相対位置指定要素*の場合は、通常の位置からの左方向への移動量。

- {{cssxref("&lt;percentage&gt;")}}
  - : 包含ブロックの幅に対する {{cssxref("&lt;percentage&gt;")}} です。
- `auto`

  - : 以下のように指定します。

    - *絶対位置指定要素*では、要素の位置は {{Cssxref("left")}} プロパティに基づいて決まり、 `width: auto` は内容物の幅に基づいて決まります。また、 `left` も `auto` であった場合は、要素は水平方向には静的要素が配置される場合と同様に配置されます。
    - *相対位置指定要素*では、通常の位置から要素までの距離は {{Cssxref("left")}} に基づきます。また、 `left` も `auto` であった場合は、水平方向には移動しません。

- `inherit`
  - : 値が親要素 (包含ブロックとは限りません) の計算値と同じであることを示すキーワードです。そして、この計算値は {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, または `auto` キーワードと同様に扱われます。

## 解説

`right` の効果は、要素がどの様に配置されているか (つまり、 {{cssxref("position")}} プロパティの値) によって変わります。

- `position` が `absolute` または `fixed` に設定されている場合、 `right` プロパティは要素の右辺と包含ブロックの右辺との間の距離を指定します。
- `position` が `relative` に設定されている場合、 `right` プロパティは要素の右辺が通常位置から左方向へ移動する量を指定します。
- `position` が `sticky` に設定されている場合、 `right` プロパティは要素がビューポート内にある場合は `position` が `relative` であるかのように、外の場合は `position` が `fixed` の場合と同様に動作します。
- `position` が `static` に設定されている場合、 `right` プロパティは*効果がありません*。

{{cssxref("left")}} と `right` の両方が定義された場合、他のプロパティで制約されていなければ、要素は両方を満たすように引き伸ばされます。もし要素が両方を満たすように伸びることができない場合 -- 例えば `width` が宣言されている場合 -- 要素の位置は*過剰制約*になります。このような場合、コンテナーが左書きの場合は `left` の値が優先され、コンテナーが右書きの場合は `right` の値が優先されます。

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

<h3 id="Absolute_and_relative_positioning_using_right">絶対位置指定および相対位置指定で right を使用</h3>

#### HTML

```html
<div id="relative">Relatively positioned</div>
<div id="absolute">Absolutely positioned</div>
```

#### CSS

```css
#relative {
  width: 100px;
  height: 100px;
  background-color: #FFC7E4;
  position: relative;
  top: 20px;
  left: 20px;
}

#absolute {
  width: 100px;
  height: 100px;
  background-color: #FFD7C2;
  position: absolute;
  bottom: 10px;
  right: 20px;
}
```

#### 結果

{{ EmbedLiveSample('Absolute_and_relative_positioning_using_right', 500, 220) }}

<h3 id="Declaring_both_left_and_right">left と right の同時指定</h3>

`left` と `right` の両方が宣言されている場合、他の制約条件がそれを妨げない限り、要素は両方を満たすように伸びます。要素が両方を満たすように伸びたり縮んだりしない場合、要素の位置が*過剰指定*のとなり、コンテナーの書字方向に基づいて優先順位が決まります。コンテナーの書字方向が左書きであれば、`left` が優先されます。コンテナーの書字方向が右書きの場合は、`right` が優先されます。

#### HTML

```html
<div id="parent">Parent
    <div id="noWidth">No width</div>
    <div id="width">width: 100px</div>
</div>
```

#### CSS

```css
div {
  outline: 1px solid #CCCCCC;
}
#parent {
  width: 200px;
  height: 200px;
  background-color: #FFC7E4;
  position: relative;
}
/* declare both a left and a right */
#width,
#noWidth {
  background-color: #C2FFD7;
  position: absolute;
  left: 0;
  right: 0;
}
/* declare a width */
#width {
  width: 100px;
  top: 60px;
}
```

#### 結果

{{ EmbedLiveSample('Declaring_both_left_and_right', 500, 220) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("inset")}}: 関連するすべてのプロパティである {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("right")}} の一括指定
- 対応する論理的プロパティ: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, {{cssxref("inset-inline-end")}} および一括指定の {{cssxref("inset-block")}} と {{cssxref("inset-inline")}}
- {{cssxref("position")}}
