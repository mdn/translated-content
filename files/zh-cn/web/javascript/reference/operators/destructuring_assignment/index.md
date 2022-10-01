---
title: 解构赋值
slug: Web/JavaScript/Reference/Operators/Destructuring_assignment
---

{{jsSidebar("Operators")}}

**解构赋值**语法是一种 Javascript 表达式。通过**解构赋值**，可以将属性/值从对象/数组中取出，赋值给其他变量。

{{EmbedInteractiveExample("pages/js/expressions-destructuringassignment.html")}}

## 语法

```js
var a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20


// Stage 4（已完成）提案中的特性
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}
```

## 描述

对象和数组逐个对应表达式，或称对象字面量和数组字面量，提供了一种简单的定义一个特定的数据组的方法。

```js
var x = [1, 2, 3, 4, 5];
```

解构赋值使用了相同的语法，不同的是在表达式左边定义了要从原变量中取出什么变量。

```js
var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```

JavaScript 中，解构赋值的作用类似于 Perl 和 Python 语言中的相似特性。

## 解构数组

### 变量声明并赋值时的解构

```js
var foo = ["one", "two", "three"];

var [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"
```

### 变量先声明后赋值时的解构

通过解构分离变量的声明，可以为一个变量赋值。

```js
var a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

### 默认值

为了防止从数组中取出一个值为`undefined`的对象，可以在表达式左边的数组中为任意对象预设默认值。

```js
var a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7
```

### 交换变量

在一个解构表达式中可以交换两个变量的值。

没有解构赋值的情况下，交换两个变量需要一个临时变量（或者用低级语言中的[XOR-swap 技巧](http://en.wikipedia.org/wiki/XOR_swap)）。

```js
var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1
```

### 解析一个从函数返回的数组

从一个函数返回一个数组是十分常见的情况。解构使得处理返回值为数组时更加方便。

在下面例子中，要让 `[1, 2]` 成为函数的 `f()` 的输出值，可以使用解构在一行内完成解析。

```js
function f() {
  return [1, 2];
}

var a, b;
[a, b] = f();
console.log(a); // 1
console.log(b); // 2
```

### 忽略某些返回值

你也可以忽略你不感兴趣的返回值：

```js
function f() {
  return [1, 2, 3];
}

var [a, , b] = f();
console.log(a); // 1
console.log(b); // 3
```

你也可以忽略全部返回值：

```js
[,,] = f();
```

### 将剩余数组赋值给一个变量

当解构一个数组时，可以使用剩余模式，将数组剩余部分赋值给一个变量。

```js
var [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]
```

注意：如果剩余元素右侧有逗号，会抛出 {{jsxref("SyntaxError")}}，因为剩余元素必须是数组的最后一个元素。

```js example-bad
var [a, ...b,] = [1, 2, 3];
// SyntaxError: rest element may not have a trailing comma
```

### 用正则表达式匹配提取值

用正则表达式的 [`exec()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) 方法匹配字符串会返回一个数组，该数组第一个值是完全匹配正则表达式的字符串，然后的值是匹配正则表达式括号内内容部分。解构赋值允许你轻易地提取出需要的部分，忽略完全匹配的字符串——如果不需要的话。

```js
function parseProtocol(url) {
  var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  console.log(parsedURL); // ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

  var [, protocol, fullhost, fullpath] = parsedURL;
  return protocol;
}

console.log(parseProtocol('https://developer.mozilla.org/en-US/Web/JavaScript')); // "https"
```

## 解构对象

### 基本赋值

```js
var o = {p: 42, q: true};
var {p, q} = o;

console.log(p); // 42
console.log(q); // true
```

### 无声明赋值

一个变量可以独立于其声明进行解构赋值。

```js
var a, b;

({a, b} = {a: 1, b: 2});
```

> **备注：** 赋值语句周围的圆括号 `( ... )` 在使用对象字面量无声明解构赋值时是必须的。
>
> `{a, b} = {a: 1, b: 2}` 不是有效的独立语法，因为左边的 `{a, b}` 被认为是一个块而不是对象字面量。
>
> 然而，`({a, b} = {a: 1, b: 2})` 是有效的，正如 `var {a, b} = {a: 1, b: 2}`
>
> 你的 `( ... )` 表达式之前需要有一个分号，否则它可能会被当成上一行中的函数执行。

### 给新的变量名赋值

可以从一个对象中提取变量并赋值给和对象属性名不同的新的变量名。

```js
var o = {p: 42, q: true};
var {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true
```

### 默认值

变量可以先赋予默认值。当要提取的对象对应属性解析为 undefined，变量就被赋予默认值。

```js
var {a = 10, b = 5} = {a: 3};

console.log(a); // 3
console.log(b); // 5
```

### 给新的变量命名并提供默认值

一个属性可以同时 1）从一个对象解构，并分配给一个不同名称的变量 2）分配一个默认值，以防未解构的值是 `undefined`。

```js
var {a:aa = 10, b:bb = 5} = {a: 3};

console.log(aa); // 3
console.log(bb); // 5
```

### 函数参数默认值

#### ES5 版本

```js
function drawES5Chart(options) {
  options = options === undefined ? {} : options;
  var size = options.size === undefined ? 'big' : options.size;
  var cords = options.cords === undefined ? { x: 0, y: 0 } : options.cords;
  var radius = options.radius === undefined ? 25 : options.radius;
  console.log(size, cords, radius);
  // now finally do some chart drawing
}

drawES5Chart({
  cords: { x: 18, y: 30 },
  radius: 30
});
```

