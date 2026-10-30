---
title: リンクのスタイル設定
slug: Learn_web_development/Core/Text_styling/Styling_links
l10n:
  sourceCommit: 19c36d7464c349372e38f9b39bf3e7de73687397
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/Text_styling")}}

[リンク](/ja/docs/Learn_web_development/Core/Structuring_content/Creating_links)をスタイル設定するときは、擬似クラスを使用してリンク状態を効果的にスタイル設定する方法を理解することが重要です。 また、ナビゲーションメニューやタブなどの一般的なさまざまなインターフェイス機能で使用するためのリンクのスタイル設定方法を理解することが重要です。 この記事では、これらすべてのトピックを見ていきます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content"
          >HTML によるコンテンツの構造化</a
        >、および <a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS によるスタイル設定の基本</a>で学習）。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>デフォルトのリンクスタイルがウェブのユーザビリティにとって重要である理由を理解すること。これらは見慣れているもので、ユーザーがリンクを認識しやすくなります。</li>
          <li>リンクの状態のスタイル設定: <code>:hover</code>, <code>:focus</code>, <code>:visited</code>, <code>:active</code></li>
          <li>リンク状態がアクセシビリティとユーザビリティに必要である理由を理解すること。</li>
          <li>リンクにアイコンを加えること。</li>
          <li>リストとリンクを含むナビゲーションメニューを作成すること。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### リンク状態

最初に理解するべきことはリンク状態の概念です。すなわち、リンクが存在できる様々な状態のことです。様々な[擬似クラス](/ja/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)を使ってスタイル設定することができます。

- **リンク**: リンク先があるリンク（つまり、単なる名前付きアンカーではないもの）で、{{cssxref(":link")}} 擬似クラスを使用してスタイル設定します。
- **訪問済み**: 既に訪問済みの（ブラウザーの履歴に存在する）リンクで、{{cssxref(":visited")}} 擬似クラスを使用してスタイル設定します。
- **ホバー**: リンクにユーザーのマウスポインターが合わせられているときのリンクで、{{cssxref(":hover")}} 擬似クラスを使用してスタイル設定します。
- **フォーカス**: フォーカスしたときのリンク（例えば、 <kbd>Tab</kbd> キーなどを使用してキーボードユーザーによって移動してきたか、 {{domxref("HTMLElement.focus()")}} を使用してプログラムでフォーカスした）。これは {{cssxref(":focus")}} 擬似クラスを使用してスタイル設定します。
- **アクティブ**: アクティブ化している（例えばクリックされている）ときのリンクで、{{cssxref(":active")}} 擬似クラスを使用してスタイル設定します。

## デフォルトのスタイル

下記の例は、デフォルトではリンクがどのように見え、どのように動作するかを示しています。ただし、CSS はテキストをより目立たせるために拡大し、中央に配置しています。この例のデフォルトのスタイルの外観や動作を、このページ内の他のリンク（より多くの CSS スタイルが適用されているもの）と比較してみてください。デフォルトのリンクには、以下の特性があります。

- リンクには下線が引かれています。
- 未訪問のリンクは青になります。
- 訪問済みのリンクは紫になります。
- リンクにポインターを当てると、マウスポインターが小さな手のアイコンに変わります。
- フォーカスされたリンクには輪郭線が表示されます。このページのリンクはキーボードでタブキーを押すことでフォーカスできるはずです。
- アクティブなリンクは赤です。リンクをクリックする際に、マウスボタンを押し続けてみてください。

```html
<p><a href="#">単純なリンク</a></p>
```

```css
p {
  font-size: 2rem;
  text-align: center;
}
```

{{ EmbedLiveSample('Default_styles', '100%', 130) }}

> [!NOTE]
> このページのリンク例はすべて、埋め込まれたウィンドウの一番上にリンクしています。 空のフラグメント (`href="#"`) を使用しているのは、単純な例を作成し、それぞれの {{HTMLElement("iframe")}} に格納されているライブサンプルが壊れないようにするためです。

