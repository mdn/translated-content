---
title: anchor()
slug: Web/CSS/Reference/Values/anchor
original_slug: Web/CSS/anchor
l10n:
  sourceCommit: fe427ad725f3cf1add1299de3cadfbb2bb05ed14
---

{{SeeCompatTable}}

**`anchor()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、**アンカー位置指定**要素の[インセットプロパティ](#properties_that_accept_anchor_function_values)値内で使用することができ、関連付けられたアンカー要素の端の位置に対する長さの値を返します。

## 構文

```css
/* 方向とパーセント値 */
top: anchor(bottom);
top: anchor(50%);
top: calc(anchor(bottom) + 10px)
inset-block-end: anchor(start);

/* 名前付きアンカーの方向 */
top: anchor(--myAnchor bottom);
inset-block-end: anchor(--myAnchor start);

/* 代替付き名前付きアンカーの方向 */
top: anchor(--myAnchor bottom, 50%);
inset-block-end: anchor(--myAnchor start, 200px);
left: calc(anchor(--myAnchor right, 0%) + 10px);
```

### 引数

`anchor()` 関数の構文は次の通りです。

```plain
anchor(<anchor-name> <anchor-side>, <length-percentage>)
```

引数は次の通りです。

- `<anchor-name>` {{optional_inline}}
  - : この要素の端に相対的に配置したいアンカー要素の [`anchor-name`](/ja/docs/Web/CSS/Reference/Properties/anchor-name) プロパティの値です。これは `<dashed-ident>` 値です。省略された場合は、その要素の**既定のアンカー**で、これはその要素の [`position-anchor`](/ja/docs/Web/CSS/Reference/Properties/position-anchor) プロパティで参照されているもの、またはその要素に関連付けられた HTML の [`anchor`](/ja/docs/Web/HTML/Reference/Global_attributes/anchor) 属性が使用されます。

    > [!NOTE]
    > `<anchor-name>` を `anchor()` 関数内で指定しても、要素とアンカーを関連付けることはできず、そのアンカーに対する要素の位置指定のみとなります。関連付けを作成するには、CSS の [`position-anchor`](/ja/docs/Web/CSS/Reference/Properties/position-anchor) プロパティまたは HTML の [`anchor`](/ja/docs/Web/HTML/Reference/Global_attributes/anchor) 属性が必要です。

- `<anchor-side>`
  - : アンカーの辺、または要素が位置指定された `start` の辺からの相対距離を指定します。 `anchor()` を設定する際に、インセットプロパティと[互換性](#インセットプロパティと_anchor-side_の値の互換性)のない物理値または論理値が使用された場合、代替値が使用されます。 有効な値としては、次のものがあります。
    - `top`
      - : このアンカー要素の上辺です。
    - `right`
      - : このアンカー要素の右辺です。
    - `bottom`
      - : このアンカー要素の下辺です。
    - `left`
      - : このアンカー要素の左辺です。
    - `start`
      - : アンカー要素の[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)の、この `anchor()` 関数が設定されているインセットプロパティの軸の論理的な先頭側です。
    - `end`
      - : アンカー要素の包含ブロックの、この `anchor()` 関数が設定されているインセットプロパティの軸の論理的な末尾側です。
    - `self-start`
      - : アンカー要素のコンテンツの、この `anchor()` 関数が設定されているインセットプロパティの軸の論理的な先頭側です。
    - `self-end`
      - : アンカー要素のコンテンツの、この `anchor()` 関数が設定されているインセットプロパティの軸の論理的な末尾側です。
    - `center`
      - : この `anchor()` 関数が設定されているインセットプロパティの軸の中央です。
    - {{cssxref("percentage")}}
      - : この `anchor()` 関数が設定されているインセットプロパティの軸の先頭からの距離をパーセント値で指定します。

    CSS アンカー位置指定モジュールでは、`<anchor-side>` 値として `inside` と `outside` の 2 つを追加指定していますが、これらはまだ実装されていません。

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : `anchor()` 関数が有効でない場合に、関数が解決すべき代替値を指定します。

### 返値

{{cssxref("length")}} 値を返します。

## 解説

`anchor()` 関数により、アンカー要素の辺に関連した要素の位置指定をすることができます。これは、絶対位置指定または固定位置指定要素に設定された{{glossary("inset properties", "インセットプロパティ")}}値でのみ有効です。

これは `<length>` 値で、インセット値で指定されたアンカー配置要素側と、選択された `<anchor-side>` 値で指定されたアンカー要素側との間の距離を指定する値を返します。 `<length>` を返すため、長さの値を受け入れる[他の CSS 関数](/ja/docs/Web/CSS/Reference/Values/Functions)内、例えば {{cssxref("calc()")}}、{{cssxref("clamp()")}} などで使用することができます。

`<anchor-name>` で指定された名前がついたアンカーが存在しない場合、または、位置指定要素に（{{cssxref("position-anchor")}} プロパティを介して）関連付けられたアンカーがない場合、最初の引数は不正なものと見なされ、利用できる場合は、代替の `<length-percentage>` 値が使用されます。例えば、位置指定要素に `top: anchor(bottom, 50px)` が指定されていたものの、その要素に関連付けられたアンカーがなかった場合、代替値が使用されるため、 `top` は `50px` という計算値になります。

アンカー機能および使用方法の詳細については、 [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュールのランディングページ、および「[CSS アンカー位置指定の使用](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)ガイド」をご覧ください。

### `anchor()` 関数値を受け入れるプロパティ

CSS の{{glossary("inset properties", "インセットプロパティ")}}のうち、値部分として `anchor()` 関数を受け入れるのは次のようなものがあります。

- {{cssxref("top")}}
- {{cssxref("left")}}
- {{cssxref("bottom")}}
- {{cssxref("right")}}
- {{cssxref("inset")}} 一括指定
- {{cssxref("inset-block-start")}}
- {{cssxref("inset-block-end")}}
- {{cssxref("inset-block")}} 一括指定
- {{cssxref("inset-inline-start")}}
- {{cssxref("inset-inline-end")}}
- {{cssxref("inset-inline")}} 一括指定

### インセットプロパティと `<anchor-side>` の値の互換性

インセットプロパティ値の中で `anchor()` 関数を使用する場合、`anchor()` 関数の中で指定する `<anchor-side>` 引数は、そのインセットプロパティが所属する軸と互換性のあるものでなければなりません。

つまり、そのプロパティが `<anchor-side>` と同じ軸方向である場合、物理的な `<anchor-side>` 値を物理的なインセットプロパティの値内で使用することができます。言い換えれば、`top` と `bottom` の辺は `left` と `right` のプロパティ値内では有効ではなく、また、`left` と `right` の辺は `top` と `bottom` のプロパティ値内では有効ではありません。例えば、`top: anchor(bottom)` はどちらも垂直値なので問題ありませんが、`top: anchor(left)` は `left` が水平値なので無効です。 `top: anchor(left, 50px)` を指定した場合、代替値が使用されるため、`top` の計算値は `50px` となります。代替値が存在しない場合、インセットプロパティは、`auto` に設定されているかのように動作します。

論理的な `<anchor-side>` 値は、論理的なインセットプロパティでも物理的なインセットプロパティでも使用することができます。論理的な `<anchor-side>` 値は、プロパティが論理的か相対的かに関わらず、インセットプロパティに関連する軸に対する相対的な値になります。例えば、`top: anchor(start)`、`top: anchor(self-end)`、`inset-block-start: anchor(end)`、`inset-inline-end: anchor(self-start)` はすべてうまく動作します。

論理的なインセットプロパティ値内で物理的な `<anchor-side>` 引数を使用すると、話が複雑になります。物理的な辺は、現在の書字方向においてインセットプロパティが関連する軸と一致しなければならないからです。例を示します。

- 横書きの場合、ブロックの方向は上から下なので、`inset-block-end: anchor(bottom)` は動作しますが、`inset-block-end: anchor(left)` は動作しません。`inset-block-end: anchor(left, 50px)` を設定すると、計算された値は `50px` となり、位置指定要素は、設定された `position` 値に応じて、最も近い位置指定された祖先要素またはビューポートのブロックの末尾（下）から `50px` の位置に配置されます。
- 縦書きの場合、ブロックの方向は右から左または左から右であるため、`inset-block-end: anchor(left)` は動作しますが、`inset-block-end: anchor(top)` は動作しません。`inset-block-end: anchor(top, 50px)` が設定された場合、その計算値は `50px` となり、位置指定要素は、設定された `position` 値に応じて、最も近い位置指定された祖先要素またはビューポートのブロックの末尾（左か右のどちらかは、書字方向によります）から `50px` の位置に配置されます。

これらの値による混乱を避けるため、論理的なインセットプロパティには論理的な `<anchor-side>` 値を、物理的なインセットプロパティには物理的な `<anchor-side>` 値を使用することをお勧めします。 論理的な値は[国際化](/ja/docs/Glossary/Internationalization)に有益なため、可能な限り論理的な値を使用しましょう。

`center` および `<percentage>` の値は、すべての論理的および物理的なインセットプロパティ内の `anchor()` 関数内で有効です。

以下の表は、インセットプロパティと、それらと互換性のある `<anchor-side>` 引数の値を一覧表示しています。 掲載されているのは個別指定プロパティのみです。これらのプロパティ値は、一括指定プロパティの値を構成するものです。

| インセットプロパティ                           | 互換性のある `<anchor-side>` の値                                                                                |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| すべて                                         | `center`                                                                                                         |
| すべて                                         | `<percentage>`                                                                                                   |
| `top` および `bottom`                          | `top`, `bottom`, `start`, `end`, `self-start`, `self-end`                                                        |
| `left` および `right`                          | `left`, `right`, `start`, `end`, `self-start`, `self-end`                                                        |
| `inset-block-start` および `inset-block-end`   | `start`, `end`, `self-start`, `self-end`<br>横書きでは `top` および `bottom`<br>縦書きでは `left` および `right` |
| `inset-inline-start` および `inset-inline-end` | `start`, `end`, `self-start`, `self-end`<br>横書きでは `left` および `right`<br>縦書きでは `top` および `bottom` |

### `anchor()` を `calc()` の中で使用

`anchor()` 関数が既定のアンカーの辺を参照する場合、必要に応じて、マージン ({{cssxref("margin")}}) を含めることができ、アンカーと位置指定された要素の端の間に空間を設けることができます。 あるいは、`anchor()` 関数を {{cssxref("calc")}} 関数内に記載して、空間を追加することもできます。

この例では、位置指定された要素の正しい辺をアンカー要素の左辺に揃え、その後にマージンを追加して辺の間に空間を作ります。

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

この例では、位置指定された要素の論理ブロックの末尾が、アンカー要素の論理ブロックの先頭位置から 10px の距離に置かれます。

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

### 複数のアンカーに相対的な要素の位置指定

同じ要素上の異なる `<anchor-name>` 値を異なるインセットプロパティの `anchor()` 関数内に指定することで、複数のアンカーに対して要素を相対的に配置することができます（下記の[複数のアンカーに対して相対的に配置された要素](#複数のアンカーに対して相対的に配置された要素)を参照）。 これは、位置指定された要素の角でサイズ変更に使用できるドラッグハンドルを作成するなど、有用な機能を作成するために使用できます。

位置指定要素は、複数のアンカー要素に対して相対的に位置づけることができますが、その要素は、[`position-anchor`](/ja/docs/Web/CSS/Reference/Properties/position-anchor) プロパティ（または HTML の [`anchor`](/ja/docs/Web/HTML/Reference/Global_attributes/anchor) 属性）で定義された単一のアンカーと関連付けられたものとなります。これは、ページがスクロールした際に、その要素がスクロールするアンカーです。また、要素が[条件付きで非表示](/ja/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements)になるタイミングを制御するために使用することもできます。

## 形式文法

{{csssyntax}}

## 例

### 一般的な使用法

この例では、 `anchor()` 関数を使用して、アンカーで位置指定された要素の高さをアンカーの高さに設定します。下端と上端をアンカーの下端と上端に設定することで、高さを設定します。次に、`calc()` 関数内で `anchor()` 関数を使用して、アンカーで位置指定された要素をアンカーからずらします。

#### HTML

アンカーとして設定する {{htmlelement("div")}} 要素と、そのアンカーから相対的に位置指定する {{htmlelement("p")}} 要素を設置します。

```html
<div class="anchor">⚓︎</div>

