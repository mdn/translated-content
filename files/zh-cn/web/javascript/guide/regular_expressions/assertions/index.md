---
title: 断言
slug: Web/JavaScript/Guide/Regular_expressions/Assertions
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

断言包括边界，指示行和单词的开始和结束，以及其他以某种方式指示匹配可能性的模式（包括先行断言、后行断言和条件表达式）。

{{InteractiveExample("JavaScript 演示：正则表达式断言", "taller")}}

```js interactive-example
const text = "A quick fox";

const regexpLastWord = /\w+$/;
console.log(text.match(regexpLastWord));
// 预期输出：Array ["fox"]

const regexpWords = /\b\w+\b/g;
console.log(text.match(regexpWords));
// 预期输出：Array ["A", "quick", "fox"]

const regexpFoxQuality = /\w+(?= fox)/;
console.log(text.match(regexpFoxQuality));
// 预期输出：Array ["quick"]
```

## 类型

### 边界类断言

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">字符</th>
      <th scope="col">含义</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>^</code></td>
      <td>
        <p>
          <a href="/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>起始输入边界断言</strong></a>：匹配输入的起始。如果启用了 <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a>（m）标志，则也会匹配换行符之后的字符。比如 <code>/^A/</code> 不匹配“an A”中的“A”，但是可以匹配“An A”中第一个“A”。
        </p>
        <div class="notecard note">
          <p>
            <strong>备注：</strong
            >该字符出现在<a
              href="/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes"
              >字符类</a
            >的起始时的含义与此不同。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>$</code></td>
      <td>
        <p>
          <a href="/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>终止输入边界断言</strong></a>：匹配输入的结束。如果启用了 <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a>（m）标志，则也会匹配换行符之后的字符。比如 <code>/t$/</code> 不匹配“eater”中的“t”，但是可以匹配“eat”中的“t”。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          <a href="/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>单词边界断言：</strong></a>匹配一个单词的边界。这是指某个单词字符前后均无其他单词字符的情况（如字母与空格之间）。请注意，匹配到的单词边界不包含在匹配结果中。换言之，匹配到的单词边界长度为零。
        </p>
        <p>示例：</p>
        <ul>
          <li><code>/\bm/</code> 匹配“moon”中的“m”</li>
          <li><code>/oo\b/</code> 不匹配“moon”中的“oo”, 因为“oo”后面跟着单词字符“n”。</li>
          <li><code>/oon\b/</code> 匹配“moon”中的“oon”，因为“oon”是这个字符串的结尾，因此后面没有单词字符。</li>
          <li><code>/\w\b\w/</code> 不会有任何匹配结果，因为一个单词字符后面永远不会同时有一个非单词字符和一个单词字符。</li>
        </ul>
        <p>
          若要匹配退格字符（<code>[\b]</code>），参见<a
            href="/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes"
            >字符类</a>
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\B</code></td>
      <td>
        <p>
          <a href="/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>非单词边界断言：</strong></a>匹配非单词边界。这是一个前一个字符和后一个字符类型相同的位置：要么两者都是单词，要么两者都不是单词，例如两个字母之间或两个空格之间。字符串的开头和结尾被视为非单词。与匹配的单词边界一样，匹配的非单词边界也不包含在匹配范围内。例如，<code>/\Bon/</code> 匹配“at noon”中的“on”，<code>/ye\B/</code> 匹配“possibly yesterday”的“ye”。
        </p>
      </td>
    </tr>
  </tbody>
</table>

### 其他断言

> [!NOTE]
> `?` 字符也可用作量词。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">字符</th>
      <th scope="col">含义</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>x(?=y)</code></td>
      <td>
        <p>
          <a href="/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>先行断言：</strong></a>仅当“x”后面跟着“y”时匹配“x”。例如，<code>/Jack(?=Sprat)/</code> 仅在“Jack”后面跟着“Sprat”时匹配“Jack”。<br /><code>/Jack(?=Sprat|Frost)/</code>仅在“Jack”后面跟着“Sprat”或“Frost”时匹配“Jack”，但“Sprat”和“Frost”都不是匹配结果的一部分。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x(?!y)</code></td>
      <td>
        <p>
          <a href="/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>先行否定断言：</strong></a>仅当“x”后面不跟着“y”时匹配“x”。例如，<code>/\d+(?!\.)/</code> 仅在一个数字后面没有跟着小数点时匹配该数字。<code>/\d+(?!\.)/.exec('3.141')</code>匹配“141”但不匹配“3”。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;=y)x</code></td>
      <td>
        <p>
          <a href="/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>后行断言：</strong></a>仅当“x”前面跟着“y”时匹配“x”。例如，<code>/(?&#x3C;=Jack)Sprat/</code> 仅在“Sprat”前面跟着“Jack”时匹配“Sprat”。<code>/(?&#x3C;=Jack|Tom)Sprat/</code>仅在“Sprat”前面跟着“Jack”或“Tom”时匹配“Sprat”。不过，“Jack”和“Tom”都不是匹配结果的一部分。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;!y)x</code></td>
      <td>
        <p>
          <a href="/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>后行否定断言：</strong></a>仅当“x”前面不跟着“y”时匹配“x”。例如，<code>/(?&#x3C;!-)\d+/</code> 仅在一个数字前面没有跟着减号时匹配该数字。<code>/(?&#x3C;!-)\d+/.exec('3')</code>匹配“3”。<code>/(?&#x3C;!-)\d+/.exec('-3')</code> 没有找到匹配，因为该数字前面跟着减号。
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 示例

### 一般边界类型概述示例

<!-- cSpell:ignore greon -->

