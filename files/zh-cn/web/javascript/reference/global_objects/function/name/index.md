---
title: Function.name
slug: Web/JavaScript/Reference/Global_Objects/Function/name
---

{{JSRef("Global_Objects", "Function")}}`function.name` 属性返回函数实例的名称。

{{EmbedInteractiveExample("pages/js/function-name.html")}}

{{js_property_attributes(0,0,1)}}

> **备注：** 在非标准的 ES2015 之前的实现中，`configurable` 属性也是 `false`。

## 描述

函数的 `name` 属性可用于在调试工具或错误消息中标识该函数。它对语言本身没有任何意义。

`name` 属性是只读的，不能用赋值操作符修改：

```js
function someFunction() {}

someFunction.name = "otherFunction";
console.log(someFunction.name); // someFunction
```

想要改变它，请使用 {{jsxref("Object.defineProperty()")}}.

`name` 属性通常是从函数的定义方式推断出来的。在下面的部分中，我们将描述推断它的各种方法。

## 示例

### 函数声明的名称

`name` 属性会返回函数的名称。

```js
function doSomething() {}
doSomething.name; // "doSomething"
```

### 构造函数的名称

使用`new Function(...)`语法创建的函数或只是 `Function(...) create` {{jsxref("Function")}}对象及其名称为“anonymous”。

```js
new Function().name; // "anonymous"
```

### 推断函数名称

变量和方法可以从句法位置推断匿名函数的名称（ECMAScript 2015 中新增）。

```js
var f = function () {};
var object = {
  someMethod: function () {},
};

console.log(f.name); // "f"
console.log(object.someMethod.name); // "someMethod"
```

你可以在 {{jsxref("Operators/Function", "函数表达式", "", 1)}}中定义函数的名称：

```js
var object = {
  someMethod: function object_someMethod() {},
};

console.log(object.someMethod.name); // "object_someMethod"

try {
  object_someMethod;
} catch (e) {
  alert(e);
}
// ReferenceError: object_someMethod is not defined
```

你不能更改函数的名称，此属性是只读的：

```js
var object = {
  // anonymous
  someMethod: function () {},
};

object.someMethod.name = "otherMethod";
console.log(object.someMethod.name); // someMethod
```

要更改它，可以使用{{jsxref("Object.defineProperty()")}}。

### 简写方法的名称

```js
var o = {
  foo() {},
};
o.foo.name; // "foo";
```

### 绑定函数的名称

{{jsxref("Function.bind()")}} 所创建的函数将会在函数的名称前加上"bound " 。

```js
function foo() {}
foo.bind({}).name; // "bound foo"
```

### getters 和 setters 的函数名

当通过 [`get`](/zh-CN/docs/Web/JavaScript/Reference/Functions/get) 和 [`set`](/zh-CN/docs/Web/JavaScript/Reference/Functions/set) 访问器来存取属性时，"get" 或 "set" 会出现在函数名称前。

```js
var o = {
  get foo() {},
  set foo(x) {},
};

var descriptor = Object.getOwnPropertyDescriptor(o, "foo");
descriptor.get.name; // "get foo"
descriptor.set.name; // "set foo";
```

### 类中的函数名称

你可以使用`obj.constructor.name`来检查对象的“类”（但请务必阅读以下警告）：

```js
function Foo() {} // ES2015 Syntax: class Foo {}

var fooInstance = new Foo();
console.log(fooInstance.constructor.name); // logs "Foo"
```

> **警告：** 脚本解释器只有在函数没有名为 name 的属性时才会设置内置的`Function.name`属性（参见 [9.2.11 of the ECMAScript2015 Language Specification](https://www.ecma-international.org/ecma-262/6.0/#sec-setfunctionname)）。但是，ES2015 规定由关键字*static*修饰的静态方法也会被认为是类的属性（ECMAScript2015, [14.5.14.21.b](https://www.ecma-international.org/ecma-262/6.0/#sec-runtime-semantics-classdefinitionevaluation) + [12.2.6.9](https://www.ecma-international.org/ecma-262/6.0/#sec-object-initializer-runtime-semantics-propertydefinitionevaluation)）。

因此，我们无法获取具有静态方法属性`name()`的几乎任何类的类名称：

```js
class Foo {
  constructor() {}
  static name() {}
}
```

使用`static name()`方法`Foo.name`不再保存实际的类名称，而是引用`name()`函数对象。ES2015 语法中的上述类定义将在 Chrome 或 Firefox 中运行，类似于 ES5 语法中的以下代码段：

```js
function Foo() {}
Object.defineProperty(Foo, "name", { writable: true });
Foo.name = function () {};
```

通过`fooInstance.constructor.name`获取`fooInstance`类不会给我们所有的类名，而是静态类方法的引用。例如：

```js
var fooInstance = new Foo();
console.log(fooInstance.constructor.name); // logs function name()
```

你也可以从 ES5 语法示例中看到，在 Chrome 或 Firefox 的中静态定义的`Foo.name`变得可写。内置定义在没有自定义静态定义时是只读的：

```js
Foo.name = "Hello";
console.log(Foo.name);
//如果 Foo 具有静态 name() 属性，则输出“Hello”，否则为“Foo”
```

因此，你不能依赖内置的`Function.name`属性来保持一个类的名称。

### Symbol 作为函数名称

如果{{jsxref("Symbol")}} 被用于函数名称，并且这个 symbol 具有相应的描述符，那么方法的名字就是方括号中的描述符。

```js
var sym1 = Symbol("foo");
var sym2 = Symbol();
var o = {
  [sym1]: function () {},
  [sym2]: function () {},
};

o[sym1].name; // "[foo]"
o[sym2].name; // ""
```

## JavaScript 压缩和 minifiers

> **警告：** 当使用`Function.name`和那些 JavaScript 压缩器（minifiers）或混淆器进行源码转换时要小心。这些工具通常用作 JavaScript 构建管道的一部分，以在程序部署到生产之前减少程序的大小。但这种转换通常会在构建时更改函数的名称。

例如下面的代码：

```js
function Foo() {}
var foo = new Foo();

if (foo.constructor.name === "Foo") {
  console.log("'foo' is an instance of 'Foo'");
} else {
  console.log("Oops!");
}
```

可能被压缩为：

```js
function a() {}
var b = new a();
if (b.constructor.name === "Foo") {
  console.log("'foo' is an instance of 'Foo'");
} else {
  console.log("Oops!");
}
```

在未压缩版本中，程序运行到真实分支并打印`'foo' is an instance of 'Foo'`。而在压缩版本中，它的行为不同，并且进入 else 分支。如果您依赖于`Function.name`，就像上面的示例一样，确保您的构建管道不会更改函数名称，也不要假定函数具有特定的名称。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
