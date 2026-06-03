---
title: Intl.DateTimeFormat.prototype.formatToParts()
short-title: formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`formatToParts()`** は {{jsxref("Intl.DateTimeFormat")}} インスタンスのメソッドで、 {{jsxref("Intl/DatetimeFormat/format", "format()")}} が返す書式化済み文字列の各部分を表すオブジェクトの配列を返します。これは、ロケール固有のトークンからカスタム文字列を構築するのに便利です。

{{InteractiveExample("JavaScript デモ: Intl.DateTimeFormat.prototype.formatToParts()", "taller")}}

```js interactive-example
const date = new Date(2012, 5);
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const dateTimeFormat = new Intl.DateTimeFormat("en-US", options);

const parts = dateTimeFormat.formatToParts(date);
const partValues = parts.map((p) => p.value);

console.log(partValues);
// 予想される結果: "["Friday", ", ", "June", " ", "1", ", ", "2012"]"
```

## 構文

```js-nolint
formatToParts(date)
```

### 引数

- `date` {{optional_inline}}
  - : 書式化する日付。{{jsxref("Date")}} または {{jsxref("Temporal.PlainDateTime")}} オブジェクトを指定可能。加えて、{{jsxref("Temporal.PlainTime")}}、{{jsxref("Temporal.PlainDate")}}、{{jsxref("Temporal.PlainYearMonth")}}、{{jsxref("Temporal.PlainMonthDay")}} オブジェクトを指定できます。ただし、`DateTimeFormat` オブジェクトが日付の関連する少なくとも 1 つの部分を表示するように設定されている場合に限ります。

    > [!NOTE]
    > {{jsxref("Temporal.ZonedDateTime")}} オブジェクトは常に `TypeError` を発生します。代わりに {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} を使用するか、{{jsxref("Temporal.PlainDateTime")}} オブジェクトに変換してください。

    省略すると、現在の日付（{{jsxref("Date.now()")}} で返される値）が書式化されるため、やや混乱する可能性が考えられます。そのため、常に明示的に日付を渡すことをお勧めします。

### 返値

{{jsxref("Array")}} 型のオブジェクト配列で、各オブジェクトは日付を構成する要素ごとに書式化された日付を含みます。各オブジェクトには `type` と `value` の 2 つのプロパティがあり、それぞれ文字列を保持します。指定された順序で `value` を連結すると、{{jsxref("Intl/DateTimeFormat/format", "format()")}} と同じ文字列が生成されます。`type` は[日時成分](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options)のいずれかになります。

- `weekday`
  - : 例えば `"M"`, `"Monday"`, または `"Montag"`。
- `era`
  - : 例えば `"BC"` または `"AD"`。
- `year`
  - : 例えば `"2012"` または `"96"`。
- `month`
  - : 例えば `"12"` または `"January"`。
- `day`
  - : 例えば `"17"`。
- `dayPeriod`
  - : 例えば `"AM"`, `"PM"`, `"in the morning"`, `"noon"` など。
- `hour`
  - : 例えば `"3"` または `"03"`。
- `minute`
  - : 例えば `"00"`。
- `second`
  - : 例えば `"07"` または `"42"`。
- `fractionalSecond`
  - : 例えば `"0"`, `"00"`, または `"000"`。
- `timeZoneName`
  - : 例えば `"UTC"`, `"CET"`, または `"Central European Time"`。

- yearName
  - : 関連するコンテキストで yearName に使用される文字列、例えば "`geng-zi`" など。

`type` も以下のいずれかです。

- `literal`
  - : 書式パターンの一部であり、`date` の影響を受けない文字列。たとえば `"/"`, `", "`, `"o'clock"`, `"de"`, `" "`, などです。
