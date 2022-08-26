---
title: HTML の画像
slug: Learn/HTML/Multimedia_and_embedding/Images_in_HTML
tags:
  - Beginner
  - Guide
  - HTML
  - Image
  - alt text
  - captions
  - figcaption
  - figure
  - img
  - ガイド
  - キャプション
  - 代替テキスト
  - 初心者
  - 図表
  - 画像
  - 記事
translation_of: Learn/HTML/Multimedia_and_embedding/Images_in_HTML
---
{{LearnSidebar}}{{NextMenu("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding")}}

最初は、Web は単なるテキストに過ぎず、とても退屈でした。幸運なことに、Web ページ内に画像 (および他のより興味深いタイプのコンテンツ) を埋め込む能力が追加されるまでにはあまり時間がかかりませんでした。考慮すべき他のタイプのマルチメディアもありますが、単純な画像を Web ページに埋め込むために使用される、慎ましい {{htmlelement("img")}} 要素から始めるのが理にかなっています。この記事では、基本的な使い方を含め、{{htmlelement("figure")}} を使ったキャプションの注釈付け、{{glossary("CSS")}} 背景画像との関連付けなど、詳細な使い方を見ていきます。

| 前提条件: | 基本的なコンピュータリテラシー、[インストールされた基本ソフトウェア](/ja/Learn/Getting_started_with_the_web/Installing_basic_software)、[ファイル操作](/ja/Learn/Getting_started_with_the_web/Dealing_with_files)の基本知識、HTML の基礎知識に精通していること ([HTML の使い方](/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started)を参照してください)。 |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目的:     | 単純な画像を HTML に埋め込み、キャプションで注釈を付ける方法、および HTML 画像と CSS 背景画像との関連を学ぶ。                                                                                                                                                                                                                                                  |

## 画像を Web ページにどのように置くのですか？

単に画像を Web ページに配置するには、{{htmlelement("img")}} 要素を使用します。これは有用であるために少なくとも 1 つの属性 — `src` (フルタイトルやソースと呼ばれることもあります) を必要とする {{glossary("empty element","空要素")}} (テキストコンテンツまたは終了タグがないことを意味する) です。`src` 属性には、{{htmlelement("a")}} 要素の `href` 属性値と同じように、ページに埋め込む画像を指すパスが含まれ、相対 URL または絶対 URL にすることができます。

> **Note:** 続行する前に、[URL とパスに関する簡単な入門](/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#A_quick_primer_on_URLs_and_paths)を読んで、相対 URL と絶対 URL のメモリを更新してください。

例えば、画像が `dinosaur.jpg` というファイル名で、HTML ページと同じディレクトリーにある場合、画像を次のように埋め込むことができます。

```html
<img src="dinosaur.jpg">
```

画像が HTML ページ (Google が {{glossary("SEO")}}/索引付けの目的で推奨するディレクトリー) 内の `images` サブディレクトリーにあった場合は、次のように埋め込みます。

```html
<img src="images/dinosaur.jpg">
```

等々。

> **Note:** 検索エンジンは画像ファイル名も読み込み、SEO に向けて数えます。したがって、画像にわかりやすいファイル名を付けてください。`dinosaur.jpg` は `img835.png` よりも優れています。

たとえば、絶対 URL を使用して画像を埋め込むことができます。

```html
<img src="https://www.example.com/images/dinosaur.jpg">
```

しかし、これは無意味だけでなく、ブラウザーが DNS サーバから IP アドレスを再度検索するなどより多くの作業をすることになります。ほとんどの場合、Web サイトの画像を HTML と同じサーバに保存します。

> **Warning:** **警告**: ほとんどの画像は著作権で保護されています。次の場合を除き、Web ページに画像を表示**しない**でください。
>
> 1\) 画像を所有している
> 2\) 画像の所有者からの書面による明示的な許可を得ている、または
> 3\) 画像は、実際にパブリックドメインであるという十分な証拠がある。
>
> 著作権侵害は違法で非倫理的です。加えて、あなたがリンクする権限を持たない他の誰かの Web サイトでホストされている画像へあなたの `src` 属性を向け**ない**でください。これは「ホットリンク」と呼ばれます。さらに、誰かの帯域幅を盗むことは違法です。また、ページが遅くなり、画像が削除されたり、恥ずかしいものに置き換えられたりするかどうかを制御できません。

上のコードでは、次の結果が得られます。

![恐竜の基本的な画像が、ブラウザーに埋め込まれ、その上に "Images in HTML" が書かれています](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML/basic-image.png)

