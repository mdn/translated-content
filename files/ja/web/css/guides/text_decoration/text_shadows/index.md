---
title: テキストの影の紹介
short-title: テキストの影
slug: Web/CSS/Guides/Text_decoration/Text_shadows
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

テキストに影を適用するには、{{cssxref("text-shadow")}} プロパティを使用します。このプロパティは、カンマ区切りの影の値のリストを受け入れます。それぞれの影には少なくとも 2 つの {{cssxref("length")}} 値が要求されますが、最大 3 つの `<length>` 値と 1 つの {{cssxref("color")}} 値を含めることができます。

```css
text-shadow: 1px 3px;
text-shadow: 1px -2px 3px white;
text-shadow:
  5px 5px mediumblue,
  10px 10px magenta,
  15px 15px rebeccapurple;
```

テキストから影が完全に除去するには、キーワード `none` を使用します。

```css
text-shadow: none;
```

このガイドでは、テキストの影の構成要素を見ていき、要素に複数のテキストの影を適用する方法について説明します。

## テキストの影の構成要素

それぞれの影には、水平オフセット、垂直オフセット、およびオプションのぼかし半径を、この順序で指定します。影の色も定義できます。

### 水平オフセット

`text-shadow` の値における最初の {{cssxref("length")}} は、元々のテキストに対する影の水平オフセットを表します。正の値を指定すると影は右に移動し、負の値を指定すると左に移動します。`0` は一般的な有効な値です。

この例では、それぞれの `text-shadow` 宣言は水平オフセットのみが異なります。まず最初の `<length>` 値で影が左 (`-30px`) または右 (`30px`) に移動します。

```css live-sample___horizontal
.negative {
  text-shadow: -30px 0 1px red;
}

.positive {
  text-shadow: 30px 0 1px red;
}

.zero {
  text-shadow: 0 0 1px red;
}
```

```html hidden live-sample___horizontal live-sample___vertical live-sample___blur
<p class="negative">負の数</p>
<p class="positive">正の数</p>
<p class="zero">ゼロ</p>
```

```css hidden live-sample___horizontal live-sample___vertical live-sample___blur live-sample___multiple1
p {
  border: 1px solid;
  padding: 20px;
  font-family: sans-serif;
  font-size: 1.25rem;
}
```

{{EmbedLiveSample('horizontal','auto','320')}}

`text-shadow` プロパティは、[CSS ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model/Introduction)に全く影響を認めないことにお気づきかもしれません。これは {{cssxref("outline")}} プロパティと同様です。{{cssxref("box-shadow")}} と同様に、テキストの影はレイアウトに影響せず、スクロールを発生させず、スクロール可能なオーバーフロー領域のサイズにも影響しません。テキストの影は要素のテキストを大きく見せることは可能ですが、コンテンツの幅（または高さ）に実際の影響を与えることはありません。

### 垂直オフセット

`text-shadow` の値における 2 つ目の {{cssxref("length")}} は、元々のテキストに対するシャドウの垂直方向のオフセットを表します。これは必須の値で、水平オフセットと同様に動作しますが、影を左右ではなく上下に移動させる点が異なります。

この例では、それぞれの `text-shadow` 宣言は垂直オフセットのみが異なります。2 つ目の `<length>` 値は影を上に (`-30px`) または下に (`30px`) 移動させます。

```css live-sample___vertical
.negative {
  text-shadow: 0 -30px 1px red;
}

.positive {
  text-shadow: 0 30px 1px red;
}

.zero {
  text-shadow: 0 0 1px red;
}
```

{{EmbedLiveSample('vertical','auto','320')}}

### ぼかし半径

ぼかし半径は 3 つ目の {{cssxref("length")}} 値で定義され、オプションです。省略した場合、ぼかし半径は `0` となり、最初の 2 つの距離の値で位置指定されたテキストのコピーが作成されます。値は `0` 以上でなければならず、値が大きいほど影効果がより広く拡散します。

