---
title: イベント入門
slug: Learn/JavaScript/Building_blocks/Events
l10n:
  sourceCommit: f7c186696980fee97e72261370d7b5a8c1cd9302
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Return_values","Learn/JavaScript/Building_blocks/Image_gallery", "Learn/JavaScript/Building_blocks")}}

イベントは、あなたがプログラミングしているシステムで起こることで、あなたのコードがそれらに反応できるようにシステムがあなたに伝えるものです。

例えば、ユーザーがウェブページ上でボタンを押したとき、ある情報を表示するように反応させたいと思うかもしれません。この記事では、イベントに関する重要な概念を取り上げ、ブラウザーの中でのイベントの振る舞いを見ていきます。ここでは、全てを説明するのではなく、この段階で知っておくべき内容を取り上げます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        基本的な HTML および CSS、および
        <a href="/ja/docs/Learn/JavaScript/First_steps"
          >JavaScript の第一歩</a
        >について理解していること。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        イベントの基本的な理論を理解すること。ブラウザーでの振る舞いを理解し、プログラミング環境が変わると、イベントの振る舞いが変わることを理解すること。
      </td>
    </tr>
  </tbody>
</table>

## イベントとは何か

イベントは、あなたがプログラミングしているシステムで発生するものです。イベントが発生すると、システムは何らかのシグナルを発生（または「発火」）させ、イベントが発生したときに自動的にアクションが実行される（つまり、何らかのコードが実行される）メカニズムを提供します。
イベントはブラウザーウィンドウの内部で発生し、そこに存在する特定のアイテムに結び付けられる傾向があります。これは単一の要素であったり、要素の集合であったり、現在のタブ内に読み込まれた HTML 文書であったり、ブラウザーウィンドウ全体であったりします。
発生するイベントにはさまざまな種類があります。

例えば、次のような者があります。

- ユーザーが特定の要素を選択したり、クリックしたり、カーソルを当てたりする
- ユーザーがキーボードのキーを押す
- ユーザーがブラウザーウィンドウをリサイズしたり閉じたりする
- ウェブページの読み込みが完了する
- フォームが送信される
- 動画が再生される、停止される、再生が終わる
- エラーが発生する

ここから（そして MDN の[イベントリファレンス](/ja/docs/Web/Events)から）、発生するイベントが**たくさん**あることがわかります。

イベントに反応するには、イベントに**イベントハンドラー**を取り付けます。これは、イベントが発行されたときに実行するコードのブロック（通常はプログラマーであるあなたが作成する JavaScript 関数）です。
このようなコードのブロックが、イベントに応答して実行するように定義されている場合、**イベントハンドラーを登録**していると言います。
なお、イベントハンドラーは時に **イベントリスナー** と呼ばれることがあります。目的からすれば言い換えてもほとんど問題ないのですが、厳密に言えば一緒に動作する別のものです。イベントリスナーはイベントの発生を待ち受けし、イベントハンドラーは発生したイベントに応答して動作するコードです。

> **メモ:** ウェブのイベントは JavaScript のコア言語の一部ではありません。それらはブラウザーに組み込まれた API の一部として定義されています。

### 例: クリックイベントの扱い

次の例では、ページ内に単一の {{htmlelement("button")}} があります。

```html
<button>色を変更</button>
```

```css hidden
button {
  margin: 10px;
}
```

次に JavaScript が少しあります。この詳細は次の章で見ていきますが、これで言えることは、ボタンの `"click"` イベントにイベントハンドラーを追加し、そのハンドラーがページの背景をランダムな色に設定することでイベントに反応しているということです。

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});
```

出力例は以下です。ボタンをクリックしてみてください。

{{ EmbedLiveSample('An example: handling a click event', '100%', 200, "", "") }}

## addEventListener() の使用

最後の例で見たように、イベントを発行することができるオブジェクトは {{domxref("EventTarget/addEventListener", "addEventListener()")}} メソッドを持っており、これはイベントハンドラーを追加するための推奨メカニズムです。

前回の例のコードを詳しく見ていきましょう。

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});
```

HTML の {{HTMLElement("button")}} 要素は、ユーザーがボタンをクリックするとイベントを発生します。そのため、 `addEventListener()` 関数を定義し、ここで呼び出しています。引数を 2 つ渡しています。

