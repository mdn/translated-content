---
title: イベント入門
short-title: イベント
slug: Learn_web_development/Core/Scripting/Events
l10n:
  sourceCommit: 6149deb5f4beccdc09549fbf8d1810d9a4dc3462
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Return_values","Learn_web_development/Core/Scripting/Event_bubbling", "Learn_web_development/Core/Scripting")}}

イベントは、プログラミングしているシステムで発生するもので、コードがそれらに反応できるようにシステムが伝えるものです。
例えば、ユーザーがウェブページ上でボタンを押したとき、ある情報を表示するように反応させたいと思うかもしれません。この記事では、イベントに関する重要な概念を取り上げ、ブラウザーの中でのイベントの振る舞いを見ていきます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td><a href="/ja/docs/Learn_web_development/Core/Structuring_content">HTML</a>および<a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS の基礎</a>を理解し、これまでのレッスンで説明した JavaScript を把握していること。
      </td>
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>イベントとは、何か重要なことが起こった際にブラウザーから発行されるシグナルであり、開発者はレスポンスとしてコードを実行することができること。</li>
          <li>イベントハンドラーを設定するには、 <code>addEventListener()</code> （および <code>removeEventListener()</code> ）やイベントハンドラープロパティを使用すること。/li>
          <li>インラインイベントハンドラー属性、およびそれらを使用すべきではない理由。</li>
          <li>イベントオブジェクト。</li>
        </ul>
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

ここから（そして MDN の[イベントリファレンス](/ja/docs/Web/API/Document_Object_Model/Events)から）、発生するイベントが**たくさん**あることがわかります。

イベントに反応するには、そのイベントに **イベントリスナー** を割り当てます。これは、イベントの発生を待ち受けるコードの機能です。イベントが発生すると、そのイベントに対応するために、**イベントハンドラー** 関数（イベントリスナーによって参照される、またはイベントリスナー内に含まれる）が呼び出されます。このようなコードのブロックを、イベントに応じて実行するように設定することを、**イベントハンドラーの登録** といいます。

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

次に、少量の JavaScript があります。これについては次の領域で詳しく説明しますが、ここでは、ボタンに `"click"` イベントのイベントリスナーを追加し、そのイベントに対して、ページ背景をランダムな色に設定するハンドラー関数が反応するということを覚えておいてください。

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

最後の例で見たように、イベントを発行することができるオブジェクトは {{domxref("EventTarget/addEventListener", "addEventListener()")}} メソッドを持っており、これはイベントリスナーを追加するための推奨メカニズムです。

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

HTML の {{HTMLElement("button")}} 要素は、ユーザーがそれをクリックすると `click` イベントを発行します。イベントリスナーを追加するために、その要素に対して `addEventListener()` メソッドを呼び出します。このメソッドは 2 つの引数を取ります。

- 文字列 `"click"` で、クリックイベントを待ち受けしたいことを示します。ボタンは他にもたくさんのイベントを発行することができます。例えば、ユーザーがマウスをボタンの上に移動させたときに [`"mouseover"`](/ja/docs/Web/API/Element/mouseover_event) を発行したり、ユーザーがキーを押してボタンにフォーカスが当たったときに [`"keydown"`](/ja/docs/Web/API/Element/keydown_event) を発行したりすることができます。
- イベント発生時に呼び出す関数です。この場合、定義されているこの無名関数はランダムな RGB の色を生成し、その色の [`background-color`](/ja/docs/Web/CSS/Reference/Properties/background-color) を [`<body>`](/ja/docs/Web/HTML/Reference/Elements/body) に設定します。

別個の名前付き関数を作成し、`addEventListener()` の 2 つ目の引数でそれを参照することもできます。

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

一部のイベント、たとえば `click` などは、ほぼすべての要素で利用できます。他のイベントはより具体的で、特定の状況でのみ使用することができます。例えば、[`play`](/ja/docs/Web/API/HTMLMediaElement/play_event) イベントは {{htmlelement("video")}} のような再生機能を持った要素でのみ利用することができます。

### リスナーの除去

