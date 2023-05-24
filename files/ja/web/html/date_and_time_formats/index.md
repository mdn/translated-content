---
title: HTML で使われる日付や時刻の形式
slug: Web/HTML/Date_and_time_formats
---

{{HTMLSidebar}}

一部の HTML 要素は日付や時刻の値を使用します。この記事ではこれらの値を指定する文字列の形式について説明しています。このような形式を使用する要素には、ユーザーに日付、時刻、またはその両方を選択または指定させる {{HTMLElement("input")}} 要素の一部の形、同様に {{HTMLElement("ins")}} および {{HTMLElement("del")}} 要素で、 [`datetime`](/ja/docs/Web/HTML/Element/ins#datetime) 属性によって内容の挿入または削除が行われた日付や日時を指定しているものなどがあります。

`<input>` については、 [`type`](/ja/docs/Web/HTML/Element/input#type) の値で日付や時刻を表す文字列を含む [`value`](/ja/docs/Web/HTML/Element/input#value) を返すものは次の通りです。

- [`date`](/ja/docs/Web/HTML/Element/input/date)
- [`datetime`](/ja/docs/Web/HTML/Element/input/datetime) {{deprecated_inline}}
- [`datetime-local`](/ja/docs/Web/HTML/Element/input/datetime-local)
- [`month`](/ja/docs/Web/HTML/Element/input/month)
- [`time`](/ja/docs/Web/HTML/Element/input/time)
- [`week`](/ja/docs/Web/HTML/Element/input/week)

## 例

日付と時刻の文字列が HTML でどのように記述され解析されるかの複雑さを理解する前に、より一般的に使用される日付と時刻の文字列形式がどのように見えるかを理解するための例をいくつか示します。

<table class="standard-table">
  <caption>
    HTML の日付と時刻の文字列の例
  </caption>
  <thead>
    <tr>
      <th scope="col">文字列</th>
      <th colspan="2" scope="col">日付または時刻</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>2005-06-07</code></td>
      <td>2005年6月7日</td>
      <td>
        <a href="/ja/docs/Web/HTML/Date_and_time_formats#Date_strings"
          >[詳細]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>08:45</code></td>
      <td>午前8時45分</td>
      <td>
        <a href="/ja/docs/Web/HTML/Date_and_time_formats#Time_strings"
          >[詳細]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>08:45:25</code></td>
      <td>午前8時45分25秒</td>
      <td>
        <a href="/ja/docs/Web/HTML/Date_and_time_formats#Time_strings"
          >[詳細]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>0033-08-04T03:40</code></td>
      <td>33年8月4日午前3時40分</td>
      <td>
        <a
          href="/ja/docs/Web/HTML/Date_and_time_formats#Local_date_and_time_strings"
          >[詳細]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>1977-04-01T14:00:30</code></td>
      <td>1977年4月1日午後2時30秒</td>
      <td>
        <a
          href="/ja/docs/Web/HTML/Date_and_time_formats#Local_date_and_time_strings"
          >[詳細]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>1901-01-01T00:00Z</code></td>
      <td>UTC での1901年1月1日の夜半</td>
      <td>
        <a
          href="/ja/docs/Web/HTML/Date_and_time_formats#Global_date_and_time_strings"
          >[詳細]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>1901-01-01T00:00:01-04:00</code></td>
      <td>米東部標準時の1901年1月1日の夜半から1秒後</td>
      <td>
        <a
          href="/ja/docs/Web/HTML/Date_and_time_formats#Global_date_and_time_strings"
          >[詳細]</a
        >
      </td>
    </tr>
  </tbody>
</table>

## 基本

HTML 要素で使用される文字列に関する日付や時刻のさまざまな形式を見てみる前に、これらの定義方法についての基本的な事実をいくつか理解してしておくと役に立ちます。 HTML では、日付や時刻の文字列に [ISO 8601](https://ja.wikipedia.org/wiki/ISO_8601) 標準の一種を使用します。 HTML 仕様書には、実際に ISO 8601 よりも詳細に文字列を解析するアルゴリズムが含まれており、日付と時刻の外見について微妙な違いがある可能性があるので、文字列が実際に HTML と互換性があることを確認するためには、使用している形式の説明を確認する価値があります。

### 文字セット

HTML において、日付と時刻は常に [ASCII](https://ja.wikipedia.org/wiki/ASCII) 文字セットを使用した文字列です。

### 年

HTML で日付の文字列に使われる基本的な形式を単純化するために、仕様書ではすべての年をグレゴリオ暦 (または**先発グレゴリオ暦**) を使用して指定することを要求しています。ユーザーインターフェイスは他のカレンダーを使用した日付を入力することもできますが、元となる値は常にグレゴリオ暦を使用します。

グレゴリオ暦は (同様のユリウス暦を置き換えた) 1582 年まで作成されていませんでしたが、 HTML の目的上、グレゴリオ暦は紀元 1 年まで延長されています。古い日付については、それを考慮してください。

HTML の日付の目的上、年は常に 4 桁以上の長さになります。1000 年より前の年は、先頭にゼロ ("`0`") を入れますので、72 年は `0072` と書かれます。紀元 1 年以前の年には対応していないので、 HTML は紀元前 1 年以前の年に対応していません。

1 年はふつうは 365 日ですが、**[閏年](#leap_years)**は例外です。

#### 閏年

**閏年**は 400 で割れる年、または 4 で割れる年で 100 で割れない年です。暦年の長さは通常 365 日ですが、実際には地球が太陽の周りを一周するのにおよそ 365.2422 日かかります。閏年は、惑星の軌道上の実際の位置に合わせてカレンダーを調整するのに役立ちます。4 年ごとに 1 日を加えると、平均的な 1 年の長さは 365.25 日になり、これはほぼ正確に近くなります。

アルゴリズムの調整 (年を 400 で割ることができる場合は閏年とし、年を 100 で割ることができる場合はうるう年としない) は、平均をさらに正しい日数 (365.2425 日) に近づけるのに役立ちます。科学者たちは、残りの 1 万分の 3 日を処理し、地球の自転が自然に徐々に遅くなるのを補うために、閏秒をカレンダーに追加することがあります (真面目な話)。

`02` の月、すなわち 2 月は通常 28 日ですが、閏年には 29 日になります。

### 月

1 年には 12 ヶ月があり、1 から 12 まで番号が振られています。これらは常に 2 桁の ASCII 文字列、 `01` から `12` の範囲で表現されます。[日](#days_of_the_month)の節にある表で、対応する名前を (と日数) を確認してください。

### 日

1, 3, 5, 7, 8, 10, 12 月は 31 日あります。 4, 6, 9, 11 月は 30 日あります。 2 月は多くの年では 28 日ですが、閏年には 29 日になります。これは下記の表で詳しく説明しています。

| 月の番号 | 名前 (英語) | 日数             |
| -------- | ----------- | ---------------- |
| 01       | January     | 31               |
| 02       | February    | 28 (閏年では 29) |
| 03       | March       | 31               |
| 04       | April       | 30               |
| 05       | May         | 31               |
| 06       | June        | 30               |
| 07       | July        | 31               |
| o8       | August      | 31               |
| 09       | September   | 30               |
| 10       | October     | 31               |
| 11       | November    | 30               |
| 12       | December    | 31               |

## 週の文字列

A week string specifies a week within a particular year. A **valid week string** consists of a valid [year number](#year_numbers), followed by a hyphen character ("`-`", or U+002D), then the capital letter "`W`" (U+0057), followed by a two-digit week of the year value.

The week of the year is a two-digit string between `01` and `53`. Each week begins on Monday and ends on Sunday. That means it's possible for the first few days of January to be considered part of the previous week-year, and for the last few days of December to be considered part of the following week-year. The first week of the year is the week that conains the _first Thursday of the year_. For example, the first Thursday of 1953 was on January 1, so that week—beginning on Monday, December 29—is considered the first week of the year. Therefore, December 30, 1952 occurs during the week `1953-W01`.

A year has 53 weeks if:

- The first day of the calendar year (January 1) is a Thursday **or**
- The first day of the year (January 1) is a Wednesday and the year is a [leap year](#leap_years)

All other years have 52 weeks.

| Week string | Week and year (Date range)                        |
| ----------- | ------------------------------------------------- |
| `2001-W37`  | Week 37, 2001 (September 10-16, 2001)             |
| `1953-W01`  | Week 1, 1953 (December 29, 1952-January 4, 1953)  |
| `1948-W53`  | Week 53, 1948 (December 27, 1948-January 2, 1949) |
| `1949-W01`  | Week 1, 1949 (January 3-9, 1949)                  |
| `0531-W16`  | Week 16, 531 (April 13-19, 531)                   |
| `0042-W04`  | Week 4, 42 (January 21-27, 42)                    |

Note that both the year and week numbers are padded with leading zeroes, with the year padded to four digits and the week to two.

## 月の文字列

A month string represents a specific month in time, rather than a genetic month of the year. That is, rather than representing simply "January," an HTML month string represents a month and year paired, like "January 1972."

A **valid month string** consists of a valid [year number](#year_numbers) (a string of at least four digits), followed by a hyphen character ("`-`", or U+002D), followed by a two-digit numeric [month number](#months_of_the_year), where `01` represents January and `12` represents December.

| 月の文字列 | 年月             |
| ---------- | ---------------- |
| `17310-09` | September, 17310 |
| `2019-01`  | January, 2019    |
| `1993-11`  | November, 1993   |
| `0571-04`  | April, 571       |
| `0001-07`  | July, 1 C.E.     |

Notice that all years are at least four characters long; years that are fewer than four digits long are padded with leading zeroes.

## 日の文字列

A valid date string consists of a [month string](#month_strings), followed by a hyphen character ("`-`", or U+002D), followed by a two-digit [day of the month](#days_of_the_month).

| 月の文字列   | 日付全体         |
| ------------ | ---------------- |
| `1993-11-01` | November 1, 1993 |
| `1066-10-14` | October 14, 1066 |
| `0571-04-22` | April 22, 571    |
| `0062-02-05` | February 5, 62   |

## 時刻の文字列

A time string can specify a time with precision to the minute, second, or to the millisecond. Specifying only the hour or minute isn't permitted. A **valid time string** minimally consists of a two-digit hour followed by a colon ("`:`", U+003A), then a two-digit minute. The minute may optionally be followed by another colon and a two-digit number of seconds. Milliseconds may be specified, optionally, by adding a decimal point character ("`.`", U+002E) followed by one, two, or three digits.

There are some additional basic rules:

- The hour is always specified using the 24-hour clock, with `00` being midnight and 11 PM being `23`. No values outside the range `00`–`23` are permitted.
- The minute must be a two-digit number between `00` and `59`. No values outside that range are allowed.
- If the number of seconds is omitted (to specify a time accurate only to the minute), no colon should follow the number of minutes.
- If specified, the integer portion of the number of seconds must be between `00` and `59`. You _cannot_ specify leap seconds by using values like `60` or `61`.
- If the number of seconds is specified and is an integer, it must not be followed by a decimal point.
- If a fraction of a second is included, it may be from one to three digits long, indicating the number of milliseconds. It follows the decimal point placed after the seconds component of the time string.

| 時刻の文字列  | 時刻                                          |
| ------------- | --------------------------------------------- |
| `00:00:30.75` | 12:00:30.75 AM (30.75 seconds after midnight) |
| `12:15`       | 12:15 PM                                      |
| `13:44:25`    | 1:44:25 PM (25 seconds after 1:44 PM)         |

## ローカル日時の文字列

A valid [`datetime-local`](/ja/docs/Web/HTML/Element/input/datetime-local) string consists of a `date` string and a `time` string concatenated together with either the letter "`T`" or a space character separating them. No information about the time zone is included in the string; the date and time is presumed to be in the user's local time zone.

When you set the [`value`](/ja/docs/Web/HTML/Element/input#value) of a `datetime-local` input, the string is **normalized** into a standard form. Normalized `datetime` strings always use the letter "`T`" to separate the date and the time, and the time portion of the string is as short as possible. This is done by leaving out the seconds component if its value is `:00`.

| Date/time string          | Normalized date/time string                            | Actual date and time               |
| ------------------------- | ------------------------------------------------------ | ---------------------------------- |
| `1986-01-28T11:38:00.01`  | `1986-01-28T11:38:00.01`                               | January 28, 1986 at 11:38:00.01 AM |
| `1986-01-28 11:38:00.010` | `1986-01-28T11:38:00.01`[1](#datetime-local-footnote1) | January 28, 1986 at 11:38:00.01 AM |
| `0170-07-31T22:00:00`     | `0170-07-31T22:00`[2](#datetime-local-footnote2)       | July 31, 170 at 10:00 PM           |

1. Notice that&#x20;

    after normalization

    , this is the same string as the previous `datetime-local` string. The space has been replaced with the "`T`" character and the trailing zero in the fraction of a second has been removed to make the string as short as possible.

2. Note that the&#x20;

    normalized form

    &#x20;of this date drops the "`:00`" indicating the number of seconds to be zero, because the seconds are optional when zero, and the normalized string minimizes the length of the string.

## グローバル日時の文字列

A global date and time string specifies a date and time as well as the time zone in which it occurs. A **valid global date and time string** is the same format as a [local date and time string](#local_date_and_time_strings), except it has a time zone string appended to the end, following the time.

### タイムゾーンオフセット文字列

A time zone offset string specifies the offset in either a positive or a negative number of hours and minutes from the standard time base. There are two standard time bases, which are very close to the same, but not exactly the same:

- For dates after the establishment of [Coordinated Universal Time](https://ja.wikipedia.org/wiki/Coordinated_Universal_Time) (UTC) in the early 1960s, the time base is `Z` and the offset indicates a particular time zone's offset from the time at the prime meridian at 0º longitude (which passes through the Royal Observatory at Greenwich, England).
- For dates prior to UTC, the time base is instead expressed in terms of [UT1](https://ja.wikipedia.org/wiki/UT1), which is the contemporary Earth solar time at the prime meridian.

The time zone string is appended immediately following the time in the date and time string. You can specify simply "`Z`" as the time zone offset string to indicate that the time is specified in UTC. Otherwise, the time zone string is constructed as follows:

1. A character indicating the sign of the offset: the plus character ("`+`", or U+002B) for time zones to the east of the prime meridian or the minus character ("`-`", or U+002D) for time zones to the west of the prime meridian.
2. A two-digit number of hours that the time zone is offset from the prime meridian. This value must be between `00` and `23`.
3. An optional colon ("`:`") character.
4. A two-digit number of minutes past the hour; this value must be between `00` and `59`.

While this format allows for time zones between -23:59 and +23:59, the current range of time zone offsets is -12:00 to +14:00, and no time zones are currently offset from the hour by anything other than `00`, `30`, or `45` minutes. This may change at more or less anytime, since countries are free to tamper with their time zones at any time and in any way they wish to do so.

| Global date and time string   | Actual global date and time                                                      | Date and time at prime meridian                     |
| ----------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------- |
| `2005-06-07T00:00Z`           | June 7, 2005 at midnight UTC                                                     | June 7, 2005 at midnight                            |
| `1789-08-22T12:30:00.1-04:00` | August 22, 1789 at a tenth of a second past 12:30 PM Eastern Daylight Time (EDT) | August 22, 1789 at a tenth of a second past 4:30 PM |
| `3755-01-01 00:00+10:00`      | January 1, 3755 at midnight Australian Eastern Standard Time (AEST)              | December 31, 3754 at 2:00 PM                        |

## 関連情報

- {{HTMLElement("input")}}
- {{HTMLElement("ins")}} and {{HTMLElement("del")}}: see the `datetime` attribute, which specifies either a date or a local date and time at which the content was inserted or deleted
- [The ISO 8601 specification](https://www.iso.org/iso-8601-date-and-time-format.html)
- [Numbers and Dates](/ja/docs/Web/JavaScript/Guide/Numbers_and_dates) in the [JavaScript Guide](/ja/docs/Web/JavaScript/Guide)
- The JavaScript {{jsxref("Date")}} object
- The [`Intl.DateTimeFormat`](/ja/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) object for formatting dates and times for a given locale
