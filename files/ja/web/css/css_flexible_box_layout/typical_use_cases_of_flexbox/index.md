---
title: フレックスボックスの典型的な用途
slug: Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox
l10n:
  sourceCommit: 8a7e911652fcb4a61cc95f458d53f39ad08c0946
---

{{CSSRef}}

このガイドでは、フレックスボックスの一般的な使用用途（フレックスボックスが他のレイアウト方法よりも有意義である場合）について見ていきます。

## なぜフレックスボックスを選ぶのか？

フレックスボックスは、アイテムの集合を一次元でレイアウトしたり、アイテム間の余白を制御したりしたい場合に、一般的に適切な CSS レイアウトソリューションです。このガイドでは、フレックスボックスの典型的な用途をいくつか見ていきます。

## ナビゲーション

ナビゲーションの一般的なパターンとして、アイテムのリストを水平バーとして表示する方法があります。これはフレックスボックスの例としては最も一般的であり、フレックスボックスの理想的な用途であるといえます。

水平方向に表示したいアイテム群がある場合、空間が残ることがあります。この空間をどうするかを決めなければなりませんが、いくつかの選択肢があります。アイテムの外側に空間を表示して、アイテムの間や周囲に余白を設けるか、アイテムの内側に空間を吸収して、アイテムを伸長してこの空間を占めるようにするか、どちらかにする必要があります。

### アイテムの周囲に余白を分配

アイテムの間または周囲に余白を分配するには、フレックスボックスの配置プロパティと {{cssxref("justify-content")}} プロパティを使います。このプロパティの詳細については、[フレックスコンテナー内のアイテムの配置](/ja/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)をご覧ください。そこでは、主軸におけるアイテムの配置について説明しています。

この例では、アイテムを自然なサイズで表示し、 `justify-content: space-between` を使用してアイテムを均等に配置しています。 `space-around`または `space-evenly` の値を使用して、空間の配分方法を変更することができます。 また、 `start` を使用してアイテムの末尾に空間を配置したり、 `end` を使用してアイテムの先頭に配置したり、 `center` を使用してナビゲーションアイテムを中央に配置したりすることもできます。

```html live-sample___navigation
<nav>
  <ul>
    <li><a href="#">Page 1</a></li>
    <li><a href="#">Page 2</a></li>
    <li><a href="#">Page 3 はより長い</a></li>
    <li><a href="#">Page 4</a></li>
  </ul>
</nav>
```

```css live-sample___navigation
nav {
  border: 2px solid #eeeeee;
}

nav a {
  text-decoration: none;
  color: #000;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  display: block;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}
```

{{EmbedLiveSample("navigation")}}

### アイテムの内側に余白を分配

ナビゲーションでのもう一つのパターンは、余白をアイテムの間ではなく、アイテム自身の内部に配置することです。 {{cssxref("flex")}} プロパティを使うことで、アイテムを互いの比率を保ったまま伸縮することができます。[主軸方向のフレックスアイテムの比率の制御](/ja/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)に書かれている通りです。

もしナビゲーションアイテムの size プロパティを尊重しつつ、利用できる空間を均等に共有したいのであれば、 `flex: auto` を使用することができます。これは `flex: 1 1 auto` の一括指定で、すべてのアイテムは flex-basis が `auto` の状態から伸縮します。これは、より大きなアイテムは、利用できる空間の大きさの割り当てが他と同じだけであったとしても、より大きなサイズから始めるので、より大きな空間を占めることということです。

下記のライブサンプルの `flex: auto` を `flex: 1` に変えてみてください。これは `flex: 1 1 0` の短縮版で、すべてのアイテムの幅が同じになります。なぜなら、 `flex-basis` が `0` となって空間が均等に分配されるからです。

