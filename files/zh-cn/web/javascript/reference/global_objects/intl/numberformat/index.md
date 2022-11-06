---
title: Intl.NumberFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
---

{{JSRef}}

**`Intl.NumberFormat`** 是对语言敏感的格式化数字类的构造器类。

## 语法

```plain
new Intl.NumberFormat([locales[, options]])
Intl.NumberFormat.call(this[, locales[, options]])
```

### 参数

- `locales`

  - : 可选。缩写语言代码（BCP 47 language tag，例如：cmn-Hans-CN）的字符串或者这些字符串组成的数组。关于参数 locales 的一般形式和解释请参见[Intl page](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation). 下面的这些 Unicode 扩展键也是被允许的：

    译者注：下面扩展的使用方式是 language\[-scripts]\[-region]-u-nu-\*,例如:zh-u-nu-hanidec(表示中文十进制数字)

    - `nu`
      - : 要使用的编号系统。可能的值有：`"arab"`, `"arabext"`, `"bali"`, `"beng"`, `"deva"`, `"fullwide"`, `"gujr"`, `"guru"`, `"hanidec"(中文十进制数字)`, `"khmr"`, `"knda"`, `"laoo"`, `"latn"`, `"limb"`, `"mlym"`, `"mong"`, `"mymr"`, `"orya"`, `"tamldec"`, `"telu"`, `"thai"`, `"tibt"`.

