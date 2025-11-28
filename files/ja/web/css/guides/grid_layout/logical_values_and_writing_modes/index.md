---
title: グリッド、論理的な値、書字方向
short-title: 論理的な値と書字方向
slug: Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

CSS グリッドレイアウトの最も重要な機能の 1 つは、仕様に組み込まれているさまざまな書字方向に対応していることです。このガイドでは、グリッドやその他の最新のレイアウト方法のこの機能について、書字方向や論理的プロパティおよび物理的プロパティについて少しずつ学んでいきたいと思います。

## 論理的、物理的なプロパティと値

CSS には**物理的**な位置指定プロパティやキーワードがあふれています。 `left` と `right`、`top` と `bottom` などです。下記のコードスニペットでは、絶対位置指定を使用してアイテムの位置を指定し、物理的な{{glossary("inset properties", "インセットプロパティ")}}をオフセット値として使用して、アイテムを移動しています。このアイテムは、コンテナーの上部から 20 ピクセル、左から 30 ピクセルの位置に配置されています。

```css
.container {
  position: relative;
}
.item {
  position: absolute;
  top: 20px;
  left: 30px;
}
```

```html
<div class="container">
  <div class="item">Item</div>
</div>
```

この例では、{{cssxref("left")}} および {{cssxref("right")}} プロパティを使用しています。これらは、CSS の多くの **{{glossary("physical properties", "物理的プロパティ")}}** のうちの 2 つにすぎません。また、物理的プロパティを使用して、マージン、パディング、境界線を追加することもできます。例えば、{{cssxref("margin-left")}} および {{cssxref("padding-left")}} です。テキストを右揃えにするために `text-align: right` を使用する場合など、物理的キーワードが使用されている場合もあります。

これらのキーワードやプロパティは、見ている画面に関係するため、「物理的」と呼んでいます。 left は、テキストがどの方向に走っていても、常に左です。

### 物理的なプロパティの問題

物理的プロパティは、テキストが右から左、または上から下に流れる言語を含む、複数の言語で動作するサイトを開発する際に課題となる場合があります。ブラウザーは、言語に関係なくコンテンツを正しく表示するように設計されています。一部の CSS 機能は、ブラウザーの既定値を上書きし、コンテンツが最適に表示されない原因となる場合があります。

この例では、 {{cssxref("direction")}} プロパティが {{glossary("rtl")}} に設定されており、英語文書で既定の `ltr` から書字方向が切り替わっています。 2 つの段落があります。これらは、親要素 (`<body>`) に設定された `direction` 値により、どちらも右から左に流れます。最初の段落では {{cssxref("text-align")}} が `left` に設定されているため、コンテナーの左側に揃えられます。 2 つ目の段落は右揃えになっており、右から左に流れます。

```html-nolint hidden
<p class="left">
  テキストを <code>text-align: left</code> に設定すると、この文書内のテキストの方向が右書きであっても常に左揃えにします。
</p>

<p>これは配置を設定しておらず、文書内に設定された書字方向を使用しています。</p>
```

```css
body {
  direction: rtl;
}
.left {
  text-align: left;
}
```

```css hidden
p {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  margin: 1em;
  color: #d9480f;
}
```

{{EmbedLiveSample("Issues with physical properties","",170)}}

これは、CSS で物理的な値やプロパティを使用する際に発生する問題の基本的な例です。物理的なプロパティやキーワードを使用して CSS を記述すると、テキストの流れる方向に関する仮定をブラウザーに指示することになり、代替の書字方向が処理されなくなります。

### 論理的プロパティの値

**{{glossary("Logical properties", "論理プロパティ")}}と値**は、テキストの方向を仮定しません。これが、CSS グリッドレイアウトで、キーワード `start` を使用してコンテナーの先頭に何かを揃える理由です。英語コンテンツを扱う場合、 `start` は左側に配置されますが、必ずしもそうであるとは限りません。 `start` という単語は物理的な位置を示さないため、アラビア語などの右から左に書く言語を使用する場合、ウェブサイトはコンテンツを右側から開始することができます。

