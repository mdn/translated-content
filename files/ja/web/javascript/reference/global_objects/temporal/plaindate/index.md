---
title: Temporal.PlainDate
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate
l10n:
  sourceCommit: 9b86874b5762b52ce0055f58d561004d1a204ad5
---

**`Temporal.PlainDate`** オブジェクトは、（時刻やタイムゾーンを含まない）暦日を表します。例えば、どのタイムゾーンで現れても、1 日を通して行われる暦上のイベントなどが該当します。これは基本的に、年、月、日のフィールドと、関連付けられた暦体系を持つ ISO 8601 形式の暦日として表現されます。

## 解説

`PlainDate` は、基本的に {{jsxref("Temporal.PlainDateTime")}} オブジェクトの日付部分から時刻情報を除去したものです。日付と時刻の情報にはあまり相互作用がないため、日付プロパティに関する一般的な情報はすべてここに記載されています。

### RFC 9557 形式

`PlainDate` オブジェクトは、[RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) 形式（[ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) 形式を拡張したもの）を使用してシリアライズおよび構文解析することができます。文字列は次の形式をとります（空白は可読性のためのものであり、実際の文字列には含めないでください）。

```plain
YYYY-MM-DD [u-ca=calendar_id]
```

- `YYYY`
  - : 4 桁の数値、または `+` または `-` の符号をつけた 6 桁の数値です。
- `MM`
  - : `01` ～ `12` の 2 桁の数値です。
- `DD`
  - : `01` ～ `31` の 2 桁の数値で、`YYYY`、`MM`、`DD` の各成分は `-` で区切るか、区切らないかを選択できます。
