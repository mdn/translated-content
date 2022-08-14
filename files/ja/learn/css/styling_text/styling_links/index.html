---
title: リンクの装飾
slug: Learn/CSS/Styling_text/Styling_links
tags:
  - Article
  - Beginner
  - CSS
  - Focus
  - Guide
  - Learn
  - Links
  - Pseudo-class
  - hover
  - hyperlinks
  - menus
  - tabs
translation_of: Learn/CSS/Styling_text/Styling_links
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}</div>

<p class="summary"><span class="seoSummary"><a href="/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks">リンク</a>を装飾するときは、擬似クラスを使用してリンク状態を効果的に装飾する方法と、ナビゲーションメニューやタブなどの一般的なさまざまなインターフェイス機能で使用するためのリンクの装飾方法を理解することが重要です。 この記事では、これらすべてのトピックを見ていきます。</span></p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">前提知識:</th>
   <td>基本的なコンピューターリテラシー、HTML の基本（<a href="/ja/docs/Learn/HTML/Introduction_to_HTML">HTML 入門</a>を学ぶ）、CSS の基本（<a href="/ja/docs/Learn/CSS/Introduction_to_CSS">CSS 入門</a>を学ぶ）、<a href="/ja/docs/Learn/CSS/Styling_text/Fundamentals">CSS のテキストとフォントの基礎</a>。</td>
  </tr>
  <tr>
   <th scope="row">学習目標:</th>
   <td>リンク状態を装飾する方法と、ナビゲーションメニューのような一般的な UI 機能でリンクを効果的に使用する方法を学ぶこと。</td>
  </tr>
 </tbody>
</table>

<h2 id="Lets_look_at_some_links" name="Let's_look_at_some_links">いくつかのリンクを見てみましょう</h2>

<p><a href="/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks">ハイパーリンクの作成</a>のベストプラクティスに従って、HTML がリンクをどのように実装するかを調べました。 この記事では、この知識を基にして、リンクの装飾のためのベストプラクティスを示します。</p>

<h3 id="Link_states" name="Link_states">リンク状態</h3>

<p>最初に理解するべきことはリンク状態の概念です。リンクが存在できる様々な状態のことで、それらは異なる<a href="/ja/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements">疑似クラス</a>を使って装飾することができます。</p>

<ul>
 <li><strong>リンク（未訪問）</strong>: リンクが他のどの状態にもない場合に、リンクが属するデフォルトの状態。 これは、{{cssxref(":link")}} 疑似クラスを使用して特に装飾できます。</li>
 <li><strong>訪問済み</strong>: 既に訪問済み（ブラウザーの履歴に存在する）のリンクで、{{cssxref(":visited")}} 擬似クラスを使用して装飾します。</li>
 <li><strong>ホバー</strong>: リンクにユーザーのマウスポインタが合わせられているときのリンクで、{{cssxref(":hover")}} 疑似クラスを使用して装飾します。</li>
 <li><strong>フォーカス</strong>: フォーカスしたときのリンク（例えば、<kbd>Tab</kbd> キーなどを使用してキーボードユーザーによって移動してきたか、{{domxref("HTMLElement.focus()")}} を使用してプログラムでフォーカスした） — これは {{cssxref(":focus")}} 擬似クラスを使用して装飾します。</li>
 <li><strong>アクティブ</strong>: アクティブ化している（例えばクリックされている）ときのリンクで、{{cssxref(":active")}} 疑似クラスを使用して装飾します。</li>
</ul>

<h3 id="Default_styles" name="Default_styles">デフォルトの装飾</h3>

<p>次の例は、リンクがデフォルトでどのようにふるまうかを示しています（CSS は、テキストをより見やすくするために、単にテキストを拡大して中央に配置しています）。</p>

<pre class="brush: html notranslate">&lt;p&gt;&lt;a href="#"&gt;A simple link&lt;/a&gt;&lt;/p&gt;
</pre>

<pre class="brush: css notranslate">p {
  font-size: 2rem;
  text-align: center;
}</pre>

<p>{{ EmbedLiveSample('Default_styles', '100%', 120) }}</p>

