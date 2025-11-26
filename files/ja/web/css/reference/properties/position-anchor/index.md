---
title: position-anchor
slug: Web/CSS/Reference/Properties/position-anchor
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**`position-anchor`** は [CSS](/ja/docs/Web/CSS) のプロパティで、位置指定要素が関連付けられる**アンカー要素**（つまり、**アンカー名**が {{cssxref("anchor-name")}} プロパティをで設定された要素）のアンカー名を指定します。

## 構文

```css
/* 単一の値 */
position-anchor: auto;
position-anchor: --anchor-name;

/* グローバル値 */
position-anchor: inherit;
position-anchor: initial;
position-anchor: revert;
position-anchor: revert-layer;
position-anchor: unset;
```

### 値

- `auto`
  - : 位置指定要素を、暗黙のアンカー要素（存在する場合）に関連付けます。例えば、標準外の HTML の [`anchor`](/ja/docs/Web/HTML/Reference/Global_attributes/anchor) 属性で設定されたものなどです。

- {{cssxref("dashed-ident")}}
  - : 位置指定要素を関連付けるアンカー要素の名前。アンカー要素の {{cssxref("anchor-name")}} プロパティに掲載されているもの。これは**既定のアンカー指定子**として知られています。

## 解説

このプロパティは「位置指定された」要素のみに関連します。つまり、{{cssxref("position")}} が `absolute` または `fixed` に設定された要素や擬似要素です。

要素をアンカー要素に対して相対的に配置するには、位置指定要素に関連付け、位置、場所の 3 つの特性が必要です。`position-anchor` プロパティと {{cssxref("anchor-name")}} プロパティは、明示的な関連付けを提供します。

アンカー要素は、1 つ以上の `<dashed-ident>` アンカー名を `anchor-name` プロパティで設定できます。これらの名前のいずれかが、位置指定要素の `position-anchor` プロパティの値として設定されると、両要素は関連付けられます。

`position-anchor` プロパティに記載されているアンカー名を持つアンカー要素が複数ある場合、位置指定要素はそのアンカー名を持つソース順序における最後のアンカー要素に関連付けられます。

位置指定要素をアンカーに固定するには、アンカー要素に対して相対的に配置しなければなりません。これにはアンカー位置指定機能（例: {{cssxref("anchor()")}} 関数（{{glossary("inset properties", "インセットプロパティ")}}の値として設定）や {{cssxref("position-area")}} プロパティ）を使用します。

