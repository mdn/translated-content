---
title: 解構賦值
slug: Web/JavaScript/Reference/Operators/Destructuring_assignment
---

{{jsSidebar("Operators")}}

**解構賦值** (Destructuring assignment) 語法是一種 JavaScript 運算式，可以把陣列或物件中的資料解開擷取成為獨立變數。

{{EmbedInteractiveExample("pages/js/expressions-destructuringassignment.html", "taller")}}

## 語法

```js
let a, b, rest;
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

// Stage 4(finished) proposal
({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}
```

## 描述

物件與陣列運算式提供了簡單的方式，建立特定的資料組。

```js
const x = [1, 2, 3, 4, 5];
```

解構賦值使用類似語法；不過在指定敘述式的左側，要宣告從來源變數接收解開值之變數。

```js
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```

Perl 和 Python 也有類似的語法和功能。

## 陣列解構

### 基本變數指定敘述

```js
const foo = ["one", "two", "three"];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
```

### 宣告指派分開敍述

變數可以在宣告式後，再透過解構賦值。

```js
let a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

### 預設值

當解構來源陣列對應的元素是 undefined 時，變數可以被設定預設值。

```js
let a, b;

[a = 5, b = 7] = [1];
console.log(a); // 1
console.log(b); // 7
```

### 變數交換

兩個變數可以透過一個解構指派式交換。

沒有解構指派式時，這需要一個暫存變數來達成（或者像某些低階語言的 [XOR-swap trick](https://en.wikipedia.org/wiki/XOR_swap_algorithm)）。

```js
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]
```

### 解析自函式回傳的陣列

一直以來函式都可以回傳陣列，而解構指派式可以讓回傳的值更加簡潔。

在這個例子， `f()` 回傳 `[1, 2]` ，接著透過一個解構指派式解析。

```js
function f() {
  return [1, 2];
}

let a, b;
[a, b] = f();
console.log(a); // 1
console.log(b); // 2
```

### 忽略某些回傳值

你可以忽略某些回傳值：

```js
function f() {
  return [1, 2, 3];
}

const [a, , b] = f();
console.log(a); // 1
console.log(b); // 3
```

當然你也可以忽略全部回傳值：

```js
[, ,] = f();
```

### 把矩陣剩餘部分解構到一個變數

解構一個陣列時，你可以透過其餘元素（rest pattern）將來源剩下之元素指派到一個變數：

```js
const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]
```

要注意的是，當左邊函式裡使用其餘解構，同時使用結尾逗號，這樣會拋出例外 {{jsxref("SyntaxError")}} :

```js-nolint example-bad
const [a, ...b,] = [1, 2, 3];

// SyntaxError 語法錯誤: 其餘元素不可以跟隨結尾逗號
// 需要把其餘運算子放在最後的元素
```

### 從正則運算式的比對結果取值

當正則運算式的方法 [`exec()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) 比對到一個值，其回傳陣列中的第一個值是相符的完整字串，後績的則是比對到正則運算式每組括號內的部分。當你沒需要利用第一個完整比對結果時，解構指派式讓你更簡單的取出後績元素。

```js
function parseProtocol(url) {
  const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  console.log(parsedURL); // ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

  const [, protocol, fullhost, fullpath] = parsedURL;
  return protocol;
}

console.log(
  parseProtocol("https://developer.mozilla.org/en-US/Web/JavaScript"),
); // "https"
```

## 物件解構

### 基本指派式

```js
const o = { p: 42, q: true };
const { p, q } = o;

console.log(p); // 42
console.log(q); // true
```

### 無宣告指派

變數可以在宣告式後，再透過解構進行指派。

```js
let a, b;

({ a, b } = { a: 1, b: 2 });
```

> **備註：** 當針對物件進行解構，而該句式沒有進行宣告時，指派式外必須加上括號 `( ... )` 。
>
> `{a, b} = {a: 1, b: 2}` 不是有效的獨立語法，因為左邊的 `{a, b}` 被視為程式碼區塊而非物件。
>
> 然而，`({a, b} = {a: 1, b: 2})` 是有效的，如同 `const {a, b} = {a: 1, b: 2}`
>
> `( ... )` 表達式前句需要以分號結束，否則可能把上一句視為函式隨即執行。

