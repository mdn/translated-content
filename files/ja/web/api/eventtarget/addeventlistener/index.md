---
title: EventTarget.addEventListener()
slug: Web/API/EventTarget/addEventListener
tags:
  - メソッド
  - リファレンス
browser-compat: api.EventTarget.addEventListener
translation_of: Web/API/EventTarget/addEventListener
---
{{APIRef("DOM")}}

**`addEventListener()`** は {{domxref("EventTarget")}} インターフェイスのメソッドで、ターゲットに特定のイベントが配信されるたびに呼び出される関数を設定します。

対象としてよくあるものは {{domxref("Element")}}, {{domxref("Document")}}, {{domxref("Window")}} ですが、イベントに対応したあらゆるオブジェクトが対象になることができます ({{domxref("XMLHttpRequest")}} など)。

> **Note:** `addEventListener()` メソッドは、イベントリスナーを登録するための*推奨される*方法です。以下のような長所があります。
>
> - 1 つのイベントに対して複数のハンドラーを追加することができます。これは、ライブラリーや JavaScript モジュール、あるいは他のライブラリーや拡張機能とうまく動作させる必要があるその他の種類のコードで特に有効です。
> - `onXYZ` プロパティを使用するのとは対照的に、リスナーが起動されるときのフェーズ（キャプチャとバブリング）をより細かく制御できます。
> - HTML や SVG の要素だけでなく、あらゆるイベントターゲットで動作します。

`addEventListener()` は関数または {{domxref("EventListener")}} を実装したオブジェクトを、呼び出される {{domxref("EventTarget")}} における指定されたイベント種別のイベントリスナーのリストに加えることで動作します。その関数やオブジェクトが既にターゲットのイベントリスナーのリストにあった場合は、二重に追加することはありません。

手動で {{domxref("EventTarget.removeEventListener", "removeEventListener()")}} でイベントリスナーを削除する必要はありません。

