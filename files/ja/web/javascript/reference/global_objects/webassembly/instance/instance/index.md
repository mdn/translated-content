---
title: WebAssembly.Instance() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance/Instance
tags:
  - コンストラクター
  - JavaScript
  - Reference
  - WebAssembly
browser-compat: javascript.builtins.WebAssembly.Instance.Instance
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance/Instance
---
{{JSRef}}

**`WebAssembly.Instance()`** コンストラクターは、新しい `Instance` オブジェクトを生成します。これはステートフルで実行可能な {{jsxref("WebAssembly.Module")}} のインスタンスです。

## 構文

> **Warning:** 巨大なモジュールのインスタンス化は高コストになる可能性があるので、開発者が同期的な `Instance()` コンストラクターを使用するのは、絶対に必要な場合のみにするべきです。それ以外の場合はすべて、{{jsxref("WebAssembly.instantiateStreaming()")}} メソッドを使用してください。

```js
new WebAssembly.Instance(module, importObject)
```

### 引数

- _module_
  - : インスタンス化する {{jsxref("WebAssembly.Module")}} オブジェクト。
- _importObject_ {{optional_inline}}
  - : 新しく生成される `Instance` にインポートされる値を持つオブジェクトで、例えば関数や {{jsxref("WebAssembly.Memory")}} オブジェクトなどです。モジュール内で宣言されたインポートそれぞれに対応するプロパティが存在する必要があります。そうでない場合、 {{jsxref("WebAssembly.LinkError")}} が発生します。

## 例

### WebAssembly モジュールの同期的なインスタンス化

次のように `WebAssembly.Instance()` コンストラクター関数を呼び出して、渡した {{jsxref("WebAssembly.Module")}} オブジェクトを同期的にインスタンス化することができます。

```js
const importObject = {
  imports: {
    imported_func: function(arg) {
      console.log(arg);
    }
  }
};

fetch('simple.wasm').then(response =>
  response.arrayBuffer()
).then(bytes => {
  let mod = new WebAssembly.Module(bytes);
  let instance = new WebAssembly.Instance(mod, importObject);
  instance.exports.exported_func();
})
```

ただし、`Instance` を取得する方法としては、次のように、非同期の {{jsxref("WebAssembly.instantiateStreaming()")}} 関数を使用することをお勧めします。

```js
const importObject = {
  imports: {
    imported_func: function(arg) {
      console.log(arg);
    }
  }
};

WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
.then(obj => obj.instance.exports.exported_func());
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概念](/ja/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
