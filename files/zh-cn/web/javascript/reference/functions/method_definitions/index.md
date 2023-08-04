---
title: 方法的定义
slug: Web/JavaScript/Reference/Functions/Method_definitions
---

{{JsSidebar("Functions")}}

从 ECMAScript 2015 开始，在对象初始器中引入了一种更简短定义方法的语法，这是一种把方法名直接赋给函数的简写方式。

{{EmbedInteractiveExample("pages/js/functions-definitions.html")}}

## 语法

```plain
var obj = {
  property( parameters… ) {},
  *generator( parameters… ) {},
  async property( parameters… ) {},
  async* generator( parameters… ) {},

  // with computed keys:
  [property]( parameters… ) {},
  *[generator]( parameters… ) {},
  async [property]( parameters… ) {},

  // compare getter/setter syntax:
  get property() {},
  set property(value) {}
};
```

## 描述

该简写语法与 ECMAScript 2015 的[getter](/zh-CN/docs/Web/JavaScript/Reference/Functions/get)和[setter](/zh-CN/docs/Web/JavaScript/Reference/Functions/set)语法类似。

如下代码：

```js
var obj = {
  foo: function () {
    /* code */
  },
  bar: function () {
    /* code */
  },
};
```

现可被简写为：

```js
var obj = {
  foo() {
    /* code */
  },
  bar() {
    /* code */
  },
};
```

> **备注：** 简写语法使用命名函数而不是匿名函数（如…`foo: function() {}`…）。命名函数可以从函数体调用（这对匿名函数是不可能的，因为没有标识符可以引用）。详细信息，请参阅{{jsxref("Operators/function","function","#Examples")}}。

### 生成器方法

[生成器方法](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)也可以用这种简写语法定义。使用它们时，

- 简写语法中的星号（\*）必须出现在生成器名前，也就是说`* g(){}`可以正常工作，而`g *(){}`不行。
- 非生成器方法定义可能不包含`yield`关键字。这意味着[遗留的生成器函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/Legacy_generator_function)也不会工作，并且将抛出 {{jsxref("SyntaxError")}}。始终使用`yield`与星号（\*）结合使用。

```js
// 用有属性名的语法定义方法（ES6 之前）：
var obj2 = {
  g: function* () {
    var index = 0;
    while (true) yield index++;
  },
};

// 同一个方法，简写语法：
var obj2 = {
  *g() {
    var index = 0;
    while (true) yield index++;
  },
};

var it = obj2.g();
console.log(it.next().value); // 0
console.log(it.next().value); // 1
```

### Async 方法

{{jsxref("Statements/async_function", "Async 方法", "", 1)}}也可以使用简写语法来定义。

```js
// 用有属性名的语法定义方法（ES6 之前）：
var obj3 = {
  f: async function () {
    await some_promise;
  },
};

// 同一个方法，简写语法：
var obj3 = {
  async f() {
    await some_promise;
  },
};
```

### Async 生成器方法

[生成器方法](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)也能成为 {{jsxref("Statements/async_function", "async", "", 1)}}.

```js
var obj4 = {
  f: async function* () {
    yield 1;
    yield 2;
    yield 3;
  },
};

// The same object using shorthand syntax
var obj4 = {
  async *f() {
    yield 1;
    yield 2;
    yield 3;
  },
};
```

### 方法定义不是构造函数

所有方法定义不是构造函数，如果您尝试实例化它们，将抛出{{jsxref("TypeError")}}。

```js example-bad
var obj = {
  method() {},
};
new obj.method(); // TypeError: obj.method is not a constructor

var obj = {
  *g() {},
};
new obj.g(); // TypeError: obj.g is not a constructor (changed in ES2016)
```

## 示例

### 简单示例

```js
var obj = {
  a: "foo",
  b() {
    return this.a;
  },
};
console.log(obj.b()); // "foo"
```

### 计算的属性名

该简写语法还支持计算的属性名称作为方法名。

```js
var bar = {
  foo0: function () {
    return 0;
  },
  foo1() {
    return 1;
  },
  ["foo" + 2]() {
    return 2;
  },
};

console.log(bar.foo0()); // 0
console.log(bar.foo1()); // 1
console.log(bar.foo2()); // 2
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`get`](/zh-CN/docs/Web/JavaScript/Reference/Functions/get)
- [`set`](/zh-CN/docs/Web/JavaScript/Reference/Functions/set)
- [Lexical grammar](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar)
