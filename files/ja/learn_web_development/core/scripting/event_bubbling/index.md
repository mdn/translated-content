---
title: イベントのバブリング
slug: Learn_web_development/Core/Scripting/Event_bubbling
l10n:
  sourceCommit: eb20babb96149f98bcbf7817b58e305c5297f2e1
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Events","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}

ウェブページは見出し、テキストの段落、画像、ボタンなどの「要素」で構成されており、これらの要素に発生するイベントを待ち受けすることができることを見てきました。例えば、ボタンにリスナーを追加すると、ユーザーがボタンをクリックしたときに実行することができます。

また、これらの要素は他の要素の中に「入れ子」にすることができます。例えば、{{htmlelement("button")}} は {{htmlelement("div")}} 要素の中に置くことができます。この場合、 `<div>` 要素を親要素、 `<button>` 要素を子要素と呼びます。

この章では、**イベントのバブリング**を見てみます。これは、親要素にイベントリスナーを追加し、ユーザーが子要素をクリックしたときに現れるものです。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td><a href="/ja/docs/Learn_web_development/Core/Structuring_content">HTML</a>および<a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS の基礎</a>を理解し、これまでのレッスンで説明した JavaScript を把握していること。</td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>イベントの委譲は、イベントバブリングまたはイベントキャプチャによって実現されること。</li>
          <li>イベントの移譲を <code>stopPropagation()</code> で止めること。</li>
          <li>イベントオブジェクトからイベント対象にアクセスすること。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## イベントのバブリング入門

イベントのバブリングについて、例を挙げて紹介し、定義してみましょう。

### 親要素へのリスナーの設定

このようなウェブページがあるとします。

```html
<div id="container">
  <button>ここをクリック</button>
</div>
<pre id="output"></pre>
```

ここではボタンは別の要素 {{HTMLElement("div")}} の中にあります。ここでは、`<div>` 要素は、それを格納する要素の**親**であると言います。親要素にクリックイベントハンドラーを追加し、ボタンをクリックするとどうなるでしょうか？

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `${e.currentTarget.tagName} 要素をクリックしました\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Setting a listener on a parent element', '100%', 200, "", "") }}

ユーザーがボタンをクリックすると、親のクリックイベントが発生することが分かります。

```plain
DIV 要素をクリックしました
```

これで、このボタンは `<div>` の中にあるので、ボタンをクリックすると、その中にある要素も暗黙のうちにクリックしたことになることが分かります。

### バブリングの例

ボタンとその親にイベントリスナーを追加したらどうなるでしょうか？

```html
<body>
  <div id="container">
    <button>ここをクリック</button>
  </div>
  <pre id="output"></pre>
</body>
```

ボタンとその親 (`<div>`)、そして両方を格納する {{HTMLElement("body")}} 要素にクリックイベントハンドラーを追加してみましょう。

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `${e.currentTarget.tagName} 要素をクリックしました\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Bubbling example', '100%', 200, "", "") }}

ユーザーがボタンをクリックすると、 3 つの要素すべてでクリックイベントが発行されることが分かります。

```plain
BUTTON 要素をクリックしました
DIV 要素をクリックしました
BODY 要素をクリックしました
```

この場合は次のようになります。

- ボタンのクリックが最初に発行されます。
- その親（`<div>`要素）のクリックが続きます。
- `<div>` 要素の親（`<body>` 要素）のクリックが続きます。

このことを、クリックされた最も内側の要素からイベントが**バブルアップ**すると言います。

この動作は有益なこともあれば、予期せぬ問題を発生させることもあります。この節では、この動作が引き起こす問題を見て、解決策を探ります。

### 動画プレイヤーの例

この例では、最初は非表示になっている動画と、「動画を表示」と表示されたボタンがページにあります。以下のように操作したいと思います。

- ユーザーが「動画を表示」ボタンをクリックしたら、動画を含むボックスを表示させますが、動画の再生はまだ始めません。
- ユーザーが動画をクリックすると、動画の再生を開始します。
- ユーザーが動画以外のボックスのどこかをクリックしたら、ボックスを非表示にします。

HTML はこのようになります。

```html-nolint
<button>動画を表示</button>

<div class="hidden">
  <video>
    <source
      src="/shared-assets/videos/flower.webm"
      type="video/webm" />
    <p>
      このブラウザーは HTML の動画に対応していません。
      代わりに<a href="rabbit320.mp4">動画へのリンク</a>があります。
    </p>
  </video>
</div>
```

以下のものがあります。

- `<button>` 要素
- `<div>` 要素で、初期状態では `class="hidden"` 属性がある
- `<video>` 要素（`<div>` 要素の中にある）

CSS を使用して、`"hidden"` クラスを設定した要素を非表示にしています。

```css hidden
div {
  width: 100%;
  height: 100%;
  background-color: #eee;
}

.hidden {
  display: none;
}

div video {
  padding: 40px;
  display: block;
  width: 400px;
  margin: 40px auto;
}
```

