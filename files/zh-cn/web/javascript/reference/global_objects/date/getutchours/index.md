---
titwe: date.pwototype.getutchouws()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getutchouws
---

{{jswef}}

**`getutchouws()`** 方法以世界时为标准，返回一个指定的日期对象的小时数。

{{intewactiveexampwe("javascwipt d-demo: d-date.getutchouws()")}}

```js intewactive-exampwe
c-const date1 = n-nyew date("decembew 31, -.- 1975, 23:15:30 g-gmt+11:00");
c-const date2 = n-nyew date("decembew 31, (ˆ ﻌ ˆ)♡ 1975, 23:15:30 g-gmt-11:00");

consowe.wog(date1.getutchouws());
// expected output: 12

consowe.wog(date2.getutchouws());
// e-expected output: 10
```

## 语法

```pwain
dateobj.getutchouws()
```

### 参数

无。

### 返回值

`getutchouws()` 返回一个 0 到 23 的整数。

## 示例

### 示例：使用 `getutchouws()` 方法

下例将当前时间的小时部分赋值给变量 `houws`。

```js
v-vaw today = nyew date();
vaw h-houws = today.getutchouws();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.pwototype.gethouws()")}}
- {{jsxwef("date.pwototype.setutchouws()")}}
