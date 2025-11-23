---
title: 名前付きグリッド線を使用したレイアウト
short-title: 名前付きグリッド線の使い方
slug: Web/CSS/Guides/Grid_layout/Named_grid_lines
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

これまでのガイドでは、[グリッドトラックの定義](/ja/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)で作成した行にアイテムを配置する方法、および[名前付きテンプレート領域の使用](/ja/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)でアイテムを配置する方法について説明しました。このガイドでは、名前付き行を使用する場合、これら 2 つがどのように連携して動作するのかを見ていきます。

線に名前をつけるととても便利ですが、名前とトラックの寸法の組み合わせではより難解なグリッドの構文になります。いくつかの例を使ってみることで、動作がより明確かつ易しくなるでしょう。

## グリッド定義の際の線の命名

グリッドを定義する際に、 {{cssxref("grid-template-rows")}} と {{cssxref("grid-template-columns")}} のプロパティを使って、グリッド内の一部または全部の線に名前を割り当てることができます。ここでは、[線ベースの配置](/ja/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)のガイドで作成したシンプルなレイアウトを使って説明します。今回は、名前付きの線を使ってグリッドを作成します。

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

グリッドを定義する際、角括弧の中に線の名前を付けます。この名前は何でもかまいません。ここでは、コンテナーの先頭と末尾の名前を、行と列の両方で定義しました。次に、グリッドの中央のブロックを、列と行の両方について、再び `content-start` と `content-end` で定義します。ただし、グリッド上のすべての線に名前を付ける必要はありません。レイアウトの重要な線だけに名前を付けることもできます。

```css
.wrapper {
  display: grid;
  grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
  grid-template-rows: [main-start] 100px [content-start] 100px [content-end] 100px [main-end];
}
```

グリッド内のすべての行に名前を付ける必要はありません。レイアウトの重要な行だけに名前を付けることもできます。

線に名前を付けると、線番号ではなく、定義した名前を使用してグリッドアイテムを配置することができます。

```css
.box1 {
  grid-column-start: main-start;
  grid-row-start: main-start;
  grid-row-end: main-end;
}

.box2 {
  grid-column-start: content-end;
  grid-row-start: main-start;
  grid-row-end: content-end;
}

.box3 {
  grid-column-start: content-start;
  grid-row-start: main-start;
}

.box4 {
  grid-column-start: content-start;
  grid-column-end: main-end;
  grid-row-start: content-end;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

{{ EmbedLiveSample('Naming_lines_when_defining_a_grid', '500', '330') }}

線ベースの配置に関するその他の機能は、これまでと同じ方法で動作します。このグリッドレイアウトでは、それぞれの番号つきの線にエイリアス名を指定しています。グリッドアイテムでは、番号ではなく名前を指定しています。このように線に名前を付けると、レスポンシブデザインを作成する際に、それぞれの [メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using) 内のグリッドアイテムを更新する代わりに、コンテナーのグリッドプロパティを更新するだけで済みます。

### 線に複数の名前をつける

例えば、sidebar-end と main-start を表すために、1 つの線に複数の名前を付けたい場合があります。そのためには、 `[sidebar-end main-start]` のように角括弧の中に名前を入れて、その間に空白を入れます。これで、どちらの名前でもその行を参照することができます。

## 名前付きの線による暗黙のグリッド領域

線に名前を付けるとき、好きな名前を付けて良いと言いました。この名前は {{cssxref("custom-ident")}} であり、製作者が定義した名前です。名前を決める際には、`span` のような、仕様書に出てきて混乱を招くような言葉は避ける必要があります。識別子には引用符を付けません。

どのような名前でも良いのですが、上の例のように、領域を囲む行に `-start` と `-end` を追加すると、グリッドは主要部分で使用される名前の領域を作成します。上の例では、行と列の両方に `content-start` と `content-end` を付けています。つまり、`content`という名前のグリッド領域ができ、その領域に何かを配置することができるのです。

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

上記と同じグリッド定義を使用し、名前付き領域 `content` に単一のアイテムを配置します。

```css
.wrapper {
  display: grid;
  grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
  grid-template-rows: [main-start] 100px [content-start] 100px [content-end] 100px [main-end];
}
.thing {
  grid-area: content;
}
```

```html
<div class="wrapper">
  <div class="thing">content と名付けられた領域に配置されています。</div>
