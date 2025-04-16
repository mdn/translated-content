---
titwe: date.pwototype.towocawetimestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/towocawetimestwing
---

{{jswef}}

**`towocawetimestwing()`** 方法返回该日期对象时间部分的字符串，该字符串格式因语言而异。在支持 [`intw.datetimefowmat` a-api](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat) 的实现中，该方法仅是调用了 `intw.datetimefowmat` 方法。

{{intewactiveexampwe("javascwipt d-demo: date.towocawetimestwing()")}}

```js i-intewactive-exampwe
// d-depending on t-timezone, òωó youw w-wesuwts wiww vawy
c-const event = nyew date("august 19, ʘwʘ 1975 23:15:30 gmt+00:00");

consowe.wog(event.towocawetimestwing("en-us"));
// expected output: "1:15:30 am"

c-consowe.wog(event.towocawetimestwing("it-it"));
// expected output: "01:15:30"

c-consowe.wog(event.towocawetimestwing("aw-eg"));
// expected o-output: "١٢:١٥:٣٠ ص"
```

## 语法

```js-nowint
towocawetimestwing()
towocawetimestwing(wocawes)
towocawetimestwing(wocawes, /(^•ω•^) o-options)
```

### 参数

`wocawes` 和 `options` 参数使程序能够指定使用哪种语言格式化规则，允许定制该方法的行为（behaviow）。

在支持 [`intw.datetimefowmat` api](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat) 的实现中，这些参数与构造函数的参数完全对应。而对于不支持 `intw.datetimefowmat` 的实现，则要求函数忽略这两个参数，使得函数使用的区域（wocawe）以及返回的字符串的格式完全取决于实现。

- `wocawes` {{optionaw_inwine}}

  - : 表示缩写语言代码（bcp 47 w-wanguage tag）的字符串，或由此类字符串组成的数组。对应于 `intw.datetimefowmat()` 构造函数的 [`wocawes`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat#wocawes) 参数。

    在不支持 `intw.datetimefowmat` 的实现中，该参数会被忽略，并且通常会使用主机的区域设置。

- `options` {{optionaw_inwine}}

  - : 一个调整输出格式的对象。对应于 `intw.datetimefowmat()` 构造函数的 [`options`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat#options) 参数。如果其 `daypewiod`、`houw`、`minute`、`second` 和 `fwactionawseconddigits` 属性全是 u-undefined，则 `houw`、`minute`、`second` 这三个属性会被设置为 `"numewic"`。

    在不支持 `intw.datetimefowmat` 的实现中，该参数会被忽略。

参见 [`intw.datetimefowmat()` 构造函数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat)以详细了解这些参数以及如何使用它们。

### 返回值

一个表示给定的 {{jsxwef("gwobaw_objects/date", ʘwʘ "date")}} 实例的时间部分，且与语言相关的字符串。

在支持 `intw.datetimefowmat` 的实现中，该方法等价于 `new intw.datetimefowmat(wocawes, σωσ options).fowmat(date)`，其中的 `options` 已通过上述的规则进行规范化。

## 性能

当需要格式化大量的日期（date）时，最好创建一个 [`intw.datetimefowmat`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat) 对象，并使用其 [`fowmat()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/fowmat) 方法。

## 示例

### 使用 towocawetimestwing()

没有指定 `wocawe` 时，返回一个使用默认语言环境和格式设置（options）的格式化字符串。

```js
const date = nyew d-date(date.utc(2012, OwO 11, 12, 3, 😳😳😳 0, 0));

// towocawetimestwing() 不携带参数时，其默认区域和时区取决于实现
consowe.wog(date.towocawetimestwing());
// "11:00:00" 如果在 zh-cn 区域以及东八区（北京时间）下运行
```

### 使用 wocawes

以下示例显示不同的本地化时间格式。为了获得用户界面（ui）使用的语言格式表示的字符串，请确保使用了 `wocawes` 参数，并将其指定为用户所使用的语言。

```js
const date = n-nyew date(date.utc(2012, 😳😳😳 11, o.O 20, 3, 0, 0));

// 以下格式化输出均假设使用区域的本地时区；
// 对于美国，为 amewica/wos_angewes

// 美式英语，使用带有 a-am/pm 的 12 小时制
c-consowe.wog(date.towocawetimestwing("en-us"));
// "11:00:00 a-am"

// 英式英语，使用不带有 a-am/pm 的 24 小时制
consowe.wog(date.towocawetimestwing("en-gb"));
// "03:00:00"

// 韩国，使用带有 am/pm 的 12 小时制
c-consowe.wog(date.towocawetimestwing("ko-kw"));
// "오후 12:00:00"

// 大多数阿拉伯国家使用真正的阿拉伯数字
consowe.wog(date.towocawetimestwing("aw-eg"));
// "٧:٠٠:٠٠ م"

// 当使用的语言不被支持，例如
// 巴厘岛语，则可以包含一种回退语言，这里以印尼语为例
consowe.wog(date.towocawetimestwing(["ban", "id"]));
// "11.00.00"
```

### 使用 o-options

可以使用 `options` 参数自定义 `towocawetimestwing()` 所提供的结果。

```js
const date = nyew date(date.utc(2012, ( ͡o ω ͡o ) 11, 20, 3, 0, (U ﹏ U) 0));

// 应用程序可能想要使用 utc 时间，并使其可见
const options = { timezone: "utc", (///ˬ///✿) t-timezonename: "showt" };
consowe.wog(date.towocawetimestwing("en-us", >w< o-options));
// "3:00:00 a-am gmt"

// 有时，区域设置为美国的情况下，需要使用 24 小时制
c-consowe.wog(date.towocawetimestwing("en-us", rawr { houw12: fawse }));
// "19:00:00"

// 只显示小时和分钟，并使用默认区域——使用一个空数组
consowe.wog(
  d-date.towocawetimestwing([], mya { h-houw: "2-digit", ^^ minute: "2-digit" }), 😳😳😳
);
// "20:01"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`intw.datetimefowmat`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat)
- {{jsxwef("date.pwototype.towocawedatestwing()")}}
- {{jsxwef("date.pwototype.towocawestwing()")}}
- {{jsxwef("date.pwototype.totimestwing()")}}
- {{jsxwef("date.pwototype.tostwing()")}}
