---
title: 有用的字符串方法
short-title: 字符串方法
slug: Learn_web_development/Core/Scripting/Useful_string_methods
l10n:
  sourceCommit: 003b6ceec6ecd0a3e36046a8515ab7fbc8dc220d
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting/Test_your_skills/Strings", "Learn_web_development/Core/Scripting")}}

我们已经学习了字符串的基础知识，现在让我们更进一步，思考一下我们可以用内置方法对字符串做一些什么有用的操作，例如查询文本字符串的长度、拼接和分割字符串、将字符串中的一个字符替换为另一个字符，等。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>了解 <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content">HTML</a>、<a href="/zh-CN/docs/Learn_web_development/Core/Styling_basics">CSS 的基本原理</a>以及<a href="/zh-CN/docs/Learn_web_development/Core/Scripting/Strings">字符串的基础知识</a>。</td>
    </tr>
    <tr>
      <th scope="row">学习成果：</th>
      <td>使用 JavaScript 内置的常用属性和方法对字符串进行操作。</td>
    </tr>
  </tbody>
</table>

## 把字符串当作对象

在 JavaScript 中，大多数值都能够当做对象来使用。当你使用如下方法创建了一个字符串时：

```js
const string = "这是我的字符串";
```

虽然变量本身不是一个对象，但由于在对其进行属性访问时它可被作为对象使用，所以其依然拥有大量可用的属性与方法。去看看 {{jsxref("String")}} 对象页面，看看页面侧边的列表，你会对可用属性与方法的数量有一个直观的感受。

**你现在可能会有些大脑宕机，不过别紧张**，在学习进程的早期你并不需要了解其中的大部分内容。接下来我们来学习你将会经常使用的一些知识。

让我们在[浏览器开发者控制台](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)里输入一些示例。

## 查询字符串的长度

这很简单——你可以使用 {{jsxref("String.prototype.length", "length")}} 属性。尝试输入以下的两行代码：

```js
const browserType = "mozilla";
browserType.length;
```

这段代码应该返回数字 7，因为 "mozilla" 的长度为 7 个字符。这个操作出于许多原因非常有用，例如，你可能会想算出一系列名字的长度以便按名字长度为顺序来显示它们，又或者当用户在表单字段里输入的用户名太长以至于超过了某个规定的长度时对他们进行提示。

## 获取字符串中的指定字符

值得一提的是，你可以使用**方括号表示法**返回字符串中的任意字符——意思是你可以在变量名的末尾添加方括号（`[]`）。在方括号内，你可以添加想要返回的字符的编号，例如，要返回第一个字母，你可以这样做：

```js
browserType[0];
```

记住：计算机从 0 开始计数，而不是从 1 开始！

要获取*任意*字符串的最后一个字符，我们可以使用下面这行代码，将这个技巧与我们上面提到的 `length` 属性相结合起来：

```js
browserType[browserType.length - 1];
```

字符串 "mozilla" 的长度为 7，但由于计数从 0 开始，所以最后一个字符的位置为 6，使用 `length-1` 即可获取最后一个字符。

## 检查一个字符串是否包含某个子字符串

有时候你会想要知道一个较小的字符串是否存在于一个较大的字符串中（我们通常会说*一个子字符串是否存在于另一个字符串中*）。这可以使用 {{jsxref("String.prototype.includes()","includes()")}} 方法来完成，该方法需要一个{{glossary("parameter", "参数")}}——你想要搜索的子字符串。

如果字符串中包含指定的子字符串，它会返回 `true`，否则返回 `false`。

```js
const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("发现 zilla！");
} else {
  console.log("没有 zilla！");
}
```

你经常会想知道一个字符串是否以某个具体的子字符串开头或结尾。这是一个十分常见的需求，有两个方法可以用来做这件事：{{jsxref("String.prototype.startsWith()", "startsWith()")}} 和 {{jsxref("String.prototype.endsWith()", "endsWith()")}}

```js
const browserType = "mozilla";

if (browserType.startsWith("zilla")) {
  console.log("以 zilla 开头！");
} else {
  console.log("**不**以 zilla 开头！");
}
```

```js
const browserType = "mozilla";

if (browserType.endsWith("zilla")) {
  console.log("以 zilla 结尾！");
} else {
  console.log("**不**以 zilla 结尾！");
}
```

## 在字符串中查找某个子字符串的位置

你可以使用 {{jsxref("String.prototype.indexOf()", "indexOf()")}} 方法来在一个较大的字符串中查找一个子字符串的位置。这个方法接收两个{{glossary("parameter", "参数")}}——你想要搜索的子字符串、一个可选的参数指定搜索的起始位置。

如果字符串包含该子字符串，`indexOf()` 返回子字符串第一次出现的下标。如果字符串不包含该子字符串，`indexOf()` 返回 `-1`。

```js
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20
```

