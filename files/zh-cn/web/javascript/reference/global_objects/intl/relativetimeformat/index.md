---
title: Intl.RelativeTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat
---

{{JSRef}}

**`Intl.RelativeTimeFormat`**对象启用本地化的相对时间格式。

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat.html")}}

## 句法

```plain
new Intl.RelativeTimeFormat([locales[, options]])
```

### 参数

- `locales`
  - : 可选的。带有 BCP 47 语言标记的字符串，或此类字符串的数组。有关参数的一般形式和解释`locales`,请参阅{{jsxref("Global_Objects/Intl","Intl page","＃Locale_identification_and_negotiation",1)}}。
- `options`

  - : 可选的。具有以下部分或全部属性的对象：

    - `localeMatcher`
      要使用的区域设置匹配算法。可能的值是`"lookup"`和`"best fit"`; 默认是`"best fit"`。有关此选项的信息，请参阅[`Intl`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation)。
    - `numeric`
      输出消息的格式。可能的值是：

      - `"always"`(默认，例如，`1 day ago`),
      - 或`"auto"`(例如`yesterday`)。该`"auto"`值允许不必总是在输出中使用数值。

    - `style`
      国际化信息的长度。可能的值是：

      - `"long"`(默认，例如，`in 1 month`)
      - `"short"`(例如`in 1 mo.`),
      - 或`"narrow"`(例如`in 1 mo.`)。狭窄的风格可能类似于某些语言环境的短风格。

## 描述

### 属性

- {{jsxref("RelativeTimeFormat.prototype","Intl.RelativeTimeFormat.prototype")}}
  - : 允许向所有对象添加属性。

### 方法

- {{jsxref("RelativeTimeFormat.supportedLocalesOf","Intl.RelativeTimeFormat.supportedLocalesOf()")}}
  - : 返回一个数组，其中包含所支持的语言环境，而不必回退到运行时的默认语言环境。

## `RelativeTimeFormat` 实例

### 属性

`RelativeTimeFormat` 实例从其原型继承以下属性：

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat/prototype','Properties')}}

### 方法

`RelativeTimeFormat` 实例从其原型继承以下方法：

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat/prototype','Methods')}}

## 例子

### 基本`format`用法

以下示例显示如何使用英语创建相对时间格式化程序。

```js
//在语言环境中创建相对时间格式化程序
//显式传入默认值。
const rtf = new Intl.RelativeTimeFormat("en",{
    localeMatcher: "bestfit",//其他值："lookup"
    numeric: "always",//其他值："auto"
    style: "long",//其他值："short"或"narrow"
});

//使用负值 (-1) 格式化相对时间。
rtf.format(-1,"day");
//>"1 day ago"

//使用正值 (1) 格式化相对时间。
rtf.format(1,"day");
//>"in 1 day"
```

### 使用`auto`选项

如果`numeric:auto`选项被传递，它将生成字符串`yesterday`或`tomorrow`代替`1 day ago`或`in 1 day`。这允许不必总是在输出中使用数值。

```js
//在语言环境中创建相对时间格式化程序
//使用数字：传入"auto"选项值。
const rtf = new Intl.RelativeTimeFormat("en",{numeric: "auto"});

//使用负值 (-1) 格式化相对时间。
rtf.format(-1,"day");
//>"yesterday"

//使用正日单位 (1) 格式化相对时间。
rtf.format(1,"day");
//>"tomorrow"
```

### 运用 `formatToParts`

以下示例显示如何创建返回格式化部件的相对时间格式器

```js
const rtf = new Intl.RelativeTimeFormat("en",{numeric: "auto"});

//使用日期单位格式化相对时间。
rtf.formatToParts(-1,"day");
//> [{type: "literal",value: "yesterday"}]

rtf.formatToParts(100,"day");
//> [{type: "literal",value: "in"},
//> {type: "integer",value: "100",unit: "day"},
//> {type: "literal",value: "days"}]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The Intl.RelativeTimeFormat API](https://developers.google.com/web/updates/2018/10/intl-relativetimeformat)
