---
title: Generator.prototype.throw()
slug: Web/JavaScript/Reference/Global_Objects/Generator/throw
---

{{JSRef}}

**`throw()`** 方法用来向生成器抛出异常，并恢复生成器的执行，返回带有 `done` 及 `value` 两个属性的对象。

## 语法

```plain
gen.throw(exception)
```

### 参数

- `exception`
  - : 用于抛出的异常。使用 {{jsxref("Error")}} 的实例对调试非常有帮助。

### 返回值

带有两个属性的{{jsxref("Object", "对象")}}：

- `done` (boolean)

  - 如果迭代器已经返回了迭代序列的末尾，则值为 `true`。在这种情况下，可以指定迭代器 `value` 的返回值。
  - 如果迭代能够继续生产在序列中的下一个值，则值为 `false`。这相当与不指定 done 属性的值。

- `value` - 迭代器返回的任何 JavaScript 值。当 done 是 true 的时候可以省略。

## 示例

### 使用 `throw()`

下面的例子展示了一个简单的生成器并使用 throw 方法向该生成器抛出一个异常，该异常通常可以通过 [`try...catch`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch) 块进行捕获。

```js
function* gen() {
  while (true) {
    try {
      yield 42;
    } catch (e) {
      console.log("Error caught!");
    }
  }
}

var g = gen();
g.next(); // { value: 42, done: false }
g.throw(new Error("Something went wrong")); // "Error caught!"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [`function*`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)