興味深いことに、これらのデフォルトのスタイルは、1990 年代半ばのブラウザーの初期の頃のものとほぼ同じです。 これは、ユーザーがこの動作を知っており、予期するようになったためです。リンクのスタイルが異なると、人々が混乱してしまうでしょう。 これは、リンクのスタイルを設定してはいけないという意味ではなく、予想される動作から大きく外れてはいけないということです。 少なくとも次のことをするべきです。

- 下線をリンクのみに使用し、他のものには使用しないようにします。リンクに下線を付けたくない場合は、少なくとも他の方法でリンクを目立たせてしてください。
- ホバー/フォーカスしたときに何らかの方法で反応するようにし、アクティブ化したときには少し異なる方法で反応するようにしてください。

デフォルトのスタイルは、次の CSS プロパティを使用してオフにしたり変更したりできます。

- {{cssxref("color")}} でテキストの色を設定します。
- {{cssxref("cursor")}} でマウスポインターのスタイルを設定します。よっぽどの理由がない限り、これはオフにしないでください。
- {{cssxref("outline")}} でテキストの輪郭線を設定します。輪郭線を境界線に似ていますが、唯一の違いは、境界線はボックス内の空間を占めるのに対し、輪郭線は空間を占めずに背景の上に置かれるだけという点です。輪郭線は背景の上に表示されます。輪郭線はアクセシビリティの観点から有益な補助機能であるため、フォーカスされているリンクを示す別のメソッドを追加しない限り、これを除去すべきではありません。

> [!NOTE]
> リンクのスタイルは上記のプロパティに限定されているわけではありません。好きなプロパティを自由に使用できます。

## リンクのスタイル設定

デフォルトの状態についてある程度詳しく見てきたところで、次に、代表的なリンクスタイルのセットを見ていきましょう。

まず始めに、空のルールセットを書き出します。

```css
a {
}

a:link {
}

a:visited {
}

a:focus {
}

a:hover {
}

a:active {
}
```

この順番が重要です。リンクのスタイルは互いに重ねて構築されるからです。例えば、最初のルールのスタイルは、それ以降のすべてのルールに適用され、リンクがアクティブになっているときは、ホバーもしています。これらを間違った順序で並べると、適切に機能しません。 順番を覚えておくには、**L**o**V**e **F**ears **HA**te のような語呂合わせを使用してみてください。

それでは、これを適切にスタイル設定するための情報を追加しましょう。

```css
body {
  width: 300px;
  margin: 0 auto;
  font-size: 1.2rem;
  font-family: sans-serif;
}

p {
  line-height: 1.4;
}

a {
  outline-color: transparent;
}

a:link {
  color: #6900ff;
}

a:visited {
  color: #a5c300;
}

a:focus {
  text-decoration: none;
  background: #bae498;
}

a:hover {
  text-decoration: none;
  background: #cdfeaa;
}

a:active {
  background: #6900ff;
  color: #cdfeaa;
}
```

CSS を適用するためのサンプル HTML も提供します。

```html-nolint
<p>
  <a href="#">Mozilla Firefox</a>、<a href="#">Google Chrome</a>、<a href="#">Microsoft Edge</a> など、利用できるブラウザーが複数あります。
</p>
```

2 つをまとめると、この結果が得られます。

{{ EmbedLiveSample('Styling_some_links', '100%', 200) }}

では、ここでは何が行われたのでしょうか？確かにこれはデフォルトのスタイル設定とは異なって見えますが、それでもユーザーが何が起こっているのか分かりやすい慣れ親しんだ使い勝手を提供しています。

- 最初の 2 つのルールは、この場ではさほど興味深いものではありません。
- 3 番目のルールは `a` セレクターを使ってデフォルトのテキストの下線とフォーカスの輪郭線（ブラウザーによって異なります）を取り除きます。
- 次に、`a:link` セレクターと `a:visited` セレクターを使用して、未訪問リンクと訪問済みリンクに 2 つのカラーバリエーションを設定して区別できるようにします。
- 次の 2 つのルールでは、`a:focus` と `a:hover` を使用して、フォーカスされたリンクとホバーされたリンクを異なる背景色に設定し、さらにリンクを目立たせるために下線を使用します。
- 最後に、`a:active` は、リンクがアクティブになっている間に反転色にするために使用され、重要なことが起こっていることが分かりやすくします。

## 自分のリンクをスタイル設定する

