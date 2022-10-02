---
title: Intl.DateTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
---

{{JSRef}}

**`Intl.DateTimeFormat`** 是根据语言来格式化日期和时间的对象的构造器。

{{EmbedInteractiveExample("pages/js/intl-datetimeformat.html")}}

## 语法

```plain
new Intl.DateTimeFormat([locales[, options]])
Intl.DateTimeFormat.call(this[, locales[, options]])
```

### 参数

- `locales`

  - : 可选。缩写语言代码 (BCP 47 language tag，例如:cmn-Hans-CN) 的字符串或者这些字符串组成的数组。关于参数 locales 的一般形式和解释请参见{{jsxref("Global_Objects/Intl", "Intl page", "#Locale_identification_and_negotiation", 1)}}. 下面的这些 Unicode 扩展键也是被允许的：

    译者注：下面这两种扩展的使用方式是 language\[-scripts]\[-region]-u-nu-\* 和 language\[-scripts]\[-region]-u-ca-\* ,例如:zh-u-nu-hanidec(表示中文十进制数字) 和 zh-u-ca-chinese(表示中国日历，比如壬辰年冬月 8 日) ,也可以 nu 和 ca 组合使用 比如 使用 zh-u-ca-chinese-nu-hanidec 格式化 Date.now() 的返回值类似于"丙申年冬月九日"

    - `nu`
      - : 编号系统。可能的值包括：`"arab"`, `"arabext"`, `"bali"`, `"beng"`, `"deva"`, `"fullwide"`, `"gujr"`, `"guru"`, `"hanidec"`, `"khmr"`, `"knda"`, `"laoo"`, `"latn"`, `"limb"`, `"mlym"`, `"mong"`, `"mymr"`, `"orya"`, `"tamldec"`, `"telu"`, `"thai"`, `"tibt"`.
    - `ca`
      - : 日历。可能的值包括：`"buddhist"`, `"chinese"`, `"coptic"`, `"ethioaa"`, `"ethiopic"`, `"gregory"`, `"hebrew"`, `"indian"`, `"islamic"`, `"islamicc"`, `"iso8601"`, `"japanese"`, `"persian"`, `"roc"`.