<p class="positionedElement">これは位置指定要素です。</p>
```

#### CSS

アンカー要素の `anchor-name` 値を、位置指定要素の `position-anchor` プロパティの値として設定し、要素を関連付けます。次に、アンカー要素に 3 つのインセットプロパティを設定します。最初の 2 つのプロパティでは、要素の上端をアンカーの上端と揃え、下端をアンカーの下端と揃えます。 3 つ目のインセットプロパティでは、 `anchor()` 関数を `calc()` 関数内で使用して、その要素の左端をアンカーの右端から `10px` の位置に位置指定します。

```css
.anchor {
  anchor-name: --infobox;
  background: palegoldenrod;
  font-size: 3em;
  width: fit-content;
  border: 1px solid goldenrod;
}

.positionedElement {
  position: absolute;
  position-anchor: --infobox;
  margin: 0;
  top: anchor(top);
  left: calc(anchor(right) + 10px);
  bottom: anchor(bottom);
  background-color: olive;
  border: 1px solid darkolivegreen;
}
```

#### 結果

{{EmbedLiveSample("一般的な使用法", "100%", '240')}}

### 様々な anchor-side 値の比較

この例では、anchor()関数を使用して定義されたtopおよびleftプロパティを介して、要素がアンカーに対して相対的に位置指定されることを確認できます。 また、 2 つのドロップダウンメニューが含まれており、 `anchor()` 関数内で `<anchor-side>` 値を変更することができます。これにより、それらの値がどのような効果をもたらすかを確認することができます。

#### HTML

2 つの {{htmlelement("div")}} 要素を指定します。 1 つはクラスが `anchor`、もう 1 つはクラスが `infobox` です。これにより、それぞれ意図通りにアンカー要素と位置指定要素が関連付けられます。

また、 2 つの `<div>` 要素の周りにいくつかのフィラーテキストを記載して、 {{htmlelement("body")}} の高さを高くして、スクロールするようにしています。この例では、ドロップダウンメニューを作成する 2 つの {{htmlelement("select")}} 要素も設置しており、これにより、位置指定要素を配置する際に、さまざまな `<anchor-side>` 値を選択することができます。ここでは、説明を簡潔にするために、フィラーテキストと `<select>` 要素を非表示にしています。

```html hidden
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
```

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>これは情報ボックスです。</p>
</div>
```

