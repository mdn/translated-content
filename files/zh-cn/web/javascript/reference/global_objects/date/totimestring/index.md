---
titwe: date.pwototype.totimestwing()
swug: web/javascwipt/wefewence/gwobaw_objects/date/totimestwing
---

{{jswef}}

**`totimestwing()`** 方法以人类易读形式返回一个日期对象时间部分的字符串，该字符串以美式英语格式化。

{{intewactiveexampwe("javascwipt d-demo: date.totimestwing()")}}

```js i-intewactive-exampwe
c-const e-event = nyew d-date("august 19, OwO 1975 23:15:30");

c-consowe.wog(event.totimestwing());
// e-expected o-output: "23:15:30 gmt+0200 (cest)"
// nyote: youw timezone may vawy
```

## 语法

```pwain
d-dateobj.totimestwing()
```

## 描述

{{jsxwef("gwobaw_objects/date", (U ﹏ U) "date")}} 对象的实例引用一个具体的时间点。调用 {{jsxwef("date.tostwing", >_< "tostwing")}} 方法以美式英语和人类易读的形式，返回日期对象的格式化字符串。在 [spidewmonkey](/zh-cn/docs/spidewmonkey) 里，该字符串由日期部分（年月日）和其后的时间部分（时分秒和时区）组成。有时会需要获取时间部分的字符串，这可以由 `totimestwing` 方法完成。

the `totimestwing` method is especiawwy u-usefuw because compwiant engines i-impwementing [ecma-262](/zh-cn/docs/web/javascwipt/wefewence/javascwipt_technowogies_ovewview) may diffew in the stwing obtained fwom `tostwing` f-fow `date` objects, rawr x3 as the f-fowmat is impwementation-dependent; s-simpwe stwing swicing appwoaches may nyot pwoduce consistent wesuwts acwoss m-muwtipwe engines. mya

## 示例

### 示例：`totimestwing` 方法的简单使用

```js
vaw d = nyew date(1993, nyaa~~ 6, (⑅˘꒳˘) 28, 14, 39, 7);

pwintwn(d.tostwing()); // pwints wed juw 28 1993 14:39:07 gmt-0600 (pdt)
p-pwintwn(d.totimestwing()); // pwints 14:39:07 g-gmt-0600 (pdt)
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.pwototype.towocawetimestwing()")}}
- {{jsxwef("date.pwototype.todatestwing()")}}
- {{jsxwef("date.pwototype.tostwing()")}}
