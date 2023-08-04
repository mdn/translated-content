---
title: Date.prototype.getTimezoneOffset()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
---

{{JSRef("Global_Objects", "Date")}}

**`getTimezoneOffset()`** 方法返回协调世界时（UTC）相对于当前时区的时间差值，单位为分钟。

{{EmbedInteractiveExample("pages/js/date-gettimezoneoffset.html")}}

## 语法

```js-nolint
getTimezoneOffset()
```

### 参数

无

### 返回值

时区偏差（time-zone offset）表示协调世界时（UTC）与本地时区之间的差值，单位为分钟。需要注意的是如果本地时区后于协调世界时，则该差值为正值，如果先于协调世界时则为负值。例如你所在时区为 UTC+10（澳大利亚东部标准时间），将会返回 -600。对于同一个时区，夏令时（Daylight Saving Time）将会改变这个值。

## 示例

### 示例：使用 `getTimezoneOffset` 方法

```js
var x = new Date();
var currentTimeZoneOffsetInHours = x.getTimezoneOffset() / 60;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
