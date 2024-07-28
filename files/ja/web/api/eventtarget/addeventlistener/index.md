---
title: "EventTarget: addEventListener() メソッド"
short-title: addEventListener()
slug: Web/API/EventTarget/addEventListener
l10n:
  sourceCommit: ded971d7fec855c2b81fde8809172697f2e227c1
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

**`addEventListener()`** は {{domxref("EventTarget")}} インターフェイスのメソッドで、ターゲットに特定のイベントが配信されるたびに呼び出される関数を設定します。

対象としてよくあるものは {{domxref("Element")}}、{{domxref("Document")}}、{{domxref("Window")}} ですが、イベントに対応したあらゆるオブジェクトが対象になることができます（{{domxref("IDBRequest")}} など）。

> **メモ:** `addEventListener()` メソッドは、イベントリスナーを登録するための*推奨される*方法です。以下のような長所があります。
>
> - 1 つのイベントに対して複数のハンドラーを追加することができます。これは、ライブラリーや JavaScript モジュール、あるいは他のライブラリーや拡張機能とうまく動作させる必要があるその他の種類のコードで特に有効です。
> - `onXYZ` プロパティを使用するのとは対照的に、リスナーが起動されるときのフェーズ（キャプチャとバブリング）をより細かく制御できます。
> - HTML や SVG の要素だけでなく、あらゆるイベントターゲットで動作します。

`addEventListener()` メソッドは、関数または `handleEvent()` 関数を実装したオブジェクトを、呼び出される {{domxref("EventTarget")}} における指定されたイベント種別のイベントリスナーのリストに加えることで動作します。その関数やオブジェクトが既にターゲットのイベントリスナーのリストにあった場合は、その関数やオブジェクトが二重に追加されることはありません。

