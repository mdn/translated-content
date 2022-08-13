---
title: HTML で使われる日付や時刻の形式
slug: Web/HTML/Date_and_time_formats
tags:
  - Date
  - Element
  - Format
  - HTML
  - ISO 8601
  - Input
  - Reference
  - String
  - Time
  - Week
  - datetime
  - datetime-local
  - del
  - ins
  - month
  - month-year
  - week-year
  - 日付
  - 時刻
  - 週
translation_of: Web/HTML/Date_and_time_formats
---
<div>{{HTMLRef}}</div>

<p><span class="seoSummary">一部の HTML 要素は日付や時刻の値を使用します。この記事ではこれらの値を指定する文字列の形式について説明しています。</span>このような形式を使用する要素には、ユーザーに日付、時刻、またはその両方を選択または指定させる {{HTMLElement("input")}} 要素の一部の形、同様に {{HTMLElement("ins")}} および {{HTMLElement("del")}} 要素で、 {{htmlattrxref("datetime", "ins")}} 属性によって内容の挿入または削除が行われた日付や日時を指定しているものなどがあります。</p>

<p><code>&lt;input&gt;</code> については、 {{htmlattrxref("type", "input")}} の値で日付や時刻を表す文字列を含む {{htmlattrxref("value")}} を返すものは次の通りです。</p>

<div class="twocolumns">
<ul style="list-style-type: none; padding-left: 0;">
 <li><code><a href="/ja/docs/Web/HTML/Element/input/date">date</a></code></li>
 <li><code><a href="/ja/docs/Web/HTML/Element/input/datetime">datetime</a></code> {{deprecated_inline}}</li>
 <li><code><a href="/ja/docs/Web/HTML/Element/input/datetime-local">datetime-local</a></code></li>
 <li><code><a href="/ja/docs/Web/HTML/Element/input/month">month</a></code></li>
 <li><code><a href="/ja/docs/Web/HTML/Element/input/time">time</a></code></li>
 <li><code><a href="/ja/docs/Web/HTML/Element/input/week">week</a></code></li>
</ul>
</div>

<h2 id="Examples" name="Examples">例</h2>

<p>日付と時刻の文字列が HTML でどのように記述され解析されるかの複雑さを理解する前に、より一般的に使用される日付と時刻の文字列形式がどのように見えるかを理解するための例をいくつか示します。</p>

<table class="standard-table">
 <caption>HTML の日付と時刻の文字列の例</caption>
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
   <td><a href="/ja/docs/Web/HTML/Date_and_time_formats#Date_strings">[詳細]</a></td>
  </tr>
  <tr>
   <td><code>08:45</code></td>
   <td>午前8時45分</td>
   <td><a href="/ja/docs/Web/HTML/Date_and_time_formats#Time_strings">[詳細]</a></td>
  </tr>
  <tr>
   <td><code>08:45:25</code></td>
   <td>午前8時45分25秒</td>
   <td><a href="/ja/docs/Web/HTML/Date_and_time_formats#Time_strings">[詳細]</a></td>
  </tr>
  <tr>
   <td><code>0033-08-04T03:40</code></td>
   <td>33年8月4日午前3時40分</td>
   <td><a href="/ja/docs/Web/HTML/Date_and_time_formats#Local_date_and_time_strings">[詳細]</a></td>
  </tr>
  <tr>
   <td><code>1977-04-01T14:00:30</code></td>
   <td>1977年4月1日午後2時30秒</td>
   <td><a href="/ja/docs/Web/HTML/Date_and_time_formats#Local_date_and_time_strings">[詳細]</a></td>
  </tr>
  <tr>
   <td><code>1901-01-01T00:00Z</code></td>
   <td>UTC での1901年1月1日の夜半</td>
   <td><a href="/ja/docs/Web/HTML/Date_and_time_formats#Global_date_and_time_strings">[詳細]</a></td>
  </tr>
  <tr>
   <td><code>1901-01-01T00:00:01-04:00</code></td>
   <td>米東部標準時の1901年1月1日の夜半から1秒後</td>
   <td><a href="/ja/docs/Web/HTML/Date_and_time_formats#Global_date_and_time_strings">[詳細]</a></td>
  </tr>
 </tbody>
</table>

<h2 id="Basics" name="Basics">基本</h2>

