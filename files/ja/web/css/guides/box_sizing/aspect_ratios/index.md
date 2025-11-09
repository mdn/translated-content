---
title: アスペクト比の理解と設定
slug: Web/CSS/Guides/Box_sizing/Aspect_ratios
original_slug: Web/CSS/CSS_box_sizing/Understanding_aspect-ratio
l10n:
  sourceCommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

ページにレンダリングされるすべての要素は、高さと幅を持ち、したがって、幅と高さの比である{{glossary("aspect ratio", "アスペクト比")}}を持ちます。メディアオブジェクトの自然な寸法は、サイズ指定、拡大縮小、ズーム、境界を適用しないサイズであり、自然なサイズまたは{{glossary("intrinsic size", "内在サイズ")}}と呼ばれています。要素の内在サイズは、[ボックスサイズ指定](/ja/docs/Web/CSS/Guides/Box_sizing)のような整形ルールを適用したり、境界線、マージン、パディングの幅を設定したりするのではなく、要素自体によって決定されます。

サイトを開発するとき、要素の幅をビューポートまたは親コンテナーのサイズに対するパーセント値に設定し、それに比例して高さを変更することで、ビューポートのサイズに応じて特定のアスペクト比を維持できるようにしたいと思うことがよくあります。画像や動画のような置換要素の場合、特定のアスペクト比を維持することは{{glossary("responsive web design", "レスポンシブウェブデザイン")}}を作成するために必要なだけでなく、良いユーザー体験を提供するための重要な要素でもあります。資産のアスペクト比を設定することで、読み込み時の[ジャンク](/ja/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images)、すなわちページが描画された後にメディアが読み込まれたときに発生するレイアウトのずれであり、資産用の空間がが確保されていないため、再フローが発生することを防ぐことができます。

CSS を使用すると、置換された要素と置換されていない要素のサイズを縦横比に基づいて調整することができます。このガイドでは、`aspect-ratio` プロパティについて学び、置換された要素と置換されていない要素のアスペクト比について説明します。

## `aspect-ratio` プロパティの動作

CSS の {{cssxref("aspect-ratio")}} プロパティの値は、要素のボックスの好ましい幅と高さの比率を定義します。値は {{cssxref("ratio")}}、キーワード `auto`、または空白で区切られた両方の組み合わせのいずれかです。

`<ratio>` は幅と高さの比率です。これは 2 つの正の数値 ({{cssxref("number")}}) をスラッシュ (`/`) で区切るか、1 つの `<number>` で表します。単一の数値を使用する場合、比率を `<number> / 1` と書くのと同じで、これも幅を高さで割った値になります。

以下の値はすべて等価です。

```css
aspect-ratio: 3 / 6;
aspect-ratio: 1 / 2;
aspect-ratio: 0.5 / 1;
aspect-ratio: 0.5;
```

以下の値もすべて等価です。

```css
aspect-ratio: 9/6;
aspect-ratio: 3/2;
aspect-ratio: 1.5;
```

```html hidden live-sample___number
<div>0.5</div>
<div>1.5</div>
```

```css hidden live-sample___number
div {
  height: 121px;
  aspect-ratio: 0.5;
  background-color: pink;
  line-height: 100px;
  text-align: center;
  float: left;
  background-image:
    repeating-linear-gradient(to right, black 0px 1px, transparent 1px 20px),
    repeating-linear-gradient(black 0px 1px, transparent 1px 20px);
  background-size:
    181px 5px,
    5px 121px;
  background-repeat: no-repeat;
}

div + div {
  aspect-ratio: 1.5;
  background-color: lightgreen;
  margin-left: 10px;
}
```

{{EmbedLiveSample("number", "100", "130")}}

`auto` キーワードの効果は、このキーワードが適用された要素が置換された要素であるかどうかに依存します。アスペクト比を持つ置換された要素の場合、`auto` はアスペクト比を使用することを意味します。それ以外のすべての場合、`auto` 値はボックスに優先する縦横比がないことを意味します。どちらの場合も、これは `aspect-ratio` プロパティが適用されていない場合の既定の動作です。

