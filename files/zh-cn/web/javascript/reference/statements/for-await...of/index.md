---
title: for await...of
slug: Web/JavaScript/Reference/Statements/for-await...of
---

{{jsSidebar("Statements")}}

**`for await...of` 语句**创建一个循环，该循环遍历异步可迭代对象以及同步可迭代对象，包括：内置的 {{jsxref("String")}}, {{jsxref("Array")}}，类似数组对象 (例如 {{jsxref("Functions/arguments", "arguments")}} 或 {{DOMxRef("NodeList")}})，{{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}} 和用户定义的异步/同步迭代器。它使用对象的每个不同属性的值调用要执行的语句来调用自定义迭代钩子。

类似于 {{jsxref("Operators/await", "await")}} 运算符一样，该语句只能在一个{{jsxref("Statements/async_function", "async function", "异步函数", 1)}} 内部使用。

> **备注：** `for await...of` 不适用于不是异步可迭代的异步迭代器。

## 语法

```plain
for await (variable of iterable) {
  statement
}
```

- `variable`
  - : 在每次迭代中，将不同属性的值分配给变量。变量有可能以`const`, `let`, 或者 `var`来声明。
- `iterable`
  - : 被迭代枚举其属性的对象。与 for...of 相比，这里的对象可以返回 `Promise`，如果是这样，那么 `variable` 将是 `Promise` 所包含的值，否则是值本身。

## 示例

### 迭代异步可迭代对象

你还可以迭代一个明确实现异步迭代协议的对象：

```js
var asyncIterable = {
  [Symbol.asyncIterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return Promise.resolve({ value: this.i++, done: false });
        }

        return Promise.resolve({ done: true });
      },
    };
  },
};

(async function () {
  for await (num of asyncIterable) {
    console.log(num);
  }
})();

// 0
// 1
// 2
```

### 迭代异步生成器

异步生成器已经实现了异步迭代器协议，所以可以用 `for await...of`循环。

```js
async function* asyncGenerator() {
  var i = 0;
  while (i < 3) {
    yield i++;
  }
}

(async function () {
  for await (num of asyncGenerator()) {
    console.log(num);
  }
})();
// 0
// 1
// 2
```

有关使用`for await... of`考虑迭代 API 中获取数据的异步 generator 更具体的例子。这个例子首先为一个数据流创建了一个异步 generator，然后使用它来获得这个 API 的响应值的大小。

```js
async function* streamAsyncIterator(stream) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        return;
      }
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}
// 从 url 获取数据并使用异步 generator 来计算响应值的大小
async function getResponseSize(url) {
  const response = await fetch(url);
  // Will hold the size of the response, in bytes.
  let responseSize = 0;
  // 使用 for-await-of 循环。异步 generator 会遍历响应值的每一部分
  for await (const chunk of streamAsyncIterator(response.body)) {
    // Incrementing the total response length.
    responseSize += chunk.length;
  }

  console.log(`Response Size: ${responseSize} bytes`);
  // expected output: "Response Size: 1071472"
  return responseSize;
}
getResponseSize("https://jsonplaceholder.typicode.com/photos");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Global_Objects/Symbol/asyncIterator", "Symbol.asyncIterator")}}
- {{jsxref("Statements/for...of")}}
