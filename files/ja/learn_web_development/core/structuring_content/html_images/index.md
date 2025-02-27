---
title: HTML の画像
slug: Learn_web_development/Core/Structuring_content/HTML_images
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}

当初、ウェブは単なるテキストであり、とてもつまらないものでした。幸運なことに、ウェブページ内に画像（および他のより面白い種類のコンテンツ）を埋め込む能力が追加されるまでにはあまり時間がかかりませんでした。この記事では、 {{htmlelement("img")}} 要素の使い方について、基本的な使い方、 {{htmlelement("figure")}} を使用したキャプションの注釈、 {{glossary("CSS")}} 背景画像との関連の詳細などを詳しく見ていきます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >基本的な HTML の構文</a
        >に載っている、基本的な HTML に精通していること。 <a href="/ja/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >見出しと段落</a
        >および<a href="/ja/docs/Learn_web_development/Core/Structuring_content/Lists"
          >リスト</a
        >などのテキストレベルの意味付け。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>「置換要素」という耀g。どういう意味でしょう。</li>
          <li>基本的な <code>&lt;img&gt;</code> タグの構文</li>
          <li><code>src</code> を使用してリソースを指すこと。</li>
          <li><code>width</code> と <code>height</code> を使用して、例えば、画像の読み込みが完了して表示された後に、 UI が不快でぎこちない動きで更新されるのを避けることができること。</li>
          <li>ウェブ用にメディア資産を最適化する — ファイルサイズを小さく保ちます。</li>
          <li>メディア資産ライセンスの理解 — さまざまなライセンスの種類、それらに準拠する方法、そして自分のプロジェクトで使用する適切なライセンスのメディアファイルを検索する方法。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## ウェブページに画像を置くにはどうするのか

単純な画像をウェブページに配置するには、 {{htmlelement("img")}} 要素を使用します。これは{{glossary("void element","空要素")}}であり（すなわち子要素や終了タグを置くことができない）、役立つには 2 つの属性、 `src` と `alt` が必要です。`src` 属性には、ページに埋め込む画像を指す URL を指定します。{{htmlelement("a")}} 要素の `href` 属性と同じように、`src` 属性は相対 URL または絶対 URL にすることができます。`src` 属性がないと、`img` 要素は画像を読み込みません。

