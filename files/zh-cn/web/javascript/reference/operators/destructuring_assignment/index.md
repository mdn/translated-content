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
const {
  a,
  b: { c: d },
} = obj;
// Two variables are bound: `a` and `d`
```

所有变量共享相同的声明，因此，如果你希望某些变量可重新分配，而其他变量是只读的，则可能需要解构两次——一次使用 `let`，一次使用 `const`。

```js
const obj = { a: 1, b: { c: 2 } };
const { a } = obj; // a is constant
let {
  b: { c: d },
} = obj; // d is re-assignable
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

```js-nolint example-bad
const [a, ...b,] = [1, 2, 3];

// SyntaxError: rest element may not have a trailing comma
// Always consider using rest operator as the last element
```

### 使用其他语法解构模式

在许多语法中，语言为你绑定变量，你也可以使用解构模式。其中包括：

- [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 和 [`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of) 循环中的循环变量；
- [函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)参数；
- [`catch`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch) 绑定变量。

有关特定于数组或对象解构的功能，请参阅下面的各个示例。

## 示例

### 解构数组

#### 基本变量赋值

```js
const foo = ["one", "two", "three"];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
```

#### 解构比源更多的元素

在从赋值语句右侧指定的长度为 _N_ 的数组解构的数组中，如果赋值语句左侧指定的变量数量大于 _N_，则只有前 _N_ 个变量被赋值。其余变量的值将是未定义。

```js
const foo = ["one", "two"];

const [red, yellow, green, blue] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue); //undefined
```

#### 交换变量

可以在一个解构表达式中交换两个变量的值。

没有解构赋值的情况下，交换两个变量需要一个临时变量（或者用低级语言中的[异或交换技巧](https://en.wikipedia.org/wiki/XOR_swap_algorithm)）。

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

在下面例子中，要让 `f()` 返回值 `[1, 2]` 作为其输出，可以使用解构在一行内完成解析。

```js
function f() {
  return [1, 2];
}

const [a, b] = f();
console.log(a); // 1
console.log(b); // 2
```

#### 忽略某些返回值

你可以忽略你不感兴趣的返回值：

```js
function f() {
  return [1, 2, 3];
}

const [a, , b] = f();
console.log(a); // 1
console.log(b); // 3

const [c] = f();
console.log(c); // 1
```

你也可以忽略全部返回值：

```js
[, ,] = f();
```

#### 使用绑定模式作为剩余属性

数组解构赋值的剩余属性可以是另一个数组或对象绑定模式。这允许你同时提取数组的属性和索引。

```js
const [a, b, ...{ pop, push }] = [1, 2];
console.log(a, b); // 1 2
console.log(pop, push); // [Function pop] [Function push]
```

```js
const [a, b, ...[c, d]] = [1, 2, 3, 4];
console.log(a, b, c, d); // 1 2 3 4
```

这些绑定模式甚至可以嵌套，只要每个剩余属性都在列表的最后。

```js
const [a, b, ...[c, d, ...[e, f]]] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c, d, e, f); // 1 2 3 4 5 6
```

另一方面，对象解构只能有一个标识符作为剩余属性。

```js example-bad
const { a, ...{ b } } = { a: 1, b: 2 };
// SyntaxError: `...` must be followed by an identifier in declaration contexts

let a, b;
({ a, ...{ b } } = { a: 1, b: 2 });
// SyntaxError: `...` must be followed by an assignable reference in assignment contexts
```

#### 从正则表达式匹配项中提取值

当正则表达式的 [`exec()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) 方法找到匹配项时，它将返回一个数组，该数组首先包含字符串的整个匹配部分，然后返回与正则表达式中每个括号组匹配的字符串部分。解构赋值允许你轻易地提取出需要的部分，如果不需要，则忽略完整匹配。

```js
function parseProtocol(url) {
  const parsedURL = /^(\w+):\/\/([^/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  console.log(parsedURL);
  // ["https://developer.mozilla.org/zh-CN/docs/Web/JavaScript",
  // "https", "developer.mozilla.org", "zh-CN/docs/Web/JavaScript"]

  const [, protocol, fullhost, fullpath] = parsedURL;
  return protocol;
}

console.log(
  parseProtocol("https://developer.mozilla.org/zh-CN/docs/Web/JavaScript"),
);
// "https"
```

#### 在任何可迭代对象上使用数组解构

数组解构调用右侧的[迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)。因此，任何可迭代对象（不一定是数组）都可以解构。

```js
const [a, b] = new Map([
  [1, 2],
  [3, 4],
]);
console.log(a, b); // [1, 2] [3, 4]
```

不可迭代对象不能解构为数组。

```js example-bad
const obj = { 0: "a", 1: "b", length: 2 };
const [a, b] = obj;
// TypeError: obj is not iterable
```

只有在分配所有绑定之前，才会迭代可迭代对象。

```js
const obj = {
  *[Symbol.iterator]() {
    for (const v of [0, 1, 2, 3]) {
      console.log(v);
      yield v;
    }
  },
};
const [a, b] = obj; // Only logs 0 and 1
```

其余的绑定会提前求值并创建一个新数组，而不是使用旧的迭代器。

