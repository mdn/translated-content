---
title: WebAssembly.Module
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module
tags:
  - Class
  - JavaScript
  - Module
  - Reference
  - WebAssembly
browser-compat: javascript.builtins.WebAssembly.Module
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module
---
{{JSRef}}

**`WebAssembly.Module`** オブジェクトには、ブラウザーでコンパイルされたステートレスな WebAssembly コードが含まれています。これを効率的に[ワーカー間で共有](/ja/docs/Web/API/Worker/postMessage)したり、複数回インスタンス化したりすることができます。

## コンストラクター

- {{jsxref("Global_Objects/WebAssembly/Module/Module", "WebAssembly.Module()")}}
  - : 新しい `Module` オブジェクトを生成します。

## 静的プロパティ

- {{jsxref("Global_Objects/WebAssembly/Module/customSections", "WebAssembly.Module.customSections()")}}
  - : `Module` と文字列を指定すると、モジュール内の与えられた文字列を名前に持つすべてのカスタムセクションの内容を返します。
- {{jsxref("Global_Objects/WebAssembly/Module/exports", "WebAssembly.Module.exports()")}}
  - : `Module` を指定すると、エクスポート宣言の情報を配列として返します。
- {{jsxref("Global_Objects/WebAssembly/Module/imports", "WebAssembly.Module.imports()")}}
  - : `Module` を指定すると、インポート宣言の情報を配列として返します。

## 例

### コンパイル済みのモジュールをワーカーに送信

以下の例では (GitHub 上の [index-compile.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index-compile.html) および[実行例](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html)も参照)、読み込まれた `simple.wasm` のバイトコードを {{jsxref("WebAssembly.compileStreaming()")}} メソッドでコンパイルし、結果の `Module` インスタンスを[ワーカー](/ja/docs/Web/API/Web_Workers_API)へ、 {{domxref("Worker/postMessage", "postMessage()")}} を使用して送信します。

```js
var worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch('simple.wasm'))
.then(mod =>
  worker.postMessage(mod)
);
```

ワーカー内では ([`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/wasm_worker.js) を参照)、モジュールを使用するための import オブジェクトを定義し、メインスレッドからモジュールを受け取るためのイベントハンドラーをセットアップします。モジュールを受け取ったら、 {{jsxref("WebAssembly.instantiate()")}} メソッドを使ってインスタンスを作成し、その中からエクスポートされた関数を呼び出します。

```js
var importObject = {
  imports: {
    imported_func: function(arg) {
      console.log(arg);
    }
  }
};

onmessage = function(e) {
  console.log('module received from main thread');
  var mod = e.data;

  WebAssembly.instantiate(mod, importObject).then(function(instance) {
    instance.exports.exported_func();
  });
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概念](/ja/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
