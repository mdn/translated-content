---
title: position-area
slug: Web/CSS/Reference/Properties/position-area
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**`position-area`** は [CSS](/ja/docs/Web/CSS) のプロパティで、アンカー位置指定された要素を、関連付けられたアンカー要素の端を基準に相対的に配置することを可能にします。これは、配置対象の要素を暗黙の 3x3 グリッドの 1 つ以上のタイル上に配置することで実現され、アンカー要素は中央セルとなります。

`position-area` は、{{glossary("inset properties", "インセットプロパティ")}}と {{cssxref("anchor()")}} 関数を用いて要素をアンカー要素に固定・配置する従来の方法に代わる便利な手段を提供します。このグリッドベースの概念は、配置された要素の包含ブロックの端を、デフォルトのアンカー要素の端に対して位置決めするという一般的な用途を解決します。

要素にデフォルトのアンカー要素が設定されていない場合、または絶対位置指定要素ではない場合、このプロパティは効果を持ちません。

> [!NOTE]
> このプロパティは当初、Chromium ブラウザーでは `inset-area` という名前で、同じプロパティ値で使用されていました。下位互換性の目的で、しばらくの間両方のプロパティ名が対応されます。

## 構文

```css
/* デフォルト値 */
position-area: none;

/* 単一の特定のタイルを定義する 2 つの <position-area> キーワード */
position-area: top left;
position-area: start end;
position-area: block-start center;
position-area: inline-start block-end;
position-area: x-start y-end;
position-area: center self-y-end;

/* 2 つのタイルにまたがる <position-area> キーワード */
position-area: top span-left;
position-area: center span-start;
position-area: inline-start span-block-end;
position-area: y-start span-x-end;

/* 3 つのタイルにまたがる <position-area> キーワード */
position-area: top span-all;
position-area: block-end span-all;
position-area: self-x-start span-all;

/* 暗黙の 2 番目の値を持つ単一の <position-area> キーワード */
position-area: top; /* 評価結果: top span-all */
position-area: inline-start; /* 評価結果: inline-start span-all */
position-area: center; /* 評価結果: center center */
position-area: span-all; /* 評価結果: center center */
position-area: end; /* 評価結果: end end */

/* グローバル値 */
position-area: inherit;
position-area: initial;
position-area: revert;
position-area: revert-layer;
position-area: unset;
```

### 値

このプロパティ値は 2 つの `<position-area>` キーワード、またはキーワード `none` で構成されます。1 つの `<position-area>` キーワードのみが指定された場合、2 つ目のキーワードの意味を含みます。

- [`<position-area>`](/ja/docs/Web/CSS/Reference/Values/position-area_value)
  - : 選択された位置指定要素を配置する位置指定領域グリッドの領域を指定します。

- `none`
  - : 位置指定領域が設定されません。

## 解説

`position-area` プロパティは、アンカーに対する要素の位置決めにおいて `anchor()` 関数の代替手段を提供します。`position-area` は、**position-area グリッド**と呼ばれる 3x3 のタイルグリッドの概念に基づいて動作し、アンカー要素は中央のタイルとなります。

