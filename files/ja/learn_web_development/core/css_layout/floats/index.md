---
title: 浮動ボックス
slug: Learn_web_development/Core/CSS_layout/Floats
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout")}}

元々は、テキストブロック内の画像を浮動させるためのものだった {{cssxref("float")}} プロパティは、ウェブページで段組みのレイアウトを作成するために最もよく使用されるツールの 1 つになりました。フレックスボックスやグリッドの出現により、この記事で説明するように、これで元の目的に戻っています。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content"
          >HTML によるコンテンツの構造化</a
        >、
        <a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS によるスタイル設定の基本</a>、
        <a href="/ja/docs/Learn_web_development/Core/Text_styling/Fundamentals">基本的なテキストとフォントのスタイル設定</a>、
        <a href="/ja/docs/Learn_web_development/Core/CSS_layout/Introduction">CSS レイアウトの基本概念</a>の基礎知識。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>浮動ボックスの目的を理解すること。テキストの段組み内に画像を浮動させるため、他にもドロップキャップや浮動インセット情報ボックスのようなテクニックがある。</li>
          <li>浮動ボックスはかつては段組みのレイアウトに使用されていましたが、現在ではより有益なツールが利用できるようになったため、その用途は適さなくなったこと。</li>
          <li><code>浮動ボックス</code> プロパティを使用して浮動ボックスを作成すること。</li>
          <li><code>clear</code> や <code>display: flow-root</code> 値を使用して浮動を解除すること。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 浮動ボックスの背景

{{cssxref("float")}} プロパティは、ウェブ開発者がテキストの段の中に画像が浮動し、テキストがその左または右に回り込むようなレイアウトを実装するために導入されました。新聞のレイアウトでよく見られるようなものです。

しかしウェブ開発者はすぐに画像だけでなく何でも浮動させることができることに気づいたので、浮動ボックスの使用は広がりました。例えば、[ドロップキャップ](https://css-tricks.com/snippets/css/drop-caps/)のような楽しいレイアウト効果です。

浮動ボックスは一般に、互いに並ぶように浮動する、段組みの情報を含むウェブサイト全体のレイアウトを作成するために使用されてきました（既定のふるまいでは、列はソースに表れる順序と同じ順序で上下に配置されます）。 より新しくより良いレイアウトテクニックが利用可能なので、この用途で浮動ボックスを使うことは過去のテクニックとみなされるべきです。

この記事では、浮動ボックスの正しい使い方に集中します。

## 簡単な浮動ボックスの例

浮動ボックスの使い方を探りましょう。要素の周りにテキストのブロックを浮かべることを含む本当に簡単な例から始めましょう。 コンピューター上に新しい `index.html` ファイルを作成し、[簡単な HTML テンプレート](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html)を使ってそれを埋め、適切な場所に以下のコードを挿入することで、追いかけていくことができます。節の最後では、最終的なコードがどのようになるべきかの実例を見ることができます。

まず、簡単な HTML から始めましょう。 HTML の `body` に次のコードを追加し、それまでの内部にあるものはすべて削除します。

```html
<h1>浮動ボックスの例</h1>

<div class="box">浮動ボックス</div>

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
<h1>浮動ボックスの例</h1>

<div class="box">浮動ボックス</div>

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

浮動ボックスがどのように機能するかを考えてみましょう。 `float` が設定されている要素（この場合は {{htmlelement("div")}} 要素）は、文書の通常のレイアウトフローから除かれ、その親コンテナー（この場合は {{htmlelement("body")}}）の左側に固定されます。通常のレイアウトフローで浮動した要素の下に来るコンテンツは、これで浮動ボックスの周りを回り込み、浮動した要素の上まで右側の空間を埋めます。そこで、コンテンツは停止します。

コンテンツを右に浮動させると、まったく同じ効果が得られますが、逆になります。 つまり、浮動した要素は右に固定され、コンテンツはその左側を回り込みます。 `float` の値を `right` に変更し、最後のルールセットで {{cssxref("margin-right")}} を {{cssxref("margin-left")}} に置き換えて、結果がどうなるかを確認してください。

### 浮動ボックスを視覚化

テキストを遠ざけるために浮動ボックスにマージン（margin、余白）を追加することはできますが、テキストを浮動ボックスから遠ざけるためにテキストにマージンを追加することはできません。 これは、浮動ボックスは通常フローから外され、後続アイテムのボックスが実際には浮動ボックスの背後にあるためです。例にいくつかの変更を加えることによってこれを実証することができます。

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
<h1>浮動ボックスの例</h1>

<div class="box">浮動ボックス</div>

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

## 浮動ボックスの解除

浮動ボックスは通常フローから除かれ、他の要素がその横に表示されることを見てきました。したがって、続く要素が上方向に移動するのを止めたい場合は、それを解除する必要があります。これは {{cssxref("clear")}} プロパティによって実現できます。

前の例の HTML では、浮動しているアイテムの下の 2 番目の段落に `cleared` のクラスを追加します。 次に、 CSS に以下を追加してください。

```css
.cleared {
  clear: left;
}
```

```html hidden
<h1>浮動ボックスの例</h1>

<div class="box">浮動ボックス</div>

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

続く段落では浮動ボックスがクリアされ、並んで現れなくなったことがわかります。 `clear` プロパティは次の値を受け入れます。

- `left`: 左に浮動しているアイテムをクリアします。
- `right`: 右に浮動しているアイテムをクリアします。
- `both`: 左や右に浮動しているアイテムをどちらもクリアします。

## 浮動ボックスを回り込むボックスのクリア

これで、浮動ボックスに続く何かをクリアする方法はお分かりいただけたと思いますが、背の高い浮動ボックスと短い段落があり、両方の要素を囲むボックスがある場合、どうなるかを見てみましょう。

### 問題

文書を変更して、最初の段落と浮動ボックスを、{{htmlelement("div")}} に `wrapper` クラスがついた要素で囲むようにします。

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

CSS で、`.wrapper` クラスに次のルールを追加してからページを再読み込みします。

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

段落に背景色を付けた例と同じように、背景色は浮動ボックスの後ろに来ることがわかります。

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

繰り返しになりますが、これは浮動ボックスが通常のフローから外れているためです。浮動ボックスと、浮動ボックスに回り込む最初の段落のテキストを一緒に囲めば、その後のコンテンツはボックスから外されると思うかもしれません。しかし、上記のようにそうではありません。

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
<h1>浮動ボックスの例</h1>
<div class="wrapper">
  <div class="box">浮動ボックス</div>

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

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト: 浮動ボックス](/ja/docs/Learn_web_development/Core/CSS_layout/Floats_skills)を見てください。

## まとめ

浮動ボックスについて知っておくべきことはそれだけです。次に、位置指定について詳しく見ていきましょう。

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout")}}
