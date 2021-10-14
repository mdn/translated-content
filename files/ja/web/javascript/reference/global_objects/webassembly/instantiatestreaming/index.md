---
title: WebAssembly.instantiateStreaming()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming
tags:
  - API
  - JavaScript
  - Method
  - Object
  - Reference
  - WebAssembly
  - instantiate
  - instantiateStreaming
  - streaming
browser-compat: javascript.builtins.WebAssembly.instantiateStreaming
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming
---
{{JSRef}}

**`WebAssembly.instantiateStreaming()`** 関数は、ソースのストリームから直接 WebAssembly モジュールをコンパイルしてインスタンス化します。これは、 wasm コードをロードするための最も効率的で最適な方法です。

```js
WebAssembly.instantiateStreaming(source, importObject)
```

### 引数

- _source_
  - : [`Response`](/ja/docs/Web/API/Response "Response は Fetch API のインターフェースで、リクエストに対するレスポンスを表します。") オブジェクト、またはそれで解決するプロミスで、コンパイルしてインスタンス化する .wasm モジュールのソースを表します。
- _importObject_ {{optional_inline}}
  - : 関数や {{jsxref("WebAssembly.Memory")}} オブジェクトなど、新しく生成される `Instance` にインポートされる値を持つオブジェクト。コンパイルされたモジュールの宣言されたインポートそれぞれに対応するプロパティが存在する必要があります。そうでない場合、[`WebAssembly.LinkError`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/LinkError) が発生します。

### 返値

`Promise` で、次の 2 つのフィールドを持つ `ResultObject` で解決します。

- `module`: コンパイルされた {{jsxref("WebAssembly.Module")}} オブジェクト。この `Module` は再度インスタンス化することや、[postMessage()](/ja/docs/Web/API/Worker/postMessage) 経由で共有することができます。
- `instance`: {{jsxref("WebAssembly.Instance")}} オブジェクトで、すべての[エクスポートされた WebAssembly 関数](/ja/docs/WebAssembly/Exported_functions)を含みます。

### 例外

- いずれかの引数が正しい型または構造でない場合、{{jsxref("TypeError")}} が発生します。
- 失敗した場合、プロミスは失敗の原因に応じて {{jsxref("WebAssembly.CompileError")}}、{{jsxref("WebAssembly.LinkError")}}、{{jsxref("WebAssembly.RuntimeError")}} をもって拒否されます。

## 例

### ストリーミングのインスタンス化

次の例 (Github上のデモ [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/instantiate-streaming.html) と、[動作例](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)を参照してください) では、ソースから .wasm モジュールを直接コンパイルしてインスタンス化しています。プロミスは `ResultObject` で充足されます。`instantiateStreaming()` 関数は [`Response`](/ja/docs/Web/API/Response "Response は Fetch API のインターフェースで、リクエストに対するレスポンスを表します。") オブジェクトを渡すプロミスを受け取るので、直接 [`WindowOrWorkerGlobalScope.fetch()`](/ja/docs/Web/API/WindowOrWorkerGlobalScope/fetch "WindowOrWorkerGlobalScope ミックスインの fetch() メソッドは、ネットワークからリソースをフェッチするプロセスを開始し、レスポンスが利用可能になると履行される約束を返します。") 呼び出し結果を渡すことができます。

```js
var importObject = { imports: { imported_func: arg => console.log(arg) } };

WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
.then(obj => obj.instance.exports.exported_func());
```

最後に `ResultObject` が持つ instance メンバーにアクセスして、エクスポートされた関数を実行しています。

> **Note:** これを動作するようにするには、サーバが `.wasm` ファイルを `application/wasm` の MIME タイプで返す必要があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概念](/ja/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
