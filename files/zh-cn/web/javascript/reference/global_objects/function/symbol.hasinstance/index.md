---
title: Function.prototype[Symbol.hasInstance]()
slug: Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance
---

{{jsxref("Function")}} 实例的 **`[Symbol.hasInstance]()`** 方法指定确定构造函数是否将对象识别为其实例的默认过程。它由 [`instanceof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof) 运算符调用。

## 语法

```js-nolint
func[Symbol.hasInstance](value)
```

### 参数

- `value`
  - : 要测试的对象，原始值始终返回 `false`。

### 返回值

如果 `func.prototype` 在 `value` 的原型链中，则返回 `true`，否则返回 `fals`；如果 `value` 不是一个对象或 `this` 不是一个函数，则始终返回 `false`。如果 `this` 是一个[绑定函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)，则返回对 `value` 和底层目标函数进行 `instanceof` 测试的结果。

### 异常

- {{jsxref("TypeError")}}
  - : 如果 `this` 不是绑定函数且 `this.prototype` 不是对象，则会抛出此异常。

## 描述

[`instanceof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof) 运算符在右操作数存在 [`[Symbol.hasInstance]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) 方法时会调用该方法。由于所有函数默认继承自 `Function.prototype`，它们都会具有 `[Symbol.hasInstance]()` 方法，因此大多数情况下，`Function.prototype[Symbol.hasInstance]` 方法指定了右操作数为函数时 `instanceof` 的行为。该方法实现了 `instanceof` 运算符的默认行为（当 `constructor` 没有 `[Symbol.hasInstance]` 方法时使用相同算法）。

与大多数方法不同，`Function.prototype[Symbol.hasInstance]()` 属性是不可配置且不可写的。这是一个安全特性，用于防止绑定函数的底层目标函数被获取。请参考[这个 StackOverflow 回答](https://stackoverflow.com/questions/38215027/trying-to-understand-the-official-es6-spec-regarding-symbol-hasinstance/38215392#38215392)中的示例。

## 示例

### 恢复默认的 instanceof 行为

你很少需要直接调用这个方法。相反，这个方法是由 `instanceof` 运算符调用的。通常情况下，你应该期望这两种结果是等价的。

```js
class Foo {}
const foo = new Foo();
console.log(foo instanceof Foo === Foo[Symbol.hasInstance](foo)); // true
```

如果你想调用默认的 `instanceof` 行为，但不确定构造函数是否已经重写了 `[Symbol.hasInstance]()` 方法，那么你可以使用这个方法。

```js
class Foo {
  static [Symbol.hasInstance](value) {
    // 自定义实现
    return false;
  }
}

const foo = new Foo();
console.log(foo instanceof Foo); // false
console.log(Function.prototype[Symbol.hasInstance].call(Foo, foo)); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`instanceof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)
- {{jsxref("Symbol.hasInstance")}}