如果你从字符串的开头开始数字符（包括空白字符）的数量，从 `0` 开始，子字符串 `"developers"` 第一次出现是在下标 `20`。

```js
console.log(tagline.indexOf("x")); // -1
```

而这一段代码则返回 `-1`，因为字符 `x` 没有在字符串中出现。

现在你已经知道了如何查找子字符串第一次出现的位置，那么该如何继续查找子字符串出现的位置呢？你可以通过将一个大于上一次出现下标的值作为第二个参数传入方法来实现。

```js
const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35
```

在这里我们告诉方法在下标 `21`（`firstOccurrence + 1`）开始搜索子字符串 `"developers"`，然后它返回了下标 `35`。

## 从字符串提取子字符串

你可以使用 {{jsxref("String.prototype.slice()", "slice()")}} 方法来从一个字符串提取子字符串。你需要传入：

- 提取的起始下标
- 提取的终止下标，不含该下标，也即在这个下标处的字符不会包含在提取出的子字符串中。

示例：

```js
const browserType = "mozilla";
console.log(browserType.slice(1, 4)); // "ozi"
```

在下标 `1` 处的字符是 `"o"`，在下标 4 处的字符是 `"l"`。所以我们会提取从 `"o"` 开始到 `"l"` 前的所有字符，获得 `"ozi"`。

如果你想要提取字符串中某个字符后余下的所有字符，你不需要添加第二个参数，只需要添加你想要从字符串中提取余下字符的那个字符的位置。尝试以下代码：

```js
browserType.slice(2); // "zilla"
```

这段代码会返回 `"zilla"`——因为位于下标 2 处的字符是字母 `"z"`，并且因为你没有添加第二个参数，返回的子字符串会是字符串中余下的所有字符。

> [!NOTE]
> `slice()` 还有其他的配置方式，前往 {{jsxref("String.prototype.slice()", "slice()")}} 页面看看你还能学到什么。

## 转换大小写

字符串方法 {{jsxref("String.prototype.toLowerCase()","toLowerCase()")}} 和 {{jsxref("String.prototype.toUpperCase()","toUpperCase()")}} 接收一个字符串并分别将所有字符转换为小写或大写。如果你要在将数据存储到数据库之前规范化用户输入的所有数据，这会非常有用。

让我们尝试输入以下几行来看看会发生什么：

```js
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());
```

## 替换字符串的某部分

你可以使用 {{jsxref("String.prototype.replace()","replace()")}} 方法将字符串中的一个子字符串替换为另一个子字符串。

在这个例子中，我们会提供两个参数——我们想要替换的字符串和我们想要作为替代的字符串：

```js
const browserType = "mozilla";
const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"
```

注意，和许多字符串方法相同，`replace()` 不会修改调用它的那一个字符串，而是返回一个新的字符串。如果你想要更新原本的 `browserType` 变量，你需要像这样做：

```js
let browserType = "mozilla";
browserType = browserType.replace("moz", "van");

console.log(browserType); // "vanilla"
```

同时注意，我们现在需要用 `let` 来声明 `browserType`，而不是用 `const`，因为我们要对它重新赋值。

谨记，`replace()` 在这种写法下只会更改子字符串第一次出现的位置。如果你想更改所有出现的位置，你可以使用 {{jsxref("String.prototype.replaceAll()", "replaceAll()")}}：

```js
let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote); // "To code or not to code"
```

## 学习挑战

在本节中，我们会让你尝试自行编写一些操作字符串的代码。在下面的每个练习中，我们会拿到一个字符串数组和一个处理数组中每个值并将其显示在项目符号列表的循环。你现在不需要了解数组和循环——这些会在以后的文章里解释。你需要在每个案例中做的全部事情就是编写能够以我们想要的格式输出字符串的代码。

用演示示例上方的**“Play”**按钮在 MDN Playground 里打开下面的每一个示例，然后遵循指示解决问题。如果你遇到了困难，你可以查看每个案例的演示示例下方的解决方案。

如果你犯了错误，并且无法让代码重新正常运行，你可以用 MDN Playground 的“Reset”按钮来重置代码。

### 过滤问候留言

第一个练习，我们会让你从简单的事情开始——我们有一组问候留言，但我们希望对它们进行整理以只列出圣诞留言。我们希望你在 `if()` 结构中填写条件测试以测试每个字符串，并且仅当它是圣诞留言时，将其显示到列表中。

思考一下你怎么样才能测试每条留言是否是圣诞留言。在那些留言里面都出现了一个什么字符串？你可以用什么方法去测试是否出现了那个字符串？

```html hidden live-sample___string-methods-1
<ul></ul>
```

```js live-sample___string-methods-1
const list = document.querySelector("ul");
const greetings = [
  "生日快乐！",
  "亲爱的，圣诞快乐",
  "愿家家户户都能过一个愉快的圣诞",
  "这个圣诞我想要的只有你",
  "祝早日康复",
];

for (const greeting of greetings) {
  // 你的测试条件需要放在下面一行的括号内，替换掉当前的内容
  if (greeting) {
    const listItem = document.createElement("li");
    listItem.textContent = greeting;
    list.appendChild(listItem);
  }
}
```

