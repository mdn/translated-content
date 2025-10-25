---
title: Date.prototype.getDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDay
---

**`getDay()`** 方法根据本地时间，返回一个具体日期中一周的第几天，0 表示星期天。对于某个月中的第几天，参考{{jsxref("Date.prototype.getDate()")}}.

{{InteractiveExample("JavaScript Demo: Date.getDay()")}}

```js interactive-example
const birthday = new Date("August 19, 1975 23:15:30");
const day1 = birthday.getDay();
// Sunday - Saturday : 0 - 6

console.log(day1);
// Expected output: 2
```

## 语法

```js-nolint
getDay()
```

### 返回值

根据本地时间，返回一个 0 到 6 之间的整数值，代表星期几：0 代表星期日，1 代表星期一，2 代表星期二，依次类推。

## 示例

### 使用`getDay()`

下面第二条语句，基于{{jsxref("Date")}}对象 `Xmas95` 的值，把 1 赋值给 `weekday`。也就是说 1995 年 12 月 25 日是星期一。

```js
var Xmas95 = new Date("December 25, 1995 23:15:30");
var weekday = Xmas95.getDay();

console.log(weekday); // 1
```

> [!NOTE]
> 如果需要，可以使用{{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}与一个额外的`options` 参数，从而返回这天的全称（如`"Monday"`）.使用此方法，结果会更加国际化：
>
> ```js
> var options = { weekday: "long" };
> console.log(new Intl.DateTimeFormat("en-US", options).format(Xmas95));
> // Monday
> console.log(new Intl.DateTimeFormat("de-DE", options).format(Xmas95));
> // Montag
> ```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
