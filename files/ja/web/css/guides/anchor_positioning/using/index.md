---
title: CSS アンカー位置指定の使用
short-title: アンカー位置指定の使用
slug: Web/CSS/Guides/Anchor_positioning/Using
l10n:
  sourceCommit: f3bf315cc3f26a6c96cfa6fa4898e7def28ca78a
---

**CSS アンカー位置指定**モジュールは、要素を結びつけるための機能を定義します。要素は、**アンカー要素**と**アンカー位置指定要素**として定義できます。アンカー位置指定要素は、アンカー要素に束縛することができます。アンカー位置決めされた要素は、そのサイズと位置を、結合されたアンカー要素のサイズと位置に相対的に設定することができます。

CSS のアンカー位置指定は、アンカー位置指定された要素の複数の代替位置を指定するための CSS だけの仕組みも提供します。例えば、ツールチップがフォームフィールドにアンカーされているが、既定の位置設定では画面外にレンダリングされる場合、ブラウザーは別の提案された位置でレンダリングし、画面上に配置することができます。

この記事では、基本的なアンカー位置決めの概念と、モジュールの関連付け、位置決め、サイズ調整機能の基本的な使い方を説明します。以下で説明する各概念について、追加の例や構文の詳細が記載されている参照ページへのリンクが含まれています。代替位置の指定とアンカー位置の要素の非表示については、[オーバーフロー時の代替オプションと条件付き非表示](/ja/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)ガイドを参照してください。

## 基本概念

ある要素を別の要素に接続したり、結び付けたりしたいと思うことはよくあります。

- フォームコントロールの横に表示されるエラーメッセージ。
- UI 要素の隣にポップアップ表示され、その要素に関する詳細情報を提供するツールチップや情報ボックス。
- UI 要素をすばやく設定できるようにアクセスできる設定やオプションのダイアログ。
- 関連付けられたナビゲーションバーやボタンの横に表示されるドロップダウンメニューやポップオーバーメニュー。

現行のインターフェイスでは、再利用可能な動的に生成されたコンテンツをアンカー要素に関連して配置することがよく求められます。（**アンカー要素**と呼ばれる）結びつける要素が常に UI の同じ場所にあり、結びつけられる要素（**アンカー位置指定要素**、または単に**位置指定要素**と呼ばれる）がソース順で常にその直前にまたは直後に配置できるのであれば、このような使用事例を作成するのは比較的簡単です。しかし、実際にはそう単純なことはほとんどありません。

アンカー要素が移動したり、その他の構成の変更（スクロール、ビューポートサイズの変更、ドラッグ＆ドロップなど）が行われたりした場合、位置指定要素のアンカー要素に対する位置を維持し、調整する必要があります。例えば、フォームフィールドなどの要素がビューポートの端に近づくと、そのツールチップが画面外に表示されてしまう可能性があります。一般的には、ツールチップをあるフォームコントロールに結びつけ、フォームフィールドが可視状態である限り、ツールチップが画面に完全に表示された状態を維持し、必要に応じて自動的に移動するようにしたいでしょう。これは、デスクトップやラップトップでコンテキストメニューを右クリック（<kbd>Ctrl</kbd> + クリック）した際に、オペレーティングシステムの既定の動作となっていることに気づいたかもしれません。

過去には、ある要素を別の要素に関連付け、アンカーの位置に基づいて位置指定要素の位置やサイズを動的に変更するには、JavaScript が必要でした。すると、複雑さが増し、パフォーマンスの問題も発生しました。また、すべての状況で動作する保証もありませんでした。[CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュールで定義された機能により、JavaScript ではなく CSS（と HTML）を使用して、このような使用事例をパフォーマンス良く、かつ宣言的に実装することが可能になりました。

## アンカー要素と位置指定要素の関連付け

ある要素をアンカーに関連付けるには、まず最初の宣言でどの要素がアンカーであるかを指定し、次に、そのアンカーに関連付ける位置指定要素を指定します。これにより両者の間にアンカー参照が作成されます。この関連付けは CSS を介して明示的に、または暗黙的に作成できます。

### 明示的な CSS アンカーの関連付け

CSS で要素をアンカーとして宣言するには、{{cssxref("anchor-name")}} プロパティを使用してアンカー名を設定する必要があります。アンカー名は、{{cssxref("dashed-ident")}} である必要がります。この例では、アンカーの {{cssxref("width")}} を `fit-content` に設定して小さな正方形のアンカーを作成し、アンカー効果をよりわかりやすく示しています。

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}
```

```css
.anchor {
  anchor-name: --my-anchor;
  width: fit-content;
}
```

要素をアンカー位置指定要素に変換するには、2 段階のプロセスが必要です。まず、{{cssxref("position")}} プロパティを使用して、絶対[位置指定](/ja/docs/Learn_web_development/Core/CSS_layout/Positioning)または固定位置指定にする必要があります。次に、位置指定された要素の {{cssxref("position-anchor")}} プロパティに、アンカー要素の `anchor-name` プロパティの値を設定して、2 つの要素を関連付けます。

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
  position: fixed;
  position-anchor: --my-anchor;
}
```

