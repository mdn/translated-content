---
title: Date.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`toLocaleString()`** メソッドは、この日付の言語依存の表現による文字列を返します。[`Intl.DateTimeFormat` API](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) に対応している実装では、このメソッドは単に `Intl.DateTimeFormat` を呼び出すだけです。

{{EmbedInteractiveExample("pages/js/date-tolocalestring.html")}}

## 構文

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### 引数

引数 `locales` と `options` は、関数の動作をカスタマイズして、アプリケーションが書式化の慣習を使用する言語を指定することができるようにします。

[`Intl.DateTimeFormat` API](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) に対応している実装では、これらの引数は [`Intl.DateTimeFormat()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) コンストラクターの引数と正確に一致していることに注意してください。 `Intl.DateTimeFormat` に対応していない実装では、両方の引数を無視するように求められます。使用するロケールと返す文字列の形式は、完全に実装に依存します。

- `locales` {{optional_inline}}

  - : BCP 47 の言語タグを持つ文字列、あるいはそのような文字列の配列です。 `Intl.DateTimeFormat()` コンストラクターの [`locales`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) 引数に相当します。

    `Intl.DateTimeFormat` に対応していない実装では、この引数は無視され、通常はホストのロケールを使用します。

- `options` {{optional_inline}}

  - : 出力書式を調整するオブジェクト。 `Intl.DateTimeFormat()` コンストラクターの [`options`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) 引数に相当します。 `timeStyle` オプションは未定義でなければならず、そうでない場合は {{jsxref("TypeError")}} が発生します。 `weekday`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits` がすべて未定義の場合、 `year`, `month`, `day`, `hour`, `minute`, `second` は `"numeric"` に設定されます。

    `Intl.DateTimeFormat` に対応していない実装では、この引数は無視されます。

これらの引数の詳細や使用方法については [`Intl.DateTimeFormat()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)を参照してください。

### 返値

指定された日付を、言語固有の仕様に従って表現した文字列。

`Intl.DateTimeFormat` がある実装では、これは `new Intl.DateTimeFormat(locales, options).format(date)` と等価です。

## 例

### toLocaleString() の使用

ロケールを指定しない基本的な使い方では、既定のロケールと既定のオプションによる書式の文字列が返されます。

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleString() メソッドに引数を与えなければ実装に依存し、
// 既定のロケールとタイムゾーンを返す
console.log(date.toLocaleString());
// → "12/11/2012, 7:00:00 PM" : アメリカ/ロサンゼルスのタイムゾーンの en-US ロケールで実行した場合
```

### locales と options に対応しているか確認する

`locales` と `options` は、まだすべてのブラウザーが対応している訳ではありません。これらが実装されているかどうかは、不適切な言語タグを与えて {{jsxref("RangeError")}} 例外で拒否されるかどうかで確かめられます。

```js
function toLocaleStringSupportsLocales() {
  try {
    new Date().toLocaleString("i");
  } catch (e) {
    return e.name === "RangeError";
  }
  return false;
}
```

### locales の使用

この例では、国ごとに異なる日時の書式を示します。ご使用のアプリケーションのユーザーインターフェイスで使用される言語の書式を得るには、 `locales` でその言語 (あるいは代替言語) を指定してください。

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 以下の書式はその地域のタイムゾーンとロケールを想定
// 米国のアメリカ大陸/ロサンゼルス

// 米国英語は月-日-年の順で AM/PM 表記の 12 時間制
console.log(date.toLocaleString("en-US"));
// → "12/19/2012, 7:00:00 PM"

// 英国英語は日-月-年の順で AM/PM 表記なしの 24 時間制
console.log(date.toLocaleString("en-GB"));
// → "20/12/2012 03:00:00"

// 韓国は年-月-日の順で AM/PM 表記の 12 時間制
console.log(date.toLocaleString("ko-KR"));
// → "2012. 12. 20. 오후 12:00:00"

// 多くのアラビア語圏ではアラビア数字を使用
console.log(date.toLocaleString("ar-EG"));
// → "٢٠‏/١٢‏/٢٠١٢ ٥:٠٠:٠٠ ص"

// 日本のアプリケーションでは元号を用いることがある
// 2012 年は平成 24 年
console.log(date.toLocaleString("ja-JP-u-ca-japanese"));
// → "24/12/20 12:00:00"

// 対応していない可能性のある言語を要求した場合、たとえば
// ここではバリ語とし、代替言語にインドネシア語
console.log(date.toLocaleString(["ban", "id"]));
// → "20/12/2012 11.00.00"
```

### options の使用

`toLocaleString()` メソッドから得られる結果は、`options` でカスタマイズできます。

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
// → "Donnerstag, 20. Dezember 2012"

// アプリケーションで UTC を用いてそれを示したい場合
options.timeZone = "UTC";
options.timeZoneName = "short";

console.log(date.toLocaleString("en-US", options));
// → "Thursday, December 20, 2012, GMT"

// 米国でも 24 時間制を使うことがある
console.log(date.toLocaleString("en-US", { hour12: false }));
// → "12/19/2012, 19:00:00"
```

### 書式化した日付値を固定値と比較しないでください

たいていの場合、 `toLocaleString()` が返す書式は一貫しています。しかし、これは将来的に変更される可能性があり、すべての言語で保証されているわけではありません。

特に注目すべきは、IE および Edge ブラウザーは日付の周りに書字方向の制御文字を挿入するため、出力テキストが他のテキストと連結されたときに適切に流れるようになっています。

このことから、 `toLocaleString()` を固定値と比較できると期待してはいけません。

```js example-bad
"1/1/2019, 01:00:00" ===
  new Date("2019-01-01T01:00:00Z").toLocaleString("en-US");
// true in Firefox and others
// false in IE and Edge
```

> **メモ:** 詳細および例についてはこの [StackOverflow のスレッド](https://stackoverflow.com/questions/25574963/ies-tolocalestring-has-strange-characters-in-results)をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Global_Objects/Intl/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