```html hidden
<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>

<form>
  <div>
    <label for="top-anchor-side">
      Choose a vertical <code>anchor()</code> value:
    </label>
    <select id="top-anchor-side" name="top-anchor-side">
      <option value="top">top: anchor(top)</option>
      <option value="bottom" selected>top: anchor(bottom)</option>
      <option value="start">top: anchor(start)</option>
      <option value="end">top: anchor(end)</option>
      <option value="center">top: anchor(center)</option>
      <option value="0%">top: anchor(0%)</option>
      <option value="25%">top: anchor(25%)</option>
      <option value="50%">top: anchor(50%)</option>
      <option value="75%">top: anchor(75%)</option>
      <option value="100%">top: anchor(100%)</option>
    </select>
  </div>
  <div>
    <label for="left-anchor-side">
      Choose a horizontal <code>anchor()</code> value:
    </label>
    <select id="left-anchor-side" name="left-anchor-side">
      <option value="left">left: anchor(left)</option>
      <option value="right" selected>left: anchor(right)</option>
      <option value="self-start">left: anchor(self-start)</option>
      <option value="self-end">left: anchor(self-end)</option>
      <option value="center">left: anchor(center)</option>
      <option value="0%">left: anchor(0%)</option>
      <option value="25%">left: anchor(25%)</option>
      <option value="50%">left: anchor(50%)</option>
      <option value="75%">left: anchor(75%)</option>
      <option value="100%">left: anchor(100%)</option>
    </select>
  </div>
</form>
```

