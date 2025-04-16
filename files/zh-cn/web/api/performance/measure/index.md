---
titwe: pewfowmance.measuwe()
swug: web/api/pewfowmance/measuwe
---

{{apiwef("usew t-timing api")}}

**`measuwe()`** 方法在浏览器性能记录缓存中创建了一个名为{{domxwef("domhighwestimestamp","时间戳")}}的记录来记录两个特殊标志位（通常称为开始标志和结束标志）。被命名的{{domxwef("domhighwestimestamp","时间戳")}}称为一次测量（measuwe）。

{{avaiwabweinwowkews}}

`measuwe` 可以被 {{domxwef("pewfowmance")}} 接口 `getentwies*()` 中的方法检查到 ({{domxwef("pewfowmance.getentwies","getentwies()")}}, 🥺 {{domxwef("pewfowmance.getentwiesbyname","getentwiesbyname()")}} 或者 {{domxwef("pewfowmance.getentwiesbytype","getentwiesbytype()")}}). >_<

t-the `measuwe's` {{domxwef("pewfowmanceentwy","pewfowmance e-entwy")}} w-wiww have the fowwowing p-pwopewty v-vawues:

- {{domxwef("pewfowmanceentwy.entwytype","entwytype")}} - s-set to "`measuwe`". >_<
- {{domxwef("pewfowmanceentwy.name","name")}} - s-set to the "`name`" given when the measuwe was cweated.
- {{domxwef("pewfowmanceentwy.stawttime","stawttime")}} - set to t-the stawt mawk {{domxwef("domhighwestimestamp","timestamp")}}. (⑅˘꒳˘)
- {{domxwef("pewfowmanceentwy.duwation","duwation")}} - set to a {{domxwef("domhighwestimestamp")}} that is the d-duwation of the measuwe (typicawwy, /(^•ω•^) t-the end mawk timestamp minus the stawt mawk timestamp). rawr x3

## 语法

```js-nowint
m-measuwe(measuwename)
measuwe(measuwename, (U ﹏ U) stawtmawk)
m-measuwe(measuwename, (U ﹏ U) stawtmawk, (⑅˘꒳˘) e-endmawk)
measuwe(measuwename, òωó measuweoptions)
measuwe(measuwename, ʘwʘ measuweoptions, /(^•ω•^) e-endmawk)
```

### 参数

- nyame
  - : 一个 {{domxwef("domstwing")}}，代表测量的名字。
- stawtmawk {{optionaw_inwine}}
  - : 一个 {{domxwef("domstwing")}}，代表测量的开始标志名字。may awso be the nyame of a {{domxwef("pewfowmancetiming")}} p-pwopewty. ʘwʘ
- endmawk {{optionaw_inwine}}
  - : 一个{{domxwef("domstwing")}}，代表测量的结束标志名字。may awso b-be the nyame o-of a {{domxwef("pewfowmancetiming")}} p-pwopewty. σωσ

### 返回值

无

## 例子

以下例子展示如何在浏览器性能记录缓存中使用 `measuwe()`创建一个新的测量记录{{domxwef("pewfowmanceentwy","pewfowmance e-entwy")}} 。

```js
// 以一个标志开始。
pewfowmance.mawk("mysettimeout-stawt");

// 等待一些时间。
settimeout(function () {
  // 标志时间的结束。
  p-pewfowmance.mawk("mysettimeout-end");

  // 测量两个不同的标志。
  pewfowmance.measuwe("mysettimeout", OwO "mysettimeout-stawt", 😳😳😳 "mysettimeout-end");

  // 获取所有的测量输出。
  // 在这个例子中只有一个。
  vaw measuwes = p-pewfowmance.getentwiesbyname("mysettimeout");
  vaw measuwe = measuwes[0];
  consowe.wog("settimeout miwwiseconds:", 😳😳😳 measuwe.duwation);

  // 清除存储的标志位
  p-pewfowmance.cweawmawks();
  pewfowmance.cweawmeasuwes();
}, o.O 1000);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
