---
title: Temporal.PlainDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime
l10n:
  sourceCommit: 9b86874b5762b52ce0055f58d561004d1a204ad5
---

**`Temporal.PlainDateTime`** オブジェクトは、タイムゾーンを含まない日付（暦日）と時刻（壁時計時刻）を表します。基本的には、[日付](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate)（関連付けられた暦体系を伴う）と[時刻](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime)の組み合わせとして表現されます。

## 解説

`PlainDateTime` は、本質的に {{jsxref("Temporal.PlainDate")}} と {{jsxref("Temporal.PlainTime")}} を組み合わせたものです。日付と時刻の情報にはあまり相互作用がないため、日付プロパティに関する一般的な情報はすべて `PlainDate` オブジェクトに、時刻プロパティに関する一般的な情報はすべて `PlainTime` オブジェクトに記載されています。

日時が、タイムゾーンを超えて不変であるべき特定の瞬間を表す場合は、代わりに {{jsxref("Temporal.ZonedDateTime")}} オブジェクトを使用してください。特定の壁時計時刻に現れるイベントを表す必要がある場合、その時刻はタイムゾーンによって異なる瞬間となる可能性があるため、`PlainDateTime` を使用してください。

### RFC 9557 形式

`PlainDateTime` オブジェクトは、[RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) 形式（[ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) 形式を拡張したもの）を使用してシリアライズおよび構文解析することができます。文字列は次の形式をとります（空白は可読性のためのものであり、実際の文字列には含めないでください）。

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss [u-ca=calendar_id]
```

- `YYYY`
  - : 4 桁の数値、または `+` または `-` の符号をつけた 6 桁の数値です。
- `MM`
  - : `01` ～ `12` の 2 桁の数値です。
- `DD`
  - : `01` ～ `31` の 2 桁の数値で、`YYYY`、`MM`、`DD` の各成分は `-` で区切ることも、区切らないこともできます。
- `T` {{optional_inline}}
  - : 日付と時刻を区切るもので、 `T`、`t`、空白のいずれかにすることができます。`HH` が存在するときのみ存在します。
- `HH` {{optional_inline}}
  - : `00` ～ `23` の 2 桁の数値です。デフォルト値は `00` です。
- `mm` {{optional_inline}}
  - : `00` ～ `59` の 2 桁の数値です。デフォルト値は `00` です。
- `ss.sssssssss` {{optional_inline}}
  - : `00` ～ `59` の 2 桁の数値です。必要に応じて、その後に `.` または `,` と、1 桁から 9 桁の数字が続く場合があります。デフォルトは `00` です。`HH`、`mm`、`ss` の各要素は、`:` で区切るか、区切らないかを選択できます。`ss` のみ、あるいは `ss` と `mm` の両方を省略できるため、時刻は `HH`、`HH:mm`、または `HH:mm:ss.sssssssss` の 3 つの形式のいずれかになります。
- `[u-ca=calendar_id]` {{optional_inline}}
  - : `calendar_id` を、使用する暦に置き換えます。一般的に対応している暦の種類のリストについては、[`Intl.supportedValuesOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#対応している暦) を参照してください。デフォルトは `[u-ca=iso8601]` です。キーの先頭に `!` をつけて、`[!u-ca=iso8601]` のように重要フラグを持たせることができます。このフラグは、一般的に、他のシステムに対して、対応していない場合でも無視してはならないことを指示します。`Temporal` パーサーでは、注釈に 2 つ以上のカレンダー注釈が含まれており、そのうちの 1 つが重要フラグ付きの場合、エラーが発生します。なお、`YYYY-MM-DD` は常に ISO 8601 暦の日付として解釈され、その後、指定された暦に変換される点にご注意ください。

入力として、オプションでオフセットとタイムゾーン識別子を [`ZonedDateTime`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_形式) と同じ書式で含めることができますが、これらは無視されます。なお、オフセットは `Z` であってはいけません。それ以外の `[key=value]` 形式の注釈も同時に無視されます。また、これらの注釈には重要フラグを指定してはいけません。

シリアライズを行う際、小数点以下の桁数、カレンダー ID を表示させるかどうか、重要フラグを追加するかどうかを設定できます。

## コンストラクター

- {{jsxref("Temporal/PlainDateTime/PlainDateTime", "Temporal.PlainDateTime()")}} {{experimental_inline}}
  - : 基盤となるデータを直接指定して、新しい `Temporal.PlainDateTime` オブジェクトを作成します。

## 静的メソッド

