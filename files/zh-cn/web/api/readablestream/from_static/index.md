---
title: ReadableStream：from() 静态方法
slug: Web/API/ReadableStream/from_static
---

{{APIRef("Streams")}}{{SeeCompatTable}}

**`ReadableStream.from()`** 静态方法从提供的可迭代或异步可迭代对象返回一个 {{domxref("ReadableStream")}}。

该方法可以用于将可迭代或异步可迭代对象包装为可读流，包括数组、集合、promise 数组、异步生成器、`ReadableStream`、Node.js 可读流，等等。

## 语法

```js-nolint
ReadableStream.from(anyIterable)
```

### 参数

- `anyIterable`
  - : 一个[可迭代](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)或[异步可迭代](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#异步迭代器和异步可迭代协议)对象。

### 返回值

一个 {{domxref("ReadableStream")}}。

### 异常

- {{jsxref("TypeError")}}
  - : 如果传入的参数不是可迭代对象或者异步可迭代对象（未定义 `[Symbol.iterator]()` 或 `[Symbol.asyncIterator]()` 方法），则抛出。如果在迭代期间，下一步的结果不是对象或者 promise 不能兑现对象，则也会抛出。

## 示例

### 将异步迭代器转换为可读流

这个在线示例演示了你如何将一个异步可迭代对象转换为 `ReadableStream`，然后如何消费这个流。

#### HTML

这个 HTML 由 `<pre>` 元素组成，用于日志记录。

```html
<pre id="log"></pre>
```

#### JavaScript

该示例代码创建了一个 `log()` 函数，用于将日志写入日志 HTML 元素。

```js
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

然后，检查是否支持静态方法，如果不支持，则记录不支持的结果。

```js
if (!ReadableStream.from) {
  log("不支持 ReadableStream.from()");
}
```

异步可迭代对象是一个匿名生成器函数，当它被调用三次时，它会产生值 1、2 和 3。该函数被传递给 `ReadableStream.from()`，以创建 `ReadableStream`。

```js
// 定义异步的迭代器
const asyncIterator = (async function* () {
  yield 1;
  yield 2;
  yield 3;
})();

// 从迭代器创建 ReadableStream
const myReadableStream = ReadableStream.from(asyncIterator);
```

[使用可读流](/zh-CN/docs/Web/API/Streams_API/Using_readable_streams)示范了几种方式去消费流。以下使用 `for ...await` 循环的代码，因为这个方法是最简单的。循环的每次迭代都会记录来自流的当前分块。

```js
consumeStream(myReadableStream);

// 异步迭代 ReadableStream
async function consumeStream(readableStream) {
  for await (const chunk of myReadableStream) {
    // 使用每个分块做一些事情
    // 这里我们仅记录分块的值
    log(`chunk: ${chunk}`);
  }
}
```

#### 结果

消费流的输出如下所示（如果支持 `ReadableStream.from()`）。

{{EmbedLiveSample("将异步迭代器转换为可读流","100%", "80")}}

### 将数组转换为 ReadableStream

该示例演示了如何将 `Array` 转换为 `ReadableStream`。

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}

if (!ReadableStream.from) {
  log("不支持 ReadableStream.from()");
}
```

#### JavaScript

可迭代对象仅是一个字符串数组，它被传递给 `ReadableStream.from()` 以创建 `ReadableStream`。

```js
// 一个蔬菜名称的数组
const vegetables = ["Carrot", "Broccoli", "Tomato", "Spinach"];

// 从数组创建 ReadableStream
const myReadableStream = ReadableStream.from(vegetables);
```

```js hidden
consumeStream(myReadableStream);

// 异步迭代 ReadableStream
async function consumeStream(readableStream) {
  for await (const chunk of myReadableStream) {
    // 使用每个分块做一些事情
    // 这里我们仅记录分块的值
    log(`chunk: ${chunk}`);
  }
}
```

我们使用与之前示例相同的方式记录和消费流，因此这里不再展示。

#### 结果

输出如下所示。

{{EmbedLiveSample("将数组转换为 ReadableStream","100%", "100")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("ReadableStream")}}
- [使用可读流](/zh-CN/docs/Web/API/Streams_API/Using_readable_streams)
