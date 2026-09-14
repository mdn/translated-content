---
title: Intl.DateTimeFormat.prototype.format()
short-title: format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`format()`** は {{jsxref("Intl.DateTimeFormat")}} インスタンスのメソッドで、この `Intl.DateTimeFormat` オブジェクトのロケールと書式化オプションに従って日付や時刻を書式化します。

{{InteractiveExample("JavaScript デモ: Intl.DateTimeFormat.prototype.format()", "taller")}}

```js interactive-example
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const date = new Date(2012, 5);

const dateTimeFormat1 = new Intl.DateTimeFormat("sr-RS", options);
console.log(dateTimeFormat1.format(date));
// 予想される結果: "петак, 1. јун 2012."

const dateTimeFormat2 = new Intl.DateTimeFormat("en-GB", options);
console.log(dateTimeFormat2.format(date));
// 予想される結果: "Friday, 1 June 2012"

const dateTimeFormat3 = new Intl.DateTimeFormat("en-US", options);
console.log(dateTimeFormat3.format(date));
// 予想される結果: "Friday, June 1, 2012"
```

## 構文

```js-nolint
format(date)
```

### 引数

- `date`
  - : 書式化する日時です。{{jsxref("Date")}} または {{jsxref("Temporal.PlainDateTime")}} オブジェクトを指定可能である。さらに、{{jsxref("Temporal.PlainTime")}}、{{jsxref("Temporal.PlainDate")}}、{{jsxref("Temporal.PlainYearMonth")}}、{{jsxref("Temporal.PlainMonthDay")}} オブジェクトも指定可能です。ただし、`DateTimeFormat` オブジェクトが日付の関連する少なくとも一部を表示するように設定されている場合に限ります。

    > [!NOTE]
    > {{jsxref("Temporal.ZonedDateTime")}} オブジェクトは常に `TypeError` を発生します。代わりに {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} を使用するか、{{jsxref("Temporal.PlainDateTime")}} オブジェクトに変換してください。

    省略すると、現在の日付（{{jsxref("Date.now()")}} で返される値）が書式化されるため、やや混乱する可能性が考えられます。そのため、常に明示的に日付を渡すことをお勧めします。

### 返値

文字列です。指定された `date` を、この {{jsxref("Intl.DateTimeFormat")}} オブジェクトのロケールおよび書式設定オプションに従って書式化したものです。

> [!NOTE]
> ほとんどの場合、`format()` が返す書式は一貫しています。ただし、同じロケール内でも実装によって出力結果が異なる場合があります。出力の差異は仕様で許容されている設計上のものです。また、期待した結果とは異なる場合もあります。例えば、文字列に非改行スペースが使われたり、双方向制御文字で囲まれたりすることがあります。`format()` の結果をハードコードされた定数と比較すべきではありません。

## 例

### format の使用

`format` ゲッター関数を使用して単一の日付値を整形します。こちらはセルビアの例です。

```js
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const dateTimeFormat = new Intl.DateTimeFormat("sr-RS", options);
console.log(dateTimeFormat.format(new Date()));
// "недеља, 7. април 2013."
```

### format と map の使用

`format` ゲッター関数を使用して、配列内のすべての日付を整形することができます。なお、この関数は供給元である {{jsxref("Intl.DateTimeFormat")}} に結び付けられているので、直接 {{jsxref("Array.prototype.map()")}} に渡すことができます。

```js
const a = [new Date(2012, 8), new Date(2012, 11), new Date(2012, 3)];
const options = { year: "numeric", month: "long" };
const dateTimeFormat = new Intl.DateTimeFormat("pt-BR", options);
const formatted = a.map(dateTimeFormat.format);
console.log(formatted.join("; "));
// "setembro de 2012; dezembro de 2012; abril de 2012"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.DateTimeFormat")}}