`auto` キーワードと `<ratio>` 値の両方を含む場合、例えば `aspect-ratio: auto 2 / 3;` や `aspect-ratio: 0.75 auto;` などは、`auto` 値は自然なアスペクト比で置換された要素に適用され、`width / height` または `<number>` の指定された比率が優先アスペクト比として使用されます。

上記の定義に「優先」という単語があることにお気づきでしょう。`aspect-ratio` の値が設定されても、常に適用されるわけではありません。`aspect-ratio` プロパティは「優先」アスペクト比を設定するため、ボックスのサイズの少なくとも 1 つが自動の場合にのみ効果を発揮します。

高さと幅、またはインラインサイズとブロックサイズの両方が明示的に設定されている場合、`aspect-ratio` プロパティの値は無視されます。この場合、どの寸法も自動的にサイズ設定されることは許されません。優先サイズは明示的に設定されますので、`aspect-ratio` プロパティは何の効果もありません。インラインサイズとブロックサイズの両方を宣言した場合は、そちらが優先されます。

置換要素では、どちらかの寸法に（`auto` 以外の）値を明示的に設定しない場合、どちらも既定で内在するサイズになります（`aspect-ratio` の値は適用されません）。`aspect-ratio` は、明示的に寸法が設定されていない非置換要素に適用されます。非置換要素は[内在的](/ja/docs/Glossary/Intrinsic_Size)または[外在的](/ja/docs/Glossary/Intrinsic_Size#外在的)のどちらかのサイズになり、コンテンツ、コンテナー、[ボックスモデル](/ja/docs/Learn_web_development/Core/Styling_basics/Box_model)のプロパティなどからサイズを取得します。

要素がページにレンダリングされるとき、CSS が適用されず、HTML のサイズ属性も含まれていなければ、ユーザーエージェントはオブジェクトを自然なサイズでレンダリングします。

## 置換要素のアスペクト比を調整する

{{htmlelement("img")}} や {{htmlelement("video")}} などの置換要素は、設定された寸法を持ち、したがって固有のアスペクト比を持つメディアに置き換えられます。JPEG、PNG、GIF のようなラスター画像を考えてみましょう。画像をページ上に配置し、{{htmlelement("img")}} 属性か CSS で高さや幅を設定しない場合、その画像は固有のサイズで表示されます。

<!-- temporarily ignore these images. Testing preview -->

```html hidden live-sample___original
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg?image=good"
  alt="220 pixel square pride flag" />
```

{{EmbedLiveSample("original", "100", "230")}}

これは CSS が適用されていない `220px` の正方形の画像で、内在サイズまたは既定のサイズで表示されます。

置換コンテンツが auto でサイズ指定されている場合、または `width` に値を設定するなどして 1 つの寸法だけにサイズを指定した場合、ブラウザーはメディアの元の縦横比を維持したまま、もう 1 つの寸法（この場合は高さ）のサイズを自動的に変更します。

この例では、{{cssxref("width")}} だけが画像に設定されているので、ユーザーエージェントはその縦横比を保持します。`55px`、`110px`、そして [`width: auto`](/ja/docs/Web/CSS/Reference/Properties/width) 値による自然なサイズである `220px` で表示されます。

```html hidden live-sample___image
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

```css hidden live-sample___image
img {
  width: 55px;
  margin-right: 5px;
}

img + img {
  width: 110px;
}

img + img + img {
  width: auto;
}
```

{{EmbedLiveSample("image", "100", "230")}}

両方の次元でサイズを指定した場合のみ、置換要素が歪む危険性があります。例えば、画像に `width: 100vw;` と `height: 100vh;` を設定すると、アスペクト比が可変になります。ビューポートのアスペクト比が画像の自然なアスペクト比と異なる場合、画像は引き伸ばされたり、つぶされたりして表示されます。

この例では、同じ画像が 3 回繰り返され、{{cssxref("height")}} の値は同じ (`110px`) ですが、{{cssxref("width")}} の値は異なるサイズ (`55px`、`110px`、`220px`) に明示されています。

```html hidden live-sample___image-bad
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

```css hidden live-sample___image-bad
img {
  width: 55px;
  height: 110px;
}

img + img {
  width: 110px;
}

img + img + img {
  width: 220px;
}
```

{{EmbedLiveSample("image-bad", "100", "120")}}

`height` と `width` の両方を設定することで、画像を意図的に歪ませています。最初の画像はつぶれ、3 番目の画像は引き伸ばされています。

CSS の {{cssxref("aspect-ratio")}} プロパティを使用して、1 つの寸法を設定し（両方でもどちらでもない）、`1` （または `1 / 1`）以外の値を指定することで、これと同じ歪んだ効果を作成することができました。おそらくこのようなことはしたくないでしょうが、可能であることを知っておくのは良いことです。

```html hidden live-sample___stretch
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

```css live-sample___stretch
img {
  height: 100vh;
  aspect-ratio: 3;
}
```

{{EmbedLiveSample("stretch", "100", "230")}}

ここでは 1 つの次元のみを宣言しています。`100vh` は例の {{htmlelement("iframe")}} ビューポートの全高です。`aspect-ratio` が置換された要素に適用されるためには、1 つの次元のみを設定する必要があります。両方を設定しても、どちらも設定しても動作しません。

### 置換要素をコンテナーに収める

本来の縦横比を維持したまま、置換要素をコンテナーの寸法に合わせるには、{{cssxref("object-fit")}} プロパティの値を `cover` または `contain` に設定します。これにより、置換要素はリサイズされ、コンテナーを「覆う」ようにクリップされるか、コンテナー内に完全に「収まる」ように小さなサイズで表示されます。

この例では、正方形の画像は 3 つのアイテムのグリッドに配置され、それぞれのアスペクト比は `5 / 2` である。

まず始めに、3 つのアイテムを持つコンテナーを作成し、それぞれに画像を 1 つずつ入れます。

```html live-sample___image-grid
<div class="grid">
  <div>
    <img
      src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
      alt="Pride flag" />
  </div>
  <div>
    <img
      class="cover"
      src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
      alt="Pride flag" />
  </div>
  <div>
    <img
      class="contain"
      src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
      alt="Pride flag" />
  </div>
</div>
```

次に、コンテナーをグリッドに設定し、各アイテムの縦横比を `2.5` (`5/2`) とし、最小幅を `150px` とします。したがって、最小の高さは `60px` となります。しかし、最終的な幅と高さは、例の iframe の幅、つまりビューポートのサイズに基づいて決定されます。

```css live-sample___image-grid
.grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  font-size: 0; /* ホワイトスペースを最小化するため */
}