関連付けられたアンカーが非表示の場合（{{cssxref("display", "display: none")}} や {{cssxref("visibility", "visibility: hidden")}} などによって）、または他の要素の[スキップされたコンテンツ](/ja/docs/Web/CSS/Guides/Containment/Using#コンテンツのスキップ)の一部となっている場合（その要素に {{cssxref("content-visibility", "content-visibility: hidden")}} が設定されている場合）、アンカー位置指定された要素は表示されません。

`position-anchor` プロパティは、位置指定されたすべての要素と、それに加えて[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)、例えば {{cssxref("::before")}} や {{cssxref("::after")}} などで対応しています。擬似要素は、特に指定しない限り、その擬似要素の元の要素と同じ要素に暗黙的にアンカーされます。

アンカー機能の詳細な情報とアンカーを使用する方法は、[CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュールのランディングページと、[CSS アンカー位置指定の使用](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)ガイドを参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

`anchor-name` の基本使用法については[基本的な使い方](/ja/docs/Web/CSS/Reference/Properties/anchor-name#基本的な使い方)を、追加の [`position-anchor` の例](/ja/docs/Web/CSS/Reference/Properties/anchor-name#例)については、それぞれの記事を参照してください。

### スライダーのつまみをアンカーとして使用

この例では {{htmlelement("output")}} が、範囲スライダーのつまみであるアンカーを基準に相対位置指定されています。

#### HTML

[`<input type="range">`](/ja/docs/Web/HTML/Reference/Elements/input/range) 要素と [`<output>`](/ja/docs/Web/HTML/Reference/Elements/output) 要素を記載して、範囲の値を表示させます。`<output>` 要素に表示される値は、スライダーの値が変化するにつれて JavaScript を介して更新されます。

```html
<label for="slider">値を変更してください:</label>
<input type="range" min="0" max="100" value="25" id="slider" />
<output>25</output>
```

#### CSS

[`::-webkit-slider-thumb`](/ja/docs/Web/CSS/Reference/Selectors/::-webkit-slider-thumb) 擬似要素で表されるつまみに、`--thumb` というアンカー名を与えました。次に、その名前を `<output>` 要素の `position-anchor` プロパティの値として設定し、 {{cssxref("position")}} で `fixed` の値を指定します。これらの段階により、`<output>` がつまみと関連付けられました。

最後に、{{cssxref("left")}} および {{cssxref("top")}} プロパティに {{cssxref("anchor()")}} の値を使用して、`<output>` をつまみに対して相対的に位置指定します。

```css hidden
body {
  display: grid;
  place-items: center;
  height: 100vh;
  font-size: 1.4rem;
  font-family: sans-serif;
}
input {
  width: 33vw;
}
output {
  background: cyan;
  border: 2px solid darkblue;
  padding: 3px 6px;
  border-radius: 10px;
  font-size: 1.2rem;
}
```

```css
input::-webkit-slider-thumb {
  anchor-name: --thumb;
}

output {
  position-anchor: --thumb;
  position: absolute;
  left: anchor(right);
  bottom: anchor(top);
}
```

#### JavaScript

`<input>` の値が変更された際に `<output>` 要素のコンテンツを更新するイベントリスナーを記述します。

```js
const input = document.querySelector("input");
const output = document.querySelector("output");

input.addEventListener("input", (event) => {
  output.innerText = `${input.value}`;
});
```

#### 結果

出力はつまみに固定されています。値を変更してください。 ブラウザーがアンカー位置指定に対応している場合、値はスライダー上の位置に関係なく、つまみの右上に表示されます。

{{ EmbedLiveSample("A range thumb as anchor", "100%", "225") }}

### 複数の位置指定要素とアンカー

この例では、複数の位置指定要素を移動させ、それらを異なるアンカーに関連付けることができます。この例は、アンカーが複数の位置指定要素に関連付けられる方法を示していますが、アンカー位置指定要素は一度に単一のアンカー（`anchor-position` プロパティで定義されるアンカー）にしか関連付けられません。

#### HTML

アンカーが 4 つの要素と、異なる `id` 値で判別される位置指定要素が 2 つあります。位置指定要素には {{htmlelement("select")}} ボックスが含まれており、これを使ってどのアンカーに関連付けるかを選択できます。

```html
<div id="anchor-container">
  <div class="anchor" id="anchor1">⚓︎</div>
  <div class="anchor" id="anchor2">⚓︎</div>
  <div class="anchor" id="anchor3">⚓︎</div>
  <div class="anchor" id="anchor4">⚓︎</div>
</div>

<div class="infobox" id="infobox1">
  <form>
    <label for="anchor1-anchor-select">情報ボックスの配置先:</label>
    <select id="anchor1-anchor-select">
      <option value="1">アンカー 1</option>
      <option value="2">アンカー 2</option>
      <option value="3">アンカー 3</option>
      <option value="4">アンカー 4</option>
    </select>
  </form>
</div>

<div class="infobox" id="infobox2">
  <form>
    <label for="anchor2-anchor-select">情報ボックスの配置先:</label>
    <select id="anchor2-anchor-select">
      <option value="1">アンカー 1</option>
      <option value="2">アンカー 2</option>
      <option value="3">アンカー 3</option>
      <option value="4">アンカー 4</option>
    </select>
  </form>
</div>
```

#### CSS

最初に `anchor` `<div>` をアンカーとして宣言するために、`anchor-name` プロパティを使用します。このプロパティには、カンマ区切りで複数のアンカー名が指定され、それぞれの位置指定要素に対応します。これがデモの初期状態です。両方の位置指定要素が最初のアンカーに固定されます。

```css hidden
body {
  height: 100vh;
}

#anchor-container {
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}
```

```css
#anchor1 {
  anchor-name: --my-anchor1, --my-anchor2;
}
```

それぞれの位置指定要素には、 2 つのアンカー名のいずれかと一致する値を持つ `position-anchor` プロパティが指定されます。その後、位置指定要素には、インセット、配置、マージンプロパティの組み合わせを用いて、アンカー相対的な位置指定情報が行われます。

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
  width: 120px;
}
```

```css
#infobox1 {
  position-anchor: --my-anchor1;
  position: fixed;
  left: anchor(right);
  align-self: anchor-center;
  margin-left: 10px;
}

#infobox2 {
  position-anchor: --my-anchor2;
  position: fixed;
  bottom: anchor(top);
  justify-self: anchor-center;
  margin-bottom: 15px;
}
```

#### JavaScript

位置指定要素の`<select>`メニューで異なるアンカーが選択さ れたことを受けて、 `anchor-name` の値が設定されるアンカー要素を動的に変更します。ここでの主要な機能は、[`change`](/ja/docs/Web/API/HTMLElement/change_event) イベントハンドラーである `updateAnchorNames()` です。 2 つの `<select>` メニューで選択されたアンカー名が同じ場合、両方のアンカー名を 1 つのアンカーに設定します。そうでない場合、2 つの別個のアンカーに適切な単一のアンカー名を設定します。

```js
// 2 つの select メニューへの参照を取得
const select1 = document.querySelector("#anchor1-anchor-select");
const select2 = document.querySelector("#anchor2-anchor-select");
// すべてのアンカーへの参照を NodeList （配列風のもの）に格納する
const anchors = document.querySelectorAll("#anchor-container > div");

// 両方の選択メニューに同じ change イベントハンドラーを設定する
select1.addEventListener("change", updateAnchorNames);
select2.addEventListener("change", updateAnchorNames);

function updateAnchorNames() {
  // すべてのアンカーからすべてのアンカー名が除去
  for (const anchor of anchors) {
    anchor.style.anchorName = "none";
  }

  // 選択メニューの値を数値に変換し、1 つ除去されるようにして
  // NodeList 内の選択されたアンカーのインデックス位置と一致する
  const value1 = Number(select1.value) - 1;
  const value2 = Number(select2.value) - 1;

  if (value1 === value2) {
    // 選択されたアンカーが両方とも同じ場合、
    // 両方のアンカー名を同じアンカーに設定する
    anchors[value1].style.anchorName = "--my-anchor1, --my-anchor2";
  } else {
    // 同じでない場合は、それぞれの選択されたアンカーで
    // アンカー名を個別に設定
    anchors[value1].style.anchorName = "--my-anchor1";
    anchors[value2].style.anchorName = "--my-anchor2";
  }
}
```

#### 結果

ドロップダウンメニューから様々な値を選択すると、要素が相対的に配置されるアンカーが変更されます。

{{ EmbedLiveSample("Multiple positioned elements and anchors", "100%", "400") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("anchor-name")}}
- HTML の [`anchor`](/ja/docs/Web/HTML/Reference/Global_attributes/anchor) 属性
- [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュール
- [CSS アンカー位置指定の使用](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)ガイド