<p>HTML 要素で使用される文字列に関する日付や時刻のさまざまな形式を見てみる前に、これらの定義方法についての基本的な事実をいくつか理解してしておくと役に立ちます。 HTML では、日付や時刻の文字列に {{interwiki("wikipedia", "ISO 8601")}} 標準の一種を使用します。 HTML 仕様書には、実際に ISO 8601 よりも詳細に文字列を解析するアルゴリズムが含まれており、日付と時刻の外見について微妙な違いがある可能性があるので、文字列が実際に HTML と互換性があることを確認するためには、使用している形式の説明を確認する価値があります。</p>

<h3 id="Character_set" name="Character_set">文字セット</h3>

<p>HTML において、日付と時刻は常に {{interwiki("wikipedia", "ASCII")}} 文字セットを使用した文字列です。</p>

<h3 id="Year_numbers" name="Year_numbers">年</h3>

<p>HTML で日付の文字列に使われる基本的な形式を単純化するために、仕様書ではすべての年をグレゴリオ暦 (または<strong>先発グレゴリオ暦</strong>) を使用して指定することを要求しています。ユーザーインターフェイスは他のカレンダーを使用した日付を入力することもできますが、元となる値は常にグレゴリオ暦を使用します。</p>

<p>グレゴリオ暦は (同様のユリウス暦を置き換えた) 1582年まで作成されていませんでしたが、 HTML の目的上、グレゴリオ暦は紀元1年まで延長されています。古い日付については、それを考慮してください。</p>

<p>HTML の日付の目的上、年は常に4桁以上の長さになります。1000年より前の年は、先頭にゼロ ("<code>0</code>") を入れますので、72年は <code>0072</code> と書かれます。紀元1年以前の年には対応していないので、 HTML は紀元前1年以前の年に対応していません。</p>

<p>1年はふつうは365日ですが、<strong><a href="#leap_years">閏年</a></strong>は例外です。</p>

<h4 id="Leap_years" name="Leap_years">閏年</h4>

<p><strong>閏年</strong>は400で割れる年、<em>または</em>4で割れる年で100で割れない年です。暦年の長さは通常365日ですが、実際には地球が太陽の周りを一周するのにおよそ365.2422日かかります。閏年は、惑星の軌道上の実際の位置に合わせてカレンダーを調整するのに役立ちます。4年ごとに1日を加えると、平均的な1年の長さは365.25日になり、これはほぼ正確に近くなります。</p>

<p>アルゴリズムの調整 (年を400で割ることができる場合は閏年とし、年を100で割ることができる場合はうるう年としない) は、平均をさらに正しい日数 (365.2425日) に近づけるのに役立ちます。科学者たちは、残りの1万分の3日を処理し、地球の自転が自然に徐々に遅くなるのを補うために、閏秒をカレンダーに追加することがあります (真面目な話)。</p>

<p><code>02</code> の月、すなわち2月は通常28日ですが、閏年には29日になります。</p>

<h3 id="Months_of_the_year" name="Months_of_the_year">月</h3>

<p>1年には12ヶ月があり、1から12まで番号が振られています。これらは常に2桁の ASCII 文字列、 <code>01</code> から <code>12</code> の範囲で表現されます。<a href="#days_of_the_month">日</a>の節にある表で、対応する名前を (と日数) を確認してください。</p>

<h3 id="Days_of_the_month" name="Days_of_the_month">日</h3>

<p>1, 3, 5, 7, 8, 10, 12月は31日あります。 4, 6, 9, 11月は30日あります。 2月は多くの年では28日ですが、閏年には29日になります。これは下記の表で詳しく説明しています。</p>

<table class="standard-table">
 <caption>月とその日数</caption>
 <thead>
  <tr>
   <th scope="row">月の番号</th>
   <th scope="col">名前 (英語)</th>
   <th scope="col">日数</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row">01</th>
   <td>January</td>
   <td>31</td>
  </tr>
  <tr>
   <th scope="row">02</th>
   <td>February</td>
   <td>28 (閏年では29)</td>
  </tr>
  <tr>
   <th scope="row">03</th>
   <td>March</td>
   <td>31</td>
  </tr>
  <tr>
   <th scope="row">04</th>
   <td>April</td>
   <td>30</td>
  </tr>
  <tr>
   <th scope="row">05</th>
   <td>May</td>
   <td>31</td>
  </tr>
  <tr>
   <th scope="row">06</th>
   <td>June</td>
   <td>30</td>
  </tr>
  <tr>
   <th scope="row">07</th>
   <td>July</td>
   <td>31</td>
  </tr>
  <tr>
   <th scope="row">o8</th>
   <td>August</td>
   <td>31</td>
  </tr>
  <tr>
   <th scope="row">09</th>
   <td>September</td>
   <td>30</td>
  </tr>
  <tr>
   <th scope="row">10</th>
   <td>October</td>
   <td>31</td>
  </tr>
  <tr>
   <th scope="row">11</th>
   <td>November</td>
   <td>30</td>
  </tr>
  <tr>
   <th scope="row">12</th>
   <td>December</td>
   <td>31</td>
  </tr>
 </tbody>