div div {
  aspect-ratio: 5 / 2;
  background-color: #ccc;
}
```

次に画像のサイズを決め、最後の 2 つの画像に `object-fit` プロパティを設定します。

```css live-sample___image-grid
img {
  height: 100%;
  width: 100%;
}

.cover {
  object-fit: cover;
}

.contain {
  object-fit: contain;
}
```

{{EmbedLiveSample("image-grid", "100", "100")}}

最初の画像だけが歪んで（引き伸ばされて）います。`object-fit` の `fill` 値を使っても同じ効果が得られます。`cover` 画像はコンテナーの幅いっぱいに広がり、垂直方向にセンタリングされ、コンテナーに収まるように切り取られます。`contain` 値は、画像をコンテナー内に確実に収め、水平方向の中央に配置し、収まるように縮小します。

## 非置換要素のアスペクト比の定義

置換要素のアスペクト比は既定で維持されますが、非置換要素の内在サイズを変更すると、通常はそのアスペクト比が変わります。例えば、同じ内容がワイド画面やワイドな親コンテナーでは 3 行で表示され、狭い画面やコンテナーでは 8 行で表示されることがあります。

この例では、同じ引用文が `200px` と `600px` の幅のコンテナーに表示され、`200px` の幅と同じ高さの正方形が設定されています。

```html-nolint hidden live-sample___alder
<p>狭い画面:</p>
<blockquote>
  <q
    >When you stop living your life based on what others think of you real life
    begins. At that moment, you will finally see the door of self acceptance
    opened.</q
  >
  - Shannon L. Alder