- `[u-ca=calendar_id]` {{optional_inline}}
  - : `calendar_id` を、使用する暦に置き換えます。一般的に対応している暦の種類のリストについては、[`Intl.supportedValuesOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#対応している暦) を参照してください。デフォルトは `[u-ca=iso8601]` です。キーの先頭に `!` をつけて、`[!u-ca=iso8601]` のように重要フラグを持たせることができます。このフラグは、一般的に、他のシステムに対して、対応していない場合でも無視してはならないことを指示します。`Temporal` パーサーでは、注釈に 2 つ以上のカレンダー注釈が含まれており、そのうちの 1 つが重要フラグ付きの場合、エラーが発生します。なお、`YYYY-MM-DD` は常に ISO 8601 暦の日付として解釈され、その後、指定された暦に変換される点にご注意ください。

入力として、オプションで時刻、オフセット、タイムゾーン識別子を [`PlainDateTime`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_形式) と同じ書式で含めることができますが、これらは無視されます。それ以外の `[key=value]` 形式の注釈も同時に無視されます。また、これらの注釈には重要フラグを指定してはいけません。

シリアライズを行う際、カレンダー ID を表示させるかどうか、重要フラグを追加するかどうかを設定できます。

### 不正な日付のクランプ

{{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}、{{jsxref("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}、{{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}、{{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}} の各メソッド、およびこれらに対応する他の `Temporal` オブジェクトのメソッドは、暦固有のプロパティを使用して日付を構築することができます。日付の成分が範囲外になる場合があります。ISO 暦では、これは常にオーバーフローであり、月が 12 を超えたり、日が 1 年分の日数を超えたりする場合などです。これを修正するには、値を許容される最大値に制限するだけで済みます。それ以外の暦では、不正な場合がより複雑になることがあります。`overflow: "constrain"` オプションを使用する場合、不正な日付は次のようして、有効な日付に修正されます。

- その日が存在せず、その月だけが存在する場合は、同じ月の中で最も近い日を選びます。その月に同じくらい近い日付が 2 つある場合は、より遅い方を選びます。
- その月が、その年に存在しない閏月である場合、その暦のユーザーの慣習に従って別の日付を指定します。通常、これは閏年であればその月が本来位置する前後の月の同じ日に当たることになります。
- その他の理由でその年にその月が存在しない場合は、同じ年の中で最も近い日付を選択します。その年に同じくらい近い日付が 2 つある場合は、より遅い方を選択します。
- その年が存在しない場合は、他の年の中で最も近い日付を選択します。同じくらい近い日付が 2 つある場合は、より遅い方を選択します。

## コンストラクター

- {{jsxref("Temporal/PlainDate/PlainDate", "Temporal.PlainDate()")}} {{experimental_inline}}
  - : 基盤となるデータを直接指定して、新しい `Temporal.PlainDate` オブジェクトを作成します。

## 静的メソッド

- {{jsxref("Temporal/PlainDate/compare", "Temporal.PlainDate.compare()")}}
  - : 1 つ目の日付が 2 つ目の日付よりも前か、同じか、後かを示す数値（-1、0、1 のいずれか）を返します。これは、基盤となる ISO 8601 形式の日付における年、月、日の各フィールドを比較することと同等です。
- {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}
  - : 新しい `Temporal.PlainDate` オブジェクトを、別の `Temporal.PlainDate` オブジェクト、日付のプロパティを持つオブジェクト、[RFC 9557](#rfc_9557_形式) 形式の文字列からのいずれかから作成します。

## インスタンスプロパティ

これらのプロパティは `Temporal.PlainDate.prototype` に定義されており、すべての `Temporal.PlainDate` インスタンスで共有されています。

- {{jsxref("Temporal/PlainDate/calendarId", "Temporal.PlainDate.prototype.calendarId")}}
  - : 内部の ISO 8601 日付を解釈するために使用する[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)を表す文字列を返します。
- {{jsxref("Object/constructor", "Temporal.PlainDate.prototype.constructor")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数です。`Temporal.PlainDate` のインスタンスの場合、初期値は {{jsxref("Temporal/PlainDate/PlainDate", "Temporal.PlainDate()")}} コンストラクターとなります。
- {{jsxref("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}}
  - : この日付の月における、1 を起点とする日のインデックスを表す正の整数を返します。これは、カレンダーで表示される日の数値と同じものです。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。通常は 1 から始まり連続していますが、常にそうとは限りません。
- {{jsxref("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}}
  - : この日付を含む週における、1 を起点とする曜日のインデックスを表す正の整数を返します。曜日の番号は `1` から {{jsxref("Temporal/PlainDate/daysInWeek", "daysInWeek")}} まで順に付けられ、それぞれの番号はその曜日の名称に対応しています。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。通常、1 は暦における月曜日を表しますが、その暦を使用するロケールによっては、週の初日を別の曜日と考えてみる場合があります（{{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}} を参照）。
- {{jsxref("Temporal/PlainDate/dayOfYear", "Temporal.PlainDate.prototype.dayOfYear")}}
  - : この日付の年における、1 を起点とする日のインデックスを表す正の整数を返します。この年の初日は `1` であり、最終日は {{jsxref("Temporal/PlainDate/daysInYear", "daysInYear")}} です。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。
- {{jsxref("Temporal/PlainDate/daysInMonth", "Temporal.PlainDate.prototype.daysInMonth")}}
  - : この日付の月の日数を表す正の整数を返します。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。
- {{jsxref("Temporal/PlainDate/daysInWeek", "Temporal.PlainDate.prototype.daysInWeek")}}
  - : この日付の週に含まれる日数を表す正の整数を返します。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 ISO 8601 暦では、この数字は常に 7 ですが、他の暦体系では週ごとに異なることがあります。
- {{jsxref("Temporal/PlainDate/daysInYear", "Temporal.PlainDate.prototype.daysInYear")}}
  - : この日付の属する年の日数を表す正の整数を返します。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 ISO 8601 暦では、この日は 365 日、閏年の場合は 366 日となります。
- {{jsxref("Temporal/PlainDate/era", "Temporal.PlainDate.prototype.era")}}
  - : この日付の時代を、使用している暦に固有の小文字の文字列として返します。暦が時代を使用しない場合（ISO 8601 など）は `undefined` を返します。`era` と `eraYear` を組み合わせることで、`year` と同様に、暦内の年を一意に特定することができます。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 グレゴリオ暦では、`"ce"` または `"bce"` のどちらかです。
- {{jsxref("Temporal/PlainDate/eraYear", "Temporal.PlainDate.prototype.eraYear")}}
  - : この日付が属する時代における年を非負の整数で表します。暦が時代を使用していない場合（ISO 8601 など）は `undefined` を返します。年のインデックスは通常、1（より一般的）または 0 から始まり、紀元内の年は時間の経過とともに減少させることも可能です（例：グレゴリオ暦の BCE）。`era` と `eraYear` を組み合わせることで、`year` と同様に、カレンダー内の年を一意に特定することができます。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。
- {{jsxref("Temporal/PlainDate/inLeapYear", "Temporal.PlainDate.prototype.inLeapYear")}}
  - : この日付が閏年であるかどうかを示す論理値を返します。閏年とは、閏日や閏月があるため、平年よりも日数が多くなる年のことです。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。
- {{jsxref("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}}
  - : この日付の年における、1 を起点とする月のインデックスを表す正の整数を返します。この年の最初の月は `1` であり、最後の月は {{jsxref("Temporal/PlainDate/monthsInYear", "monthsInYear")}} です。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 なお、{{jsxref("Date.prototype.getMonth()")}} とは異なり、インデックスは 1 から始まります。カレンダーに閏月が含まれる場合、同じ {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} を持つ月でも、年によって `month` インデックスが異なることがあります。
- {{jsxref("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}}
  - : この日付の月を表す、暦に依存した文字列を返します。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 通常は `M` に 2 桁の月番号が加わります。閏月の場合、前回月のコードに `L` が続きます。閏月が年の最初の月である場合、コードは `M00L` となります。
- {{jsxref("Temporal/PlainDate/monthsInYear", "Temporal.PlainDate.prototype.monthsInYear")}}
  - : この日付が属する年の月数を表す正の整数を返します。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 ISO 8601 暦では、この数字は常に 12 ですが、その他の暦体系では異なる場合があります。
- {{jsxref("Temporal/PlainDate/weekOfYear", "Temporal.PlainDate.prototype.weekOfYear")}}
  - : この日付における {{jsxref("Temporal/PlainDate/yearOfWeek", "yearOfWeek")}} での、1 を起点とする週のインデックスを表す正の整数を返します。カレンダーが明確に定義された週の制度を持たない場合は `undefined` を返します。年の最初の週は `1` です。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 なお、ISO 8601 では、年の最初と最後の数日間は、前回年の最後の週、あるいは翌年の最初の週に関連付けられることがあります。
- {{jsxref("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}
  - : この日付が、その暦固有の元期年から経過した年数を表す整数を返します。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 通常、1 年目は、最新の時代の最初の年、あるいは ISO 8601 の年号 `0001` のどちらかになります。元期が年の途中にある場合、その年は時代の開始日以前と後で同じ値を持ちます。
- {{jsxref("Temporal/PlainDate/yearOfWeek", "Temporal.PlainDate.prototype.yearOfWeek")}}
  - : この日付の {{jsxref("Temporal/PlainDate/weekOfYear", "weekOfYear")}} に対応する年を表す整数を返します。その暦に明確に定義された週の制度がない場合は、`undefined` を返します。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 通常、これは年の週番号ですが、ISO 8601 では、年の最初と最後の数日間は、前回年の最後の週または翌年の最初の週に関連付けられる場合があり、その結果、`yearOfWeek` が 1 だけずれることがあります。
- `Temporal.PlainDate.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列 `"Temporal.PlainDate"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## インスタンスメソッド

- {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}
  - : 新しい `Temporal.PlainDate` オブジェクトを作成し、この日付を、指定された時間（{{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} で変換可能な形式のもの）だけ未来へ移動させた値を設定して返します。
- {{jsxref("Temporal/PlainDate/equals", "Temporal.PlainDate.prototype.equals()")}}
  - : この日付が、別の日付（{{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} で変換可能な形式のもの）と値が等しい場合は `true` を返し、そうでない場合は `false` を返します。これらは日付値と暦の両方によって比較されます。
- {{jsxref("Temporal/PlainDate/since", "Temporal.PlainDate.prototype.since()")}}
  - : 新しい {{jsxref("Temporal.Duration")}} オブジェクトを作成し、別の日付（{{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} で変換可能な形式のもの）からこの日付までの経過時間を設定して返します。別の日付がこの日付より前の場合は経過時間は正の値となり、後の場合は負の値となります。
- {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}}
  - : 新しい `Temporal.PlainDate` オブジェクトを作成し、この日付から、指定された期間（{{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} で変換可能な形式のもの）だけ過去へ移動させた値を設定して返します。
- {{jsxref("Temporal/PlainDate/toJSON", "Temporal.PlainDate.prototype.toJSON()")}}
  - : この日付を表す文字列を、{{jsxref("Temporal/PlainDate/toString", "toString()")}} を呼び出した場合と同じ [RFC 9557 形式](#rfc_9557_形式)で返します。{{jsxref("JSON.stringify()")}} によって暗黙的に呼び出されることを意図しています。
- {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}
  - : この日付を、言語に応じた形式で表した文字列で返します。
- {{jsxref("Temporal/PlainDate/toPlainDateTime", "Temporal.PlainDate.prototype.toPlainDateTime()")}}
  - : 新しい {{jsxref("Temporal.PlainDateTime")}} オブジェクト作成し、この日付と指定された時刻を、同じ暦体系で表した値を設定して返します。
- {{jsxref("Temporal/PlainDate/toPlainMonthDay", "Temporal.PlainDate.prototype.toPlainMonthDay()")}}
  - : 新しい {{jsxref("Temporal.PlainMonthDay")}} オブジェクトを作成し、この日付の {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} および {{jsxref("Temporal/PlainDate/day", "day")}} を同じ暦体系で表した値を設定して返します。
- {{jsxref("Temporal/PlainDate/toPlainYearMonth", "Temporal.PlainDate.prototype.toPlainYearMonth()")}}
  - : 新しい {{jsxref("Temporal.PlainYearMonth")}} オブジェクトを作成し、この日付の {{jsxref("Temporal/PlainDate/year", "year")}} および {{jsxref("Temporal/PlainDate/month", "month")}} を同じ暦体系で表した値を設定して返します。
- {{jsxref("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}}
  - : この日付を表す [RFC 9557 形式](#rfc_9557_形式)の文字列を返します。
- {{jsxref("Temporal/PlainDate/toZonedDateTime", "Temporal.PlainDate.prototype.toZonedDateTime()")}}
  - : 新しい {{jsxref("Temporal.ZonedDateTime")}} オブジェクトを作成し、この日付、指定された時刻、指定されたタイムゾーンを同じ暦体系で表した値を設定します。
- {{jsxref("Temporal/PlainDate/until", "Temporal.PlainDate.prototype.until()")}}
  - : 新しい {{jsxref("Temporal.Duration")}} オブジェクトを作成し、この日付からある日付（{{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} によって変換可能な形式のもの）までの期間を表す値を設定して返します。この期間は、ある日付がこの日付の後にある場合には正の値となり、前にある場合は負の値となります。
- {{jsxref("Temporal/PlainDate/valueOf", "Temporal.PlainDate.prototype.valueOf()")}}
  - : {{jsxref("TypeError")}} が発生します。これにより、算術演算や比較演算で使用される際、`Temporal.PlainDate` のインスタンスが[プリミティブ型へ暗黙的に変換される](/ja/docs/Web/JavaScript/Guide/Data_structures#プリミティブ変換)ことが防止されます。
- {{jsxref("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}
  - : 新しい `Temporal.PlainDate` オブジェクトを作成し、この日付の一部のフィールドを新しい値に置き換えたものを表したものを設定して返します。
- {{jsxref("Temporal/PlainDate/withCalendar", "Temporal.PlainDate.prototype.withCalendar()")}}
  - : 新しい `Temporal.PlainDate` オブジェクトを作成し、新しい暦体系で表したこの日付を設定して返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal.PlainMonthDay")}}
- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal.ZonedDateTime")}}
