---
title: Temporal
slug: Web/JavaScript/Reference/Global_Objects/Temporal
l10n:
  sourceCommit: 791d6b6a04b1b8c09bc291ebadbc0f99a57dd5f7
---

{{SeeCompatTable}}

**`Temporal`** オブジェクトは、組み込みのタイムゾーンおよび暦の表現、実時刻の変換、算術演算、書式化など、さまざまなシナリオで日付と時刻の管理を可能にします。これは、 {{jsxref("Date")}} オブジェクトを完全に置き換えるものとして設計されています。

## 解説

ほとんどのグローバルオブジェクトとは異なり、 `Temporal` はコンストラクターではありません。 [`new` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/new)と一緒に使用したり、 `Temporal` オブジェクトを関数として呼び出したりすることはできません。 `Temporal` のすべてのプロパティとメソッドは静的です（{{jsxref("Math")}} オブジェクトと同様）。

`Temporal` は複雑で強力な API を備えています。複数のクラスを通じて 200 以上のユーティリティメソッドを公開しているため、とても複雑に見えるかもしれません。これらの API が互いにどのように関連しているかを、概要で説明します。

### 背景と概念

JavaScript には、その誕生当初から日付と時刻を処理するための {{jsxref("Date")}} オブジェクトが存在していました。しかし、`Date` API は、設計が良くなく 2010 年代初頭に置き換えられた Java の `java.util.Date` クラスをベースにしています。ただ、JavaScript は下位互換性を重視しているため、`Date` はこの言語に残っています。

この紹介の冒頭で重要なことは、**日付の処理は複雑**であるということです。`Date` の問題のほとんどは、メソッドを追加することで解決できますが、根本的な設計上の欠陥は残っています。つまり、同じオブジェクトにあまりにも多くのメソッドが公開されているため、開発者はどれを使用すべきか迷うことが多く、予期せぬ問題が発生しやすいのです。よく設計された API は、より多くのことを行う必要があるだけでなく、各抽象化レベルで行うことを少なくする必要があります。なぜなら、誤用を防ぐことは、用途を拡大することと同じくらい重要だからです。

`Date` オブジェクトは 2 つの役割を同時に果たします。