</blockquote>
<p>広い画面:</p>
<blockquote>
  <q
    >When you stop living your life based on what others think of you real life
    begins. At that moment, you will finally see the door of self acceptance
    opened.</q
  >
  - Shannon L. Alder
</blockquote>
<p>overflow 付きのアスペクト比:</p>
<blockquote>
  <q
    >When you stop living your life based on what others think of you real life
    begins. At that moment, you will finally see the door of self acceptance
    opened.</q
  >
  - Shannon L. Alder
</blockquote>
<p>
  <label
    ><input type="checkbox" checked />
    <code>overflow</code> の値を <code>auto</code> と
    <code>visible</code> の間でトグル切り替え</label
  >
</p>
```

それぞれの方向のサイズによって非置換要素の縦横比を設定する問題を強調するために、{{cssxref("overflow")}} プロパティを `auto` と `visible` の間で切り替えてみましょう。

```css hidden live-sample___alder
blockquote {
  border: 3px dotted #ccc;
  padding: 0 3px;
  margin: 20px 0;
  font-size: 1.25rem;
  line-height: 1.5;
}

body:has(:checked) blockquote {
  overflow: auto;
}

:checked + code,
:not(:checked) + code + code {
  outline: 1px solid green;
}

p:nth-last-of-type(n + 2) {
  font-weight: bold;
}
```

```css live-sample___alder
blockquote {
  width: 200px;
}

blockquote:nth-of-type(2) {
  width: 600px;
}

blockquote:nth-of-type(3) {
  height: 200px;
}
```

{{EmbedLiveSample("alder", "100", "800")}}

寸法を設定して、はみ出したコンテンツを非表示にすることで、非置換要素に縦横比を定義することは可能ですが、CSS {{cssxref("aspect-ratio")}} プロパティによって、明示的な縦横比を指定できます。これは、コンテンツや画面サイズがわからない場合でも、特定のアスペクト比を設定できることを意味します。

次の例では、非置換要素である `aspect ratio: 1` を {{htmlelement("blockquote")}} に設定することで、テキストの幅に関係なく正方形のボックスを表示します。

```html hidden live-sample___words
<p>短いテキスト:</p>
<blockquote>Breath.</blockquote>
<p>長いテキスト:</p>
<blockquote>You're perfect just as you are.</blockquote>
```

```css live-sample___words
blockquote {
  inline-size: max-content;
  aspect-ratio: 1;
}
```

```css hidden live-sample___words
blockquote {
  border: 1px solid #ccc;
  padding: 1px;
  margin: 20px 0;
  background-color: #ededed;
}
```

{{EmbedLiveSample("words", "100", "400")}}

それぞれのボックスには寸法が一方だけ定義されています。{{cssxref("inline-size")}} は、横書き言語での幅を表し、{{cssxref("max-content")}} に設定されます。2 番目の寸法、この場合は {{cssxref("block-size")}} または {{cssxref("height")}} は、1 番目の寸法と同じ長さに設定されます。これは {{cssxref("aspect-ratio")}} プロパティで実現されます。要素のボックスの幅と高さの比率を `1` 、つまり正方形の `1 / 1` と定義しました。これにより、{{cssxref("height")}} や {{cssxref("block-size")}} プロパティを使用せずに、ブロックの方向が要素の幅と一致するように設定されます。

これらの例では、要素自体にサイズが明示的に設定されています。非置換要素で作業する場合、サイズ寸法が明示的に設定されていないと、アスペクト比が問題になります。

### コンテナーのサイズに応じた円の作成

非置換ブロックレベル要素の inline-size は、そのコンテナーの[コンテンツボックス](/ja/docs/Web/CSS/Reference/Values/box-edge#content-box)のサイズです。これらは既定でサイズを持っているので、`aspect-ratio` プロパティが動作するために明示的にサイズを設定する必要はありません。

この例では、コンテナーの {{htmlelement("div")}} の幅が `200px` で、各辺に `5px` のパディングが含まれています。したがって、コンテンツボックスのインラインサイズは `190px` となります。ネストされた {{htmlelement("p")}} 要素に高さや幅を設定しなくても、その行内サイズは `190px` であることがわかります。`aspect-ratio: 1` を設定すると、段落の高さは `190px` になります。目に見えるコンテンツがはみ出すと高さが大きくなるはずです（ここではそうなりません）。

`<div>` 要素の高さは明示的に設定されていませんが、高さ `190px` の段落、`5px` の上下のパディング、`<p>` の既定の上下のマージンを合わせた高さを含んでいます。その結果、幅よりも高さが大きくなっています。どちらの要素も {{cssxref("border-radius")}} の値が `50%` であるため、コンテナーは楕円となります。子要素は `aspect-ratio` が `1` であるが、インラインまたはブロック方向の大きさが明示的に定義されていないため、円になります。

```html live-sample___circle
<div><p>Hello world</p></div>
```

```css live-sample___circle
div,
p {
  border-radius: 50%;
}

