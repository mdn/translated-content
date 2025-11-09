---
title: CSS ボックス配置の概要
slug: Web/CSS/Guides/Box_alignment/Overview
original_slug: Web/CSS/CSS_box_alignment/Box_alignment
l10n:
  sourceCommit: f3d3298130d8e22fb89ba123a0648ad3cb7b3655
---

[CSS ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)モジュールは、さまざまな CSS ボックスレイアウトモデルにおけるボックスの配置に関連する CSS 機能を指定します。このモジュールは、 CSS 全体で一貫した整列方法を作成することを目的としています。 CSS ボックス配置プロパティは、完全な水平方向と垂直方向の配置機能を提供します。

このガイドでは、このモジュールにある一般的な概念について詳しく説明します。その他のガイドでは、[フレックスボックス](/ja/docs/Web/CSS/Guides/Box_alignment/In_flexbox)、[グリッドレイアウト](/ja/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)、[段組みレイアウト](/ja/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout)、[ブロック、絶対配置、テーブルレイアウト](/ja/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables)でのボックスの配置について詳しく説明します。テキストの配置については、 [CSS テキスト](/ja/docs/Web/CSS/Guides/Text)モジュールと [CSS インラインレイアウト](/ja/docs/Web/CSS/Guides/Inline_layout)モジュールで扱っています。

## 主要概念と用語

この仕様では、特定のレイアウト方式内で実装されていないこれらの配置プロパティについて議論しやすくするために、いくつかの配置用語を詳しく説明しています。また、すべてのレイアウト方式に共通する重要な概念もいくつかあります。

### 書字方向との関連

配置は書字方向と関連しており、アイテムを配置するときには上、右、下、左という物理的な軸に配置することを意識しません。その代わりに、特定の軸の先頭方向と末尾方向で配置を表現します。こうすることで、文書の書字方向がどのようになっていようと、配置が同じように機能するようになります。

### 配置の 2 つの軸

ボックスの配置プロパティを使用すると、インライン軸（または主軸）とブロック軸（または交差軸）の 2 つの軸のいずれかにコンテンツを配置します。インライン軸は、使用されている書字方向で文中の単語が流れる軸です。例えば英語の場合、インライン軸は水平方向です。ブロック軸は、段落要素などのブロックがレイアウトされる軸で、インライン軸を横切ります。

![インライン軸は左右、または水平方向であり、ブロック軸は垂直、または上下方向です。](two-axes.png)

インライン軸でアイテムを整列させる場合は、 `justify-` で始まるプロパティを使用します。