- 文字列 `"click"` で、クリックイベントを待ち受けしたいことを示します。ボタンは他にもたくさんのイベントを発行することができます。例えば、ユーザーがマウスをボタンの上に移動させたときに [`"mouseover"`](/ja/docs/Web/API/Element/mouseover_event) を発行したり、ユーザーがキーを押してボタンにフォーカスが当たったときに [`"keydown"`](/ja/docs/Web/API/Element/keydown_event) を発行したりすることができます。
- イベント発生時に呼び出す関数です。この場合、この関数はランダムな RGB の色を生成し、ページの [`<body>`](/ja/docs/Web/CSS/background-color)(/ja/docs/Web/HTML/Element/body) の [`background-color`](/ja/docs/Web/CSS/background-color) をその色に設定します。

ハンドラー関数を別の名前付き関数にするのは問題ありません。

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function changeBackground() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener("click", changeBackground);
```

### 他のイベントの待ち受け

利用できるイベントハンドラープロパティにはとてもたくさんの種類があります。実験してみましょう。

まずは、 [random-color-addeventlistener.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-addeventlistener.html) のローカルコピーを作成し、ブラウザーで開いてみてください。これはこの記事ですでに遊んだ、簡単なランダムカラーのサンプルです。さて、 `click` のところを以下の異なる値に変えてみて、結果を順に見てみてください。

- [`focus`](/ja/docs/Web/API/Element/focus_event) と [`blur`](/ja/docs/Web/API/Element/blur_event) —タブを押すとボタンがフォーカスされ、もう一度タブを押すとボタンからフォーカスが外れます。
  これらは、フォームフィールドがフォーカスされたときに、フォームフィールドへの入力に関する情報を表示したり、フォームフィールドに誤った値が入力された場合にエラーメッセージを表示したりするために多く使用されます。
- [`dblclick`](/ja/docs/Web/API/Element/dblclick_event) — ダブルクリックされた場合だけ色が変わります。
- [`mouseover`](/ja/docs/Web/API/Element/mouseover_event) と [`mouseout`](/ja/docs/Web/API/Element/mouseout_event) — それぞれ、マウスポインターがボタンの上に来たときとボタンの上から外れた時に色が変わります。

一部のイベント、たとえば `click` などは、ほぼすべての要素で利用できます。他のイベントはより具体的で、特定の状況でのみ使用することができます。例えば、[`play`](/ja/docs/Web/API/HTMLMediaElement/play_event) イベントは {{htmlelement("video")}} のようないくつかの要素でのみ利用することができます。

### リスナーの除去

`addEventListener()` を用いてイベントハンドラーを追加した場合、[`removeEventListener()`](/ja/docs/Web/API/EventTarget/removeEventListener) メソッドを用いて再び除去することができます。例えば、この例では `changeBackground()` イベントハンドラーが除去されます。

```js
btn.removeEventListener("click", changeBackground);
```

イベントハンドラーは {{domxref("AbortSignal")}} を {{domxref("EventTarget/addEventListener()", "addEventListener()")}} に渡して、後で {{domxref("AbortController/abort()", "abort()")}} を呼び出すことでも除去できます。
例えば、 `AbortSignal` で除去されるイベントハンドラーを追加するには、次のようにします。

```js-nolint
const controller = new AbortController();

