---
title: Temporal.PlainMonthDay
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

**`Temporal.PlainMonthDay`** オブジェクトは、年やタイムゾーンを含まない、暦日の月と日を表します。例えば、毎年繰り返し現れ、1 日を通して行われる暦上のイベントなどが該当します。これは基本的に、年、月、日のフィールドと、関連付けられた暦体系を持つ ISO 8601 形式の暦日として表現されます。ISO 以外の暦体系では、月と日を明確に区別するために年が使用されます。

## 解説

`PlainMonthDay`は、本質的に{{jsxref("Temporal.PlainDateTime")}}オブジェクトの月と日の部分であり、年を除いたものです。月と日の意味は年によって変わる可能性があるため（例えば、その日が存在するかどうか、あるいは翌日の月と日が何であるかなど）、このオブジェクト単体では、比較や加算、減算といった機能はほとんど提供されません。{{jsxref("Temporal/PlainDate/month", "month")}} プロパティさえも持っていません。これは、年がなければ月インデックスに意味がないためです（例えば、閏月がある場合、2 つの年の同じインデックスを持つ 2 つの月が異なる名称を持つ可能性があります）。

### RFC 9557 形式

`PlainMonthDay` オブジェクトは、[RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) 形式（[ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) 形式を拡張したもの）を使用してシリアライズおよび構文解析することができます。文字列は次の形式をとります（空白は可読性のためのものであり、実際の文字列には含めないでください）。

```plain
YYYY-MM-DD [u-ca=calendar_id]
```

