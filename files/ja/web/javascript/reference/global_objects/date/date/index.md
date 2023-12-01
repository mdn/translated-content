---
title: Date() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Date/Date
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

**`Date()`** コンストラクターは {{jsxref("Date")}} のインスタンスを生成し、または現在時刻を表す文字列を返します。

{{EmbedInteractiveExample("pages/js/date-constructor.html")}}

## 構文

```js-nolint
new Date()
new Date(value)
new Date(dateString)
new Date(dateObject)

new Date(year, monthIndex)
new Date(year, monthIndex, day)
new Date(year, monthIndex, day, hours)
new Date(year, monthIndex, day, hours, minutes)
new Date(year, monthIndex, day, hours, minutes, seconds)
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

Date()
```

> **メモ:** `Date()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) ありでも `new` なしでも呼び出すことができますが、効果は異なります。[返値](#返値)を参照してください。

### 引数

`Date()` コンストラクターには 5 つの基本形があります。

#### 引数なし

引数が与えられなかった場合、新しく生成された `Date` オブジェクトはインスタンス化された時点の現在の日付と時刻を表します。

#### 時刻値またはタイムスタンプ値

- `value`
  - : 世界協定時 (UTC) 1970 年 1 月 1 日午前 0 時 0 分 0 秒 (ECMAScript 元期、 UNIX 元期と等価) からのミリ秒数を整数値で表し、うるう秒は無視します。大部分の [UNIX Timestamp](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_16) 関数は秒単位の精度しかないことに注意してください。

#### 日付文字列

- `dateString`

  - : 日付を表す文字列値で、 {{jsxref("Date.parse()")}} メソッドによって認識される形式で指定します。（ECMA262 仕様書は [ISO 8601 の簡易版](https://tc39.es/ecma262/#sec-date-time-string-format)を定めていますが、実装がほかの形式を定義している場合があり、この多くが [IETF 準拠の RFC 2822 タイムスタンプ](https://datatracker.ietf.org/doc/html/rfc2822#page-14)を含んでいます。）

    > **メモ:** `Date` コンストラクター（および `Date.parse` と同等）で日付文字列を解釈する際には、常に入力が ISO 8601 形式 (`YYYY-MM-DDTHH:mm:ss.sssZ`) であることを確認してください。他の形式で解釈した場合には、その挙動は実装によって定義されていて、すべてのブラウザーで動くとは限りません。 [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822) 書式の文字列の対応は慣習的に行われているだけです。多数の異なる形式に対応するためには、ライブラリーが役に立ちます。
    >
    > 日付のみの文字列（例: `"1970-01-01"`）は UTC として扱われ、日付時刻の文字列（例: `"1970-01-01T12:00"`）は ローカルとして扱われます。したがって、入力形式が 2 つの型の間で一貫していることを確認することも推奨されます。

#### Date オブジェクト

- `dateObject`
  - : 既存の `Date` オブジェクトです。これは、既存の `Date` オブジェクトのコピーを、同じ日付と時刻で効率的に作成します。これは `new Date(dateObject.valueOf())` と同じですが、 `valueOf()` メソッドが呼び出されない点が異なります。

`Date()` コンストラクターに 1 つの引数が渡された場合、 `Date` インスタンスは特別に扱われます。他のすべての値はプリミティブに変換されます（`[@@toPrimitive]("default")`, `valueOf()`, `toString()` の順で呼び出されます）。もし結果が文字列であれば、それは日付の文字列として解釈されます。そうでない場合は、結果のプリミティブはさらに数値に強制され、タイムスタンプとして扱われます。

#### 独立した日付と時刻の成分の値

少なくとも年と月が指定された場合、この `Date()` の形式は `Date` オブジェクトを返します。その成分値（年、月、日、時、分、秒、ミリ秒）はすべて以下の引数から得られます。欠落しているフィールドには、使用可能な最小の値（`day` には `1`、他にもすべての成分には `0` ）が指定されます。引数の値はすべて、UTC ではなくローカルのタイムゾーンに対して評価されます。

いずれかの引数が定義された境界を超えた場合、「繰り上げ」が行われます。例えば、 `monthIndex` に `11` よりも大きな値が渡された場合、その月は年を増加させます。 `minutes` に `59` よりも大きな値が渡された場合、`hours` はそれに応じて増加します。したがって、 `new Date(1990, 12, 1)` は 1991 年 1 月 1 日を返し、 `new Date(2020, 5, 19, 25, 65)` は 2020 年 6 月 20 日の午前 2 時 5 分を返します。

同様に、何か引数がアンダーフローする場合は、上位の引数を「桁借り」します。例えば、`new Date(2020, 5, 0)` は、 2020 年 5 月 31 日を返します。

- `year`

  - : 年を表す整数値です。
    `0` から `99` までの値は、 `1900` から `1999` までの値にマッピングされます。他の値は実際の年になります。[例](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#2_桁の年の補完)をご覧ください。

- `monthIndex`
  - : 月を表す整数値です。 `0` （1 月）から `11` （12 月）までの値です。
- `day` {{optional_inline}}
  - : 月内の日を表す整数値です。既定値は `1` です。
- `hours` {{optional_inline}}
  - : `0` から `23` までの間の整数値で、 1 日の中の時を表します。既定値は `0` です。
- `minutes` {{optional_inline}}
  - : 整数値で、時刻の分の部分を表します。既定値は `0` 分を表します。
- `seconds` {{optional_inline}}
  - : 整数値で、時刻の秒の部分を表します。既定値は `0` 秒を表します。
- `milliseconds` {{optional_inline}}
  - : 整数値で、時刻のミリ秒の部分を表します。既定値は `0` ミリ秒です。

### 返値

`new Date()` （`Date()` コンストラクター）を呼び出すと、 [`Date`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date) オブジェクトを返します。日付として無効な文字列、または構築される日付が UNIX タイムスタンプの `-8,640,000,000,000,000` ミリ秒未満または `8,640,000,000,000,000` ミリ秒より大きくなる場合、 `Date` オブジェクトを返しますが、その [`toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toString) メソッドが `Invalid Date` という文字列を返します。

