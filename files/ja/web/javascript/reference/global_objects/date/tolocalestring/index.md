---
title: Date.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`toDateString()`** は {{jsxref("Date")}} インスタンスのメソッドで、この日時を、地方時で言語に依存した表現の文字列で返します。 [`Intl.DateTimeFormat` API](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) に対応している実装では、このメソッドは `Intl.DateTimeFormat` に転送されます。

`toLocaleString` が呼び出されるたびに、ローカライズ文字列の巨大なデータベースを検索しなければならず、これは非効率的である可能性があります。同じ引数でメソッドが何度も呼び出される場合は、 {{jsxref("Intl.DateTimeFormat")}} オブジェクトを作成し、その {{jsxref("Intl/DateTimeFormat/format", "format()")}} メソッドを使用したほうがよいでしょう。 `DateTimeFormat` オブジェクトは、渡された引数を記憶し、データベースの一部をキャッシュすることを決定できるため、今後の `format` の呼び出しでは、より厳密なコンテキスト内でローカライズ文字列を検索することができます。

{{InteractiveExample("JavaScript デモ: Date.prototype.toLocaleString()", "taller")}}

```js interactive-example
const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// イギリス英語では、日・月・年の順で、AM/PM を使用しない 24 時間表記が使用されています。
console.log(event.toLocaleString("en-GB", { timeZone: "UTC" }));
// 期待される結果: "20/12/2012, 03:00:00"

// 韓国語では、年・月・日の順で、12 時間制（午前/午後）を使用します。
console.log(event.toLocaleString("ko-KR", { timeZone: "UTC" }));
// 期待される結果: "2012. 12. 20. 오전 3:00:00"
```

## 構文

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### 引数

引数 `locales` と `options` の各引数は、関数の動作をカスタマイズして、アプリケーションが書式化の慣習を使用する言語を指定することができるようにします。

[`Intl.DateTimeFormat` API](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) に対応している実装では、これらの引数は [`Intl.DateTimeFormat()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) コンストラクターの引数と正確に一致していることに注意してください。 `Intl.DateTimeFormat` に対応していない実装では、両方の引数を無視するように求められます。使用するロケールと返す文字列の形式は、完全に実装に依存します。

- `locales` {{optional_inline}}
  - : BCP 47 の言語タグを持つ文字列、あるいはそのような文字列の配列です。 `Intl.DateTimeFormat()` コンストラクターの [`locales`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) 引数に相当します。

    `Intl.DateTimeFormat` に対応していない実装では、この引数は無視され、通常はホストのロケールを使用します。

- `options` {{optional_inline}}
  - : 出力書式を調整するオブジェクト。 `Intl.DateTimeFormat()` コンストラクターの [`options`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) 引数に相当します。 `weekday`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits` がすべて未定義の場合、 `year`, `month`, `day`, `hour`, `minute`, `second` は `"numeric"` に設定されます。

    `Intl.DateTimeFormat` に対応していない実装では、この引数は無視されます。

これらの引数の詳細や使用方法については [`Intl.DateTimeFormat()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)を参照してください。

### 返値

指定された日付を、言語固有の仕様に従って表現した文字列を表します。

`Intl.DateTimeFormat` のある実装では、 `new Intl.DateTimeFormat(locales, options).format(date)` と等価です。

> [!NOTE]
> ほとんどの場合、`toLocaleString()` が返す書式は一貫しています。ただし、同じロケール内であっても、実装によって出力は異なる場合があります。出力のばらつきは設計上のものであり、仕様で認められています。また、期待した結果と異なる場合もあります。例えば、文字列に改行禁止スペースが使用されたり、書字方向制御文字で囲まれたりする場合があります。`toLocaleString()` の結果を、ハードコードされた定数と比較しないでください。

## 例

### toLocaleString() の使用

`locale` を指定せずにこのメソッドを基本で使用すると、既定のロケールで、既定のオプションを使用して書式化された文字列が返されます。

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleString() に引数を与えなければ実装に依存し、
// 既定のロケールとタイムゾーンを返す
console.log(date.toLocaleString());
// "12/11/2012, 7:00:00 PM" : アメリカ/ロサンゼルスのタイムゾーンの en-US ロケールで実行した場合
```

### locales と options に対応しているか確認する

国際化 API への対応はオプションであり、一部のシステムには必要なデータが存在しない場合があるため、`locales` および `options` 引数はすべての実装で対応しているとは限りません。国際化に対応していない実装では、`toLocaleString()` は常にシステムのロケールを使用します。これは、期待した結果とは異なる場合があります。`locales` および `options` 引数に対応している実装は、 {{jsxref("Intl")}} API にも対応している必要があるため、後者の存在を調べると対応しているかどうかを確認することができます。

```js
function toLocaleStringSupportsLocales() {
  return (
    typeof Intl === "object" &&
    !!Intl &&
    typeof Intl.DateTimeFormat === "function"
  );
}
```

### locales の使用

この例では、国ごとに異なる日時書式を示します。アプリケーションのユーザーインターフェイスで使用されている言語の書式を得るには、 `locales` 引数でその言語（あるいは代替で使用された言語）を指定してください。

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 以下の書式はその地域のタイムゾーンとロケールを想定
// 米国のアメリカ大陸/ロサンゼルス

// 米国英語は月-日-年の順で AM/PM 表記の 12 時間制
console.log(date.toLocaleString("en-US"));
// "12/19/2012, 7:00:00 PM"

// 英国英語は日-月-年の順で AM/PM 表記なしの 24 時間制
console.log(date.toLocaleString("en-GB"));
// "20/12/2012 03:00:00"

// 韓国は年-月-日の順で AM/PM 表記の 12 時間制
console.log(date.toLocaleString("ko-KR"));
// "2012. 12. 20. 오후 12:00:00"

// 多くのアラビア語圏ではアラビア数字を使用
console.log(date.toLocaleString("ar-EG"));
// "٢٠‏/١٢‏/٢٠١٢ ٥:٠٠:٠٠ ص"

// 日本のアプリケーションでは元号を用いることがある
// 2012 年は平成 24 年
console.log(date.toLocaleString("ja-JP-u-ca-japanese"));
// "24/12/20 12:00:00"

// 対応していない可能性のある言語を要求した場合、たとえば
// ここではバリ語とし、代替言語にインドネシア語を指定した場合
console.log(date.toLocaleString(["ban", "id"]));
// "20/12/2012 11.00.00"
```

### options の使用

`toLocaleString()` メソッドから得られる結果は、 `options` 引数でカスタマイズできます。

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 曜日を加えて月とともに長い書式で表す
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(date.toLocaleString("de-DE", options));
// "Donnerstag, 20. Dezember 2012"

// アプリケーションで UTC を用いてそれを示したい場合
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(date.toLocaleString("en-US", options));
// "Thursday, December 20, 2012, GMT"

// 米国でも 24 時間制を使うことがある
console.log(date.toLocaleString("en-US", { hour12: false }));
// "12/19/2012, 19:00:00"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