## ブロックとインライン

物理的プロパティではなく論理的プロパティを使用する場合、世界は左から右、上から下という方向では見えません。参照点が異なるのです。ここで、[グリッド配置ガイド](/ja/docs/Web/CSS/Guides/Grid_layout/Box_alignment)で紹介されているブロック軸とインライン軸の理解が役立ちます。ブロックとインラインという観点からレイアウトについて考えると、CSS グリッドレイアウトでの動作が大きな意味を成すことがわかります。

![ブロック軸とインライン軸の既定の方向を示す画像](8-horizontal-tb.png)

## CSS の書字方向

[CSS 書字方向](/ja/docs/Web/CSS/Guides/Writing_modes)モジュールは、CSS での書字方向の動作を指定します。これらの機能は、英語とは異なる書字方向の言語に対応するためだけのものではありません。クリエイティブな目的にも使用することができます。この節の例では、{{cssxref("writing-mode")}} プロパティを使用して、グリッドに適用される書字方向を変化させ、その過程で論理値がどのように動作するかを示しています。

### `writing-mode`

書字方向は、左書き、右書きのテキストだけではなく、 `writing-mode` プロパティを使用することで、他の方向に走るテキストを表示することができます。 {{cssxref("writing-mode")}} プロパティは、以下の値を持つことができます。

- `horizontal-tb`
- `vertical-rl`
- `vertical-lr`
- `sideways-rl`
- `sideways-lr`

`horizontal-tb`、すなわち "horizontal, top to bottom" （水平、上から下）の値は、ウェブ上のテキストの既定値です。これは、このガイドを読んでいる方向です。それ以外の値は、文書内のテキストのフローを変更し、世界中で見られるさまざまな書字方向に対応させます。

例として、以下の 2 つの段落があります。1 つ目は既定の `horizontal-tb` の値を使用しています。 2 つ目の書字方向は `vertical-rl` を使用しています。このモードでは、テキストは左書きですが、テキストの方向は垂直になり、インラインテキストはページの上から下に流れます。

```css hidden
.wrapper > p {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  margin: 1em;
  color: #d9480f;
  max-width: 300px;
}
```

```html-nolint
<div class="wrapper">
  <p class="horizontal-tb">
    書字方向が既定の <code>horizontal-tb</code> に設定されています
  </p>
  <p class="vertical-rl">書字方向が <code>vertical-rl</code> に設定されています</p>
</div>
```

```css
.horizontal-tb {
  writing-mode: horizontal-tb;
}
.vertical-rl {
  writing-mode: vertical-rl;
}
```

{{ EmbedLiveSample('writing-mode', '500', '420') }}

## グリッドレイアウトでの書字方向

これをグリッドレイアウトの例に適用すると、書字方向を変えることで、ブロック軸とインライン軸の位置に関する考え方がどのように変わるかがわかります。

### 既定の書字方向

この例では、グリッドには 3 つの列と 2 つの行のトラックがあります。つまり、ブロック軸に3つのトラックがあるということです。既定の書字方向では、グリッドは左上から右に向かってアイテムを自動配置し、インライン軸の 3 つのセルを埋めていきます。その後、次の行に移動して新しい行トラックを作成し、さらにアイテムを埋めていきます。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
  gap: 10px;
}
```

```html
<div class="wrapper">
  <div class="item1">アイテム 1</div>
  <div class="item2">アイテム 2</div>
  <div class="item3">アイテム 3</div>
  <div class="item4">アイテム 4</div>
  <div class="item5">アイテム 5</div>
</div>
```

{{ EmbedLiveSample('Default_writing_mode', '500', '230') }}

### 書字方向の設定

前の例では、グリッドコンテナーに `writing-mode: vertical-lr` を追加すると、ブロック軸とインライン軸が異なる方向を向くようになることがわかります。ブロック（または列）軸は、ページを左から右に横切るようになります。インライン軸はページを下って、上から下に行を作成するようになりました。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
  gap: 10px;
}
```

