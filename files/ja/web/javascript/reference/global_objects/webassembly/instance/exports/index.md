---
title: WebAssembly.Instance.prototype.exports
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance/exports
tags:
  - API
  - JavaScript
  - プロパティ
  - リファレンス
  - WebAssembly
  - exports
  - instance
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance/exports
---
{{JSRef}}

**`exports`** は {{jsxref("WebAssembly.Instance")}} オブジェクトプロトタイプの読み取り専用プロパティで、 WebAssembly モジュールインスタンスからエクスポートされたすべての関数をメンバ－として持つオブジェクトを返します。これらは、 JavaScript からアクセスして使用することができます。

```js
instance.exports
```

## 例

### exports の使用

fetch を使用して WebAssembly バイトコードを読み取った後、 {{jsxref("WebAssembly.instantiateStreaming()")}} 関数を使用してモジュールをコンパイルし、インスタンス化し、 JavaScript 関数をそのプロセスの WebAssembly モジュールにインポートします。その後、 `Instance` からエクスポートされた[エクスポート済み WebAssembly 関数](/ja/docs/WebAssembly/Exported_functions)を呼び出します。

```js
var importObject = {
  imports: {
    imported_func: function(arg) {
      console.log(arg);
    }
  }
};

WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
.then(obj => obj.instance.exports.exported_func());
```

> **Note:** この例は GitHub 上の [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/instantiate-streaming.html) ([実行例](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)) で見ることができます。</p>
</div>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概念](/ja/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
