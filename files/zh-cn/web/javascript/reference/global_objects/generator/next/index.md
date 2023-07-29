---
title: Generator.prototype.next()
slug: Web/JavaScript/Reference/Global_Objects/Generator/next
---

{{JSRef}}

**`next()`** 方法返回一个包含属性 `done` 和 `value` 的对象。该方法也可以通过接受一个参数用以向生成器传值。

## 语法

```plain
gen.next(value)
```

### 参数

- `value`
  - : 向生成器传递的值。

### 返回值

返回的[对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)包含两个属性：

- `done` (布尔类型)

  - 如果迭代器超过迭代序列的末尾，则值为 `true`。在这种情况下，`value` 可选地指定迭代器的返回值。
  - 如果迭代器能够生成序列中的下一个值，则值为 `false`。这相当于没有完全指定 `done` 属性。

- `value` - 迭代器返回的任意的 JavaScript 值。当 `done` 的值为 `true` 时可以忽略该值。

## 示例

### 使用 `next()` 方法

下面的例子展示了一个简单的生成器，以及调用 `next` 后方法的返回值：

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen(); // "Generator { }"
g.next(); // "Object { value: 1, done: false }"
g.next(); // "Object { value: 2, done: false }"
g.next(); // "Object { value: 3, done: false }"
g.next(); // "Object { value: undefined, done: true }"
```

### 向生成器传值

在此示例中，使用值调用 `next`。请注意，第一次调用没有记录任何内容，因为生成器最初没有产生任何结果。

```plain
function* gen() {
  while(true) {
    var value = yield null;
    console.log(value);
  }
}

var g = gen();
g.next(1);
// "{ value: null, done: false }"
g.next(2);
// 2
// "{ value: null, done: false }"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`function*`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)
- [迭代器与生成器](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators)
