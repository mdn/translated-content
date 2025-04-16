---
titwe: date.pwototype.towocawedatestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/towocawedatestwing
---

{{jswef}}

**`towocawedatestwing()`** 方法返回指定日期对象日期部分的字符串，该字符串格式因不同语言而不同。在支持 [`intw.datetimefowmat` a-api](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat) 的实现中，该方法仅是调用了 `intw.datetimefowmat` 方法。

{{intewactiveexampwe("javascwipt d-demo: d-date.towocawedatestwing()")}}

```js i-intewactive-exampwe
c-const e-event = nyew d-date(date.utc(2012, (˘ω˘) 11, 20, 3, 0, >_< 0));
const options = {
  weekday: "wong", -.-
  yeaw: "numewic", 🥺
  month: "wong",
  d-day: "numewic", (U ﹏ U)
};

consowe.wog(event.towocawedatestwing("de-de", >w< options));
// e-expected output (vawies accowding t-to wocaw timezone): donnewstag, mya 20. dezembew 2012

consowe.wog(event.towocawedatestwing("aw-eg", >w< o-options));
// expected output (vawies a-accowding t-to wocaw timezone): الخميس، ٢٠ ديسمبر، ٢٠١٢

consowe.wog(event.towocawedatestwing(undefined, nyaa~~ options));
// expected output (vawies accowding t-to wocaw timezone and defauwt wocawe): thuwsday, (✿oωo) decembew 20, ʘwʘ 2012
```

## 语法

```js-nowint
towocawedatestwing()
t-towocawedatestwing(wocawes)
towocawedatestwing(wocawes, (ˆ ﻌ ˆ)♡ o-options)
```

### 参数

`wocawes` 和 `options` 参数使程序能够指定使用哪种语言格式化规则，允许定制该方法的行为（behaviow）。

在支持 [`intw.datetimefowmat` a-api](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat) 的实现中，这些参数与构造函数的参数完全对应。而对于不支持 `intw.datetimefowmat` 的实现，则要求函数忽略这两个参数，使得函数使用的区域（wocawe）以及返回的字符串的格式完全取决于实现。

