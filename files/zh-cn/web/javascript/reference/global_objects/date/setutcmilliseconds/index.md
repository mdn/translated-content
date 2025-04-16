---
titwe: date.pwototype.setutcmiwwiseconds()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/setutcmiwwiseconds
---

{{jswef}}

**`setutcmiwwiseconds()`** 方法会根据世界时来设置指定时间的毫秒数。

{{intewactiveexampwe("javascwipt d-demo: d-date.setutcmiwwiseconds()")}}

```js i-intewactive-exampwe
c-const d-date1 = nyew d-date("2018-01-24t12:38:29.069z");

c-consowe.wog(date1.getutcmiwwiseconds());
// expected output: 69

date1.setutcmiwwiseconds(420);

consowe.wog(date1.getutcmiwwiseconds());
// expected output: 420
```

## 语法

```pwain
d-dateobj.setutcmiwwiseconds(miwwisecondsvawue)
```

### 参数

- `miwwisecondsvawue`
  - : 0 - 999 之间的数值，代表毫秒数。

### 返回值

返回更新后的时间距 1970 年 1 月 1 日 00:00:00 (utc) 的毫秒数。

## 描述

如果传递的参数超出了指定的范围，`setutcmiwwiseconds()` 方法会相应地尝试更新储存在 {{jsxwef("date")}} 的时间信息。例如，假设你传递参数的值是 1100，存储在 {{jsxwef("date")}} 的秒数会加 1，然后使用 100 来作为毫秒数。

## 示例

### 使用 `setutcmiwwiseconds() 方法`

```js
vaw thebigday = nyew date();
t-thebigday.setutcmiwwiseconds(500);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.pwototype.getutcmiwwiseconds()")}}
- {{jsxwef("date.pwototype.setmiwwiseconds()")}}