- {{cssxref("justify-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("justify-content")}}

ブロック軸上のアイテムを整列させるときは、 `align-` で始まるプロパティを使用します。

- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("align-content")}}

フレックスボックスでは、 {{cssxref("flex-direction")}} が `row` に設定されているときに上記が成り立つという複雑さが加わります。フレックスボックスが `column` に設定されている場合は、プロパティが入れ替わります。したがって、フレックスボックスで作業するときは、インラインとブロックではなく、主軸と交差軸について考える方が簡単です。 `justify-` プロパティは常に主軸の配置に使用され、 `align-` プロパティは交差軸の配置に使用されます。

### 配置対象物

**{{Glossary("Alignment Subject", "配置対象物")}}** (Alignment subject) は、配置されるものです。 `justify-self` や `align-self` の場合、または `justify-items` や `align-items` でこれらの値をグループとして設定する場合、このプロパティが使用されている要素のマージンボックスとなります。 `justify-content` と `align-content` プロパティは、レイアウト方式ごとに異なります。

### 配置コンテナー

**{{Glossary("Alignment Container", "配置コンテナー")}}** (Alignment container) とは、対象が配置されるボックスです。通常、これは配置対象物の包含ブロックとなります。配置コンテナーには、 1 つ以上の配置対象物が含まれます。

次の画像は、 2 つの配置対象物が配置された配置コンテナーを示しています。

![同じ幅で高さが異なる 2 つの長方形を含むボックス。 2 つの長方形は上端が揃っており、つまり、両方とも、それらが含まれるボックスの上端から約 10 ピクセル内側に位置しています。](align-container-subjects.png)

## 配置の種類

仕様書では、 3 種類の異なる配置について詳細に説明しています。これらはキーワード値を使用します。

- [位置揃え](#位置揃え)
- [ベースライン揃え](#ベースライン揃え)
- [分配配置](#分配配置)

### 位置揃え

**位置揃え**とは、配置対象物の位置を配置コンテナーとの関係で表したものです。位置揃えキーワードの値は位置揃え用に定義されており、コンテンツの位置揃えの値としては `justify-content` および `align-content` があり、自分自身の一ぞれの値として `justify-self` および `align-self` もあります。

- `center`
- `start`
- `end`
- `self-start`
- `self-end`
- `flex-start` （フレックスボックスのみ）
- `flex-end` （フレックスボックスのみ）
- `left`
- `right`

画面の物理的な属性に関連する `left` および `right` の物理的な値以外の、その他のすべての値（{{cssxref("self-position")}} および {{cssxref("content-position")}} 値）は論理的な値であり、コンテンツの書式に関連します。

例えば、 CSS グリッドレイアウトで作業している場合、英語で書いていて `justify-content` を `start` に設定すると、アイテムがインライン方向の開始位置、すなわち左へ移動します。これは、英語の文章がページの左側から始まるためです。もし右書きの言語であるアラビア語を使用している場合、同じ値の `start` を指定すると、アラビア語では文章がページの右側から始まるため、アイテムは右へ移動することになります。

![2 つのボックスがあり、高さはそれぞれ異なりますが、幅はほぼ同じで、それぞれに 3 つの子要素があります。最初のボックスには、 A、B、C の文字が書かれた 3 つの子要素があります。これら 3 つのボックスはすべて左側に配置されています。 2 つ目のボックスには、アラビア文字が書かれた 3 つの子要素があります。これら 3 つのボックスはすべて右側に配置されています。](writing-mode-start.png)

どちらにも `justify-content: start` が指定されていますが、 2 つの開始位置は書字方向が異なるため異なります。

### ベースライン揃え

**ベースライン揃え**とは、配置コンテキスト内の複数の配置対象物のベースラインを揃えます。ベースライン揃えの {{cssxref("baseline-position")}} キーワードは、配置対象物のグループ内のボックスのベースラインを配置するために使用します。これらのキーワードは、 `justify-content` および `align-content` を使用したコンテンツ配置、および `justify-self` および `align-self` を使用した自己配置の値として使用することができます。

- `baseline`
- `first baseline`
- `last baseline`

ベースラインのコンテンツの位置揃えは、これは `justify-content` または `align-content` でベースライン配置を指定することですが、アイテムを列で配置するレイアウト方式で動作します。配置対象物は、ボックス内にパディングを追加することで、互いにベースラインが揃えられます。

ベースラインの自己配置では、ボックスの外側にマージンを追加すると、ベースラインに沿ってボックスを配置します。自己配置は、単一のボックスに対しては `justify-self` または `align-self` を使用して、ボックスのグループに対しては `justify-items` および `align-items` を使用して行われます。

### 分配配置

**分配配置**は、配置対象物の間に余白を分配する配置を定義します。分配配置の {{cssxref("content-distribution")}} キーワードは、 `align-content` および `justify-content` プロパティで使用されます。これらのキーワードは、配置対象物が表示された後に続くスペースに何が起こるかを定義します。値は次のとおりです。

- `stretch`
- `space-between`
- `space-around`
- `space-evenly`

例えば、フレックスレイアウトでは、アイテムは `flex-start` で初期配置されます。英語などの言語で、上から下への横書きモードで作業する場合、 `flex-direction` を `row` に設定すると、アイテムは左端から開始され、アイテムを表示した後に利用できる空間はアイテムの後に配置されます。

![異なる幅を持つ 3 つの長方形がボックスの中にあります。それらはすべて、含まれているボックスの左側に配置され、それらの間には約 10px のスペースがあり、最初の長方形の左側と親コンテナーの間には 10px のスペースがあります。](justify-content-start.png)

フレックスコンテナー内で `justify-content: space-between` を設定すると、これで利用できるスペースが分配され、アイテム間に配置されます。

![異なる幅を持つ 3 つの長方形がボックスの中にあります。最初の長方形は、コンテナーボックスの左側に配置され、 3 つ目の長方形は右側に配置され、中央の長方形は最初の長方形と最後の長方形の間に等間隔で配置されています。](justify-content-space-between.png)

これらのキーワードの効果を発揮するには、アイテムを配置したい方向に向かって余白が必要になります。余白がなければ、分配するものもありません。

### 基本的な例

次の例では、[グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)と[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)でボックス配置プロパティがどのように適用されるかを示します。

#### CSS グリッドレイアウト配置の例

例えば、グリッドレイアウトでは、インライン軸（主軸）上に修正されたトラックをレイアウトした後、グリッドコンテナー内に余白が残ります。この余白は、 {{cssxref("justify-content")}} を使用して配分されます。ブロック軸（交差軸）上では、アイテムのグリッド領域内の配置は、 `align-items` で制御されます。最初のアイテムは、 {{cssxref("align-self")}} を `center` に設定することで、グループに設定された `align-items` の値を上書きします。

```html live-sample___grid-align-items
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three <br />has <br />extra <br />text</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
</div>
```

```css hidden live-sample___grid-align-items
body {
  font: 1.2em sans-serif;
}

.box {
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

```css live-sample___grid-align-items
.box {
  display: grid;
  grid-template-columns: 120px 120px 120px;
  align-items: start;
  justify-content: space-between;
}

.box :first-child {
  align-self: center;
}
```

{{EmbedLiveSample("grid-align-items", "", "200px")}}

#### フレックスボックスの配置の例

この例では、 3 つのフレックスアイテムが、 `justify-content` を使用して主軸上に、 `align-items` を使用して交差軸上に配置されています。最初のアイテムは、 `align-self` を `center` に設定することで、グループに設定された `align-items` を上書きしています。

```html live-sample___flex-align-items
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three <br />has <br />extra <br />text</div>
</div>
```

```css hidden live-sample___flex-align-items
body {
  font: 1.2em sans-serif;
}

.box {
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

```css live-sample___flex-align-items
.box {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.box :first-child {
  align-self: center;
}
```

{{EmbedLiveSample("flex-align-items")}}

## オーバーフローの配置

{{cssxref("overflow-position")}} キーワードの `safe` および `unsafe` は、配置対象物が配置コンテナーよりも大きい場合の動作を定義する手助けとなります。 `safe` キーワードは、指定された配置によってオーバーフローが発生した場合に開始位置に配置されます。これは、アイテムの一部が配置コンテナーの境界外に出てしまい、スクロールできない「データ損失」を避けることを目的としています。

`unsafe` を指定すると、そのようなデータ損失が発生しても配置が優先されます。

## ボックス間のギャップ

ボックス配置の仕様書には、`gap`、`row-gap`、`column-gap` プロパティも記載されています。これらのプロパティにより、アイテムがこのように配置されている任意のレイアウト方式において、行または列のアイテム間に一貫したギャップを設定することができます。

`gap` プロパティは、 `row-gap` と `column-gap` の一括指定であり、これらのプロパティを一度に設定することができます。

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

次の例では、グリッドレイアウトで `gap` 一括指定を使用して、行トラック間に `10px` のギャップを設定し、列トラック間に `2em` のギャップを設定しています。

```html live-sample___grid-gap
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
</div>
```

```css hidden live-sample___grid-gap
body {
  font: 1.2em sans-serif;
}

.box {
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

```css live-sample___grid-gap
.box {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px 2em;
}

.box :first-child {
  align-self: center;
}
```

{{EmbedLiveSample("grid-gap")}}

初期のグリッドの実装では、 `gap` プロパティに `grid-` の接頭辞を付けていました。すべてのブラウザーが接頭辞のないプロパティに対応していますが、コードベースには次のプロパティが続くことがあります。 {{cssxref("row-gap", "grid-row-gap")}}、{{cssxref("column-gap", "grid-column-gap")}}、{{cssxref("gap", "grid-gap")}}。接頭辞付きのバージョンは、接頭辞のないバージョンの別名です。

視覚的なギャップは、例えば余白分配のキーワードを使用したり、アイテムにマージンを追加したりすることで、大きくなる可能性があることにご注意ください。

## レイアウトの種類ごとのボックス配置

CSS のボックス配置プロパティは、操作する仕様によって異なる実装がなされるため、各レイアウトの種類における配置プロパティの使用方法の詳細については、次のガイドを参照してください。

- [フレックスボックスでのボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [CSS グリッドレイアウトでのボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [段組みレイアウトでのボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout)
- [ブロック、絶対位置指定、表レイアウトのボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables)

## 関連情報

- [CSS 表示方法](/ja/docs/Web/CSS/Guides/Display)モジュール
- [CSS フレックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout)モジュール
- [フレックスボックスの基本概念](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [フレックスこてなーでのアイテム配置](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout) module
- [グリッドレイアウトでのボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