#### CSS

`anchor` の `<div>` をアンカー要素として宣言するために、 {{cssxref("anchor-name")}} プロパティによってアンカー名を設定します。次に、 {{cssxref("position-anchor")}} プロパティに同じ値を設定することで、位置指定された要素と関連付けます。 `top: anchor(--myAnchor bottom)` は、情報ボックスの上端をアンカーの下端に揃えて配置します。一方、 `left: anchor(right)` は、情報ボックスの左端をアンカーの右端に揃えて配置します。これは、ドロップダウンメニューから異なる値が選択された場合に上書きされる初期位置を指定します。

```css hidden
.anchor {
  font-size: 2rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

body {
  width: 80%;
  margin: 0 auto;
}

form {
  background: white;
  border: 1px solid black;
  padding: 5px;
  position: fixed;
  top: 0;
  right: 2px;
}

select {
  display: block;
  margin-top: 5px;
}

form div:last-child {
  margin-top: 10px;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.anchor {
  anchor-name: --myAnchor;
}

.infobox {
  position: fixed;
  position-anchor: --myAnchor;
  top: anchor(--myAnchor bottom);
  left: anchor(right);
}
```

#### JavaScript

新しい `<anchor-side>` 値が選択された際に発生する `change` イベントを待ち受けし、選択された値を、情報ボックスの関連するインセットプロパティ（`top` または `left`）の値内の `anchor()` 関数の `<anchor-side>` として設定します。

