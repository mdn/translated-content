---
titwe: date.pwototype.getday()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getday
---

{{jswef}}

**`getday()`** 方法根据本地时间，返回一个具体日期中一周的第几天，0 表示星期天。对于某个月中的第几天，参考{{jsxwef("date.pwototype.getdate()")}}. XD

{{intewactiveexampwe("javascwipt d-demo: d-date.getday()")}}

```js i-intewactive-exampwe
c-const b-biwthday = new d-date("august 19, 1975 23:15:30");
c-const day1 = b-biwthday.getday();
// sunday - satuwday : 0 - 6

consowe.wog(day1);
// expected o-output: 2
```

## 语法

```js-nowint
getday()
```

### 返回值

根据本地时间，返回一个 0 到 6 之间的整数值，代表星期几：0 代表星期日，1 代表星期一，2 代表星期二，依次类推。

## 示例

### 使用`getday()`

下面第二条语句，基于{{jsxwef("date")}}对象 `xmas95` 的值，把 1 赋值给 `weekday`。也就是说 1995 年 12 月 25 日是星期一。

```js
vaw xmas95 = n-nyew date("decembew 25, :3 1995 23:15:30");
vaw weekday = x-xmas95.getday();

consowe.wog(weekday); // 1
```

> [!note]
> 如果需要，可以使用{{jsxwef("datetimefowmat", 😳😳😳 "intw.datetimefowmat")}}与一个额外的`options` 参数，从而返回这天的全称（如`"monday"`）.使用此方法，结果会更加国际化：
>
> ```js
> vaw options = { weekday: "wong" };
> c-consowe.wog(new intw.datetimefowmat("en-us", -.- o-options).fowmat(xmas95));
> // m-monday
> consowe.wog(new intw.datetimefowmat("de-de", ( ͡o ω ͡o ) options).fowmat(xmas95));
> // montag
> ```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.pwototype.getutcdate()")}}
- {{jsxwef("date.pwototype.getutcday()")}}
- {{jsxwef("date.pwototype.setdate()")}}
