---
title: anchor-name
slug: Web/CSS/Reference/Properties/anchor-name
original_slug: Web/CSS/anchor-name
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

**`anchor-name`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素に 1 つ以上の識別子となる**アンカー名**を付与することで、その要素を**アンカー要素**として定義できるようにします。それぞれの名前は、位置指定要素の {{cssxref("position-anchor")}} プロパティの値として設定することができ、アンカーと関連付けられた状態となります。

## 構文

```css
/* 単一の値 */
anchor-name: none;
anchor-name: --name;

/* 複数の値 */
anchor-name: --name, --another-name;

/* グローバル値 */
anchor-name: inherit;
anchor-name: initial;
anchor-name: revert;
anchor-name: revert-layer;
anchor-name: unset;
```

### 値

- `none`
  - : 既定値。要素に `anchor-name: none` を設定すると、その要素はアンカー要素として定義されないということになります。要素が以前にアンカーとして定義され、位置指定要素に関連付けられていた場合、`anchor-name: none` を設定すると両者の関連付けが解除されます。

- {{cssxref("dashed-ident")}}
  - : アンカーの名前を定義する、1 つ以上の任意のカスタム識別子をカンマで区切ったものです。これにより、{{cssxref("position-anchor")}} プロパティ内で参照できるようになります。

## 解説

要素をアンカー要素に対して相対的に配置するには、位置指定要素に関連付け、位置、場所の 3 つの特性が必要です。`anchor-name` プロパティと {{cssxref("position-anchor")}} プロパティは、明示的な関連付けを提供します。

アンカー要素は、 1 つ以上の `<dashed-ident>` のアンカー名を、 `anchor-name` プロパティを介して受け入れます。その後、それらの名前のいずれかが `position-anchor` プロパティの値として、その要素の {{cssxref("position")}} が `absolute` または `fixed` に設定されている要素に設定されると、 2 つの要素は関連付けられます。関連付けられた要素は、アンカーに対する相対位置を設定することでアンカーに固定され、「アンカー位置指定」された要素となります。

複数のアンカー要素に同じアンカー名が設定されており、その名前が位置指定要素の `position-anchor` プロパティ値によって参照されている場合、その位置指定要素はソース順における当該アンカー名の最後のアンカー要素に関連付けられます。

アンカー位置指定は、アンカー位置指定された要素の[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)を変更し、その `position` プロパティを最も近い位置指定された祖先要素ではなく、アンカー要素を基準とするようにします。

アンカー要素に対する相対位置で位置指定された要素を特定の場所に固定するには、アンカー位置指定機能が必要です。例えば、{{glossary("inset properties", "インセットプロパティの")}}値内で設定される {{cssxref("anchor()")}} 関数や {{cssxref("position-area")}} プロパティなどが該当します。

