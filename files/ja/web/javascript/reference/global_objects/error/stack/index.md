---
title: Error.prototype.stack
short-title: stack
slug: Web/JavaScript/Reference/Global_Objects/Error/stack
l10n:
  sourceCommit: 30c9f71e6a6cac4d894688cabf7e4b50af87cfe5
---

{{Non-standard_Header}}

> [!NOTE]
> `stack` プロパティは事実上、主要な JavaScript エンジンすべてで実装されており、[JavaScript 標準化委員会はこれを標準化しようとしています](https://github.com/tc39/proposal-error-stacks)。実装の不一致によりスタック文字列の正確な内容に依存することはできませんが、一般的に存在すると仮定し、デバッグ目的で使用できます。

**`stack`** は {{jsxref("Error")}} インスタンスの標準外のプロパティで、呼び出された関数のトレース、つまり、その呼び出し順、呼び出したファイルの行番号、呼び出した関数の引数を提供します。スタック文字列は、最後の呼び出しから最初の呼び出しへ進み、元のグローバルスコープの呼び出しまで遡ります。

## 値

文字列です。

`stack` プロパティは標準外であるため、実装によってその実装先が異なります。

- Firefox では、`Error.prototype` のアクセサープロパティです。
- Chrome および Safari では、それぞれの `Error` インスタンスのデータプロパティであり、記述子は次のとおりです。

{{js_property_attributes(1, 0, 1)}}

## 解説

それぞれの JavaScript エンジンは独自の形式でスタックトレースを出力しますが、高レベルな構造は概ね一貫しています。すべての実装では、スタック内の各行が個別の関数呼び出しを表します。エラーを直接引き起こした呼び出しは最上部に配置され、呼び出しチェーン全体を開始した呼び出しは最下部に配置されます。以下にスタックトレースの例を示します。

```js
function foo() {
  bar();
}

function bar() {
  baz();
}

function baz() {
  console.log(new Error().stack);
}

foo();
```

```plain
#### JavaScriptCore
baz@filename.js:10:24
bar@filename.js:6:6
foo@filename.js:2:6
global code@filename.js:13:4

#### SpiderMonkey
baz@filename.js:10:15
bar@filename.js:6:3
foo@filename.js:2:3
@filename.js:13:1

#### V8
Error
    at baz (filename.js:10:15)
    at bar (filename.js:6:3)
    at foo (filename.js:2:3)
    at filename.js:13:1
```

V8 は、スタックトレースをカスタマイズするための標準外の[スタックトレース API](https://v8.dev/docs/stack-trace-api) を提供しています。これには{{jsxref("Error.captureStackTrace()")}}、{{jsxref("Error.stackTraceLimit")}}、`Error.prepareStackTrace()` が含まれます。他のエンジンもこの API に様々な程度で対応していましたが、

エンジンによってこの値を設定するタイミングは異なります。ほとんどの現代のエンジンでは、{{jsxref("Error")}} オブジェクトが作成された時点で設定されます。つまり、関数内で以下の方法を使用して完全なコールスタック情報を取得できます。

```js
function foo() {
  console.log(new Error().stack);
}
```

throw したり捕捉したりしません。

スタックフレームは明示的な関数呼び出し以外にも存在します。例えば、イベントリスナー、タイムアウトジョブ、プロミスハンドラーはそれぞれ独自の呼び出しチェーンを開始します。 {{jsxref("Global_Objects/eval", "eval()")}} および {{jsxref("Function")}} コンストラクター呼び出し内のソースコードもスタックに現れます。

```js
console.log(new Function("return new Error('Function failed')")().stack);
console.log("====");
console.log(eval("new Error('eval failed')").stack);
```

```plain
#### JavaScriptCore
anonymous@
global code@filename.js:1:65
====
eval code@
eval@[native code]
global code@filename.js:3:17

#### SpiderMonkey
anonymous@filename.js line 1 > Function:1:8
@filename.js:1:65

====
@filename.js line 3 > eval:1:1
@filename.js:3:13

#### V8
Error: Function failed
    at eval (eval at <anonymous> (filename.js:1:13), <anonymous>:1:8)
    at filename.js:1:65
====
Error: eval failed
    at eval (eval at <anonymous> (filename.js:3:13), <anonymous>:1:1)
    at filename.js:3:13
```

Firefox では、`//# sourceURL` ディレクティブを使用して eval ソースに名前を付けることができます。Firefox の [eval ソースのデバッグ](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/debug_eval_sources/index.html)のドキュメントを参照してください。

## 例

### stack プロパティの使用

以下のスクリプトは、`stack` プロパティを使用してスタックトレースをブラウザーウィンドウに出力する方法を示しています。これにより、ブラウザーのスタック構造がどのように見えるかを確認できます。

```html hidden
<div id="output"></div>
```

```css hidden
#output {
  white-space: pre;
  font-family: monospace;
}
```

```js
function trace() {
  throw new Error("trace() failed");
}
function b() {
  trace();
}
function a() {
  b(3, 4, "\n\n", undefined, {});
}
try {
  a("first call, first arg");
} catch (e) {
  document.getElementById("output").textContent = e.stack;
}
```

{{EmbedLiveSample("Using_the_stack_property", "700", "200")}}

## 仕様書

仕様書に含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [TraceKit](https://github.com/csnover/TraceKit/) (GitHub)
- [stacktrace.js](https://github.com/stacktracejs/stacktrace.js) (GitHub)
- [Stack trace API](https://v8.dev/docs/stack-trace-api) (V8 docs)
