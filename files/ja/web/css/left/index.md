---
title: left
slug: Web/CSS/left
---

{{CSSRef}}

**`left`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[位置指定要素](/ja/docs/Web/CSS/position)の水平位置の決定に関与します。位置指定されていない要素には効果はありません。

{{EmbedInteractiveExample("pages/css/left.html")}}

## 構文

```css
/* <length> 値 */
left: 3px;
left: 2.4em;

/* 包含ブロックの幅に対する <percentage> */
left: 10%;

/* キーワード値 */
left: auto;

/* グローバル値 */
left: inherit;
left: initial;
left: revert;
left: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}

  - : 負、null、または正の {{cssxref("&lt;length&gt;")}} で、以下のものを表します。

    - *絶対位置指定要素*の場合は、包含ブロックの左辺までの距離。
    - *相対位置指定要素*の場合は、通常の位置からの右方向への移動量。

- {{cssxref("&lt;percentage&gt;")}}
  - : 包含ブロックの幅に対する {{cssxref("&lt;percentage&gt;")}} です。
- `auto`

  - : 以下のように指定します。

    - *絶対位置指定要素*では、要素の位置は {{Cssxref("right")}} プロパティに基づいて決まり、 `width: auto` は内容物の幅に基づいて決まります。また、 `right` も `auto` であった場合は、要素は水平方向には静的要素が配置される場合と同様に配置されます。
    - *相対位置指定要素*では、通常の位置から要素までの距離は {{Cssxref("right")}} に基づきます。また、 `right` も `auto` であった場合は、水平方向には移動しません。

- `inherit`
  - : 値が親要素 (包含ブロックとは限りません) の計算値と同じであることを示すキーワードです。そして、この計算値は {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, または `auto` キーワードと同様に扱われます。

## 解説

`left` の効果は、要素がどの様に配置されているか (つまり、 {{cssxref("position")}} プロパティの値) によって変わります。

- `position` が `absolute` または `fixed` に設定されている場合、 `left` プロパティは要素の左辺と包含ブロックの左辺との間の距離を指定します。 (包含ブロックは相対配置された祖先の要素です。)
- `position` が `relative` に設定されている場合、 `left` プロパティは要素の左辺が通常位置から右方向へ移動する量を指定します。
- `position` が `sticky` に設定されている場合、 `left` プロパティは sticky 制約の矩形を計算するために使用されます。
- `position` が `static` に設定されている場合、 `left` プロパティは*効果がありません*。

`left` と {{cssxref("right")}} の両方が定義されていて、幅の制約がない場合、要素は両方を満たすように伸縮されます。要素が両方を満たすように伸縮できない場合、要素の位置は*過剰指定*になります。このような場合、包含ブロックが左書きの場合は `left` の値が優先され、包含ブロックが右書きの場合は `right` の値が優先されます。

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

<h3 id="Positioning_elements">位置指定要素</h3>

#### HTML

```html
<div id="wrap">
  <div id="example_1">
    <pre>
      position: absolute;
      left: 20px;
      top: 20px;
    </pre>
    <p>
      The only containing element for this div is the main window, so it
      positions itself in relation to it.
    </p>
  </div>

  <div id="example_2">
    <pre>
      position: relative;
      top: 0;
      right: 0;
    </pre>
    <p>Relative position in relation to its siblings.</p>
  </div>

  <div id="example_3">
    <pre>
      float: right;
      position: relative;
      top: 20px;
      left: 20px;
    </pre>
    <p>Relative to its sibling div above, but removed from flow of content.</p>

    <div id="example_4">
      <pre>
        position: absolute;
        bottom: 10px;
        right: 20px;
      </pre>
      <p>Absolute position inside of a parent with relative position</p>
    </div>

    <div id="example_5">
      <pre>
        position: absolute;
        right: 0;
        left: 0;
        top: 200px;
      </pre>
      <p>Absolute position with both left and right declared</p>
    </div>
  </div>
</div>
```

#### CSS

```css
#wrap {
  width: 700px;
  margin: 0 auto;
  background: #5c5c5c;
}

pre {
  white-space: pre;
  white-space: pre-wrap;
  white-space: pre-line;
  word-wrap: break-word;
}

#example_1 {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 20px;
  top: 20px;
  background-color: #d8f5ff;
}

#example_2 {
  width: 200px;
  height: 200px;
  position: relative;
  top: 0;
  right: 0;
  background-color: #c1ffdb;
}
#example_3 {
  width: 600px;
  height: 400px;
  position: relative;
  top: 20px;
  left: 20px;
  background-color: #ffd7c2;
}

#example_4 {
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: 10px;
  right: 20px;
  background-color: #ffc7e4;
}
#example_5 {
  position: absolute;
  right: 0;
  left: 0;
  top: 100px;
  background-color: #d7ffc2;
}
```

#### 結果

{{EmbedLiveSample('Positioning_elements',1200,650)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("inset")}}: 関連するすべてのプロパティである {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("right")}} の一括指定
- 対応する論理的プロパティ: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, {{cssxref("inset-inline-end")}} および一括指定の {{cssxref("inset-block")}} と {{cssxref("inset-inline")}}
- {{cssxref("position")}}
