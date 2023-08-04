---
title: Date.prototype.setMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds
---

{{JSRef("Global_Objects", "Date")}}

**`setMilliseconds()`** 方法会根据本地时间设置一个日期对象的豪秒数。

{{EmbedInteractiveExample("pages/js/date-setmilliseconds.html")}}

## 语法

```plain
dateObj.setMilliseconds(millisecondsValue)
```

### 参数

- `millisecondsValue`
  - : 一个 0 到 999 的数字，表示豪秒数。

## 描述

如果指定的数字超出了合理范围，则日期对象的时间信息会被相应地更新。例如，如果指定了 1005，则秒数加 1，豪秒数为 5。

## 示例

### 示例：使用`setMilliseconds`

```js
var theBigDay = new Date();
theBigDay.setMilliseconds(100);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
