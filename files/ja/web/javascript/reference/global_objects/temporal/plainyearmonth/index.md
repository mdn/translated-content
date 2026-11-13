---
title: Temporal.PlainYearMonth
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth
l10n:
  sourceCommit: 9b86874b5762b52ce0055f58d561004d1a204ad5
---

**`Temporal.PlainYearMonth`** オブジェクトは、日やタイムゾーンを含まない、暦日の年と月を表します。例えば、暦上でその月全体にわたって現れるイベントなどが該当します。これは基本的に、年、月、日のフィールドと関連付けられた暦体系を持つ ISO 8601 形式の暦日として表現されます。ISO 以外の暦体系では、年と月の曖昧さを解消するために「日」が使用されます。

## 解説

`PlainYearMonth` は本質的に {{jsxref("Temporal.PlainDate")}} オブジェクトの年月部分であり、日を除いたものです。

### RFC 9557 形式

`PlainYearMonth` オブジェクトは、[RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) 形式（[ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) 形式を拡張したもの）を使用してシリアライズおよび構文解析することができます。文字列は次の形式をとります（空白は可読性のためのものであり、実際の文字列には含めないでください）。

```plain
YYYY-MM-DD [u-ca=calendar_id]
```

- `YYYY`
  - : 4 桁の数値、または `+` または `-` の符号をつけた 6 桁の数値です。
- `MM`
  - : `01` ～ `12` の 2 桁の数値です。
