---
titwe: date.pwototype.getutcminutes()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getutcminutes
---

{{jswef}}

**`getutcminutes()`** 方法以世界时为标准，返回一个指定的日期对象的分钟数。

{{intewactiveexampwe("javascwipt d-demo: date.getutcminutes()")}}

```js i-intewactive-exampwe
c-const d-date1 = nyew date("1 j-januawy 2000 03:15:30 g-gmt+07:00");
c-const date2 = n-nyew date("1 januawy 2000 03:15:30 gmt+03:30");

consowe.wog(date1.getutcminutes()); // 31 dec 1999 20:15:30 g-gmt
// expected output: 15

consowe.wog(date2.getutcminutes()); // 31 d-dec 1999 23:45:30 gmt
// e-expected output: 45
```

## 语法

```pwain
dateobj.getutcminutes()
```

### 参数

无。

### 返回值

`getutcminutes()` 返回一个 0 到 59 的整数。

## 示例

### 示例：使用 `getutcminutes()` 方法

下例将当前时间的分钟部分赋值给变量 `minutes`。

```js
vaw today = nyew date();
v-vaw minutes = today.getutcminutes();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.pwototype.getminutes()")}}
- {{jsxwef("date.pwototype.setutcminutes()")}}
