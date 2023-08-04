---
title: イベントへの入門
slug: Learn/JavaScript/Building_blocks/Events
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Return_values","Learn/JavaScript/Building_blocks/Image_gallery", "Learn/JavaScript/Building_blocks")}}

イベントは、あなたがプログラムを書いているシステムで生じた動作、出来事を指します。システムからあなたへ、イベントとして何かあった事を知らせてくるので、必要であればそれに何らかの反応を返す事ができます。例えば、ユーザーがウェブページ上でボタンを押したとき、ある情報を表示するように反応させたいと思うかもしれません。この記事では、イベントに関する重要な概念を取り上げ、ブラウザーの中でのイベントの振る舞いを見ていきます。ここでは、全てを説明するのではなく、この段階で知っておくべき内容を取り上げます。

| 前提条件: | コンピューターに関する基本的な知識があること。HTML と CSS について理解していて、[JavaScript の第一歩](/ja/docs/Learn/JavaScript/First_steps)の記事を理解していること。 |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目的:     | イベントの基本的な理論を理解すること。ブラウザーでの振る舞いを理解し、プログラミング環境が変わると、イベントの振る舞いが変わることを理解すること。                     |

## 運命的なイベントの連続

先ほど説明しましたが、**イベント**はあなたがプログラムしているシステムの中で生じた動作や出来事です。つまり、あるイベントが起きたときに、システムはある種の信号を発します。さらに、ある種のアクションが自動的に実行されるためのメカニズムも提供します。例えば、空港では、飛行機が離陸するために滑走路がクリアになった時に、信号がパイロットに送られます。その結果、パイロットは飛行機の操縦を開始します。

![](MDN-mozilla-events-runway.png)

ウェブの場合は、イベントは、ブラウザーのウィンドウの中で発火されます、そしてその中に属する特定の項目に紐付く傾向にあります — これは単一の要素、要素の集合、現在のタブでロードされた HTML 文書、ブラウザー画面全体といったものです。発生するイベントはたくさんの異なる種類があります。例をあげると。

- ユーザーがある要素の上をマウスでクリックしたり、ある要素の上にカーソルを持ってくる
- ユーザーがキーボードのキーを押す
- ユーザーがブラウザー画面をリサイズしたり閉じたりする
- ウェブページのロードの完了
- フォームの送信
- ビデオが再生中、停止中、再生が終わった
- エラーの発生

ここや MDN [Event リファレンス](/ja/docs/Web/Events)を覗いてみれば、**とてもたくさん**の応答可能なイベントがあるのが判るでしょう。

それぞれの利用可能なイベントには**イベントハンドラー**があり、これはイベントに発火した時に実行される (通常はユーザー定義の JavaScript 関数) コードのブロックのことです。イベントの発火に対する応答としてコードのブロックが実行されるように定義する事を、**イベントハンドラーを登録する**と言います。イベントハンドラーは時に**イベントリスナー** と呼ばれる事を付記しておきます—我々の目的から見ると言い変えてもほとんど問題ないのですが、厳密に言えば一緒に動作する別のものです。イベントリスナーはイベントの発生を監視し、イベントハンドラーは発生したイベントの応答として動作するコードです。

> **メモ:** 大事な事ですがウェブのイベントは JavaScript 言語の主要部分の一部ではありません — ブラウザーに組み込まれた JavaScript API の一部として定義されたものです。

### 簡単な例

ここで何を言ってるのか説明するため、簡単な例を見てみましょう。このコースでこれまでに例の多くに使われているイベントやイベントハンドラーを見てきました、しかし、知識を固めるために整理をしましょう。続く例では、押すと背景色がランダムに変化する {{htmlelement("button")}} が一つあります:

```html
<button>Change color</button>
```

```css hidden
button {
  margin: 10px;
}
```