btn.addEventListener("click",
  () => {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  },
  { signal: controller.signal } // このハンドラーに AbortSignal を渡す
);
```

すると、上のコードで作成したイベントハンドラーは、次のように除去されます。

```js
controller.abort(); // このコントローラーに関連付けられたすべてのイベントを除去
```

単純で小さなプログラムでは、古くて使われていないイベントハンドラーをクリーンアップする必要はありませんが、大規模で複雑なプログラムでは、効率を向上させることができます。
また、イベントハンドラーを除去する機能により、同じボタンが異なる状況で異なるアクションをするようなことも可能です。ハンドラーを追加したり除去されたりするだけです。

### 単一のイベントに複数の待ち受けを追加

{{domxref("EventTarget/addEventListener()", "addEventListener()")}} に複数の呼び出しを行うことで、異なるハンドラーを提供し、単一のイベントに複数のハンドラーを持たせることができます。

```js
myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);
```

これで要素がクリックされると両方の関数が実行されるようになりました。

### さらに学ぶ

他にも `addEventListener()` で利用できる強力な機能やオプションがあります。

これらはこの記事の範囲からは少し外れますが、もし読みたければ、 [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) と [`removeEventListener()`](/ja/docs/Web/API/EventTarget/removeEventListener) のリファレンスページを参照してください。

## イベントリスナーの他の機構

イベントハンドラーの登録には `addEventListener()` を使用することを推奨します。これは最も強力なメソッドで、より複雑なプログラムで最も有効に機能します。しかし、イベントハンドラーを登録する方法として、他にも 2 種類あります。イベントハンドラープロパティとインラインイベントハンドラーです。

### イベントハンドラープロパティ

イベントを発行することができるオブジェクト（ボタンなど）は通常、 `on` にイベント名が続くプロパティを持っています。例えば、要素には `onclick` というプロパティがあります。
これは、イベントハンドラープロパティと呼ばれます。イベントを待ち受けるには、ハンドラー関数をプロパティに割り当てることで実現できます。

例えば、ランダムカラーの例を次のように書き換えることができます。

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.onclick = () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
};
```

ハンドラープロパティには名前付き関数を設定することもできます。

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;
```

イベントハンドラープロパティでは、単一のイベントに複数のハンドラーを追加することはできません。例えば、 `addEventListener('click', handler)` は 1 つの要素に対して複数回、第 2 引数に異なる関数を指定して呼び出すことができます。

```js
element.addEventListener("click", function1);
element.addEventListener("click", function2);
```

イベントハンドラープロパティでは、後からプロパティを設定しようとすると、それ以前のものが上書きされてしまうため、これは不可能です。

```js
element.onclick = function1;
element.onclick = function2;
```

### インラインイベントハンドラー — 使用しないでください

あなたのコードにもこのようなパターンがあるかもしれません。

```html
<button onclick="bgChange()">Press me</button>
```

```js
function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}
```

イベントハンドラーを登録するための最も初期の方法は、 [HTML のイベントハンドラー属性](/ja/docs/Web/HTML/Attributes#event_handler_attributes)（またはインラインイベントハンドラー）を使うものでした。属性の値は、文字通り、イベントが発生したときに実行したい JavaScript コードです。
上記の例では、同じページの {{htmlelement("script")}} 要素の中で定義した関数を呼び出していますが、例えば次のように、属性の中に直接 JavaScript を挿入することもできます。

```html
<button onclick="alert('Hello, this is my old-fashioned event handler!');">
  Press me
</button>
```

イベント ハンドラー プロパティの多くに対応する HTML 属性が見つかりますが、これらを使用すべきではありません。これらは悪い習慣と見なされています。
イベントハンドラー属性を使用することは、実に素早く何かを行う場合には簡単に思えるかもしれませんが、すぐに手に負えなくなり、非効率的になります。

まず、 HTML と JavaScript を混在させるのは良い考えとは言えません。 JavaScript を分けておくことは良い習慣です。 JavaScript を別のファイルにすれば、複数の HTML 文書に適用することができます。

単一のファイルであっても、インラインイベントハンドラーはよい考えではありません。
ボタンが 1 つなら問題ありませんが、 100 個のボタンがあったとしたらどうでしょう？ファイルに 100 個の属性を追加しなければならず、すぐにメンテナンスの悪夢に変わるでしょう。
JavaScript では、次のようなものを使用して、ページ上のすべてのボタンにイベントハンドラー関数を追加することができます。

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", bgChange);
}
```

最後に、多くの一般的なサーバー設定は、セキュリティ対策としてインラインJavaScriptを許可しません。

**HTMLのイベントハンドラー属性を使用しないようにしましょう**。これらは時代遅れで、使用するのは悪い習慣です。

## イベントオブジェクト

