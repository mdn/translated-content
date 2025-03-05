---
title: フレックスボックスと他のレイアウト方法の関係
slug: Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods
l10n:
  sourceCommit: 8a7e911652fcb4a61cc95f458d53f39ad08c0946
---

{{CSSRef}}

この記事では、フレックスボックスが他の CSS モジュールとどのように組み合わせられるかを見ていきます。フレックスボックスについて学びたいときに気をつけておくべき仕様を明らかにし、またなぜフレックスボックスが他のモジュールと異なったものであるかという点についても明確にします。

## ボックス配置モジュール

多くの人がフレックスボックスを最初に注目するのは、フレックスコンテナーの中にフレックスアイテムを適切に配置したいときです。フレックスボックスはアイテムの交差軸上での位置合わせを行ったり、主軸上での端揃えを行うためのプロパティを提供しています。

フレックスボックスは、元々自分自身で[フレックスボックスレイアウト](/ja/docs/Web/CSS/CSS_flexible_box_layout)モジュールで定義していましたが、他のレイアウトメソッドに共通するプロパティや数値は [CSS ボックス配置](/ja/docs/Web/CSS/CSS_box_alignment)モジュールで定義しています。このモジュールは、フレックスボックスだけでなく、すべてのレイアウト方式で配置、位置揃え、隙間、溝がどのように動作するのかを詳しく説明しています。ある機能が両方の仕様で定義されている場合、ボックス配置モジュールがフレックスボックスレイアウトモジュールより優先されることに注意してください。

## 書字方向

「[フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)」の記事で、フレックスボックスが**書字方向対応**であることに触れました。書字方向については [CSS 書字方向](/ja/docs/Web/CSS/CSS_writing_modes)モジュールで詳細に記されており、国によって異なる書字方向にどのように CSS が対応しているか明らかにしています。書字方向によって文書中にレイアウトされるブロックの方向が変わることが、フレックスレイアウトにどのような影響を及ぼすかについて気を配らなければなりません。**ブロック**方向と**インライン**方向について理解することが、新しいレイアウト方法の鍵となります。

コンテンツが異なる書字方向の言語で書かれてるからという理由以外でも、文書の書字方向を変更したい場合があると知っておくことも大切です。 CSS の書字方向モジュールは、テキストを横書き、左書き、右書き、左書き、縦書き、上から下に書く方法を定義します。これは国際化や翻訳のために重要ですが、これらの機能はクリエイティブなデザインにも使用することができます。

### 書字方向

書字方向仕様では {{cssxref("writing-mode")}} プロパティのために以下の値を定義しており、特定の書字方向においてコンテンツがブロック内にレイアウトされる方向と、ブロックがページ内で配置される方向が適合するよう変更するために使えます。フレックスレイアウトに何が起こるかを理解するために、以下の例を変更してみてください。

- `horizontal-tb`
- `vertical-rl`
- `vertical-lr`
- `sideways-rl`
- `sideways-lr`

