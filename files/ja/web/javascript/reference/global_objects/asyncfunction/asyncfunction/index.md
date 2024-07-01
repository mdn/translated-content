---
title: AsyncFunction() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/AsyncFunction/AsyncFunction
l10n:
  sourceCommit: 84aaeee9a64e1bfe002837468eb798e5d5eb2bbe
---

{{JSRef}}

**`AsyncFunction()`** コンストラクターは {{jsxref("AsyncFunction")}} オブジェクトを生成します。

なお、`AsyncFunction` はグローバルオブジェクトではないことに注意してください。これは以下のようなコードで取得することができます。

```js
const AsyncFunction = async function () {}.constructor;
```

`AsyncFunction()` コンストラクターは直接使用することを意図されておらず、 {{jsxref("Function/Function", "Function()")}} の説明で述べた注意事項はすべて `AsyncFunction()` に適用されます。

## 構文

```js-nolint
new AsyncFunction(functionBody)
new AsyncFunction(arg0, functionBody)
new AsyncFunction(arg0, arg1, functionBody)
new AsyncFunction(arg0, arg1, /* … ,*/ argN, functionBody)

AsyncFunction(functionBody)
AsyncFunction(arg0, functionBody)
AsyncFunction(arg0, arg1, functionBody)
AsyncFunction(arg0, arg1, /* … ,*/ argN, functionBody)
```

> **メモ:** `AsyncFunction()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) があってもなくても呼び出すことができます。どちらも新しい `AsyncFunction` インスタンスを生成します。

### 引数

{{jsxref("Function/Function", "Function()")}} を参照してください。

## 例

### AsyncFunction() コンストラクターから非同期関数を生成

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

const AsyncFunction = async function () {}.constructor;

const fn = new AsyncFunction(
  "a",
  "b",
  "return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);",
);

fn(10, 20).then((v) => {
  console.log(v); // prints 30 after 4 seconds
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`async function` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/async_function)
- [`async function` 式](/ja/docs/Web/JavaScript/Reference/Operators/async_function)
- [`Function()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
