---
title: WebAssembly.Module.exports()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/exports
tags:
  - API
  - JavaScript
  - Method
  - Module
  - Object
  - Reference
  - WebAssembly
  - exports
browser-compat: javascript.builtins.WebAssembly.Module.exports
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/exports
---
{{JSRef}}

**`WebAssembly.Module.exports()`** 関数は、指定された `Module` のエクスポート宣言の定義の配列を返します。

## 構文

```js
WebAssembly.Module.exports(module)
```

### 引数

- _module_
  - : {{jsxref("WebAssembly.Module")}} オブジェクトです。

### 返値

指定したモジュールのエクスポートされた関数を表現するオブジェクトの配列です。

### 例外

モジュールが {{jsxref("WebAssembly.Module")}} オブジェクトのインスタンスではない場合、{{jsxref("TypeError")}} が発生します。

## 例

### exports の使用

次の例 (Github のデモ [index-compile.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index-compile.html) と、[動作例](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html)も参照) では、{{jsxref("WebAssembly.compileStreaming()")}} 関数を使用して読み込んだ simple.wasm のバイトコードをコンパイルして、[ワーカー](/ja/docs/Web/API/Web_Workers_API)に [postMessage()](/ja/docs/Web/API/Worker/postMessage) を使用して送信しています。</p>

```js
var worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch('simple.wasm'))
.then(mod =>
  worker.postMessage(mod)
);
```

ワーカー ([`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/wasm_worker.js) を参照) 内で、モジュールで使用するためにインポートオブジェクトを定義して、そのあとにメインスレッドからモジュールを受け取るためのイベントハンドラをセットアップします。モジュールを受け取ったとき、{{jsxref("WebAssembly.Instantiate()")}} メソッドを使用してインスタンスを生成し、その内部でエクスポートされた関数を実行します。そのあとに `WebAssembly.Module.exports` を使用してモジュール上の利用可能なエクスポートの情報を返す方法を示します。

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

  var exports = WebAssembly.Module.exports(mod);
  console.log(exports[0]);
};
```

`exports[0]` の出力はこのようになります。

```js
{ name: "exported_func", kind: "function" }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概念](/ja/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
