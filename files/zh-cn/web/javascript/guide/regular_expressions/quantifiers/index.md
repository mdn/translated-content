---
title: 量词
slug: Web/JavaScript/Guide/Regular_expressions/Quantifiers
l10n:
  sourceCommit: 95a838d5d8e0e40aaa15897d23de476efade14b1
---

{{jsSidebar("JavaScript Guide")}}

量词表示要匹配的字符或表达式的数量。

{{InteractiveExample("JavaScript Demo: RegExp quantifiers", "taller")}}

```js interactive-example
const ghostSpeak = "booh boooooooh";
const regexpSpooky = /bo{3,}h/;
console.log(ghostSpeak.match(regexpSpooky));
// Expected output: Array ["boooooooh"]

const modifiedQuote = "[He] ha[s] to go read this novel [Alice in Wonderland].";
const regexpModifications = /\[.*?\]/g;
console.log(modifiedQuote.match(regexpModifications));
// Expected output: Array ["[He]", "[s]", "[Alice in Wonderland]"]

const regexpTooGreedy = /\[.*\]/g;
console.log(modifiedQuote.match(regexpTooGreedy));
// Expected output: Array ["[He] ha[s] to go read this novel [Alice in Wonderland]"]
```

## 类型

> [!NOTE]
> 在下文中，*项*不仅指单个字符，还包括[字符类](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)、[组和反向引用](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">字符集</th>
      <th scope="col">意义</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><em>x</em>*</code>
      </td>
      <td>
        <p>
          将前面的项“x”匹配 0 次或更多次。例如，<code>/bo*/</code> 匹配“A ghost
          booooed”中的“boooo”和“A bird warbled”中的“b”，但在“A goat
          grunt”中没有匹配。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>+</code>
      </td>
      <td>
        <p>
          将前一项“x”匹配 1
          次或更多次。等价于 <code>{1,}</code>。例如，<code>/a+/</code> 匹配“candy”中的“a”和“caaaaaaandy”中的所有“a”。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>?</code>
      </td>
      <td>
        <p>
          将前面的项“x”匹配 0 或 1 次。例如，<code>/e?le?/</code> 匹配“angel”中的“el”和“angle”中的“le”。
        </p>
        <p>
          如果立即在任何 <code>*</code>、<code>+</code>、<code>?</code> 或 <code>{}</code> 量词之后使用，则使量词变为非贪婪匹配（匹配最小次数），而不是默认的贪婪匹配（匹配最大次数）。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>}</code>
      </td>
      <td>
        <p>
          其中“n”是一个非负整数，与前一项“x”至少匹配“n”次。例如，<code>/a{2}/</code
          > 不匹配“candy”中的“a”，但它匹配“caandy”中的所有“a”，以及“caaandy”中的前两个“a”。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,}</code>
      </td>
      <td>
        <p>
          其中“n”是一个非负整数，与前一项“x”至少匹配“n”次。例如，<code>/a{2，}/</code> 不匹配“candy”中的“a”，但匹配“caandy”和“caaaaaaandy”中的所有
          a。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,<em>m</em>}</code>
      </td>
      <td>
        <p>
          其中“n”和“m”为非负整数，并且 <code><em>m</em> >= <em>n</em></code>。与项“x”至少匹配“n”次，至多匹配“m”次。例如，<code>/a{1,3}/</code> 不匹配“cndy”中的任何内容，而匹配“candy”中的“a”、“caandy”中的两个“a”以及“caaaaaandy”中的前三个“a”。请注意，在匹配“caaaaaandy”时，匹配的是“aaa”，尽管原始字符串中有更多的“a”。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code><em>x</em>*?</code><br /><code><em>x</em>+?</code><br /><code
            ><em>x</em>??</code
          ><br /><code><em>x</em>{n}?</code><br /><code><em>x</em>{n,}?</code
          ><br /><code><em>x</em>{n,m}?</code>
        </p>
      </td>
      <td>
        <p>
          默认情况下，像 <code>*</code> 和 <code>+</code> 这样的量词是“贪婪的”，这意味着它们试图匹配尽可能多的字符串。量词后面的字符 <code>?</code> 使量词“不贪婪”：它一旦找到匹配就会停止。例如，给定一个字符串“some &#x3C;foo> &#x3C;bar> new &#x3C;/bar> &#x3C;/foo> thing”:
        </p>
        <ul>
          <li>
            <code>/&#x3C;.*>/</code> 将匹配“&#x3C;foo> &#x3C;bar> new
            &#x3C;/bar> &#x3C;/foo>”
          </li>
          <li><code>/&#x3C;.*?>/</code> 将匹配“&#x3C;foo>”</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 示例

### 重复模式

```js
const wordEndingWithAs = /\w+a+\b/;
const delicateMessage = "This is Spartaaaaaaa";

console.table(delicateMessage.match(wordEndingWithAs)); // [ "Spartaaaaaaa" ]
```

### 统计单词

```js
const singleLetterWord = /\b\w\b/g;
const notSoLongWord = /\b\w{2,6}\b/g;
const longWord = /\b\w{13,}\b/g;

const sentence = "Why do I have to learn multiplication table?";

console.table(sentence.match(singleLetterWord)); // ["I"]
console.table(sentence.match(notSoLongWord)); // [ "Why", "do", "have", "to", "learn", "table" ]
console.table(sentence.match(longWord)); // ["multiplication"]
```

### 可选字符

```js
const britishText = "He asked his neighbour a favour.";
const americanText = "He asked his neighbor a favor.";

const regexpEnding = /\w+ou?r/g;
// \w+ 一个及以上字母
// o   跟随字母“o”，
// u?  可能跟随字母“u”
// r   跟随字母“r”

console.table(britishText.match(regexpEnding));
// ["neighbour", "favour"]

console.table(americanText.match(regexpEnding));
// ["neighbor", "favor"]
```

### 贪婪匹配与非贪婪匹配

```js
const text = "I must be getting somewhere near the center of the earth.";
const greedyRegexp = /[\w ]+/;
// [\w ]      一个拉丁字母或一个空格
//      +     匹配一次及以上

console.log(text.match(greedyRegexp)[0]);
// "I must be getting somewhere near the center of the earth"
// 几乎所有文本都匹配（除了点字符）

const nonGreedyRegexp = /[\w ]+?/; // 注意问号
console.log(text.match(nonGreedyRegexp));
// "I"
// 尽可能少的匹配
```

## 参见

- [正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)指南
- [字符类](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)指南
- [断言](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)指南
- [组和反向引用](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)指南
- [`RegExp`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
