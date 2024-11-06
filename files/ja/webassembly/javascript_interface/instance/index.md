---
title: WebAssembly.Instance
slug: WebAssembly/JavaScript_interface/Instance
---

{{WebAssemblySidebar}}

**`WebAssembly.Instance`** オブジェクトは、ステートフルで実行可能な {{jsxref("WebAssembly.Module")}} のインスタンスです。 `Instance` オブジェクトには JavaScript から WebAssembly コードを呼び出すことができるすべての[エクスポートされた WebAssembly 関数](/ja/docs/WebAssembly/Exported_functions)が含まれます。

## コンストラクター

- [`WebAssembly.Instance()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance/Instance)
  - : 新しい `Instance` オブジェクトを生成します。

## インスタンスプロパティ

- {{jsxref("WebAssembly/Instance/exports", "Instance.prototype.exports")}}
  - : メンバーとして WebAssembly モジュールのインスタンスからエクスポートされたすべての関数を含むオブジェクトを返します。 JavaScript からアクセスしたり使用したりすることができます。読み取り専用です。

## 例

### WebAssembly モジュールの同期的なインスタンス化

`WebAssembly.Instance()` コンストラクター関数は、次のように呼び出して指定された {{jsxref("WebAssembly.Module")}} オブジェクトを同期的にインスタンス化することができます。

```js
const importObject = {
  imports: {
    imported_func: function (arg) {
      console.log(arg);
    },
  },
};

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => {
    let mod = new WebAssembly.Module(bytes);
    let instance = new WebAssembly.Instance(mod, importObject);
    instance.exports.exported_func();
  });
```

`Instance` を取得するには非同期で行うことを推奨します。例えば、 {{jsxref("WebAssembly.instantiateStreaming()")}} 関数を使って次のようにします。

```js
const importObject = {
  imports: {
    imported_func: function (arg) {
      console.log(arg);
    },
  },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

また、これは `exports` プロパティを使ってエクスポートされた関数にアクセスする方法も紹介しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概念](/ja/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
