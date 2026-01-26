---
title: Unicode 字符类转义：\p{...}、\P{...}
slug: Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
---

**Unicode property escapes** [正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions) 支持根据 Unicode 属性进行匹配，例如我们可以用它来匹配出表情、标点符号、字母（甚至适用特定语言或文字）等。同一符号可以拥有多种 Unicode 属性，属性则有 binary ("boolean-like") 和 non-binary 之分。

{{InteractiveExample("JavaScript Demo: RegExp Unicode property escapes", "taller")}}

```js interactive-example
const sentence = "A ticket to 大阪 costs ¥2000 👌.";

const regexpEmojiPresentation = /\p{Emoji_Presentation}/gu;
console.log(sentence.match(regexpEmojiPresentation));
// Expected output: Array ["👌"]

const regexpNonLatin = /\P{Script_Extensions=Latin}+/gu;
console.log(sentence.match(regexpNonLatin));
// Expected output: Array [" ", " ", " 大阪 ", " ¥2000 👌."]

const regexpCurrencyOrPunctuation = /\p{Sc}|\p{P}/gu;
console.log(sentence.match(regexpCurrencyOrPunctuation));
// Expected output: Array ["¥", "."]
```

> [!NOTE]
> 使用 Unicode 属性转义依靠 [`\u` 标识](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)，`\u` 表示该字符串被视为一串 Unicode 代码点。参考 [`RegExp.prototype.unicode`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)。

> [!NOTE]
> 某些 Unicode 属性比[字符类](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)(如 `\w` 只匹配拉丁字母 `a` 到 `z`) 包含更多的字符，但后者浏览器兼容性更好（截至 2020 一月）。

## 语法

```regex
\p{loneProperty}
\P{loneProperty}

\p{property=value}
\P{property=value}
```

