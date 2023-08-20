---
title: border-style
slug: Web/CSS/border-style
---

{{CSSRef}}

**`border-style`** は [一括指定](/ja/docs/Web/CSS/Shorthand_properties) の [CSS](/ja/docs/Web/CSS) プロパティで、要素の境界線の 4 辺すべての線のスタイルを設定します。

{{EmbedInteractiveExample("pages/css/border-style.html")}}

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`border-bottom-style`](/ja/docs/Web/CSS/border-bottom-style)
- [`border-left-style`](/ja/docs/Web/CSS/border-left-style)
- [`border-right-style`](/ja/docs/Web/CSS/border-right-style)
- [`border-top-style`](/ja/docs/Web/CSS/border-top-style)

## 構文

```css
/* キーワード値 */
border-style: none;
border-style: hidden;
border-style: dotted;
border-style: dashed;
border-style: solid;
border-style: double;
border-style: groove;
border-style: ridge;
border-style: inset;
border-style: outset;

/* 上下 | 左右 */
border-style: dotted solid;

/* 上 | 左右 | 下 */
border-style: hidden double dashed;

/* 上 | 右 | 下 | 左 */
border-style: none solid dotted dashed;

/* グローバル値 */
border-style: inherit;
border-style: initial;
border-style: revert;
border-style: unset;
```

`border-style` プロパティは 1 つ、 2 つ、 3 つ、 4 つの値を使って指定することができます。

- 値が **1 つ**指定された場合、**全 4 辺**に同じスタイルが適用される。
- 値が **2 つ**指定された場合、1 つ目のスタイルは**上下**、2 つ目は**左右**の辺に適用される。
- 値が **3 つ**指定された場合、1 つ目のスタイルは**上**、2 つ目は**左右**、3 つ目は**下**の辺に適用される。
- 値が **4 つ**指定された場合、スタイルはそれぞれ**上**、**右**、**下**、**左**の順（時計回り）に適用される。

それぞれの値は以下の一覧にあるキーワードです。

### 値

- `<line-style>`

  - : 境界のスタイルを記述します。以下の値を使用することができます。

    - `none`
      - : `hidden` キーワードと同様に、境界線を表示しません。 {{cssxref("background-image")}} を設定している場合を除き、プロパティで別に指定していても {{cssxref("border-width")}} の同じ辺の計算値は `0` になります。テーブルのセルで境界線が collasped 形式である場合は、 `none` 値はもっとも低い優先度になります。ほかに競合する境界線が設定されている場合も、そちらが表示されます。
    - `hidden`
      - : `none` キーワードと同様に、境界線を表示しません。 {{cssxref("background-image")}} を設定している場合を除き、プロパティで別に指定していても {{cssxref("border-width")}} の同じ辺の計算値は `0` になります。テーブルのセルで境界線が collasped 形式である場合は、 `hidden` 値はもっとも高い優先度になります。ほかに競合する境界線が設定されている場合も、非表示になります。
    - `dotted`
      - : 連続した丸い点を表示します。点の間の空白の量は仕様書で定義されておらず、実装依存です。点の半径は、同じ辺の {{cssxref("border-width")}} の計算値の半分です。
    - `dashed`
      - : 短く角が四角い連続したダッシュや線分を表示します。線分の実寸や長さは仕様書で定義されておらず、実装依存です。
    - `solid`
      - : 1 本の直線、実線を表示します。
    - `double`
      - : 2 本の直線を表示し、幅の合計は {{cssxref("border-width")}} で定義したピクセル数になります。
    - `groove`
      - : 凹んだように見える境界線を表示します。 `ridge` の逆です。
    - `ridge`
      - : 出っ張ったように見える境界線を表示します。 `groove` の逆です。
    - `inset`
      - : 要素が埋め込まれて見える境界線を表示します。 `outset` の逆です。 {{cssxref("border-collapse")}} が `collapsed` に設定されたテーブルのセルに適用すると、この値は `groove` のようにふるまいます。
    - `outset`
      - : 要素が出っ張って見える境界線を表示します。 `inset` の逆です。 {{cssxref("border-collapse")}} を `collapsed` に設定したテーブルセルに適用すると、この値は `ridge` のようにふるまいます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="All_property_values">プロパティのすべての値</h3>

プロパティのすべての値のサンプルです。

#### HTML

```html
<pre class="b1">none</pre>
<pre class="b2">hidden</pre>
<pre class="b3">dotted</pre>
<pre class="b4">dashed</pre>
<pre class="b5">solid</pre>
<pre class="b6">double</pre>
<pre class="b7">groove</pre>
<pre class="b8">ridge</pre>
<pre class="b9">inset</pre>
<pre class="b10">outset</pre>
```

#### CSS

```css
pre {
  height: 80px;
  width: 120px;
  margin: 20px;
  padding: 20px;
  display: inline-block;
  background-color: palegreen;
  border-width: 5px;
  box-sizing: border-box;
}

/* border-style の例示用クラス */
.b1 {
  border-style: none;
}

.b2 {
  border-style: hidden;
}

.b3 {
  border-style: dotted;
}

.b4 {
  border-style: dashed;
}

.b5 {
  border-style: solid;
}

.b6 {
  border-style: double;
}

.b7 {
  border-style: groove;
}

.b8 {
  border-style: ridge;
}

.b9 {
  border-style: inset;
}

.b10 {
  border-style: outset;
}
```

### 結果

{{EmbedLiveSample('All_property_values', "1200", 450)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 境界に関する CSS 一括指定プロパティ: {{Cssxref("border")}}, {{Cssxref("border-width")}}, {{Cssxref("border-color")}}, {{Cssxref("border-radius")}}
