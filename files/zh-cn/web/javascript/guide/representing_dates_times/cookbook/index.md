---
title: Temporal 手册
slug: Web/JavaScript/Guide/Representing_dates_times/Cookbook
l10n:
  sourceCommit: e976b4bf6b9e0c68b4321904560df47804d8cc48
---

> [!NOTE]
> 本文档基于 TC39 原始提案文档中的 [Cookbook](https://tc39.es/proposal-temporal/docs/cookbook.html)。

本指南提供了 {{jsxref("Temporal")}} 常见用例的代码片段。如有需要，请先阅读[表达日期与时间](/zh-CN/docs/Web/JavaScript/Guide/Representing_dates_times)指南，以了解 `Temporal` 的基本概念和 API 范围。

## 当前日期和时间

```js
const date = Temporal.Now.plainDateISO(); // 获取当前日期
date.toString(); // 以 ISO 8601 日期格式返回日期

// 如果你还需要时间：
Temporal.Now.plainDateTimeISO().toString(); // ISO 8601 格式的日期和时间
```

注意，如果你只需要日期而不需要时间，应使用 {{jsxref("Temporal.PlainDate")}}。如果两者都需要，请使用 {{jsxref("Temporal.PlainDateTime")}}。

## Unix 时间戳

```js
const timeStamp = Temporal.Now.instant();

// 毫秒时间戳
timeStamp.epochMilliseconds;

// 秒时间戳
Math.floor(timeStamp.epochMilliseconds / 1000);
```

## 在 Temporal 类型与旧版 Date 之间转换

### 从旧版 Date 转换为 Temporal.Instant 和/或 Temporal.ZonedDateTime

下面介绍如何把旧版 {{jsxref("Date")}} 转换为对应于同一精确时刻的 {{jsxref("Temporal.Instant")}} 或 {{jsxref("Temporal.ZonedDateTime")}} 实例。

如果你需要 `ZonedDateTime`，请使用所得 `Instant` 的 {{jsxref("Temporal/Instant/toZonedDateTimeISO", "toZonedDateTimeISO()")}} 方法。你必须指定时区，因为旧版 `Date` 只存储精确时间，不存储时区。

在旧版 `Date` 实例上调用方法时，你必须决定是把这个精确时间解释为 UTC 值（使用名称中带“UTC”的方法），还是解释为当前系统时区中的值（使用其他方法）。这很容易混淆，因此 `Temporal` 提供了更明确的方式。

要使用系统的本地时区（相当于使用旧版 `Date` 的 {{jsxref("Date/getFullYear", "getFullYear()")}}、{{jsxref("Date/getMonth", "getMonth()")}} 等方法），请把 {{jsxref("Temporal.Now.timeZoneId()")}} 作为时区传入。在浏览器中，这会是用户的时区，但在服务器上该值可能并非你所期望，因此请避免在服务器环境中这样做。

```js
const legacyDate = new Date("1970-01-01T00:00:01Z");
const instant = legacyDate.toTemporalInstant();

console.log(instant.epochMilliseconds === legacyDate.getTime()); // true
console.log(instant.toString()); // '1970-01-01T00:00:01Z'

const zoned = instant.toZonedDateTimeISO(Temporal.Now.timeZoneId());

console.log(zoned.epochMilliseconds === legacyDate.getTime()); // true
```

下面是一个使用特定时区的示例。尤其是在服务器环境中，你通常会从所处理数据的其他地方获得这个时区。如果旧版 `Date` 实例是通过 {{jsxref("Date/getUTCFullYear", "getUTCFullYear()")}}、{{jsxref("Date/getUTCMonth", "getUTCMonth()")}} 等方法访问的，可以考虑直接使用 `Instant`。如果必须使用 `ZonedDateTime`，具体时区可能需要设为 `"UTC"`。

```js
const zoned2 = instant.toZonedDateTimeISO("Asia/Shanghai");

console.log(zoned2.epochMilliseconds === legacyDate.getTime()); // true
console.log(zoned2.timeZoneId); // 'Asia/Shanghai'
```

### 仅日期值：从旧版 Date 转换为 Temporal.PlainDate

一个常见的 bug 源于一个简单的问题：这个 `Date` 表示哪个日期（年、月、日）？问题在于，答案取决于时区。同一个 `Date` 在旧金山可能是 12 月 31 日，而在伦敦或东京则是 1 月 1 日。

因此，在尝试提取年、月、日，或进行涉及日期单位的计算（例如“这件事是昨天发生的吗？”）_之前_，必须先在正确的时区上下文中解释 `Date`。正因如此，`Temporal.Instant`（即 `Date` 在 `Temporal` 中的对应类型）没有 `year`、`month`、`day` 属性。要在 `Temporal` 中访问日期或时间单位，必须提供时区，如上文的代码示例所示。

另一个容易出错的场景是把 `Date` 滥用于存储仅日期的值，例如用户的出生日期。使用 `Date` 时，这类值通常以午夜时间存储，但要正确读回日期，你需要知道创建该 `Date` 时使用的是哪个时区的午夜。例如，`new Date(2000, 0, 1)` 使用调用者的时区，而 `new Date("2000-01-01")` 使用 UTC。

要在不受差一天（off-by-one-day）bug 影响的情况下，正确地把仅日期的 `Date` 转换为 `Temporal.PlainDate`，你必须确定构造该 `Date` 时使用的是哪个时区的午夜，然后在从 `Temporal.Instant` 转换为 `Temporal.PlainDate` 时使用同一个时区。

```js
// 将年/月/日形式的 `Date` 转换为 `Temporal.PlainDate`。使用调用者的时区。
let date = new Date(2000, 0, 1);
// Sat Jan 01 2000 00:00:00 GMT-0800 (Pacific Standard Time)
let plainDate = date
  .toTemporalInstant() // 2000-01-01T08:00:00Z
  .toZonedDateTimeISO(Temporal.Now.timeZoneId()) // 2000-01-01T00:00:00-08:00[America/Los_Angeles]
  .toPlainDate(); // 2000-01-01

console.log(plainDate.toString()); // '2000-01-01'

// 将年/月/日形式的 `Date` 转换为 `Temporal.PlainDate`。使用 UTC。
date = new Date(Date.UTC(2000, 0, 1));
// Fri Dec 31 1999 16:00:00 GMT-0800 (Pacific Standard Time)
date = new Date("2000-01-01T00:00Z");
// Fri Dec 31 1999 16:00:00 GMT-0800 (Pacific Standard Time)
plainDate = date
  .toTemporalInstant() // 2000-01-01T00:00:00Z
  .toZonedDateTimeISO("UTC") // 2000-01-01T00:00:00+00:00[UTC]
  .toPlainDate(); // 2000-01-01

console.log(plainDate.toString()); // '2000-01-01'
```

### 从 Temporal 类型转换为旧版 Date

旧版 `Date` 表示精确时间，因此把 `Temporal.Instant` 或 `Temporal.ZonedDateTime` 实例转换为与之对应的旧版 `Date` 实例很直接。要把 `Instant` 转换为旧版 `Date`，请使用 {{jsxref("Temporal/Instant/epochMilliseconds", "epochMilliseconds")}} 属性。

```js
const instant = Temporal.Instant.from("2020-01-01T00:00:01.000999Z");
const result = new Date(instant.epochMilliseconds);

console.log(result.getTime()); // 1577836801000 // 自 Unix 纪元起的毫秒数
console.log(result.toISOString()); // '2020-01-01T00:00:01.000Z'
```

`ZonedDateTime` 也是如此。注意，旧版 `Date` 不会保留 `ZonedDateTime` 的时区。

```js
const zoned = Temporal.ZonedDateTime.from(
  "2020-01-01T00:00:01.001[Asia/Tokyo]",
);
const result2 = new Date(zoned.epochMilliseconds);

console.log(result2.getTime()); // 1577804401001 // 注意，时间不同
console.log(result2.toISOString()); // '2019-12-31T15:00:01.001Z'
```

在大多数用例中，`new Date(x.epochMilliseconds)` 就足够了。如果你想要截断之外的其他舍入行为，可能需要额外增加一步 {{jsxref("Temporal/Instant/round", "round()")}}。例如，这里把 999 微秒舍入为 1 毫秒。

```js
const result3 = new Date(
  instant.round({ smallestUnit: "millisecond" }).epochMilliseconds,
);

console.log(result3.getTime()); // 1577836801001
console.log(result3.toISOString()); // '2020-01-01T00:00:01.001Z'
```

## 构造

### 日历输入元素

你可以使用 `Temporal` 对象设置日历控件的属性。下面是一个使用 HTML `<input type="date">` 元素的示例，其中“今天”之后的日期都被禁用且不可选择。

（要从日历控件中取回 `Temporal` 对象，请参阅[未来日期](#距离未来日期还有多少天)示例。）

```html
<input type="date" id="calendar-input" />
```

```js
const datePicker = document.getElementById("calendar-input");
const today = Temporal.Now.plainDateISO();
datePicker.max = today;
datePicker.value = today;
```

{{EmbedLiveSample("日历输入元素", "100%", 100)}}

## 在类型之间转换

### 某个日期的正午

下面是把日历日期（`Temporal.PlainDate`）和挂钟时间（{{jsxref("Temporal.PlainTime")}}）组合成 `Temporal.PlainDateTime` 的示例。

```js
const date = Temporal.PlainDate.from("2020-05-14");

const noonOnDate = date.toPlainDateTime(Temporal.PlainTime.from({ hour: 12 }));

console.log(noonOnDate.toString()); // '2020-05-14T12:00:00'
```

### 2030 年的生日

下面是把日历中的某一天（{{jsxref("Temporal.PlainMonthDay")}}）和年份组合成 `Temporal.PlainDate` 的示例。

```js
const birthday = Temporal.PlainMonthDay.from("12-15");

const birthdayIn2030 = birthday.toPlainDate({ year: 2030 });
birthdayIn2030.dayOfWeek; // 7

console.log(birthdayIn2030.toString()); // '2030-12-15'
```

## 序列化

### 由时刻和时区得到带时区的时刻

要把表示精确时间的 `Temporal.Instant` 序列化为字符串，请使用 {{jsxref("Temporal/Instant/toString", "toString()")}}。不传参数时，得到的是 UTC 时间的字符串。

```js
const instant = Temporal.Instant.from("2020-01-03T10:41:51Z");

const result = instant.toString();

console.log(result); // '2020-01-03T10:41:51Z'
console.log(instant.equals(Temporal.Instant.from(result))); // true
```

如果你的字符串需要包含 UTC 偏移，请使用 `Temporal.Instant.prototype.toString()` 的 `timeZone` 选项，它会返回与该精确时间相对应的、该时区挂钟时间的字符串序列化。

```js
const result2 = instant.toString({ timeZone: "America/Yellowknife" });

console.log(result2); // '2020-01-03T03:41:51-07:00'
console.log(instant.equals(Temporal.Instant.from(result2))); // true
```

这会丢失该字符串原本属于哪个时区的信息，因为它只保留了该特定精确时刻该时区的 UTC 偏移。如果你需要字符串包含时区名称，请改用 `Temporal.ZonedDateTime`，它会保留这一信息。

```js
const zoned = instant.toZonedDateTimeISO("Asia/Seoul");
const result3 = zoned.toString();

console.log(result3); // '2020-01-03T19:41:51+09:00[Asia/Seoul]'
console.log(instant.equals(Temporal.Instant.from(result3))); // true
console.log(zoned.equals(Temporal.ZonedDateTime.from(result3))); // true
```

## 排序

除了 `Temporal.PlainMonthDay` 之外，每种 `Temporal` 类型都有一个 {{jsxref("Temporal/PlainDateTime/compare", "compare()")}} 静态方法，可以作为比较函数传给 {{jsxref("Array.prototype.sort()")}}，用于对 `Temporal` 类型的数组进行排序。

### 排序 PlainDateTime 值

对一组 `Temporal.PlainDateTime` 排序，例如为了让会议日程按正确顺序排列。排序其他 `Temporal` 类型的方式完全相同。下面的函数返回数组的已排序副本，并可传入可选的 `reverse` 参数实现降序。

```js
function getSortedLocalDateTimes(dateTimes, reverse = false) {
  let newDateTimes = Array.from(dateTimes).sort(Temporal.PlainDateTime.compare);

  return reverse ? newDateTimes.reverse() : newDateTimes;
}

// 例如，对没有时区的会议进行排序，如 vue.js Amsterdam 2020
const a = Temporal.PlainDateTime.from({
  year: 2020,
  day: 20,
  month: 2,
  hour: 8,
  minute: 45,
}); // 开场介绍
const b = Temporal.PlainDateTime.from({
  year: 2020,
  day: 21,
  month: 2,
  hour: 13,
  minute: 10,
}); // 午休
const c = Temporal.PlainDateTime.from({
  year: 2020,
  day: 20,
  month: 2,
  hour: 15,
  minute: 30,
}); // 茶歇
const results = getSortedLocalDateTimes([a, b, c]);
console.log(results.map((x) => x.toString()));
// ['2020-02-20T08:45:00', '2020-02-20T15:30:00', '2020-02-21T13:10:00']
```

### 排序 ISO 日期时间字符串

对一组 ISO 8601 或 RFC 9557 日期时间字符串排序，例如让日志条目按顺序排列。下面的函数接收一个可解析为 `Temporal.Instant` 值的字符串数组，返回按精确时间排序的副本，并可传入可选的 `reverse` 参数实现降序。

```js
function sortInstantStrings(strings, reverse = false) {
  const sortedInstants = strings
    .map((v) => [v, Temporal.Instant.from(v)])
    .sort(([, i1], [, i2]) => Temporal.Instant.compare(i1, i2))
    .map(([str]) => str);

  return reverse ? sortedInstants.reverse() : sortedInstants;
}

// 这里简单的字符串比较顺序并不正确：
const a = "2020-01-23T17:04:36.491865121-08:00";
const b = "2020-02-10T17:04:36.491865121-08:00";
const c = "2020-04-01T05:01:00-04:00[America/New_York]";
const d = "2020-04-01T10:00:00+01:00[Europe/London]";
const e = "2020-04-01T11:02:00+02:00[Europe/Berlin]";

const results = sortInstantStrings([a, b, c, d, e]);

// results 的顺序将是正确的
console.log(results);
// [
//   '2020-01-23T17:04:36.491865121-08:00',
//   '2020-02-10T17:04:36.491865121-08:00',
//   '2020-04-01T10:00:00+01:00[Europe/London]',
//   '2020-04-01T05:01:00-04:00[America/New_York]',
//   '2020-04-01T11:02:00+02:00[Europe/Berlin]'
// ]
```

## 舍入

### 将时间向下舍入到整点

如果你想对时间字段进行舍入，请使用每种 `Temporal` 类型的 {{jsxref("Temporal/PlainTime/round", "round()")}} 方法。下面是把时间*向下*舍入到前一个整点的示例：

```js
const time = Temporal.PlainTime.from("12:38:28.138818731");

const wholeHour = time.round({ smallestUnit: "hour", roundingMode: "floor" });

console.log(wholeHour.toString()); // '12:00:00'
```

### 将日期舍入到最近的月初

舍入只对时间字段有定义。对日期字段舍入可能有歧义，因此 `Temporal.PlainDate` 等仅日期类型没有 `round()` 方法。例如，如果需要把日期舍入到最近的月份，你必须明确选择想要的舍入方式。下面是一个舍入到最近月初的示例，距离相同时向上舍入：

```js
const date = Temporal.PlainDate.from("2018-09-16");

const firstOfCurrentMonth = date.with({ day: 1 });
const firstOfNextMonth = firstOfCurrentMonth.add({ months: 1 });

const sinceCurrent = date.since(firstOfCurrentMonth);
const untilNext = date.until(firstOfNextMonth);

const isCloserToNextMonth =
  Temporal.Duration.compare(sinceCurrent, untilNext) >= 0;
const nearestMonth = isCloserToNextMonth
  ? firstOfNextMonth
  : firstOfCurrentMonth;

console.log(nearestMonth.toString()); // '2018-10-01'
```

另请参阅[推迟发布或启动日期](#推迟发布或启动日期)，了解无条件向上舍入到*下一个*月初的更简单方法。

## 时区转换

### 保持本地时间

把不带时区的日期和时刻映射为 `Temporal.Instant` 实例，使指定时区中的本地日期和时刻与之匹配。用 <code>dateTime.<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/toZonedDateTime">toZonedDateTime</a>(timeZone).<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toInstant">toInstant</a>()</code> 即可轻松完成，但这里给出一个示例，实现与 `Temporal` 内置的 `"compatible"`、`"earlier"`、`"later"` 和 `"reject"` 不同的消歧行为。下面的函数接收一个 `Temporal.PlainDateTime`、一个时区标识符和一个消歧模式（默认为 `"earlier"`）。它返回一个 `Temporal.Instant`，并支持两种额外的模式：

- `"clipEarlier"`：时钟回拨时使用较早的时刻；时钟前拨时使用变更发生前的时刻。
- `"clipLater"`：时钟回拨时使用较晚的时刻；时钟前拨时使用变更发生时的时刻。

```js
function getInstantWithLocalTimeInZone(
  dateTime,
  timeZone,
  disambiguation = "earlier",
) {
  // 先处理内置模式
  if (["compatible", "earlier", "later", "reject"].includes(disambiguation)) {
    return dateTime.toZonedDateTime(timeZone, { disambiguation }).toInstant();
  }

  const possibilities = ["earlier", "later"].map((disambiguation) =>
    dateTime.toZonedDateTime(timeZone, { disambiguation }),
  );
  const instants = possibilities
    .map((zdt) => zdt.toInstant())
    .reduce((a, b) => (a.equals(b) ? [a] : [a, b]));

  // 如果不需要消歧，只返回一种可能
  if (instants.length === 1) return instants[0];

  switch (disambiguation) {
    case "clipEarlier":
      if (possibilities[0].toPlainDateTime().equals(dateTime)) {
        return instants[0];
      }
      return possibilities[0]
        .getTimeZoneTransition("next")
        .subtract({ nanoseconds: 1 })
        .toInstant();
    case "clipLater":
      if (possibilities[1].toPlainDateTime().equals(dateTime)) {
        return instants[1];
      }
      return possibilities[0].getTimeZoneTransition("next").toInstant();
  }
  throw new RangeError(`invalid disambiguation ${disambiguation}`);
}

const nonexistentGermanWallTime =
  Temporal.PlainDateTime.from("2019-03-31T02:45");

const germanResults = {
  earlier: "2019-03-31T01:45:00+01:00",
  later: "2019-03-31T03:45:00+02:00",
  compatible: "2019-03-31T03:45:00+02:00",
  clipEarlier: "2019-03-31T01:59:59.999999999+01:00",
  clipLater: "2019-03-31T03:00:00+02:00",
};
for (const [disambiguation, result] of Object.entries(germanResults)) {
  console.log(
    getInstantWithLocalTimeInZone(
      nonexistentGermanWallTime,
      "Europe/Berlin",
      disambiguation,
    ).toString({
      timeZone: "Europe/Berlin",
    }) === result,
  ); // true
}

const doubleEasternBrazilianWallTime =
  Temporal.PlainDateTime.from("2019-02-16T23:45");

const brazilianResults = {
  earlier: "2019-02-16T23:45:00-02:00",
  later: "2019-02-16T23:45:00-03:00",
  compatible: "2019-02-16T23:45:00-02:00",
  clipEarlier: "2019-02-16T23:45:00-02:00",
  clipLater: "2019-02-16T23:45:00-03:00",
};
for (const [disambiguation, result] of Object.entries(brazilianResults)) {
  console.log(
    getInstantWithLocalTimeInZone(
      doubleEasternBrazilianWallTime,
      "America/Sao_Paulo",
      disambiguation,
    ).toString({
      timeZone: "America/Sao_Paulo",
    }) === result,
  ); // true
}
```

### 保持精确时间

把带时区的日期和时刻映射为目标时区中对应于同一精确时间的另一个带时区日期和时刻。这可用于在时区之间转换用户输入的日期时间值。

```js
const source = Temporal.ZonedDateTime.from("2020-01-09T00:00[America/Chicago]");

const result = source.withTimeZone("America/Los_Angeles");

// 在这一天，芝加哥午夜时，洛杉矶还是前一天的晚上 10 点
console.log(result.toString());
// '2020-01-08T22:00:00-08:00[America/Los_Angeles]'
```

下面是另一个与上文类似的示例，针对未来事件使用带时区的时间。一系列未来会议的时间和地点以一对字符串存储：一个表示日历日期和挂钟时间，另一个表示时区。它们不能存储为精确时间，因为从现在到事件发生之间，夏令时的时区规则可能改变——例如巴西在 2019 年废除了夏令时——但会议仍会在该日期的同一挂钟时间举行。因此，如果时区规则改变，事件的精确时间也会改变。

这个示例计算 2019 年所有 Ecma TC39 会议在东京当地时间下的开始时间。

```js
// 2019 年 TC39 会议的日期：
const tc39meetings = [
  {
    dateTime: "2019-01-28T10:00",
    timeZone: "America/Phoenix",
  },
  {
    dateTime: "2019-03-26T10:00",
    timeZone: "America/New_York",
  },
  {
    dateTime: "2019-06-04T10:00",
    timeZone: "Europe/Berlin",
  },
  {
    dateTime: "2019-07-23T10:00",
    timeZone: "America/Los_Angeles",
  },
  {
    dateTime: "2019-10-01T10:00",
    timeZone: "America/New_York",
  },
  {
    dateTime: "2019-12-03T10:00",
    timeZone: "America/Los_Angeles",
  },
];

// 要从东京远程参会，请计算你需要加入的时间：
const localTimeZone = "Asia/Tokyo";
const localTimes = tc39meetings.map(({ dateTime, timeZone }) =>
  Temporal.PlainDateTime.from(dateTime)
    .toZonedDateTime(timeZone, { disambiguation: "reject" })
    .withTimeZone(localTimeZone)
    .toPlainDateTime(),
);

console.log(localTimes.map((dt) => dt.toString()));
// [
//   "2019-01-29T02:00:00",
//   "2019-03-26T23:00:00",
//   "2019-06-04T17:00:00",
//   "2019-07-24T02:00:00",
//   "2019-10-01T23:00:00",
//   "2019-12-04T03:00:00",
// ]
```

### 每天在本地时间发生的事件

与上一个示例类似，计算在特定时区的特定本地时间每天发生的事件的精确时间。下面的生成器接收一个起始 `Temporal.PlainDate`、一个 `Temporal.PlainTime` 和一个时区标识符，并把每次发生的事件作为 `Temporal.Instant` 产出。

```js
function* calculateDailyOccurrence(startDate, plainTime, timeZone) {
  for (let date = startDate; ; date = date.add({ days: 1 })) {
    yield date.toZonedDateTime({ plainTime, timeZone }).toInstant();
  }
}

// 加州时间每天上午 8 点的会议
const startDate = Temporal.PlainDate.from("2017-03-10");
const time = Temporal.PlainTime.from("08:00");
const timeZone = "America/Los_Angeles";
const iter = calculateDailyOccurrence(startDate, time, timeZone);

console.log(iter.next().value.toString()); // '2017-03-10T16:00:00Z'
console.log(iter.next().value.toString()); // '2017-03-11T16:00:00Z'
// 夏令时变更：
console.log(iter.next().value.toString()); // '2017-03-12T15:00:00Z'
console.log(iter.next().value.toString()); // '2017-03-13T15:00:00Z'
```

### 以字符串形式获取带时区事件的 UTC 偏移

使用 `Temporal.Instant.prototype.toZonedDateTimeISO()` 和 {{jsxref("Temporal/ZonedDateTime/offset", "offset")}}，把 `Temporal.Instant` 实例和时区映射为该时区在该精确时间的 UTC 偏移（字符串形式）。

```js
const instant = Temporal.Instant.from("2020-01-09T00:00Z");

const source = instant.toZonedDateTimeISO("America/New_York");
source.offset; // '-05:00'
```

### 以秒数形式获取带时区事件的 UTC 偏移

类似地，使用 `Temporal.Instant.prototype.toZonedDateTimeISO()` 和 {{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "offsetNanoseconds")}} 以秒数形式完成同样的事。（记得除以 10<sup>9</sup> 把纳秒转换为秒。）

```js
const instant = Temporal.Instant.from("2020-01-09T00:00Z");

instant.toZonedDateTimeISO("America/New_York").offsetNanoseconds / 1e9;
// -18000
```

### 两个时区在同一精确时间的偏移差

同样使用 `Temporal.Instant.prototype.toZonedDateTimeISO()` 和 `Temporal.ZonedDateTime.offsetNanoseconds`，我们可以把 `Temporal.Instant` 实例和两个时区映射为这两个时区在该精确时间的 UTC 偏移的带符号差值（秒数）。

```js
function getUtcOffsetDifferenceSecondsAtInstant(
  instant,
  sourceTimeZone,
  targetTimeZone,
) {
  const sourceOffsetNs =
    instant.toZonedDateTimeISO(sourceTimeZone).offsetNanoseconds;
  const targetOffsetNs =
    instant.toZonedDateTimeISO(targetTimeZone).offsetNanoseconds;
  return (targetOffsetNs - sourceOffsetNs) / 1e9;
}

const instant = Temporal.Instant.from("2020-01-09T00:00Z");

// 在这个精确时间，芝加哥比纽约早 3600 秒
console.log(
  getUtcOffsetDifferenceSecondsAtInstant(
    instant,
    "America/New_York",
    "America/Chicago",
  ),
); // -3600
```

### 处理固定地点的日期和时间

下面是一个在图表中使用 `Temporal` 的示例，展示瑞典斯德哥尔摩一个固定地点储罐的虚构活动。图表总是从储罐所在地的午夜开始，但图表标签使用查看者的时区。

```html hidden
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
<canvas id="storage-tank" width="600" height="400"></canvas>
```

```js
// 生成虚构的“数据”
const start = Temporal.Now.instant().subtract({ hours: 24 });
const blank = Array(24 * 12);
const tankDataX = Array.from(blank, (_, ix) => start.add({ minutes: ix * 5 }));
const tankDataY = Array.from(blank);
tankDataY[0] = 25;
for (let ix = 1; ix < tankDataY.length; ix++) {
  tankDataY[ix] = Math.max(0, tankDataY[ix - 1] + 3 * (Math.random() - 0.5));
}

// tankDataX 和 tankDataY 是过去 24 小时的 X 轴和 Y 轴数据，
// 从其他地方获得，例如 const [tankDataX, tankDataY] = fetchData();
// tankDataX 是 Temporal.Instant 数组，tankDataY 是数字数组。

// 从储罐所在地（斯德哥尔摩）最近的午夜开始显示数据
const tankTimeZone = "Europe/Stockholm";
const labelFormatter = new Intl.DateTimeFormat(undefined, {
  weekday: "short",
  hour: "numeric",
  minute: "numeric",
  timeZone: Temporal.Now.timeZoneId(),
});
const browserCalendar = labelFormatter.resolvedOptions().calendar;
const tankMidnight = Temporal.Now.zonedDateTimeISO()
  .withCalendar(browserCalendar)
  .withTimeZone(tankTimeZone)
  .startOfDay()
  .toInstant();
const atOrAfterMidnight = (x) => Temporal.Instant.compare(x, tankMidnight) >= 0;
const dataStartIndex = tankDataX.findIndex(atOrAfterMidnight);
const graphLabels = tankDataX
  .slice(dataStartIndex)
  .map((x) => labelFormatter.format(x));
const graphPoints = tankDataY.slice(dataStartIndex);

const ctx = document.getElementById("storage-tank").getContext("2d");
// 图表使用 Chart.js 制作（https://www.chartjs.org/）
new Chart(ctx, {
  type: "line",
  data: {
    labels: graphLabels,
    datasets: [
      {
        label: "Fill level",
        data: graphPoints,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Stockholm storage tank",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
```

{{EmbedLiveSample("处理固定地点的日期和时间", "100%", 500)}}

### 跨时区预约会议

网页上有多种工具可以找出适合所有参与者时区的会议时间，例如 [World Time Buddy](https://www.worldtimebuddy.com/)、[World Clock Meeting Planner](https://www.timeanddate.com/worldclock/meeting.html)，以及各种日历软件内置的功能。

```css hidden
#meeting-planner {
  border-collapse: separate;
  border-spacing: 0 10px;
  font-size: 0.6rem;
  text-align: center;
}

/* https://materializecss.com/color.html */
.time-0,
.time-1,
.time-2,
.time-3,
.time-4,
.time-5,
.time-22,
.time-23 {
  background-color: #ef9a9a; /* red lighten-3 */
  border-color: #e57373; /* red lighten-2 */
  border-style: solid;
  border-width: 0 1px;
}
.time-6,
.time-7,
.time-18,
.time-19,
.time-20,
.time-21 {
  background-color: #fff59d; /* yellow lighten-3 */
  border-color: #ffd54f; /* amber lighten-2 */
  border-style: solid;
  border-width: 0 1px;
}
.time-8,
.time-9,
.time-10,
.time-11,
.time-12,
.time-13,
.time-14,
.time-15,
.time-16,
.time-17 {
  background-color: #a5d6a7; /* green lighten-3 */
  border-color: #81c784; /* green lighten-2 */
  border-style: solid;
  border-width: 0 1px;
}

.time-0 {
  border-bottom-left-radius: 12px;
  border-left-color: white;
  border-left-width: 2px;
  border-top-left-radius: 12px;
  font-weight: bold;
}
.time-23 {
  border-bottom-right-radius: 12px;
  border-right-color: white;
  border-right-width: 2px;
  border-top-right-radius: 12px;
}

.time-current {
  border: 2px solid black;
}
```

```html hidden
<table id="meeting-planner"></table>
```

```js
// 显示本地时区以及另外三个时区
const browserCalendar = new Intl.DateTimeFormat().resolvedOptions().calendar;
const now = Temporal.Now.zonedDateTimeISO().withCalendar(browserCalendar);
const timeZones = [
  { name: "Here", tz: now.timeZoneId },
  { name: "New York", tz: "America/New_York" },
  { name: "London", tz: "Europe/London" },
  { name: "Tokyo", tz: "Asia/Tokyo" },
];

// 表格从本地时间的午夜开始
const startTime = now.startOfDay();

// 构建表格
const table = document.getElementById("meeting-planner");
timeZones.forEach(({ name, tz }) => {
  const row = document.createElement("tr");

  const title = document.createElement("td");
  const startTimeHere = startTime.withTimeZone(tz);
  title.textContent = `${name} (UTC${startTimeHere.offset})`;
  row.appendChild(title);

  for (let hours = 0; hours < 24; hours++) {
    const cell = document.createElement("td");

    const columnTime = startTimeHere.add({ hours });
    cell.className = `time-${columnTime.hour}`;

    // 高亮每一行中的当前小时
    if (hours === now.hour) cell.className += " time-current";

    // 在午夜的单元格中显示日期
    let formatOptions;
    if (columnTime.hour === columnTime.startOfDay().hour) {
      formatOptions = { month: "short", day: "numeric" };
    } else {
      formatOptions = { hour: "numeric" };
    }
    cell.textContent = columnTime.toLocaleString(undefined, formatOptions);
    row.appendChild(cell);
  }

  table.appendChild(row);
});
```

{{EmbedLiveSample("跨时区预约会议", "100%", 200)}}

## 算术运算

### 距离未来日期还有多少天

下面是一个 HTML 表单示例，灵感来自 timeanddate.com 上的 [Days Calculator](https://www.timeanddate.com/date/durationresult.html)（日期计算器）：

```html
<form>
  <label>
    Enter future date:
    <input type="date" name="future-date" />
  </label>
  <button>Submit</button>
</form>

<div id="future-date-results"></div>
```

```js
// 初始化输入；参见“日历输入元素”。
const futureDatePicker = document.querySelector('input[name="future-date"]');
const today = Temporal.Now.plainDateISO();
futureDatePicker.min = today;
futureDatePicker.value = today.add({ months: 1 });

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const futureDateParam = futureDatePicker.value;
  if (!futureDateParam) return;

  const browserCalendar = new Intl.DateTimeFormat().resolvedOptions().calendar;
  const futureDate =
    Temporal.PlainDate.from(futureDateParam).withCalendar(browserCalendar);
  const today = Temporal.Now.plainDateISO().withCalendar(browserCalendar);
  const until = today.until(futureDate, { largestUnit: "day" });
  const untilMonths = until.round({ largestUnit: "month", relativeTo: today });

  const dayString = until.toLocaleString();
  const results = document.getElementById("future-date-results");
  results.innerHTML = `
    <p>From and including: <strong>${today.toLocaleString()}</strong></p>
    <p>To but not including: <strong>${futureDate.toLocaleString()}</strong></p>
    <h4>Result: ${dayString}</h4>
    <p>It is ${dayString} from the start date to the end date, but not
    including the end date.</p>
    <p>Or ${untilMonths.toLocaleString()} excluding the end date.</p>
  `;
});
```

{{EmbedLiveSample("距离未来日期还有多少天", "100%", 350)}}

### 现在与过去/未来带时区事件之间限定单位的时长

把两个 `Temporal.Instant` 实例之间的差值表示为 {{jsxref("Temporal.Duration")}} 实例（正或负），表示这两个时刻之间的时长，且不使用比指定单位更粗的单位（例如，用于展示一个有意义的倒计时时，可以选择是否以月或日为单位）。

```js
const result = Temporal.Instant.from("2020-01-09T04:00Z").since(
  Temporal.Instant.from("2020-01-09T00:00Z"),
  {
    largestUnit: "hour",
  },
);
console.log(`${result}`); // 'PT4H'

const result2 = Temporal.Instant.from("2020-01-09T00:00Z").until(
  Temporal.Instant.from("2020-01-09T04:00Z"),
  {
    largestUnit: "minute",
  },
);
console.log(`${result2}`); // 'PT240M'

// 在倒计时中使用它的示例：

const duration = Temporal.Now.instant().until(
  Temporal.Instant.from("2020-04-01T13:00-07:00[America/Los_Angeles]"),
);
`It's ${duration.abs().toLocaleString()} ${duration.sign < 0 ? "since" : "until"} the TC39 Temporal presentation`;
```

### 时区中的下一次偏移变更

把 `Temporal.ZonedDateTime` 实例映射为另一个 `Temporal.ZonedDateTime` 实例，表示该时区中下一次发生偏移变更的最近精确时间（例如用于设置提醒）。下面的函数还接收一个 `inclusive` 标志，用于把起始时刻处的变更也包含进来；如果没有已知的变更，则返回 `null`。

```js
function getNextOffsetTransitionFromExactTime(zonedDateTime, inclusive) {
  let nearest;
  if (inclusive) {
    // 以防该时刻本身就是变更的精确时间：
    nearest = zonedDateTime
      .subtract({ nanoseconds: 1 })
      .getTimeZoneTransition("next");
  } else {
    nearest = zonedDateTime.getTimeZoneTransition("next");
  }
  return nearest;
}

const nycTime = Temporal.ZonedDateTime.from(
  "2019-04-16T21:01Z[America/New_York]",
);

const nextTransition = getNextOffsetTransitionFromExactTime(nycTime, false);
console.log(nextTransition.toString());
// '2019-11-03T01:00:00-05:00[America/New_York]'

// 包含式
const sameTransition = getNextOffsetTransitionFromExactTime(
  nextTransition,
  true,
);
console.log(sameTransition.toString() === nextTransition.toString()); // true

// 某个时区没有已知的未来夏令时变更
const reginaTime = Temporal.ZonedDateTime.from(
  "2019-04-16T21:01Z[America/Regina]",
);
console.log(getNextOffsetTransitionFromExactTime(reginaTime)); // null
```

### 将精确时间与营业时间比较

下面的函数接收一个 `Temporal.ZonedDateTime`、一份每周安排，以及一个定义“即将”是多久的 `Temporal.Duration`。它返回“opening soon”、“open”、“closing soon”或“closed”。安排是一个包含七个条目的数组，从星期日开始；每个条目要么是 `null`（表示当天休息），要么是一个对象，其 `open` 和 `close` 属性包含 `Temporal.PlainTime` 值。

```js
function getBusinessOpenStateText(now, businessHours, soonWindow) {
  const compare = Temporal.ZonedDateTime.compare;
  function inRange(zdt, start, end) {
    return compare(zdt, start) >= 0 && compare(zdt, end) < 0;
  }

  // 由于时间会在午夜环绕，我们可能还需要考虑
  // 昨天和今天的营业时间
  for (const delta of [-1, 0]) {
    const openDate = now.toPlainDate().add({ days: delta });
    // 把星期几（1..7）转换为数组使用的从 0 开始的索引：
    const index = (openDate.dayOfWeek + 7) % 7;
    if (!businessHours[index]) continue;

    const timeZone = now.timeZoneId;
    const { open: openTime, close: closeTime } = businessHours[index];
    const open = openDate.toZonedDateTime({ plainTime: openTime, timeZone });
    const isWrap = Temporal.PlainTime.compare(closeTime, openTime) < 0;
    const closeDate = isWrap ? openDate.add({ days: 1 }) : openDate;
    const close = closeDate.toZonedDateTime({ plainTime: closeTime, timeZone });

    if (inRange(now, open, close)) {
      return compare(now, close.subtract(soonWindow)) >= 0
        ? "closing soon"
        : "open";
    }
    if (inRange(now.add(soonWindow), open, close)) return "opening soon";
  }
  return "closed";
}

// 例如，餐馆或酒吧的营业时间可能跨过午夜；
// 请确保正确处理这种情况
const businessHours = [
  /* 周日 */ {
    open: Temporal.PlainTime.from("13:00"),
    close: Temporal.PlainTime.from("20:30"),
  },
  /* 周一 */ null, // 周一休息
  /* 周二 */ {
    open: Temporal.PlainTime.from("11:00"),
    close: Temporal.PlainTime.from("20:30"),
  },
  /* 周三 */ {
    open: Temporal.PlainTime.from("11:00"),
    close: Temporal.PlainTime.from("20:30"),
  },
  /* 周四 */ {
    open: Temporal.PlainTime.from("11:00"),
    close: Temporal.PlainTime.from("22:00"),
  },
  /* 周五 */ {
    open: Temporal.PlainTime.from("11:00"),
    close: Temporal.PlainTime.from("00:00"),
  },
  /* 周六 */ {
    open: Temporal.PlainTime.from("11:00"),
    close: Temporal.PlainTime.from("02:00"),
  },
];

const now = Temporal.ZonedDateTime.from(
  "2019-04-07T00:00+02:00[Europe/Berlin]",
);
const soonWindow = Temporal.Duration.from({ minutes: 30 });
const saturdayNightState = getBusinessOpenStateText(
  now,
  businessHours,
  soonWindow,
);
console.log(saturdayNightState); // 'open'

const lastCall = now.add({ hours: 1, minutes: 50 });
console.log(lastCall.toString()); // '2019-04-07T01:50:00+02:00[Europe/Berlin]'
const lastCallState = getBusinessOpenStateText(
  lastCall,
  businessHours,
  soonWindow,
);
console.log(lastCallState); // 'closing soon'

const tuesdayEarly = now.add({ days: 2, hours: 6 });
const tuesdayEarlyState = getBusinessOpenStateText(
  tuesdayEarly,
  businessHours,
  soonWindow,
);
console.log(tuesdayEarlyState); // 'closed'
```

### 航班到达/起飞/时长

把本地化的出发和到达时间映射为旅行时长，单位不大于小时。（默认情况下，ZonedDateTime 实例之间的差值是时间单位的精确差值。）

```js
const departure = Temporal.ZonedDateTime.from(
  "2020-03-08T11:55:00+08:00[Asia/Hong_Kong]",
);
const arrival = Temporal.ZonedDateTime.from(
  "2020-03-08T09:50:00-07:00[America/Los_Angeles]",
);

const flightTime = departure.until(arrival);

console.log(flightTime.toString()); // 'PT12H55M'
```

给定带时区的出发时间和飞行时长，使用能感知时区的运算得到目的地时区的到达时间。

```js
const departure = Temporal.ZonedDateTime.from(
  "2020-03-08T11:55:00+08:00[Asia/Hong_Kong]",
);
const flightTime = Temporal.Duration.from({ minutes: 775 });

const arrival = departure.add(flightTime).withTimeZone("America/Los_Angeles");

console.log(arrival.toString());
// '2020-03-08T09:50:00-07:00[America/Los_Angeles]'
```

### 推迟发布或启动日期

下面的函数接收一个 `Temporal.PlainDate` 和一个延迟天数（例如获得批准所花的时间），返回延迟后日期所在月份的下一个月初的 `Temporal.PlainDate`。

```js
function plusAndRoundToMonthStart(date, delayDays) {
  return (
    date
      .add({ days: delayDays })
      .add({ months: 1 })
      // 如有必要，约束到月末，例如 1 月 31 日 -> 2 月 28 日
      .with({ day: 1 })
  );
}

const oldLaunchDate = Temporal.PlainDate.from("2019-06-01");

const fifteenDaysDelay = plusAndRoundToMonthStart(oldLaunchDate, 15);
console.log(fifteenDaysDelay.toString()); // '2019-07-01'

const sixtyDaysDelay = plusAndRoundToMonthStart(oldLaunchDate, 60);
console.log(sixtyDaysDelay.toString()); // '2019-08-01'
```

### 在追平纪录时长之前安排提醒

在关注某项纪录（例如某项运动中的个人最好成绩）时，你可能想在纪录即将被打破之前收到提醒。这个示例把纪录表示为 `Temporal.Duration`，把当前尝试的起始精确时间表示为 `Temporal.Instant`，再用另一个 `Temporal.Duration` 表示你希望在可能创纪录的精确时间之前多久收到提醒。它返回可以发送通知的精确时间，例如“加油！再坚持 5 分钟就是你的个人最好成绩了！”

这可用于健身追踪、比赛（包括*长距离*且可能跨越时区的比赛，如 Bullrun Rally、Iditarod、Self-Transcendence 3100 和 Clipper Round The World），甚至像“每天连续打卡”这类开放式场景。

```js
function getInstantBeforeOldRecord(start, previousRecord, noticeWindow) {
  return start.add(previousRecord).subtract(noticeWindow);
}

// 2016 年里约奥运会男子 10000 米起点
const raceStart = Temporal.Instant.from(
  "2016-08-13T21:27-03:00[America/Sao_Paulo]",
);
// Kenenisa Bekele 于 2005 年创造的世界纪录
const record = Temporal.Duration.from({
  minutes: 26,
  seconds: 17,
  milliseconds: 530,
});
const noticeWindow = Temporal.Duration.from({ minutes: 1 });
// 向所有跑者发送“快，你能在 1 分钟内跑完吗？”推送通知的时间
const reminderAt = getInstantBeforeOldRecord(raceStart, record, noticeWindow);

console.log(reminderAt.toString()); // '2016-08-14T00:52:17.53Z'
```

### 某月的第 N 个星期几

下面的函数接收一个 {{jsxref("Temporal.PlainYearMonth")}}，返回表示该月第一个星期二的 `Temporal.PlainDate`，可依此类推用于其他星期几。

```js
function getFirstTuesday(queriedMonth) {
  // 首先需要转换为日期
  const firstOfMonth = queriedMonth.toPlainDate({ day: 1 });

  // 我们约定星期一 = 1，星期日 = 7，并且想加上一个小于 7 的正数
  // 来得到第一个星期二。
  // 如果已经是星期二（2），则加 0。
  // 因此对于月初分别是星期一至星期日的情况，加上的数字为：
  //    1, 0, 6, 5, 4, 3, 2，正好由该公式给出。
  // 这个查找表让示例更易读，但你也可以直接计算：
  // (7 + desiredWeekday - firstOfMonth.dayOfWeek) % 7
  return firstOfMonth.add({
    days: [1, 0, 6, 5, 4, 3, 2][firstOfMonth.dayOfWeek - 1],
  });
}

const myMonth = Temporal.PlainYearMonth.from("2020-02");
const firstTuesdayOfMonth = getFirstTuesday(myMonth);
console.log(firstTuesdayOfMonth.toString()); // '2020-02-04'
console.log(firstTuesdayOfMonth.dayOfWeek); // 2

// 类似地，要得到第二个星期二：
const secondWeek = myMonth.toPlainDate({ day: 8 });
const secondTuesday = secondWeek.add({
  days: [1, 0, 6, 5, 4, 3, 2][secondWeek.dayOfWeek - 1],
});
console.log(secondTuesday.day === firstTuesdayOfMonth.day + 7); // true

// 以及最后一个星期二：
const lastOfMonth = myMonth.toPlainDate({ day: myMonth.daysInMonth });
const lastTuesday = lastOfMonth.subtract({
  days: [6, 0, 1, 2, 3, 4, 5][lastOfMonth.dayOfWeek - 1],
});
console.log(lastTuesday.toString()); // '2020-02-25'
console.log(lastTuesday.dayOfWeek); // 2
// 或者：
const lastTuesday2 = lastOfMonth.subtract({
  days: (7 + lastOfMonth.dayOfWeek - 2) % 7,
});
console.log(Temporal.PlainDate.compare(lastTuesday, lastTuesday2)); // 0
```

下面的函数接收一个 `Temporal.PlainYearMonth` 和一个从 1（星期一）到 7（星期日）的星期几，返回该月中所有匹配日期的、按时间顺序排列的 `Temporal.PlainDate` 实例数组。

```js
function getWeeklyDaysInMonth(yearMonth, dayNumberOfTheWeek) {
  const firstOfMonth = yearMonth.toPlainDate({ day: 1 });
  let nextWeekday = firstOfMonth.add({
    days: (7 + dayNumberOfTheWeek - firstOfMonth.dayOfWeek) % 7,
  });
  const result = [];
  while (nextWeekday.month === yearMonth.month) {
    result.push(nextWeekday);
    nextWeekday = nextWeekday.add({ days: 7 });
  }
  return result;
}

console.log(
  getWeeklyDaysInMonth(Temporal.PlainYearMonth.from("2020-02"), 1).join(" "),
); // '2020-02-03 2020-02-10 2020-02-17 2020-02-24'
console.log(
  getWeeklyDaysInMonth(Temporal.PlainYearMonth.from("2020-02"), 6).join(" "),
); // '2020-02-01 2020-02-08 2020-02-15 2020-02-22 2020-02-29'
```

下面的函数接收一个 `Temporal.PlainDate`，返回该日期所在月份中、在它之前且星期几相同的天数。

```js
function countPrecedingWeeklyDaysInMonth(date) {
  // 这实际上并不需要 Temporal
  return Math.floor((date.day - 1) / 7);
}

console.log(
  countPrecedingWeeklyDaysInMonth(Temporal.PlainDate.from("2020-02-28")),
); // 3
console.log(
  countPrecedingWeeklyDaysInMonth(Temporal.PlainDate.from("2020-02-29")),
); // 4
```

### 操作月中的日期

下面是一些取现有日期并调整月份中某一天的示例。

```js
const date = Temporal.PlainDate.from("2020-04-14");

// 下个月的第三天：

const thirdOfNextMonth = date.add({ months: 1 }).with({ day: 3 });

console.log(thirdOfNextMonth.toString()); // '2020-05-03'

// 这个月的最后一天：

const lastOfThisMonth = date.with({ day: date.daysInMonth });

console.log(lastOfThisMonth.toString()); // '2020-04-30'

// 这个月 18 日晚上 8 点：

const thisMonth18thAt8PM = date
  .with({ day: 18 })
  .toPlainDateTime(Temporal.PlainTime.from("20:00"));

console.log(thisMonth18thAt8PM.toString()); // '2020-04-18T20:00:00'
```

### 另一个月中的相同日期

同样，下面是一些取现有日期并调整月份的示例，其中日和年保持不变。

根据你想要的行为，你需要选择合适的 `overflow` 选项，但对大多数情况而言默认的 `"constrain"` 应该是正确的。

```js
const date = Temporal.PlainDate.from("2020-05-31");

// 相同的日期和时间，但在二月
//（如果该日期在二月不存在，则使用最后一天）：

const feb = date.with({ month: 2 });

console.log(feb.toString()); // '2020-02-29'

// 相同的日期和时间，但在四月
//（如果该日期在四月不存在，则抛出异常）：

date.with({ month: 4 }, { overflow: "reject" }); // 抛出 RangeError
```

### 下一次每周事件

下面的函数接收一个起始 `Temporal.ZonedDateTime`、一个从 1（星期一）到 7（星期日）的星期几、一个 `Temporal.PlainTime` 和一个时区标识符。它返回一个 `Temporal.ZonedDateTime`，表示每周事件的下一次发生（例如“每周四加州时间 08:45”）。

```js
function nextWeeklyOccurrence(now, weekday, eventTime, eventTimeZone) {
  const nowInEventTimeZone = now.withTimeZone(eventTimeZone);
  const nextDate = nowInEventTimeZone
    .toPlainDate()
    .add({ days: (weekday + 7 - nowInEventTimeZone.dayOfWeek) % 7 });
  let nextOccurrence = nextDate.toZonedDateTime({
    plainTime: eventTime,
    timeZone: eventTimeZone,
  });

  // 处理事件就在今天但已经发生的情况
  if (Temporal.ZonedDateTime.compare(now, nextOccurrence) > 0) {
    nextOccurrence = nextOccurrence.add({ weeks: 1 });
  }

  return nextOccurrence.withTimeZone(now.timeZoneId);
}

// “每周四加州时间 08:45”：
const weekday = 4;
const eventTime = Temporal.PlainTime.from("08:45");
const eventTimeZone = "America/Los_Angeles";

const rightBefore = Temporal.ZonedDateTime.from(
  "2020-03-26T15:30+00:00[Europe/London]",
);
let next = nextWeeklyOccurrence(rightBefore, weekday, eventTime, eventTimeZone);
console.log(next.toString()); // '2020-03-26T15:45:00+00:00[Europe/London]'

const rightAfter = Temporal.ZonedDateTime.from(
  "2020-03-26T16:00+00:00[Europe/London]",
);
next = nextWeeklyOccurrence(rightAfter, weekday, eventTime, eventTimeZone);
console.log(next.toString()); // '2020-04-02T16:45:00+01:00[Europe/London]'
```

### 年度事件的星期几

在一些国家，当法定假日落在星期二或星期四时，会在星期一或星期五额外放一天“桥假”，让劳动者享受长周末。下面的函数接收一个 `Temporal.PlainMonthDay` 和一个年份，返回该假日及任何桥假日的 `Temporal.PlainDate` 值数组；如果假日恰逢周末，则返回空数组。

```js
function bridgePublicHolidays(holiday, year) {
  const date = holiday.toPlainDate({ year });
  switch (date.dayOfWeek) {
    case 1: // 周一
    case 3: // 周三
    case 5: // 周五
      return [date];
    case 2: // 周二；周一放假
      return [date.subtract({ days: 1 }), date];
    case 4: // 周四；周五放假
      return [date, date.add({ days: 1 })];
    case 6: // 周六
    case 7: // 周日
      return [];
  }
}

const laborDay = Temporal.PlainMonthDay.from("05-01");

// 没有桥假
console.log(bridgePublicHolidays(laborDay, 2020).map((d) => d.toString()));
// ['2020-05-01']

// 有桥假
console.log(bridgePublicHolidays(laborDay, 2018).map((d) => d.toString()));
// ['2018-04-30', '2018-05-01']

// 运气不好，假日恰逢周末
console.log(bridgePublicHolidays(laborDay, 2021).map((d) => d.toString()));
// []
```