</table>

<h2 id="Week_strings" name="Week_strings">週の文字列</h2>

<p>A week string specifies a week within a particular year. A <strong>valid week string</strong> consists of a valid <a href="#year_numbers">year number</a>, followed by a hyphen character ("<code>-</code>", or U+002D), then the capital letter "<code>W</code>" (U+0057), followed by a two-digit week of the year value.</p>

<p>The week of the year is a two-digit string between <code>01</code> and <code>53</code>. Each week begins on Monday and ends on Sunday. That means it's possible for the first few days of January to be considered part of the previous week-year, and for the last few days of December to be considered part of the following week-year. The first week of the year is the week that conains the <em>first Thursday of the year</em>. For example, the first Thursday of 1953 was on January 1, so that week—beginning on Monday, December 29—is considered the first week of the year. Therefore, December 30, 1952 occurs during the week <code>1953-W01</code>.</p>

<p>A year has 53 weeks if:</p>

<ul>
 <li>The first day of the calendar year (January 1) is a Thursday <strong>or</strong></li>
 <li>The first day of the year (January 1) is a Wednesday and the year is a <a href="#leap_years">leap year</a></li>
</ul>

<p>All other years have 52 weeks.</p>

<table class="standard-table">
 <caption>Examples of valid week strings</caption>
 <thead>
  <tr>
   <th scope="col">Week string</th>
   <th scope="col">Week and year (Date range)</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>2001-W37</code></td>
   <td>Week 37, 2001 (September 10-16, 2001)</td>
  </tr>
  <tr>
   <td><code>1953-W01</code></td>
   <td>Week 1, 1953 (December 29, 1952-January 4, 1953)</td>
  </tr>
  <tr>
   <td><code>1948-W53</code></td>
   <td>Week 53, 1948 (December 27, 1948-January 2, 1949)</td>
  </tr>
  <tr>
   <td><code>1949-W01</code></td>
   <td>Week 1, 1949 (January 3-9, 1949)</td>
  </tr>
  <tr>
   <td><code>0531-W16</code></td>
   <td>Week 16, 531 (April 13-19, 531)</td>
  </tr>
  <tr>
   <td><code>0042-W04</code></td>
   <td>Week 4, 42 (January 21-27, 42)</td>
  </tr>
 </tbody>
</table>

<p>Note that both the year and week numbers are padded with leading zeroes, with the year padded to four digits and the week to two.</p>

<h2 id="Month_strings" name="Month_strings">月の文字列</h2>

<p>A month string represents a specific month in time, rather than a genetic month of the year. That is, rather than representing simply "January," an HTML month string represents a month and year paired, like "January 1972."</p>

<p>A <strong>valid month string</strong> consists of a valid <a href="#year_numbers">year number</a> (a string of at least four digits), followed by a hyphen character ("<code>-</code>", or U+002D), followed by a two-digit numeric <a href="#months_of_the_year">month number</a>, where <code>01</code> represents January and <code>12</code> represents December.</p>

<table class="standard-table">
 <caption>有効な月の文字列の例</caption>
 <thead>
  <tr>
   <th scope="col">月の文字列</th>
   <th scope="col">年月</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>17310-09</code></td>
   <td>September, 17310</td>
  </tr>
  <tr>
   <td><code>2019-01</code></td>
   <td>January, 2019</td>
  </tr>
  <tr>
   <td><code>1993-11</code></td>
   <td>November, 1993</td>
  </tr>
  <tr>
   <td><code>0571-04</code></td>
   <td>April, 571</td>
  </tr>
  <tr>
   <td><code>0001-07</code></td>
   <td>July, 1 C.E.</td>
  </tr>
 </tbody>
</table>

<p>Notice that all years are at least four characters long; years that are fewer than four digits long are padded with leading zeroes.</p>

<h2 id="Date_strings" name="Date_strings">日の文字列</h2>

<p>A valid date string consists of a <a href="#month_strings">month string</a>, followed by a hyphen character ("<code>-</code>", or U+002D), followed by a two-digit <a href="#days_of_the_month">day of the month</a>.</p>

