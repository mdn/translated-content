---
title: Intl.PluralRules
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules
---

{{JSRef}}

该 **`Intl.PluralRules`** 对象是用于启用多种敏感格式和多种语言规则的构造函数。

## 句法

```plain
new Intl.PluralRules([locales[, options]]) Intl.PluralRules.call(this[, locales[, options]])
```

### 参数>

- `locales`
  - : 可选的。一个带有 BCP 47 语言标签的字符串或这种字符串的数组。有关参数的一般形式和解释`locales`，请参阅{{jsxref("Intl", "Intl page", "#Locale_identification_and_negotiation", 1)}}。
- `options`

  - : 可选的，具有部分或全部以下属性的对象：

    - `localeMatcher`
      - : 要使用的语言环境匹配算法。可能的值是`"lookup"`和`"best fit"`; 默认是`"best fit"`。有关此选项的信息，请参阅{{jsxref("Global_Objects/Intl", "Intl page", "#Locale_negotiation", 1)}}。
    - `type`

      - : 要使用的类型。可能的值是：

        - `"cardinal"`对于基数（指的是事物的数量）。这是默认值。
        - `"ordinal"` 对于序号（指的是事物的排序或排名，例如英文中的“1st”，“2nd”，“3rd”）。

## 描述

### 属性

- {{jsxref("PluralRules.prototype", "Intl.PluralRules.prototype")}}
  - : 允许为所有对象添加属性。

### 方法

- {{jsxref("PluralRules.supportedLocalesOf", "Intl.PluralRules.supportedLocalesOf()")}}
  - : 返回一个数组，其中包含提供的语言环境的支持，而不必回退到运行时的默认语言环境。

## `PluralRules` 实例

### 属性

`PluralRules` 实例从其原型继承了以下属性：

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules/prototype', 'Properties')}}

### 方法>

`PluralRules` 实例从它们的原型继承了以下方法：

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules/prototype', 'Methods')}}

## 例子

### 基本用法

在没有指定语言环境的基本使用中，返回默认语言环境中的格式化字符串和默认选项。这有助于区分单数和复数形式，例如“dog”和“dogs”。

```js
var pr = new Intl.PluralRules();

pr.select(0);
// → 'other' if in US English locale

pr.select(1);
// → 'one' if in US English locale

pr.select(2);
// → 'other' if in US English locale
```

### 运用 `locales`

这个例子展示了局部复数规则的一些变化。为了获得应用程序用户界面中使用的语言格式，请确保使用`locales`参数指定该语言（可能还有一些备用语言）>

```js
// Arabic has different plural rules

new Intl.PluralRules('ar-EG').select(0);
// → 'zero'
new Intl.PluralRules('ar-EG').select(1);
// → 'one'
new Intl.PluralRules('ar-EG').select(2);
// → 'two'
new Intl.PluralRules('ar-EG').select(6);
// → 'few'
new Intl.PluralRules('ar-EG').select(18);
// → 'many'
```

### 运用

可以查询查询结果使用>`options`参数进行自定义，该参数具有一个`type`您可以设置的属性`ordinal`。这对计算序数指标很有用，例如“第一”，“第二”，“第三”，“第四”，“42”等。

```js
var pr = new Intl.PluralRules('en-US', { type: 'ordinal' });

pr.select(0);
// → 'other'
pr.select(1);
// → 'one'
pr.select(2);
// → 'two'
pr.select(3);
// → 'few'
pr.select(4);
// → 'other'
pr.select(42);
// → 'two'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 也可以看看

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl', 'See_also')}}