JavaScript はこのようになります:

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.onclick = function () {
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
};
```

このコードでは、`btn` という変数に {{domxref("Document.querySelector()")}} 関数を使って取得したボタンへの参照を格納しています。それとは別にランダムな数値を返す関数も定義しています。コードの 3 つ目の部分はイベントハンドラーです。`btn` 変数は[`<button>`](/ja/docs/Web/HTML/Element/button)要素を指していますが、この種のオブジェクトにはたくさん発火し得るイベントがあるので、色々なイベントハンドラーが使えます。[`onclick`](/ja/docs/Web/API/GlobalEventHandlers/onclick) イベントハンドラプロパティに、ランダムな RGB 色を生成し [`<body>`](/ja/docs/Web/HTML/Element/body) の [`background-color`](/ja/docs/Web/CSS/background-color) を設定するコードを抱えた匿名関数を代入する事で、[`click`](/ja/docs/Web/API/Element/click_event) イベントが発火されるのを待ちかまえます。

このコードは `<button>` 要素でクリックイベントが発火すれば常に実行されます、要はユーザーがクリックしたらいつでも。

この例の出力は以下のようになります:

{{ EmbedLiveSample('A_simple_example', '100%', 200, "", "", "hide-codepen-jsfiddle") }}

### ただのウェブページではありません

ここで言及しておくべき事は、イベントは JavaScript 固有のものではないという事です — ほとんどのプログラミング言語はいくつかのイベントモデルを持ち、その動作する方法はしばしは JavaScript の方式とは異なっています。実際、ウェブページの JavaScript のイベントモデルは他の環境で用いられている JavaScript のイベントモデルと異なっています。

例えば、[Node.js](/ja/docs/Learn/Server-side/Express_Nodejs) は開発者に JavaScript でネットワークとサーバーサイドのアプリケーションを構築することを可能にするとても有名な JavaScript ランタイムです。[Node.js event model](https://nodejs.org/docs/latest-v12.x/api/events.html) はイベントを待ち受けるリスナー、イベントを定期的に発生させるエミッターに依拠しています —たいして違ってないように聞こえますが、コードは極めて異なっていて、イベントリスナーを登録する `on()` や、一度実行したら登録を解除するイベントリスナーを登録するための `once()` のような関数を使っていきます。[HTTP connect event docs](https://nodejs.org/docs/latest-v12.x/api/http.html#http_event_connect) が使い方の良い例を教えてくれます。

その他の例として、[WebExtensions](/ja/docs/Mozilla/Add-ons/WebExtensions) と呼ばれる技術を使って、クロスブラウザーアドオン (ブラウザーの機能拡張) を JavaScript で作成できます。イベントモデルは Web イベントモデルと似ていますが、ほんの少し違いがあります (イベントリスナーのプロパティはキャメルケース (例 `onmessage` でなく `onMessage`) で命名されていて、`addListener` 関数で結び付ける必要があります。例として [`runtime.onMessage` page](/ja/Add-ons/WebExtensions/API/runtime/onMessage#Examples) を確認してください。

学習の今の段階で、そのような他の環境について何か理解する必要はありません。イベントは異なるプログラミング環境では異なることがあるとだけ認識してください。

## ウェブイベントの使用方法

関連づけたいイベントが発火した時に走らせたいイベントリスナーコードを ウェブページに追加する方法はいろいろあります。このセクションでは様々なメカニズムを見ていき、どれを使うべきなのか議論していきます。

### イベントハンドラープロパティ

イベントハンドラーコードを代入するためのいろいろなプロパティがあり、そういったものをここまでのコースで最もたくさん見てきました。上記の例に戻りましょう。

```js
const btn = document.querySelector("button");

btn.onclick = function () {
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
};
```

[`onclick`](/ja/docs/Web/API/GlobalEventHandlers/onclick) プロパティがこの例で使用されているイベントハンドラープロパティです。ボタンで利用可能なプロパティ(例えば [`btn.textContent`](/ja/docs/Web/API/Node/textContent) や [`btn.style`](/ja/docs/Web/API/HTMLElement/style))のうちの 1 プロパティに過ぎませんが、特別な種類のものです(コードを代入すると、そのコードはボタンでイベントが発火した際に実行される)。

ハンドラープロパティには、名前付き関数の関数名 ([Build your own function](/ja/docs/Learn/JavaScript/Building_blocks/Build_your_own_function) でみられるような) を設定することもできます。こう書いても動作は同じです:

```js
const btn = document.querySelector("button");