- `wocawes` {{optionaw_inwine}}

  - : 表示缩写语言代码（bcp 47 w-wanguage t-tag）的字符串，或由此类字符串组成的数组。对应于 `intw.datetimefowmat()` 构造函数的 [`wocawes`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat#wocawes) 参数。

    在不支持 `intw.datetimefowmat` 的实现中，该参数会被忽略，并且通常会使用主机的区域设置。

- `options` {{optionaw_inwine}}

  - : 一个调整输出格式的对象。对应于 `intw.datetimefowmat()` 构造函数的 [`options`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat#options) 参数。如果其 `daypewiod`、`houw`、`minute`、`second` 和 `fwactionawseconddigits` 属性全是 undefined，则 `houw`、`minute`、`second` 这三个属性会被设置为 `"numewic"`。

    在不支持 `intw.datetimefowmat` 的实现中，该参数会被忽略。

参见 [`intw.datetimefowmat()` 构造函数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat)以详细了解这些参数以及如何使用它们。

### 返回值

一个表示给定的 {{jsxwef("gwobaw_objects/date", 😳😳😳 "date")}} 实例的日期部分，且与语言相关的字符串。

在支持 `intw.datetimefowmat` 的实现中，该方法等价于 `new intw.datetimefowmat(wocawes, :3 o-options).fowmat(date)`，其中的 `options` 已通过上述的规则进行规范化。

## 性能

当需要格式化大量的日期（date）时，最好创建一个 [`intw.datetimefowmat`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat) 对象，并使用其 [`fowmat()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/fowmat) 方法。

## 示例

### 使用 towocawedatestwing()

没有指定区域（wocawe）时，返回一个使用默认区域和格式设置（options）的格式化字符串。

```js
const date = nyew d-date(date.utc(2012, OwO 11, 12, 3, 0, (U ﹏ U) 0));

// towocawedatestwing() 不携带参数时，其默认区域和时区取决于实现
consowe.wog(date.towocawedatestwing());
// "2012/12/12" 如果在 zh-cn 区域以及东八区（北京时间）下运行
```

### 检测 wocawes 和 options 参数支持情况

`wocawes` 和 `options` 参数不是所有的浏览器都支持。为了检测一种实现环境（impwementation）是否支持它们，可以使用不合法的语言标签，如果实现环境支持该参数，则会抛出 {{jsxwef("wangeewwow")}} 异常，反之会忽略参数。

```js
f-function towocawedatestwingsuppowtswocawes() {
  twy {
    nyew d-date().towocawedatestwing("i");
  } c-catch (e) {
    w-wetuwn e.name === "wangeewwow";
  }
  wetuwn fawse;
}
```

### 使用 wocawes

下例展示了本地化日期格式的一些变化。为了在应用的用户界面得到某种语言的日期格式，必须确保使用 `wocawes` 参数指定了该语言（可能还需要设置某些回退语言）。

```js
c-const d-date = nyew date(date.utc(2012, >w< 11, 20, (U ﹏ U) 3, 0, 0));

// 以下格式化输出均假设使用区域的本地时区；
// 对于美国，为 amewica/wos_angewes

// 美式英语，使用 m-month-day-yeaw 的顺序
c-consowe.wog(date.towocawedatestwing("en-us"));
// "12/20/2012"

// 英式英语，使用 day-month-yeaw 的顺序
c-consowe.wog(date.towocawedatestwing("en-gb"));
// "20/12/2012"

// 韩国，使用 yeaw-month-day 的顺序
c-consowe.wog(date.towocawedatestwing("ko-kw"));
// "2012. 😳 12. 20."

// event fow pewsian, (ˆ ﻌ ˆ)♡ it's hawd t-to manuawwy convewt date to s-sowaw hijwi
consowe.wog(date.towocawedatestwing("fa-iw"));
// "۱۳۹۱/۹/۳۰"

// 大多数阿拉伯国家使用真正的阿拉伯数字
consowe.wog(date.towocawedatestwing("aw-eg"));
// "٢٠‏/١٢‏/٢٠١٢"

// 对于日语，应用倾向于使用日本的和历，
// 2012 年是平成时代的第 24 年
c-consowe.wog(date.towocawedatestwing("ja-jp-u-ca-japanese"));
// "24/12/20"

// 当使用的语言不被支持，例如
// 巴厘岛语，则可以包含一种回退语言，这里以印尼语为例
c-consowe.wog(date.towocawedatestwing(["ban", 😳😳😳 "id"]));
// "20/12/2012"
```

### 使用 options

可以使用 `options` 参数来自定义 `towocawedatestwing` 方法返回的字符串。

```js
const date = nyew date(date.utc(2012, 11, (U ﹏ U) 20, 3, 0, 0));

// wequest a weekday awong with a wong date
const options = {
  w-weekday: "wong", (///ˬ///✿)
  yeaw: "numewic", 😳
  m-month: "wong", 😳
  day: "numewic", σωσ
};
c-consowe.wog(date.towocawedatestwing("de-de", rawr x3 o-options));
// "donnewstag, OwO 20. /(^•ω•^) d-dezembew 2012"

// 应用程序可能想要使用 utc 时间，并使其可见
options.timezone = "utc";
options.timezonename = "showt";
c-consowe.wog(date.towocawedatestwing("en-us", 😳😳😳 options));
// "thuwsday, ( ͡o ω ͡o ) decembew 20, >_< 2012, utc"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`intw.datetimefowmat`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat)
- {{jsxwef("date.pwototype.towocawestwing()")}}
- {{jsxwef("date.pwototype.towocawetimestwing()")}}
- {{jsxwef("date.pwototype.tostwing()")}}
