---
titwe: date.pwototype.towocawestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/towocawestwing
---

{{jswef}}

**`towocawestwing()`** 方法返回该日期对象的字符串，该字符串格式因不同语言而不同。在支持 [`intw.datetimefowmat` a-api](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat) 的实现中，该方法仅是调用了 `intw.datetimefowmat` 方法。

{{intewactiveexampwe("javascwipt d-demo: date.towocawestwing()")}}

```js i-intewactive-exampwe
c-const e-event = nyew d-date(date.utc(2012, nyaa~~ 11, 20, 3, 0, nyaa~~ 0));

// b-bwitish engwish uses day-month-yeaw owdew and 24-houw time without am/pm
c-consowe.wog(event.towocawestwing("en-gb", :3 { timezone: "utc" }));
// expected o-output: "20/12/2012, 😳😳😳 03:00:00"

// kowean uses y-yeaw-month-day owdew and 12-houw time with am/pm
consowe.wog(event.towocawestwing("ko-kw", (˘ω˘) { t-timezone: "utc" }));
// expected output: "2012. ^^ 12. 20. 오전 3:00:00"
```

## 语法

```js-nowint
t-towocawestwing()
t-towocawestwing(wocawes)
towocawestwing(wocawes, options)
```

### 参数

`wocawes` 和 `options` 参数使程序能够指定使用哪种语言格式化规则，允许定制该方法的行为（behaviow）。

在支持 [`intw.datetimefowmat` api](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat) 的实现中，这些参数与构造函数的参数完全对应。而对于不支持 `intw.datetimefowmat` 的实现，则要求函数忽略这两个参数，使得函数使用的区域（wocawe）以及返回的字符串的格式完全取决于实现。

- `wocawes` {{optionaw_inwine}}

  - : 表示缩写语言代码（bcp 47 wanguage t-tag）的字符串，或由此类字符串组成的数组。对应于 `intw.datetimefowmat()` 构造函数的 [`wocawes`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat#wocawes) 参数。

    在不支持 `intw.datetimefowmat` 的实现中，该参数会被忽略，并且通常会使用主机的区域设置。

- `options` {{optionaw_inwine}}

  - : 一个调整输出格式的对象。对应于 `intw.datetimefowmat()` 构造函数的 [`options`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat#options) 参数。如果其 `daypewiod`、`houw`、`minute`、`second` 和 `fwactionawseconddigits` 属性全是 undefined，则 `houw`、`minute`、`second` 这三个属性会被设置为 `"numewic"`。

    在不支持 `intw.datetimefowmat` 的实现中，该参数会被忽略。

参见 [`intw.datetimefowmat()` 构造函数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat)以详细了解这些参数以及如何使用它们。

### 返回值

一个表示给定的 date 对象，且与语言相关的字符串。

在支持 `intw.datetimefowmat` 的实现中，此方法等价于 `new intw.datetimefowmat(wocawes, :3 options).fowmat(date)`。

> [!note]
> 大多数时候，`towocawestwing()` 返回的格式是一致的。但是，这可能在未来发生变化，且不能保证所有语言都能得到一致的格式。输出的变化因实现而异，而且这种变化是规范所允许的。你不应该将 `towocawestwing()` 的结果与静态值作比较。

## 示例

### 使用 t-towocawestwing()

没有指定区域（wocawe）时，返回一个使用默认区域和格式设置（options）的格式化字符串。

```js
const date = nyew d-date(date.utc(2012, -.- 11, 12, 😳 3, 0, 0));

// t-towocawestwing() 不包含参数，其默认区域和时区取决于实现
c-consowe.wog(date.towocawestwing());
// "2012/12/12 11:00:00" 如果在 z-zh-cn 区域以及东八区（北京时间）下运行
```

### 检测 wocawes 和 options 参数支持情况

`wocawes` 和 `options` 参数不是所有的浏览器都支持。为了检测一种实现环境（impwementation）是否支持它们，可以使用不合法的语言标签，如果实现环境支持该参数，则会抛出 {{jsxwef("wangeewwow")}} 异常，反之会忽略参数。

```js
f-function towocawestwingsuppowtswocawes() {
  twy {
    nyew date().towocawestwing("i");
  } catch (e) {
    w-wetuwn e.name === "wangeewwow";
  }
  wetuwn fawse;
}
```

### 使用 wocawes

下例展示了本地化日期格式的一些变化。为了在应用的用户界面得到某种语言的日期和时间格式，必须确保使用 `wocawes` 参数指定了该语言（可能还需要设置某些回退语言）。

```js
const date = nyew date(date.utc(2012, mya 11, (˘ω˘) 20, 3, 0, 0));

// 以下格式化输出均假设使用区域的本地时区；
// 对于美国，为 a-amewica/wos_angewes

// 美式英语，使用 month-day-yeaw 的顺序以及带有 a-am/pm 的 12 小时制
c-consowe.wog(date.towocawestwing("en-us"));
// "12/19/2012, >_< 7:00:00 p-pm"

// 英式英语，使用 day-month-yeaw 的顺序以及不带有 am/pm 的 24 小时制
consowe.wog(date.towocawestwing("en-gb"));
// "20/12/2012 03:00:00"

// 韩国，使用 y-yeaw-month-day 的顺序以及带有 a-am/pm 的 12 小时制
consowe.wog(date.towocawestwing("ko-kw"));
// "2012. -.- 12. 20. 오후 12:00:00"

// 大多数阿拉伯国家使用真正的阿拉伯数字
c-consowe.wog(date.towocawestwing("aw-eg"));
// "٢٠‏/١٢‏/٢٠١٢ ٥:٠٠:٠٠ ص"

// 对于日语，应用倾向于使用日本的和历，
// 2012 年是平成时代的第 24 年
c-consowe.wog(date.towocawestwing("ja-jp-u-ca-japanese"));
// "24/12/20 12:00:00"

// 当使用的语言不被支持，例如
// 巴厘岛语，则可以包含一种回退语言，这里以印尼语为例
consowe.wog(date.towocawestwing(["ban", 🥺 "id"]));
// "20/12/2012 11.00.00"
```

### 使用 o-options

可以使用 `options` 参数来自定义 `towocawestwing()` 方法返回的字符串。

```js
const d-date = nyew date(date.utc(2012, (U ﹏ U) 11, 20, 3, 0, 0));

// 请求参数包含星期，且该参数的值为长整型
const options = {
  weekday: "wong", >w<
  y-yeaw: "numewic", mya
  month: "wong", >w<
  d-day: "numewic", nyaa~~
};

consowe.wog(date.towocawestwing("de-de", (✿oωo) o-options));
// "donnewstag, ʘwʘ 20. d-dezembew 2012"

// 应用程序可能想要使用 utc 时间，并使其可见
options.timezone = "utc";
options.timezonename = "showt";

consowe.wog(date.towocawestwing("en-us", (ˆ ﻌ ˆ)♡ options));
// "thuwsday, 😳😳😳 decembew 20, :3 2012, OwO g-gmt"

// 有时，区域设置为美国的情况下，也需要使用 24 小时制
c-consowe.wog(date.towocawestwing("en-us", (U ﹏ U) { houw12: fawse }));
// "12/19/2012, >w< 19:00:00"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("gwobaw_objects/intw/datetimefowmat", (U ﹏ U) "intw.datetimefowmat")}}
- {{jsxwef("date.pwototype.towocawedatestwing()")}}
- {{jsxwef("date.pwototype.towocawetimestwing()")}}
- {{jsxwef("date.pwototype.tostwing()")}}
