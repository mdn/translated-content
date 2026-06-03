---
title: Date.prototype[Symbol.toPrimitive]()
slug: Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}

**`[Symbol.toPrimitive]()`** は {{jsxref("Date")}} インスタンスのメソッドで、この日付を表すプリミティブ値を返します。返される値は、指定されたヒントに応じて文字列または数値となります。

{{InteractiveExample("JavaScript デモ: Date.prototype[Symbol.toPrimitive]")}}

```js interactive-example
// タイムゾーンによっては、結果が異なります
const date = new Date("20 December 2019 14:48");

console.log(date[Symbol.toPrimitive]("string"));
// 予想される結果: "Fri Dec 20 2019 14:48:00 GMT+0530 (India Standard Time)"

console.log(date[Symbol.toPrimitive]("number"));
// 予想される結果: 1576833480000
```

## 構文

```js-nolint
date[Symbol.toPrimitive](hint)
```

### 引数

- `hint`
  - : 文字列で、返すプリミティブ値の型を表します。以下の値が有効です。
    - `"string"` または `"default"`: このメソッドは文字列を返さなければなりません。
    - `"number"`: このメソッドは数値を返さなければなりません。

### 返値

`hint` が `"string"` または `"default"` の場合、このメソッドは、[`this` 値を文字列に変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)して文字列を返します（最初に `toString()` を、次に `valueOf()` を試します）。

`hint` が `"number"` の場合、このメソッドは、[`this` 値を数値に変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値返還)して数値を返します（最初に `valueOf()` を試み、次に `toString()` を試みます）。

### 例外

- {{jsxref("TypeError")}}
  - : `hint` 引数が有効な値の 3 つのうちのどれでもない場合に発生します。

## 解説

`[Symbol.toPrimitive]()` メソッドは、[型変換プロトコル](/ja/docs/Web/JavaScript/Guide/Data_structures#型変換)の一部です。JavaScript は、オブジェクトをプリミティブ値に変換する際に、常に `[Symbol.toPrimitive]()` メソッドを優先的に呼び出します。`[Symbol.toPrimitive]()` メソッドを自分で呼び出す必要があることはほとんどありません。JavaScript は、プリミティブ値が期待されるオブジェクトに遭遇した際に、自動的にこのメソッドを呼び出します。

{{jsxref("Date")}} オブジェクトの `[Symbol.toPrimitive]()` メソッドは、{{jsxref("Date/valueOf", "this.valueOf()")}} を呼び出して数値を返すか、または {{jsxref("Date/toString", "this.toString()")}} を呼び出して文字列を返すことで、プリミティブ値を返します。これは、既定の[プリミティブ変換](/ja/docs/Web/JavaScript/Guide/Data_structures#プリミティブ変換)処理を上書きして、数値ではなく文字列を返すために存在します。既定では、プリミティブ変換は {{jsxref("Date/valueOf", "valueOf()")}} を {{jsxref("Date/toString", "toString()")}} の前に呼び出します。独自の `[Symbol.toPrimitive]()` により、`new Date(0) + 1` は `1`（数値）ではなく `"Thu Jan 01 1970 09:00:00 GMT+0900 (日本標準時)1"`（文字列）を返します。

## 例

### \[Symbol.toPrimitive]() の使用

```js
const d = new Date(0); // 1970-01-01T00:00:00.000Z

d[Symbol.toPrimitive]("string"); // "Thu Jan 01 1970 09:00:00 GMT+0900 (日本標準時)"
d[Symbol.toPrimitive]("number"); // 0
d[Symbol.toPrimitive]("default"); // "Thu Jan 01 1970 09:00:00 GMT+0900 (日本標準時)"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Symbol.toPrimitive")}}