function bgChange() {
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;
```

利用できるイベントハンドラープロパティにはとてもたくさんの種類があります。実験してみましょう。

まずは、[random-color-eventhandlerproperty.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/random-color-eventhandlerproperty.html) のローカルコピーを作成し、ブラウザーで開いてくださいこれはこの記事ですでに遊んだ簡単なランダム色のサンプルです。さて、`btn.onclick` のところを以下の異なる値に変えてみて、結果を順に見てみてください:

- [`btn.onfocus`](/ja/docs/Web/API/GlobalEventHandlers/onfocus) と [`btn.onblur`](/ja/docs/Web/API/GlobalEventHandlers/onblur) — ボタンがフォーカスされフォーカスが外れる(Tab キーをパチパチして、ボタンをフォーカスしたり外したりしてみて)と色が変わります。これらはフォームのフィールドがフォーカスされている時にフィールドに何を入れたらいいのか示したり、フィールドの入力が終った直後に入力として正しくない値が入っている際のエラーメッセージを表示するような場合によく使われます。
- [`btn.ondblclick`](/ja/docs/Web/API/GlobalEventHandlers/ondblclick) — ダブルクリックされた場合だけ色が変わります。
- [`window.onkeypress`](/ja/docs/Web/API/GlobalEventHandlers/onkeypress), [`window.onkeydown`](/ja/docs/Web/API/GlobalEventHandlers/onkeydown), [`window.onkeyup`](/ja/docs/Web/API/GlobalEventHandlers/onkeyup) — キーボードのキーが押された時に色が変わります。`keypress` は普通のキー入力(ボタンを押して離して)を示しますが、`keydown` と `keyup` はキーストロークのうち押すだけ、離すだけの部分それぞれを指します。ボタンそのもののイベントハンドラーに登録しても上手く動かないことに注意してください — [window](/ja/docs/Web/API/Window) オブジェクトに登録しなければならず、これはブラウザーのウィンドウ全体を表わしています。
- [`btn.onmouseover`](/ja/docs/Web/API/GlobalEventHandlers/onmouseover) と [`btn.onmouseout`](/ja/docs/Web/API/GlobalEventHandlers/onmouseout) — マウスポインタがボタンの上に来たときとボタンの上から外れた時に色が変わります。

いくつかのイベントはとても汎用的なのでほとんどどこでも使えます(例えば onlick ハンドラはほぼ全ての要素に登録できます)が、いくつかはもっと限定的で、特定の状況でしか使えません(例えば [onplay](/ja/docs/Web/API/GlobalEventHandlers/GlobalEventHandlers.onplay) は{{htmlelement("video")}}のような特定の要素でのみ意味を持ちます)。

### インラインイベントハンドラー — 使っちゃだめ

あなたのコードでこんな形を見た事があるかもしれません:

```html
<button onclick="bgChange()">Press me</button>
```

```js
function bgChange() {
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
}
```

> **メモ:** [こちら](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/random-color-eventhandlerattributes.html)に GitHub 上のサンプルがあります (また、[こちら](http://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventhandlerattributes.html)で実際に動くところを見られます)。

Web 上で見かける最初期のイベントハンドラー登録方法には、上の例のような**イベントハンドラー HTML 属性**(**インラインイベントハンドラー**とも言う)があります — 属性値がイベント発生時に実行したい JavaScript コードそのものです。上の例では{{htmlelement("script")}}要素の中で定義された関数を起動していますが、直接 JavsScript そのものを属性の中に入れる事もできます。例えば:

```html
<button onclick="alert('Hello, this is my old-fashioned event handler!');">
  Press me
</button>
```

多くのイベントハンドラープロパティと等価な HTML 属性を見付けるでしょうが、使うべきではありません — こういうのは悪い方法とみなされています。ちょっとした事を手早く片づけたい時、イベントハンドラー属性を使うのが簡単に思えるかもしれませんが、あっという間に手がつけられない、効率の悪いものになってしまいます。

そもそも、あなたの HTML と JavaScript を混在させると、読みにくくなってしまうため、良いアイデアではありません — あなたの JavaScript は一ヶ所にまとめる方が良いです。別の一つのファイルになっていれば、それを複数の HTML ドキュメントに適用できますから。

(HTML と JavaScript が)一つのファイルになっているとしても、インラインイベントハンドラーは良いアイデアではありません。ボタン一つならいいですが、ボタンが 100 あったら? ファイルに 100 の属性を追加したならば、あっという間に管理していくのは悪夢と化す事でしょう。JavaScript を使えば、ページにボタンがいくつあろうが、全部のボタンにイベントハンドラーを追加するのは簡単です、こんな具合です:

```js
const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = bgChange;
}
```

ここにある他のオプションは [`NodeList`](/ja/docs/Web/API/NodeList) オブジェクトの組み込みメソッドの [`forEach()`](/ja/docs/Web/API/NodeList/forEach) で使えることに注意してください:

```js
buttons.forEach(function (button) {
  button.onclick = bgChange;
});
```

> **メモ:** プログラムロジックをコンテンツから分離しておくと、あなたのサイトはサーチエンジンにとってより好ましいものになります。

### addEventListener() と removeEventListener()

最新のイベント機構は [Document Object Model (DOM) Level 2 Events](https://www.w3.org/TR/DOM-Level-2-Events/) 仕様で規定されていて、ブラウザーに新しい関数が追加されました — [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener)です。この関数はイベントハンドラープロパティと同じ方向性ですが、文法は明確に異なります。ランダム色の例をこんな風に書き換える事ができます:

```js
const btn = document.querySelector("button");

