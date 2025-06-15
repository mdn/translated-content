---
title: "Window: setInterval() メソッド"
short-title: setInterval()
slug: Web/API/Window/setInterval
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{APIRef("HTML DOM")}}

**`setInterval()`** は {{domxref("Window")}} インターフェイスのメソッドで、一定の間隔を置いて関数やコードスニペットを繰り返し呼び出します。

## 構文

```js-nolint
setInterval(code)
setInterval(code, delay)

setInterval(func)
setInterval(func, delay)
setInterval(func, delay, arg1)
setInterval(func, delay, arg1, arg2)
setInterval(func, delay, arg1, arg2, /* …, */ argN)
```

### 引数

- `func`
  - : `delay` ミリ秒が経過するたびに実行する{{jsxref("function", "関数")}}です。最初の実行は `delay` ミリ秒後に行われます。
- `code`
  - : 関数の代わりに文字列を含める構文も許容されており、 `delay` ミリ秒が経過するたびに文字列をコンパイルして実行します。
    この構文は**推奨しません**。{{jsxref("Global_Objects/eval", "eval()")}} の使用にセキュリティ上のリスクがあるのと同じ理由です。
- `delay` {{optional_inline}}
  - : 指定した関数またはコードを実行する前にタイマーが待つべき時間をミリ秒 (1/1000 秒) 単位で指定します。指定されなかった場合の既定値は 0 です。
    `delay` 値で許される範囲についての詳細は、[待ち時間の制約](#待ち時間の制約)をご覧ください。
- `arg1`, …, `argN` {{optional_inline}}
  - : タイマーが満了したときに、 _func_ で指定した関数に渡す追加の引数です。

### 返値

`setInterval()` メソッドは、呼び出しによって作成されたインターバルタイマーを一意に識別する正の整数（通常は 1 から 2,147,483,647 の範囲）を返します。この識別子は、よく「インターバル ID」と呼ばれ、 {{domxref("Window.clearInterval", "clearInterval()")}} に渡すことで、指定した関数の反復実行を停止することができます。

同じグローバル環境（特定のウィンドウやワーカーなど）では、元のタイマーがアクティブである限り、インターバル ID は確実に一意となりあり、新しいインターバルタイマーには再利用されません。ただし、グローバル環境が異なると、それぞれ独立したインターバル ID のプールが管理されます。

`setInterval()` と {{domxref("Window.setTimeout", "setTimeout()")}} は同じ ID プールを共有しており、 `clearInterval()` と {{domxref("Window.clearTimeout", "clearTimeout()")}} は技術的に入れ替えて使用できることに注意してください。
ただし明確さのために、コードを整備するときは混乱を避けるため、常に一致させるようにするべきです。

> [!NOTE]
> 引数 `delay` は、符号付き 32 ビット整数に変換されます。
> IDL における符号付き整数の定義によって、`delay` は事実上 2147483647ms、およそ 24.8 日に制限されます。

## 例

### 例 1: 基本的な構文

以下の例は、 `setInterval()` の基本的な構文を示します。

```js
const intervalID = setInterval(myCallback, 500, "Parameter 1", "Parameter 2");

function myCallback(a, b) {
  // ここにコードを記述します。
  // 引数は完全に省略可能です。
  console.log(a);
  console.log(b);
}
```

### 例 2: 2 つの色を切り替える

以下の例は停止ボタンを押すまで、1 秒おきに `flashtext()` 関数を呼び出します。

#### HTML

```html
<div id="my_box">
  <h3>Hello World</h3>
</div>
<button id="start">開始</button>
<button id="stop">停止</button>
```

#### CSS

```css
.go {
  color: green;
}
.stop {
  color: red;
}
```

#### JavaScript

```js
// intervalID を格納する変数
let intervalId;

function changeColor() {
  // 既にインターバルがセットアップされているかどうかを検査
  intervalId ??= setInterval(flashText, 1000);
}

function flashText() {
  const oElem = document.getElementById("my_box");
  oElem.className = oElem.className === "go" ? "stop" : "go";
}

function stopTextColor() {
  clearInterval(intervalId);
  // 変数から intervalID を解放
  intervalId = null;
}

document.getElementById("start").addEventListener("click", changeColor);
document.getElementById("stop").addEventListener("click", stopTextColor);
```

#### 結果

{{EmbedLiveSample("Example_2:_Alternating_two_colors")}}

## "this" 問題

`setInterval()` に（もっと言うと他のどんな関数でも）メソッドを渡すと、間違った [`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) の値で呼び出されることがあります。
この問題は [JavaScript リファレンス](/ja/docs/Web/JavaScript/Reference/Operators/this#コールバック)で詳しく説明しています。

### 解説

`setInterval()` によって実行されるコードは、呼び出し元とは別の実行コンテキスト内で実行されます。その結果、呼び出された関数の [`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) キーワードは `window` （または `global`）オブジェクトに設定されます。これは `setTimeout` を呼び出した関数とは `this` の値が異なります。以下の例をご覧ください（ここでは `setInterval()` ではなく `setTimeout()` を使用していますが、どちらのタイマーでも問題は同じです）。

```js
myArray = ["zero", "one", "two"];

myArray.myMethod = function (sProperty) {
  alert(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // "zero,one,two" と表示
myArray.myMethod(1); // "one" と表示
setTimeout(myArray.myMethod, 1000); // "[object Window]" と 1 秒後に表示
setTimeout(myArray.myMethod, 1500, "1"); // "undefined" と 1.5 秒後に表示

// 'this' オブジェクトを .call で渡しても動作しません。
// これは、 myArray.myMethod 内の this の値を変更したいのに、
// setTimeout 自体の中で this の値が変更されてしまうからです。
// 実際、setTimeout のコードはこれがウィンドウオブジェクトであることを期待しているため、エラーになります。
setTimeout.call(myArray, myArray.myMethod, 2000); // エラー: "NS_ERROR_XPC_BAD_OP_ON_WN_PROTO: Illegal operation on WrappedNative prototype object"
setTimeout.call(myArray, myArray.myMethod, 2500, 2); // 同じエラー
```

この例でわかるとおり、旧来の JavaScript でコールバック関数に `this` オブジェクトを渡す方法はありません。

### 取りうる解決策

最近の JavaScript ランタイムはすべて（ブラウザーとそそれ以外を含め）、[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)と `this` 表記と組み合わせると、 `myArray` メソッドの内部にいる場合は `setInterval(() => this.myMethod())` と記述することが可能です。

IE に対応する必要がある場合は、[`Function.prototype.bind()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) メソッドを使用すると、与えられた関数へのすべての呼び出しに対して `this` として使用する値を指定することができます。これにより、関数が呼び出されたときのコンテキストによって `this` が何であるかが不明確な問題を簡単に回避することができます。

## 使用上のメモ

`setInterval()` 関数は一般に、アニメーションのように何度も実行される関数のために待ち時間を設定するのに使われます。 {{domxref("Window.clearInterval", "clearInterval()")}} を使ってインターバルを取り消すことができます。

指定時間後に一度だけ関数を呼び出したい場合には、 {{domxref("Window.setTimeout", "setTimeout()")}} を使用してください。

### 待ち時間の制約

`setInterval()` のコールバックは順番に `setInterval()` を呼び出し、最初のインターバルがまだ進行中であっても、別のインターバルを開始させることができます。このことがパフォーマンスに与える潜在的な影響を軽減するために、インターバルが 5 レベルを超えてネストされると、ブラウザーは自動的にインターバルの最小値として 4 ミリ秒を強制するようになります。深くネストされた `setInterval()` の呼び出しで 4ms 未満の値を指定しようとすると、 4ms に固定されます。

ブラウザーは、状況によってはさらに厳しい最小間隔値を強制するかもしれませんが、これは一般的なことではありません。また、コールバックの呼び出しの間に経過する実際の時間は、与えられた `delay` よりも長いかもしれないことに注意してください。例については[待ち時間が指定値より長い理由](/ja/docs/Web/API/Window/setTimeout#待ち時間が指定値より長い理由)を参照してください。

### 実行時間をインターバルより確実に短くする

ロジックの実行時間がインターバル時間より長くなる可能性がある場合は、{{domxref("Window.setTimeout", "setTimeout()")}} を使用して名前付き関数を再帰的に呼び出すことを推奨します。例えば 5 秒おきにリモートサーバーへ接続するために `setInterval()` を使用する場合、ネットワークの遅延やサーバーの応答がないなどさまざまな問題で、割り当てられた時間内にリクエストが完了しない可能性があります。そのため、必ずしも順番どおりには返らない XHR リクエストがキュー内にあることに気づくかもしれません。

この場合は、再帰的な `setTimeout()` のパターンを推奨します。

```js
(function loop() {
  setTimeout(() => {
    // Your logic here

    loop();
  }, delay);
})();
```

このコードスニペットでは、名前付き関数 `loop()` を宣言して直ちに実行します。`loop()` はロジックが完全に実行された後に、内部の `setTimeout()` によって再帰呼び出しされます。このパターンは一定の間隔で呼び出すことが保証されませんが、再帰呼び出しの前に前の実行が完了することが保証されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`setInterval` のポリフィルで、コールバックに引数を渡すことができるもの (`core-js`)](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- {{domxref("Window.clearInterval()")}}
- {{domxref("WorkerGlobalScope.setInterval()")}}
- {{domxref("Window.setTimeout()")}}
- {{domxref("Window.requestAnimationFrame()")}}