<div class="note">
<p><strong>注</strong>: このページの例にあるリンクはすべて偽のリンクです — <code>#</code>（ハッシュまたはポンド記号）が実際の URL の代わりに配置されています。 これは、実際のリンクが含まれている場合、それらをクリックすると例が壊れる可能性があるためです（エラーが発生したり、ロードしたページから埋め込まれた例に戻ることができません）。 <code>#</code> は現在のページにリンクしているだけです。</p>
</div>

<p>デフォルトの装飾を調べていくうちに、次のようないくつかのことに気付くでしょう。</p>

<ul>
 <li>リンクには下線が引かれています。</li>
 <li>未訪問のリンクは青です。</li>
 <li>訪問済みのリンクは紫色です。</li>
 <li>リンクにホバーすると、マウスポインタが小さな手のアイコンに変わります。</li>
 <li>フォーカスのあるリンクの周囲にはアウトラインがあります — <kbd>Tab</kbd> キーを押すと、キーボードでこのページのリンクにフォーカスを合わせることができます（Mac では、これが機能する前に <kbd>Ctrl</kbd> + <kbd>F7</kbd> を押して<em>フルキーボードアクセス: すべてのコントロール</em>オプションを有効にする必要があるかもしれません）。</li>
 <li>アクティブなリンクは赤です（リンクをクリックしながらマウスボタンを押したままにしてみてください）。</li>
</ul>

<p>興味深いことに、これらのデフォルトの装飾は、1990年代半ばのブラウザーの初期の頃のものとほぼ同じです。 これは、ユーザーがこのふるまいを知っており、予期するようになったためです — リンクの装飾が異なると、多くの人が混乱してしまうでしょう。 これは、リンクの装飾を設定してはいけないという意味ではなく、予想されるふるまいから大きく外れてはいけないということです。 少なくとも次のことをするべきです。</p>

<ul>
 <li>リンクには下線を使用しますが、他のものには使用しません。 リンクに下線を付けたくない場合は、少なくとも他の方法でリンクをハイライトしてください。</li>
 <li>ホバー/フォーカスしたときに何らかの方法で反応するようにし、アクティブ化したときには少し異なる方法で反応するようにします。</li>
</ul>

<p>デフォルトの装飾は、次の CSS プロパティを使用してオフにしたり変更したりできます。</p>

<ul>
 <li>テキストの色は {{cssxref("color")}} です。</li>
 <li>マウスポインタのスタイルは {{cssxref("cursor")}} です — 非常に良い理由がない限り、これをオフにしないでください。</li>
 <li>テキストのアウトラインは {{cssxref("outline")}} です（アウトラインは境界線に似ていますが、唯一の違いは、境界線はボックス内のスペースを占めますが、アウトラインは占めずに背景の上にあるだけだということです）。 このアウトラインは、アクセシビリティを向上させるのに役立つので、オフにする前に慎重に検討してください。 フォーカス状態でリンクホバー状態に与えられた装飾を少なくとも2倍にするべきです。</li>
</ul>

<div class="note">
<p><strong>注</strong>: リンクの装飾は上記のプロパティに制限されているわけではありません — 好きなプロパティを自由に使用できます。 夢中になりすぎないようにしてください！</p>
</div>

<h3 id="Styling_some_links" name="Styling_some_links">いくつかのリンクを装飾する</h3>

<p>デフォルトの状態を少し詳しく見てきたので、典型的なリンクの装飾のセットを見てみましょう。</p>

<p>まず始めに、空の規則セットを書き出します。</p>

<pre class="brush: css notranslate">a {

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

}</pre>

<p>リンクのスタイルは互いに重なっているため、この順序は重要です。 例えば、最初の規則の装飾は、それ以降のすべての規則に適用され、リンクがアクティブになっているときは、ホバーもしています。 これらを間違った順序で並べると、物事は適切に機能しません。 順番を覚えておくには、<strong>L</strong>o<strong>V</strong>e <strong>F</strong>ears <strong>HA</strong>te のようなニーモニックを使用してみてください。</p>

<p>それでは、これを適切に装飾するための情報を追加しましょう。</p>

<pre class="brush: css notranslate">body {
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
  color: #437A16;
}

a:focus {
  border-bottom: 1px solid;
  background: #BAE498;
}