- [タイムスタンプ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)として。特定の時点（元期）から経過したミリ秒またはナノ秒の数値。
- [成分](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#日時の成分とタイムゾーン)の組み合わせとして。月、日、時、分、秒、ミリ秒、ナノ秒。年、月、日の識別子は、暦システムを基準にしてのみ意味を持ちます。この組み合わせ全体は、タイムゾーンに関連付けられている場合、歴史上の特定の瞬間に割り当てられます。 `Date` オブジェクトは、これらの成分を読み取り、変更するためのメソッドを提供しています。

[タイムゾーン](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets)は、日付関連のバグの多くの根底にあります。「成分の組み合わせ」モデルで Date を操作する場合、時刻は UTC とローカル （端末） の 2 つのタイムゾーンしか指定できず、任意のタイムゾーンを指定する方法がありません。また、「タイムゾーンがない」という概念も持っていません。これは、カレンダーの日付 （日付の場合） または壁掛け時計の時刻 （時刻の場合） として知られており、「カレンダーや時計で読み取る」時刻です。例えば、毎日の目覚ましアラームを設定する場合、夏時間であるかどうか、別のタイムゾーンに移動しているかどうかに関係なく、「午前 8 時」に設定したいでしょう。

`Date` に欠けている 2 つ目の機能は、[暦システム](#暦)です。ほとんどの人は、西暦と紀元前という 2 つの時代があり、12 か月があり、各月の日数は異なり、4 年に 1 回は閏年がある、といったグレゴリオ暦に慣れているでしょう。しかし、ヘブライ暦、中国の旧暦、日本の旧暦など、別の暦システムを使用している場合、これらの概念の一部は適用されない場合があります。`Date` では、グレゴリオ暦のモデルしか使用できません。

`Date` には、すべてのセッターが変更可能である （これは多くの場合、望ましくない副作用を引き起こします）、[日付と時刻の文字列形式](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#日時文字列形式)を一貫した方法で解釈できない、など、他にも多くの望ましくない古い部分があります。結局、最善の解決策は、新しい API を一から構築することであり、それが `Temporal` です。

### API 概要

`Temporal` は {{jsxref("Intl")}} と同様に名前空間です。これには、日付および時刻の管理の特定の側面を処理するように設計された、いくつかのクラスおよび名前空間が含まれています。クラスは次のようにグループ化できます。

- 時間の表現（2 つの時点間の差）: {{jsxref("Temporal.Duration")}}
- 時点の表現:
  - 歴史上の固有の瞬間の表現:
    - タイムスタンプとして: {{jsxref("Temporal.Instant")}}
    - 日時の成分の組み合わせにタイムゾーンを併せたもの: {{jsxref("Temporal.ZonedDateTime")}}
  - タイムゾーンに関わらない日時の表現（すべて "Plain" の接頭辞が付く）:
    - 日付（年、月、日） + 時刻（時、分、秒、ミリ秒、マイクロ秒、ナノ秒）: {{jsxref("Temporal.PlainDateTime")}} （注: `ZonedDateTime` は `PlainDateTime` にタイムゾーンを加えたもの）
      - 日付（年、月、日）: {{jsxref("Temporal.PlainDate")}}
        - 年、月: {{jsxref("Temporal.PlainYearMonth")}}
        - 月、日: {{jsxref("Temporal.PlainMonthDay")}}
      - 時刻（時、分、秒、ミリ秒、マイクロ秒、ナノ秒）: {{jsxref("Temporal.PlainTime")}}

さらに、 {{jsxref("Temporal.Now")}} という別のユーティリティ名前空間もあり、さまざまな形式で現在の時刻を取得するメソッドを提供しています。

### 共有クラスインターフェイス

`Temporal` 名前空間には多数のクラスがいますが、これらのクラスは多くの似たメソッドを共有しています。次の表は、各クラスのすべてのメソッド（[変換メソッド](#クラス間の変換)を除く）を一覧表示したものです。

<table>
<thead>
<tr>
<td></td>
<th><code>Instant</code></th>
<th><code>ZonedDateTime</code></th>
<th><code>PlainDateTime</code></th>
<th><code>PlainDate</code></th>
<th><code>PlainTime</code></th>
<th><code>PlainYearMonth</code></th>
<th><code>PlainMonthDay</code></th>
</tr>
</thead>
<tbody>
<tr>
<th>構築</th>
<td>{{jsxref("Temporal/Instant/Instant", "Instant()")}}<br>{{jsxref("Temporal/Instant/from", "Instant.from()")}}<br>{{jsxref("Temporal/Instant/fromEpochMilliseconds", "Instant.fromEpochMilliseconds()")}}<br>{{jsxref("Temporal/Instant/fromEpochNanoseconds", "Instant.fromEpochNanoseconds()")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "ZonedDateTime()")}}<br>{{jsxref("Temporal/ZonedDateTime/from", "ZonedDateTime.from()")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/PlainDateTime", "PlainDateTime()")}}<br>{{jsxref("Temporal/PlainDateTime/from", "PlainDateTime.from()")}}</td>
<td>{{jsxref("Temporal/PlainDate/PlainDate", "PlainDate()")}}<br>{{jsxref("Temporal/PlainDate/from", "PlainDate.from()")}}</td>
<td>{{jsxref("Temporal/PlainTime/PlainTime", "PlainTime()")}}<br>{{jsxref("Temporal/PlainTime/from", "PlainTime.from()")}}</td>
<td>{{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "PlainYearMonth()")}}<br>{{jsxref("Temporal/PlainYearMonth/from", "PlainYearMonth.from()")}}</td>
<td>{{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "PlainMonthDay()")}}<br>{{jsxref("Temporal/PlainMonthDay/from", "PlainMonthDay.from()")}}</td>
</tr>
<tr>
<th>更新</th>
<td>なし</td>
<td>{{jsxref("Temporal/ZonedDateTime/with", "with()")}}<br>{{jsxref("Temporal/ZonedDateTime/withCalendar", "withCalendar()")}}<br>{{jsxref("Temporal/ZonedDateTime/withTimeZone", "withTimeZone()")}}<br>{{jsxref("Temporal/ZonedDateTime/withPlainTime", "withPlainTime()")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/with", "with()")}}<br>{{jsxref("Temporal/PlainDateTime/withCalendar", "withCalendar()")}}<br>{{jsxref("Temporal/PlainDateTime/withPlainTime", "withPlainTime()")}}</td>
<td>{{jsxref("Temporal/PlainDate/with", "with()")}}<br>{{jsxref("Temporal/PlainDate/withCalendar", "withCalendar()")}}</td>
<td>{{jsxref("Temporal/PlainTime/with", "with()")}}</td>
<td>{{jsxref("Temporal/PlainYearMonth/with", "with()")}}</td>
<td>{{jsxref("Temporal/PlainMonthDay/with", "with()")}}</td>
</tr>
<tr>
<th>演算</th>
<td>{{jsxref("Temporal/Instant/add", "add()")}}<br>{{jsxref("Temporal/Instant/subtract", "subtract()")}}<br>{{jsxref("Temporal/Instant/since", "since()")}}<br>{{jsxref("Temporal/Instant/until", "until()")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/add", "add()")}}<br>{{jsxref("Temporal/ZonedDateTime/subtract", "subtract()")}}<br>{{jsxref("Temporal/ZonedDateTime/since", "since()")}}<br>{{jsxref("Temporal/ZonedDateTime/until", "until()")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/add", "add()")}}<br>{{jsxref("Temporal/PlainDateTime/subtract", "subtract()")}}<br>{{jsxref("Temporal/PlainDateTime/since", "since()")}}<br>{{jsxref("Temporal/PlainDateTime/until", "until()")}}</td>
<td>{{jsxref("Temporal/PlainDate/add", "add()")}}<br>{{jsxref("Temporal/PlainDate/subtract", "subtract()")}}<br>{{jsxref("Temporal/PlainDate/since", "since()")}}<br>{{jsxref("Temporal/PlainDate/until", "until()")}}</td>
<td>{{jsxref("Temporal/PlainTime/add", "add()")}}<br>{{jsxref("Temporal/PlainTime/subtract", "subtract()")}}<br>{{jsxref("Temporal/PlainTime/since", "since()")}}<br>{{jsxref("Temporal/PlainTime/until", "until()")}}</td>
<td>{{jsxref("Temporal/PlainYearMonth/add", "add()")}}<br>{{jsxref("Temporal/PlainYearMonth/subtract", "subtract()")}}<br>{{jsxref("Temporal/PlainYearMonth/since", "since()")}}<br>{{jsxref("Temporal/PlainYearMonth/until", "until()")}}</td>
<td>なし</td>
</tr>
<tr>
<th>丸め</th>
<td>{{jsxref("Temporal/Instant/round", "round()")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/round", "round()")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/round", "round()")}}</td>
<td>なし</td>
<td>{{jsxref("Temporal/PlainTime/round", "round()")}}</td>
<td>なし</td>
<td>なし</td>
</tr>
<tr>
<th>比較</th>
<td>{{jsxref("Temporal/Instant/equals", "equals()")}}<br>{{jsxref("Temporal/Instant/compare", "Instant.compare()")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/equals", "equals()")}}<br>{{jsxref("Temporal/ZonedDateTime/compare", "ZonedDateTime.compare()")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/equals", "equals()")}}<br>{{jsxref("Temporal/PlainDateTime/compare", "PlainDateTime.compare()")}}</td>
<td>{{jsxref("Temporal/PlainDate/equals", "equals()")}}<br>{{jsxref("Temporal/PlainDate/compare", "PlainDate.compare()")}}</td>
<td>{{jsxref("Temporal/PlainTime/equals", "equals()")}}<br>{{jsxref("Temporal/PlainTime/compare", "PlainTime.compare()")}}</td>
<td>{{jsxref("Temporal/PlainYearMonth/equals", "equals()")}}<br>{{jsxref("Temporal/PlainYearMonth/compare", "PlainYearMonth.compare()")}}</td>
<td>{{jsxref("Temporal/PlainMonthDay/equals", "equals()")}}</td>
</tr>
<tr>
<th>シリアライズ</th>
<td>{{jsxref("Temporal/Instant/toJSON", "toJSON()")}}<br>{{jsxref("Temporal/Instant/toLocaleString", "toLocaleString()")}}<br>{{jsxref("Temporal/Instant/toString", "toString()")}}<br>{{jsxref("Temporal/Instant/valueOf", "valueOf()")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/toJSON", "toJSON()")}}<br>{{jsxref("Temporal/ZonedDateTime/toLocaleString", "toLocaleString()")}}<br>{{jsxref("Temporal/ZonedDateTime/toString", "toString()")}}<br>{{jsxref("Temporal/ZonedDateTime/valueOf", "valueOf()")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/toJSON", "toJSON()")}}<br>{{jsxref("Temporal/PlainDateTime/toLocaleString", "toLocaleString()")}}<br>{{jsxref("Temporal/PlainDateTime/toString", "toString()")}}<br>{{jsxref("Temporal/PlainDateTime/valueOf", "valueOf()")}}</td>
<td>{{jsxref("Temporal/PlainDate/toJSON", "toJSON()")}}<br>{{jsxref("Temporal/PlainDate/toLocaleString", "toLocaleString()")}}<br>{{jsxref("Temporal/PlainDate/toString", "toString()")}}<br>{{jsxref("Temporal/PlainDate/valueOf", "valueOf()")}}</td>
<td>{{jsxref("Temporal/PlainTime/toJSON", "toJSON()")}}<br>{{jsxref("Temporal/PlainTime/toLocaleString", "toLocaleString()")}}<br>{{jsxref("Temporal/PlainTime/toString", "toString()")}}<br>{{jsxref("Temporal/PlainTime/valueOf", "valueOf()")}}</td>
<td>{{jsxref("Temporal/PlainYearMonth/toJSON", "toJSON()")}}<br>{{jsxref("Temporal/PlainYearMonth/toLocaleString", "toLocaleString()")}}<br>{{jsxref("Temporal/PlainYearMonth/toString", "toString()")}}<br>{{jsxref("Temporal/PlainYearMonth/valueOf", "valueOf()")}}</td>
<td>{{jsxref("Temporal/PlainMonthDay/toJSON", "toJSON()")}}<br>{{jsxref("Temporal/PlainMonthDay/toLocaleString", "toLocaleString()")}}<br>{{jsxref("Temporal/PlainMonthDay/toString", "toString()")}}<br>{{jsxref("Temporal/PlainMonthDay/valueOf", "valueOf()")}}</td>
</tr>
</tbody>
</table>

次の表は、各クラスで利用できるプロパティをまとめたもので、各クラスが表す情報の意味を把握するのに役立ちます。

<table>
<thead>
<tr>
<td></td>
<th><code>Instant</code></th>
<th><code>ZonedDateTime</code></th>
<th><code>PlainDateTime</code></th>
<th><code>PlainDate</code></th>
<th><code>PlainTime</code></th>
<th><code>PlainYearMonth</code></th>
<th><code>PlainMonthDay</code></th>
</tr>
</thead>
<tbody>
<tr>
<th>暦</th>
<td>なし</td>
<td>{{jsxref("Temporal/ZonedDateTime/calendarId", "calendarId")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/calendarId", "calendarId")}}</td>
<td>{{jsxref("Temporal/PlainDate/calendarId", "calendarId")}}</td>
<td>なし</td>
<td>{{jsxref("Temporal/PlainYearMonth/calendarId", "calendarId")}}</td>
<td>{{jsxref("Temporal/PlainMonthDay/calendarId", "calendarId")}}</td>
</tr>
<tr>
<th>年関連</th>
<td>なし</td>
<td>{{jsxref("Temporal/ZonedDateTime/era", "era")}}<br>{{jsxref("Temporal/ZonedDateTime/eraYear", "eraYear")}}<br>{{jsxref("Temporal/ZonedDateTime/year", "year")}}<br>{{jsxref("Temporal/ZonedDateTime/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/era", "era")}}<br>{{jsxref("Temporal/PlainDateTime/eraYear", "eraYear")}}<br>{{jsxref("Temporal/PlainDateTime/year", "year")}}<br>{{jsxref("Temporal/PlainDateTime/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/PlainDateTime/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/PlainDateTime/daysInYear", "daysInYear")}}</td>
<td>{{jsxref("Temporal/PlainDate/era", "era")}}<br>{{jsxref("Temporal/PlainDate/eraYear", "eraYear")}}<br>{{jsxref("Temporal/PlainDate/year", "year")}}<br>{{jsxref("Temporal/PlainDate/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/PlainDate/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/PlainDate/daysInYear", "daysInYear")}}</td>
<td>なし</td>
<td>{{jsxref("Temporal/PlainYearMonth/era", "era")}}<br>{{jsxref("Temporal/PlainYearMonth/eraYear", "eraYear")}}<br>{{jsxref("Temporal/PlainYearMonth/year", "year")}}<br>{{jsxref("Temporal/PlainYearMonth/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/PlainYearMonth/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/PlainYearMonth/daysInYear", "daysInYear")}}</td>
<td>なし</td>
</tr>
<tr>
<th>月関連</th>
<td>なし</td>
<td>{{jsxref("Temporal/ZonedDateTime/month", "month")}}<br>{{jsxref("Temporal/ZonedDateTime/monthCode", "monthCode")}}<br>{{jsxref("Temporal/ZonedDateTime/daysInMonth", "daysInMonth")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/month", "month")}}<br>{{jsxref("Temporal/PlainDateTime/monthCode", "monthCode")}}<br>{{jsxref("Temporal/PlainDateTime/daysInMonth", "daysInMonth")}}</td>
<td>{{jsxref("Temporal/PlainDate/month", "month")}}<br>{{jsxref("Temporal/PlainDate/monthCode", "monthCode")}}<br>{{jsxref("Temporal/PlainDate/daysInMonth", "daysInMonth")}}</td>
<td>なし</td>
<td>{{jsxref("Temporal/PlainYearMonth/month", "month")}}<br>{{jsxref("Temporal/PlainYearMonth/monthCode", "monthCode")}}<br>{{jsxref("Temporal/PlainYearMonth/daysInMonth", "daysInMonth")}}</td>
<td>{{jsxref("Temporal/PlainMonthDay/monthCode", "monthCode")}}</td>
</tr>
<tr>
<th>週関連</th>
<td>なし</td>
<td>{{jsxref("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}}<br>{{jsxref("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}}<br>{{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/weekOfYear", "weekOfYear")}}<br>{{jsxref("Temporal/PlainDateTime/yearOfWeek", "yearOfWeek")}}<br>{{jsxref("Temporal/PlainDateTime/daysInWeek", "daysInWeek")}}</td>
<td>{{jsxref("Temporal/PlainDate/weekOfYear", "weekOfYear")}}<br>{{jsxref("Temporal/PlainDate/yearOfWeek", "yearOfWeek")}}<br>{{jsxref("Temporal/PlainDate/daysInWeek", "daysInWeek")}}</td>
<td>なし</td>
<td>なし</td>
<td>なし</td>
</tr>
<tr>
<th>日関連</th>
<td>なし</td>
<td>{{jsxref("Temporal/ZonedDateTime/day", "day")}}<br>{{jsxref("Temporal/ZonedDateTime/dayOfWeek", "dayOfWeek")}}<br>{{jsxref("Temporal/ZonedDateTime/dayOfYear", "dayOfYear")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/day", "day")}}<br>{{jsxref("Temporal/PlainDateTime/dayOfWeek", "dayOfWeek")}}<br>{{jsxref("Temporal/PlainDateTime/dayOfYear", "dayOfYear")}}</td>
<td>{{jsxref("Temporal/PlainDate/day", "day")}}<br>{{jsxref("Temporal/PlainDate/dayOfWeek", "dayOfWeek")}}<br>{{jsxref("Temporal/PlainDate/dayOfYear", "dayOfYear")}}</td>
<td>なし</td>
<td>なし</td>
<td>{{jsxref("Temporal/PlainMonthDay/day", "day")}}</td>
</tr>
<tr>
<th>時刻成分</th>
<td>なし</td>
<td>{{jsxref("Temporal/ZonedDateTime/hour", "hour")}}<br>{{jsxref("Temporal/ZonedDateTime/minute", "minute")}}<br>{{jsxref("Temporal/ZonedDateTime/second", "second")}}<br>{{jsxref("Temporal/ZonedDateTime/millisecond", "millisecond")}}<br>{{jsxref("Temporal/ZonedDateTime/microsecond", "microsecond")}}<br>{{jsxref("Temporal/ZonedDateTime/nanosecond", "nanosecond")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/hour", "hour")}}<br>{{jsxref("Temporal/PlainDateTime/minute", "minute")}}<br>{{jsxref("Temporal/PlainDateTime/second", "second")}}<br>{{jsxref("Temporal/PlainDateTime/millisecond", "millisecond")}}<br>{{jsxref("Temporal/PlainDateTime/microsecond", "microsecond")}}<br>{{jsxref("Temporal/PlainDateTime/nanosecond", "nanosecond")}}</td>
<td>なし</td>
<td>{{jsxref("Temporal/PlainTime/hour", "hour")}}<br>{{jsxref("Temporal/PlainTime/minute", "minute")}}<br>{{jsxref("Temporal/PlainTime/second", "second")}}<br>{{jsxref("Temporal/PlainTime/millisecond", "millisecond")}}<br>{{jsxref("Temporal/PlainTime/microsecond", "microsecond")}}<br>{{jsxref("Temporal/PlainTime/nanosecond", "nanosecond")}}</td>
<td>なし</td>
<td>なし</td>
</tr>
<tr>
<th>タイムゾーン</th>
<td>なし</td>
<td>{{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}}<br>{{jsxref("Temporal/ZonedDateTime/offset", "offset")}}<br>{{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "offsetNanoseconds")}}<br>{{jsxref("Temporal/ZonedDateTime/hoursInDay", "hoursInDay")}}<br>{{jsxref("Temporal/ZonedDateTime/getTimeZoneTransition", "getTimeZoneTransition()")}}<br>{{jsxref("Temporal/ZonedDateTime/startOfDay", "startOfDay()")}}</td>
<td>なし</td>
<td>なし</td>
<td>なし</td>
<td>なし</td>
<td>なし</td>
</tr>
<tr>
<th>元期からの時間</th>
<td>{{jsxref("Temporal/Instant/epochMilliseconds", "epochMilliseconds")}}<br>{{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/epochMilliseconds", "epochMilliseconds")}}<br>{{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}}</td>
<td>なし</td>
<td>なし</td>
<td>なし</td>
<td>なし</td>
<td>なし</td>
</tr>
</tbody>
</table>

### クラス間の変換

以下の表は、各クラスに存在するすべての変換メソッドをまとめたものです。

<table>
<tbody>
<tr>
<td rowspan="2" colspan="2"></td>
<td colspan="7">変換元</td>
</tr>
<tr>
<th><code>Instant</code></th>
<th><code>ZonedDateTime</code></th>
<th><code>PlainDateTime</code></th>
<th><code>PlainDate</code></th>
<th><code>PlainTime</code></th>
<th><code>PlainYearMonth</code></th>
<th><code>PlainMonthDay</code></th>
</tr>
<tr><td rowspan="7">変換先</td><th><code>Instant</code></th><td>/</td><td>{{jsxref("Temporal/ZonedDateTime/toInstant", "toInstant()")}}</td><td colspan="5">まず <code>ZonedDateTime</code> へ変換</td></tr>
<tr><th><code>ZonedDateTime</code></th><td>{{jsxref("Temporal/Instant/toZonedDateTimeISO", "toZonedDateTimeISO()")}}</td><td>/</td><td>{{jsxref("Temporal/PlainDateTime/toZonedDateTime", "toZonedDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toZonedDateTime", "toZonedDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toZonedDateTime", "PlainDate#toZonedDateTime()")}} （引数として渡す）</td><td rowspan="2" colspan="2">まず <code>PlainDate</code> へ変換</td></tr>
<tr><th><code>PlainDateTime</code></th><td rowspan="5">まず <code>ZonedDateTime</code> へ変換</td><td>{{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "toPlainDateTime()")}}</td><td>/</td><td>{{jsxref("Temporal/PlainDate/toPlainDateTime", "toPlainDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toPlainDateTime", "PlainDate#toPlainDateTime()")}} （引数として渡す）</td></tr>
<tr><th><code>PlainDate</code></th><td>{{jsxref("Temporal/ZonedDateTime/toPlainDate", "toPlainDate()")}}</td><td>{{jsxref("Temporal/PlainDateTime/toPlainDate", "toPlainDate()")}}</td><td>/</td><td>情報に対応するものがない</td><td>{{jsxref("Temporal/PlainYearMonth/toPlainDate", "toPlainDate()")}}</td><td>{{jsxref("Temporal/PlainMonthDay/toPlainDate", "toPlainDate()")}}</td></tr>
<tr><th><code>PlainTime</code></th><td>{{jsxref("Temporal/ZonedDateTime/toPlainTime", "toPlainTime()")}}</td><td>{{jsxref("Temporal/PlainDateTime/toPlainTime", "toPlainTime()")}}</td><td>情報に対応するものがない</td><td>/</td><td colspan="2">情報に対応するものがない</td></tr>
<tr><th><code>PlainYearMonth</code></th><td rowspan="2" colspan="2">まず <code>PlainDate</code> へ変換</td><td>{{jsxref("Temporal/PlainDate/toPlainYearMonth", "toPlainYearMonth()")}}</td><td rowspan="2">情報に対応するものがない</td><td>/</td><td>まず <code>PlainDate</code> へ変換</td></tr>
<tr><th><code>PlainMonthDay</code></th><td>{{jsxref("Temporal/PlainDate/toPlainMonthDay", "toPlainMonthDay()")}}</td><td>まず <code>PlainDate</code> へ変換</td><td>/</td></tr>
</tbody>
</table>

これらの表で、 `Temporal` API の基本的な考え方が理解できると思います。

### 暦

暦は、通常、週、月、年、時代などの期間に日を整理する方法です。世界の大半はグレゴリオ暦を使用していますが、特に宗教的および文化的な文脈では、他にも多くの暦が使用されています。既定では、暦を認識するすべての `Temporal` オブジェクトは、グレゴリオ暦をベースとし、週の番号付けに関する追加の規則を定義する ISO 8601 暦システムを使用します。 [`Intl.supportedValuesOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#対応している暦) には、ブラウザーで対応している可能性の高い暦のほとんどが掲載されています。ここでは、暦システムがどのように構成されているかを簡単に説明し、暦同士で異なる成分を内部的に理解しやすくします。

地球上には 3 つの顕著な周期的なイベントがあります。それは、太陽の周りを回る回転（1 回転は 365.242 日）、月が地球の周りを回る回転（新月から新月まで 29.53 日）、そして自転（日の出から日の出まで 24 時間）です。すべての文化では、「1 日」は 24 時間という同じ単位で測定されます。夏時間などの一時的な変更は、暦には属しません。これらは[タイムゾーン](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets)の情報の一部です。

- 暦の中には、1 年を平均 365.242 日と定義し、1 年を 365 日とし、約 4 年ごとに 1 日（閏日）を追加することで、1 年を定義するものあります。そして、1 年を月と呼ばれる部分にさらに分割することができます。このような暦は、太陽暦と呼ばれます。グレゴリオ暦と太陽ヒジュラ暦は、太陽暦です。
- 暦の中には、月を 29 日と 30 日の交互と定義することにより、1 か月を平均 29.5 日と定義するものがあります。そして、12 か月を 354 日の 1 年としてグループ化します。このような暦は「太陰暦」と呼ばれます。イスラム暦は太陰暦です。太陰年は人工的なものであり、季節の周期とは関連がないため、太陰暦は一般的にあまり使用されていません。
- 暦の中には、太陰暦と同様に、主に月の周期に基づいて月を定義するものがあります。そして、太陽年との 11 日の誤差を補うために、約 3 年ごとに 1 ヶ月分の閏月が追加されます。このような暦は、太陰太陽暦と呼ばれます。ヘブライ暦および中国暦は太陰太陽暦です。

`Temporal` では、1 つの暦システムにおけるすべての日付は、`year`、`month`、`day` の 3 つの成分によって一意に識別されます。 `year` は通常、正の整数ですが、0 または負の値も取り、時間とともに単調に増加します。`1` の年（または、存在する場合 `0`）は、暦の元期として知られており、暦ごとに任意に設定されます。`month` は `1` から始まり、`date.monthsInYear` で終わり、年が改まると `1` にリセットされる、1 回ごとに 1 ずつ増加する正の整数です。`day` も正の整数ですが、政治的な変更によって日がスキップされたり繰り返されたりする場合があるため、1 から開始したり、毎回 1 ずつ増加したりしない場合があります。しかし、一般的には、`day` は単調に増加し、月が改まるとリセットされます。

`year` に加えて、時代を使用する暦では、`era` と `eraYear` の組み合わせによって、年を固有に識別することもできます。例えば、グレゴリオ暦では "CE" (Common Era) と "BCE" (Before Common Era) という時代が使用されており、年 `-1` は `{ era: "bce", eraYear: 2 }` と同じです（なお、年 `0` はすべての暦に存在します。グレゴリオ暦では、これは[天文学的紀年法](https://ja.wikipedia.org/wiki/天文学的紀年法)のため 1 BCE に対応します）。 `era` は小文字の文字列で、`eraYear` は 0 または負の任意の整数で、時点とともに減少する場合もあります （通常は最も古い時代の場合）。

> [!NOTE]
> `era` と `eraYear` は常にペアで使用してください。一方のプロパティだけを使用しないでください。また、競合を避けるため、年を指定する際に `year` と `era`/`eraYear` を組み合わせて使用しないでください。1 つの年表現を選択し、それを一貫して使用してください。
>
> 年に関する次の誤った仮定に注意してください。
>
> - `era` および `eraYear` が常に存在すると想定しないでください。これらは `undefined` である場合もあります。
> - `era` が人間にとってわかりやすい文字列であると想定しないでください。代わりに、`toLocaleString()` を使用して日付を書式化して使用してください。
> - 異なる暦の 2 つの `year` 値が比較可能であると想定しないでください。代わりに、静的メソッド `compare()` を使用してください。
> - 1 年は 365 日または 366 日、12 ヶ月であると想定しないでください。代わりに `daysInYear` および `monthsInYear` を使用してください。
> - 閏年（`inLeapYear` が `true`）には 1 日が追加されるとは想定しないでください。1 か月が追加される場合もあります。

`month` に加えて、1 年間の月は `monthCode` によって一意に識別することもできます。`monthCode` は通常、月の名前に割り当てられますが、`month` はそうではありません。例えば、太陰太陽暦の場合、同じ `monthCode` を持つ 2 つの月があり、一方は閏年に属し、もう一方は閏年に属さない場合、閏月の後に続く 2 つの月の `month` 値は、閏月の挿入により、異なる値になります。

> [!NOTE]
> 競合を避けるため、月を指定する際に `month` と `monthCode` を組み合わせないでください。 1 つの月を表す表記法を選び、それを一貫して使用してください。 `month` は、1 年間の月の順番が必要なとき（たとえば、月をループする場合など）に、 `monthCode` は、月の名前が必要なとき（たとえば、誕生日を格納する場合など）に、それぞれより有用です。
>
> 月に関する次の誤った仮定に注意してください。
>
> - `monthCode` と `month` が常に一致すると想定しないでください。
> - 1 か月間の日数を想定しないでください。代わりに `daysInMonth` を使用してください。
> - `monthCode` が人間にとってわかりやすい文字列であると想定しないでください。代わりに、`toLocaleString()` を使用して日付を書式化してください。
> - 通常、配列やオブジェクトに月の名前をキャッシュしないでください。たとえ `monthCode` が通常 1 つの暦内の月の名前に割り当てられている場合でも、例えば `date.toLocaleString("en-US", { calendar: date.calendarId, month: "long" })` を使用して、常に月の名前を計算することをお勧めします。

`day` （月ベースのインデックス） に加えて、1 年の中の 1 日は `dayOfYear` によって一意に識別することもできます。`dayOfYear` は、1 から始まり、`date.daysInYear` で終わる、1 ずつ増加する正の値です。

「週」という概念は、天文学的なイベントとは関係なく、文化的に構築されたものです。最も一般的な長さは 7 日間ですが、週は 4、5、6、8 日、あるいはそれ以上、あるいは固定の日数がない場合もあります。ある日付のある週の具体的な日数を取得するには、その日付の `daysInWeek` を使用します。`Temporal` は、`weekOfYear` と `yearOfWeek` の組み合わせによって週を識別します。`weekOfYear` は、`1` から始まり、年が進むごとに 1 ずつ増加する正の整数です。`yearOfWeek` は通常 `year` と同じですが、1 週間が 2 年にまたがる場合があり、`yearOfWeek` は暦の規則に基づいて 2 年のうちどちらか一方を選択するため、各年の開始または終了時に異なる場合があります。

> [!NOTE]
> `weekOfYear` と `yearOfWeek` は常にペアで使用してください。`weekOfYear` と `year` の組み合わせでは使用しないでください。
>
> 週に関する次の誤った仮定に注意してください。
>
> - `weekOfYear` および `yearOfWeek` が常に存在すると想定しないでください。これらは `undefined` である場合もあります。
> - 週は常に 7 日間であると想定しないでください。代わりに `daysInWeek` を使用してください。
> - 現在の `Temporal` API は年週日付に対応していないため、これらのプロパティを使用して日付を構築したり、日付を年週表現にシリアル化したりすることはできません。これらは情報提供のみを目的としたプロパティです。

### RFC 9557 形式

すべての `Temporal` クラスは、 [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) に基づく [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) で指定されている書式を使用して、シリアル化およびデシリアル化することができます。この書式の完全な形式は次のとおりです（空白は読みやすさのためにのみ使用されており、実際の文字列には存在しません）。

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]
```

クラスによって、各成分の存在に関する要件が異なるため、各クラスのドキュメント内に「RFC 9557 の書式化」という節があり、そのクラスが認識する書式化が指定されています。

これは、ISO 8601 にも基づいている {{jsxref("Date")}} で使用されている[日付と時刻の文字列の書式](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#日時文字列形式)とよく似ています。主な追加機能は、マイクロ秒およびナノ秒の成分を指定できることと、タイムゾーンおよび暦システムを指定できることです。

### 表現可能な日付

特定の暦の日付を表すすべての `Temporal` オブジェクトは、表現可能な日付の範囲に同様の制限を課します。この制限は、Unix 元期から ±10<sup>8</sup> 日 （包括的） または `-271821-04-20T00:00:00` から `+275760-09-13T00:00:00` までの瞬間です。これは、[有効な日時](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)と同じ範囲です。より具体的には、次のとおりです。

- {{jsxref("Temporal.Instant")}} と {{jsxref("Temporal.ZonedDateTime")}} は、この制限をその `epochNanoseconds` 値に直接適用します。
- {{jsxref("Temporal.PlainDateTime")}} は、 UTC タイムゾーンの日付と時刻を解釈し、Unix 元期から ±(10<sup>8</sup> + 1) 日（両端を含まない）である必要があります。したがって、有効な範囲は `-271821-04-19T00:00:00` より大きく `+275760-09-14T00:00:00` 未満です。これにより、オフセットに関係なく、任意の `ZonedDateTime` を `PlainDateTime` に変換することができます。
- {{jsxref("Temporal.PlainDate")}} は、`PlainDateTime` と同じチェックをその日付の正午 (`12:00:00`) に適用するため、有効な範囲は `-271821-04-19` から `+275760-09-13` となります。これにより、`PlainDateTime` は、その時点に関係なく `PlainDate` に変換することができ、その逆も同様です。
- {{jsxref("Temporal.PlainYearMonth")}} は、`-271821-04` から `+275760-09` までの範囲が有効です。これにより、日付に関係なく、任意の `PlainDate` を `PlainYearMonth` に変換することができます （ISO 以外の月の最初の日が ISO 月 `-271821-03` に該当する場合を除く）。

`Temporal` オブジェクトは、この制限を超える日付/時刻を表すインスタンスの構築を拒否します。これには以下が含まれます。

- コンストラクターまたは `from（）` 静的メソッドを使用します。
- `with()` メソッドを使用して暦フィールドを更新します。
- `add()`, `subtract()`, `round()`、またはその他のメソッドを使用して、新しいインスタンスを導出します。

## 静的プロパティ

- {{jsxref("Temporal.Duration")}} {{experimental_inline}}
  - : 2 つの時点間の差を表します。日付/時刻の演算で使用できます。基本的には、年、月、週、日、時、分、秒、ミリ秒、マイクロ秒、ナノ秒の値の組み合わせとして表されます。
- {{jsxref("Temporal.Instant")}} {{experimental_inline}}
  - : ナノ秒の精度で、固有の時点を表します。これは基本的に、タイムゾーンや暦システムを使用せずに、 Unix 元期（1970 年 1 月 1 日午前 0 時、UTC）からのナノ秒の数として表されます。
- {{jsxref("Temporal.Now")}} {{experimental_inline}}
  - : さまざまな書式で現在の時刻を取得するメソッドを提供します。
- {{jsxref("Temporal.PlainDate")}} {{experimental_inline}}
  - : 暦の日付（時刻やタイムゾーンを含まない日付）を表します。例えば、どのタイムゾーンで発生しても 1 日中続く暦上のイベントなどです。基本的には、年、月、日フィールドと関連付けられた暦システムを含む ISO 8601 暦日付として表されます。
- {{jsxref("Temporal.PlainDateTime")}} {{experimental_inline}}
  - : タイムゾーンのない日付（暦日）および時刻（壁時計の時間）を表します。基本的には、[日付](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate)（関連付けられた暦システム付き）と[時刻](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime)の組み合わせとして表されます。
- {{jsxref("Temporal.PlainMonthDay")}} {{experimental_inline}}
  - : 年やタイムゾーンを含まない、暦の日付の月と日を表します。例えば、毎年繰り返し、1 日中に現れる暦上のイベントなどです。これは基本的に、年、月、日フィールドと関連付けられた暦システムを含む ISO 8601 の暦の日付として表されます。年は、ISO 以外の暦システムで月と日を明確にするために使用されます。
- {{jsxref("Temporal.PlainTime")}} {{experimental_inline}}
  - : 日付やタイムゾーンを含まない時点を表します。例えば、毎日同じ時間に現れる繰り返しイベントなどです。基本的には、時、分、秒、ミリ秒、マイクロ秒、ナノ秒の値の組み合わせとして表されます。
- {{jsxref("Temporal.PlainYearMonth")}} {{experimental_inline}}
  - : 日やタイムゾーンを含まない、暦日の年と月を表します。例えば、1 か月間に現れる暦上のイベントなどです。基本的には、年、月、日フィールドと、関連付けられた暦システムを含む ISO 8601 暦日として表されます。日は、ISO 以外の暦システムで年と月を区別するために使用されます。
- {{jsxref("Temporal.ZonedDateTime")}} {{experimental_inline}}
  - : タイムゾーン付きの日付と時刻を表します。基本的には、[瞬間](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant)、タイムゾーン、および暦システムの組み合わせとして表されます。
- `Temporal[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は、文字列 `"Temporal"` です。このプロパティは、{{jsxref("Object.prototype.toString()")}} で使用されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl.RelativeTimeFormat")}}
- {{jsxref("Intl.DurationFormat")}}
- [Temporal のポリフィル（proposal champions）](https://www.npmjs.com/package/@js-temporal/polyfill)
- [Temporal のポリフィル（FullCalendar）](https://www.npmjs.com/package/temporal-polyfill)
