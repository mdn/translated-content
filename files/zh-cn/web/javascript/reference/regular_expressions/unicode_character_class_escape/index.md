---
title: Unicode 字符类转义：\p{...}、\P{...}
slug: Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
l10n:
  sourceCommit: fce3e005d0d2566741e2db7acc8f83c708d1c1cc
---

**Unicode 字符类转义**是一种[字符类转义](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)，用于匹配由 Unicode 属性指定的字符集。它仅在 [Unicode 感知模式](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_感知模式)下受支持。当启用 [`v`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) 标志时，它也可用于匹配有限长度的字符串。

{{InteractiveExample("JavaScript 演示：正则表达式 Unicode 字符类转义", "taller")}}

```js interactive-example
const sentence = "A ticket to 大阪 costs ¥2000 👌.";

const regexpEmojiPresentation = /\p{Emoji_Presentation}/gu;
console.log(sentence.match(regexpEmojiPresentation));
// 期望输出：Array ["👌"]

const regexpNonLatin = /\P{Script_Extensions=Latin}+/gu;
console.log(sentence.match(regexpNonLatin));
// 期望输出：Array [" ", " ", " 大阪 ", " ¥2000 👌."]

const regexpCurrencyOrPunctuation = /\p{Sc}|\p{P}/gu;
console.log(sentence.match(regexpCurrencyOrPunctuation));
// 期望输出：Array ["¥", "."]
```

## 语法

```regex
\p{loneProperty}
\P{loneProperty}

\p{property=value}
\P{property=value}
```

### 参数