- `options`

  - : 可选。包含一些或所有的下面属性的类：

    - `“decimal”` 用于纯数字格式；
    - `“currency”` 用于货币格式；
    - `“percent”` 用于百分比格式;
    - `“unit”` {{Experimental_inline}} 用于单位格式

    - `localeMatcher`
      - : 使用的 local 的匹配算法。可能的值有 `"lookup` 和 `"best fit"`; 默认值是 `"best fit"`. 有关此选项更多的信息，请参见 {{jsxref("Global_Objects/Intl", "Intl page", "#Locale_negotiation", 1)}}.
    - `style`
      - : 要使用的格式样式，默认为“decimal”。
    - `numberingSystem` {{Experimental_inline}}
      - : 编号系统。可能的值包括："`arab`"，"`arabext`"，" `bali`"，"`beng`"，"`deva`"，"`fullwide`"，" `gujr`"，"`guru`"，"`hanidec`"，"`khmr`"，" `knda`"，"`laoo`", "`latn`"，"`limb`"，"`mlym`"，" `mong`"，"`mymr`"，"`orya`"，"`tamldec`"，" `telu`"，"`thai`"，"`tibt`"。
    - `unit`{{Experimental_inline}}
      - : `unit` 格式中使用的单位，可能的值为在 [UTS #35, Part 2, Section 6](http://unicode.org/reports/tr35/tr35-general.html#Unit_Elements) 定义的核心单元标识符。已从[完整列表](https://github.com/unicode-org/cldr/blob/master/common/validity/unit.xml)中选择了一个[单位子集](https://tc39.es/proposal-unified-intl-numberformat/section6/locales-currencies-tz_proposed_out.html#sec-issanctionedsimpleunitidentifier)以用于 ECMAScript。可以将成对的简单单位与 `“ -per-”` 连接以组成一个复合单位。没有默认值；如果 `style` 为 `“unit”`，必须提供`unit` 属性。
    - `unitDisplay`{{Experimental_inline}}
      - : `unit` 格式化中使用的单位格式化样式，默认值为“short”。`“long”` (e.g., `16 litres`)、`“short“` (e.g., `16 l`)、`”narrow“` (e.g., `16l`)
    - `currency`
      - : 在货币格式化中使用的货币符号。可能的值是*ISO*的货币代码 (the ISO 4217 currency codes,) 例如 `"USD"` 表示美元，`"EUR"` 表示欧元，或者 `"CNY"是人民币` — 更多请参考 [Current currency & funds code list](http://www.currency-iso.org/en/home/tables/table-a1.html)。没有默认值，如果 `style` 是 `“currency”`，必须提 `currency` 属性。
    - `currencyDisplay`
      - : 如何在货币格式化中显示货币。可能的值有 `"symbol"` 表示使用本地化的货币符号，例如 €, `"code"` 表示使用国际标准组织货币代码，`"name"` 表示使用本地化的货币名称，如 `"dollar"`; 默认值是 `"symbol"`.
    - `useGrouping`
      - : 是否使用分组分隔符，如千位分隔符或千/万/亿分隔符。可能的值是 true 和 false，默认值是 true。

    下面的属性分为两组：`minimumintegerdigits`，`minimumfractiondigits`，`maximumfractiondigits` 作为一组，`minimumsignificantdigits` 和 `maximumsignificantdigits` 作为一组。如果定义了第二组中的任意一个属性，则忽略第一组的设置。

    - `minimumIntegerDigits`
      - : 使用的整数数字的最小数目。可能的值是从 1 到 21，默认值是 1.
    - `minimumFractionDigits`
      - : 使用的小数位数的最小数目。可能的值是从 0 到 20；默认为普通的数字和百分比格式为 0；默认为货币格式是由 [ISO 4217 currency code list](http://www.currency-iso.org/en/home/tables/table-a1.html) 提供 (如果列表中没有提供则值为 2)。
    - `maximumFractionDigits`
      - : 使用的小数位数的最大数目。可能的值是从 0 到 20；纯数字格式的默认值是`minimumfractiondigits` 和 3 中大的那一个；货币格式默认值是`minimumfractiondigits` 和 [ISO 4217 currency code list](http://www.currency-iso.org/en/home/tables/table-a1.html) 中大的那一个 (如果列表中没有提供则值为 2)；百分比格式默认值是 `minimumfractiondigits` 和 0 中大的那一个。
    - `minimumSignificantDigits`
      - : 使用的有效数字的最小数目。可能的值是从 1 到 21；默认值是 1。
    - `maximumSignificantDigits`
      - : 使用的有效数字的最大数量。可能的值是从 1 到 21；默认是 21.
    - `notation`{{Experimental_inline}}

      - : 该号码应显示的格式，默认为 `“standard”`。

        - "`standard`" 纯数字格式；
        - "`scientific`" 返回格式化数字的大小顺序；
        - "`engineering`" 当被三除时返回十的指数
        - "`compact`" 代表指数的字符串，默认使用 `“short”` 格式

          - "`compactDisplay`" 仅在 `notation` 为 `“compact”` 时使用，采用 `“short”`（默认）或“`long`”

## 描述

### 属性

- {{jsxref("NumberFormat.prototype", "Intl.NumberFormat.prototype")}}
  - : 允许将属性添加到所有对象上。

### 方法

- {{jsxref("NumberFormat.supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf()")}}
  - : 返回一个数组包含的那些被提供的可以被支持的 locales，运行时的默认的 locale 不会出现在该数组中。

## `NumberFormat` 实例

### 属性

`NumberFormat` 实例继承一下原型的属性：

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/prototype', 'Properties')}}

### 方法

`NumberFormat` 实例继承一下原型的方法：

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/prototype', 'Methods')}}

## 例子

### 基本用法

在不指定 locale 的基本用法中，一个使用默认 locale 和默认 options 的字符串被返回。

```js
var number = 3500;

console.log(new Intl.NumberFormat().format(number));
// 如果在美国英语地区 → '3,500'
```

### 使用`locales`

这个例子显示了一些本地化的数字格式的一些变化。为了获得用于您的应用程序的用户界面的语言格式，请确保设定了语言（可能还有一些回退语言）参数：

```js
var number = 123456.789;

// 德语使用逗号（,）作为小数点，使用句号（.）作为千位分隔符
console.log(new Intl.NumberFormat('de-DE').format(number));
// → 123.456,789

// 大多数阿拉伯语国家使用阿拉伯语数字
console.log(new Intl.NumberFormat('ar-EG').format(number));
// → ١٢٣٤٥٦٫٧٨٩

// India uses thousands/lakh/crore separators
console.log(new Intl.NumberFormat('en-IN').format(number));
// → 1,23,456.789

// 通过编号系统中的 nu 扩展键请求，例如：中文十进制数字
console.log(new Intl.NumberFormat('zh-Hans-CN-u-nu-hanidec').format(number));
// → 一二三,四五六.七八九

//当请求的语言不被支持，例如巴里，包含一个回滚语言印尼，这时候就会使用印尼语
console.log(new Intl.NumberFormat(['ban', 'id']).format(number));
// → 123.456,789
```

### 可用的选项

可用的选项参数，返回的值可以被设置成想要的形式：

```js
var number = 123456.789;

// 请求一个货币格式
console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));
// → 123.456,79 €

// the Japanese yen doesn't use a minor unit
console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(number));
// → ￥123,457

// 只显示三个有效数字
console.log(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number));
// → 1,23,000
```

### Using `notation`

```plain
console.log(new Intl.NumberFormat('en-US', { notation: "scientific" }).format(987654321));
// → 9.877E8

console.log(new Intl.NumberFormat('pt-PT', { notation: "scientific" }).format(987654321));
// → 9,877E8

console.log(new Intl.NumberFormat('en-GB', { notation: "engineering" }).format(987654321));
// → 987.654E6

console.log(new Intl.NumberFormat('de', { notation: "engineering" }).format(987654321));
// → 987,654E6

console.log(new Intl.NumberFormat('zh-CN', { notation: "compact" }).format(987654321));
// → 9.9亿

console.log(new Intl.NumberFormat('fr', { notation: "compact" , compactDisplay: "long" }).format(987654321));
// → 988 millions

console.log(new Intl.NumberFormat('en-GB', { notation: "compact" , compactDisplay: "short" }).format(987654321));
// → 988M
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl', 'See_also')}}