```html live-sample___writing-modes
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

```css live-sample___writing-modes
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  width: 500px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  writing-mode: horizontal-tb;
}
```

{{EmbedLiveSample("writing-modes")}}

`sideways-rl` と `sideways-lr` の対応は現時点では Firefox のみです。

CSS の `writing-mode` プロパティを文書全体の書字方向を変更するために使うことはあまりないでしょう。通常は HTML 上で [`dir`](/ja/docs/Web/HTML/Global_attributes/dir) 属性と [`lang`](/ja/docs/Web/HTML/Global_attributes/lang) 属性を {{htmlelement("html")}} 要素に指定することで、文書の言語とテキスト方向を指定します。それによって CSS が読み込まれなかったとしても文書を正しく表示することができます。

## フレックスボックスと他のレイアウト方法

一部のプロパティは、コンテンツが標準ブロックレイアウトシステムを使用してレイアウトされることを想定して設計されており、フレックスレイアウトのコンテキストでは適用されません。 `display: flex` に設定された要素は、他の包含ブロックを構成するブロックレベルコンテナーとほとんど同じように振る舞います。浮動要素が侵入せず、コンテナーのマージンは相殺されません。

フレックスアイテムについては、ある要素は浮動 (`float`) や解除 (`clear`) が設定されていて、その上で親要素に `display: flex` が設定されたためにフレックスアイテムとなった場合、浮動と解除のいずれも無効になり、浮動が配置される通常のフローからは外れます。`inline-block` やテーブルレイアウトでの位置合わせのために {{cssxref("vertical-align")}} プロパティを使用している場合、このプロパティは作用しなくなります。代わりにフレックスボックスの配置用プロパティを使うことができます。

次の例では、子要素は浮動設定されており、コンテナーには `display: flex` が設定されています。`display: flex` を削除すると、解除が適用されていないため `.box` が折りたたまれます。再度 `display: flex` を適用すると折りたたみは起こりません。これは子要素がフレックスアイテムに変換されたために、浮動が適用されなくなったためです。

```html live-sample___floats
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

```css live-sample___floats
.box {
  width: 500px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  float: left;
}
```

{{EmbedLiveSample("floats")}}

## フレックスボックスとグリッドレイアウト

[CSS グリッドレイアウト](/ja/docs/Web/CSS/CSS_grid_layout)とフレックスボックスは多くのプロパティと値を共有しています。異なるプロパティの場合、フレックスアイテムがグリッドアイテムになると、子要素に割り当てるフレックス値（`flex-end` など）は無視されます。上述のように、両方のレイアウトメソッドで動作するボックス配置モジュールで定義する値は、フレックスボックスのみで定義する値よりも優先されます。

### フレックスとグリッドの違いは？

フレックスボックスと CSS グリッドレイアウトの違いは何か？なぜところどころ同じことをしているように見える 2 つの仕様がわざわざあるのか？というのはよくある疑問です。

この疑問に対する最も素直な答えは、仕様自体で定義されています。一方のフレックスボックスは一次元のレイアウト方法で、他方のグリッドレイアウトは二次元のレイアウト方法だということです。以下の例はフレックスレイアウトを使っており、[基本概念](/ja/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)の記事で述べたようにフレックスアイテムは折り返すことができますが、折り返された場合にはそれぞれの行が別のフレックスコンテナーであるかのように動作します。余白の分配の際にほかの行のアイテム配置については考慮されず、ほかの行との間でのアイテムの位置を揃えようともしません。

```html live-sample___flex-layout
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
</div>
```

```css live-sample___flex-layout
.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 1em;
  flex: 1 1 200px;
}
```

{{EmbedLiveSample("flex-layout", "", "300px")}}

同様のレイアウトをグリッドで作成すると、行と列の両方を制御することができます。

```html live-sample___grid-layout
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
</div>
```