- [General_Category](https://unicode.org/reports/tr18/#General_Category_Property) (`gc`)
- [Script](https://unicode.org/reports/tr24/#Script) (`sc`)
- [Script_Extensions](https://unicode.org/reports/tr24/#Script_Extensions) (`scx`)

参考 [PropertyValueAliases.txt](https://www.unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt)

- UnicodeBinary 属性名
  - : [Binary 属性](https://tc39.es/ecma262/#table-binary-unicode-properties)名。E.g.: [`ASCII`](https://unicode.org/reports/tr18/#General_Category_Property). [`Alpha`](https://unicode.org/reports/tr44/#Alphabetic), `Math`, [`Diacritic`](https://unicode.org/reports/tr44/#Diacritic), [`Emoji`](https://unicode.org/reports/tr51/#Emoji_Properties), [`Hex_Digit`](https://unicode.org/reports/tr44/#Hex_Digit), `Math`, [`White_space`](https://unicode.org/reports/tr44/#White_Space), 等。另见 [Unicode Data PropList.txt](https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt).
- Unicode 属性名
  - : [Non-binary](https://tc39.es/ecma262/#table-nonbinary-unicode-properties) 属性名：
- Unicode 属性值
  - : 很多值有同名或简写 (e.g. 对应着 `General_Category` 属性名的属性值 `Decimal_Number` 可以写作 `Nd`, `digit`, 或 `Decimal_Number`). 大多数属性值的 `Unicode 属性名` 和等号可以省去。如果想明确某 `Unicode 属性名`，必须给出它的值。

> [!NOTE]
> 因为可使用的属性和值太多，这里不一一赘述，仅提供几个例子。

## 基本原理

在 ES2018 之前，JavaScript 没有强有效的方式用匹配出不同`文字`(如马其顿语，希腊语，Georgian 等) 或不同 `属性名` (如 Emoji 等) 的字符。另见 [tc39 Proposal on Unicode Property Escapes](https://github.com/tc39/proposal-regexp-unicode-property-escapes).

## 示例

### （一般类别）General categories

General categories 对 Unicode 字符进行分类，子类别用于精确定义类别。长名和简写的 Unicode 属性转义都可用。

它们可匹配字母、数字、符号、标点符号、空格等等。一般类别详见 [the Unicode specification](https://unicode.org/reports/tr18/#General_Category_Property).

```js
// finding all the letters of a text
let story = "It's the Cheshire Cat: now I shall have somebody to talk to.";

// Most explicit form
story.match(/\p{General_Category=Letter}/gu);

// It is not mandatory to use the property name for General categories
story.match(/\p{Letter}/gu);

// This is equivalent (short alias):
story.match(/\p{L}/gu);

// This is also equivalent (conjunction of all the subcategories using short aliases)
story.match(/\p{Lu}|\p{Ll}|\p{Lt}|\p{Lm}|\p{Lo}/gu);
```

### 文字（Script）和文字扩充（Script_Extensions）

某些语言使用不同的文字，如英语和西班牙语使用拉丁文，而阿拉伯语和俄语用阿拉伯文和俄文。`Script` 和 `Script_Extensions` Unicode 属性允许正则表达式根据字符所属的`文字`或该文字所属的`文字扩充`进行匹配。

比如，`A` 属于 `拉丁文`，`ε` 属于`希腊 (Greek)`文。

```js
let mixedCharacters = "aεЛ";

// Using the canonical "long" name of the script
mixedCharacters.match(/\p{Script=Latin}/u); // a

// Using a short alias for the script
mixedCharacters.match(/\p{Script=Grek}/u); // ε

// Using the short name Sc for the Script property
mixedCharacters.match(/\p{Sc=Cyrillic}/u); // Л
```

详见 [the Unicode specification](https://unicode.org/reports/tr24/#Script) 和 [Scripts table in the ECMAScript specification](https://tc39.es/ecma262/#table-unicode-script-values).

某字符用于多种文字时，`Script` 优先匹配最主要使用那个字符的文字。如果想要根据非主要的文字进行匹配，我们可以使用 `Script_Extensions` 属性 (简写为`Scx`).

```js
// ٢ is the digit 2 in Arabic-Indic notation
// while it is predominantly written within the Arabic script
// it can also be written in the Thaana script

"٢".match(/\p{Script=Thaana}/u);
// null as Thaana is not the predominant script        super()

"٢".match(/\p{Script_Extensions=Thaana}/u);
// ["٢", index: 0, input: "٢", groups: undefined]
```

### Unicode 属性转义 vs. 字符类

JavaScript 正则表达式可以使用 [字符类](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) 尤其是 `\w` 或 `\d` 匹配字母或数字，然而，这样的形式只匹配拉丁文字的字符 (换言之，`a` 到 `z`、 `A` 到 `Z` 的 `\w` 和 `0` 到 `9` 的 `\d`)，见[示例](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes#寻找一个_unicode_字符的单词)，这样的使用放到非拉丁文本中是有些蠢的。

Unicode 属性转义 categories 包含更多字符，`\p{Letter}` 或 `\p{Number}` 将会适用于任何文字。

```js
// Trying to use ranges to avoid \w limitations:

const nonEnglishText = "Приключения Алисы в Стране чудес";
const regexpBMPWord = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
// BMP goes through U+0000 to U+FFFF but space is U+0020

console.table(nonEnglishText.match(regexpBMPWord));

// Using Unicode property escapes instead
const regexpUPE = /\p{L}+/gu;
console.table(nonEnglishText.match(regexpUPE));
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [字符类](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)指南
- [正则表达式](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions)
- [字符类：`[...]`、`[^...]`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [字符类转义：`\d`、`\D`、`\w`、`\W`、`\s`、`\S`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [字符转义：`\n`、`\u{...}`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [析取符：`|`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- 维基百科上的 [Unicode 字符类属性](https://en.wikipedia.org/wiki/Unicode_character_property)
- [ES2018：RegExp Unicode 属性转义](https://2ality.com/2017/07/regexp-unicode-property-escapes.html)，由 Dr. Axel Rauschmayer 撰写（2017）
- [Unicode 正则表达式：属性章节](https://unicode.org/reports/tr18/#Categories)
- [Unicode 工具集：UnicodeSet](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp)
- [RegExp 带有集合符号和字符串属性的 v 标志](https://v8.dev/features/regexp-v-flag)，载于 v8.dev（2022）
