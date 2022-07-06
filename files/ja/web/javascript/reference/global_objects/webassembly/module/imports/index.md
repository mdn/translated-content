---
title: WebAssembly.Module.imports()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/imports
tags:
  - API
  - JavaScript
  - メソッド
  - Module
  - Object
  - Reference
  - WebAssembly
  - imports
browser-compat: javascript.builtins.WebAssembly.Module.imports
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/imports
---
{{JSRef}}

**`WebAssembly.imports()`** 関数は、指定された `Module` の全てのインポート宣言の定義を配列として返します。

## 構文

```js
WebAssembly.Module.imports(module)
```

### 引数

- _module_
  - : {{jsxref("WebAssembly.Module")}} オブジェクトです。

### 返値

指定されたモジュールのインポートされた関数を表現するオブジェクトの配列。

### 例外

module が {{jsxref("WebAssembly.Module")}} オブジェクトインスタンスでなかった場合は、 {{jsxref("TypeError")}} が発生します。

## 例

### imports の使用

次の例では ([imports.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/imports.html) と[動作例](https://mdn.github.io/webassembly-examples/js-api-examples/imports.html)も参照)、読み込んだ simple.wasm モジュールをコンパイルします。このモジュールは imports から問い合わせされます。

```js
WebAssembly.compileStreaming(fetch('simple.wasm'))
.then(function(mod) {
  var imports = WebAssembly.Module.imports(mod);
  console.log(imports[0]);
});
```

出力はこのようになります。

```js
{ module: "imports", name: "imported_func", kind: "function" }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概念](/ja/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