上記の CSS を以下の HTML に適用します。

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>これは情報ボックスです。</p>
</div>
```

これは次のようにレンダリングされます。

{{ EmbedLiveSample("CSS-only method", "100%", "120") }}

これでアンカーと情報ボックスは関連付けられましたが、そう考えていただくしかありません。これらはまだ、互いに結びついてはいません。アンカーを位置指定し、ページ上のどこか他の場所に移した場合、情報ボックスは同じ場所に留まったまま、自分自身で移動しません。[アンカーの位置に基づく位置指定要素](#アンカー要素と位置指定要素の関連付け)を見ていくと、実際の紐付けがどのように行われるかが分かります。

### 暗黙的なアンカーの関連付け

場合によっては、要素間の意味的な性質により、暗黙のアンカー参照が確立されることがあります。

- [ポップオーバー API](/ja/docs/Web/API/Popover_API) を使用してポップオーバーがコントロールに関連付けられた場合、両者の間に暗黙のアンカー参照が生成されます。これは次のような状況で発生する可能性があります。
  - 宣言的にポップオーバーがコントロールに関連付けられるように、[`popovertarget`](/ja/docs/Web/HTML/Reference/Elements/button#popovertarget) 属性と [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性を使用する。
  - プログラム的にポップオーバーアクション（{{domxref("HTMLElement.showPopover", "showPopover()")}} など）を、`source` オプションを使用してコントロールに関連付けする。

- {{htmlelement("select")}} 要素とそのドロップダウンピッカーは、 {{cssxref("appearance")}} プロパティの `base-select` 値により、[カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select)機能に組み込まれます。この場合、両者の間に暗黙のポップオーバー呼び出し元関係が作成され、同時に暗黙のアンカー参照であるということになります。

> [!NOTE]
> 以上の方法はアンカーを要素に関連付けますが、まだ固定されていません。これらを固定するには、位置指定要素をそのアンカーに対して相対的に配置する必要がありますが、これは CSS で行います。

### アンカーの関連付けを解除

アンカー要素と位置指定された要素の間に以前設定された、明示的なアンカー関連付けを解除したい場合は、次のいずれかの方法を使用することができます。

1. アンカーの `anchor-name` プロパティの値を `none` に設定するか、別の `<dashed-ident>` に設定する。これにより、別の要素をアンカーとして設定できます。
2. 位置指定要素の `position-anchor` プロパティを、現在の文書に存在しないアンカー名（例: `--not-an-anchor-name`）に設定する。

ただし、暗黙のアンカー関連付けの場合、2 番目の方法を使用する必要があります。1 番目の方法は機能しません。これは関連付けが内部で制御されているためで、CSS で `anchor-name` を削除することはできないからです。

たとえば、カスタマイズ可能な `<select>` 要素のピッカーが `<select>` 要素自体に固定されるのを防ぐには、次のルールを使うと実現できます。

```css
::picker(select) {
  position-anchor: --not-an-anchor-name;
}
```

## 要素をアンカーに対して相対的に配置

上で見たように、位置指定された要素をアンカーと関連付けるだけでは、実はあまり使用する場面がありません。私たちの目標は、位置指定された要素を、関連付けられたアンカー要素に対して相対的に配置することです。これを設定するには、[インセットプロパティ](/ja/docs/Glossary/Inset_properties)に [CSS の `anchor()` 関数](#インセットプロパティで_anchor_関数値を使用)の値を設定するか、[`position-area` を指定](#position-area_の設定)するか、または [`anchor-center` 配置値](#anchor-center_を使用してアンカーの中央に配置)で位置指定された要素を中央揃えします。

> [!NOTE]
> CSS アンカー位置指定では、位置指定要素の既定の位置がビューポートをあふれる場合に備えた、代替位置を指定する仕組みも同時に提供しています。詳細は[代替オプションと条件付き非表示](/ja/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)ガイドを参照してください。

> [!NOTE]
> 関連付けと位置指定が動作するには、アンカー要素は可視の DOM ノードでなければなりません。 もし非表示（例えば [`display: none`](/ja/docs/Web/CSS/Reference/Properties/display#none)）になっている場合、位置指定された要素は、最も近い位置指定祖先要素を基準として位置指定されます。 アンカーが消えた際に、アンカーで位置指定された要素を非表示にする方法については、[`position-visibility` を使用した条件付き非表示](/ja/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements)で説明しています。

### インセットプロパティで `anchor()` 関数値を使用

従来の絶対位置指定要素および固定位置指定要素は、{{cssxref("length")}} または {{cssxref("percentage")}} の値を{{glossary("inset properties", "インセットプロパティ")}}に設定することで、明示的に位置指定されます。`position: absolute` の場合、このインセット位置値は、最も近い位置指定祖先の端からの絶対距離です。`position: fixed` の場合、インセット位置値はビューポートからの絶対距離です。

CSS のアンカーの位置指定は、この概念を変更し、アンカーに関連付けられた要素を、関連付けられたアンカーの端を基準として配置できるようにします。このモジュールでは、各インセットプロパティの有効な値である [`anchor()`](/ja/docs/Web/CSS/Reference/Values/anchor) 関数を定義しています。この関数を使用すると、インセット位置の値を、アンカー要素を定義し、位置指定される要素が相対的に位置指定されるアンカー要素の端、およびその端からの距離を定義することで、アンカー要素に対する絶対距離として設定します。

関数部分は次のようになります。

```plain
anchor(<anchor-name> <anchor-side>, <fallback>)
```

- `<anchor-name>`
  - : 要素を相対的に配置したいアンカー要素の [`anchor-name`](/ja/docs/Web/CSS/Reference/Properties/anchor-name) プロパティの値。これは `<dashed-ident>` 値です。省略した場合は、要素の**既定のアンカー**が使用されます。これは、[`position-anchor`](/ja/docs/Web/CSS/Reference/Properties/position-anchor) プロパティで参照されたアンカー、または、HTML の標準外の [`anchor`](/ja/docs/Web/HTML/Reference/Global_attributes/anchor) 属性を介してこの要素に関連付けられたアンカーです。
    > [!NOTE]
    > `<anchor-name>` を指定すると、そのアンカーに対する要素の位置が指定されますが、要素の関連付けは指定されません。同じ要素上の異なる `anchor()` 関数内に[異なる`<anchor-name>` 値](/ja/docs/Web/CSS/Reference/Values/anchor#複数のアンカーに相対的な要素の位置指定)を指定することで、複数のアンカーに対する要素の位置を指定できますが、位置指定された要素は単一のアンカーと関連付けられます。

- [`<anchor-side>`](/ja/docs/Web/CSS/Reference/Values/anchor#anchor-side)
  - : アンカーの端に対する相対位置を指定します。有効な値には、アンカーの中心、アンカーの物理的な辺（`top`, `left`, など）、または論理的な辺（`start`, `self-end`, など）、またはインセットプロパティの軸の先頭 (`0%`) と末尾 (`100%`) の間のパーセント値が含まれます。`anchor()` 関数が設定されているインセットプロパティと[互換性](/ja/docs/Web/CSS/Reference/Values/anchor#インセットプロパティと_anchor-side_の値の互換性)のない値が使用された場合、代替値が使用されます。

- `<fallback>`
  - : {{cssxref("length-percentage")}} は、要素が絶対位置指定または固定位置指定されていない場合、使用された `<anchor-side>` 値が `anchor()` 関数が設定されたインセットプロパティと互換性がない場合、またはアンカー要素が存在しない場合に、代替値として使用する距離を定義します。

`anchor()` 関数の返値は、アンカーの位置に基づいて計算された長さの値です。アンカー位置指定要素のインセットプロパティに直接長さやパーセント値を設定すると、アンカー要素に結び付けられていないかのように位置指定されます。これは、`<anchor-side>` の値が設定されたインセットプロパティと互換性がなく、代替値が使用された場合と同じ動作です。次の 2 つの宣言は同等です。

```css example-bad
bottom: anchor(right, 50px);
bottom: 50px;
```

どちらも、位置指定された要素を、最も近い位置指定された祖先要素（存在する場合）または最初の包含ブロックの最下端から `50px` 上の位置に配置します。

最もよく使用される `anchor()` の引数は、既定のアンカーの端を参照します。また、アンカーの端と位置指定された要素の間に空間を作成するために {{cssxref("margin")}} を追加するか、またはその空間を追加するために `calc()` 関数内で `anchor()` を使用することが多いでしょう。

例えば、このルールは位置指定された要素の正しい端をアンカー要素の左端に揃え、端と端の間に空間を作るために `margin-left` を追加します。

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

`anchor()` 関数の返値は長さです。つまり、{{cssxref("calc()")}} 関数内で使用できるということです。このルールでは、位置指定された要素の論理ブロックの終わりを、アンカー要素の論理ブロックの始まりから `10px` 離れた位置に配置し、`calc()` 関数を使用して間隔を追加します。これにより、マージンを追加する必要がなくなります。

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

#### `anchor()` の例

例えば、`anchor()` の動作を見てみましょう。 前回と同様の HTML を使用していますが、コンテンツがコンテナーそのものをあふれてスクロールするように、その上下にいくつかのフィラーテキストを配置しています。また、アンカー要素には、以前の例と同じ `anchor-name` を指定します。

```html hidden
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

