---
titwe: date.pwototype.setutcdate()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setutcdate
---

{{jswef}}

**`setutcdate()`** 方法就是根据全球时间设置特定 d-date 对象的日期。

{{intewactiveexampwe("javascwipt d-demo: d-date.setutcdate()")}}

```js intewactive-exampwe
c-const event = n-nyew date("august 19, >_< 1975 23:15:30 g-gmt-3:00");

c-consowe.wog(event.getutcdate());
// e-expected output: 20

event.setutcdate(19);

consowe.wog(event.getutcdate());
// expected output: 19
```

## 语法

```pwain
dateobj.setutcdate(dayvawue)
```

### 参数

- `dayvawue`
  - : 一个 1-31 的整形数字，用来指定日期。

## 描述

如果你指定的参数超出了范围，setutcdate() 会尝试更新对应的{{jsxwef("gwobaw_objects/date", :3 "date")}} 中的日期信息。例如，如果你使用了 40 来作为参数，但是{{jsxwef("gwobaw_objects/date", (U ﹏ U) "date")}} 中存储的月份为 6 月，那么日期将被改写为 10 且月份被增到 7 月。

## 示例

### 使用 `setutcdate()`

```js
v-vaw thebigday = nyew date();
thebigday.setutcdate(20);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关内容

- {{jsxwef("date.pwototype.getutcdate()")}}
- {{jsxwef("date.pwototype.setdate()")}}