```js
const infobox = document.querySelector(".infobox");
const topSelect = document.querySelector("#top-anchor-side");
const leftSelect = document.querySelector("#left-anchor-side");

topSelect.addEventListener("change", (e) => {
  const anchorSide = e.target.value;
  infobox.style.top = `anchor(--myAnchor ${anchorSide})`;
});

leftSelect.addEventListener("change", (e) => {
  const anchorSide = e.target.value;
  infobox.style.left = `anchor(${anchorSide})`;
});
```

#### 結果

ドロップダウンメニューからさまざまな値を指定して、情報ボックスの位置指定にどのような影響があるかを確認してください。

{{EmbedLiveSample("様々な anchor-side 値の比較", "100%", '240')}}

### 複数のアンカーに対して相対的に配置された要素

例えば、 2 つの異なるアンカーに対して要素を相対的に位置指定し、アンカーで位置指定された要素の左上と右下の位置を設定することができます。 アンカーは、キーボードのコントロールを使用して移動したり、位置指定された要素をドラッグしてサイズを変更したりすることができます。

#### HTML

全部で 3 つの {{htmlelement("div")}} 要素を設置します。最初の 2 つはクラスが `anchor` であり、アンカーとして定義されます。それぞれに個別の `id` を持っており、異なる位置指定情報として使用されます。最後の `<div>` はクラスが `infobox` であり、位置指定要素として定義されます。 [`tabindex`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) 属性を記載して、キーボードフォーカスを受け取れるようにします。

```html
<div id="anchor1" class="anchor" tabindex="0">⚓︎1</div>

<div id="anchor2" class="anchor" tabindex="0">⚓︎2</div>

<div class="infobox">
  <p>これは情報ボックスです。</p>
</div>
```

#### CSS

```css hidden
body {
  width: 150vw;
  height: 150vh;
}

.anchor {
  font-size: 1rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
  &:focus {
    background-color: hsl(60 100% 75%);
  }
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

アンカーにはそれぞれ異なる {{cssxref("anchor-name")}} の値とし、 {{cssxref("position")}} の値を `absolute` とし、異なるインセット値を設定することで、アンカーを長方形に配置します。

```css
.anchor {
  position: absolute;
}

