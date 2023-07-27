---
title: フロート
slug: Learn/CSS/CSS_layout/Floats
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout")}}

{{cssxref("float")}} プロパティは、もともとはテキストブロック内の浮動画像のためのものでしたが、ウェブページ上に複数列レイアウトを作成するために最も一般的に使われるツールの 1 つになりました。 この記事で説明しているように、フレックスボックスとグリッドの出現により、今は当初の目的に戻っています。

| 前提知識: | HTML の基本（[HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML)を学ぶ）、および CSS の機能の考え方（[CSS 入門](/ja/docs/Learn/CSS/Introduction_to_CSS)を学ぶ）。 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 学習目標: | ウェブページ上に浮動の特長を作成する方法と、`clear` プロパティおよびその他のフロートのクリア方法の使い方を習得します。                                              |

## フロートの背景

画像の左や右を包み込むテキストにより、テキストの列内に浮かぶ画像を含む単純なレイアウトをウェブ開発者が実装できるようにするために {{cssxref("float")}} プロパティが導入されました。 あなたが新聞のレイアウトで得るかもしれない種類のものです。

しかしウェブ開発者はすぐに画像だけでなく何でも浮かべることができることに気づいたので、フロートの使用は広がりました。 例えば、[drop-caps](https://css-tricks.com/snippets/css/drop-caps/) のような楽しいレイアウト効果です。

フロートは一般に、互いに並ぶように浮動する複数列の情報を含むウェブサイト全体のレイアウトを作成するために使用されてきました（デフォルトのふるまいでは、列はソースに表れる順序と同じ順序で上下に配置されます）。 より新しくより良いレイアウトテクニックが利用可能なので、このようにフロートを使うことは[過去のテクニック](/ja/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)とみなされるべきです。

この記事では、フロートの正しい使い方に集中します。

## 簡単なフロートの例

フロートの使い方を探りましょう。 要素の周りにテキストのブロックを浮かべることを含む本当に簡単な例から始めましょう。 コンピュータ上に新しい `index.html` ファイルを作成し、[簡単な HTML テンプレート](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html)を使ってそれを埋め、適切な場所に以下のコードを挿入することで、フォローすることができます。 セクションの一番下では、最終的なコードがどのようになるべきかの実例を見ることができます。

まず、簡単な HTML から始めましょう。 HTML の `body` に次のコードを追加し、それまでの内部にあるものはすべて削除します。

```html
<h1>Simple float example</h1>

<div class="box">Float</div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet.
</p>

<p>
  Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
  orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
  ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
  ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
  ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et
  a urna. Ut id ornare felis, eget fermentum sapien.
</p>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>
```

次の CSS を HTML に適用します（{{htmlelement("style")}} 要素を使用するか、{{htmlelement("link")}} を使用して別の `.css` ファイルを作成するか、選択します）。

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.box {
  width: 150px;
  height: 100px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

保存してリフレッシュすると予想していたものとよく似たものが表示されます — `box` が通常フローでテキストの上側に表示されます。 テキストをそれの周囲に浮かべるには、次のように `.box` 規則に {{cssxref("float")}} と {{cssxref("margin-right")}} プロパティを追加します。

```css
.box {
  float: left;
  margin-right: 15px;
  width: 150px;
  height: 100px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

保存してリフレッシュすると、次のようになります。

```html hidden
<h1>Simple float example</h1>

<div class="box">Float</div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate.
</p>

<p>
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
</p>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.box {
  float: left;
  margin-right: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

{{ EmbedLiveSample('Float_1', '100%', 500) }}

フロートがどのように機能するかを考えてみましょう。 `float` が設定されている要素（この場合は {{htmlelement("div")}} 要素）は、文書の通常のレイアウトフローから除かれ、その親コンテナ（この場合は {{htmlelement("body")}}）の左側に固定されます。 通常のレイアウトフローで浮動要素の下側に来るコンテンツは、それを包み込み、浮動要素の最上部まで、その右側のスペースを埋めます。 そこで、それは止まるでしょう。

コンテンツを右に浮かべるとまったく同じ効果が得られますが、逆になります。 つまり、浮動要素は右に固定され、コンテンツはその左側を包み込みます。 `float` の値を `right` に変更し、最後のルールセットで {{cssxref("margin-right")}} を {{cssxref("margin-left")}} に置き換えて、結果がどうなるかを確認してください。

テキストを押しのけるためにフロートにマージン（margin、余白）を追加することはできますが、テキストをフロートから遠ざけるためにテキストにマージンを追加することはできません。 これは、浮動要素は通常フローから外され、後続項目のボックスが実際にはフロートの背後にあるためです。 例にいくつかの変更を加えることによってこれを実証することができます。

テキストの最初の段落、つまり浮動ボックスの直後の段落に `special` のクラスを追加してから、CSS に次の規則を追加します。 これらは後続段落に背景色を与えます。

```css
.special {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
}
```

効果を見やすくするために、フロートの `margin-right` を `margin` に変更すると、フロートの全周にマージンができます。 以下の例のように、浮動ボックスの真下にある段落の背景を見ることができます。

```html hidden
<h1>Simple float example</h1>

<div class="box">Float</div>

<p class="special">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate.
</p>

<p>
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
</p>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}

.special {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
}
```

{{ EmbedLiveSample('Float_2', '100%', 500) }}

後続要素の[行ボックス](/ja/docs/Web/CSS/Visual_formatting_model#Line_boxes)は短くなっているのでテキストはフロートの周りを囲みますが、フロートは通常フローから除かれるため、段落の周りのボックスは依然として全幅のままです。

## フロートのクリア

フロートは通常フローから除かれ、他の要素がその横に表示されることを見てきました。 したがって、後続要素の上方向への移動を止めたい場合は、それをクリアする必要があります; これは {{cssxref("clear")}} プロパティによって達成されます。

前の例の HTML では、浮動項目の下の 2 番目の段落に `cleared` のクラスを追加します。 次に、CSS に以下を追加してください。

```css
.cleared {
  clear: left;
}
```

```html hidden
<h1>Simple float example</h1>

<div class="box">Float</div>

<p class="special">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate.
</p>

<p class="cleared">
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
</p>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}

.special {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
}

.cleared {
  clear: left;
}
```

{{ EmbedLiveSample('Float_3', '100%', 600) }}

後続段落で、浮動要素がクリアされ、並んで現れなくなったことがわかります。 `clear` プロパティは次の値を受け入れます。

- `left`: 左に浮いている項目をクリアします。
- `right`: 右に浮いている項目をクリアします。
- `both`: 左や右に浮いている項目をどちらもクリアします。

## フロートを包み込むボックスのクリア

浮動要素に後続するものをクリアする方法はわかりましたが、背の高いフロートと短い段落があり、その両方の要素の周りをボックスが包む場合はどうなるか見てみましょう。 最初の段落と浮動ボックスが `wrapper` のクラスの {{htmlelement("div")}} に囲まれるように文書を変更します。

```html
<div class="wrapper">
  <div class="box">Float</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate.
  </p>
</div>
```

CSS で、`.wrapper` クラスに次の規則を追加してからページをリロードします。

```css
.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
}
```

加えて、元の `.cleared` クラスを削除します。

```css
.cleared {
  clear: left;
}
```

段落に背景色を与えた例と同じように、背景色がフロートの背後にあることがわかります。

```html hidden
<h1>Simple float example</h1>
<div class="wrapper">
  <div class="box">Float</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate.
  </p>
</div>

<p class="cleared">
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
</p>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

{{ EmbedLiveSample('Float_4', '100%', 600) }}

前と同じように、これもまた、フロートが通常フローから外されたためです。 コンテンツが短い場合でも、ボックスの底に浮動項目とラッピングコンテンツを包む必要がある場合には、後続要素のクリアでは、このボックスのクリアの問題を解決することはできません。 これに対処する方法は 3 つあります。 そのうちの 2 つはすべてのブラウザーで機能します — それでもやや厄介です — そしてこの状況に適切に対処する 3 番目の新しい方法です。

### clearfix ハック

この状況に伝統的に対処してきた方法は、「clearfix ハック」として知られているものを使うことです。 これはフロートとラッピングコンテンツを含むボックスの後に生成したコンテンツを挿入し、両方をクリアするように設定することを含みます。

例に次の CSS を追加します。

```css
.wrapper::after {
  content: "";
  clear: both;
  display: block;
}
```

ページをリロードすると、ボックスはクリアされます。 これは、項目の下に `<div>` などの HTML 要素を追加して `clear: both` に設定した場合と基本的に同じです。

```html hidden
<h1>Simple float example</h1>
<div class="wrapper">
  <div class="box">Float</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate.
  </p>
</div>
<p class="cleared">
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
</p>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}

.wrapper::after {
  content: "";
  clear: both;
  display: block;
}
```

{{ EmbedLiveSample('Float_5', '100%', 600) }}

### オーバーフローを使用する

別の方法は、`wrapper` の {{cssxref("overflow")}} プロパティを `visible` 以外の値に設定することです。

前のセクションで追加した clearfix の CSS を削除し、代わりに `wrapper` の規則に `overflow: auto` を追加してください。 前と同じように、ボックスはクリアされます。

```css
.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
  overflow: auto;
}
```

```html hidden
<h1>Simple float example</h1>
<div class="wrapper">
  <div class="box">Float</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate.
  </p>
</div>
<p class="cleared">
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
</p>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
  overflow: auto;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

{{ EmbedLiveSample('Float_6', '100%', 600) }}

この例は、[ブロック整形コンテキスト](/ja/docs/Web/Guide/CSS/Block_formatting_context)（**block formatting context**、BFC）と呼ばれるものを作成することによって機能します。 これはページの中にあるミニレイアウトのようなもので、その中にすべてが含まれているので、浮動要素は BFC の中に含まれ、背景は両方の項目の背後にあります。 これは通常はうまくいきますが、場合によっては、オーバーフローを使用することによる意図しない結果が原因で、不要なスクロールバーや切り取られた影が見つかることがあります。

### display: flow-root

この問題を解決する現代的な方法は、`display` プロパティの `flow-root` という値を使うことです。 これはハックを使用せずに BFC を作成するためだけに存在します — それを使用しても意図しない結果が生じることはありません。 `.wrapper` 規則から `overflow: auto` を削除し、`display: flow-root` を追加してください。 これを[サポートするブラウザー](/ja/docs/Web/CSS/display#Browser_compatibility)を持っていると仮定すると、ボックスはクリアされます。

```css
.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
  display: flow-root;
}
```

```html hidden
<h1>Simple float example</h1>
<div class="wrapper">
  <div class="box">Float</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate.
  </p>
</div>
<p class="cleared">
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
</p>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
  display: flow-root;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

{{ EmbedLiveSample('Float_7', '100%', 600) }}

## スキルをテストしましょう!

この記事の最後に到達しましたが、最も大事な情報を覚えていますか？次に移動する前に、この情報を保持しているか検証するテストがあります — [Test your skills: Floats](/ja/docs/Learn/CSS/CSS_layout/Floats_skills) を見てください。

## まとめ

あなたは今、現代のウェブ開発でフロートについて知っておくべきことがすべてわかっています。 過去のレイアウト方法の使用方法については、[過去のレイアウト方法](/ja/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)に関する記事を参照してください。 古いプロジェクトで作業している場合に便利です。

{{PreviousMenuNext("Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout")}}
