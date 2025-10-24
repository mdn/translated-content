---
title: Assertions
slug: Web/JavaScript/Guide/Regular_expressions/Assertions
---

断言的组成之一是边界。对于文本、词或模式，边界可以用来表明它们的起始或终止部分（如先行断言，后行断言以及条件表达式）。

{{InteractiveExample("JavaScript Demo: RegExp Assertions", "taller")}}

```js interactive-example
const text = "A quick fox";

const regexpLastWord = /\w+$/;
console.log(text.match(regexpLastWord));
// Expected output: Array ["fox"]

const regexpWords = /\b\w+\b/g;
console.log(text.match(regexpWords));
// Expected output: Array ["A", "quick", "fox"]

const regexpFoxQuality = /\w+(?= fox)/;
console.log(text.match(regexpFoxQuality));
// Expected output: Array ["quick"]
```

## 类型

### 边界类断言

<table>
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
          匹配输入的开头。如果多行模式设为 true，<code>^</code>
          在换行符后也能立即匹配，比如 <code>/^A/</code> 匹配不了 "an A" 里面的
          "A"，但是可以匹配 "An A" 里面第一个 "A"。
        </p>
        <div class="notecard note">
          <p>
            <strong>备注：</strong
            >此字符出现在<a
              href="/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes"
              >字符类</a
            >开头时的含义与此不同。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>$</code></td>
      <td>
        <p>
          匹配输入的结束。如果多行模式设为 true，<code>$</code>
          在换行符前也能立即匹配，比如 <code>/t$/</code> 不能匹配 "eater" 中的
          "t"，但是可以匹配 "eat" 中的 "t"。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          匹配一个单词的边界，这是一个字的字符前后没有另一个字的字符位置，例如在字母和空格之间。需要注意的是匹配的单词边界不包括在匹配中。换句话说，匹配字边界的长度为零。
        </p>
        <p>一些例子：</p>
        <ul>
          <li><code>/\bm/</code> 在 "moon" 中匹配到 "m"</li>
          <li>
            <code>/oo\b/</code> 在 "moon" 中不会匹配到 "oo", 因为 "oo" 后面跟着
            "n" 这个单词字符。
          </li>
          <li>
            <code>/oon\b/</code> 在 "moon" 中匹配 "oon"，因为 "oon"
            是这个字符串的结尾，因此后面没有单词字符
          </li>
          <li>
            <code>/\w\b\w/</code>
            将永远不会匹配任何东西，因为一个单词字符后面永远不会同时有一个非单词字符和一个单词字符。
          </li>
        </ul>
        <p>
          匹配退格字符 (<code>[\b]</code>), 查看
          <a
            href="/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes"
            >字符类</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\B</code></td>
      <td>
        <p>
          匹配非单词边界。这是上一个字符和下一个字符属于同一类型的位置：要么两者都必须是单词，要么两者都必须是非单词，例如在两个字母之间或两个空格之间。字符串的开头和结尾被视为非单词。与匹配的词边界相同，匹配的非词边界也不包含在匹配中。例如，<code
            >/\Bon/</code
          >
          在“at noon”中匹配“on” ，<code>/ye\B/</code> 在 "possibly
          yesterday"中匹配"ye" 。
        </p>
      </td>
    </tr>
  </tbody>
</table>

### 其他断言

