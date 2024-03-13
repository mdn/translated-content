---
title: リンクの装飾
slug: Learn/CSS/Styling_text/Styling_links
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}

[リンク](/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)を装飾するときは、擬似クラスを使用してリンク状態を効果的に装飾する方法と、ナビゲーションメニューやタブなどの一般的なさまざまなインターフェイス機能で使用するためのリンクの装飾方法を理解することが重要です。 この記事では、これらすべてのトピックを見ていきます。

| 前提知識: | 基本的なコンピューターリテラシー、HTML の基本（[HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML)を学ぶ）、CSS の基本（[CSS 入門](/ja/docs/Learn/CSS/Introduction_to_CSS)を学ぶ）、[CSS のテキストとフォントの基礎](/ja/docs/Learn/CSS/Styling_text/Fundamentals)。 |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 学習目標: | リンク状態を装飾する方法と、ナビゲーションメニューのような一般的な UI 機能でリンクを効果的に使用する方法を学ぶこと。                                                                                                                                                   |

## いくつかのリンクを見てみましょう

[ハイパーリンクの作成](/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)のベストプラクティスに従って、HTML がリンクをどのように実装するかを調べました。 この記事では、この知識を基にして、リンクの装飾のためのベストプラクティスを示します。

### リンク状態

最初に理解するべきことはリンク状態の概念です。リンクが存在できる様々な状態のことで、それらは異なる[疑似クラス](/ja/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements)を使って装飾することができます。

- **リンク（未訪問）**: リンクが他のどの状態にもない場合に、リンクが属するデフォルトの状態。 これは、{{cssxref(":link")}} 疑似クラスを使用して特に装飾できます。
- **訪問済み**: 既に訪問済み（ブラウザーの履歴に存在する）のリンクで、{{cssxref(":visited")}} 擬似クラスを使用して装飾します。
- **ホバー**: リンクにユーザーのマウスポインタが合わせられているときのリンクで、{{cssxref(":hover")}} 疑似クラスを使用して装飾します。
- **フォーカス**: フォーカスしたときのリンク（例えば、

  <kbd>Tab</kbd>

  &#x20;キーなどを使用してキーボードユーザーによって移動してきたか、{{domxref("HTMLElement.focus()")}} を使用してプログラムでフォーカスした） — これは {{cssxref(":focus")}} 擬似クラスを使用して装飾します。

- **アクティブ**: アクティブ化している（例えばクリックされている）ときのリンクで、{{cssxref(":active")}} 疑似クラスを使用して装飾します。

### デフォルトの装飾

次の例は、リンクがデフォルトでどのようにふるまうかを示しています（CSS は、テキストをより見やすくするために、単にテキストを拡大して中央に配置しています）。

```html
<p><a href="#">A simple link</a></p>
```

```css
p {
  font-size: 2rem;
  text-align: center;
}
```

{{ EmbedLiveSample('Default_styles', '100%', 120) }}

> **メモ:** このページの例にあるリンクはすべて偽のリンクです — `#`（ハッシュまたはポンド記号）が実際の URL の代わりに配置されています。 これは、実際のリンクが含まれている場合、それらをクリックすると例が壊れる可能性があるためです（エラーが発生したり、ロードしたページから埋め込まれた例に戻ることができません）。 `#` は現在のページにリンクしているだけです。

デフォルトの装飾を調べていくうちに、次のようないくつかのことに気付くでしょう。

- リンクには下線が引かれています。
- 未訪問のリンクは青です。
- 訪問済みのリンクは紫色です。
- リンクにホバーすると、マウスポインタが小さな手のアイコンに変わります。
- フォーカスのあるリンクの周囲にはアウトラインがあります —&#x20;

  <kbd>Tab</kbd>

  &#x20;キーを押すと、キーボードでこのページのリンクにフォーカスを合わせることができます（Mac では、これが機能する前に&#x20;

  <kbd>Ctrl</kbd>

  &#x20;\+&#x20;

  <kbd>F7</kbd>

  &#x20;を押して*フルキーボードアクセス: すべてのコントロール*オプションを有効にする必要があるかもしれません）。

- アクティブなリンクは赤です（リンクをクリックしながらマウスボタンを押したままにしてみてください）。

