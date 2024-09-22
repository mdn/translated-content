---
title: 浮動ボックス
slug: Learn/CSS/CSS_layout/Floats
l10n:
  sourceCommit: afaf3aeeffa8408cf0a8a46c3d8fb0d347aad9f5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout")}}

元々は、テキストブロック内の画像を浮動させるためのものだった {{cssxref("float")}} プロパティは、ウェブページで複数の列のレイアウトを作成するために最もよく使用されるツールの 1 つになりました。フレックスボックスとグリッドの出現により、この記事で説明するように、これで元の目的に戻っています。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        HTML の基本（<a href="/ja/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 入門</a
        >で学んでください）、および CSS の動作の仕組みの考え方（<a href="/ja/docs/Learn/CSS/First_steps">CSS 入門</a>で学んでください）。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        ウェブページ上に浮動ボックスの特徴を作成する方法と、 `clear` プロパティおよびその他の浮動状態のクリア方法の使い方を習得すること。
      </td>
    </tr>
  </tbody>
</table>

## 浮動ボックスの背景

{{cssxref("float")}} プロパティは、ウェブ開発者がテキストの段の中に画像が浮動し、テキストがその左または右に回り込むようなレイアウトを実装するために導入されました。新聞のレイアウトでよく見られるようなものです。

しかしウェブ開発者はすぐに画像だけでなく何でも浮動させることができることに気づいたので、浮動ボックスの使用は広がりました。例えば、[ドロップキャップ](https://css-tricks.com/snippets/css/drop-caps/)のような楽しいレイアウト効果です。

浮動ボックスは一般に、互いに並ぶように浮動する複数列の情報を含むウェブサイト全体のレイアウトを作成するために使用されてきました（既定のふるまいでは、列はソースに表れる順序と同じ順序で上下に配置されます）。 より新しくより良いレイアウトテクニックが利用可能なので、このように浮動ボックスを使うことは[過去のテクニック](/ja/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)とみなされるべきです。

この記事では、浮動ボックスの正しい使い方に集中します。

## 簡単な浮動ボックスの例

浮動ボックスの使い方を探りましょう。要素の周りにテキストのブロックを浮かべることを含む本当に簡単な例から始めましょう。 コンピューター上に新しい `index.html` ファイルを作成し、[簡単な HTML テンプレート](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html)を使ってそれを埋め、適切な場所に以下のコードを挿入することで、追いかけていくことができます。節の最後では、最終的なコードがどのようになるべきかの実例を見ることができます。

まず、簡単な HTML から始めましょう。 HTML の `body` に次のコードを追加し、それまでの内部にあるものはすべて削除します。

```html
<h1>Float example</h1>

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

これで、以下の CSS を HTML に適用します。（{{htmlelement("style")}} 要素を使用するか、 {{htmlelement("link")}} を使用して別個の `.css` ファイルでするかです。任せます。）

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
  background-color: rgb(207 232 220);
  padding: 1em;
}
```

保存して更新すると、期待通りのものが表示されます。ボックスはテキストの上にあり、通常フローになっています。

### ボックスを浮動させる

ボックスを浮動させるには、次のように {{cssxref("float")}} と {{cssxref("margin-right")}} プロパティを `.box` ルールに追加します。

```html hidden
<h1>Float example</h1>

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

```css
.box {
  float: left;
  margin-right: 15px;
  width: 150px;
  height: 100px;
  border-radius: 5px;
  background-color: rgb(207 232 220);
  padding: 1em;
}
```

これで保存して更新すると、次のように表示されます。

{{EmbedLiveSample('Floating_the_box', '100%', 500)}}

浮動ボックスがどのように機能するかを考えてみましょう。 `float` が設定されている要素（この場合は {{htmlelement("div")}} 要素）は、文書の通常のレイアウトフローから除かれ、その親コンテナー（この場合は {{htmlelement("body")}}）の左側に固定されます。通常のレイアウトフローで浮動した要素の下に来るコンテンツは、これで浮動要素の周りを回り込み、浮動した要素の上まで右側の空間を埋めます。そこで、コンテンツは停止します。

コンテンツを右に浮動させると、まったく同じ効果が得られますが、逆になります。 つまり、浮動した要素は右に固定され、コンテンツはその左側を回り込みます。 `float` の値を `right` に変更し、最後のルールセットで {{cssxref("margin-right")}} を {{cssxref("margin-left")}} に置き換えて、結果がどうなるかを確認してください。

### 浮動ブロックを視覚化

テキストを遠ざけるために浮動ボックスにマージン（margin、余白）を追加することはできますが、テキストを浮動ボックスから遠ざけるためにテキストにマージンを追加することはできません。 これは、浮動要素は通常フローから外され、後続アイテムのボックスが実際には浮動ボックスの背後にあるためです。例にいくつかの変更を加えることによってこれを実証することができます。

テキストの最初の段落、つまり浮動ボックスの直後の段落に `special` のクラスを追加してから、CSS に次のルールを追加します。 これらは続く段落に背景色を設定します。

```css
.special {
  background-color: rgb(148 255 172);
  padding: 10px;
  color: purple;
}
```

効果を見やすくするために、浮動ボックスの `margin-right` を `margin` に変更すると、浮動ボックスの全周にマージンができます。 以下の例のように、浮動ボックスの真下にある段落の背景を見ることができます。

```html hidden
<h1>Float example</h1>

<div class="box">Float</div>

<p class="special">
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
  background-color: rgb(207 232 220);
  padding: 1em;
}
```

{{EmbedLiveSample('Visualizing_the_float', '100%', 500)}}

続く要素の[行ボックス](/ja/docs/Web/CSS/Visual_formatting_model#line_boxes)が短くなっているので、テキストは浮動ボックスを回り込みますが、浮動ボックスは通常フローから除かれるため、段落の周りのボックスは全幅のままになります。

## 浮動ボックスのクリア

浮動ボックスは通常フローから除かれ、他の要素がその横に表示されることを見てきました。したがって、続く要素が上方向に移動するのを止めたい場合は、それをクリアする必要があります。これは {{cssxref("clear")}} プロパティによって実現できます。

前の例の HTML では、浮動しているアイテムの下の 2 番目の段落に `cleared` のクラスを追加します。 次に、 CSS に以下を追加してください。

```css
.cleared {
  clear: left;
}
```

```html hidden
<h1>Float example</h1>

