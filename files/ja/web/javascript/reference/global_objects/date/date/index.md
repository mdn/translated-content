---
title: Date() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Date/Date
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`Date()`** コンストラクターは {{jsxref("Date")}} オブジェクトを生成します。関数として呼び出された場合は、現在時刻を表す文字列を返します。

{{InteractiveExample("JavaScript デモ: Date() コンストラクター")}}

```js interactive-example
const date1 = new Date("December 17, 1995 03:24:00");
// Sun Dec 17 1995 03:24:00 GMT...

const date2 = new Date("1995-12-17T03:24:00");
// Sun Dec 17 1995 03:24:00 GMT...

console.log(date1.getTime() === date2.getTime());
// 予想される結果: true
```

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

> [!NOTE]
> `Date()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) ありでも `new` なしでも呼び出すことができますが、効果は異なります。[返値](#返値)を参照してください。

### 引数

`Date()` コンストラクターには 5 つの基本形があります。

#### 引数なし

引数が与えられなかった場合、新しく生成された `Date` オブジェクトはインスタンス化された時点の現在の日付と時刻を表します。返される日時の[タイムスタンプ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)は、 {{jsxref("Date.now()")}} で返される数値と同じです。

#### 時刻値またはタイムスタンプ値

- `value`
  - : [タイムスタンプ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)を表す整数値（1970 年 1 月 1 日午前 0 時 (UTC) からのミリ秒数、別名、[元期](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)）。

#### 日付文字列

- `dateString`
  - : {{jsxref("Date.parse()")}} で実装されているのと同じアルゴリズムを使用して解釈できる、日付を表す文字列値です。様々な書式を使用する場合の注意事項については、[日時文字列形式](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#日時文字列形式)を参照してください。

#### Date オブジェクト

- `dateObject`
  - : 既存の `Date` オブジェクトです。これは、既存の `Date` オブジェクトのコピーを、同じ日付と時刻で効率的に作成します。これは `new Date(dateObject.valueOf())` と同じですが、 `valueOf()` メソッドが呼び出されない点が異なります。

`Date()` コンストラクターに 1 つの引数が渡された場合、 `Date` インスタンスは特別に扱われます。他のすべての値は[プリミティブに変換](/ja/docs/Web/JavaScript/Guide/Data_structures#プリミティブ変換)されます。もし結果が文字列であれば、それは日時文字列として解釈されます。そうでない場合は、結果のプリミティブはさらに数値に強制され、タイムスタンプとして扱われます。

#### 独立した日付と時刻の成分の値

少なくとも年と月が指定された場合、この `Date()` の形式は `Date` オブジェクトを返します。その成分値（年、月、日、時、分、秒、ミリ秒）はすべて以下の引数から得られます。欠落しているフィールドには、使用可能な最小の値（`day` には `1`、他にもすべての成分には `0` ）が指定されます。引数の値はすべて、UTC ではなくローカルのタイムゾーンに対して評価されます。 {{jsxref("Date.UTC()")}} は同様の引数を受け入れますが、各成分を UTC として解釈し、タイムスタンプを返します。

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
  - : 整数値で、時刻の分の部分を表します。既定値は `0` です。
- `seconds` {{optional_inline}}
  - : 整数値で、時刻の秒の部分を表します。既定値は `0` です。
- `milliseconds` {{optional_inline}}
  - : 整数値で、時刻のミリ秒の部分を表します。既定値は `0` です。

### 返値

`new Date()` （`Date()` コンストラクター）を呼び出すと、 [`Date`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date) オブジェクトを返します。日時として無効な文字列、または構築される日時がタイムスタンプの `-8,640,000,000,000,000` ミリ秒以前または `8,640,000,000,000,000` ミリ秒より後になる場合、[無効な日時](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)（`Date` オブジェクトで {{jsxref("Date/toString", "toString()")}} メソッドが `"Invalid Date"` を返し、 {{jsxref("Date/valueOf", "valueOf()")}} メソッドが `NaN` を返すもの）を返します。

`Date()` 関数を（`new` キーワードなしで）呼び出すと、 `new Date().toString()` と全く同じように、現在の日付と時刻を文字列で表現したものを返します。 `Date()` 関数を（`new` キーワードなしで）呼び出す際に指定された引数は無視されます。無効な日付文字列で呼び出された場合でも、あるいは、任意のオブジェクトや他のプリミティブを引数として呼び出された場合でも、常に現在の日付と時刻を文字列で表現したものを返します。

## 解説

## 時間の精度の低下

タイミング攻撃や[フィンガープリンティング](/ja/docs/Glossary/Fingerprinting)に対する保護機能を提供するために、 `someFile.lastModified` の精度がブラウザーの設定に応じて丸められることがあります。
Firefox では、`privacy.reduceTimerPrecision` 設定は既定で有効になっており、既定で 2 ミリ秒になります。この場合、精度は 100ms または `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` の値のどちらか大きい方になります。

例えば、時刻の精度を下げた場合、`someFile.lastModified` の結果は常に 2 の倍数になり、`privacy.resistFingerprinting` を有効にした場合は 100 の倍数（または `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`）になります。

```js
// Firefox 60 での時間の制度の低下 (2ms)
someFile.lastModified;
// 取りうる値:
// 1519211809934
// 1519211810362
// 1519211811670
// …

// `privacy.resistFingerprinting` が有効な場合の時間の制度の低下
someFile.lastModified;
// 取りうる値:
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

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
