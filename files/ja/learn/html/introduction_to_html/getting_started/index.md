---
title: HTML を始めよう
slug: Learn/HTML/Introduction_to_HTML/Getting_started
tags:
  - Attribute
  - Beginner
  - CodingScripting
  - Comment
  - Element
  - Guide
  - HTML
  - entity reference
  - whitespace
translation_of: Learn/HTML/Introduction_to_HTML/Getting_started
---
{{LearnSidebar}}{{NextMenu("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML")}}

この記事では HTML の不変的な基礎を扱って、始められるようにします。要素や属性などの重要な用語 (すでに聞き覚えはあるかもしれません)、それらが言語にどう組み込まれているか説明します。また、HTML 要素の構造、典型的な HTML ページの構造を見せて、その他の重要な基礎言語機能について説明します。それでは、 HTML の例とともに見ていきましょう。

| 前提条件: | 基礎的なコンピュータリテラシー、[基本的なソフトウェアのインストール](/ja/Learn/Getting_started_with_the_web/Installing_basic_software)、[ファイル取扱い](/ja/Learn/Getting_started_with_the_web/Dealing_with_files)の基礎理解。 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目的:     | HTML 言語の基礎習得と、いくつかの HTML 要素を書く練習                                                                                                                                                                           |

## HTML とは？

{{glossary("HTML")}} (ハイパーテキスト・マークアップ・ランゲージ／Hypertext Markup Language) はプログラミング言語ではありません。HTML 言語は、訪れたウェブサイトの構成をブラウザーに対して伝えるために使うマークアップ言語です。HTML 言語はウェブ開発者が望むこと次第で、複雑なものにも簡単なものにもなります。HTML は{{glossary("Element", "要素")}}の集まりからなり、コンテンツの一部を要素で囲む（*マークアップ*する）ことで、特定の見せ方・動かし方に変えられます。囲むための{{glossary("Tag", "タグ")}}は、コンテンツの一部をハイパーリンク (ウェブ上の別ページへリンクすること) にしたり、単語を斜体にしたりすることができます。たとえば、次の一行を見てください：

```
My cat is very grumpy
```

この行を独立させたい場合、それを段落タグ ({{htmlelement("p")}}) 要素で囲んで段落指定することで実現できます:

```html
<p>My cat is very grumpy</p>
```

> **Note:** HTML の要素は大文字小文字を区別しません。つまり大文字でも小文字でも書くことができます。例えば {{htmlelement("title")}} 要素は `<title>`、`<TITLE>`、`<Title>`、`<TiTlE>` などと書くことができて、どれも正しく動作します。最も良いのは、一貫性や信頼性、その他の理由のためにすべての要素を小文字で書くことです。

## HTML 要素の分解

先ほどの段落タグの要素についてもう少し詳しく見ていきましょう:

![](grumpy-cat-small.png)

この要素の主要な部分は次のとおりです:

1.  **開始タグ(Opening tag):** 要素名 (この場合は "p")、囲んでいる開き**山括弧**と閉じ**山括弧**で構成されています。これは要素が始まってその効果が開始する位置を宣言しますーこの場合、段落が始まる位置です。
2.  **終了タグ(Closing tag):** 要素名の前に一つのスラッシュが含まれることを除けば、開始タグと同じです。これは要素の終了を宣言しますーこの場合、段落が終わる位置です。終了タグを忘れるのは初心者にありがちなミスで、おかしな結果になってしまいます。
3.  **内容(Content):** これは要素の内容で、この場合、テキストそのものです。
4.  **要素(Element):** 開始タグ + 内容 + 終了タグが要素になります。

### 実習: 最初の HTML 要素を作ってみる

以下の Input 欄にある行を `<em>` と `</em>` で囲んでください (要素を開始するために行の先頭に `<em>` を、要素を終了するために行の末尾に `</em>` をそれぞれ置きます) — これによりその行はイタリック体 (斜体) によって強調表示されるはずです！　この変化は Output 欄でリアルタイムで確認できているはずです。

もし入力ミスをしても、_Reset_ ボタンを押すことでいつでもリセットできます。立ち往生してしまっても _Show solution_ ボタンを押せばいつでもカンニングできます。

