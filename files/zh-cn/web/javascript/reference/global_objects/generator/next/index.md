---
title: Generator.prototype.next()
slug: Web/JavaScript/Reference/Global_Objects/Generator/next
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jsxref("Generator")}} 实例的 **`next()`** 方法返回一个包含属性 `done` 和 `value` 的对象。你也可以通过向 `next` 方法传入一个参数来向生成器传一个值。

## 语法

```js-nolint
next()
next(value)
```

### 参数

- `value` {{optional_inline}}
  - : 要传给生成器的值。

    该值将作为 `yield` 表达式的结果。例如，在 `variable = yield expression` 中，传入给 `.next()` 函数的值将被分配给 `variable`。

### 返回值

一个 {{jsxref("Object")}}，包含以下两个属性：

- `done`
  - : 一个布尔值：
    - 如果生成器的控制流程已经结束，则为 `true`。在这种情况下，`value` 指定生成器的*返回值*（可能是 undefined）。
    - 如果生成器还是产生更多的值，则为 `false`。
- `value`
  - : 生成器产生或返回的任何 JavaScript 值。

## 示例

### 使用 next()

下面的例子展示了一个简单的生成器，以及调用 `next` 方法后的返回值：

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen(); // Generator { }
g.next(); // { value: 1, done: false }
g.next(); // { value: 2, done: false }
g.next(); // { value: 3, done: false }
g.next(); // { value: undefined, done: true }
```

### 将 next() 与列表一起使用

在这个示例中，`getPage` 获取一个列表并将其按 `pageSize` 大小“分页”成块。每次调用 `next` 都会产生一个这样的块。

```js
function* getPage(list, pageSize = 1) {
  for (let index = 0; index < list.length; index += pageSize) {
    yield list.slice(index, index + pageSize);
  }
}

const list = [1, 2, 3, 4, 5, 6, 7, 8];
const page = getPage(list, 3); // Generator { }

page.next(); // { value: [1, 2, 3], done: false }
page.next(); // { value: [4, 5, 6], done: false }
page.next(); // { value: [7, 8], done: false }
page.next(); // { value: undefined, done: true }
```

### 向生成器传值

在此示例中，调用 `next` 时传入值。

> [!NOTE]
> 第一次调用不会打印任何内容，因为生成器最初没有产生任何内容。

```js
function* gen() {
  while (true) {
    const value = yield;
    console.log(value);
  }
}

const g = gen();
g.next(1); // 返回 { value: undefined, done: false }
// 这一步不会有输出：通过 `next` 发送的第一个值会被丢弃
g.next(2); // 返回 { value: undefined, done: false }
// 打印 2
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/function*", "function*")}}
- [迭代器和生成器](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators)指南
