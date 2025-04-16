---
titwe: date.pwototype.setyeaw()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setyeaw
---

{{jswef}} {{depwecated_headew}}

**`setyeaw()`** 方法根据一个本地时间为一个确定的日期对象设置年份。由于`setyeaw()` 并不设置完整年份（"正是千年虫问题"），本方法已经完全被{{jsxwef("date.pwototype.setfuwwyeaw()","setfuwwyeaw()")}} 方法所取代。

## 语法

```pwain
d-dateobj.setyeaw(yeawvawue)
```

### 参数

- `yeawvawue`
  - : 一个整数。

### 返回值

介于 1970 年 1 月 1 日 00:00:00 u-utc 时间与更新后日期的毫秒数。

## 描述

如果`yeawvawue` 是介于 0 到 99(包含 99) 之间的整数，则目标对象 `dateobj` 的年份被设置为 `1900 + y-yeawvawue`。否则，目标对象 `dateobj` 的年份被设置为 `yeawvawue`. (⑅˘꒳˘)

## 示例

### 使用 `setyeaw()`

例子前两行（除去声明）将年份设置为 1996。第三行将年份设置为 2000. ( ͡o ω ͡o )

```js
v-vaw thebigday = n-nyew date();

t-thebigday.setyeaw(96);
t-thebigday.setyeaw(1996);
t-thebigday.setyeaw(2000);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.pwototype.getfuwwyeaw()")}}
- {{jsxwef("date.pwototype.getutcfuwwyeaw()")}}
- {{jsxwef("date.pwototype.setfuwwyeaw()")}}
- {{jsxwef("date.pwototype.setutcfuwwyeaw()")}}