```js
const obj = {
  *[Symbol.iterator]() {
    for (const v of [0, 1, 2, 3]) {
      console.log(v);
      yield v;
    }
  },
};
const [a, b, ...rest] = obj; // Logs 0 1 2 3
console.log(rest); // [2, 3] (an array)
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

#### 赋值给新的变量名

可以从对象中提取属性，并将其赋值给名称与对象属性不同的变量。

```js
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true
```

举个例子，`const { p: foo } = o` 从对象 `o` 中获取名为 `p` 的属性，并将其赋值给名为 `foo` 的局部变量。

#### 赋值到新的变量名并提供默认值

一个属性可以同时是两者：

- 从对象提取并分配给具有不同名称的变量。
- 指定一个默认值，以防获取的值为 `undefined`。

```js
const { a: aa = 10, b: bb = 5 } = { a: 3 };

console.log(aa); // 3
console.log(bb); // 5
```

#### 从作为函数参数传递的对象中提取属性

传递给函数参数的对象也可以提取到变量中，然后可以在函数体内访问这些变量。至于对象赋值，解构语法允许新变量具有与原始属性相同或不同的名称，并为原始对象未定义属性的情况分配默认值。

请考虑此对象，其中包含有关用户的信息。

```js
const user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "Jane",
    lastName: "Doe",
  },
};
```

在这里，我们展示了如何将传递对象的属性提取到具有相同名称的变量。参数值 `{ id }` 表示传递给函数的对象的 `id` 属性应该被提取到一个同名变量中，然后可以在函数中使用。

```js
function userId({ id }) {
  return id;
}

console.log(userId(user)); // 42
```

你可以定义提取变量的名称。在这里，我们提取名为 `displayName` 的属性，并将其重命名为 `dname`，以便在函数体内使用。

```js
function userDisplayName({ displayName: dname }) {
  return dname;
}

console.log(userDisplayName(user)); // `jdoe`
```

嵌套对象也可以提取。下面的示例展示了属性 `fullname.firstName` 被提取到名为 `name` 的变量中。

```js
function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} is ${name}`;
}

console.log(whois(user)); // "jdoe is Jane"
```

#### 设置函数参数的默认值

默认值可以使用 `=` 指定，如果指定的属性在传递的对象中不存在，则将其用作变量值。

下面我们展示了一个默认大小为 `big`的函数，默认坐标为 `x: 0, y: 0`，默认半径为 25。

```js
function drawChart({
  size = "big",
  coords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, coords, radius);
  // do some chart drawing
}

drawChart({
  coords: { x: 18, y: 30 },
  radius: 30,
});
```

在上面 `drawChart` 的函数签名中，解构的左侧具有空对象 `= {}` 的默认值。

你也可以在没有该默认值的情况下编写该函数。但是，如果你省略该默认值，该函数将在调用时寻找至少一个参数来提供，而在当前形式下，你可以在不提供任何参数的情况下调用 `drawChart()`。否则，你至少需要提供一个空对象字面量。

有关详细信息，请参阅[默认参数值 > 有默认值的解构参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters#有默认值的解构参数)。

#### 解构嵌套对象和数组

```js
const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localization_tags: [],
      last_edit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung",
    },
  ],
  url: "/zh-CN/docs/Tools/Scratchpad",
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
console.log(localeTitle); // "JavaScript-Umgebung"
```

#### For of 迭代和解构

```js
const people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith",
    },
    age: 35,
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones",
    },
    age: 25,
  },
];

for (const {
  name: n,
  family: { father: f },
} of people) {
  console.log(`Name: ${n}, Father: ${f}`);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"
```

#### 对象属性计算名和解构

计算属性名，如[对象字面量](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#计算属性名)，可以被解构。

```js
const key = "z";
const { [key]: foo } = { z: "bar" };

console.log(foo); // "bar"
```

#### 无效的 JavaScript 标识符作为属性名称

通过提供有效的替代标识符，解构可以与不是有效的 JavaScript [标识符](/zh-CN/docs/Glossary/Identifier)的属性名称一起使用。

```js
const foo = { "fizz-buzz": true };
const { "fizz-buzz": fizzBuzz } = foo;

console.log(fizzBuzz); // true
```

### 解构基本类型

对象解构几乎等同于[属性访问](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors)。这意味着，如果尝试解构基本类型的值，该值将被包装到相应的包装器对象中，并且在包装器对象上访问该属性。

```js
const { a, toFixed } = 1;
console.log(a, toFixed); // undefined ƒ toFixed() { [native code] }
```

与访问属性相同，解构 `null` 或 `undefined` 会抛出 {{jsxref("TypeError")}}。

```js example-bad
const { a } = undefined; // TypeError: Cannot destructure property 'a' of 'undefined' as it is undefined.
const { a } = null; // TypeError: Cannot destructure property 'b' of 'null' as it is null.
```

即使模式为空，也会发生这种情况。

```js example-bad
const {} = null; // TypeError: Cannot destructure 'null' as it is null.
```

#### 组合数组和对象解构

数组和对象解构可以组合使用。假设你想要下面 `props` 数组中的第三个元素，然后你想要对象中的 `name` 属性，你可以执行以下操作：

```js
const props = [
  { id: 1, name: "Fizz" },
  { id: 2, name: "Buzz" },
  { id: 3, name: "FizzBuzz" },
];

const [, , { name }] = props;

console.log(name); // "FizzBuzz"
```

#### 解构对象时查找原型链

当解构一个对象时，如果属性本身没有被访问，它将沿着原型链继续查找。

```js
const obj = {
  self: "123",
  __proto__: {
    prot: "456",
  },
};
const { self, prot } = obj;
// self "123"
// prot "456" (Access to the prototype chain)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [赋值运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators#赋值运算符)
- ["ES6 in Depth: Destructuring" on hacks.mozilla.org](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/)