a:hover {
  border-bottom: 1px solid;
  background: #CDFEAA;
}

a:active {
  background: #265301;
  color: #CDFEAA;
}</pre>

<p>CSS を適用するためのサンプル HTML も提供します。</p>

<pre class="brush: html notranslate">&lt;p&gt;There are several browsers available, such as &lt;a href="#"&gt;Mozilla
Firefox&lt;/a&gt;, &lt;a href="#"&gt;Google Chrome&lt;/a&gt;, and
&lt;a href="#"&gt;Microsoft Edge&lt;/a&gt;.&lt;/p&gt;</pre>

<p>2つをまとめると、この結果が得られます。</p>

<p>{{ EmbedLiveSample('Styling_some_links', '100%', 150) }}</p>

<p>それでは、ここで何をしたでしょうか？ これは確かにデフォルトの装飾とは異なるように見えますが、それでもユーザーに何が起こっているのかを知るための十分な身近な経験を提供します。</p>

<ul>
 <li>最初の2つの規則は、この説明にとってそれほど興味深いものではありません。</li>
 <li>3番目の規則は <code>a</code> セレクタを使ってデフォルトのテキストのアンダーラインとフォーカスのアウトライン（とにかくブラウザーによって異なります）を取り除き、各リンクに少量のパディングを追加します — これらすべては後で明らかになります。</li>
 <li>次に、<code>a:link</code> セレクタと <code>a:visited</code> セレクタを使用して、未訪問リンクと訪問済みリンクに2つのカラーバリエーションを設定して区別します。</li>
 <li>次の2つの規則では、<code>a:focus</code> と <code>a:hover</code> を使用して、フォーカスされたリンクとホバーされたリンクを異なる背景色に設定し、さらにリンクを目立たせるために下線を使用します。 ここで注意すべき2つの点があります。
  <ul>
   <li>下線は {{cssxref("text-decoration")}} ではなく、 {{cssxref("border-bottom")}} を使用して作成されています — 前者よりも後者の方が装飾オプションが優れていて、少し下に描かれるので下線が引かれている単語のディセンダ（例えば、g と y で x より下に出ている部分）を横切ることがないため、一部の人々はこれを好みます。</li>
   <li>{{cssxref("border-bottom")}} の値は、色を指定せずに <code>1px solid</code> として設定しています。 こうすると、境界線は要素のテキストと同じ色になります。 これは、テキストがそれぞれ異なる色であるような場合に役立ちます。</li>
  </ul>
 </li>
 <li>最後に、<code>a:active</code> は、リンクがアクティブになっている間に反転配色を与えるために使用され、重要なことが起こっていることを明確にします！</li>
</ul>

<h3 id="Active_learning_Style_your_own_links" name="Active_learning_Style_your_own_links">能動的学習: あなた自身のリンクを装飾する</h3>

<p>この能動的学習セッションでは、空の規則のセットにあなた自身の宣言を追加してリンクを本当にかっこよく見せてください。 想像力を駆使して、ワイルドに。 上記の例と同じように、よりかっこよく機能的なものを思いつくことができると確信しています。</p>

<p>間違えた場合は、<em>Reset</em> ボタンを使用していつでもリセットできます。 本当に立ち往生してしまったら、上に示した例を挿入するために <em>Show solution</em> ボタンを押してください。</p>

<div class="hidden">
<h6 id="Playable_code">Playable code</h6>

<pre class="brush: html notranslate">&lt;div class="body-wrapper" style="font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;"&gt;
  &lt;h2&gt;HTML Input&lt;/h2&gt;
  &lt;textarea id="code" class="html-input" style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;"&gt;&lt;p&gt;There are several browsers available, such as &lt;a href="#"&gt;Mozilla
 Firefox&lt;/a&gt;, &lt;a href="#"&gt;Google Chrome&lt;/a&gt;, and
&lt;a href="#"&gt;Microsoft Edge&lt;/a&gt;.&lt;/p&gt;&lt;/textarea&gt;

  &lt;h2&gt;CSS Input&lt;/h2&gt;
  &lt;textarea id="code" class="css-input" style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;"&gt;a {

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

}&lt;/textarea&gt;

  &lt;h2&gt;Output&lt;/h2&gt;
  &lt;div class="output" style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;"&gt;&lt;/div&gt;
  &lt;div class="controls"&gt;
    &lt;input id="reset" type="button" value="Reset" style="margin: 10px 10px 0 0;"&gt;
    &lt;input id="solution" type="button" value="Show solution" style="margin: 10px 0 0 10px;"&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: js notranslate">var htmlInput = document.querySelector(".html-input");