```css hidden
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

body {
  width: 50%;
  margin: 0 auto;
}
```

```css
.anchor {
  anchor-name: --my-anchor;
}
```

情報ボックスはアンカー名によってアンカーに関連付けられ、固定位置指定が指定されています。{{cssxref("inset-block-start")}} と {{cssxref("inset-inline-start")}} プロパティ（横書きの左書きモードでは {{cssxref("top")}} と {{cssxref("left")}} に相当）を記載することで、アンカーに固定されています。位置指定要素とアンカーとの間に空間を追加するために、情報ボックスにマージンを追加します。

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
  inset-block-start: anchor(end);
  inset-inline-start: anchor(self-end);
  margin: 5px 0 0 5px;
}
```

インセットプロパティの位置指定宣言について、さらに詳しく見ていきましょう。

- `inset-block-start: anchor(end)`: これは、位置指定された要素のブロック開始位置を、`anchor(end)` 関数を使用して計算したアンカーのブロック終了位置に設定します。
- `inset-inline-start: anchor(self-end)`: これは、位置指定された要素のインライン開始位置を、`anchor(self-end)` 関数を使用して計算したアンカーのインライン終了位置に設定します。

これにより、次の結果が得られます。

{{ EmbedLiveSample("`anchor()` example", "100%", "250") }}

位置指定された要素は、アンカー要素の `5px` 下、`5px` 右に配置されます。文書内の位置を上下にスクロールしても、位置指定された要素はアンカー要素に対する相対的な位置を維持します。つまり、位置指定された要素はビューポートではなくアンカー要素に固定された状態になります。

### `position-area` の設定

{{cssxref("position-area")}} プロパティは、アンカーに対する要素の位置指定を行うための、`anchor()` 関数の代替として指定されたものです。`position-area` プロパティは、アンカー要素を中心タイルとする 3x3 のタイルグリッドの概念に基づいて動作します。`position-area` プロパティを使用して、アンカー要素の位置指定された要素を 9 つのタイルのいずれかに配置したり、2 つまたは 3 つのタイルにまたがって配置したりすることができます。

![position-area grid グリッドは下記のとおりです](position-area.svg)

グリッドのタイルは行と列の数に分割されます。

- 3 つの行は、物理的な値では `top`、`center`、`bottom` で表します。 また、`start`、`center`、`end` といった論理的な値や、`y-start`、`center`、`y-end` といった座標の値もあります。
- 3 つの列は、物理的な値では `left`、`center`、`right` で表します。また、`start`、`center`、`end` といった論理的な値や、`x-start`、`center`、`x-end` といった座標の値もあります。

中央のタイルの寸法は、アンカー要素の[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)によって定義され、中央のタイルとグリッドの外縁との間の距離は、位置指定要素の包含ブロックによって定義されます。

`position-area` プロパティの値は、上記の行と列の値に基づいて 1 つまたは 2 つの値で構成され、要素が配置されるべきグリッドの領域を定義するためのスパニングオプションが利用可能です。

例えば、

2 つの値を指定することで、特定のグリッドマスに配置することができます。例えば、

- `top left`（等価な論理値は `start start`）は、位置指定要素を左上の位置に配置します。
- `bottom center`（等価な論理値は `end center`）は、位置指定要素を下中央の位置に配置します。

行または列の値と `span-*` の値を指定することができます。最初の値は、位置指定要素を配置する行または列を指定し、初期状態ではその中央に配置しますが、もう 1 つの値で、その列をまたがる量を指定します。例えば、

- `top span-left` は、位置指定要素を一番上の行に配置し、その行の中央と左のタイルにまたがるようにします。
- `y-end span-x-end` は、位置指定要素を y 方向の列の末尾に配置し、その列の中央と x 方向の末尾のタイルにまたがるようにします。
- `block-end span-all` は、配置された要素をブロック方向の末尾の行に配置し、その行のinline-start、center、inline-endタイルにまたがるようにします。

値を 1 つだけ指定した場合、どの値が設定されているかによって効果が異なります。

- 物理的な端の値 (`top`, `bottom`, `left`, `right`) または軸の値 (`y-start`, `y-end`, `x-start`, `x-end`) は、もう一方の値が `span-all` であるかのように動作します。例えば、`top` は `top span-all` と同じ効果です。
- 論理的な端の値（`start` または `end`）は、もう一方の値が同じ値に設定されているかのように動作します。例えば、`start` は `start start` と同じ効果があります。
- `center` の値は、両方の値が `center` に設定されている場合と同じように動作します（つまり、`center center`）。

> [!NOTE]
> 利用可能なすべての値の詳細については、[`<position-area>`](/ja/docs/Web/CSS/Reference/Values/position-area_value) 値の参照ページをご覧ください。論理値と物理値を混在させると、宣言が無効になります。

これらの値をいくつか示してみましょう。この例では、HTML とベース CSS は前の例と同じものを使用していますが、 {{htmlelement("select")}} 要素を追加して、配置された要素の `position-area` 値を変更できるようにしています。

```html hidden
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

