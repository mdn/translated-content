---
title: HTML テキストの基礎
slug: Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals
tags:
  - Beginner
  - CodingScripting
  - Guide
  - HTML
  - Introduction to HTML
  - Learn
  - Text
  - headings
  - paragraphs
  - semantics
translation_of: Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML")}}

HTML の役割の 1 つはテキストに構造と意味 ({{glossary("semantics", "セマンティクス")}}ともいう) を与え、ブラウザーが正しく表示できるようにすることです。この記事では {{glossary("HTML")}} を使ってテキストのページを構造化する方法、見出しとパラグラフをつけたり、言葉を強調したり、リストを作ったり、などを説明します。

| 前提条件: | [HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started)に載っている、基本的な HTML に精通していること。               |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 目的:     | 基本的なテキストページをマークアップして構造や意味を設定する方法を学ぶ — パラグラフ、見出し、リスト、強調、クォーテーションを含む。 |

## 基本: 見出しとパラグラフ

たいていの構造化されたテキストは見出しとパラグラフで構成されていて、それは物語でも、新聞でも、大学の教科書でも、雑誌などでも、何を読んでいるのかにかかわらずそうです。

![An example of a newspaper front cover, showing use of a top level heading, subheadings and paragraphs.](newspaper_small.jpg "An example of a newspaper front cover, showing use of a top level heading, subheadings and paragraphs.")

構造化されたコンテンツは読み手にとって読みやすく楽しい体験になります。

HTML では、各パラグラフは {{htmlelement("p")}} 要素で囲む必要があり、次のようです:

```html
<p>I am a paragraph, oh yes I am.</p>
```

それぞれの見出しは見出しの要素に囲まれます:

```html
<h1>I am the title of the story.</h1>
```

6 つの見出し要素があります — {{htmlelement("h1")}}, {{htmlelement("h2")}}, {{htmlelement("h3")}}, {{htmlelement("h4")}}, {{htmlelement("h5")}}, {{htmlelement("h6")}} です。各要素は文書内で別々のコンテンツレベルを表現します; `<h1>` は主な見出しで、`<h2>` はサブの見出しで、`<h3>` はサブのサブの見出しを表して、といったように。

### 構造的な階層を実装する

例として, 物語を考えましょう。 `<h1>` は物語の題名を表し、`<h2>` は各章の題名を表し、`<h3>` は各章の節を表す、といったようでしょう。

```html
<h1>The Crushing Bore</h1>

<p>By Chris Mills</p>

<h2>Chapter 1: The dark night</h2>

<p>It was a dark night. Somewhere, an owl hooted. The rain lashed down on the ...</p>

<h2>Chapter 2: The eternal silence</h2>

<p>Our protagonist could not so much as a whisper out of the shadowy figure ...</p>

<h3>The specter speaks</h3>

<p>Several more hours had passed, when all of a sudden the specter sat bolt upright and exclaimed, "Please have mercy on my soul!"</p>
```

階層が意味を成す限り、関係する要素が何を意味するかは正にあなた次第です。このような構造を作成する際には、いくつかのベストプラクティスを覚えておく必要があります:

- ページごとに 1 つだけ `<h1>` を使うのが好まれる — これは最上位の見出しで、他のすべてはそれ以下の階層に置かれる。
- 見出しが階層内で正しい順序にしておく。`<h3>` のサブ見出しの後に `<h2>` のサブサブ見出しをつけたりしない — これは意味をなさないし変な結果となる。
- 6 つの見出しレベルで、必要性を感じないかぎり、ページごとに 3 以内におさえる。たくさんの階層の文章は (つまり深い見出しの階層) 大きすぎて不格好であり、移動が困難になります。そのような場合、できるだけコンテンツを複数ページに分割するのが望ましいです。

### なぜ構造が必要なのか？

