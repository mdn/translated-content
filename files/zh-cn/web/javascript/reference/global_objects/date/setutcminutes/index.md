---
title: Date.prototype.setUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMinutes
---

{{JSRef}}

**`setUTCMinutes()`**方法会根据世界协调时（UTC）来设置指定日期的分钟数。

{{EmbedInteractiveExample("pages/js/date-setutcminutes.html")}}

## 语法

```plain
dateObj.setUTCMinutes(minutesValue[, secondsValue[, msValue]])
```

### 参数

- `minutesValue`
  - : 必填，表示要设置的分钟数，是一个介于 0 和 59 之间的整数。
- `secondsValue`
  - : 可选参数，表示要设置的秒数，同样也是一个介于 0 和 59 之间的整数，如果你传入了这个参数，那么你就必须要传入上一个参数（**`minutesValue`**）。
- `msValue`
  - : 可选参数，表示要设置的毫秒数，这是一个介于 0 和 999 之间的数字，如果你传入了这个参数，那么你就必须要传入前面两个参数（**`minutesValue`**和**`secondsValue`**）。

### 返回值

返回从 UTC 时间 1970 年 1 月 1 日 0 时 0 分 0 秒至设置后的时间的毫秒数。

## 说明

如果你没有传入后两个参数（**`minutesValue`**和**`msValue`**），这两个参数会分别使用{{jsxref("Date.prototype.getUTCSeconds()", "getUTCSeconds()")}}和{{jsxref("Date.prototype.getUTCMilliseconds()", "getUTCMilliseconds()")}}这两个方法返回的值。

如果你传入的参数值在上文所述范围之外的话，**`setUTCMinutes()`**方法会尝试修改日期对象中的其他信息，比如说你为 **`secondsValue`** 这个参数传入了 100（译者注：规定范围是 \[0, 59]），那么第一个参数（**`minutesValue`**）就会被加 1，而秒数则变成了 40。

## 例子

### 使用 `setUTCMinutes()`

```js
var theBigDay = new Date();
theBigDay.setUTCMinutes(43);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关知识

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}