アンカー要素が非表示の場合（{{cssxref("display", "display: none")}} や {{cssxref("visibility", "visibility: hidden")}} による）や、アンカー要素が別の要素の {{cssxref("content-visibility", "content-visibility: hidden")}} 設定により[スキップされたコンテンツ](/ja/docs/Web/CSS/Guides/Containment/Using#コンテンツのスキップ)の一部となっている場合、位置指定された要素をアンカー要素に関連付けられたりすることはできません。

`anchor-name` プロパティは、 主ボックスを生成するすべての要素で使用することができます。これは、[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)（{{cssxref("::before")}} や {{cssxref("::after")}} を使用して生成されたコンテンツを含む）や、[`range` 入力](/ja/docs/Web/HTML/Reference/Elements/input/range)のつまみ ({{cssxref("::-webkit-slider-thumb")}}) などの UI 機能もアンカー要素になり得るということです。擬似要素は、特に指定がない限り、擬似要素の親要素と同じ要素に暗黙的にアンカーされます。

アンカー機能と使い方についての詳しい情報は、 [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュールのランディングページと [CSS アンカー位置指定の使用](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)ガイドを参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

この例では、位置指定要素をアンカーに固定し、要素をアンカーの適切な側に配置します。

#### HTML

2 つの {{htmlelement("div")}} 要素を設置します。クラス名 `anchor` を持つアンカー要素と、クラス名 `infobox` をつけた位置指定要素です。

同時に、 2 つの`<div>`の周囲に埋め込みテキストを記載し、 {{htmlelement("body")}} の高さを増やしてスクロールできるようにします。

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>これは情報ボックスです。</p>
</div>

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
```

#### CSS

まず、 `anchor-name` プロパティを使用してアンカー名を設定することで、`anchor` の `<div>`をアンカー要素として宣言します。

```css hidden
body {
  width: 50%;
  margin: 0 auto;
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
.anchor {
  anchor-name: --my-anchor;
}
```

2 つ目の `<div>` をアンカー要素と関連付けるために、そのアンカー名を位置指定要素の {{cssxref("position-anchor")}} プロパティの値として設定します。次に位置指定要素の以下のことを設定します。

- {{cssxref("position")}} プロパティを `fixed` に設定し、「アンカー位置指定要素」に変換します。これにより、ページ上のアンカーの位置を基準に配置できる状態になります。
- {{cssxref("left")}} および {{cssxref("top")}} プロパティを、 {{cssxref("anchor()")}} にそれぞれ `right` および `top` の値で設定します。これにより、情報ボックスの左端はアンカーの右端に揃い、上端はアンカーの上端を基準に相対的に位置決めされます。
- {{cssxref("margin-left")}} を `10px` に設定し、アンカーとして位置指定された要素とそのアンカーの間に空間を作成する。

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position-anchor: --my-anchor;
  position: fixed;
  left: anchor(right);
  top: anchor(top);
  margin-left: 10px;
}
```

#### 結果

ページをスクロールして、アンカーに対する情報ボックスの相対的な位置を確認してください。アンカーが上方向にスクロールすると、位置指定要素もそれに伴ってついて移動します。

{{ EmbedLiveSample("Basic usage", "100%", "225") }}

### 複数の位置指定要素

この例は、複数の位置指定要素を1つのアンカーに関連付けることができる方法を示しています。

#### HTML

HTMLは前の例と同じですが、この例では複数の位置指定された `<div>` 要素があり、それぞれを識別するために異なる [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) が設定されています。

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox" id="infobox1">
  <p>これは情報ボックスです。</p>
</div>

<div class="infobox" id="infobox2">
  <p>これはもう一つの情報ボックスです。</p>
</div>

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
```

#### CSS

`anchor-name` プロパティを使用して `anchor` の `<div>` をアンカー要素として宣言し、以前と同様にアンカー名を付与します。

```css hidden
body {
  width: 50%;
  margin: 0 auto;
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
.anchor {
  anchor-name: --my-anchor;
}
```

配置された 2 つの要素はそれぞれのアンカー要素と、アンカー要素のアンカー名を位置指定要素の {{cssxref("position-anchor")}} プロパティ値として設定することで関連付けられた状態になっています。 両方とも同時に `fixed` 位置指定が指定された状態で、**アンカー位置指定要素**であることに間違いありません。位置指定要素は、以上示されたインセットプロパティと、それぞれインライン方向/ブロック方向においてアンカーの中心に情報ボックスを中央揃えにする `anchor-center` 値を持つ {{cssxref("align-self")}} / {{cssxref("justify-self")}} プロパティを組み合わせて、アンカーに対する相対位置で異なる場所に配置されます。

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position-anchor: --my-anchor;
  position: fixed;
}

#infobox1 {
  left: anchor(right);
  align-self: anchor-center;
  margin-left: 10px;
}

#infobox2 {
  bottom: anchor(top);
  justify-self: anchor-center;
  margin-bottom: 15px;
}
```

#### 結果

ページをスクロールすると、両方の情報ボックスがアンカーに紐付けられている様子が確認できます。

{{ EmbedLiveSample("Multiple positioned elements", "100%", "225") }}

### 複数のアンカー名

この例は、アンカー要素が複数のアンカー名を持つことができることを示しています。

#### HTML

HTML は前回の例と同じです。

```html hidden
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox" id="infobox1">
  <p>これは情報ボックスです。</p>
</div>

<div class="infobox" id="infobox2">
  <p>これはもう一つの情報ボックスです。</p>
</div>

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
```

#### CSS

CSS も前回の例と同じですが、ターゲットの `anchor-name` プロパティ値にカンマ区切りで 2 つの名前を含め、それぞれの位置指定要素の `position-anchor` プロパティ値が異なる点が異なります。

```css hidden
body {
  width: 50%;
  margin: 0 auto;
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

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.anchor {
  anchor-name: --anchor1, --anchor2;
}

.infobox {
  position: fixed;
}

#infobox1 {
  position-anchor: --anchor1;
  left: anchor(right);
  align-self: anchor-center;
  margin-left: 10px;
}

#infobox2 {
  position-anchor: --anchor2;
  bottom: anchor(top);
  justify-self: anchor-center;
  margin-bottom: 15px;
}
```

#### 結果

ページをスクロールすると、両方の情報ボックスがアンカーに紐付けられている様子が確認できます。

{{ EmbedLiveSample("Multiple anchor names", "100%", "225") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("position-anchor")}}
- HTML [`anchor`](/ja/docs/Web/HTML/Reference/Global_attributes/anchor) 属性
- [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュール
- [CSS アンカー位置指定の使用](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)ガイド
