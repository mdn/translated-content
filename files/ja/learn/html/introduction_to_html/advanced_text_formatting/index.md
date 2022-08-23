---
title: 高度なテキスト処理
slug: Learn/HTML/Introduction_to_HTML/Advanced_text_formatting
tags:
  - Beginner
  - CodingScripting
  - Guide
  - HTML
  - Learn
  - Text
  - abbreviation
  - description list
  - quote
  - semantic
translation_of: Learn/HTML/Introduction_to_HTML/Advanced_text_formatting
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}

テキストの書式設定のための HTML には他にも多くの要素がありますが、これは [HTML テキストの基礎](/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals) には書かれていません。この記事で説明されている要素はあまり知られていませんが、知っていると役に立ちます。（これはまだいかなる意味でも完全なリストではありません）。ここでは、注釈、説明リスト、コンピューターコードとその他の関連テキスト、下付き文字と上付き文字、連絡先情報などのマーキングについて学習します。

| 前提条件: | [HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started)に載っている、基本的な HTML に精通していること。[HTML テキストの基礎](/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)に載っている、HTML テキストフォーマット。 |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目的:     | 高度な意味付け機能をマークアップするための、あまり知られていない HTML 要素を学ぶ。                                                                                                                                                                   |

## 説明リスト

HTML テキストの基礎では、HTML で [基本的なリストをマークアップする](/ja/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#Lists)方法を見てきました、しかしたまに出てくる第 3 のリスト — **説明リスト** — については触れていませんでした。このリストの目的は、項目とそれに関連する説明を一緒にマークアップすることで、用語の定義や、質問と回答などに使います。用語の定義の例を見てみましょう:

```
soliloquy
In drama, where a character speaks to themselves, representing their inner thoughts or feelings and in the process relaying them to the audience (but not to other characters.)
monologue
In drama, where a character speaks their thoughts out loud to share them with the audience and any other characters present.
aside
In drama, where a character shares a comment only with the audience for humorous or dramatic effect. This is usually a feeling, thought or piece of additional background information
```

説明リストは他の種類のリストと違うラッパーを使います — {{htmlelement("dl")}} です; それぞれの用語が {{htmlelement("dt")}} (description term; 説明用語) 要素で囲まれて、それぞれの説明は {{htmlelement("dd")}} (description definition; 説明定義) 要素で囲まれます。例のマークアップを完了しましょう:

```html
<dl>
  <dt>独白( soliloquy )</dt>
  <dd>ドラマでは、登場人物が自分自身にしゃべりかけ、内なる考えや感情や、そうなった過程を(他の登場人物ではなく)観客に対して表現します。</dd>
  <dt>独白( monologue)</dt>
  <dd>ドラマで、登場人物が自分の考えを観客や他の登場人物に伝わるように喋ります。</dd>
  <dt>ひそひそ話</dt>
  <dd>ドラマで、登場人物が観客のみに対し、ユーモアやドラマチックな効果を狙ってコメントをします。これは通常は感情や、考えや、追加の背景情報です。</dd>
</dl>
```

ブラウザーデフォルトのスタイルでは、説明を用語からいくらかインデントします。MDN のスタイルはこの慣習にほぼ従いますが、用語を太字にします。

- 独白 (soliloquy)
  - : ドラマでは、登場人物が自分自身にしゃべりかけ、内なる考えや感情や、そうなった過程を(他の登場人物ではなく)観客に対して表現します。
- 独白 (monologue)
  - : ドラマで、登場人物が自分の考えを観客や他の登場人物に伝わるように喋ります。
- ひそひそ話
  - : ドラマで、登場人物が観客のみに対し、ユーモアやドラマチックな効果を狙ってコメントをします。これは通常は感情や、考えや、追加の背景情報です。

注意として、単独の用語に複数の説明をつけるのも許されます、例えば:

- 余談

  - : ドラマで、登場人物が観客のみに対し、ユーモアやドラマチックな効果を狙ってコメントをします。これは通常は感情や、考えや、追加の背景情報です。

    文章では、現在のトピックに関連するが、主な流れには直接くっつけずに脇に置かれるコンテンツの節 (しばしば脇の囲みの中に置かれる)。

### アクティブ学習: 定義をマークアップする

では実際に説明リストを使ってみましょう。ここでは以下の入力フィールドの生テキストをマークアップし、説明リストとして表示されるようにします。あなたがお好きな用語と説明を使って試してみることもできます。

もし何かミスをしても、リセットボタンでいつでも元に戻すことができます。詰まってしまったら「Show solution」ボタンを押して解答を見ましょう。

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;">
</div>

<h2>Editable code</h2>
<p class="a11y-label">Press Esc to move focus away from the code area (Tab inserts a tab character).</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
Bacon
The glue that binds the world together.
Eggs
The glue that binds the cake together.
Coffee
The drink that gets the world running in the morning.
A light brown color.</textarea>

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

var htmlSolution = '<dl>\n <dt>Bacon</dt>\n <dd>The glue that binds the world together.</dd>\n <dt>Eggs</dt>\n <dd>The glue that binds the cake together.</dd>\n <dt>Coffee</dt>\n <dd>The drink that gets the world running in the morning.</dd>\n <dd>A light brown color.</dd>\n</dl>';
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

{{ EmbedLiveSample('Playable_code', 700, 350, "", "", "hide-codepen-jsfiddle") }}

## 引用

HTML には引用をマークアップするための機能もあります。どちらの要素を使用するかは、ブロックとインラインのどちらの引用をマークアップするかによって異なります。

### ブロッククォート

ブロックレベルのコンテンツのセクション (段落、複数段落、リストなど) が他の場所から引用されている場合は、それを表すために {{htmlelement("blockquote")}} 要素で囲む必要があります。{{htmlattrxref("cite","blockquote")}} 属性内に引用のソースを指す URL を含めます。たとえば、次のマークアップは MDN の `<blockquote>` 要素ページから取得されます。

```html
<p>The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block
Quotation Element</em>) indicates that the enclosed text is an extended quotation.</p>
```

これをブロッククォートにするには、次のようにします。

```html
<blockquote cite="https://developer.mozilla.org/ja/docs/Web/HTML/Element/blockquote">
  <p>The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block
  Quotation Element</em>) indicates that the enclosed text is an extended quotation.</p>
</blockquote>
```

ブラウザーのデフォルトのスタイル設定では、これがインデントされた段落として、それが引用であることを示すインジケータとして表示されます。MDN はこれを行いますが、さらにいくつかのスタイルを追加します。

> **HTML `<blockquote>` \*\***要素\*\* (または _HTML Block Quotation 要素_) は、囲まれたテキストが拡張引用符であることを示します。

### インラインクォート

インラインの引用は、{{htmlelement("q")}} 要素を使用することを除いて、まったく同じ方法で機能します。例えば、以下のマークアップには MDN の `<q>` ページからの引用が含まれています。

```html
<p>The quote element — <code>&lt;q&gt;</code> — is <q cite="https://developer.mozilla.org/ja/docs/Web/HTML/Element/q">intended
for short quotations that don't require paragraph breaks.</q></p>
```

ブラウザーのデフォルトのスタイル設定では、これは引用符で囲まれた通常のテキストとしてレンダリングされ、次のようになります。

quote 要素 — `<q>` — は "段落区切りを必要としない短い引用のためのもの" です。

### 引用元

{{htmlattrxref("cite","blockquote")}} 属性の内容は役に立ちそうに見えますが、残念ながらブラウザー、スクリーンリーダーなどはこれについてあまり機能しません。 JavaScript または CSS を使用して独自のソリューションを作成しない限り、ブラウザーに引用元の内容を表示させる方法はありません。引用元のソースをページ上で利用可能にしたい場合は、それをマークアップするためのより良い方法は、{{htmlelement("cite")}} 要素を quote 要素の隣 (または内側) に置くことです。これはまさに引用したリソースのタイトル — 例えば本の名前 — を含むことを意味しますが、とにかく、 `<cite>` 内のテキストを何らかの方法で引用ソースにリンクできない理由はありません。

```html
<p>According to the <a href="https://developer.mozilla.org/ja/docs/Web/HTML/Element/blockquote">
<cite>MDN blockquote page</cite></a>:
</p>

<blockquote cite="https://developer.mozilla.org/ja/docs/Web/HTML/Element/blockquote">
  <p>The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block
  Quotation Element</em>) indicates that the enclosed text is an extended quotation.</p>
</blockquote>

<p>The quote element — <code>&lt;q&gt;</code> — is <q cite="https://developer.mozilla.org/ja/docs/Web/HTML/Element/q">intended
for short quotations that don't require paragraph breaks.</q> -- <a href="https://developer.mozilla.org/ja/docs/Web/HTML/Element/q">
<cite>MDN q page</cite></a>.</p>
```

引用は、デフォルトではイタリック体で表示されています。あなたは [quotations.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/advanced-text-formatting/quotations.html) の例で動作しているこのコードを見ることができます。

### アクティブラーニング: 誰がそう言ったの？

もう一つのアクティブラーニングの時間です！ この例では、あなたにお願いします。

1.  中央の段落を `cite` 属性を含むブロッククォートにします。
2.  3 番目の段落の一部を、`cite` 属性を含むインライン引用に変換します。
3.  各リンクに `<cite>` 要素を含めます。

必要な引用元は以下のとおりです。

- Confucius の引用については http\://www\.brainyquote.com/quotes/authors/c/confucius.html
- http\://www\.affirmationsforpositivethinking.com/index.htm「The Need To Eliminate Negative Self Talk」用

間違えた場合は、リセットボタンを使用していつでもリセットできます。本当に動けなくなったら、_Show solution_ ボタンを押して答えを見てください。

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;">
</div>

<h2>Editable code</h2>
<p class="a11y-label">Press Esc to move focus away from the code area (Tab inserts a tab character).</p>

<textarea id="code" class="input" style="min-height: 150px; width: 95%">
<p>Hello and welcome to my motivation page. As Confucius once said:</p>
<p>It does not matter how slowly you go as long as you do not stop.</p>
<p>I also love the concept of positive thinking, and The Need To Eliminate Negative Self Talk (as mentioned in Affirmations for Positive Thinking.)</p>
</textarea>

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

var htmlSolution = '<p>Hello and welcome to my motivation page. As <a href="http://www.brainyquote.com/quotes/authors/c/confucius.html"><cite>Confucius</cite></a> once said:</p>\n\n<blockquote cite="http://www.brainyquote.com/quotes/authors/c/confucius.html">\n <p>It does not matter how slowly you go as long as you do not stop.</p>\n</blockquote>\n\n<p>I also love the concept of positive thinking, and <q cite="http://www.affirmationsforpositivethinking.com/index.htm">The Need To Eliminate Negative Self Talk</q> (as mentioned in <a href="http://www.affirmationsforpositivethinking.com/index.htm"><cite>Affirmations for Positive Thinking</cite></a>.)</p>';
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

{{ EmbedLiveSample('Playable_code_2', 700, 450, "", "", "hide-codepen-jsfiddle") }}

## 略語

Web を見回すときに見かけるもう 1 つのかなり一般的な要素は {{htmlelement("abbr")}} です — これは略語や頭字語を囲み、その用語の完全な展開 (これは{{htmlattrxref("title")}} 属性内に含まれる) を提供するために使用されます。例をいくつか見てみましょう。

```
<p>We use <abbr title="Hypertext Markup Language">HTML</abbr> to structure our web documents.</p>

<p>I think <abbr title="Reverend">Rev.</abbr> Green did it in the kitchen with the chainsaw.</p>
```

これらは次のようなものに見えます (用語が上に置かれると展開はツールチップに表示されます)。

We use HTML to structure our web documents.

I think Rev. Green did it in the kitchen with the chainsaw.

> **Note:** 別の要素だと、{{htmlelement("acronym")}} があります。これは基本的に `<abbr>` と同じことを行い、特に省略語ではなく頭字語を対象としていました。しかしこれは廃止され、ブラウザーでは `<abbr>` ほどにはサポートされていませんでしたし、同じような機能を備えているため、両方を使用するのは無意味です。 代わりに `<abbr>` を使用してください。

### アクティブラーニング: 略語をマークアップする

このシンプルなアクティブラーニング課題では、単に略語をマークアップしてください。以下のサンプルを使用するか、またはあなた自身のものと交換することができます。

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;">
</div>

<h2>Editable code</h2>
<p class="a11y-label">Press Esc to move focus away from the code area (Tab inserts a tab character).</p>

<textarea id="code" class="input" style="min-height: 50px; width: 95%">
<p>NASA sure does some exciting work.</p>
</textarea>

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

var htmlSolution = '<p><abbr title="National Aeronautics and Space Administration">NASA</abbr> sure does some exciting work.</p>';
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

{{ EmbedLiveSample('Playable_code_3', 700, 300, "", "", "hide-codepen-jsfiddle") }}

## 詳細な連絡先をマークアップする

HTML には連絡先の詳細をマークアップするための要素 — {{htmlelement("address")}} があります。これは単に連絡先の詳細を囲むだけです。例えば：

```html
<address>
  <p>Chris Mills, Manchester, The Grim North, UK</p>
</address>
```

ただし {{htmlelement("address")}} 要素は、HTML 文書を作成した人の連絡先の詳細をマークアップするためのものであり、住所ではありません。マークアップが書かれている文書を書いたのがクリスならば、上記は大丈夫でしょう。このようなものでも大丈夫でしょう：

```html
<address>
  <p>Page written by <a href="../authors/chris-mills/">Chris Mills</a>.</p>
</address>
```

## 上付きと下付き

日付、化学式、数式などの項目をマークアップするときには、上付き文字と下付き文字を使用する必要がある場合があります。{{htmlelement("sup")}} と {{htmlelement("sub")}} 要素がこの仕事を処理します。例えば：

```html
<p>My birthday is on the 25<sup>th</sup> of May 2001.</p>
<p>Caffeine's chemical formula is C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.</p>
<p>If x<sup>2</sup> is 9, x must equal 3 or -3.</p>
```

このコードの出力は次のようになります。

My birthday is on the 25th of May 2001.

Caffeine's chemical formula is C8H10N4O2.

If x2 is 9, x must equal 3 or -3.

## コンピューターコードを表現する

HTML を使用してコンピュータコードをマークアップするために利用可能な要素がいくつかあります。

- {{htmlelement("code")}}: コンピュータコードの一般的な部分をマークアップします。
- {{htmlelement("pre")}}: 空白 (通常はコードブロック) を保持するために — テキスト内でインデントまたは余分な空白を使用すると、ブラウザーはそれを無視し、レンダリングされたページには表示されません。ただし、テキストを `<pre></pre>` タグで囲むと、空白はテキストエディタでの表示と同じようにレンダリングされます。
- {{htmlelement("var")}}: 特に変数名をマークアップするためのものです。
- {{htmlelement("kbd")}}: コンピューターに入力されたキーボード (およびその他の種類の) 入力をマークアップするためのものです。
- {{htmlelement("samp")}}: コンピュータプログラムの出力をマークアップします。

いくつか例を見てみましょう。これら ([other-semantics.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/advanced-text-formatting/other-semantics.html) サンプルファイルのコピーを入手してください) を試してみるべきです：

```html
<pre><code>var para = document.querySelector('p');

para.onclick = function() {
  alert('Owww, stop poking me!');
}</code></pre>

<p>You shouldn't use presentational elements like <code>&lt;font&gt;</code> and <code>&lt;center&gt;</code>.</p>

<p>In the above JavaScript example, <var>para</var> represents a paragraph element.</p>


<p>Select all the text with <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.</p>

<pre>$ <kbd>ping mozilla.org</kbd>
<samp>PING mozilla.org (63.245.215.20): 56 data bytes
64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>
```

上記のコードは次のようになります。

{{EmbedLiveSample('Representing_computer_code','100%',300, "", "", "hide-codepen-jsfiddle") }}

## 日付と時刻をマークアップする

HTML には、時間と日付を機械可読形式でマークアップするための {{htmlelement("time")}} 要素もあります。例えば：

```html
<time datetime="2016-01-20">20 January 2016</time>
```

これはなぜ便利でしょうか？ 人間が日付を書き留める方法はたくさんあります。上記の日付は次のように書くことができます。

- 20 January 2016
- 20th January 2016
- Jan 20 2016
- 20/01/16
- 01/20/16
- The 20th of next month
- 20e Janvier 2016
- 2016 年 1 月 20 日
- 等々

しかしこれらの異なる形式はコンピュータでは容易には認識できません。ページ内のすべてのイベントの日付を自動的に取得してカレンダーに挿入する場合はどうなりますか。{{htmlelement("time")}} 要素を使用すると、この目的のために、明確で機械可読な日時を付けることができます。

上記の基本的な例は単純な機械可読な日付を提供するだけですが、可能な他の多くのオプションがあります。例えば：

```html
<!-- Standard simple date -->
<time datetime="2016-01-20">20 January 2016</time>
<!-- Just year and month -->
<time datetime="2016-01">January 2016</time>
<!-- Just month and day -->
<time datetime="01-20">20 January</time>
<!-- Just time, hours and minutes -->
<time datetime="19:30">19:30</time>
<!-- You can do seconds and milliseconds too! -->
<time datetime="19:30:01.856">19:30:01.856</time>
<!-- Date and time -->
<time datetime="2016-01-20T19:30">7.30pm, 20 January 2016</time>
<!-- Date and time with timezone offset-->
<time datetime="2016-01-20T19:30+01:00">7.30pm, 20 January 2016 is 8.30pm in France</time>
<!-- Calling out a specific week number-->
<time datetime="2016-W04">The fourth week of 2016</time>
```

## まとめ

これで HTML テキストのセマンティクスに関する学習が終わりました。このコースで見たことが HTML テキスト要素の完全なリストではないことに注意してください — 私たちは必要不可欠なもの、そしてあなたがどこかで見るであろう、あるいは少なくとも面白いと思うかもしれないより一般的なものの一部をカバーしたいと思いました。もっと多くの HTML 要素を見つけるために、[HTML 要素のリファレンス](/ja/docs/Web/HTML/Element) ([インラインテキストセマンティクスセクション](/ja/docs/Web/HTML/Element#Inline_text_semantics)は始めるのに素晴らしい場所でしょう) を参照することができます。次回の記事では、HTML 文書のさまざまな部分を構造化するために使用する HTML 要素について説明します。

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}

## このモジュール

- [HTML を始めよう](/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- [What’s in the head? Metadata in HTML](/ja/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
- [HTML text fundamentals](/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)
- [Creating hyperlinks](/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
- [Advanced text formatting](/ja/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)
- [Document and website structure](/ja/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
- [Debugging HTML](/ja/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
- [Marking up a letter](/ja/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter)
- [Structuring a page of content](/ja/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content)
