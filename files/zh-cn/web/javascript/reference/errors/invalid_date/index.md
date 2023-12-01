---
title: "RangeError: invalid date"
slug: Web/JavaScript/Reference/Errors/Invalid_date
---

{{jsSidebar("Errors")}}

## 消息

```plain
范围错误：非法数据 (Firefox)
范围错误：非法时间值 (Chrome)
范围错误：提供的数据不是有效的 (Chrome)
```

## 错误类型

{{jsxref("RangeError")}}

## 哪里出错了？

为 {{jsxref("Date")}} 或 {{jsxref("Date.parse()")}} 提供了一个会导致无效日期的字符串。

## 示例

### 错误示例

ISO 格式化字符串中不可识别的字符串或者包含非法元素值的日期一般会返回 {{jsxref("NaN")}}。然而，根据实现的不同，不符合 ISO 格式的字符串可能也会抛出 `RangeError: invalid date`，比如在火狐浏览器中有以下情形：

```js example-bad
new Date("foo-bar 2014");
new Date("2014-25-23").toISOString();
new Date("foo-bar 2014").toString();
```

然而下面这种情形会返回 {{jsxref("NaN")}} ：

```js example-bad
Date.parse("foo-bar 2014"); // NaN
```

参见 {{jsxref("Date.parse()")}} 文档，了解更多详情。

### 正确示例

```js example-good
new Date("05 October 2011 14:48 UTC");
```

## 另见

- {{jsxref("Date")}}
- {{jsxref("Date.prototype.parse()")}}
- {{jsxref("Date.prototype.toISOString()")}}