<table class="standard-table">
 <caption>妥当な日の文字列の例</caption>
 <thead>
  <tr>
   <th scope="col">月の文字列</th>
   <th scope="col">日付全体</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>1993-11-01</code></td>
   <td>November 1, 1993</td>
  </tr>
  <tr>
   <td><code>1066-10-14</code></td>
   <td>October 14, 1066</td>
  </tr>
  <tr>
   <td><code>0571-04-22</code></td>
   <td>April 22, 571</td>
  </tr>
  <tr>
   <td><code>0062-02-05</code></td>
   <td>February 5, 62</td>
  </tr>
 </tbody>
</table>

<h2 id="Time_strings" name="Time_strings">時刻の文字列</h2>

<p>A time string can specify a time with precision to the minute, second, or to the millisecond. Specifying only the hour or minute isn't permitted. A <strong>valid time string</strong> minimally consists of a two-digit hour followed by a colon ("<code>:</code>", U+003A), then a two-digit minute. The minute may optionally be followed by another colon and a two-digit number of seconds. Milliseconds may be specified, optionally, by adding a decimal point character ("<code>.</code>", U+002E) followed by one, two, or three digits.</p>

<p>There are some additional basic rules:</p>

<ul>
 <li>The hour is always specified using the 24-hour clock, with <code>00</code> being midnight and 11 PM being <code>23</code>. No values outside the range <code>00</code>–<code>23</code> are permitted.</li>
 <li>The minute must be a two-digit number between <code>00</code> and <code>59</code>. No values outside that range are allowed.</li>
 <li>If the number of seconds is omitted (to specify a time accurate only to the minute), no colon should follow the number of minutes.</li>
 <li>If specified, the integer portion of the number of seconds must be between <code>00</code> and <code>59</code>. You <em>cannot</em> specify leap seconds by using values like <code>60</code> or <code>61</code>.</li>
 <li>If the number of seconds is specified and is an integer, it must not be followed by a decimal point.</li>
 <li>If a fraction of a second is included, it may be from one to three digits long, indicating the number of milliseconds. It follows the decimal point placed after the seconds component of the time string.</li>
</ul>

<table class="standard-table">
 <caption>妥当な時刻の文字列の例</caption>
 <thead>
  <tr>
   <th scope="col">時刻の文字列</th>
   <th scope="col">時刻</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>00:00:30.75</code></td>
   <td>12:00:30.75 AM (30.75 seconds after midnight)</td>
  </tr>
  <tr>
   <td><code>12:15</code></td>
   <td>12:15 PM</td>
  </tr>
  <tr>
   <td><code>13:44:25</code></td>
   <td>1:44:25 PM (25 seconds after 1:44 PM)</td>
  </tr>
 </tbody>
</table>

<h2 id="Local_date_and_time_strings" name="Local_date_and_time_strings">ローカル日時の文字列</h2>

<p>A valid <code><a href="/ja/docs/Web/HTML/Element/input/datetime-local">datetime-local</a></code> string consists of a <code>date</code> string and a <code>time</code> string concatenated together with either the letter "<code>T</code>" or a space character separating them. No information about the time zone is included in the string; the date and time is presumed to be in the user's local time zone.</p>

<p>When you set the {{htmlattrxref("value", "input")}} of a <code>datetime-local</code> input, the string is <strong>normalized</strong> into a standard form. Normalized <code>datetime</code> strings always use the letter "<code>T</code>" to separate the date and the time, and the time portion of the string is as short as possible. This is done by leaving out the seconds component if its value is <code>:00</code>.</p>

<table class="standard-table">
 <caption>Examples of valid <code>datetime-local</code> strings</caption>
 <thead>
  <tr>
   <th scope="col">Date/time string</th>
   <th scope="col">Normalized date/time string</th>
   <th scope="col">Actual date and time</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>1986-01-28T11:38:00.01</code></td>
   <td><code>1986-01-28T11:38:00.01</code></td>
   <td>January 28, 1986 at 11:38:00.01 AM</td>
  </tr>
  <tr>
   <td><code>1986-01-28 11:38:00.010</code></td>
   <td><code>1986-01-28T11:38:00.01</code><sup><a href="#datetime-local-footnote1">1</a></sup></td>
   <td>January 28, 1986 at 11:38:00.01 AM</td>
  </tr>
  <tr>
   <td><code>0170-07-31T22:00:00</code></td>
   <td><code>0170-07-31T22:00</code><sup><a href="#datetime-local-footnote2">2</a></sup></td>
   <td>July 31, 170 at 10:00 PM</td>
  </tr>
 </tbody>
</table>

