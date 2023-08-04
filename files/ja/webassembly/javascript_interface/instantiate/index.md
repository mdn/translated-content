---
title: WebAssembly.instantiate()
slug: WebAssembly/JavaScript_interface/instantiate
---

{{WebAssemblySidebar}}

**`WebAssembly.instantiate()`** 関数は WebAssembly コードをコンパイルおよびインスタンス化することができます。この関数は 2 つのオーバーロードを持ちます。

- 第一のオーバーロードは、 [型付き配列](/ja/docs/Web/JavaScript/Typed_arrays) または {{jsxref("ArrayBuffer")}} で表現された WebAssembly バイナリコードを受け取り、そして、コンパイルとインスタンス化の両方を 1 ステップで行います。返された `Promise` は解決時にコンパイルされた {{jsxref("WebAssembly.Module")}} と最初の {{jsxref("WebAssembly.Instance")}} を渡します。
- 第二のオーバーロードは、すでにコンパイルされた {{jsxref("WebAssembly.Module")}} を受け取り、解決時にその `Module` の `Instance` を渡す `Promise` を返します。このオーバーロードは、すでに `Module` がコンパイル済みの場合に有用です。

> **警告:** このメソッドは wasm モジュールの読み込みとインスタンス化に最も効率的な方法ではありません。可能であれば、代わりにもっと新しい {{jsxref("WebAssembly.instantiateStreaming()")}} メソッドを使用すれば、生のバイトコードから直接モジュールの読み込み、コンパイル、インスタンス化を 1 ステップで行うことができ、 {{jsxref("ArrayBuffer")}} へ変換する必要がありません。

## 構文

### 第一のオーバーロード — wasm バイナリコード

```
Promise<ResultObject> WebAssembly.instantiate(bufferSource, importObject);
```

#### 引数

- _bufferSource_
  - : コンパイルする .wasm モジュールを含む [型付き配列](/ja/docs/Web/JavaScript/Typed_arrays) または {{jsxref("ArrayBuffer")}}。
- _importObject_ {{optional_inline}}
  - : 関数や {{jsxref("WebAssembly.Memory")}} オブジェクトなどの新しく生成される `Instance` にインポートされる値を持つオブジェクト。モジュール内で宣言されたインポートそれぞれに対応するプロパティが存在する必要があります。そうでない場合、 {{jsxref("WebAssembly.LinkError")}} がスローされます。

#### 返値

解決時に次の 2 つのフィールドを持つ `ResultObject` を渡す `Promise`。

- `module`: コンパイルされた {{jsxref("WebAssembly.Module")}} オブジェクト。この `Module` は再度インスタンス化することや、 {{domxref("Worker.postMessage", "postMessage()")}} 経由で共有したり、 [IndexedDB にキャッシュ](/ja/docs/WebAssembly/Caching_modules)することができます。
- `instance`: {{jsxref("WebAssembly.Instance")}} オブジェクトで、すべての [エクスポートされた WebAssembly 関数](/ja/docs/WebAssembly/Exported_functions) を含む。

#### 例外

- いずれかの引数が正しい型、または構造でない場合、 {{jsxref("TypeError")}} がスローされます。
- 失敗した場合、プロミスは失敗の原因に応じて {{jsxref("WebAssembly.CompileError")}}, {{jsxref("WebAssembly.LinkError")}}, {{jsxref("WebAssembly.RuntimeError")}} をもって棄却されます。

### 第二のオーバーロード — モジュールオブジェクトのインスタンスを取る

```
Promise<WebAssembly.Instance> WebAssembly.instantiate(module, importObject);
```

#### 引数

- _module_
  - : インスタンス化する {{jsxref("WebAssembly.Module")}} オブジェクト。
- _importObject_ {{optional_inline}}
  - : 関数や {{jsxref("WebAssembly.Memory")}} オブジェクトなどの新しく生成される `Instance` にインポートされる値を含むオブジェクト。宣言されたモジュールのインポートごとに 1 つの一致するプロパティが存在する必要があります。そうでない場合、 {{jsxref("WebAssembly.LinkError")}} がスローされます。

#### 返値

解決時に {{jsxref("WebAssembly.Instance")}} オブジェクトを渡す `Promise` 。

#### 例外

- いずれかの引数が正しくない型や構造のオブジェクトの場合、 {{jsxref("TypeError")}} がスローされます。
- 失敗した場合、プロミスは失敗の原因に応じて {{jsxref("WebAssembly.CompileError")}}, {{jsxref("WebAssembly.LinkError")}}, {{jsxref("WebAssembly.RuntimeError")}} をもって棄却されます。

## 例

**注**: おそらく多くの場合は {{jsxref("WebAssembly.instantiateStreaming()")}} を使用したほうが、 `instantiate()` よりも効率的でしょう。

### 第一のオーバーロードの例

fetch を使用して WebAssembly バイトコードを読み込んだ後、 {{jsxref("WebAssembly.instantiate()")}} 関数を使用してモジュールをコンパイル、インスタンス化し、その処理中に JavaScript の関数を WebAssembly モジュールにインポートします。次に、 `Instance` によってエクスポートされた[エクスポート済み WebAssembly 関数](/ja/docs/WebAssembly/Exported_functions)を呼び出します。

```js
var importObject = {
  imports: {
    imported_func: function (arg) {
      console.log(arg);
    },
  },
};

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((result) => result.instance.exports.exported_func());
```

> **メモ:** この例は Github 上の [index.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index.html) でも見ることができます ([動作例](https://mdn.github.io/webassembly-examples/js-api-examples/))。

### 第二のオーバーロードの例

次の例 (GitHub 上の [index-compile.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index-compile.html) デモを参照、 そして [動作例](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html) も確認してください) では、読み込まれた simple.wasm バイトコードを {{jsxref("WebAssembly.compileStreaming()")}} メソッドを使用してコンパイルし、 {{domxref("Worker.postMessage", "postMessage()")}} を使用して[ワーカー](/ja/docs/Web/API/Web_Workers_API)に送信しています。

```js
var worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) =>
  worker.postMessage(mod),
);
```

ワーカーでは (`wasm_worker.jsを参照`) モジュールで使用するためのインポートオブジェクトを定義して、メインスレッドからモジュールを受け取るイベントハンドラーを設定し、 {{jsxref("WebAssembly.instantiate()")}} メソッドを使用してインスタンスを生成し、エクスポートされた関数を呼び出します。

```js
var importObject = {
  imports: {
    imported_func: function (arg) {
      console.log(arg);
    },
  },
};

onmessage = function (e) {
  console.log("module received from main thread");
  var mod = e.data;

  WebAssembly.instantiate(mod, importObject).then(function (instance) {
    instance.exports.exported_func();
  });
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.WebAssembly.instantiate")}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概念](/ja/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