> [!NOTE]
> ある無名関数が特定のターゲットでイベントリスナーのリストに登録されており、後のコードで同じ無名関数が `addEventListener` の呼び出しに指定された場合、2 つ目の関数*も*そのターゲットのイベントリスナーのリストに追加されます。
>
> 実際、無名関数は、*同じ*変更のないソースコードで定義されて繰り返し呼び出されても、**繰り返しの中でも**同一にはなりません。
>
> このような場合、同じ無名関数を繰り返し定義することは問題になることがあります。（後述の[メモリーの問題](#メモリーの問題)を参照してください）。

イベントリスナーが他のリスナーの内部、つまりイベントの処理中に {{domxref("EventTarget")}} に追加された場合、そのイベントが新しいリスナーを起動することはありません。
しかし、新しいリスナーは、バブリング中など、イベントフローの後の段階で呼び出されることがあります。

## 構文

```js-nolint
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
```

### 引数

- `type`
  - : 対象とする[イベントの種類](/ja/docs/Web/Events)を表す文字列です。
- `listener`
  - : 指定された種類のイベントが発生するときに通知（{{domxref("Event")}} インターフェイスを実装しているオブジェクト）を受け取るオブジェクト。これは `null` であるか、`handleEvent()` メソッドのあるオブジェクトか、JavaScript の[関数](/ja/docs/Web/JavaScript/Guide/Functions)のいずれかでなければなりません。コールバックについて詳しくは、[イベントリスナーのコールバック](#イベントリスナーのコールバック)を参照してください。
- `options` {{optional_inline}}

  - : 対象のイベントリスナーの特性を指定する、オプションのオブジェクトです。
    次のオプションが使用できます。

    - `capture` {{optional_inline}}
      - : 論理値で、この型のイベントが DOM ツリーで下に位置する `EventTarget` に配信 (dispatch) される前に、登録された `listener` に配信されることを示します。指定されていない場合は、既定で `false` になります。
    - `once` {{optional_inline}}
      - : 論理値で、 `listener` の呼び出しを一回のみのとしたいかどうかを値で指定します。 `true` を指定すると、 `listener` は一度実行された時に自動的に削除されます。指定されていない場合は、既定で `false` になります。
    - `passive` {{optional_inline}}

      - : 論理値で、`true` ならば、 `listener` で指定された関数が {{domxref("Event.preventDefault", "preventDefault()")}} を呼び出さないことを示します。呼び出されたリスナーが `preventDefault()` を呼び出すと、ユーザーエージェントは何もせず、コンソールに警告を出力します。

      このオプションが指定されていない場合、既定で `false` になります。ただし、Safari 以外のブラウザーでは、{{domxref("Element/wheel_event", "wheel")}}、{{domxref("Element/mousewheel_event", "mousewheel")}}、{{domxref("Element/touchstart_event", "touchstart")}}、{{domxref("Element/touchmove_event", "touchmove")}} の各イベントでは `true` になります。詳細は[パッシブリスナーの使用](#パッシブリスナーの使用)をご覧ください。

    - `signal` {{optional_inline}}
      - : {{domxref("AbortSignal")}} です。指定された `AbortSignal` オブジェクトの {{domxref("AbortController/abort()", "abort()")}} メソッドが呼び出された時に、リスナーが削除されます。指定されていない場合は、`AbortSignal` がリスナーに関連付けられません。

- `useCapture` {{optional_inline}}

  - : 論理値で、この型のイベントが、DOM ツリー内の下の `EventTarget` に配信される*前*に、登録された `listener` に配信されるかどうかを示します。ツリーを上方向にバブリングしているイベントは、キャプチャを使用するように指定されたリスナーを起動しません。イベントのバブリングとキャプチャは、両方の要素がそのイベントのハンドラーを登録している場合に、別の要素内に入れ子になっている要素で発生するイベントを伝播する 2 つの方法です。イベント伝播モードは、要素がイベントを受け取る順番を決定します。詳細な説明は [DOM Level 3 Events](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow) と [JavaScript Event order](https://www.quirksmode.org/js/events_order.html#link4) を参照してください。
    指定されていない場合、 `useCapture` は既定で `false` となります。

    > [!NOTE]
    > イベントターゲットに登録されたイベントリスナーは、キャプチャフェーズやバブリングフェーズではなく、ターゲットフェーズのイベントになります。
    > キャプチャフェーズのイベントリスナーは、キャプチャフェーズ以外のイベントリスナーよりも先に呼び出されます。

- `wantsUntrusted` {{optional_inline}} {{non-standard_inline}}
  - : Firefox (Gecko) 独自の引数です。`true` の場合、このリスナーはウェブコンテンツによって発行された合成イベント (カスタムイベント) を受け取ります (ブラウザーの{{glossary("chrome", "クローム")}}では既定で `false` ですが、一般のウェブページでは `true` です)。この引数は、主にアドオンやブラウザー自身の役に立つものです。

### 返値

なし ({{jsxref("undefined")}})。

## 使用上の注意

### イベントリスナーのコールバック

イベントリスナーには、コールバック関数または `handleEvent()` メソッドを持つオブジェクトのいずれかをコールバック関数として指定することができます。

コールバック関数自体は、 `handleEvent()` メソッドと同じ引数と返値を持ちます。つまり、コールバック関数は発生したイベントを説明する {{domxref("Event")}} に基づくオブジェクトを唯一の引数として受け付け、何も返しません。

たとえば、次のイベントハンドラーコールバックは、 {{domxref("Element/fullscreenchange_event", "fullscreenchange")}} および {{domxref("Element/fullscreenerror_event", "fullscreenerror")}} の両方を処理するために使用することができます。

```js
function handleEvent(event) {
  if (event.type === "fullscreenchange") {
    /* 全画面モードへの切り替えを処理 */
  } else {
    /* 全画面モードへの切り替えエラーを処理 */
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
    get passive() {
      // この関数はブラウザーが passive プロパティに
      // アクセスしようとしたときに呼び出されます。
      passiveSupported = true;
      return false;
    },
  };

  window.addEventListener("test", null, options);
  window.removeEventListener("test", null, options);
} catch (err) {
  passiveSupported = false;
}
```

これは、 `options` オブジェクトを生成し、 `passive` プロパティのゲッター関数を持たせます。ゲッターは、呼ばれた場合に `passiveSupported` フラグを `true` に設定します。つまり、ブラウザーが `passive` プロパティの値を `options` オブジェクトでチェックした場合、 `passiveSupported` は `true` に設定され、そうでなければ `false` のままになります。次に `addEventListener()` を呼び出して、これらのオプションを指定して偽のイベントハンドラーをセットアップし、ブラウザーが第 3 引数としてオブジェクトを認識した場合にオプションがチェックされるようにします。その後、[`removeEventListener()`](/ja/docs/Web/API/EventTarget/removeEventListener) を呼び出して、自分たちで後始末をします。（呼ばれていないイベントリスナーでは `handleEvent()` は無視されることに注意してください。）

この方法で、任意のオプションに対応しているかどうかを確認することができます。上に示したようなコードを使って、そのオプションのゲッターを追加するだけです。

そして、問題のオプションを使用する実際のイベントリスナーを作成したい場合は、次のようにします。

```js
someElement.addEventListener(
  "mouseup",
  handleMouseUp,
  passiveSupported ? { passive: true } : false,
);
```

ここでは、 {{domxref("Element/mouseup_event", "mouseup")}} イベントのリスナーを `someElement` 要素に追加しています。第 3 引数の `passiveSupported` が `true` である場合、 `options` オブジェクトを `passive` を `true` に設定して指定しています。そうでない場合は、論理値を渡す必要があることがわかっているので、 `useCapture` 引数の値として `false` を渡しています。

[機能検出の実装](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)のドキュメントや [Web Incubator Community Group](https://wicg.github.io/admin/charter.html) の [`EventListenerOptions`](https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection) に関する説明で詳しく学ぶことができます。

### ハンドラー内での "this" の値

イベントハンドラーが発行された要素を参照することはよくあることで、似たような要素の設定に汎用ハンドラーを使用する場合などに便利です。

ハンドラー関数を `addEventListener()` を使用して要素に装着する場合、ハンドラー内の {{jsxref("Operators/this","this")}} の値は要素を参照します。ハンドラーに渡すイベント引数の `currentTarget` プロパティの値と同じになります。

```js
my_element.addEventListener("click", function (e) {
  console.log(this.className); // my_element の className をログ出力
  console.log(e.currentTarget === this); // `true` をログ出力
});
```

注意点として、[アロー関数は自分自身で `this` コンテキストを持つことはありません](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions#メソッドとしては使用不可)。

```js
my_element.addEventListener("click", (e) => {
  console.log(this.className); // 警告: `this` は `my_element` ではない
  console.log(e.currentTarget === this); // `false` をログ出力
});
```

イベントハンドラー（例えば、{{domxref("Element.click_event", "onclick")}}）が HTML ソースの要素に指定されている場合、属性値の JavaScript コードは実質的にハンドラー関数にラップされ、`addEventListener()` と整合する方法で `this` の値にバインドされます。コード内に `this` が現れた場合は、要素への参照を表します。

```html
<table id="my_table" onclick="console.log(this.id);">
  <!-- `this` が table にバインドされ、'my_table' がログ出力される -->
  …
</table>
```

属性値内のコードによって呼び出された関数内の `this` の値は、[標準ルール](/ja/docs/Web/JavaScript/Reference/Operators/this) に従って動作することに注意してください。これは次の例で表示されます。

```html
<script>
  function logID() {
    console.log(this.id);
  }
</script>
<table id="my_table" onclick="logID();">
  <!-- 呼び出された際、`this` はグローバルオブジェクトを指す -->
  …
</table>
```

`logID()` 内の `this` の値はグローバルオブジェクト {{domxref("Window")}} への参照です（[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)の場合は `undefined`）。

#### bind() を使用した "this" の設定

{{jsxref("Function.prototype.bind()")}} メソッドを使用すると、修正された `this` コンテキストをその後のすべての呼び出しに使用することができます。ただし、リスナーへの参照を保持しておく必要があることに注意してください。

これは `bind()` を使用した例と使用しない例です。

```js
class Something {
  name = "Something Good";
  constructor(element) {
    // bind によって、修正された `this` コンテキストを `onclick2` に代入される
    this.onclick2 = this.onclick2.bind(this);
    element.addEventListener("click", this.onclick1, false);
    element.addEventListener("click", this.onclick2, false); // Trick
  }
  onclick1(event) {
    console.log(this.name); // undefined（`this` が要素であるため）
  }
  onclick2(event) {
    console.log(this.name); // 'Something Good'（`this` が Something インターフェイスに結び付けられているため）
  }
}

const s = new Something(document.body);
```

もう一つの解決策は、`handleEvent()` と呼ばれる特別な関数を使用してイベントを捕捉することです。

```js
class Something {
  name = "Something Good";
  constructor(element) {
    // この場合のリスナーは `this` であり、 this.handleEvent ではないことに注意
    element.addEventListener("click", this, false);
    element.addEventListener("dblclick", this, false);
  }
  handleEvent(event) {
    console.log(this.name); // 'Something Good'（新しく作成されたオブジェクトに結び付けられているため）
    switch (event.type) {
      case "click":
        // ここにいくらかのコード…
        break;
      case "dblclick":
        // ここにいくらかのコード…
        break;
    }
  }
}

const s = new Something(document.body);
```

`this` への参照を処理するもう一つの方法は、別個の `this` コンテキストを作成しないアロー関数を使用することです。

```js
class SomeClass {
  name = "Something Good";

  register() {
    window.addEventListener("keydown", (e) => {
      this.someMethod(e);
    });
  }

  someMethod(e) {
    console.log(this.name);
    switch (e.code) {
      case "ArrowUp":
        // ここにいくらかのコード…
        break;
      case "ArrowDown":
        // ここにいくらかのコード…
        break;
    }
  }
}

const myObject = new SomeClass();
myObject.register();
```

### イベントリスナーのデータの出し入れ

イベントリスナーは {{domxref("Event")}} または `Event` のサブクラスの引数を 1 つだけ取りますが、これは自動的にリスナーに渡され、返値は無視されます。
したがって、イベントリスナーにデータを取得したり、イベントリスナーからデータを取得したりするには、引数と返値でデータを渡すのではなく、代わりに[クロージャ](/ja/docs/Web/JavaScript/Closures)を作成する必要があります。

イベントリスナーとして渡された関数は、その関数を格納する外部スコープで宣言されたすべての変数にアクセスすることができます。

```js
const myButton = document.getElementById("my-button-id");
let someString = "Data";

myButton.addEventListener("click", () => {
  console.log(someString);
  // 最初のクリックでは 'Data' となり、
  // 2 番目のクリックでは 'Data Again' となる

  someString = "Data Again";
});

console.log(someString); // 期待される値: 'Data' （'Data Again' とはならない）
```

関数スコープに関する詳細情報は、[関数ガイド](/ja/docs/Web/JavaScript/Guide/Functions#関数のスコープ)をお読みください。

### メモリーの問題

```js
const elts = document.getElementsByTagName("*");

// ケース 1
for (const elt of elts) {
  elt.addEventListener(
    "click",
    (e) => {
      // 何かを行う
    },
    false,
  );
}

// ケース 2
function processEvent(e) {
  // 何かを行う
}

for (const elt of elts) {
  elt.addEventListener("click", processEvent, false);
}
```

上記の 1 つ目のケースでは、ループの繰り返しごとに新しい（無名の）ハンドラー関数が作成されます。一方、 2 つ目のケースでは、以前に宣言した同じ関数がイベントハンドラーとして使用され、作成されるハンドラー関数が 1 つであるため、メモリー消費量が少なくなります。さらに、最初のケースでは、無名関数への参照が保持されないため、 {{domxref("EventTarget.removeEventListener", "removeEventListener()")}} を呼び出すことができません（ここでは、ループが生成する可能性がある複数の無名関数への参照が保持されません）。2 番目のケースでは、`processEvent` が関数の参照なので、`myElement.removeEventListener("click", processEvent, false)` を実行することが可能です。

実は、メモリー消費に関しては、関数参照を保持しないことが本当の問題ではなく、むしろ、*静的*な関数参照を保持しないことが問題なのです。

### パッシブリスナーの使用

イベントに既定のアクションがある場合、例えば、既定でコンテナーをスクロールする {{domxref("Element/wheel_event", "wheel")}} イベントの場合、イベントリスナーが {{domxref("Event.preventDefault()")}} を呼び出して既定のアクションをキャンセルするかどうかを事前に知ることができないため、ブラウザーは一般的にイベントリスナーが完了するまで既定のアクションを開始することができません。イベントリスナーの実行に時間がかかりすぎると、既定のアクションが実行されるまでに、{{glossary("jank", "ジャンク")}}と呼ばれる顕著な遅延が発生する可能性があります。

`passive` オプションを `true` に設定することで、イベントリスナーは既定のアクションを取り消される可能性がないことを宣言します。リスナーが {{domxref("Event.preventDefault()")}} を呼び出しても、効果はありません。

`addEventListener()` の仕様書では、`passive` オプションの既定値は常に `false` であると定義しています。しかし、パッシブリスナーのスクロールパフォーマンスの利点を古いコードで実現するために、最近のブラウザーでは {{domxref("Element/wheel_event", "wheel")}}、{{domxref("Element/mousewheel_event", "mousewheel")}}、{{domxref("Element/touchstart_event", "touchstart")}}、{{domxref("Element/touchmove_event", "touchmove")}} の各イベントの `passive` オプションの既定値が、文書レベルノード {{domxref("Window")}}、{{domxref("Document")}}、{{domxref("Document.body")}} においては `true` に変更されています。これにより、イベントリスナーが[イベントが取り消される可能性](/ja/docs/Web/API/Event/preventDefault)を防ぐことができるので、ユーザーがスクロールしている間にページのレンダリングをブロックすることはありません。

そのため、（既定値に頼らずに）その動作を上書きして `passive` オプションを確実に `false` にしたい場合は、明示的にこのオプションを `false` に設定する必要があります。

基本的な {{domxref("Element/scroll_event", "scroll")}} イベントについて、`passive` の値を気にする必要はありません。
取り消される可能性がないため、イベントリスナーがページのレンダリングをブロックすることはありません。

パッシブリスナーの効果を示す例については[パッシブリスナーによるスクロールの性能改善](#パッシブリスナーによるスクロールの性能改善)を参照してください。

### 古いブラウザーの場合

`addEventListener()` の引数 `options` に対応していない古いブラウザーでは、これを使用しようとすると、[機能検出](#オプションの対応の安全な検出)を適切に使用しない限り、引数 `useCapture` が使用できなくなります。

## 例

### シンプルなリスナーの追加

この例は、要素上でのマウスクリックを監視するための `addEventListener()` の使い方を紹介します。

#### HTML

```html
<table id="outside">
  <tr>
    <td id="t1">one</td>
  </tr>
  <tr>
    <td id="t2">two</td>
  </tr>
</table>
```

#### JavaScript

```js
// t2 の内容を変更する関数
function modifyText() {
  const t2 = document.getElementById("t2");
  const isNodeThree = t2.firstChild.nodeValue === "three";
  t2.firstChild.nodeValue = isNodeThree ? "two" : "three";
}

// イベントリスナーを table に追加
const el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);
```

このコードの中で、 `modifyText()` は `click` イベントのリスナーであり、`addEventListener()` を使用して登録されています。表の中のどこかをクリックすると、ハンドラーまでバブリングし、`modifyText()` が実行されます。

#### 結果

{{EmbedLiveSample('Add_a_simple_listener')}}

### 中断可能なリスナーの追加

この例では、 `addEventListener()` で {{domxref("AbortSignal")}} による中断ができるリスナーを追加する方法を実演しています。

#### HTML

```html
<table id="outside">
  <tr>
    <td id="t1">one</td>
  </tr>
  <tr>
    <td id="t2">two</td>
  </tr>
</table>
```

#### JavaScript

```js
// 中断可能なリスナーを table に追加
const controller = new AbortController();
const el = document.getElementById("outside");
el.addEventListener("click", modifyText, { signal: controller.signal });

// t2 の内容を変更する関数
function modifyText() {
  const t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue === "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild.nodeValue = "three";
    controller.abort(); // "three" になったらリスナーを削除
  }
}
```

上の例では、2 行目のコンテンツが "three" に変更された後に、 `addEventListener()` の呼び出しに渡した {{domxref("AbortController")}} から `abort()` を呼び出すように、前回のコードを変更しています。その結果、クリックイベントを待ち受けするコードがなくなったので、値は永遠に "three" のままとなります。

#### 結果

{{EmbedLiveSample('Add_an_abortable_listener')}}

### 無名関数を使用したイベントリスナー

ここで、無名関数を使用してイベントリスナーに引数を渡す方法を見てみましょう。

#### HTML

```html
<table id="outside">
  <tr>
    <td id="t1">one</td>
  </tr>
  <tr>
    <td id="t2">two</td>
  </tr>
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
el.addEventListener(
  "click",
  function () {
    modifyText("four");
  },
  false,
);
```

なお、リスナーは実際にイベントに応答する `modifyText()` 関数に引数を送信することができるコードをカプセル化している無名関数であることに注意してください。

#### 結果

{{EmbedLiveSample('Event_listener_with_anonymous_function')}}

### アロー関数を使用したイベントリスナー

この例はアロー関数記法を使用して実装された、簡単なイベントリスナーを紹介しています。

#### HTML

```html
<table id="outside">
  <tr>
    <td id="t1">one</td>
  </tr>
  <tr>
    <td id="t2">two</td>
  </tr>
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
el.addEventListener(
  "click",
  () => {
    modifyText("four");
  },
  false,
);
```

#### 結果

{{EmbedLiveSample('Event_listener_with_an_arrow_function')}}

なお、無名関数とアロー関数は似ており、違いは `this` を結び付けるかどうかです。無名関数（および従来のすべての JavaScript 関数）は固有の `this` を作成するのに対し、アロー関数はそれを含む関数の `this` を継承します。

つまり、アロー関数を使用したときは、それを含む関数の変数や定数をイベントハンドラーで利用することができます。

### options の使い方の例

#### HTML

```html
<div class="outer">
  outer, once & none-once
  <div class="middle" target="_blank">
    middle, capture & none-capture
    <a class="inner1" href="https://www.mozilla.org" target="_blank">
      inner1, パッシブ & preventDefault（許可されていない）
    </a>
    <a class="inner2" href="https://developer.mozilla.org/" target="_blank">
      inner2, パッシブ & preventDefault（新しいページを開かない）
    </a>
  </div>
</div>
<hr />
<button class="clear-button">ログをクリア</button>
<section class="demo-logs"></section>
```

#### CSS

```css
.outer,
.middle,
.inner1,
.inner2 {
  display: block;
  width: 520px;
  padding: 15px;
  margin: 15px;
  text-decoration: none;
}
.outer {
  border: 1px solid red;
  color: red;
}
.middle {
  border: 1px solid green;
  color: green;
  width: 460px;
}
.inner1,
.inner2 {
  border: 1px solid purple;
  color: purple;
  width: 400px;
}
```

```css hidden
.demo-logs {
  width: 530px;
  height: 16rem;
  background-color: #ddd;
  overflow-x: auto;
  padding: 1rem;
}
```

#### JavaScript

```js hidden
const clearBtn = document.querySelector(".clear-button");
const demoLogs = document.querySelector(".demo-logs");

function log(msg) {
  demoLogs.innerText += `${msg}\n`;
}

clearBtn.addEventListener("click", () => {
  demoLogs.innerText = "";
});
```

```js
const outer = document.querySelector(".outer");
const middle = document.querySelector(".middle");
const inner1 = document.querySelector(".inner1");
const inner2 = document.querySelector(".inner2");

const capture = {
  capture: true,
};
const noneCapture = {
  capture: false,
};
const once = {
  once: true,
};
const noneOnce = {
  once: false,
};
const passive = {
  passive: true,
};
const nonePassive = {
  passive: false,
};

outer.addEventListener("click", onceHandler, once);
outer.addEventListener("click", noneOnceHandler, noneOnce);
middle.addEventListener("click", captureHandler, capture);
middle.addEventListener("click", noneCaptureHandler, noneCapture);
inner1.addEventListener("click", passiveHandler, passive);
inner2.addEventListener("click", nonePassiveHandler, nonePassive);

function onceHandler(event) {
  log("outer、once");
}
function noneOnceHandler(event) {
  log("outer、非 once、既定値\n");
}
function captureHandler(event) {
  //event.stopImmediatePropagation();
  log("middle、capture");
}
function noneCaptureHandler(event) {
  log("middle、非 capture、既定値");
}
function passiveHandler(event) {
  // パッシブイベントリスナーの呼び出しの中では preventDefault は実行できない
  event.preventDefault();
  log("inner1、passive、新しいページを開く");
}
function nonePassiveHandler(event) {
  event.preventDefault();
  //event.stopPropagation();
  log("inner2、非 passive、既定値、新しいページを開かない");
}
```

#### 結果

外側、中央、内側のコンテナーをそれぞれクリックして、オプションがどのように動作するかを確認してください。

{{ EmbedLiveSample('options_の使い方の例', 600, 630) }}

`options` オブジェクトで特定の値を使用する前に、ユーザーのブラウザーがその値に対応していることを確認するのが良いでしょう。これらは歴史的にすべてのブラウザーがサポートしてきたわけではない追加要素であるからです。詳細は[オプションの対応の安全な検出](#オプションの対応の安全な検出)を参照してください。

### 複数のオプションを持つイベントリスナー

引数の `options` には複数のオプションを設定することができます。次の例では、2 つのオプションを設定しています。

- `passive`: ハンドラーが {{domxref("Event.preventDefault", "preventDefault()")}} を呼び出さないことを示します。
- `once`: イベントハンドラーが一度だけしか呼び出されないことを保証します。

#### HTML

```html
<button id="example-button">このボタンはクリックされていません。</button>
<button id="reset-button">
  このボタンをクリックすると、最初のボタンがリセットされます。
</button>
```

#### JavaScript

```js
const buttonToBeClicked = document.getElementById("example-button");

const resetButton = document.getElementById("reset-button");

// ボタンの初期化テキスト
const initialText = buttonToBeClicked.textContent;

// ボタンがクリックされた後の内容のテキスト
const clickedText = "このボタンがクリックされました。";

// イベントリスナーのコールバック関数は、リスナーが重複して装着されるのを防ぐため
// イベントリスナーのコールバック関数を巻き上げしています。
function eventListener() {
  buttonToBeClicked.textContent = clickedText;
}

function addListener() {
  buttonToBeClicked.addEventListener("click", eventListener, {
    passive: true,
    once: true,
  });
}

// リセットボタンがクリックされると、例えばボタンがリセットされ、
// その状態が再び更新されるようにします。
resetButton.addEventListener("click", () => {
  buttonToBeClicked.textContent = initialText;
  addListener();
});

addListener();
```

#### 結果

{{EmbedLiveSample('Event_listener_with_multiple_options')}}

### パッシブリスナーによるスクロールの性能改善

次の例は `passive` を設定した効果を示しています。テキストとチェックボックスを含む {{htmlelement("div")}} があります。

#### HTML

```html
<div id="container">
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
</div>

<div>
  <input type="checkbox" id="passive" name="passive" checked />
  <label for="passive">パッシブ</label>
</div>
```

```css hidden
#container {
  width: 150px;
  height: 200px;
  overflow: scroll;
  margin: 2rem 0;
  padding: 0.4rem;
  border: 1px solid black;
}
```

#### JavaScript

このコードは、コンテナーの {{domxref("Element/wheel_event", "wheel")}} イベントにリスナーを追加するもので、既定ではコンテナーをスクロールします。リスナーは長時間実行する処理を実行します。初期状態では、リスナーは `passive` オプションで追加され、チェックボックスがトグル切り替えされるたびに、コードは `passive` オプションをトグル切り替えします。

```js
const passive = document.querySelector("#passive");
passive.addEventListener("change", (event) => {
  container.removeEventListener("wheel", wheelHandler);
  container.addEventListener("wheel", wheelHandler, {
    passive: passive.checked,
    once: true,
  });
});

const container = document.querySelector("#container");
container.addEventListener("wheel", wheelHandler, {
  passive: true,
  once: true,
});

function wheelHandler() {
  function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
        return false;
      }
    }
    return true;
  }

  const quota = 1000000;
  const primes = [];
  const maximum = 1000000;

  while (primes.length < quota) {
    const candidate = Math.floor(Math.random() * (maximum + 1));
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }

  console.log(primes);
}
```

#### 結果

効果は次の通りです。

- 初期状態では、リスナーはパッシブであるため、ホイールでコンテナーをスクロールしようとするとすぐにスクロールします。
- 「パッシブ」のチェックを外して、ホイールを使用してコンテナーをスクロールしようとすると、コンテナーがスクロールするまでに顕著な遅延があります。

{{EmbedLiveSample("Improving scroll performance using passive listeners", 100, 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("EventTarget.removeEventListener()")}}
- [イベントの作成と起動](/ja/docs/Web/Events/Creating_and_triggering_events)
- [イベントハンドラー内での `this` の使用方法のさらに詳細な解説](https://www.quirksmode.org/js/this.html)