JavaScript はこのようになります。

```js
const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));
video.addEventListener("click", () => video.play());
box.addEventListener("click", () => box.classList.add("hidden"));
```

これは 3 つの `'click'` イベントリスナーを追加します。

- 1 つは `<button>` で、これは `<video>` を格納した `<div>` を表示させます。
- 1 つは `<video>` で、これは動画の再生を始めるものです。
- 1 つは `<div>` で、動画を非表示にします。

これがどのように動作するのか見てみましょう。

{{ EmbedLiveSample('Video_player_example', '100%', 500) }}

ボタンをクリックすると、ボックスとコンテナーそのものが表示されます。しかし、動画をクリックすると、動画の再生は始まりますが、ボックスは再び非表示になります。

動画は `<div>` の中にあり、その一部なので、動画をクリックすると両方のイベントハンドラーが実行され、このような動作が発生します。

### stopPropagation() でこの問題を修正する

前の節で見たように、イベントのバブリングは時に問題を引き起こすことがありますが、それを防ぐ方法があります。
[`Event`](/ja/docs/Web/API/Event) オブジェクトには [`stopPropagation()`](/ja/docs/Web/API/Event/stopPropagation) という関数があり、イベントハンドラー内で呼び出されると、そのイベントが他の要素にバブリングするのを防ぎます。

JavaScript を次のように変更することで、現在の問題を修正することができます。

```js
const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));

video.addEventListener("click", (event) => {
  event.stopPropagation();
  video.play();
});

box.addEventListener("click", () => box.classList.add("hidden"));
```

ここでやっていることは、`<video>` 要素の `'click'` イベントハンドラーのイベントオブジェクトに対して `stopPropagation()` を呼び出しているだけです。これにより、そのイベントがボックスまで上がってくるのを止めることができます。これで、ボタンと動画の両方をクリックしてみてください。

{{EmbedLiveSample("Fixing the problem with stopPropagation()", '100%', 500)}}

```html-nolint hidden
<button>動画を表示</button>

<div class="hidden">
  <video>
    <source
      src="/shared-assets/videos/flower.webm"
      type="video/webm" />
    <p>
      このブラウザーは HTML の動画に対応していません。
      代わりに<a href="rabbit320.mp4">動画へのリンク</a>があります。
    </p>
  </video>
</div>
```

```css hidden
div {
  width: 100%;
  height: 100%;
  background-color: #eee;
}

.hidden {
  display: none;
}

div video {
  padding: 40px;
  display: block;
  width: 400px;
  margin: 40px auto;
}
```

## イベントのキャプチャ

イベント伝播の別の形態として、「イベントキャプチャ」があります。これはイベントバブリングのようなものですが、順序が逆になります。つまり、イベントは対象となる最も内側の要素で最初に発生し、その後、入れ子の要素が浅くなっていくのではなく、イベントは最も入れ子の浅い要素で最初に発生し、その後、対象とする要素に達するまで、入れ子の要素が深くなっていきます。

イベントのキャプチャは既定では無効です。有効にするには `addEventListener()` で `capture` オプションを渡す必要があります。

この例は、`capture`オプションを使用していることを除けば、先ほど見た[バブリングの例](#バブリングの例)と同じです。

```html
<body>
  <div id="container">
    <button>ここをクリック</button>
  </div>
  <pre id="output"></pre>
</body>
```

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `${e.currentTarget.tagName} 要素をクリックしました\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick, { capture: true });
container.addEventListener("click", handleClick, { capture: true });
button.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Event capture', '100%', 200, "", "") }}

この場合、メッセージの順番は逆になります。`<body>` イベントハンドラーが最初に起動し、続いて `<div>` イベントハンドラーが起動し、続いて `<button>` イベントハンドラーが起動します。

```plain
BODY 要素をクリックしました
DIV 要素をクリックしました
BUTTON 要素をクリックしました
```

なぜわざわざキャプチャとバブリングの両方を使うのでしょうか。昔、ブラウザー間の互換性が今よりずっと低かった頃、Netscape はイベントキャプチャのみを使用し、インターネットエクスプローラーはイベントバブリングのみを使用していました。W3C が動作を標準化し、コンセンサスを得ようと決めたとき、彼らは現行ブラウザーに実装されている、この両方を含むシステムに行き着きました。

既定では、ほとんどすべてのイベントハンドラーはバブリングフェーズで登録され、この方がほとんどの場合において意味があります。

## イベントの委譲

前節では、イベントバブリングが発生させる問題と、それを修正する方法について見ていきました。しかし、イベントバブリングは単に迷惑なだけではありません。具体的な例としては、**イベント委譲** があります。この方法では、ユーザーが多数の子要素のいずれかを操作したときにコードを実行したい場合、子要素にイベントリスナーを個別に設定するのではなく、子要素の親要素にイベントリスナーを設定し、子要素で発生したイベントが親要素にバブルアップされるようにします。

最初の例に戻りましょう。ユーザーがボタンをクリックしたときにページ全体の背景色を設定しました。その代わりに、ページが 16 のタイルに分割されていて、ユーザーがタイルをクリックしたときに各タイルにランダムな色を設定したいとします。

こちらが HTML です。

```html
<div id="container">
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
</div>
```

タイルのサイズと位置を設定するために、ちょっとした CSS を設定します。

```css
#container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
}
```

これで JavaScript で、すべてのタイルにクリックイベントハンドラーを追加することができます。しかし、よりシンプルで効率的なオプションは、親にクリックイベントハンドラーを設定し、ユーザーがタイルをクリックしたときにハンドラーが確実に実行されるようにイベントバブリングに頼っていることです。

```js
function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  return rndCol;
}

