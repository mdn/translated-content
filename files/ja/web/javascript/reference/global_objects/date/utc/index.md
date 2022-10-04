---
title: Date.UTC()
slug: Web/JavaScript/Reference/Global_Objects/Date/UTC
---

{{JSRef}}

**`Date.UTC()`** メソッドは、コンストラクターと同じ最も長い書式の引数を受け入れ、協定世界時 (UTC) 1970 年 1 月 1 日 00:00:00 からの経過時間を表す {{jsxref("Date")}} オブジェクトのミリ秒単位の数値を返します。

{{EmbedInteractiveExample("pages/js/date-utc.html")}}

## 構文

**ECMAScript 2017 より:**

```
Date.UTC(year[, month[, day[, hour[, minute[, second[, millisecond]]]]]])
```

**ECMAScript 2016 以前:** _(`month` が必須であった)_

```
Date.UTC(year, month[, day[, hour[, minute[, second[, millisecond]]]]])
```

### 引数

- `year`
  - : 完全な形の「年」
- `month`
  - : 「月」を表す `0` (1 月) から `11` (12 月) までの整数値。 _(ECMAScript 2016 まで、 `month` は必須の引数でした。 ES2017 では必須ではなくなりました。)_
- `day` {{optional_inline}}
  - : 「日」を表す `1` から `31` までの整数値。省略された場合の既定値は `1` です。
- `hour` {{optional_inline}}
  - : 「時」を表す `0` から `23` までの整数値。省略された場合の既定値は `0` です。
- `minute` {{optional_inline}}
  - : 「分」を表す `0` から `59` までの整数値。省略された場合の既定値は `0` です。
- `second` {{optional_inline}}
  - : 「秒」を表す `0` から `59` までの整数値。省略された場合の既定値は `0` です。
- `millisecond` {{optional_inline}}
  - : 「ミリ秒」を表す `0` から `999` までの整数値。省略された場合の既定値は `0` です。

### 返値

協定世界時 (UTC) の 1970 年 1 月 1 日 00:00:00 から指定された日時までの経過時間を表すミリ秒単位の数値です。

## 解説

`UTC()` はカンマ区切りの日時の引数を取り、世界時の 1970 年 1 月 1 日 00:00:00 から指定した日時までの経過時間を表すミリ秒単位の数値を返します。

`0` から `99` までの年は、 20 世紀の年 `(1900 + year)` に変換されます。例えば、 `95` は 1995 年に変換されます。

この `UTC()` メソッドは {{jsxref("Date")}} コンストラクターと 2 つの点で異なります。

1. `Date.UTC()` は地方時ではなく、協定世界時を用います。
2. `Date.UTC()` は `Date` オブジェクトを生成せず、時刻値を整数で返します。

引数が日時に期待される範囲を超えている場合、 `UTC()` メソッドは指定した値を受け入れるよう他の引数を更新します。例えば `15` が `month` に使用された場合、年が 1 つ増加し `(year + 1)`、月には `3` が使われます。

`UTC` は {{jsxref("Date")}} の静的メソッドなので、生成した `Date` オブジェクトのメソッドとしてではなく、常に `Date.UTC()` のように使用してください。

## 例

### Date.UTC の使用

以下の文では、地方時の代わりに UTC を用いて {{jsxref("Date")}} オブジェクトを生成します。

```js
let utcDate = new Date(Date.UTC(2018, 11, 1, 0, 0, 0));
```

## 仕様書

| 仕様書                                                               |
| -------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.utc', 'Date.UTC')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.UTC")}}

### 互換性ノート

#### Date.UTC() の引数が 2 つ未満であった場合

`Date.UTC()` の引数が 2 つ未満の場合、 ECMAScript 2017 では {{jsxref("NaN")}} を返すよう要求しています。この動作に対応していなかったエンジンも対応済みです ([bug 1050755](https://bugzilla.mozilla.org/show_bug.cgi?id=1050755), [ecma-262 #642](https://github.com/tc39/ecma262/pull/642) を参照)。

```js
Date.UTC();
Date.UTC(1);

// Safari: NaN
// Chrome/Opera/V8: NaN

// Firefox <54: non-NaN
// Firefox 54+: NaN

// IE: non-NaN
// Edge: NaN
```

## 関連情報

- {{jsxref("Date.parse()")}}
- {{jsxref("Date")}}