この例では、それぞれの `text-shadow` 宣言はぼかし半径のみが異なります。この 3 つ目の `<length>` 値は、それぞれ無効な値 (`-5px`)、影をぼかす値 (`5px`)、テキストのコピーを作成する値 (`0`) です。

```css live-sample___blur
.negative {
  /* 無効 */
  text-shadow: 30px 30px -5px red;
}

.positive {
  text-shadow: 30px 30px 5px red;
}

.zero {
  text-shadow: 30px 30px 0 red;
}
```

{{EmbedLiveSample('blur','auto','320')}}

### 影の色

テキストには[複数の影](#複数の影)を適用できますが、それぞれの影は単一のベース色で構成されます。この色は有効な CSS の {{cssxref("color")}} 値であれば何でも指定可能で、省略された場合は[`currentcolor`](/ja/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword)がデフォルト値となります。

次の 3 つの影は、影の色について等価です。

```css
.shadow-color {
  text-shadow:
    5px 5px mediumblue,
    10px 10px magenta,
    15px 15px rebeccapurple;
}

.shadow-color-hex {
  text-shadow:
    5px 5px #0000cd,
    10px 10px #ff00ff,
    15px 15px #663399;
}

.shadow-color-rgb {
  text-shadow:
    5px 5px rgb(0 0 205),
    10px 10px rgb(255 0 255),
    15px 15px rgb(102 51 153);
}
```

## 複数の影

同じテキストに複数の影を適用するには、複数の影の値をカンマで区切って指定します。

影の効果は手前から奥へと適用されます。最初の影が最も上になります。

例として `text-shadow: 5px 5px mediumblue, 10px 10px magenta, 15px 15px rebeccapurple;` では、3 つの影を定義しています。青の影がピンクの影の上に、ピンクの影が紫の影の上に重なっています。

```css hidden live-sample___multiple1
p {
  text-shadow:
    5px 5px mediumblue,
    10px 10px magenta,
    15px 15px rebeccapurple;
}
```

```html hidden live-sample___multiple1
<p>I have three shadows</p>
```

{{EmbedLiveSample('multiple1','auto','120')}}

## 透明なテキストによる複数の影

影は背景色や画像の上に、境界線の下に描画されます。影同士は重なり合いますが、テキストとは重なりません。テキストの影には、{{cssxref("box-shadow")}} プロパティの `inset` キーワードに相当するものは存在しません。ボックスの影とは異なり、テキストの影は影を落とす図形に切り取られることはなく、テキストが部分的に透明な場合、影が透けて表示されることがあります。

以下の例では、テキストに同じ影を適用していますが、{{cssxref("color")}} プロパティの値が異なります。半透明の例は読みにくいものですが、影のレンダリング方法を示すために示しています。

```css live-sample___opaque
p {
  text-shadow:
    5px 5px 0 mediumblue,
    10px 10px 5px magenta,
    15px 15px 10px rebeccapurple;
}

.opaque {
  color: black;
}

.semitransparent {
  color: rgb(0 0 0 / 0.5);
}

.transparent {
  color: transparent;
}

.white {
  color: white;
}

.semi-white {
  color: rgb(255 255 255 / 0.75);
}
```

```html hidden live-sample___opaque
<p class="opaque">このテキストは不透明な黒です</p>
<p class="semitransparent">このテキストは半透明の黒です</p>
<p class="transparent">このテキストは透明な黒です</p>
<p class="white">このテキストは不透明な白です</p>
<p class="semi-white">このテキストは半透明の白です</p>
```

```css hidden live-sample___opaque
p {
  border: 1px solid black;
  padding: 20px;
  font-family: sans-serif;
  font-size: 1.75rem;
  font-weight: bold;
}
```

{{EmbedLiveSample('opaque','auto','540')}}

「透明」の例では、テキストは透明ですが、上部のシャドウが不鮮明ではないため完全に読み取れます。テキストが完全に不透明でない場合、影がテキストの背後に現れ見えることに注意してください。特に「半透明の白」の例で顕著です。この挙動は、内側に配置されていないボックスの影が境界線の外縁で切り取られるのとは異なります。