```html hidden
<h2>Live output</h2>
<div class="output" style="min-height: 50px;">
</div>

<h2>Editable code</h2>
<p class="a11y-label">Press Esc to move focus away from the code area (Tab inserts a tab character).</p>

<textarea id="code" class="playable-code" style="min-height: 100px;width: 95%">
  This is my text.
</textarea>

<div class="controls">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;
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

var htmlSolution = '<em>This is my text.</em>';
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

{{ EmbedLiveSample('Playable_code', 700, 300, "", "", "hide-codepen-jsfiddle") }}

### 要素のネスト

要素の中に要素を入れることができますーこれは“**ネスト**” (入れ子) と呼ばれています。たとえば “My cat is **very** grumpy.” と記述したい場合、“very” という語を {{htmlelement("strong")}} 要素で囲むことができ、それはその語がより強く強調表示されることを意味します：

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

ただし、要素が正しくネストされていることを確認する必要はあります: 上の例では、開始タグは最初に `p` 要素、その次に `strong` 要素が来ますから、終了タグは最初に `strong` 要素を、一番最後に `p` 要素を置くことになります。次は間違った例です:

```html example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

タグのセットが互いに内側か外側なのかがはっきり分かるように、要素の開始と終了は正しく配置する必要があります。もし上の例のように互いに “掛け違って” しまっている場合、ブラウザーはそのマークアップが本来意図していただろうことを出来るだけ読み取ろうとはしますが、予期しない結果となることは当然に想定されます。ですからこうした “掛け違い” はやめましょう！

### ブロック要素とインライン要素

HTML の要素には 2 つの重要なカテゴリーがあり、それは知っておくべきことです。すなわち、ブロックレベル要素とインライン要素です。

- ブロックレベル要素はウェブページ上で視認できるブロックを形成します — それらはそれより前にあるいかなるコンテンツに対しても新たな行におけるコンテンツとして表示され、そのブロックの後に来るいかなるコンテンツもまた新たな行で表示されることになります。ブロックレベル要素はそのウェブページの構造、たとえば段落・リスト・ナビゲーションメニュー・フッターなどを表すことに使用される傾向があります。ブロックレベル要素はインライン要素の中にネストされることはできませんが、他のブロックレベル要素にネストされることがあります。
- インライン要素はブロックレベル要素の中に包含され、なおかつ、段落全体やコンテンツのグループではなく、ドキュメントの内容の小さな部分だけを囲む要素です。インライン要素はドキュメント内に新たな行を表示させません; それらは通常、例えば、{{htmlelement("a")}} 要素 (ハイパーリンク) 又は {{htmlelement("em")}} や {{htmlelement("strong")}} といった強調要素のように、テキスト段落の中で表示されます。

次の例で考えてみましょう:

```html
<em>first</em><em>second</em><em>third</em>

<p>fourth</p><p>fifth</p><p>sixth</p>
```

{{htmlelement("em")}} 要素はインライン要素なので、以下で確認できるように、最初の 3 つの要素は同じ行で他の要素と互いにスペースを空けずにたたずんでいます。一方で、{{htmlelement("p")}} 要素はブロックレベル要素なので、各要素はその上下にスペースを伴った新たな行で表示されます (この間隔はブラウザーが段落に対して適用するデフォルトの [CSS のスタイル](/ja/docs/Learn/CSS/Introduction_to_CSS)によるものです)。

{{ EmbedLiveSample('Block_versus_inline_elements', 700, 200, "", "") }}