`Date()` 関数を（`new` キーワードなしで）呼び出すと、 `new Date().toString()` と全く同じように、現在の日付と時刻を文字列で表現したものを返します。 `Date()` 関数を（`new` キーワードなしで）呼び出す際に指定された引数は無視されます。無効な日付文字列で呼び出された場合でも、あるいは、任意のオブジェクトや他のプリミティブを引数として呼び出された場合でも、常に現在の日付と時刻を文字列で表現したものを返します。

## 例

### Date オブジェクトを生成するいくつかの方法

以下の例で、JavaScript の Date を生成するいくつかの方法を示します。

```js
const today = new Date();
const birthday = new Date("December 17, 1995 03:24:00"); // 非推奨: すべてのランタイムで動作するとは限りません
const birthday = new Date("1995-12-17T03:24:00"); // ISO-8601 互換であり、動作に信頼性があります
const birthday = new Date(1995, 11, 17); // 月は 0 から始まります
const birthday = new Date(1995, 11, 17, 3, 24, 0);
const birthday = new Date(628021800000); // 元期のタイムスタンプを渡す
```

### 日付でも文字列でも数値でもない値を渡す

もし、 `Date()` コンストラクターが `Date` インスタンスではない 1 つの引数で呼び出された場合、プリミティブに変換された後、文字列であるかどうかがチェックされます。例えば、 `new Date(undefined)` は `new Date()` とは異なります。

```js
console.log(new Date(undefined)); // Invalid Date
```

これは、 `undefined` は既にプリミティブであるものの、文字列ではないため、数値である [`NaN`](/ja/docs/Web/JavaScript/Reference/Global_Objects/NaN) に変換され、タイムスタンプとして有効なものにならないからです。他にも、 `null` は `0` に変換されます。

```js
console.log(new Date(null)); // 1970-01-01T00:00:00.000Z
```

[配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)は [`Array.prototype.toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) によって文字列に強制され、要素はカンマで結合されます。しかし、複数の要素を持つ配列の結果の文字列は、有効な ISO 8601 日付文字列ではないため、その解釈の動作は実装依存となります。 **Date() コンストラクターに、配列を渡さないでください。**

```js
console.log(new Date(["2020-06-19", "17:13"]));
// Chrome では 2020-06-19T17:13:00.000Z になります。 "2020-06-19,17:13" と解釈されるからです。
// Firefox では "Invalid Date" となります。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date")}}