### 指派到新的變數名稱

物件中的屬性可以解構並擷取到名稱跟該屬性不一樣的變數。

```js
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true
```

舉例來說， `const {p: foo} = o` 把物件 `o` 裡名為 `p` 的屬性解出並指派到一個名為 `foo` 的本地變數。

### 預設值

當解構物件中對應的值是 `undefined` 時，變數可以設定預設值。

```js
const { a = 10, b = 5 } = { a: 3 };

console.log(a); // 3
console.log(b); // 5
```

### 指定新的變數名稱及預設值

屬性 1) 可以從物件中被解開，且被指定一個不同名稱的變數及 2) 同時指定一個預設值，在解開的值為 `undefined` 時使用。

```js
const { a: aa = 10, b: bb = 5 } = { a: 3 };

console.log(aa); // 3
console.log(bb); // 5
```

### 從作為函式參數的物件中提出某屬性的值

```js
const user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
};

function userId({ id }) {
  return id;
}

function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} is ${name}`;
}

console.log(userId(user)); // 42
console.log(whois(user)); // "jdoe is John"
```

這樣從 user 物件中提出了 `id`, `displayName` 和 `firstName` 並且印出。

### 設定函式參數的預設值

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

> **備註：** 在上述函式 **`drawChart`** 中，左方之解構式被指派到一個空物件: `{size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}` 。你也可以略過填寫右方的指派式。不過，當你沒有使用右方指派式時，函式在呼叫時會找出最少一個參數。透過上述形式，你可以直接不使用參數的呼叫 **`drawChart()`** 。當你希望在呼叫這個函式時不傳送參數，這個設計會帶來方便。而另一個設計則能讓你確保函式必須傳上一個物件作為參數。

### 巢狀物件或陣列的解構

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
  url: "/zh-TW/docs/Tools/Scratchpad",
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

### 循環取出的解構

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
  console.log("Name: " + n + ", Father: " + f);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"
```

### 以物件演算屬性名稱解構

物件演算屬性名稱（像是在 [object literals](/zh-TW/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names)）可以在解構指派式使用。

```js
let key = "z";
let { [key]: foo } = { z: "bar" };

console.log(foo); // "bar"
```

### 在物件解構時使用其餘變數

[ECMAScript 中的其餘/展開屬性](https://github.com/tc39/proposal-object-rest-spread)在 proposal (stage 4) 新增了在解構式內使用[其餘 (rest)](/zh-TW/docs/Web/JavaScript/Reference/Functions/rest_parameters) 語法的定義。其餘屬性可以收集解構式中沒有指定的屬性值。

```js
let { a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 };
a; // 10
b; // 20
rest; // { c: 30, d: 40 }
```

### 不符合 JavaScript 識別字的屬性名稱

解構賦值可以透過另一個符合 JavaScript [識別字](/zh-TW/docs/Glossary/Identifier)的變數名稱來解出不符合識別字的屬性。

```js
const foo = { "fizz-buzz": true };
const { "fizz-buzz": fizzBuzz } = foo;

console.log(fizzBuzz); // "true"
```

### 混合使用矩陣及物件解構

矩陣及物件解構可以混合進行。與例來說，你只需要使用下列 `props` 矩陣中第三個元素之物件中的 `name` 屬性，你可以如下面的例子進行解構：

```js
const props = [
  { id: 1, name: "Fizz" },
  { id: 2, name: "Buzz" },
  { id: 3, name: "FizzBuzz" },
];

const [, , { name }] = props;

console.log(name); // "FizzBuzz"
```

### 物件解構時的原型鏈追溯

在進行物件解構時，如果一個屬性不在其當下存取，將會透過原型鏈 (prototype chain) 來進行追溯。

```plain
let obj = {self: '123'};
obj.__proto__.prot = '456';
const {self, prot} = obj;
// self "123"
// prot "456"（Access to the prototype chain）
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Assignment operators](/zh-TW/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)
- ["ES6 in Depth: Destructuring" on hacks.mozilla.org](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/)
