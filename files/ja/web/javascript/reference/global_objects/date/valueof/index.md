---
title: Date.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Date/valueOf
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`valueOf()`** は {{jsxref("Date")}} インスタンスのメソッドで、この日時の、 1970 年 1 月 1 日午前 0 時 (UTC) を[元期](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)として定義し、それからのミリ秒数を返します。

{{InteractiveExample("JavaScript デモ: Date.prototype.valueOf()")}}

```js interactive-example
const date1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));

console.log(date1.valueOf());
// 予想される結果: 823230245000

const date2 = new Date("02 Feb 1996 03:04:05 GMT");

console.log(date2.valueOf());
// 予想される結果: 823230245000
```

## 構文

```js-nolint
valueOf()
```

### 引数

なし。

### 返値

この日時をミリ秒単位で表した[タイムスタンプ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)の数値。日付が[無効](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)である場合は `NaN` を返します。

## 解説

`valueOf()` メソッドは、[型変換プロトコル](/ja/docs/Web/JavaScript/Guide/Data_structures#型変換)の一部です。 `Date` には [`[Symbol.toPrimitive]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) メソッドがあるため、 `Date` オブジェクトが暗黙的に[文字列へ変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)される場合、このメソッドが常に `valueOf()` よりも優先されます。ただし、 `Date.prototype[Symbol.toPrimitive]()` は、内部では依然として `this.valueOf()` を呼び出します。

{{jsxref("Date")}} オブジェクトは、 {{jsxref("Object")}} の {{jsxref("Object/valueOf", "valueOf()")}} メソッドを上書きします。 `Date.prototype.valueOf()` は、日付のタイムスタンプを返します。これは、 {{jsxref("Date.prototype.getTime()")}} メソッドと機能的に同等です。

## 例

### valueOf() の使用

```js
const d = new Date(0); // 1970-01-01T00:00:00.000Z
console.log(d.valueOf()); // 0
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Date.prototype.getTime()")}}
