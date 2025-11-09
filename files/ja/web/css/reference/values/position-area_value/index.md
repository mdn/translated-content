---
title: <position-area>
slug: Web/CSS/Reference/Values/position-area_value
original_slug: Web/CSS/position-area_value
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`<position-area>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)で、**位置指定領域グリッド**（中心セルがアンカー要素となる 3x3 グリッド）のセルまたはまたがらせるセルを定義します。

`<position-area>` キーワード値は、{{cssxref("position-area")}} プロパティの値として設定することができ、これによりアンカー位置指定された要素を、関連付けられたアンカー要素に対する相対的な特定の位置に配置することができます。

## 構文

```plain
<position-area> = [
  [ left | center | right | span-left | span-right | x-start | x-end | span-x-start | span-x-end | x-self-start | x-self-end | span-x-self-start | span-x-self-end | span-all ]
||
  [ top | center | bottom | span-top | span-bottom | y-start | y-end | span-y-start | span-y-end | y-self-start | y-self-end | span-y-self-start | span-y-self-end | span-all ]
|
  [ block-start | center | block-end | span-block-start | span-block-end | span-all ]
||
  [ inline-start | center | inline-end | span-inline-start | span-inline-end | span-all ]
|
  [ self-block-start | self-block-end | span-self-block-start | span-self-block-end | span-all ]
||
  [ self-inline-start | self-inline-end | span-self-inline-start | span-self-inline-end | span-all ]
|
  [ start | center | end | span-start | span-end | span-all ]{1,2}
|
  [ self-start | center | self-end | span-self-start | span-self-end | span-all ]{1,2}
]
```

## 解説

位置領域は**位置領域グリッド**という概念に基づいて動作します。これは 4 本のグリッド線（それぞれの軸に 2 本ずつ）で構成される 3x3 のタイルグリッドであり、アンカー要素が中央タイルです。

![下記で説明する位置領域グリッド](/ja/docs/Web/CSS/CSS_anchor_positioning/Using/position-area.svg)

位置指定された要素の `position-area` プロパティの値として使用される場合、中央タイルのサイズは要素の既定のアンカー要素の[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)によって定義されます。グリッドの外縁のサイズは、位置指定要素の包含ブロックによって定義されます。論理キータームは、`self-*`キータームを除き、一般的に包含ブロックの書字モードと方向に基づきます。`self-*` キータームは、位置指定要素から計算されます。

グリッドタイルは、複数の行と列に分割されています。

- 3 つの行は、物理的な値である `top`、`center`、`bottom` で表します。同時に、`block-start`、`center`、`block-end` といった論理的な等価の値や、`y-start`、`center`、`y-end` といった等価な座標系の値も存在します。
- 3つの列は、物理的な値である `left`、`center`、`right`で表します。同時に、`inline-start`、`center`、`inline-end`といった論理的な等価の値や、`x-start`、`center`、`x-end`といった等価な座標系の値も存在します。

`<position-area>` の値は、1 つまたは 2 つのキーワードで構成され、位置指定要素が場所されるべきグリッドの領域を定義します。正確には、位置指定要素の包含ブロックがグリッド領域に設定されます。

```css
/* 例：要素を単一の特定のタイルに配置する 2 つのキーワード */
position-area: top left;
position-area: bottom right;
position-area: start end;
position-area: center end;
position-area: block-start center;
position-area: inline-start block-end;
position-area: x-start y-end;
position-area: center y-self-end;

/* 例：要素を 2 つのタイルにまたがらせるように配置する 2 つのキーワード */
position-area: top span-left;
position-area: span-bottom right;
position-area: center span-start;
position-area: inline-start span-block-end;
position-area: y-start span-x-end;

/* 例：要素を 3 つのタイルにまたがらせるように配置する 2 つのキーワード */
position-area: top span-all;
position-area: block-end span-all;
position-area: x-self-start span-all;

