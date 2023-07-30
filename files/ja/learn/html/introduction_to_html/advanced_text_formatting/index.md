---
title: 高度なテキスト整形
slug: Learn/HTML/Introduction_to_HTML/Advanced_text_formatting
l10n:
  sourceCommit: 65b9418c7d0e3a331ac50249adf0024f44789923
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}

テキストの整形のための HTML には他にも多くの要素がありますが、これは [HTML テキストの基礎](/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals) には書かれていません。この記事で説明されている要素はあまり知られていませんが、知っていると役に立ちます（これはまだいかなる意味でも完全なリストではありません）。ここでは、注釈、説明リスト、コンピューターコードとその他の関連テキスト、下付き文字と上付き文字、連絡先情報などのマークアップについて学習します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >HTML を始めよう</a
        >に載っている、基本的な HTML を理解していること。
        <a
          href="/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >HTML テキストの基礎</a
        >に載っている、 HTML のテキスト整形。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        高度な意味付け機能をマークアップするための、あまり知られていない HTML 要素を学ぶ。
      </td>
    </tr>
  </tbody>
</table>

## 説明リスト

HTML テキストの基礎では、HTML で [基本的なリストをマークアップする](/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#リスト)方法を見てきました、しかしたまに出てくる第 3 のリスト — **説明リスト** — については触れていませんでした。このリストの目的は、項目とそれに関連する説明を一緒にマークアップすることで、用語の定義や、質問と回答などに使います。用語の定義の例を見てみましょう。

```
独り言 (soliloquy)
ドラマで、登場人物が自分自身にしゃべりかけ、内なる考えや感情や、そうなった過程を（他の登場人物ではなく）観客に対して表現するものです。
独白 (monologue)
ドラマで、登場人物が自分の考えを観客や他の登場人物に伝わるように喋るものです。
傍白 (aside)
ドラマで、登場人物が観客のみに対し、ユーモアやドラマチックな効果を狙ってコメントをします。これは通常は感情や、考えや、追加の背景情報です。
```

説明リストは他の種類のリストと違うラッパー — {{htmlelement("dl")}} を使います。それぞれの用語を {{htmlelement("dt")}} （description term、説明用語）要素で囲み、それぞれの説明は {{htmlelement("dd")}} （description definition、説明定義）要素で囲みます。

### 説明リストの例

例をマークアップしましょう。

```html
<dl>
  <dt>独り言 (soliloquy)</dt>
  <dd>
    ドラマで、登場人物が自分自身にしゃべりかけ、内なる考えや感情や、そうなった過程を（他の登場人物ではなく）観客に対して表現するものです。
  </dd>
  <dt>独白 (monologue)</dt>
  <dd>
    ドラマで、登場人物が自分の考えを観客や他の登場人物に伝わるように喋るものです。
  </dd>
  <dt>傍白 (aside)</dt>
  <dd>
    ドラマで、登場人物が観客のみに対し、ユーモアやドラマチックな効果を狙ってコメントをします。これは通常は感情や、考えや、追加の背景情報です。
  </dd>
</dl>
```

ブラウザーの既定のスタイルでは、説明を用語からいくらかインデントします。 MDN のスタイルはこの慣習にほぼ従いますが、用語を太字にします。

{{EmbedLiveSample('Description_list_example', '100%', '285px')}}

### 1 つの用語に複数の説明

なお、例えば、単一の用語に複数の説明を持たせることも可能です。

```html
<dl>
  <dt>傍白 (aside)</dt>
  <dd>
    ドラマでは、登場人物が観客のみに対し、ユーモアやドラマチックな効果を狙ってコメントをします。これは通常は感情や、考えや、追加の背景情報です。
  </dd>
  <dd>
    文章では、現在のトピックに関連するコンテンツの一部ですが、本文の流れに直接合わないため、近くに表示されます（多くの場合、横に並んでいる枠の中に入ります）。
  </dd>
</dl>
```

{{EmbedLiveSample('Multiple_descriptions_for_one_term', '100%', '193px')}}

### アクティブラーニング: 定義リストのマークアップ

説明リストを作ってみましょう。入力欄の生テキストに要素を追加して、出力欄に説明文のリストとして現れるようにしましょう。お望みなら、自身の用語や説明文を使用してみるのもいいでしょう。

間違えたら、常に _リセット_ ボタンを使用してリセットすることができます。本当に行き詰まったら、_答えを表示_ ボタンを押して、答えを見ることができます。

```html hidden
<h2>ライブ出力</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>編集可能なコード</h2>
<p class="a11y-label">
  Esc を押すとコード領域からフォーカスを移動させることができます（Tab
  はタブ文字を挿入します）。
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
Bacon
The glue that binds the world together.
Eggs
The glue that binds the cake together.
Coffee
The drink that gets the world running in the morning.
A light brown color.
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
  "<dl>\n <dt>Bacon</dt>\n <dd>The glue that binds the world together.</dd>\n <dt>Eggs</dt>\n <dd>The glue that binds the cake together.</dd>\n <dt>Coffee</dt>\n <dd>The drink that gets the world running in the morning.</dd>\n <dd>A light brown color.</dd>\n</dl>";
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

{{ EmbedLiveSample('Active_learning_Marking_up_a_set_of_definitions', 700, 350) }}

## 引用

HTML には引用をマークアップするための機能もあります。どちらの要素を使用するかは、ブロックとインラインのどちらの引用をマークアップするかによって異なります。

### ブロック引用

ブロックレベルの内容（段落、複数の段落、リストなど）の一部が他の場所から引用されている場合、それを示すために {{htmlelement("blockquote")}} 要素で囲み、 [`cite`](/ja/docs/Web/HTML/Element/blockquote#cite) 属性の中に引用元を指す URL を記載する必要があります。例えば、以下のマークアップは MDN の `<blockquote>` 要素のページから引用しています。

```html
<p>
  The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
  <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an
  extended quotation.
</p>
```

これをブロック引用にするには、次のようにします。

```html
<p>こちらが引用です。</p>
<blockquote
  cite="https://developer.mozilla.org/ja/docs/Web/HTML/Element/blockquote">
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
  </p>
</blockquote>
```

ブラウザーの既定のスタイル設定では、これがインデントされた段落として、それが引用であることを示すインジケーターとして表示されます。

{{EmbedLiveSample('Blockquotes', '100%', '200px')}}

### インライン引用

インラインの引用は、{{htmlelement("q")}} 要素を使用することを除いて、まったく同じ方法で機能します。例えば、以下のマークアップには MDN の `<q>` ページからの引用が含まれています。

```html
<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q cite="https://developer.mozilla.org/ja/docs/Web/HTML/Element/q">
    intended for short quotations that don't require paragraph breaks.
  </q>
</p>
```

ブラウザーの既定のスタイル設定では、これは引用符で囲まれた通常のテキストとしてレンダリングされ、次のようになります。

{{EmbedLiveSample('Inline_quotations', '100%', '78px')}}

### 引用元

[`cite`](/ja/docs/Web/HTML/Element/blockquote#cite) 属性の内容は有用そうに見えますが、残念ながらブラウザーや スクリーンリーダーなどは、この属性を実際にはあまり使用してくれません。 JavaScript や CSS を使って自身の解決策を書かない限り、ブラウザーに `cite` の内容を表示させる方法はありません。もしページ上で引用元を利用できるようにしたいのであれば、リンクやその他の適切な方法で本文中に利用できるようにする必要があります。

{{htmlelement("cite")}} 要素がありますが、これは引用されたリソースのタイトル、例えば書籍の名前を格納することを意味しています。しかし、 `<cite>` 内のテキストを何らかの方法で引用元とリンクできない理由はありません。

```html-nolint
<p>
  According to the
  <a href="/ja/docs/Web/HTML/Element/blockquote">
    <cite>MDN blockquote page</cite></a>:
</p>

<blockquote
  cite="https://developer.mozilla.org/ja/docs/Web/HTML/Element/blockquote">
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
  </p>
</blockquote>

<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q cite="https://developer.mozilla.org/ja/docs/Web/HTML/Element/q">
    intended for short quotations that don't require paragraph breaks.
  </q>
  — <a href="/ja/docs/Web/HTML/Element/q"><cite>MDN q page</cite></a>.
</p>
```

引用元は、既定ではイタリック体で表示されます。

{{EmbedLiveSample('Citations', '100%', '179px')}}

### アクティブラーニング: 誰がそう言ったの？

もうひとつのアクティブラーニングの例です。この例では、次のことを行ってください。

1. 中央の段落を `cite` 属性を含むブロック引用にしましょう。
2. 3 番目の段落の一部を、`cite` 属性を含むインライン引用に変換しましょう。
3. 各リンクに `<cite>` 要素を含めましょう。

必要な引用元は以下のとおりです。

- Confucius の引用については `http://www.brainyquote.com/quotes/authors/c/confucius.html`
- "The Need To Eliminate Negative Self Talk" には `http://example.com/affirmationsforpositivethinking`

間違えた場合は、 _リセット_ ボタンを使用していつでもリセットできます。本当に動けなくなったら、_答えを表示_ ボタンを押して答えを見てください。

```html hidden
<h2>ライブ出力</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>編集可能なコード</h2>
<p class="a11y-label">
  Esc を押すとコード領域からフォーカスを移動させることができます（Tab
  はタブ文字を挿入します）。
</p>

<textarea id="code" class="input" style="min-height: 150px; width: 95%">
<p>Hello and welcome to my motivation page. As Confucius' quotes site says:</p>
<p>It does not matter how slowly you go as long as you do not stop.</p>
<p>I also love the concept of positive thinking, and The Need To Eliminate Negative Self Talk (as mentioned in Affirmations for Positive Thinking.)</p>
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
  '<p>Hello and welcome to my motivation page. As <a href="http://www.brainyquote.com/quotes/authors/c/confucius.html"><cite>Confucius\' quotes site</cite></a> says:</p>\n\n<blockquote cite="http://www.brainyquote.com/quotes/authors/c/confucius.html">\n <p>It does not matter how slowly you go as long as you do not stop.</p>\n</blockquote>\n\n<p>I also love the concept of positive thinking, and <q cite="http://example.com/affirmationsforpositivethinking">The Need To Eliminate Negative Self Talk</q> (as mentioned in <a href="http://example.com/affirmationsforpositivethinking"><cite>Affirmations for Positive Thinking</cite></a>.)</p>';
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

{{ EmbedLiveSample('Active_learning_Who_said_that', 700, 450) }}

## 略語

ウェブを見て回っているときによく出会うもう一つの要素は {{htmlelement("abbr")}} です。これは略語や頭字語を囲むために使用されます。どちらかを記載する場合、最初の使用では、略語をマークアップする `<abbr>` と共に、プレーンテキストでその用語の完全な展開を提供してください。これは、ユーザーエージェントに内容をどのように告知／表示するかのヒントを提供すると同時に、すべてのユーザーにその略語の意味を知らせます。

略語に加えて展開形を提供することにあまり意味がありません。略語や頭字語がかなり短縮された用語である場合、 [`title`](/ja/docs/Web/HTML/Global_attributes#title) 属性の値として用語の完全な展開形を提供してください。

### 略語の例

例をご覧ください。

```html
<p>
  We use <abbr>HTML</abbr>, Hypertext Markup Language, to structure our web
  documents.
</p>

<p>
  I think <abbr title="Reverend">Rev.</abbr> Green did it in the kitchen with
  the chainsaw.
</p>
```

これらは次のように見えます。

{{EmbedLiveSample('Abbreviation_example', '100%', '150')}}

> **メモ:** 以前のバージョンの HTML では {{htmlelement("acronym")}} 要素にも対応していましたが、省略形と頭字語の両方を表現するために `<abbr>` を使用することにしたため、 HTML 仕様から削除されました。`<acronym>` は使用すべきではありません。

### アクティブラーニング: 略語のマークアップ

この簡単なアクティブラーニングの課題では、略語をマークアップしていただきたいと思います。以下のサンプルを使用することもできますし、自身のものに置き換えることもできます。

```html hidden
<h2>ライブ出力</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>編集可能なコード</h2>
<p class="a11y-label">
  Esc を押すとコード領域からフォーカスを移動させることができます（Tab
  はタブ文字を挿入します）。
</p>

<textarea id="code" class="input" style="min-height: 50px; width: 95%">
<p>NASA, the National Aeronautics and Space Administration, sure does some exciting work.</p>
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
  "<p><abbr>NASA</abbr>, the National Aeronautics and Space Administration, sure does some exciting work.</p>";
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

{{ EmbedLiveSample('Active_learning_marking_up_an_abbreviation', 700, 300) }}

## 詳細な連絡先のマークアップ

HTML には連絡先の詳細をマークアップするための要素 — {{htmlelement("address")}} があります。これは単に連絡先の詳細を囲むだけです。例えば、

```html
<address>Chris Mills, Manchester, The Grim North, UK</address>
```

また、もっと複雑なマークアップや、他にも例えば連絡先情報などを記載することも可能です。

```html
<address>
  <p>
    Chris Mills<br />
    Manchester<br />
    The Grim North<br />
    UK
  </p>

  <ul>
    <li>Tel: 01234 567 890</li>
    <li>Email: me@grim-north.co.uk</li>
  </ul>
</address>
```

なお、リンク先のページに連絡先が記載されている場合は、このような方法でも問題ないでしょう。

```html
<address>
  Page written by <a href="../authors/chris-mills/">Chris Mills</a>.
</address>
```

> **メモ:** {{htmlelement("address")}} 要素は、最も近い {{htmlelement("article")}} または {{htmlelement("body")}} 要素で含まれる文書の連絡先情報を提供するためにのみ使用すべきです。サイト全体の連絡先を記載するためにサイトのフッターに使用したり、著者の連絡先を記載するために記事の中で使用することは正しいことですが、そのページの内容に関係のないアドレスのリストをマークアップすることはできません。

## 上付きと下付き

日付、化学式、数式などの項目をマークアップするときには、上付き文字と下付き文字を使用する必要がある場合があります。{{htmlelement("sup")}} と {{htmlelement("sub")}} 要素がこの仕事を処理します。例えば、

```html
<p>My birthday is on the 25<sup>th</sup> of May 2001.</p>
<p>
  Caffeine's chemical formula is
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.
</p>
<p>If x<sup>2</sup> is 9, x must equal 3 or -3.</p>
```

このコードの出力は次のようになります。

{{ EmbedLiveSample('Superscript_and_subscript', '100%', 160) }}

## コンピューターのコードを表現する

HTML を使用してコンピュータのコードをマークアップするために利用可能な要素がいくつかあります。

- {{htmlelement("code")}}: コンピュータのコードの一般的な部分をマークアップします。
- {{htmlelement("pre")}}: 空白を保持する場合（一般的にはコードブロック） — テキストの中でインデントや余分な空白を使用すると、ブラウザーはそれを無視するので、レンダリングされたページにはそれが表示されません。しかし、テキストを `<pre></pre>` タグで囲むと、エディターで見たのと同じように空白が表示されるようになります。
- {{htmlelement("var")}}: 特に変数名をマークアップするためのものです。
- {{htmlelement("kbd")}}: コンピューターに入力されたキーボード（およびその他の種類の）入力をマークアップするためのものです。
- {{htmlelement("samp")}}: コンピュータプログラムの出力をマークアップします。

いくつか例を見てみましょう。これら ([other-semantics.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/advanced-text-formatting/other-semantics.html) サンプルファイルのコピーを入手してください) を試してみるべきです：

```html
<pre><code>const para = document.querySelector('p');

para.onclick = function() {
  alert('Owww, stop poking me!');
}</code></pre>

<p>
  You shouldn't use presentational elements like <code>&lt;font&gt;</code> and
  <code>&lt;center&gt;</code>.
</p>

<p>
  In the above JavaScript example, <var>para</var> represents a paragraph
  element.
</p>

<p>Select all the text with <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.</p>

<pre>$ <kbd>ping mozilla.org</kbd>
<samp>PING mozilla.org (63.245.215.20): 56 data bytes
64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>
```

上記のコードは次のようになります。

{{ EmbedLiveSample('Representing_computer_code','100%',350) }}

## 日付と時刻をマークアップする

HTML には、時間と日付を機械可読形式でマークアップするための {{htmlelement("time")}} 要素もあります。例えば、

```html
<time datetime="2016-01-20">20 January 2016</time>
```

なぜこれが有用なのか？さて、人間が日付を書き表す方法はいろいろあります。上の日付はこう書くことができます。

<!-- markdownlint-disable MD033 -->

- 20 January 2016
- 20th January 2016
- Jan 20 2016
- 20/01/16
- 01/20/16
- The 20th of next month
- <span lang="fr">20e Janvier 2016</span>
- <span lang="ja">2016 年 1 月 20 日</span>
- など

<!-- markdownlint-enable MD033 -->

しかしこれらの異なる形式はコンピューターでは容易には認識できません。ページ内のすべてのイベントの日付を自動的に取得してカレンダーに挿入する場合はどうなりますか。 {{htmlelement("time")}} 要素を使用すると、この目的のために、明確で機械可読な日時を付けることができます。

上記の基本的な例は単純な機械可読な日付を提供するだけですが、可能な他の多くのオプションがあります。例えば、

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
<!-- Date and time with timezone offset -->
<time datetime="2016-01-20T19:30+01:00">
  7.30pm, 20 January 2016 is 8.30pm in France
</time>
<!-- Calling out a specific week number -->
<time datetime="2016-W04">The fourth week of 2016</time>
```

## スキルをテストしましょう

この記事の最後にたどり着きましたが、最も重要な情報を覚えていますか？次に移動する前に、この情報を覚えているかどうかを確認するためのテストがいくつかあります - [スキルのテスト: 高度な HTML テキスト](/ja/docs/Learn/HTML/Introduction_to_HTML/Test_your_skills:_Advanced_HTML_text) をご覧ください。

## まとめ

これで HTML のテキストの意味づけに関する学習は終了です。このコースで見てきたものは、 HTML テキスト要素の完全なリストではないことに留意してください。私たちは、基本的なものと、より一般的なものをカバーしようとしました。より多くの HTML 要素を探すには、 [HTML 要素リファレンス](/ja/docs/Web/HTML/Element) を参照してください（[インラインテキスト意味づけ](/ja/docs/Web/HTML/Element#インラインテキスト意味付け)の節はよい出発点となることでしょう）。次の記事では、 HTML 要素を [HTML 文書のさまざまな部分を構造化する](/ja/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)ために使用する方法ついて見ていきます。

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}
