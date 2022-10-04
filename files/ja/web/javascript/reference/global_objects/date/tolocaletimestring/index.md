---
title: Date.prototype.toLocaleTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
---

{{JSRef}}

**`toLocaleTimeString()`** メソッドは、この Date オブジェクトの「時刻」部を表す言語に依存した文字列を返します。新しい `locales` 引数と `options` 引数により、アプリケーションは、使用される書式変換の言語の指定や、関数の振る舞いのカスタマイズができます。古い実装のアプリケーションは、`locales` 引数と `options` 引数を無視します。使用されるロケールや返される文字列の書式は、完全に実装依存です。

{{EmbedInteractiveExample("pages/js/date-tolocaletimestring.html")}}

## 構文

```
dateObj.toLocaleTimeString([locales[, options]])
```

### 引数

`locales` および `options` 引数は、関数の動作をカスタマイズし、使用される書式の慣習を言語で指定することができるににします。 `locales` および `options` 引数を無視する実装では、使用されるロケールおよび返される文字列の書式は完全に実装依存になります。

これらの引数やその使い方についての詳細は、 {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}} コンストラクターを参照してください。

時刻のそれぞれの部分のプロパティにおける既定値は {{jsxref("undefined")}} ですが、 `hour`、 `minute`、`second` プロパティがすべて {{jsxref("undefined")}} のときは、`hour`、`minute`、`second` は `"numeric"` とみなされます。

### 返値

与えられた {{jsxref("Global_Objects/Date", "Date")}} インスタンスの「時刻」部を表す、言語特有の慣習による文字列。

## 性能

大量の日付を書式化する場合は、 {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}} オブジェクトを生成してその {{jsxref("DateTimeFormat.prototype.format", "format")}} プロパティで提供される関数を使用したほうが得策です。

## 例

### toLocaleTimeString() の使用

ロケールを指定しない基本的な使い方では、既定のロケールと既定のオプションによる書式の文字列が返されます。

```js
var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleTimeString() に引数を与えなければ実装に依存し、
// 既定のロケールとタイムゾーンを返す
console.log(date.toLocaleTimeString());
// → "7:00:00 PM" アメリカ/ロサンゼルスのタイムゾーンの en-US ロケールで実行した場合
```

### locales と options の各引数に対応しているか確認する

`locales` および `options` 引数は、まだすべてのブラウザーが対応しているわけではありません。これらが実装されているかどうかをチェックするには、不適切な言語タグを与えると {{jsxref("RangeError")}} 例外で拒否されるという要件を使用することができます。

```js
function toLocaleTimeStringSupportsLocales() {
  try {
    new Date().toLocaleTimeString('i');
  } catch (e) {
    return e.name === 'RangeError';
  }
  return false;
}
```

### locales の使用

この例では、国ごとに異なる時刻書式を示します。アプリケーションのユーザーインターフェイスで使用されている言語の書式を得るには、 `locales` 引数でその言語 (あるいはフォールバック先の言語) を指定してください。

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 以下の書式はその地域のタイムゾーンとロケールを想定
// 米国のアメリカ大陸/ロサンゼルス

// 米国英語は AM/PM 表記の 12 時間制
console.log(date.toLocaleTimeString('en-US'));
// → "7:00:00 PM"

// 英国英語は AM/PM 表記なしの 24 時間制
console.log(date.toLocaleTimeString('en-GB'));
// → "03:00:00"

// 韓国は AM/PM 表記の 12 時間制
console.log(date.toLocaleTimeString('ko-KR'));
// → "오후 12:00:00"

// 多くのアラビア語圏ではアラビア数字を使用
console.log(date.toLocaleTimeString('ar-EG'));
// → "٧:٠٠:٠٠ م"

// 対応していない可能性のある言語を要求した場合、例えば
// バリ語とし、フォールバック言語にインドネシア語を指定した場合
console.log(date.toLocaleTimeString(['ban', 'id']));
// → "11.00.00"
```

### options の使用

`toLocaleTimeString()` メソッドから得られる結果は、 `options` 引数でカスタマイズできます。

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// アプリケーションで UTC を用い、それを表示したい場合
var options = { timeZone: 'UTC', timeZoneName: 'short' };
console.log(date.toLocaleTimeString('en-US', options));
// → "3:00:00 AM GMT"

// 米国でも 24 時間制を使うことがある
console.log(date.toLocaleTimeString('en-US', { hour12: false }));
// → "19:00:00"

// 既定のロケールのオプション - 空の配列を使用して時と分のみを表示
console.log(date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
// → "20:01"
```

## 仕様書

| 仕様書                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-date.prototype.tolocaletimestring', 'Date.prototype.toLocaleTimeString')}}         |
| {{SpecName('ES Int Draft', '#sup-date.prototype.tolocaletimestring', 'Date.prototype.toLocaleTimeString')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.toLocaleTimeString")}}

## 関連情報

- {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