- `loneProperty`
  - : 一个单独的 Unicode 属性名称或值，其语法与 `value` 相同。它指定 `General_Category` 属性的值，或一个[二元属性名称](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties)。在 [`v`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) 模式下，它也可以是[字符串的二元 Unicode 属性](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties-of-strings)。

    > [!NOTE]
    > [ICU](https://unicode-org.github.io/icu/userguide/strings/unicodeset.html#property-values) 的语法也允许省略 `Script` 属性名，但 JavaScript 不支持这种写法，因为在大多数情况下，`Script_Extensions` 比 `Script` 更有用。

- `property`
  - : Unicode 属性名称。必须由 {{Glossary("ASCII")}} 字符（`A–Z`、`a–z`）和下划线（`_`）组成，且必须是[非二元属性名称](https://tc39.es/ecma262/multipage/text-processing.html#table-nonbinary-unicode-properties)之一。
- `value`
  - : Unicode 属性值。必须由 ASCII 字符（`A–Z`、`a–z`）、下划线（`_`）和数字（`0–9`）组成，且必须是 [`PropertyValueAliases.txt`](https://unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt) 中列出的支持的值之一。

## 描述

`\p` 和 `\P` 仅在 [Unicode 感知模式](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_感知模式)下受支持。在非 Unicode 感知模式下，它们是 `p` 或 `P` 字符的[一致转义符](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)。

每个 Unicode 字符都有一组描述它的属性。例如，字符 [`a`](https://util.unicode.org/UnicodeJsps/character.jsp?a=0061) 的 `General_Category` 属性值为 `Lowercase_Letter`，`Script` 属性值为 `Latn`。`\p` 和 `\P` 转义序列允许根据字符的属性进行匹配。例如，`a` 既可以通过 `\p{Lowercase_Letter}`（`General_Category` 属性名可选）匹配，也可以通过 `\p{Script=Latn}` 匹配。`\P` 会创建一个*补集类*，其中包含不具备指定属性的码位。

当设置了 [`i`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) 标志时，`u` 和 `v` 模式下对 `\P` 字符类的处理方式略有不同。在 `u` 模式下，大小写转换发生在差集运算之后；而在 `v` 模式下，大小写转换发生在差集运算之前。更具体地说，在 `u` 模式下，`\P{property}` 匹配 `caseFold(allCharacters - charactersWithProperty)`。这意味着 `/\P{Lowercase_Letter}/iu` 仍然匹配 `"a"`，因为 `A` 不是 `Lowercase_Letter`。在 `v` 模式下，`\P{property}` 匹配 `caseFold(allCharacters) - caseFold(charactersWithProperty)`。这意味着 `/\P{Lowercase_Letter}/iv` 不匹配 `"a"`，因为 `A` 甚至不在所有大小写转换后的 Unicode 字符集合中。参见[补集类与不区分大小写的匹配](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#补集类与不区分大小写的匹配)。

要组合多个属性，请使用通过 `v` 标志启用的[字符集交集](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-模式字符类) 语法，或参见[模式差集与交集](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#模式差集与交集)。

在 `v` 模式下，`\p` 可能匹配一串码位，Unicode 中将其定义为“字符串属性”。这对通常由多个码位组成的表情符号最为有用。然而，`\P` 只能匹配字符属性。

> [!NOTE]
> 目前也有计划将字符串属性的功能移植到 `u` 模式中。

## 示例

### 通用类别

通用类别用于对 Unicode 字符进行分类，而子类别则用于定义更精确的分类。在 Unicode 属性转义序列中，可以使用短形式或长形式。

它们可用于匹配字母、数字、符号、标点、空格等。如需查看更详尽的一般类别列表，请参阅 [Unicode 规范](https://unicode.org/reports/tr18/#General_Category_Property)。

```js
// 匹配文本中所有的字母
const story = "It's the Cheshire Cat: now I shall have somebody to talk to.";

// 最明确的形式
story.match(/\p{General_Category=Letter}/gu);

// 对于通用类别，无需使用属性名称
story.match(/\p{Letter}/gu);

// 与以下内容等价（简写形式）：
story.match(/\p{L}/gu);

// 这也等同于（使用简短别名对所有子类别进行并集运算）：
story.match(/\p{Lu}|\p{Ll}|\p{Lt}|\p{Lm}|\p{Lo}/gu);
```

### 文字与文字扩展

某些语言使用不同的文字系统进行书写。例如，英语和西班牙语使用拉丁字母书写，而阿拉伯语和俄语则使用其他文字系统（分别是阿拉伯文和西里尔文）。Unicode 的 `Script` 和 `Script_Extensions` 属性允许正则表达式根据字符主要使用的文字系统（`Script`）或其所属的文字系统集合（`Script_Extensions`）来匹配字符。

例如，`A` 属于 `Latin` 字符集，而 `ε` 属于 `Greek` 字符集。

```js
const mixedCharacters = "aεЛ";

// 使用脚本的标准“长”名称
mixedCharacters.match(/\p{Script=Latin}/u); // a

// 为该种文字使用简短别名（ISO 15924 代码）
mixedCharacters.match(/\p{Script=Grek}/u); // ε

// 为“Script”属性使用缩写名“sc”
mixedCharacters.match(/\p{sc=Cyrillic}/u); // Л
```

更多详情，请参阅 [Unicode 规范](https://unicode.org/reports/tr24/#Script)、[ECMAScript 规范中的文字表](https://tc39.es/ecma262/multipage/text-processing.html#table-unicode-script-values) 以及 [ISO 15924 文字代码列表](https://unicode.org/iso15924/iso15924-codes.html)。

如果某个字符属于有限的文字集合，`Script` 属性仅匹配“主要”使用的文字。如果我们要根据“非主要”文字匹配字符，可以使用 `Script_Extensions` 属性（简称 `scx`）。

```js
// ٢ 是阿拉伯——印度数字系统中的数字 2，虽然它主要使用阿拉伯字母书写，但也可能使用塔纳字母书写。

"٢".match(/\p{Script=Thaana}/u);
// null，因为塔纳文并非主要文字

"٢".match(/\p{Script_Extensions=Thaana}/u);
// ["٢", index: 0, input: "٢", groups: undefined]
```

### Unicode 属性转义与字符类

在 JavaScript 正则表达式中，也可以使用[字符类](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)，特别是 `\w` 或 `\d` 来匹配字母或数字。然而，此类形式仅匹配*拉丁*字母表中的字符（换言之，`\w` 匹配 `a` 到 `z` 以及 `A` 到 `Z`，`\d` 匹配 `0` 到 `9`）。如[此示例](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes#寻找一个_unicode_字符的单词)所示，处理非拉丁文本时可能会有些笨拙。

Unicode 属性转义类别涵盖了更多的字符，而 `\p{Letter}` 或 `\p{Number}` 适用于任何字符集。

```js
// 尝试使用字符集来规避 \w 的限制：

const nonEnglishText = "Приключения Алисы в Стране чудес";
const regexpBMPWord = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
// BMP 范围从 U+0000 到 U+FFFF，但空格是 U+0020

console.table(nonEnglishText.match(regexpBMPWord));

//  改用 Unicode 属性转义符
const regexpUPE = /\p{L}+/gu;
console.table(nonEnglishText.match(regexpUPE));
```

### 匹配价格

以下示例在字符串中匹配价格：

```js
function getPrices(str) {
  // Sc 代表“货币符号”
  return [...str.matchAll(/\p{Sc}\s*[\d.,]+/gu)].map((match) => match[0]);
}

const str = `California rolls $6.99
Crunchy rolls $8.49
Shrimp tempura $10.99`;
console.log(getPrices(str)); // ["$6.99", "$8.49", "$10.99"]

const str2 = `US store $19.99
Europe store €18.99
Japan store ¥2000`;
console.log(getPrices(str2)); // ["$19.99", "€18.99", "¥2000"]
```

### 匹配字符串

使用 `v` 标志时，`\p{…}` 可以利用字符串的特性，匹配可能长于一个字符的字符串：

```js
const flag = "🇺🇳";
console.log(flag.length); // 2
console.log(/\p{RGI_Emoji_Flag_Sequence}/v.exec(flag)); // [ '🇺🇳' ]
```

不过，你不能使用 `\P` 来匹配“一个不具有该属性的字符串”，因为无法确定应该消耗多少个字符。

```js-nolint example-bad
/\P{RGI_Emoji_Flag_Sequence}/v; // SyntaxError: Invalid regular expression: Invalid property name
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
- 维基百科上的 [Unicode 字符属性](https://en.wikipedia.org/wiki/Unicode_character_property)
- [ES2018：RegExp Unicode 属性转义](https://2ality.com/2017/07/regexp-unicode-property-escapes.html)，由 Dr. Axel Rauschmayer 撰写（2017）
- [Unicode 正则表达式：属性章节](https://unicode.org/reports/tr18/#Categories)
- [Unicode 工具集：UnicodeSet](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp)
- [RegExp 带有集合符号和字符串属性的 v 标志](https://v8.dev/features/regexp-v-flag)，载于 v8.dev（2022）
