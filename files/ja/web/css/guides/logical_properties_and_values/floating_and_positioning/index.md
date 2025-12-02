---
title: 浮動ボックスと位置指定の論理的プロパティ
slug: Web/CSS/Guides/Logical_properties_and_values/Floating_and_positioning
original_slug: Web/CSS/CSS_logical_properties_and_values/Floating_and_positioning
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

[CSS 論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)モジュールには、 {{cssxref("float")}} および {{cssxref("clear")}} の物理的な値の論理的な対応付けと、[位置指定レイアウト](/ja/docs/Web/CSS/Guides/Positioned_layout)で使用する位置指定プロパティがあります。このガイドはこれらの使い方を見てみます。

## 対応付けされるプロパティと値

以下の表は、このガイドで説明した{{glossary("logical properties", "論理的プロパティ")}}と値、およびそれに対応する{{glossary("physical properties", "物理的プロパティ")}}と値の対応付けについて詳しく示しています。これらは、水平方向で左書きの {{cssxref("writing-mode")}} を想定しています。

| 論理的プロパティまたは値           | 物理的プロパティまたは値         |
| ---------------------------------- | -------------------------------- |
| {{cssxref("float")}}: inline-start | {{cssxref("float")}}: left       |
| {{cssxref("float")}}: inline-end   | {{cssxref("float")}}: right      |
| {{cssxref("clear")}}: inline-start | {{cssxref("clear")}}: left       |
| {{cssxref("clear")}}: inline-end   | {{cssxref("clear")}}: right      |
| {{cssxref("inset-inline-start")}}  | {{cssxref("left")}}              |
| {{cssxref("inset-inline-end")}}    | {{cssxref("right")}}             |
| {{cssxref("inset-block-start")}}   | {{cssxref("top")}}               |
| {{cssxref("inset-block-end")}}     | {{cssxref("bottom")}}            |
| {{cssxref("text-align")}}: start   | {{cssxref("text-align")}}: left  |
| {{cssxref("text-align")}}: end     | {{cssxref("text-align")}}: right |

これらの対応付けられたプロパティに加えて、ブロック次元やインライン次元を示すことができる一括指定プロパティがいくつかあります。これらは {{cssxref("inset")}} プロパティを除いて、物理的なプロパティに対応付けられません。

| 論理的プロパティ            | 目的                                                            |
| --------------------------- | --------------------------------------------------------------- |
| {{cssxref("inset-inline")}} | インライン次元に上記の両方のインセット値を同時に設定する。      |
| {{cssxref("inset-block")}}  | ブロック次元に上記の両方のインセット値を同時に設定する。        |
| {{cssxref("inset")}}        | 多値の物理的マッピングで 4 つのインセット値を同時に設定します。 |

## 浮動ブロックと解除の例

{{cssxref("float")}} および {{cssxref("clear")}} プロパティで用いられる物理的な値 `left`, `right`, `both` です。論理的プロパティの仕様では、 `inline-start` および `inline-end` の値を `left` や `right` に対応付けて定義しています。

下記の例では、 1 つ目のボックスは `float: left` で、2 つ目は `float: inline-start` で浮動ブロックになっています。
`direction: rtl` を `.inner` セレクターに適用すると、左の浮動ボックスは常に左側に留まり、 `inline-start` で浮動ボックス化されたアイテムはテキストの `direction` に従います。
これを `writing-mode: vertical-rl` と組み合わせることで、 `direction` の値と組み合わせたブロックレイアウトの違いを確認することができます。

```html-nolint live-sample___float
<div class="container">
  <div class="inner">
    <div class="physical box"></div>
    カブ菜、ヨモギ、インゲンマメ、ルタバガ、エンダイブ、カリフラワー、海藻、コールラビ、アマランサス、水菜、アボカド、大根、白菜、アスパラガス、冬パセリ、ケール。
  </div>
  <div class="inner">
    <div class="logical box"></div>
    カブ菜、ヨモギ、インゲンマメ、ルタバガ、エンダイブ、カリフラワー、海藻、コールラビ、アマランサス、水菜、アボカド、大根、白菜、アスパラガス、冬パセリ、ケール。
  </div>
</div>
```