</div>
```

{{ EmbedLiveSample('Implicit_grid_areas_from_named_lines', '500', '330') }}

名前の付いた線が領域を作ってくれるので、 {{cssxref("grid-template-areas")}} で領域の位置を定義する必要はありません。

## 名前付き領域による暗黙のグリッド線

名前付きの線が名前付きの領域を作る方法を見てきましたが、これは逆に機能します。名前付きテンプレート領域を定義すると、アイテムを配置するのに使用できる名前付きの線が作成されます。[グリッドテンプレート領域](/ja/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)のガイドで作成されたレイアウトを使用すると、領域によって作成された線を使用して、これがどのように機能するかを確認することができます。

この例では、クラスを `overlay` に設定した `<div>` を追加しています。そして、 {{cssxref("grid-area")}} プロパティで作成した名前付きの領域と、`grid-template-areas` で作成したレイアウトを用意しました。領域の名前は次の通りです。

- `hd`
- `ft`
- `main`
- `sd`

これによって、以下の行と列の線が得られます。

- `hd-start`
- `hd-end`
- `sd-start`
- `sd-end`
- `main-start`
- `main-end`
- `ft-start`
- `ft-end`

画像の中で名前付きの線を確認することができます。なお、線によっては 2 つの名前が付いています。例えば、 `sd-end` と `main-start` は同じ列の線を参照しています。

![グリッド領域で作成された暗黙の線名を示す画像](5_multiple_lines_from_areas.png)

これらの暗黙に名づけられた線を使って `overlay` を配置することは、名づけた線を使ってアイテムを配置することと同じです。

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
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas:
    "hd hd hd hd   hd   hd   hd   hd   hd"
    "sd sd sd main main main main main main"
    "ft ft ft ft   ft   ft   ft   ft   ft";
}

.header {
  grid-area: hd;
}

.footer {
  grid-area: ft;
}

.content {
  grid-area: main;
}

.sidebar {
  grid-area: sd;
}

.wrapper > div.overlay {
  z-index: 10;
  grid-column: main-start / main-end;
  grid-row: hd-start / ft-end;
  border: 4px solid rgb(92 148 13);
  background-color: rgb(92 148 13 / 40%);
  color: rgb(92 148 13);
  font-size: 150%;
}
```

```html
<div class="wrapper">
  <div class="header">ヘッダー</div>
  <div class="sidebar">サイドバー</div>
  <div class="content">コンテンツ</div>
  <div class="footer">フッター</div>
  <div class="overlay">Overlay</div>
</div>
```

{{ EmbedLiveSample('Implicit_Grid_lines_from_named_areas', '500', '330') }}

名前のついた領域からは線を、名前のついた線からは領域を作ることができるので、グリッドレイアウトの作成を始める際には、少し時間をかけて名前の付け方を計画するといいでしょう。自分やチームにとって意味のある名前を選択することで、レイアウトがより直感的に理解できるようになります。

## repeat() による複数の同一名の線の表示

すべてのグリッド線に一意の名称を付けたい場合は、トラックを定義する際に名前を角括弧で囲んで追加する必要があるため、繰り返し構文ではなく、長いプロパティを使用してトラックの定義を定義する必要があります。繰り返し構文を使用すると、同じ名前を持つ複数の線が取得されます。これは、レイアウトの要件によっては便利である場合もあれば、混乱を招く場合もあります。

### repeat() を使用した 12 列のグリッド

この例では、同じ幅の 12 列のグリッドを作成します。列トラックのサイズ `1fr` を定義する前に、`[col-start]` という名前の行を定義します。これは、幅 `1fr` の列の前に、すべて `col-start` という名前の 12 列のグリッドが存在するということです。

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
  grid-template-columns: repeat(12, [col-start] 1fr);
}
```

グリッドを作成したら、そこにアイテムを配置します。 `col-start` という名前の複数の線があるので、 `col-start` という線の後にアイテムを配置すると、グリッドは `col-start` という名前の最初の線が使用されます。この例では左端の線です。別の行を指定するには、名前とその線の番号を使用します。

`col-start` という名前が付いた最初の行から 5 行目までをまたぐアイテムを配置するには、次のように使用することができます。

```css
.item1to5 {
  grid-column: col-start / col-start 5;
}
```

ここでは、`span` キーワードを使うこともできます。次のアイテムは、 `col-start` という名前の付いた 7 番目の線から 3 本にわたって配置されます。

```css
.item7to9 {
  grid-column: col-start 7 / span 3;
}
```

```html-nolint
<div class="wrapper">
  <div class="item1to5">col-start の 1 本目の線から col-start の 5 本目の線に配置されています</div>
  <div class="item7to9">col-start の 1 本目の線から線 3 本にまたがって配置されています</div>
