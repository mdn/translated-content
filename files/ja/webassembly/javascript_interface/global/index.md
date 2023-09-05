---
title: WebAssembly.Global
slug: WebAssembly/JavaScript_interface/Global
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{WebAssemblySidebar}}

**`WebAssembly.Global`** はグローバル変数のインスタンスを表します。JavaScript からアクセスでき、1 つ以上の [`WebAssembly.Module`](/ja/docs/WebAssembly/JavaScript_interface/Module) インスタンス間でインポート/エクスポートすることができます。これにより複数のモジュールを動的にリンクすることができます。

## コンストラクター

- [`WebAssembly.Global()`](/ja/docs/WebAssembly/JavaScript_interface/Global/Global)
  - : 新しい `Global` オブジェクトを生成します。

## Global のインスタンス

すべての `Global` のインスタンスは `Global()` コンストラクターのプロパティオブジェクトを継承します。これによりすべての `Global` インスタンスを変更することができます。

### インスタンスプロパティ

- `Global.prototype.constructor`
  - : このオブジェクトのインスタンスを生成した関数を返します。既定では、これは [`WebAssembly.Global()`](/ja/docs/WebAssembly/JavaScript_interface/Global/Global) コンストラクターです。
- `Global.prototype[@@toStringTag]`
  - : [@@toStringTag](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値で、文字列値 "WebAssembly.Global" です。
- `Global.prototype.value`
  - : グローバル変数の中に含まれている値です。これにより、グローバル値を直接設定および取得することができます。

### インスタンスメソッド

- `Global.prototype.valueOf()`
  - : グローバル変数の中に含まれている値を返す古い形のメソッドです。

## 例

### 新しい Global インスタンスの生成

以下の例では新しいグローバルインスタンスは `WebAssembly.Global()` コンストラクターを用いて初期化され、初期値 0 の変更可能な `i32` 型として定義されます。

その後この値は、`Global.value` プロパティを使うことによって `42` に、`global.wasm` モジュールから公開された（どんな値が与えられても 1 を加算して、新しい値を返す）`incGlobal()` 関数を使うことによって `43` になります。

```js
const output = document.getElementById("output");

function assertEq(msg, got, expected) {
  const result =
    got === expected
      ? `SUCCESS! Got: ${got}<br>`
      : `FAIL!<br>Got: ${got}<br>Expected: ${expected}<br>`;
  output.innerHTML += `Testing ${msg}: ${result}`;
}

assertEq("WebAssembly.Global exists", typeof WebAssembly.Global, "function");

const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);

WebAssembly.instantiateStreaming(fetch("global.wasm"), { js: { global } }).then(
  ({ instance }) => {
    assertEq(
      "getting initial value from wasm",
      instance.exports.getGlobal(),
      0,
    );
    global.value = 42;
    assertEq(
      "getting JS-updated value from wasm",
      instance.exports.getGlobal(),
      42,
    );
    instance.exports.incGlobal();
    assertEq("getting wasm-updated value from JS", global.value, 43);
  },
);
```

> **メモ:** この例は[GitHub 上の実行例](https://mdn.github.io/webassembly-examples/js-api-examples/global.html)で確認できます。また、[ソースコード](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/global.html)も参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概要](/ja/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
- [Import/Export mutable globals proposal](https://github.com/WebAssembly/mutable-global/blob/master/proposals/mutable-global/Overview.md)