```css live-sample___grid-layout
.box {
  border: 2px dotted rgb(96 139 168);
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  padding: 1em;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("grid-layout", "", "300px")}}

これらの例はフレックスボックスとグリッドの主要な差異を示しています。グリッドレイアウトではサイズの指定の大部分はコンテナーに対して行い、トラックを組み上げてそこにアイテムを配置していきます。フレックスボックスではフレックスコンテナーを作りその方向を決めますが、アイテムのサイズに関する制御はアイテム自体に行っていくことになります。

用途によっては、どちらのレイアウト方法も使用することができます。両方を使いこなせるようになると、どのレイアウトニーズにどの方法が適しているかがわかり、最終的には両方の方法を CSS で使うことになるでしょう。一つの政界や不正解があることはほとんどありません。

一般的ななルールとして、フレックスアイテムに幅を設定して、折り返されたフレックスコンテナーの行内のアイテムを、上の行のアイテムの位置と揃えようとしているときには、二次元のグリッドレイアウトを採用すべきでしょう。

「小さなコンポーネントにはフレックスボックスを使い、大きなコンポーネントにはグリッドレイアウトを使うべき」というようなルールはありません。とても小さいコンポーネントであっても二次元になることもあれば、大きなレイアウトを一次元のレイアウトで表現することが適している場合もあります。今はレイアウト方法を選べるようになったので、その利点を生かすためにいろいろと試してみてください。

グリッドとフレックスボックスのさらに詳しい比較については「[グリッドレイアウトと他のレイアウト方法との関係](/ja/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)」の記事を参照してください。この記事ではグリッドレイアウトがフレックスレイアウトと異なっている多くの点について詳述し、またグリッドレイアウトの持つグリッド上のアイテムのレイヤー機能などの追加機能について実例を示しています。また、どちらのレイアウト方法を選ぶべきかを決める手助けにもなるでしょう。

## フレックスボックスと display: contents

{{cssxref("display")}} プロパティの値 `contents` は、仕様書の中で以下のように説明されています。

> 「要素自体はボックスを生成しませんが、その子要素や擬似要素については通常と変わらずボックスを生成します。ボックス生成とレイアウトにおいては、この要素はその子要素や擬似要素によって置き換えられたように扱わなければなりません」
> (訳注: [https://www.w3.org/TR/css-display-3/#box-generation](https://www.w3.org/TR/css-display-3/#box-generation) より引用)

`display` のこの値はボックス生成を制御し、ページ上に表示されスタイリングすることができるボックスをその要素が生成すべきか、または通常生成されるボックスは削除して子要素を親要素が元々加わっていたレイアウト方法に引き上げて参加させるべきかを制御します。これについては例を見たほうがわかりやすいでしょう。

以下の例では、フレックスコンテナーとその中に 3 つの子要素があります。そのうちの 1 つにはさらに 2 つのネストした子要素があります。ネストした子要素は通常、フレックスレイアウトの構成に含まれません。フレックスレイアウトはフレックスコンテナーの直下の子要素のみに適用されます。

ここで `display: contents` をネストした要素のラッパーに追加することで、このラッパー要素がレイアウトから消え、2 つのネストした子要素がフレックスコンテナーの直下の要素であった時のようにレイアウトされます。`display: contents` を削除してみると元に戻ることを確認できます。

レイアウト上からボックスが削除されるだけで、レイアウト以外の観点ではこのネストした子要素が直下の子要素にならない点には注意が必要です。例では直下の子セレクターを使ってフレックスアイテムに背景色とボーダーを設定しているのですが、ネストした子要素には適用されません。フレックスアイテムとしてレイアウトはされますが、直下の子要素ではないため他のスタイル設定までは適用されません。

ボックスを削除した場合には、それを例えば背景色をネストした子要素に適用するために使用することはできません。今回の例において `display: contents` を削除すると、削除されていた直下の子要素がオレンジの背景色になっていることがわかります。この背景色はボックスが消えると同時に消えます。

```html live-sample___display-contents
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div class="nested">
    <div>サブアイテム 1</div>
    <div>サブアイテム 2</div>
  </div>
</div>
```

```css live-sample___display-contents
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  padding: 1em;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  border: 2px dotted rgb(96 139 168);
  padding: 1em;
  display: flex;
}

.nested {
  background-color: orange;
  display: contents;
}
```

{{EmbedLiveSample("display-contents")}}

> [!WARNING]
> 現在のほとんどのブラウザーの実装では、`display: contents` を持つ要素をアクセシビリティツリーから削除します（ただし、子孫は残ります）。これにより、要素自体がスクリーンリーダー技術でアナウンスされなくなります。これは仕様書によれば正しくない動作です。 [`display: contents`](/ja/docs/Web/CSS/display#display_contents) および　[`display: contents` considered harmful](https://ericwbailey.design/published/display-contents-considered-harmful/)　を参照してください。
