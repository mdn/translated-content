---
title: Object.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperty
---

{{JSRef}}

**`Object.defineProperty()`** 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

> **备注：** 应当直接在 {{jsxref("Object")}} 构造器对象上调用此方法，而不是在任意一个 `Object` 类型的实例上调用。

{{EmbedInteractiveExample("pages/js/object-defineproperty.html")}}

## 语法

```plain
Object.defineProperty(obj, prop, descriptor)
```

### 参数

- `obj`
  - : 要定义属性的对象。
- `prop`
  - : 要定义或修改的属性的名称或 {{jsxref("Symbol")}} 。
- `descriptor`
  - : 要定义或修改的属性描述符。

### 返回值

被传递给函数的对象。

> **备注：** 在 ES6 中，由于 Symbol 类型的特殊性，用 Symbol 类型的值来做对象的 key 与常规的定义或修改不同，而`Object.defineProperty` 是定义 key 为 Symbol 的属性的方法之一。

## 描述

该方法允许精确地添加或修改对象的属性。通过赋值操作添加的普通属性是可枚举的，在枚举对象属性时会被枚举到（{{jsxref("Statements/for...in", "for...in")}} 或 {{jsxref("Object.keys")}}方法），可以改变这些属性的值，也可以{{jsxref("Operators/delete", "删除")}}这些属性。这个方法允许修改默认的额外选项（或配置）。默认情况下，使用 `Object.defineProperty()` 添加的属性值是不可修改（immutable）的。

对象里目前存在的属性描述符有两种主要形式：*数据描述符*和*存取描述符*。*数据描述符*是一个具有值的属性，该值可以是可写的，也可以是不可写的。*存取描述符*是由 getter 函数和 setter 函数所描述的属性。一个描述符只能是这两者其中之一；不能同时是两者。

这两种描述符都是对象。它们共享以下可选键值（默认值是指在使用 `Object.defineProperty()` 定义属性时的默认值）：

- `configurable`
  - : 当且仅当该属性的 `configurable` 键值为 `true` 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。
    **默认为** **`false`**。
- `enumerable`
  - : 当且仅当该属性的 `enumerable` 键值为 `true` 时，该属性才会出现在对象的枚举属性中。
    **默认为 `false`**。

数据描述符还具有以下可选键值：

- `value`
  - : 该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。
    **默认为 {{jsxref("undefined")}}**。
- `writable`
  - : 当且仅当该属性的 `writable` 键值为 `true` 时，属性的值，也就是上面的 `value`，才能被{{jsxref("Operators/Assignment_Operators", "赋值运算符")}}改变。
    **默认为 `false`。**

存取描述符还具有以下可选键值：

- `get`
  - : 属性的 getter 函数，如果没有 getter，则为 `undefined`。当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 `this` 对象（由于继承关系，这里的`this`并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值。
    **默认为 {{jsxref("undefined")}}**。
- `set`
  - : 属性的 setter 函数，如果没有 setter，则为 `undefined`。当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 `this` 对象。
    **默认为 {{jsxref("undefined")}}**。

#### 描述符默认值汇总

- 拥有布尔值的键 `configurable`、`enumerable` 和 `writable` 的默认值都是 `false`。
- 属性值和函数的键 `value`、`get` 和 `set` 字段的默认值为 `undefined`。

#### 描述符可拥有的键值

|            | `configurable` | `enumerable` | `value` | `writable` | `get`  | `set`  |
| ---------- | -------------- | ------------ | ------- | ---------- | ------ | ------ |
| 数据描述符 | 可以           | 可以         | 可以    | 可以       | 不可以 | 不可以 |
| 存取描述符 | 可以           | 可以         | 不可以  | 不可以     | 可以   | 可以   |

如果一个描述符不具有 `value`、`writable`、`get` 和 `set` 中的任意一个键，那么它将被认为是一个数据描述符。如果一个描述符同时拥有 `value` 或 `writable` 和 `get` 或 `set` 键，则会产生一个异常。

记住，这些选项不一定是自身属性，也要考虑继承来的属性。为了确认保留这些默认值，在设置之前，可能要冻结 {{jsxref("Object.prototype")}}，明确指定所有的选项，或者通过 {{jsxref("Object.create", "Object.create(null)")}} 将 {{jsxref("Object.prototype.__proto__", "__proto__")}} 属性指向 {{jsxref("null")}}。

