---
title: Date.prototype.toLocaleTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`toLocaleTimeString()`** は {{jsxref("Date")}} インスタンスのメソッドで、この日時の時刻部分を、地方時で言語に依存した表現の文字列で返します。 [`Intl.DateTimeFormat` API](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) に対応している実装では、このメソッドは `Intl.DateTimeFormat` に転送されます。

`toLocaleTimeString` が呼び出されるたびに、ローカライズ文字列の巨大なデータベースを検索しなければならず、これは非効率的である可能性があります。同じ引数でメソッドが何度も呼び出される場合は、 {{jsxref("Intl.DateTimeFormat")}} オブジェクトを作成し、その {{jsxref("Intl/DateTimeFormat/format", "format()")}} メソッドを使用したほうがよいでしょう。 `DateTimeFormat` オブジェクトは、渡された引数を記憶し、データベースの一部をキャッシュすることを決定できるため、今後の `format` の呼び出しでは、より厳密なコンテキスト内でローカライズ文字列を検索することができます。

{{InteractiveExample("JavaScript デモ: Date.prototype.toLocaleTimeString()")}}

```js interactive-example
// タイムゾーンによって、結果が変化することがあります
const event = new Date("August 19, 1975 23:15:30 GMT+00:00");

console.log(event.toLocaleTimeString("en-US"));
// 予想される結果: "1:15:30 AM"

console.log(event.toLocaleTimeString("it-IT"));
// 予想される結果: "01:15:30"

console.log(event.toLocaleTimeString("ar-EG"));
// 予想される結果: "١٢:١٥:٣٠ ص"
```

## 構文

```js-nolint
toLocaleTimeString()
toLocaleTimeString(locales)
toLocaleTimeString(locales, options)
```

### 引数

引数 `locales` と `options` の各引数は、関数の動作をカスタマイズして、アプリケーションが書式化の慣習を使用する言語を指定することができるようにします。

[`Intl.DateTimeFormat` API](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) に対応している実装では、これらの引数は [`Intl.DateTimeFormat()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) コンストラクターの引数と正確に一致していることに注意してください。 `Intl.DateTimeFormat` に対応していない実装では、両方の引数を無視するように求められます。使用するロケールと返す文字列の形式は、完全に実装に依存します。

- `locales` {{optional_inline}}
  - : BCP 47 の言語タグを持つ文字列、あるいはそのような文字列の配列です。 `Intl.DateTimeFormat()` コンストラクターの [`locales`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) 引数に相当します。

    `Intl.DateTimeFormat` に対応していない実装では、この引数は無視され、通常はホストのロケールを使用します。

- `options` {{optional_inline}}
  - : 出力書式を調整するオブジェクト。 `Intl.DateTimeFormat()` コンストラクターの [`options`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) 引数に相当します。 `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits` がすべて未定義の場合、 `hour`, `minute`, `second` は `"numeric"` に設定されます。

    `Intl.DateTimeFormat` に対応していない実装では、この引数は無視されます。

これらの引数の詳細や使用方法については [`Intl.DateTimeFormat()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)を参照してください。

### 返値

指定された日付の時刻部分を、言語固有の仕様に従って表現した文字列を表します。

`Intl.DateTimeFormat` のある実装では、 `new Intl.DateTimeFormat(locales, options).format(date)` と等価です。

> [!NOTE]
> ほとんどの場合、`toLocaleTimeString()` が返す書式は一貫しています。ただし、同じロケール内であっても、実装によって出力は異なる場合があります。出力のばらつきは設計上のものであり、仕様で認められています。また、期待した結果と異なる場合もあります。例えば、文字列に改行禁止スペースが使用されたり、書字方向制御文字で囲まれたりする場合があります。`toLocaleTimeString()` の結果を、ハードコードされた定数と比較しないでください。

## 例

### toLocaleTimeString() の使用

`locale` を指定せずにこのメソッドを基本で使用すると、既定のロケールで、既定のオプションを使用して書式化された文字列が返されます。

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleTimeString() に引数を与えなければ実装に依存し、
// 既定のロケールとタイムゾーンを返す
console.log(date.toLocaleTimeString());
// "7:00:00 PM" アメリカ/ロサンゼルスのタイムゾーンの en-US ロケールで実行した場合
```

### locales と options に対応しているか確認する

国際化 API への対応はオプションであり、一部のシステムには必要なデータが存在しない場合があるため、`locales` および `options` 引数はすべての実装で対応しているとは限りません。国際化に対応していない実装では、`toLocaleTimeString()` は常にシステムのロケールを使用します。これは、期待した結果とは異なる場合があります。`locales` および `options` 引数に対応している実装は、 {{jsxref("Intl")}} API にも対応している必要があるため、後者の存在を調べると対応しているかどうかを確認することができます。

```js
function toLocaleTimeStringSupportsLocales() {
  return (
    typeof Intl === "object" &&
    !!Intl &&
    typeof Intl.DateTimeFormat === "function"
  );
}
```

### locales の使用

この例では、国ごとに異なる時刻書式を示します。アプリケーションのユーザーインターフェイスで使用されている言語の書式を得るには、 `locales` 引数でその言語（あるいは代替で使用された言語）を指定してください。

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 以下の書式はその地域のタイムゾーンとロケールを想定
// 米国のアメリカ大陸/ロサンゼルス

// 米国英語は AM/PM 表記の 12 時間制
console.log(date.toLocaleTimeString("en-US"));
// "7:00:00 PM"

// 英国英語は AM/PM 表記なしの 24 時間制
console.log(date.toLocaleTimeString("en-GB"));
// "03:00:00"

// 韓国は AM/PM 表記の 12 時間制
console.log(date.toLocaleTimeString("ko-KR"));
// "오후 12:00:00"

// 多くのアラビア語圏ではアラビア数字を使用
console.log(date.toLocaleTimeString("ar-EG"));
// "٧:٠٠:٠٠ م"

// 対応していない可能性のある言語を要求した場合、たとえば
// ここではバリ語とし、代替言語にインドネシア語を指定した場合
console.log(date.toLocaleTimeString(["ban", "id"]));
// → "11.00.00"
```

### options の使用

`toLocaleTimeString()` メソッドから得られる結果は、 `options` 引数でカスタマイズできます。

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// アプリケーションで UTC を用いてそれを示したい場合
const options = { timeZone: "UTC", timeZoneName: "short" };
console.log(date.toLocaleTimeString("en-US", options));
// "3:00:00 AM GMT"

// 米国でも 24 時間制を使うことがある
console.log(date.toLocaleTimeString("en-US", { hour12: false }));
// "19:00:00"

// 既定のロケールのオプション - 空の配列を使用して時と分のみを表示
console.log(
  date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
);
// "20:01"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