```css
.wrapper {
  writing-mode: vertical-lr;
}
```

```html hidden
<div class="wrapper">
  <div class="item1">アイテム 1</div>
  <div class="item2">アイテム 2</div>
  <div class="item3">アイテム 3</div>
  <div class="item4">アイテム 4</div>
  <div class="item5">アイテム 5</div>
</div>
```

{{ EmbedLiveSample('Setting_writing_mode', '500', '330') }}

## 配置プロパティにおける論理的な値

ブロック軸とインライン軸が方向転換できるようになったことで、配置プロパティの論理値がより意味を持つようになりました。

次の例では、配置プロパティ（{{cssxref("align-self")}} および {{cssxref("justify-self")}}）を使用して `writing-mode: vertical-lr` に設定されたグリッド内のアイテムを整列させています。 `start` と `end` のプロパティは、既定の書字方向の場合とまったく同じように動作し、左右や上下を使ってアイテムを揃えることができないように、論理的な値を維持しています。これは、次のようにグリッドを横に反転させたときに発生します。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  writing-mode: vertical-lr;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
}

.item1 {
  grid-column: 1 / 4;
  align-self: start;
}

.item2 {
  grid-column: 1 / 3;
  grid-row: 2 / 4;
  align-self: start;
}

.item3 {
  grid-column: 3;
  grid-row: 2 / 4;
  align-self: end;
  justify-self: end;
}
```

```html
<div class="wrapper">
  <div class="item1">アイテム 1</div>
  <div class="item2">アイテム 2</div>
  <div class="item3">アイテム 3</div>
</div>
```

{{ EmbedLiveSample('Logical_values_for_alignment', '500', '280') }}

右書きだけでなく、縦書きの書字方向で、これらの動作を確認したい場合は、 `vertical-lr` を `vertical-rl` に切り替えてください。

## 自動配置と書字方向

前回の例で見たように、書字方向によって、アイテムがグリッド上に配置される視覚的な方向が変わります。アイテムは、既定では、インライン軸に沿って配置され、新しい行はブロック方向に追加されます。これで、インライン軸は常に左から右に流れるとは限らず、ブロック軸は常に上から下に流れるとは限らないことがわかりました。

## 線ベースの配置と書字方向

線番号でアイテムを配置する際に重要なことは、書字方向に関係なく、1 本目が開始行、-1 本目が終了行であるということです。

### 左書きのテキストにおける線ベースの配置

この例では、既定の `ltr` 方向にレイアウトされたグリッドがあり、3 つのアイテムが線ベースの配置を使用して配置されています。

- アイテム 1 は、列の線 1 から始まり、1 トラック分の範囲になります。
- アイテム 2 は、列の線 -1 から始まり、-3 までの範囲をカバーします。
- アイテム 3 は、列の線 1 から始まり、列の線 3 までを含みます。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
  gap: 10px;
}
.item1 {
  grid-column: 1;
}
.item2 {
  grid-column: -1 / -3;
}
.item3 {
  grid-column: 1 / 3;
  grid-row: 2;
}
```

```html
<div class="wrapper">
  <div class="item1">アイテム 1</div>
  <div class="item2">アイテム 2</div>
  <div class="item3">アイテム 3</div>
</div>
```

{{ EmbedLiveSample('Line-based_placement_with_left_to_right_text', '500', '240') }}

### 右書きのテキストにおける線ベースの配置

前の例で、 {{cssxref("direction")}} プロパティに `rtl` の値を入れてグリッドコンテナーに追加すると、 1 本目の線がグリッドの右側に、 -1 本目の線がが左側になります。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
  gap: 10px;
}

.item1 {
  grid-column: 1;
}

.item2 {
  grid-column: -1 / -3;
}

.item3 {
  grid-column: 1 / 3;
  grid-row: 2;
}
```

```css
.wrapper {
  direction: rtl;
}
```

```html hidden
<div class="wrapper">
  <div class="item1">アイテム 1</div>
  <div class="item2">アイテム 2</div>
  <div class="item3">アイテム 3</div>
