---
title: 对象初始化器
slug: Web/JavaScript/Reference/Operators/Object_initializer
---

{{JsSidebar("Operators")}}

**对象初始化器**是一个用大括号（`{}`）括起来的以逗号分隔的列表，包含了一个对象的零个或多个属性名称和相关值。可以通过 [`Object.create()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create) 方法，或者使用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 运算符[调用其构造函数](/zh-CN/docs/Web/JavaScript/Guide/Working_with_objects#使用构造函数)而初始化一个对象。

{{EmbedInteractiveExample("pages/js/expressions-objectinitializer.html", "taller")}}

## 语法

```js-nolint
o = {
  a: "foo",
  b: 42,
  c: {},
  1: "number literal property",
  "foo:bar": "string literal property",

  shorthandProperty,

  method(parameters) {
    // …
  },

  get property() {},
  set property(value) {},

  [expression]: "computed property",

  __proto__: prototype,

  ...spreadProperty,
};
```

## 描述

对象初始化器是一个描述 {{jsxref("Object")}} 初始化的表达式。对象由用于描述对象的*属性*组成。对象属性的值可以包含[基本](/zh-CN/docs/Glossary/Primitive)数据类型或其他对象。

### 对象字面语法与 JSON 的对比

对象字面的语法与 **J**ava**S**cript **O**bject **N**otation（[JSON](/zh-CN/docs/Glossary/JSON)）不一样。虽然它们看起来很相似，但它们之间还是有区别的：

- JSON *只*允许使用 `"property": value` 的语法进行属性定义。属性名必须是双引号，而且定义不能简写。计算属性名也是不允许的。
- JSON 对象的属性值只能是字符串、数字、`true`、`false`、`null`、数组或其他 JSON 对象。这意味着 JSON 不能表达方法或非普通对象，如 [`Date`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 或 [`RegExp`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)。
- 在 JSON 中，`"__proto__"` 是一个普通的属性键。在对象字面中，它[设置对象的原型](#原型_setter)。

JSON 是对象字面语法的一个*真*子集，意味着每一个有效的 JSON 文本都可以被解析为对象字面，并且不会引起语法错误。唯一的例外是，对象字面语法禁止重复的 `__proto__` 键，这不适用于 [`JSON.parse()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)。后者将 `__proto__` 像普通的属性一样对待，并将最后一次出现的对象作为该属性的值。它们所代表的对象值（也就是它们的语义）唯一不同的时候，也就是当源码包含 `__proto__` 键的时候——对于对象字面，它设置对象的原型；对于 JSON，它是一个普通的属性。

```js
console.log(JSON.parse('{ "__proto__": 0, "__proto__": 1 }')); // {__proto__: 1}
console.log({ "__proto__": 0, "__proto__": 1 }); // SyntaxError: Duplicate __proto__ fields are not allowed in object literals
console.log(JSON.parse('{ "__proto__": {} }')); // { __proto__: {} }
console.log({ "__proto__": {} }); // {}（其原型为 {}）
```

## 示例

### 创建对象

没有属性的空对象可以用以下方式创建：

```js
const object = {};
```

*字面初始化器*符号的优势在于能够快速创建带有大括号内属性的对象，可以快速记录下一个以逗号分隔的 `key: value` 对的列表。

如下代码创建了一个含三个属性的对象，键分别为 `"foo"`、`"age"` 和 `"baz"`。这些键对应的值，分别是字符串 `"bar"`，数字 `42` 和另一个对象。

```js
const object = {
  foo: "bar",
  age: 42,
  baz: { myProp: 12 },
};
```

### 访问属性

创建对象后，可以读取或者修改它。对象属性可以用下标小圆点标记或者方括号标记访问。参见[属性访问器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors)获取更多信息。

```js
object.foo; // "bar"
object["age"]; // 42
object.baz; // {myProp: 12}
object.baz.myProp; //12
```

### 属性定义

上面学习了如何用初始化语法对象属性。经常能遇到希望将代码中的变量放到对象中的情况。可能遇到如下代码：

```js
const a = "foo";
const b = 42;
const c = {};

const o = {
  a: a,
  b: b,
  c: c,
};
```

有更简短的标记可以实现同样的效果：

```js
const a = "foo";
const b = 42;
const c = {};

// 简写属性名
const o = { a, b, c };

// 也就是说，
console.log(o.a === { a }.a); // true
```

#### 重复属性名

属性使用了同样的名称时，后面的属性会覆盖前面的属性。

```js
const a = { x: 1, x: 2 };
console.log(a); // {x: 2}
```