- `YYYY` {{optional_inline}}
  - : 4 桁の数値、または `+` または `-` の符号をつけた 6 桁の数値です。ISO 以外の暦では必須であり、それ以外の場合はオプションです。省略する場合は、`YYYY-` を `--` に置き換える（文字列が `--MM-DD` または `--MMDD` になる）、あるいは `YYYY-` の部分を完全に省略する（文字列が `MM-DD` または `MMDD` になる）のいずれかを選択できます。実際に格納される基準年は、指定された年とは異なる場合がありますが、表される月と日は同じであることにご注意ください。情報については、{{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} を参照してください。
- `MM`
  - : `01` ～ `12` の 2 桁の数値です。
- `DD`
  - : `01` ～ `31` の 2 桁の数値で、`YYYY`、`MM`、`DD` の各成分は `-` で区切ることも、区切らないこともできます。
- `[u-ca=calendar_id]` {{optional_inline}}
  - : `calendar_id` を、使用する暦に置き換えます。一般的に対応している暦の種類のリストについては、[`Intl.supportedValuesOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#対応している暦) を参照してください。デフォルトは `[u-ca=iso8601]` です。キーの先頭に `!` をつけて、`[!u-ca=iso8601]` のように重要フラグを持たせることができます。このフラグは、一般的に、他のシステムに対して、対応していない場合でも無視してはならないことを指示します。`Temporal` パーサーでは、注釈に 2 つ以上のカレンダー注釈が含まれており、そのうちの 1 つが重要フラグ付きの場合、エラーが発生します。なお、`YYYY-MM-DD` は常に ISO 8601 暦の日付として解釈され、その後、指定された暦に変換される点にご注意ください。

入力として、オプションでタイムゾーン識別子、オフセット、時刻を [`PlainDateTime`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_形式) と同じ書式で含めることができますが、これらは無視されます。それ以外の `[key=value]` 形式の注釈も同時に無視されます。また、これらの注釈には重要フラグを指定してはいけません。

シリアライズを行う際、カレンダー ID を表示させるかどうか、重要フラグを追加するかどうかを設定できます。

## コンストラクター

- {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}} {{experimental_inline}}
  - : 基盤となるデータを直接指定して、新しい `Temporal.PlainMonthDay` オブジェクトを作成します。

## 静的メソッド

- {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}
  - : 新しい `Temporal.PlainMonthDay` オブジェクトを、別の `Temporal.PlainMonthDay` オブジェクト、月と日のプロパティを持つオブジェクト、[RFC 9557](#rfc_9557_形式) 形式の文字列からのいずれかから作成します。

## インスタンスプロパティ

これらのプロパティは `Temporal.PlainMonthDay.prototype` に定義されており、すべての `Temporal.PlainMonthDay` インスタンスで共有されています。

- {{jsxref("Temporal/PlainMonthDay/calendarId", "Temporal.PlainMonthDay.prototype.calendarId")}}
  - : 内部の ISO 8601 日付を解釈するために使用する[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)を表す文字列を返します。
- {{jsxref("Object/constructor", "Temporal.PlainMonthDay.prototype.constructor")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数です。`Temporal.PlainMonthDay` のインスタンスの場合、初期値は {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}} コンストラクターとなります。
- {{jsxref("Temporal/PlainMonthDay/day", "Temporal.PlainMonthDay.prototype.day")}}
  - : この日付の月における、1 を起点とする日のインデックスを表す正の整数を返します。これは、カレンダーで表示される日の数値と同じものです。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。通常は 1 から始まり連続していますが、常にそうとは限りません。
- {{jsxref("Temporal/PlainMonthDay/monthCode", "Temporal.PlainMonthDay.prototype.monthCode")}}
  - : この日付の月を表す、暦に依存した文字列を返します。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 通常は `M` に 2 桁の月番号が加わります。閏月の場合、前回月のコードに `L` が続きます。閏月が年の最初の月である場合、コードは `M00L` となります。
- `Temporal.PlainMonthDay.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列 `"Temporal.PlainMonthDay"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## インスタンスメソッド

- {{jsxref("Temporal/PlainMonthDay/equals", "Temporal.PlainMonthDay.prototype.equals()")}}
  - : この月日が別の月日（{{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} で変換可能な形式のもの）と値が等しい場合は `true` を返し、そうでない場合は `false` を返します。これらは日付の値と暦の両方によって比較されます。
- {{jsxref("Temporal/PlainMonthDay/toJSON", "Temporal.PlainMonthDay.prototype.toJSON()")}}
  - : この月日を表す文字列を、{{jsxref("Temporal/PlainMonthDay/toString", "toString()")}} を呼び出した場合と同じ [RFC 9557 形式](#rfc_9557_形式)で返します。{{jsxref("JSON.stringify()")}} によって暗黙的に呼び出されることを意図しています。
- {{jsxref("Temporal/PlainMonthDay/toLocaleString", "Temporal.PlainMonthDay.prototype.toLocaleString()")}}
  - : この月日を、言語に応じた形式で表した文字列で返します。
- {{jsxref("Temporal/PlainMonthDay/toPlainDate", "Temporal.PlainMonthDay.prototype.toPlainDate()")}}
  - : 新しい {{jsxref("Temporal.PlainDateTime")}} オブジェクトを返します。このオブジェクトは、この月日と指定された時刻を、同じ暦体系で表します。
- {{jsxref("Temporal/PlainMonthDay/toString", "Temporal.PlainMonthDay.prototype.toString()")}}
  - : 指定されたタイムゾーンを使用して、この月日を表す [RFC 9557 形式](#rfc_9557_形式)の文字列を返します。
- {{jsxref("Temporal/PlainMonthDay/valueOf", "Temporal.PlainMonthDay.prototype.valueOf()")}}
  - : {{jsxref("TypeError")}} が発生します。これにより、算術演算や比較演算で使用される際、`Temporal.PlainMonthDay` のインスタンスが[プリミティブ型へ暗黙的に変換される](/ja/docs/Web/JavaScript/Guide/Data_structures#プリミティブ変換)ことが防止されます。
- {{jsxref("Temporal/PlainMonthDay/with", "Temporal.PlainMonthDay.prototype.with()")}}
  - : 新しい `Temporal.PlainMonthDay` オブジェクトを作成し、この月日の一部のフィールドは新しい値に置き換えたものを表したものを設定して返します。

## 例

### 次回の祭りの日程を取得

```js
// 中国の春節は、中国暦の 1 月 1 日
const chineseNewYear = Temporal.PlainMonthDay.from({
  monthCode: "M01",
  day: 1,
  calendar: "chinese",
});
const currentYear = Temporal.Now.plainDateISO().withCalendar("chinese").year;
let nextCNY = chineseNewYear.toPlainDate({ year: currentYear });
if (Temporal.PlainDate.compare(nextCNY, Temporal.Now.plainDateISO()) <= 0) {
  nextCNY = nextCNY.add({ years: 1 });
}
console.log(
  `次の中国の春節は ${nextCNY.withCalendar("iso8601").toLocaleString()} です`,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.PlainYearMonth")}}
