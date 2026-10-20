---
title: "RangeError: invalid date"
slug: Web/JavaScript/Reference/Errors/Invalid_date
l10n:
  sourceCommit: 7d4628c5144f459ddb081a3e58d0e56f0c2db673
---

JavaScript の例外 "invalid date" は、無効な日付を ISO 形式の日付文字列に変換しようとすると発生します。

## エラーメッセージ

```plain
RangeError: Invalid time value (V8-based)
RangeError: invalid date (Firefox)
RangeError: Invalid Date (Safari)
```

## エラー型

{{jsxref("RangeError")}}

## エラーの原因

[無効な日付](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)の値を {{jsxref("Date/toISOString", "toISOString()")}} メソッドで、ISO 日付文字列に変換しようとしています。

無効な日付文字列を構文解析しようとした場合や、タイムスタンプを範囲外の値に設定しようとした場合、無効な日付が生成されます。無効な日付の場合、通常、すべての日付メソッドが {{jsxref("NaN")}} またはその他の特殊な値を返します。ただし、このような日付には有効な ISO 文字列表現を持たないため、それを試みるとエラーが発生します。

> [!NOTE]
> {{jsxref("Date/toJSON", "toJSON()")}} では、このエラーは発生しません。この関数は、日付を書式化する前にその日付が有限かどうかを調べ、不正な日付に対しては `toISOString()` を呼び出さずに `null` を返します。{{jsxref("JSON.stringify()")}} は `toJSON()` を呼び出すので、無効な日付をシリアライズすると例外が発生するのではなく、`null` となります。

## 例

### 無効なケース

```js example-bad
const invalid = new Date("nothing");
invalid.toISOString(); // RangeError: invalid date
```

ただし、他のほとんどのメソッドでは特別な返値が返されます。

```js example-bad
invalid.toString(); // "Invalid Date"
invalid.getDate(); // NaN
invalid.toJSON(); // null
JSON.stringify({ date: invalid }); // '{"date":null}'
```

詳細は {{jsxref("Date.parse()")}} のドキュメントをご覧ください。

### 有効な場合

```js example-good
new Date("05 October 2011 14:48 UTC").toISOString(); // "2011-10-05T14:48:00.000Z"
new Date(1317826080).toISOString(); // "2011-10-05T14:48:00.000Z"
```

## 関連情報

- {{jsxref("Date")}}
- {{jsxref("Date.prototype.parse()")}}
- {{jsxref("Date.prototype.toISOString()")}}