`addEventListener()` を使用してイベントリスナーを追加した場合、必要に応じてそれを除去することができます。最も一般的な方法は、 [`removeEventListener( )`](/ja/docs/Web/API/EventTarget/removeEventListener) メソッドを使用することです。例えば、次の行は、前述の `click` イベントハンドラーを除去します。

```js
btn.removeEventListener("click", changeBackground);
```

簡単で小さなプログラムでは、古くて使われていないイベントハンドラーをクリーンアップする必要はありませんが、大規模で複雑なプログラムでは、効率を向上させることができます。
また、イベントハンドラーを除去する機能により、同じボタンが異なる状況で異なるアクションをするようなことも可能です。ハンドラーを追加したり除去されたりするだけです。

### 単一のイベントに複数の待ち受けを追加

{{domxref("EventTarget/addEventListener()", "addEventListener()")}} を複数回呼び出し、異なるハンドラーを指定することで、単一のイベントに対して複数のハンドラー関数を実行することができます。

```js
myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);
```

これで要素がクリックされると両方の関数が実行されるようになりました。

## イベントリスナーの他の機構

イベントハンドラーの登録には `addEventListener()` を使用することを推奨します。これは最も強力なメソッドで、より複雑なプログラムで最も有効に機能します。しかし、イベントハンドラーを登録する方法として、他にも 2 種類あります。イベントハンドラープロパティとインラインイベントハンドラーです。

### イベントハンドラープロパティ

イベントを発行することができるオブジェクト（ボタンなど）は通常、 `on` にイベント名が続くプロパティを持っています。例えば、要素には `onclick` というプロパティがあります。
これは、**イベントハンドラープロパティ**と呼ばれています。イベントを待ち受けるには、ハンドラー関数をプロパティに割り当てることで実現できます。

例えば、ランダムな色の例を次のように書き換えることができます。

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

