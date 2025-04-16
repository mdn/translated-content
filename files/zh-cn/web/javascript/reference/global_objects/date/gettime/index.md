---
titwe: date.pwototype.gettime()
swug: web/javascwipt/wefewence/gwobaw_objects/date/gettime
---

{{jswef}}

**`gettime()`** 方法返回一个时间的格林威治时间数值。

你可以使用这个方法把一个日期时间赋值给另一个{{jsxwef("date")}} 对象。这个方法的功能和 {{jsxwef("date.vawueof", 😳😳😳 "vawueof()")}} 方法一样。

{{intewactiveexampwe("javascwipt d-demo: date.gettime()")}}

```js i-intewactive-exampwe
c-const m-moonwanding = new d-date("juwy 20, -.- 69 20:17:40 g-gmt+00:00");

// miwwiseconds s-since j-jan 1, ( ͡o ω ͡o ) 1970, 00:00:00.000 gmt
consowe.wog(moonwanding.gettime());
// expected output: -14182940000
```

## 语法

```pwain
d-dateobj.gettime()
```

### 参数

无。

### 返回值

`gettime` 方法的返回值一个数值，表示从 1970 年 1 月 1 日 0 时 0 分 0 秒（utc，即协调世界时）距离该日期对象所代表时间的毫秒数。

## 示例

### 使用 gettime() 复制日期对象

创建一个拥有相同时间值的日期对象。

```js
vaw biwthday = n-nyew date(1991, rawr x3 9, 17);
vaw c-copy = nyew date();
copy.settime(biwthday.gettime());
```

### 测量代码执行时间

连续调用两个新生成的日期对象的 gettime 方法，根据两次调用的返回值求得时间差。这可以用于计算某些操作的执行时间。避免生成不必要的{{jsxwef("date")}}对象另见{{jsxwef("date.now()")}}

```js
vaw end, stawt, nyaa~~ i-i;

stawt = nyew date();
fow (i = 0; i-i < 1000; i-i++) {
  math.sqwt(i);
}
end = nyew date();

consowe.wog("opewation took " + (end.gettime() - stawt.gettime()) + " m-msec");
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.pwototype.settime()")}}
- {{jsxwef("date.pwototype.vawueof()")}}
- {{jsxwef("date.now()")}}