在 ES2015 之后，任何地方都允许重复属性名出现，也包括[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode#duplicate_property_names)。你也可以在[类](/zh-CN/docs/Web/JavaScript/Reference/Classes)中使用重复的属性名。唯一的例外是[私有属性](/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_class_fields)，在整个类中它必须是唯一的。

### 方法定义

对象属性也可以是一个[函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)、[getter](/zh-CN/docs/Web/JavaScript/Reference/Functions/get) 或 [setter](/zh-CN/docs/Web/JavaScript/Reference/Functions/set) 方法。

```js
const o = {
  property: function (parameters) {},
  get property() {},
  set property(value) {},
};
```

存在一种更简短的写法，关键字 `function` 也可以省略。

```js
// 简写属性名
const o = {
  property(parameters) {},
};
```

也可以简短地定义生成器方法。

```js
const o = {
  *generator() {
    // …
  },
};
```

这相当于这个类似 ES5 的符号（但注意 ECMAScript 5 没有生成器）：

```js
const o = {
  generator: function* () {
    // …
  },
};
```

有关方法的更多信息和例子，请参见[方法定义](/zh-CN/docs/Web/JavaScript/Reference/Functions/Method_definitions)。

### 计算属性名

对象初始化器的语法也支持计算的属性名称。这允许你把一个表达式放在中括号 `[]` 中，它将被计算并作为属性名使用。这让人想起[属性访问器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors)语法中的括号符号，你可能已经用它来读取和设置属性。

现在你也可以在对象字面量上使用类似的语法：

```js
// 计算属性名
let i = 0;
const a = {
  [`foo${++i}`]: i,
  [`foo${++i}`]: i,
  [`foo${++i}`]: i,
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3

const items = ["A", "B", "C"];
const obj = {
  [items]: "Hello",
};
console.log(obj); // A,B,C: "Hello"
console.log(obj["A,B,C"]); // "Hello"

const param = "size";
const config = {
  [param]: 12,
  [`mobile${param.charAt(0).toUpperCase()}${param.slice(1)}`]: 4,
};

console.log(config); // {size: 12, mobileSize: 4}
```

### 扩展属性

对象字面量支持[扩展语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)。它将自己提供的对象的枚举属性复制到一个新的对象上。

现在可以使用比 {{jsxref("Object.assign()")}} 更短的语法来实现浅拷贝（不包括 `prototype`）或合并对象。

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// { foo: "baz", x: 42, y: 13 }
```

> **警告：** 请注意，{{jsxref("Object.assign()")}} 会触发 [setter](/zh-CN/docs/Web/JavaScript/Reference/Functions/set)，而展开语法不会！

### 原型 setter

一个形式为 `__proto__: value` 或 `"__proto__": value` 的属性定义并没有创建一个名称为 `__proto__` 的属性。相反，如果提供的值是一个对象或 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null) 值，它将创建对象的 `[[Prototype]]` 指向该值（如果该值不是一个对象或 `null`，该对象不会被改变）。

请注意，`__proto__` 键是标准化的语法，与非标准且性能不佳的 [`Object.prototype.__proto__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) 访问器不同。它在创建对象时设置了 `[[Prototype]]`，类似于 {{jsxref("Object.create")}}——而不是变更原型链。

```js-nolint
const obj1 = {};
console.log(Object.getPrototypeOf(obj1) === Object.prototype); // true

const obj2 = { __proto__: null };
console.log(Object.getPrototypeOf(obj2)); // null

const protoObj = {};
const obj3 = { "__proto__": protoObj };
console.log(Object.getPrototypeOf(obj3) === protoObj); // true

const obj4 = { __proto__: "not an object or null" };
console.log(Object.getPrototypeOf(obj4) === Object.prototype); // true
console.log(Object.hasOwn(obj4, "__proto__")); // false
```

在对象字面值中，仅允许有一个原型 setter；多个原型 setter 会被视为语法错误。

不使用“冒号”标记法的属性定义不是原型 setter。它们是属性定义，其行为与使用任何其他名称的类似定义相同。

```js
const __proto__ = "variable";

const obj1 = { __proto__ };
console.log(Object.getPrototypeOf(obj1) === Object.prototype); // true
console.log(Object.hasOwn(obj1, "__proto__")); // true
console.log(obj1.__proto__); // "variable"

const obj2 = { __proto__() { return "hello"; } };
console.log(obj2.__proto__()); // "hello"

const obj3 = { ["__proto__"]: 17 };
console.log(obj3.__proto__); // 17

// 将原型 setter 与正常的使用“__proto__”键的自有属性混合在一起
const obj4 = { ["__proto__"]: 17, __proto__: {} }; // {__proto__: 17} （原型为 {}）
const obj5 = {
  ["__proto__"]: 17,
  __proto__: {},
  __proto__: null, // SyntaxError: Duplicate __proto__ fields are not allowed in object literals
};

const obj6 = {
  ["__proto__"]: 17,
  ["__proto__"]: "hello",
  __proto__: null,
}; // {__proto__: "hello"}（原型为 null）
const obj7 =  {
  ["__proto__"]: 17,
  __proto__,
  __proto__: null,
}; // {__proto__: "variable"}（原型为 null）
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [属性访问器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [`get`](/zh-CN/docs/Web/JavaScript/Reference/Functions/get) / [`set`](/zh-CN/docs/Web/JavaScript/Reference/Functions/set)
- [方法定义](/zh-CN/docs/Web/JavaScript/Reference/Functions/Method_definitions)
- [词法和语法](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar)
