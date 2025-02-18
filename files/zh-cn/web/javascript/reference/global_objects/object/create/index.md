---
title: Object.create()
slug: Web/JavaScript/Reference/Global_Objects/Object/create
---

{{JSRef}}

**`Object.create()`** 静态方法以一个现有对象作为原型，创建一个新对象。

{{InteractiveExample("JavaScript Demo: Object.create()", "taller")}}

```js interactive-example
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();
// Expected output: "My name is Matthew. Am I human? true"
```

## 语法

```js-nolint
Object.create(proto)
Object.create(proto, propertiesObject)
```

### 参数

- `proto`
  - : 新创建对象的原型对象。
- `propertiesObject` {{Optional_inline}}
  - : 如果该参数被指定且不为 {{jsxref("undefined")}}，则该传入对象[可枚举的自有属性](/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)将为新创建的对象添加具有对应属性名称的属性描述符。这些属性对应于 {{jsxref("Object.defineProperties()")}} 的第二个参数。

### 返回值

根据指定的原型对象和属性创建的新对象。

### 异常

- {{jsxref("TypeError")}}
  - : 如果 `proto` 既不是 {{jsxref("null")}}，也不是 {{jsxref("Object")}}，则抛出此错误。

## 示例

### 用 Object.create() 实现类式继承

下面的例子演示了如何使用 `Object.create()` 来实现类式继承。这是一个所有版本 JavaScript 都支持的单继承。

```js
// Shape——父类
function Shape() {
  this.x = 0;
  this.y = 0;
}

// 父类方法
Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info("Shape moved.");
};

// Rectangle——子类
function Rectangle() {
  Shape.call(this); // 调用父类构造函数。
}

// 子类继承父类
Rectangle.prototype = Object.create(Shape.prototype, {
  // 如果不将 Rectangle.prototype.constructor 设置为 Rectangle，
  // 它将采用 Shape（父类）的 prototype.constructor。
  // 为避免这种情况，我们将 prototype.constructor 设置为 Rectangle（子类）。
  constructor: {
    value: Rectangle,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});

const rect = new Rectangle();

console.log("rect 是 Rectangle 类的实例吗？", rect instanceof Rectangle); // true
console.log("rect 是 Shape 类的实例吗？", rect instanceof Shape); // true
rect.move(1, 1); // 打印 'Shape moved.'
```

需要注意的是，使用 `create()` 也有一些要注意的地方，比如重新添加 [`constructor`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) 属性以确保正确的语义。虽然 `Object.create()` 被认为比使用 {{jsxref("Object.setPrototypeOf()")}} 修改原型更具有性能优势，但如果没有创建实例并且属性访问还没有被优化，它们之间的差异实际上是可以忽略不计的。在现代代码中，无论如何都应该优先使用[类](/zh-CN/docs/Web/JavaScript/Reference/Classes)语法。

### 使用 Object.create() 的 propertyObject 参数

`Object.create()` 方法允许对对象创建过程进行精细的控制。实际上，[字面量初始化对象语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer)是 `Object.create()` 的一种语法糖。使用 `Object.create()`，我们可以创建具有指定原型和某些属性的对象。请注意，第二个参数将键映射到*属性描述符*，这意味着你还可以控制每个属性的可枚举性、可配置性等，而这在字面量初始化对象语法中是做不到的。

```js
o = {};
// 等价于：
o = Object.create(Object.prototype);

o = Object.create(Object.prototype, {
  // foo 是一个常规数据属性
  foo: {
    writable: true,
    configurable: true,
    value: "hello",
  },
  // bar 是一个访问器属性
  bar: {
    configurable: false,
    get() {
      return 10;
    },
    set(value) {
      console.log("Setting `o.bar` to", value);
    },
  },
});

// 创建一个新对象，它的原型是一个新的空对象，并添加一个名为 'p'，值为 42 的属性。
o = Object.create({}, { p: { value: 42 } });
```

使用 `Object.create()`，我们可以创建一个[原型为 `null`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#null_原型对象) 的对象。在字面量初始化对象语法中，相当于使用 [`__proto__`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer) 键。

```js
o = Object.create(null);
// 等价于：
o = { __proto__: null };
```

默认情况下，属性是*不可写*、*可枚举*和*可配置*的。

```js
o.p = 24; // 在严格模式下会报错
o.p; // 42

o.q = 12;
for (const prop in o) {
  console.log(prop);
}
// 'q'

delete o.p;
// false；在严格模式下会报错
```

如果要指定与字面量对象中相同的属性，请显式指定 `writable`、`enumerable` 和 `configurable`。

```js
o2 = Object.create(
  {},
  {
    p: {
      value: 42,
      writable: true,
      enumerable: true,
      configurable: true,
    },
  },
);
// 这与以下语句不等价：
// o2 = Object.create({ p: 42 })
// 后者将创建一个原型为 { p: 42 } 的对象。
```

你可以使用 `Object.create()` 来模仿 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 运算符的行为。

```js
function Constructor() {}
o = new Constructor();
// 等价于：
o = Object.create(Constructor.prototype);
```

当然，如果 `Constructor` 函数中有实际的初始化代码，那么 `Object.create()` 方法就无法反映它。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Object.create` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Reflect.construct()")}}
- John Resig 发布的关于 [getPrototypeOf()](https://johnresig.com/blog/objectgetprototypeof/) 的博客
