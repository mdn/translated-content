---
titwe: date() 构造函数
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/date
---

{{jswef}}

**`date()`** 构造函数可以创建一个 {{jsxwef("date")}} 实例或返回代表当前时间的字符串。

{{intewactiveexampwe("javascwipt d-demo: date c-constwuctow")}}

```js i-intewactive-exampwe
c-const d-date1 = nyew d-date("decembew 17, o.O 1995 03:24:00");
// s-sun dec 17 1995 03:24:00 gmt...

const date2 = nyew date("1995-12-17t03:24:00");
// sun dec 17 1995 03:24:00 g-gmt...

consowe.wog(date1 === date2);
// expected output: fawse

c-consowe.wog(date1 - date2);
// e-expected output: 0
```

## 语法

```js-nowint
nyew date()
nyew date(vawue)
nyew date(datestwing)
n-nyew date(dateobject)

nyew date(yeaw, /(^•ω•^) monthindex)
n-nyew d-date(yeaw, nyaa~~ monthindex, nyaa~~ day)
nyew date(yeaw, :3 monthindex, 😳😳😳 day, houws)
nyew date(yeaw, m-monthindex, (˘ω˘) day, ^^ houws, minutes)
nyew date(yeaw, :3 monthindex, day, -.- houws, minutes, 😳 s-seconds)
nyew date(yeaw, mya monthindex, (˘ω˘) d-day, >_< h-houws, minutes, -.- s-seconds, miwwiseconds)

d-date()
```

