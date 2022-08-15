---
title: RegExp.prototype.exec()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/exec
tags:
  - '## lastIndex bug???'
  - JavaScript
  - Method
  - Prototype
  - RegExp
  - Regular Expressions
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/exec
---
{{JSRef}}

**`exec() `**方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 {{jsxref("null")}}。

在设置了 {{jsxref("RegExp.global", "global")}} 或 {{jsxref("RegExp.sticky", "sticky")}} 标志位的情况下（如 `/foo/g` or `/foo/y`），JavaScript {{jsxref("RegExp")}} 对象是**有状态**的。他们会将上次成功匹配后的位置记录在 {{jsxref("RegExp.lastIndex", "lastIndex")}} 属性中。使用此特性，`exec()` 可用来对单个字符串中的多次匹配结果进行逐条的遍历（包括捕获到的匹配），而相比之下， {{jsxref("String.prototype.match()")}} 只会返回匹配到的结果。

如果你只是为了判断是否匹配（true 或 false），可以使用 {{jsxref("RegExp.test()")}} 方法，或者 {{jsxref("String.search()")}} 方法。

{{EmbedInteractiveExample("pages/js/regexp-prototype-exec.html")}}

## 语法

```plain
regexObj.exec(str)
```

### 参数

- `str`
  - : 要匹配正则表达式的字符串。

### 返回值

如果匹配成功，`exec()` 方法返回一个数组（包含额外的属性 `index` 和 `input` ，参见下方表格），并更新正则表达式对象的 {{jsxref("RegExp.lastIndex", "lastIndex")}} 属性。完全匹配成功的文本将作为返回数组的第一项，从第二项起，后续每项都对应正则表达式内捕获括号里匹配成功的文本。

如果匹配失败，`exec()` 方法返回 {{jsxref("null")}}，并将 {{jsxref("RegExp.lastIndex", "lastIndex")}} 重置为 0 。

## 描述

考虑以下示例：

```js
// Match "quick brown" followed by "jumps", ignoring characters in between
// Remember "brown" and "jumps"
// Ignore case
var re = /quick\s(brown).+?(jumps)/ig;
var result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');
```

下表列出这个脚本的返回值：

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>对象</th>
      <th>属性/索引</th>
      <th>描述</th>
      <th>例子</th>
    </tr>
    <tr>
      <td rowspan="4"><code>result</code></td>
      <td><code>[0]</code></td>
      <td>匹配的全部字符串</td>
      <td><code>Quick Brown Fox Jumps</code></td>
    </tr>
    <tr>
      <td>
        <code>[1], ...[<em>n</em> ]</code>
      </td>
      <td>括号中的分组捕获</td>
      <td>
        <code>[1] = Brown<br />[2] = Jumps</code>
      </td>
    </tr>
    <tr>
      <td><code>index</code></td>
      <td>匹配到的字符位于原始字符串的基于 0 的索引值</td>
      <td><code>4</code></td>
    </tr>
    <tr>
      <td><code>input</code></td>
      <td>原始字符串</td>
      <td><code>The Quick Brown Fox Jumps Over The Lazy Dog</code></td>
    </tr>
    <tr>
      <td rowspan="5"><code>re</code></td>
      <td><code>lastIndex</code></td>
      <td>下一次匹配开始的位置</td>
      <td><code>25</code></td>
    </tr>
    <tr>
      <td><code>ignoreCase</code></td>
      <td>是否使用了 "<code>i</code>" 标记使正则匹配忽略大小写</td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td><code>global</code></td>
      <td>是否使用了 "<code>g</code>" 标记来进行全局的匹配。</td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td><code>multiline</code></td>
      <td>
        <p>
          是否使用了 "<code>m</code>" 标记使正则工作在多行模式（也就是，^ 和 $
          可以匹配字符串中每一行的开始和结束（行是由 \n 或 \r
          分割的），而不只是整个输入字符串的最开始和最末尾处。）
        </p>
      </td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>source</code></td>
      <td>正则匹配的字符串</td>
      <td><code>quick\s(brown).+?(jumps)</code></td>
    </tr>
  </tbody>
</table>

## 示例

### 查找所有匹配

当正则表达式使用 "`g`" 标志时，可以多次执行 `exec` 方法来查找同一个字符串中的成功匹配。当你这样做时，查找将从正则表达式的 {{jsxref("RegExp.lastIndex", "lastIndex")}} 属性指定的位置开始。（{{jsxref("RegExp.test", "test()")}} 也会更新 `lastIndex` 属性）。注意，即使再次查找的字符串不是原查找字符串时，{{jsxref("RegExp.lastIndex", "lastIndex")}} 也不会被重置，它依旧会从记录的 {{jsxref("RegExp.lastIndex", "lastIndex")}} 开始。

例如，你使用下面的脚本：

```js
var myRe = /ab*/g;
var str = 'abbcdefabh';
var myArray;
while ((myArray = myRe.exec(str)) !== null) {
  var msg = 'Found ' + myArray[0] + '. ';
  msg += 'Next match starts at ' + myRe.lastIndex;
  console.log(msg);
}
```

脚本运行结果如下：

```plain
Found abb. Next match starts at 3
Found ab. Next match starts at 9
```

> **警告：** 不要把正则表达式字面量（或者{{jsxref("RegExp")}}构造器）放在 `while` 条件表达式里。由于每次迭代时 {{jsxref("RegExp.lastIndex", "lastIndex")}} 的属性都被重置，如果匹配，将会造成一个死循环。并且要确保使用了'g'标记来进行全局的匹配，否则同样会造成死循环。

### 结合 `RegExp` 字面量使用 `exec()`

你也可以直接使用 `exec()` 而不是创建一个 {{jsxref("RegExp")}} 对象：

```js
var matches = /(hello \S+)/.exec('This is a hello world!');
console.log(matches[1]);
```

运行上面的代码，控制台会输出"hello world!" 字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [Regular Expressions](/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions) chapter in the [JavaScript Guide](/zh-CN/docs/Web/JavaScript/Guide)
- {{jsxref("RegExp")}}
