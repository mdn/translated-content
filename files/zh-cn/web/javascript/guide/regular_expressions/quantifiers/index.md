---
title: 量词
slug: Web/JavaScript/Guide/Regular_expressions/Quantifiers
---

{{jsSidebar("JavaScript Guide")}}

量词表示要匹配的字符或表达式的数量。

{{EmbedInteractiveExample("pages/js/regexp-quantifiers.html", "taller")}}

## 类型

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Characters</th>
      <th scope="col">Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><em>x</em>*</code>
      </td>
      <td>
        <p>
          将前面的项“x”匹配 0 次或更多次。例如，/bo*/匹配“A ghost
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
          次或更多次。等价于{1,}。例如，/a+/匹配“candy”中的“a”和“caaaaaaandy”中的“a”。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>?</code>
      </td>
      <td>
        <p>
          将前面的项“x”匹配 0 或 1 次。例如，/e?le?/匹配 angel 中的 el 和 angle
          中的 le。
        </p>
        <p>
          如果立即在任何量词*、+、?或{}之后使用，则使量词是非贪婪的
          (匹配最小次数)，而不是默认的贪婪的 (匹配最大次数)。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>}</code>
      </td>
      <td>
        <p>
          其中“n”是一个正整数，与前一项“x”的 n 次匹配。例如，<code>/a{2}/ </code
          >不匹配“candy”中的“a”，但它匹配“caandy”中的所有“a”，以及“caaandy”中的前两个“a”。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,}</code>
      </td>
      <td>
        <p>
          其中，“n”是一个正整数，与前一项“x”至少匹配“n”次。例如，<code>/a{2，}/</code>不匹配“candy”中的“a”，但匹配“caandy”和“caaaaaaandy”中的所有
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
          其中，“n”是 0 或一个正整数，“m”是一个正整数，而 m > n
          至少与前一项“x”匹配，最多与“m”匹配。例如，/a{1,3}/不匹配“cndy”中的“a”，“candy”中的“a”，“caandy”中的两个“a”，以及“caaaaaaandy”中的前三个“a”。注意，当匹配“caaaaaaandy”时，匹配的是“aaa”，即使原始字符串中有更多的“a”。
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
          默认情况下，像 <code>* </code>和
          <code>+ </code
          >这样的量词是“贪婪的”，这意味着它们试图匹配尽可能多的字符串。?量词后面的字符使量词“非贪婪”：意思是它一旦找到匹配就会停止。例如，给定一个字符串“some
          &#x3C;foo> &#x3C;bar> new &#x3C;/bar> &#x3C;/foo> thing”:
        </p>
        <ul>
          <li>
            <code>/&#x3C;.*>/</code> will match "&#x3C;foo> &#x3C;bar> new
            &#x3C;/bar> &#x3C;/foo>"
          </li>
          <li><code>/&#x3C;.*?>/</code> will match "&#x3C;foo>"</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 举例说明

### 重复模式

```js
var wordEndingWithAs = /\w+a+/;
var delicateMessage = "This is Spartaaaaaaa";

console.table(delicateMessage.match(wordEndingWithAs)); // [ "Spartaaaaaaa" ]
```

### 计算字符集

```js
var singleLetterWord = /\b\w\b/g;
var notSoLongWord = /\b\w{1,6}\b/g;
var loooongWord = /\b\w{13,}\b/g;

var sentence = "Why do I have to learn multiplication table?";

console.table(sentence.match(singleLetterWord)); // ["I"]
console.table(sentence.match(notSoLongWord)); // [ "Why", "do", "I", "have", "to", "learn", "table" ]
console.table(sentence.match(loooongWord)); // ["multiplication"] 可选可选字符
```

### 可选字符

```js
var britishText = "He asked his neighbour a favour.";
var americanText = "He asked his neighbor a favor.";

var regexpEnding = /\w+ou?r/g;
// \w+ One or several letters
// o   followed by an "o",
// u?  optionally followed by a "u"
// r   followed by an "r"

console.table(britishText.match(regexpEnding));
// ["neighbour", "favour"]

console.table(americanText.match(regexpEnding));
// ["neighbor", "favor"]
```

### 贪婪 与 非贪婪的

```js
var text = "I must be getting somewhere near the centre of the earth.";
var greedyRegexp = /[\w ]+/;
// [\w ]      a letter of the latin alphabet or a whitespace
//      +     one or several times

console.log(text.match(greedyRegexp)[0]);
// "I must be getting somewhere near the centre of the earth"
// almost all of the text matches (leaves out the dot character)

var nonGreedyRegexp = /[\w ]+?/; // Notice the question mark
console.log(text.match(nonGreedyRegexp));
// "I"
// The match is the smallest one possible
```

## 参见

- [Regular expressions guide](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)

  - [Character classes](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
  - [Assertions](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)
  - [Unicode property escapes](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
  - [Groups and ranges](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_Ranges)

- [The `RegExp()` constructor](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
