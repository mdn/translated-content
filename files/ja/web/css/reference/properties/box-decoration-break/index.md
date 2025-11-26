---
title: box-decoration-break
slug: Web/CSS/Reference/Properties/box-decoration-break
original_slug: Web/CSS/box-decoration-break
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`box-decoration-break`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の[断片](/ja/docs/Web/CSS/Guides/Fragmentation)が複数の行、段、ページに渡る場合に描画する方法を指定します。

{{InteractiveExample("CSS デモ: box-decoration-break")}}

```css interactive-example-choice
-webkit-box-decoration-break: slice;
box-decoration-break: slice;
```

```css interactive-example-choice
-webkit-box-decoration-break: clone;
box-decoration-break: clone;
```

```html interactive-example
<section id="default-example">
  <div id="example-container">
    <span id="example-element">このテキストは複数の行に分割されます。</span>
  </div>
</section>
```

```css interactive-example
#example-container {
  width: 14rem;
}

#example-element {
  background: linear-gradient(to bottom right, #6f6f6f, #000);
  color: white;
  box-shadow:
    8px 8px 10px 0 #ff1492,
    -5px -5px 5px 0 #00f,
    5px 5px 15px 0 #ff0;
  padding: 0 1em;
  border-radius: 16px;
  border-style: solid;
  margin-left: 10px;
  font: 24px sans-serif;
  line-height: 2;
}
```

指定された値は、次のプロパティの表示方法に影響を与えます。

- {{Cssxref("background")}}
- {{Cssxref("border")}}
- {{Cssxref("border-image")}}
- {{Cssxref("box-shadow")}}
- {{Cssxref("clip-path")}}
- {{Cssxref("margin")}}
- {{Cssxref("padding")}}

## 構文

```css
/* キーワード値 */
box-decoration-break: slice;
box-decoration-break: clone;

/* グローバル値 */
box-decoration-break: inherit;
box-decoration-break: initial;
box-decoration-break: revert;
box-decoration-break: revert-layer;
box-decoration-break: unset;
```

`box-decoration-break` プロパティは、以下の一覧にあるキーワード値の一つで指定します。

### 値

- `slice`
  - : 要素は最初、ボックスが断片化していないかのように描画され、その後でこの仮想ボックスに描画されたものが、それぞれの行/段/ページの部分に分割されます。なお、仮想ボックスはインライン方向に分割された場合には独自の高さを使用し、ブロック方向に分割された場合は独自の幅を使用するため、それぞれの断片ごとに異なる場合があることに注意してください。詳しくは CSS の仕様書を参照してください。
- `clone`
  - : それぞれの断片が、それぞれの断片を囲む指定された境界、パディング、マージンを伴って個別に描画されます。 {{ Cssxref("border-radius") }}, {{ Cssxref("border-image") }}, {{ Cssxref("box-shadow") }} はそれぞれの断片に個別に適用されます。背景もそれぞれの断片で個別に描画されます。つまり、 {{ Cssxref("background-repeat", "background-repeat: no-repeat") }} がついた背景画像であっても、複数回繰り返されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### インラインボックスの断片化

ボックス装飾を持つインライン要素は、最初の `slice` により、改行を含むと予期しない外観になる場合があります。次の例は、{{htmlelement("br")}} タグを含む {{htmlelement("span")}} に `box-decoration-break: clone` を追加した場合の効果を示しています。

```css hidden
body {
  display: flex;
  background-color: grey;
  justify-content: space-around;
}

span {
  padding: 0em 1em;
  border-radius: 1rem;
  border-style: solid;
  margin: 1rem;
  font: 22px sans-serif;
  line-height: 2;
}
```

```css
span {
  background: linear-gradient(to bottom right, yellow, green);
  box-shadow:
    8px 8px 10px 0px deeppink,
    -5px -5px 5px 0px blue,
    5px 5px 15px 0px yellow;
}

#clone {
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}
```

```html
<p>
  <span>The<br />quick<br />orange fox</span>
</p>
<p>
  <span id="clone">The<br />quick<br />orange fox</span>
</p>
```

{{embedlivesample("inline_box_fragments", "100%", "210")}}

### ブロックボックスの断片化

次の例は、[段組みレイアウト](/ja/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)で、ボックス装飾を持つブロック要素に改行が含まれている場合の表示を示しています。
`box-decoration-break: slice` の結果は、垂直に積み重ねた場合、最初の {{htmlelement("div")}} と同等になることに注意してください。

```css hidden
body {
  background-color: grey;
}
span {
  padding: 0em 2em;
  border-radius: 250px;
  border-style: solid;
  margin-left: 1em;
  font: 20px sans-serif;
  line-height: 1.5;
}
```

```css
span {
  display: block;
  background: linear-gradient(to bottom right, yellow, green);
  box-shadow:
    inset 8px 8px 10px 0px deeppink,
    inset -5px -5px 5px 0px blue,
    inset 5px 5px 15px 0px yellow;
}
#base {
  width: 33%;
}
.columns {
  columns: 3;
}

.clone {
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}
```

```html
<div id="base">
  <span>The<br />quick<br />orange fox</span>
</div>
<br />

<h2>'box-decoration-break: slice'</h2>
<div class="columns">
  <span>The<br />quick<br />orange fox</span>
</div>

<h2>'box-decoration-break: clone'</h2>
<div class="columns">
  <span class="clone">The<br />quick<br />orange fox</span>
</div>
```

{{embedlivesample("block_box_fragments", "", "340")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("break-after")}}, {{cssxref("break-before")}}, {{cssxref("break-inside")}}
