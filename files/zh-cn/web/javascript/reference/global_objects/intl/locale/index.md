---
title: Intl.Locale
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale
---

{{JSRef}}

**`Intl.Locale`** 对象是 Intl 对象的标准内置属性，用于表示 Unicode 区域标识。

{{EmbedInteractiveExample("pages/js/intl-locale.html")}}

## 描述

**`Intl.Locale`** 对象是为了更便捷地处理 Unicode 区域设置。Unicode 使用字符串作为区域识别标识。区域标识符由*语言标识符*和*扩展标记*组成。语言标识符是区域 (locale) 的核心，包含了语言、脚本和地域子标记 (region subtags)。有关区域设置的其他信息体现在可选的扩展标记中。扩展标记保存有关区域设置方面的信息，例如日历类型、时钟类型和编号系统类型。

传统上，Intl 接口像 Unicode 一样使用字符串来表示区域设置，这是一个简单而轻量且效果好的解决方案。但是，添加一个 Locale 类可以更容易地解析和操作语言、脚本、区域以及扩展标记。

## 构造函数

- {{jsxref("Locale/Locale", "Intl.Locale()")}}
  - : 实例化一个 `Locale` 对象。

## 实例属性

- [`Intl.Locale.prototype.baseName`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/baseName)
  - : Returns basic, core information about the `Locale` in the form of a substring of the complete data string.
- [`Intl.Locale.prototype.calendar`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar)
  - : Returns the part of the `Locale` that indicates the Locale's calendar era.
- [`Intl.Locale.prototype.caseFirst`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/caseFirst)
  - : Returns whether case is taken into account for the locale's collation rules.
- [`Intl.Locale.prototype.collation`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation)
  - : Returns the collation type for the `Locale`, which is used to order strings according to the locale's rules.
- [`Intl.Locale.prototype.hourCycle`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
  - : Returns the time keeping format convention used by the locale.
- [`Intl.Locale.prototype.language`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/language)
  - : Returns the language associated with the locale.
- [`Intl.Locale.prototype.numberingSystem`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem)
  - : Returns the numeral system used by the locale.
- [`Intl.Locale.prototype.numeric`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numeric)
  - : Returns whether the locale has special collation handling for numeric characters.
- [`Intl.Locale.prototype.region`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/region)
  - : Returns the region of the world (usually a country) associated with the locale.
- [`Intl.Locale.prototype.script`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/script)
  - : Returns the script used for writing the particular language used in the locale.

## 实例方法

- [`Intl.Locale.prototype.maximize()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/maximize)
  - : Gets the most likely values for the language, script, and region of the locale based on existing values.
- [`Intl.Locale.prototype.minimize()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/minimize)
  - : Gets the most likely values for the language, script, and region of the locale based on existing values.
- [`Intl.Locale.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/toString)
  - : Returns the Locale's full locale identifier string.

## 范例

### 基本使用

很简单，就是需要给{{jsxref("Locale/Locale", "Intl.Locale")}} 构造函数传入一个 locale 标识字符串作为参数：

```js
let us = new Intl.Locale("zh-Hans-CN");
```

### 使用配置实例化

构造函数支持传入 object 作为配置，object 中可包含多个配置属性。例如，设置 [`hourCycle`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle) 属性，用于设置您所需要的小时周期类型：

```js
let zh12hour = new Intl.Locale("zh-Hans-CN", { hourCycle: "h12" });
console.log(zh12hour.hourCycle); // Prints "h12"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- [The Intl.Locale Polyfill](https://github.com/zbraniecki/Intl.js/tree/intllocale)