興味深いことに、これらのデフォルトの装飾は、1990 年代半ばのブラウザーの初期の頃のものとほぼ同じです。 これは、ユーザーがこのふるまいを知っており、予期するようになったためです — リンクの装飾が異なると、多くの人が混乱してしまうでしょう。 これは、リンクの装飾を設定してはいけないという意味ではなく、予想されるふるまいから大きく外れてはいけないということです。 少なくとも次のことをするべきです。

- リンクには下線を使用しますが、他のものには使用しません。 リンクに下線を付けたくない場合は、少なくとも他の方法でリンクをハイライトしてください。
- ホバー/フォーカスしたときに何らかの方法で反応するようにし、アクティブ化したときには少し異なる方法で反応するようにします。

デフォルトの装飾は、次の CSS プロパティを使用してオフにしたり変更したりできます。

- テキストの色は {{cssxref("color")}} です。
- マウスポインタのスタイルは {{cssxref("cursor")}} です — 非常に良い理由がない限り、これをオフにしないでください。
- テキストのアウトラインは {{cssxref("outline")}} です（アウトラインは境界線に似ていますが、唯一の違いは、境界線はボックス内のスペースを占めますが、アウトラインは占めずに背景の上にあるだけだということです）。 このアウトラインは、アクセシビリティを向上させるのに役立つので、オフにする前に慎重に検討してください。 フォーカス状態でリンクホバー状態に与えられた装飾を少なくとも 2 倍にするべきです。

> **メモ:** リンクの装飾は上記のプロパティに制限されているわけではありません — 好きなプロパティを自由に使用できます。 夢中になりすぎないようにしてください！

### いくつかのリンクを装飾する

デフォルトの状態を少し詳しく見てきたので、典型的なリンクの装飾のセットを見てみましょう。

まず始めに、空の規則セットを書き出します。

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

リンクのスタイルは互いに重なっているため、この順序は重要です。 例えば、最初の規則の装飾は、それ以降のすべての規則に適用され、リンクがアクティブになっているときは、ホバーもしています。 これらを間違った順序で並べると、物事は適切に機能しません。 順番を覚えておくには、**L**o**V**e **F**ears **HA**te のようなニーモニックを使用してみてください。

それでは、これを適切に装飾するための情報を追加しましょう。

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
  outline: none;
  text-decoration: none;
  padding: 2px 1px 0;
}

a:link {
  color: #265301;
}

a:visited {
  color: #437a16;
}

a:focus {
  border-bottom: 1px solid;
  background: #bae498;
}

a:hover {
  border-bottom: 1px solid;
  background: #cdfeaa;
}

a:active {
  background: #265301;
  color: #cdfeaa;
}
```

CSS を適用するためのサンプル HTML も提供します。

```html
<p>
  There are several browsers available, such as <a href="#">Mozilla Firefox</a>,
  <a href="#">Google Chrome</a>, and <a href="#">Microsoft Edge</a>.
</p>
```

2 つをまとめると、この結果が得られます。

{{ EmbedLiveSample('Styling_some_links', '100%', 150) }}

それでは、ここで何をしたでしょうか？ これは確かにデフォルトの装飾とは異なるように見えますが、それでもユーザーに何が起こっているのかを知るための十分な身近な経験を提供します。

- 最初の 2 つの規則は、この説明にとってそれほど興味深いものではありません。
- 3 番目の規則は `a` セレクタを使ってデフォルトのテキストのアンダーラインとフォーカスのアウトライン（とにかくブラウザーによって異なります）を取り除き、各リンクに少量のパディングを追加します — これらすべては後で明らかになります。
- 次に、`a:link` セレクタと `a:visited` セレクタを使用して、未訪問リンクと訪問済みリンクに 2 つのカラーバリエーションを設定して区別します。
- 次の 2 つの規則では、`a:focus` と `a:hover` を使用して、フォーカスされたリンクとホバーされたリンクを異なる背景色に設定し、さらにリンクを目立たせるために下線を使用します。 ここで注意すべき 2 つの点があります。

  - 下線は {{cssxref("text-decoration")}} ではなく、 {{cssxref("border-bottom")}} を使用して作成されています — 前者よりも後者の方が装飾オプションが優れていて、少し下に描かれるので下線が引かれている単語のディセンダ（例えば、g と y で x より下に出ている部分）を横切ることがないため、一部の人々はこれを好みます。
  - {{cssxref("border-bottom")}} の値は、色を指定せずに `1px solid` として設定しています。 こうすると、境界線は要素のテキストと同じ色になります。 これは、テキストがそれぞれ異なる色であるような場合に役立ちます。

- 最後に、`a:active` は、リンクがアクティブになっている間に反転配色を与えるために使用され、重要なことが起こっていることを明確にします！

### 能動的学習: あなた自身のリンクを装飾する

この能動的学習セッションでは、空の規則のセットにあなた自身の宣言を追加してリンクを本当にかっこよく見せてください。 想像力を駆使して、ワイルドに。 上記の例と同じように、よりかっこよく機能的なものを思いつくことができると確信しています。

間違えた場合は、_Reset_ ボタンを使用していつでもリセットできます。 本当に立ち往生してしまったら、上に示した例を挿入するために _Show solution_ ボタンを押してください。

```html hidden
<div
  class="body-wrapper"
  style="font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;">
  <h2>HTML Input</h2>
  <textarea
    id="code"
    class="html-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
