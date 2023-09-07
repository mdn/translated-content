---
title: Set.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Set/forEach
---

{{JSRef}}

**`forEach()`** メソッドは、与えられた関数を `Set` オブジェクトの各値に対して一回ずつ、挿入順で実行します。

{{EmbedInteractiveExample("pages/js/set-prototype-foreach.html")}}

## 構文

```js
// Arrow function
forEach(() => {
  /* ... */
});
forEach((value) => {
  /* ... */
});
forEach((value, key) => {
  /* ... */
});
forEach((value, key, set) => {
  /* ... */
});

// Callback function
forEach(callbackFn);
forEach(callbackFn, thisArg);

// Inline callback function
forEach(function () {
  /* ... */
});
forEach(function (value) {
  /* ... */
});
forEach(function (value, key) {
  /* ... */
});
forEach(function (value, key, set) {
  /* ... */
});
forEach(function (value, key, set) {
  /* ... */
}, thisArg);
```

### 引数

- `callback`

  - : 各要素に対して実行する関数で、 3 つの引数を受け付けます。

    - `value`, `key`
      - : `Set` で現在処理されている要素。 `Set` にはキー (key) がないため値 (value) が両方に渡されます。
    - `set`
      - : `forEach()` が呼び出された `Set` オブジェクトです。

- `thisArg`
  - : `callbackFn` を実行するとき、`this` として使用する値です。

### 返値

{{jsxref("undefined")}} です。

## 解説

`forEach()` メソッドは `Set` オブジェクトに実際に存在するそれぞれの値に対して、指定された `callback` を一回ずつ実行します。削除された値に対しては呼び出しません。ただし、`undefined` の値をもつ要素に対しては実行します。

`callback` は **3 つの引数**で呼び出されます。

- **要素の値**
- **要素のキー**
- **走査を行う `Set` オブジェクト**

しかし、 `Set` オブジェクトにキーがないので、最初の 2 つの引数は、両方とも {{jsxref("Set")}} に含まれる**値**です。そのため `callback` 関数は {{jsxref("Map.foreach", "Map")}} や {{jsxref("Array.forEach","Array")}} の `forEach()` メソッドと整合が取れています。

`thisArg` 引数が `forEach()` に渡された場合、 `callback` を呼び出すときにこれが渡され、 `this` 値として使用されます。渡されなかった場合は、さもなければ、`this` 値として使用するために `undefined` 値が渡されます。 `this` の値が最終的に `callback` から見える姿は、[関数から見た `this` を決定するための通常のルール](/ja/docs/Web/JavaScript/Reference/Operators/this)に応じて決まります。

それぞれの値は 1 回ずつ処理されますが、 `forEach()` が終了する前に削除・再追加された場合は例外です。処理される前に削除された値に対しては `callback` は実行されません。 `forEach()` が終了する前に追加された新しい値は処理されます。

`forEach()` は `callback` 関数を `Set` オブジェクト内のそれぞれの要素に対して一回ずつ実行します。返値はありません。

## 例

### Set オブジェクトの内容を出力する

次のコードでは、`Set` オブジェクト内の各要素に対してログを出力します。

```js
function logSetElements(value1, value2, set) {
  console.log("s[" + value1 + "] = " + value2);
}

new Set(["foo", "bar", undefined]).forEach(logSetElements);

// logs:
// "s[foo] = foo"
// "s[bar] = bar"
// "s[undefined] = undefined"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
