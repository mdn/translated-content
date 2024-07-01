---
title: Date.prototype.toLocaleDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`toLocaleDateString()`** メソッドは、この Date オブジェクトの「日付」部を表す言語に依存した文字列を返します。新しい `locales` 引数と `options` 引数により、アプリケーションは、使用される書式変換の言語の指定や、関数の振る舞いのカスタマイズができます。古い実装のアプリケーションは、`locales` 引数と `options` 引数を無視します。使用されるロケールや返される文字列の書式は、完全に実装依存です。

{{EmbedInteractiveExample("pages/js/date-tolocaledatestring.html")}}

## 構文

```js-nolint
toLocaleDateString()
toLocaleDateString(locales)
toLocaleDateString(locales, options)
```

### 引数

引数 `locales` と `options` は、関数の動作をカスタマイズして、アプリケーションが書式化の慣習を使用する言語を指定することができるようにします。

[`Intl.DateTimeFormat` API](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) に対応している実装では、これらの引数は [`Intl.DateTimeFormat()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) コンストラクターの引数と正確に一致していることに注意してください。 `Intl.DateTimeFormat` に対応していない実装では、両方の引数を無視するように求められます。使用するロケールと返す文字列の形式は、完全に実装に依存します。

- `locales` {{optional_inline}}

  - : BCP 47 の言語タグを持つ文字列、あるいはそのような文字列の配列です。 `Intl.DateTimeFormat()` コンストラクターの [`locales`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) 引数に相当します。

    `Intl.DateTimeFormat` に対応していない実装では、この引数は無視され、通常はホストのロケールを使用します。

- `options` {{optional_inline}}

  - : 出力書式を調整するオブジェクト。 `Intl.DateTimeFormat()` コンストラクターの [`options`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) 引数に相当します。 `timeStyle` オプションは未定義でなければならず、そうでない場合は {{jsxref("TypeError")}} が発生します。 `weekday`, `year`, `month`, `day` がすべて未定義の場合、 `year`, `month`, `day` は `"numeric"` に設定されます。

    `Intl.DateTimeFormat` に対応していない実装では、この引数は無視されます。

これらの引数の詳細や使用方法については [`Intl.DateTimeFormat()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)を参照してください。

### 返値

指定された {{jsxref("Global_Objects/Date", "Date")}} インスタンスの日付部分を、言語固有の仕様にしたがって表現した文字列を表します。

`Intl.DateTimeFormat` のある実装では、 `new Intl.DateTimeFormat(locales, options).format(date)` と等価であり、 `options` は上記のように正規化されます。

## 性能

大量の日付を書式化する場合は、 [`Intl.DateTimeFormat`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) オブジェクトを生成してその [`format()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) プロパティで提供される関数を使用したほうが得策です。

## 例

### toLocaleDateString() の使用

ロケールを指定しない基本的な使い方では、既定のロケールと既定のオプションによる書式の文字列が返されます。

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleDateString() に引数を与えなければ実装に依存し、
// 既定のロケールとタイムゾーンを返す
console.log(date.toLocaleDateString());
// → "12/11/2012" : アメリカ/ロサンゼルスのタイムゾーンの ja ロケールで実行した場合
```

### locales と options の各引数に対応しているか確認する

`locales` および `options` 引数は、まだすべてのブラウザーが対応しているわけではありません。これらが実装されているかどうかをチェックするには、不適切な言語タグを与えると {{jsxref("RangeError")}} 例外で拒否されるという要件を使用することができます。

```js
function toLocaleDateStringSupportsLocales() {
  try {
    new Date().toLocaleDateString("i");
  } catch (e) {
    return e.name === "RangeError";
  }
  return false;
}
```

### locales の使用

この例では、国ごとに異なる日付書式を示します。アプリケーションのユーザーインターフェイスで使用されている言語の書式を得るには、 `locales` 引数でその言語 (あるいはフォールバック先の言語) を指定してください。

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 以下の書式はその地域のタイムゾーンとロケールを想定
// 米国のアメリカ大陸/ロサンゼルス

// 米国英語は月-日-年の順
console.log(date.toLocaleDateString("en-US"));
// → "12/20/2012"

// 英国英語は日-月-年の順
console.log(date.toLocaleDateString("en-GB"));
// → "20/12/2012"

// 韓国は年-月-日の順
console.log(date.toLocaleDateString("ko-KR"));
// → "2012. 12. 20."

// Event for Persian, It's hard to manually convert date to Solar Hijri
console.log(date.toLocaleDateString("fa-IR"));
// → "۱۳۹۱/۹/۳۰"

// 多くのアラビア語圏ではアラビア数字
console.log(date.toLocaleDateString("ar-EG"));
// → "٢٠‏/١٢‏/٢٠١٢"

// 日本語では、アプリケーションは元号を用いることがある
// 2012 年は平成 24 年
console.log(date.toLocaleDateString("ja-JP-u-ca-japanese"));
// → "24/12/20"

// 対応していない可能性のある言語を要求した場合、例えば
// バリ語とし、フォールバック言語にインドネシア語を指定した場合
console.log(date.toLocaleDateString(["ban", "id"]));
// → "20/12/2012"
```

### options の使用

`toLocaleDateString()` メソッドから得られる結果は、 `options` 引数でカスタマイズできます。

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 曜日を加えて月とともに長い書式で表す
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(date.toLocaleDateString("de-DE", options));
// → "Donnerstag, 20. Dezember 2012"

// アプリケーションで UTC を用いてそれを示したい場合
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(date.toLocaleDateString("en-US", options));
// → "Thursday, December 20, 2012, UTC"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Intl.DateTimeFormat`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