```js
// 使用 __proto__
var obj = {};
var descriptor = Object.create(null); // 没有继承的属性
// 默认没有 enumerable，没有 configurable，没有 writable
descriptor.value = 'static';
Object.defineProperty(obj, 'key', descriptor);

// 显式
Object.defineProperty(obj, "key", {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "static"
});

// 循环使用同一对象
function withValue(value) {
  var d = withValue.d || (
    withValue.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value: null
    }
  );
  d.value = value;
  return d;
}
// ... 并且 ...
Object.defineProperty(obj, "key", withValue("static"));

// 如果 freeze 可用，防止后续代码添加或删除对象原型的属性
// （value, get, set, enumerable, writable, configurable）
(Object.freeze||Object)(Object.prototype);
```

## 示例

如果你想了解如何使用 `Object.defineProperty` 方法和*类二进制标记*语法，可以看看这些[额外示例](/zh-CN/docs/JavaScript/Reference/Global_Objects/Object/defineProperty/Additional_examples)。

### 创建属性

如果对象中不存在指定的属性，`Object.defineProperty()` 会创建这个属性。当描述符中省略某些字段时，这些字段将使用它们的默认值。

```js
var o = {}; // 创建一个新对象

// 在对象中添加一个属性与数据描述符的示例
Object.defineProperty(o, "a", {
  value : 37,
  writable : true,
  enumerable : true,
  configurable : true
});

// 对象 o 拥有了属性 a，值为 37

// 在对象中添加一个设置了存取描述符属性的示例
var bValue = 38;
Object.defineProperty(o, "b", {
  // 使用了方法名称缩写（ES2015 特性）
  // 下面两个缩写等价于：
  // get : function() { return bValue; },
  // set : function(newValue) { bValue = newValue; },
  get() { return bValue; },
  set(newValue) { bValue = newValue; },
  enumerable : true,
  configurable : true
});

o.b; // 38
// 对象 o 拥有了属性 b，值为 38
// 现在，除非重新定义 o.b，o.b 的值总是与 bValue 相同

// 数据描述符和存取描述符不能混合使用
Object.defineProperty(o, "conflict", {
  value: 0x9f91102,
  get() { return 0xdeadbeef; }
});
// 抛出错误 TypeError: value appears only in data descriptors, get appears only in accessor descriptors
```

### 修改属性

如果属性已经存在，`Object.defineProperty()`将尝试根据描述符中的值以及对象当前的配置来修改这个属性。如果旧描述符将其`configurable` 属性设置为`false`，则该属性被认为是“不可配置的”，并且没有属性可以被改变（除了单向改变 writable 为 false）。当属性不可配置时，不能在数据和访问器属性类型之间切换。

当试图改变不可配置属性（除了 `value` 和 `writable` 属性之外）的值时，会抛出{{jsxref("TypeError")}}，除非当前值和新值相同。

#### Writable 属性

当 `writable` 属性设置为 `false` 时，该属性被称为“不可写的”。它不能被重新赋值。

```js
var o = {}; // 创建一个新对象

Object.defineProperty(o, 'a', {
  value: 37,
  writable: false
});

console.log(o.a); // logs 37
o.a = 25; // No error thrown
// (it would throw in strict mode,
// even if the value had been the same)
console.log(o.a); // logs 37. The assignment didn't work.

// strict mode
(function() {
  'use strict';
  var o = {};
  Object.defineProperty(o, 'b', {
    value: 2,
    writable: false
  });
  o.b = 3; // throws TypeError: "b" is read-only
  return o.b; // returns 2 without the line above
}());
```

如示例所示，试图写入非可写属性不会改变它，也不会引发错误。

#### Enumerable 属性

`enumerable` 定义了对象的属性是否可以在 {{jsxref("Statements/for...in", "for...in")}} 循环和 {{jsxref("Object.keys()")}} 中被枚举。

```js
var o = {};
Object.defineProperty(o, "a", { value : 1, enumerable: true });
Object.defineProperty(o, "b", { value : 2, enumerable: false });
Object.defineProperty(o, "c", { value : 3 }); // enumerable 默认为 false
o.d = 4; // 如果使用直接赋值的方式创建对象的属性，则 enumerable 为 true
Object.defineProperty(o, Symbol.for('e'), {
  value: 5,
  enumerable: true
});
Object.defineProperty(o, Symbol.for('f'), {
  value: 6,
  enumerable: false
});

for (var i in o) {
  console.log(i);
}
// logs 'a' and 'd' (in undefined order)

Object.keys(o); // ['a', 'd']

o.propertyIsEnumerable('a'); // true
o.propertyIsEnumerable('b'); // false
o.propertyIsEnumerable('c'); // false
o.propertyIsEnumerable('d'); // true
o.propertyIsEnumerable(Symbol.for('e')); // true
o.propertyIsEnumerable(Symbol.for('f')); // false

var p = { ...o }
p.a // 1
p.b // undefined
p.c // undefined
p.d // 4
p[Symbol.for('e')] // 5
p[Symbol.for('f')] // undefined
```