この課題では、空のルールセットに自分で宣言を追加して、リンクを本当にかっこよく見せてください。 想像力を駆使して、ワイルドに。上記の例と同じように、よりかっこよく機能的なものを思いつくことができると確信しています。

1. 下記コードブロック内の **Play** をクリックして、MDN Playground の例を編集してください。
2. リンクには、常に適用されるデフォルトのスタイルを設定してください。文字色だけにこだわる必要はありませんが、リンクであることが一目でわかるようにしてください。
3. 訪問済みリンクには、設定したデフォルトのリンクスタイルとは少し異なる色を適用してください。
4. リンクのフォーカス状態およびホバー状態には、他のリンクよりも目立つように、明確なスタイルを適用してください。同時に、リンクにフォーカスが当たったり、マウスオーバーしたりした際のデフォルトの下線を除去してください。
5. アクティブ状態に、また別のスタイルを適用してください。

間違えてしまった場合は、MDN Playground の「リセット」ボタンをクリックすると、作業内容をリセットできます。どうしても解決できない場合は、出力例の下記にある解答を参照してください。

```html-nolint live-sample___link_styling
<p>
  <a href="https://www.mozilla.org/firefox/new/" target="_blank">Mozilla Firefox</a>、
  <a href="https://www.google.co.uk/chrome/" target="_blank">Google Chrome</a>、
  <a href="https://www.microsoft.com/edge" target="_blank">Microsoft Edge</a> など、利用できるブラウザーが複数あります。
</p>
```

```css-nolint hidden live-sample___link_styling
p {
  font-size: 1.2rem;
  font-family: sans-serif;
  line-height: 1.4;
}

```

```css live-sample___link_styling
a {
}

a:visited {
}

a:focus,
a:hover {
}

a:active {
}
```