イベントハンドラーのプロパティには、`addEventListener()` と比較して欠点があります。最も重要な欠点の 1 つは、[1 つのイベントに複数のリスナーを追加](#単一のイベントに複数の待ち受けを追加)できないことです。次のパターンは、プロパティの値を設定しようとすると、それ以前の値が上書きされてしまうため、機能しません。

```js
element.onclick = function1;
element.onclick = function2;
```

### インラインイベントハンドラー — 使用しないでください

あなたのコードにもこのようなパターンがあるかもしれません。

```html example-bad
<button onclick="bgChange()">押してね</button>
```

```js
function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}
```

イベントハンドラーを登録するための最も初期の方法は、 [HTML のイベントハンドラー属性](/ja/docs/Web/HTML/Reference/Attributes#イベントハンドラー属性)（またはインラインイベントハンドラー）を使うものでした。属性の値には、イベントが発生したときに実行したい JavaScript コードが書かれています。
上記の例では、同じページの {{htmlelement("script")}} 要素の中で定義した関数を呼び出していますが、例えば次のように、属性の中に直接 JavaScript を挿入することもできます。

```html example-bad
<button onclick="alert('こんにちは、これは古い形のイベントハンドラーです。');">
  押してね
</button>
```

イベントハンドラープロパティの多くに対応する HTML 属性が見つかりますが、これらを使用すべきではありません。これらは悪い習慣と見なされています。
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

最後に、多くの一般的なサーバー設定は、セキュリティ対策としてインライン JavaScript を許可しません。

**HTML のイベントハンドラー属性を使用しないようにしましょう**。これらは時代遅れで、使用するのは悪い習慣です。

## イベントオブジェクト

ときどきイベントハンドラー関数内で `event`、`evt`、`e` などと名付けられた引数を見かけるでしょう。
これらは**イベントオブジェクト**と呼ばれ、イベントの追加機能や情報を提供する目的でイベントハンドラーに自動的に渡されます。
例えば、ランダムな色の例を、イベントオブジェクトを含めるように書き直してみましょう。

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

> [!NOTE]
> この例の[完全なソースコード](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-eventobject.html)が GitHub 上にあります（また、[ライブ実行を見る](https://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventobject.html)ことができます）。

イベントオブジェクト **e** が関数に含まれていて、関数内で `e.target` — これはボタン自身 — の背景色スタイルを設定しているのがわかるでしょう。
イベントオブジェクトの `target` プロパティは、常にイベントが生じた要素への参照となっています。
ですから、この例ではページではなく、ボタンの背景色がランダムに変わります。

> [!NOTE]
> イベントオブジェクトには好きな名前が使えます。イベントハンドラー関数のカッコの中に使いたい名前を書くだけです。
> 開発者の間では `e`、`evt`、`event` がとても良く使われていますが、これらが短くて覚えやすいからです。
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

ユーザーが適切なデータを送信しなかった場合に問題が発生します。開発者として、サーバーへのデータ送信を抑止し、どこに問題があってデータを適切なものにするにはどうすればいいのか示す、ユーザーへのエラーメッセージを表示したいことでしょう。
ブラウザーの中にはフォームデータの自動検証機能を備えたものもありますが、多くはないので、それには頼らず自前の検証機能を実装すべきです。簡単な例を見てみましょう。

まず、姓と名を入力させる単純な HTML フォームです。

```html
<form action="#">
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

これで JavaScript を少し入れます。ここでは、テキストフィールドが空かどうかをテストする [`submit`](/ja/docs/Web/API/HTMLFormElement/submit_event) イベント（フォームを送信すると submit イベントが発生します）のハンドラーの中に基本的なチェックを実装します。
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

完全なサンプルは[ライブで実行](https://mdn.github.io/learning-area/javascript/building-blocks/events/preventdefault-validation.html)してご覧いただけます。ぜひ試してみて下さい。完全なソースコードについては、 [preventdefault-validation.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/preventdefault-validation.html) をご覧ください。

## ウェブページだけではない

イベントは JavaScript 固有のものではありません。ほとんどのプログラミング言語には何らかのイベントモデルがあり、そのモデルの動作する方法は JavaScript の方法とは異なることが多いのです。
実際、ウェブページ用の JavaScript でのイベントモデルは、他の環境で使用する JavaScript のイベントモデルとは異なります。

例えば、 [Node.js](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) はとても人気のある JavaScript ランタイムで、開発者が JavaScript を使用してネットワークやサーバーサイドのアプリケーションを構築することができます。
[Node.js イベントモデル](https://nodejs.org/api/events.html)は、イベントを待ち受けするリスナーと、定期的にイベントを発信するエミッターによってできています。それほど異なるものには聞こえませんが、コードはかなり異なり、イベントリスナーを登録するための `on()` や、一度実行した後に登録を解除するイベントリスナーを登録するための `once()` などの関数を使用しています。
Node.js の [HTTP の connect イベントのドキュメント](https://nodejs.org/api/http.html#event-connect)には、良い例があります。

また、 JavaScript を使用し、 [WebExtensions](/ja/docs/Mozilla/Add-ons/WebExtensions) と呼ばれる技術を使って、クロスブラウザーのアドオン（ブラウザー機能拡張）を構築することもできます。
イベントモデルはウェブイベントモデルに似ていますが、少し異なります。イベントリスナーのプロパティは{{Glossary("camel_case", "キャメルケース")}}で書かれ（`onmessage` ではなく `onMessage` など）、 `addListener` 関数と組み合わせる必要があります。
例えば、[`runtime.onMessage`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#例) ページを参照してください。

この段階では、他の環境について何かを理解する必要はありません。プログラミング環境が異なると、イベントが異なる可能性があることを明確にしたかっただけです。

## まとめ

この章では、イベントとは何か、イベントを待ち受けする方法、イベントへの対応方法について学びました。

ウェブページの要素は、他にも要素を入れ子にできることがこれで分かったでしょう。例えば、[既定の動作の抑制](#既定の動作の抑制)の例では、いくつかのテキストボックスが、それぞれが {{htmlelement("div")}} 要素内に配置され、さらにそれらが {{htmlelement("form")}} 要素内に配置されています。 `<form>` 要素にクリックイベントリスナーが追加され、ユーザーがテキストボックスの 1 つをクリックすると何が起こるでしょうか？ 関連付けられたイベントハンドラー関数は、イベントバブリングと呼ばれるプロセスによって発行されます。このプロセスについては、次のレッスンで説明します。

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Return_values","Learn_web_development/Core/Scripting/Event_bubbling", "Learn_web_development/Core/Scripting")}}