ときどきイベントハンドラー関数内で `event`、`evt`、`e` などと名付けられた引数を見かけるでしょう。
これらは**イベントオブジェクト**と呼ばれ、イベントの追加機能や情報を提供する目的でイベントハンドラーに自動的に渡されます。
例えば、またランダムカラーの例をちょっと書き換えてみましょう。

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener("click", bgChange);
```

> **メモ:** この例の[完全なソースコード](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-eventobject.html)が GitHub 上にあります（また、[ライブ実行を見る](https://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventobject.html)ことができます）。

イベントオブジェクト **e** が関数に含まれていて、関数内で `e.target` — これはボタン自身 — の背景色スタイルを設定しているのがわかるでしょう。
イベントオブジェクトの `target` プロパティは、常にイベントが生じた要素への参照となっています。
ですから、この例ではページではなく、ボタンの背景色がランダムに変わります。

> **メモ:** 下記の[イベントの移譲](#イベントの移譲)の節で、 `event.target` を使用している例があります。

> **メモ:** イベントオブジェクトには好きな名前が使えます。イベントハンドラー関数のカッコの中に使いたい名前を書くだけです。
> `e`/`evt`/`event` が開発者の間でとても良く使われていますが、これらが短くて覚えやすいからです。
> 常に一貫性を保つことは良いことです。自分自身に対しても、可能であれば他の人に対しても。

### イベントオブジェクトの追加プロパティ

ほとんどのイベントオブジェクトは、イベントオブジェクトで利用できるプロパティとメソッドの標準設定を持っています。完全なリストは {{domxref("Event")}} オブジェクトリファレンスを参照してください。

イベントオブジェクトの中には、そのイベントの特定の種類に関連するプロパティを追加するものがあります。例えば、 {{domxref("Element/keydown_event", "keydown")}} イベントは、ユーザーがキーを押した時に発行されます。そのイベントオブジェクトは {{domxref("KeyboardEvent")}} で、どのキーが押されたかを指示する `key` プロパティを持った `Event` オブジェクトです。

```html
<input id="textBox" type="text" />
<div id="output"></div>
```

```js
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keydown", (event) => {
  output.textContent = `"${event.key}" が押されました。`;
});
```

```css hidden
div {
  margin: 0.5rem 0;
}
```

テキストボックスに入力して出力を見てください。

{{EmbedLiveSample("Extra_properties_of_event_objects", 100, 100)}}

## 既定の動作の抑制

時々、あるイベントで既定で行われることを抑止したくなるような場合があります。
最も一般的な例は、例えばカスタム登録フォームのようなウェブフォームです。
詳細を入力して送信ボタンをクリックすると、データは処理のためにサーバー上の指定したページに送信され、ブラウザーは何らかの「成功メッセージ」ページ（または別のページが指定されていない場合は同じページ）にリダイレクトされるのが自然な動作です。

ユーザーが適切なデータを送信しなかった場合に問題が発生します。開発者として、サーバーへのデータ送信を抑止し、どこに問題があってデータを適切なものにするにはどうすればいいのか示す、ユーザーへのエラーメッセージを表示したいことでしょう。ブラウザーの中にはフォームデータの自動検証機能を備えたものもありますが、多くはないので、それには頼らず自前の検証機能を実装すべきです。簡単な例を見てみましょう。

まず、姓と名を入力させる単純な HTML フォームです。

```html
<form>
  <div>
    <label for="fname">姓: </label>
    <input id="fname" type="text" />
  </div>
  <div>
    <label for="lname">名: </label>
    <input id="lname" type="text" />
  </div>
  <div>
    <input id="submit" type="submit" />
  </div>
</form>
<p></p>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

これで JavaScript を少し入れます。ここでは、テキストフィールドが空かどうかをテストする [`submit`](/ja/docs/Web/API/HTMLFormElement/submit_event) イベント（フォームを送信すると submit イベントが発生します）のハンドラーの中に、とても単純なチェックを実装します。
もしそうであれば、イベントオブジェクトの [`preventDefault()`](/ja/docs/Web/API/Event/preventDefault) 関数を呼び出してフォームの送信を停止し、フォームの下の段落にエラーメッセージを表示して何が間違っているのかをユーザーに指示します。

```js
const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault();
    para.textContent = "You need to fill in both names!";
  }
});
```

明らかに、これはかなり緩いフォーム検証です。例えば、空白や数字が入力されたフォームをユーザーが検証するのを止めることはできませんが、例としては問題ありません。
出力は以下のようになります。

