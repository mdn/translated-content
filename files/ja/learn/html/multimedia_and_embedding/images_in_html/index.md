---
title: HTML の画像
slug: Learn/HTML/Multimedia_and_embedding/Images_in_HTML
l10n:
  sourceCommit: 65b9418c7d0e3a331ac50249adf0024f44789923
---

{{LearnSidebar}}{{NextMenu("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding")}}

当初、ウェブは単なるテキストであり、とてもつまらないものでした。幸運なことに、ウェブページ内に画像（および他のより面白い種類のコンテンツ）を埋め込む能力が追加されるまでにはあまり時間がかかりませんでした。考慮すべき他の種類のマルチメディアもありますが、単純な画像をウェブページに埋め込むために使用される、慎ましい{{htmlelement("img")}} 要素から始めるのが理にかなっています。この記事では、基本的な使い方を含め、{{htmlelement("figure")}} を使ったキャプションの注釈付け、{{glossary("CSS")}} 背景画像との関連付けなど、詳細な使い方を見ていきます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        基本的なコンピューターリテラシー、
        <a
          href="/ja/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >インストール済みの基本的なソフトウェア</a
        >、基本的な
        <a
          href="/ja/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >ファイル操作</a
        >の知識、 HTML の基礎知識になじんでいること（<a href="/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >HTML を始めよう</a
        >にあるような）。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        単純な画像を HTML に埋め込み、キャプションで注釈を付ける方法、および HTML 画像と CSS 背景画像との関連を学ぶ。
      </td>
    </tr>
  </tbody>
</table>

## ウェブページに画像を置くにはどうするのか

単純な画像をウェブページに配置するには、 {{htmlelement("img")}} 要素を使用します。これは{{glossary("void element","空要素")}}であり（すなわち子要素や終了タグを置くことができない）、役立つには 2 つの属性、 `src` と `alt` が必要です。`src` 属性には、ページに埋め込む画像を指す URL を指定します。{{htmlelement("a")}} 要素の `href` 属性と同じように、`src` 属性は相対 URL または絶対 URL にすることができます。`src` 属性がないと、`img` 要素は画像を読み込みません。