function bgChange() {
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener("click", bgChange);
```

> **メモ:** [こちら](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/random-color-addeventlistener.html)に GitHub 上のサンプルがあります (また、[こちら](http://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-addeventlistener.html)で実際に動くところが見られます)。

`addEventListener()` 関数のカッコの中で、二つの引数を指定しています — ハンドラーを登録したいイベントの名前と、それに反応して実行させたいコードを含んだ関数です。匿名関数を使って、実行したいコードを全部 addEventListener() 関数の引数に書いてしまっても全く問題ありません。こんな具合です:

```js
btn.addEventListener("click", function () {
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
});
```

この方式は、ここまでで見てきた古い方式に勝る点がいくつかあります。まず第一に、逆を行なう関数 [`removeEventListener()`](/ja/docs/Web/API/EventTarget/removeEventListener)があり、以前に追加したリスナーを削除できます。例えばこうすると、このセクションの最初のコード部で追加したリスナーを削除します:

```js
btn.removeEventListener("click", bgChange);
```

単純で小さなプログラムではたいした事ありませんが、大きくて複雑なプログラムでは、古く使われないイベントハンドラーを除去しておくと効率が良くなります。さらに、これは例えば同じボタンに状況の違いによって異なる動作をさせる事ができるようになります — ただ適切なイベントハンドラーを追加したり削除するだけで良いのです。

第二に、同じリスナーに複数のハンドラーを登録できます。
次では二つのハンドラの両方は適用されません:

```js
myElement.onclick = functionA;
myElement.onclick = functionB;
```

二行目で最初に設定した `onclick` の値が上書きされるからです。
ですがこれなら動きます:

```js
myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);
```

要素がクリックされると、どちらの関数も走ります。

さらには、この方式ではもっとたくさんのパワフルな機能やオプションが使えます。それらはこの記事の範疇を少しばかり超えているので、知りたければ [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) と [`removeEventListener()`](/ja/docs/Web/API/EventTarget/removeEventListener) のリファレンスページを見てください

### どの方式を使えば良い?

三つの方式のうち、イベントハンドラー HTML 属性は絶対使うべきではありません — 前に書いたように、時代遅れで悪いやり方です。

他の二つはまあまあどっちでも良いです、少なくとも単純な用途では:

- イベントハンドラープロパティは力とオプションに欠けますが、ブラウザー間での互換性が高いです(IE8 ですら動きます)。学習を始めるならここから始めるのが良いかもしれません。
- DOM レベル 2 イベント(`addEventListener()`他)はもっとパワフルですが、もっと複雑でちょっと互換性に欠けます(IE9 以降でサポート)。こちらも試していき、可能なところではこちらを使えるようになりましょう。

三番目の方式の最大の利点は、必要なときに removeEventListener() 関数でイベントハンドラーコードを削除できる事、必要なときは要素に同種のリスナーを複数追加できる事です。例えば、ある要素に対して `addEventListener('click', function() { ... })` を別の関数を第二引数に指定して何回か呼ぶ事ができます。これはイベントハンドラープロパティでは、プロパティは後からセットした値で上書きされてしまうので、できません。e.g.:

```js
element.onclick = function1;
element.onclick = function2;
etc.
```

> **メモ:** もし仕事で IE8 より古いブラウザーをサポートするよう言われているなら、そのような古代のブラウザーは新しいものとは違ったイベントモデルを使っているため、困難にぶつかるかもしれません。でも怖がらないで。大半の JavaScript ライブラリ(例えば `jQuery`)には、ブラウザー間の差異をとっぱらえる関数が備わっています。勉強中のあなたがこの点について心配しすぎる必要はありません。

## その他、イベントに関する概念

このセクションでは、イベントに関連するより進んだ概念について軽くさらっていきます。今の時点で完全に理解する必要があるほど重要ではありませんが、ときどき見かけることになるであろうコードのパターンがなぜそうなっているのか、理解する助けになるかもしれません。

### Event objects

ときどきイベントハンドラー関数内で `event`、evt、単に `e` などと名付けられた引数を見かけるかもしれません。
これらは**イベントオブジェクト**と呼ばれ、イベントの追加機能や情報を提供する目的でイベントハンドラーに自動的に渡されます。例えば、またランダム色の例をちょっと書き換えてみましょう:

```js
function bgChange(e) {
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener("click", bgChange);
```

> **メモ:** [こちら](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/random-color-eventobject.html) に GitHub 上のサンプルがあります (また、[こちら](http://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventobject.html)で実際に動くところが見れらます)。

イベントオブジェクト **e** が関数に含まれていて、関数内で `e.target` — これはボタンそのもの — の背景色スタイルを設定しているのがわかるでしょう。イベントオブジェクトの `target` プロパティは、常にイベントが生じた要素への参照となっています。ですからこの例ではページではなくボタンの背景色がランダムに変わります。

> **メモ:** イベントオブジェクトには好きな名前を使えます — イベントハンドラー関数のカッコの中に使いたい名前を書くだけです。`e`/`evt`/`event` が開発者の間でとても良く使われていますが、これらが短くて覚えやすいからです。標準に従うのはいつだって良いやり方です。

複数の要素に同じイベントハンドラを割り当てて、どれかでイベントがあったときに何かさせたいような場合、`e.target` はとてつもなく有用なものです。複数の要素に同じイベントハンドラーを割り当てて、どれかでイベントがあったときに何かさせたいような場合、e.target はとてつもなく有用なものです。例えばクリックすると見えなくなるタイルが 16 個あるとします。`e.target` を使ってそれをただ消せるなら、もっと難解な手段で選びだすのよりも使いすいでしょう。続く例では (完全なソースコードは [useful-eventtarget.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/useful-eventtarget.html) を見てください; ここで [ライブ実行](http://mdn.github.io/learning-area/javascript/building-blocks/events/useful-eventtarget.html) も見られます)、16 個の {{htmlelement("div")}} 要素を JavaScript で生成します。そしてこれらを全部 {{domxref("document.querySelectorAll()")}}を使って選択し、ループで一つ一つに `onclick` ハンドラを追加して、それぞれがクリックされた時にランダムな色が表われるようにしています:

```js
const divs = document.querySelectorAll("div");

for (let i = 0; i < divs.length; i++) {
  divs[i].onclick = function (e) {
    e.target.style.backgroundColor = bgChange();
  };
}
```

結果はこうです(クリックして遊んでみてください):

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Useful event target example</title>
    <style>
      div {
        background-color: red;
        height: 100px;
        width: 25%;
        float: left;
      }
    </style>
  </head>
  <body>
    <script>
      for (let i = 1; i <= 16; i++) {
        const myDiv = document.createElement("div");
        document.body.appendChild(myDiv);
      }

      function random(number) {
        return Math.floor(Math.random() * number);
      }

      function bgChange() {
        var rndCol =
          "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
        return rndCol;
      }

      const divs = document.querySelectorAll("div");

      for (let i = 0; i < divs.length; i++) {
        divs[i].onclick = function (e) {
          e.target.style.backgroundColor = bgChange();
        };
      }
    </script>
  </body>
</html>
```

{{ EmbedLiveSample('Hidden_example', '100%', 400) }}

あなたが使うであろうイベントハンドラーのほとんどでは、イベントオブジェクトには標準的なプロパティと関数(メソッド)({{domxref("Event")}}を参照してください)だけがあります。もっと上級者向けハンドラーでは、動作に必要な追加データを保持するために特殊なプロパティを付与するものもあります。例えば [Media Recorder API](/ja/docs/Web/API/MediaRecorder_API) には `dataavailable` イベントがあり、オーディオやビデオの録音や再生が終わって何か(保存したり再生したり)する準備ができたところで発火します。これに紐付く [ondataavailable](/ja/docs/Web/API/MediaRecorder/ondataavailable) ハンドラーのイベントオブジェクトには録音・録画データを保持する data プロパティがあり、これを使って何かしらを行なえます。

### 標準の動作を抑制する

ときにはイベントに付随する標準動作を止めたい場合があるでしょう。一番よくあるのは、ウェブのフォーム、例えばカスタマイズした登録フォームです。詳細を入力し終えてサブミットボタンを押した時、普通の動作ではデータがサーバーの指定のページに送られて処理され、ブラウザーは"成功しました"ページ(や他に指定されていない場合、同様なページ)にリダイレクトされたりなんやらします。

ユーザーが適切なデータを送信しなかった場合に問題が発生します — 開発者としてあなたはサーバーへのデータ送信を抑止し、どこに問題があってデータを適切なものにするにはどうすればいいのか示す、ユーザーへのエラーメッセージを表示したいことでしょう。ブラウザーの中にはフォームデータの自検証機能を備えたものもありますが、多くはないので、それには頼らず自前の検証機能を実装すべきです。簡単な例を見てみましょう。

まず、あなたにあなたの姓と名を入力させる単純な HTML フォームです。

```html
<form>
  <div>
    <label for="fname">First name: </label>
    <input id="fname" type="text" />
  </div>
  <div>
    <label for="lname">Last name: </label>
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

さあちょっとした JavaScript です — ここでは [onsubmit](/ja/docs/Web/API/GlobalEventHandlers/onsubmit) イベントハンドラー(フォームがサブミットされるとサブミットイベントが発火します)の中で、テキストフィールドが空かどうかテストするだけのとても簡単なチェックを実装します。もし空なら、イベントオブジェクトの [`preventDefault()`](/ja/docs/Web/API/Event/preventDefault) 関数— これでフォームの送信を抑制します — を呼び、それからフォームの下にあるパラグラフに、何が問題なのかユーザーに伝えるためのエラーメッセージを表示します:

```js
const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.onsubmit = function (e) {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault();
    para.textContent = "You need to fill in both names!";
  }
};
```

言うまでもなく弱っちいフォームの検証です — 例えばフォームに空白や数字が入っていても止められません — が、例としては十分です。結果はこうなります。

{{ EmbedLiveSample('Preventing_default_behavior', '100%', 140, "", "", "hide-codepen-jsfiddle") }}

> **メモ:** ソースコード全体については、[preventdefault-validation.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/preventdefault-validation.html) (及び [ライブ実行](http://mdn.github.io/learning-area/javascript/building-blocks/events/preventdefault-validation.html)も) をご覧ください。

### イベントのバブリングとキャプチャリング

ここで最後に説明していくのは、滅多には遭遇しませんが、理解できていないととても苦痛になるかもしれない事柄です。ある一つの要素で同じイベントに紐付く二つのハンドラが活性化された時に何が起きるのかを説明するのが、イベントのバブリングとキャプチャリングという二種類のメカニズムです。わかりやすくするために次の例を見てください — [show-video-box.html](http://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box.html) 例を新しいタブで開いてください ([ソースコード](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/show-video-box.html) もまた別のタブに)。ライブでも下で見られます:

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Show video box example</title>
    <style>
      div {
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 480px;
        height: 380px;
        border-radius: 10px;
        background-color: #eee;
        background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.1)
        );
      }

      .hidden {
        left: -50%;
      }

      .showing {
        left: 50%;
      }

      div video {
        display: block;
        width: 400px;
        margin: 40px auto;
      }
    </style>
  </head>
  <body>
    <button>Display video</button>

    <div class="hidden">
      <video>
        <source
          src="https://raw.githubusercontent.com/mdn/learning-area/master/javascript/building-blocks/events/rabbit320.mp4"
          type="video/mp4" />
        <source
          src="https://raw.githubusercontent.com/mdn/learning-area/master/javascript/building-blocks/events/rabbit320.webm"
          type="video/webm" />
        <p>
          Your browser doesn't support HTML5 video. Here is a
          <a href="rabbit320.mp4">link to the video</a> instead.
        </p>
      </video>
    </div>

    <script>
      const btn = document.querySelector("button");
      const videoBox = document.querySelector("div");
      const video = document.querySelector("video");

      btn.onclick = function () {
        displayVideo();
      };

      function displayVideo() {
        if (videoBox.getAttribute("class") === "hidden") {
          videoBox.setAttribute("class", "showing");
        }
      }

      videoBox.addEventListener("click", function () {
        videoBox.setAttribute("class", "hidden");
      });

      video.addEventListener("click", function () {
        video.play();
      });
    </script>
  </body>
</html>
```

