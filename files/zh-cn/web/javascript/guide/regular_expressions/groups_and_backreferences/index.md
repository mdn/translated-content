---
title: 组和反向引用
slug: Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences
---

组将多个模式组合为一个整体，而在使用正则表达式模式与字符串进行匹配时，捕获组会提供额外的子匹配信息。反向引用是指同一正则表达式中先前捕获的组。

{{InteractiveExample("JavaScript 演示：正则表达式组与反向引用")}}

```js interactive-example
// 组
const imageDescription = "This image has a resolution of 1440×900 pixels.";
const regexpSize = /(\d+)×(\d+)/;
const match = imageDescription.match(regexpSize);
console.log(`Width: ${match[1]} / Height: ${match[2]}.`);
// 期望输出："Width: 1440 / Height: 900."

// 反向引用
const findDuplicates = "foo foo bar";
const regex = /\b(\w+)\s+\1\b/g;
console.log(findDuplicates.match(regex));
// 期望输出：Array ["foo foo"]
```

## 类型

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">字符集</th>
      <th scope="col">含义</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><em>x</em>|<em>y</em></code>
      </td>
      <td>
        <p>
          匹配 "x" 或 "y" 任意一个字符。例如， <code>/green|red/</code> 在
          "green apple" 里匹配 "green"，且在 "red apple" 里匹配 "red" 。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>[xyz]<br />[a-c]</code>
      </td>
      <td>
        <p>
          字符集。
          匹配任何一个包含的字符。你可以使用连字符来指定字符范围，但如果连字符显示为方括号中的第一个或最后一个字符，则它将被视为作为普通字符包含在字符集中的文字连字符。也可以在字符集中包含字符类。
        </p>
        <p>
          例如，<code>[abcd]</code> 是与<code>[a-d]</code>.一样的，它们会
          在"brisket" 中匹配 "b",在 "chop" 中匹配 "c" .
        </p>
        <p>
          例如，<code>[abcd-]</code> 和<code>[-abcd]</code> 将会在 "brisket"
          匹配 "b" , 在 "chop" 匹配 "c" , 并且匹配 "non-profit" 中的 "-"
          (连字符)
        </p>
        <p>
          例如，<code>[\w-]</code> 是字符集 \w 和
          “-”（连字符）的并集，与这种写法一样：
          <code>[A-Za-z0-9_-]</code>.。他们都会 在 "brisket"中匹配“b”, 在
          "chop"中匹配“c”, 在 "non-profit" 中匹配 "n"。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>[^xyz]<br />[^a-c]</code>
        </p>
      </td>
      <td>
        <p>
          一个否定的或被补充的字符集。也就是说，它匹配任何没有包含在括号中的字符。可以通过使用连字符来指定字符范围，但是如果连字符作为方括号中的第一个或最后一个字符出现，那么它将被视为作为普通字符包含在字符集中。例如，[^abc]
          和 [^a-c] 一样。它们最初匹配“bacon”中的“o”和“chop”中的“h”。
        </p>
        <div class="note">
          <p>
            <strong>备注：</strong> ^ 字符也可以表示
            <a
              href="/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"
              >输入的起始</a
            >
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>(<em>x</em>)</code></td>
      <td>
        <p>
          <strong>捕获组：</strong>匹配 x
          并记住匹配项。例如，/(foo)/匹配并记住“foo bar”中的“foo”
        </p>
        <p>
          正则表达式可以有多个捕获组。结果，匹配通常在数组中捕获的组，该数组的成员与捕获组中左括号的顺序相同。这通常只是捕获组本身的顺序。当捕获组被嵌套时，这一点非常重要。使用结果元素的索引
          (<code>[1], ..., [n]</code>) 或从预定义的
          <code>RegExp</code> 对象的属性 (<code>$1, ..., $9</code>).
        </p>
        <p>
          捕获组会带来性能损失。如果不需要收回匹配的子字符串，请选择非捕获括号
          (见下面)。
        </p>
        <p>
          <code
            ><a
              href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match"
              >String.match()</a
            ></code
          >
          不会返回组，如果设置了 <code>/.../g</code> 标志。但是，你仍然可以使用
          <code
            ><a
              href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll"
              >String.matchAll()</a
            ></code
          >
          to get all matches.
        </p>
        <p>
          match() 不会返回组，如果/…但是，你仍然可以使用 String.matchAll()
          来获取所有匹配项。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\<em>n</em></code>
      </td>
      <td>
        <p>
          <a href="/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Backreference"><strong>反向引用：</strong></a>其中“n”是一个正整数。匹配正则表达式中第 n 个捕获组（按左括号计数）所匹配的相同子字符串。例如，<code>/apple(,)\sorange\1/</code> 匹配“apple, orange, cherry, peach”中的“apple, orange”。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;Name>x)</code></td>
      <td>
        <p>
          <strong>具名捕获组：</strong>匹配"x"并将其存储在返回的匹配项的 groups
          属性中，该属性位于<code>&#x3C;Name></code>指定的名称下。尖括号 (<code
            >&#x3C;</code
          >
          和 <code>></code>) 用于组名。
        </p>
        <p>
          例如，使用正则 <code>/-(?&#x3C;customName>\w)/</code> 匹配“web-doc”
          中的“d”
        </p>
        <p>
          <code
            >'web-doc'.match(/-(?&#x3C;customName>\w)/).groups //{customName:
            "d"}</code
          >
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        <strong>非捕获组：</strong>匹配
        “x”，但不记得匹配。不能从结果数组的元素中收回匹配的子字符串 (<code
          >[1], ..., [n]</code
        >) or from the predefined <code>RegExp</code> object's properties (<code
          >$1, ..., $9</code
        >).
      </td>
    </tr>
  </tbody>
</table>

## 示例

### 使用组

```js
let personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

let regexpNames = /First_Name: (\w+), Last_Name: (\w+)/gm;
let match = regexpNames.exec(personList);
do {
  console.log(`Hello ${match[1]} ${match[2]}`);
} while ((match = regexpNames.exec(personList)) !== null);
```

### 使用命名组

```js
let users = `姓氏：李，名字：雷
姓氏：韩，名字：梅梅`;

let regexpNames = /姓氏：(?<first>.+)，名字：(?<last>.+)/gm;
let match = regexpNames.exec(users);

do {
  console.log(`Hello ${match.groups.first} ${match.groups.last}`);
} while ((match = regexpNames.exec(users)) !== null);

// Hellow 李 雷
// Hellow 韩 梅梅
```

### 使用组和反向引用

在此示例中，我们首先使用 `['"]` 匹配单引号或双引号字符，将其记在 `\1` 中；接着使用 `.*?` 匹配任意数量的字符（`*?` 是一个[非贪婪量词](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)），直到再次使用 `\1` 匹配到之前记下的引号字符。`\1` 是对第一个捕获组的反向引用，该捕获组匹配的是同类型的引号。因此，结果将是两个字符串：`"'"` 和 `'"'`。

```js
const quote = `Single quote "'" and double quote '"'`;
const regexpQuotes = /(['"]).*?\1/g;
for (const match of quote.matchAll(regexpQuotes)) {
  console.log(match[0]);
}
```

更多示例请参见[反向引用](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)参考文档。

## 参见

- [正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)指南
- [字符类](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)指南
- [断言](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)指南
- [量词](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)指南
- [`RegExp`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)参考
- [反向引用：`\1`、`\2`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
- [捕获组：`(...)`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [具名反向引用：`\k<name>`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [具名捕获组：`(?<name>...)`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [非捕获组：`(?:...)`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
