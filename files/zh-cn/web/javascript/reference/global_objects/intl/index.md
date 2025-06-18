---
title: Intl
slug: Web/JavaScript/Reference/Global_Objects/Intl
---

{{JSRef}}

**`Intl`** 对象是 ECMAScript 国际化 API 的一个命名空间，它提供了精确的字符串对比、数字格式化，和日期时间格式化。{{jsxref("Collator")}}，{{jsxref("NumberFormat")}} 和 {{jsxref("DateTimeFormat")}} 对象的构造函数是 `Intl` 对象的属性。本页文档内容包括了这些属性，以及国际化使用的构造器和其他语言的方法等常见的功能。

## 属性

- {{jsxref("Global_Objects/Collator", "Intl.Collator")}}
  - : collators 的构造函数，用于启用对语言敏感的字符串比较的对象。
- {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}
  - : 用于启用语言敏感的日期和时间格式的对象的构造函数。
- {{jsxref("Global_Objects/ListFormat", "Intl.ListFormat")}}
  - : Constructor for objects that enable language-sensitive list formatting.
- {{jsxref("Global_Objects/NumberFormat", "Intl.NumberFormat")}}
  - : 用于启用语言敏感数字格式的对象的构造函数。
- {{jsxref("Global_Objects/PluralRules", "Intl.PluralRules")}}
  - : 用于启用多种敏感格式和多种语言语言规则的对象的构造函数。
- {{jsxref("Global_Objects/RelativeTimeFormat", "Intl.RelativeTimeFormat")}}
  - : Constructor for objects that enable language-sensitive relative time formatting.

## 方法

- {{jsxref("Intl.getCanonicalLocales()")}}
  - : 返回规范区域名称（canonical locale name）。

## 语言区域识别和判定

国际化的构造函数和其他构造函数的几个语言敏感的方法（可参考下方的[参见](#参见)）一样，使用同样的模式来识别语言区域和确定使用哪一种语言格式：他们都接收 `locales` 和 `options` 参数，使用 `options.localeMatcher` 属性指定的一个算法来对比应用请求的和支持的语言区域，来确定使用哪一个语言区域。

### `locales` 参数

`locales` 参数必须是一个 [BCP 47 语言标记](https://tools.ietf.org/html/rfc5646)的字符串，或者是一个包括多个语言标记的数组。如果 `locales` 参数未提供或者是 undefined，便会使用运行时默认的 locale。

一个 BCP 47 语言标记代表了一种语言或者区域（两者没有很大的区别）。在其最常见的格式中，它以这样的顺序囊括了这些内容：语言代码，脚本代码，和国家代码，全部由连字符分隔开。例如：

- `"hi"`：印地语 (primary language)。
- `"de-AT"`: 在奥地利使用的德语 (primary language with country code)。
- `"zh-Hans-CN"`：在中国使用的简体中文 (primary language with script and country codes)。

在 BCP 47 中表示语言，脚本，国家（区域）和变体（少用）的语言子标记含义可以在[IANA 语言子标记注册](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) 中找到。

BCP 47 也支持扩展，其中一个和 JavaScript 国际化方法相关的是："u"（Unicode）扩展。它可以用于请求一个自定义区域特定行为的 {{jsxref("Collator")}}，{{jsxref("NumberFormat")}}，或者 {{jsxref("DateTimeFormat")}} 对象。例如：

- `"de-DE-u-co-phonebk"`：使用德语的电话簿排序变体，这会把元音变音扩展成字符对：ä → ae, ö → oe, ü → ue。
- `"th-TH-u-nu-thai"`：在数字格式中使用泰语的数值表示（๐, ๑, ๒, ๓, ๔, ๕, ๖, ๗, ๘, ๙）
- `"ja-JP-u-ca-japanese"`：在日期和时间格式化中使用日本的日历表示方式，所以 2013 会表示为平成 25。
- `"en-GB-u-ca-islamic"`: use British English with the Islamic (Hijri) calendar, where the Gregorian date 14 October, 2017 is the Hijri date 24 Muharram, 1439.

### 语言区域判定

`locales` 参数，在除去所有的 Unicode 扩展之后，会被转化成来自应用的优先请求。运行时拿它和可用的语言区域做对比然后选择出最合适的一个。有两种匹配算法：“查找”匹配遵循 [BCP 47](https://tools.ietf.org/html/rfc5646) 中指定的查找算法；“最佳命中”匹配器会让运行时至少提供一个语言区域，但合适请求的结果可能会比查找算法的要多。如果应用没有提供一个 locales 参数，或者运行时没有一个匹配请求的语言区域，那么会使用运行时默认的语言区域。匹配器可以使用 `options` 参数的一个属性来进行选择（见下方）。

如果选中的语言标记有一个 Unicode 扩展子字符串，这个扩展会用于自定义构造对象或者方法的行为。每一个构造函数或者方法仅支持 Unicode 扩展定义的 key 的一个子集，和依赖于语言标记的支持的值。例如，`“co”`这个 key（collation）只在 {{jsxref("Collator")}} 中支持，它的值“phonebk”只在德语中支持。

### `options` 参数

`options` 参数必须是一个对象，其属性值在不同的构造函数和方法中会有所变化。如果 `options` 参数未提供或者为 undefined，所有的属性值则使用默认的。

所有语言敏感的构造函数和方法都支持的一个属性是：`localeMatcher` 属性，它的值必须是字符串“lookup”或者“best fit”，用于选择上边描述的语言区域匹配算法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 介绍：[The ECMAScript Internationalization API](http://norbertlindenberg.com/2012/12/ecmascript-internationalization-api/index.html)
- 构造函数

  - {{jsxref("Collator", "Intl.Collator")}}
  - {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}
  - {{jsxref("ListFormat", "Intl.ListFormat")}}
  - {{jsxref("NumberFormat", "Intl.NumberFormat")}}
  - {{jsxref("PluralRules", "Intl.PluralRules")}}
  - {{jsxref("RelativeTimeFormat", "Intl.RelativeTimeFormat")}}

- 方法

  - {{jsxref("String.prototype.localeCompare()")}}
  - {{jsxref("Number.prototype.toLocaleString()")}}
  - {{jsxref("Date.prototype.toLocaleString()")}}
  - {{jsxref("Date.prototype.toLocaleDateString()")}}
  - {{jsxref("Date.prototype.toLocaleTimeString()")}}
