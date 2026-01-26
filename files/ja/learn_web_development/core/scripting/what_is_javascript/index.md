---
title: JavaScript とは
slug: Learn_web_development/Core/Scripting/What_is_JavaScript
l10n:
  sourceCommit: eb20babb96149f98bcbf7817b58e305c5297f2e1
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}

MDN 初心者向け JavaScript コースへようこそ！ この最初の記事では、高水準から JavaScript を見ていき、「JavaScript とは何か？」「これを使うと何ができるか？」などの質問に答えます。 JavaScript の用途にきっちりと親しめるようになります。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td><a href="/ja/docs/Learn_web_development/Core/Structuring_content">HTML</a>および<a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS の基礎</a>を理解していること。
      </td>
    </tr>
    <tr>
      <th scope="row">学習目標:</th>
      <td>
        <ul>
          <li>JavaScriptとは何か、そしてウェブサイトにどのように組み込まれるのか。</li>
          <li>JavaScript でできること。</li>
          <li>ウェブページに JavaScript を追加すること。</li>
          <li>JavaScript でコメントを書く。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 高水準の定義

JavaScript はウェブページに複雑な機能を実装することを可能にするスクリプトまたはプログラミング言語です。ウェブページがただそこに座って静的な情報を表示する以上のことをする場合、タイムリーなコンテンツの更新、操作可能な地図、アニメーションする 2D/3D グラフィック、スクロールする動画ジュークボックスなどがある場合、 JavaScript が関わっていることは間違いないでしょう。
これはウェブ標準技術のレイヤーケーキの 3 層目であり、そのうちの 2 種類([HTML](/ja/docs/Learn_web_development/Core/Structuring_content)と[CSS](/ja/docs/Learn_web_development/Core/Styling_basics))は学習領域の他の部分で詳しく述べました。

![ウェブの標準技術である HTML、CSS、JavaScript の 3 つのレイヤー。](cake.png)

- {{glossary("HTML")}} はマークアップ言語で、これを使ってウェブコンテンツに構造と意味を与えます。例えば段落や見出しや表を定義したり、ページに画像や動画を入れたりします。
- {{glossary("CSS")}} は HTML コンテンツに適用するスタイリング規則の言語です。例えば背景とフォントの色を設定したり、複数の列にコンテンツをレイアウトしたりします。
- {{glossary("JavaScript")}} はスクリプト言語で、動的に更新されるコンテンツを作成したり、マルチメディアを制御したり、画像をアニメーションさせたり、その他ほとんどすべてを可能にします。（まあ、すべてではありませんが、JavaScript のコード数行で実現できることは素晴らしいことです。）

この 3 層は素晴らしい構成です。例としてシンプルなボタンを見てみます。HTML を使って構造と目的をマークアップできます。

```html
<button type="button">Player 1: Chris</button>
```

![Player 1: Chris の段落をプレーンテキストで表示](just-html.png)

次に、 CSS を加えて、見栄えをよくします。

```css
button {
  font-family: "helvetica neue", helvetica, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 2px solid rgb(200 200 0 / 60%);
  background-color: rgb(0 217 217 / 60%);
  color: rgb(100 0 0 / 100%);
  box-shadow: 1px 1px 2px rgb(0 0 200 / 40%);
  border-radius: 10px;
  padding: 3px 10px;
  cursor: pointer;
}
```

![Player 1: Chris のスタイル段落](html-and-css.png)

最後に、JavaScript を加えて動的なふるまいを実装します。

```js
const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("名前を入力して下さい");
  button.textContent = `Player 1: ${name}`;
}
```

{{ EmbedLiveSample('A_high-level_definition', '100%', 80, , , , , 'allow-modals') }}

テキストラベルの最新バージョンをクリックしてみて、何が起きるのか見てみましょう。（このデモは GitHub でも見られます。[ソースコード](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/javascript-label.html)または[ライブ実行](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/javascript-label.html)を参照してください。）

JavaScript はそれ以上のことができます。もっと詳しく見てみましょう。

## 実際に何ができるのか

JavaScript は次のことを実現する一般的なプログラミング機能で構成されています。

