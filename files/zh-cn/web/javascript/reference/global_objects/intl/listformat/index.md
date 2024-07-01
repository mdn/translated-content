---
title: Intl.ListFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat
---

{{JSRef}}

**`Intl.ListFormat`** 是一个语言相关的列表格式化构造器。

{{EmbedInteractiveExample("pages/js/intl-listformat.html")}}

## 语法

```plain
new Intl.ListFormat([locales[, options]])
```

### 参数

- `locales`
  - : 可选的.。符合 BCP 47 语言标注的字符串或字符串数组。`locales` 参数的一般形式和相关解释，请参阅 {{jsxref("Global_Objects/Intl", "Intl page", "#Locale_identification_and_negotiation", 1)}}.
- `options`

  - : 可选的。拥有下面所列属性中任意几个或全部的对象：

    - `localeMatcher`
      指定要使用的本地匹配算法。可选的值有`"lookup"` 和 `"best fit"`；默认情况下使用`"best fit"`。该参数的更多信息，请参考[`Intl` page](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation).
    - `type`
      消息输出的格式。可选的值有用于替代基于“且”关系列表的`"conjunction"` (默认值，例如： `A, B, and C`)，或者用于替代基于“或”关系列表的 `"disjunction"`(例如： `A, B, or C`)，以及用于替代带计量单位的值列表的`"unit"` (例如： `5 pounds, 12 ounces`).
    - `style`
      被格式化消息的长度。可选值有：`"long"` (默认值，例如：`A, B, and C`)、`"short"` 或者 `"narrow"` (例如：`A, B, C`)。当`style` 的值为`narrow` 时，type 属性的值只能取值`unit`。

## 描述

### 属性

- {{jsxref("ListFormat.prototype", "Intl.ListFormat.prototype")}}
  - : 允许增加一个属性到列表中的所有对象。

### 方法

- {{jsxref("ListFormat.supportedLocalesOf", "Intl.ListFormat.supportedLocalesOf()")}}
  - : 返回一个包含指定的被支持区域设置的数组，没有时使用运行环境默认区域设置

## 示例

### 使用 `format`

下面的例子展示了用英语语言怎么去创建一个列表格式化器。

```js
const list = ["Motorcycle", "Bus", "Car"];

console.log(
  new Intl.ListFormat("en-GB", { style: "long", type: "conjunction" }).format(
    list,
  ),
);
// > Motorcycle, Bus and Car

console.log(
  new Intl.ListFormat("en-GB", { style: "short", type: "disjunction" }).format(
    list,
  ),
);
// > Motorcycle, Bus or Car

console.log(
  new Intl.ListFormat("en-GB", { style: "narrow", type: "unit" }).format(list),
);
// > Motorcycle Bus Car
```

### 使用 `formatToParts`

下面的例子展示了如何创建一个返回被格式化部分的列表格式化器。

```js
const list = ["Motorcycle", "Bus", "Car"];
console.log(
  new Intl.ListFormat("en-GB", {
    style: "long",
    type: "conjunction",
  }).formatToParts(list),
);

// > [ { "type": "element", "value": "Motorcycle" }, { "type": "literal", "value": ", " }, { "type": "element", "value": "Bus" }, { "type": "literal", "value": ", and " }, { "type": "element", "value": "Car" } ];
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Intl")}}
- [A polyfill of `Intl.ListFormat` in FormatJS](https://formatjs.io/docs/polyfills/intl-listformat/)
