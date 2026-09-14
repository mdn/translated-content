---
title: Temporal.Instant
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

**`Temporal.Instant`** オブジェクトは、ナノ秒単位の精度で、固有の時点を表します。これは基本的に、タイムゾーンや暦体系とは無関係に、Unix 元期（1970 年 1 月 1 日午前 0 時、UTC）からの経過ナノ秒数として表されます。

## 解説

`Temporal.Instant`は、意味的には {{jsxref("Date")}} と同じです。どちらも単一の時点をカプセル化していますが、`Temporal.Instant` はミリ秒ではなくナノ秒単位で格納するため、より正確です。同時に、`Temporal.Instant` は、カレンダーやタイムゾーンの情報を一切想定しないため、`Date` の落とし穴を避けることができます。年や月などの日付や時刻の情報を読み取りたい場合は、まず {{jsxref("Temporal.ZonedDateTime")}} に {{jsxref("Temporal/Instant/toZonedDateTimeISO()", "toZonedDateTimeISO()")}} を使用して変換する必要があります。

`Date` から `Temporal.Instant` への変換には、{{jsxref("Date.prototype.toTemporalInstant()")}} メソッドが使用できます。このメソッドは、{{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}} などの他のメソッドよりも推奨されます。これは、前者のほうがユーザーコードが少なく、より最適化されている可能性があるためです。また、`Temporal.Instant` から `Date` への変換も、`new Date(instant.epochMilliseconds)` のように、その元期からのミリ秒数を使用することで可能です。

### RFC 9557 形式