```js
// 使用正则表达式边界修复错误字符串
buggyMultiline = `tey, ihe light-greon apple
tangs on ihe greon traa`;

// 1) 使用 ^ 修正字符串开头处和换行符后的匹配问题。
buggyMultiline = buggyMultiline.replace(/^t/gim, "h");
console.log(1, buggyMultiline); // 修正“tey”为“hey”，以及“tangs”为“hangs”，而不对“traa”做出改动。

// 2) 使用 $ 修正字符串结尾处的匹配。
buggyMultiline = buggyMultiline.replace(/aa$/gim, "ee.");
console.log(2, buggyMultiline); // 修正“traa”为“tree”。

// 3) 使用 \b 修正单词和空格边界上的字符。
buggyMultiline = buggyMultiline.replace(/\bi/gim, "t");
console.log(3, buggyMultiline); // 修正“ihe”为“the”，而不对“light”做出改动。

// 4) 使用 \B 匹配实体边界内的字符。
fixedMultiline = buggyMultiline.replace(/\Bo/gim, "e");
console.log(4, fixedMultiline); // 修正“greon”为“green”，而不对“on”做出改动。
```

### 使用控制字符 ^ 匹配输入的开头

使用 `^` 匹配输入的开头。在这个例子中，我们可以通过 `/^A/` 正则表达式得到以 A 开头的水果。为了选择合适的水果，我们可以使用带有[箭头](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)函数的 [`filter`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 方法。

```js
const fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

// 使用正则 /^A/ 选择以‘A’开头的水果。
// 这里的‘^’只有一种含义：匹配输入的起始。

const fruitsStartsWithA = fruits.filter((fruit) => /^A/.test(fruit));
console.log(fruitsStartsWithA); // [ 'Apple', 'Avocado' ]
```

在第二个示例中，`^` 既用于在输入起始进行匹配，也用于在[字符类](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)中使用时创建字符类补集。

```js
const fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

// 使用正则表达式 /^[^A]/ 选择不是以‘A’开头的水果
// 在这个例子中，“^”控制符号表示两种含义：
// 1) 匹配输入的开头
// 2) 一个否定的字符补集：[^A]
// 也就是说，它匹配所有未被方括号包围的内容。

const fruitsStartsWithNotA = fruits.filter((fruit) => /^[^A]/.test(fruit));

console.log(fruitsStartsWithNotA); // [ 'Watermelon', 'Orange', 'Strawberry' ]
```

在[输入边界断言](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)参考中查看更多示例。

### 匹配单词边界

在本示例中，我们匹配以“en”或“ed”结尾的水果名称。

```js
const fruitsWithDescription = ["Red apple", "Orange orange", "Green Avocado"];

// 选择包含以“en”或“ed”结尾的单词的描述：
const enEdSelection = fruitsWithDescription.filter((description) =>
  /(?:en|ed)\b/.test(description),
);

console.log(enEdSelection); // [ 'Red apple', 'Green Avocado' ]
```

在[单词边界断言](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)参考中查看更多示例。

### 先行断言

在这个例子中，仅当单词“First”后面跟着“test”时，我们才会匹配它，但是我们在匹配结果中不会包含“test”。

```js
const regex = /First(?= test)/g;

console.log("First test".match(regex)); // [ 'First' ]
console.log("First peach".match(regex)); // null
console.log("This is a First test in a year.".match(regex)); // [ 'First' ]
console.log("This is a First peach in a month.".match(regex)); // null
```

在[先行断言](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)参考中查看更多示例。

### 基本的先行否定断言

例如，`/\d+(?!\.)/` 仅匹配不跟着小数点的数字。`/\d+(?!\.)/.exec('3.141')` 匹配“141”但不匹配“3”。

```js
console.log(/\d+(?!\.)/g.exec("3.141")); // [ '141', index: 2, input: '3.141' ]
```

在[先行断言](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)参考中查看更多示例。

### 在断言和字符类中“?!”组合用法的不同含义

在像 `/x(?!y)/` 这样的断言和 `[^?!]` 这样的[字符类](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)中，`?!` 组合具有不同的含义。

```js
const orangeNotLemon =
  "Do you want to have an orange? Yes, I do not want to have a lemon!";

// 断言 /x(?!y)/ 和字符类 /[^?!]/ 中“?!”组合用法的不同含义
const selectNotLemonRegex = /[^?!]+have(?! a lemon)[^?!]+[?!]/gi;
console.log(orangeNotLemon.match(selectNotLemonRegex)); // [ 'Do you want to have an orange?' ]

const selectNotOrangeRegex = /[^?!]+have(?! an orange)[^?!]+[?!]/gi;
console.log(orangeNotLemon.match(selectNotOrangeRegex)); // [ ' Yes, I do not want to have a lemon!' ]
```

### 后行断言

在这个例子中，我们仅在单词“orange”前面跟着单词“ripe”时，才将其替换为“apple”。

```js
const oranges = ["ripe orange A", "green orange B", "ripe orange C"];

const newFruits = oranges.map((fruit) =>
  fruit.replace(/(?<=ripe )orange/, "apple"),
);
console.log(newFruits); // ['ripe apple A', 'green orange B', 'ripe apple C']
```

在[后行断言](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)参考中查看更多示例。

## 参见

- [正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)指南
- [字符类](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)指南
- [量词](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)指南
- [组和反向引用](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)指南
- [`RegExp`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)参考
- [输入边界断言：`^`、`$`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [先行断言：`(?=...)`、`(?!...)`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [后行断言：`(?<=...)`、`(?<!...)`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [单词边界断言：`\b`、`\B`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