{{ EmbedLiveSample('link_styling', "100%", 100) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した CSS は、次のようになるはずです。

```css
a {
  outline-color: transparent;
  padding: 2px 1px 0;
  color: #265301;
}

a:visited {
  color: #437a16;
}

a:hover,
a:focus {
  background: #bae498;
  text-decoration: none;
}

a:active {
  background: #265301;
  color: #cdfeaa;
}
```

</details>

## リンクにアイコンを含める

リンク先にどのようなコンテンツがあるかを示すために、リンクにアイコンを付加するのは一般的な手法です。ここでは、外部リンク（他のサイトへつながるリンク）にアイコンを追加する基本的な例を見てみましょう。外部リンクのアイコンは、通常、枠の外を指す矢印が使われます。この例では、[icons8.com の外部リンクアイコン](https://icons8.com/icon/741/external-link)を使用します。

まず、スタイル設定する簡単な HTML です。

```html-nolint
<p>
  天気に関する詳しい情報は、<a href="#">天気のページ</a>に行くか、<a href="https://ja.wikipedia.org/">ウィキペディアの天気</a>を見るか、<a href="https://www.nationalgeographic.org/topics/resource-library-weather/">ナショナルジオグラフィックの天気</a>を調べてみてください。
</p>
```

次に、目的の効果を実現するためのいくらかの CSS です。

```css
body {
  width: 300px;
  margin: 0 auto;
  font-family: sans-serif;
}

a[href^="http"]::after {
  content: "";
  display: inline-block;
  width: 0.8em;
  height: 0.8em;
  margin-left: 0.25em;

  background-size: 100%;
  background-image: url("external-link-52.png");
}
```

{{ EmbedLiveSample('Including_icons_on_links', '100%', 150) }}

それでは、ここで何が起こっているのでしょうか？ CSS の大部分は、前回の例と同じなので省略します。しかし、最後のルールは興味深いものです。ここでは、{{cssxref("::after")}} という擬似要素セレクターを使用しています。`0.8em x 0.8em` の擬似要素は、アンカーテキストの後にインラインブロックとしてレンダリングされ、その {{cssxref("background-image")}} プロパティで参照されているアイコンが、擬似要素の背景に配置されます。同時に、アイコンとその直前の単語の間に空間を作成するために、{{cssxref("margin-left")}} も指定しています。

ここでは[相対的な単位](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units#相対長の単位)である `em` を使用しています。アイコンのサイズはアンカーのテキストサイズに比例します。アンカーのテキストサイズが変更された場合、アイコンのサイズもそれに応じて調整されます。

最後んび。どうやって外部リンクだけを選択したのでしょうか？ [HTML のリンク](/ja/docs/Learn_web_development/Core/Structuring_content/Creating_links)を適切に記述しているのなら、絶対 URL を使用しているのは外部リンクだけであるはずです。自分のサイトの他の部分にリンクするには（最初のリンクのように）相対リンクを使用したほうが効率的です。"http" というテキストは（2 番目と 3 番目のリンクのように）外部リンクにのみ現れるので、これを[属性セレクター](/ja/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)で選択できます。`a[href^="http"]` は {{htmlelement("a")}} 要素のうち、[`href`](/ja/docs/Web/HTML/Reference/Elements/a#href) 属性が "http" で始まるものに限り選択します。

以上です。上の課題の節を復習して、この新しいテクニックを試してみてください！

> [!NOTE]
> [背景](/ja/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)や[レスポンシブウェブデザイン](/ja/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)にまだ慣れていなくても心配しないでください。 これらは他の場所で説明します。

## リンクをボタンとしてスタイル設定

この記事でこれまで説明してきたツールは、他にも使用することができます。例えば、ホバーのような状態は、リンクだけでなく、多くの異なる要素をスタイル設定するために使用することができます。段落やリストアイテムなどのホバー状態をスタイル設定することができます。

また、リンクはボタンと同様に動作するようにスタイル設定されることがよくあります。ウェブサイトのナビゲーションメニューは、一連のリンクとしてマークアップすることができ、これはユーザーにサイトの他の一部へのアクセスを提供する一連のコントロールボタンやタブのように見えるようにスタイル設定することができます。それでは、その方法を探ってみましょう。

まず、いくらかの HTML です。

```html
<nav class="container">
  <a href="#">Home</a>
  <a href="#">Pizza</a>
  <a href="#">Music</a>
  <a href="#">Wombats</a>
  <a href="#">Finland</a>
</nav>
```

そして CSS です。

```css
body,
html {
  margin: 0;
  font-family: sans-serif;
}

.container {
  display: flex;
  gap: 0.625%;
}

a {
  flex: 1;
  text-decoration: none;
  outline-color: transparent;
  text-align: center;
  line-height: 3;
  color: black;
}

a:link,
a:visited,
a:focus {
  background: palegoldenrod;
  color: black;
}

a:hover {
  background: orange;
}

a:active {
  background: darkred;
  color: white;
}
```

これにより、次のような結果が得られます。

{{ EmbedLiveSample('Styling_links_as_buttons', '100%', 120) }}

HTML では、{{HTMLElement("nav")}} 要素に `"container"` クラスをつけたものを定義しています。`<nav>` には複数のリンクを含んでいます。

CSS には、コンテナーとそこに含まれるリンクのスタイル設定が記述されています。

- 2 番目のルールは次のように指定しています。
  - コンテナーは[フレックスボックス](/ja/docs/Learn_web_development/Core/CSS_layout/Flexbox)です。その中に含まれるアイテムは、この場合はリンクが、フレックスアイテムになります。
  - フレックスアイテム間の溝は、コンテナーの幅の `0.625%` です。
- 3 番目のルールはリンクをスタイル設定しています。
  - 最初の宣言である `flex: 1` は、アイテムの幅が調整されることを表しますので、コンテナーの利用可能な空間をすべて使用します。
  - 次に、デフォルトの {{cssxref("text-decoration")}} および {{cssxref("outline")}} を無効にしています。外見を邪魔されたくありませんので。
  - 最後の 3 つの宣言は、それぞれのリンク内のテキストを中央に配置すること、{{cssxref("line-height")}} を 3 に設定してボタンに高さを与えること（これはテキストを上下中央に配置するという利点もあります）、そしてテキストの色を黒に設定することです。

## まとめ

この記事が、今のところは、リンクについて知っておく必要があるすべての情報を提供してくれることを願っています。 テキストのスタイル設定モジュールの最後の記事では、ウェブサイトでのカスタムウェブフォントの使用方法について詳しく説明しています。

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/Text_styling")}}
