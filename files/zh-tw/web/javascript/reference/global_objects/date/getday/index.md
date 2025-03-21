---
title: Date.prototype.getDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDay
---

{{JSRef}}

**`getDay()`** 方法會根據當地時間將指定日期返回一星期中的第幾天，其中 0 代表星期日。 在當月的某天可以參考{{jsxref("Date.prototype.getDate()")}}。

{{InteractiveExample("JavaScript Demo: Date.getDay()", "shorter")}}

```js interactive-example
const birthday = new Date("August 19, 1975 23:15:30");
const day1 = birthday.getDay();
// Sunday - Saturday : 0 - 6

console.log(day1);
// Expected output: 2
```

## 語法

```plain
dateObj.getDay()
```

### 返回值

返回一個整數，數值介於 0 到 6 之間，取決於當地時間對應出指定日期為星期幾:0 代表星期日，1 代表星期一，2 代表星期二，依此類推。

## 範例

### 使用 `getDay()`

下面第二行表示根據日期對象'Xmas95'的值，把 1 賦值給'weekday'。則 1995 年 12 月 25 日是星期一。

```js
var Xmas95 = new Date("December 25, 1995 23:15:30");
var weekday = Xmas95.getDay();

console.log(weekday); // 1
```

> [!NOTE]
> 如果需要，可以使用{{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}加上`options`參數來獲取星期幾全名。使使用此方法能輕鬆做出各種國際語言：
>
> ```js
> var options = { weekday: "long" };
> console.log(new Intl.DateTimeFormat("en-US", options).format(Xmas95));
> // Monday
> console.log(new Intl.DateTimeFormat("de-DE", options).format(Xmas95));
> // Montag
> ```

## 規範

{{Specifications}}

## 瀏覽器兼容性

{{Compat}}

## 參見

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
