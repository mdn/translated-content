---
title: 对象初始化
slug: Web/JavaScript/Reference/Operators/Object_initializer
---

{{JsSidebar("Operators")}}

可以通过[`new Object()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)，`Object.create()`方法，或者使用字面量标记（初始化标记）初始化对象。一个对象初始化器，由花括号/大括号 (`{}`) 包含的一个由零个或多个对象属性名和其关联值组成的一个逗号分隔的列表构成。

## 语法

```js
var o = {};
var o = {a: 'foo', b: 42, c: {}};

var a = 'foo', b = 42, c = {};
var o = {a: a, b: b, c: c};

var o = {
  property: function ([parameters]) {},
  get property() {},
  set property(value) {}
};
```

### ECMAScript 2015 的新标记

请参考兼容性表格获取这些标记的支持信息。在不被支持的环境中，这些标记将造成语法错误。

```js
// Shorthand property names (ES2015)
var a = 'foo', b = 42, c = {};
var o = {a, b, c};

// Shorthand method names (ES2015)
var o = {
  property([parameters]) {}
};

// Computed property names (ES2015)
var prop = 'foo';
var o = {
  [prop]: 'hey',
  ['b' + 'ar']: 'there'
};
```

## 描述

对象初始化是一个描述{{jsxref("Object","对象")}}初始化过程的表达式。对象初始化是由一组描述对象的属性组成。属性的值可以是{{Glossary("primitive","原始")}}类型，也可以是其他对象。

### 创建对象

没有属性的空对象可以用以下方式创建：

```js
let obj = {};
```

不过，_字面_ 和*初始化* 标记的优势在于，可以用内含属性的花括号快速创建对象。简单地编写一个逗号分隔的键值对的类别。如下代码创建了一个含三个属性的对象，键分别为 "`foo`", "`age`" 和 "`baz`"。这些键对应的值，分别是字符串“`bar`”，数字`42`和另一个对象。

```js
let obj = {
  foo: "bar",
  age: 42,
  baz: { myProp: 12 },
}
```

### 属性访问

创建对象后，可以读取或者修改它。对象属性可以用下标小圆点标记或者方括号标记访问。参考[属性访问](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_Accessors) 获取更多信息。

```js
object.foo; // "bar"
object["age"]; // 42

object.foo = "baz";
```

### 属性定义

上面学习了如何用初始化标记对象属性。经常能遇到希望将代码中的变量放到对象中的情况。可能遇到如下代码：

```js
var a = "foo",
    b = 42,
    c = {};

var o = {
  a: a,
  b: b,
  c: c
};
```

在 ECMAScript 2015 中，有更简短的标记可以实现同样的效果：

```js
var a = 'foo',
    b = 42,
    c = {};

// Shorthand property names (ES2015)
var o = {a, b, c};

// In other words,
console.log((o.a === {a}.a)); // true
```

#### 重复属性名

属性使用了同样的名称时，后面的属性会覆盖前面的属性。

```js
var a = {x: 1, x: 2};
console.log(a); // { x: 2}
```

在 ECMAScript 5 严格模式的代码中，重复的属性名会被当做{{jsxref("SyntaxError")}}。引入计算的属性名以后，属性名会在运行时出现重复。ECMAScript 2015 移除了这个限制。

```js
function haveES6DuplicatePropertySemantics(){
  "use strict";
  try {
    ({ prop: 1, prop: 2 });

    // No error thrown, duplicate property names allowed in strict mode
    return true;
  } catch (e) {
    // Error thrown, duplicates prohibited in strict mode
    return false;
  }
}
```

### 方法定义

对象属性也可以是一个[函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)、[getter](/zh-CN/docs/Web/JavaScript/Reference/Functions/get)、[setter](/zh-CN/docs/Web/JavaScript/Reference/Functions/set)方法。

```js
var o = {
  property: function ([parameters]) {},
  get property() {},
  set property(value) {},
};
```

ECMAScript 2015 引入了一种简短写法， "function" 关键字也可以丢掉。

```js
// Shorthand method names (ES6)
var o = {
  property([parameters]) {},
  get property() {},
  set property(value) {},
  * generator() {}
};
```

ECMAScript 2015 提供了一种简明地定义以生成器函数作为值的属性的方法。

```js
var o = {
  * generator() {
    ...........
  }
};
```

ECMAScript 5 中可以这样书写（需要注意的是 ES5 没有生成器）：

```js
var o = {
  generatorMethod: function *() {
    ...........
  }
};
```

获取更多信息和范例，请参考 [method definitions](/zh-CN/docs/Web/JavaScript/Reference/Functions/Method_definitions)。

### 计算属性名

从 ECMAScript 2015 开始，对象初始化语法开始支持计算属性名。其允许在 \[] 中放入表达式，计算结果可以当做属性名。这种用法和用方括号访问[属性](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_Accessors)非常类似，也许你已经用来读取和设置属性了。现在同样的语法也可以用于对象字面值了：

```js
// Computed property names (ES6)
var i = 0;
var a = {
  ["foo" + ++i]: i,
  ["foo" + ++i]: i,
  ["foo" + ++i]: i
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3

var param = 'size';
var config = {
  [param]: 12,
  ["mobile" + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};

console.log(config); // { size: 12, mobileSize: 4 }
```

### 扩展属性

ECMAScript 提案（第 3 阶段）的[剩余/扩展属性](https://github.com/tc39/proposal-object-rest-spread)将[扩展](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_operator)属性添加到对象字面量。它将自己提供的对象的枚举属性复制到一个新的对象上。

使用比{{jsxref("Object.assign()")}}更短的语法，可以轻松克隆（不包括原型）或合并对象。

```js
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
```

请注意，{{jsxref("Object.assign()")}}会触发[setter](/zh-CN/docs/Web/JavaScript/Reference/Functions/set)，而展开操作符则不会。

### 变更原型

定义属性为`__proto__: 值` 或 `"__proto__": 值` 时，不会创建名为`__proto__`属性。如果给出的值是对象或者[`null`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null)，那么对象的`[[Prototype]]`会被设置为给出的值。（如果给出的值不是对象也不是 null，那么对象的原型不会改变。）

```js
var obj1 = {};
assert(Object.getPrototypeOf(obj1) === Object.prototype);

var obj2 = { __proto__: null };
assert(Object.getPrototypeOf(obj2) === null);

var protoObj = {};
var obj3 = { "__proto__": protoObj };
assert(Object.getPrototypeOf(obj3) === protoObj);

var obj4 = { __proto__: "not an object or null" };
assert(Object.getPrototypeOf(obj4) === Object.prototype);
assert(!obj4.hasOwnProperty("__proto__"));
```

在对象字面值中，仅有一次变更原型的机会；多次变更原型，会被视为语法错误。

不使用冒号标记的属性定义，不会变更对象的原型；而是和其他具有不同名字的属性一样是普通属性定义。

```js
var __proto__ = "variable";

var obj1 = { __proto__ };
assert(Object.getPrototypeOf(obj1) === Object.prototype);
assert(obj1.hasOwnProperty("__proto__"));
assert(obj1.__proto__ === "variable");

var obj2 = { __proto__() { return "hello"; } };
assert(obj2.__proto__() === "hello");

var obj3 = { ["__prot" + "o__"]: 17 };
assert(obj3.__proto__ === 17);
```

## 对象字面量表示法与 JSON

对象字面量表示法和 **J**ava**S**cript **O**bject **N**otation（[JSON](/zh-CN/docs/Glossary/JSON)）是不同的。虽然他们看起来相似，不同点有：

- JSON 只允许`"property": value` syntax 形式的属性定义。属性名必须用双引号括起来。且属性定义不允许使用简便写法。
- JSON 中，属性的值仅允许字符串，数字，数组，`true`，`false`，`null`或其他（JSON）对象。
- JSON 中，不允许将值设置为函数。
- {{jsxref("Date")}} 等对象，经{{jsxref("JSON.parse()")}}处理后，会变成字符串。
- {{jsxref("JSON.parse()")}} 不会处理计算的属性名，会当做错误抛出。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [Property accessors](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_Accessors)
- [`get`](/zh-CN/docs/Web/JavaScript/Reference/Functions/get) / [`set`](/zh-CN/docs/Web/JavaScript/Reference/Functions/set)
- [Method definitions](/zh-CN/docs/Web/JavaScript/Reference/Functions/Method_definitions)
- [Lexical grammar](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar)