[`alt` 属性は後で説明します](#代替テキスト)。

> **メモ:** 続行する前に、[URL とパスに関する簡単な入門](/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#url_とパスに関する簡単な入門)を読んで、相対 URL と絶対 URL の記憶を更新してください。

例えば、画像が `dinosaur.jpg` というファイル名で、HTML ページと同じディレクトリーにある場合、画像を次のように埋め込むことができます。

```html
<img src="dinosaur.jpg" alt="Dinosaur" />
```

画像がこの HTML ページと同じディレクトリーの `images` サブディレクトリーにある場合は、次のように埋め込みます。

```html
<img src="images/dinosaur.jpg" alt="Dinosaur" />
```

他も同様です。

> **メモ:** 検索エンジンは画像ファイル名も読み込み、SEO に向けてカウントします。したがって、画像にわかりやすいファイル名を付けてください。 `dinosaur.jpg` は `img835.png` よりも優れています。

例えば次のように、絶対 URL を使用して画像を埋め込むこともできます。

```html
<img src="https://www.example.com/images/dinosaur.jpg" alt="Dinosaur" />
```

しかし、これは推奨されません。通常の設定では、自分の画像は自分でホスティングする必要があるため、HTML と同じサーバーに置いておくからです。より高度な設定では、画像を配信するために [CDN (Content Delivery Network)](/ja/docs/Glossary/CDN) を使用するかもしれません。

> **警告:** 他人のウェブサイトでホスティングされている画像を、**許可なく** src 属性で指しては**いけません**。これは「ホットリンク」と呼ばれます。誰かがページにアクセスしたときに画像を配信するための帯域幅のコストを他の誰かが負担することになるため、一般に倫理的に問題があると考えられています。
>
> 一般に、自分のサイトで使用したい画像はホスティングする必要があります。画像をホスティングする前に、これらのいずれかが成立していることを確認する必要があります。
>
> - その画像を所有している
> - その画像の所有者からの書面による明示的な許可を得ている。
> - その画像が実際にパブリックドメインであるという十分な証拠がある。

上のコードでは、次の結果が得られます。

![恐竜の基本的な画像が、ブラウザーに埋め込まれ、その上に "Images in HTML" が書かれています](basic-image.png)

> **メモ:** {{htmlelement("img")}} や {{htmlelement("video")}} のような要素は、**置換要素**と呼ばれることがあります。これは、要素の内容とサイズが、要素自体の内容ではなく、外部リソース（画像ファイルや動画ファイルなど）によって定義されているためです。詳しくは[置換要素](/ja/docs/Web/CSS/Replaced_element)を参照してください。

> **メモ:** この節で仕上げた例は、 [Github で実行する](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html)ことができます（[ソースコード](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/images-in-html/index.html)も参照してください）。

### 代替テキスト

次に見ていくのは `alt` 属性です。この値は、画像が見えない/表示されない場合や、インターネット接続が遅いために描画に時間がかかる場合に使用する、画像のテキストによる説明文となるはずです。例えば、上記のコードはこのように変更することができます。

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />
```

`alt` テキストをテストする最も簡単な方法は、わざとファイル名のスペルミスをすることです。たとえば、画像名のスペルが `dinosooooor.jpg` の場合、ブラウザーは画像を表示せず、代わりに代替テキストを表示します。

![Images in HTML というタイトルですが、今回は恐竜の画像が表示されず、代替テキストが代わりに表示されます。](alt-text.png)

では、なぜ代替テキストを見かけたり、必要としたりするのでしょうか？それは、さまざまな理由で決まります。

- 視覚障害のユーザーがおり、ウェブを読むのに[スクリーンリーダー](https://ja.wikipedia.org/wiki/スクリーンリーダー)を使用している場合。実際、画像を記述するための代替テキストを用意することは、ほとんどのユーザーにとって有益です。
- 上記のように、ファイル名またはパス名のスペルが間違っている可能性があります。
- ブラウザーがその画像の種類に対応していないことがあります。人によっては [Lynx](<https://ja.wikipedia.org/wiki/Lynx_(%E3%82%A6%E3%82%A7%E3%83%96%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6)>) などのテキストのみのブラウザーを使用している人もおり、その場合は代わりに画像の代替テキストを表示します。
- 検索エンジンにテキストを提供して利便性を図ることができます。たとえば、検索エンジンは検索クエリーで照合することがあります。
- ユーザーは画像をオフにして、データ転送量や目移りを減らすことがあります。。これは特に、携帯電話や帯域幅が限られて高価な国では一般的です。

`alt` 属性の中に正確に何を書けばいいのでしょうか？それは、最初に画像を置く理由に依存します。言い換えれば、画像が表示されないと何を失うかです。

- **装飾**。装飾的な画像には [CSS 背景画像](#css_背景画像)を使用すべきですが、 HTML を使用する必要がある場合は、空白の `alt=""` を追加してください。画像がコンテンツの一部でない場合、スクリーンリーダーは読んで時間を浪費すべきではありません。
- **コンテンツ**。画像が重要な情報を提供している場合は、簡単な代替テキストで同じ情報を提供してください。それよりもっと良いのは、誰もが見ることができる本文の中で提供することです。冗長な `alt` テキストを書かないでください。すべての段落がメインコンテンツに 2 重に書かれていると、目に見えるユーザーにとってはどれほど迷惑でしょうか？画像が主たる本文で十分に記述されている場合は、単に `alt=""` が使用できます。
- **リンク**。 {{htmlelement("a")}} タグ内に画像を置いた場合、画像をリンクにすると、[アクセス可能なリンクテキスト](/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#明確なリンク語を使う)を提供する必要があります。そのような場合は、同じ `<a>` 要素内に、または画像の `alt` 属性内に書き込むことができます。
- **テキスト**。テキストを画像に入れないでください。たとえば、メインの見出しにドロップシャドウが必要な場合は、テキストを画像に入れるのではなく、 [CSS を使用](/ja/docs/Web/CSS/text-shadow)してください。しかし、これが本当に避けられない場合は、 `alt` 属性でテキストを与える必要があります。

基本的には、画像が見えないときでも、実用的な使い勝手を提供することが鍵です。これにより、すべてのユーザーにコンテンツが欠落していないことが保証されます。ブラウザーの画像をオフにして、どのように見えるかを確認してください。画像が見えない場合に、すぐに役立つ代替テキストがどれほどあるかがすぐに理解できます。

> **メモ:** 詳細については、[代替テキストのガイド](/ja/docs/Learn/Accessibility/HTML#代替テキスト)を参照してください。

### 幅と高さ

`width` 属性と `height` 属性を使用して、画像の幅と高さを指定することができます。画像の幅と高さはさまざまな方法で確認できます。たとえば Mac では、 <kbd>Cmd</kbd> + <kbd>I</kbd> を使用して画像ファイルの情報を表示することができます。例に戻ると、これをこのように行うことができます。

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />
```

これは、通常の状況下では表示が大きく異なるものではありません。しかし、画像が表示されていない場合、たとえば、ユーザーがページに移動して画像がまだ読み込まれていない場合、ブラウザーには画像が表示される空間が残ります。

![恐竜の代替テキストを含む Images in HTML タイトルは、幅と高さの設定の結果として大きなボックスの内側に表示されます](alt-text-with-width-height.png)

これは良いことです。その結果、ページの読み込みがより迅速かつスムーズに行われます。

ただし、 HTML 属性を使用して画像のサイズを変更しないでください。画像のサイズを大きくしすぎると、ざらついて、ぼやけた画像になり、小さくしすぎると、帯域幅を無駄にしてユーザーのニーズに合わない画像をダウンロードすることになります。正しい[アスペクト比](https://ja.wikipedia.org/wiki/アスペクト比)を維持しないと、画像が歪んで見えることもあります。画像エディターを使用して画像を正しいサイズにしてから、ウェブページに配置する必要があります。

> **メモ:** 画像のサイズを変更する必要がある場合は、代わりに [CSS](/ja/docs/Learn/CSS) を使用してください。

### 画像のタイトル

[リンク](/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#title_属性による補足情報の追加)と同様に、画像に `title` 属性を追加して、必要に応じてさらに補足情報を提供することもできます。この例では、これを行うことができます。

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341"
  title="A T-Rex on display in the Manchester University Museum" />
```

これは、リンクのタイトルと同様に、マウスのホバーによるツールチップを提供します。

![恐竜の画像に、 A T-Rex on display at the Manchester University Museum というツールチップのタイトルが表示されています](image-with-title.png)

しかし、これは推奨されていません。`title` には多くのアクセシビリティ上の問題があります。主に、スクリーンリーダーの対応予測不可能で、ほとんどのブラウザーではマウスを当てない限り表示されません（そのため、例えばキーボードのユーザーはアクセスできません）。このことについてもっと知りたい場合は、Scott O'Hara の[タイトル属性の試行錯誤](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) （英語）をお読みください。

画像に添付するのではなく、メインの記事のテキストにそのような補足情報を含めた方がいいでしょう。

### アクティブラーニング: 画像の埋め込み

今度はあなたの番です。このアクティブラーニングの節では、簡単な埋め込み練習をさせていただきます。基本的な {{htmlelement("img")}} タグが提供されています。次の URL の画像を埋め込むようにしてください。

```
https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
```

以前は他のサーバー上の画像に絶対にホットリンクしないように言っていましたが、これは単に学習目的のためのものです。

また、次のこともします。

- 代替テキストを追加し、画像 URL のスペルを間違えて機能することを確認します。
- 画像の正しい `width` と `height` （ヒント: 幅 200 ピクセル、高さ 171 ピクセル）を設定し、他の値を試してその効果を確認します。
- 画像に `title` を設定します。

間違えた場合は、\[リセット] ボタンを使用してリセットすることができます。あなたが本当に立ち往生した場合は、\[答えを表示] ボタンを押して答えを表示してください。

```html hidden
<h2>ライブ出力</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>編集可能なコード</h2>
<p class="a11y-label">
  Esc を押すとコード領域からフォーカスを移動させることができます（Tab
  はタブ文字を挿入します）。
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
<img>
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
  '<img src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"\n alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"\n width="200"\n height="171"\n title="A T-Rex on display in the Manchester University Museum">';
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

{{ EmbedLiveSample('Active_learning_embedding_an_image', 700, 350) }}

## 図表と図表のキャプションで画像に注釈を付ける

キャプションといえば、画像に付けるキャプションを追加する方法はいくつかあります。たとえば、こうするのをやめる理由は何もないでしょう。

```html
<div class="figure">
  <img
    src="images/dinosaur.jpg"
    alt="The head and torso of a dinosaur skeleton;
            it has a large head with long sharp teeth"
    width="400"
    height="341" />

  <p>マンチェスター大学博物館に展示されている T-Rex。</p>
</div>
```

これで結構です。それはあなたが必要とするコンテンツを含んでおり、CSS を使って素敵に書式設定できます。しかし、ここに問題があります。画像をキャプションに意味的にリンクするものは何もありません。スクリーンリーダーにとっては問題を引き起こす可能性があります。たとえば、50 個の画像とキャプションがある場合、どのキャプションにどの画像が表示されるのでしょうか？

より良い解決策は、HTML の {{htmlelement("figure")}} と {{htmlelement("figcaption")}} 要素を使用することです。図表のための意味的なコンテナーを提供し、図表をキャプションに明確にリンクさせること。これはまさにこの目的のために作成されたものです。上記の例は次のように書き直すことができます。

```html
<figure>
  <img
    src="images/dinosaur.jpg"
    alt="The head and torso of a dinosaur skeleton;
            it has a large head with long sharp teeth"
    width="400"
    height="341" />

  <figcaption>マンチェスター大学博物館に展示されている T-Rex。</figcaption>
</figure>
```

{{htmlelement("figcaption")}} 要素は、キャプションが {{htmlelement("figure")}} 要素の他のコンテンツを説明していることをブラウザーと支援技術に伝えます。

> **メモ:** アクセシビリティの観点から、キャプションと [`alt`](/ja/docs/Web/HTML/Element/img#alt) テキストには明確な役割があります。キャプションは画像を見ることができる人にも利益をもたらしますが、[`alt`](/ja/docs/Web/HTML/Element/img#alt) テキストは欠けている画像と同じ機能を提供します。したがって、キャプションと `alt` テキストは、画像がなくなったときに両方が表示されるため、同じことを言うべきではありません。ブラウザーで画像をオフにして見た目を確認してみてください。

図表は画像である必要はありません。それは次のようにコンテンツの独立した単位です。

- 趣旨をコンパクトでわかりやすく表現したもの。
- ページの直線的な流れのいくつかの場所に入ることができること。
- メインテキストをサポートするための重要な情報を提供すること

図表は、いくつかの画像、コードスニペット、音声、動画、方程式、表、または何か他のものであってもよいのです。

### アクティブラーニング: 図表の作成

このアクティブラーニングの節では、以前のアクティブラーニングの節で完成したコードを図表にします。

- {{htmlelement("figure")}} 要素で囲みます。
- テキストを `title` 属性からコピーし、 `title` 属性を削除し、テキストを画像の下の {{htmlelement("figcaption")}} 要素の中に置きます。

間違えた場合は、\[リセット] ボタンを使用してリセットすることができます。あなたが本当に立ち往生した場合は、\[答えを表示] ボタンを押して答えを表示してください。

```html hidden
<h2>ライブ出力</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>編集可能なコード</h2>
<p class="a11y-label">
  Esc を押すとコード領域からフォーカスを移動させることができます（Tab
  はタブ文字を挿入します）。
</p>

<textarea
  id="code"
  class="input"
  style="min-height: 100px; width: 95%"></textarea>

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
  '<figure>\n <img src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"\n alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"\n width="200"\n height="171">\n <figcaption>A T-Rex on display in the Manchester University Museum</figcaption>\n</figure>';
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

{{ EmbedLiveSample('Active_learning_creating_a_figure', 700, 350) }}

## CSS 背景画像

CSS を使用して画像をウェブページに埋め込むこともできます（JavaScript でもできますが、それはまったく別の話です）。CSS の {{cssxref("background-image")}} プロパティとその他の `background-*` プロパティは、背景画像の配置を制御するために使用されます。たとえば、ページ上の各段落に背景画像を配置するには、次のようにします。

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

その結果、埋め込み画像は、 HTML 画像よりも間違いなく位置決めや操作がしやすくなっています。では、なぜわざわざ HTML 画像なのでしょうか？先に述べたように、CSS の背景画像はあくまで装飾のためのものです。ページに何かきれいなものを追加してビジュアルを向上させたいだけなら、これでよいのです。しかし、このような画像には何の意味もありません。同等のテキストを保有することはできませんし、スクリーンリーダーからも見えない、などです。そこで、 HTML 画像が威力を発揮します。

要約: 画像に意味がある場合、すなわちコンテンツであれば、HTML 画像を使用してください。画像が純粋に装飾である場合は、 CSS 背景画像を使用してください。

> **メモ:** [CSS 背景画像](/ja/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)については、[CSS](/ja/docs/Learn/CSS) のトピックで詳しく説明します。

## スキルをテストしましょう

この記事の終わりまで到達しましたが、最も大事な情報を覚えていますか？移動する前に、この情報を取得したかのテストを見ることができます — [スキルテスト: HTML 画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML/Test_your_skills:_HTML_images) を見てください。

## まとめ

今回は以上です。ここまで画像とキャプションについて詳しく述べてきました。次の記事では、さらにギアを上げて、HTML を使用してウェブページに[動画や音声コンテンツ](/ja/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)を埋め込む方法について見ていきたいと思います。

{{NextMenu("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding")}}