div {
  width: 200px;
  padding: 5px;
  background-color: #66ccff;
}

p {
  aspect-ratio: 1;
  text-align: center;
  border: 10px solid #ffffff;
  background-color: #f4aab9;
}
```

{{EmbedLiveSample("circle", "100", "250")}}

`<div>` を円にするには、`height` と `width` を同じ値に設定するか、`aspect-ratio: 1` を設定し、`overflow` を `auto` または `hidden` に設定します。また、[`margin-block: 0`](/ja/docs/Web/CSS/Reference/Properties/margin-block) を使って段落のマージンを削除することもできます。これらのオプションを以下に示します。

```html live-sample___circle2
<section>
  <div><p>Hello world</p></div>
  <div><p>Hello world</p></div>
  <section></section>
</section>
```

```css hidden live-sample___circle2
section {
  display: flex;
  gap: 20px;
}

div {
  width: 200px;
  padding: 5px;
  background-color: #66ccff;
}

p {
  text-align: center;
  border: 10px solid #ffffff;
  background-color: #f4aab9;
}
```

```css live-sample___circle2
div,
p {
  aspect-ratio: 1;
  border-radius: 50%;
}

div:first-of-type {
  overflow: hidden;
}

div:last-of-type p {
  margin-block: 0;
}
```

{{EmbedLiveSample("circle2", "100", "250")}}

## 主な `aspect-ratio` の用途

ここでは、レスポンシブデザインを作成する際に、`aspect-ratio` を使用して一般的な課題に対処できる状況をいくつか見てみましょう。

### 外部資産をレスポンシブにする

TikTok、YouTube、Instagram の動画など、サードパーティが埋め込んだコンテンツであっても、すべてのコンテンツはレスポンシブであるべきです。これらの外部動画を埋め込むために含めるコードスニペットは、一般的に {{htmlelement("iframe")}} を作成します。

{{htmlelement("video")}} 要素は通常メディアファイルのアスペクト比を採用しますが、`iframe` 要素にはこの機能がありません。このため、`<iframe>` 要素が含まれる動画のアスペクト比を常に維持しながら、レスポンシブであることを保証するという課題が生じます。使用できるテクニックの 1 つは、iframe の幅をそのコンテナーの `100%` または `100vw` に設定し、ビューポートのサイズに関係なくビューポートの幅に一致させることです。しかし、高さを固定にすると、動画が引き伸ばされたり、つぶされたりする可能性があります。代わりに、動画のコンテナーに `aspect-ratio` を設定し、動画と同じアスペクト比になるように配置します。問題は解決しました！

ちなみに、デスクトップパソコンやノートパソコンで見る場合、YouTube 動画の標準的なアスペクト比は 16:9 だが、TikTok や Instagram の動画のアスペクト比は 9:16 である。

```css
.youtube {
  aspect-ratio: 16/9;
}