#### Configurable 属性

`configurable` 特性表示对象的属性是否可以被删除，以及除 `value` 和 `writable` 特性外的其他特性是否可以被修改。

```js
var o = {};
Object.defineProperty(o, 'a', {
  get() { return 1; },
  configurable: false
});

Object.defineProperty(o, 'a', {
  configurable: true
}); // throws a TypeError
Object.defineProperty(o, 'a', {
  enumerable: true
}); // throws a TypeError
Object.defineProperty(o, 'a', {
  set() {}
}); // throws a TypeError (set was undefined previously)
Object.defineProperty(o, 'a', {
  get() { return 1; }
}); // throws a TypeError
// (even though the new get does exactly the same thing)
Object.defineProperty(o, 'a', {
  value: 12
}); // throws a TypeError // ('value' can be changed when 'configurable' is false but not in this case due to 'get' accessor)

console.log(o.a); // logs 1
delete o.a; // Nothing happens
console.log(o.a); // logs 1
```

如果 `o.a` 的 `configurable` 属性为 `true`，则不会抛出任何错误，并且，最后，该属性会被删除。

### 添加多个属性和默认值

考虑特性被赋予的默认特性值非常重要，通常，使用点运算符和 `Object.defineProperty()` 为对象的属性赋值时，数据描述符中的属性默认值是不同的，如下例所示。

```js
var o = {};

o.a = 1;
// 等同于：
Object.defineProperty(o, "a", {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true
});


// 另一方面，
Object.defineProperty(o, "a", { value : 1 });
// 等同于：
Object.defineProperty(o, "a", {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false
});
```

### 自定义 Setters 和 Getters

下面的例子展示了如何实现一个自存档对象。当设置`temperature` 属性时，`archive` 数组会收到日志条目。

```js
function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    },
    set: function(value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
```

下面这个例子中，getter 总是会返回一个相同的值。

```js
var pattern = {
    get: function () {
        return 'I alway return this string,whatever you have assigned';
    },
    set: function () {
        this.myname = 'this is my name string';
    }
};


function TestDefineSetAndGet() {
    Object.defineProperty(this, 'myproperty', pattern);
}


var instance = new TestDefineSetAndGet();
instance.myproperty = 'test';

// 'I alway return this string,whatever you have assigned'
console.log(instance.myproperty);
// 'this is my name string'
console.log(instance.myname);
```

### 继承属性

如果访问者的属性是被继承的，它的 `get` 和 `set` 方法会在子对象的属性被访问或者修改时被调用。如果这些方法用一个变量存值，该值会被所有对象共享。

```js
function myclass() {
}

var value;
Object.defineProperty(myclass.prototype, "x", {
  get() {
    return value;
  },
  set(x) {
    value = x;
  }
});

var a = new myclass();
var b = new myclass();
a.x = 1;
console.log(b.x); // 1
```

这可以通过将值存储在另一个属性中解决。在 `get` 和 `set` 方法中，`this` 指向某个被访问和修改属性的对象。

```js
function myclass() {
}

Object.defineProperty(myclass.prototype, "x", {
  get() {
    return this.stored_x;
  },
  set(x) {
    this.stored_x = x;
  }
});

var a = new myclass();
var b = new myclass();
a.x = 1;
console.log(b.x); // undefined
```

不像访问者属性，值属性始终在对象自身上设置，而不是一个原型。然而，如果一个不可写的属性被继承，它仍然可以防止修改对象的属性。

```js
function myclass() {
}

myclass.prototype.x = 1;
Object.defineProperty(myclass.prototype, "y", {
  writable: false,
  value: 1
});

var a = new myclass();
a.x = 2;
console.log(a.x); // 2
console.log(myclass.prototype.x); // 1
a.y = 2; // Ignored, throws in strict mode
console.log(a.y); // 1
console.log(myclass.prototype.y); // 1
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [属性的可枚举性和所有权](/zh-CN/docs/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.propertyIsEnumerable()")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Object.prototype.watch()")}}
- {{jsxref("Object.prototype.unwatch()")}}
- {{jsxref("Operators/get", "get")}}
- {{jsxref("Operators/set", "set")}}
- {{jsxref("Object.create()")}}
- [Additional `Object.defineProperty` examples](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty/Additional_examples)
- {{jsxref("Reflect.defineProperty()")}}
