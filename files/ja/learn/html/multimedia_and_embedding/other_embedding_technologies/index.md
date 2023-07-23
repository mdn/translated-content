---
title: object から iframe まで — その他の埋め込み技術
slug: Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies
l10n:
  sourceCommit: 0b2ed45bea188abc27cdd92c3faffcb7483d3314
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding")}}

そろそろ、画像、動画、音声を含め、ウェブページに何かを埋め込むコツを実際に使用されていることでしょう。この点では、少し横道にそれて、様々な種類のコンテンツをウェブページに埋め込むことができる要素、{{htmlelement("iframe")}}、{{htmlelement("embed")}}、{{htmlelement("object")}} を見てみたいと思います。 `<iframe>` は他のウェブページを埋め込むためのもので、他の 2 つの要素は PDF ファイルのような外部リソースを埋め込むことができます。

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
        >にあるような）、およびこのモジュールの前の記事。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        {{htmlelement("object")}}, {{htmlelement("embed")}}, {{htmlelement("iframe")}} を使用して、ウェブページに PDF 文書や他のウェブページなどのアイテムを埋め込む方法を学ぶ。
      </td>
    </tr>
  </tbody>
</table>

## 埋め込みの略歴

一昔前のウェブでは、ウェブサイトを作成する際に**フレーム**がよく使用されていました。これは、ウェブサイトの小さな部分を個々の HTML ページに格納したものです。フレームは**フレームセット**と呼ばれるマスター文書に埋め込まれており、表の列や行のサイズを指定するように、画面の内側へフレームを配置する領域を指定することができました。 90 年代半ばから後半にかけては、このフレームセットはクールなものの代表格で、ウェブページを小さな塊に分割して保有した方が、ダウンロード速度が向上するという証拠もありました（当時はネットワーク接続が非常に遅かったので特に顕著でした）。しかし、多くの問題があり、ネットワーク速度が速くなるにつれて、積極的な利点よりもはるかに大きくなったため、現在では使用されているのを見ることはありません。

少し後で（90 年代後半から 2000 年代前半）、[Java アプレット](/ja/docs/Glossary/Java)や [Flash](/ja/docs/Glossary/Adobe_Flash) のようなプラグイン技術がとても普及し、これらの技術によってウェブ開発者は、動画やアニメーションなどの HTML だけでは得られないリッチコンテンツをウェブページに組み込むことができるようになりました。これらの技術を埋め込むには、 {{htmlelement("object")}} や、あまり使用されない {{htmlelement("embed")}} といった要素があり、当時はとても有用なものでした。その後、アクセシビリティ、セキュリティ、ファイルサイズなど、多くの問題を保有したため、流行遅れになったのです。最近では、主要なブラウザーは Flash などのプラグインに対応していません。

最後に、 {{htmlelement("iframe")}} 要素が（{{htmlelement("canvas")}} や {{htmlelement("video")}} などのコンテンツを埋め込む他の方法と一緒に）登場しました。これは、ウェブ文書全体を別の文書の中に、まるで {{htmlelement("img")}} や他の要素のように埋め込む方法を提供しており、今日も定期的に使用されています。

歴史の勉強はここまでにして、次にこれらのいくつかを使用する方法を見ていきましょう。

## アクティブラーニング: 従来の埋め込みを使う