{{ EmbedLiveSample('Hidden_video_example', '100%', 500, "", "", "hide-codepen-jsfiddle") }}

これは内に {{htmlelement("video")}} 要素を含む {{htmlelement("div")}} を表示したり隠したりするとても簡単な例です。

```html
<button>Display video</button>

<div class="hidden">
  <video>
    <source src="rabbit320.mp4" type="video/mp4" />
    <source src="rabbit320.webm" type="video/webm" />
    <p>
      Your browser doesn't support HTML5 video. Here is a
      <a href="rabbit320.mp4">link to the video</a> instead.
    </p>
  </video>
</div>
```

{{htmlelement("button")}} がクリックされると、`<div>` のクラス属性を `hidden` から `showing` に変更するので、ビデオが表示されます(例の CSS にこの二つのクラスが含まれており、それぞれはボックスの位置をスクリーンの外、内にします)。

```js
btn.onclick = function () {
  videoBox.setAttribute("class", "showing");
};
```

では二つばかり `onclick` イベントハンドラーを追加します — 最初のは `<div>` に、二つ目は `<video>`にです。ビデオの外側の `<div>` 領域がクリックされた時にはボックスがまた隠れるようにし、ビデオそのものがクリックされたらビデオが再生されるようにしたいというわけです。

```
videoBox.onclick = function() {
  videoBox.setAttribute('class', 'hidden');
};

video.onclick = function() {
  video.play();
};
```