/* 例：2 つ目のキーワードが暗黙的に含まれる 1 つのキーワード */
position-area: top; /* top span-all と同等 */
position-area: inline-start; /* inline-start span-all と同等 */
position-area: center; /* center center と同等 */
position-area: span-all; /* center center と同等 */
position-area: start; /* start start と同等 */
position-area: end; /* end end と同等 */
```

使用できるキーワードの種類には以下のようなものがあります。

- [物理的グリッドキーワード](#物理的グリッドキーワード)
- [汎用的な行や列の論理的キーワード](#汎用的な行や列の論理的キーワード)
- [明示的なインラインおよびブロックの論理的キーワード](#明示的なインラインおよびブロックの論理的キーワード)
- [座標グリッドキーワード](#座標グリッドキーワード)

> [!NOTE]
> 一般的に、 1 つの値に異なる種類（例：物理的と論理的）を混在させることはできません。 そのようにすると不正な値となります。例えば、`position-area: bottom inline-end` は物理的と論理的キーワードを混在させているため、有効な値ではありません。

## 物理的グリッドキーワード

物理的グリッドキーワードは、物理的な値を用いて`position-area`グリッドのセルまたはセクションを指定します。これらの値は {{cssxref("writing-mode")}} や {{cssxref("direction")}} の設定 の影響を受けません。

物理的な行と列のキーワードでは、以下の 2 つのリストからそれぞれの 1 つのキーワードを選択し、単一の特定のグリッドタイルを指定できます。

- `top`, `center`, `bottom`: グリッドの行の上端、中央、下端。
- `left`, `center`, `right`: グリッドの列の左端、中央、右端。

例えば、`top left` は左上のタイルを選択し、`center right` は右側の列の中央のタイルを選択します。

### またがる物理的グリッドキーワード

またがる物理的キーワードは、物理的な行または列のキーワードと組み合わされると、位置領域が拡張する 2 つ目のグリッドタイルを指定します。このような組み合わせが `position-area` プロパティ値として設定されると、選択された要素は最初に指定された行または列の中央に配置され、その後、またがるキーワードで指定された方向にまたがり、2 つのグリッドタイルをまたがります。

- `span-left`
  - : グリッドの中央列と左側の列をまたがらせる。

- `span-right`
  - : グリッドの中央列と右側の列にまたがらせる。

- `span-top`
  - : グリッドの中央行と上側の行にまたがらせる。

- `span-bottom`
  - : グリッドの中央行と下側の行にまたがらせる。

- `span-all`
  - : すべてのキーワード型で有効です。 記載されているセルだけでなく、同じ行または列の隣接セルにもまたがります。 詳細は下記の [`span-all`](#span-all_2) を参照してください。

例えば、`top span-left` は中央上部と左上部のグリッドセルにまたがります。

> [!NOTE]
> 行または列のキーワードに不適切なまたがるキーワードをつけて組み合わせようとすると、不正な値になります。例えば、`right span-right`は無効です。中央右のグリッドタイルを選択した後、さらに右にまたがらせることはできません。

### 物理的グリッドキーワードの既定値

`position-area` の値に物理キーワードが1つだけ指定されている場合、もう一方の値は以下のように暗黙的に指定されます。

- `left`, `right`, `top`, `bottom`
  - : もう一方の値は既定で [`span-all`](#span-all_2) となり、要素が最初に配置された列または行の 3 つのタイルすべてにまたがるようにします。例えば、 `left` は `left span-all` と同等です。

- `center`, `span-left`, `span-right`, `span-top`, `span-bottom`
  - : もう一方の値は既定で `center` となります。例えば、`span-left` は `center span-left` と同等であり、`center` は `center center` と同等です。

## 論理的グリッドキーワード

論理的グリッドキーワードは、論理値が使用されている状態で位置領域グリッドの領域を指定します。これらの値では、位置と方向は、要素の[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)または、`self` キーワードの場合は位置指定要素自体の {{cssxref("writing-mode")}} および {{cssxref("direction")}} の設定の影響を受けます。論理的キーワードには、一般型と明示型の 2 種類があります。

### 汎用的な行や列の論理的キーワード

汎用的な論理キーワードは、インライン方向とブロック方向で同じ用語を使用します。方向は、`<position-area>` 値のペア内におけるキータームの位置によって決定されます。 1 つ目の値がブロック方向の位置を定義し、 2 つ目の値がインライン方向を定義します。以下のリストから 1 つまたは 2 つのキータームを指定することができます。 このリスト内から 2 つ指定すると、単一の特定のグリッドタイルが定義されます。キーワードの位置または方向は以下の通りです。

- `start`
  - : グリッドのブロック方向またはインライン方向の先頭。これは、包含ブロックの書字方向から計算されます。

- `end`
  - : グリッドのブロック方向またはインライン方向の末尾。これは、包含ブロックの書字方向から計算されます。

- `self-start`
  - : グリッドのブロック方向またはインライン方向が先頭。要素自身の書字方向から計算されます。

- `self-end`
  - : グリッドのブロック方向またはインライン方向の末尾。要素自身の書字方向から計算されます。

- `center`
  - : グリッドのブロック方向（このキーワードが 1 つ目に指定された場合）またはインライン方向（このキーワードが 2 つ目に指定された場合）の中心。

例えば、`start end` と `self-start self-end` はどちらも、ブロック方向の先頭とインライン方向の末尾の位置を表します。`writing-mode: horizontal-tb` が設定されている場合、これはアンカー要素の右上を指し、`writing-mode: vertical-rl` の場合はアンカー要素の右下を指します。

#### 行や列をまたがる汎用的な論理的キーワード

またがる汎用的な論理的キーワードは、論理的な行または列のキーワードと組み合わされると、位置領域が拡張される 2 つ目のグリッドタイルを指定します。このような組み合わせが `position-area` プロパティの値として設定されると、選択された要素は最初に指定された行または列の中央に配置され、その後、またがるキーワードで指定された方向にまたがり、2 つのグリッドタイルにまたがります。

- `span-start`
  - : 要素の包含ブロックの書字方向を参照した方向における、グリッドの行/列の中央と先頭のタイルにまたがらせます。

- `span-end`
  - : 要素の包含ブロックの書字方向を参照した方向における、グリッドの行/列の中央と末尾のタイルにまたがらせます。

- `span-self-start`
  - : 位置指定要素の書字方向における、グリッド行/列の中央と先頭のタイルにまたがらせます。

- `span-self-end`
  - : 位置指定要素の書字方向における、グリッド行/列の中央と末尾のタイルにまたがらせます。

例えば、`start span-end` と `self-start span-self-end` はどちらも、先頭ブロック行の中央から始まり、その行のインライン方向の中央から末尾の列までまたがるグリッド位置領域を指定します。`writing-mode: horizontal-tb` が設定されている場合、これはアンカー要素の上の中央と右上にまたがります。一方、`writing-mode: vertical-rl` が設定されている場合は、要素は右中央と右下にまたがります。

### 明示的なインラインおよびブロックの論理的キーワード

明示的なインラインおよびブロック論理的な行と列のキーワードは、ブロック（行）またはインライン（列）の位置を明示的に指定します。ブロック方向とインライン方向それぞれに 1 つのキーワードを指定することで、単一の特定のグリッドタイルを参照できます。汎用的な論理的キーワード値とは異なり、キーワードの順序は重要ではありません。ただし、同一軸上で 2 つのキーワードを宣言すると、その値は無効になります。

- `block-start`
  - : 包含ブロックの書字方向から算出された、グリッドのブロック方向の先頭。

- `block-end`
  - : 包含ブロックの書字方向から算出された、グリッドのブロック方向の末尾。

- `inline-start`
  - : 包含ブロックの書字方向から算出された、グリッドのインライン方向の先頭。

- `inline-end`
  - : 包含ブロックの書字方向から算出された、グリッドのインライン方向の末尾。

例えば、`block-start inline-end` はブロック方向の先頭とインライン方向の末尾にあるタイルを指定します。`writing-mode: horizontal-tb` が設定されている場合、これはアンカーの右上にあるタイルとなります。一方、`writing-mode: vertical-rl` が設定されている場合、これは右下にあるタイルとなります。

> [!NOTE]
> 仕様では、これらのキーワードの `self` 版として `block-self-start`、`block-self-end`、`inline-self-start`、`inline-self-end` を定義しています。ただし、これらは現在どのブラウザーでも対応していません。

#### 明示的なインラインおよびブロックのまたがる論理的なキーワード

明示的なまたがる論理的キーワードは、論理的な行または列キーワードと組み合わされると、位置領域を拡張した 2 つ目のグリッドタイルを指定します。このような組み合わせが `position-area` プロパティ値として設定されると、選択された要素は最初に、包含ブロックの書字方向に基づいて指定された行または列の中央に配置され、その後、またがるキーワードで指定された方向にまたがり、2 つのグリッドタイルにまたがります。

- `span-block-start`
  - : 指定されたインライン列の中央タイルとブロック方向の先頭タイルにまたがらせます。

- `span-block-end`
  - : 指定されたインライン列の中央タイルとブロック方向の末尾タイルにまたがらせます。

- `span-inline-start`
  - : 指定されたブロック列の中央タイルとインライン方向の先頭タイルにまたがらせます。

- `span-inline-end`
  - : 指定されたブロック列の中央タイルとインライン方向の末尾タイルにまたがらせます。

例えば、`block-end span-inline-start` は、ブロック方向の末尾行の中央タイルを選択し、その行内のインライン方向の中央列と先頭列に位置するタイルをまたがります。`writing-mode: horizontal-tb` が設定されている場合、これは下中央と下左のグリッドタイルにまたがりますが、`writing-mode: vertical-rl` が設定されている場合は、左中央と左上のグリッドタイルにまたがります。

> [!NOTE]
> 仕様書では、これらのキーワードの `self` 版を定義しています。例えば、`span-self-block-start`、`span-self-block-end`、`span-self-inline-start`、`span-self-inline-end`などです。ただし、これらは現在どのブラウザーでも対応していません。

> [!NOTE]
> 行または列のキーワードを不適切なまたがるキーワードと組み合わせようとすると、不正なプロパティ値となります。例えば、 `block-end span-block-end` は無効です。中央のブロック末尾行を選択した後、ブロック末尾方向を超えてさらに 1 タイル分またがらせることはできません。

### 論理的グリッドキーワードの既定値

論理的な `<position-area>` キーワードが一つだけ指定された場合、もう一つの値は次のように暗黙的に指定されます。

- `start`, `end`, `self-start`, `self-end`
  - : もう一方の値は、既定では最初の値と同じ値が設定され、先頭の行および列、または末尾の行および列のグリッドセルが選択されます。

- `span-start`, `span-self-start`, `span-end`, `span-self-end`
  - : もう一方の値は既定で `center` になります。例えば、`span-start` は `span-start center` と同等です。

- `block-start`, `block-end`, `inline-start`, `inline-end`
  - : もう一方の値は既定で [`span-all`](#span-all_2) となり、設定された列または行の 3 つのタイルすべてにまたがります。例えば、`block-start` は `block-start span-all` と同等です。

- `span-block-start`, `span-block-end`, `span-inline-start`, `span-inline-end`
  - : もう一方の値は既定で `center` になります。例えば、`span-inline-start` は `span-inline-start center` と同等です。

## 座標グリッドキーワード

これらのキーワードは、x 座標と y 座標の値を使用して `position-area` グリッドのセルを指定します。その位置/方向は、要素の[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)または（`self` キーワードの場合）要素自体に対する {{cssxref("writing-mode")}} や {{cssxref("direction")}} の設定に影響を受けます。

ただし、グリッドセルはブロック方向やインライン方向ではなく、物理軸に基づいて定義されます。

- `writing-mode: horizontal-tb` および `vertical-lr` の場合、x 軸は左から右へ、y 軸は上から下へと進みます。
- `writing-mode: horizontal-tb; direction: rtl` および `writing-mode: vertical-rl` の場合、x 軸は右から左へ、y 軸は上から下へと進みます。

座標の行と列のキーワードでは、x 軸から 1 つのキーワード、y 軸から 1 つのキーワードを指定します。これにより、単一の特定のグリッドタイルを定義できます。

x 軸のキーワードには以下のものがあります。

- `x-start`
  - : 包含ブロックの書字方向から計算される、グリッドの x 軸方向の先頭タイル。

- `x-end`
  - : 包含ブロックの書字方向から計算される、グリッドの x 軸方向の末尾タイル。

- `x-self-start`
  - : この要素自体の書字方向から計算される、グリッドの x 軸方向の先頭タイル。

- `x-self-end`
  - : この要素自体の書字方向から計算される、グリッドの x 軸方向の末尾タイル。

- `center`
  - : この要素自体の書字方向から計算される、グリッドの x 軸方向の中央タイル。

The y-axis keywords include:

- `y-start`
  - : 包含ブロックの書字方向から計算される、グリッドの y 軸方向の先頭タイル。

- `y-end`
  - : 包含ブロックの書字方向から計算される、グリッドの y 軸方向の末尾タイル。

- `y-self-start`
  - : この要素自体の書字方向から計算される、グリッドの y 軸方向の先頭タイル。

- `y-self-end`
  - : この要素自体の書字方向から計算される、グリッドの y 軸方向の末尾タイル。

- `center`
  - : この要素自体の書字方向から計算される、グリッドの y 軸方向の中央タイル。

例えば、`x-end y-start` と `x-self-end y-self-start` はどちらも、x軸の末尾、かつ y軸の先頭のグリッドセルを選択します。`writing-mode: horizontal-tb` が設定されている場合、このアンカーの右上のセルになります。一方、`writing-mode: vertical-rl` が設定されている場合は左上のセルになります。

### またがる座標キーワード

座標の行または列キーワードと組み合わされると、またがる座標キーワードは位置領域が拡張する 2 つ目のグリッドタイルを指定します。このような組み合わせが `position-area` プロパティ値として設定すると、選択された要素は最初に指定された行または列の中心に配置され、その後またがるキーワードで指定された方向に拡張され、 2 つのグリッドタイルにまたがります：

- `span-x-start`
  - : 指定された y 軸行の中央タイルと x 軸方向の先頭タイルをまたがらせます。

- `span-x-end`
  - : 指定された y 軸行の中央タイルと x 軸方向の末尾タイルをまたがらせます。

- `span-y-start`
  - : 指定された x 軸列の中央タイルと y 軸方向の先頭タイルをまたがらせます。

- `span-y-end`
  - : 指定された x 軸列の中央タイルと y 軸方向の末尾タイルをまたがらせます。

例えば、`y-end span-x-end` は y 行の末尾のタイル中央を選択し、その行の x 中央列と x 末尾列に位置するタイルをまたがらせて配置します。`writing-mode: horizontal-tb` を設定している場合、位置グリッド領域はグリッドタイルの下端中央と右下のタイルにまたがります。一方、`writing-mode: vertical-rl` を設定している場合は、下端中央と左下のタイルにまたがります。

> [!NOTE]
> 仕様書では座標の `self `のまたがるキーワードを別個に定義していませんが、これらは不要です。またがるキーワードは、座標行キーワードと行や列キーワードの両方で使用できます。

### 座標グリッドキーワードの既定値

`<position-area>` で単一の座標グリッドのキーワードのみが指定された場合、それ以外にも値は次の通り暗黙的に指定されます。

- `x-start`, `x-self-start`, `x-end`, `x-self-end`, `y-start`, `y-self-start`, `y-end`, `y-self-end`
  - : もう一方の値は既定で [`span-all`](#span-all_2) となり、最初に配置された列または行の 3 つのタイルすべてにまたがるグリッドタイルを選択します。例えば、`x-start` は `x-start span-all` と同等です。

- `span-x-start`, `span-x-end`, `span-y-start`, `span-y-end`
  - : もう一方の値は既定で `center` になります。例えば、`span-start` は `span-start center` と同等です。

## `span-all`

`span-all` は、以上に掲載されている節で列挙されたすべての行および列キーワードと併用可能な特別なキーワードです。行/列キーワードと `span-all` の2つの値を指定すると、要素は指定された行または列に場所が割り当てられ、その後その行または列のすべてのタイルにまたがります。

## 例

{{cssxref("position-area")}} プロパティページを参照してください。

アンカー機能の詳細な情報と使用方法については、[CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュールのランディングページと、[CSS アンカー位置指定の使用](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)ガイドを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("position-area")}}
- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- [`anchor()`](/ja/docs/Web/CSS/Reference/Values/anchor) function
- [CSS アンカー位置指定の使用](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)ガイド
- [オーバーフロー時の代替処理と条件付き非表示](/ja/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)ガイド
- [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュール
