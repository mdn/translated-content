---
title: 可选链运算符（?.）
slug: Web/JavaScript/Reference/Operators/Optional_chaining
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

**可选链运算符（`?.`）** 用于访问对象的属性或调用函数。如果使用此运算符访问的对象或调用的函数是 {{jsxref("undefined")}} 或 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)，则表达式会短路并计算为 {{jsxref("undefined")}}，而不是抛出错误。

{{InteractiveExample("JavaScript Demo: Expressions - Optional chaining operator", "taller")}}

```js interactive-example
const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined
```

## 语法

```js-nolint
obj.val?.prop
obj.val?.[expr]
obj.func?.(args)
```

## 描述

`?.` 运算符与 `.` 链式运算符相似，不同之处在于，如果引用是[空值](/zh-CN/docs/Glossary/Nullish)（[`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null) 或 {{jsxref("undefined")}}），它不会导致错误，而是使表达式短路并返回 `undefined`。当用于函数调用时，如果给定函数不存在，它也会返回 `undefined`。

当访问链式属性时，如果存在引用可能缺失的情况，这将使表达式更简洁、更简短。在探索对象内容且无法确定哪些属性是必需的时，它也会很有帮助。

例如，考虑一个具有嵌套结构的对象 `obj`。如果没有可选链，查找深层嵌套的子属性需要验证中间的引用，例如：

```js
const nestedProp = obj.first && obj.first.second;
```

在访问 `obj.first.second` 之前，要保证 `obj.first` 的值不是 `null`（也不是 `undefined`）。这样做可以避免在不对 `obj.first` 进行校验情况下直接访问 `obj.first.second` 而可能引发的错误。

这是 JavaScript 中的一个惯用模式，但当链很长时，它会变得冗长，且不安全。例如，如果 `obj.first` 是一个非 `null` 或 `undefined` 的{{Glossary("Falsy", "假值")}}，比如 `0`，它仍然会短路并使 `nestedProp` 变为 `0`，这可能是不可取的。

然而，使用可选链运算符（`?.`），在访问 `obj.first.second` 之前，不再需要基于 `obj.first` 的状态进行明确的测试和短路操作了：

```js
const nestedProp = obj.first?.second;
```

通过使用 `?.` 运算符取代 `.` 运算符，JavaScript 会在尝试访问 `obj.first.second` 之前，先隐式地检查并确定 `obj.first` 既不是 `null` 也不是 `undefined`。如果 `obj.first` 是 `null` 或者 `undefined`，表达式将会自动短路，并返回 `undefined`。

这等价于以下表达式，但实际上没有创建临时变量：

```js
const temp = obj.first;
const nestedProp =
  temp === null || temp === undefined ? undefined : temp.second;
```

可选链运算符不能用于未声明的根对象，但可以用于值为 `undefined` 的根对象。

```js example-bad
undeclaredVar?.prop; // ReferenceError: undeclaredVar is not defined
```

### 函数调用中的可选链

当尝试调用一个可能不存在的方法时也可以使用可选链。例如，当使用某个 API 时，如果由于实现版本过旧或用户设备不具备某项功能而导致某个方法不可用时，可选链就很有用。

函数调用时如果被调用的方法不存在，使用可选链可以使表达式自动返回 `undefined` 而不是抛出一个异常。

```js
const result = someInterface.customMethod?.();
```

然而，如果存在一个具有这样名称的属性且不是函数，使用 `?.` 仍然会引发一个 {{jsxref("TypeError")}} 异常，即“`someInterface.customMethod` is not a function（不是一个函数）”。

> [!NOTE]
> 如果 `someInterface` 自身是 `null` 或者 `undefined`，{{JSxRef("TypeError")}} 异常仍会被抛出（`someInterface is null`）。如果你希望允许 `someInterface` 自身也为 `null` 或者 `undefined`，你需要在这个位置使用 `?.`：`someInterface?.customMethod?.()`。

`eval?.()` 是进入[_间接求值_](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval)模式的最短方式。

### 表达式中的可选链

你也可以将可选链运算符与[方括号表示法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors#方括号表示法)结合使用，它允许将表达式作为属性名传递：

```js
const nestedProp = obj?.["prop" + "Name"];
```

这对于数组尤其有用，因为数组索引必须使用方括号来使用。

```js
function printMagicIndex(arr) {
  console.log(arr?.[42]);
}

printMagicIndex([0, 1, 2, 3, 4, 5]); // undefined
printMagicIndex(); // undefined；如果未使用 ?. 运算符，这将抛出一个错误：“Cannot read properties of undefined (reading '42')”
```

### 无效的可选链

尝试为可选链表达式的结果赋值是无效的：

```js-nolint example-bad
const object = {};
object?.property = 1; // SyntaxError: Invalid left-hand side in assignment
```

[模板字符串标签](/zh-CN/docs/Web/JavaScript/Reference/Template_literals#带标签的模板)不能是可选链（参见 [SyntaxError: tagged template cannot be used with optional chain](/zh-CN/docs/Web/JavaScript/Reference/Errors/Bad_optional_template)）：

```js-nolint example-bad
String?.raw`Hello, world!`;
String.raw?.`Hello, world!`; // SyntaxError: Invalid tagged template on optional chain
```

{{jsxref("Operators/new", "new")}} 表达式的构造函数不能是可选链（参见 [SyntaxError: new keyword cannot be used with an optional chain](/zh-CN/docs/Web/JavaScript/Reference/Errors/Bad_new_optional)）：

```js-nolint example-bad
new Intl?.DateTimeFormat(); // SyntaxError: Invalid optional chain from new expression
new Map?.();
```

### 短路

在使用可选链时，如果左操作数是 `null` 或 `undefined`，则表达式将不会被求值。例如：

```js
const potentiallyNullObj = null;
let x = 0;
const prop = potentiallyNullObj?.[x++];

console.log(x); // x 未被递增，因此为 0
```

后续的属性访问也不会被求值。

```js
const potentiallyNullObj = null;
const prop = potentiallyNullObj?.a.b;
// 这不会抛出错误，因为求值已经在第一个可选链处停止了
```

这等价于：

```js
const potentiallyNullObj = null;
const prop =
  potentiallyNullObj === null || potentiallyNullObj === undefined
    ? undefined
    : potentiallyNullObj.a.b;
```

然而，这种短路行为只会在一个连续的属性访问“链”中发生。如果你将链中的某一部分进行[分组](/zh-CN/docs/Web/JavaScript/Reference/Operators/Grouping)，那么后续的属性访问仍然会被求值。

```js
const potentiallyNullObj = null;
const prop = (potentiallyNullObj?.a).b;
// TypeError: Cannot read properties of undefined (reading 'b')
```

这等价于：

```js
const potentiallyNullObj = null;
const temp = potentiallyNullObj?.a;
const prop = temp.b;
```

除了没有创建 `temp` 变量。

## 示例

### 基本示例

此示例在一个不含 `bar` 成员的 Map 中查找 `bar` 成员的 `name` 属性，因此结果是 `undefined`。

```js
const myMap = new Map();
myMap.set("foo", { name: "baz", desc: "inga" });

const nameBar = myMap.get("bar")?.name;
```

### 处理可选的回调函数或事件处理器

如果使用[解构赋值](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)来解构的一个对象的回调函数或 fetch 方法，你可能得到不能当做函数直接调用的不存在的值，除非你已经校验了它们的存在性。你可以使用 `?.` 来忽略这些额外的校验：

```js
// 不使用可选链的写法
function doSomething(onContent, onError) {
  try {
    // 用数据做些事情
  } catch (err) {
    // 校验 onError 是否真的存在
    if (onError) {
      onError(err.message);
    }
  }
}
```

```js
// 使用可选链进行函数调用
function doSomething(onContent, onError) {
  try {
    // 用数据做些事情
  } catch (err) {
    onError?.(err.message); // 如果 onError 是 undefined 也不会有异常
  }
}
```

### 连用可选链运算符

在嵌套结构中，可以多次使用可选链：

```js
const customer = {
  name: "Carl",
  details: {
    age: 82,
    location: "Paradise Falls", // details 的 address 属性未有定义
  },
};
const customerCity = customer.details?.address?.city;

// 可选链也可以和函数调用一起使用
const customerName = customer.name?.getName?.(); // 方法不存在，customerName 未定义
```

### 使用空值合并运算符

当未找到任何值时，可以在可选链之后使用[空值合并运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)来构建一个默认值：

```js
function printCustomerCity(customer) {
  const customerCity = customer?.city ?? "未知城市";
  console.log(customerCity);
}

printCustomerCity({
  name: "Nathan",
  city: "Paris",
}); // "Paris"
printCustomerCity({
  name: "Carl",
  details: { age: 82 },
}); // "未知城市"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [空值合并运算符（??）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
