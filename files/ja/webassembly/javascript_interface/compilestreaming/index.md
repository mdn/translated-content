---
title: WebAssembly.compileStreaming()
slug: WebAssembly/JavaScript_interface/compileStreaming
l10n:
  sourceCommit: 48882b75978cef6a4fbc68a35e547b33f8012f93
---

{{WebAssemblySidebar}}

**`WebAssembly.compileStreaming()`** 関数は [`WebAssembly.Module`](/ja/docs/WebAssembly/JavaScript_interface/Module) を直接、基礎的なソースのストリームからコンパイルします。この関数はモジュールをインスタンス化する前にコンパイルする必要がある場合に役立ちます（そうでない場合は、[`WebAssembly.instantiateStreaming()`](/ja/docs/WebAssembly/JavaScript_interface/instantiateStreaming) 関数を使用してください）。

> **メモ:** 厳格な[コンテンツセキュリティポリシー (CSP)](/ja/docs/Web/HTTP/CSP) のあるウェブページでは、 WebAssembly のコンパイルやモジュールの実行がブロックされることがあります。
> WebAssembly のコンパイルと実行を許可することについての詳しい情報は、 [CSP の script-src](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) を参照してください。

## 構文

```js-nolint
WebAssembly.compileStreaming(source)
```

### 引数

- `source`
  - : ストリーム、コンパイルする .wasm モジュールのソースコードを表す [`Response`](/ja/docs/Web/API/Response) オブジェクト、またはそれで履行されるプロミスです。

### 返値

`Promise` で、コンパイルされたモジュールを表す [`WebAssembly.Module`](/ja/docs/WebAssembly/JavaScript_interface/Module) に解決します。</p>

### 例外

- `source` が [`Response`](/ja/docs/Web/API/Response) でも `Response` に解決する `Promise` でもなかった場合、プロミスは {{jsxref("TypeError")}} で拒否されます。
- コンパイルに失敗した場合、プロミスは [`WebAssembly.CompileError`](/ja/docs/WebAssembly/JavaScript_interface/CompileError) で拒否されます。
- `source` の `Promise` が拒否された場合、プロミスはエラーで拒否されます。
- `source` の `Result` にエラーがあった場合（MIME タイプが不正であるなど）、プロミスはエラーで拒否されます。

## 例

### ストリーミングのコンパイル

次の例 (Github上のデモ [compile-streaming.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/compile-streaming.html) と、[動作例](https://mdn.github.io/webassembly-examples/js-api-examples/compile-streaming.html)を参照してください) では、ソースから直接 .wasm モジュールをストリームして、 [`WebAssembly.Module`](/ja/docs/WebAssembly/JavaScript_interface/Module) オブジェクトにコンパイルしています。`compileStreaming()` 関数は [`Response`](/ja/docs/Web/API/Response) オブジェクトを渡すプロミスを受け取るので、直接 [`fetch()`](/ja/docs/Web/API/fetch) の呼び出し結果を渡すことができます。

```js
const importObject = { imports: { imported_func: (arg) => console.log(arg) } };

WebAssembly.compileStreaming(fetch("simple.wasm"))
  .then((module) => WebAssembly.instantiate(module, importObject))
  .then((instance) => instance.exports.exported_func());
```

結果として受け取ったモジュールインスタンスはその後 [`WebAssembly.instantiate()`](/ja/docs/WebAssembly/JavaScript_interface/instantiate) を使用してインスタンス化され、エクスポートされた関数が実行されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概念](/ja/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
