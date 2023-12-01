---
title: Set.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Set/forEach
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

**`forEach()`** は {{jsxref("Set")}} インターフェイスのメソッドで、指定された関数をこの集合のそれぞれの値に対して一回ずつ、挿入順で実行します。

{{EmbedInteractiveExample("pages/js/set-prototype-foreach.html")}}

## 構文

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### 引数

- `callback`

  - : この集合のそれぞれの項目に対して実行する関数です。この関数は次の引数で呼び出されます。

    - `value`
      - : それぞれの反復処理の値です。
    - `key`
      - : それぞれの反復処理のキーです。これは常に `value` と同じです。
    - `set`
      - : 反復処理が行われる集合です。

- `thisArg` {{optional_inline}}
  - : `callbackFn` を実行するときｎ、`this` として使用する値です。

### 返値

{{jsxref("undefined")}} です。

## 解説

`forEach()` メソッドは、この `Set` オブジェクトに実際に存在するそれぞれの値に対して、指定された `callback` を一回ずつ実行します。削除された値に対しては呼び出しません。ただし、`undefined` の値をもつ要素に対しては実行します。

`callback` は **3 つの引数**で呼び出されます。

- この**要素の値**
- この**要素のキー**
- **走査を行っている `Set` オブジェクト**

しかし、 `Set` オブジェクトにキーがないので、最初の 2 つの引数は、両方とも {{jsxref("Set")}} に含まれる**値**です。これにより、他の {{jsxref("Map/foreach", "Map")}} や {{jsxref("Array/forEach", "Array")}} の `forEach()` メソッドと整合が取れています。

`thisArg` 引数が `forEach()` に渡された場合、 `callback` を呼び出すときにこれが渡され、 `this` 値として使用されます。渡されなかった場合は、さもなければ、`this` 値として使用するために `undefined` 値が渡されます。 `this` の値が最終的に `callback` から見える姿は、[関数から見た `this` を決定するための通常のルール](/ja/docs/Web/JavaScript/Reference/Operators/this)に応じて決まります。

それぞれの値は 1 回ずつ処理されますが、 `forEach()` が終了する前に削除・再追加された場合は例外です。処理される前に削除された値に対しては `callback` は実行されません。 `forEach()` が終了する前に追加された新しい値は処理されます。

`forEach()` は `callback` 関数を `Set` オブジェクト内のそれぞれの要素に対して一回ずつ実行します。返値はありません。

## 例

### Set オブジェクトの内容を出力する

次のコードでは、`Set` オブジェクト内の各要素に対してログを出力します。

```js
function logSetElements(value1, value2, set) {
  console.log(`s[${value1}] = ${value2}`);
}

new Set(["foo", "bar", undefined]).forEach(logSetElements);

// Logs:
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