> [!NOTE]
> `？`字符也可用作量词

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><code>字符</code></th>
      <th scope="col"><code>含义</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p><code>x(?=y)</code></p>
      </td>
      <td>
        <table>
          <tbody>
            <tr>
              <td>
                <strong>先行断言：</strong> x 被 y 跟随时匹配
                x。例如，对于/<code>Jack(?=Sprat)</code>/，“Jack”在跟有“Sprat”的情况下才会得到匹配．<code
                  >/Jack(?=Sprat|Frost)/</code
                >
                “Jack”后跟有“Sprat”或“Frost”的情况下才会得到匹配。不过，
                匹配结果不包括“Sprat”或“Frost”。
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>x(?!y)</td>
      <td>
        <table>
          <tbody>
            <tr>
              <td>
                <strong>先行否定断言：</strong> x 没有被 y 紧随时匹配
                x。例如，对于<code>/\d+(?!\.)/</code>，数字后没有跟随小数点的情况下才会得到匹配。对于<code>/\d+(?!\.)/.exec(3.141)</code>，匹配‘141’而不是‘3’。
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>(?&#x3C;=y)x</td>
      <td>
        <table>
          <tbody>
            <tr>
              <td>
                <strong>后行断言：</strong> x 跟随 y 的情况下匹配
                x。例如，对于<code>/(?&#x3C;=Jack)Sprat/</code>，“Sprat”紧随“Jack”时才会得到匹配。对于<code>/(?&#x3C;=Jack|Tom)Sprat</code>，“Sprat”在紧随“Jack”或“Tom”的情况下才会得到匹配。不过，匹配结果中不包括“Jack”或“Tom”。
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>(?&#x3C;!y)x</td>
      <td>
        <table>
          <tbody>
            <tr>
              <td>
                <strong>后行否定断言：</strong> x 不跟随 y 时匹配
                x。例如，对于<code>/(?&#x3C;!-)\d+/</code>，数字不紧随 -
                符号的情况下才会得到匹配。对于<code
                  >/(?&#x3C;!-)\d+/.exec(3)</code
                >
                ，“3”得到匹配。
                而<code>/(?&#x3C;!-)\d+/.exec(-3)</code>的结果无匹配，这是由于数字之前有
                - 符号。
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

## 示例

### 一般边界类型概述示例

```js
// 使用正则表达式边界修复错误字符串
buggyMultiline = `tey, ihe light-greon apple
tangs on ihe greon traa`;

// 1) 使用 $ 修正字符串结尾处的匹配。
buggyMultiline = buggyMultiline.replace(/^t/gim, "h");
console.log(1, buggyMultiline); // 修复 'tey' => 'hey' 和 'tangs' => 'hangs'，而不对 'traa' 做改动。

// 2) 使用 $ 修正字符串结尾处的匹配。
buggyMultiline = buggyMultiline.replace(/aa$/gim, "ee.");
console.log(2, buggyMultiline); // 修复 'traa' => 'tree.'。

// 3) 使用 \b 修正单词和空格边界上的字符。
buggyMultiline = buggyMultiline.replace(/\bi/gim, "t");
console.log(3, buggyMultiline); // 修复 'ihe' => 'the'，而不对 'light' 做改动。

// 4) 使用 \B 匹配实体边界内的字符。
fixedMultiline = buggyMultiline.replace(/\Bo/gim, "e");
console.log(4, fixedMultiline); // 修复 'greon' => 'green'，而不对 'on' 做改动。
```

### 使用 ^（控制字符）匹配输入的开头

使用 `^`匹配输入的开头。在这个例子中，我们可以通过 `/^A/` 正则表达式得到以 A 开头的水果。为了选择合适的水果，我们可以使用带有箭头函数的过滤方法。

```js
const fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

// 使用正则 /^A/ 选择以'A'开头的水果。
// 这里的 '^' 只有一种含义：匹配输入的开头。

const fruitsStartsWithA = fruits.filter((fruit) => /^A/.test(fruit));
console.log(fruitsStartsWithA); // [ 'Apple', 'Avocado' ]
```

在第二个示例中，`^` 既用于在输入开头进行匹配，也用于在[字符类](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)中使用时创建字符类补集。

```js
const fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

// 使用正则 /^[^A]/ 选择 不是以‘A’开头的水果
// 在这个例子中，“^”控制符号表示两种含义：
// 1) 匹配输入的开头
// 2) 一个否定的字符集：[^A]，意思是匹配不是‘A’的字符

const fruitsStartsWithNotA = fruits.filter((fruit) => /^[^A]/.test(fruit));

console.log(fruitsStartsWithNotA); // [ 'Watermelon', 'Orange', 'Strawberry' ]
```

### 匹配字边界

```js
const fruitsWithDescription = ["Red apple", "Orange orange", "Green Avocado"];

// 选择包含以“en”或“ed”结尾的单词的描述：
const enEdSelection = fruitsWithDescription.filter((descr) =>
  /(en|ed)\b/.test(descr),
);

console.log(enEdSelection); // [ 'Red apple', 'Green Avocado' ]
```

### 先行断言

```js
// JS 先行断言 x(?=y) 匹配被 y 跟随的 x

const regex = /First(?= test)/g;

console.log("First test".match(regex)); // [ 'First' ]
console.log("First peach".match(regex)); // null
console.log("This is a First test in a year.".match(regex)); // [ 'First' ]
console.log("This is a First peach in a month.".match(regex)); // null
```

### 先行否定断言

例如， `/\d+(?!\.)/` 匹配没有被小数点跟随且至少有一位的数字。 `/\d+(?!\.)/.exec('3.141')` 匹配 "141" 而不是 "3"

```js
console.log(/\d+(?!\.)/g.exec("3.141")); // [ '141', index: 2, input: '3.141' ]
```

### 不同含义的“?!”：在断言和字符集中的组合用法

在像 `/x(?!y)/` 这样的断言和 `[^?!]` 这样的[字符类](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)中，`?!` 组合具有不同的含义。

```js
const orangeNotLemon =
  "Do you want to have an orange? Yes, I do not want to have a lemon!";

// 断言 /x(?!y)/ 和范围 /[^?!]/ 中“?!”组合用法的不同含义
const selectNotLemonRegex = /[^?!]+have(?! a lemon)[^?!]+[?!]/gi;
console.log(orangeNotLemon.match(selectNotLemonRegex)); // [ 'Do you want to have an orange?' ]

const selectNotOrangeRegex = /[^?!]+have(?! an orange)[^?!]+[?!]/gi;
console.log(orangeNotLemon.match(selectNotOrangeRegex)); // [ ' Yes, I do not want to have a lemon!' ]
```

### 后行断言

```js
const oranges = ["ripe orange A", "green orange B", "ripe orange C"];

const ripeOranges = oranges.filter((fruit) => /(?<=ripe )orange/.test(fruit));
console.log(ripeOranges); // [ 'ripe orange A', 'ripe orange C' ]
```

## 参见

- [正则表达式指南](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)
- [字符类](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)指南
- [量词](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)指南
- [组和反向引用](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)指南
- [`RegExp`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
