---
title: HTML の見出しと段落
slug: Learn_web_development/Core/Structuring_content/Headings_and_paragraphs
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content")}}

HTML の主要な仕事の一つは、ブラウザーが HTML 文書を開発者の意図通りに表示できるように、テキストに構造を与えることです。この記事では、 {{glossary("HTML")}} を使用して、見出しや段落を追加したり、単語を強調したり、リストを作成したりなど、ページのテキストを構造化する方法を説明します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >基本的な HTML の構文</a
        >に載っている、基本的な HTML に精通していること。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <li>見出しと、その見出しの下のコンテンツで構成される、良い文書構造を作成する方法。</li>
        <li>表現のための HTML ではなく、意味づけされた HTML を使用すること、そしてそれがなぜ重要なのか。</li>
        <li>見出しレベルを論理的に使用する必要がある、すなわち、特定のフォントサイズを実現したいからといってレベルを飛ばしたり、恣意的に使用したりしないこと（これは CSS の仕事です）。</li>
        <li>SEO 上の利点。見出し内のキーワードが強化される、など。</li>
        <li>アクセシビリティ上の利点。スクリーンリーダーなどの支援技術 (AT) は、コンテンツを移動するための道しるべとして見出し（およびその他の目印）を使用します。 HTML 文書は、見出しがなければ、 AT のユーザーにとってとても使いにくいものとなります。</li>
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

- ウェブページを見ているユーザーは、関連コンテンツを探すのにざっと見たり、時には読み始めるために見出しだけを見ている傾向にあります（私たちはふつう、[ウェブページに費やす時間はわずかです](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/))。しばらく有用なものが見つからない場合、イライラして別の場所に去っていきます。
- ページをインデックスする検索エンジンは、見出しのコンテンツを、ページの検索ランクに影響する重要なキーワードとみなします。見出しがないと、 {{glossary("SEO")}} （検索エンジン最適化）の点で良くないでしょう。
- 極めて目が不自由な人はウェブページを読みません。つまりその代わりにウェブページを聞きます。これは [スクリーンリーダー](https://ja.wikipedia.org/wiki/スクリーンリーダー)というソフトウェアで実現されます。このソフトウェアはテキストコンテンツにすばやくアクセスする方法を提供します。さまざまな技術が使用される中で、文書の概要を見出しを読むことで提供し、ユーザーが必要な情報をすばやく見つけられるようにしています。見出しが見つからない場合、文書全体が読み上げられるのを聞くことになってしまいます。
- {{glossary("CSS")}} でコンテンツをスタイリングしたり、 {{glossary("JavaScript")}} で面白いことをさせるには、関連コンテンツを包んでいる要素が必要となり、それを効率的に CSS/JavaScript はターゲットとします。

このため、コンテンツに構造的なマークアップが必要となります。

### アクティブラーニング: コンテンツの構造化

ライブな実例に飛び込んでみましょう。下記の実例で、入力フィールドの生テキストに要素を与え、出力フィールドに見出しと 2 つの段落が見えるようにしてみましょう。

間違えた場合、リセットボタンでいつでもリセットできます。行き詰まったら、「_答えを表示_」ボタンで回答を見てください。

```html-nolint hidden
<h2>ライブ出力</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>編集可能なコード</h2>
<p class="a11y-label">
  Esc を押すとコード領域からフォーカスを移動させることができます（Tab はタブ文字を挿入します）。
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
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
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

## なぜ意味づけが必要なのか？

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

## まとめ

以上で、HTMLの見出しと段落についての学習は終了です。次に、HTMLの意味づけについて、さらに見ていきます。単語に強調をくれたりするものです。

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content")}}
