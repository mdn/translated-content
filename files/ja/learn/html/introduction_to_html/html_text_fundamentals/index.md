---
title: HTML テキストの基礎
slug: Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals
l10n:
  sourceCommit: 65b9418c7d0e3a331ac50249adf0024f44789923
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML")}}

HTML の主要な仕事の一つは、ブラウザーが HTML 文書を開発者の意図通りに表示できるように、テキストに構造を与えることです。この記事では、 {{glossary("HTML")}} を使用して、見出しや段落を追加したり、単語を強調したり、リストを作成したりなど、ページのテキストを構造化する方法を説明します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >HTML を始めよう</a
        >に載っている、基本的な HTML に精通していること。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        基本的なテキストページをマークアップして構造や意味を設定する方法を学ぶこと。段落、見出し、リスト、強調、引用符を含む。
      </td>
    </tr>
  </tbody>
</table>

## 基本: 見出しと段落

たいていの構造化されたテキストは見出しと段落で構成されています。それは物語でも、新聞でも、大学の教科書でも、雑誌などでも、何を読んでいるのかにかかわらずそうです。

![新聞の表紙の例。最上位の見出し、小見出し、段落を使用していることがわかる。](newspaper_small.jpg)

構造化されたコンテンツは読み手にとって読みやすく楽しい体験になります。

HTML では、各段落は {{htmlelement("p")}} 要素で囲む必要があり、次のようになります。

```html
<p>I am a paragraph, oh yes I am.</p>
```

それぞれの見出しは見出し要素で囲みます。

```html
<h1>I am the title of the story.</h1>
```

見出し要素は 6 つあります — {{htmlelement("Heading_Elements", "h1")}}、{{htmlelement("Heading_Elements", "h2")}}、{{htmlelement("Heading_Elements", "h3")}}、{{htmlelement("Heading_Elements", "h4")}}、{{htmlelement("Heading_Elements", "h5")}}、{{htmlelement("Heading_Elements", "h6")}} です。各要素は文書内で別々のコンテンツレベルを表現します。 `<h1>` は最も主要な見出しで、`<h2>` は副見出しで、`<h3>` は副副見出しを表すというようになります。

### 構造的な階層を実装する

例として、物語を考えましょう。 `<h1>` は物語の題名を表し、`<h2>` は各章の題名を表し、`<h3>` は各章の節を表すというようにします。

```html
<h1>The Crushing Bore</h1>

<p>By Chris Mills</p>

<h2>Chapter 1: The dark night</h2>

<p>
  It was a dark night. Somewhere, an owl hooted. The rain lashed down on the…
</p>

<h2>Chapter 2: The eternal silence</h2>

<p>Our protagonist could not so much as a whisper out of the shadowy figure…</p>

<h3>The specter speaks</h3>

<p>
  Several more hours had passed, when all of a sudden the specter sat bolt
  upright and exclaimed, "Please have mercy on my soul!"
</p>
```

実に自由な発想で、どのような要素を表現するか、階層構造に意味を持たせればよいのです。ただ、このような構造を作成する際には、いくつかの最善の手法を念頭に置いておく必要があります。

- できれば、 1 ページに 1 つの `<h1>` を使用するのが望ましいでしょう。これは最上位の見出しで、他の見出しはすべてこれより下の階層に配置されます。
- 見出しは正しい順序で使用するようにしてください。小見出しを表すために `<h3>` 要素を使用し、その後に小見出しを表すために `<h2>` 要素を使用しないでください。これは意味を成しませんし、おかしな結果を招きかねません。
- 利用できる 6 つの見出しレベルのうち、必要と思われる場合を除き、 1 ページにつき使用するのは 3 つまでにすることを目標としましょう。多数のレベル（例えば、深い見出し階層）がある文書は、扱いにくく、操作しにくくなります。そのような場合は、可能であれば複数のページに内容を分散させることをお勧めします。

### なぜ構造が必要なのか

この質問に答えるには、[text-start.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html) を見てください — この記事の動作例の開始点です (すてきなハマスのレシピです)。あとの練習で必要になるため、ローカルマシンにこのファイルのコピーを保存します。この文書の本文は現在、複数の部分のコンテンツが入っています — まったくマークアップされていませんが、改行で区切られています（次の行に移るのに Enter/Return を押します）。

