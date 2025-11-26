---
title: 表达日期与时间
slug: Web/JavaScript/Guide/Representing_dates_times
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{PreviousNext("Web/JavaScript/Guide/Numbers_and_strings", "Web/JavaScript/Guide/Regular_expressions")}}

> [!NOTE]
> `Date` 对象现在被视作为历史遗留，应当避免在新代码中使用。我们不久后会在本页面更新现代的替代方案。

## 日期对象

JavaScript 没有日期数据类型。但是，你可以使用 {{jsxref("Date")}} 对象及其方法以在你的应用程序里处理日期和时间。`Date` 对象有大量方法用以设置、获取和操作日期。它没有任何属性。

JavaScript 处理日期的方式和 Java 类似。这两种语言有着许多相同的日期方法，并且都将日期存储为自 1970 年 1 月 1 日午夜时分（UTC 时间）以来的毫秒数，而 Unix 时间戳则表示从同一时刻开始至今的秒数。1970 年 1 月 1 日 午夜时分（UTC 时间）的这一时刻被称为“[纪元](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#纪元、时间戳和无效日期)”。

`Date` 对象范围从相对于纪元的 -100,000,000 天起到 100,000,000 天为止。

创建 `Date` 对象：

```js
const dateObjectName = new Date([parameters]);
```

`dateObjectName` 就是被创建的 `Date` 对象的名称；它可以是一个新对象，或是现有对象的一个属性。

不使用 `new` 关键词调用 `Date` 会返回一个表示当前日期和时间的字符串。

上述语法中的 `parameters`（参数）可以是以下几种之一：

- 不传参数：创建当前日期和时间。例如，`today = new Date();`。
- 一个表示日期的字符串，可以用多种格式表达日期。具体格式因各引擎不同而各异，但始终支持以下格式：`YYYY-MM-DDTHH:mm:ss.sssZ`。例如，`xmas95 = new Date("1995-12-25")`。若省略小时、分钟或秒的具体数值，则对应值会被设置为 0。
- 一组表示年、月、日的整数。例如，`xmas95 = new Date(1995, 11, 25)`。
- 一组表示年、月、日、时、分、秒的整数。例如，`xmas95 = new Date(1995, 11, 25, 9, 30, 0);`。

### Date 对象方法

`Date` 对象处理日期和时间的方法分为以下几大类：

- “set”方法，用于设置 `Date` 对象中的日期和时间值。
- “get”方法，用于获取 `Date` 对象中的日期和时间值。
- “to”方法，用于返回 `Date` 对象中的字符串值。
- parse 和 UTC 方法，用于解析 `Date` 字符串。

你可以通过“get”和“set”方法以分别获取和设置秒、分钟、小时、月份第几天、星期几、月份和年份。其中 `getDay` 方法返回星期几，但没有对应的 `setDay` 方法，因为星期几是自动设置的。这些方法使用整数表示自身值，范围如下：

- 秒和分钟：0 到 59
- 小时：0 到 23
- 星期：0（星期日）到 6（星期六）
- 日期：1 到 31（月份第几天）
- 年份：自 1900 年以来的年数

例如，假设定义了以下日期：

```js
const xmas95 = new Date("1995-12-25");
```

然后 `xmas95.getMonth()` 返回 11，`xmas95.getFullYear()` 返回 1995。

`getTime` 和 `setTime` 方法在日期对比上非常有用。`getTime` 方法返回 `Date` 对象自`纪元`以来的毫秒数。

例如，以下代码展示了今年的剩余天数：

```js
const today = new Date();
const endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // 设置日期和月份
endYear.setFullYear(today.getFullYear()); // 设置年份为今年
const msPerDay = 24 * 60 * 60 * 1000; // 一天时间的毫秒数
let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
daysLeft = Math.round(daysLeft); // 返回今年剩余天数
```

这个示例创建了一个名为 `today` 的 `Date` 对象，包含了今天的日期。然后还创建了一个名为 `endYear` 的 `Date` 对象，并将年份设置为今年。然后，借助一天时间的毫秒数计算 `today` 和 `endYear` 之间相隔天数，最后使用 `getTime` 并取整天数。

`parse` 方法适用于将日期字符串的值赋给现存的 `Date` 对象。例如，以下代码使用 `parse` 和 `setTime` 方法把一个日期值赋给 `ipoDate` 对象：

```js
const ipoDate = new Date();
ipoDate.setTime(Date.parse("Aug 9, 1995"));
```

### 示例

以下示例中，`JSClock()` 函数返回以数字时钟形式表示的时间。

```js
function JSClock() {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  let temp = String(hour % 12);
  if (temp === "0") {
    temp = "12";
  }
  temp += (minute < 10 ? ":0" : ":") + minute;
  temp += (second < 10 ? ":0" : ":") + second;
  temp += hour >= 12 ? " P.M." : " A.M.";
  return temp;
}
```

`JSClock` 函数首先创建一个名为 `time` 的新的 `Date` 对象；由于没有传参，因此用当前日期和时间创建 time。然后调用 `getHours`、`getMinutes` 和 `getSeconds` 方法将当前小时、分钟和秒的值赋给 `hour`、`minute` 和 `second`。

接下来的语句基于 time 构建了一个字符串值。第一条语句创建了一个 `temp` 变量。它的值是 `hour % 12`，代表 12 小时制里的`小时`。然后判断，如果 hour 为 `0`，那么 temp 会被重新赋值为 `12`，以便午夜和正午时显示 `12:00` 而不是 `0:00`。

下一条语句给 `temp` 附加 `minute` 值。如果 `minute` 值小于 10，那么条件表达式将附加一个前置 0 字符串；否则，附加一个带有分隔冒号的字符串。随后的一条语句也以同样的方式附加秒数值到 `temp`。

最后，当 `hour` 大于等于 12 时，条件表达式附加“P.M.”字符串到 `temp`；否则，附加“A.M.”字符串到 `temp`。

{{PreviousNext("Web/JavaScript/Guide/Numbers_and_strings", "Web/JavaScript/Guide/Regular_expressions")}}