この記事では、埋め込み技術がどのような用途に使用されるかを実感していただくために、アクティブラーニングの節に直接飛び込んでいきます。ネットの世界では [YouTube](https://www.youtube.com) がとても有名ですが、その共有機能が利用できることを知らない人がたくさんいます。 YouTube では、 {{htmlelement("iframe")}} を使用して、どのようなページにでも動画を埋め込むことができるのかを見てみましょう。

1. まず、YouTubeにアクセスして、気に入った動画を探します。
2. 動画の下に \[共有] ボタンがあるので、これを選択すると共有オプションが表示されます。
3. \[埋め込む] ボタンを選択すると、いくつかの `<iframe>` コードが指定されます - これをコピーしてください。
4. これを下の入力ボックスに挿入し、 _ライブ出力_ に結果が表示されるのを確認してください。

ボーナスポイントとして、例の中に [Google マップ](https://www.google.com/maps/)を埋め込むこともできます。

1. Google マップへ行き、好きな地図を見つけます。
2. UI の左上にあるハンバーガーメニュー（3 本の水平線）をクリックします。
3. \[地図を共有または埋め込む] オプションを選択します。
4. \[地図を埋め込む] オプションを選択します。これは、`<iframe>` コードをいくつか提供します。これをコピーします。
5. 下の入力ボックスにそれを挿入し、結果が出力にあるかどうかを確認します。

間違えた場合は、\[リセット] ボタンを使用してリセットすることができます。あなたが本当に立ち往生したら、\[答えを表示] ボタンを押して回答を見てください。

```html hidden
<h2>ライブ出力</h2>

<div class="output" style="min-height: 250px;"></div>

<h2>編集可能なコード</h2>
<p class="a11y-label">
  Esc を押すとコード領域からフォーカスを移動させることができます（Tab
  はタブ文字を挿入します）。
</p>

<textarea
  id="code"
  class="input"
  style="width: 95%;min-height: 100px;"></textarea>

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
let code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "答えを表示";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "答えを表示") {
    textarea.value = solutionEntry;
    solution.value = "答えを隠す";
  } else {
    textarea.value = userEntry;
    solution.value = "答えを表示";
  }
  updateCode();
});

const htmlSolution =
  '<iframe width="420" height="315" src="https://www.youtube.com/embed/QH2-TGUlwu4" frameborder="0" allowfullscreen>\n</iframe>\n\n<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37995.65748333395!2d-2.273568166412784!3d53.473310471916975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae6c05743d3d%3A0xf82fddd1e49fc0a1!2sThe+Lowry!5e0!3m2!1sen!2suk!4v1518171785211" width="600" height="450" frameborder="0" style="border:0" allowfullscreen>\n</iframe>';
let solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
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

{{ EmbedLiveSample('Active_learning_classic_embedding_uses', 700, 600) }}

## iframe の詳細

簡単で楽しかったでしょう？ {{htmlelement("iframe")}} 要素は、他のウェブ文書を現在の文書に埋め込むことができるように設計されています。これは、直接制御できない可能性のある第三者のコンテンツをウェブサイトに組み込むのに適していて、独自のバージョンを実装する必要はありません — オンライン動画プロバイダーの動画、 [Disqus](https://disqus.com/) のようなコメントシステム、オンライン地図プロバイダーの地図、広告バナーなど。このコースで使用しているライブ編集可能な例も、`<iframe>` を使用して実装されています。

`<iframe>` 要素を使用する前に、いくつかのセキュリティ上の懸念があります。
例えば、{{htmlelement("iframe")}} 要素を使用して、MDN 用語集をウェブページに記載するために、次のコード例のようなことを試みるとします。
下記のコードをページに追加した場合、用語集ページではなく、エラーメッセージが表示されることに驚くかもしれません。

```html
<head>
  <style>
    iframe {
      border: none;
    }
  </style>
</head>
<body>
  <iframe
    src="https://developer.mozilla.org/ja/docs/Glossary"
    width="100%"
    height="500"
    allowfullscreen
    sandbox>
    <p>
      <a href="/ja/docs/Glossary">
        iframe に対応していないブラウザーのための代替リンク
      </a>
    </p>
  </iframe>
</body>
```

ブラウザーでコンソールを見ると、次のようなエラーメッセージが表示されているはずです。

```
Refused to display 'https://developer.mozilla.org/' in a frame because it set 'X-Frame-Options' to 'deny'.
```

後述の[セキュリティ](#セキュリティの懸念)の節では、このエラーが発生する原因について詳しく説明していますが、最初のうちは、このコードが何を行っているのかを見ていきましょう。

この例には、`<iframe>` の使用に必要な基本的な要素が含まれています。

- [`border: none`](/ja/docs/Web/CSS/border)
  - : 使用した場合、`<iframe>` は周囲の境界線なしで表示されます。そうでない場合、既定では、ブラウザーは `<iframe>` を境界線付きで表示します（これは一般的に望ましくありません）。
- [`allowfullscreen`](/ja/docs/Web/HTML/Element/iframe#allowfullscreen)
  - : 設定されている場合、`<iframe>` は、[全画面 API](/ja/docs/Web/API/Fullscreen_API) を使用して全画面モードにすることができます（この記事の範囲外です）。
- [`src`](/ja/docs/Web/HTML/Element/iframe#src)
  - : この属性は、 {{htmlelement("video")}} や {{htmlelement("img")}} と同様に、埋め込む文書の URL を指すパスを含んでいます。
- [`width`](/ja/docs/Web/HTML/Element/iframe#width) と [`height`](/ja/docs/Web/HTML/Element/iframe#height)
  - : これらの属性は、 iframe の幅と高さを指定します。
- [`sandbox`](/ja/docs/Web/HTML/Element/iframe#sandbox)
  - : この属性は、他の `<iframe>` の機能よりも若干現代的なブラウザー(たとえば、IE 10 以上)で機能し、高度なセキュリティ設定を要求します。これについては、次のセクションで詳しく説明します。

> **メモ:** 速度を向上させるためには、メインコンテンツの読み込みが完了した後に iframe の `src` 属性を JavaScript で設定することをお勧めします。これにより、ページがより早く使用できるようになり、公式ページの読み込み時間が短縮されます（重要な {{glossary("SEO")}} の測定基準）。

### セキュリティ上の懸念

上記で、セキュリティに関する懸念について触れましたが、ここでもう少し詳しく説明します。私たちは、この内容を最初から完璧に理解してもらうことを期待しているわけではありません。ただ、この懸念に気づいてもらい、経験を積んで `<iframe>` を実験や業務で使用することを考え始めたときに、参考になるような情報を提供したいだけなのです。また、怖がって `<iframe>` を使用しないようにする必要はなく、ただ注意する必要があるだけです。続きを読んでください...

ブラウザーメーカーやウェブ開発者は、 iframe がウェブ上の悪意ある人物（しばしば**ハッカー**、またはより正確には**クラッカー**と呼ばれます）の共通のターゲット（公式の用語: **攻撃ベクター**）であるということを苦労して学びました。悪意ある人物は、あなたのウェブページを悪意を持って改ざんすることや、ユーザー名やパスワードなどの機密情報を明らかにするなど、人を騙し望んでいないことを行います。このため、仕様技術者とブラウザー開発者は、`<iframe>` をより安全にするためのさまざまなセキュリティメカニズムを開発しました。また、考慮すべき最善の措置もあります。これらのいくつかを以下で説明します。

> **メモ:** [クリックジャッキング](/ja/docs/Glossary/Clickjacking)は、ハッカーが目に見えない iframe を文書に埋め込んだり（文書を自分の悪意のあるウェブサイトに埋め込んだり）して、ユーザーの操作を乗っ取るための一般的な iframe 攻撃の一種です。これは、ユーザーを誤解させたり機密データを盗む一般的な方法です。

簡単な例ですが、先ほど紹介した例をブラウザーに読み込んでみましょう。Github に[ライブ](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html)が公開されています（[ソースコード](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html)も参照してください）。実際にページに何も表示されませんが、[ブラウザーの開発者ツール](/ja/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools)のコンソールに、理由を示すメッセージが表示されます。 Firefox では、`The loading of "https://developer.mozilla.org/en-US/docs/Glossary" in a frame is denied by "X-Frame-Options" directive set to "DENY"` （フレーム内への `https://developer.mozilla.org/en-US/docs/Glossary` の読み込みは、 X-Frame-Options ディレクティブが "DENY" に設定されているため、拒否されました）というメッセージが表示されます。これは、MDN を作成した開発者が、`<iframe>` 内に埋め込まれないようにウェブサイトのページを提供する設定をサーバーに組み込んだためです（下記の [CSP ディレクティブの設定](#csp_ディレクティブの設定)を参照してください）。これは実に理にかなっています。MDN のページ全体を他のページに埋め込むことは、自分のサイトに埋め込んで自分自身で主張するようなことをしない限り、実に意味がありませんし、また[クリックジャッキング](/ja/docs/Glossary/Clickjacking)によってデータを盗もうとすることも、どちらも本当に悪いことです。さらに、もしみんながこれをやり始めたら、必要な通信帯域が増え、 Mozilla にたくさん課金されてしまうでしょう。

#### 必要なときのみ埋め込む

第三者のコンテンツを埋め込むことが理にかなっている場合もあります。 — youtube 動画や地図のようなものですが、完全に必要なときに第三者のコンテンツだけを埋め込むのであれば、頭を悩ますことはありません。ウェブセキュリティのための良い経験則は、「慎重すぎることは決してありません。もしあなたがそれを作ったら、とにかくそれをもう一度チェックしてください。他の誰かがそれを作ったら、そうでないと証明されるまでそれは危険です。」ということです。

セキュリティのほかに、知的財産の問題にも注意する必要があります。ほとんどのコンテンツは著作権で保護されており、オフラインでもオンラインでも、予期していないコンテンツ(例えば、[ウィキメディアコモンズ](https://commons.wikimedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8?uselang=ja)のほとんどの画像)でさえもあります。あなたが所有しているか、または所有者があなたに書面による明白な許可を与えていない限り、ウェブページにコンテンツを表示しないでください。著作権侵害に対する罰則は厳しいものです。繰り返しますが、決して慎重すぎることはありません。

コンテンツにライセンスが付与されている場合は、ライセンス条項に従わなければなりません。たとえば、MDN のコンテンツは [CC-BY-SA でライセンス](/ja/docs/MDN/Writing_guidelines/Attrib_copyright_license)されています。つまり、コンテンツを大幅に変更した場合でも、コンテンツを引用する際には、[適切にクレジットを表示する](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution)(英語)必要があります。

#### HTTPS を使用する

{{Glossary("HTTPS")}} は {{Glossary("HTTP")}} の暗号化されたバージョンです。可能であれば、HTTPS を使用してウェブサイトを提供する必要があります。

1. HTTPS を使用すると、転送中にリモートコンテンツが改ざんされる可能性が減り、
2. HTTPS は、埋め込みコンテンツが親文書内のコンテンツにアクセスすることを防止し、逆も同様です。

サイトで HTTPS を有効にするには、特別なセキュリティ証明書をインストールする必要があります。多くのホスティングプロバイダーは、自分自身で資格情報を所有するための設定をすることなく、 HTTPS 対応のホスティングを提供しています。しかし、自分自身でサイトの HTTPS 対応を設定する必要がある場合、 [Let's Encrypt](https://letsencrypt.org/) は、必要な証明書を自動的に作成してインストールするためのツールや手順を、Apache web server、Nginx など、最も広く使用されているウェブサーバーの組み込み対応で使用する方法を提供しています。 Let's Encrypt のツールは、可能な限りプロセスを簡単にするように設計されているので、サイトを HTTPS 化するために、このツールまたは他に使用できる手段を避ける理由は、実に何もないのです。

> **メモ:** [GitHub ページ](/ja/docs/Learn/Common_questions/Tools_and_setup/Using_GitHub_pages)では、既定で HTTPS 経由でコンテンツを提供できるため、コンテンツのホスティングに便利です。異なるホスティングを使用していて、わからない場合は、ホスティングプロバイダーに問い合わせてください。

#### 常に `sandbox` 属性を使用する

攻撃者がウェブサイトで悪事を働く力をできるだけ小さくしたいので、埋め込みコンテンツには「その仕事をするために必要な権限」だけを与えるべきです。もちろん、これは自分自身のコンテンツにも当てはまります。コードが適切に使用できる、あるいはテストのために使用できる、しかしコードベースの残りの部分に（偶然であれ悪意であれ）害を発生させることができない、コードのためのコンテナーは[サンドボックス](<https://ja.wikipedia.org/wiki/サンドボックス_(セキュリティ)>)と呼ばれています。

サンドボックス化されていないコンテンツは、JavaScript の実行、フォームの送信、ポップアップウィンドウの起動などを行うことができます。既定では、前の例で示したように、引数なしの `sandbox` 属性を使用して、利用可能なすべての制限を課す必要があります。

絶対に必要な場合は、権限を（`sandbox=""` 属性値内に） 1 つずつ追加することができます。使用可能なすべてのオプションについては、 [`sandbox`](/ja/docs/Web/HTML/Element/iframe#sandbox) のリファレンスの記事を参照してください。重要な注意点の 1 つは、 `sandbox` 属性に `allow-scripts` と `allow-same-origin` の両方を追加しないことです。この場合、埋め込みコンテンツは、サイトのスクリプトの実行を停止する同一オリジンセキュリティポリシーをバイパスし、 JavaScript を使用してサンドボックスを完全に無効にすることができます。

> **メモ:** 攻撃者が欺いて悪意のあるコンテンツ（iframe 外にある）を直接訪問させることができれば、サンドボックスは保護を提供しません。特定のコンテンツが悪意のあるコンテンツ（ユーザー生成コンテンツなど）である可能性がある場合は、別の{{glossary("domain","ドメイン")}}からメインサイトへ配信してください。

#### CSP ディレクティブの設定

{{Glossary("CSP")}} は **[コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/CSP)** の略で、HTML 文書のセキュリティを強化するために設計された[一連の HTTP ヘッダー](/ja/docs/Web/HTTP/Headers/Content-Security-Policy)（ウェブサーバーから配信されたときにウェブページとともに送信されるメタデータ）を提供します。`<iframe>` を保護する場合、[適切な X-Frame-Options ヘッダーを送信するようにサーバーを構成](/ja/docs/Web/HTTP/Headers/X-Frame-Options)できます。これにより、他のウェブサイトがそのウェブページにあなたのコンテンツを埋め込むのを防ぐことができます（[クリックジャッキング](/ja/docs/Glossary/Clickjacking)や他の攻撃のホストを可能にする）。以前に見たように、これはまさに MDN 開発者が行ったことです。

> **メモ:** Frederik Braun 氏の投稿 [X-Frame-Options セキュリティヘッダーについて](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/)（英語）で、このトピックの背景情報を読むことができます。明らかに、これは、この記事の説明の範囲外です。

## \<embed> 要素と \<object> 要素

{{htmlelement("embed")}} と {{htmlelement("object")}} 要素は {{htmlelement("iframe")}} とは異なる機能を果たします。これらの要素は、 PDF などの外部コンテンツを埋め込むための汎用的な埋め込みツールです。

しかし、これらの要素を使用することはとても少ないでしょう。 PDF を表示する必要がある場合、通常はページに埋め込むのではなく、リンクする方がよいでしょう。

過去には、これらの要素は {{Glossary("Adobe Flash")}} のようなブラウザーのプラグインによって処理される内容を埋め込むためにも使用されましたが、この技術は現在では時代遅れであり、現代のブラウザーはこの技術に対応していません。

プラグインの内容を埋め込む必要が出てきた場合、最低限このような情報が必要になります。

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">{{htmlelement("embed")}}</th>
      <th scope="col">{{htmlelement("object")}}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>埋め込みコンテンツの {{glossary("URL")}}</td>
      <td><a href="/ja/docs/Web/HTML/Element/embed#src"><code>src</code></a></td>
      <td><a href="/ja/docs/Web/HTML/Element/object#data"><code>data</code></a></td>
    </tr>
    <tr>
      <td>
        埋め込みコンテンツの<em>正確な</em>{{glossary("MIME type", 'メディア種別')}}
      </td>
      <td><a href="/ja/docs/Web/HTML/Element/embed#type"><code>type</code></a></td>
      <td><a href="/ja/docs/Web/HTML/Element/object#type"><code>type</code></a></td>
    </tr>
    <tr>
      <td>
        プラグインで制御されるボックスの幅と高さ（CSS ピクセル単位）
      </td>
      <td>
        <a href="/ja/docs/Web/HTML/Element/embed#height"><code>height</code></a><br /><a href="/ja/docs/Web/HTML/Element/embed#width"><code>width</code></a>
      </td>
      <td>
        <a href="/ja/docs/Web/HTML/Element/object#height"><code>height</code></a><br /><a href="/ja/docs/Web/HTML/Element/object#width"><code>width</code></a>
      </td>
    </tr>
    <tr>
      <td>プラグインに引数として供給するための名前と値</td>
      <td>その場限りの属性とその名前と値</td>
      <td>
        単一タグの {{htmlelement("param")}} 要素を <code>&#x3C;object></code> の中に書く
      </td>
    </tr>
    <tr>
      <td>利用不可能なリソースに対する代替として独立した HTML コンテンツ</td>
      <td>対応なし（<code>&#x3C;noembed></code> は廃止）</td>
      <td>
        <code>&#x3C;object></code> 内の
        <code>&#x3C;param></code> 要素の後に入れる
      </td>
    </tr>
  </tbody>
</table>

次に、PDF をページに埋め込む `<object>` の例を見てみましょう（[ライブ例](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html)と[ソースコード](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html)を参照）。

```html
<object data="mypdf.pdf" type="application/pdf" width="800" height="1200">
  <p>
    PDF プラグインはありませんが、
    <a href="mypdf.pdf">PDF ファイルをダウンロードできます。</a>
  </p>
</object>
```

PDF は紙とデジタルの間の必要な足がかりでしたが、多くの[アクセシビリティ上の課題](https://webaim.org/techniques/acrobat/acrobat)（英語）があり、小さな画面では読みにくい場合があります。まだいくつかのサークルで人気がある傾向がありますが、ウェブページに埋め込むのではなく、ダウンロードしたり、別のページで読むことができるように、リンクする方がはるかに優れています。

## スキルをテストしましょう

この記事はここまでですが、最も重要な情報を覚えていますか？先に進む前に、この情報を保持しているかどうかを確認するためのテストをいくつか見つけることができます — [スキルテスト: マルチメディアと埋め込み](/ja/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content/Test_your_skills:_Multimedia_and_embedding)を参照してください。

## まとめ

ウェブ文書に他のコンテンツを埋め込むという話題は、すぐに複雑になりがちです。そこでこの記事では、関連する技術のより高度な機能のいくつかを示唆しつつ、すぐに関連性が感じられるような、シンプルで身近な方法でそれを紹介しようと試みました。はじめのうちは、地図や動画のようなサードパーティーのコンテンツをページに記載する以上の目的で、埋め込みを使用することはあまりないと思われます。しかし、経験を積むにつれて、より多くの使用方法を見つけることができるようになるはずです。

ここで説明したもの以外にも、外部コンテンツの埋め込みを含む他の多くの技術があります。以前の記事では {{htmlelement("video")}}、{{htmlelement("audio")}}、{{htmlelement("img")}} などいくつかを見ましたが、JavaScript で生成された 2D および 3D グラフィックの場合は {{htmlelement("canvas")}}、ベクターグラフィックス埋め込む場合は {{SVGElement("svg")}} など、他にも見い出されるものがあります。モジュールの次の記事では [SVG](/ja/docs/Web/SVG) を見ていきます。

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding")}}