<p>There are several browsers available, such as <a href="#">Mozilla
 Firefox</a>, <a href="#">Google Chrome</a>, and
<a href="#">Microsoft Edge</a>.</p></textarea
  >

  <h2>CSS Input</h2>
  <textarea
    id="code"
    class="css-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
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

}</textarea
  >

  <h2>Output</h2>
  <div
    class="output"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;"></div>
  <div class="controls">
    <input
      id="reset"
      type="button"
      value="Reset"
      style="margin: 10px 10px 0 0;" />
    <input
      id="solution"
      type="button"
      value="Show solution"
      style="margin: 10px 0 0 10px;" />
  </div>
</div>
```

```js hidden
var htmlInput = document.querySelector(".html-input");
var cssInput = document.querySelector(".css-input");
var reset = document.getElementById("reset");
var htmlCode = htmlInput.value;
var cssCode = cssInput.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

var styleElem = document.createElement("style");
var headElem = document.querySelector("head");
headElem.appendChild(styleElem);

function drawOutput() {
  output.innerHTML = htmlInput.value;
  styleElem.textContent = cssInput.value;
}

reset.addEventListener("click", function () {
  htmlInput.value = htmlCode;
  cssInput.value = cssCode;
  drawOutput();
});

solution.addEventListener("click", function () {
  htmlInput.value = htmlCode;
  cssInput.value =
    "p {\n  font-size: 1.2rem;\n  font-family: sans-serif;\n  line-height: 1.4;\n}\n\na {\n  outline: none;\n  text-decoration: none;\n  padding: 2px 1px 0;\n}\n\na:link {\n  color: #265301;\n}\n\na:visited {\n  color: #437A16;\n}\n\na:focus {\n  border-bottom: 1px solid;\n  background: #BAE498;\n}\n\na:hover {\n  border-bottom: 1px solid;\n  background: #CDFEAA;\n}\n\na:active {\n  background: #265301;\n  color: #CDFEAA;\n}";
  drawOutput();
});

htmlInput.addEventListener("input", drawOutput);
cssInput.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code', 700, 800) }}

## リンクにアイコンを含める