{{ EmbedLiveSample("string-methods-1", "100%", 150) }}

<details>
<summary>点击此处查看解决方案</summary>

你最终的 JavaScript 应该像这样：

```js
const list = document.querySelector("ul");
const greetings = [
  "生日快乐！",
  "亲爱的，圣诞快乐",
  "愿家家户户都能过一个愉快的圣诞",
  "这个圣诞我想要的只有你",
  "祝早日康复",
];

for (const greeting of greetings) {
  if (greeting.includes("圣诞")) {
    const listItem = document.createElement("li");
    listItem.textContent = greeting;
    list.appendChild(listItem);
  }
}
```

</details>

### 更正大小写

这个练习以英国城市名称为特色，不过这些名称的大小写乱七八糟。我们想让你修改它们，让它们都变成小写字母，但是首字母大写。一个解决这个问题的好方法是：

1. 将变量 `city` 中含有的整个字符串转换为小写，并将其存储在新变量中。
2. 获取新变量中字符串的第一个字母并将其存储在另一个变量中。
3. 使用最后一个变量作为子字符串，将小写字符串的第一个字母从小写更改为大写。将此替换过程的结果存储在另一个新变量中。
4. 使 `result` 变量的值与最终结果相等，而不是使用 `city` 变量。

> [!NOTE]
> 提示——字符串方法的参数不必是字符串字面量，它们也可以是变量，甚至可以是在变量上调用方法的表达式。

```html hidden live-sample___string-methods-2
<ul></ul>
```

```js live-sample___string-methods-2
const list = document.querySelector("ul");
const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];

for (const city of cities) {
  // 在此处下方书写你的代码

  const result = city;
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}
```

{{ EmbedLiveSample("string-methods-2", "100%", 150) }}

<details>
<summary>点击此处查看解决方案</summary>

你最终的 JavaScript 应该像这样：

```js
const list = document.querySelector("ul");
const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];

for (const city of cities) {
  const lower = city.toLowerCase();
  const firstLetter = lower.slice(0, 1);
  const capitalized = lower.replace(firstLetter, firstLetter.toUpperCase());
  const result = capitalized;
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}
```

</details>

### 从原先部分得到新字符串

在最后一个练习中，有一个包含英格兰北部火车站信息的字符串数组。这些字符串是数据条目，含有三字母车站代码，后面跟一些机器可读数据，接着是分号，然后是人类可读的车站名称。例如：

```plain
MAN675847583748sjt567654;Manchester Piccadilly
```

我们想要提取车站代码和名称，然后将它们一起放到以下结构的字符串中：

```plain
MAN: Manchester Piccadilly
```

我们建议这样做：

1. 提取三字母车站代码并将其存储在一个新的变量中。
2. 查找分号字符的下标。
3. 使用分号字符的下标作为参考点提取人类可读的车站名，并将其存储在新变量中。
4. 将两个新变量和一个字符串字面量拼接起来，制成最终字符串。
5. 将 `result` 变量的值改为最终的字符串，而不是 `station`。

```html hidden live-sample___string-methods-3
<ul></ul>
```

```js live-sample___string-methods-3
const list = document.querySelector("ul");
const stations = [
  "MAN675847583748sjt567654;Manchester Piccadilly",
  "GNF576746573fhdg4737dh4;Greenfield",
  "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
  "SYB4f65hf75f736463;Stalybridge",
  "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];

for (const station of stations) {
  // 在此处下方书写你的代码

  const result = station;
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}
```

{{ EmbedLiveSample("string-methods-3", "100%", 150) }}

<details>
<summary>点击此处查看解决方案</summary>

你最终的 JavaScript 应该像这样：

```js
const list = document.querySelector("ul");
const stations = [
  "MAN675847583748sjt567654;Manchester Piccadilly",
  "GNF576746573fhdg4737dh4;Greenfield",
  "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
  "SYB4f65hf75f736463;Stalybridge",
  "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];

for (const station of stations) {
  const code = station.slice(0, 3);
  const semiColonIndex = station.indexOf(";");
  const name = station.slice(semiColonIndex + 1);
  const result = `${code}: ${name}`;
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}
```

</details>

## 总结

你无法回避这样一个事实：在编程中能够处理单词和句子至关重要——尤其是在 JavaScript 中，因为网站的一切都离不开与人沟通。本文已经给出了你现在需要了解的关于操作字符串的基础知识。这对你将来学习更复杂的主题会有很大帮助。

在下一个章节，我们将给你一些测试，以便你能够检查自己对我们提供的字符串与字符串方法的知识的理解和掌握程度。

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting/Test_your_skills/Strings", "Learn_web_development/Core/Scripting")}}