![下記の説明にある position-area グリッド](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

グリッドのタイルは行と列に分割されています。

- 3 つの行は[物理的な値](/ja/docs/Web/CSS/Reference/Values/position-area_value#物理的グリッドキーワード)である `top`、`center`、`bottom` で表されます。また、等価な[論理的な値](/ja/docs/Web/CSS/Reference/Values/position-area_value#論理的グリッドキーワード)である `block-start`、`center`、`block-end` や、[座標の値](/ja/docs/Web/CSS/Reference/Values/position-area_value#座標グリッドキーワード)である `y-start`、`center`、`y-end` もあります。
- 3 つの列は、物理的な値である `left`、`center`、`right` で表現されます。これらは等価な論理的な値である `inline-start`、`center`、`inline-end` や、座標の値である `x-start`、`center`、`x-end` もあります。

アンカー要素の[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)によって中央タイルの寸法が定義される一方、グリッドの外縁の寸法は位置指定要素の包含ブロックによって定義されます。

[`<position-area>`](/ja/docs/Web/CSS/Reference/Values/position-area_value) の値は、1 つまたは 2 つのキーワードで構成され、位置指定要素が配置されるべきグリッドの領域を定義します。正確には、位置指定要素の包含ブロックがグリッド領域に設定されます。

例を示します。

- 行の値と列の値を指定することで、位置指定要素を単一の特定のグリッド枠に配置できます。例えば、`top left`（論理的な値では `start start` に相当）や `bottom center`（論理的な値では `end center` に相当）を指定すると、位置指定要素は右上の枠または中央下の枠に配置されます。
- 行または列の値に加えて `span-*` 値を指定することで、2 つまたは 3 つのセルにまたがって配置することが可能です。最初の値は配置する要素を配置する行または列を指定し、初期状態では中央に配置されます。もう一方の値はその行または列の他のタイルをまたがる範囲を指定します。
  - `top span-left` は、位置指定要素を最上段の中央に配置し、その行の中央タイルと左タイルにまたがるようにします。
  - `block-end span-inline-end` は、位置指定要素をブロックの末尾の行の中央に配置し、その行の中央タイルとインラインの末尾のタイルにまたがるようにします。
  - `bottom span-all` および `y-end span-all` は、配置された要素を最下段の中央に配置し、3 つのセル（この場合、最下段の左、中央、右のタイル）にまたがるようにします。

アンカー機能の詳細、使用方法、および `position-area` プロパティについては、[CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュールのランディングページと、[CSS アンカー位置指定の使用方法](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)ガイド、特に [`position-area` の設定](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#position-area_の設定)の節を参考にしてください。

### 調整されたデフォルトの動作

位置指定された要素に [`<position-area>`](/ja/docs/Web/CSS/Reference/Values/position-area_value) 値が設定されると、その要素の特定のプロパティのデフォルト動作が調整され、適切なデフォルト配置が提供されます。

#### 自己配置プロパティの `normal` 値

`normal` の値を自己配置プロパティ（{{cssxref("align-items")}}、{{cssxref("align-self")}}、{{cssxref("justify-items")}}、{{cssxref("justify-self")}} など）に設定すると、`start`、`end`、[`anchor-center`](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#anchor-center_を使用してアンカーの中央に配置) のいずれかとして動作します。自己配置プロパティのデフォルト値は、要素の配置方法によって異なります。

- `position-area` の値が軸内の中央領域を指定した場合、その軸におけるデフォルトの配置は `anchor-center` です。
- そうでない場合、その挙動は `position-area` プロパティで指定された領域とは逆になります。例えば、`position-area` の値がその軸の先頭領域を指定している場合、その軸におけるデフォルトの配置は `end` となります。

例えば、`writing-mode` が `horizontal-tb` に設定されている場合、`position-area: top span-x-start` は配置された要素を最上段の中央に配置し、その行の中央タイルと開始タイルにまたがるようにします。この場合、自己配置プロパティはデフォルトで `align-self: end` と `justify-self: anchor-center` になります。

#### インセットプロパティと値

アンカー位置指定された要素が `position-area` プロパティで位置指定された場合、{{glossary("inset properties", "インセットプロパティ")}}（{{cssxref("top")}} や {{cssxref("inset-inline-end")}} など）は、位置領域からのオフセットを指定します。 [`max-block-size: 100%`](/ja/docs/Web/CSS/Reference/Properties/max-block-size) のような他のプロパティ値も、位置領域を基準とします。インセットプロパティが設定されている場合、またはデフォルトで `auto` になっている場合は、その値が `0` に設定されたかのように動作します。

### 位置指定要素の幅についての補足

配置された要素に特定のサイズが設定されていない場合、そのサイズはデフォルトで[固有サイズ](/ja/docs/Glossary/Intrinsic_Size)になりますが、position-area グリッドのサイズの影響も受けます。

位置指定要素が単一で上の中央、下の中央、中央の中央セルに配置された場合、そのブロック方向のサイズはアンカー要素の包含ブロックサイズと同じになり、それぞれ上方向、下方向、または両方向に拡大します。配置された要素は指定されたグリッドセルに配置されますが、アンカー要素と同じ幅を採用します。ただし、そのコンテンツがはみ出すことはありません。最小の `width` は `min-content` （最長の単語の幅によって定義される）となります。

位置指定要素が他の単一のグリッド区画（たとえば `position-area: top left`）に配置された場合、または 2 つ以上のグリッド区画にまたがるように設定された場合（たとえば `position-area: bottom span-all`）、指定されたグリッド領域に配置されますが、あたかも `max-content` が設定されたかのように振る舞います。これは、`position: fixed` が設定された際に課されたサイズである、その包含ブロックのサイズに基づいてサイズが決められます。テキストコンテンツと同じ幅まで伸びますが、`<body>` の端によって制限される場合もあります。

### `position-area` を使用してポップオーバーを配置

`position-area` を使用して[ポップオーバー](/ja/docs/Web/HTML/Reference/Global_attributes/popover)を配置する場合、[ポップオーバーのデフォルトスタイル](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B)が意図した配置と衝突する可能性があることに注意してください。主な原因は `margin` と `inset` のデフォルトスタイルであるため、これらをリセットすることをお勧めします。

```css
.my-popover {
  margin: 0;
  inset: auto;
}
```

CSS ワーキンググループは、[この回避策を必要としない方法の検討を進めています](https://github.com/w3c/csswg-drafts/issues/10258)。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

この例では、位置指定された要素が `position-area` プロパティを使用して、関連付けられたアンカーに対して固定され、相対的に位置指定されています。

#### HTML

この HTML には {{htmlelement("div")}} と {{htmlelement("p")}} が含まれています。`<p>` は CSS で `<div>` を基準に相対位置指定されます。また、表示されるスタイルブロックも含まれます。すべての要素は、[`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) 属性により直接編集可能に設定されています。

```html-nolint
<div class="anchor" contenteditable="true">⚓︎</div>

<p class="positionedElement" contenteditable="true">編集可能です。</p>

<style contenteditable="true">.positionedElement {
    position-area: top center;
  }
</style>
```

#### CSS

`<div>` 要素をアンカー要素に変換し、{{cssxref("anchor-name")}} プロパティを設定します。次に、絶対位置指定された `<p>` 要素の {{cssxref("position-anchor")}} 値を同じアンカー名に設定することで、両者を関連付けます。

`position-area` の初期値を `top center` に設定します。この値は `p` セレクターに設定されるため、`<style>` ブロックの `.positionedElement` [クラスセレクター](/ja/docs/Web/CSS/Reference/Selectors/Class_selectors)に追加される値よりも[詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)が低くなります。その結果、スタイルブロック内で `position-area` の値を設定することで、初期の `position-area` の値を上書きできます。

```css
.anchor {
  anchor-name: --infobox;
  background: palegoldenrod;
  font-size: 3em;
  width: fit-content;
  border: 1px solid goldenrod;
  margin: 100px auto;
}

p {
  position: absolute;
  position-anchor: --infobox;
  position-area: top center;
  margin: 0;
  background-color: darkkhaki;
  border: 1px solid darkolivegreen;
}

style {
  display: block;
  white-space: pre;
  font-family: monospace;
  background-color: #ededed;
  -webkit-user-modify: read-write-plaintext-only;
  line-height: 1.5;
  padding: 10px;
}
```

#### 値

{{ EmbedLiveSample("Basic example", "100%", "360") }}

アンカー位置指定された要素内のテキスト量を変更して、どのように拡大するか確認してみてください。また、`position-area` プロパティの値を `center` など別の値に変更してみてください。

### `position-area` 値の比較

このデモではアンカーを作成し、位置指定要素をそれに結びつけます。また、位置指定要素に適用する様々な `position-area` 値を選択できるドロップダウンメニューを提供し、その効果を確認できます。オプションの一つを選択するとテキストフィールドが表示され、カスタム値を入力できるようになります。最後に、`writing-mode: vertical-lr` のオン/オフを切り替えるチェックボックスを用意し、書字方向が異なるときの `position-area` 値の効果の違いを確認できるようにしています。

#### HTML

この HTML では、2 つの {{htmlelement("div")}} 要素を指定します。1 つは `anchor` クラス、もう 1 つは `infobox` クラスを付与します。これらはそれぞれアンカー要素と、それに紐付ける位置指定要素にするためのものです。両方に `contenteditable` 属性を付与しているため、直接編集可能です。

また、{{htmlelement("select")}} と [`<input type="text">`](/ja/docs/Web/HTML/Reference/Elements/input/text) が異なる `position-area` 値で設定されている 2 つのフォームがあり、[`<input type="checkbox">`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox) で縦書きの {{cssxref("writing-mode")}} のオン/オフを切り替えるようにしています。これらのコードと JavaScript は簡潔さを考慮して非表示にしています。

```html
<div class="anchor" contenteditable>⚓︎</div>

<div class="infobox">
  <p contenteditable>編集できます。</p>
</div>
```

```html-nolint hidden
<form id="position-area-form">
  <div>
    <label for="position-area-select">position-area を選択:</label>
    <select id="position-area-select" name="position-area-select">
      <optgroup label="Enter custom value">
        <option>Custom</option>
      </optgroup>
      <optgroup label="Physical, single tile">
        <option selected>top left</option>
        <option>bottom right</option>
      </optgroup>
      <optgroup label="Physical, span two">
        <option>bottom span-right</option>
        <option>left span-top</option>
      </optgroup>
      <optgroup label="Physical, span all">
        <option>top</option>
        <option>left</option>
      </optgroup>
      <optgroup label="Logical, single tile">
        <option>start center</option>
        <option>inline-start block-end</option>
      </optgroup>
      <optgroup label="Logical, span two">
        <option>start span-end</option>
        <option>center span-start</option>
        <option>inline-start span-block-end</option>
        <option>span-block-start center</option>
      </optgroup>
      <optgroup label="Logical, span all">
        <option>start span-all</option>
        <option>block-end</option>
      </optgroup>
      <optgroup label="Coordinates, single tile">
        <option>x-start center</option>
        <option>x-end y-end</option>
      </optgroup>
      <optgroup label="Coordinates, span two">
        <option>center span-y-start</option>
        <option>y-start span-x-end</option>
      </optgroup>
      <optgroup label="Coordinates, span all">
        <option>x-start span-all</option>
        <option>y-end</option>
      </optgroup>
    </select>
  </div>
  <div id="position-area-custom-container">
    <label for="position-area-custom">独自の position-area を入力:</label
    ><br />
    <input type="text" id="position-area-custom" name="position-area-custom" />
  </div>
</form>

<form id="writing-mode-form">
  <label for="writing-mode-checkbox">writing-mode: vertical-lr</label><br />
  <input
    type="checkbox"
    id="writing-mode-checkbox"
    name="writing-mode-checkbox" />
</form>
```

#### CSS

この CSS で `anchor` `<div>`をアンカー要素として宣言します。これは {{cssxref("anchor-name")}} でアンカー名を設定することにより行われます。

位置指定要素は、アンカー要素の名前を位置指定要素の {{cssxref("position-anchor")}} プロパティの値として設定することで、アンカー要素に関連付けられます。また、 `position-area: top left` で初期位置を指定します。これは `<select>` メニューから新しい値が選択されると上書きされます。最後に、{{cssxref("opacity")}} を `0.8` に設定します。これにより、配置された要素にアンカー要素の上部に配置する `position-area` 値が与えられた場合でも、要素同士の位置関係が視認可能になります。

```css hidden
.anchor {
  font-size: 1.8rem;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  min-width: 50px;
  min-height: 50px;
  line-height: 50px;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

html {
  height: 100%;
}

body {
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  background: white;
  border: 1px solid black;
  padding: 5px;
  position: fixed;
}

#position-area-form {
  top: 0;
  right: 2px;
}

#position-area-form div:last-child {
  margin-top: 10px;
}

#position-area-form div :last-child {
  margin-top: 5px;
}

#writing-mode-form {
  bottom: 0;
  left: 2px;
  writing-mode: horizontal-tb;
}

#position-area-custom-container {
  display: none;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 5px 2px;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box;
}
```

```css
.anchor {
  anchor-name: --my-anchor;
}

.infobox {
  position-anchor: --my-anchor;
  position: fixed;
  opacity: 0.8;
  position-area: top left;
}
```

```js hidden
const anchorContainer = document.querySelector("body");
const infobox = document.querySelector(".infobox");

const positionAreaForm = document.querySelector("#position-area-form");
const selectElem = document.querySelector("select");
const inputElemContainer = document.querySelector(
  "#position-area-custom-container",
);
const inputElem = document.querySelector("#position-area-custom");
const checkboxElem = document.querySelector("#writing-mode-checkbox");

// Stop form from submitting when enter is pressed on it
positionAreaForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Update positioned element position-area to value selected in drop-down
selectElem.addEventListener("change", () => {
  const area = selectElem.value;

  if (area === "Custom") {
    // Show the custom value input field
    inputElemContainer.style.display = "block";
  } else {
    // Hide the custom value input field
    inputElemContainer.style.display = "none";
    // Set the position-area to the value chosen in the select box
    infobox.style.positionArea = area;
  }
});

// Update positioned element position-area to entered custom value
inputElem.addEventListener("change", () => {
  const customArea = inputElem.value;

  // Set the position-area to the value in the input box
  infobox.style.positionArea = customArea;
});

// Change writing-mode to match checkbox setting
checkboxElem.addEventListener("change", () => {
  if (checkboxElem.checked) {
    anchorContainer.style.writingMode = "vertical-lr";
  } else {
    anchorContainer.style.writingMode = "horizontal-tb";
  }
});
```

#### 結果

結果は次のようになります。

{{ EmbedLiveSample("`position-area` value comparison", "100%", "360") }}

`<select>` メニューから新しい `position-area` 値を選択し、情報ボックスの配置に与える影響を確認してください。「カスタム」値を選択し、テキスト入力欄に任意の `position-area` 値を入力して効果を確認しましょう。アンカーとアンカー配置要素にテキストを追加し、`position-area` 値に基づいてアンカー配置要素がどのように拡大するかを確認してください。最後に、チェックボックスをオンにした状態で、様々な `position-area` 値を試してみてください。どの値が書字方向が変わっても変化せず、どの値が変化するかを確認しましょう。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("position-try-fallbacks")}}
- [`anchor()`](/ja/docs/Web/CSS/Reference/Values/anchor) 関数
- [`<position-area>`](/ja/docs/Web/CSS/Reference/Values/position-area_value) 値
- [CSS アンカー位置指定の使用](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)ガイド
- [代替オプションとオーバーフロー時の条件付き非表示](/ja/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)ガイド
- [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュール
