---
title: Date.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toString
---

{{JSRef}}

**`toString()`** メソッドは、指定した {{jsxref("Date")}} オブジェクトを表す文字列を返します。

{{EmbedInteractiveExample("pages/js/date-tostring.html")}}

## 構文

```
dateObj.toString()
```

### 返値

与えられた日付を表す文字列。

## 解説

{{jsxref("Date")}} のインスタンスは `toString()` メソッドを {{jsxref("Date.prototype")}} から継承しており、 {{jsxref("Object.prototype")}} から継承しているわけではありません。 `Date.prototype.toString()` は Date を表す文字列を、 ECMA-262 で指定された以下のような書式で返します。

- 曜日: 3 文字の英語の曜日名。例 "Sat"
- 空白
- 月名: 3 文字の英語の月名。例 "Sep"
- 空白
- 日: 2 桁の日。例 "01"
- 空白
- 年: 4 桁の年。例 "2018"
- 空白
- 時: 2 桁の時。例 "14"
- コロン
- 分: 2 桁の分。例 "53"
- コロン
- 秒: 2 桁の秒。例 "26"
- 空白
- 文字列 "GMT"
- タイムゾーンのオフセット記号。以下のどちらかです。

  - "+" 正のオフセット (0 以上)
  - "-" 負のオフセット (0 未満)

- 2 桁の時間のオフセット。例 "14"
- 2 桁の分のオフセット。例 "00"
- 任意で、以下の形のタイムゾーン名。

  - 空白
  - 左括弧、すなわち "("
  - タイムゾーンを表す実装依存の文字列で、省略形の場合も完全な名前の場合もあります (タイムゾーンに名前や省略形の標準はありません。例 "Line Islands Time" または "LINT"
  - 右括弧、すなわち ")"

例 "Sat Sep 01 2018 14:53:26 GMT+1400 (LINT)"

ECMAScript 2018 (第 9 編) まで、 `Date.prototype.toString` が返す文字列の書式は実装に依存していました。したがって、指定された書式通りであることに頼ってはいけません。

`toString()` メソッドは、日付がテキスト値で表現されるとき、例えば `console.log(new Date())`、または日付が文字列に強制変換されるとき、例えば `var today = 'Today is ' + new Date()` などで自動的に呼び出されます。

`toString()` は汎用メソッドです。 `this` が {{jsxref("Date")}} インスタンスある必要はありません。しかし、ネイティブの JavaScript を使用して構築することができない内部の `[[TimeValue]]` プロパティを持っている必要があるため、事実上は {{jsxref("Date")}} インスタンスでの使用に限定されています。日付でないインスタンスで呼び出された場合、 {{jsxref("TypeError")}} が発生します。

## 例

### toString() の使用

次の例は、{{jsxref("Date")}} オブジェクトの `toString()` 値を `myVar` に代入します。

```js
var x = new Date();
var myVar = x.toString(); // 次のような値を myVar に代入します:
                          // Mon Sep 08 1998 14:36:22 GMT-0700 (PDT)
```

## 仕様書

| 仕様書                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-date.prototype.tostring', 'Date.prototype.toString')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.toString")}}

## 関連情報

- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