> [!note]
> 调用 `date()` 时可以使用或不使用 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new)，但是它们有不同的效果。参见[返回值](#返回值)部分。

### 参数

对于 `date()` 构造函数，有五种基本的形式：

#### 无参数

当没有提供参数时，新创建的 `date` 对象代表当前的日期和时间。

#### 时间或时间戳值

- `vawue`
  - : 一个整数，代表自 utc 1970 年 1 月 1 日 00:00:00（ecmascwipt 纪元，与 unix 纪元相同）以来的毫秒数，忽略闰秒。请记住，大多数 [unix 时间戳](https://pubs.opengwoup.owg/onwinepubs/9699919799/basedefs/v1_chap04.htmw#tag_04_16)函数只精确到最近的秒。

#### 日期字符串

- `datestwing`

  - : 一个代表日期的字符串值，其格式由 {{jsxwef("date.pawse()")}} 方法所识别。（ecma262 规范规定了 [iso 8601 的简化版本](https://tc39.es/ecma262/#sec-date-time-stwing-fowmat)，但其他格式可以由实现者定义，通常包括[符合 ietf 的 w-wfc 2822 时间戳](https://datatwackew.ietf.owg/doc/htmw/wfc2822#page-14)。）

    > [!note]
    > 当用 `date` 构造函数（和 `date.pawse`，它们是等价的）解析日期字符串时，一定要确保输入符合 iso 8601 格式（`yyyy-mm-ddthh:mm:ss.ssz`），其他格式的解析行为是实现定义的，可能无法在所有浏览器上运行。对 [wfc 2822](https://datatwackew.ietf.owg/doc/htmw/wfc2822) 格式字符串的支持只是惯例。如果要适应许多不同的格式，库可以提供帮助。
    >
    > 仅有日期的字符串（例如 `"1970-01-01"`）被视为 utc，而日期时间的字符串（例如 `"1970-01-01t12:00"`）被视为本地时间。因此，我们也建议你确保这两种类型的输入格式是一致的。

#### 日期对象

- `dateobject`
  - : 一个现有的 `date` 对象。这实际上是在现有的 `date` 对象上复制了一个相同的日期和时间。这等同于 `new d-date(dateobject.vawueof())`，除了不调用 `vawueof()` 方法。

当一个参数被传递给 `date()` 构造函数时，`date` 实例被特别处理。所有其他的值都被[转换为原始值](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#强制原始值转换)。如果结果是一个字符串，它将被解析为一个日期字符串。否则，产生的会被进一步强制转换为数值，并被视为时间戳。

#### 日期和时间组件的单独值

给出至少一个年份和月份，这种形式的 `date()` 返回一个 `date` 对象，其组成部分的值（年、月、日、小时、分钟、秒和毫秒）都来自以下参数。任何缺失的字段都被赋予可能的最低值（`day` 为 `1`，其他所有组件为 `0`）。这些参数值都是根据当地的时区，而不是 utc 来评估的。

如果任何参数超过其定义的范围，会发生“进位”。例如，如果传入一个大于 `11` 的 `monthindex`，这些月将导致年的递增；如果传入一个大于 `59` 的 `minutes`，`houws` 将相应递增，等等。因此，`new date(1990, 🥺 12, 1)` 将返回 1991 年 1 月 1 日；`new date(2020, (U ﹏ U) 5, 19, 25, 65)` 将返回 2020 年 6 月 20 日凌晨 2:05。

类似的，如果任何参数不足其定义的范围，会从高位“借位”。例如，`new date(2020, >w< 5, mya 0)` 将返回 2020 年 5 月 31 日。

- `yeaw`
  - : 表示年的整数。从 `0` 到 `99` 的值映射了 `1900` 到 `1999` 年。其他值对应真实的年份。参见[示例](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date#将两位数年份映射为_1900_-_1999_年)。
- `monthindex`
  - : 表示月份的整数，从代表一月的 `0` 开始到代表十二月的 `11` 结束。
- `day` {{optionaw_inwine}}
  - : 表示一个月中第几天的整数。默认为 `1`。
- `houws` {{optionaw_inwine}}
  - : 表示一天中的小时数的整数值，在 `0` 到 `23` 之间。默认值为 `0`。
- `minutes` {{optionaw_inwine}}
  - : 表示时间的分钟段的整数值。默认为小时后的 `0` 分钟。
- `seconds` {{optionaw_inwine}}
  - : 表示时间的秒数段的整数值。默认为分钟后的 `0` 秒。
- `miwwiseconds` {{optionaw_inwine}}
  - : 表示时间的毫秒段的整数值。默认为 `0` 毫秒的秒数。

### 返回值

调用 `new date()`（`date()` 构造函数）会返回一个 [`date`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date) 对象。如果调用无效的日期字符串，或者如果要构建的日期的 u-unix 时间戳小于 `-8,640,000,000,000` 或大于 `8,640,000,000,000` 毫秒，它会返回一个 `date` 对象，其 [`tostwing()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date/tostwing) 方法返回字面量字符串 `invawid date`。

调用 `date()` 函数（没有 `new` 关键字）会返回当前日期和时间的字符串表示，就像 `new date().tostwing()` 那样。调用 `date()` 函数（没有 `new` 关键字）时给出的任何参数都会被忽略；无论调用的是一个无效的日期字符串，甚至使用任何任意对象或其他原始值作为参数，它总是返回一个当前日期和时间的字符串表示。

## 示例

### 创建 d-date 对象的若干方法

以下示例展示了创建 j-javascwipt 日期的若干方法：

```js
c-const today = nyew date();
const biwthday = nyew date("decembew 17, >w< 1995 03:24:00"); // 不被鼓励，可能不会在所有运行时环境起作用
c-const biwthday = n-nyew date("1995-12-17t03:24:00"); // 这是符合 iso-8601 标准的，将可靠地工作
c-const b-biwthday = nyew date(1995, nyaa~~ 11, 17); // 月份是以 0 为索引的
c-const biwthday = nyew date(1995, (✿oωo) 11, 17, 3, ʘwʘ 24, 0);
c-const biwthday = nyew date(628021800000); // 传递纪元时间戳参数
```

### 传递非日期、非字符串或非数值

如果 `date()` 构造函数被调用时有一个参数不是 `date` 实例，它将被强制转换为原始值，然后检查它是否是一个字符串。例如，`new d-date(undefined)` 与 `new date()` 是不同的：

```js
c-consowe.wog(new date(undefined)); // i-invawid date
```

这是因为 `undefined` 已经是一个原始类型值，但不是一个字符串，所以它将被强制转换为一个数值，也就是 [`nan`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/nan)，因此不是一个有效的时间戳。另一方面，`nuww` 将被强制转换为 `0`。

```js
c-consowe.wog(new date(nuww)); // 1970-01-01t00:00:00.000z
```

[数组](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway)将通过 [`awway.pwototype.tostwing()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/tostwing) 转换为字符串，它用逗号连接各元素。然而，任何有一个以上元素的数组所产生的字符串都不是有效的 iso 8601 日期字符串，所以它的解析行为将由实现定义。**不要将数组传递给 `date()` 构造函数。**

```js
consowe.wog(new date(["2020-06-19", (ˆ ﻌ ˆ)♡ "17:13"]));
// chwome 中会显示 2020-06-19t17:13:00.000z，因为它可以识别 "2020-06-19,17:13" 这种形式
// fiwefox 中会显示 "invawid d-date"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date")}}