が、ここで問題が — 今度はビデオをクリックすると再生が始まりますが、それと同時に\<div>が隠されるようになってしまいました。ビデオが `<div>` の中にあるので(ビデオは div の一部ですから)、ビデオのクリックは上に挙げた両方のイベントハンドラーを実際に動かします。

#### バブリングとキャプチャリングの説明

親要素を持つ要素 (このケースでは {{htmlelement("video")}} です) においてイベントが発火すると、モダンブラウザーは二つの異なる段階に分けて動作します — キャプチャリングする段階とバブリングする段階です。

**キャプチャリング**の段階で行われることは……

- 要素の最上位の親要素 ({{htmlelement("html")}} に `onclick` イベントハンドラーがキャプチャリング段階に登録されているか調べ、あればそれを実行します。
- 次に `<html>` 要素の内側の要素に移って同じ事をし、また次の内側の要素にと、実際にクリックされた要素に到達するまで繰り返されます。

**バブリング**の段階では、全く逆の事が起きます。

- ブラウザーは実際にクリックされた要素の `onclick` イベントハンドラーがバブリング段階に登録されていれば、それを実行します。
- 次に直上の親要素に移動して同じ事をし、また次へ、`<html>` 要素に到達するまで繰り返します。

[![](bubbling-capturing.png)](bubbling-capturing.png)

(大きな図を見るにはクリックしてください)

モダンブラウザーのデフォルトでは、全てのイベントハンドラーはバブリング段階に登録されます。ですのでこの例の場合では、ビデオをクリックするとクリックイベントは `<video>` 要素から外側の `<html>` 要素に進んで (バブリングして) いきます。従って:

- `video.onclick...` ハンドラーがあるので実行し、最初ビデオが始まります。
- `videoBox.onclick...` ハンドラーがあるので実行し、よってビデオも隠されます。

> **メモ:** 両方のイベントハンドラーが存在する場合バブリングとキャプチャリングでは、キャプチャフェーズが最初に走り、バブリングフェーズが続きます。

#### stopPropagation()で問題を解決する

困った動作ですが、解決する方法があります! 標準的なイベントオブジェクトには [`stopPropagation()`](/ja/docs/Web/API/Event/stopPropagation)という関数があって、ハンドラーのイベントオブジェクトで起動されると、このハンドラーは実行されますが、イベントが上位に伝播しないようにするので、これ以上のハンドラーは実行されなくなります。

よって我々の今の問題は、先のコードブロック、第二のハンドラー関数をこのように変更して解決できます:

```js
video.onclick = function (e) {
  e.stopPropagation();
  video.play();
};
```

[show-video-box.html ソースコード](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/show-video-box.html)のローカルコピーを作成してみて、自分で修正してみるか、修正された結果は [show-video-box-fixed.html](http://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box-fixed.html) で見ることができます (こちらで[ソースコード](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/show-video-box-fixed.html)も見られます)。

> **メモ:** なんだってキャプチャリングとバブリングなんてあるのか? それはね、むかーしむかしの悪き時代、ブラウザーに今ほど互換性がなかった頃、ネットスケープはキャプチャリングだけを、IE はバブリングだけを使っていたのさ。W3C が動作について標準化と合意を作ろうと決めた時、結局どっちもシステムに入れることにし、モダンブラウザーはそのように実装されたのさ。

> **メモ:** 上で述べたように、デフォルトでイベントハンドラーはバブリング段階に登録され、そしてほとんどの場合はこれが妥当です。もし本当にイベントをキャプチャリング段階の方に登録したいのであれば、[`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener)を使って、省略可能な第三引数に `true` を指定すれば実現できます。

#### イベントの移譲

バブリングでは**イベント移譲**という機能も活用できます — イベント移譲という概念は、たくさんある子要素のどれかしらがクリックされた際に何らかのコードを実行したいという場合に、個々の子要素一つ一つにイベントリスナーを設定するのではなく、親要素のイベントリスナーを設定すれば子要素のイベントリスナーからバブリングしてくるという事実に依拠しています。

良い例としては、一連のリストアイテムです — どれかがクリックされたらメッセージをポップアップさせたいときには、親の `<ul>` 要素の `click` イベントリスナーに設定すれば、イベントはリストアイテムからバブリングしてきます。

この概念はより深く David Walsh のブログで、たくさんの例とともに解説されています。— [How JavaScript Event Delegation Works](https://davidwalsh.name/event-delegate) を見てください

## スキルをテストしよう!

この記事の最後に来ましたが、最も大事な情報を覚えていますか? 次に移動する前に、さらなるテストでこの情報を保持しているか検証できます — [Test your skills: Events](/ja/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Events) を見てください。

## 結論

ウェブイベントについて、今の学習初期段階で知るべき事は全部わかったはずです。上で述べたように、実のところイベントは JavaScript のコアには属しません — それらはブラウザーの Web API に属するものです。

また重要な事は、JavaScript の使われ方によって異なるイベントモデルがありうる事も理解しておいてください — Web API とブラウザーの WebExtension や Node.js (サーバーサイド JavaScript) のような領域とでは。今あなたがそれらの領域について理解しなくてよいと思っていますが、ウェブ開発の事を学んでいくのにイベントの基礎を理解するのが役立つのは確かです。

理解できない事があれば、気楽にまた記事を読み返したり、[私達](/ja/Learn#Contact_us) に質問してください

## 関連情報

- [Event order](http://www.quirksmode.org/js/events_order.html) (キャプチャとバブリングの議論) — Peter-Paul Koch による非常に詳細な作品。
- [Event accessing](http://www.quirksmode.org/js/events_access.html) (イベントオブジェクトに関する議論) — Peter-Paul Koch によるもう 1 つの非常に詳細な作品。
- [イベントリファレンス](/ja/docs/Web/Events)

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Return_values","Learn/JavaScript/Building_blocks/Image_gallery", "Learn/JavaScript/Building_blocks")}}