- {{jsxref("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}}
  - : 1 つ目の日時が 2 つ目の日時よりも前か、同じか、後かを示す数値（-1、0、1 のいずれか）を返します。まず日付を比較し、日付が同じ場合は次に時刻を比較することと同等です。
- {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}
  - : 新しい `Temporal.PlainDateTime` オブジェクトを、別の `Temporal.PlainDateTime` オブジェクト、日付および時刻のプロパティを持つオブジェクト、[RFC 9557](#rfc_9557_形式) 形式の文字列からのいずれかから作成します。

## インスタンスプロパティ

これらのプロパティは `Temporal.PlainDateTime.prototype` に定義されており、すべての `Temporal.PlainDateTime` インスタンスで共有されています。

- {{jsxref("Temporal/PlainDateTime/calendarId", "Temporal.PlainDateTime.prototype.calendarId")}}
  - : 内部の ISO 8601 日付を解釈するために使用する[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)を表す文字列を返します。
- {{jsxref("Object/constructor", "Temporal.PlainDateTime.prototype.constructor")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数です。`Temporal.PlainDateTime` のインスタンスの場合、初期値は {{jsxref("Temporal/PlainDateTime/PlainDateTime", "Temporal.PlainDateTime()")}} コンストラクターとなります。
- {{jsxref("Temporal/PlainDateTime/day", "Temporal.PlainDateTime.prototype.day")}}
  - : この日付の月における、1 を起点とする日のインデックスを表す正の整数を返します。これは、カレンダーで表示される日の数値と同じものです。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。通常は 1 から始まり連続していますが、常にそうとは限りません。
- {{jsxref("Temporal/PlainDateTime/dayOfWeek", "Temporal.PlainDateTime.prototype.dayOfWeek")}}
  - : この日付を含む週における、1 を起点とする曜日のインデックスを表す正の整数を返します。曜日の番号は `1` から {{jsxref("Temporal/PlainDateTime/daysInWeek", "daysInWeek")}} まで順に付けられ、それぞれの番号はその曜日の名称に対応しています。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。通常、1 は暦における月曜日を表しますが、その暦を使用するロケールによっては、週の初日を別の曜日と考えてみる場合があります（{{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}} を参照）。
- {{jsxref("Temporal/PlainDateTime/dayOfYear", "Temporal.PlainDateTime.prototype.dayOfYear")}}
  - : この日付の年における、1 を起点とする日のインデックスを表す正の整数を返します。この年の初日は `1` であり、最終日は {{jsxref("Temporal/PlainDateTime/daysInYear", "daysInYear")}} です。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。
- {{jsxref("Temporal/PlainDateTime/daysInMonth", "Temporal.PlainDateTime.prototype.daysInMonth")}}
  - : この日付の月の日数を表す正の整数を返します。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。
- {{jsxref("Temporal/PlainDateTime/daysInWeek", "Temporal.PlainDateTime.prototype.daysInWeek")}}
  - : この日付の週に含まれる日数を表す正の整数を返します。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 ISO 8601 暦では、この数字は常に 7 ですが、他の暦体系では週ごとに異なることがあります。
- {{jsxref("Temporal/PlainDateTime/daysInYear", "Temporal.PlainDateTime.prototype.daysInYear")}}
  - : この日付の属する年の日数を表す正の整数を返します。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 ISO 8601 暦では、この日は 365 日、閏年の場合は 366 日となります。
- {{jsxref("Temporal/PlainDateTime/era", "Temporal.PlainDateTime.prototype.era")}}
  - : この日付の時代を、使用している暦に固有の小文字の文字列として返します。暦が時代を使用しない場合（ISO 8601 など）は `undefined` を返します。`era` と `eraYear` を組み合わせることで、`year` と同様に、暦内の年を一意に特定することができます。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 グレゴリオ暦では、`"ce"` または `"bce"` のどちらかです。
- {{jsxref("Temporal/PlainDateTime/eraYear", "Temporal.PlainDateTime.prototype.eraYear")}}
  - : この日付が属する時代における年を非負の整数で表します。暦が時代を使用していない場合（ISO 8601 など）は `undefined` を返します。年のインデックスは通常、1（より一般的）または 0 から始まり、紀元内の年は時間の経過とともに減少させることも可能です（例：グレゴリオ暦の BCE）。`era` と `eraYear` を組み合わせることで、`year` と同様に、カレンダー内の年を一意に特定することができます。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。
- {{jsxref("Temporal/PlainDateTime/hour", "Temporal.PlainDateTime.prototype.hour")}}
  - : この時刻の時間成分を表す 0 から 23 までの整数を返します。
- {{jsxref("Temporal/PlainDateTime/inLeapYear", "Temporal.PlainDateTime.prototype.inLeapYear")}}
  - : この日付が閏年であるかどうかを示す論理値を返します。閏年とは、閏日や閏月があるため、平年よりも日数が多くなる年のことです。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。
- {{jsxref("Temporal/PlainDateTime/microsecond", "Temporal.PlainDateTime.prototype.microsecond")}}
  - : この時刻のマイクロ秒（10<sup>-6</sup> 秒）成分を表す 0 から 999 までの整数を返します。
- {{jsxref("Temporal/PlainDateTime/millisecond", "Temporal.PlainDateTime.prototype.millisecond")}}
  - : この時刻のミリ秒（10<sup>-3</sup> 秒）成分を表す 0 から 999 までの整数を返します。
- {{jsxref("Temporal/PlainDateTime/minute", "Temporal.PlainDateTime.prototype.minute")}}
  - : この時刻の分の成分を表す 0 から 59 までの整数を返します。
- {{jsxref("Temporal/PlainDateTime/month", "Temporal.PlainDateTime.prototype.month")}}
  - : この日付の年における、1 を起点とする月のインデックスを表す正の整数を返します。この年の最初の月は `1` であり、最後の月は {{jsxref("Temporal/PlainDateTime/monthsInYear", "monthsInYear")}} です。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 なお、{{jsxref("Date.prototype.getMonth()")}} とは異なり、インデックスは 1 から始まります。カレンダーに閏月が含まれる場合、同じ {{jsxref("Temporal/PlainDateTime/monthCode", "monthCode")}} を持つ月でも、年によって `month` インデックスが異なることがあります。
- {{jsxref("Temporal/PlainDateTime/monthCode", "Temporal.PlainDateTime.prototype.monthCode")}}
  - : この日付の月を表す、暦に依存した文字列を返します。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 通常は `M` に 2 桁の月番号が加わります。閏月の場合、前回月のコードに `L` が続きます。閏月が年の最初の月である場合、コードは `M00L` となります。
- {{jsxref("Temporal/PlainDateTime/monthsInYear", "Temporal.PlainDateTime.prototype.monthsInYear")}}
  - : この日付が属する年の月数を表す正の整数を返します。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 ISO 8601 暦では、この数字は常に 12 ですが、その他の暦体系では異なる場合があります。
- {{jsxref("Temporal/PlainDateTime/nanosecond", "Temporal.PlainDateTime.prototype.nanosecond")}}
  - : この時刻のナノ秒（10<sup>-9</sup> 秒）成分を表す 0 から 999 までの整数を返します。
- {{jsxref("Temporal/PlainDateTime/second", "Temporal.PlainDateTime.prototype.second")}}
  - : この時刻の秒の成分を表す 0 から 59 までの整数を返します。
- {{jsxref("Temporal/PlainDateTime/weekOfYear", "Temporal.PlainDateTime.prototype.weekOfYear")}}
  - : この日付における {{jsxref("Temporal/PlainDateTime/yearOfWeek", "yearOfWeek")}} での、1 を起点とする週のインデックスを表す正の整数を返します。カレンダーが明確に定義された週の制度を持たない場合は `undefined` を返します。年の最初の週は `1` です。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 なお、ISO 8601 では、年の最初と最後の数日間は、前回年の最後の週、あるいは翌年の最初の週に関連付けられることがあります。
- {{jsxref("Temporal/PlainDateTime/year", "Temporal.PlainDateTime.prototype.year")}}
  - : この日付が、その暦固有の元期年から経過した年数を表す整数を返します。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 通常、1 年目は、最新の時代の最初の年、あるいは ISO 8601 の年号 `0001` のどちらかになります。元期が年の途中にある場合、その年は時代の開始日以前と後で同じ値を持ちます。
- {{jsxref("Temporal/PlainDateTime/yearOfWeek", "Temporal.PlainDateTime.prototype.yearOfWeek")}}
  - : この日付の {{jsxref("Temporal/PlainDateTime/weekOfYear", "weekOfYear")}} に対応する年を表す整数を返します。その暦に明確に定義された週の制度がない場合は、`undefined` を返します。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 通常、これは年の週番号ですが、ISO 8601 では、年の最初と最後の数日間は、前回年の最後の週または翌年の最初の週に関連付けられる場合があり、その結果、`yearOfWeek` が 1 だけずれることがあります。
- `Temporal.PlainDateTime.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列 `"Temporal.PlainDateTime"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## インスタンスメソッド

- {{jsxref("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}}
  - : 新しい `Temporal.PlainDateTime` オブジェクトを作成し、この日時を、指定された時間（{{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} で変換可能な形式のもの）だけ未来へ移動させた値を設定して返します。
- {{jsxref("Temporal/PlainDateTime/equals", "Temporal.PlainDateTime.prototype.equals()")}}
  - : この日時が別の日時（{{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} で変換可能な形式のもの）と値が等しい場合は `true` を返し、そうでない場合は `false` を返します。これらは日付と時刻の値だけでなく、暦によっても比較されるため、異なる暦に基づく 2 つの日時が、{{jsxref("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}} では等しいとみなされる場合でも、`equals()` では等しいとはみなされないことがあります。
- {{jsxref("Temporal/PlainDateTime/round", "Temporal.PlainDateTime.prototype.round()")}}
  - : 新しい `Temporal.PlainDateTime` オブジェクトを作成し、指定された単位に丸められたこの日時を表す値を設定して返します。
- {{jsxref("Temporal/PlainDateTime/since", "Temporal.PlainDateTime.prototype.since()")}}
  - : 新しい {{jsxref("Temporal.Duration")}} オブジェクトを作成し、別の日時（{{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} で変換可能な形式のもの）からこの日時までの経過時間を設定して返します。別の日時がこの日時より前の場合は経過時間は正の値となり、後の場合は負の値となります。
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
  - : 新しい `Temporal.PlainDateTime` オブジェクトを作成し、この日時から、指定された期間（{{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} で変換可能な形式のもの）だけ過去へ移動させた値を設定して返します。
- {{jsxref("Temporal/PlainDateTime/toJSON", "Temporal.PlainDateTime.prototype.toJSON()")}}
  - : この日時を表す文字列を、{{jsxref("Temporal/PlainDateTime/toString", "toString()")}} を呼び出した場合と同じ [RFC 9557 形式](#rfc_9557_形式)で返します。{{jsxref("JSON.stringify()")}} によって暗黙的に呼び出されることを意図しています。
- {{jsxref("Temporal/PlainDateTime/toLocaleString", "Temporal.PlainDateTime.prototype.toLocaleString()")}}
  - : この日時を、言語に応じた形式で表した文字列で返します。
- {{jsxref("Temporal/PlainDateTime/toPlainDate", "Temporal.PlainDateTime.prototype.toPlainDate()")}}
  - : 新しい {{jsxref("Temporal.PlainDate")}} オブジェクトを作成し、この日時と同じ暦体系における日付部分（年、月、日）を表す値を設定して返します。
- {{jsxref("Temporal/PlainDateTime/toPlainTime", "Temporal.PlainDateTime.prototype.toPlainTime()")}}
  - : 新しい {{jsxref("Temporal.PlainTime")}} オブジェクトを作成し、この日時の時刻部分（時、分、秒、ミリ秒の各成分）を表す値を設定して返します。
- {{jsxref("Temporal/PlainDateTime/toString", "Temporal.PlainDateTime.prototype.toString()")}}
  - : 指定されたタイムゾーンを使用して、この日時を表す [RFC 9557 形式](#rfc_9557_形式)の文字列を返します。
- {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}
  - : 新しい {{jsxref("Temporal.ZonedDateTime")}} インスタンスを作成し、この生の日時と同じ日時を、指定されたタイムゾーンで表した値を設定します。
- {{jsxref("Temporal/PlainDateTime/until", "Temporal.PlainDateTime.prototype.until()")}}
  - : 新しい {{jsxref("Temporal.Duration")}} オブジェクトを作成し、この日時からある日時（{{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} によって変換可能な形式のもの）までの期間を表す値を設定して返します。この期間は、ある日時がこの日時の後にある場合には正の値となり、前にある場合は負の値となります。
- {{jsxref("Temporal/PlainDateTime/valueOf", "Temporal.PlainDateTime.prototype.valueOf()")}}
  - : {{jsxref("TypeError")}} が発生します。これにより、算術演算や比較演算で使用される際、`Temporal.PlainDateTime` のインスタンスが[プリミティブ型へ暗黙的に変換される](/ja/docs/Web/JavaScript/Guide/Data_structures#プリミティブ変換)ことが防止されます。
- {{jsxref("Temporal/PlainDateTime/with", "Temporal.PlainDateTime.prototype.with()")}}
  - : 新しい `Temporal.PlainDateTime` オブジェクトを作成し、この日時の一部のフィールドを新しい値に置き換えたものを表したものを設定して返します。
- {{jsxref("Temporal/PlainDateTime/withCalendar", "Temporal.PlainDateTime.prototype.withCalendar()")}}
  - : 新しい `Temporal.PlainDateTime` オブジェクトを作成し、新しい暦体系で表したこの日時を設定して返します。
- {{jsxref("Temporal/PlainDateTime/withPlainTime", "Temporal.PlainDateTime.prototype.withPlainTime()")}}
  - : 新しい `Temporal.PlainDateTime` オブジェクトを作成し、この日時のうち時刻部分が完全に新しい時刻（{{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} で変換可能な形式のもの）に完全に置き換えたものを表す値を設定して返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal.ZonedDateTime")}}
