---
title: Object.seal()
slug: Web/JavaScript/Reference/Global_Objects/Object/seal
---

{{JSRef}}**`Object.seal()`**方法封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要原来是可写的就可以改变。{{EmbedInteractiveExample("pages/js/object-seal.html")}}

## 语法

```plain
Object.seal(obj)
```

### 参数

- `obj`
  - : 将要被密封的对象。

### 返回值

被密封的对象。

## 描述

通常，一个对象是{{jsxref("Object.isExtensible()", "可扩展的", "", 1)}}（可以添加新的属性）。密封一个对象会让这个对象变的不能添加新属性，且所有已有属性会变的不可配置。属性不可配置的效果就是属性变的不可删除，以及一个数据属性不能被重新定义成为访问器属性，或者反之。但属性的值仍然可以修改。尝试删除一个密封对象的属性或者将某个密封对象的属性从数据属性转换成访问器属性，结果会静默失败或抛出{{jsxref("TypeError")}}（在{{jsxref("Strict_mode", "严格模式", "", 1)}} 中最常见的，但不唯一）。

不会影响从原型链上继承的属性。但 {{jsxref("Object.proto", "__proto__")}} ( {{deprecated_inline}} ) 属性的值也会不能修改。

返回被密封对象的引用。

## 例子

```js
var obj = {
  prop: function() {},
  foo: 'bar'
};

// 可以添加新的属性
// 可以更改或删除现有的属性
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

var o = Object.seal(obj);

o === obj; // true
Object.isSealed(obj); // === true

// 仍然可以修改密封对象的属性值
obj.foo = 'quux';


// 但是你不能将属性重新定义成为访问器属性
// 反之亦然
Object.defineProperty(obj, 'foo', {
  get: function() { return 'g'; }
}); // throws a TypeError

// 除了属性值以外的任何变化，都会失败。
obj.quaxxor = 'the friendly duck';
// 添加属性将会失败
delete obj.foo;
// 删除属性将会失败

// 在严格模式下，这样的尝试将会抛出错误
function fail() {
  'use strict';
  delete obj.foo; // throws a TypeError
  obj.sparky = 'arf'; // throws a TypeError
}
fail();

// 通过 Object.defineProperty 添加属性将会报错
Object.defineProperty(obj, 'ohai', {
  value: 17
}); // throws a TypeError
Object.defineProperty(obj, 'foo', {
  value: 'eit'
}); // 通过 Object.defineProperty 修改属性值
```

## 注意

在 ES5 中，如果这个方法的参数不是一个（原始）对象，那么它将导致{{jsxref("TypeError")}}。在 ES2015 中，非对象参数将被视为已被密封的普通对象，会直接返回它。

```js
Object.seal(1);
// TypeError: 1 is not an object (ES5 code)

Object.seal(1);
// 1                             (ES2015 code)
```

### 对比 `Object.freeze()`

使用`Object.freeze()`冻结的对象中的现有属性值是不可变的。用`Object.seal()`密封的对象可以改变其现有属性值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
