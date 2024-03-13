---
title: String.prototype.localeCompare()
slug: Web/JavaScript/Reference/Global_Objects/String/localeCompare
---

{{JSRef}}

**`localeCompare()`** 方法返回一个数字，表示参考字符串在排序顺序中是在给定字符串之前、之后还是与之相同。在支持 [`Intl.Collator` API](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) 的实现中，该方法仅是调用了 `Intl.Collator` 方法。

当比较大量字符串时，例如对大型数组进行排序，最好创建一个 {{jsxref("Intl.Collator")}} 对象，并使用其 {{jsxref("Intl/Collator/compare", "compare()")}} 方法提供的函数。

{{EmbedInteractiveExample("pages/js/string-localecompare.html")}}

## 语法

```js-nolint
localeCompare(compareString)
localeCompare(compareString, locales)
localeCompare(compareString, locales, options)
```

### 参数

`locales` 和 `options` 参数可以自定义函数的行为，并让应用程序指定应使用哪种语言的格式约定。

在支持 [`Intl.Collator` API](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) 的实现中，这些参数与 [`Intl.Collator()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) 构造函数的参数完全对应。而对于不支持 `Intl.Collator` 的实现，应忽略这两个参数，使得返回的比较结果完全依赖于实现——只要求其保持*一致*。

- `compareString`
  - 与 `referenceStr` 进行比较的字符串。所有值都会[被强制转换为字符串](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#字符串强制转换)，因此省略该参数或传入 `undefined` 会导致 `localeCompare()` 与字符串 `"undefined"` 进行比较，这通常不是你想要的。
- `locales` {{optional_inline}}

  - : 表示缩写语言代码（BCP 47 language tag）的字符串，或由此类字符串组成的数组。对应于 `Intl.Collator()` 构造函数的 [`locales`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#locales) 参数。

    在不支持 `Intl.Collator` 的实现中，该参数会被忽略，并且通常会使用主机的区域设置。

- `options` {{optional_inline}}

  - : 一个调整输出格式的对象。对应于 `Intl.Collator()` 构造函数的 [`options`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#参数) 参数。

    在不支持 `Intl.Collator` 的实现中，该参数会被忽略。

参见 [`Intl.Collator()` 构造函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator)以详细了解 `locales` 和 `options` 参数以及如何使用它们。

### 返回值

如果引用字符串（`referenceStr`）存在于比较字符串（`compareString`）之前则为**负数**；如果引用字符串存在于比较字符串之后则为**正数**；相等的时候返回 `0`。

在支持 `Intl.Collator` 的实现中，此方法等价于 `new Intl.Collator(locales, options).compare(referenceStr, compareString)`。

## 描述

返回一个数字表示 `referenceStr` 在排序中是否位于 `compareString` 的前面、后面或二者相同。

- 当 `referenceStr` 在 `compareString` 前面时返回负数
- 当 `referenceStr` 在 `compareString` 后面时返回正数
- 当两者相等时返回 `0`

> **警告：** 切勿依赖于 `-1` 或 `1` 这样特定的返回值。
>
> 不同浏览器之间（以及不同浏览器版本之间）返回的正负数的值各有不同，因为 W3C 规范中只要求返回值是正值和负值，而没有规定具体的值。一些浏览器可能返回 `-2` 或 `2` 或一些其他的负、正值。

## 示例

### 使用 localeCompare()

```js
// 字母 "a" 在 "c" 之前，产生负值
"a".localeCompare("c"); // -2 or -1 (or some other negative value)

// 按字母顺序，"check" 一词出现在 "against" 之后，产生正值
"check".localeCompare("against"); // 2 or 1 (or some other positive value)

// "a" 和 "a" 相等，产生中性值 0
"a".localeCompare("a"); // 0
```

### 对数组进行排序

`localeCompare()` 可以对数组进行大小写不敏感的排序。

```js
const items = ["réservé", "Premier", "Cliché", "communiqué", "café", "Adieu"];
items.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']
```

### 检查浏览器对扩展参数的支持

`locales` 和 `options` 参数还没有被所有浏览器支持。检查是否被支持，可以使用 `"i"` 参数（使用错误的语言代码会抛出异常）判断是否抛出 {{jsxref("RangeError")}} 异常：

```js
function localeCompareSupportsLocales() {
  try {
    "foo".localeCompare("bar", "i");
  } catch (e) {
    return e.name === "RangeError";
  }
  return false;
}
```

### 使用 locales

在不同的语言下 `localeCompare()` 所提供的结果是不一致的。为了能让用户得到正确的比较值，通过使用 `locales` 参数来提供要比较的语言（可能还需要设置某些回退语言）：

```js
console.log("ä".localeCompare("z", "de")); // 负值：在德语中，ä 排在 z 之前
console.log("ä".localeCompare("z", "sv")); // 正值：在瑞典语中，ä 排在 z 之后
```

### 使用 options

`localeCompare()` 所提供的结果可以通过 `options` 参数自定义：

```js
// 在德语中，ä 以 a 为基础字母
console.log("ä".localeCompare("a", "de", { sensitivity: "base" })); // 0

// 在瑞典语中，ä 与 a 有着不同的基础字母
console.log("ä".localeCompare("a", "sv", { sensitivity: "base" })); // a positive value
```

### 数字排序

```js
// 默认情况下，"2" > "10"
console.log("2".localeCompare("10")); // 1

// 使用 options：
console.log("2".localeCompare("10", undefined, { numeric: true })); // -1

// 使用区域代码：
console.log("2".localeCompare("10", "en-u-kn-true")); // -1
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`Intl.Collator`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator)
