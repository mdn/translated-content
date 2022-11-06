---
title: Object.create()
slug: Web/JavaScript/Reference/Global_Objects/Object/create
---

{{JSRef}}

**`Object.create()`** 方法用于创建一个新对象，使用现有的对象来作为新创建对象的原型（prototype）。

{{EmbedInteractiveExample("pages/js/object-create.html", "taller")}}

## 语法

```js
Object.create(proto)
Object.create(proto, propertiesObject)
```

### 参数

- `proto`
  - : 新创建对象的原型对象。
- `propertiesObject` {{Optional_inline}}
  - : 如果该参数被指定且不为 {{jsxref("undefined")}}，则该传入对象的自有可枚举属性（即其自身定义的属性，而不是其原型链上的枚举属性）将为新创建的对象添加指定的属性值和对应的属性描述符。这些属性对应于 {{jsxref("Object.defineProperties()")}} 的第二个参数。

### 返回值

一个新对象，带着指定的原型对象及其属性。

### 异常

`proto` 参数需为

- {{jsxref("null")}} 或
- 除[基本类型包装对象](/zh-CN/docs/Glossary/Primitive#javascript_中的基本类型包装对象)以外的{{jsxref("Object", "对象")}}

如果 `proto` 不是这几类值，则抛出一个 {{jsxref("TypeError")}} 异常。

## 使用 `null` 原型的对象

以 `null` 为原型的对象存在不可预期的行为，因为它未从 `Object.prototype` 继承任何对象方法。特别是在调试时，因为常见的对象属性的转换/检测工具可能会产生错误或丢失信息（特别是在静默模式，会忽略错误的情况下）。

例如，缺少 [`Object.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) 方法通常会使调试变得非常困难：

```js
const normalObj = {};   // create a normal object
const nullProtoObj = Object.create(null); // create an object with "null" prototype

console.log("normalObj is: " + normalObj); // shows "normalObj is: [object Object]"
console.log("nullProtoObj is: " + nullProtoObj); // throws error: Cannot convert object to primitive value

alert(normalObj); // shows [object Object]
alert(nullProtoObj); // throws error: Cannot convert object to primitive value
```

其它方法也同样会失败。

```js
normalObj.valueOf() // shows {}
nullProtoObj.valueOf() // throws error: nullProtoObj.valueOf is not a function

normalObj.hasOwnProperty("p") // shows "true"
nullProtoObj.hasOwnProperty("p") // throws error: nullProtoObj.hasOwnProperty is not a function

normalObj.constructor // shows "Object() { [native code] }"
nullProtoObj.constructor // shows "undefined"
```

我们可以为以 null 为原型的对象添加 `toString` 方法，类似于这样：

```js
nullProtoObj.toString = Object.prototype.toString; // since new object lacks toString, add the original generic one back

console.log(nullProtoObj.toString()); // shows "[object Object]"
console.log("nullProtoObj is: " + nullProtoObj); // shows "nullProtoObj is: [object Object]"
```

与常规的对象不同，`nullProtoObj` 的 `toString` 方法是这个对象自身的属性，而非继承自对象的原型。这是因为 `nullProtoObj` “没有”原型（`null`）。

在实践中，以 `null` 为原型的对象通常用于作为 [map](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map) 的替代。因为 `Object.prototype` 原型自有的属性的存在会导致一些错误：

```js
const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return name in ages;
}

function getAge(name) {
  return ages[name];
}

hasPerson("hasOwnProperty") // true
getAge("toString") // [Function: toString]
```

使用以 null 为原型的对象消除了这种潜在的问题，且不会给 `hasPerson` 和 `getAge` 函数引入太多复杂的逻辑：

```js
const ages = Object.create(null, {
  alice: { value: 18, enumerable: true },
  bob: { value: 27, enumerable: true },
});

hasPerson("hasOwnProperty") // false
getAge("toString") // undefined
```

在这种情况下，应谨慎添加任何方法，因为它们可能会与存储的键值对混淆。

令你使用的对象不继承 `Object.prototype` 原型的方法也可以防止原型污染攻击。如果恶意脚本向 `Object.prototype` 添加了一个属性，这个属性将能够被程序中的每一个对象所访问，而以 null 为原型的对象则不受影响。

```js
const user = {};

// A malicious script:
Object.prototype.authenticated = true;

// Unexpectedly allowing unauthenticated user to pass through
if (user.authenticated) {
  // access confidential data...
}
```

## 示例

### 用 `Object.create()` 实现类式继承

下面的例子演示了如何使用 `Object.create()` 来实现类式继承。这是一个所有版本 JavaScript 都支持的单继承。

```js
// Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}

// superclass method
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);

//If you don't set Rectangle.prototype.constructor to Rectangle,
//it will take the prototype.constructor of Shape (parent).
//To avoid that, we set the prototype.constructor to Rectangle (child).
Rectangle.prototype.constructor = Rectangle;

const rect = new Rectangle();

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?', rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
```

### 使用 `Object.create()` 的 `propertyObject` 参数

```js
let o;

// create an object with null as prototype
o = Object.create(null);

o = {};
// is equivalent to:
o = Object.create(Object.prototype);

// Example where we create an object with a couple of
// sample properties. (Note that the second parameter
// maps keys to *property descriptors*.)
o = Object.create(Object.prototype, {
  // foo is a regular 'value property'
  foo: {
    writable: true,
    configurable: true,
    value: 'hello'
  },
  // bar is a getter-and-setter (accessor) property
  bar: {
    configurable: false,
    get: function() { return 10; },
    set: function(value) {
      console.log('Setting `o.bar` to', value);
    }
/* with ES2015 Accessors our code can look like this
    get() { return 10; },
    set(value) {
      console.log('Setting `o.bar` to', value);
    } */
  }
});

function Constructor() {}
o = new Constructor();
// is equivalent to:
o = Object.create(Constructor.prototype);
// Of course, if there is actual initialization code
// in the Constructor function,
// the Object.create() cannot reflect it

// Create a new object whose prototype is a new, empty
// object and add a single property 'p', with value 42.
o = Object.create({}, { p: { value: 42 } });

// by default properties ARE NOT writable,
// enumerable or configurable:
o.p = 24;
o.p;
// 42

o.q = 12;
for (const prop in o) {
  console.log(prop);
}
// 'q'

delete o.p;
// false

// to specify an ES3 property
o2 = Object.create({}, {
  p: {
    value: 42,
    writable: true,
    enumerable: true,
    configurable: true
  }
});
/* is not equivalent to:
This will create an object with prototype : {p: 42 }
o2 = Object.create({p: 42}) */
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `Object.create` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Reflect.construct()")}}
- John Resig 发布的关于 [getPrototypeOf()](https://johnresig.com/blog/objectgetprototypeof/) 的博客