<ol>
 <li>Notice that <a id="datetime-local-footnote1" name="datetime-local-footnote1">after normalization</a>, this is the same string as the previous <code>datetime-local</code> string. The space has been replaced with the "<code>T</code>" character and the trailing zero in the fraction of a second has been removed to make the string as short as possible.</li>
 <li>Note that the <a id="datetime-local-footnote2" name="datetime-local-footnote2">normalized form</a> of this date drops the "<code>:00</code>" indicating the number of seconds to be zero, because the seconds are optional when zero, and the normalized string minimizes the length of the string.</li>
</ol>

<h2 id="Global_date_and_time_strings" name="Global_date_and_time_strings">グローバル日時の文字列</h2>

<p>A global date and time string specifies a date and time as well as the time zone in which it occurs. A <strong>valid global date and time string</strong> is the same format as a <a href="#local_date_and_time_strings">local date and time string</a>, except it has a time zone string appended to the end, following the time.</p>

<h3 id="Time_zone_offset_string" name="Time_zone_offset_string">タイムゾーンオフセット文字列</h3>

<p>A time zone offset string specifies the offset in either a positive or a negative number of hours and minutes from the standard time base. There are two standard time bases, which are very close to the same, but not exactly the same:</p>

<ul>
 <li>For dates after the establishment of {{interwiki("wikipedia", "Coordinated Universal Time")}} (UTC) in the early 1960s, the time base is <code>Z</code> and the offset indicates a particular time zone's offset from the time at the prime meridian at 0º longitude (which passes through the Royal Observatory at Greenwich, England).</li>
 <li>For dates prior to UTC, the time base is instead expressed in terms of {{interwiki("wikipedia", "UT1")}}, which is the contemporary Earth solar time at the prime meridian.</li>
</ul>

<p>The time zone string is appended immediately following the time in the date and time string. You can specify simply "<code>Z</code>" as the time zone offset string to indicate that the time is specified in UTC. Otherwise, the time zone string is constructed as follows:</p>

<ol>
 <li>A character indicating the sign of the offset: the plus character ("<code>+</code>", or U+002B) for time zones to the east of the prime meridian or the minus character ("<code>-</code>", or U+002D) for time zones to the west of the prime meridian.</li>
 <li>A two-digit number of hours that the time zone is offset from the prime meridian. This value must be between <code>00</code> and <code>23</code>.</li>
 <li>An optional colon ("<code>:</code>") character.</li>
 <li>A two-digit number of minutes past the hour; this value must be between <code>00</code> and <code>59</code>.</li>
</ol>

<p>While this format allows for time zones between -23:59 and +23:59, the current range of time zone offsets is -12:00 to +14:00, and no time zones are currently offset from the hour by anything other than <code>00</code>, <code>30</code>, or <code>45</code> minutes. This may change at more or less anytime, since countries are free to tamper with their time zones at any time and in any way they wish to do so.</p>

<table class="standard-table">
 <caption>Examples of valid global date and time strings</caption>
 <thead>
  <tr>
   <th scope="col">Global date and time string</th>
   <th scope="col">Actual global date and time</th>
   <th scope="col">Date and time at prime meridian</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>2005-06-07T00:00Z</code></td>
   <td>June 7, 2005 at midnight UTC</td>
   <td>June 7, 2005 at midnight</td>
  </tr>
  <tr>
   <td><code>1789-08-22T12:30:00.1-04:00</code></td>
   <td>August 22, 1789 at a tenth of a second past 12:30 PM Eastern Daylight Time (EDT)</td>
   <td>August 22, 1789 at a tenth of a second past 4:30 PM</td>
  </tr>
  <tr>
   <td><code>3755-01-01 00:00+10:00</code></td>
   <td>January 1, 3755 at midnight Australian Eastern Standard Time (AEST)</td>
   <td>December 31, 3754 at 2:00 PM</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTMLElement("input")}}</li>
 <li>{{HTMLElement("ins")}} and {{HTMLElement("del")}}: see the <code>datetime</code> attribute, which specifies either a date or a local date and time at which the content was inserted or deleted</li>
 <li><a href="https://www.iso.org/iso-8601-date-and-time-format.html">The ISO 8601 specification</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Numbers_and_dates">Numbers and Dates</a> in the <a href="/ja/docs/Web/JavaScript/Guide">JavaScript Guide</a></li>
 <li>The JavaScript {{jsxref("Date")}} object</li>
 <li>The <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat">Intl.DateTimeFormat</a></code> object for formatting dates and times for a given locale</li>
</ul>
