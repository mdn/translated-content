---
title: CSS 隙間と隙間装飾プロパティの概要
short-title: 隙間と隙間装飾
slug: Web/CSS/Guides/Gaps/Overview
l10n:
  sourceCommit: e57c161bccdd08db7e46922255e1dc3ea74058d4
---

[CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュールでは、CSS [グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)、[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)、[段組み](/ja/docs/Web/CSS/Guides/Multicol_layout)レイアウトの行や列の間隔を制御するプロパティが定義されています。また、このモジュールでは、それらの隙間に描画する装飾線（罫線または隙間装飾と呼ばれます）を制御するプロパティも定義されています。

このガイドでは、隙間装飾とその外観を制御するプロパティについて説明します。

## 隙間の罫線の概要

[CSS 隙間プロパティ](/ja/docs/Web/CSS/Guides/Gaps#プロパティ)を使用すると、段組み、グリッド、フレックスボックスの各レイアウトで、{{glossary("gutters", "溝")}}（または隙間）の中央に線を描画できます。{{cssxref("margin")}} と {{cssxref("padding")}} は個々のボックスの周囲の視覚的な間隔を指定しますが、CSS 隙間モジュールのプロパティでは、特定のレイアウト内で隣接するボックス間の間隔を指定できます。すべての隙間、または一部の隙間に罫線を追加し、その幅、色、インセットを制御したり、それらをアニメーションさせたりできます。

もともと列の隙間とその装飾は、[CSS 段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout)に限られていました。列間罫の幅、色、スタイルは設定できましたが、すべての罫線で外観が共通し、ブロック方向の寸法全体にわたって描画されていました。

グリッドレイアウトでは以前から行や列の隙間を設けられましたが、当初、その隙間に装飾を描画することはできませんでした。罫線が隙間に対応するすべてのレイアウトで利用できるようになる前は、グリッドやフレックスボックスの行の隙間や列の隙間に線を描画するために、背景画像やすべてのアイテムへの境界線の設定、さらには絶対位置指定のオーバーレイなどの回避策が必要でした。

CSS 隙間モジュールでは、隙間に対応するすべてのレイアウトコンテナーで列と行の隙間を定義し、横方向と縦方向の隙間の中央に罫線を描画できます。これらの罫線はボックスモデルに影響しません。

この例では、隙間装飾の基本機能を示します。グリッドの行の隙間にはライム色、列の隙間にはダークバイオレット色の罫線が描画されています。

```css live-sample___basic live-sample___overlap live-sample___breaking live-sample___ends live-sample___visibility
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 60px;
  padding: 1rem;

  gap: 1.5rem;
  column-rule: thick solid darkviolet;
  row-rule: thick solid lime;
}
```

```css hidden live-sample___basic live-sample___overlap live-sample___breaking live-sample___ends live-sample___visibility
.grid {
  outline: 2px solid;
  margin: 1rem;
  font-family: monospace;
  font-size: 1.5em;
  background: #efefef;
}
.grid > div {
  outline: 1px solid;
  align-items: center;
  justify-content: center;
  display: flex;
  background: #e0e0e0;
}

@supports not (row-rule: solid thin darkviolet) {
  body::before {
    content: "このブラウザーは row-rule プロパティに対応していません。";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

```html hidden live-sample___basic live-sample___overlap live-sample___breaking
<div class="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>
```

{{EmbedLiveSample("Basic", "", "210")}}

## 隙間のサイズの定義

{{cssxref("gap")}} 一括指定プロパティとその構成要素のプロパティ（{{cssxref("column-gap")}} と {{cssxref("row-gap")}}）を使用すると、特定のレイアウト内で隣接する列や行の間隔を指定できます。この間隔によって、罫線を描画する隙間ができます。

- {{cssxref("column-gap")}}: {{cssxref("&lt;line-width&gt;")}} または {{cssxref("&lt;length-percentage&gt;")}}。`thin`、`medium`、`thick` キーワードのいずれか、または正の {{cssxref("length")}} 値か {{cssxref("percentage")}} 値を指定し、列の隙間の幅を定義します。デフォルトは、フレックスボックスとグリッドでは `0`、段組みレイアウトでは `1em` です。
- {{cssxref("row-gap")}}: `column-gap` と同じ値を受け付け、行の隙間の幅を定義します。
- {{cssxref("gap")}}: 1 つまたは 2 つの値を取り、`row-gap` と `column-gap` の値をこの順序で一括指定します。

これらのプロパティは一見直感的に思えるかもしれませんが、デフォルトのサイズや[隙間にパーセント値を指定した場合の処理](/ja/docs/Web/CSS/Guides/Gaps/Defining_gaps#隙間の値をパーセント値で指定)は、レイアウトの種類やコンテナーが固定サイズかどうかによって異なります。グリッド、フレックスボックス、段組みレイアウトでの隙間のサイズ指定や、パーセント値の解決方法については、[CSS 隙間の定義](/ja/docs/Web/CSS/Guides/Gaps/Defining_gaps)ガイドを参照してください。

## 罫線の外観の定義

`column-rule-*` プロパティと `row-rule-*` プロパティは、それぞれ列間罫と行間罫の幅、色、スタイルを制御します。`rule-*` 一括指定プロパティは、列間罫と行間罫の両方に同じ値を適用します。

この節のすべてのプロパティは、コンテナー内で隙間装飾ごとに異なる値を指定できるよう、カンマ区切りの値リストを受け付けます。リスト内で {{cssxref("repeat()")}} 関数を使用すると、値を指定した回数だけ、またはすべての罫線にスタイルを適用するのに必要な回数だけ繰り返せます。

`column-rule-*` プロパティには次のものがあります。

- {{cssxref("column-rule")}}: 列間罫の {{cssxref("line-width")}}、{{cssxref("line-style")}}、{{cssxref("&lt;color&gt;")}} を定義する一括指定プロパティです。
- {{cssxref("column-rule-color")}}: 列間罫の色を定義します。デフォルトは `currentcolor` です。
- {{cssxref("column-rule-style")}}: 列間罫の線のスタイルを定義します。`solid`、`dashed`、`dotted`、`double`、`groove`、`ridge`、`inset`、`outset`、`none`、`hidden` のいずれかを指定できます。
- {{cssxref("column-rule-width")}}: 列間罫の幅を定義します。`thin`、`medium`、`thick` のいずれか、または正の {{cssxref("length")}} 値を指定できます。

次の `row-rule-*` プロパティは、対応する `column-rule-*` プロパティと同じ構文です。

- {{cssxref("row-rule")}}: 行の装飾線の `<line-width>`、`<line-style>`、`<color>` を定義する一括指定プロパティです。
- {{cssxref("row-rule-color")}}: 行の隙間に描画する罫線の色です。デフォルトは `currentcolor` です。
- {{cssxref("row-rule-style")}}: 行の隙間に描画する罫線の線のスタイルです。
- {{cssxref("row-rule-width")}}: 行の隙間に描画する罫線の幅です。

次の `rule-*` 一括指定プロパティは、対応する `column-*` プロパティと同じ値を受け付け、縦横両方の軸に同じ値リストを適用します。

- {{cssxref("rule")}}: `column-rule` と `row-rule` に同じ値を設定します。
- {{cssxref("rule-color")}}: `column-rule-color` と `row-rule-color` の両方に同じ値を設定します。
- {{cssxref("rule-style")}}: `column-rule-style` と `row-rule-style` の両方に同じ値を設定します。
- {{cssxref("rule-width")}}: `column-rule-width` と `row-rule-width` の両方に同じ値を設定します。

罫線の色、幅、スタイルの定義や `repeat()` 関数の使い方については、[CSS 隙間の罫線の定義](/ja/docs/Web/CSS/Guides/Gaps/Defining_rules)を参照してください。

## 罫線を区間に分割

グリッドと段組みレイアウトでは、デフォルトですべての罫線がコンテナーのブロック方向およびインライン方向の寸法全体にわたって伸びます。`*-rule-break` プロパティを使うと、複数の行や列にまたがる線を複数の区間に分割できます。次のプロパティを使用すると、交差する箇所ごとに罫線を分割する動作を設定できます。

- {{cssxref("column-rule-break")}}: `none`、`normal`、`intersection` のいずれかを指定し、列間罫を行の隙間で分割するか、連続させるかを決めます。
- {{cssxref("row-rule-break")}}: `none`、`normal`、`intersection` のいずれかを指定し、行間罫を列の隙間で分割するか、連続させるかを決めます。
- {{cssxref("rule-break")}}: `column-rule-break` と `row-rule-break` に同じ値を設定します。

最初の例を応用し、列の隙間で行間罫を区間に分割しつつ、列間罫は連続させています。

```css live-sample___breaking
.grid {
  column-rule-break: none;
  row-rule-break: intersection;
}
```

```css hidden live-sample___breaking
@supports not (rule-break: intersection) {
  body::before {
    content: "このブラウザーは rule-break プロパティに対応していません。";
  }
}
```

{{EmbedLiveSample("Breaking", "", "210")}}

デフォルトでは、線を分割する設定にすると、内部の区間は隙間の中に入らず隙間の端で終わります。一方、コンテナーの端に接する区間は、コンテナーの[コンテンツボックス](/ja/docs/Web/CSS/Reference/Values/box-edge#content-box)の端まで描画されます。

## 罫線区間の長さの制御

`*-rule-inset-*` プロパティを使用すると、罫線区間を短くしたり長くしたりできます。各区間の端を、本来の開始位置または終了位置からずらして調整します。この端のずらし量をインセットといいます。

デフォルトでは、連続する罫線はコンテナーの一方の端からもう一方の端まで描画されます。他の罫線区間がない箇所では、罫線はコンテナーの端で終わります。このような罫線には 2 つのキャップ端点があります。始点側は _cap-start_ 端、終点側は _cap-end_ 端です。

罫線が区間に分割される場合、端の種類はその端で他の罫線区間と交わるかどうかによって異なります。列間罫と行間罫は内部の _接合部_ で交差します。他の罫線区間がある内部の接合部で罫線区間が始まる端を _junction-start_ 端、終わる端を _junction-end_ 端といいます。

`*-rule-inset-junction-*` プロパティは、他の区間がある隙間の接合部における端点を定義します。一方、`*-rule-inset-cap-*` プロパティは、他の罫線区間がない端点を調整します。これには、コンテナーのインライン方向やブロック方向の端、および {{cssxref("rule-visibility-items")}} プロパティによって他の区間が描画されない交差箇所の端点が含まれます。

次の例では、{{cssxref("column-rule-inset-cap")}} 一括指定プロパティを使用して、列間罫を連続させたまま上端と下端でそれぞれ `10px` 短くしています。`row-rule-break` プロパティを使用して、行間罫は列の隙間の端で区間に分割しています。`row-rule-inset-cap` を `-20px` に設定して、キャップ端を外側に `20px` 伸ばしています。また、{{cssxref("row-rule-inset-junction")}} を `10px` に設定し、接合部側の端で区間を `10px` 短くしています。代わりに {{cssxref("row-rule-inset")}} 一括指定プロパティを `-20px / 10px` に設定することもできます。この場合、キャップ側と接合部側のインセットをこの順序で定義します。

```css live-sample___ends
.grid {
  row-rule-break: intersection;
  column-rule-inset-cap: 10px;
  row-rule-inset-cap: -20px;
  row-rule-inset-junction: 10px;
}
```

```css hidden live-sample___ends
.grid {
  row-rule-style: solid;
}

@supports not (row-rule-inset-cap: -20px) {
  body::before {
    content: "このブラウザーはすべての隙間装飾プロパティに対応していません。";
  }
}
```

```html hidden live-sample___ends
<div class="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
</div>
```

{{EmbedLiveSample("ends", "", "320")}}

### 列間罫のインセットプロパティ

`column-rule-inset-*` プロパティを使用すると、列間罫の区間のキャップ端や接合部側の端を調整し、区間の開始位置や終了位置、またはその両方を制御できます。

#### 列間罫のキャップ端のインセットプロパティ

`column-rule-inset-cap-*` プロパティは、区間の端点と、他の隙間装飾区間がない箇所のコンテナー端または隙間の接合部との間隔を指定します。正の値は区間を短くし、負の値は区間を長くします。これらのプロパティは `<inset-value>` 値、つまり `<length-percentage>` または `overlap-join` キーワードを受け付けます。`<length-percentage>` は、列間罫区間の上端または下端と、隣接する行の隙間またはコンテナー端との間隔を定義します。キャップ端では、`overlap-join` キーワードは `0` に解決されます。区間がコンテナー端で終わる場合、パーセント値は `0` に解決されます。それ以外の場合、パーセント値は行の隙間のサイズに {{cssxref("align-content")}} プロパティで追加される間隔を加えた値を基準とします。

- {{cssxref("column-rule-inset-cap-end")}}: 列間罫区間の終端（上端）と、区間がコンテナーの上端から始まるか内部の接合部から始まるかに応じた、コンテナーの開始端または行の溝の下端との間隔を定義します。

- {{cssxref("column-rule-inset-cap-start")}}: 列間罫区間の始端（上端）と、区間がコンテナーの上端から始まるか内部の接合部から始まるかに応じた、コンテナーの開始端または行の溝の下端との間隔を定義します。

- {{cssxref("column-rule-inset-cap")}} 一括指定プロパティ: 1 つまたは 2 つの `<inset-value>` 値で、`column-rule-inset-cap-start` と `column-rule-inset-cap-end` の両方を指定します。値を 1 つだけ指定した場合は両プロパティにその値が設定されます。2 つ指定した場合は、最初の値が `column-rule-inset-cap-start` に、2 つ目の値が `column-rule-inset-cap-end` に設定されます。

#### 列間罫の接合部インセットプロパティ

`column-rule-inset-junction-*` プロパティは、他の罫線区間と接合する箇所で、区間と行の溝の端との間隔を指定します。正の値は区間を短くし、負の値と `overlap-join` キーワード値は区間を長くします。パーセント値は、行の隙間のサイズに {{cssxref("align-content")}} プロパティで追加される間隔を加えた値を基準とします。

- {{cssxref("column-rule-inset-junction-end")}}: 列間罫区間の終端（下端）と、その区間の下にある行の溝の上端との間隔を定義します。

- {{cssxref("column-rule-inset-junction-start")}}: 列間罫区間の始端（上端）と、その区間の上にある行の溝の下端との間隔を定義します。

- {{cssxref("column-rule-inset-junction")}} 一括指定プロパティ: 1 つまたは 2 つの値で、`column-rule-inset-junction-start` と `column-rule-inset-junction-end` の両方を指定します。値を 1 つだけ指定した場合は両プロパティにその値が設定されます。2 つ指定した場合は、最初の値が `column-rule-inset-junction-start` に、2 つ目の値が `column-rule-inset-junction-end` に設定されます。

#### 列間罫のキャップと接合部の一括指定プロパティ

`column-rule-inset-*` プロパティではキャップ端と接合部側の端に同じインセットを設定できます。一方、`column-rule-inset` 一括指定プロパティを使用すると、各端に異なる値を設定できます。

- {{cssxref("column-rule-inset-end")}}: 1 つの `<inset-value>` で、`column-rule-inset-cap-end` と `column-rule-inset-junction-end` の両方に同じ値を設定します。

- {{cssxref("column-rule-inset-start")}}: 1 つの `<inset-value>` で、`column-rule-inset-cap-start` と `column-rule-inset-junction-start` の両方に同じ値を設定します。

- {{cssxref("column-rule-inset")}} 一括指定プロパティ: 1 つから 4 つの `<inset-value>` 値で、`column-rule-inset-cap-start`、`column-rule-inset-cap-end`、`column-rule-inset-junction-start`、`column-rule-inset-junction-end` プロパティを指定します。キャップ端と接合部側の端に異なるインセットを設定する場合は、スラッシュ (`/`) で区切ります。このプロパティを使うと、`column-rule-inset-end` および `column-rule-inset-start` 一括指定プロパティより細かく制御し、キャップ端と接合部側の端に別々の値を設定できます。

### 行間罫のインセットプロパティ

`row-rule-inset-*` プロパティを使用すると、行間罫の区間を短くしたり長くしたりできます。各区間の開始端や終了端を、本来の位置からずらして調整します。どちらが開始端になるかは書字方向によって異なります。英語のような左書きの言語では、左端が開始端、右端が終了端です。

#### 行間罫のキャップ端のインセットプロパティ

`column-rule-inset-cap-*` プロパティと同様に、`row-rule-inset-cap-*` プロパティは、他の区間がない箇所で、区間のキャップ端とコンテナーまたは隙間の接合部との間隔を指定します。`<length-percentage>` 値は、他の隙間装飾区間がない内部の接合部では、区間の左端または右端と列の溝の右端または左端との間隔を定義します。また、コンテナーの左端または右端との間隔も定義します。パーセント値は、隣接する列の隙間のサイズに {{cssxref("justify-content")}} プロパティで追加される間隔を加えた値を基準とします。区間の端がコンテナーの端である場合、パーセント値は `0` に解決されます。`overlap-join` 値も `0` に解決されます。

- {{cssxref("row-rule-inset-cap-end")}}: 行間罫区間の終了端と、コンテナーの端、または他の隙間装飾区間がない列の隙間の端との間隔を定義します。どちらが区間の左端または右端にあたるかは、書字方向によって異なります。

- {{cssxref("row-rule-inset-cap-start")}}: 区間の終了端ではなく開始端を対象とする点を除き、`row-rule-inset-cap-end` と同じです。

- {{cssxref("row-rule-inset-cap")}} 一括指定プロパティ: 1 つまたは 2 つの `<inset-value>` 値で、`row-rule-inset-cap-start` と `row-rule-inset-cap-end` の値を設定します。値を 1 つだけ指定した場合は両プロパティにその値が設定されます。2 つ指定した場合は、最初の値が `row-rule-inset-cap-start` に、2 つ目の値が `row-rule-inset-cap-end` に設定されます。

#### 行間罫の接合部インセットプロパティ

`row-rule-inset-junction-*` プロパティは、他の罫線区間と接合する箇所で、区間と列の溝の端との間隔を指定します。正の値は区間を短くし、負の値と `overlap-join` キーワード値は区間を長くします。パーセント値は、列の隙間のサイズに {{cssxref("justify-content")}} プロパティで追加される間隔を加えた値を基準とします。

- {{cssxref("row-rule-inset-junction-end")}}: 区間の終了端と列の隙間の開始端との間隔を定義します。`end` が区間の左側と右側のどちらにあたるかは、書字方向によって異なります。

- {{cssxref("row-rule-inset-junction-start")}}: 区間の開始端と列の隙間の終了端との間隔を定義します。

- {{cssxref("row-rule-inset-junction")}} 一括指定プロパティ: 1 つまたは 2 つの `<inset-value>` 値で、`row-rule-inset-junction-start` と `row-rule-inset-junction-end` の値を設定します。値を 1 つだけ指定した場合は両プロパティにその値が設定されます。2 つ指定した場合は、最初の値が `row-rule-inset-junction-start` に、2 つ目の値が `row-rule-inset-junction-end` に設定されます。

#### 行間罫のキャップと接合部の一括指定プロパティ

`row-rule-inset-*` プロパティではキャップ端と接合部側の端に同じインセットを設定できます。一方、`row-rule-inset` 一括指定プロパティを使用すると、行間罫区間の各端に異なる値を設定できます。

- {{cssxref("row-rule-inset-end")}}: 1 つの `<inset-value>` 値で、`row-rule-inset-cap-end` と `row-rule-inset-junction-end` の両方に同じ値を設定します。

- {{cssxref("row-rule-inset-start")}}: 1 つの `<inset-value>` 値で、`row-rule-inset-cap-start` と `row-rule-inset-junction-start` の両方に同じ値を設定します。

- {{cssxref("row-rule-inset")}} 一括指定プロパティ: 1 つから 4 つの `<inset-value>` 値で、`row-rule-inset-cap-start`、`row-rule-inset-cap-end`、`row-rule-inset-junction-start`、`row-rule-inset-junction-end` プロパティを指定します。キャップ端と接合部側の端に異なるインセットを設定する場合は、スラッシュ (`/`) で区切ります。このプロパティを使うと、`row-rule-inset-end` および `row-rule-inset-start` 一括指定プロパティより細かく制御し、行間罫のキャップ端と接合部側の開始端・終了端に別々の値を設定できます。

### 列間罫と行間罫の一括指定プロパティ

列間罫と行間罫の両方に同じインセットを設定する場合は、次のような `rule-inset-*` 一括指定プロパティを使用できます。

- {{cssxref("rule-inset-cap")}}: `column-rule-inset-cap` と `row-rule-inset-cap` に同じ値を設定します。

- {{cssxref("rule-inset-junction")}}: `column-rule-inset-junction` と `row-rule-inset-junction` に同じ値を設定します。

- {{cssxref("rule-inset-end")}}: `column-rule-inset-end` と `row-rule-inset-end` に同じ値を設定します。

- {{cssxref("rule-inset-start")}}: `column-rule-inset-start` と `row-rule-inset-start` に同じ値を設定します。

- {{cssxref("rule-inset")}}: `column-rule-inset` と `row-rule-inset` に同じ値を設定します。1 つから 4 つの `<inset-value>` 値で、`rule-inset-cap-start`、`rule-inset-cap-end`、`rule-inset-junction-start`、`rule-inset-junction-end` プロパティを指定します。キャップ端と接合部側の端に異なるインセットを設定する場合は、スラッシュ (`/`) で区切ります。

罫線を区間に分割する方法やキャップ端・接合部側の端のインセットの制御など、CSS 隙間の罫線のインセットの定義について詳しくは、[罫線のインセットの定義](/ja/docs/Web/CSS/Guides/Gaps/Rule_insets)を参照してください。

## 罫線の表示の制御

空の領域に隣接する隙間に罫線区間を描画するかどうかを定義できます。

次の例では、空のグリッド領域に隣接する箇所に罫線区間が描画されていないことに注目してください。

```css live-sample___visibility
.grid {
  rule-visibility-items: between;
}
```

```css hidden live-sample___visibility
@supports not (rule-visibility-items: between) {
  body::before {
    content: "このブラウザーは rule-visibility-items プロパティに対応していません。";
  }
}
```

```html hidden live-sample___visibility
<div class="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
</div>
```

{{EmbedLiveSample("visibility", "", "340")}}

次のプロパティは、空の領域に隣接する箇所に罫線区間を描画するかどうかを制御します。

- {{cssxref("column-rule-visibility-items")}}: 分割する設定の列間罫区間を描画する場所を指定します。すべての列の隙間、隙間に隣接する列領域の少なくとも一方にアイテムがある箇所のみ、または隣接する両方の列領域にアイテムがある箇所のみに描画できます。有効な値は `all`、`around`、`between`、`normal` キーワードです。
- {{cssxref("row-rule-visibility-items")}}: 行間罫区間を対象とする点を除き、`column-rule-visibility-items` と同じです。
- {{cssxref("rule-visibility-items")}}: `column-rule-visibility-items` と `row-rule-visibility-items` に同じ値を設定します。

## 罫線の重なりの制御

行間罫と列間罫が連続している場合、両者が交差する接合部で重なります。区間に分割された罫線も、接合部のインセットを `overlap-join` にすると重なります。また、負のインセットも、隙間のサイズ、罫線のサイズ、インセット値によっては罫線区間の重なりを引き起こします。{{cssxref("rule-overlap")}} プロパティを使用すると、行間罫を列間罫の上に描画するか、その逆にするかを制御できます。

このページの最初の例を応用し、交差する箇所で列間罫が行間罫の上に描画されるように設定しています。

```css live-sample___overlap
.grid {
  rule-overlap: column-over-row;
}
```

```css hidden live-sample___overlap
@supports not (rule-overlap: row-over-column) {
  body::before {
    content: "このブラウザーは rule-overlap プロパティに対応していません。";
  }
}
```

{{EmbedLiveSample("overlap", "", "210")}}

- {{cssxref("rule-overlap")}}: 行間罫と列間罫が重なる箇所での描画順を、`row-over-column` または `column-over-row` キーワードで指定します。

## 関連情報

- [CSS 隙間の定義](/ja/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- [CSS 隙間の罫線の定義](/ja/docs/Web/CSS/Guides/Gaps/Defining_rules)
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
- [フレックスコンテナー内のアイテムの配置](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [グリッドレイアウトでのボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