- `DD` {{optional_inline}}
  - : `01` ～ `31` の 2 桁の数値です。ISO 以外の暦では必須であり、それ以外の場合はオプションです。省略された場合、文字列は `YYYY-MM` または `YYYYMM` の形式になります。実際に格納される基準日は指定された日と異なる場合がありますが、表される年と月は同じであることにご注意ください。情報については、{{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} を参照してください。`YYYY`、`MM`、`DD` の各成分は `-` で区切るか、区切らないかを選択できます。
- `[u-ca=calendar_id]` {{optional_inline}}
  - : `calendar_id` を、使用する暦に置き換えます。一般的に対応している暦の種類のリストについては、[`Intl.supportedValuesOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#対応している暦) を参照してください。デフォルトは `[u-ca=iso8601]` です。キーの先頭に `!` をつけて、`[!u-ca=iso8601]` のように重要フラグを持たせることができます。このフラグは、一般的に、他のシステムに対して、対応していない場合でも無視してはならないことを指示します。`Temporal` パーサーでは、注釈に 2 つ以上のカレンダー注釈が含まれており、そのうちの 1 つが重要フラグ付きの場合、エラーが発生します。なお、`YYYY-MM-DD` は常に ISO 8601 暦の日付として解釈され、その後、指定された暦に変換される点にご注意ください。

入力として、オプションで時刻、オフセット、タイムゾーン識別子を [`PlainDateTime`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_形式) と同じ書式で含めることができますが、これらは無視されます。それ以外の `[key=value]` 形式の注釈も同時に無視されます。また、これらの注釈には重要フラグを指定してはいけません。

シリアライズを行う際、カレンダー ID を表示させるかどうか、重要フラグを追加するかどうかを設定できます。

## コンストラクター

- {{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}} {{experimental_inline}}
  - : 基盤となるデータを直接指定して、新しい `Temporal.PlainYearMonth` オブジェクトを作成します。

## 静的メソッド

- {{jsxref("Temporal/PlainYearMonth/compare", "Temporal.PlainYearMonth.compare()")}}
  - : 1 つ目の年月が 2 つ目の年月よりも前か、同じか、後かを示す数値（-1、0、1 のいずれか）を返します。これは、基盤となる ISO 8601 形式の日付を比較することと同等です。異なる暦に基づく 2 つの年月であっても、始まる日が同じ ISO 日付であれば、等しいとみなされる場合があります。
- {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}
  - : 新しい `Temporal.PlainYearMonth` オブジェクトを、別の `Temporal.PlainYearMonth` オブジェクト、年月のプロパティを持つオブジェクト、[RFC 9557](#rfc_9557_形式) 形式の文字列からのいずれかから作成します。

## インスタンスプロパティ

これらのプロパティは `Temporal.PlainYearMonth.prototype` に定義されており、すべての `Temporal.PlainYearMonth` インスタンスで共有されています。

- {{jsxref("Temporal/PlainYearMonth/calendarId", "Temporal.PlainYearMonth.prototype.calendarId")}}
  - : 内部の ISO 8601 日付を解釈するために使用する[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)を表す文字列を返します。
- {{jsxref("Object/constructor", "Temporal.PlainYearMonth.prototype.constructor")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数です。`Temporal.PlainYearMonth` のインスタンスの場合、初期値は {{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}} コンストラクターとなります。
- {{jsxref("Temporal/PlainYearMonth/daysInMonth", "Temporal.PlainYearMonth.prototype.daysInMonth")}}
  - : この日付の月の日数を表す正の整数を返します。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。
- {{jsxref("Temporal/PlainYearMonth/daysInYear", "Temporal.PlainYearMonth.prototype.daysInYear")}}
  - : この日付の属する年の日数を表す正の整数を返します。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 ISO 8601 暦では、この日は 365 日、閏年の場合は 366 日となります。
- {{jsxref("Temporal/PlainYearMonth/era", "Temporal.PlainYearMonth.prototype.era")}}
  - : この年月の時代を、使用している暦に固有の小文字の文字列として返します。暦が時代を使用しない場合（ISO 8601 など）は `undefined` を返します。`era` と `eraYear` を組み合わせることで、`year` と同様に、暦内の年を一意に特定することができます。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 グレゴリオ暦では、`"ce"` または `"bce"` のどちらかです。
- {{jsxref("Temporal/PlainYearMonth/eraYear", "Temporal.PlainYearMonth.prototype.eraYear")}}
  - : この年月が属する時代における年を非負の整数で表します。暦が時代を使用していない場合（ISO 8601 など）は `undefined` を返します。年のインデックスは通常、1（より一般的）または 0 から始まり、紀元内の年は時間の経過とともに減少させることも可能です（例：グレゴリオ暦の BCE）。`era` と `eraYear` を組み合わせることで、`year` と同様に、カレンダー内の年を一意に特定することができます。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。
- {{jsxref("Temporal/PlainYearMonth/inLeapYear", "Temporal.PlainYearMonth.prototype.inLeapYear")}}
  - : この年月が閏年であるかどうかを示す論理値を返します。閏年とは、閏日や閏月があるため、平年よりも日数が多くなる年のことです。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。
- {{jsxref("Temporal/PlainYearMonth/month", "Temporal.PlainYearMonth.prototype.month")}}
  - : この年月の年における、1 を起点とする月のインデックスを表す正の整数を返します。この年の最初の月は `1` であり、最後の月は {{jsxref("Temporal/PlainYearMonth/monthsInYear", "monthsInYear")}} です。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 なお、{{jsxref("Date.prototype.getMonth()")}} とは異なり、インデックスは 1 から始まります。カレンダーに閏月が含まれる場合、同じ {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} を持つ月でも、年によって `month` インデックスが異なることがあります。
- {{jsxref("Temporal/PlainYearMonth/monthCode", "Temporal.PlainYearMonth.prototype.monthCode")}}
  - : この年月の月を表す、暦に依存した文字列を返します。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 通常は `M` に 2 桁の月番号が加わります。閏月の場合、前回月のコードに `L` が続きます。閏月が年の最初の月である場合、コードは `M00L` となります。
- {{jsxref("Temporal/PlainYearMonth/monthsInYear", "Temporal.PlainYearMonth.prototype.monthsInYear")}}
  - : この日付が属する年の月数を表す正の整数を返します。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 ISO 8601 暦では、この数字は常に 12 ですが、その他の暦体系では異なる場合があります。
- {{jsxref("Temporal/PlainYearMonth/year", "Temporal.PlainYearMonth.prototype.year")}}
  - : この年月が、その暦固有の元期年から経過した年数を表す整数を返します。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 通常、1 年目は、最新の時代の最初の年、あるいは ISO 8601 の年号 `0001` のどちらかになります。元期が年の途中にある場合、その年は時代の開始日以前と後で同じ値を持ちます。
- `Temporal.PlainYearMonth.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列 `"Temporal.PlainYearMonth"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## インスタンスメソッド

- {{jsxref("Temporal/PlainYearMonth/add", "Temporal.PlainYearMonth.prototype.add()")}}
  - : 新しい `Temporal.PlainYearMonth` オブジェクトを作成し、この年月を、指定された時間（{{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} で変換可能な形式のもの）だけ未来へ移動させた値を設定して返します。
- {{jsxref("Temporal/PlainYearMonth/equals", "Temporal.PlainYearMonth.prototype.equals()")}}
  - : この年月が、別の年月（{{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} で変換可能な形式のもの）と値が等しい場合は `true` を返し、そうでない場合は `false` を返します。比較は、基盤となる ISO 日付値と暦の両方によって行われるため、異なる暦に属する 2 つの年月が、{{jsxref("Temporal/PlainYearMonth/compare", "Temporal.PlainYearMonth.compare()")}} では等しいとみなされる場合でも、`equals()` では等しいとみなされないことがあります。
- {{jsxref("Temporal/PlainYearMonth/since", "Temporal.PlainYearMonth.prototype.since()")}}
  - : 新しい {{jsxref("Temporal.Duration")}} オブジェクトを作成し、別の年月（{{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} で変換可能な形式のもの）からこの年月までの経過時間を設定して返します。別の年月がこの年月より前の場合は経過時間は正の値となり、後の場合は負の値となります。
- {{jsxref("Temporal/PlainYearMonth/subtract", "Temporal.PlainYearMonth.prototype.subtract()")}}
  - : 新しい `Temporal.PlainYearMonth` オブジェクトを作成し、この年月から、指定された期間（{{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} で変換可能な形式のもの）だけ過去へ移動させた値を設定して返します。
- {{jsxref("Temporal/PlainYearMonth/toJSON", "Temporal.PlainYearMonth.prototype.toJSON()")}}
  - : この年月を表す文字列を、{{jsxref("Temporal/PlainYearMonth/toString", "toString()")}} を呼び出した場合と同じ [RFC 9557 形式](#rfc_9557_形式)で返します。{{jsxref("JSON.stringify()")}} によって暗黙的に呼び出されることを意図しています。
- {{jsxref("Temporal/PlainYearMonth/toLocaleString", "Temporal.PlainYearMonth.prototype.toLocaleString()")}}
  - : この年月を、言語に応じた形式で表した文字列で返します。
- {{jsxref("Temporal/PlainYearMonth/toPlainDate", "Temporal.PlainYearMonth.prototype.toPlainDate()")}}
  - : 新しい {{jsxref("Temporal.PlainDate")}} オブジェクトを作成し、この年月と指定された日を、同じ暦体系で表した値を設定して返します。
- {{jsxref("Temporal/PlainYearMonth/toString", "Temporal.PlainYearMonth.prototype.toString()")}}
  - : この年月を表す [RFC 9557 形式](#rfc_9557_形式)の文字列を返します。
- {{jsxref("Temporal/PlainYearMonth/until", "Temporal.PlainYearMonth.prototype.until()")}}
  - : 新しい {{jsxref("Temporal.Duration")}} オブジェクトを作成し、この年月からある年月（{{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} によって変換可能な形式のもの）までの期間を表す値を設定して返します。この期間は、ある月がこの月の後にある場合には正の値となり、前にある場合は負の値となります。
- {{jsxref("Temporal/PlainYearMonth/valueOf", "Temporal.PlainYearMonth.prototype.valueOf()")}}
  - : {{jsxref("TypeError")}} が発生します。これにより、算術演算や比較演算で使用される際、`Temporal.PlainYearMonth` のインスタンスが[プリミティブ型へ暗黙的に変換される](/ja/docs/Web/JavaScript/Guide/Data_structures#プリミティブ変換)ことが防止されます。
- {{jsxref("Temporal/PlainYearMonth/with", "Temporal.PlainYearMonth.prototype.with()")}}
  - : 新しい `Temporal.PlainYearMonth` オブジェクトを作成し、この年月の一部のフィールドを新しい値に置き換えたものを表したものを設定して返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.PlainMonthDay")}}