> **Note:** {{htmlelement("img")}} や {{htmlelement("video")}} のような要素は、**置き換えられた要素**と呼ばれることがあります。これは、要素の内容とサイズが、要素自体の内容ではなく、外部リソース(画像ファイルや動画ファイルなど)によって定義されているためです。

> **Note:** 完成したサンプルは、このセクションの [Github で実行する](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html)から見つけることができます ([ソースコード](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/images-in-html/index.html)も参照してください)。

### 代替テキスト

次の属性は `alt` です。その値は、画像が見えない/表示されない状況で使用するためにあり、画像のテキスト記述であると考えられる。たとえば、上記のコードは次のように変更できます。

```html
<img src="images/dinosaur.jpg"
     alt="恐竜の骨格の頭と胴体、
          それは長い鋭い歯を持つ大きな頭を持っています">
```

`alt` テキストをテストする最も簡単な方法は、意図的にファイル名のスペルミスをすることです。たとえば、画像名のスペルが `dinosooooor.jpg` の場合、ブラウザーは画像を表示せず、代わりに代替テキストを表示します。

![Images in HTMLというタイトルですが、今回は恐竜の画像が表示されず、代替テキストが代わりに表示されます。](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML/alt-text.png)

それでは、なぜ代替テキストを見たり、必要とするのでしょうか? いくつかの理由から便利です。

