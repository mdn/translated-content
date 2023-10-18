---
title: WebAssembly.Global() コンストラクター
slug: WebAssembly/JavaScript_interface/Global/Global
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{WebAssemblySidebar}}

**`WebAssembly.Global()`** コンストラクターは、グローバル変数のインスタンスを表す新しい `Global` オブジェクトを表します。これは JavaScript からアクセス可能で、1 つ以上の [`WebAssembly.Module`](/ja/docs/WebAssembly/JavaScript_interface/Module) インスタンスの間でインポート/エクスポート可能です。これにより、複数のモジュールを動的リンクすることができます。

## 構文

```js-nolint
new WebAssembly.Global(descriptor, value)
```

### 引数

- `descriptor`

  - : オブジェクトで、 2 つのプロパティを持ちます。

    - `value`: 文字列で、そのグローバル変数のデータ型を表します。
      これは以下のいずれかです。
      - `i32`: 32 ビット整数。
      - `i64`: 64 ビット整数。（JavaScript では、これは {{jsxref("BigInt")}} として表される）
      - `f32`: 32 ビット浮動小数点数。
      - `f64`: 64 ビット浮動小数点数。
      - `v128`: 128 ビットベクトル。
      - `externref`: ホスト参照。
      - `anyfunc`: 関数参照。
    - `mutable`: 論理値で、そのグローバル変数が変更可能であるかどうかを表します。既定では `false` です。

- `value`
  - : 変数が保持する値です。変数のデータ型に合う限り、どんな値でも取れます。
    もしも何の値も渡されないと、`descriptor.value` の値が `i32`、`i64`、`f32`、`f64` のいずれかである場合は型付きの 0 が使用され、`descriptor.value` が `externref` または `anyfunc` であれば、`null` が使用されます（[`DefaultValue` アルゴリズム](https://webassembly.github.io/spec/js-api/#defaultvalue)で定義されているとおりです）。

## 例

### 新しい Global インスタンスの生成

以下の例は、`WebAssembly.Global()` コンストラクターを用いて生成された新しいグローバルインスタンスです。
これは変更可能 (mutable) な `i32` 型で、値は 0 です。

その後、グローバルの値は、まず `Global.value` プロパティを使用して `42` に変更され、次に `global.wasm` モジュールからエクスポートされた `incGlobal()` 関数を使用して 43 に変更されます（これは、与えられた値に 1 を追加してから新しい値を返します）。

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

> **メモ:** この例は [GitHub 上の実行例](https://mdn.github.io/webassembly-examples/js-api-examples/global.html)で確認できます。また、[ソースコード](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/global.html)も参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概要](/ja/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
- [Import/Export mutable globals proposal](https://github.com/WebAssembly/mutable-global/blob/master/proposals/mutable-global/Overview.md)