</div>
```

{{ EmbedLiveSample('Line-based_placement_with_right_to_left_text', '500', '240') }}

ページ全体またはページの一部でテキストの方向を切り替え、線を使用してレイアウトを行う場合、レイアウトの方向が完全に切り替わらないように、[線に名前を付ける](/ja/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)ことをお勧めします。例えば、グリッドにテキストコンテンツが含まれている場合など、この方向の切り替えがまさに望ましい場合もあります。それ以外にも、この切り替えが望ましくない場合もあります。

### `grid-area` プロパティにおける奇妙な順序

{{cssxref("grid-area")}} プロパティを使用すると、グリッド領域の 4 行すべてを 1 つの値として指定できます。初めてこの機能を使う人は、値が {{cssxref("margin")}} の一括指定である時計回りの上、右、下、左と同じ順序ではないことに驚くことが多いようです。

`grid-area` の値の順序は次の通りです。

- `grid-row-start`
- `grid-column-start`
- `grid-row-end`
- `grid-column-end`

英語のような左書きの言語においては、この順序は次のようになります。

- `top`
- `left`
- `bottom`
- `right`

これは反時計回りです。マージンやパディングの場合とは逆です。`grid-area` は世界を「ブロックとインライン」として認識していることを覚えておけば、2 つの先頭、そして 2 つの末尾を設定していることに気づくでしょう。

## 書字方向の混合とグリッドレイアウト

言語に適した書字方向を使って文書を表示するだけでなく、 `ltr` 以外の書字方向を文書内でクリエイティブに使用することができます。グリッドレイアウトの片側にリンクを配置していますが、書字方向 (`writing-mode: vertical-lr`) を使用して、これらを列トラックの中で横向きにしています。

```css
.wrapper {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr auto;
  font:
    1em "Helvetica",
    "Arial",
    sans-serif;
}
nav {
  writing-mode: vertical-lr;
}
nav ul {
  list-style: none;
  margin: 0;
  padding: 1em;
  display: flex;
  justify-content: space-between;
}
nav a {
  text-decoration: none;
}
```

```html
<div class="wrapper">
  <div class="content">
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo
      shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea.
      Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi
      beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki
      bean chickweed potato bell pepper artichoke.
    </p>
    <p>
      Nori grape silver beet broccoli kombu beet greens fava bean potato
      quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
      turnip greens parsnip. Sea lettuce water chestnut eggplant winter purslane
      fennel azuki bean earthnut pea sierra leone bologi leek soko chicory
      celtuce parsley jícama salsify.
    </p>
  </div>
  <nav>
    <ul>
      <li><a href="">リンク 1</a></li>
      <li><a href="">リンク 2</a></li>
      <li><a href="">リンク 3</a></li>
    </ul>
  </nav>
</div>
```

{{ EmbedLiveSample('Mixed_writing_modes_and_grid_layout', '500', '280') }}

## 物理的な値とグリッドレイアウト

論理的なグリッドプロパティと物理的プロパティを組み合わせる場合、物理的プロパティは書字方向によって変化しないことに注意してください。 [CSS グリッドレイアウトのアイテムの配置](/ja/docs/Web/CSS/Guides/Grid_layout/Box_alignment) ガイドでは、1 つのアイテムを他のアイテムから離すためにautoマージンを 使用しています。これには物理的プロパティが使用されています。ほとんどの物理的プロパティには、グリッド配置や配置プロパティや値と同じように、 書字方向を尊重する論理的プロパティがあります。

同様に、グリッド領域内で絶対位置指定を使用する場合、論理的な{{glossary("inset properties", "インセットプロパティ")}}を使用して、アイテムをグリッド領域内に配置することができます。論理的プロパティと物理的プロパティ、またはそれらの値が混在する場合、それらの間の矛盾に注意してください。例えば、`ltr` から `rtl` への切り替えに対応するために、CSS を変更する必要があるかもしれません。グリッドによるブロックとインラインについての理解は、 [CSS 論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)を理解するのに役立ちます。