{{ EmbedLiveSample('Preventing_default_behavior', '100%', 180, "", "") }}

> **メモ:** ソースコード全体については、 [preventdefault-validation.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/preventdefault-validation.html) を（および[ライブ実行](https://mdn.github.io/learning-area/javascript/building-blocks/events/preventdefault-validation.html)も）ご覧ください。

## イベントのバブリング

イベントのバブリングは、ブラウザーが入れ子になった要素を対象とするイベントをどのように処理するかを記述しています。

### 親要素にリスナーを設定

次の様なウェブページがあったとします。

```html
<div id="container">
  <button>クリックしてください</button>
</div>
<pre id="output"></pre>
```

ここではボタンは別の要素 {{HTMLElement("div")}} の中にあります。ここでは、 `<div>` 要素が、内包する要素の**親**であるといいます。親要素にクリックイベントハンドラーを追加し、ボタンをクリックするとどうなるでしょうか？

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `${e.currentTarget.tagName} 要素をクリックしました\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Setting a listener on a parent element', '100%', 200, "", "") }}

ユーザーがボタンをクリックすると、親がクリックイベントを発生させることがわかります。

```plain
DIV 要素をクリックしました
```

これは意味があります。ボタンは `<div>` の中にあるので、ボタンをクリックすると、その中にある要素も暗黙のうちにクリックしたことになります。

### バブリングの例

ボタンと親にイベントリスナーを追加したらどうなるでしょうか？

```html
<body>
  <div id="container">
    <button>クリックしてください</button>
  </div>
  <pre id="output"></pre>
</body>
```

ボタンとその親 (`<div>`)、そしてどちらも内包する {{HTMLElement("body")}} 要素にクリックイベントハンドラーを追加してみましょう。

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

ユーザーがボタンをクリックすると、 3 つの要素すべてがクリックイベントを発行することがわかります。

```plain
BUTTON 要素をクリックしました
DIV 要素をクリックしました
BODY 要素をクリックしました
```

この場合、次のようになります。

- 最初にボタン上で click が発生します
- 続いて click が親（`<div>` 要素）で発生します
- 続いて `<div>` 要素の親（`<body>` 要素）で発生します

これを、クリックされた最も内側の要素からイベントが**バブルアップ**すると言います。

この動作は有益なこともあれば、予期せぬ問題を発生させることもあります。次の節では、この動作が発生させる問題を見て、解決策を探ります。

### 動画プレイヤーの例

この例では、最初は非表示になっている動画と、"動画を表示" とラベル付けされたボタンがページに表示されています。私たちは以下のような操作をしたいと思います。

- ユーザーが「動画を表示」ボタンをクリックしたら、動画を格納したボックスを表示させますが、動画の再生はまだ始めません。
- ユーザーが動画をクリックしたら、動画の再生を始めます。
- ユーザーが動画外のボックスのどこかをクリックしたら、ボックスを非表示にします。

HTML は次のようになります。

```html
<button>動画を表示</button>

<div class="hidden">
  <video>
    <source
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
      type="video/webm" />
    <p>
      お使いのブラウザーは HTML 動画に対応していません。代わりに<a
        href="rabbit320.mp4"
        >動画へのリンク</a
      >をご利用ください。
    </p>
  </video>
</div>
```

これには以下のものが含まれます。

- `<button>` 要素
- `<div>` 要素、最初は `class="hidden"` 属性つき
- `<video>` 要素（`<div>` 要素の中に入れ子になっている）

`"hidden"` クラスが設定されている要素を非表示にするために CSS を使用しています。

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

JavaScript　はこのようになっています。

```js
const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));
video.addEventListener("click", () => video.play());
box.addEventListener("click", () => box.classList.add("hidden"));
```

これは 3 つの `'click'` イベントリスナーを追加します。

- 一つは `<button>`、これは `<video>` を含んでいる `<div>` を表示します
- 一つは `<video>`、これは動画の再生を開始します
- 一つは `<div>`、これは動画を非表示にします

この動作を確認してみましょう。

{{ EmbedLiveSample('Video_player_example', '100%', 500) }}

ボタンをクリックすると、ボックスとそれを含む動画が表示されます。しかし、次に動画をクリックすると、動画の再生が始まりますが、ボックスは再び非表示になります。

動画は `<div>` の中にあり、その一部です。そのため、動画をクリックすると両方のイベントハンドラーが実行され、この動作が発生します。

### stopPropagation() による問題の修正

前節で見たように、イベントバブリングは時に問題を引き起こすことがありますが、それを防ぐ方法があります。
[`Event`](/ja/docs/Web/API/Event) オブジェクトには [`stopPropagation()`](/ja/docs/Web/API/Event/stopPropagation) と呼ばれる関数があり、イベントハンドラーの中で呼び出されると、イベントが他の要素にバブリングするのを防ぎます。

JavaScript をこのように変更することで、現在の問題を修正することができます。

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

ここでやっていることはすべて、 `<video>` 要素の `'click'` イベントハンドラーのイベントオブジェクトに対して `stopPropagation()` を呼び出しているだけです。これにより、そのイベントがボックスまで上がってくるのを止めることができます。これで、ボタンと動画の両方をクリックしてみてください。

{{EmbedLiveSample("Fixing the problem with stopPropagation()", '100%', 500)}}

```html hidden
<button>動画を表示</button>

