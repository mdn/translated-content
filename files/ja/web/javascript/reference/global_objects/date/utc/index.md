---
title: Date.UTC()
slug: Web/JavaScript/Reference/Global_Objects/Date/UTC
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

**`Date.UTC()`** は静的メソッドで、 {{jsxref("Date")}} コンストラクターと同様に日付と時刻の要素を表す引数を受け入れますが、それらを UTC として扱います。 1970 年 1 月 1 日 00:00:00 UTC からのミリ秒数を返します。

{{InteractiveExample("JavaScript デモ: Date.UTC()")}}

```js interactive-example
const utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
const utcDate2 = new Date(Date.UTC(0, 0, 0, 0, 0, 0));

console.log(utcDate1.toUTCString());
// 予想される結果: "Fri, 02 Feb 1996 03:04:05 GMT"

console.log(utcDate2.toUTCString());
// 予想される結果: "Sun, 31 Dec 1899 00:00:00 GMT"
```

## 構文

```js-nolint
Date.UTC(year)
Date.UTC(year, monthIndex)
Date.UTC(year, monthIndex, day)
Date.UTC(year, monthIndex, day, hours)
Date.UTC(year, monthIndex, day, hours, minutes)
Date.UTC(year, monthIndex, day, hours, minutes, seconds)
Date.UTC(year, monthIndex, day, hours, minutes, seconds, milliseconds)
```

### 引数

- `year`
  - : 整数値で、年を表します。 `0` から `99` までの値は `1900` から `1999` までに対応付けられます。それ以外の値はすべて、実際の年を表します。[例](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#2_桁の年の補完)を参照してください。

- `monthIndex` {{optional_inline}}
  - : 月を表す整数で、 `0` (1 月) から始まり、 `11` (12 月) までです。既定値は `0` です。
- `day` {{optional_inline}}
  - : 「日」を表す `1` から `31` までの整数値。既定値は `1` です。
- `hours` {{optional_inline}}
  - : 「時」を表す `0` から `23` までの整数値。既定値は `0` です。
- `minutes` {{optional_inline}}
  - : 「分」を表す `0` から `59` までの整数値。既定値は `0` です。
- `seconds` {{optional_inline}}
  - : 「秒」を表す `0` から `59` までの整数値。既定値は `0` です。
- `milliseconds` {{optional_inline}}
  - : 「ミリ秒」を表す `0` から `999` までの整数値。既定値は `0` です。

### 返値

指定された日時の[タイムスタンプ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)を表す数値を返します。日時が[無効](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)な場合は `NaN` を返します。

## 解説

`0` から `99` までの年は、 20 世紀の年 `(1900 + year)` に変換されます。例えば、 `95` は 1995 年に変換されます。

この `UTC()` メソッドは {{jsxref("Date/Date", "Date()")}} コンストラクターと 3 つの点で異なります。

1. `Date.UTC()` は地方時ではなく、協定世界時を用います。
2. `Date.UTC()` は {{jsxref("Date")}} オブジェクトを生成せず、時刻値を整数で返します。
3. 単一の数値を渡すと、 `Date.UTC()` はそれをタイムスタンプではなく年として解釈します。

引数が日時に期待される範囲を超えている場合、 `UTC()` メソッドは指定した値を受け入れるよう他の引数を更新します。例えば `15` が `monthIndex` に使用された場合、年が 1 つ増加し `(year + 1)`、月には `3` が使われます。

`UTC()` は `Date` の静的メソッドなので、 `Date` インスタンスのメソッドとしてではなく、常に `Date.UTC()` のように使用してください。

## 例

### Date.UTC() の使用

以下の文では、地方時の代わりに UTC を用いて {{jsxref("Date")}} オブジェクトを生成します。

```js
const utcDate = new Date(Date.UTC(2018, 11, 1, 0, 0, 0));
```

### Date.UTC() の引数が 1 つであった場合の動作

`Date.UTC()` に 1 つの引数を渡すと、実装が {{jsxref("Date/Date", "Date()")}} コンストラクターとの整合性を保つため、単一の引数を年として解釈せず、動作に不整合が生じていました。実装は、 `monthIndex` が省略されたときに `NaN` に強制変換するのではなく、`0` として扱うことになりました。

```js
Date.UTC(2017); // 1483228800000
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.parse()")}}
- {{jsxref("Date")}}