この質問に答えるには、[text-start.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/html-text-formatting/text-start.html) を見てください — この記事の動作例の開始点です (すてきなハマスのレシピです)。あとの練習で必要になるため、ローカルマシンにこのファイルのコピーを保存します。この文書の本文は現在、複数の部分のコンテンツが入っています — まったくマークアップされていませんが、改行で区切られています (次の行に移るのに Enter/Return を押します)。

しかし、この文書をブラウザーで開くと、テキストが 1 つの大きな塊に見えるでしょう!

![A webpage that shows a wall of unformatted text, because there are no elements on the page to structure it.](Screen%20Shot%202017-03-29%20at%2009.20.35.png "A webpage that shows a wall of unformatted text, because there are no elements on the page to structure it.")

これはコンテンツの構造を与える要素がないためですので、ブラウザーはどれが見出しでどれが本文かがわかりません。さらには:

- ウェブページを見ているユーザーは、関連コンテンツを探すのにざっと見たり、時には読み始めるために見出しだけを見ている傾向にあります (we usually [spend a very short time on a web page](http://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/))。しばらく有用なものが見つからない場合、イライラして別の場所に去っていきます。
- ページをインデックスするサーチエンジンは、見出しのコンテンツを、ページの検索ランクに影響する重要なキーワードとみなします。見出しがないと、{{glossary("SEO")}} (検索エンジン最適化)の点で良くないでしょう。
- 極めて視覚が不自由な人はウェブページを読みません。つまりその代わりにウェブページを聞きます。これは [スクリーンリーダー](http://en.wikipedia.org/wiki/Screen_reader "screen readers")というソフトウェアで実現されます。このソフトウェアはテキストコンテンツにすばやくアクセスする方法を提供します。さまざまな技術が使用される中で、文書の概要を見出しを読むことで提供し、ユーザーが必要な情報をすばやく見つけられるようにしています。見出しが見つからない場合、文書全体が読み上げられるのを聞くことになってしまいます。
- {{glossary("CSS")}} でコンテンツをスタイリングしたり、{{glossary("JavaScript")}} で面白いことをさせるには、関連コンテンツを包んでいる要素が必要となり、それを効率的に CSS/JavaScript はターゲットとします。

このため、コンテンツに構造的なマークアップが必要となります。

### アクティブラーニング: コンテンツに構造を与える

ライブな実例に飛び込んでみましょう。下記の実例で、入力フィールドの生テキストに要素を与え、出力フィールドに見出しと 2 つの段落が見えるようにしてみましょう。

間違えた場合、リセットボタンでいつでもリセットできます。行き詰まったら、「_Show solution_(答えを見る)」ボタンで回答を見ます。

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;">
</div>

<h2>Editable code</h2>
<p class="a11y-label">Press Esc to move focus away from the code area (Tab inserts a tab character).</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">My short story I am a policewoman and my name is Trish.

My legs are made of cardboard and I am married to a fish.</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset">
  <input id="solution" type="button" value="Show solution">
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var solution = document.getElementById('solution');
var output = document.querySelector('.output');
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener('click', function() {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = 'Show solution';
  updateCode();
});

solution.addEventListener('click', function() {
  if(solution.value === 'Show solution') {
    textarea.value = solutionEntry;
    solution.value = 'Hide solution';
  } else {
    textarea.value = userEntry;
    solution.value = 'Show solution';
  }
  updateCode();
});

var htmlSolution = '<h1>My short story</h1>\n<p>I am a policewoman and my name is Trish.</p>\n<p>My legs are made of cardboard and I am married to a fish.</p>';
var solutionEntry = htmlSolution;

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function(e){
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret('\t');
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = (textarea.value).substring(0, caretPos);
  var back = (textarea.value).substring(textarea.selectionEnd, textarea.value.length);
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function(){
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if(solution.value === 'Show solution') {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Playable_code', 700, 400, "", "", "hide-codepen-jsfiddle") }}

### なぜセマンティクスが必要なのか？

私たちはあらゆる場面でセマンティクスに頼っています。 —私たちは日常にある物の機能が何かを判断するために過去の経験を頼りにします。つまり、私たちは物を見れば、 それがどのような機能をもつかを知っています。 例えば、赤信号は「止まれ」を、「青信号」は「進め」を意味すると期待します。もしも、間違ったセマンティクスを適用すれば、ものごとは一瞬にして扱いにくくなることがあります。(赤を「進め」の意味で使っている国はあるのでしょうか？そんな国がないといいのですが。 )

同様に、正確な要素を使い、コンテンツに正しい意味や機能、見た目をを与えられているかどうかを確かめる必要があります。この文脈では、{{htmlelement("h1")}} 要素は要素によって囲んだテキストを「ページのトップレベル見出し」の役割 (または意味) にします。

```html
<h1>This is a top level heading</h1>
```

既定では、ブラウザーはヘッダに見えるようにこれを大きなフォントサイズにします (もっとも、CSS を使えばあなたのやりたいようにできますが)。より重要なことは、その意味する値が (上記で述べましたが) サーチエンジンと画面を読む人によって、異なる方法で使われるということです。

一方、任意の要素をトップレベル見出しのように見せることもできます。以下の例を見てください。

```html
<span style="font-size: 32px; margin: 21px 0;">Is this a top level heading?</span>
```

これは {{htmlelement("span")}} 要素です。これにはセマンティクスはありません。意味を与えずに CSS を適用させたいとき (あるいは JavaScript で何かをしたいとき)、コンテンツを囲むために使います (このあと、このコースではこの要素についてより多くのことについて発見することになります)。CSS の中にはトップレベル見出しのような見栄えにするために使えるものもあります。しかし、意味的な値はないため、上記で述べたような付加的な恩恵を得ることはできないでしょう。その役割に応じた適切な HTML 要素を使うことは良い考え方です。

## リスト

さて、リストに目を向けてみましょう。リストは生活のあらゆる場所にあります。買い物のリストから、自分の家にたどり着くために意識することなく毎日従っている経路のリスト、このチュートリアルであなたが見ている説明のリストまであります。Web 上にもリストはどこにでもあり、気にかけるものに応じて、3 種類が用意されています。

### 順序なし

順序なしリストは、買い物リストに使うときのように、項目の並びに関係がないものについてマークアップするときに使います。

```
milk
eggs
bread
hummus
```

すべての順序なしリストは {{htmlelement("ul")}} で開始し、すべてのリストの項目を囲みます。

```html
<ul>
milk
eggs
bread
hummus
</ul>
```

最後にリストの項目をそれぞれ {{htmlelement("li")}} (list item)で囲みます。

```html
<ul>
  <li>milk</li>
  <li>eggs</li>
  <li>bread</li>
  <li>hummus</li>
</ul>
```

#### アクティブラーニング: 順序なしリストをマークアップする

自身の HTML 順序なしリストを作るために下のライブサンプルを編集してみましょう。

```html hidden
<h2>Input</h2>
<textarea id="code" class="input">milk
eggs
bread
hummus</textarea>
<h2>Output</h2>
<div class="output"></div>
<div class="controls">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
body {
  font-family: 'Open Sans Light', Helvetica, Arial, sans-serif;
}

.input, .output {
  width: 90%;
  height: 6em;
  padding: 10px;
  border: 1px solid #0095dd;
  overflow: auto;
}

button {
  padding: 10px 10px 10px 0;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var code = textarea.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

function drawOutput() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function() {
  textarea.value = code;
  drawOutput();
});

solution.addEventListener("click", function() {
textarea.value = '<ul>\n<li>milk</li>\n<li>eggs</li>\n<li>bread</li>\n<li>hummus</li>\n</ul>';
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code_2', 700, 400) }}

### 順序つき

順序付きリストは、以下のような一連の指示のように、項目に順序があるリストのことです。

```
Drive to the end of the road
Turn right
Go straight across the first two roundabouts
Turn left at the third roundabout
The school is on your right, 300 meters up the road
```

マークアップの構造は順序なしリストと同じです。違うのは、`<ul>` の代わりに {{htmlelement("ol")}} 要素でリストの項目をそれぞれ囲まなければならないということです。

```html
<ol>
  <li>Drive to the end of the road</li>
  <li>Turn right</li>
  <li>Go straight across the first two roundabouts</li>
  <li>Turn left at the third roundabout</li>
  <li>The school is on your right, 300 meters up the road</li>
</ol>
```

#### アクティブラーニング: 順序つきリストをマークアップする

自身の HTML 順序つきリストを作るために下のライブサンプルを編集してみましょう。

```html hidden
<h2>Input</h2>
<textarea id="code" class="input">Drive to the end of the road
Turn right
Go straight across the first two roundabouts
Turn left at the third roundabout
The school is on your right, 300 meters up the road</textarea>
<h2>Output</h2>
<div class="output"></div>
<div class="controls">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
body {
  font-family: 'Open Sans Light', Helvetica, Arial, sans-serif;
}

.input, .output {
  width: 90%;
  height: 8em;
  padding: 10px;
  border: 1px solid #0095dd;
  overflow: auto;
}

button {
  padding: 10px 10px 10px 0;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var code = textarea.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

function drawOutput() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function() {
  textarea.value = code;
  drawOutput();
});

solution.addEventListener("click", function() {
textarea.value = '<ol>\n<li>Drive to the end of the road</li>\n<li>Turn right</li>\n<li>Go straight across the first two roundabouts</li>\n<li>Turn left at the third roundabout</li>\n<li>The school is on your right, 300 meters up the road</li>\n</ol>';
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code_3', 700, 500) }}

### 手をうごかしてみよう: Marking up our recipe page

この記事のこの時点で、レシピページの例をマークアップするために必要な情報はすべて揃っています。[text-start.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/html-text-formatting/text-start.html) 開始ファイルのローカルコピーを保存してそこで作業を行うか、または下記の編集可能な例で実行するかを選択できます。編集した例に記入すると、次にページを開いたときに失われるため、ローカルで実行するのがおそらくよりよいでしょう。どちらにも長所と短所があります。

```html hidden
<h2>Input</h2>
<textarea id="code" class="input">Quick hummus recipe

    This recipe makes quick, tasty hummus, with no messing. It has been adapted from a number of different recipes that I have read over the years.

    Hummus is a delicious thick paste used heavily in Greek and Middle Eastern dishes. It is very tasty with salad, grilled meats and pitta breads.

    Ingredients

    1 can (400g) of chick peas (garbanzo beans)
    175g of tahini
    6 sundried tomatoes
    Half a red pepper
    A pinch of cayenne pepper
    1 clove of garlic
    A dash of olive oil

    Instructions

    Remove the skin from the garlic, and chop coarsely
    Remove all the seeds and stalk from the pepper, and chop coarsely
    Add all the ingredients into a food processor
    Process all the ingredients into a paste.
    If you want a coarse "chunky" hummus, process it for a short time
    If you want a smooth hummus, process it for a longer time

    For a different flavour, you could try blending in a small measure of lemon and coriander, chili pepper, lime and chipotle, harissa and mint, or spinach and feta cheese. Experiment and see what works for you.

    Storage

    Refrigerate the finished hummus in a sealed container. You should be able to use it for about a week after you've made it. If it starts to become fizzy, you should definitely discard it.

    Hummus is suitable for freezing; you should thaw it and use it within a couple of months.</textarea>
<h2>Output</h2>
<div class="output"></div>
<div class="controls">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
body {
  font-family: 'Open Sans Light', Helvetica, Arial, sans-serif;
}

.input, .output {
  width: 90%;
  height: 8em;
  padding: 10px;
  border: 1px solid #0095dd;
  overflow: auto;
}

button {
  padding: 10px 10px 10px 0;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var code = textarea.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

function drawOutput() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function() {
  textarea.value = code;
  drawOutput();
});

solution.addEventListener("click", function() {
  textarea.value = '<h1>Quick hummous recipe</h1>\n\n<p>This recipe makes quick, tasty hummus, with no messing. It has been adapted from a number of different recipes that I have read over the years.</p>\n\n<p>Hummus is a delicious thick paste used heavily in Greek and Middle Eastern dishes. It is very tasty with salad, grilled meats and pitta breads.</p>\n\n<h2>Ingredients</h2>\n\n<ul>\n<li>1 can (400g) of chick peas (garbanzo beans)</li>\n<li>175g of tahini</li>\n<li>6 sundried tomatoes</li>\n<li>Half a red pepper</li>\n<li>A pinch of cayenne pepper</li>\n<li>1 clove of garlic</li>\n<li>A dash of olive oil</li>\n</ul>\n\n<h2>Instructions</h2>\n\n<ol>\n<li>Remove the skin from the garlic, and chop coarsely.</li>\n<li>Remove all the seeds and stalk from the pepper, and chop coarsely.</li>\n<li>Add all the ingredients into a food processor.</li>\n<li>Process all the ingredients into a paste.</li>\n<li>If you want a coarse "chunky" hummus, process it for a short time.</li>\n<li>If you want a smooth hummus, process it for a longer time.</li>\n</ol>\n\n<p>For a different flavour, you could try blending in a small measure of lemon and coriander, chili pepper, lime and chipotle, harissa and mint, or spinach and feta cheese. Experiment and see what works for you.</p>\n\n<h2>Storage</h2>\n\n<p>Refrigerate the finished hummus in a sealed container. You should be able to use it for about a week after you\'ve made it. If it starts to become fizzy, you should definitely discard it.</p>\n\n<p>Hummus is suitable for freezing; you should thaw it and use it within a couple of months.</p>';
  drawOutput();
});

textarea.addEventListener("input", drawOutput);

window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code_4', 700, 500) }}

立ち往生した場合は、いつでも \[ソリューションを表示] ボタンを押すか、github レポジトリの [text-complete.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/html-text-formatting/text-complete.html) の例をご覧ください。

### 入れ子のリスト

あるリストを別のリストの中に入れ子にしてもまったく問題ありません。いくつかのサブ箇条書きを最上位の箇条書きの下に配置することをお勧めします。 レシピの例から 2 番目のリストを見てみましょう。

```html
<ol>
  <li>Remove the skin from the garlic, and chop coarsely.</li>
  <li>Remove all the seeds and stalk from the pepper, and chop coarsely.</li>
  <li>Add all the ingredients into a food processor.</li>
  <li>Process all the ingredients into a paste.</li>
  <li>If you want a coarse "chunky" hummus, process it for a short time.</li>
  <li>If you want a smooth hummus, process it for a longer time.</li>
</ol>
```

最後の 2 つの箇条書きはそれらの前の箇条書きと非常に密接に関係しているので (それらはその箇条書きの下に収まるサブ命令や選択のように読みます)、それらを自身の順序なしリストの中に入れ子にして現在のリストの中に入れることは意味があります。4 番目の箇条書き。 これは次のようになります。

```html
<ol>
  <li>Remove the skin from the garlic, and chop coarsely.</li>
  <li>Remove all the seeds and stalk from the pepper, and chop coarsely.</li>
  <li>Add all the ingredients into a food processor.</li>
  <li>Process all the ingredients into a paste.
    <ul>
      <li>If you want a coarse "chunky" hummus, process it for a short time.</li>
      <li>If you want a smooth hummus, process it for a longer time.</li>
    </ul>
  </li>
</ol>
```

前のアクティブラーニングの例に戻り、2 番目のリストを次のように更新してみてください。

## 強調と重要性

人間の言語では、文の意味を変えるために特定の単語を強調することが多く、特定の単語を何らかの意味で重要または異なるものとしてマークしたい場面がよくあります。HTML は、そのような効果でテキストコンテンツをマークアップすることを可能にするためにさまざまなセマンティック要素を提供します。そしてこのセクションでは、最も一般的なもののいくつかを見ていきます。

### 強調

話されている言葉を強調したいときは、ある言葉を強調して、自分の言っていることの意味を微妙に変えます。同様に、書かれた言語では、イタリック体でそれらを置くことによって単語を強調する傾向があります。たとえば、次の 2 つの文は意味が異なります。

I am glad you weren't late.

I am _glad_ you weren't _late._

最初の文は、その人が遅刻していないことを本当に安心しているように思われます。対照的に、2 番目のものは皮肉的または受動的 - 攻撃的に聞こえ、その人が少し遅れて到着したという不快感を表しています。

HTML では、このようなインスタンスをマークアップするために {{htmlelement("em")}} (強調) 要素を使用します。文書を読みやすくするだけでなく、これらはスクリーンリーダーによって認識され、異なるトーンの音声で話されます。ブラウザーではデフォルトでイタリック体になっていますが、純粋にイタリック体にするだけの場合にはこのタグを使用しないでください。そのためには、{{htmlelement("span")}} 要素と CSS、あるいは {{htmlelement("i")}} 要素 (下記参照) を使用します。

```html
<p>I am <em>glad</em> you weren't <em>late</em>.</p>
```

### 重要性が高い

重要な言葉を強調するために、話し言葉でそれらを強調し、そして書面でそれらを **bold** にする傾向があります。例えば：

This liquid is **highly toxic**.

I am counting on you. **Do not** be late!

HTML では、このようなインスタンスをマークアップするために {{htmlelement("strong")}} (強い重要性) 要素を使用します。 この文書をより便利にするだけでなく、これらもスクリーンリーダーによって認識され、異なるトーンの音声で話されています。ブラウザーではデフォルトで太字のテキストとしてスタイル設定されていますが、太字のスタイルにするだけの場合にはこのタグを使用しないでください。そのためには、{{htmlelement("span")}} 要素といくつかの CSS、あるいは {{htmlelement("b")}} 要素 (下記参照) を使用します。

```html
<p>This liquid is <strong>highly toxic</strong>.</p>

<p>I am counting on you. <strong>Do not</strong> be late!</p>
```

必要に応じて、 strong と emphasis を相互に入れ子にすることができます。

```html
<p>This liquid is <strong>highly toxic</strong> —
if you drink it, <strong>you may <em>die</em></strong>.</p>
```

### アクティブラーニング: 重要にしましょう！

このアクティブラーニングセクションでは、編集可能な例を示しました。その中で、それらを必要としていると思う言葉に強調と強い重要性を付け加えてみてください。

```html hidden
<h2>Input</h2>
<textarea id="code" class="input"><h1>Important notice</h1>

<p>On Sunday January 9th 2010, a gang of goths were
spotted stealing several garden gnomes from a shopping
center in downtown Milwaukee. They were all wearing green
jumpsuits and silly hats, and seemed to be having a whale
of a time. If anyone has any information about this
incident, please contact the police now.</p></textarea>
<h2>Output</h2>
<div class="output"></div>
<div class="controls">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show suggestion" />
</div>
```

```css hidden
body {
  font-family: 'Open Sans Light', Helvetica, Arial, sans-serif;
}

.input, .output {
  width: 90%;
  height: 8em;
  padding: 10px;
  border: 1px solid #0095dd;
  overflow: auto;
}

button {
  padding: 10px 10px 10px 0;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var code = textarea.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

function drawOutput() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function() {
  textarea.value = code;
  drawOutput();
});

solution.addEventListener("click", function() {
  textarea.value = '<h1>Important notice</h1>\n<p>On <strong>Sunday January 9th 2010</strong>, a gang of <em>goths</em> were spotted stealing <strong><em>several</em> garden gnomes</strong> from a shopping center in downtown <strong>Milwaukee</strong>. They were all wearing <em>green jumpsuits</em> and <em>silly hats</em>, and seemed to be having a whale of a time. If anyone has <strong>any</strong> information about this incident, please contact the police <strong>now</strong>.</p>';
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code_5', 700, 500) }}

### イタリック、太字、下線...

これまで説明してきた要素には明確な意味があります。{{htmlelement("b")}}、{{htmlelement("i")}} および {{htmlelement("u")}} の状況はやや複雑です。CSS がまだ十分にサポートされていないかまったくサポートされていなかった時代に、太字、斜体、または下線付きのテキストを書くことができるようにそれらはできました。このような要素は表示にのみ影響を与え、意味には影響を与えない**表示要素**として知られていますが、もはや使用されるべきではありません。これまで見てきたように、セマンティクスはアクセシビリティ、SEO などにとって非常に重要だからです。

HTML5 では `<b>`、`<i>`、`<u>` が新しい、やや混乱しやすいセマンティックロールで再定義されました。

最適な経験則は次のとおりです。これ以上適切な要素がない場合に、太字、斜体、または下線で伝統的に伝えられてきたような意味を伝えるために `<b>`、`<i>` または `<u>` を使用するのが適切です。ただし、アクセシビリティの考え方を守ることは常に重要です。 イタリック体の概念は、スクリーンリーダーを使っている人、またはラテン系のアルファベット以外の書記体系を使っている人にとってはあまり役に立ちません。

- {{HTMLElement('i')}} は、伝統的にイタリック体で伝えられた意味を伝えるために使われます：外来語、分類名、技術用語、考え...
- {{HTMLElement('b')}} は、伝統的に太字で伝えられている意味を伝えるために使用されます。キーワード、製品名、リードセンテンス...
- {{HTMLElement('u')}} は、下線で伝統的に伝えられている意味を伝えるために使用されます。適切な名前、スペルミス...

> **Note:** 下線についての親切な警告：**人々は下線をハイパーリンクと強く関連付けています**。したがって、Web 上では、リンクのみに下線を引くのが最善です。意味的に適切な場合は `<u>` 要素を使用しますが、CSS を使用してデフォルトの下線を Web 上でより適切なものに変更することを検討してください。以下の例はその方法を示しています。

```html
<!-- scientific names -->
<p>
  The Ruby-throated Hummingbird (<i>Archilochus colubris</i>)
  is the most common hummingbird in Eastern North America.
</p>

<!-- foreign words -->
<p>
  The menu was a sea of exotic words like <i lang="uk-latn">vatrushka</i>,
  <i lang="id">nasi goreng</i> and <i lang="fr">soupe à l'oignon</i>.
</p>

<!-- a known misspelling -->
<p>
  Someday I'll learn how to <u style="text-decoration-line: underline; text-decoration-style: wavy;">spel</u> better.
</p>

<!-- Highlight keywords in a set of instructions -->
<ol>
  <li>
    <b>Slice</b> two pieces of bread off the loaf.
  </li>
  <li>
    <b>Insert</b> a tomato slice and a leaf of
    lettuce between the slices of bread.
  </li>
</ol>
```

## 要約

今はここで終わりとしましょう。 この記事では、HTML でテキストをマークアップする方法についての優れたアイデアを説明し、この分野で最も重要な要素のいくつかを紹介しました。この分野には、さらに多くのセマンティック要素を網羅する必要があります。この後の「その他のセマンティック要素」の記事で、さらに詳しく説明します。 次回の記事では、Web 上で最も重要な要素と思われるハイパーリンクの作成方法について詳しく説明します。

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML")}}

## このモジュール内

- [HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- [Head とは？HTML のメタデータ](/ja/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
- [HTML テキストの基礎](/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)
- [ハイパーリンクを作成する](/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
- [上級のテキスト整形](/ja/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)
- [ドキュメントとウェブサイトの構造](/ja/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
- [HTML をデバッグする](/ja/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
- [手紙をマークアップする](/ja/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter)
- [コンテンツページを構造化する](/ja/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content)
