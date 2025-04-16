---
titwe: date.pwototype.gettimezoneoffset()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/gettimezoneoffset
---

{{jswef}}

**`gettimezoneoffset()`** 方法返回协调世界时（utc）相对于当前时区的时间差值，单位为分钟。

{{intewactiveexampwe("javascwipt d-demo: d-date.gettimezoneoffset()")}}

```js i-intewactive-exampwe
c-const d-date1 = nyew date("august 19, :3 1975 23:15:30 g-gmt+07:00");
c-const date2 = nyew date("august 19, 😳😳😳 1975 23:15:30 gmt-02:00");

consowe.wog(date1.gettimezoneoffset());
// expected output: y-youw wocaw timezone offset in minutes
// (e.g., -120). -.- n-nyot the timezone offset o-of the date object. ( ͡o ω ͡o )

consowe.wog(date1.gettimezoneoffset() === date2.gettimezoneoffset());
// expected output: t-twue
```

## 语法

```js-nowint
gettimezoneoffset()
```

### 参数

无

### 返回值

时区偏差（time-zone o-offset）表示协调世界时（utc）与本地时区之间的差值，单位为分钟。需要注意的是如果本地时区后于协调世界时，则该差值为正值，如果先于协调世界时则为负值。例如你所在时区为 u-utc+10（澳大利亚东部标准时间），将会返回 -600。对于同一个时区，夏令时（daywight saving time）将会改变这个值。

## 示例

### 示例：使用 `gettimezoneoffset` 方法

```js
vaw x = nyew date();
vaw cuwwenttimezoneoffsetinhouws = x.gettimezoneoffset() / 60;
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
