---
title: Date() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Date/Date
---

{{JSRef}}

JavaScript の **`Date`** インスタンスを生成し、これはプラットフォームに依存しない形式で単一の瞬間の時刻を表現します。 `Date` オブジェクトは 1970 年 1 月 1 日 (UTC) からの経過ミリ秒数を `Number` で保持します。

{{EmbedInteractiveExample("pages/js/date-constructor.html")}}

## 構文

```
new Date()
new Date(value)
new Date(dateString)
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]])
```

> **メモ:** 新しい `Date` オブジェクトをインスタンス化する唯一の正しい方法は、 {{jsxref("new")}} 演算子を使用することです。単純に直接 `Date` オブジェクトを `now = Date()` のように呼び出すと、返値は `Date` オブジェクトではなく文字列になります。

### 引数

`Date()` コンストラクターには 4 つの基本形があります。

#### 引数なし

引数が与えられなかった場合は、新しく生成された `Date` オブジェクトはインスタンス化された時点で現在の日付と時刻を表します。

#### 時刻値またはタイムスタンプ値

- `value`
  - : 世界協定時 (UTC) 1970 年 1 月 1 日午前 0 時 0 分 0 秒 (ECMAScript 元期、 UNIX 元期と等価) からのミリ秒数を整数値で表し、うるう秒は無視します。大部分の [UNIX Timestamp](http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_16) 関数は秒単位の精度しかないことに注意してください。

#### タイムスタンプ文字列

- `dateString`

  - : 日付を表す文字列値で、 {{jsxref("Date.parse()")}} メソッドによって認識される形式で指定されます。 (これらの形式は [IETF 準拠の RFC 2822 タイムスタンプ](http://tools.ietf.org/html/rfc2822#page-14)であり、 [ISO8601 のバージョン](https://www.ecma-international.org/ecma-262/11.0/#sec-date.parse)の文字列でもあります。)

    > **メモ:** `Date` コンストラクター (および同じように動作する `Date.parse()`) を使用した日付文字列の解析は、ブラウザーによって違いや矛盾があるため、_使用を避けることを強くお勧めします。_。
    >
    > - [RFC 2822](https://tools.ietf.org/html/rfc2822) 書式の文字列の対応は慣習的に行われているだけです。
    > - ISO 8601 形式の対応は、日付のみの文字列 (例えば `1970-01-01`) が地方時ではなく UTC として扱われる点が異なります。

#### 独立した日付と時刻の成分の値

少なくとも年と月が指定された場合、この形の `Date()` は成分の値 (年、月、日、時、分、秒、ミリ秒) のすべてを以下の引数から取得した `Date` オブジェクトを返します。欠けている値は、有効な最も小さな値 (`day` では `1`、他の成分では `0`) になります。

- `year`

  - : 年を表す整数値です。

    `0` から `99` までの値は、 `1900` から `1999` までの値にマッピングされます。他の値は実際の年になります。[後述の例](#Two_digit_years_map_to_1900_-_1999)をご覧ください。

- `monthIndex`
  - : 月を表す整数値です。 `0` (1 月) から `11` (12 月) までの値です。
- `day` {{optional_inline}}
  - : 月内の日を表す整数値です。既定値は `1` です。
- `hours` {{optional_inline}}
  - : 1 日の中の時を表します。既定値は `0` です。
- `minutes` {{optional_inline}}
  - : 任意。分 (0-59) を表す整数値です。
- `seconds` {{optional_inline}}
  - : 任意。秒 (0-59) を表す整数値です。
- `milliseconds` {{optional_inline}}
  - : 任意。ミリ秒 (0-999) を表す整数値です。

## 例

### Date オブジェクトを生成するいくつかの方法

以下の例で、JavaScript の Date を生成するいくつかの方法を示します。

> **メモ:** 日付文字列を `Date` コンストラクター (または同等の `Date.parse`) で解釈する方法は、ブラウザーごとに動作が異なり一貫性がないため、避けることを強くおすすめします。

```js
let today = new Date()
let birthday = new Date('December 17, 1995 03:24:00')
let birthday = new Date('1995-12-17T03:24:00')
let birthday = new Date(1995, 11, 17)            // the month is 0-indexed
let birthday = new Date(1995, 11, 17, 3, 24, 0)
```

## 仕様書

| 仕様書                                                                       |
| ---------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date-constructor', 'Date')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.Date")}}

## 関連情報

- {{jsxref("Date")}}