- `options`

  - : 可选。包含一些或所有的下面属性的类：

    - `localeMatcher`
      - : 使用的 local 的匹配算法。可能的值有"lookup"和"best fit"; 默认值是 `"best fit"`. 有关此选项的信息，请参见{{jsxref("Global_Objects/Intl", "Intl page", "#Locale_negotiation", 1)}}.
    - `timeZone`
      - : 使用的时区。这唯一的值实现必须被标准世界时间 (UTC) 所识别。默认值是运行时的默认时区。[IANA time zone database](https://www.iana.org/time-zones)中的时区名称可能会被识别，例如`"Asia/Shanghai"`, `"Asia/Kolkata"`, `"America/New_York"`.
    - `hour12`
      - : 是否使用 12 小时时间制 (而不是 24 小时的时间). 可能的值是`true` 或 `false`; 默认值是根据 locale 来自动决定的 (译者注：中国地区的默认值为 true).
    - `formatMatcher`
      - : `format` 的匹配算法。可能的值有"basic"和"best fit";默认值是"best fit".有关此属性使用的信息，参见以下段落。日期时间插件被格式化输出时可以使用的属性集合描述。实现需要支持是以下子集中的其中一个 (译者注：当 weekday,year 等这些属性一个也不使用的时候，在 cmn-Hans-CN 中相当于使用集合 year, month, day, hour, minute, second 并且它们的值都是 numeric)：

        - `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
        - `weekday`, `year`, `month`, `day`
        - `year`, `month`, `day`
        - `year`, `month`
        - `month`, `day`
        - `hour`, `minute`, `second`
        - `hour`, `minute`

        实现可能支持其他的子集，并通过对所有可用的子集对比找到最匹配的子集。通过 formatMatcher 属性可以设置两种算法用于对比和选择子集：[完全匹配`"basic"算法`](http://www.ecma-international.org/ecma-402/1.0/#BasicFormatMatcher) 和 一种依赖于“best fit”算法的实现。

        - `weekday`
          - : 工作日的展现方式：可能的值有 `"narrow"`, `"short"`, `"long"`
        - `era`
          - : 纪元的展现方式。可能的值有 `"narrow"`, `"short"`, `"long"`
        - `year`
          - : 年的展现方式：可能的值有 `"numeric"`, `"2-digit"`
        - `month`
          - : 月的展现方式：可能的值有 `"numeric"`, `"2-digit"`, `"narrow"`, `"short"`, `"long"`
        - `day`
          - : 日的展现方式：可能的值有 `"numeric"`, `"2-digit"`
        - `hour`
          - : 时的展现方式：可能的值有 `"numeric"`, `"2-digit"`
        - `minute`
          - : 分钟的展现方式：可能的值有 `"numeric"`, `"2-digit"`
        - `second`
          - : 秒的展现方式：可能的值有`"numeric"`, `"2-digit"`
        - `timeZoneName`
          - : 时区名称的展现方式：可能的值有 `"short"`, `"long"`

        每个日期时间组件属性的默认值都是 {{jsxref("undefined")}}，但是若所有的组件属性都是 {{jsxref("undefined")}}，那么 `year`、`month` 和 `day` 的值就都被认为是 `numeric`。

## 描述

### 属性

- {{jsxref("DateTimeFormat.prototype", "Intl.DateTimeFormat.prototype")}}
  - : 允许将属性添加到所有对象上。

### 方法

- {{jsxref("DateTimeFormat.supportedLocalesOf", "Intl.DateTimeFormat.supportedLocalesOf()")}}
  - : Returns an array containing those of the provided locales that are supported without having to fall back to the runtime's default locale.

## `DateTimeFormat` 实例

### 属性

`DateTimeFormat 实例集成以下原型的属性`:

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/prototype', 'Properties')}}

### 方法

`DateTimeFormat 实例集成以下原型的方法`:

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/prototype', 'Methods')}}

## 实例

### 使用 `DateTimeFormat`

不指定 locale 时，DateTimeFormat 使用默认的 locale 和 默认的 options

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

//参数未填时使用默认的 locale 和默认的时区
console.log(new Intl.DateTimeFormat().format(date));
//如果是在洛杉矶那么值为 → "12/19/2012"
```

### 使用`locales`

这个例子显示了本地化日期和时间格式的一些变化。为了获得用于您的应用程序的用户界面的语言格式，请确保使用 locales 参数确保指定语言（可能还有一些回退语言）：

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 下面是假定的所在时区
// 洛杉矶 (America/Los_Angeles for the US)

// 美式英语 (US English) 使用  month-day-year 格式
console.log(new Intl.DateTimeFormat('en-US').format(date));
// → "12/19/2012"

// 英式英语 (British English) 使用 day-month-year 格式
console.log(new Intl.DateTimeFormat('en-GB').format(date));
// → "20/12/2012"

// 韩国使用 year-month-day 格式
console.log(new Intl.DateTimeFormat('ko-KR').format(date));
// → "2012. 12. 20."

// 大部分阿拉伯国家使用阿拉伯字母 (real Arabic digits)
console.log(new Intl.DateTimeFormat('ar-EG').format(date));
// → "٢٠‏/١٢‏/٢٠١٢"

// 在日本，应用可能想要使用日本日历，
// 2012 是平成 24 年（平成是是日本天皇明仁的年号，由 1989 年 1 月 8 日起开始计算直至现在）
console.log(new Intl.DateTimeFormat('ja-JP-u-ca-japanese').format(date));
// → "平成 24/12/20"

// 当请求一个语言可能不支持，如巴厘 (ban)，若有备用的语言印尼语 (id)，
// 那么将使用印尼语 (id)
console.log(new Intl.DateTimeFormat(['ban', 'id']).format(date));
// → "20/12/2012"
```

### 使用`options`

可以使用 `options` 参数来自定义日期时间格式化方法返回的字符串。

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 请求参数 (options) 中包含参数星期 (weekday)，并且该参数的值为长类型 (long)
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(new Intl.DateTimeFormat('de-DE', options).format(date));
// → "Donnerstag, 20. Dezember 2012"

// 一个应用使用世界标准时间 (UTC)，并且 UTC 使用短名字 (short) 展示
options.timeZone = 'UTC';
options.timeZoneName = 'short'; // 若不写这一行那么仍然显示的是世界标准时间；但是 GMT 三个字母不会显示
console.log(new Intl.DateTimeFormat('en-US', options).format(date));
// → "Thursday, December 20, 2012, GMT"

// 有时你想变得更精确
options = {
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  timeZoneName: 'short'
};
console.log(new Intl.DateTimeFormat('en-AU', options).format(date));
// → "2:00:00 pm AEDT"

// 使用 24 小时制
options = {
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  hour12: false
};
console.log(date.toLocaleString('en-US', options));
// → "12/19/2012, 19:00:00"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl', 'See_also')}}
