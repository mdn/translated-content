---
title: String.prototype.localeCompare()
slug: Web/JavaScript/Reference/Global_Objects/String/localeCompare
---

{{JSRef}}

**`localeCompare()`** 方法返回一个数字来指示一个参考字符串是否在排序顺序前面或之后或与给定字符串相同。

新的 `locales` 和 `options` 参数能让应用程序定制函数的行为，即指定用来排序的语言。`locales` 和 `options` 参数完全取决于实现，在旧的实现中忽略这两个参数。

## 语法

```plain
referenceStr.localeCompare(compareString[, locales[, options]])
```

### 参数

查阅[浏览器支持](#浏览器支持)部分来确定哪些浏览器支持 `locales` 参数和 `options` 参数，[在功能检测中检查对 `locales`、`options` 参数的支持](检查浏览器对扩展参数的支持)。

- `compareString`
  - : 用来比较的字符串
- **`locales`**
  - : 可选。用来表示一种或多种语言或区域的一个符合 [BCP 47](https://tools.ietf.org/html/rfc5646) 标准的字符串或一个字符串数组。`locales` 参数的一般形式与解释，详情请参考 [Intl page](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation)。下列的 Unicode 扩展关键词是允许的：**`co`**为了某些地域多样的排序规则。可能的值包括： `"big5han"`, `"dict"`, `"direct"`, `"ducet"`, `"gb2312"`, `"phonebk"`, `"phonetic"`, `"pinyin"`, `"reformed"`, `"searchjl"`, `"stroke"`, `"trad"`, `"unihan"`。 `"standard"` 和`"search"` 这两个值是被忽略的; 它们被 `options` 的属性 `usage` 代替 (往下看)。**`kn`**指定数值排序是否应该被使用，像是这样 "1" < "2" < "10"。可能的值是 `"true"` 和 `"false"`。这个选项能被通过`options` 属性设置或通过 Unicode 扩展。假如两个都被设置了，则 `options` 优先。（*"*language*-*region\*-u-kn-true|false"）**`kf`** 指定是否优先对大写字母或小写字母排序。可能的值有 `"upper"`, `"lower"`, 或 `"false"` (use the locale's default)。这个选项能被通过 `options` 属性设置或通过 Unicode 扩展。假如两个都被设置了，则 `options` 优先。*（"*language*-*region*-u-kf-upper|lower|false"）*
- `options`

  - : 可选。支持下列的一些或全部属性的一个对象：

    - `localeMatcher`
      - : 地域匹配算法的使用。可能的值是 `"lookup"` 和 `"best fit"`; 默认的值是 `"best fit"`。更多相关的资料，请参考 [Intl page](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation).
    - `usage`
      - : 指定比较的目标是排序或者是搜索。可能的值是 `"sort"` 和 `"search"`；默认是 `"sort"`.
    - `sensitivity`

      - : 指定排序程序的敏感度（Which differences in the strings should lead to non-zero result values.）可能的有：

        - `"base"`: 只有不同的字母字符串比较是不相等的。举个例子：`a ≠ b`, `a = á`, `a = A`.
        - `"accent"`: 只有不同的字母或读音比较是不相等的。举个例子：`a ≠ b`, `a ≠ á`, `a = A`.
        - `"case"`: 只有不同的字母或大小写比较是不相等的。举个例子：`a ≠ b`, `a = á`, `a ≠ A`.
        - `"variant"`: 不同的字母或读音及其它有区别的标志或大小写都是不相等的，还有其它的差异可能也会考虑到。举个例子：`a ≠ b`, `a ≠ á`, `a ≠ A`.

        The default is `"variant"` for usage `"sort"`; it's locale dependent for usage `"search"`.

    - `ignorePunctuation`
      - : 指定是否忽略标点。可能的值是 `true` and `false`; 默认为 `false`.
    - `numeric`
      - : 是否指定使用数字排序，像这样 "1" < "2" < "10"。可能的值是 `true` 和 `false`；默认为 `false`。这个选项能被通过`options` 属性设置或通过 Unicode 扩展。假如两个都被设置了，则 `options` 优先。实现不用必须支持这个属性。
    - `caseFirst`
      - : 指定大小写有限排序。可能的值有 `"upper"`、`"lower"` 或 `"false"` (use the locale's default); 默认为 `"false"`. 这个选项能被通过 `options` 属性设置或通过 Unicode 扩展。假如两个都被设置了，则 `options` 优先。实现不用必须支持这个属性。

### **返回值**

如果引用字符存在于比较字符之前则为**负数**; 如果引用字符存在于比较字符之后则为**正数**; 相等的时候返回 **0** .

{{page('/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Collator', 'Parameters')}}

## 描述

返回一个数字表示是否 **引用字符串** 在排序中位于 **比较字符串** 的前面，后面，或者二者相同。

- 当 **引用字符串** 在 **比较字符串** 前面时返回 -1
- 当 **引用字符串** 在 **比较字符串** 后面时返回 1
- 相同位置时返回 0

**切勿依赖于 -1 或 1 这样特定的返回值。**不同浏览器之间（以及不同浏览器版本之间）返回的正负数的值各有不同，因为 W3C 规范中只要求返回值是正值和负值，而没有规定具体的值。一些浏览器可能返回 -2 或 2 或其他一些负的、正的值。

## 示例

### 使用 `localeCompare()`

```js
// The letter "a" is before "c" yielding a negative value
'a'.localeCompare('c');
// -2 or -1 (or some other negative value)

// Alphabetically the word "check" comes after "against" yielding a positive value
'check'.localeCompare('against');
// 2 or 1 (or some other positive value)

// "a" and "a" are equivalent yielding a neutral value of zero
'a'.localeCompare('a');
// 0
```

### 检查浏览器对扩展参数的支持

`locales` 和 `options` 参数还没有被所有浏览器所支持。检查是否被支持，使用 "i" 参数 (a requirement that illegal language tags are rejected) 判断是否有异常 {{jsxref("RangeError")}} 抛出：

```js
function localeCompareSupportsLocales() {
  try {
    'foo'.localeCompare​('bar', 'i');
  } catch (e) {
    return e​.name === 'RangeError';
  }
  return false;
}
```

### 使用 `locales` 参数

在不同的语言下 `localeCompare()` 所提供的结果是不一致的。为了能让用户得到正确的比较值，通过使用 `locales` 参数来提供要比较的语言 (and possibly some fallback languages) :

```js
console.log('ä'.localeCompare('z', 'de')); // a negative value: in German, ä sorts with a
console.log('ä'.localeCompare('z', 'sv')); // a positive value: in Swedish, ä sorts after z
```

### 使用 `options` 参数

`localeCompare()` 所提供的结果可以通过 `options` 参数来制定：

```js
// in German, ä has a as the base letter
console.log('ä'.localeCompare('a', 'de', { sensitivity: 'base' })); // 0

// in Swedish, ä and a are separate base letters
console.log('ä'.localeCompare('a', 'sv', { sensitivity: 'base' })); // a positive value
```

## 性能相关

当比较大量字符串时，比如比较大量数组时，最好创建一个 {{jsxref("Global_Objects/Collator", "Intl.Collator")}} 对象并使用 {{jsxref("Collator.prototype.compare", "compare")}} 属性所提供的函数。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Global_Objects/Collator", "Intl.Collator")}}
