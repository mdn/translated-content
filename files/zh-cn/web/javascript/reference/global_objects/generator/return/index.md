---
title: Generator.prototype.return()
slug: Web/JavaScript/Reference/Global_Objects/Generator/return
---

{{JSRef}}

**`return()`** 方法返回给定的值并结束生成器。

## 语法

```plain
gen.return(value)
```

### 参数

- `value`
  - : 需要返回的值

### 返回值

返回该函数参数中给定的值。

## 示例

### 使用 `return()`

以下例子展示了一个简单的生成器和 `return` 方法的使用。

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen();

g.next(); // { value: 1, done: false }
g.return("foo"); // { value: "foo", done: true }
g.next(); // { value: undefined, done: true }
```

如果对已经处于“完成”状态的生成器调用`return(value)`，则生成器将保持在“完成”状态。如果没有提供参数，则返回对象的`value`属性与示例最后的`.next()`方法相同。如果提供了参数，则参数将被设置为返回对象的`value`属性的值。

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen();
g.next(); // { value: 1, done: false }
g.next(); // { value: 2, done: false }
g.next(); // { value: 3, done: false }
g.next(); // { value: undefined, done: true }
g.return(); // { value: undefined, done: true }
g.return(1); // { value: 1, done: true }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [`function*`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)