```html live-sample___navigation-flex
<nav>
  <ul>
    <li><a href="#">Page 1</a></li>
    <li><a href="#">Page 2</a></li>
    <li><a href="#">Page 3 はより長い</a></li>
    <li><a href="#">Page 4</a></li>
  </ul>
</nav>
```

```css live-sample___navigation-flex
nav {
  border: 2px solid #eeeeee;
}
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

nav a {
  text-decoration: none;
  color: #000;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  display: block;
}

nav li {
  flex: auto;
}
```

{{EmbedLiveSample("navigation-flex")}}

## ナビゲーションの分割

主軸（横軸）でアイテムを整列するもうひとつの方法は、マージンを auto にすることです。これにより、一方のアイテム群を左揃えにして別のアイテム群を右揃えにする、というナビゲーションバーのデザインパターンが可能になります。下記の例では、 [auto マージンを使用した主軸上での配置](/ja/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container#auto_マージンを使用した主軸上での配置)に書かれている、マージンを auto にする技法を使っています。

アイテムは、フレックスボックスの初期動作である `normal` であり、これが `start` として動作します。 [`gap`](/ja/docs/Web/CSS/gap) プロパティを使用してアイテム間にすき間を作成しています。そして、 `margin-left` を `auto` にすることで、最後のアイテムを右に配置しています。このクラスをあるアイテムから別のアイテムに移動させることで、分割される位置を変更することができます。

```html-nolint live-sample___split-navigation
<nav>
  <ul>
    <li><a href="#">Page 1</a></li>
    <li><a href="#">Page 2</a></li>
    <li><a href="#">Page 3 はより長い</a></li>
    <li class="push-right"><a href="#">Page 4</a></li>
  </ul>
</nav>
```

```css live-sample___split-navigation
nav {
  border: 2px solid #eeeeee;
}

nav a {
  text-decoration: none;
  color: #000;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  display: block;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
}

.push-right {
  margin-left: auto;
}
```

{{EmbedLiveSample("split-navigation")}}

## アイテムの中央揃え

フレックスボックスの登場以前、開発者たちは「ウェブデザインで最も難しいのは垂直方向の中央揃えだ」と冗談を言っていました。下記のライブ例のとおり、フレックスボックスの配置プロパティを使用することで、簡単に解決できるようになりました。

配置では、 `start` でアイテムを先頭に、 `end` で末尾に配置することができます。

```html live-sample___center
<div class="box">
  <div></div>
</div>
```

```css live-sample___center
.box {
  height: 300px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  align-items: center;
  justify-content: center;
}

.box div {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("center", "", "320px")}}

[CSS ボックス配置](/ja/docs/Web/CSS/CSS_box_alignment)プロパティを使用すると、フレックスボックスを使用せずに、ある要素の内部で別の要素を垂直方向に中央揃えすることができます。例えば、ボックスからフレックスプロパティを除去し、 `align-content: center` を追加してみてください。次に、水平方向に中央揃えしたい要素に `margin: auto` を追加します。

## フッターが下端に張り付くカード

フレックスボックスや CSS グリッドを使ってコンテナー内のカード状の部品を並べて配置する場合、それらの制御はコンテナーの直下の要素であるカード自身にしか及びません。どういうことかと言うと、各カードの中身の量が異なる場合、カードはグリッド領域やフレックスコンテナーの高さに引き伸ばされます。そして、カードの内部では通常のブロックレイアウトが用いられます。つまり、中身の量が少ないカードでは、カードのフッターはカードの下端に張り付くのではなく、フッターが下端から浮き上がってしまいます。

![2 枚のカード部品は、部品の内部がラッパーと一緒に伸びることはない。](flex-cards.png)

フレックスボックスはこれを解決できます。カード自身もフレックスコンテナーにして、 {{cssxref("flex-direction", "flex-direction: column")}} を指定します。そしてカードの本文領域に `flex: 1` を指定します。これは `flex: 1 1 0` の一括指定です。アイテムは `0` の `flex-basis` をもとに伸縮します。引き伸ばせるフレックスアイテムが本文領域だけの場合、本文領域はフレックスコンテナー内の空間をすべて取り込み、フッターを下端に張り付かせます。ライブサンプルから `flex` プロパティを削除すると、フッターが本文の真下に移動するのを確認できます。

```html live-sample___cards
<div class="cards">
  <div class="card">
    <div class="content">
      <p>このカードにはあまりコンテンツがありません。</p>
    </div>
    <footer>カードフッター</footer>
  </div>
  <div class="card">
    <div class="content">
      <p>
        このカードにはより多くのコンテンツが格納されているため、カードが配置されているコンテナーの高さを定義することになります。カードをグリッドレイアウトで配置したので、カードそのものは同じ高さまで引き伸ばされます。
      </p>
    </div>
    <footer>カードフッター</footer>
  </div>
</div>
```

```css live-sample___cards
body {
  font-family: sans-serif;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
}

.card {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.card .content {
  padding: 10px;
  flex: 1 1 auto;
}

.card footer {
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
}
```

{{EmbedLiveSample("cards", "", "280px")}}

## メディアオブジェクト

メディアオブジェクト（画像やその他のメディア要素に説明テキストが横に並んでいるもの）は、ウェブデザインでは一般的なパターンです。メディアオブジェクトは反転できるべきであり、画像をもう一方の端へと移動できるようにします。

このパターンはコメントや、画像をその説明の隣に置く場所で使用されます。フレックスボックスを使用して、画像を含むメディアオブジェクトの一部が画像からサイズ情報を取得し、メディアオブジェクトのコンテンツが残りの空間を占めるように伸縮することができます。

この例では、メディアオブジェクトは `flex-start` に配置され、 `.content` は伸長するように設定され、伸長係数は `1` に設定されています。これらのプロパティは、上記の列のレイアウトカードパターンで使用されているものと同じです。

```html-nolint live-sample___media
<div class="media">
  <div class="image">
    <img
      alt="青空に色とりどりの風船が映える"
      src="https://mdn.github.io/shared-assets/images/examples/balloon.jpg" />
  </div>
  <div class="content">
   これはメディアオブジェクトのコンテンツです。フレックスコンテナー内に直接配置されたアイテムは、 flex-start に配置されます。
  </div>
</div>
```

```css live-sample___media
img {
  max-width: 100%;
  display: block;
}

.media {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  align-items: flex-start;
}

.media .content {
  flex: 1;
  padding: 10px;
}
```

{{EmbedLiveSample("media", "", "320px")}}

このライブサンプルでは、デザインの中でメディアオブジェクトを制約するさまざまな方法を試してみることができます。

画像が大きくなりすぎるのを防ぐために、 {{cssxref("max-width")}} を画像に指定してください。画像領域のフレックスボックスの指定は初期値のままなので、縮むことはできますが伸びることはできません。また、初期値では `flex-basis` は auto なので、画像の {{cssxref("width")}} や `max-width` が `flex-basis` となります。

```css
.image img {
  max-width: 100px;
}
```

両方の領域の比率を維持したまま伸縮させることもできます。両者に `flex: 1` を指定すると、`0` の {{cssxref("flex-basis")}} をもとに伸縮することになります。つまり両者の幅は同じになります。内容物を元に、両方とも `flex: auto` に設定すると、内容物の寸法や、画像の `width` などフレックスアイテムに直接適用される大きさに合わせて伸縮することができます。

```css
.media .content {
  flex: 1;
  padding: 10px;
}

.image {
  flex: 1;
}
```

両者に別々の {{cssxref("flex-grow")}} の比率を指定することもできます。例えば画像領域には `flex: 1`、文章領域には `flex: 3` というように。これは、両者に `0` の `flex-basis` が適用されますが、指定された `flex-grow` に従って別々の比率で領域が確保されることを意味します。このように使用される flex プロパティについては、[主軸方向のフレックスアイテムの比率の制御](/ja/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)で詳しく説明されています。

```css
.media .content {
  flex: 3;
  padding: 10px;
}

.image {
  flex: 1;
}
```

### メディアオブジェクトの反転

画像が右で文章が左になるようにメディアオブジェクトの表示を切り替えるには、`flex-direction` プロパティに `row-reverse` を指定します。

この例では、 `flipped` クラスを `media` クラスの隣に追加しました。 HTML からクラスを除去すると、表示がどのように変化するかが分かります。

```html-nolint live-sample___media-flipped
<div class="media flipped">
  <div class="image">
    <img
      alt="青空に色とりどりの風船が映える"
      src="https://mdn.github.io/shared-assets/images/examples/balloon.jpg" />
  </div>
  <div class="content">
    これはメディアオブジェクトのコンテンツです。フレックスコンテナー内に直接配置されたアイテムは、 flex-start に配置されます。
  </div>
</div>
```

```css live-sample___media-flipped
img {
  max-width: 100%;
  display: block;
}

.media {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  align-items: flex-start;
}

.flipped {
  flex-direction: row-reverse;
}

.media .content {
  flex: 1;
  padding: 10px;
}
```

{{EmbedLiveSample("media-flipped", "", "320px")}}

## フォームコントロール

フレックスボックスはフォームコントロールのスタイル指定に関しては特に便利です。フォームにはいくつもの小さな要素があり、それらを互いに整列したいと考えるはずです。よくあるパターンは {{htmlelement("label")}} と {{htmlelement("input")}} の組みと、さらに {{htmlelement("button")}} との組み合わせで、おそらく検索フォームやメールマガジンの登録フォームなどの、来訪者がメールアドレスを入力する局面などで使用されます。

フレックスボックスならばこのようなレイアウトを簡単に実現できます。 `<label>`、`<input>`、`<button>` を、 `display: flex` が設定されたラッパーに入れます。 `<input>` フィールドを引き伸ばすために flex プロパティを使いますが、ボタントラベルは引き伸ばしません。テキスト入力フィールドは、利用できる空間に応じて伸縮します。

```html live-sample___label-input-button
<form class="example">
  <div class="wrapper">
    <label for="text">ラベル</label>
    <input id="text" type="text" />
    <input type="submit" value="送る" />
  </div>
</form>
```

```css live-sample___label-input-button
* {
  font: 1.1em sans-serif;
}

.wrapper {
  display: flex;
  border: 1px solid rgb(96 139 168);
}
.wrapper > * {
  padding: 10px;
  border: none;
  color: #fff;
}
.wrapper > input[type="text"] {
  background-color: rgb(96 139 168 / 0.5);
  border-right: 1px solid rgb(96 139 168);
  flex: 1 1 auto;
}
.wrapper input[type="submit"] {
  background-color: rgb(96 139 168);
  color: #fff;
}
.wrapper label {
  background-color: #666;
}
```

{{EmbedLiveSample("label-input-button")}}

このようなパターンのおかげで、デザインに合わせたフォーム要素のライブラリーを簡単に作れます。要素の追加にも簡単に対応できます。伸縮するアイテムとしないアイテムを組み合わせる用途では、フレックスボックスの柔軟性の恩恵を存分に受けることができるのです。

## まとめ

上に挙げたパターンを見て回るうちに、フレックスボックスの最適な利用場面を考え始めたことと思います。いろいろな選択肢があることでしょう。伸縮するアイテムとしないアイテムを組み合わせたり、フレックスアイテムの中身のサイズをフレックスアイテム自身に反映させたり、比率に沿ってフレックスボックスの領域を分け合ったり。すべてはあなた次第です。

コンテンツの最適な表現方法を思い描いてみてください。そしてその実現にあたって、フレックスボックスや他のレイアウト方法をどのように利用できるのかを調べてみてください。