var cssInput = document.querySelector(".css-input");
var reset = document.getElementById("reset");
var htmlCode = htmlInput.value;
var cssCode = cssInput.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

var styleElem = document.createElement('style');
var headElem = document.querySelector('head');
headElem.appendChild(styleElem);

function drawOutput() {
  output.innerHTML = htmlInput.value;
  styleElem.textContent = cssInput.value;
}

reset.addEventListener("click", function() {
  htmlInput.value = htmlCode;
  cssInput.value = cssCode;
  drawOutput();
});

solution.addEventListener("click", function() {
  htmlInput.value = htmlCode;
  cssInput.value = 'p {\n  font-size: 1.2rem;\n  font-family: sans-serif;\n  line-height: 1.4;\n}\n\na {\n  outline: none;\n  text-decoration: none;\n  padding: 2px 1px 0;\n}\n\na:link {\n  color: #265301;\n}\n\na:visited {\n  color: #437A16;\n}\n\na:focus {\n  border-bottom: 1px solid;\n  background: #BAE498;\n}\n\na:hover {\n  border-bottom: 1px solid;\n  background: #CDFEAA;\n}\n\na:active {\n  background: #265301;\n  color: #CDFEAA;\n}';
  drawOutput();
});

htmlInput.addEventListener("input", drawOutput);
cssInput.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
</pre>
</div>

<p>{{ EmbedLiveSample('Playable_code', 700, 800) }}</p>

<h2 id="Including_icons_on_links" name="Including_icons_on_links">リンクにアイコンを含める</h2>

<p>一般的なやり方は、リンクがどの種類のコンテンツを指しているかに関するより多くの標識を提供するためにリンクにアイコンを含めることです。 外部リンク（他のサイトにつながるリンク）にアイコンを追加する、本当に簡単な例を見てみましょう。 このようなアイコンは、通常、ボックスから出る小さな矢印のように見えます — この例では、<a href="https://icons8.jp/icon/741/external-link">icons8.com からの素晴らしい例</a>を使います。</p>

<p>欲しい効果が得られる HTML と CSS を見てみましょう。 まず、装飾する簡単な HTML です。</p>

<pre class="brush: html notranslate">&lt;p&gt;For more information on the weather, visit our &lt;a href="#"&gt;weather page&lt;/a&gt;,
look at &lt;a href="http://#"&gt;weather on Wikipedia&lt;/a&gt;, or check
out &lt;a href="http://#"&gt;weather on Extreme Science&lt;/a&gt;.&lt;/p&gt;</pre>

<p>次に、CSS です。</p>

