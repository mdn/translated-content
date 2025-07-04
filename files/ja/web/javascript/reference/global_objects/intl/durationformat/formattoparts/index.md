---
title: Intl.DurationFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/formatToParts
l10n:
  sourceCommit: 415324c4a53612154ec3186c23fc7326676e53b0
---

{{JSRef}}

**`formatToParts()`** は {{jsxref("Intl.DurationFormat")}} インスタンスのメソッドで、 {{jsxref("Intl/DurationFormat/format", "format()")}} によって返される、書式化された文字列の各部分を表すオブジェクトの配列を返します。これは、ロケール固有のトークンからカスタム文字列を構築するのに役立ちます。

## 構文

```js-nolint
formatToParts(duration)
```

### 引数

- `duration` {{optional_inline}}
  - : 書式化される経過時間オブジェクト。 `years`, `months`, `weeks`, `days`, `hours`, `minutes`, `seconds`, `milliseconds`, `microseconds`, `nanoseconds` プロパティの一部またはすべてを含める必要があります。各プロパティの値は整数であり、その符号は一致している必要があります。これは {{jsxref("Temporal.Duration")}} オブジェクトであることができます。これらのプロパティの詳細については、 {{jsxref("Temporal.Duration")}} のドキュメントを参照してください。

### 返値

オブジェクトの配列 ({{jsxref("Array")}}) で、書式化された経過時間を部分ごとに格納します。それぞれのオブジェクトには、`type`、`value`、およびオプションの `unit` という 2 つまたは 3 つのプロパティがあり、それぞれ文字列を保持しています。 `value` の文字列連結は、指定された順序で、 {{jsxref("Intl/DurationFormat/format", "format()")}} と同じ文字列になります。それぞれの部分は、数値とその単位を指定して {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}} を呼び出すことで直接取得できるものと考えられます。 `NumberFormat` によって生成されるすべてのトークンには、追加の `unit` プロパティがあります。これは、入力 `unit` の単数形です。これはプログラムで使用するためのもので、ローカライズされません。ローカライズされた単位は、 `NumberFormat` の結果の一部として、別個の `unit` トークンとして出力されます。各再生時間単位のパーツは、 {{jsxref("Intl/ListFormat/formatToParts", "Intl.ListFormat.prototype.formatToParts()")}} に `{ type: "unit" }` を渡して呼び出すのと同じ方法で連結されるため、追加のリテラルトークンが挿入されます。

## 例

`formatToParts` メソッドは、`DurationFormat` フォーマッターによって生成された文字列を、ロケール認識の書式化を行うために、文字列をパーツごとに指定して提供します。

```js
const duration = {
  hours: 7,
  minutes: 8,
  seconds: 9,
  milliseconds: 123,
  microseconds: 456,
  nanoseconds: 789,
};

new Intl.DurationFormat("en", { style: "long" }).formatToParts(duration);

// Returned value:
[
  { type: "integer", value: "7", unit: "hour" },
  { type: "literal", value: " ", unit: "hour" },
  { type: "unit", value: "hours", unit: "hour" },
  { type: "literal", value: ", " },
  { type: "integer", value: "8", unit: "minute" },
  { type: "literal", value: " ", unit: "minute" },
  { type: "unit", value: "minutes", unit: "minute" },
  { type: "literal", value: ", " },
  { type: "integer", value: "9", unit: "second" },
  { type: "literal", value: " ", unit: "second" },
  { type: "unit", value: "seconds", unit: "second" },
  { type: "literal", value: ", " },
  { type: "integer", value: "123", unit: "millisecond" },
  { type: "literal", value: " ", unit: "millisecond" },
  { type: "unit", value: "milliseconds", unit: "millisecond" },
  { type: "literal", value: ", " },
  { type: "integer", value: "456", unit: "microsecond" },
  { type: "literal", value: " ", unit: "microsecond" },
  { type: "unit", value: "microseconds", unit: "microsecond" },
  { type: "literal", value: ", " },
  { type: "integer", value: "789", unit: "nanosecond" },
  { type: "literal", value: " ", unit: "nanosecond" },
  { type: "unit", value: "nanoseconds", unit: "nanosecond" },
];
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Intl/DurationFormat/format", "Intl.DurationFormat.prototype.format()")}}
- {{jsxref("Temporal.Duration")}}