```css hidden live-sample___float
body {
  font: 1.2em / 1.5 sans-serif;
}
.container {
  display: flex;
}

.box {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  margin: 10px;
  width: 100px;
  height: 100px;
}
```

```css live-sample___float
.inner {
  /* direction: rtl; */
  /* writing-mode: vertical-rl; */
}

.physical {
  float: left;
}

.logical {
  float: inline-start;
}
```

{{EmbedLiveSample("float", "", "220px")}}

## 例: 位置指定レイアウトにおける inset プロパティ

一般的に位置指定では、要素を含むブロックに対して相対的に要素を配置することができます。基本的に、通常のフローに基づいてアイテムが配置された場所に対して相対的にアイテムを挿入します。これを行うために、歴史的には {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}} の物理的なプロパティを使用してきました。位置指定を書字方向のテキストのフローに関連させたい場合は、代わりに {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, {{cssxref("inset-inline-end")}} を使用してください。

これらのプロパティは、長さまたはパーセント値を値として取り、ユーザーの画面の次元に関連します。

以下の例では、 `inset-block-start` と `inset-inline-end` プロパティを使用して、青枠を灰色の点線で囲まれた領域 (`position: relative`) の内側に絶対位置を使用して配置しています 。 `writing-mode` プロパティを `vertical-rl` に変更するか、 `direction: rtl` を追加して、フロー相対ボックスがテキストの方向に従う様子を見てみましょう。

```html live-sample___positioning-inset
<div class="container">
  <div class="inner">
    <div class="physical box"></div>
  </div>
  <div class="inner">
    <div class="logical box"></div>
  </div>
</div>
```

```css hidden live-sample___positioning-inset
.container {
  display: flex;
}

.inner {
  width: 200px;
  height: 200px;
  position: relative;
  border: 2px dotted grey;
}

.box {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  width: 100px;
  height: 100px;
}
```

```css live-sample___positioning-inset
.inner {
  writing-mode: horizontal-tb;
}

.physical {
  position: absolute;
  top: 20px;
  right: 0;
}

.logical {
  position: absolute;
  inset-block-start: 20px;
  inset-inline-end: 0;
}
```

{{EmbedLiveSample("positioning-inset", "", "250px")}}

## 新しい 2 つまたは 4 つの値の一括指定

仕様書の他のプロパティと同様に、いくつかの新しい一括指定プロパティがあり、一度に 2 つまたは 4 つの値を設定することができます。

- {{cssxref("inset")}} — 物理的な対応付けを使用して四辺をすべて設定します。
- {{cssxref("inset-inline")}} — 論理的なインライン次元の内側の距離を両方設定します。
- {{cssxref("inset-block")}} — 論理的なブロック次元の内側の距離を両方設定します。

## 例: text-align の論理的な値

{{cssxref("text-align")}} プロパティは、テキストの方向に関連する論理値を持っています。 `left` と `right` に代わり、 `start` と `end` を使用することができます。以下の例では、最初のブロックで `text-align: right`、 2 番目のブロックで `text-align: end` を設定しています。

`direction` の値を `rtl` に変更すると、最初のブロックでは配置が右に留まりますが、 2 番目のブロックでは論理的な末尾が左になることがわかります。

```html live-sample___text-align
<div class="container">
  <div class="inner physical">配置テキスト</div>
  <div class="inner logical">配置テキスト</div>
</div>
```

```css hidden live-sample___text-align
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  display: flex;
}

.inner {
  width: 200px;
  border: 2px dotted grey;
  padding: 10px;
}
```

```css live-sample___text-align
.inner {
  direction: ltr;
}

.physical {
  text-align: right;
}

.logical {
  text-align: end;
}
```

{{EmbedLiveSample("text-align")}}

これは、物理的な方向ではなく、先頭と末尾を使用したボックス配置を使用した場合に、より一貫性のある方法で動作します。
