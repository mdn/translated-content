---
title: Intl.Collator
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator
---

{{JSRef}}

**`Intl.Collator`** 是用于语言敏感字符串比较的 collators 构造函数。

{{EmbedInteractiveExample("pages/js/intl-collator.html")}}

## 语法

```plain
new Intl.Collator([locales[, options]])
Intl.Collator.call(this[, locales[, options]])
```

### 参数

- `locales`

  - : 可选。缩写语言代码 (BCP 47 language tag，例如：cmn-Hans-CN) 的字符串或者这些字符串组成的数组。关于参数 locales 的一般形式和解释请参见{{jsxref("Global_Objects/Intl", "Intl page", "#Locale_identification_and_negotiation", 1)}}. 下面的这些 Unicode 扩展键也是被允许的：

    - `co`
      - : 某些区域设置的变体归类。可能的值包括：“big5han”，“dict”，“direct”，“ducet”，“gb2312”，“phonebk”，“phonetic”，“pinyin”，“reformed”，“searchjl”，“stroke” “，”unihan“。值“`standard`”和“`search`”被忽略; 它们被 options 属性用法替换（详见下文）。
    - `kn`
      - : 是否应使用数字对照，使得“1”<“2”<“10”。可能的值为“true”和“false”。此选项可以通过 options 属性或通过 Unicode 扩展 key 设置; 如果两者都提供，options 属性优先。
    - `kf`
      - : 首先排序大写或者小写。可能的值为“upper”，“lower”或“false”（使用区域设置的默认值）。此选项可以通过 options 属性或通过 Unicode 扩展 key 设置; 如果两者都提供，options 属性优先。

- `options`

  - : 可选。包含一些或所有的下面属性的对象：

    - `localeMatcher`
      - : 使用的 local 的匹配算法。可能的值有 "lookup" 和 "best fit"; 默认值是 `"best fit"`. 有关此选项的信息，请参见{{jsxref("Global_Objects/Intl", "Intl page", "#Locale_negotiation", 1)}}.
    - `usage`
      - : 比较是用于排序还是用于搜索匹配的字符串。可能的值为“sort”和“search”; 默认为“sort”。
    - `sensitivity`

      - : 字符串中的哪些差异应导致结果值为非零 (non-zero)。可能的值有：

        - `"base"`: 只有字母不同的字母比较不相等。例子：`a ≠ b`, `a = á`, `a = A`。
        - `"accent"`: 只有不同的基本字母或重音符号和其他变音符号的字符串比较为不相等。例如：`a ≠ b`, `a ≠ á`, `a = A`。
        - `"case"`: 只有不同的基本字母或大小写的字符串比较不相等。Examples: `a ≠ b`, `a = á`, `a ≠ A`。
        - `"variant"`: 字符串的字母，口音和其他变音符号、或不同大小写比较不相等。也可以考虑其他差异。例如： `a ≠ b`, `a ≠ á`, `a ≠ A`.

        `"variant"` 的默认值使用 `"sort"`；它的 locale 依赖于使用 `"search"`。

    - `ignore­Punctua­tion`
      - : 是否应忽略标点。可能的值为 true 和 false; 默认值为 false。
    - `numeric`
      - : 是否应使用数字对照，使得“1”<“2”<“10”。可能的值为“true”和“false”。默认值为“false” 。此选项可以通过 options 属性或通过 Unicode 扩展 key 设置; 如果两者都提供，options 属性优先。实现不需要支持此属性。
    - `caseFirst`
      - : 首先排序大写或者小写。可能的值为“upper”，“lower”或“false”（使用区域设置的默认值）。此选项可以通过 options 属性或通过 Unicode 扩展 key 设置; 如果两者都提供，options 属性优先。实现不需要支持此属性。

## 描述

`Intl.Collator` 类有一下属性和方法

### 属性

- {{jsxref("Collator.prototype", "Intl.Collator.prototype")}}
  - : 允许向所有对象添加属性。

### 方法

- {{jsxref("Collator.supportedLocalesOf", "Intl.Collator.supportedLocalesOf()")}}
  - : 返回包含所支持的所提供语言环境的数组的数组，而不必回退到运行时的默认语言环境。

## `Collator 实例`

### 属性

`Collator 实例从其原型继承以下属性：`

{{page('en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator/prototype', 'Properties')}}

### 方法

### Collator 实例从其原型继承以下方法：

{{page('en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator/prototype', 'Methods')}}

## 例子

### 基本用法

以下示例演示在另一个之前，之后或同级别发生的字符串的不同潜在结果：

```js
console.log(new Intl.Collator().compare('a', 'c')); // → a negative value
console.log(new Intl.Collator().compare('c', 'a')); // → a positive value
console.log(new Intl.Collator().compare('a', 'a')); // → 0
```

请注意，上述代码中显示的结果可能会因浏览器和浏览器版本而异。这是因为值是实现特定的。也就是说，规范仅需要前后值为负和正。

### 使用 `locales`

{{jsxref("Collator.prototype.compare()")}} 提供的结果在不同语言之间有所不同。为了获得用于您的应用程序的用户界面的语言格式，请确保设定了语言（可能还有一些回退语言）参数：

```js
// 德语中，ä 使用 a 的排序
console.log(new Intl.Collator('de').compare('ä', 'z'));
// → 一个负值

// 瑞典语中，ä 在 z 的后面
console.log(new Intl.Collator('sv').compare('ä', 'z'));
// → 一个正值
```

### 使用 `options`

{{jsxref("Collator.prototype.compare()")}} 提供的结果可以使用 options 参数自定义：

```js
// 德语中，ä 使用 a 作为基本字母
console.log(new Intl.Collator('de', { sensitivity: 'base' }).compare('ä', 'a'));
// → 0

// 瑞典语中，ä 和 a 是单独的基本字母
console.log(new Intl.Collator('sv', { sensitivity: 'base' }).compare('ä', 'a'));
// → 一个正值
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl', 'See_also')}}