一般的なやり方は、リンクがどの種類のコンテンツを指しているかに関するより多くの標識を提供するためにリンクにアイコンを含めることです。 外部リンク（他のサイトにつながるリンク）にアイコンを追加する、本当に簡単な例を見てみましょう。 このようなアイコンは、通常、ボックスから出る小さな矢印のように見えます — この例では、[icons8.com からの素晴らしい例](https://icons8.jp/icon/741/external-link)を使います。

欲しい効果が得られる HTML と CSS を見てみましょう。 まず、装飾する簡単な HTML です。

```html
<p>
  For more information on the weather, visit our <a href="#">weather page</a>,
  look at <a href="http://#">weather on Wikipedia</a>, or check out
  <a href="http://#">weather on Extreme Science</a>.
</p>
```

次に、CSS です。

```css
body {
  width: 300px;
  margin: 0 auto;
  font-family: sans-serif;
}

p {
  line-height: 1.4;
}

a {
  outline: none;
  text-decoration: none;
  padding: 2px 1px 0;
}

a:link {
  color: blue;
}

a:visited {
  color: purple;
}

a:focus,
a:hover {
  border-bottom: 1px solid;
}

a:active {
  color: red;
}

a[href*="http"] {
  background: url("external-link-52.png") no-repeat 100% 0;
  background-size: 16px 16px;
  padding-right: 19px;
}
```

{{ EmbedLiveSample('Including_icons_on_links', '100%', 150) }}

それでは、ここで何が起こっているのでしょうか？ これまで見てきたのと同じ情報なので、CSS の大部分はスキップします。 しかし最後の規則は興味深いです — ここでは前回の記事の[リストアイテムのカスタム行頭記号](/ja/docs/Learn/CSS/Styling_text/Styling_lists#Using_a_custom_bullet_image)を処理したのと同じ方法で外部リンクにカスタム背景画像を挿入しています — 今回は個々のプロパティの代わりに {{cssxref("background")}} の一括指定を使用します。 挿入したい画像へのパスを設定し、`no-repeat` を指定してコピーを 1 つだけ挿入するようにしてから、テキストコンテンツの右側へ 100%、上から 0 ピクセルの位置を指定します。

また、{{cssxref("background-size")}} を使用して、背景画像を表示するサイズを指定します。 レスポンシブウェブデザインの目的に合わせて、アイコンを大きくしておいて、このようにサイズを変更すると便利です。 ただし、これは IE 9 以降でのみ機能するため、これらの古いブラウザーをサポートする必要がある場合は、画像のサイズを変更しておいて、それをそのまま挿入する必要があります。

最後に、背景画像を表示するスペースを確保するためにリンクに {{cssxref("padding-right")}} を設定しているので、テキストと重なっていません。

最後の一言 — どのように外部リンクだけを選択したのでしょうか？ あなたが[HTML リンク](/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)を適切に記述しているのなら、外部リンクには絶対 URL のみを使用しているはずです — 自分のサイトの他の部分にリンクするには（最初のリンクのように）相対リンクを使用するほうが効率的です。 したがって、テキスト "http" は（2 番目と 3 番目のリンクのように）外部リンクにのみ現れ、これを[属性セレクタ](/ja/docs/Learn/CSS/Introduction_to_CSS/Attribute_selectors)で選択できます。 `a[href*="http"]` は {{htmlelement("a")}} 要素を選択しますが、"http" を含む値を持つ [`href`](/ja/docs/Web/HTML/Element/a#href) 属性がある場合に限ります。

それでは、これで全部です — 上の能動的学習セクションを再検討して、この新しいテクニックを試してみてください！

> **メモ:** [背景](/ja/docs/Learn/CSS/Styling_boxes)や[レスポンシブウェブデザイン](/ja/docs/Web/Apps/Progressive/Responsive/responsive_design_building_blocks)にまだ慣れていなくても心配しないでください。 これらは他の場所で説明されています。

## ボタンとしてのリンクの装飾

この記事でこれまでに説明したツールは、他の方法でも使用できます。 例えば、ホバーのような状態は、リンクだけでなく、さまざまな要素を装飾するために使用できます — 段落、リスト項目、またはその他のもののホバー状態を装飾することができます。

さらに、リンクは特定の状況下ではボタンのように見えて、そうふるまうように装飾されているのが普通です — ウェブサイトのナビゲーションメニューは通常リンクを含むリストとしてマークアップれており、ユーザーがサイトの他の部分にアクセスできるようにする一連のコントロールボタンやタブのように簡単にスタイル設定できます。 その方法を探りましょう。

まず、いくつかの HTML です。

```html
<ul>
  <li><a href="#">Home</a></li>
  <li><a href="#">Pizza</a></li>
  <li><a href="#">Music</a></li>
  <li><a href="#">Wombats</a></li>
  <li><a href="#">Finland</a></li>
</ul>
```

そして CSS です。

```css
body,
html {
  margin: 0;
  font-family: sans-serif;
}

ul {
  padding: 0;
  width: 100%;
}

li {
  display: inline;
}

a {
  outline: none;
  text-decoration: none;
  display: inline-block;
  width: 19.5%;
  margin-right: 0.625%;
  text-align: center;
  line-height: 3;
  color: black;
}

li:last-child a {
  margin-right: 0;
}

a:link,
a:visited,
a:focus {
  background: yellow;
}

a:hover {
  background: orange;
}

a:active {
  background: red;
  color: white;
}
```

これにより、次のような結果が得られます。

{{ EmbedLiveSample('Styling_links_as_buttons', '100%', 100) }}

最も興味深い部分に焦点を当てて、ここで何が起こっているのかを説明しましょう。

- 2 番目の規則は、{{htmlelement("ul")}} 要素からデフォルトの {{cssxref("padding")}} を削除し、その幅を外側のコンテナ（この場合は {{htmlelement("body")}}）の 100% になるように設定します。
- {{htmlelement("li")}} 要素は通常デフォルトでブロックです（復習のために [CSS ボックスの種類](/ja/Learn/CSS/Introduction_to_CSS/Box_model#Types_of_CSS_boxes)を参照してください）。 つまり、要素はそれぞれ自身のラインに配置されます。 この場合、水平方向のリンクのリストを作成しているので、3 番目の規則で {{cssxref("display")}} プロパティを `inline` に設定します。 これにより、リスト項目は互いに同じラインに配置されます — それらはインライン要素のようにふるまいます。
- {{htmlelement("a")}} 要素を装飾する 4 番目の規則は、ここで最も複雑です。 ステップバイステップで進みましょう。

  - 前の例と同様に、デフォルトの {{cssxref("text-decoration")}} と {{cssxref("outline")}} をオフにすることから始めます — 見た目を損なうものは欲しくありません。
  - 次に、{{cssxref("display")}} を `inline-block` に設定します — {{htmlelement("a")}} 要素はデフォルトではインラインですが、ブロックのように、要素を自身のラインからこぼさずに、サイズを変更できるようにしたいのです。 `inline-block` はこれを可能にします。
  - これからサイズを設定します！ {{htmlelement("ul")}} の全幅を埋め、各ボタンの間には少しマージンを残して（ただし、右端には隙間はありません）、5 つのボタンを配置します。 それらはすべて同じサイズでなければなりません。 これを行うには、{{cssxref("width")}} を 19.5% に設定し、{{cssxref("margin-right")}} を 0.625% に設定します。この幅の合計が 100.625% になることに気付くでしょう。 これは最後のボタンが `<ul>` をオーバーフローさせ、次のラインに落ちることになります。 ただし、次の規則を使用してリストの最後の `<a>` のみを選択し、そこからマージンを削除して、100% に戻します。 これで完了です！
  - 最後の 3 つの宣言は非常に単純で、主に見た目を目的としています。 各リンク内のテキストを中央揃えにし、ボタンの高さ設定するために {{cssxref("line-height")}} を 3 に設定し（テキストを垂直方向に中央揃えする利点もあります）、テキストの色を黒に設定します。

> **メモ:** HTML 内のリスト項目がすべて一行に記述されていることに気付いたかもしれません。インラインブロック要素間のスペースや改行は、単語間のスペースと同様にページにスペースを作成します。 そして、そのようなスペースは水平ナビゲーションメニューのレイアウトを壊すでしょう。だからスペースを取り除きました。この問題（と、その解決方法）についての詳細は、[インラインブロック要素間のスペースの戦い](https://css-tricks.com/fighting-the-space-between-inline-block-elements/)（英語）で見つけることができます。

## あなたのスキルをテストしてみてください!

あなたはこの記事の最後に到達し、すでに私たちのアクティブラーニングのセクションでいくつかのスキルテストを行いましたが、今後の最も重要な情報を覚えていますか？この情報を保持しているかどうかを確認するためのアセスメントがモジュールの最後にあります。[コミュニティスクールのホームページの組版](/ja/docs/Learn/CSS/Styling_text/Typesetting_a_homepage)を参照してください。

この評価ではこのモジュールで説明されているすべての知識をテストしますので、次に進む前に次の記事を読んだほうがいいかもしれません。

## まとめ

この記事が、リンクについて知っておく必要があるすべての情報を提供してくれることを願っています — 今のところは！ テキストの装飾モジュールの最後の記事では、ウェブサイトでのカスタムフォントの使用方法や、ウェブフォントの使用方法について詳しく説明しています。

{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}