<div class="box">Float</div>

<p class="special">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet.
</p>

<p class="cleared">
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
  background-color: rgb(207 232 220);
  padding: 1em;
}

.special {
  background-color: rgb(148 255 172);
  padding: 10px;
  color: purple;
}

.cleared {
  clear: left;
}
```

{{EmbedLiveSample('Clearing_floats', '100%', 600)}}

続く段落では浮動要素がクリアされ、並んで現れなくなったことがわかります。 `clear` プロパティは次の値を受け入れます。

- `left`: 左に浮動しているアイテムをクリアします。
- `right`: 右に浮動しているアイテムをクリアします。
- `both`: 左や右に浮動しているアイテムをどちらもクリアします。

## 浮動ボックスを回り込むボックスのクリア

これで、浮動要素に続く何かをクリアする方法はお分かりいただけたと思いますが、背の高い浮動要素と短い段落があり、両方の要素を囲むボックスがある場合、どうなるかを見てみましょう。

### 問題

文書を変更して、最初の段落と浮動要素を、{{htmlelement("div")}} に `wrapper` クラスがついた要素で囲むようにします。

```html live-sample___the_problem
<div class="wrapper">
  <div class="box">Float1</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
</div>
```

CSS で、`.wrapper` クラスに次のルールを追加してからページをリロードします。

```css live-sample___the_problem
.wrapper {
  background-color: rgb(148 255 172);
  padding: 10px;
  color: purple;
}
```

加えて、元の `.cleared` クラスを削除します。

```css
.cleared {
  clear: left;
}
```

段落に背景色を付けた例と同じように、背景色は浮動要素の後ろに来ることがわかります。

```html hidden live-sample___the_problem
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

```css hidden live-sample___the_problem
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
  background-color: rgb(207 232 220);
  padding: 1em;
  color: black;
}
```

{{EmbedLiveSample('the_problem', '100%', 600)}}

繰り返しになりますが、これは浮動要素が通常のフローから外れているためです。浮動ボックスと、浮動ボックスに回り込む最初の段落のテキストを一緒に囲めば、その後のコンテンツはボックスから外されると思うかもしれません。しかし、上記のようにそうではありません。これに対処するには、[ブロック整形コンテキスト](/ja/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) を作成すするように {{cssxref("display")}} プロパティを使用するのが標準的な方法です。

### display: flow-root

この問題を解決するには、値 `flow-root` を `display` プロパティに使用します。これはハックを用いずに BFC を作成するためだけに存在するもので、使用することで意図しない結果を招くことはありません。

```css
.wrapper {
  background-color: rgb(148 255 172);
  padding: 10px;
  color: purple;
  display: flow-root;
}
```

```html hidden
<h1>Float example</h1>
<div class="wrapper">
  <div class="box">Float</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
</div>
<p class="cleared">
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
  background-color: rgb(207 232 220);
  padding: 1em;
  color: black;
}
```

{{EmbedLiveSample('display_flow-root', '100%', 600)}}

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト: 浮動ブロック](/ja/docs/Learn/CSS/CSS_layout/Floats_skills)を見てください。

## まとめ

あなたは今、現代のウェブ開発で浮動ボックスについて知っておくべきことがすべてわかっています。 過去のレイアウト方法の使用方法については、[過去のレイアウト方法](/ja/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)に関する記事を参照してください。 古いプロジェクトで作業している場合に便利です。

{{PreviousMenuNext("Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout")}}