`Instant` オブジェクトは、[RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) 形式（[ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) 形式を拡張したもの）を使用してシリアライズおよび構文解析することができます。文字列は次の形式をとります（空白は可読性のためのものであり、実際の文字列には含めないでください）。

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm
```

- `YYYY`
  - : 4 桁の数値、または `+` または `-` の符号をつけた 6 桁の数値です。
- `MM`
  - : `01` ～ `12` の 2 桁の数値です。
- `DD`
  - : `01` ～ `31` の 2 桁の数値で、`YYYY`、`MM`、`DD` の各成分は `-` で区切ることも、区切らないこともできます。
- `T`
  - : 日付と時刻を区切るもので、 `T`、`t`、空白のいずれかにすることができます。
- `HH`
  - : `00` ～ `23` の 2 桁の数値です。
- `mm` {{optional_inline}}
  - : `00` ～ `59` の 2 桁の数値です。デフォルト値は `00` です。
- `ss.sssssssss` {{optional_inline}}
  - : `00` ～ `59` の 2 桁の数値です。必要に応じて、その後に `.` または `,` と、1 桁から 9 桁の数字が続く場合があります。デフォルトは `00` です。`HH`、`mm`、`ss` の各要素は、`:` で区切るか、区切らないかを選択できます。`ss` のみ、あるいは `ss` と `mm` の両方を省略できるため、時刻は `HH`、`HH:mm`、または `HH:mm:ss.sssssssss` の 3 つの形式のいずれかになります。
- `Z/±HH:mm`
  - : UTC の指定子である `Z` または `z`、あるいは `+` または `-` で始まる UTC からのオフセットと、それに続く時刻要素と同じ書式の値です。なお、分未満の精度 (`:ss.sssssssss`) は他のシステムでは未対応の場合があり、受け入れられますが、出力されません。オフセットが提供された場合、時刻は指定されたオフセットに基づいて解釈されます。

入力として、オプションでタイムゾーン識別子や暦を、[`ZonedDateTime`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_形式) と同じ書式で含めることができますが、これらは無視されます。`[key=value]` 形式のその他の注釈も同時に無視されます。また、これらの注釈には critical フラグを指定してはいけません。

シリアライズを行う際、小数点以下の桁数やオフセットを設定することができます。

## コンストラクター

- {{jsxref("Temporal/Instant/Instant", "Temporal.Instant()")}} {{experimental_inline}}
  - : 基盤となるデータを直接指定して、新しい `Temporal.Instant` オブジェクトを作成します。

## 静的メソッド

- {{jsxref("Temporal/Instant/compare", "Temporal.Instant.compare()")}}
  - : 最初の時点が 2 番目の時点よりも前か、同じか、後かを示す数値（-1、0、1 のいずれか）を返します。これは、2 つの時点の {{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}} を比較することと同等です。
- {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}
  - : 新しい `Temporal.Instant` オブジェクトを、別の `Temporal.Instant` オブジェクト、または [RFC 9557](#rfc_9557_形式) 形式の文字列から作成します。
- {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}}
  - : 新しい `Temporal.Instant` オブジェクトを、Unix 元期（1970 年 1 月 1 日午前 0 時、UTC）からの経過ミリ秒数値から作成します。
- {{jsxref("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}}
  - : 新しい `Temporal.Instant` オブジェクトを、Unix 元期（1970 年 1 月 1 日午前 0 時、UTC）からの経過ナノ秒数値から作成します。

## インスタンスプロパティ

これらのプロパティは `Temporal.Instant.prototype` に定義されており、すべての `Temporal.Instant` インスタンスで共有されています。

- {{jsxref("Object/constructor", "Temporal.Instant.prototype.constructor")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数です。`Temporal.Instant` のインスタンスの場合、初期値は {{jsxref("Temporal/Instant/Instant", "Temporal.Instant()")}} コンストラクターとなります。
- {{jsxref("Temporal/Instant/epochMilliseconds", "Temporal.Instant.prototype.epochMilliseconds")}}
  - : Unix 元期（1970 年 1 月 1 日午前 0 時、UTC）から現時点までの経過ミリ秒数を表す数値を返します。これは、`epochNanoseconds` を `1e6` で割り、小数点以下を切り捨てた値に相当します。
- {{jsxref("Temporal/Instant/epochNanoseconds", "Temporal.Instant.prototype.epochNanoseconds")}}
  - : Unix 元期（1970 年 1 月 1 日午前 0 時、UTC）から現時点までの経過ナノ秒数を表す長整数 ({{jsxref("BigInt")}}) を返します。
- `Temporal.Instant.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列 `"Temporal.Instant"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## インスタンスメソッド

- {{jsxref("Temporal/Instant/add", "Temporal.Instant.prototype.add()")}}
  - : 新しい `Temporal.Instant` オブジェクトを作成し、この時点を、指定された時間（{{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} で変換可能な形式のもの）だけ未来へ移動させた値を設定して返します。
- {{jsxref("Temporal/Instant/equals", "Temporal.Instant.prototype.equals()")}}
  - : この時点が別の時点（{{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} で変換可能な形式のもの）と値が等しい場合は `true` を返し、そうでない場合は `false` を返します。これらは元期からのナノ秒数によって比較されます。`Temporal.Instant.compare(this, other) === 0` と同等です。
- {{jsxref("Temporal/Instant/round", "Temporal.Instant.prototype.round()")}}
  - : 指定された単位に丸められた、この時点を表す新しい `Temporal.Instant` オブジェクトを返します。
- {{jsxref("Temporal/Instant/since", "Temporal.Instant.prototype.since()")}}
  - : 新しい {{jsxref("Temporal.Duration")}} オブジェクトを作成し、別の時点（{{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} で変換可能な形式のもの）からこの時点までの経過時間を設定して返します。別の時点がこのの時点より前の場合は経過時間は正の値となり、後の場合は負の値となります。
- {{jsxref("Temporal/Instant/subtract", "Temporal.Instant.prototype.subtract()")}}
  - : 新しい `Temporal.Instant` オブジェクトを作成し、この時点から、指定された時間（{{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} で変換可能な形式のもの）だけ過去へ移動させた値を設定して返します。
- {{jsxref("Temporal/Instant/toJSON", "Temporal.Instant.prototype.toJSON()")}}
  - : この時点を表す文字列を、{{jsxref("Temporal/Instant/toString", "toString()")}} を呼び出した場合と同じ [RFC 9557 形式](#rfc_9557_形式)で返します。{{jsxref("JSON.stringify()")}} によって暗黙的に呼び出されることを意図しています。
- {{jsxref("Temporal/Instant/toLocaleString", "Temporal.Instant.prototype.toLocaleString()")}}
  - : この時点を、言語に応じた形式で表した文字列で返します。[`Intl.DateTimeFormat` API](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) に対応している実装では、このメソッドは `Intl.DateTimeFormat` に委譲します。
- {{jsxref("Temporal/Instant/toString", "Temporal.Instant.prototype.toString()")}}
  - : 指定されたタイムゾーンを使用して、この時点を表す [RFC 9557 形式](#rfc_9557_形式)の文字列を返します。
- {{jsxref("Temporal/Instant/toZonedDateTimeISO", "Temporal.Instant.prototype.toZonedDateTimeISO()")}}
  - : 新しい {{jsxref("Temporal.ZonedDateTime")}} オブジェクト作成し、ISO 8601 暦体系を使用して、指定されたタイムゾーンにおける現在の時刻を設定して返します。
- {{jsxref("Temporal/Instant/until", "Temporal.Instant.prototype.until()")}}
  - : 新しい {{jsxref("Temporal.Duration")}} オブジェクトを作成し、この時点からある時点（{{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} によって変換可能な形式のもの）までの期間を表す値を設定して返します。この期間は、ある時点がこの時点の後にある場合には正の値となり、前にある場合は負の値となります。
- {{jsxref("Temporal/Instant/valueOf", "Temporal.Instant.prototype.valueOf()")}}
  - : {{jsxref("TypeError")}} が発生します。これにより、算術演算や比較演算で使用される際、`Temporal.Instant` のインスタンスが[プリミティブ型へ暗黙的に変換される](/ja/docs/Web/JavaScript/Guide/Data_structures#プリミティブ変換)ことが防止されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal.ZonedDateTime")}}