<form>
  <label for="position-area-select">position-area を選択:</label>
  <select id="position-area-select" name="position-area-select">
    <option>top</option>
    <option>bottom</option>
    <option>left</option>
    <option>right</option>
    <option>start</option>
    <option>end</option>
    <option>top left</option>
    <option>top right</option>
    <option>bottom left</option>
    <option>bottom right</option>
    <option>top span-left</option>
    <option>bottom span-right</option>
    <option>start span-start</option>
    <option>end span-end</option>
    <option>center</option>
    <option>center span-all</option>
    <option>bottom center</option>
    <option>end span-all</option>
  </select>
</form>
```

```css hidden
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

.anchor {
  anchor-name: --my-anchor;
}

body {
  width: 50%;
  margin: 0 auto;
}

form {
  background: white;
  border: 1px solid black;
  padding: 5px;
}

select {
  display: block;
  margin-top: 5px;
}

form {
  position: fixed;
  top: 0;
  right: 2px;
}
```

情報ボックスは CSS を適用して固定位置を設定しており、アンカーに関連付けられています。読み込み時には、`position-area: top;` でアンカーに固定されるように設定され、 position-area のグリッドの最上部に配置されます。これは、`<select>` メニューから異なる値を選択すると上書きされます。

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
  position: fixed;
  position-anchor: --my-anchor;
  position-area: top;
}
```

