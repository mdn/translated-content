---
title: "Window: setInterval() メソッド"
short-title: setInterval()
slug: Web/API/Window/setInterval
l10n:
  sourceCommit: 051d02b402b7f76c2078b12283aa18318c34c38b
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> `code` 引数が使用された場合、このメソッドはその値を JavaScript として動的に実行します。
> このような API は[インジェクションシンク](/ja/docs/Web/API/Trusted_Types_API#概念と使い方)と呼ばれ、[クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS)攻撃の攻撃経路となる可能性があります。
>
> このリスクを軽減するには、文字列の代わりに常に {{domxref("TrustedScript")}} オブジェクトを代入し、[信頼型の強制](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)を行うようにしてください。
> 情報については、[セキュリティ上の注意事項](#セキュリティ上の注意事項)を参照してください。

**`setInterval()`** は {{domxref("Window")}} インターフェイスのメソッドで、一定の間隔を置いて関数やコードスニペットを繰り返し呼び出します。

## 構文

```js-nolint
setInterval(code)
setInterval(code, delay)

setInterval(func)
setInterval(func, delay)
setInterval(func, delay, param1)
setInterval(func, delay, param1, param2)
setInterval(func, delay, param1, param2, /* …, */ paramN)
```

### 引数

- `func`
  - : `delay` ミリ秒が経過するたびに実行する{{jsxref("Function", "関数")}}です。
    最初の実行は `delay` ミリ秒後に行われます。
- `code`
  - : {{domxref("TrustedScript")}} または、コンパイルされ、`delay` ミリ秒が経過するたびに実行される任意のコードの文字列。
    これは関数を渡す代わりに使用できますが、{{jsxref("Global_Objects/eval", "eval()")}} の使用がセキュリティリスクとなるのと同じ理由から、推奨されません。
- `delay` {{optional_inline}}
  - : 指定した関数またはコードを実行する前にタイマーが待つべき時間をミリ秒 (1/1000 秒) 単位で指定します。指定されなかった場合のデフォルト値は 0 です。
    指定しなかった場合は、デフォルトで 0 になります。
    `delay` 値で許される範囲についての詳細は、[待ち時間の制約](#待ち時間の制約)をご覧ください。
- `param1`, …, `paramN` {{optional_inline}}
  - : タイマーが満了したときに、_func_ で指定された関数に渡される追加の引数です。

### 返値

この呼び出しによって作成されたインターバルタイマーを一意に識別する正の整数（通常は 1 から 2,147,483,647 の範囲内）。

この識別子は、よく「インターバル ID」と呼ばれ、 {{domxref("Window.clearInterval", "clearInterval()")}} に渡すことで、指定した関数の反復実行を停止することができます。

### 例外

- {{jsxref("SyntaxError")}}
  - : `code` がスクリプトとして解釈できません。
- {{jsxref("TypeError")}}
  - : [信頼型](/ja/docs/Web/API/Trusted_Types_API)が [CSP によって強制されている](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)場合で、かつデフォルトのポリシーが定義されていないときに、`code` 引数が文字列に設定されていると、この例外が発生します。
    また、第一引数が対応している型（関数、文字列、`TrustedScript`）のいずれでもない場合にも、この例外が発生します。

## 解説

`setInterval()` 関数は、アニメーションなど、繰り返し実行される関数の実行間隔を設定するためによく使用されます。
{{domxref("Window.setTimeout", "setTimeout()")}} を使用すると、このインターバルをキャンセルできます。

指定した待ち時間の後に関数を 1 回だけ呼び出したい場合は、{{domxref("Window.setTimeout", "setTimeout()")}} を使用してください。

### 待ち時間に関する制限

インターバルは入れ子にすることが可能です。つまり、`setInterval()` のコールバック関数から、たとえ最初のインターバルがまだ実行中の状態であっても、さらに `setInterval()` を呼び出して別のインターバルを始動させることができます。
これがパフォーマンスに及ぼす可能性のある影響を軽減するため、インターバルの入れ子が 5 レベルを超えると、ブラウザーは自動的にインターバルの最小値を 4 ms に制限します。
深く入れ子になったされた `setInterval()` の呼び出しで 4 ms 未満の値を指定しようとすると、その値は 4 ms に固定されます。

状況によっては、ブラウザーが間隔の最小値に対してさらに厳しい制限を課すことがありますが、これは一般的なことではありません。
また、コールバックの呼び出し間隔として指定された `delay` よりも、実際に経過する時間が長くなる場合がある点にも注意してください。例については、[待ち時間が指定値より長い理由](/ja/docs/Web/API/Window/setTimeout#待ち時間が指定値より長い理由)を参照してください。

> [!NOTE]
> `delay` 引数は符号付き 32 ビット整数に変換されるため、その値は 2147483647 ミリ秒、つまりおよそ 24.8 日までに制限されます。

### インターバル ID は `setTimeout()` と共有される

このメソッドは、呼び出しによって作成されたインターバルタイマーを一意に識別する識別子を返します。
この識別子は、よく「インターバル ID」と呼ばれ、 {{domxref("Window.clearInterval", "clearInterval()")}} に渡すことで、指定した関数の反復実行を停止することができます。

同じグローバル環境（特定のウィンドウやワーカーなど）では、元のタイマーがアクティブである限り、インターバル ID は確実に一意となりあり、新しいインターバルタイマーには再利用されません。
ただし、グローバル環境が異なると、それぞれ独立したインターバル ID のプールが管理されます。

`setInterval()` と {{domxref("Window.setTimeout", "setTimeout()")}} は同じ ID プールを共有しており、 `clearInterval()` と {{domxref("Window.clearTimeout", "clearTimeout()")}} は技術的に入れ替えて使用できることに注意してください。
ただし明確さのために、コードを整備するときは混乱を避けるため、常に一致させるようにするべきです。

### 実行時間を実行間隔の頻度よりも短く保つ

ロジックの実行に間隔時間よりも長くかかる可能性がある場合は、{{domxref("Window.setTimeout", "setTimeout()")}} を使用して、名前付き関数を再帰的に呼び出すことをお勧めします。
例えば、`setInterval()` を使用して 5 秒ごとにリモートサーバーをポーリングする場合、ネットワークの遅延、サーバーの応答停止、その他のさまざまな課題により、リクエストが割り当てられた時間内に完了しない可能性があります。
そのため、キューに蓄積された XHR リクエストが必ずしも順番通りに返ってこないという状況に直面する可能性があります。

このような場合、再帰的な `setTimeout()` パターンを使用することを推奨します。

```js
(function loop() {
  setTimeout(() => {
    // Your logic here

    loop();
  }, delay);
})();
```

上記のコードスニペットでは、名前付き関数 `loop()` が宣言され、直ちに実行されます。
`loop()` は、ロジックの実行が完了した後、`setTimeout()` 内で再帰的に呼び出されます。
このパターンでは、一定の間隔での実行は保証されませんが、再帰が行われる前に前回の処理が完了していることは保証されます。

### 関数はグローバルの `this` と共に呼び出される

`setInterval()` に渡された関数は、[`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) の参照を決定する際に、通常の関数呼び出しの意味論に従って実行されます。
この問題については、[JavaScript リファレンス](/ja/docs/Web/JavaScript/Reference/Operators/this#callbacks) で詳しく説明されています。

アロー関数の場合、`this` のコンテキストは [`globalThis`](/ja/docs/Web/JavaScript/Reference/Global_Objects/globalThis) オブジェクト（ブラウザーでは [`window`](/ja/docs/Web/API/Window/window) の別名）に設定されます。

次の例は、これが予期せぬ動作を引き起こす可能性があることを示しています。ここでは、メソッド `counter.count` を `setInterval()` に直接渡すと、`this` のコンテキストが失われ、`Counter` インスタンスではなくグローバルオブジェクトに対してメソッドが呼び出されてしまいます。その結果、`count` メソッドが `this` にアクセスしようとした際に `TypeError` が発生します。

```js
class Counter {
  constructor() {
    this.data = new Map();
  }

  count(item) {
    this.data.set(item, (this.data.get(item) || 0) + 1);
  }
}

const counter = new Counter();

counter.count("foo"); // "foo" をマップに正常に追加しました
setInterval(counter.count, 1000, "bar");
// TypeError: Cannot read properties of undefined (reading 'set')
```

この問題を回避するには、`setInterval` に渡される関数が正しい `this` コンテキストを持つようにする必要があります。これを行う主な方法は 3 つあります。

1. `this` コンテキストを明示的に指定したい場合は、メソッドを直接渡すのではなく、正しいコンテキストでメソッドを明示的に呼び出す別の無名関数でメソッド呼び出しをラップします。

   ```js
   setInterval(() => counter.count("bar"), 1000);
   setInterval(function () {
     counter.count("bar");
   }, 1000);
   ```

2. `setInterval()` を呼び出すコードの `this` コンテキストを使用したい場合は、常にアロー関数を使用します。アロー関数は、外側のスコープの `this` コンテキストを継承します。

   ```js example-bad
   class Counter {
     // …
     repeatedCount(item) {
       // 誤: コールバック内では `this` のコンテキストが失われる
       setInterval(function () {
         this.data.set(item, (this.data.get(item) || 0) + 1);
       }, 1000);
     }
   }
   ```

   ```js example-good
   class Counter {
     // …
     repeatedCount(item) {
       // 正: アロー関数は、`repeatedCount()` の `this` コンテキストを継承する
       setInterval(() => {
         this.data.set(item, (this.data.get(item) || 0) + 1);
       }, 1000);
     }
   }
   ```

3. 余分な関数ラッパー（メモリー使用量を増加させる）を避けることができ、かつ `this` コンテキストを明示的に指定したい場合は、[`Function.prototype.bind()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) メソッドを使用することで、正しい `this` コンテキストを持つ新しい関数を生成することができます。

   ```js
   setInterval(counter.count.bind(counter), 1000, "bar");
   ```

### セキュリティ上の注意事項

このメソッドを使用すると、`code` 引数で渡された任意の入力を実行することができます。
この入力がユーザーから指定された、安全性が保証されていない文字列である場合、これは [クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS) 攻撃の攻撃経路となる可能性があります。

例えば、次のコードは、`setInterval()` がユーザーから指定された `untrustedCode` を実行してしまう可能性があることを示しています。

```js example-bad
const untrustedCode = "alert('Potentially evil code!');";
const id = setInterval(untrustedCode, 1000);
```

[コンテンツセキュリティポリシー (CSP)](/ja/docs/Web/HTTP/Guides/CSP) で [`script-src`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) または [`default-src`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) を指定しているウェブサイトでは、デフォルトでそのようなコードの実行が阻止されます。
CSP で [`unsafe-eval`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) を指定することで `setInterval()` の実行をすることができるのですが、これは CSP の主要な保護機能の 1 つを無効にするため、安全ではありません。

CSP ガイドの[インライン JavaScript](/ja/docs/Web/HTTP/Guides/CSP#インライン_javascript) を参照してください。

どうしても `setInterval()` を通じてスクリプトを実行しなければならない場合は、文字列の代わりに常に {{domxref("TrustedScript")}} オブジェクトを代入することで、これらの問題を軽減できます。また、[信頼型の強制](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)を行い、[`require-trusted-types-for`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) を CSP ディレクティブとして使用することで、これらの問題を軽減できます。
これにより、入力が確実に変換関数を通過するようになります。

`setInterval()` を実行することができるようにするには、CSP の `script-src` ディレクティブに [`trusted-types-eval` キーワード](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) を追加で指定します。
これは `unsafe-eval` と同様に機能しますが、信頼型が有効になっている場合にのみメソッドの評価を許可します（`unsafe-eval` を使用した場合、信頼型に対応していないブラウザーでも実行が許可されてしまいます）。

例えば、サイトに必要な CSP は次のような形になるでしょう。

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

変換関数の動作は、ユーザーが提供するスクリプトが要求される特定の用途によって異なります。
可能であれば、実行を許可するスクリプトを、実行しても安全だと判断したコードに厳密に限定すべきです。
それが不可能な場合は、指定された文字列内の特定の関数の使用を許可またはブロックすることもあります。

## 例

これらの例では簡潔さを重視し、信頼型の使用は省略していることに注意してください。
期待される手法を示すコードについては、`eval()` における [`TrustedScript` の使用](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval#using_trustedscript) を参照してください。

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