- `relatedYear`
  - : グレゴリオ暦の 4 桁の年。カレンダーの表現が年ではなく `yearName` となる場合を指します。例えば `"2019"` です。詳細は[命名された年](#named_years)を参照。
- `yearName`
  - : 年号。通常、連続した年の概念を持たない暦において、年を命名するために用いられる名称です。例えば `"geng-zi"`。
- `unknown`
  - : 上記のいずれにも該当しないトークン用に予約されています。ほとんど遭遇することはないはずです。

## 例

### formatToParts() の使用

`format()` は、直接操作できないローカライズされた透過的でない文字列を出力します。

```js
const date = Date.UTC(2012, 11, 17, 3, 0, 42);

const formatter = new Intl.DateTimeFormat("en-us", {
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  fractionalSecondDigits: 3,
  hour12: true,
  timeZone: "UTC",
});

formatter.format(date);
// "Monday, 12/17/2012, 3:00:42.000 AM"
```

ただし、多くのユーザーインターフェイスでは、この文字列の書式をカスタマイズしたり、他のテキストと組み合わせて表示したりしたい場合があります。`formatToParts()` メソッドは、同じ情報をパーツごとに生成します。

```js
formatter.formatToParts(date);

// 返値:
[
  { type: "weekday", value: "Monday" },
  { type: "literal", value: ", " },
  { type: "month", value: "12" },
  { type: "literal", value: "/" },
  { type: "day", value: "17" },
  { type: "literal", value: "/" },
  { type: "year", value: "2012" },
  { type: "literal", value: ", " },
  { type: "hour", value: "3" },
  { type: "literal", value: ":" },
  { type: "minute", value: "00" },
  { type: "literal", value: ":" },
  { type: "second", value: "42" },
  { type: "fractionalSecond", value: "000" },
  { type: "literal", value: " " },
  { type: "dayPeriod", value: "AM" },
];
```

これで情報は個別に利用可能になり、カスタマイズされた方法で再び書式化して連結することができます。例えば、{{jsxref("Array.prototype.map()")}}、[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)、[switch 文](/ja/docs/Web/JavaScript/Reference/Statements/switch)、[テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals)、 {{jsxref("Array.prototype.join()")}} などを使用しています。

```js
const dateString = formatter
  .formatToParts(date)
  .map(({ type, value }) => {
    switch (type) {
      case "dayPeriod":
        return `<em>${value}</em>`;
      default:
        return value;
    }
  })
  .join("");

console.log(dateString);
// "Monday, 12/17/2012, 3:00:42.000 <em>AM</em>"
```

### 名前付きの年

名前付きの年を使用している暦もあります。例えば、中国やチベットの暦では、 60 年周期の[干支](https://ja.wikipedia.org/wiki/%E5%B9%B2%E6%94%AF)を使用しています。これらの暦には、各年を明確に番号付けする普遍的な方法が存在しないため、各年はグレゴリオ暦における対応する年との関係によって区別されます。この場合、`DateTimeFormat` が年成分を出力するように設定されていると、 `year` の代わりに `relatedYear` のトークンが出力されます。

```js
const df = new Intl.DateTimeFormat("zh-u-ca-chinese");
df.formatToParts(Date.UTC(2012, 11, 17, 3, 0, 42));

// 返値:
[
  { type: "relatedYear", value: "2012" },
  { type: "literal", value: "年" },
  { type: "month", value: "十一月" },
  { type: "day", value: "4" },
];
```

日付時刻成分のオプションの組み合わせによっては、 `yearName` を含む形式に対応付けられる場合があります。 `yearName` の表示を制御する個別のオプションは存在しません。例えば、以下のオプションでは `month` を `"long"` に設定していますが、`year` が `"numeric"` であるにもかかわらず、`yearName` トークンが生成されます。

```js
const opts = { year: "numeric", month: "long", day: "numeric" };
const df = new Intl.DateTimeFormat("zh-u-ca-chinese", opts);
df.formatToParts(Date.UTC(2012, 11, 17, 3, 0, 42));

// 返値:
[
  { type: "relatedYear", value: "2012" },
  { type: "yearName", value: "壬辰" },
  { type: "literal", value: "年" },
  { type: "month", value: "十一月" },
  { type: "day", value: "4" },
];
```

`format()` は単にすべての `value` 文字列を連結するため、この場合、出力にはグレゴリオ暦の年と年号が一緒に表示されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl/DateTimeFormat/format", "Intl.DateTimeFormat.prototype.format()")}}
