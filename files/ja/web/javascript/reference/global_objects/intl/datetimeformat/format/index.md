---
title: Intl.DateTimeFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
tags:
  - DateTimeFormat
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Intl.DateTimeFormat.format
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
---
{{JSRef}}

The **`Intl.DateTimeFormat.prototype.format()`** メソッドは、この {{jsxref("Intl.DateTimeFormat")}} オブジェクトのロケールと整形オプションに従って日付や時刻を整形します。

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-format.html", "taller")}}


## 構文

```js
format(date)
```

### 引数

- `date`
  - : 整形する日付です。

## 解説

`format` ゲッター関数は、この {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}} オブジェクトのロケールと整形オプションに従って日付や時刻を整形し、文字列に格納します。

## 例

### format の使用

`format` ゲッター関数を使用して単一の日付値を整形します。こちらはセルビアの例です。

```js
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var dateTimeFormat = new Intl.DateTimeFormat('sr-RS', options);
console.log(dateTimeFormat.format(new Date()));
// → "недеља, 7. април 2013."
```

### format と map の使用

`format` ゲッター関数を使用して、配列内のすべての日付を整形することができます。なお、この関数は供給元である {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}} に結び付けられているので、直接 {{jsxref("Array.prototype.map()")}} に渡すことができます。

```js
var a = [new Date(2012, 08), new Date(2012, 11), new Date(2012, 03)];
var options = { year: 'numeric', month: 'long' };
var dateTimeFormat = new Intl.DateTimeFormat('pt-BR', options);
var formatted = a.map(dateTimeFormat.format);
console.log(formatted.join('; '));
// → "setembro de 2012; dezembro de 2012; abril de 2012"
```

### 書式化された日付値を固定値と比較することは避ける

ほとんどの場合、 `format()` が返す書式は一貫しています。しかし、これは将来的に変更される可能性があり、すべての言語で保証されているわけではありません — 出力のバリエーションは設計上のものであり、仕様上は許容されています。最も注目すべきは、 IE や Edge ブラウザは日付の周りに双方向の制御文字を挿入するため、他のテキストと連結したときに出力テキストが適切に流れることです。

このことから、 `format()` の結果と固定値を比較することができると期待してはいけません。

```js example-bad
let d = new Date("2019-01-01T00:00:00.000000Z");
let formattedDate = Intl.DateTimeFormat(undefined, {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
}).format(d);

"1.1.2019, 01:00:00" === formattedDate;
// true in Firefox and others
// false in IE and Edge
```

> **Note:** この [StackOverflow のスレッド](https://stackoverflow.com/questions/25574963/ies-tolocalestring-has-strange-characters-in-results)に詳細や例があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