#### ES2015 版本

```js
function drawES2015Chart({size = 'big', cords = { x: 0, y: 0 }, radius = 25} = {})
{
  console.log(size, cords, radius);
  // do some chart drawing
}

drawES2015Chart({
  cords: { x: 18, y: 30 },
  radius: 30
});
```

> **备注：** 在上面的 **`drawES2015Chart`** 的函数签名中，解构的左手边被分配给右手边的空对象字面值：`{size = 'big', cords = {x: 0, y: 0}, radius = 25} = {}`。你也可以在没有右侧分配的情况下编写函数。但是，如果你忽略了右边的赋值，那么函数会在被调用的时候查找至少一个被提供的参数，而在当前的形式下，你可以直接调用 **`drawES2015Chart()`** 而不提供任何参数。如果你希望能够在不提供任何参数的情况下调用该函数，则当前的设计非常有用，而另一种方法在您确保将对象传递给函数时非常有用。

### 解构嵌套对象和数组

```js
const metadata = {
  title: 'Scratchpad',
  translations: [
    {
      locale: 'de',
      localization_tags: [],
      last_edit: '2014-04-14T08:43:37',
      url: '/de/docs/Tools/Scratchpad',
      title: 'JavaScript-Umgebung'
    }
  ],
  url: '/en-US/docs/Tools/Scratchpad'
};

let {
  title: englishTitle, // rename
  translations: [
    {
       title: localeTitle, // rename
    },
  ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"
```

### For of 迭代和解构

```js
var people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones'
    },
    age: 25
  }
];

for (var {name: n, family: {father: f}} of people) {
  console.log('Name: ' + n + ', Father: ' + f);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"
```

### 从作为函数实参的对象中提取数据

```js
function userId({id}) {
  return id;
}

function whois({displayName: displayName, fullName: {firstName: name}}){
  console.log(displayName + " is " + name);
}

var user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
      firstName: "John",
      lastName: "Doe"
  }
};

console.log("userId: " + userId(user)); // "userId: 42"
whois(user); // "jdoe is John"
```

这段代码从 user 对象中提取并输出 `id`、`displayName` 和 `firstName`。

### 对象属性计算名和解构

计算属性名，如 [object literals](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names)，可以被解构。

```js
let key = "z";
let { [key]: foo } = { z: "bar" };

console.log(foo); // "bar"
```

### 对象解构中的 Rest

[Rest/Spread Properties for ECMAScript](https://github.com/tc39/proposal-object-rest-spread) 提案（阶段 4）将 [rest](/zh-CN/docs/Web/JavaScript/Reference/Functions/rest_parameters) 语法添加到解构中。Rest 属性收集那些尚未被解构模式拾取的剩余可枚举属性键。

```js
let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
a; // 10
b; // 20
rest; // { c: 30, d: 40 }
```

### 无效的 JavaScript 标识符作为属性名称

通过提供有效的替代标识符，解构可以与不是有效的 JavaScript[标识符](/zh-CN/docs/Glossary/Identifier)的属性名称一起使用。

```js
const foo = { 'fizz-buzz': true };
const { 'fizz-buzz': fizzBuzz } = foo;

console.log(fizzBuzz); // true
```

### 解构对象时会查找原型链（如果属性不在对象自身，将从原型链中查找）

```js
// 声明对象 和 自身 self 属性
var obj = {self: '123'};
// 在原型链中定义一个属性 prot
obj.__proto__.prot = '456';
// test
const {self, prot} = obj;
// self "123"
// prot "456"（访问到了原型链）
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [赋值操作符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)
- ["ES6 in Depth: Destructuring" on hacks.mozilla.org](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/)

### 译者注：关于 42

为什么在示例代码中出现了那么多 42？如果有什么特别的原因的话，以下是译者的猜测。

- [42#在人类文化中 - 维基百科](https://zh.wikipedia.org/wiki/42#%E5%9C%A8%E4%BA%BA%E7%B1%BB%E6%96%87%E5%8C%96%E4%B8%AD)
- [生命、宇宙以及任何事情的终极答案 - 维基百科](https://zh.wikipedia.org/wiki/%E7%94%9F%E5%91%BD%E3%80%81%E5%AE%87%E5%AE%99%E4%BB%A5%E5%8F%8A%E4%BB%BB%E4%BD%95%E4%BA%8B%E6%83%85%E7%9A%84%E7%B5%82%E6%A5%B5%E7%AD%94%E6%A1%88)
- [42\_(number)#The Hitchhiker's Guide to the Galaxy - Wikipedia](<https://en.wikipedia.org/wiki/42_(number)#The_Hitchhiker's_Guide_to_the_Galaxy>)
- [Phrases_from_The_Hitchhiker%27s_Guide_to_the_Galaxy#Answer_to_the_Ultimate_Question_of_Life,\_the_Universe,\_and_Everything\_(42) - Wikipedia](<https://en.wikipedia.org/wiki/Phrases_from_The_Hitchhiker%27s_Guide_to_the_Galaxy#Answer_to_the_Ultimate_Question_of_Life,_the_Universe,_and_Everything_(42)>)