- 有用な値を変数に格納します。上の例では、ユーザーに新しい名前を問いかけて、`name` と名付けられた変数に入力された新しい名前を格納しています。
- 連なった文字（プログラミングでは「文字列」と呼ばれます）に対する操作。上の例では「Player 1: 」という文字列と `name` 変数をつなげて「Player 1: Chris」というような新しいラベルを生成しています。
- ウェブページで起きるイベントに対処します。先ほどの例では {{domxref("Element/click_event", "click")}} イベントを使用して、ボタンがクリックされたことを検出し、ラベルを更新するコードを実行しました。
- 他にもたくさんのことができます。

しかしさらに期待が大きいのは、クライアントサイド JavaScript 言語の上に構築された機能です。いわゆる**アプリケーションプログラミングインターフェイス** (**API**) は、JavaScript コードで使用するための特別なスーパーパワーを提供します。

API がなければ難しかったり、不可能であるようなコードを、すぐに使えるブロックのように、開発者がプログラムを作ることができるようになります。
家を作るときの既製の家具と同じことを、プログラミングでしてくれるのです。自分で設計し、使用する木材を選定し、正しい形で板を切り出して、正しいサイズのネジを見つけて、自分で組み立てるよりも、既に切り出されたボードとネジを使って本棚を組み立てるだけの方がずっと簡単ですよね。

API は大まかに 2 種類に分けられます。

![2 つのカテゴリーの API がある。サードパーティーの API がブラウザーの横に示されており、ブラウザーの API はブラウザーの中に示されている。](browser.png)

**ブラウザー API** はウェブブラウザーに組み込まれていて、コンピューターを取り巻く環境からデータを取り出したり、複雑で便利なことをしてくれたりします。例えば、

- [DOM (Document Object Model) API](/ja/docs/Web/API/Document_Object_Model) は HTML と CSS の操作を行うことができます。 HTML を生成し、削除し、変更し、動的にページの見た目を変更することなどができます。
  例えば、ページにポップアップウィンドウが現れたり、新しいコンテンツが表示されたり（この例では単純なデモで見たように）するのは、すべて DOM の働きによるものです。
