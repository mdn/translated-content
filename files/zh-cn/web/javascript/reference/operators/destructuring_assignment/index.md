---
title: 解构赋值
slug: Web/JavaScript/Reference/Operators/Destructuring_assignment
---

{{jsSidebar("Operators")}}

**解构赋值**语法是一种 Javascript 表达式。可以将数组中的值或对象的属性取出，赋值给其他变量。

{{EmbedInteractiveExample("pages/js/expressions-destructuringassignment.html", "taller")}}

## 语法

```js-nolint
const [a, b] = array;
const [a, , b] = array;
const [a = aDefault, b] = array;
const [a, b, ...rest] = array;
const [a, , b, ...rest] = array;
const [a, b, ...{ pop, push }] = array;
const [a, b, ...[c, d]] = array;

const { a, b } = obj;
const { a: a1, b: b1 } = obj;
const { a: a1 = aDefault, b = bDefault } = obj;
const { a, b, ...rest } = obj;
const { a: a1, b: b1, ...rest } = obj;
const { [key]: a } = obj;

let a, b, a1, b1, c, d, rest, pop, push;
[a, b] = array;
[a, , b] = array;
[a = aDefault, b] = array;
[a, b, ...rest] = array;
[a, , b, ...rest] = array;
[a, b, ...{ pop, push }] = array;
[a, b, ...[c, d]] = array;

({ a, b } = obj); // brackets are required
({ a: a1, b: b1 } = obj);
({ a: a1 = aDefault, b = bDefault } = obj);
({ a, b, ...rest } = obj);
({ a: a1, b: b1, ...rest } = obj);
```

## 描述

对象和数组字面量表达式提供了一种简单的方法来创建*特别的*数据包。

```js
const x = [1, 2, 3, 4, 5];
```

解构赋值使用类似的语法，但在赋值的左侧定义了要从原变量中取出哪些值。

```js
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```

同样，你可以在赋值语句的左侧解构对象。

```js
const obj = { a: 1, b: 2 };
const { a, b } = obj;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;
```

这种功能类似于 Perl 和 Python 等语言中存在的特性。

### 绑定与赋值

对于对象和数组的解构，有两种解构模式：*绑定模式*和*赋值模式*，它们的语法略有不同。

在绑定模式中，模式以声明关键字（`var`、`let` 或 `const`）开始。然后，每个单独的属性必须绑定到一个变量或进一步解构。

```js
const obj = { a: 1, b: { c: 2 } };
const { a, b: { c: d } } = obj;
// Two variables are bound: `a` and `d`
```

所有变量共享相同的声明，因此，如果你希望某些变量可重新分配，而其他变量是只读的，则可能需要解构两次——一次使用 `let`，一次使用 `const`。

```js
const obj = { a: 1, b: { c: 2 } };
const { a } = obj; // a is constant
let { b: { c: d } } = obj; // d is re-assignable
```

在赋值模式中，模式不以关键字开头。每个解构属性都被赋值给一个赋值目标——这个赋值目标可以事先用 `var` 或 `let` 声明，也可以是另一个对象的属性——一般来说，可以是任何可以出现在赋值表达式左侧的东西。

```js
const numbers = [];
const obj = { a: 1, b: 2 };
({ a: numbers[0], b: numbers[1] } = obj);
// The properties `a` and `b` are assigned to properties of `numbers`
```

> **备注：** 当使用对象文字解构赋值而不带声明时，在赋值语句周围必须添加括号 `( ... )`。
>
> `{ a, b } = { a: 1, b: 2 }` 不是有效的独立语法，因为左侧的 `{a, b}` 被视为块而不是对象字面量。但是，`({ a, b } = { a: 1, b: 2 })` 是有效的，`const { a, b } = { a: 1， b: 2 }` 也是有效的。
>
> 如果你的编码风格不包括尾随分号，则 `( ... )` 表达式前面需要有一个分号，否则它可能用于执行前一行的函数。

Note that the equivalent _binding pattern_ of the code above is not valid syntax:

请注意，上述代码在等效的*绑定模式*中不是有效的语法：

```js example-bad
const numbers = [];
const obj = { a: 1, b: 2 };
const { a: numbers[0], b: numbers[1] } = obj;

// This is equivalent to:
//   const numbers[0] = obj.a;
//   const numbers[1] = obj.b;
// Which definitely is not valid.
```

### 默认值

每个解构属性都可以有一个*默认值*。当属性不存在或值为 `undefined` 时，将使用默认值。如果属性的值为 `null`，则不使用它。

```js
const [a = 1] = []; // a is 1
const { b = 2 } = { b: undefined }; // b is 2
const { c = 2 } = { c: null }; // c is null
```

默认值可以是任何表达式。仅在必要时对其进行评估。

```js
const { b = console.log("hey") } = { b: 2 };
// Does not log anything, because `b` is defined and there's no need
// to evaluate the default value.
```

### 剩余属性

你可以使用剩余属性（`...rest`）结束解构模式。此模式会将对象或数组的所有剩余属性存储到新的对象或数组中。

```js
const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(others); // { b: 2, c: 3 }

const [first, ...others2] = [1, 2, 3];
console.log(others2); // [2, 3]
```

剩余属性必须是模式中的最后一个，并且不能有尾随逗号。

```js example-bad
const [a, ...b,] = [1, 2, 3];

// SyntaxError: rest element may not have a trailing comma
// Always consider using rest operator as the last element
```

### 使用其他语法解构模式

在许多语法中，语言为你绑定变量，你也可以使用解构模式。其中包括：

- [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 和 [`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of) 循环中的循环变量；
- [Function](/zh-CN/docs/Web/JavaScript/Reference/Functions) 参数；
- [`catch`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch) 绑定变量。

有关特定于数组或对象解构的功能，请参阅下面的各个示例。

## 示例

### 解构数组

#### 基本变量赋值

```js
const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
```

#### 变量先声明后赋值时的解构

通过解构分离变量的声明，可以为一个变量赋值。

```js
var a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

#### 交换变量

在一个解构表达式中可以交换两个变量的值。

没有解构赋值的情况下，交换两个变量需要一个临时变量（或者用低级语言中的[XOR-swap 技巧](http://en.wikipedia.org/wiki/XOR_swap)）。

```js
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1, 3, 2]
```

#### 解析一个从函数返回的数组

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

#### 忽略某些返回值

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

#### 将剩余数组赋值给一个变量

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

#### 用正则表达式匹配提取值

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

### 解构对象

#### 基本赋值

```js
const user = {
  id: 42,
  isVerified: true,
};

const { id, isVerified } = user;

console.log(id); // 42
console.log(isVerified); // true
```

#### 给新的变量名赋值

可以从一个对象中提取变量并赋值给和对象属性名不同的新的变量名。

```js
var o = {p: 42, q: true};
var {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true
```

#### 给新的变量命名并提供默认值

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

## 参见

- [赋值操作符](/zh-CN/docs/Web/JavaScript/Reference/Operators#赋值运算符)
- ["ES6 in Depth: Destructuring" on hacks.mozilla.org](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/)
