---
title: Date.prototype.toLocaleTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`toLocaleTimeString()`** メソッドは、日付の時間部分を言語に依存して表現した文字列を返します。[`Intl.DateTimeFormat` API](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) に対応している実装では、このメソッドは単に `Intl.DateTimeFormat` を呼び出すだけです。

{{EmbedInteractiveExample("pages/js/date-tolocaletimestring.html")}}

## 構文

```js-nolint
toLocaleTimeString()
toLocaleTimeString(locales)
toLocaleTimeString(locales, options)
```

### 引数

引数 `locales` と `options` は、関数の動作をカスタマイズして、アプリケーションが書式化の慣習を使用する言語を指定することができるようにします。

[`Intl.DateTimeFormat` API](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) に対応している実装では、これらの引数は [`Intl.DateTimeFormat()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) コンストラクターの引数と正確に一致していることに注意してください。 `Intl.DateTimeFormat` に対応していない実装では、両方の引数を無視するように求められます。使用するロケールと返す文字列の形式は、完全に実装に依存します。

- `locales` {{optional_inline}}

  - : BCP 47 の言語タグを持つ文字列、あるいはそのような文字列の配列です。 `Intl.DateTimeFormat()` コンストラクターの [`locales`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) 引数に相当します。

    `Intl.DateTimeFormat` に対応していない実装では、この引数は無視され、通常はホストのロケールを使用します。

- `options` {{optional_inline}}

  - : 出力書式を調整するオブジェクト。 `Intl.DateTimeFormat()` コンストラクターの [`options`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) 引数に相当します。 `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits` がすべて未定義の場合、 `hour`, `minute`, `second` は `"numeric"` に設定されます。

    `Intl.DateTimeFormat` に対応していない実装では、この引数は無視されます。

これらの引数の詳細や使用方法については [`Intl.DateTimeFormat()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)を参照してください。

### 返値

与えられた {{jsxref("Global_Objects/Date", "Date")}} インスタンスの「時刻」部を表す、言語特有の慣習による文字列。

`Intl.DateTimeFormat` がある実装では、これは `new Intl.DateTimeFormat(locales, options).format(date)` と等価です。

## 性能

大量の日付を書式化する場合は、 [`Intl.DateTimeFormat`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) オブジェクトを生成してその [`format()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) プロパティで提供される関数を使用したほうが得策です。

## 例

### toLocaleTimeString() の使用

ロケールを指定しない基本的な使い方では、既定のロケールと既定のオプションによる書式の文字列が返されます。

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleTimeString() に引数を与えなければ実装に依存し、
// 既定のロケールとタイムゾーンを返す
console.log(date.toLocaleTimeString());
// → "7:00:00 PM" アメリカ/ロサンゼルスのタイムゾーンの en-US ロケールで実行した場合
```

### locales の使用

この例では、国ごとに異なる時刻書式を示します。アプリケーションのユーザーインターフェイスで使用されている言語の書式を得るには、 `locales` 引数でその言語 (あるいはフォールバック先の言語) を指定してください。

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 以下の書式はその地域のタイムゾーンとロケールを想定
// 米国のアメリカ大陸/ロサンゼルス

// 米国英語は AM/PM 表記の 12 時間制
console.log(date.toLocaleTimeString("en-US"));
// → "7:00:00 PM"

// 英国英語は AM/PM 表記なしの 24 時間制
console.log(date.toLocaleTimeString("en-GB"));
// → "03:00:00"

// 韓国は AM/PM 表記の 12 時間制
console.log(date.toLocaleTimeString("ko-KR"));
// → "오후 12:00:00"

// 多くのアラビア語圏ではアラビア数字を使用
console.log(date.toLocaleTimeString("ar-EG"));
// → "٧:٠٠:٠٠ م"

// 対応していない可能性のある言語を要求した場合、例えば
// バリ語とし、フォールバック言語にインドネシア語を指定した場合
console.log(date.toLocaleTimeString(["ban", "id"]));
// → "11.00.00"
```

### options の使用

`toLocaleTimeString()` メソッドから得られる結果は、 `options` 引数でカスタマイズできます。

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// アプリケーションで UTC を用い、それを表示したい場合
const options = { timeZone: "UTC", timeZoneName: "short" };
console.log(date.toLocaleTimeString("en-US", options));
// → "3:00:00 AM GMT"

// 米国でも 24 時間制を使うことがある
console.log(date.toLocaleTimeString("en-US", { hour12: false }));
// → "19:00:00"

// 既定のロケールのオプション - 空の配列を使用して時と分のみを表示
console.log(
  date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
);
// → "20:01"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Intl.DateTimeFormat`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