- [位置情報 API](/ja/docs/Web/API/Geolocation_API) は地理的な情報を取得します。これは [Google マップ](https://www.google.com/maps)が現在の所在地を見つけて地図上にプロットする場合に使用されています。
- [キャンバス](/ja/docs/Web/API/Canvas_API)と [WebGL](/ja/docs/Web/API/WebGL_API) の API は 2D や 3D グラフィックでのアニメーションを可能とします。
  このウェブ技術を使用してすごいことをやってのける人たちがいます。 [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) や [webglsamples](https://webglsamples.org/) などのページを見てください。
- [音声と動画の API](/ja/docs/Web/Media/Guides/Audio_and_video_delivery)、たとえば {{domxref("HTMLMediaElement")}} や [WebRTC](/ja/docs/Web/API/WebRTC_API) などは適切な音声・動画をウェブページで再生したり、ウェブカメラの動画を撮って他の人のコンピューターで流したりするような、マルチメディアの可能性を示してくれます（私たちの [Snapshot demo](https://chrisdavidmills.github.io/snapshot/) を見てみてください）。

**サードパーティ API** はブラウザーには組み込まれておらず、さらに普通はウェブ上のどこかからそのコードと情報を探さなければなりません。例えば、

- [Twitter API](https://developer.x.com/ja/docs) を使用すると、ウェブサイトに最新のツイートを表示させることができます。
- [Google マップ API](https://developers.google.com/maps/) や [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API) を使用すると、ウェブサイトに専用の地図を埋め込み、付加機能を付けることもできます。

> [!NOTE]
> このような API は先進的ですが、このモジュールでは扱いません。詳しく知りたければ [クライアントサイドウェブ API モジュール](/ja/docs/Learn_web_development/Extensions/Client-side_APIs) で扱っています。

ワクワクすることはもっとたくさんあります！ ですが、まだ興奮しすぎないでください。24 時間程度の勉強だけでは、Facebook や Google マップや Instagram は作れません。まずはやらなければならない基本がたくさんあるのです。さあ、先に進みましょう！

## JavaScript はページ上で何をするのか

まずは実際にコードを見てみましょう。そしてページで JavaScript を動かすと何が起きるのか見てみましょう。

ブラウザーをウェブページに読み込んだときの話を簡単に説明します（[CSS とは何か](/ja/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#どのように_css_は_html_に適用されるのか)の記事で最初に出てきました）。ウェブページをブラウザーで見たとき、実行環境 (ブラウザーのタブ) の中で、コード (HTML、CSS、JavaScript) が実行されます。これは素材 (コード) を加工して製品 (ウェブページ) を出力する工場のようなものです。

![HTML、CSS、JavaScript のコードが組み合わされ、ページが読み込まれたときにブラウザーのタブに表示されるコンテンツを作成します。](execution.png)

JavaScript のごく一般的な用途は、（先ほど言及した） Document Object Model API を介して動的に HTML と CSS を変更し、ユーザーインターフェイスを更新することです。

### ブラウザーのセキュリティ

ブラウザーのそれぞれのタブは、コードを実行するための入れ物を個別に持ちます (この入れ物を技術的用語では「実行環境」と呼びます)。つまり、それぞれのタブ内でコードは完全に分かれて実行されており、あるタブで動いているコードは他のタブや他のウェブサイトのコードに、直接的には干渉できません。これは良いセキュリティ対策です。
互いに干渉することが出来てしまえば、ウェブの悪党たちは、他のタブで開いているウェブサイトから情報を盗み出したり、もっとひどいことをするためにコードを書き始めることでしょう。

> [!NOTE]
> 他のウェブサイトや、タブに安全にデータや実行可能なコードを送る方法はあります。けれども、このコースでは扱わない高度な技術です。

### JavaScript の実行順序

ブラウザーが JavaScript のブロックを見つけたとき、たいていは先頭から最後に向かって順番に実行されます。
つまりどの順番で実行されるかということに気を配らなければなりません。
例えば、最初の例で見た JavaScript のブロックに戻りましょう。

```js
const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("名前を入力してください");
  button.textContent = `Player 1: ${name}`;
}
```

このコードではボタンを選択して (1 行目)、イベントリスナーを登録して (3 行目) ボタンがクリックされたとき、`updateName()` というコードブロック (5 行目から 8 行目) が実行されるようにしています。`updateName()` というコードブロック (再利用可能なコードブロックで「関数」と呼びます) は、ユーザーに新しい名前を尋ねて、表示内容を変更するため、ボタンテキストにその名前を挿入します。

もし、最初の 2 行を入れ替えた場合、動かなくなってしまいます。代わりに[ブラウザーの開発者コンソール](/ja/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)に `Uncaught ReferenceError: Cannot access 'button' before initialization` というエラーが出るでしょう。
この意味は `button` オブジェクトがまだ初期化されていないため、イベントリスナーが設定できないということを表しています。

> [!NOTE]
> これはとてもよくあるエラーです。オブジェクトに対して何かをする前にはそのオブジェクトへの参照が存在していることに気を配らなければなりません。

### インタープリターとコンパイルコード

もしかしたら、**インタープリター**と**コンパイル**という用語をプログラミングの文脈で聞いたことがあるかもしれませんね。
インタープリター言語では、コードが上から下に実行されてコードの実行結果がすぐに返ってきます。
ブラウザーが実行する前にコードを何らかの形に変換する必要はありません。
コードはプログラマーに親しみやすいテキストで受け取られ、それが直接処理されます。

一方、コンパイル言語はコンピューターで実行する前に他の形式に変換（コンパイル）しなければなりません。
例えば C/C++ は機械語にコンパイルされてから、コンピューターで実行されます。
プログラムは、元のプログラムソースコードから生成されるバイナリーフォーマットで実行されます。

JavaScript は軽量なインタープリター型プログラミング言語です。
ウェブブラウザーは元のテキストの形で JavaScript コードを受け取り、それからスクリプトを実行します。
技術的な見地からは、たいていの JavaScript インタープリターは **実行時コンパイル** (just-in-time compiling) という技術を使ってパフォーマンスを向上させています。スクリプトが使われるときに、JavaScript コードが速いバイナリーフォーマットにコンパイルされて、可能な限り高速に実行されます。
しかし、JavaScript は、事前ではなく実行時にコンパイルされるために、インタープリター言語と考えられています。

ここで詳細は話しませんが、どちらの方式も長所と短所があります。

### サーバーサイドコードとクライアントサイドコード

**サーバーサイド**と**クライアントサイド**という言葉も聞いたことがあるかもしれません。特にウェブ開発でよく聞かれます。
クライアントサイドコードはユーザーのコンピューター上で実行されるコードです。ウェブページを見ているとき、ページのクライアントサイドコードがダウンロードされて、ブラウザーで実行されて表示されます。
このモジュールのことを明示的に**クライアントサイド JavaScript** と言います。

一方、サーバーサイドコードはサーバー上で実行され、結果がブラウザーにダウンロードされて表示されます。
ウェブで人気のあるサーバーサイドの言語は、PHP、Python、Ruby、ASP.NET など。そして JavaScript です！
JavaScript はサーバーサイドの言語としても使われます。人気のある Node.js 環境がその例です。サーバーサイドの JavaScript については[動的なウェブサイト – サーバーサイドプログラミング](/ja/docs/Learn_web_development/Extensions/Server-side)のトピックを見てください。

### 動的コードと静的コード

クライアントサイドの JavaScript と、サーバーサイドの言語を説明するのに**動的**という言葉を使います。これはウェブページやウェブアプリが必要に応じてコンテンツを生成し、異なる状況において異なる表示ができるという能力を指しています。
サーバーサイドのコードは、データベースからデータを取得して動的にコンテンツを生成します。一方、クライアントサイドの JavaScript はクライアント上のブラウザーで HTML のテーブルを生成したり、そのテーブルにサーバーから指示を受け、データを追加したり、ウェブページ上でユーザーにテーブルを表示したりするなどして、動的にコンテンツを生成します。
それぞれの文脈で、少し異なる意味合いではありますが、関連しています。そしてどちらの方式も (サーバーサイドもクライアントサイドも) たいていは同時に使用されます。

動的に更新されるコンテンツを含まないウェブページは**静的**と表現されます。静的なウェブページとは常に同じコンテンツを表示するページのことです。

## ページに JavaScript を追加する方法

JavaScript は CSS と同じような方法で、HTML ページに適用することができます。
CSS では {{htmlelement("link")}} 要素を使用することで外部のスタイルシートを適用することができ、また、{{htmlelement("style")}} 要素を使用することで HTML 内蔵に書かれたスタイルシートを適用することが出来ました。 JavaScript で HTML に書く必要があるのは {{htmlelement("script")}} 要素だけです。どのように書くのか見てみましょう。

### 内蔵 JavaScript

1. まずは [apply-javascript.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html) ファイルを自分のコンピューターにコピーします。どこか適当な場所に保存してください。
2. テキストエディターとウェブブラウザーでそのファイルを開いてください。クリックできるボタンが 1 つあるウェブページを作る HTML だということがわかりますね。
3. 次に、テキストエディターで `</body>` タグの直前に以下のコードを追加します。

   ```html
   <script>
     // JavaScript をここに書きます
   </script>
   ```

   ウェブ文書のコードは通常、ページに表示されている順番で読み込まれ実行されることに注意してください。JavaScript を文書の最後に配置することで、HTML 要素がすべて読み込まれることを確保しています。（下記「[スクリプトの読み込み方針](#スクリプトの読み込み方針)」も参照してください。）

4. それでは {{htmlelement("script")}} 要素内に JavaScript を書いて、もうちょっと面白いことをしてみましょう。「// JavaScript をここに書きます」と書いてあるすぐ下に、以下のコードを追加してください。

   ```js
   function createParagraph() {
     const para = document.createElement("p");
     para.textContent = "ボタンが押されました!";
     document.body.appendChild(para);
   }

   const buttons = document.querySelectorAll("button");

   for (const button of buttons) {
     button.addEventListener("click", createParagraph);
   }
   ```

5. ファイルを保存してブラウザーを更新してください。ボタンを押す度に新しい段落が作られて、下に表示されるようになりましたね。

> [!NOTE]
> もし上記の例が上手く動いていないとしたら、もう一度最初から手順を確認してください。
> コピーしてコードを書いたファイルは `.html` というファイル名ですか？
> {{htmlelement("script")}} 要素を `</body>` タグの直前に追加しましたか？
> JavaScript を上の例の通りに書きましたか？ **JavaScript は大文字小文字を区別しますので、見えている通りに書かなければなりません。正しく書いていなければ、動いてくれません。**

> [!NOTE]
> GitHub にあるこちらのバージョン、[apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html) ([ライブ](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html))でも見ることもできます。

### 外部 JavaScript

これで JavaScript が動きましたね。しかし、 JavaScript を外部のファイルに書きたいときはどうすればよいでしょうか？ 次の例を見てみましょう。

1. まず、先ほどの HTML ファイルと同じディレクトリーに新しいファイルを作ります。これを `script.js` と名付けます。 .js という拡張子であることを確認してください。それで JavaScript であると認識されるのです。
2. 現在の `</body>` の下にある {{htmlelement("script")}} を除去し、`</head>` 終了タグの直前に次のコードを追加します（この方法では、ブラウザーはファイルを読み込むのを下部に配置した場合よりも早く始めることができます）。

   ```html
   <script type="module" src="script.js"></script>
   ```

3. `script.js` に、次のスクリプトを追加します。

   ```js
   function createParagraph() {
     const para = document.createElement("p");
     para.textContent = "ボタンが押されました!";
     document.body.appendChild(para);
   }

   const buttons = document.querySelectorAll("button");

   for (const button of buttons) {
     button.addEventListener("click", createParagraph);
   }
   ```

4. 保存してブラウザーを更新してください。ボタンをクリックしても効果がないことが分かるでしょう。ブラウザーのコンソールを確認すると、 `Cross-origin request blocked` という内容のエラーが表示されます。これは、多くの外部リソースと同様に、JavaScript モジュールは HTML と[同じオリジン](/ja/docs/Web/Security/Defenses/Same-origin_policy)から読み込む必要があり、 `file://` URL は適格ではないためです。この問題を修正するには、 2 つの方法があります。
   - お勧めする解決策は、[ローカルテストサーバーをセットアップ](/ja/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server)することです。サーバープログラムが動作し、ポート `8000` で `apply-javascript-external.html` と `script.js` ファイルを配信している状態で、ブラウザーを開き、 `http://localhost:8000` にアクセスします。
   - ローカルサーバーが実行できない場合は、 `<script type="module" src="script.js"></script>` の代わりに `<script defer src="script.js"></script>` を使用することもできます。 詳細は下記[スクリプトの読み込み方針](#スクリプトの読み込み方針)を参照してください。 しかし、チュートリアルの他の部分で使用する機能は、いずれにせよローカルの HTTP サーバーが必要となる場合があることに注意してください。
5. これでウェブサイトは以前と同じように動作しますが、 JavaScript は外部ファイルから取得するようになります。
   これは一般的に、コードを整理し、複数の HTML ファイル間で再利用できるようにするという点で良いことです。
   さらに、 HTML に巨大なスクリプトの塊が含まれなくなるため、読みやすくなります。

> [!NOTE]
> GitHub でこちらのバージョンも見られます。[apply-javascript-external.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) と [script.js](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/script.js) です ([ライブでも見られます](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html))。

### インライン JavaScript ハンドラー

たまに JavaScript のコードが HTML の途中に書かれているのを見かけます。
こんな感じです。

```js example-bad
function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "ボタンが押されました！";
  document.body.appendChild(para);
}
```

```html example-bad
<button onclick="createParagraph()">押してください</button>
```

このバージョンのデモは以下で確認できます。

{{ EmbedLiveSample('Inline_JavaScript_handlers', '100%', 150) }}

このデモは先ほどの節のものと同じ機能を持っていますが、 {{htmlelement("button")}} 要素に `onclick` 属性を付けてボタンが押されたときに関数が実行されるようにハンドラーを直接書いています。

**ただし、このようにはしないでください。** この書き方は HTML を JavaScript で汚してしまう悪い書き方です。さらに、`onclick="createParagraph()"` という属性を JavaScript を適用したいボタンすべてに書かなければなりませんので、とても非効率です。

### 代わりに addEventListner を使用する

HTML に JavaScript を含めるのではなく、純粋な JavaScript による構築を使用してください。
`querySelectorAll()` 関数を使うと、ページ上のすべてのボタンを選択することができます。
そして、ループ処理でそれぞれのボタンに対して、 `addEventListener()` を使ってハンドラーを割り当てることができます。
このためのコードを以下に示します。

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

これは `onclick` 属性よりも少し長いかもしれませんが、ページ上にいくつボタンがあっても、またいくつ追加されたり削除されたりしても、すべてのボタンに対して機能します。
JavaScript は変更する必要がありません。

> [!NOTE]
> 自分の `apply-javascript.html` ファイルを編集して、いくつかボタンを追加してみて下さい。
> 再度読み込むとどのボタンを押しても段落が作られるのがわかるでしょう。
> 素敵でしょう。

### スクリプトの読み込み方針

ページ上の HTML はすべて、現れる順番に読み込まれます。
JavaScript を使用してページ上の要素（より正確に言えば、[ドキュメントオブジェクトモデル](/ja/docs/Learn_web_development/Core/Scripting/DOM_scripting#the_document_object_model)）を操作する場合、 JavaScript が HTML より先に読み込まれ構文解析されると、コードは動作しません。

HTML が解釈できるようになった後にのみ JavaScript を実行するようにするには、いくつか方法があります。

- 前述の内蔵 JavaScript の例では、スクリプト要素は文書本体の一番下に配置されているため、 HTML 本体の残りの部分が構文解析された後にのみ実行されます。
- 上記のような外部 JavaScript の例では、スクリプト要素は HTML 本体の構文解析が行われる前に文書のヘッド部に配置されます。しかし、 `<script type="module">` を使用しているため、コードは[モジュール](/ja/docs/Web/JavaScript/Guide/Modules)として扱われ、ブラウザーは HTML がすべて処理されるまで JavaScript モジュールの実行を待ちます。（外部スクリプトを本体の最後に配置することもできます。しかし、 HTML の量が多くネットワークが遅い場合、ブラウザーがスクリプトを取得し読み込むことを開始するまでに多くの時間がかかる可能性があるため、外部スクリプトをヘッド部に配置する方が通常は望ましいです。）
- それでも文書のヘッド部でモジュール以外のスクリプトを使用したい場合は、ページ全体が表示されないようにブロックされたり、 HTML が解釈される前に実行されてエラーが発生したりする可能性があります。
  - 外部スクリプトにおいては、 `defer` （または HTML が利用できるようになるまで待つ必要がないのであれば `async`）属性を {{htmlelement("script")}} 要素に設定してください。
  - 内蔵スクリプトにおいては、コードを [`DOMContentLoaded` イベントリスナー](/ja/docs/Web/API/Document/DOMContentLoaded_event)で囲んでください。

  これは現時点ではチュートリアルの範囲を超えていますが、ごく古いブラウザーに対応する必要がない場合は、これを行う必要はなく、代わりに `<script type="module">` を使用することができます。

## コメント

HTML や CSS と同様に、 JavaScript でもコード内にブラウザーが実行しない「コメント」を書くことができます。仲間の開発者（または、コードを忘れた 6 カ月後の自分自身）に対して動作方法を書くことができます。
コメントはとても便利ですしたくさん書きましょう。大きなプログラムを書くのならなおのことです。
コメントの書き方は 2 種類あります。

- 1 行で収まるコメントは 2 つのスラッシュ (//) のあとに続けて書きます。

  ```js
  // これはコメントです
  ```

- 複数行に渡るコメントは /\* から \*/ の間に書きます。

  ```js
  /*
    これも
    コメントです
  */
  ```

先ほどのデモでコメントを書くならば、以下のようにします。

```js
// 関数: HTML の body タグ内の一番下に新しい段落を追加します。

function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "ボタンが押されました！";
  document.body.appendChild(para);
}

/*
  1. ページ内のボタンへの参照をすべて取り出して配列に入れる。
  2. すべてのボタンをループで回し、クリックイベントのリスナーを追加する

  どのボタンが押されても、 createParagraph() 関数が実行されるようにする。
*/

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

> [!NOTE]
> 一般的にコメントは多いほうが少ないよりも優れていますが、変数が何であるかを説明する (変数名はおそらくもっと直感的にするべきです) ため、または非常に単純な操作を説明する (コードが複雑すぎるかもしれません) ために、多くのコメントを追加する場合は注意が必要です。

## まとめ

さて、 JavaScript の世界に足を踏み入れましたね。
なぜ JavaScript を使い、何ができるのかということに慣れるため、まずは理論から始めました。
進むにつれ、少しでしたが例を見て、何よりも JavaScript がどのようにウェブサイトの他のコードに組み込まれているかを学習しました。

現時点では JavaScript はこれで正しいのか不安になるかもしれませんが、心配しないでください。このコースでは、単純な段階を踏んで、意味が分かるようにしていきます。
次の記事では、すぐに実践的な内容に入り、自分自身で JavaScript の例を作成してもらいます。

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}
