---
title: Intl.Collator() constructor
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator
---

{{JSRef}}

**`Intl.Collator()`** 构造函数用于创建
{{jsxref("Intl/Collator", "Intl.Collator")}} 对象，此类对象用于语言敏感的字符串比较。

{{InteractiveExample("JavaScript Demo: Intl.Collator")}}

```js interactive-example
console.log(["Z", "a", "z", "ä"].sort(new Intl.Collator("de").compare));
// Expected output: Array ["a", "ä", "z", "Z"]

console.log(["Z", "a", "z", "ä"].sort(new Intl.Collator("sv").compare));
// Expected output: Array ["a", "z", "Z", "ä"]

console.log(
  ["Z", "a", "z", "ä"].sort(
    new Intl.Collator("de", { caseFirst: "upper" }).compare,
  ),
);
// Expected output: Array ["a", "ä", "Z", "z"]
```

## 语法

```js-nolint
new Intl.Collator()
new Intl.Collator(locales)
new Intl.Collator(locales, options)

Intl.Collator()
Intl.Collator(locales)
Intl.Collator(locales, options)
```

> **备注：** `Intl.Collator()` 可以在使用或不适用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 的情况下调用。两者均能创建一个新的 `Intl.Collator` 实例。

### 参数

- `locales` {{optional_inline}}

  - : 缩写语言代码（BCP 47 language tag）的字符串，或由此类字符串组成的数组。关于参数 `locales` 的一般形式和解释请参见[语言区域识别和判定](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl#语言区域识别和判定)。

    下面的这些 Unicode 扩展键也是被允许的：

    > [!NOTE]
    > 这些键通常也可用于 `options` 的设置（如下所列）。当两者同时设置时，`options` 属性的优先级更高。

    - `co`

      - : 某些区域设置的变体归类。可能的值包括：

        - `big5han`（汉语；在 Chrome 和 Edge 中不可用）
        - `compat`（阿拉伯语）
        - `dict`（僧伽罗语）
        - `direct`（已弃用，请勿使用）
        - `ducet`（已弃用，请勿使用）
        - `emoji`（root）
        - `eor`（root）
        - `gb2312`（汉语；在 Chrome 和 Edge 中不可用）
        - `phonebk`（德语）
        - `phonetic`（林加拉语）
        - `pinyin`（汉语）
        - `reformed`（瑞典语；不需要明确指定，因为这是瑞典语的默认设置）
        - `searchjl`（韩语；请勿用于排序）
        - `stroke`（汉语）
        - `trad`
        - `unihan`（汉语、日语和韩语；在 Chrome 和 Edge 中不可用）
        - `zhuyin`（汉语）

        该选项也可通过 `options` 的 `collation` 属性设置。

    - `kn`
      - : 是否应使用数字对照，使得“1”<“2”<“10”。可能的值为 `"true"` 和 `"false"`。该选项也可通过 `options` 的 `numeric` 属性设置。
    - `kf`
      - : 是否应该首先根据大小写排序。可能的值为 `"upper"`、`"lower"` 和 `"false"`（使用区域的默认设置）。该选项也可通过 `options` 的 `caseFirst` 属性设置。

- `options` {{optional_inline}}

  - : 包含一些或所有的以下属性的对象：

    - `localeMatcher`
      - : 使用的区域匹配算法。可能的值为：`"lookup"` 和 `"best fit"`；默认值为 `"best fit"`。参见
        {{jsxref("Global_Objects/Intl", "Intl", "#语言区域识别和判定", 1)}} 页面以了解此选项的详细信息。
    - `usage`
      - : 比较是用于排序还是用于搜索匹配的字符串。可能的值为 `"sort"` 和 `"search"`；默认值为 `"sort"`。
    - `sensitivity`

      - : 字符串中的哪些差异应导致结果值为非零。可能的值为：

        - `"base"`：只有字母不同的字符串比较不相等。例如：a ≠ b、a = á、a = A。
        - `"accent"`：只有不同的基本字母或重音符号和其他变音符号的字符串比较为不相等。例如：a
          ≠ b、a ≠ á、a = A。
        - `"case"`：只有不同的基本字母或大小写的字符串比较不相等。例如：a ≠ b、a = á、a ≠ A。
        - `"variant"`：字符串的字母、重音和其他变音符号，或不同大小写比较不相等。也可以考虑其他差异。例如：a ≠ b、a ≠ á、a ≠ A。

        `"sort"` 用法（`usage`）的默认值为 `"variant"`。`"search"` 用法则取决于区域。

    - `ignorePunctuation`
      - : 是否应忽略标点。可能的值为 `true` 和 `false`；默认值为 `false`。
    - `numeric`

      - : 是否应使用数字对照，使得“1”<“2”<“10”。可能的值为 `true` 和 `false`；默认值为 `false`。此选项也可以通过 Unicode 扩展键 `kn` 设置；当两者同时设置时，`options` 属性的优先级更高。

    - `caseFirst`

      - : 是否应该首先根据大小写排序。可能的值为 `"upper"`、`"lower"` 和 `"false"`（使用区域的默认设置）。此选项也可以通过 Unicode 扩展键 `kf` 设置；当两者同时设置时，`options` 属性的优先级更高。

    - `collation`

      - : 一些区域的变体。可能的值包括：

        - `big5han`（汉语；在 Chrome 和 Edge 中不可用）
        - `compat`（阿拉伯语）
        - `dict`（僧伽罗语）
        - `direct`（已弃用，请勿使用）
        - `ducet`（不可用，请勿使用）
        - `emoji`（root）
        - `eor`（root）
        - `gb2312`（汉语；在 Chrome 和 Edge 中不可用）
        - `phonebk`（德语）
        - `phonetic`（林加拉语）
        - `pinyin`（汉语）
        - `reformed`（瑞典语；不需要明确指定，因为这是瑞典语的默认设置）
        - `searchjl`（韩语；请勿用于排序）
        - `stroke`（汉语）
        - `trad`
        - `unihan`（汉语、日语和韩语；在 Chrome 和 Edge 中不可用）
        - `zhuyin`（汉语）

        此选项也可以通过 Unicode 扩展键 `co` 设置；当两者同时设置时，`options` 属性的优先级更高。

## 示例

### 使用 Collator

以下示例演示了一个字符串在另一个字符串之前、之后或与另一个字符串处于同一级别时可能出现的不同结果：

```js
console.log(new Intl.Collator().compare("a", "c")); // -1，或一些其他的负值
console.log(new Intl.Collator().compare("c", "a")); // 1，或一些其他的正值
console.log(new Intl.Collator().compare("a", "a")); // 0
```

请注意，上面代码中显示的结果可能因浏览器和浏览器版本而异。这是因为这些值是特定于实现的。即，规范仅要求在比较的字符串之前和之后分别对应负值和正值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Intl.Collator")}}
- {{jsxref("Intl")}}