const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
  event.target.style.backgroundColor = bgChange();
});
```

出力は以下のとおりです（クリックしてみてください）。

{{ EmbedLiveSample('Event delegation', '100%', 430, "", "") }}

> [!NOTE]
> この例では、`event.target` を使用して、イベントの対象となった要素（つまり、最も内側の要素）を取得しています。もし、このイベントを処理した要素（この用途ではコンテナー）にアクセスしたい場合は、`event.currentTarget` を使用することができます。

> [!NOTE]
> 完全なソースコードは [useful-eventtarget.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/useful-eventtarget.html) を参照してください。こちらの[ライブ実行](https://mdn.github.io/learning-area/javascript/building-blocks/events/useful-eventtarget.html)も参照してください。

## `target` および `currentTarget`

このページで紹介した例をよく見ていくと、クリックされた要素にアクセスするためにイベントオブジェクトの 2 つの異なるプロパティを使用していることがわかります。[親要素へのリスナーの設定](#親要素へのリスナーの設定)では、{{domxref("Event.currentTarget", "event.currentTarget")}}を使用しています。しかし、[イベント移譲](#イベント移譲)では、{{domxref("Event.target", "event.target")}} を使用しています。

`target` は最初にイベントが発生した要素を参照し、`currentTarget` はこのイベントハンドラーが接続されている要素を参照するという違いがあります。

イベントがバブルアップしている間 `target` は同じままですが、`currentTarget` は階層内の接続されている要素が異なれば、イベントハンドラーも異なります。

上の[バブリングの例](#バブリングの例)を少しアレンジすると、このことがわかります。先ほどと同じ HTML を使用しています。

```html
<body>
  <div id="container">
    <button>ここをクリック</button>
  </div>
  <pre id="output"></pre>
</body>
```

JavaScript はほとんど同じですが、`target` と `currentTarget` の両方をログ出力しています。

```js
const output = document.querySelector("#output");
function handleClick(e) {
  const logTarget = `target: ${e.target.tagName}`;
  const logCurrentTarget = `currentTarget: ${e.currentTarget.tagName}`;
  output.textContent += `${logTarget}, ${logCurrentTarget}\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);
```

ボタンをクリックしたとき、イベントハンドラーがボタン自身、`<div>`、`<body>` のいずれに接続されていても、`target` は常にボタン要素であることに注意してください。しかし、`currentTarget` は現在実行しているイベントハンドラーの要素を特定します。

{{embedlivesample("target and currentTarget")}}

`target` プロパティは、上記の[イベント移譲](#イベント移譲)の例のように、イベント移譲でよく使用します。

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト: イベント](/ja/docs/Learn_web_development/Core/Scripting/Test_your_skills/Events)を参照してください。

## まとめ

これで、この早い段階でウェブイベントについて知っておくべきことはすべてわかったはずです。
前述したように、イベントは実のところ JavaScript のコアには属しません。ブラウザーの Web API で定義されています。

また、JavaScript が使用されるさまざまなコンテキストには、異なるイベントモデルがあることを理解することが重要です。Web API から、ブラウザーの WebExtensions や Node.js (サーバーサイド JavaScript) などの他の領域までです。
これでこれらの領域をすべて理解できるとは思っていませんが、ウェブ開発を学習していく上で、イベントの基本を理解しておくことはとても役に立ちます。

次に、ここ数トピックの理解度を検査する問題を探します。

## 関連情報

- [domevents.dev](https://domevents.dev/) — 探究を通して DOM イベントシステムの動作について学ぶことができる、とても有益なインタラクティブな遊び場アプリです。
- [イベントリファレンス](/ja/docs/Web/API/Document_Object_Model/Events)
- [Event order](https://www.quirksmode.org/js/events_order.html) （キャプチャとバブリングの議論） — Peter-Paul Koch による素晴らしい作品です。

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Events","Learn_web_development/Core/Scripting/Image_gallery", "Learn/JavaScript/Building_blocks")}}