</div>
```

{{ EmbedLiveSample('Twelve-column_grid_using_repeat', '500', '120') }}

このレイアウトをブラウザーの開発者ツールで見ていくと、列の行がどのように表示され、アイテムがこれらの行に対してどのように配置されているかがわかります。

![アイテムが配置された 12 列のグリッド。グリッドハイライターで線の位置を表示している。](5_named_lines1.png)

### トラックリストで名前付きの線を定義

`repeat()` 構文はトラックリストも取ることができます。繰り返しできるのは単一のトラックサイズだけではありません。

この CSS は、幅の狭い `1fr` の列 `col1-start` に続き、幅の広い `3fr` の列 `col2-start` という名前付きトラックで構成される 8 トラックのグリッドを作成します。

```css
.wrapper {
  grid-template-columns: repeat(4, [col1-start] 1fr [col2-start] 3fr);
}
```

反復構文で 2 つの線が隣り合っていると統合され、反復のないトラック定義で 1 つの線に複数の名前を付けたのと同じ結果になります。次の定義では、 4 つの `1fr` トラックを作成し、それぞれに先頭と末尾の線を設定しています。

```css
.wrapper {
  grid-template-columns: repeat(4, [col-start] 1fr [col-end]);
}
```

この定義を反復記法を使わずに書き出すと、次のようになります。

```css
.wrapper {
  grid-template-columns: [col-start] 1fr [col-end col-start] 1fr [col-end col-start] 1fr [col-end col-start] 1fr [col-end];
}
```

トラックリストを使用している場合は、`span` キーワードを使用して、複数の行にまたがるだけでなく、特定の名前の複数の行にまたがることもできます。

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
  grid-template-columns: repeat(6, [col1-start] 1fr [col2-start] 3fr);
}

.item1 {
  grid-column: col1-start / col2-start 2;
}

.item2 {
  grid-row: 2;
  grid-column: col1-start 2 / span 2 col1-start;
}
```

```html-nolint
<div class="wrapper">
  <div class="item1">
    col1-start の線 1 から col2-start の線 2 に配置されています
  </div>
  <div class="item2">
    col1-start の線 2 から col1-start と名付けられた線 2 本にまたがって配置されています
  </div>
</div>
```

{{ EmbedLiveSample('Defining_named_lines_with_a_track_list', '500', '230') }}

### 12 列のグリッドフレームワーク

番号付きおよび名前付き線ベースの配置と[グリッドテンプレート領域](/ja/docs/Web/CSS/CSS_CSS_grid_layout/Grid_template_areas)について学んだことで、CSS グリッドレイアウトを使用してアイテムを配置する方法はいくつかあることがわかりました。これは過度に複雑に見えるかもしれませんが、すべてを使用する必要はありません。実際には、名前付きテンプレート領域を使用すると、レイアウトがどのように見えるかを視覚的に良く表現でき、グリッド上で要素を直感的に移動できるため、単純なレイアウトには適しています。例えば、厳密な段組みのレイアウトを扱う場合、このガイドの最後の部分にある名前付き行のデモが適しています。

Foundation や Bootstrap などのフレームワークに搭載されている古いグリッドシステムは、12 列のグリッドをベースにしています。フレームワークは、列の合計が 100% になるようにすべての計算を行うコードをインポートします。フレームワークは必要ありません。 12 列のグリッド「フレームワーク」に必要な CSS は、次のものだけです。

```css
.wrapper {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, [col-start] 1fr);
}
```

この「フレームワーク」を使用して、ページのレイアウトを行うことができます。

例えば、ヘッダーとフッターを含む 3 列のレイアウトを作成するには、次のマークアップを使用することができます。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > * {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <header class="main-header">ヘッダー</header>
  <aside class="side1">サイドバー 1</aside>
  <article class="content">メイン記事</article>
  <aside class="side2">サイドバー 2</aside>
  <footer class="main-footer">フッター</footer>
</div>
```

これをグリッドレイアウトフレームワークに配置すると、次のようになります。

```css
.main-header,
.main-footer {
  grid-column: col-start / span 12;
}

.side1 {
  grid-column: col-start / span 3;
  grid-row: 2;
}

.content {
  grid-column: col-start 4 / span 6;
  grid-row: 2;
}

.side2 {
  grid-column: col-start 10 / span 3;
  grid-row: 2;
}
```

{{ EmbedLiveSample('Twelve-column_grid_framework', '500', '220') }}

ここでも、開発者ツールのグリッドハイライターはアイテムを配置したグリッドがどのように機能するかを示すのに役立ちます。

![グリッドが強調されたレイアウト](5_named_lines2.png)

必要な設定はこれだけです。計算は一切必要ありません。CSS グリッドレイアウトは、10 ピクセルの溝トラックを自動的に除去してから、その空間を `1fr` の列トラックに割り当ててくれます。

次は、[グリッドレイアウトでの自動配置](/ja/docs/Web/CSS/Guides/Grid_layout/Auto-placement)ガイドで、配置プロパティをまったく要求せずに、CSS グリッドレイアウトがアイテムの位置指定を行う方法を見ていきます。
