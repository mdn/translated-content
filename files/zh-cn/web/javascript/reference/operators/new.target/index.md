---
title: new.target
slug: Web/JavaScript/Reference/Operators/new.target
---

{{JSSidebar("Operators")}} **`new.target`** 属性允许你检测函数或构造方法是否是通过[new](/zh-CN/docs/Web/JavaScript/Reference/Operators/new)运算符被调用的。在通过[new](/zh-CN/docs/Web/JavaScript/Reference/Operators/new)运算符被初始化的函数或构造方法中，`new.target`返回一个指向构造方法或函数的引用。在普通的函数调用中，`new.target` 的值是{{jsxref("undefined")}}。

## 语法

```js-nolint
new.target
```

## 描述

`new.target` 语法由关键字 `new`、点和标识符 `target` 组成。由于 `new` 是[保留字](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#保留字)而非标识符；其并不是[属性访问器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors)，而是一种特殊的表达式语法。

`new.target` 元属性在所有的函数/类主体均可用。在函数或类的外部使用 `new.target` 会导致语法错误。

## 示例

### 函数调用中的 new\.target

在普通的函数调用中（和作为构造函数来调用相对），`new.target`的值是{{jsxref("undefined")}}。这使得你可以检测一个函数是否是作为构造函数通过[new](/zh-CN/docs/Web/JavaScript/Reference/Operators/new)被调用的。

```js
function Foo() {
  if (!new.target) throw "Foo() must be called with new";
  console.log("Foo instantiated with new");
}

Foo(); // throws "Foo() must be called with new"
new Foo(); // logs "Foo instantiated with new"
```

### 构造方法中的 new\.target

在类的构造方法中，`new.target`指向直接被`new`执行的构造函数。并且当一个父类构造方法在子类构造方法中被调用时，情况与之相同。

```js
class A {
  constructor() {
    console.log(new.target.name);
  }
}

class B extends A {
  constructor() {
    super();
  }
}

var a = new A(); // logs "A"
var b = new B(); // logs "B"

class C {
  constructor() {
    console.log(new.target);
  }
}
class D extends C {
  constructor() {
    super();
  }
}

var c = new C(); // logs class C{constructor(){console.log(new.target);}}
var d = new D(); // logs class D extends C{constructor(){super();}}
```

从上面类 C 和 D 的例子可以看出来，new\.target 指向的是初始化类的类定义。比如当 D 通过 new 初始化的时候，打印出了 D 的类定义，C 的例子与之类似，打印出的是 C 的类定义。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)
- [类](/zh-CN/docs/Web/JavaScript/Reference/Classes)
- [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new)
- [`this`](/zh-CN/docs/Web/JavaScript/Reference/Operators/this)