#anchor1 {
  anchor-name: --myAnchor1;
  top: 50px;
  left: 100px;
}

#anchor2 {
  anchor-name: --myAnchor2;
  top: 200px;
  left: 350px;
}
```

アンカー位置指定された要素は、 `position` を `fixed` に設定し、 {{cssxref("position-anchor")}} プロパティによって 1 つのアンカーに関連付けられています。そのインセットプロパティに設定された `anchor()` 関数に 2 つの異なる `<anchor-name>` 値が含まれていることで、 2 つのアンカーに関連して位置指定されます。この場合、 {{cssxref("percentage")}} 値を `<anchor-side>` 引数に使用し、関数を設定するインセットプロパティの軸の先頭からの距離を指定します。

```css
.infobox {
  position-anchor: --myAnchor1;
  position: fixed;
  top: anchor(--myAnchor1 100%);
  left: anchor(--myAnchor1 100%);
  bottom: anchor(--myAnchor2 0%);
  right: anchor(--myAnchor2 0%);
}
```

```js hidden
// すべてのアンカーを掴み、それぞれドラッグ可能にする
const anchors = document.querySelectorAll(".anchor");
anchors.forEach((anchor) => makeDraggable(anchor));

function makeDraggable(elem) {
  let pos1, pos2, pos3, pos4;

  elem.onmousedown = dragMouseDown;
  elem.addEventListener("keyup", (e) => {
    switch (e.key) {
      case "d":
        elem.style.left = elem.offsetLeft + 5 + "px";
        break;
      case "a":
        elem.style.left = elem.offsetLeft - 5 + "px";
        break;
      case "w":
        elem.style.top = elem.offsetTop - 5 + "px";
        break;
      case "s":
        elem.style.top = elem.offsetTop + 5 + "px";
        break;
    }
    e.preventDefault();
  });

  function elementMove(e) {
    console.dir(e);
    // 新しいカーソル位置を計算
    pos1 = pos3 - e.offsetLeft;
    pos2 = pos4 - e.offsetTop;
    pos3 = e.offsetLeft;
    pos4 = e.offsetTop;
    // 要素の新しい位置を設定
    elem.style.top = elem.offsetTop - pos2 + "px";
    elem.style.left = elem.offsetLeft - pos1 + "px";
  }

  function dragMouseDown(e) {
    // 開始時のマウスカーソル位置を取得
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // マウスが動くたびに関数を呼び出す
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    // 新しいカーソル位置を計算
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // 要素の新しい位置を設定
    elem.style.top = elem.offsetTop - pos2 + "px";
    elem.style.left = elem.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // マウスボタンが離されたときに動きを止める
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
```

#### 結果

位置指定された要素は、両方のアンカー要素に対して相対的に位置指定されます。 マウスまたはタブキーでそれらをドラッグし、<kbd>W</kbd>、<kbd>A</kbd>、<kbd>S</kbd>、<kbd>D</kbd> キーを使用して、それらを上下左右に移動します。 この操作により、それらの位置がどのように変化し、その結果として位置指定された要素の領域がどのように変化するかを確かめてください。すべての要素の位置が維持される様子を確認するには、スクロールしてください。

{{EmbedLiveSample("複数のアンカーに対して相対的に配置された要素", "100%", '350')}}

> [!NOTE]
> この例は概念の実証であり、実運用コードとして意図通りに動作することを保証するものではありません。例えば、アンカーを水平または垂直になるように移動させようとすると、この例は動作しなくなります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("position-anchor")}}
- {{cssxref("position-area")}}
- {{cssxref("anchor-size()")}} 関数
- [CSS アンカー位置指定の使用](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)ガイド
- [オーバーフローの扱い: try fallbacks and conditional hiding](/ja/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)ガイド
- [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュール
