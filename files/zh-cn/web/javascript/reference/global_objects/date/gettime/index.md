---
title: Date.prototype.getTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTime
---

{{JSRef}}

**`getTime()`** 方法返回一个时间的格林威治时间数值。

你可以使用这个方法把一个日期时间赋值给另一个{{jsxref("Date")}} 对象。这个方法的功能和 {{jsxref("Date.valueof", "valueOf()")}} 方法一样。

{{EmbedInteractiveExample("pages/js/date-gettime.html")}}

## 语法

```plain
dateObj.getTime()
```

### 参数

无。

### 返回值

`getTime` 方法的返回值一个数值，表示从 1970 年 1 月 1 日 0 时 0 分 0 秒（UTC，即协调世界时）距离该日期对象所代表时间的毫秒数。

## 例子

### 使用 getTime() 复制日期对象

创建一个拥有相同时间值的日期对象。

```js
var birthday = new Date(1991, 9, 17);
var copy = new Date();
copy.setTime(birthday.getTime());
```

### 测量代码执行时间

连续调用两个新生成的日期对象的 getTime 方法，根据两次调用的返回值求得时间差。这可以用于计算某些操作的执行时间。避免生成不必要的{{jsxref("Date")}}对象另见{{jsxref("Date.now()")}}

```js
var end, start, i;

start = new Date();
for (i = 0; i < 1000; i++) {
  Math.sqrt(i);
}
end = new Date();

console.log("Operation took " + (end.getTime() - start.getTime()) + " msec");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Date.prototype.setTime()")}}
- {{jsxref("Date.prototype.valueOf()")}}
- {{jsxref("Date.now()")}}