[`alt` 属性は後で説明します](#代替テキスト)。

> [!NOTE]
> 続行する前に、[URL とパスに関する簡単な入門](/ja/docs/Learn_web_development/Core/Structuring_content/Creating_links#url_とパスに関する簡単な入門)を読んで、相対 URL と絶対 URL の記憶を更新してください。

例えば、画像が `dinosaur.jpg` というファイル名で、HTML ページと同じディレクトリーにある場合、画像を次のように埋め込むことができます。

```html
<img src="dinosaur.jpg" alt="Dinosaur" />
```

画像がこの HTML ページと同じディレクトリーの `images` サブディレクトリーにある場合は、次のように埋め込みます。

```html
<img src="images/dinosaur.jpg" alt="Dinosaur" />
```

他も同様です。

> [!NOTE]
> 検索エンジンは画像ファイル名も読み込み、SEO に向けてカウントします。したがって、画像にわかりやすいファイル名を付けてください。 `dinosaur.jpg` は `img835.png` よりも優れています。

例えば次のように、絶対 URL を使用して画像を埋め込むこともできます。

```html
<img src="https://www.example.com/images/dinosaur.jpg" alt="Dinosaur" />
```

ただし、絶対 URL によるリンクは推奨されません。自分のサイトで使用したい画像をホスティングしましょう。単純な設定では、ウェブサイトの画像を HTML と同じサーバーに置いておくことを意味しています。また、メンテナンスの面でも、絶対 URL よりも相対 URL を使用した方が効率的です（サイトを別のドメインに移したときに、新しいドメインを記載するためにすべての URL を更新する必要はありません）。より高度な設定では、 [CDN (Content Delivery Network)](/ja/docs/Glossary/CDN) を使用して画像を配信することもできます。

もし自分で画像を作成していないのであれば、その画像が公開されているライセンスの条件下で使用する許可をあなたが持っていることを確認してください（詳しくは下記の[メディア資産とライセンス](#メディア資産とライセンス)をご覧ください）。

> [!WARNING]
> 他人のウェブサイトでホスティングされている画像を、**許可なく** src 属性で指しては**いけません**。これは「ホットリンク」と呼ばれます。誰かがページにアクセスしたときに画像を配信するための帯域幅のコストを他の誰かが負担することになるため、一般に倫理的に問題があると考えられています。

先のコードスニペットは、絶対 URL でも相対 URL でも、以下のような結果になります。

![恐竜の基本的な画像が、ブラウザーに埋め込まれ、その上に "Images in HTML" と書かれています](basic-image.png)

> **メモ:** {{htmlelement("img")}} や {{htmlelement("video")}} のような要素は、**置換要素**と呼ばれることがあります。これは、要素の内容とサイズが、要素自体の内容ではなく、外部リソース（画像ファイルや動画ファイルなど）によって定義されているためです。詳しくは[置換要素](/ja/docs/Web/CSS/Replaced_element)を参照してください。

> [!NOTE]
> この節で仕上げた例は、 [Github で実行する](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html)ことができます（[ソースコード](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/images-in-html/index.html)も参照してください）。

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

- 視覚障碍のユーザーがおり、ウェブを読むのに[スクリーンリーダー](https://ja.wikipedia.org/wiki/スクリーンリーダー)を使用している場合。実際、画像を記述するための代替テキストを用意することは、ほとんどのユーザーにとって有益です。
- 上記のように、ファイル名またはパス名のスペルが間違っている可能性があります。
- ブラウザーがその画像の種類に対応していないことがあります。人によっては [Lynx](<https://ja.wikipedia.org/wiki/Lynx_(%E3%82%A6%E3%82%A7%E3%83%96%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6)>) などのテキストのみのブラウザーを使用している人もおり、その場合は代わりに画像の代替テキストを表示します。
- 検索エンジンにテキストを提供して利便性を図ることができます。たとえば、検索エンジンは検索クエリーで照合することがあります。
- ユーザーは画像をオフにして、データ転送量や目移りを減らすことがあります。これは特に、携帯電話や帯域幅が限られて高価な国では一般的です。

`alt` 属性の中に正確に何を書けばいいのでしょうか？それは、最初に画像を置く理由に依存します。言い換えれば、画像が表示されないと何を失うかです。

- **装飾**。装飾的な画像には [CSS 背景画像](#css_背景画像)を使用すべきですが、 HTML を使用する必要がある場合は、空白の `alt=""` を追加してください。画像がコンテンツの一部でない場合、スクリーンリーダーは読み上げて時間を浪費すべきではありません。
- **コンテンツ**。画像が重要な情報を提供している場合は、簡単な代替テキストで同じ情報を提供してください。それよりもっと良いのは、誰もが見ることができる本文の中で提供することです。冗長な `alt` テキストを書かないでください。すべての段落がメインコンテンツに 2 重に書かれていると、目に見えるユーザーにとってはどれほど迷惑でしょうか？画像が主たる本文で十分に記述されている場合は、単に `alt=""` が使用できます。
- **リンク**。 {{htmlelement("a")}} タグ内に画像を置いた場合、画像をリンクにすると、[アクセス可能なリンクテキスト](/ja/docs/Learn_web_development/Core/Structuring_content/Creating_links#明確なリンク語を使う)を提供する必要があります。そのような場合は、同じ `<a>` 要素内に、または画像の `alt` 属性内に書き込むことができます。
- **テキスト**。テキストを画像に入れないでください。たとえば、メインの見出しにドロップシャドウが必要な場合は、テキストを画像に入れるのではなく、 [CSS を使用](/ja/docs/Web/CSS/text-shadow)してください。しかし、これが本当に避けられない場合は、 `alt` 属性でテキストを与える必要があります。

基本的には、画像が見えないときでも、実用的な使い勝手を提供することが鍵です。これにより、すべてのユーザーにコンテンツが欠落していないことが保証されます。ブラウザーの画像をオフにして、どのように見えるかを確認してください。画像が見えない場合に、すぐに役立つ代替テキストがどれほどあるかがすぐに理解できます。

> [!NOTE]
> 詳細については、[代替テキスト](/ja/docs/Learn_web_development/Core/Accessibility/HTML#代替テキスト)のガイドや [An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) を参照すると、さまざまな状況で画像の `alt` 属性を使用する方法が分かります。

### 幅と高さ

[`width`](/ja/docs/Web/HTML/Element/img#width) 属性と [`height`](/ja/docs/Web/HTML/Element/img#height) 属性を使用して、画像の幅と高さを指定することができます。これらは単位なしの整数で指定され、画像の幅と高さをピクセル単位で表します。

画像の幅と高さは、いくつかの方法で探すことができます。例えば Mac では、 <kbd>Cmd</kbd> + <kbd>I</kbd> を使用して画像ファイルの表示情報を取得することができます。この例に戻ると、次のようになります。

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />
```

これにはとても良い理由があります。ページの HTML と画像は別個のリソースであり、ブラウザーは別個の HTTP(S) リクエストとして取得します。ブラウザーは HTML を受け取るとすぐに、それをユーザーに表示し始めます。画像がまだ受信されていない場合（画像のファイルサイズは HTML ファイルよりはるかに大きいことが多いので、このケースは多いでしょう）、ブラウザーは HTML だけをレンダリングし、画像が受信され次第ページを更新します。

例えば、画像の後にテキストを指定されたとします。

```html
<h1>Images in HTML</h1>

<img
  src="dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"
  title="A T-Rex on display in the Manchester University Museum" />
<blockquote>
  <p>
    But down there it would be dark now, and not the lovely lighted aquarium she
    imagined it to be during the daylight hours, eddying with schools of tiny,
    delicate animals floating and dancing slowly to their own serene currents
    and creating the look of a living painting. That was wrong, in any case. The
    ocean was different from an aquarium, which was an artificial environment.
    The ocean was a world. And a world is not art. Dorothy thought about the
    living things that moved in that world: large, ruthless and hungry. Like us
    up here.
  </p>
  <footer>- Rachel Ingalls, <cite>Mrs. Caliban</cite></footer>
</blockquote>
```

ブラウザーはHTMLをダウンロードするとすぐにページの表示を始めます。

画像が読み込まれると、ブラウザーは画像をページに追加します。画像は空間を取るので、ブラウザーは画像をその上に収めるために、テキストをページの下に移動しなければなりません。

![画像サイズを指定しない場合の、ブラウザーがページを読み込んでいるときと完了したときのページレイアウトの比較。](no-size.png)

このようにテキストを移動させることは、ユーザー、特にすでに読み始めたユーザーにとって非常にわずらわしいものです。

HTML で `width` 属性と `height` 属性を用いて画像の実際の大きさを指定すると、ブラウザーは画像をダウンロードする前に、その画像のためにどれだけの空間が必要かを知ることができます。

これにより、画像がダウンロードされたとき、ブラウザーは周囲のコンテンツを移動させる必要がなくなります。

![画像サイズを指定した場合の、ブラウザーがページを読み込んでいるときと完了したときのページレイアウトの比較。](size.png)

この機能の歴史に関する優れた記事は、 [Setting height and width on images is important again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/) を参照してください。

> [!NOTE]
> これまでに述べたように、 HTML 属性を使って画像の実際の大きさを指定するのは良い習慣ですが、画像のサイズ変更にこれらを使用するべきではありません。
>
> 画像サイズを大きく設定しすぎると、画像が粗くなったり、ぼやけたり、小さすぎたりして、ユーザーのニーズに合っていない画像をダウンロードすることになり、帯域幅を浪費することになります。また、正しい[アスペクト比](https://ja.wikipedia.org/wiki/アスペクト比)を維持しないと、画像が歪んでいってしまうかもしれません。ウェブページに画像を掲載する前に、画像エディターを使用して正しいサイズにしましょう。
>
> 画像のサイズを変更する必要がある場合は、代わりに [CSS](/ja/docs/Learn_web_development/Core/Styling_basics) を使用しましょう。

### 画像のタイトル

[リンク](/ja/docs/Learn_web_development/Core/Structuring_content/Creating_links#title_属性による補足情報の追加)と同様に、画像に `title` 属性を追加して、必要に応じてさらに補足情報を提供することもできます。この例では、これを行うことができます。

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

しかし、これは推奨されていません。`title` には多くのアクセシビリティ上の問題があります。主に、スクリーンリーダーの対応予測不可能で、ほとんどのブラウザーではマウスを当てない限り表示されません（そのため、例えばキーボードのユーザーはアクセスできません）。このことについてもっと知りたい場合は、 Scott O'Hara の[タイトル属性の試行錯誤](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) （英語）をお読みください。

画像に添付するのではなく、メインの記事のテキストにそのような補足情報を含めた方がいいでしょう。

### アクティブラーニング: 画像の埋め込み

今度はあなたの番です。このアクティブラーニングの節では、簡単な埋め込み練習をさせていただきます。基本的な {{htmlelement("img")}} タグが提供されています。次の URL の画像を埋め込むようにしてください。

```url
https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
```

以前は他のサーバー上の画像に絶対にホットリンクしないように言っていましたが、これは単に学習目的のためのものです。

また、次のこともします。

- 代替テキストを追加し、画像 URL のスペルを間違えて機能することを確認します。
- 画像の正しい `width` と `height` （ヒント: 幅 200 ピクセル、高さ 171 ピクセル）を設定し、他の値を試してその効果を確認します。
- 画像に `title` を設定します。

間違えた場合は、\[リセット] ボタンを使用してリセットすることができます。あなたが本当に立ち往生した場合は、\[答えを表示] ボタンを押して答えを表示してください。

```html-nolint hidden
<h2>ライブ出力</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>編集可能なコード</h2>
<p class="a11y-label">
  Esc を押すとコード領域からフォーカスを移動させることができます（Tab はタブ文字を挿入します）。
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

{{ EmbedLiveSample('Active_learning_embedding_an_image', 700, 350) }}

## メディア資産とライセンス

ウェブ上で見つかる画像（やその他のメディア資産）は、さまざまな種類のライセンスのもとで公開されています。構築中のサイトで画像を使用する前に、その画像を自分で所有しているか、使用する権利を持っているか、所有者のライセンス条件を遵守しているかを確認してください。

### ライセンス種類を知る

ウェブで見つかる一般的なライセンスのカテゴリーを見ていきましょう。

#### すべての権利を留保

歌、書籍、ソフトウェアなどのオリジナルの著作物の作成者は、多くの場合、閉じられた著作権保護の下で作品をリリースします。これは既定では、彼ら（または彼らの出版社）がその著作物を使用する（例えば、展示したり配布したりする）独占的な権利を持っている、ということを意味しています。著作権保護された画像を「すべての権利を留保」ライセンスで使用したい場合、以下のいずれかを行う必要があります：

- 著作権者から書面による明示的な許可を得てください。
- 使用するためにはライセンス料を支払います。これは、無制限に使用するための1回限りの料金（「ロイヤリティフリー」）である場合もあれば、「ライツマネージド」である場合もあり、その場合は、時間、地域、業界、メディアの種類などによって、使用するごとに固有の料金を支払わなければならないことがあります。
- 自分の法域で[フェアユース](https://fairuse.stanford.edu/overview/fair-use/what-is-fair-use/)または[公正取引](https://copyrightservice.co.uk/copyright/p27_work_of_others)とみなされる使用に限定してください。

著作者は作品に著作権表示やライセンス条項を記載することは求められていません。著作権は、有形媒体に作成された時点で、オリジナル著作物に自動的に発生します。ですから、もしオンラインで画像を見つけて、著作権表示やライセンス条項がない場合、最も安全な方法は、それが著作権によって保護されており、すべての権利が留保されていると想定することです。

#### 寛容なライセンス

画像が [MIT](https://mit-license.org/) や [BSD](https://opensource.org/license/BSD-3-clause/)、あるいは適切な[クリエイティブ・コモンズ（CC）ライセンス](https://creativecommons.org/choose/)のような寛容なライセンスでリリースされている場合、使用するためにライセンス料を支払ったり、その権限を求めたりする必要はありません。それでも、満たす必要がある様々なライセンス条件があり、それはライセンスによって異なります。

例えば、守る必要があるかもしれないことは次の通りです。

- 画像の元ソースへのリンクを提供し、作成者のクレジットを記載すること。
- 何か変更があったかどうかを示すこと。
- 画像を使用して作成した二次的著作物は、元と同じライセンスの下で共有すること。
- 二次的著作物をまったく共有しないこと。
- 画像を商用作業で使用しないこと。
- 画像を使用するリリースには、ライセンスのコピーを記載すること。

従うべき固有の仕様については、該当するライセンスを参照してください。

> [!NOTE]
> 寛容なライセンスの文脈で「コピーレフト」という用語を見かけることがあります。コピーレフトライセンス（[GNU 一般公衆ライセンス (GPL)](https://www.gnu.org/licenses/gpl-3.0.en.html)や "Share Alike" クリエイティブコモンズライセンスなど）は、派生作品の場合、元と同じライセンスでリリースする必要があると規定しています。

コピーレフトライセンスは、ソフトウェアの世界では有名です。基本的な考え方は、コピーレフトでライセンスされた自分のプロジェクトのコードで構築された新しいプロジェクト（これは元ソフトウェアの「フォーク」として知られています）も、同じコピーレフトライセンスで使用許諾する必要があるということです。これによって、自分の新しいプロジェクトのソースコードも、確実に、他の人が研究したり変更したりして利用できるようにします。一般に、 GPL の6ようなソフトウェアのために立案されたライセンスは、ソフトウェア以外の作品を念頭に置いて立案されたものではないので、ソフトウェア以外の著作物にとって良いライセンスとはみなされないことに注意してください。

この章で指定されたリンクから、さまざまなライセンスの種類と、それらが指定する条件の種類をお読みください。

#### パブリックドメイン/CC0

パブリックドメインで公開された作品は、「権利留保なし」と呼ばれることがあります。著作権が適用されず、その権限はなく、ライセンス条件を履行する必要もなく、使用することができます。作品がパブリックドメインになるのは、著作権の失効や特定の権利の放棄など、様々な意味があります。

作品をパブリックドメインにする最も効果的な方法の1つは、 [CC0](https://creativecommons.org/share-your-work/public-domain/cc0/) でライセンスすることです。 CC0 は、そのために明確で曖昧さのない法的手段を提供する固有のクリエイティブ・コモンズライセンスです。

パブリックドメインの画像を使用する場合は、その画像がパブリックドメインであるという証拠を入手し、記録として保管してください。例えば、ライセンス状態が明確に掲載されている元画像のスクリーンショットを撮ったり、ライセンス要求されている画像とともに取得した画像の一覧を掲載したページをウェブサイトに追加することを検討してください。

### 寛容にライセンスされた画像の検索

自分のプロジェクトに使用する寛容なライセンスの画像は、画像検索エンジンを用いたり、画像リポジトリーから直接探したりすることができます。

探したい画像の説明と関連するライセンス用語を使用して画像を検索します。例えば、「黄色い恐竜」を検索する場合、検索クエリーに「パブリックドメイン画像」、「パブリックドメイン画像ライブラリー」、「オープンライセンス画像」などの用語を追加します。

検索エンジンの中には、寛容なライセンスの画像を探すのに役立つツールがあるものもあります。例えば Google を使用している場合、「画像」タブで画像を検索し、「ツール」をクリックします。表示されるツールバーに「ライセンス」のドロップダウンがあり、クリエイティブ・コモンズ・ライセンスの画像に限定した検索を選べます。

[Flickr](https://flickr.com/)、[ShutterStock](https://www.shutterstock.com)、[Pixabay](https://pixabay.com/) などの画像リポジトリーサイトには、その権限でライセンスされた画像だけを検索できるオプションの権限があります。 [Picryl](https://picryl.com) や [The Noun Project](https://thenounproject.com/) のように、寛容なライセンスの画像やアイコンを専門に配布しているサイトもあります。

画像がリリースされたライセンスを遵守するにあたっては、ライセンスの詳細を探し、ソースから提供されたライセンスや説明のページを読み、その指示に従うことが必要です。良質な画像リポジトリーは、そのライセンス条件を明確にしており、簡単に探すことができます。

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

```html-nolint
<figure>
  <img
    src="images/dinosaur.jpg"
    alt="The head and torso of a dinosaur skeleton;
            it has a large head with long sharp teeth"
    width="400"
    height="341" />

  <figcaption>
    マンチェスター大学博物館に展示されている T-Rex。
  </figcaption>
</figure>
```

{{htmlelement("figcaption")}} 要素は、キャプションが {{htmlelement("figure")}} 要素の他のコンテンツを説明していることをブラウザーと支援技術に伝えます。

> [!NOTE]
> アクセシビリティの観点から、キャプションと [`alt`](/ja/docs/Web/HTML/Element/img#alt) テキストには明確な役割があります。キャプションは画像を見ることができる人にも利益をもたらしますが、[`alt`](/ja/docs/Web/HTML/Element/img#alt) テキストは欠けている画像と同じ機能を提供します。したがって、キャプションと `alt` テキストは、画像がなくなったときに両方が表示されるため、同じことを言うべきではありません。ブラウザーで画像をオフにして見た目を確認してみてください。

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

```html-nolint hidden
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

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト: HTML 画像](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_images/Test_your_skills:_HTML_images) を見てください。

## まとめ

今回は以上です。ここまで画像とキャプションについて詳しく述べてきました。次の記事では、さらにギアを上げて、HTML を使用してウェブページに動画や音声コンテンツを埋め込む方法について見ていきたいと思います。

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content")}}