<pre class="brush: css notranslate">body {
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

a:focus, a:hover {
  border-bottom: 1px solid;
}

a:active {
  color: red;
}

a[href*="http"] {
  background: url('https://mdn.mozillademos.org/files/12982/external-link-52.png') no-repeat 100% 0;
  background-size: 16px 16px;
  padding-right: 19px;
}</pre>

<p>{{ EmbedLiveSample('Including_icons_on_links', '100%', 150) }}</p>

<p>それでは、ここで何が起こっているのでしょうか？ これまで見てきたのと同じ情報なので、CSS の大部分はスキップします。 しかし最後の規則は興味深いです — ここでは前回の記事の<a href="/ja/docs/Learn/CSS/Styling_text/Styling_lists#Using_a_custom_bullet_image">リストアイテムのカスタム行頭記号</a>を処理したのと同じ方法で外部リンクにカスタム背景画像を挿入しています — 今回は個々のプロパティの代わりに {{cssxref("background")}} の一括指定を使用します。 挿入したい画像へのパスを設定し、<code>no-repeat</code> を指定してコピーを1つだけ挿入するようにしてから、テキストコンテンツの右側へ 100%、上から 0 ピクセルの位置を指定します。</p>

<p>また、{{cssxref("background-size")}} を使用して、背景画像を表示するサイズを指定します。 レスポンシブウェブデザインの目的に合わせて、アイコンを大きくしておいて、このようにサイズを変更すると便利です。 ただし、これは IE 9 以降でのみ機能するため、これらの古いブラウザーをサポートする必要がある場合は、画像のサイズを変更しておいて、それをそのまま挿入する必要があります。</p>

<p>最後に、背景画像を表示するスペースを確保するためにリンクに {{cssxref("padding-right")}} を設定しているので、テキストと重なっていません。</p>

<p>最後の一言 — どのように外部リンクだけを選択したのでしょうか？ あなたが<a href="/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks">HTML リンク</a>を適切に記述しているのなら、外部リンクには絶対 URL のみを使用しているはずです — 自分のサイトの他の部分にリンクするには（最初のリンクのように）相対リンクを使用するほうが効率的です。 したがって、テキスト  "http" は（2番目と3番目のリンクのように）外部リンクにのみ現れ、これを<a href="/ja/docs/Learn/CSS/Introduction_to_CSS/Attribute_selectors">属性セレクタ</a>で選択できます。 <code>a[href*="http"]</code> は {{htmlelement("a")}} 要素を選択しますが、"http" を含む値を持つ {{htmlattrxref("href","a")}} 属性がある場合に限ります。</p>

<p>それでは、これで全部です — 上の能動的学習セクションを再検討して、この新しいテクニックを試してみてください！</p>

<div class="note">
<p><strong>注</strong>: <a href="/ja/docs/Learn/CSS/Styling_boxes">背景</a>や<a href="/ja/docs/Web/Apps/Progressive/Responsive/responsive_design_building_blocks">レスポンシブウェブデザイン</a>にまだ慣れていなくても心配しないでください。 これらは他の場所で説明されています。</p>
</div>

<h2 id="Styling_links_as_buttons" name="Styling_links_as_buttons">ボタンとしてのリンクの装飾</h2>

<p>この記事でこれまでに説明したツールは、他の方法でも使用できます。 例えば、ホバーのような状態は、リンクだけでなく、さまざまな要素を装飾するために使用できます — 段落、リスト項目、またはその他のもののホバー状態を装飾することができます。</p>

<p>さらに、リンクは特定の状況下ではボタンのように見えて、そうふるまうように装飾されているのが普通です — ウェブサイトのナビゲーションメニューは通常リンクを含むリストとしてマークアップれており、ユーザーがサイトの他の部分にアクセスできるようにする一連のコントロールボタンやタブのように簡単にスタイル設定できます。 その方法を探りましょう。</p>

<p>まず、いくつかの HTML です。</p>

<pre class="brush: html notranslate">&lt;ul&gt;
  &lt;li&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href="#"&gt;Pizza&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href="#"&gt;Music&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href="#"&gt;Wombats&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href="#"&gt;Finland&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</pre>

<p>そして CSS です。</p>

<pre class="brush: css notranslate">body,html {
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

a:link, a:visited, a:focus {
  background: yellow;
}

a:hover {
  background: orange;
}

a:active {
  background: red;
  color: white;
}</pre>

<p>これにより、次のような結果が得られます。</p>

<p>{{ EmbedLiveSample('Styling_links_as_buttons', '100%', 100) }}</p>

<p>最も興味深い部分に焦点を当てて、ここで何が起こっているのかを説明しましょう。</p>

<ul>
 <li>2番目の規則は、{{htmlelement("ul")}} 要素からデフォルトの {{cssxref("padding")}} を削除し、その幅を外側のコンテナ（この場合は {{htmlelement("body")}}）の 100% になるように設定します。</li>
 <li>{{htmlelement("li")}} 要素は通常デフォルトでブロックです（復習のために <a href="/ja/Learn/CSS/Introduction_to_CSS/Box_model#Types_of_CSS_boxes">CSS ボックスの種類</a>を参照してください）。 つまり、要素はそれぞれ自身のラインに配置されます。 この場合、水平方向のリンクのリストを作成しているので、3番目の規則で {{cssxref("display")}} プロパティを <code>inline</code> に設定します。 これにより、リスト項目は互いに同じラインに配置されます — それらはインライン要素のようにふるまいます。</li>
 <li>{{htmlelement("a")}} 要素を装飾する4番目の規則は、ここで最も複雑です。 ステップバイステップで進みましょう。
  <ul>
   <li>前の例と同様に、デフォルトの {{cssxref("text-decoration")}} と {{cssxref("outline")}} をオフにすることから始めます — 見た目を損なうものは欲しくありません。</li>
   <li>次に、{{cssxref("display")}} を <code>inline-block</code> に設定します — {{htmlelement("a")}} 要素はデフォルトではインラインですが、ブロックのように、要素を自身のラインからこぼさずに、サイズを変更できるようにしたいのです。 <code>inline-block</code> はこれを可能にします。</li>
   <li>これからサイズを設定します！ {{htmlelement("ul")}} の全幅を埋め、各ボタンの間には少しマージンを残して（ただし、右端には隙間はありません）、5つのボタンを配置します。 それらはすべて同じサイズでなければなりません。 これを行うには、{{cssxref("width")}} を 19.5% に設定し、{{cssxref("margin-right")}} を 0.625% に設定します。この幅の合計が 100.625% になることに気付くでしょう。 これは最後のボタンが <code>&lt;ul&gt;</code> をオーバーフローさせ、次のラインに落ちることになります。 ただし、次の規則を使用してリストの最後の <code>&lt;a&gt;</code> のみを選択し、そこからマージンを削除して、100% に戻します。 これで完了です！</li>
   <li>最後の3つの宣言は非常に単純で、主に見た目を目的としています。 各リンク内のテキストを中央揃えにし、ボタンの高さ設定するために {{cssxref("line-height")}} を 3 に設定し（テキストを垂直方向に中央揃えする利点もあります）、テキストの色を黒に設定します。</li>
  </ul>
 </li>
</ul>

<div class="note">
<p><strong>注</strong>: HTML 内のリスト項目がすべて一行に記述されていることに気付いたかもしれません。インラインブロック要素間のスペースや改行は、単語間のスペースと同様にページにスペースを作成します。 そして、そのようなスペースは水平ナビゲーションメニューのレイアウトを壊すでしょう。だからスペースを取り除きました。この問題（と、その解決方法）についての詳細は、<a href="https://css-tricks.com/fighting-the-space-between-inline-block-elements/">インラインブロック要素間のスペースの戦い</a>（英語）で見つけることができます。</p>
</div>

<h2 id="Summary" name="Summary">あなたのスキルをテストしてみてください!</h2>

<p>あなたはこの記事の最後に到達し、すでに私たちのアクティブラーニングのセクションでいくつかのスキルテストを行いましたが、今後の最も重要な情報を覚えていますか？この情報を保持しているかどうかを確認するためのアセスメントがモジュールの最後にあります。<a href="/ja/docs/Learn/CSS/Styling_text/Typesetting_a_homepage">コミュニティスクールのホームページの組版</a>を参照してください。</p>

<p>この評価ではこのモジュールで説明されているすべての知識をテストしますので、次に進む前に次の記事を読んだほうがいいかもしれません。</p>

<h2 id="Summary" name="Summary">まとめ</h2>

<p>この記事が、リンクについて知っておく必要があるすべての情報を提供してくれることを願っています — 今のところは！ テキストの装飾モジュールの最後の記事では、ウェブサイトでのカスタムフォントの使用方法や、ウェブフォントの使用方法について詳しく説明しています。</p>

<p>{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}</p>

<h2 id="In_this_module" name="In_this_module">このモジュール内の文書</h2>

<ul>
 <li><a href="/ja/docs/Learn/CSS/Styling_text/Fundamentals">基本的なテキストとフォントの装飾</a></li>
 <li><a href="/ja/docs/Learn/CSS/Styling_text/Styling_lists">リストの装飾</a></li>
 <li><a href="/ja/docs/Learn/CSS/Styling_text/Styling_links">リンクの装飾</a></li>
 <li><a href="/ja/docs/Learn/CSS/Styling_text/Web_fonts">ウェブフォント</a></li>
 <li><a href="/ja/Learn/CSS/Styling_text/Typesetting_a_homepage">コミュニティスクールのホームページの組版</a></li>
</ul>