<div class="hidden">
  <video>
    <source
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
      type="video/webm" />
    <p>
      お使いのブラウザーは HTML 動画に対応していません。代わりに<a
        href="rabbit320.mp4"
        >動画へのリンク</a
      >をご利用ください。
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

### イベントのキャプチャ

イベントの伝播の別の形式として、イベントキャプチャがあります。これはイベントバブリングと似ていますが、順序が逆になります。つまり、イベントは対象となる最も内側の要素で最初に発生し、その後、入れ子が浅くなる要素に向けて発生するのではなく、入れ子の最も浅い要素で最初に発生し、その後、対象とする要素に到達するまで、入れ子が深い要素に向けて発生します。

イベントのキャプチャは既定では無効です。有効にするには `addEventListener()` で `capture` オプションを渡す必要があります。

この例は、 `capture` オプションを使用していることを除けば、先ほど見た[バブリングの例](#バブリングの例)と同じです。

```html
<body>
  <div id="container">
    <button>クリックしてください</button>
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

この場合、メッセージの順番は逆になります。 `<body>` のイベントハンドラーが最初に発生し、続いて `<div>` のイベントハンドラーが発生し、続いて `<button>` のイベントハンドラーが発生します。

```plain
BODY 要素をクリックしました
DIV 要素をクリックしました
BUTTON 要素をクリックしました
```

なぜわざわざキャプチャとバブリングの両方があるのでしょうか？ブラウザー間の互換性が今よりもずっと低かった悪い時代には、ネットスケープはイベントキャプチャのみを使用し、インターネットエクスプローラーはイベントバブリングのみを使用していました。 W3C が動作を標準化し、コンセンサスを得ようと決めたとき、両者を含めるためにこのシステムに行き着き、現代のブラウザーに実装されました。

既定では、ほとんどすべてのイベントハンドラーはバブリングフェーズで登録され、この方がほとんどの場合、意味があります。

## イベントの移譲

前回の節では、イベントバブリングによって発生させられる問題と、それを修正する方法について見ていきました。しかし、イベントバブリングは単に煩わしいだけではありません。特に、**イベントの委譲**を可能にします。この方法では、ユーザーが多数の子要素のいずれかを操作したときに何らかのコードを実行したい場合、子要素に個別にイベントリスナーを設定するのではなく、子要素の親要素にイベントリスナーを設定し、子要素で発生したイベントが親要素にバブリングされるようにします。

最初の例に戻り、ユーザーがボタンをクリックしたときにページ全体の背景色を設定しましょう。その代わりに、ページが 16 のタイルに分割されていて、ユーザーがそのタイルをクリックしたときに各タイルにランダムな色を設定したいとします。

これがその HTML です。

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

タイルのサイズと位置を設定するために、ちょっとした CSS を設けています。

```css
.tile {
  height: 100px;
  width: 25%;
  float: left;
}
```

さて、JavaScript では、すべてのタイルにクリックイベントハンドラーを追加することができます。しかし、よりシンプルで効率的なオプションは、親にクリックイベントハンドラーを設定し、ユーザーがタイルをクリックしたときにハンドラーが確実に実行されるようにイベントバブリングに頼ることです。

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

出力は次の通りです（クリックしてみてください）。

{{ EmbedLiveSample('Event delegation', '100%', 430, "", "") }}

> **メモ:** この例では、 `event.target` を使用して、イベントの対象となった要素（つまり、最も内側の要素）を取得しています。もし、このイベントを処理した要素（この場合はコンテナー）にアクセスしたい場合は、 `event.currentTarget` を使用することができます。

> **メモ:** 完全なソースコードは [useful-eventtarget.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/useful-eventtarget.html) を参照してください。こちらから[ライブ実行](https://mdn.github.io/learning-area/javascript/building-blocks/events/useful-eventtarget.html)も確認してください。

## ウェブページだけではない

イベントは JavaScript 固有のものではありません。ほとんどのプログラミング言語には何らかのイベントモデルがあり、そのモデルの動作する方法は JavaScript の方法とは異なることが多いのです。
実際、ウェブページ用の JavaScript でのイベントモデルは、他の環境で使用する JavaScript のイベントモデルとは異なります。

例えば、 [Node.js](/ja/docs/Learn/Server-side/Express_Nodejs) はとても人気のある JavaScript ランタイムで、開発者が JavaScript を使用してネットワークやサーバーサイドのアプリケーションを構築することができます。
[Node.js イベントモデル](https://nodejs.org/api/events.html)は、イベントを待ち受けするリスナーと、定期的にイベントを発信するエミッターによってできています。それほど異なるものには聞こえませんが、コードはかなり異なり、イベントリスナーを登録するための `on()` や、一度実行した後に登録を解除するイベントリスナーを登録するための `once()` などの関数を使用しています。
The [HTTP connect event docs](https://nodejs.org/api/http.html#event-connect) provide a good example.

また、 JavaScript を使用し、 [WebExtensions](/ja/docs/Mozilla/Add-ons/WebExtensions) と呼ばれる技術を使って、クロスブラウザーのアドオン（ブラウザー機能拡張）を構築することもできます。
イベントモデルはウェブイベントモデルに似ていますが、少し異なります。イベントリスナーのプロパティは{{Glossary("camel_case", "キャメルケース")}}で書かれ（`onmessage` ではなく `onMessage` など）、 `addListener` 関数と組み合わせる必要があります。
例えば、[`runtime.onMessage`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#例) ページを参照してください。

この段階では、他の環境について何かを理解する必要はありません。プログラミング環境が異なると、イベントが異なる可能性があることを明確にしたかっただけです。

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト: イベント](/ja/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Events)を見てください。

## まとめ

ウェブイベントについて、今の学習初期段階で知るべき事は全部わかったはずです。上で述べたように、実のところイベントは JavaScript のコアには属しません。それらはブラウザーのウェブ API に属するものです。

また、JavaScript が使用されるさまざまなコンテキストには、異なるイベントモデルがあることを理解することも重要です。ウェブ API から、ブラウザー WebExtensions や Node.js (サーバーサイド JavaScript) など、他にもさまざまな分野があります。
これでこれらの領域をすべて理解できるとは思っていませんが、ウェブ開発者を学習していく上で、イベントの基本的なことを理解しておくことはとても役に立ちます。

> **メモ:** もし行き詰まったら、私たちの[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## 関連情報

- [domevents.dev](https://domevents.dev/) — 探索を通して DOM Event システムの動作について学ぶことができる、とても有益なインタラクティブな遊び場アプリです。
- [イベントリファレンス](/ja/docs/Web/Events)
- [Event order](https://www.quirksmode.org/js/events_order.html) （キャプチャリングとバブリングについての考察） - Peter-Paul Koch による非常に詳細な記事。
- [Event accessing](https://www.quirksmode.org/js/events_access.html) （イベントオブジェクトについての考察）- Peter-Paul Koch によるこれまた素晴らしく詳細な作品。

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Return_values","Learn/JavaScript/Building_blocks/Image_gallery", "Learn/JavaScript/Building_blocks")}}
