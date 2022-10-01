---
title: Object.freeze()
slug: Web/JavaScript/Reference/Global_Objects/Object/freeze
---

{{JSRef}}

**`Object.freeze()`** 方法可以**冻结**一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。`freeze()` 返回和传入的参数相同的对象。

{{EmbedInteractiveExample("pages/js/object-freeze.html")}}

## 语法

```plain
Object.freeze(obj)
```

### 参数

- `obj`
  - : 要被冻结的对象。

### 返回值

被冻结的对象。

## 描述

被冻结对象自身的所有属性都不可能以任何方式被修改。任何修改尝试都会失败，无论是静默地还是通过抛出{{jsxref("TypeError")}}异常（最常见但不仅限于{{jsxref("Strict_mode", "strict mode", "", 1)}}）。

数据属性的值不可更改，访问器属性（有 getter 和 setter）也同样（但由于是函数调用，给人的错觉是还是可以修改这个属性）。如果一个属性的值是个对象，则这个对象中的属性是可以修改的，除非它也是个冻结对象。数组作为一种对象，被冻结，其元素不能被修改。没有数组元素可以被添加或移除。

这个方法返回传递的对象，而不是创建一个被冻结的副本。

## 例子

### 冻结对象

```js
var obj = {
  prop: function() {},
  foo: 'bar'
};

// 新的属性会被添加，已存在的属性可能
// 会被修改或移除
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

// 作为参数传递的对象与返回的对象都被冻结
// 所以不必保存返回的对象（因为两个对象全等）
var o = Object.freeze(obj);

o === obj; // true
Object.isFrozen(obj); // === true

// 现在任何改变都会失效
obj.foo = 'quux'; // 静默地不做任何事
// 静默地不添加此属性
obj.quaxxor = 'the friendly duck';

// 在严格模式，如此行为将抛出 TypeErrors
function fail(){
  'use strict';
  obj.foo = 'sparky'; // throws a TypeError
  delete obj.quaxxor; // 返回 true，因为 quaxxor 属性从来未被添加
  obj.sparky = 'arf'; // throws a TypeError
}

fail();

// 试图通过 Object.defineProperty 更改属性
// 下面两个语句都会抛出 TypeError.
Object.defineProperty(obj, 'ohai', { value: 17 });
Object.defineProperty(obj, 'foo', { value: 'eit' });

// 也不能更改原型
// 下面两个语句都会抛出 TypeError.
Object.setPrototypeOf(obj, { x: 20 })
obj.__proto__ = { x: 20 }
```

### 冻结数组

```js
let a = [0];
Object.freeze(a); // 现在数组不能被修改了。

a[0]=1; // fails silently
a.push(2); // fails silently

// In strict mode such attempts will throw TypeErrors
function fail() {
  "use strict"
  a[0] = 1;
  a.push(2);
}

fail();
```

被冻结的对象是不可变的。但也不总是这样。下例展示了冻结对象不是常量对象（浅冻结）。

```js
obj1 = {
  internal: {}
};

Object.freeze(obj1);
obj1.internal.a = 'aValue';

obj1.internal.a // 'aValue'
```

对于一个常量对象，整个引用图（直接和间接引用其他对象）只能引用不可变的冻结对象。冻结的对象被认为是不可变的，因为整个对象中的整个对象状态（对其他对象的值和引用）是固定的。注意，字符串，数字和布尔总是不可变的，而函数和数组是对象。

要使对象不可变，需要递归冻结每个类型为对象的属性（深冻结）。当你知道对象在引用图中不包含任何 _[环](<https://en.wikipedia.org/wiki/Cycle_(graph_theory)>) _(循环引用) 时，将根据你的设计逐个使用该模式，否则将触发无限循环。对 deepFreeze() 的增强将是具有接收路径（例如 Array）参数的内部函数，以便当对象进入不变时，可以递归地调用 deepFreeze() 。你仍然有冻结不应冻结的对象的风险，例如 \[window]。

```js
// 深冻结函数。
function deepFreeze(obj) {

  // 取回定义在 obj 上的属性名
  var propNames = Object.getOwnPropertyNames(obj);

  // 在冻结自身之前冻结属性
  propNames.forEach(function(name) {
    var prop = obj[name];

    // 如果 prop 是个对象，冻结它
    if (typeof prop == 'object' && prop !== null)
      deepFreeze(prop);
  });

  // 冻结自身 (no-op if already frozen)
  return Object.freeze(obj);
}

obj2 = {
  internal: {}
};

deepFreeze(obj2);
obj2.internal.a = 'anotherValue';
obj2.internal.a; // undefined
```

## Notes

在 ES5 中，如果这个方法的参数不是一个对象（一个原始值），那么它会导致 {{jsxref("TypeError")}}。在 ES2015 中，非对象参数将被视为要被冻结的普通对象，并被简单地返回。

```js
> Object.freeze(1)
TypeError: 1 is not an object // ES5 code

> Object.freeze(1)
1                             // ES2015 code
```

### 对比 `Object.seal()`

用`Object.seal()`密封的对象可以改变它们现有的属性。使用`Object.freeze()` 冻结的对象中现有属性是不可变的。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Object.isFrozen")}}
- {{jsxref("Object.preventExtensions")}}
- {{jsxref("Object.isExtensible")}}
- {{jsxref("Object.seal")}}
- {{jsxref("Object.isSealed")}}