- ユーザは視覚障害があり、[スクリーンリーダー](https://ja.wikipedia.org/wiki/スクリーンリーダー)を使用して Web を読むことができます。実際、画像を記述するための代替テキストを用意することは、ほとんどのユーザにとって有益です。
- 上記のように、ファイル名またはパス名のスペルが間違っている可能性があります。
- ブラウザーは画像タイプをサポートしていません。[Lynx](<https://ja.wikipedia.org/wiki/Lynx_(%E3%82%A6%E3%82%A7%E3%83%96%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6)>) などのテキストのみのブラウザーを使用している人もいますが、代わりに画像の代替テキストを表示します。
- 検索エンジンにテキストを提供して活用することができます。たとえば、検索エンジンは代替テキストと検索照会を一致させることができます。
- ユーザは画像をオフにして、データ転送量や目移りを減らしました。これは特に、携帯電話や帯域幅が限られて高価な国では一般的です。

`alt` 属性の中にぴったりの何を書きますか? それは最初の場所に画像がある理由に依存します。言い換えれば、画像が表示されない場合に失うもの。

- **装飾**。装飾画像に [CSS 背景画像](#css_background_images)を使用する必要がありますが、HTML を使用する必要がある場合は空白の `alt=""` を追加してください。画像がコンテンツの一部でない場合、スクリーンリーダーは時間を浪費してはなりません。
- **コンテンツ**。画像が重要な情報を提供している場合は、簡単な代替テキストで同じ情報を提供する。それよりもっと良いのは、誰もが見ることができる本文の中で提供する。冗長な代替テキストを書き込まないでください。すべての段落がメインコンテンツに 2 回書かれていると、目に見えるユーザにとってはどれほど迷惑でしょうか? 画像が主たる本文で十分に記述されている場合は、単に `alt=""` を使用できます。
- **リンク**。{{htmlelement("a")}} タグ内に画像を置くと、画像をリンクに変えるためには、依然として[アクセス可能なリンクテキスト](/ja/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#Use_clear_link_wording)を提供する必要があります。そのような場合は、同じ `<a>` 要素内に、または画像の `alt` 属性内に書き込むことができます。
- **テキスト**。テキストを画像に入れないでください。たとえば、メインの見出しにドロップシャドウが必要な場合は、テキストを画像に入れるのではなく、[CSS を使用](/ja/docs/Web/CSS/text-shadow)します。しかし、これが避けられない場合は、`alt` 属性にテキストを与える必要があります。

基本的には、画像が見えないときでも、実用的な体験を提供することが鍵です。これにより、すべてのユーザにコンテンツが欠落していないことが保証されます。ブラウザーの画像をオフにして、どのように見えるかを確認してください。画像が見えない場合に、すぐに役立つ代替テキストがどれほどあるかをすぐに理解できます。

> **Note:** 詳細については、[代替テキストのガイド](/ja/docs/Learn/Accessibility/HTML#Text_alternatives)を参照してください。

### 幅と高さ

`width` 属性と `height` 属性を使用して、画像の幅と高さを指定することができます。画像の幅と高さはさまざまな方法で確認できます。たとえば Mac では、<kbd>Cmd</kbd> + <kbd>I</kbd> を使用して画像ファイルの情報を表示することができます。例に戻ると、これをこのように行うことができます。

```html
<img src="images/dinosaur.jpg"
     alt="恐竜の骨格の頭と胴体、
          それは長い鋭い歯を持つ大きな頭を持っています"
     width="400"
     height="341">
```

これは、通常の状況下では表示が大きく異なるものではありません。しかし、画像が表示されていない場合、たとえば、ユーザがページに移動して画像がまだ読み込まれていない場合、ブラウザーには画像が表示されるスペースが残ります。

![恐竜の代替テキストを含む Images in HTML タイトルは、幅と高さの設定の結果として大きなボックスの内側に表示されます](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML/alt-text-with-width-height.png)

これは良いことです。その結果、ページの読み込みがより迅速かつスムーズに行われます。

ただし、HTML 属性を使用して画像のサイズを変更しないでください。画像のサイズを大きくしすぎると、ざらついて、ぼやけた画像になり、小さくしすぎると、帯域幅を無駄にしてユーザのニーズに合わない画像をダウンロードすることになります。正しい[アスペクト比](https://ja.wikipedia.org/wiki/アスペクト比)を維持しないと、画像が歪んで見えることもあります。画像エディタを使用して画像を正しいサイズにしてから、Web ページに配置する必要があります。

> **Note:** 画像のサイズを変更する必要がある場合は、代わりに [CSS](/ja/docs/Learn/CSS) を使用する必要があります。

### 画像のタイトル

[リンク](/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#Adding_supporting_information_with_the_title_attribute)と同様に、画像に `title` 属性を追加して、必要に応じてさらにサポート情報を提供することもできます。この例では、これを行うことができます。

```html
<img src="images/dinosaur.jpg"
     alt="恐竜の骨格の頭と胴体、
          それは長い鋭い歯を持つ大きな頭を持っています"
     width="400"
     height="341"
     title="マンチェスター大学博物館に展示されている T-Rex">
```

これは、リンクのタイトルと同様に、マウスのホバーによるツールチップを提供します。

![恐竜の画像に、A T-Rex on display at the Manchester University Museumというツールチップのタイトルが表示されます](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML/image-with-title.png)

しかし、これは推奨されていません — `title` には多くのアクセシビリティ上の問題があります。主に、スクリーンリーダーのサポートは予測不可能で、マウスを使用していない限り、ほとんどのブラウザーでは表示されません(例えば、キーボード ユーザ)。このことについてもっと知りたい場合は、Scott O'Hara の[タイトル属性の試行錯誤](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) (英語) をお読みください。

画像に添付するのではなく、メインの記事のテキストにそのようなサポート情報を含める方が良いでしょう。

### アクティブラーニング: 画像の埋め込み

今度はあなたの番です! この能動的学習セクションでは、あなたに簡単な埋め込み練習をさせていただきます。基本的な {{htmlelement("img")}} タグが提供されています。次の URL の画像を埋め込むようにしてください。

https\://raw\.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg

以前は他のサーバ上の画像に絶対にホットリンクしないように言っていましたが、これは単なる学習目的のためのものです。

また、次のこともします。

- 代替テキストを追加し、画像 URL のスペルを間違えて機能することを確認します。
- 画像の正しい `width` と `height` (ヒント: 幅 200 ピクセル、高さ 171 ピクセル) を設定し、他の値を試してその効果を確認します。
- 画像に `title` を設定します。

間違えた場合は、\[Reset] ボタンを使用してリセットすることができます。あなたが本当に立ち往生した場合は、\[Show solution] ボタンを押して答えを表示してください。

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;">
</div>

<h2>Editable code</h2>
<p class="a11y-label">Press Esc to move focus away from the code area (Tab inserts a tab character).</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
<img>
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

var htmlSolution = '<img src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"\n alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"\n width="200"\n height="171"\n title="A T-Rex on display in the Manchester University Museum">';
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

## 図表と図表のキャプションで画像に注釈を付ける

キャプションといえば、画像に付けるキャプションを追加する方法はいくつかあります。たとえば、これをやめさせることは何もありません。

```html
<div class="figure">
  <img src="images/dinosaur.jpg"
       alt="恐竜の骨格の頭と胴体、
            それは長い鋭い歯を持つ大きな頭を持っています"
       width="400"
       height="341">

  <p>マンチェスター大学博物館に展示されている T-Rex。</p>
</div>
```

これで結構です。それはあなたが必要とするコンテンツを含んでおり、CSS を使って素敵に書式設定できます。しかし、ここに問題があります。画像をキャプションに意味的にリンクするものは何もありません。スクリーンリーダーにとっては問題を引き起こす可能性があります。たとえば、50 個の画像とキャプションがある場合、どのキャプションにどの画像が表示されますか?

より良い解決策は、HTML5 の {{htmlelement("figure")}} と {{htmlelement("figcaption")}} 要素を使用することです。図表のための意味的なコンテナを提供し、図表をキャプションに明確にリンクさせること。これはまさにこの目的のために作成されたものです。上記の例は次のように書き直すことができます。

```
<figure>
  <img src="images/dinosaur.jpg"
       alt="恐竜の骨格の頭と胴体、
            それは長い鋭い歯を持つ大きな頭を持っています"
       width="400"
       height="341">

  <figcaption>マンチェスター大学博物館に展示されている T-Rex。</figcaption>
</figure>
```

{{htmlelement("figcaption")}} 要素は、キャプションが {{htmlelement("figure")}} 要素の他のコンテンツを説明していることをブラウザーと支援技術に伝えます。

> **Note:** アクセシビリティの観点から、キャプションと {{htmlattrxref('alt','img')}} テキストには明確な役割があります。キャプションは画像を見ることができる人にも利益をもたらしますが、代替テキストは欠けている画像と同じ機能を提供します。したがって、キャプションと代替テキストは、画像がなくなったときに両方が表示されるため、同じことを言うべきではありません。ブラウザーで画像をオフにして見た目を確認してみてください。

図表は画像である必要はありません。それは次のようにコンテンツの独立した単位です。

- あなたの趣旨をコンパクトでわかりやすく表現します。
- ページの直線的な流れのいくつかの場所に入ることができます。
- メインテキストをサポートするための重要な情報を提供します。

図表は、いくつかの画像、コードスニペット、音声、動画、方程式、表、または何か他のものであってもよい。

### アクティブラーニング: 図表の作成

この能動的学習セクションでは、以前の能動的学習セクションで完成したコードを図表にします。

- {{htmlelement("figure")}} 要素でラップします。
- テキストを `title` 属性からコピーし、`title` 属性を削除し、テキストを画像の下の {{htmlelement("figcaption")}} 要素の中に置きます。

間違えた場合は、\[Reset] ボタンを使用してリセットすることができます。あなたが本当に立ち往生した場合は、\[Show solution] ボタンを押して答えを表示してください。

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;">
</div>

<h2>Editable code</h2>
<p class="a11y-label">Press Esc to move focus away from the code area (Tab inserts a tab character).</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
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

var htmlSolution = '<figure>\n <img src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"\n alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"\n width="200"\n height="171">\n <figcaption>A T-Rex on display in the Manchester University Museum</figcaption>\n</figure>';
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

{{ EmbedLiveSample('Playable_code_2', 700, 350, "", "", "hide-codepen-jsfiddle") }}

## CSS 背景画像

また、CSS を使用して画像を Web ページに埋め込むこともできます(JavaScript でもできますが、それはまったく別の話です)。CSS の {{cssxref("background-image")}} プロパティとその他の `background-*` プロパティは、背景画像の配置を制御するために使用されます。たとえば、ページ上の各段落に背景画像を配置するには、次のようにします。

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

結果として得られる埋め込み画像は、HTML 画像よりも位置付けと制御が容易であることは間違いありません。それでは、なぜ HTML 画像を気にするのですか? 上記のとおり、CSS 背景画像は装飾用です。ビジュアルを向上させるためにページに何かを追加したいだけなら、これは問題ありません。しかし、そのような画像には意味論的な意味は全くありません。同等のテキストを持つことはできず、スクリーンリーダーには見えません。これは HTML 画像の輝く時です!

**要約**: 画像に意味がある場合は、コンテンツに関して、HTML 画像を使用する必要があります。画像が純粋に装飾である場合は、CSS 背景画像を使用する必要があります。

> **Note:** [CSS 背景画像](/ja/docs/Learn/CSS/Styling_boxes/Backgrounds)については、[CSS](/ja/docs/Learn/CSS) のトピックで詳しく説明します。

それは今のところすべてです。画像とキャプションを詳細にカバーしています。次の記事では、HTML を使用して Web ページに動画と音声を埋め込む方法を見ていきます。

{{NextMenu("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding")}}

## このモジュール

- [HTML の画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [動画と音声のコンテンツ](/ja/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [\<object> から \<iframe> へ — その他の埋め込み技術](/ja/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
- [Web にベクターグラフィックスを追加する](/ja/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
- [レスポンシブ画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Mozilla のスプラッシュページ](/ja/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)