> **Note:** 無名関数は 2 つの内容が同じであっても `addEventListener` では別なものと見なされるため、 2 つ目*も*ターゲットのイベントリスナーのリストに追加されます。
>
> 実際、無名関数は、*同じ*変更のないソースコードで定義されて繰り返し呼び出されても、**繰り返しの中でも**同一にはなりません。
>
> このような場合、同じ無名関数を繰り返し定義することは問題になることがあります。（後述の[メモリーの問題](#メモリーの問題)を参照してください）。

イベントリスナーを他のリスナー内部から {{domxref("EventTarget")}} に追加した場合、つまりイベントの処理中は、そのイベントが新しいリスナーを起動することはありません。
しかし、新しいリスナーは、バブリング中など、イベントフローの後の段階で呼び出されることがあります。

## 構文

```js
addEventListener(type, listener);
addEventListener(type, listener, options);
addEventListener(type, listener, useCapture);
```

### 引数

- `type`
  - : 対象とする[イベントの種類](/ja/docs/Web/Events)を表す文字列です。
- `listener`
  - : 指定された種類のイベントが発生するときに通知 ({{domxref("Event")}} インターフェースを実装しているオブジェクト) を受け取るオブジェクト。これは、 {{domxref("EventListener")}} インタフェースを実装するオブジェクト、あるいは、単純に、JavaScript の[関数](/ja/docs/Web/JavaScript/Guide/Functions)でなければなりません。コールバックについて詳しくは、{{anch("イベントリスナーのコールバック")}}を参照してください。
- `options` {{optional_inline}}

  - : 対象のイベントリスナーの特性を指定する、オプションのオブジェクトです。次のオプションが使用できます。

    - `capture`
      - : 論理値で、この型のイベントが DOM ツリーで下に位置する `EventTarget` に配信 (dispatch) される前に、登録された `listener` に配信されることを示します。
    - `once`
      - : 論理値で、 `listener` の呼び出しを一回のみのとしたいかどうかを値で指定します。 `true` を指定すると、 `listener` は一度実行された時に自動的に削除されます。
    - `passive`
      - : 論理値で、 `true` ならば、 `listener` で指定された関数が {{domxref("Event.preventDefault", "preventDefault()")}} を呼び出さないことを示します。呼び出されたリスナーが `preventDefault()` を呼び出すと、ユーザーエージェントは何もせず、コンソールに警告を出力します。詳細は{{anch("パッシブリスナーによるスクロールの性能改善")}}をご覧ください。
    - `signal`
      - : {{domxref("AbortSignal")}} です。指定された `AbortSignal` オブジェクトの {{domxref("AbortController/abort()", "abort()")}} メソッドが呼び出された時に、リスナーが削除されます。

- `useCapture` {{optional_inline}}

  - : 論理値で、この型のイベントが、DOM ツリー内の下の `EventTarget` に配信される前に、登録された `listener` に配信されるかどうかを示します。ツリーを上方向にバブリングしているイベントは、キャプチャを使用するように指定されたリスナーを起動しません。イベントのバブリングとキャプチャは、両方の要素がそのイベントのハンドラーを登録している場合に、別の要素内に入れ子になっている要素で発生するイベントを伝播する 2 つの方法です。イベント伝播モードは、要素がイベントを受け取る順番を決定します。詳細な説明は [DOM Level 3 Events](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow) と [JavaScript Event order](https://www.quirksmode.org/js/events_order.html#link4) を参照してください。
    指定されていない場合、 `useCapture` は既定で `false` となります。

    > **Note:** イベントターゲットに登録されたイベントリスナーは、キャプチャフェーズやバブリングフェーズではなく、ターゲットフェーズのイベントになります。
    > キャプチャリングフェーズのイベントリスナーは、キャプチャリングフェーズ以外のイベントリスナーよりも先に呼び出されます。

- `wantsUntrusted` {{optional_inline}} {{Non-standard_inline}}
  - : `true` の場合、このリスナーはウェブコンテンツによって発行された合成イベント (カスタムイベント) を受け取ります (ブラウザーの{{glossary("chrome", "クローム")}}では既定で `false` ですが、一般のウェブページでは `true` です)。この引数は、主にアドオンやブラウザー自身の役に立つものです。

### 返値

なし。

## 使用上の注意

### イベントリスナーのコールバック

イベントリスナーには、コールバック関数を指定することもできますが、 {{domxref("EventListener")}} を実装したオブジェクトを指定することもでき、その場合は {{domxref("EventListener.handleEvent()", "handleEvent()")}} メソッドがコールバック関数として機能します。

コールバック関数自体は、 `handleEvent()` メソッドと同じ引数と返値を持ちます。つまり、コールバック関数は発生したイベントを説明する {{domxref("Event")}} に基づいたオブジェクトを唯一の引数として受け付け、何も返しません。

たとえば、次のイベントハンドラーコールバックは、 {{domxref("Element/fullscreenchange_event", "fullscreenchange")}} および {{domxref("Element/fullscreenerror_event", "fullscreenerror")}} の両方を処理するために使用することができます。

```js
function eventHandler(event) {
  if (event.type == 'fullscreenchange') {
    /* handle a full screen toggle */
  } else /* fullscreenerror */ {
    /* handle a full screen toggle error */
  }
}
```

### オプションの対応の安全な検出

DOM 仕様書の古い版では、 `addEventListener()` の第 3 引数はキャプチャーを使用するかどうかを示す論理値でした。時間の経過とともに、より多くのオプションが必要であることが明らかになりました。関数にさらに多くの引数を追加する (オプションの値を扱うときに非常に複雑になります) のではなく、第 3 引数は、イベントリスナーを削除する過程を設定するためのオプションの値を定義するさまざまなプロパティを含むことができるオブジェクトに変更されました。

古いブラウザーは (あまり古くないブラウザーも含めて) 第 3 引数がまだ論理値であると仮定しているので、このシナリオをインテリジェントに処理できるようにコードを構築する必要があります。これを行うには、興味のあるオプションごとに機能検出を使用します。

例えば、 `passive` オプションをチェックしたい場合は次のようにします。

```js
let passiveSupported = false;

try {
  const options = {
    get passive() { // この関数はブラウザーが passive プロパティに
                    // アクセスしようとしたときに呼び出されます。
      passiveSupported = true;
      return false;
    }
  };

  window.addEventListener("test", null, options);
  window.removeEventListener("test", null, options);
} catch(err) {
  passiveSupported = false;
}
```

これは、 `options` オブジェクトを生成し、 `passive` プロパティのゲッター関数を持たせます。ゲッターは、呼ばれた場合に `passiveSupported` フラグを `true` に設定します。つまり、ブラウザーが `passive` プロパティの値を `options` オブジェクトでチェックした場合、 `passiveSupported` は `true` に設定され、そうでなければ `false` のままになります。次に `addEventListener()` を呼び出して、これらのオプションを指定して偽のイベントハンドラーをセットアップし、ブラウザーが第 3 引数としてオブジェクトを認識した場合にオプションがチェックされるようにします。その後、 `removeEventListener()` を呼び出して、自分たちで後始末をします。（呼ばれていないイベントリスナーでは `handleEvent()` は無視されることに注意してください。）

この方法で、任意のオプションに対応しているかどうかを確認することができます。上に示したようなコードを使って、そのオプションのゲッターを追加するだけです。

そして、問題のオプションを使用する実際のイベントリスナーを作成したい場合は、次のようにします。

```js
someElement.addEventListener("mouseup", handleMouseUp, passiveSupported
                               ? { passive: true } : false);
```

ここでは、 {{domxref("Element/mouseup_event", "mouseup")}} イベントのリスナーを `someElement` 要素に追加しています。第 3 引数の `passiveSupported` が `true` である場合、 `options` オブジェクトを `passive` を `true` に設定して指定しています。そうでない場合は、論理値を渡す必要があることがわかっているので、 `useCapture` 引数の値として `false` を渡しています。

ご希望であれば、 [Modernizr](https://modernizr.com/docs) や [Detect It](https://github.com/rafrex/detect-it) のようなサードパーティ製のライブラリーを使用してこのテストを行うことができます。

[Web Incubator Community Group](https://wicg.github.io/admin/charter.html) の [`EventListenerOptions`](https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection) の記事を参考にしてください。

## 例

### シンプルなリスナーの追加

この例は、要素上でのマウスクリックを監視するための `addEventListener()` の使い方を紹介します。

#### HTML

```html
<table id="outside">
  <tr><td id="t1">one</td></tr>
  <tr><td id="t2">two</td></tr>
</table>
```

#### JavaScript

```js
// t2 の内容を変更する関数
function modifyText() {
  const t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue == "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild.nodeValue = "three";
  }
}

// イベントリスナーを table に追加
const el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);
```

このコードの中で、 `modifyText()` が `addEventListener()` を使用して登録された `click` イベントのリスナーです。表の中のどこかをクリックすると、ハンドラーまでバブリングし、 `modifyText()` が実行されます。

#### 結果

{{EmbedLiveSample('Add_a_simple_listener')}}

### 中断可能なリスナーの追加

この例では、 `addEventListener()` で {{domxref("AbortSignal")}} による中断ができるリスナーを追加する方法を実演しています。

#### HTML

```html
<table id="outside">
  <tr><td id="t1">one</td></tr>
  <tr><td id="t2">two</td></tr>
</table>
```

#### JavaScript

```js
// 中断可能なリスナーを table に追加
const controller = new AbortController();
const el = document.getElementById("outside");
el.addEventListener("click", modifyText, { signal: controller.signal } );

// t2 の内容を変更する関数
function modifyText() {
  const t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue == "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild.nodeValue = "three";
    controller.abort(); // "three" になったらリスナーを削除
  }
}
```

上の例では、2 行目の内容が "three" に変わった後に、 `addEventListener()` に渡した {{domxref("AbortController")}} から `abort()` を呼び出すようにコードを変更しました。その結果、クリックイベントを待ち受けするコードがなくなったので、値は永遠に "three" のままとなります。

#### 結果

{{EmbedLiveSample('Add_an_abortable_listener')}}

### 無名関数を使用したイベントリスナー

ここで、無名関数を使用してイベントリスナーに引数を渡す方法を見てみましょう。

#### HTML

```html
<table id="outside">
  <tr><td id="t1">one</td></tr>
  <tr><td id="t2">two</td></tr>
</table>
```

#### JavaScript

```js
// t2 のコンテンツを変更する関数
function modifyText(new_text) {
  const t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;
}

// イベントリスナーを table に追加する関数
const el = document.getElementById("outside");
el.addEventListener("click", function(){modifyText("four")}, false);
```

なお、リスナーは実際にイベントに応答する `modifyText()` 関数に引数を送信することができるコードをカプセル化している無名関数であることに注意してください。

#### 結果

{{EmbedLiveSample('Event_listener_with_anonymous_function')}}

### アロー関数を使用したイベントリスナー

この例はアロー関数表記を使用して実装された、簡単なイベントリスナーを紹介しています。

#### HTML

```html
<table id="outside">
  <tr><td id="t1">one</td></tr>
  <tr><td id="t2">two</td></tr>
</table>
```

#### JavaScript

```js
// t2 の中身を変更するための関数
function modifyText(new_text) {
  const t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;
}

// アロー関数で table にイベントリスナーを追加
const el = document.getElementById("outside");
el.addEventListener("click", () => { modifyText("four"); }, false);
```

#### 結果

{{EmbedLiveSample('Event_listener_with_an_arrow_function')}}

なお、無名関数とアロー関数は似ており、違いは `this` を結び付けるかどうかです。無名関数 (および従来のすべての JavaScript 関数) は固有の `this` を作成するのに対し、アロー関数はそれを含む関数の `this` を継承します。

つまり、アロー関数を使用したときは、それを含む関数の変数や定数をイベントハンドラーで利用することができます。

### options の使い方の例

#### HTML

```html
<div class="outer">
  outer, once & none-once
  <div class="middle" target="_blank">
    middle, capture & none-capture
    <a class="inner1" href="https://www.mozilla.org" target="_blank">
      inner1, passive & preventDefault(which is not allowed)
    </a>
    <a class="inner2" href="https://developer.mozilla.org/" target="_blank">
      inner2, none-passive & preventDefault(not open new page)
    </a>
  </div>
</div>
```

#### CSS

```css
.outer, .middle, .inner1, .inner2 {
  display: block;
  width:   520px;
  padding: 15px;
  margin:  15px;
  text-decoration: none;
}
.outer {
  border: 1px solid red;
  color:  red;
}
.middle {
  border: 1px solid green;
  color:  green;
  width:  460px;
}
.inner1, .inner2 {
  border: 1px solid purple;
  color:  purple;
  width:  400px;
}
```

#### JavaScript

```js
const outer  = document.querySelector('.outer');
const middle = document.querySelector('.middle');
const inner1 = document.querySelector('.inner1');
const inner2 = document.querySelector('.inner2');

const capture = {
  capture : true
};
const noneCapture = {
  capture : false
};
const once = {
  once : true
};
const noneOnce = {
  once : false
};
const passive = {
  passive : true
};
const nonePassive = {
  passive : false
};

outer.addEventListener('click', onceHandler, once);
outer.addEventListener('click', noneOnceHandler, noneOnce);
middle.addEventListener('click', captureHandler, capture);
middle.addEventListener('click', noneCaptureHandler, noneCapture);
inner1.addEventListener('click', passiveHandler, passive);
inner2.addEventListener('click', nonePassiveHandler, nonePassive);

function onceHandler(event) {
  alert('outer, once');
}
function noneOnceHandler(event) {
  alert('outer, none-once, default');
}
function captureHandler(event) {
  //event.stopImmediatePropagation();
  alert('middle, capture');
}
function noneCaptureHandler(event) {
  alert('middle, none-capture, default');
}
function passiveHandler(event) {
  // Unable to preventDefault inside passive event listener invocation.
  event.preventDefault();
  alert('inner1, passive, open new page');
}
function nonePassiveHandler(event) {
  event.preventDefault();
  //event.stopPropagation();
  alert('inner2, none-passive, default, not open new page');
}
```

#### 結果

外側、中央、内側のコンテナーをそれぞれクリックして、オプションがどのように動作するかを確認してください。

{{ EmbedLiveSample('Example_of_options_usage', 600, 310, '',
  'Web/API/EventTarget/addEventListener') }}

`options` オブジェクトで特定の値を使用する前に、ユーザーのブラウザーがその値に対応していることを確認するのが良いでしょう。これらは歴史的にすべてのブラウザがサポートしてきたわけではない追加要素であるからです。詳細は{{anch("オプションの対応の安全な検出")}}を参照してください。

## その他の注意事項

### ハンドラー内での "this" の値

一連の類似した要素に対して一般的なハンドラーを使いたい場合のように、イベントハンドラーが実行される要素を参照したいということがたびたびあります。

ハンドラー関数を `addEventListener()` を使って要素に装着したとき、ハンドラーの中の {{jsxref("Operators/this","this")}} の値は要素への参照となります。これはハンドラーに渡された event 引数の `currentTarget` プロパティの値と同じです。

```js
my_element.addEventListener('click', function (e) {
  console.log(this.className)           // logs the className of my_element
  console.log(e.currentTarget === this) // logs `true`
})
```

[アロー関数は独自の `this` コンテキストを持たない](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions#no_separate_this)ことをお忘れなく。

```js
my_element.addEventListener('click', (e) => {
  console.log(this.className)           // WARNING: `this` is not `my_element`
  console.log(e.currentTarget === this) // logs `false`
})
```

イベントハンドラー (例えば {{domxref("GlobalEventHandlers.onclick", "onclick")}}) が HTML ソース内の要素に指定されていた場合、属性値の JavaScript コードは、 `addEventListener()` を使用するような方法で `this` の値を結び付けたハンドラー関数に置き換えられます。コード内に `this` が現れた場合には、要素への参照を表します。

```html
<table id="my_table" onclick="console.log(this.id);"><!-- `this` refers to the table; logs 'my_table' -->
  ...
</table>
```

`this` の値は、属性値の中のコード*によって呼び出される*関数内では、[標準的な規則](/ja/docs/Web/JavaScript/Reference/Operators/this)に従って動作することに注意してください。これは次の例で示されています。

```html
<script>
  function logID() { console.log(this.id); }
</script>
<table id="my_table" onclick="logID();"><!-- when called, `this` will refer to the global object -->
  ...
</table>
```

`this` は `logID()` 内においては、グローバルオブジェクト {{domxref("Window")}} (または[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)の場合は `undefined`になります。

#### bind() を使用した this の指定

{{jsxref("Function.prototype.bind()")}} メソッドで、その関数のすべての呼び出しにおいて `this` として使用される値を指定できます。これを使えば、関数がどこから呼び出されるかによって `this` の値が変わってしまうというややこしい問題を簡単に回避できます。ただし、リスナーを後で削除できるように、そのリスナーへの参照を残しておく必要があります。

以下は `bind()` を使った場合と使わない場合の例です。

```js
const Something = function(element) {
  // |this| is a newly created object
  this.name = 'Something Good';
  this.onclick1 = function(event) {
    console.log(this.name); // this は element なので undefined になります
  };

  this.onclick2 = function(event) {
    console.log(this.name); // this は新しく生成されたオブジェクトに結び付けられているので、 'Something Good' と出力されます
  };

  // bind によって、固定の `this` コンテキストを onclick2 に割り当てる
  this.onclick2 = this.onclick2.bind(this);

  element.addEventListener('click', this.onclick1, false);
  element.addEventListener('click', this.onclick2, false); // これが仕掛けです
}
const s = new Something(document.body);
```

上の例の問題は、 `bind()` の付いたリスナーを削除できないということです。もうひとつの解決策は、あらゆるイベントを捕捉する `handleEvent()` という特別な関数を使用することです。

```js
const Something = function(element) {
  // |this| is a newly created object
  this.name = 'Something Good';
  this.handleEvent = function(event) {
    console.log(this.name); // this は新しく生成されたオブジェクトに結び付けられているので、 'Something Good' と出力されます
    switch(event.type) {
      case 'click':
        // 処理
        break;
      case 'dblclick':
        // 処理
        break;
    }
  };

  // この場合のリスナーは this であって this.handleEvent でないことに注意してください
  element.addEventListener('click', this, false);
  element.addEventListener('dblclick', this, false);

  // リスナーは適切に削除できます
  element.removeEventListener('click', this, false);
  element.removeEventListener('dblclick', this, false);
}
const s = new Something(document.body);
```

_this_ の参照を扱うためのもう一つの方法は、 `EventListener` にアクセスする必要のあるフィールドを含むオブジェクトのメソッドを呼び出す関数を渡すことです。

```js
class SomeClass {

  constructor() {
    this.name = 'Something Good';
  }

  register() {
    const that = this;
    window.addEventListener('keydown', function(e) { that.someMethod(e); });
  }

  someMethod(e) {
    console.log(this.name);
    switch(e.keyCode) {
      case 5:
        // ここにいくらかのコード...
        break;
      case 6:
        // ここにいくらかのコード...
        break;
    }
  }

}

const myObject = new SomeClass();
myObject.register();
```

### イベントリスナーのデータの出し入れ

イベントリスナーは離島のようなもので、データを渡すのも、ましてや実行後にデータを取り戻すのも至難の業だと思われるかもしれません。
イベントリスナーは引数を、[イベントオブジェクト](/ja/docs/Learn/JavaScript/Building_blocks/Events#event_objects) 1 つしかとらず、これは自動的にリスナーに渡され、返値は無視されます。
では、どのようにデータを取り込んだり、戻したりすればよいのでしょうか。これには良い方法がいくつかあります。

#### "this" を使用したイベントリスナーへのデータの入力

[前述](#bind_を使用した_this_の指定)の通り、 `Function.prototype.bind()` を使用すると `this` 参照変数を通じてイベントリスナーに値を渡すことができます。

```js
const myButton = document.getElementById('my-button-id');
const someString = 'Data';

myButton.addEventListener('click', function () {
  console.log(this); // 期待される値: 'Data'
}.bind(someString));
```

この方法は、イベントリスナーの中からプログラムでイベントリスナーがどの HTML 要素で発生したかを知る必要がない場合に適しています。これを行う主な利点は、実際に引数リストにデータを渡す場合とほぼ同じ方法でイベントリスナーがデータを受け取ることです。

#### 外部スコープのプロパティを使用したイベントリスナーへのデータの入力

外部スコープに (`const`, `let` を付けた) 変数宣言が含まれている場合、そのスコープで宣言されたすべての内部関数はその変数にアクセスすることができます(外部関数/内部関数については[こちら](/ja/docs/Glossary/Function#different_types_of_functions)を、変数スコープについては[こちら](/ja/docs/Web/JavaScript/Reference/Statements/var#implicit_globals_and_outer_function_scope)を参照してください)。したがって、イベントリスナーの外部からデータにアクセスする最も簡単な方法の1つは、イベントリスナーが宣言されているスコープにアクセスできるようにすることです。

```js
const myButton = document.getElementById('my-button-id');
let someString = 'Data';

myButton.addEventListener('click', function() {
  console.log(someString);  // 期待される値: 'Data'

  someString = 'Data Again';
});

console.log(someString);  // 期待される値: 'Data' (will never output 'Data Again')
```

> **Note:** 内側のスコープは外側のスコープにある `const`, `let` 変数にアクセスすることができますが、イベントリスナーの定義後に、同じ外側のスコープ内でこれらの変数にアクセスできるようになることは期待できません。なぜでしょうか？単純に、イベントリスナーが実行される頃には、イベントリスナーが定義されたスコープは既に実行を終了しているからです。

#### オブジェクトを用いたイベントリスナーのデータの出し入れ

JavaScript のほとんどの関数とは異なり、オブジェクトはそのオブジェクトを参照する変数がメモリー内に存在する限り、メモリー内に保持されます。それに加えて、オブジェクトはプロパティを持つことができ、参照によって渡すことができることから、スコープ間でデータを共有するための有力な候補となります。これについて調べてみましょう。

> **Note:** JavaScript の関数は厳密にはオブジェクトです。 (そのため、プロパティを持つことができ、メモリー内に永続的に存在する変数に代入されていれば、実行終了後もメモリー内に保持されます。)

オブジェクトを参照する変数がメモリーに存在する限り、オブジェクトのプロパティを使用してメモリーにデータを格納することができるので、実際にそれらを使用して、イベントリスナーにデータを渡し、イベントハンドラーが実行された後でデータに変更があった場合には、それを戻すことができます。この例を考えてみましょう。

```js
const myButton = document.getElementById('my-button-id');
const someObject = {aProperty: 'Data'};

myButton.addEventListener('click', function() {
  console.log(someObject.aProperty);  // 期待される値: 'Data'

  someObject.aProperty = 'Data Again';  // 値を変更
});

window.setInterval(function() {
  if (someObject.aProperty === 'Data Again') {
    console.log('Data Again: True');
    someObject.aProperty = 'Data';  // 次のイベントの実行を待つために値を初期化
  }
}, 5000);
```

この例では、イベントリスナーとインターバル関数の両方が定義されているスコープは、 `someObject.aProperty` の元の値が変更される前に実行を終了していたとしても、イベントリスナーとインターバル関数の両方で `someObject` がメモリー内に (*参照*によって) 持続するため、両方とも同じデータにアクセスできます (つまり、一方がデータを変更したときに、もう一方がその変更に対応できます)。

> **Note:** オブジェクトは参照で変数に格納されます。つまり、実際のデータのメモリーの場所だけが変数に格納されます。とりわけ、これはオブジェクトを「格納」する変数が、実際に同じオブジェクト参照が代入 (「格納」) されている他の変数に影響を与えることができるということです。 2 つの変数が同じオブジェクトを参照している場合 (例えば、 `let a = b = {aProperty: 'Yeah'};`)、どちらかから変数のデータを変更すると、もう一方の変数に影響を与えます。

> **Note:** オブジェクトは参照によって変数に格納されているので、関数の実行を停止した後も、関数からオブジェクトを返す (データを失わないようにメモリーに保存しておく) ことができます。

### メモリーの問題

```js
const els = document.getElementsByTagName('*');

// ケース 1
for(let i = 0; i < els.length; i++){
  els[i].addEventListener("click", function(e){/* 何かを行う */}, false);
}

// ケース 2
function processEvent(e){
  /* 何かを行う */
}

for(let i = 0 ; i < els.length; i++){
  els[i].addEventListener("click", processEvent, false);
}
```

上記の 1 つ目のケースでは、ループの繰り返しごとに新しい（無名の）ハンドラー関数が作成されます。一方、 2 つ目のケースでは、以前に宣言した同じ関数がイベントハンドラーとして使用され、作成されるハンドラー関数が 1 つであるため、メモリー消費量が少なくなります。さらに、最初のケースでは、無名関数への参照が保持されないため、 {{domxref("EventTarget.removeEventListener", "removeEventListener()")}} を呼び出すことができません（ここでは、ループが生成する可能性がある複数の無名関数への参照が保持されません）。2 番目のケースでは、`processEvent` が関数参照なので、`myElement.removeEventListener("click", processEvent, false)` を実行することが可能です。

実は、メモリー消費に関しては、関数参照を保持しないことが本当の問題ではなく、むしろ、*静的*な関数参照を保持しないことが問題なのです。以下の 2 つの問題ケースでは、関数参照は保持されていますが、それは反復処理ごとに再定義されています。 3 番目のケースでは、無名関数への参照は反復ごとに再割り当てされています。 4 番目のケースでは、関数定義全体は不変ですが、あたかも新しい関数のように繰り返し定義されています。つまり、どちらも静的ではありません。したがって、同じイベントリスナーが複数あるように見えますが、どちらの場合も、繰り返し実行するたびに、ハンドラ関数への独自の参照を持つ新しいリスナーが作成されます。

```js
const els = document.getElementsByTagName('*');

function processEvent(e){
  /* 何かを行う */
}

// 説明のためのものです。 [i] を [j] と間違っていることに注意してください。イベントリスナーをすべて最初の要素に登録しています。

// ケース 3
for(let i = 0, j = 0 ; i < els.length ; i++){
  els[j].addEventListener("click", processEvent = function(e){/* 何かを行う */}, false);
}

// ケース 4
for(let i = 0, j = 0 ; i < els.length ; i++){
  function processEvent(e){/* 何かを行う */};
  els[j].addEventListener("click", processEvent, false);
}
```

また、ケース 3 とケース 4 の両方において、関数への参照は保持されていますが、 `addEventListener()` を実行するたびに繰り返し再定義されているので、 `removeEventListener("click", processEvent, false)` はリスナーを削除できるものの、最後に追加したものだけを削除するようになります。

### パッシブリスナーによるスクロールの性能改善

仕様書によれば、 `passive` オプションの既定値は常に `false` です。しかし、これは特定のタッチイベントを扱うイベントリスナーが (特に) スクロールを処理しようとしている間にブラウザーのメインスレッドをブロックする可能性をもたらしており、スクロール処理中の性能が大幅に低下する結果になる可能性があります。

この問題を防ぐため、一部のブラウザー（具体的には Chrome と Firefox）では、文書レベルのノードである {{domxref("Window")}}, {{domxref("Document")}}, {{domxref("Document.body")}} のイベントに対する
{{domxref("Element/touchstart_event", "touchstart")}} および {{domxref("Element/touchmove_event", "touchmove")}} イベントの `passive` オプションの既定値が `true` に変更されました。これにより、イベントリスナーが[イベントをキャンセルする](/ja/docs/Web/API/Event/preventDefault)ことができなくなり、ユーザーがスクロールしている間、ページレンダリングをブロックすることがなくなります。

> **Note:** この変更された動作を実装しているブラウザー (およびそれらのブラウザーのバージョン) を知りたい場合は、下記の互換性一覧表を参照してください。

この動作は下記のように、明示的に `passive` の値を `false` に設定することで上書きできます。

```js
/* 機能検出 */
let passiveIfSupported = false;

try {
  window.addEventListener("test", null,
    Object.defineProperty(
      {},
      "passive",
      {
        get: function() { passiveIfSupported = { passive: true }; }
      }
    )
  );
} catch(err) {}

window.addEventListener('scroll', function(event) {
  /* 何かを行う */
  // can't use event.preventDefault();
}, passiveIfSupported );
```

`addEventListener()` の `options` 引数に対応していない古いブラウザーでは、これを使用しようとすると、[機能検出](#オプションの対応の安全な検出)を適切に使用せずに `useCapture` 引数の使用を防ぐことがあります。

基本的な {{domxref("Element/scroll_event", "scroll")}} イベントの `passive` の値を気にする必要はありません。もともとキャンセルできないので、イベントリスナーはどのような場合でもページのレンダリングをブロックすることはできません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("EventTarget.removeEventListener()")}}
- [イベントの作成と起動](/ja/docs/Web/Events/Creating_and_triggering_events)
- [イベントハンドラー内での `this` の使用方法のさらに詳細な解説](https://www.quirksmode.org/js/this.html)