> **Note:** HTML5 においては要素カテゴリが再定義されています: [要素のコンテンツ・カテゴリー](http://www.whatwg.org/specs/web-apps/current-work/complete/section-index.html#element-content-categories)を見てください。これらの定義は従来のものに比べてより正確で、なおかつ曖昧さが少ないものとなっていますが、一方では、それらは “ブロックレベル要素” と “インライン要素” の対比よりも遥かに理解することが難しくなっています。このため、私たちはここのトピックを通じて従来の分類を堅持するつもりです。

> **Note:** このトピックで使っている “ブロック” と “インライン” の用語は [CSS ボックスのタイプ](/ja/docs/Learn/CSS/Introduction_to_CSS/Box_model#Types_of_CSS_boxes)と同じ名前で混同するでしょう。既定ではこれらは関係ありますが、CSS の表示タイプの変更は要素のカテゴリーを変更しませんし、どの要素が入っているべきでどの要素に入れられるべきかにも影響しません。HTML5 でこの用語が落とされた理由は、このとてもよくある混同を防ぐためです。

> **Note:** ブロックレベル要素とインライン要素のリストを含む有用なリファレンスページがあります — [ブロックレベル要素](/ja/docs/Web/HTML/Block-level_elements)と[インライン要素](/ja/docs/Web/HTML/Inline_elements)をご覧ください。

### 空要素

全ての要素が上述の開始タグ・コンテンツ・終了タグのパターンに従っているわけではありません。いくつかの要素は 1 つのタグのみで構成され、それは通常、ドキュメント内でそれが含まれている場所に何かを挿入したり埋め込むために使用されます。例えば、以下の {{htmlelement("img")}} 要素はウェブページ上のそれが含まれた場所に 1 つの画像ファイルを埋め込みます:

```html
<img src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png">
```

これはページに次の画像を出力するはずです:

{{ EmbedLiveSample('Empty_elements', 700, 300, "", "", "hide-codepen-jsfiddle") }}

> **Note:** 空要素 (Empty elements) は Void 要素 (Void elements) と呼ばれていることがあります。

## 属性

要素は次のように属性(Attribute)を持つこともできます:

![&amp;lt;p class="editor-note">My cat is very grumpy&amp;lt;/p>](grumpy-cat-attribute-small.png)

属性は実際のコンテンツの中で表示させたくない「要素に関する追加情報」を保有します。上のケースでは `class` 属性は、その要素に後でスタイル情報などが適用される対象であることを示すものとして使用できるような、固有の名前を持つことを許容します。

各属性は次の要件を満たす必要があります:

1.  属性名と要素名の間に 1 つの半角スペース (その要素内にすでに 1 つ以上の属性が設定されている場合は、併せて各属性名の間)
2.  属性名とそれに続く等号 (=)
3.  属性値。始端から終端までをクォーテーションマーク (引用符) で囲む

### 実習: 要素に属性を追加する

要素のもう一つの例として {{htmlelement("a")}} (これを「アンカー」と言って、テキストの一部を囲んでハイパーリンクにするものです) を考えます。アンカー要素は多くの属性を持つことができますが、例えばこれらのものが使われます:

- `href`: この属性にはリンクが参照するウェブ上のアドレスを指定します。またはリンクをクリックしたときにブラウザーが遷移する場所のことです。例えば、`href="https://www.mozilla.org/"` のように指定します。
- `title`: この属性にはリンクについての追加情報（リンク先のページが何であるかなど）を記載します。例えば、`title="The Mozilla homepage"` のように書きます。この内容はリンクにマウスカーソルを重ねた (マウスホバー) 時にツールチップとして表示されるでしょう。
- `target`: リンク先の内容を表示する場所 (ブラウジングコンテキスト) を指定します。例えば、`target="_blank"` と指定すると、リンク先の内容を新しいタブに表示します。現在のタブにリンク先の内容を表示させたい場合は `target`属性を省略します。

それでは以下の Input 欄を編集して、あなたの好きなサイトのリンクを張ってみましょう。まず、`<a>` 要素を追加します。次に、`<a>` 要素に `href` 属性と `title` 属性を追加します。最後に、新しいタブでリンク先を開くために `target` 属性を追加します。この変化は Output 欄でリアルタイムで確認できているはずです。まずテキストがハイパーリンクに変わります。そのリンクをホバーしてやる (マウスホバー) と `title` 属性のコンテンツが表示されます。そのリンクをクリックすると `href` 属性で指定したページに遷移します。要素名と各属性の間に半角スペースを挿入することに気を付けてください。

もし入力ミスをしても、Reset ボタンを押すことでいつでもリセットできます。立ち往生してしまっても Show solution ボタンを押せばいつでもカンニングできます。

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;">
</div>

<h2>Editable code</h2>
<p class="a11y-label">Press Esc to move focus away from the code area (Tab inserts a tab character).</p>

<textarea id="code" class="input" style="min-height: 100px;width: 95%">
  &lt;p&gt;A link to my favourite website.&lt;/p&gt;
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

var htmlSolution = '<p>A link to my <a href="https://www.mozilla.org/" title="The Mozilla homepage" target="_blank">favourite website</a>.</p>';
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

{{ EmbedLiveSample('Playable_code2', 700, 360, "", "", "hide-codepen-jsfiddle") }}

### 真偽値属性

沢山の HTML ソースを見ていくうちに、属性値のない属性を発見するでしょう。このことは文法的に許されています。こういった属性のことを「真偽値属性」と言います。真偽値属性は一般的に属性名と同じ属性値だけを取ることができます。例えば、`input` 要素の {{htmlattrxref("disabled", "input")}} 属性は真偽値属性ですが、下記のように記述した場合、 input 要素が "使用不可能に" (disabled, グレーアウト表示) なり、データを入力することができなくなります。

```
<input type="text" disabled="disabled">
```

真偽値属性は、略記法として次のように書くことが文法的に許されています。比較のために "使用不可能に" (disabled, グレーアウト表示) しなかった場合の `input` 要素も併記しています。

```html
<input type="text" disabled>

<input type="text">
```

上記の HTML コードの結果は下記のようになります。

{{ EmbedLiveSample('Boolean_attributes', 700, 50, "", "", "hide-codepen-jsfiddle") }}

> **Warning:** 訳者注：下記の様な真偽値属性の属性名と属性値を一致させない記述は HTML の仕様としては誤りです。このような誤りを防ぐために、真偽値属性の真偽値は必ず省略するようにしましょう。
>
> ```
> <input type="text" disabled="foo bar baz">
> ```

### 属性値のクォーテーションマークを省略することについて

ウェブ (正式にはワールド・ワイド・ウェブ) 上の HTML 文章の中には奇妙なマークアップスタイルで記述されているものもあります。その一つとして、「属性値をクォーテーションマークで囲まない」というのがあります。このスタイルでは正しく動作する場合としない場合があります。先ほどの `<a>` タグの例で言うと、このような `href` 属性だけの基本的な使い方では正しく動作します。

```
<a href=https://www.mozilla.org/>favourite website</a>
```

しかし、例えば次のように半角スペースの入った `title` 属性を追加すると動作がおかしくなります。

```html example-bad
<a href=https://www.mozilla.org/ title=The Mozilla homepage>favourite website</a>
```

この場合だと「`title` 属性は "The" という属性値を持ち、それとは別に `<a>`要素が `Mozilla` と `homepage` という真偽値属性を持つ」というようにブラウザーは誤解します。このように、「属性値をクォーテーションマークで囲まない」ことによる違いは HTML を見ただけでは分からないので、コードのエラーや予期しない動作の原因となります。このコードをブラウザーに解釈させたものを下に用意しましたので、このリンク上をホバーしてツールチップに表示される文字がどうなっているかを確認してみましょう。

{{EmbedLiveSample('Omitting_quotes_around_attribute_values', 700, 100, "", "", "hide-codepen-jsfiddle") }}

安全なコードを書くために、必ず属性値にはクォーテーションマークをつけましょう。そうすれば、先ほどのような問題を避けることができ、コードの可読性も向上します。

### ダブルクォートかシングルクォートか？

この記事では属性を囲むクォーテーションマークとしてすべてダブルクォート ( `"` ) を使用しています。しかし誰かの HTML でシングルクォート ( `'` ) を見ることがあるかもしれません。これは書き方の問題なので、属性値はダブルクォートで囲んでもシングルクォートで囲んでも構いません。例えば次の 2 つの行は等価です。

```html
<a href="http://www.example.com">A link to my example.</a>

<a href='http://www.example.com'>A link to my example.</a>
```

但し、これらを混在させて使うことはできません。次の記述は誤りです。

```html example-bad
<a href="http://www.example.com'>A link to my example.</a>
```

属性値をダブルクォートで囲んでいる場合は、その内部でシングルクォートを書くこともできますし、シングルクォートの中でダブルクォートを書くこともできます。

```html
<a href="http://www.example.com" title="Isn't this fun?">A link to my example.</a>
```

ただし、両方の引用符が同じ種類 (一重引用符または二重引用符) の引用符の中に引用符を含める場合は、引用符に [HTML エンティティを使用する](/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started#Entity_references_Including_special_characters_in_HTML)必要があります。たとえば、これは壊れます：

```html example-bad
<a href='http://www.example.com' title='Isn't this fun?'>A link to my example.</a>
```

だからあなたはこのようにする必要があります：

```html
<a href='http://www.example.com' title='Isn&#39;t this fun?'>A link to my example.</a>
```

## HTML 文書の構成

これまで、個々の HTML の要素の基礎を説明しましたが、それら単体ではあまり有用ではありません。ここでは個々の HTML の要素を使って HTML ページを構成する方法を説明していきます。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

上記の HTML 文書を例に、順に解説していきます。

1.  `<!DOCTYPE html>`: いわゆる "doctype" というものです。 HTML の黎明期(1991 ～ 1992 年あたり)には、 "doctype" というものは HTML の文法セットへのリンクとしての役割を持っていました。当時の "doctype" の記述は自動エラーチェックが容易であるなどの長所も持っていました。当時の "doctype" は、次のようなものでした。

    ```
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    ```

    しかし、今日においては誰も HTML における "doctype" の本来的な役割なんて考えていません。 "doctype" はつじつま合わせのための歴史的な産物です。今日においてには `<!DOCTYPE html>` は正しい "doctype" と認識させるための最も簡潔な記述です。 "doctype" について、これ以上知る必要はありません。

2.  `<html></html>`: {{htmlelement("html")}} 要素。 HTML 文書は`<html>`要素 1 つだけからなります。この要素はページ全体であり、`<html>` タグはページ全体を囲んでいます。`<html>` 要素はルート要素とも呼ばれます。
3.  `<head></head>`: {{htmlelement("head")}} 要素。この要素は、HTML ページに入れておきたいが見せたくないすべてのものを入れておくコンテナーの働きをします。例えば、検索結果に出したいページのキーワードや説明や、ページのスタイルを指定するための CSS や、文字エンコーディングの定義などが含まれます。より詳しくは、このシリーズの次の記事で詳しく説明します。
4.  `<meta charset="utf-8">`: この要素はこの文書が UTF-8 という文字コードを使用しているということをブラウザーに伝えるためのものです。UTF-8 は世界中の自然言語の大半をカバーしている文字コードです。重要なこととしてあらゆるテキストコンテンツを扱うことができます。文字コードとして UTF-8 を指定しない手はなく、そうしておけば後で説明する問題を回避できます。
5.  `<title></title>`: {{htmlelement("title")}} 要素。これはページのタイトルを指定するもので、ページが読み込まれたブラウザーのタブに表示されます。また、このページをブラウザー上でブックマークしたりお気に入りに追加したりすると `<title>` 要素の内容がページの説明として使われます。
6.  `<body></body>`: {{htmlelement("body")}} 要素。この中にユーザーがページを訪問した時に表示したいコンテンツ (例えば、テキスト、画像、ビデオ、ゲーム、オーディオトラック等) を記述します。

> **Note:** 訳者注: 1. の "doctype" は文書型宣言(DTD)と呼ばれております。 HTML 以外のマークアップ言語(XML, SVG, MathML 等)においては今日においても重要な意味を持っています。

### 実習: HTML 文書をカスタマイズする

もし HTML 文書を書く練習をローカルコンピューターで試したい場合は、次のようにします。

1.  上記の HTML ページのコードサンプルの全体を選択して「コピー」します。
2.  テキストエディタ上で新規ファイルを作成します。
3.  新規テキストファイルの中で「貼り付け」、または「ペースト」します。
4.  `index.html` という名前でファイルを保存します。

> **Note:** **脚注**: 元となる HTML テンプレートは [MDN ラーニングエリア GitHub リポジトリ ](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html)にも置いてあります。

ウェブブラウザーでこのファイルを開くとレンダリングされた HTML 文書が表示されます。コードを編集した場合は、ブラウザー上でページの更新 (または、再読み込み) を行うと編集結果が反映されます。最初はこんな表示です。

![A simple HTML page that says This is my page](template-screenshot.png)この実習では、 上に示したようにあなたのコンピューター内部でコード編集してもいいですが、この節の下の方に編集できるフォーム (Input, Output と付されているものです) を使うこともできます。スマートフォンなどで学習する際はこのフォームが役に立つと思います。この節のフォームの Input の部分は、 {{htmlelement("body")}} 要素の中身を表しています。以下の手順を踏んで、ページをカスタマイズしてみましょう。

> **Note:** 訳者注: 下記の演習項目は後で詳しく学習できますので、できなくても構いません。

- {{htmlelement("body")}} 要素の開始タグ以降にページのメインタイトルを書きます。このメインタイトルは `<h1>` 開始タグと `</h1>` 終了タグで囲みます。ちなみにこれは `head` 要素の中に記述する `title` 要素とは異なります。実際にやってみると理解できると思います。フォームで編集する場合はすでに `body` 要素の中なので、コードの先頭にメインタイトルを記述する形になります。
- すでに`<p>`要素が記述されていますので、その段落を好きな内容にしてみましょう。また、新しい段落を好きなように追加してみましょう。
- 段落 (`<p>`要素) 内で重要な言葉は `<strong>` 開始タグと `</strong>` 終了タグで囲んで太字で強調しましょう。
- [この記事の前半あたり](/ja/Learn/HTML/Introduction_to_HTML/Getting_started#Active_learning_Adding_attributes_to_an_element)で説明したリンクを段落のどれかに張ってみましょう。
- [この記事の前半あたり](/ja/Learn/HTML/Introduction_to_HTML/Getting_started#Empty_elements)で説明した方法を使って、段落の下に画像を挿入しましょう。説明では Firefox のロゴ画像を使用しましたが、他の画像を持ってくることにチャレンジしてもいいと思います。自分のコンピューターの中のファイルやウェブ上のどこか他の場所にある画像リンクといったものです。

間違えた場合は _Reset_ ボタンを押すことで元に戻すことができます。分からない場合は Show solution ボタンを押して答えを見てみましょう。

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;">
</div>

<h2>Editable code</h2>
<p class="a11y-label">Press Esc to move focus away from the code area (Tab inserts a tab character).</p>

<textarea id="code" class="input" style="min-height: 100px;width: 95%">
  &lt;p&gt;This is my page&lt;/p&gt;
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

img {
  max-width: 100%;
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

var htmlSolution = '<p>I really enjoy <strong>playing the drums</strong>. One of my favourite drummers is Neal Peart, who\ plays in the band <a href="https://en.wikipedia.org/wiki/Rush_%28band%29" title="Rush Wikipedia article">Rush</a>.\ My favourite Rush album is currently <a href="http://www.deezer.com/album/942295">Moving Pictures</a>.</p>\ <img src="http://www.cygnus-x1.net/links/rush/images/albums/sectors/sector2-movingpictures-cover-s.jpg">';
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

{{ EmbedLiveSample('Playable_code3', 700, 360, "", "", "hide-codepen-jsfiddle") }}

### HTML 内の空白

上記の例において、大量の半角スペースが挿入されていることに気づいたかもしれません。大量の半角スペースはあっても無くても構わないものです。次の２つのコードスニペット (それ単体では動作しないコード例のこと) は等価です。

```html
<p>Dogs are silly.</p>

<p>Dogs        are
         silly.</p>
```

半角スペースをどれ程入力しても (そして、どれ程改行しても)、 HTML パーサはそれを１つの半角スペースとして認識します。ではどうして半角スペースを沢山入力するのでしょうか。それは HTML コードの可読性を向上させるためです。 HTML のコードがいいフォーマット(書式)で記述されていて、１行の中に沢山タグをゴチャゴチャに詰め込まなければ、そのコードの中がどうなっているかが分かりやすくなります。この記事ではインデント(字下げ)として半角スペース２文字分を挿入しています。 HTML のフォーマット(例えば、インデントとして半角スペース何文字分を挿入するのか等)については HTML の書き手によって様々ですが、フォーマットを意識して記述しなければなりません。

> **Warning:** 訳者注: 全角スペースは、 HTML の文法としては半角スペースや改行とは全く異なる扱いになるので、全角スペースを用いてインデントを行ったりしないでください。また、日本語の文章を段落要素`<p>`の中で改行すると、半角スペースが挿入されます。
>
> ```
> <p>私は日本人です。
> 四季を好みます。</p>
> ```
>
> 従って、段落要素(`<p>`)の中では一切改行はしないでください。ただ、長い文章では段落要素の中身が横に長くなってしまいます。その場合は、テキストエディタで「右端で折り返す」などの設定を行ってみてください。
>
> ```
> <p>私は日本人です。四季を好みます。</p>
> ```
>
> 段落要素の中で改行したい場合は、改行要素`<br>`を用います(文章内の会話や、詩などに用います)。
>
> ```
> <p>彼は言いました。<br>
> 「私は日本人です。四季を好みます。」<br>
> 私は彼の発した突然の一言にはっと驚きました。</p>
> ```

## 実体参照: HTML に特殊文字を含める

> **Note:** 訳者注: HTML エンティティ、実体参照、文字参照、文字実体参照、は、それぞれほぼ同じ意味で用いられます。

HTML では`<`、`>`、`"`、`'`、`&`の５つの文字は特殊文字と呼ばれています。これら５つの文字は HTML の文法自身の一部です。ではこれらの文字そのものを組版したい場合はどうすればいいのでしょうか。例えば「 You & Me 」や「 x < y 」等の表記をしたい場合です。

そのような場合は、「文字参照」を使用する必要があります。文字参照とは「文字を表す特別なコード」のことであり、これを使うことで正確な組版を行うことができます。文字参照は必ずアンパサンド (&) で始まり、セミコロン(;)で終わります。

| 実際の文字 | 等価な文字参照 |
| ---------- | -------------- |
| <          | \&lt;          |
| >          | \&gt;          |
| "          | \&quot;        |
| '          | \&apos;        |
| &          | \&amp;         |

次の例では Web 技術について記述している段落要素を２つ並べています。

```html
<p>HTML では、<p>要素で段落を定義します。</p>

<p>HTML では、&lt;p&gt;要素で段落を定義します。</p>
```

上記の例をブラウザーに解釈させたものを下記に出力しています。１つ目の段落の出力が間違っていることが分かるかと思います。2 つ目の `<p>` を新しい段落の始まりとして認識しているためです。２つ目の段落は正しく出力されています。山括弧(`<`、`>`)を文字参照に置き換えているためです。

{{ EmbedLiveSample('Entity_references_Including_special_characters_in_HTML', 700, 200, "", "", "hide-codepen-jsfiddle") }}

> **Note:** 脚注: HTML で使用することのできる文字実体参照のリストはこの Wikipedia の記事で確認することができます: [List of XML and HTML character entity references](http://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references).

## HTML におけるコメント

大抵のプログラミング言語同様、HTML においてもコード内にコメントを書くことができます。コメントはブラウザーによって無視されるので、組版には反映されません。コメントの目的としては、 HTML コードがどのように動作するのかや、コードの別の部分がどのように動作するのかを述べるることできます。コメントは、 HTML のコードを書いて半年以上経ってから自分で見返して、自分が何をしたのかを思い出すことができない時に大変有用となります。また、自分のコードを他の人に読んでもらう時にも有用です。

HTML ファイル内の一部をコメントにするには、その箇所を特別なマーカーの `<!--` と `-->` で囲みます。例えば次のような感じです。

```html
<p>私はコメントの外にいます。</p>

<!-- <p>私はコメントの中にいます。</p> -->
```

下記を見ると、最初の段落は表示されますが、次の段落は表示されないことが分かります。

{{ EmbedLiveSample('HTML_comments', 700, 100) }}

## 要約

この記事の最後にたどり着きました — HTML のほんの初歩のツアーを楽しんでこられたことを望んでいます！ここではこの言語がどのようなものか、基本的にどうやって動作するのかを理解し、いくつかの要素と属性を書くことができるようになったでしょう。あなたがいる場所は完璧な場所です、続きの記事ではすでに見てきたことをもっと詳細に経験して、いくつか新しい言語機能を紹介します。引き続き注目！

> **Note:** **脚注**: さて、 HTML についてより深く学習するために [CSS](/ja/docs/Learn/CSS) (Cascading Style Sheets)の基礎についても理解しておきましょう。 CSS はウェブページのスタイルをカスタマイズするために使用します。具体的には、テキストのフォントや色を変えたり、ページレイアウトを設定したりといったことがあげられます。 HTML と CSS は相互補完、つまり２つで１つです。両方学習するとすぐ気づくでしょう。

## 関連情報

- [CSS を使って HTML 要素に色をつける](/ja/docs/Web/HTML/Applying_color)

{{NextMenu("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML")}}

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
