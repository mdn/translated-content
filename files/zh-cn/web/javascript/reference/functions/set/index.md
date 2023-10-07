---
title: setter
slug: Web/JavaScript/Reference/Functions/set
---

{{jsSidebar("Functions")}}

当尝试设置属性时，**`set`** 语法将对象属性绑定到要调用的函数。它还可以在[类](/zh-CN/docs/Web/JavaScript/Reference/Classes)中应用。

{{EmbedInteractiveExample("pages/js/functions-setter.html")}}

## 语法

```js-nolint
{ set prop(val) { /* … */ } }
{ set [expression](val) { /* … */ } }
```

### 参数

- `prop`
  - : 要绑定到给定函数的属性名。
- `val`
  - : 用于保存尝试分配给`prop`的值的变量的一个别名。
- 表达式
  - : 从 ECMAScript 2015 开始，还可以使用一个计算属性名的表达式绑定到给定的函数。

## 描述

在 javascript 中，如果试着改变一个属性的值，那么对应的 setter 将被执行。setter 经常和 getter 连用以创建一个伪属性。不可能在具有真实值的属性上同时拥有一个 setter 器。

使用 set 语法时请注意：

- 它的标识符可以是数字或字符串；
- 它必须有一个明确的参数（详见 [Incompatible ES5 change: literal getter and setter functions must now have exactly zero or one arguments](http://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/)）；
- 在对象字面量中，不能为一个已有真实值的变量使用 set，也不能为一个属性设置多个 set。
  ( `{ set x(v) { }, set x(v) { } }` 和 `{ x: ..., set x(v) { } }` 是不允许的 )

## 示例

### 在对象初始化时定义 setter

这将定义一个对象 `language` 的伪属性`current`，当`current`被分配一个值时，将使用该值更新`log`：

```js
const language = {
  set current(name) {
    this.log.push(name);
  },
  log: [],
};

language.current = "EN";
console.log(language.log); // ['EN']

language.current = "FA";
console.log(language.log); // ['EN', 'FA']
```

请注意，`current`属性是未定义的，访问它时将会返回 `undefined`。

### 用 `delete` 操作符移除一个 setter

我们可以使用[`delete`](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)操作符移除 setter。

```js
delete language.current;
```

### 使用 `defineProperty` 为当前对象定义 setter

我们可以随时使用 {{jsxref("Object.defineProperty()")}} 给一个已经存在的对象添加一个 setter。

```js
const o = { a: 0 };

Object.defineProperty(o, "b", {
  set: function (x) {
    this.a = x / 2;
  },
});

o.b = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
console.log(o.a); // 5
```

### 使用计算属性名

```js
const expr = "foo";

const obj = {
  baz: "bar",
  set [expr](v) {
    this.baz = v;
  },
};

console.log(obj.baz); // "bar"
obj.foo = "baz"; // run the setter
console.log(obj.baz); // "baz"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [getter](/zh-CN/docs/Web/JavaScript/Reference/Functions/get)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__defineGetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- JavaScript 指南中[定义 Getter 和 Setter](/zh-CN/docs/Web/JavaScript/Guide/Working_with_objects#定义_getter_与_setter) 一文
- [不兼容的 ES5 变化：字面量的 getter 和 setter 函数现在必须正好有零或一个参数](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/)