また、`<select>` メニューから選択した新しい `position-area` 値を情報ボックスに適用するための短いスクリプトも含まれています。

```js
const infobox = document.querySelector(".infobox");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  const area = selectElem.value;

  // 選択ボックスで選択した値を position-area に設定
  infobox.style.positionArea = area;
});
```

`<select>` メニューから新しい `position-area` 値を選択して、情報ボックスの位置にどのような影響があるか確認してみてください。

{{ EmbedLiveSample("Setting a `position-area`", "100%", "250") }}

### 位置指定要素の幅

例えば、上記の例では、位置指定された要素のサイズを明示的に指定していません。 意図的にサイズ指定を省略することで、それが引き起こす動作を観察できるようにしてあります。

配置された要素が明示的なサイズ指定なしに `position-area` グリッドセルに配置されると、指定されたグリッド領域に配置され、{{cssxref("width")}} が {{cssxref("max-content")}} に設定されているかのように動作します。 そのサイズは、その[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)サイズ（コンテンツの幅）に従って決定されます。 このサイズは、`position: fixed` の設定によって強制的に決定されます。 自動的にサイズが決定され、絶対位置指定された要素は、自動的にサイズが決定され、テキストコンテンツに合わせて必要に応じて幅が広げられますが、ビューポートの端によって制約されます。この場合、グリッドの左辺に `left` または `inline-start` 値で配置された場合、テキストは折り返されます。アンカー要素の `max-content` サイズがアンカーよりも狭い場合、または短い場合、アンカーのサイズに一致するように拡大することはありません。