.instagram,
.tiktok {
  aspect-ratio: 9/16;
}
```

`aspect-ratio` プロパティと一緒に {{cssxref("@media")}} クエリー内の `aspect-ratio` 機能を使用することで、iframe とそれが含む動画の両方のサイズを調整することができます。これにより、特定のアスペクト比を維持しながら、ビューポートのサイズに関係なく、動画コンテンツが常に可能な限り大きく（ビューポートの幅または高さいっぱいに）表示されるようになります。

横向きの YouTube 動画はビューポートと同じ幅に設定し、縦向きの TitTok と Instagram の動画 iframe はビューポートと同じ高さに設定します。ビューポートのアスペクト比が 16:9 より広い場合は、YouTube 動画をビューポートの高さに設定します。ビューポートが 9:16 より狭い場合は、Instagram と TikTok の動画をビューポートの幅に設定します。

```css
iframe.youtube {
  aspect-ratio: 16/9;
  width: 100vw;
  height: auto;
}

iframe.instagram,
iframe.tiktok {
  aspect-ratio: 9/16;
  height: 100vh;
  width: auto;
}

/* ビューポートがとても広く、高さがあまりない場合 */
@media (aspect-ratio > 16 / 9) {
  iframe.youtube {
    width: auto;
    height: 100vh;
  }
}

/* ビューポートの縦幅がとても大きく、横幅があまり大きくない場合 */
@media (aspect-ratio < 9 / 16) {
  iframe.instagram,
  iframe.tiktok {
    height: auto;
    width: 100vw;
  }
}
```

### 正方形のグリッドセルを作成

正方形のセルのグリッドは、[列トラックサイズ](/ja/docs/Web/CSS/Reference/Properties/grid-template-columns)を固定で定義し、各行が列トラックのサイズと確実に一致するようにすることで作成することができます。しかし、コンテナー内に可能な限り多くの列トラックを収めるために `auto-fill` を使用してレスポンシブグリッドを作成する場合、各項目の幅が不確かになります。そのため、正方形のアイテムを作成するための適切な高さを決定することが難しくなります。

アイテムにアスペクト比を設定することで、グリッドアイテムがレイアウトされたときに、各グリッドアイテムが幅と同じ高さになるように保証し、コンテナーの寸法に関係なく正方形のグリッドアイテムを作成します。

正方形のグリッドアイテムのこの例では、グリッドのトラックは自動サイズになり、アイテムのサイズを取ります。各アイテムの幅は少なくとも `95px` ですが、もっと広くすることもできます。幅に関係なく、各アイテムは正方形になり、高さは幅と一致するように `aspect-ratio` によって決定されます。

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(95px, 1fr));
}

.item {
  aspect-ratio: 1;
}
```

```css hidden
div {
  gap: 20px;
  font-size: 1.1;
}

div div {
  background-color: #ccc;
  aspect-ratio: 1;
  counter-increment: items;
}

div div::after {
  content: counter(items);
}

.item::after {
  /* コンテンツがある場合は番号を非表示にする */
  position: absolute;
  color: transparent;
}
```

```html hidden
<div class="grid">
  <div></div>
  <div></div>
  <div class="item">
    This text would overflow the parent, but we've set properties to prevent it
    from doing so.
  </div>
  <div></div>
  <div></div>
  <div></div>
  <div class="item">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
      alt="Pride flag" />
  </div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

グリッドアイテムのコンテンツが `aspect-ratio` で設定した推奨する高さを超えて大きくならないようにするには、{{cssxref("min-height")}} を `0` に、{{cssxref("overflow")}} を `visible` 以外の値に設定します。これは内在サイズのコンテンツに対して動作します。これは内在的に利用できる空間よりも大きなコンテンツを持つ場合、{{cssxref("max-height")}}（コンテンツによっては {{cssxref("max-width")}}）を `100%` に設定することで、そのコンテンツがグリッドアイテムよりも大きくならないように設定します。

```css
.item {
  min-height: 0;
  overflow: auto;
}

.item > * {
  max-height: 100%;
}
```

{{EmbedLiveSample("making_grid_cells_square", "100", "380")}}

## 関連情報

- [CSS ボックスサイズ指定](/ja/docs/Web/CSS/Guides/Box_sizing)モジュール