しかし、この文書をブラウザーで開くと、テキストが 1 つの大きな塊に見えるでしょう。

![ページ上に構造化する要素がないため、書式なしのテキストが壁一面に表示されるウェブページ。](screen_shot_2017-03-29_at_09.20.35.png)

これはコンテンツの構造を与える要素がないためですので、ブラウザーはどれが見出しでどれが本文かがわかりません。さらに、

- ウェブページを見ているユーザーは、関連コンテンツを探すのにざっと見たり、時には読み始めるために見出しだけを見ている傾向にあります（私たちはふつう、[ウェブページに費やす時間はわずかです](http://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/))。しばらく有用なものが見つからない場合、イライラして別の場所に去っていきます。
- ページをインデックスする検索エンジンは、見出しのコンテンツを、ページの検索ランクに影響する重要なキーワードとみなします。見出しがないと、 {{glossary("SEO")}} （検索エンジン最適化）の点で良くないでしょう。
- 極めて目が不自由な人はウェブページを読みません。つまりその代わりにウェブページを聞きます。これは [スクリーンリーダー](https://ja.wikipedia.org/wiki/スクリーンリーダー)というソフトウェアで実現されます。このソフトウェアはテキストコンテンツにすばやくアクセスする方法を提供します。さまざまな技術が使用される中で、文書の概要を見出しを読むことで提供し、ユーザーが必要な情報をすばやく見つけられるようにしています。見出しが見つからない場合、文書全体が読み上げられるのを聞くことになってしまいます。
- {{glossary("CSS")}} でコンテンツをスタイリングしたり、 {{glossary("JavaScript")}} で面白いことをさせるには、関連コンテンツを包んでいる要素が必要となり、それを効率的に CSS/JavaScript はターゲットとします。

このため、コンテンツに構造的なマークアップが必要となります。

### アクティブラーニング: コンテンツの構造化

ライブな実例に飛び込んでみましょう。下記の実例で、入力フィールドの生テキストに要素を与え、出力フィールドに見出しと 2 つの段落が見えるようにしてみましょう。

間違えた場合、リセットボタンでいつでもリセットできます。行き詰まったら、「_答えを表示_」ボタンで回答を見てください。

```html hidden
<h2>ライブ出力</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>編集可能なコード</h2>
<p class="a11y-label">
  Esc を押すとコード領域からフォーカスを移動させることができます（Tab
  はタブ文字を挿入します）。
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
My short story I am a statistician and my name is Trish.

My legs are made of cardboard and I am married to a fish.
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="リセット" />
  <input id="solution" type="button" value="答えを表示" />
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
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
const code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

const htmlSolution = `<h1>My short story</h1>
<p>
  I am a statistician and my name is Trish.
</p>
<p>
  My legs are made of cardboard and I am married to a fish.
</p>`;

let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "答えを表示";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "答えを表示") {
    textarea.value = solutionEntry;
    solution.value = "答えを隠す";
  } else {
    textarea.value = userEntry;
    solution.value = "答えを表示";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// Stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead
textarea.onkeydown = (e) => {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code
textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "答えを表示") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Giving_our_content_structure', 700, 400, "", "") }}

### なぜ意味づけが必要なのか？

私たちはあらゆる場面で意味づけに頼っています。 —私たちは日常にある物の機能が何かを判断するために過去の経験を頼りにします。つまり、私たちは物を見れば、 それがどのような機能をもつかを知っています。 例えば、赤信号は「止まれ」を、「青信号」は「進め」を意味すると期待します。もしも、間違った意味づけを適用すれば、ものごとは一瞬にして扱いにくくなることがあります。（赤を「進め」の意味で使っている国はあるのでしょうか？そんな国がないといいのですが。）

同様に、正確な要素を使い、コンテンツに正しい意味や機能、見た目をを与えられているかどうかを確かめる必要があります。この文脈では、{{htmlelement("Heading_Elements", "h1")}} 要素は要素によって囲んだテキストを「ページの最上位の見出し」の役割（または意味）にします。

```html
<h1>This is a top level heading</h1>
```

既定では、ブラウザーは見出しらしく見えるようにフォントサイズを大きくします（ただし、 CSS を使用して好きなようにスタイルを設定することができます）。さらに重要なことは、その意味的な価値が、例えば検索エンジンやスクリーンリーダー（前述）などで、複数の方法で使用されることです。

他にも、どんな要素でも最上位の見出しのように見せることができます。従うことで、以下のように考えてみましょう。

```html
<span style="font-size: 32px; margin: 21px 0; display: block;">
  Is this a top level heading?
</span>
```

これは {{htmlelement("span")}} 要素です。これは何の意味も持ちません。CSS を適用する（または JavaScript で何かをする）ときに、コンテンツを囲むために使用し、余分な意味を与えません。（これらについてはコースの後半で詳しく説明します。）最上位の見出しのように見えるように CSS を適用していますが、これは何の意味も持たないので、上記のような好ましいことは何も得られません。その仕事に関連した HTML 要素を使用するのはよい考えです。

## リスト

さて、リストに目を向けてみましょう。リストは生活のあらゆる場所にあります。買い物のリストから、自分の家にたどり着くために意識することなく毎日従っている経路のリスト、このチュートリアルであなたが見ている説明のリストまであります。ウェブ上にもリストはどこにでもあり、気にかけるものに応じて、3 種類が用意されています。

### 順序なし

順序なしリストは、買い物リストに使うときのように、項目の並びに関係がないものについてマークアップするときに使います。

```
milk
eggs
bread
hummus
```

すべての順序なしリストは {{htmlelement("ul")}} で開始し、すべてのリストの項目を囲みます。

```html-nolint
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

#### アクティブラーニング: 順序なしリストのマークアップ

自分の HTML 順序なしリストを作るために下のライブサンプルを編集してみましょう。

```html hidden
<h2>ライブ出力</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>編集可能なコード</h2>
<p class="a11y-label">
  Esc を押すとコード領域からフォーカスを移動させることができます（Tab
  はタブ文字を挿入します）。
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
milk
eggs
bread
hummus
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="リセット" />
  <input id="solution" type="button" value="答えを表示" />
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
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
const code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

const htmlSolution =
  "<ul>\n<li>milk</li>\n<li>eggs</li>\n<li>bread</li>\n<li>hummus</li>\n</ul>";
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "答えを表示";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "答えを表示") {
    textarea.value = solutionEntry;
    solution.value = "答えを隠す";
  } else {
    textarea.value = userEntry;
    solution.value = "答えを表示";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = (e) => {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code
textarea.onkeyup = () => {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "答えを表示") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Marking_up_an_unordered_list', 700, 400, "", "") }}

### 順序つき

順序付きリストは、以下のような一連の指示のように、項目に順序があるリストのことです。

```
Drive to the end of the road
Turn right
Go straight across the first two roundabouts
Turn left at the third roundabout
The school is on your right, 300 meters up the road
```

マークアップの構造は順序なしリストと同じです。違うのは、`<ul>` の代わりに {{htmlelement("ol")}} 要素でリストの項目を囲む必要があることです。

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
<h2>ライブ出力</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>編集可能なコード</h2>
<p class="a11y-label">
  Esc を押すとコード領域からフォーカスを移動させることができます（Tab
  はタブ文字を挿入します）。
</p>

<textarea id="code" class="input" style="min-height: 200px; width: 95%">
Drive to the end of the road
Turn right
Go straight across the first two roundabouts
Turn left at the third roundabout
The school is on your right, 300 meters up the road
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="リセット" />
  <input id="solution" type="button" value="答えを表示" />
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
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
const code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

const htmlSolution =
  "<ol>\n<li>Drive to the end of the road</li>\n<li>Turn right</li>\n<li>Go straight across the first two roundabouts</li>\n<li>Turn left at the third roundabout</li>\n<li>The school is on your right, 300 meters up the road</li>\n</ol>";
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "答えを表示";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "答えを表示") {
    textarea.value = solutionEntry;
    solution.value = "答えを隠す";
  } else {
    textarea.value = userEntry;
    solution.value = "答えを表示";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = (e) => {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code
textarea.onkeyup = () => {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "答えを表示") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Marking_up_an_ordered_list', 700, 500, "", "") }}

### アクティブラーニング: レシピページのマークアップ

この記事のこの時点で、レシピページの例をマークアップするために必要な情報はすべて揃っています。[text-start.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html) ファイルの始めのローカルコピーを保存してそこで作業を行うか、または下記の編集可能な例で実行するかを選択できます。編集した例に記入すると、次にページを開いたときに失われるため、ローカルで実行するのがおそらくよりよいでしょう。どちらにも長所と短所があります。

```html hidden
<h2>ライブ出力</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>編集可能なコード</h2>
<p class="a11y-label">
  Esc を押すとコード領域からフォーカスを移動させることができます（Tab
  はタブ文字を挿入します）。
</p>

<textarea id="code" class="input" style="min-height: 200px; width: 95%">
Quick hummus recipe

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
  Process all the ingredients into a paste
  If you want a coarse "chunky" hummus, process it for a short time
  If you want a smooth hummus, process it for a longer time

  For a different flavor, you could try blending in a small measure of lemon and coriander, chili pepper, lime and chipotle, harissa and mint, or spinach and feta cheese. Experiment and see what works for you.

  Storage

  Refrigerate the finished hummus in a sealed container. You should be able to use it for about a week after you've made it. If it starts to become fizzy, you should definitely discard it.

  Hummus is suitable for freezing; you should thaw it and use it within a couple of months.
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="リセット" />
  <input id="solution" type="button" value="答えを表示" />
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
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
const code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

const htmlSolution =
  '<h1>Quick hummus recipe</h1>\n\n<p>This recipe makes quick, tasty hummus, with no messing. It has been adapted from a number of different recipes that I have read over the years.</p>\n\n<p>Hummus is a delicious thick paste used heavily in Greek and Middle Eastern dishes. It is very tasty with salad, grilled meats and pitta breads.</p>\n\n<h2>Ingredients</h2>\n\n<ul>\n<li>1 can (400g) of chick peas (garbanzo beans)</li>\n<li>175g of tahini</li>\n<li>6 sundried tomatoes</li>\n<li>Half a red pepper</li>\n<li>A pinch of cayenne pepper</li>\n<li>1 clove of garlic</li>\n<li>A dash of olive oil</li>\n</ul>\n\n<h2>Instructions</h2>\n\n<ol>\n<li>Remove the skin from the garlic, and chop coarsely.</li>\n<li>Remove all the seeds and stalk from the pepper, and chop coarsely.</li>\n<li>Add all the ingredients into a food processor.</li>\n<li>Process all the ingredients into a paste.</li>\n<li>If you want a coarse "chunky" hummus, process it for a short time.</li>\n<li>If you want a smooth hummus, process it for a longer time.</li>\n</ol>\n\n<p>For a different flavor, you could try blending in a small measure of lemon and coriander, chili pepper, lime and chipotle, harissa and mint, or spinach and feta cheese. Experiment and see what works for you.</p>\n\n<h2>Storage</h2>\n\n<p>Refrigerate the finished hummus in a sealed container. You should be able to use it for about a week after you\'ve made it. If it starts to become fizzy, you should definitely discard it.</p>\n\n<p>Hummus is suitable for freezing; you should thaw it and use it within a couple of months.</p>';
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "答えを表示";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "答えを表示") {
    textarea.value = solutionEntry;
    solution.value = "答えを隠す";
  } else {
    textarea.value = userEntry;
    solution.value = "答えを表示";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = (e) => {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code
textarea.onkeyup = () => {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "答えを表示") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Marking_up_our_recipe_page', 900, 620, "", "") }}

立ち往生した場合は、いつでも \[答えを表示] ボタンを押すか、GitHub リポジトリーの [text-complete.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-complete.html) の例を見ることができます。

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

最後の 2 つの箇条書きはそれらの前の箇条書きと非常に密接に関係しているので（それらはその箇条書きの下に収まるサブ命令や選択のように読みます）、それらを自身の順序なしリストの中に入れ子にして現在のリストの中に入れることは意味があります。4 番目の箇条書き。 これは次のようになります。

```html
<ol>
  <li>Remove the skin from the garlic, and chop coarsely.</li>
  <li>Remove all the seeds and stalk from the pepper, and chop coarsely.</li>
  <li>Add all the ingredients into a food processor.</li>
  <li>
    Process all the ingredients into a paste.
    <ul>
      <li>
        If you want a coarse "chunky" hummus, process it for a short time.
      </li>
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

> I am glad you weren't late.
>
> I am _glad_ you weren't _late_.

最初の文は、その人が遅刻しなかったことに純粋にほっとしているように聞こえます。これに対して 2 つ目の文は、 "glad" と "late" の両方が斜体になっており、相手が少し遅れてきたことに腹を立てている、嫌味な、あるいは受動的な表現に聞こえます。

HTML では、このようなインスタンスをマークアップするために {{htmlelement("em")}} （強調）要素を使用します。文書を読みやすくするだけでなく、これらはスクリーンリーダーによって認識され、異なるトーンの音声で話されます。ブラウザーでは既定でイタリック体になっていますが、純粋にイタリック体にするだけの場合にはこのタグを使用しないでください。その場合は、 {{htmlelement("span")}} 要素と CSS、あるいは {{htmlelement("i")}} 要素（下記参照）を使用してください。

```html
<p>I am <em>glad</em> you weren't <em>late</em>.</p>
```

### 重要性が高い

重要な言葉を強調するために、話し言葉でそれらを強調し、そして書面でそれらを **太字** にする傾向があります。例えば。

> This liquid is **highly toxic**.
>
> I am counting on you. **Do not** be late!

HTML では、このようなインスタンスをマークアップするために {{htmlelement("strong")}} （強い重要性）要素を使用します。 この文書をより便利にするだけでなく、これらもスクリーンリーダーによって認識され、異なるトーンの音声で話されています。ブラウザーでは既定で太字のテキストとしてスタイル設定されていますが、太字のスタイルにするだけの場合にはこのタグを使用しないでください。そのためには、{{htmlelement("span")}} 要素といくつかの CSS、あるいは {{htmlelement("b")}} 要素（下記参照）を使用してください。

```html
<p>This liquid is <strong>highly toxic</strong>.</p>

<p>I am counting on you. <strong>Do not</strong> be late!</p>
```

必要に応じて、 strong と em を相互に入れ子にすることができます。

```html-nolint
<p>This liquid is <strong>highly toxic</strong> — if you drink it, <strong>you may <em>die</em></strong>.</p>
```

### アクティブラーニング: 重要性を付け加えましょう

このアクティブラーニングセクションでは、編集可能な例を示しました。その中で、それらを必要としていると思う言葉に強調と強い重要性を付け加えてみてください。

```html hidden
<h2>ライブ出力</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>編集可能なコード</h2>
<p class="a11y-label">
  Esc を押すとコード領域からフォーカスを移動させることができます（Tab
  はタブ文字を挿入します）。
</p>

<textarea id="code" class="input" style="min-height: 200px; width: 95%">
<h1>Important notice</h1>
<p>On Sunday January 9th 2010, a gang of goths were
  spotted stealing several garden gnomes from a
  shopping center in downtown Milwaukee. They were
  all wearing green jumpsuits and silly hats, and
  seemed to be having a whale of a time. If anyone
   has any information about this incident, please
    contact the police now.</p>
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="リセット" />
  <input id="solution" type="button" value="答えを表示" />
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
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
const code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

const htmlSolution =
  "<h1>Important notice</h1>\n<p>On <strong>Sunday January 9th 2010</strong>, a gang of <em>goths</em> were spotted stealing <strong><em>several</em> garden gnomes</strong> from a shopping center in downtown <strong>Milwaukee</strong>. They were all wearing <em>green jumpsuits</em> and <em>silly hats</em>, and seemed to be having a whale of a time. If anyone has <strong>any</strong> information about this incident, please contact the police <strong>now</strong>.</p>";
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "答えを表示";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "答えを表示") {
    textarea.value = solutionEntry;
    solution.value = "答えを隠す";
  } else {
    textarea.value = userEntry;
    solution.value = "答えを表示";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// Stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead
textarea.onkeydown = (e) => {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code
textarea.onkeyup = () => {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "答えを表示") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Lets_be_important', 700, 520, "", "") }}

### イタリック、太字、下線

これまで説明してきた要素には、明確な意味があります。{{htmlelement("b")}}、{{htmlelement("i")}}、{{htmlelement("u")}} の状況はやや複雑です。CSS がまだ十分に対応されていないか、まったく対応されていなかった時代に、太字、斜体、下線付きのテキストを書くことができるように作られたものです。このような要素は表示にのみ影響を与え、意味には影響を与えない**表示要素**として知られていますが、もはや使用するべきではありません。これまで見てきたように、セマンティクスはアクセシビリティ、SEO などにとって非常に重要だからです。

HTML5 では `<b>`、`<i>`、`<u>` が新しい、やや混乱しやすい意味的な役割で再定義されました。

最適な経験則は次のとおりです。`<b>`、`<i>`、`<u>` を使用するのは、伝統的に太字、斜体、下線を使って意味を伝えてきたものを、より適切な要素がない場合のみで使用してください。通常はあるはずです。 `<strong>`、`<em>`、`<mark>`、`<span>` の方が適切ではないかどうか考えてみてください。

アクセシビリティの考え方を守ることは常に重要です。 イタリック体の概念は、スクリーンリーダーを使っている人、またはラテン系のアルファベット以外の書記体系を使っている人にとってはあまり役に立ちません。

- {{HTMLElement('i')}} は、伝統的にイタリック体で伝えられた意味を伝えるために使われます：外来語、分類名、技術用語、考え...
- {{HTMLElement('b')}} は、伝統的に太字で伝えられている意味を伝えるために使用されます。キーワード、製品名、リードセンテンス...
- {{HTMLElement('u')}} は、下線で伝統的に伝えられている意味を伝えるために使用されます。適切な名前、スペルミス...

> **メモ:** 人々は下線をハイパーリンクと強く関連付けています。したがって、ウェブ上では、リンクのみに下線を引くのが最善です。ウェブ上では、意味的に適切な場合は `<u>` 要素を使用しますが、 CSS を使用して既定の下線をより適切なものに変更することを検討してください。以下の例はその方法を示しています。

```html
<!-- scientific names -->
<p>
  The Ruby-throated Hummingbird (<i>Archilochus colubris</i>) is the most common
  hummingbird in Eastern North America.
</p>

<!-- foreign words -->
<p>
  The menu was a sea of exotic words like <i lang="uk-latn">vatrushka</i>,
  <i lang="id">nasi goreng</i> and <i lang="fr">soupe à l'oignon</i>.
</p>

<!-- a known misspelling -->
<p>Someday I'll learn how to <u class="spelling-error">spel</u> better.</p>

<!-- term being defined when used in a definition -->
<dl>
  <dt>Semantic HTML</dt>
  <dd>
    Use the elements based on their <b>semantic</b> meaning, not their
    appearance.
  </dd>
</dl>
```

## スキルをテストしましょう

この記事の最後にたどり着きましたが、最も重要な情報を覚えていますか？次に移動する前に、この情報を覚えているかどうかを確認するためのテストがいくつかあります - [スキルのテスト: HTML テキストの基本](/ja/docs/Learn/HTML/Introduction_to_HTML/Test_your_skills:_HTML_text_basics) をご覧ください。

## まとめ

今回はここまでです。この記事で、 HTML でテキストをマークアップし始めるためのよい考えが得られ、この領域で最も重要な要素のいくつかを保有するようになったはずです。この領域には、さらに多くの意味的要素があり、このコースの後半にある[高度な書式化](/ja/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)の記事で、さらに多くのことを見ていきます。次の記事では、おそらくウェブで最も重要な要素である[ハイパーリンクを作成する](/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)方法について詳しく見ていくことにします。

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML")}}