`position-area: bottom center` のように、配置された要素が垂直方向に中央揃えされている場合、指定されたグリッドセルに配置され、幅はアンカー要素と同じになります。この場合、その最小の高さは、アンカー要素の包含ブロックサイズになります。`min-width` が {{cssxref("min-content")}}、つまり、最も長い単語と同じ幅以上になるため、はみ出すことはありません。

## `anchor-center` を使用してアンカーの中央に配置

`position-area` の `center` 値を使用して、アンカーに配置された要素を中央揃えにすることができますが、インセットプロパティと `anchor()` 関数を結合すると、正確な位置をより詳細にコントロールすることができます。CSS のアンカー位置指定では、`position-area` ではなくインセットプロパティを使用してアンカーに結びつける場合、アンカーに配置された要素をアンカーに対して中央揃えにする方法が指定されています。

{{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, {{cssxref("align-items")}} の各プロパティ（およびその一括指定である {{cssxref("place-items")}} および {{cssxref("place-self")}}）は、開発者がさまざまなレイアウトシステム内で要素をインラインまたはブロック方向に簡単に配置できるようにするために用意されています。例えば、フレックスチャイルドの場合、メインまたは交差軸に沿って配置することができます。CSS のアンカー位置指定では、これらのプロパティに追加の値として、`anchor-center` が提供されています。これは、位置指定された要素を既定のアンカーの中心に配置します。

例えば、前回と同じHTMLとベースCSSを使用します。情報ボックスには修正された位置指定が指定され、アンカーの下端に固定されています。 `justify-self: anchor-center` を使用して、アンカーの中心に水平に中央揃えされていることを確認します。

```html hidden
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

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
  anchor-name: --my-anchor;
}

body {
  width: 50%;
  margin: 0 auto;
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
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  top: calc(anchor(bottom) + 5px);
  justify-self: anchor-center;
}
```

これは、アンカー位置指定された要素を、そのアンカーの真下に配置します。

{{ EmbedLiveSample("Centering on the anchor using `anchor-center`", "100%", "250") }}

## アンカーのサイズに応じて要素をサイズ変更

要素をアンカーの位置に関連して位置指定するだけでなく、サイズ指定プロパティ値内で [`anchor-size()`](/ja/docs/Web/CSS/anchor-size) 関数を使用して、要素をアンカーのサイズに関連してサイズ指定することもできます。

`anchor-size()` の値を受け入れることができるサイズ指定プロパティには、次のようなものがあります。

- {{cssxref("width")}}
- {{cssxref("height")}}
- {{cssxref("min-width")}}
- {{cssxref("min-height")}}
- {{cssxref("max-width")}}
- {{cssxref("max-height")}}
- {{cssxref("block-size")}}
- {{cssxref("inline-size")}}
- {{cssxref("min-block-size")}}
- {{cssxref("min-inline-size")}}
- {{cssxref("max-block-size")}}
- {{cssxref("max-inline-size")}}

`anchor-size()` 関数は {{cssxref("length")}} 値に解決されます。構文は次のようになります。

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

- `<anchor-name>`
  - : 相対指定するアンカー要素の [`anchor-name`](/ja/docs/Web/CSS/Reference/Properties/anchor-name) プロパティの値として設定する `<dashed-ident>` の名前。省略した場合は、その要素の既定のアンカー（[`position-anchor`](/ja/docs/Web/CSS/Reference/Properties/position-anchor) プロパティで参照されているアンカー）が使用されます。
- [`<anchor-size>`](/ja/docs/Web/CSS/Reference/Values/anchor-size#anchor-size)
  - : 位置指定された要素のサイズが相対となるアンカー要素の寸法を指定します。 物理的な値（`width` または `height`）または論理的な値（`inline`, `block`, `self-inline`, `self-block`）を使用して表現することができます。
- {{cssxref("length-percentage")}}
  - : 要素が絶対位置指定または修正された位置指定ではない場合、またはアンカー要素が存在しない場合に、代替値として使用するサイズを指定します。

最もよく使用する `anchor-size()` 関数は、既定のアンカーの寸法を参照するだけです。また、{{cssxref("calc")}} 関数内でそれらを使用して、位置指定された要素に適用されるサイズを変更することができます。

例えば、このルールでは、位置指定された要素の幅を既定のアンカー要素の幅と等しくします。

```css
.elem {
  width: anchor-size(width);
}
```

このルールでは、位置指定された要素のインラインサイズをアンカー要素のインラインサイズの 4 倍に設定します。この乗算は、`calc()` 関数内で実行されます。

```css
.elem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

例えば、HTML と基本 CSS は、フォーカス可能なアンカー要素に [`tabindex="0"`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) 属性が指定されていることを除いて、これまでの例と同じです。情報ボックスは修正された位置指定が指定され、これまでと同様にアンカーに関連付けられています。しかし、今回は `position-area` を使用してアンカーの右側に固定し、アンカーの幅の 5 倍の幅を指定しています。

```html hidden
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor" tabindex="0">⚓︎</div>

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

```css hidden
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

.anchor {
  anchor-name: --my-anchor;
}

body {
  width: 50%;
  margin: 0 auto;
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
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  position-area: right;
  margin-left: 5px;
  width: calc(anchor-size(width) * 5);
}
```

さらに、{{cssxref(":hover")}} および {{cssxref(":focus")}} に対してアンカー要素の {{cssxref("width")}} を拡大し、{{cssxref("transition")}} を適用して、状態が変化したときにアニメーションするようにします。

```css
.anchor {
  text-align: center;
  width: 30px;
  transition: 1s width;
}

.anchor:hover,
.anchor:focus {
  width: 50px;
}
```

アンカー要素にカーソルを合わせるか、タブキーで移動すると、位置指定された要素がアンカーの拡大に合わせて拡大します。これは、アンカーと位置指定された要素のサイズが相対的なものであることを示しています。

{{ EmbedLiveSample("Sizing elements based on anchor size", "100%", "250") }}

## `anchor-size()` のその他の用途

物理インセットや論理インセット、マージンプロパティでも `anchor-size()` が使用できます。この節では、使用例を示す前に、これらの使用法について詳しく説明します。

### アンカーサイズに基づく要素の位置の設定

[`anchor-size()`](/ja/docs/Web/CSS/anchor-size) 関数を[インセットプロパティ](/ja/docs/Glossary/Inset_properties)の値の中で使用することで、アンカー要素のサイズに基づいて要素を配置できます。例えば、

```css
left: anchor-size(width);
inset-inline-end: anchor-size(--my-anchor height, 100px);
```

これは、 [`anchor()`](/ja/docs/Web/CSS/Reference/Values/anchor) 関数や {{cssxref("position-area")}} プロパティのように要素をアンカーの位置に対して相対的に配置するものではありません（以上、[要素をアンカーに対して相対的に配置する](#要素をアンカーに対して相対的に配置)を参照）。 アンカー要素の位置が変わっても、この要素の位置は変わりません。代わりに、この要素は絶対位置指定 ([`absolute`](/ja/docs/Web/CSS/Reference/Properties/position#absolute)) または固定位置指定 ([`fixed`](/ja/docs/Web/CSS/Reference/Properties/position#fixed)) の通常のルールに従って位置指定されます。

これは状況によっては有用です。例えば、アンカー要素が垂直方向にしか移動できず、常に最も近い位置指定親要素の水平方向の端に隣接して配置される場合、`left: anchor-size(width)` を使用することで、アンカーの幅が変化してもアンカー配置要素が常にアンカーの適切な側に配置されるようにできます。

### アンカーサイズに基づく要素のマージンの設定

[`anchor-size()`](/ja/docs/Web/CSS/Reference/Values/anchor-size) 関数を `margin-*` プロパティの値の中で使用することで、アンカー要素のサイズに基づいて要素のマージンを設定できます。

```css
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--my-anchor self-block, 20px);
```

これは、アンカー位置指定要素のマージンを、幅が変化した場合でも常にアンカー要素の幅の同じパーセント値に等しく設定するのを設定したい場合に使用できます。

### `anchor-size()` の位置とマージンの例

アンカー位置指定された要素のマージンと位置を、アンカー要素の幅に対して相対的に設定する例を見てみましょう。

HTML では、 2 つの {{htmlelement("div")}} 要素、 1 つの `anchor` 要素、およびアンカー要素に対して相対位置指定する `infobox` 要素を指定します。アンカー要素には [`tabindex`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) 属性を付与し、キーボード操作でフォーカスできる状態にします。同時に、{{htmlelement("body")}} の高さをスクロールが要求される程度に調整するため、ダミーテキストを記載していますが、簡潔さを考慮してこのダミーテキストは非表示にしています。

```html hidden
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar.
</p>
```

```html
<div class="anchor" tabindex="0">⚓︎</div>

<div class="infobox">
  <p>情報ボックス</p>
</div>
```

```html hidden
<p>Vulputate ut pharetra sit amet aliquam.</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

この CSS では、まずアンカー要素として `anchor` `<div>` を宣言し、 {{cssxref("anchor-name")}} を付与します。この位置指定要素は {{cssxref("position")}} プロパティを `absolute` に設定し、 {{cssxref("position-anchor")}} プロパティを介してアンカー要素に関連付けられます。同時に、アンカーと情報ボックスには絶対的な {{cssxref("height")}} と {{cssxref("width")}} のサイズを設定し、アンカーには {{cssxref("transition")}} を記述することで、状態が変化した時の幅の変化が滑らかにアニメーションされるようにします。

```css hidden
.anchor {
  font-size: 2rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  text-align: center;
  align-content: center;
  outline: 1px solid black;
}

body {
  width: 80%;
  margin: 0 auto;
  position: relative;
}

.infobox {
  align-content: center;
  color: darkblue;
  background-color: azure;
  outline: 1px solid #dddddd;
  font-size: 1rem;
  text-align: center;
}
```

```css
.anchor {
  anchor-name: --my-anchor;
  width: 100px;
  height: 100px;
  transition: 1s all;
}

.infobox {
  position-anchor: --my-anchor;
  position: absolute;
  height: 100px;
  width: 100px;
}
```

これで、最も興味深い部分に移りましょう。ここでは、アンカーがホバーまたはフォーカスされた際に、その `width` を `300px` に設定します。次に、情報ボックスの、

- `top` 値を `anchor(top)` に設定します。この設定により、情報ボックスの上端がアンカーの上端につけ、常に揃った状態になります。
- `left` 値を `anchor-size(width)` に設定します。この設定により、情報ボックスの左端が、最も近い位置指定された親要素の左端から指定された距離だけ離れて配置されます。この場合、指定された距離はアンカー要素の幅に等しく、最も近い位置指定された親要素は `<body>` 要素であるため、情報ボックスはアンカー要素の適切な側に現れます。
- `margin-left` の値を `calc(anchor-size(width)/4)` に設定します。これにより、情報ボックスは常にアンカーと区切り文字を持つ左マージンを保有し、その幅はアンカーの幅の 4 分の 1 に等しくなります。

```css
.anchor:hover,
.anchor:focus {
  width: 300px;
}

.infobox {
  top: anchor(top);
  left: anchor-size(width);
  margin-left: calc(anchor-size(width) / 4);
}
```

レンダリング結果は、次のようになります。

{{EmbedLiveSample("Basic `anchor-size()` usage", "100%", "240")}}

タブキーでアンカーに移動するか、マウスポインターをホバーさせてみてください。情報ボックスの位置と左マージンが、アンカー要素の幅に比例して、伸長する様子に注目してください。

## 関連情報

- [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュール
- [オーバーフローの扱い: 代替や条件付き非表示](/ja/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
- [位置指定](/ja/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS 論理プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)モジュール
- [CSS におけるアイテムのサイズ設定](/ja/docs/Learn_web_development/Core/Styling_basics/Sizing)
