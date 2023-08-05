---
title: WebAssembly.instantiateStreaming()
slug: WebAssembly/JavaScript_interface/instantiateStreaming
l10n:
  sourceCommit: d606f8dc936dcf766e1540f687eba8dc9dd9ed13
---

{{WebAssemblySidebar}}

**`WebAssembly.instantiateStreaming()`** 関数は、ソースのストリームから直接 WebAssembly モジュールをコンパイルしてインスタンス化します。これは、 wasm コードをロードするための最も効率的で最適な方法です。

> **メモ:** 厳格な[コンテンツセキュリティポリシー (CSP)](/ja/docs/Web/HTTP/CSP) のあるウェブページでは、 WebAssembly のコンパイルやモジュールの実行がブロックされることがあります。
> WebAssembly のコンパイルと実行を許可することについての詳しい情報は、 [CSP の script-src](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) を参照してください。

## 構文

```js-nolint
WebAssembly.instantiateStreaming(source, importObject)
```

### 引数

- `source`
  - : [`Response`](/ja/docs/Web/API/Response) オブジェクト、またはそれで解決するプロミスで、コンパイルしてインスタンス化する .wasm モジュールのソースを表します。
- `importObject` {{optional_inline}}
  - : 関数や [`WebAssembly.Memory`](/ja/docs/WebAssembly/JavaScript_interface/Memory) オブジェクトなど、新しく生成される `Instance` にインポートされる値を持つオブジェクト。コンパイルされたモジュールの宣言されたインポートそれぞれに対応するプロパティが存在する必要があります。そうでない場合、[`WebAssembly.LinkError`](/ja/docs/WebAssembly/JavaScript_interface/LinkError) が発生します。

### 返値

`Promise` で、次の 2 つのフィールドを持つ `ResultObject` で解決します。

- `module`: コンパイルされた [`WebAssembly.Module`](/ja/docs/WebAssembly/JavaScript_interface/Module) オブジェクト。この `Module` は再度インスタンス化することや、[postMessage()](/ja/docs/Web/API/Worker/postMessage) 経由で共有することができます。
- `instance`: [`WebAssembly.Instance`](/ja/docs/WebAssembly/JavaScript_interface/Instance) オブジェクトで、すべての[エクスポートされた WebAssembly 関数](/ja/docs/WebAssembly/Exported_functions)を含みます。

### 例外

- いずれかの引数が正しい型または構造でない場合、{{jsxref("TypeError")}} が発生します。
- 失敗した場合、プロミスは失敗の原因に応じて [`WebAssembly.CompileError`](/ja/docs/WebAssembly/JavaScript_interface/CompileError)、[`WebAssembly.LinkError`](/ja/docs/WebAssembly/JavaScript_interface/LinkError)、[`WebAssembly.RuntimeError`](/ja/docs/WebAssembly/JavaScript_interface/RuntimeError) をもって拒否されます。

## 例

### ストリーミングのインスタンス化

次の例 (Github上のデモ [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/instantiate-streaming.html) と、[動作例](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)を参照してください) では、ソースから .wasm モジュールを直接コンパイルしてインスタンス化しています。このプロミスは `ResultObject` で履行されます。 `instantiateStreaming()` 関数は [`Response`](/ja/docs/Web/API/Response) オブジェクトに解決するプロミスを受け取るので、直接 [`fetch()`](/ja/docs/Web/API/fetch) の呼び出し結果を渡すことができます。

```js
const importObject = { imports: { imported_func: (arg) => console.log(arg) } };

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

最後に `ResultObject` が持つ instance メンバーにアクセスして、エクスポートされた関数を実行しています。

> **メモ:** これを動作するようにするには、サーバが `.wasm` ファイルを `application/wasm` の MIME タイプで返す必要があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概念](/ja/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
