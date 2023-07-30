---
title: 字符类
slug: Web/JavaScript/Guide/Regular_expressions/Character_classes
---

{{JSSidebar("JavaScript Guide")}}

字符类可以区分各种字符，例如区分字母和数字。

{{EmbedInteractiveExample("pages/js/regexp-character-classes.html")}}

## 类型

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">字符</th>
   <th scope="col">含义</th>
  </tr>
 </thead>
 <tbody>
 </tbody>
 <tbody>
  <tr>
   <td>
    <code>[xyz]<br />[a-c]</code>
   </td>
   <td>
    <p>一个字符类。匹配包含在方括号中的任何字符。你可以使用连字符指定字符范围，但如果连字符出现在方括号中的第一个或最后一个字符，则将其视为字面连字符，作为普通字符包含在字符类中。</p>
    <p>例如，<code>[abcd]</code> 与 <code>[a-d]</code> 相同。它们匹配“brisket”中的“b”和“chop”中的“c”。</p>
    <p>例如，<code>[abcd-]</code> 和 <code>[-abcd]</code> 匹配“brisket”中的“b”、“chop”中的“c”和“non-profit”中的“-”（连字符）。</p>
    <p>例如，<code>[\w-]</code> 与 <code>[A-Za-z0-9_-]</code> 相同。它们都匹配“brisket”中的“b”、“chop”中的“c”和“non-profit”中的“n”。</p>
   </td>
  </tr>
  <tr>
   <td>
    <p>
     <code>[^xyz]<br />[^a-c]</code>
    </p>
   </td>
   <td>
    <p>一个否定或补充的字符类。也就是说，它匹配未包含在方括号中的任何字符。你可以使用连字符指定字符范围，但如果连字符出现在<code>^</code>后的第一个字符或方括号中的或最后一个字符，则将其视为字面连字符，作为普通字符包含在字符类中。例如，<code>[^abc]</code> 与 <code>[^a-c]</code> 相同。它们首先匹配“bacon”中的“o”和“chop”中的“h”。</p>
    <div class="notecard note">
     <p><strong>备注：</strong> ^ 字符也可以表示<a href="/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Assertions">输入的开始</a>。</p>
    </div>
   </td>
  </tr>
  <tr>
   <td><code>.</code></td>
   <td>
    <p>有下列含义之一：</p>
    <ul>
     <li>匹配除行终止符之外的任何单个字符：<code>\n</code>, <code>\r</code>, <code>\u2028</code> or <code>\u2029</code>. 例如，<code>/.y/</code> 在“yes make my day”中匹配“my”和“ay”，而不是“yes”。</li>
     <li>在字符集内，点失去了它的特殊意义，并与文字点匹配。</li>
    </ul>
    <p>需要注意的是，<code>m</code> multiline 标志不会改变点的行为。因此，要跨多行匹配一个模式，可以使用字符集<code>[^]</code>—它将匹配任何字符，包括新行。</p>
    <p><code>s</code>“dotAll”标志允许点也匹配行终止符。</p>
   </td>
  </tr>
  <tr>
   <td><code>\d</code></td>
   <td>
    <p>匹配任何数字 (阿拉伯数字)。相当于 <code>[0-9]</code>。例如，<code>/\d/</code> 或 <code>/[0-9]/</code> 匹配“B2is the suite number”中的“2”。</p>
   </td>
  </tr>
  <tr>
   <td><code>\D</code></td>
   <td>
    <p>匹配任何非数字 (阿拉伯数字) 的字符。相当于<code>[^0-9]</code>。例如，<code>/\D/</code> 或者 <code>/[^0-9]/</code> 匹配“B2 is the suite number”中的“B”。</p>
   </td>
  </tr>
  <tr>
   <td><code>\w</code></td>
   <td>
    <p>匹配基本拉丁字母中的任何字母数字字符，包括下划线。相当于 <code>[A-Za-z0-9_]</code>。例如，<code>/\w/</code> 匹配“apple”中的“a”，匹配“$5.28”中的“5”，匹配“3D”中的“3”，以及匹配“Émanuel”中的“m”。</p>
   </td>
  </tr>
  <tr>
   <td><code>\W</code></td>
   <td>
    <p>匹配任何不是来自基本拉丁字母的单词字符。相当于 <code>[^A-Za-z0-9_]</code>。例如，<code>/\W/</code> 或者 <code>/[^A-Za-z0-9_]/</code> 匹配“50%”中的“%”，以及匹配“Émanuel”中的“É”。</p>
   </td>
  </tr>
  <tr>
   <td><code>\s</code></td>
   <td>
    <p>匹配单个空白字符，包括空格、制表符、换页符、换行符和其他 Unicode 空格。相当于
      <code>[\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>。例如，<code>\s\w*/</code> 匹配“foo bar”中的“bar”。
    </p>
   </td>
  </tr>
  <tr>
   <td><code>\S</code></td>
   <td>
    <p>匹配除空格以外的单个字符。相当于
      <code>[^\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>。例如，<code>/\S\w*/</code> 匹配“foo bar”中的“foo”。
    </p>
   </td>
  </tr>
  <tr>
   <td><code>\t</code></td>
   <td>匹配水平制表符。</td>
  </tr>
  <tr>
   <td><code>\r</code></td>
   <td>匹配回车符。</td>
  </tr>
  <tr>
   <td><code>\n</code></td>
   <td>匹配换行符。</td>
  </tr>
  <tr>
   <td><code>\v</code></td>
   <td>匹配垂直制表符。</td>
  </tr>
  <tr>
   <td><code>\f</code></td>
   <td>匹配换页符。</td>
  </tr>
  <tr>
   <td><code>[\b]</code></td>
   <td>匹配退格键。如果您正在寻找单词边界字符（<code>\b</code>），请参阅<a href="/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Assertions">断言</a>。</td>
  </tr>
  <tr>
   <td><code>\0</code></td>
   <td>匹配一个 NUL 字符。不要在此后面加上另一个数字。</td>
  </tr>
  <tr>
   <td><code>\c<em>X</em></code></td>
   <td>
    <p>使用<a href="https://en.wikipedia.org/wiki/Caret_notation">插入符号</a>匹配控制字符，其中“X”是 A–Z 中的一个字母（对应于代码点 <code>U+0001</code><em>–</em><code>U+001F</code>）。例如，<code>/\cM\cJ/</code>匹配“\r\n”。</p>
   </td>
  </tr>
  <tr>
   <td><code>\x<em>hh</em></code></td>
   <td>匹配与代码 <code><em>hh</em></code>（两个十六进制数字）对应的字符。</td>
  </tr>
  <tr>
   <td><code>\u<em>hhhh</em></code></td>
   <td>匹配与值 <code><em>hhhh</em></code>（四个十六进制数字）对应的 UTF-16 代码单元。</td>
  </tr>
  <tr>
   <td><code>\u<em>{hhhh}</em> 或 <em>\u{hhhhh}</em></code></td>
   <td>（仅当设置了 <code>u</code> 标志时。）匹配与 Unicode 值 <code>U+<em>hhhh</em></code> 或 <code>U+<em>hhhhh</em></code>（十六进制数字）对应的字符。</td>
  </tr>
  <tr>
    <td>
      <code>\p{<em>UnicodeProperty</em>}</code>，<code>\P{<em>UnicodeProperty</em>}</code>
    </td>
    <td>
      根据字符的 <a href="/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape">Unicode 字符属性</a>匹配字符（例如，仅匹配表情符号字符、日文<em>片假名</em>字符、中文汉字字符或日文汉字字符等）。
    </td>
  </tr>
  <tr>
   <td><code>\</code></td>
   <td>
    <p>指示应特殊处理或“转义”后面的字符。它表现为两种方式之一。</p>
    <ul>
     <li>对于通常按字面处理的字符，表示下一个字符是特殊的，不能按字面解释。例如，<code>/b/</code> 匹配字符“b”。通过在“b”前面放置反斜杠，即使用 <code>/\b/</code>，字符变得特殊以表示匹配单词边界。</li>
     <li>对于通常被特殊对待的字符，表示下一个字符不是特殊的，应该按字面意思解释。例如，“*”是一个特殊字符，表示应该匹配前面的字符出现 0 次或多次；例如，<code>/a*/</code> 示匹配 0 个或多个“a”。要从字面上匹配 <code>*</code> 需在其前面加上反斜杠；例如，<code>/a\*/</code> 匹配“a*”。</li>
    </ul>
    <div class="notecard note">
    <p><strong>备注：</strong>要从字面上匹配此字符，请将其转义。换句话说就是搜索 <code>\</code> 需要使用 <code>/\\/</code>。</p>
    </div>
   </td>
  </tr>
  <tr>
   <td>
    <code><em>x</em>|<em>y</em></code>
   </td>
   <td>
    <p>
     <strong>析取：</strong>匹配“x”或“y”。每个由管道符 (<code>|</code>) 分隔的部分称为一个<em>可选项</em>。例如，<code>/green|red/</code> 匹配“green apple”中的“green”和“red apple”中的“red”。
    </p>
    <div class="notecard note">
     <p>
      <strong>备注：</strong> 析取是指定“一组选择”的另一种方式，但它不是字符类。析取不是原子的——你需要使用<a href="/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences">组</a>使其成为一个更大的模式的一部分。<code>[abc]</code> 在功能上等同于 <code>(?:a|b|c)</code>。
     </p>
    </div>
   </td>
  </tr>
 </tbody>
</table>

## 示例

### 寻找一系列数字

```js
const randomData = "015 354 8787 687351 3512 8735";
const regexpFourDigits = /\b\d{4}\b/g;
// \b 表示边界（即不要在单词中间开始匹配）
// \d{4} 表示一个数字，四次
// \b 表示另一个边界（即不要在单词中间结束匹配）

console.table(randomData.match(regexpFourDigits));
// ['8787', '3512', '8735']
```

### 寻找以 A 开头的拉丁字母单词

```js
const aliceExcerpt =
  "I'm sure I'm not Ada,' she said, 'for her hair goes in such long ringlets, and mine doesn't go in ringlets at all.";
const regexpWordStartingWithA = /\b[aA]\w+/g;
// \b 表示边界（即不要在单词中间开始匹配）
// [aA] 表示字母 a 或 A
// \w+ 表示任何*拉丁字母*字符，多次

console.table(aliceExcerpt.match(regexpWordStartingWithA));
// ['Ada', 'and', 'at', 'all']
```

### 寻找一个 Unicode 字符的单词

代替拉丁字母，我们可以使用一系列 Unicode 字符来识别一个单词（从而能够处理其他语言的文本，如中文、俄语或阿拉伯语）。Unicode 的“基本多文种平面（Basic Multilingual Plane）”包含世界各地使用的大部分字符，我们可以使用字符类和范围来匹配用这些字符编写的单词。

```js
const nonEnglishText = "爱丽丝 梦游 仙境";
const regexpBMPWord = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
// 基本多文种平面范围是 U+0000 到 U+FFFF 但空格是 U+0020

console.table(nonEnglishText.match(regexpBMPWord));
["爱丽丝", "梦游", "仙境"];
```

### 计算元音个数

```js
const aliceExcerpt =
  "There was a long silence after this, and Alice could only hear whispers now and then.";
const regexpVowels = /[AEIOUYaeiouy]/g;

console.log("元音数：", aliceExcerpt.match(regexpVowels).length);
// 元音数：26
```

## 参见

- [正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)

  - [断言](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)
  - [量词](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)
  - [Unicode 属性转义](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
  - [组和后向引用](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)

- [`RegExp()` 构造函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [CharacterClass in the ECMAScript specification](https://tc39.es/ecma262/multipage/text-processing.html#sec-characterclass)
