---
title: WebAssembly.Global() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Global/Global
tags:
  - Constructor
  - JavaScript
  - Reference
  - WebAssembly
browser-compat: javascript.builtins.WebAssembly.Global.Global
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Global/Global
---
{{JSRef}}

**`WebAssembly.Global()`** コンストラクターは、グローバル変数のインスタンスを表す新しい `Global` オブジェクトを表し、これは JavaScript からアクセス可能で、 1 つ以上の {{jsxref("WebAssembly.Module")}} インスタンスの間でインポート/エクスポート可能です。これにより、複数のモジュールを動的リンクすることができます。

## 構文

```js
new WebAssembly.Global(descriptor, value)
```

### 引数

- _descriptor_

  - : `GlobalDescriptor` 辞書オブジェクトで、 2 つのプロパティを持っています。

    - `value`: [`USVString`](/ja/docs/Web/API/USVString) で、そのグローバル変数のデータ型を表します。これは `i32`、`i64`、`f32`、`f64` のいずれかです。 USVString は Unicode のスカラー値の取りうる並びに相当します。 USVString は JavaScript で返されたときに、 String にマップされます。一般的に、テキスト処理を行い、操作するために Unicode スカラー値の文字列を必要とする API にのみ使用されます。 USVString は、対になっていないサロゲートコードポイントを許可しないことを除いて、 DOMString と同等です。 USVString に存在する対になっていないサロゲートコードポイントは、ブラウザーが Unicode の「置換文字」 U+FFFD, (�) に変換されます。
    - `mutable`: 論理値で、そのグローバル変数が変更可能であるかどうかを表します。既定では `false` です。

- _value_
  - : 変数が保持する値です。変数のデータ型に合う限りどんな値でも取れます。もしも何の値も渡されないと、[`DefaultValue`
    アルゴリズム](https://webassembly.github.io/spec/js-api/#defaultvalue)で指定した時のように、型付きの 0 が使われます。

## 例

### 新しい Global インスタンスの生成

以下の例は、 `WebAssembly.Global()` コンストラクターを用いて生成された新しいグローバルインスタンスです。これは変更可能 (mutable) な `i32` 型で、値は 0 です。

その後、グローバルの値は、まず `Global.value` プロパティを使用して `42` に変更され、次に `global.wasm` モジュールからエクスポートされた `incGlobal()` 関数を使用して 43 に変更されます (これは、与えられた値に 1 を追加してから新しい値を返します)。

```js
const output = document.getElementById('output');

function assertEq(msg, got, expected) {
  output.innerHTML += `Testing ${msg}: `;
  if (got !== expected)
    output.innerHTML += `FAIL!<br>Got: ${got}<br>Expected: ${expected}<br>`;
  else
    output.innerHTML += `SUCCESS! Got: ${got}<br>`;
}

assertEq("WebAssembly.Global exists", typeof WebAssembly.Global, "function");

const global = new WebAssembly.Global({value:'i32', mutable:true}, 0);

WebAssembly.instantiateStreaming(fetch('global.wasm'), { js: { global } })
.then(({instance}) => {
    assertEq("getting initial value from wasm", instance.exports.getGlobal(), 0);
    global.value = 42;
    assertEq("getting JS-updated value from wasm", instance.exports.getGlobal(), 42);
    instance.exports.incGlobal();
    assertEq("getting wasm-updated value from JS", global.value, 43);
});
```

> **Note:** この例は[GitHub 上の実行例](https://mdn.github.io/webassembly-examples/js-api-examples/global.html)で確認できます。また、[ソースコード](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/global.html)も参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) overview page
- [WebAssembly concepts](/ja/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
- [Import/Export
  mutable globals proposal](https://github.com/WebAssembly/mutable-global/blob/master/proposals/mutable-global/Overview.md)
