---
title: WebAssembly.compileStreaming()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/compileStreaming
tags:
  - API
  - JavaScript
  - Method
  - Object
  - Reference
  - WebAssembly
  - compile
  - compileStreaming
  - streaming
browser-compat: javascript.builtins.WebAssembly.compileStreaming
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/compileStreaming
---
{{JSRef}}

**`WebAssembly.compileStreaming()`** 関数は {{jsxref("WebAssembly.Module")}} を直接、基礎的なソースのストリームからコンパイルします。この関数はモジュールをインスタンス化する前にコンパイルする必要がある場合に役立ちます (そうでない場合は、{{jsxref("WebAssembly.instantiateStreaming()")}} 関数の仕様が推奨されます)。

## 構文

```js
WebAssembly.compileStreaming(source)
```

### 引数

- _source_
  - : ストリーム、コンパイルする .wasm モジュールのソースコードを表す [`Response`](/ja/docs/Web/API/Response "Response は Fetch API のインターフェイスで、リクエストのレスポンスを表します。") オブジェクトか、それを満足するプロミスです。

### 返値

`Promise` で、コンパイルされたモジュールを表す {{jsxref("WebAssembly.Module")}} に解決します。</p>

### 例外

- `bufferSource` が[型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)でない場合、 {{jsxref("TypeError")}} が発生します。
- 失敗した場合、プロミスは {{jsxref("WebAssembly.CompileError")}} をで棄却されます。

## 例

### ストリーミングのコンパイル

次の例 (Github上のデモ [compile-streaming.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/compile-streaming.html) と、[動作例](https://mdn.github.io/webassembly-examples/js-api-examples/compile-streaming.html)を参照してください) では、ソースから直接 .wasm モジュールをストリームして、 {{jsxref("WebAssembly.Module")}} オブジェクトにコンパイルしています。`compileStreaming()`  関数は [`Response`](/ja/docs/Web/API/Response "Response は Fetch API のインターフェイスで、リクエストのレスポンスを表します。") オブジェクトを渡すプロミスを受け取るので、直接 {{domxref("WindowOrWorkerGlobalScope.fetch()")}} の呼び出し結果を渡すことができます。

```js
var importObject = { imports: { imported_func: arg => console.log(arg) } };

WebAssembly.compileStreaming(fetch('simple.wasm'))
.then(module => WebAssembly.instantiate(module, importObject))
.then(instance => instance.exports.exported_func());
```

結果として受け取ったモジュールインスタンスはその後 {{jsxref("WebAssembly.instantiate()")}} を使用してインスタンス化され、エクスポートされた関数が実行されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概念](/ja/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
