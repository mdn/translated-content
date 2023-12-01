---
title: setTimeout() 全局函数
slug: Web/API/setTimeout
---

{{APIRef("HTML DOM")}}

全局的 **`setTimeout()`** 方法设置一个定时器，一旦定时器到期，就会执行一个函数或指定的代码片段。

## 语法

```js-nolint
setTimeout(code)
setTimeout(code, delay)

setTimeout(functionRef)
setTimeout(functionRef, delay)
setTimeout(functionRef, delay, param1)
setTimeout(functionRef, delay, param1, param2)
setTimeout(functionRef, delay, param1, param2, /* … ,*/ paramN)
```

### 参数

- `functionRef`
  - : 当定时器到期后，将要执行的 {{jsxref("function")}}。
- `code`
  - : 这是一个可选语法，允许你包含在定时器到期后编译和执行的字符串而非函数。使用该语法是**不推荐的**，原因和使用 {{jsxref("Global_Objects/eval", "eval()")}} 一样，有安全风险。
- `delay` {{optional_inline}}

  - : 定时器在执行指定的函数或代码之前应该等待的时间，单位是毫秒。如果省略该参数，则使用值 0，意味着“立即”执行，或者更准确地说，在下一个事件循环执行。

    注意，无论是哪种情况，实际延迟可能会比预期长一些，参见下方[延时比指定值更长的原因](#延时比指定值更长的原因)一节的叙述。

    还要注意的是，如果值不是数字，隐含的[类型强制转换](/zh-CN/docs/Glossary/Type_coercion)会静默地对该值进行转换，使其成为一个数字——这可能导致意想不到的、令人惊讶的结果；见[非数字延迟值被静默地强制转化为数字](#非数字延迟值被静默地强制转化为数字)以了解一个示例。

- `param1`, …, `paramN` {{optional_inline}}

  - : 附加参数，一旦定时器到期，它们会作为参数传递给 `functionRef` 指定的函数。

### 返回值

返回值 `timeoutID` 是一个正整数，表示由 `setTimeout()` 调用创建的定时器的编号。这个值可以传递给 {{domxref("clearTimeout","clearTimeout()")}} 来取消该定时器。

保证 `timeoutID` 值不会被同一对象（window 或 worker）的后续调用 `setTimeout()` 或 `setInterval()` 重复使用。然而，不同的对象使用不同的 ID 池。

## 描述

使用 {{domxref("clearTimeout()")}} 取消超时。

如果要重复调用某个函数（如每 _N_ 毫秒调用一次），考虑使用 {{domxref("setInterval()")}}。

### 非数字延迟值被静默地强制转化为数字

如果调用 `setTimeout()` 的 [_delay_](#delay) 值不是数字，隐含的[类型强制转换](/zh-CN/docs/Glossary/Type_coercion)会静默地对该值进行转换，使其成为数字。例如，下面的代码在 _delay_ 值中错误地使用了字符串 `"1000"`，而不是数字 `1000`——但它仍然有效，因为当代码运行时，字符串被强制转换成数字 `1000`，所以代码在 1 秒后执行。

```js example-bad
setTimeout(() => {
  console.log("延迟了 1 秒。");
}, "1000");
```

但在许多情况下，隐式类型强制转换会导致意想不到的、令人惊讶的结果。例如，当下面的代码运行时，字符串 `"1 秒"` 最终被强制转换为数字 `0`——因此，代码立即执行，没有延迟。

```js example-bad
setTimeout(() => {
  console.log("延迟了 1 秒。");
}, "1 秒");
```

因此，不要使用字符串来表示 _delay_ 值，而要始终使用数字：

```js example-good
setTimeout(() => {
  console.log("延迟了 1 秒。");
}, 1000);
```

### 与异步函数配合

`setTimeout()` 是异步函数，意味着计时器函数将不会暂停函数栈中其他函数的执行。也就是说，你不能使用 `setTimeout()` 来在函数栈中下一个函数执行前执行“暂停”操作。

查看以下示例：

```js
setTimeout(() => {
  console.log("这是第一条消息");
}, 5000);
setTimeout(() => {
  console.log("这是第二条消息");
}, 3000);
setTimeout(() => {
  console.log("这是第三条消息");
}, 1000);

// 输出：

// 这是第三条消息
// 这是第二条消息
// 这是第一条消息
```

请注意，第一个函数在调用第二个函数之前没有建立一个 5 秒钟的“暂停”。相反，第一个函数被调用，但等待 5 秒后执行。当第一个函数等待执行时，第二个函数被调用，在第二个函数执行之前，对其进行了 3 秒的等待。由于第一个和第二个函数的定时器都没有完成，第三个函数被调用并首先完成其执行。第二个函数紧随其后。在第一个函数的定时器最终完成后，最后执行该函数。

要创建一个进程，其中一个函数只有在另一个函数完成后才会触发，请参见关于 [Promise](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的文档。

## 关于“this”的问题

当你向 `setTimeout()` 传递一个函数时，该函数中的 `this` 指向跟你的期望可能不同，这个问题在 [JavaScript 参考](/zh-CN/docs/Web/JavaScript/Reference/Operators/this#回调)中进行了详细解释。

由 `setTimeout()` 执行的代码是从一个独立于调用 `setTimeout` 的函数的执行环境中调用的。为被调用的函数设置 `this` 关键字的通常规则适用，如果你没有在调用中或用 `bind` 设置 `this`，它将默认为 `window`（或 `global`）对象。它将与调用 `setTimeout` 的函数的 `this` 值不一样。

```js
const myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // 输出 "zero,one,two"
myArray.myMethod(1); // 输出 "one"
```

上面这段代码正常工作，当调用 `myArray` 时，它的 `this` 设定为 `myArray`，故在函数中 `this[sProperty]` 与 `myArray[sProperty]` 等价。然而，在以下示例中：

```js
setTimeout(myArray.myMethod, 1.0 * 1000); // 在 1 秒后输出 "[object Window]"
setTimeout(myArray.myMethod, 1.5 * 1000, "1"); // 在 1.5 秒后输出 "undefined"
```

传递给 `setTimeout` 的是 `myArray.myMethod` 函数，当调用它的时候，`this` 没有指向，故其默认指向 `window` 对象。

在 `setTimeout` 中也没有传递 `thisArg` 的选项，就像在 {{jsxref("Array.forEach()", "forEach()")}} 和 {{jsxref("Array.reduce()", "reduce()")}} 等数组方法中一样。如下方示例所示，使用 `call` 来设置 `this` 也不起作用。

```js
setTimeout.call(myArray, myArray.myMethod, 2.0 * 1000); // 出错
setTimeout.call(myArray, myArray.myMethod, 2.5 * 1000, 2); // 同样会出错
```

#### 解决方案

##### 使用包装函数

一个通用的方法是用包装函数来将 `this` 设置为所需要的值：

```js
setTimeout(function () {
  myArray.myMethod();
}, 2.0 * 1000); // 在 2 秒后输出 "zero,one,two"
setTimeout(function () {
  myArray.myMethod("1");
}, 2.5 * 1000); // 在 2.5 秒后输出 "one"
```

包装函数也可以是箭头函数：

```js
setTimeout(() => {
  myArray.myMethod();
}, 2.0 * 1000); // 在 2 秒后输出 "zero,one,two"
setTimeout(() => {
  myArray.myMethod("1");
}, 2.5 * 1000); // 在 2.5 秒后输出 "one"
```

##### 使用 bind()

或者，也可以使用 {{jsxref("Function.bind()", "bind()")}} 来为所有对特定函数的调用设置 `this` 的值：

```js
const myArray = ["zero", "one", "two"];
const myBoundMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
}.bind(myArray);

myBoundMethod(); // 输出 "zero,one,two"。因为 'this' 在函数中绑定到了 myArray
myBoundMethod(1); // 输出 "one"
setTimeout(myBoundMethod, 1.0 * 1000); // 由于绑定问题，还是在 1 秒后输出 "zero,one,two"
setTimeout(myBoundMethod, 1.5 * 1000, "1"); // 在 1.5 秒后输出 "one"
```

### 传递字符串字面量

将字符串而不是函数传递给 `setTimeout()` 与使用 [`eval()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval) 具有相同的问题。

```js example-bad
// 不要这样做
setTimeout("console.log('Hello World!');", 500);
```

```js example-good
// 这样做
setTimeout(() => {
  console.log("Hello World!");
}, 500);
```

传递给 `setTimeout()` 的字符串是在全局上下文中求值的，因此当字符串被求值为代码时，`setTimeout()` 被调用的上下文中的局部符号将不可用。

### 延时比指定值更长的原因

有很多因素会导致 setTimeout 的回调函数执行比设定的预期值更久，本节将讨论最常见的原因。

#### 嵌套超时

正如 [HTML 标准](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers)中规定的那样，一旦对 `setTimeout` 的嵌套调用被安排了 5 次，浏览器将强制执行 4 毫秒的最小超时。

这可以在下面的例子中看到，在这个例子中，我们嵌套了对 `setTimeout` 的调用，延迟为 `0` 毫秒，并记录每次调用处理程序时的延迟。前四次，延迟约为 0 毫秒，之后约为 4 毫秒：

```html
<button id="run">运行</button>
<table>
  <thead>
    <tr>
      <th>之前</th>
      <th>现在</th>
      <th>实际延时</th>
    </tr>
  </thead>
  <tbody id="log"></tbody>
</table>
```

```js
let last = 0;
let iterations = 10;

function timeout() {
  // 记录调用时间
  logline(new Date().getMilliseconds());
  // 如果还没结束，计划下次调用
  if (iterations-- > 0) {
    setTimeout(timeout, 0);
  }
}
function run() {
  // 清除日志
  const log = document.querySelector("#log");
  while (log.lastElementChild) {
    log.removeChild(log.lastElementChild);
  }

  // 初始化迭代次数和开始时间戳
  iterations = 10;
  last = new Date().getMilliseconds();
  // 开启计时器
  setTimeout(timeout, 0);
}

function logline(now) {
  // 输出上一个时间戳、新的时间戳及差值
  const tableBody = document.getElementById("log");
  const logRow = tableBody.insertRow();
  logRow.insertCell().textContent = last;
  logRow.insertCell().textContent = now;
  logRow.insertCell().textContent = now - last;
  last = now;
}

document.querySelector("#run").addEventListener("click", run);
```

```css hidden
* {
  font-family: monospace;
}
th,
td {
  padding: 0 10px 0 10px;
  text-align: center;
  border: 1px solid;
}
table {
  border-collapse: collapse;
  margin-top: 10px;
}
```

{{EmbedLiveSample("嵌套延时", 100, 420)}}

#### 非活动标签的超时

为了优化后台标签的加载损耗（以及降低耗电量），浏览器会在非活动标签中强制执行一个最小的超时延迟。如果一个页面正在使用网络音频 API {{domxref("AudioContext")}} 播放声音，也可以不执行该延迟。

这方面的具体情况与浏览器有关：

- Firefox 桌面版和 Chrome 针对不活动标签都有一个 1 秒的最小超时值。
- 安卓版 Firefox 浏览器对不活动的标签有一个至少 15 分钟的超时，并可能完全卸载它们。
- 如果标签中包含 {{domxref("AudioContext")}}，Firefox 不会对非活动标签进行节流。

#### 追踪型脚本的节流

Firefox 对它识别为追踪型脚本的脚本实施额外的节流。当在前台运行时，节流的最小延迟仍然是 4ms。然而，在后台标签中，节流的最小延迟是 10000 毫秒，即 10 秒，在文档首次加载后 30 秒开始生效。

参见[跟踪保护](https://wiki.mozilla.org/Security/Tracking_protection)以了解更多信息。

#### 超时延迟

如果页面（或操作系统/浏览器）正忙于其他任务，超时也可能比预期的晚。需要注意的一个重要情况是，在调用 `setTimeout()` 的线程结束之前，函数或代码片段不能被执行。例如：

```js
function foo() {
  console.log("foo 被调用");
}
setTimeout(foo, 0);
console.log("setTimeout 之后");
```

会在控制台输出：

```
setTimeout 之后
foo 被调用
```

出现这个结果的原因是，尽管 `setTimeout` 以 0ms 的延迟来调用函数，但这个任务已经被放入了队列中并且等待下一次执行；并不是立即执行；队列中的等待函数被调用之前，当前代码必须全部运行完毕，因此这里运行结果并非预想的那样。

### 在加载页面时推迟超时

当前标签页正在加载时，Firefox 将推迟触发 `setTimeout()` 计时器。直到主线程被认为是空闲的（类似于 [window.requestIdleCallback()](/zh-CN/docs/Web/API/Window/requestIdleCallback)），或者直到加载事件触发完毕，才开始触发。

### WebExtension 背景页面和定时器

在 [WebExtension](/zh-CN/docs/Mozilla/Add-ons/WebExtensions) 中，`setTimeout()` 不会可靠工作。扩展开发者应当使用 [`alarms`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/alarms) API 作为替代。

### 最大延时值

浏览器内部以 32 位带符号整数存储延时。这就会导致如果一个延时大于 2147483647 毫秒（大约 24.8 天）时就会溢出，导致定时器将会被立即执行。

## 示例

### 设定和清除超时

下面的例子在一个网页中设置了两个简单的按钮，并将它们与 `setTimeout()` 和 `clearTimeout()` 例程挂钩。按下第一个按钮将设置一个超时，在两秒后显示一条信息，并存储超时 ID 供 `clearTimeout()` 使用。你可以选择按第二个按钮来取消这个超时。

#### HTML

```html
<button onclick="delayedMessage();">在两秒后显示一条消息</button>
<button onclick="clearMessage();">在显示前取消这条消息</button>

<div id="output"></div>
```

#### JavaScript

```js
let timeoutID;

function setOutput(outputContent) {
  document.querySelector("#output").textContent = outputContent;
}

function delayedMessage() {
  setOutput("");
  timeoutID = setTimeout(setOutput, 2 * 1000, "太慢了！");
}

function clearMessage() {
  clearTimeout(timeoutID);
}
```

```css hidden
#output {
  padding: 0.5rem 0;
}
```

#### 运行结果

{{EmbedLiveSample('设定和清除超时')}}

也可以看看 [`clearTimeout()` 的示例](/zh-CN/docs/Web/API/clearTimeout#示例)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中允许向回调函数传递参数的 `setTimeout` 版本的 polyfill](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- {{domxref("clearTimeout")}}
- {{domxref("setInterval()")}}
- {{domxref("window.requestAnimationFrame")}}
- {{domxref("queueMicrotask()")}}
