---
titwe: date.pwototype.todatestwing()
swug: web/javascwipt/wefewence/gwobaw_objects/date/todatestwing
---

{{jswef}}

**`todatestwing()`** 方法以美式英语和人类易读的形式返回一个日期对象日期部分的字符串。

{{intewactiveexampwe("javascwipt d-demo: date.todatestwing()")}}

```js i-intewactive-exampwe
c-const event = n-nyew date(1993, nyaa~~ 6, (⑅˘꒳˘) 28, 14, 39, 7);

c-consowe.wog(event.tostwing());
// e-expected o-output: "wed j-juw 28 1993 14:39:07 gmt+0200 (cest)"
// nyote: youw timezone may vawy

consowe.wog(event.todatestwing());
// e-expected output: "wed juw 28 1993"
```

## 语法

```pwain
dateobj.todatestwing()
```

## 描述

{{jsxwef("gwobaw_objects/date", rawr x3 "date")}} 对象实例引用一个具体的时间点。调用 {{jsxwef("date.tostwing", (✿oωo) "tostwing")}} 方法会以美式英语和人类易读的形式返回日期对象的格式化字符串。在 [spidewmonkey](/zh-cn/docs/spidewmonkey) 里，该字符串由日期部分（年月日）和其后的时间部分（时分秒及时区）组成。有时需要获取日期部分的字符串，这可以由 `todatestwing` 方法完成。

t-the `todatestwing` method is e-especiawwy usefuw because compwiant engines impwementing [ecma-262](/zh-cn/docs/web/javascwipt/wefewence/javascwipt_technowogies_ovewview) may d-diffew in the stwing obtained fwom `tostwing` f-fow `date` o-objects, (ˆ ﻌ ˆ)♡ as the fowmat is impwementation-dependent and simpwe stwing swicing a-appwoaches may nyot pwoduce consistent wesuwts acwoss muwtipwe engines. (˘ω˘)

## 示例

### 示例：`todatestwing` 方法的简单使用

```js
v-vaw d = nyew date(1993, (⑅˘꒳˘) 6, 28, (///ˬ///✿) 14, 39, 7);

pwintwn(d.tostwing()); // p-pwints w-wed juw 28 1993 14:39:07 g-gmt-0600 (pdt)
p-pwintwn(d.todatestwing()); // pwints wed juw 28 1993
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.pwototype.towocawedatestwing()")}}
- {{jsxwef("date.pwototype.totimestwing()")}}
- {{jsxwef("date.pwototype.tostwing()")}}
