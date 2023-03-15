---
title: setTimeout()
slug: Web/API/setTimeout
---

{{APIRef("HTML DOM")}}

全局的 **`setTimeout()`** 方法设置一个定时器，该定时器在定时器到期后执行一个函数或指定的一段代码。

## 语法

```
var timeoutID = scope.setTimeout(function[, delay, arg1, arg2, ...]);
var timeoutID = scope.setTimeout(function[, delay]);
var timeoutID = scope.setTimeout(code[, delay]);
```

### 参数

- `function`
  - : {{jsxref("function")}} 是你想要在到期时间 (`delay`毫秒) 之后执行的[函数](/zh-CN/docs/JavaScript/Reference/Global_Objects/Function)。
- `code`
  - : 这是一个可选语法，你可以使用字符串而不是{{jsxref("function")}} ，在`delay`毫秒之后编译和执行字符串 (使用该语法是**不推荐的，** 原因和使用 {{jsxref("Global_Objects/eval", "eval()")}}一样，有安全风险)。
- `delay` {{optional_inline}}
  - : 延迟的毫秒数 (一秒等于 1000 毫秒)，函数的调用会在该延迟之后发生。如果省略该参数，delay 取默认值 0，意味着“马上”执行，或者尽快执行。不管是哪种情况，实际的延迟时间可能会比期待的 (delay 毫秒数) 值长，原因请查看[实际延时比设定值更久的原因：最小延迟时间](#实际延时比设定值更久的原因：最小延迟时间)。
- `arg1, ..., argN` {{optional_inline}}
  - : 附加参数，一旦定时器到期，它们会作为参数传递给{{jsxref("function")}}

> **备注：** 需要注意的是，IE9 及更早的 IE 浏览器不支持向回调函数传递额外参数 (第一种语法)。如果你想要在 IE 中达到同样的功能，你必须使用一种兼容代码 (查看 [兼容旧环境（polyfill）](#兼容旧环境（polyfill）) 一段).

### 返回值

返回值`timeoutID`是一个正整数，表示定时器的编号。这个值可以传递给{{domxref("clearTimeout()")}}来取消该定时器。

需要注意的是 `setTimeout()` 和 {{domxref("setInterval()")}} 共用一个编号池，技术上，`clearTimeout()` 和 {{domxref("clearInterval()")}} 可以互换。但是，为了避免混淆，不要混用取消定时函数。

在同一个对象上（一个 window 或者 worker），`setTimeout()`或者`setInterval()`在后续的调用不会重用同一个定时器编号。但是不同的对象使用独立的编号池。

## 例子

下文的例子在网页中设置了两个简单的按钮，以触发 `setTimeout()` 和 `clearTimeout()` 方法：按下第一个按钮会设置一个定时器，定时器在 2s 后显示一个警告对话框，并将此次 setTimeout 的定时器 ID 保存起来，按下第二个按钮可以取消定时器。

### HTML

```html
<p>Live Example</p>
<button onclick="delayedAlert();">Show an alert box after two seconds</button>
<p></p>
<button onclick="clearAlert();">Cancel alert before it happens</button>
```

### JavaScript

```js
var timeoutID;

function delayedAlert() {
  timeoutID = window.setTimeout(slowAlert, 2000);
}

function slowAlert() {
  alert('That was really slow!');
}

function clearAlert() {
  window.clearTimeout(timeoutID);
}
```

### 结果展示

{{EmbedLiveSample('例子')}}

也可参考 [`clearTimeout()`](/zh-CN/docs/DOM/window.clearTimeout#Example) 示例。

## 兼容旧环境（polyfill）

如果你需要向你的回调函数内传递一个或多个参数，而且还需要兼容那些不支持传递额外参数 (不管使用`setTimeout()` 或者 `setInterval()`) 的浏览器时 (比如，IE9 及更早的版本), 你可以引入下面的兼容代码来支持向定时器函数传参。将以下代码添加到你代码的最上面：

```js
/*\
|*|
|*|  Polyfill which enables the passage of arbitrary arguments to the
|*|  callback functions of JavaScript timers (HTML5 standard syntax).
|*|
|*|  https://developer.mozilla.org/en-US/docs/DOM/window.setInterval
|*|
|*|  Syntax:
|*|  var timeoutID = window.setTimeout(func, delay[, param1, param2, ...]);
|*|  var timeoutID = window.setTimeout(code, delay);
|*|  var intervalID = window.setInterval(func, delay[, param1, param2, ...]);
|*|  var intervalID = window.setInterval(code, delay);
|*|
\*/

(function() {
  setTimeout(function(arg1) {
    if (arg1 === 'test') {
      // feature test is passed, no need for polyfill
      return;
    }
    var __nativeST__ = window.setTimeout;
    window.setTimeout = function(vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */ ) {
      var aArgs = Array.prototype.slice.call(arguments, 2);
      return __nativeST__(vCallback instanceof Function ? function() {
        vCallback.apply(null, aArgs);
      } : vCallback, nDelay);
    };
  }, 0, 'test');

  var interval = setInterval(function(arg1) {
    clearInterval(interval);
    if (arg1 === 'test') {
      // feature test is passed, no need for polyfill
      return;
    }
    var __nativeSI__ = window.setInterval;
    window.setInterval = function(vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */ ) {
      var aArgs = Array.prototype.slice.call(arguments, 2);
      return __nativeSI__(vCallback instanceof Function ? function() {
        vCallback.apply(null, aArgs);
      } : vCallback, nDelay);
    };
  }, 0, 'test');
}())
```

### 针对 IE 的解决方法

如果你需要单独的针对 IE9 及之前浏览器的 hack 写法，你可以使用 JavaScript 条件注释：

```js
/*@cc_on
  // conditional IE < 9 only fix
  @if (@_jscript_version <= 9)
  (function(f){
     window.setTimeout = f(window.setTimeout);
     window.setInterval = f(window.setInterval);
  })(function(f){return function(c,t){var a=[].slice.call(arguments,2);return f(function(){c instanceof Function?c.apply(this,a):eval(c)},t)}});
  @end
@*/
```

或者使用更加清晰的 IE HTML 条件注释：

```html
<!--[if lte IE 9]><script>
(function(f){
window.setTimeout=f(window.setTimeout);
window.setInterval=f(window.setInterval);
})(function(f){return function(c,t){
var a=[].slice.call(arguments,2);return f(function(){c instanceof Function?c.apply(this,a):eval(c)},t)}
});
</script><![endif]-->
```

### 变通方法

另一种方法是使用匿名函数包裹你的回调函数，这种方式要消耗更多资源：

```js
var intervalID = setTimeout(function() { myFunc('one', 'two', 'three'); }, 1000);
```

上面那个例子也可以用[箭头函数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions):

```js
var intervalID = setTimeout(() => { myFunc('one', 'two', 'three'); }, 1000);
```

此外，也可使用 [function's bind](/zh-CN/docs/JavaScript/Reference/Global_Objects/Function/bind)：

```js
setTimeout(function(arg1){}.bind(undefined, 10), 1000);
```

## 关于"`this`"的问题

当你向 `setTimeout()` (或者其他函数) 传递一个函数时，该函数中的`this`指向跟你的期望可能不同，这个问题在 [JavaScript reference](/zh-CN/docs/JavaScript/Reference/Operators/this#Method_binding) 中进行了详细解释。

### 解释

由`setTimeout()`调用的代码运行在与所在函数完全分离的执行环境上。这会导致，这些代码中包含的 `this` 关键字在非严格模式会指向 `window` (或全局) 对象，严格模式下为 undefined，这和所期望的`this`的值是不一样的。

> **备注：** 即使是在严格模式下，`setTimeout()`的回调函数里面的`this`仍然默认指向`window`对象，并不是`undefined`。

查看下面的例子：

```js
let myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
    alert(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"
```

上面这段代码正常工作，用`myArray`调用，在函数内，`this[sProperty]`等于 `myArray[sProperty]`。然后，下面这个例子：

```js
setTimeout(myArray.myMethod, 1000); // prints "[object Window]" after 1 second
setTimeout(myArray.myMethod, 1500, "1"); // prints "undefined" after 1.5 seconds
```

`myArray.myMethod`函数传递给 `setTimeout`，到了定时时间，`this`没有指向，默认指向`window`对象。并且没有方法把 `thisArg` 传递给`setTimeout`，正如 Array 方法的`forEach`，`reduce`等。下面的例子表示使用`call`方法设置`this`也没用。

```js
setTimeout.call(myArray, myArray.myMethod, 2000); // error: "NS_ERROR_XPC_BAD_OP_ON_WN_PROTO: Illegal operation on WrappedNative prototype object"
setTimeout.call(myArray, myArray.myMethod, 2500, 2); // same error
```

### 可能的解决方案

一个通用的方法是用包装函数来设置`this`：

```js
setTimeout(function(){myArray.myMethod()}, 2000); // prints "zero,one,two" after 2 seconds
setTimeout(function(){myArray.myMethod('1')}, 2500); // prints "one" after 2.5 seconds
```

箭头函数也可以：

```js
setTimeout(() => {myArray.myMethod()}, 2000); // prints "zero,one,two" after 2 seconds
setTimeout(() => {myArray.myMethod('1')}, 2500); // prints "one" after 2.5 seconds
```

另一个解决`this`问题的方法是使用两个非原生的 `setTimeout()` 和 `setInterval()` 全局函数代替原生的。该非原生的函数通过使用[`Function.prototype.call`](/zh-CN/docs/JavaScript/Reference/Global_Objects/Function/call) 方法激活了正确的作用域。下面的代码显示了应该如何替换：

```js
// Enable the passage of the 'this' object through the JavaScript timers

var __nativeST__ = window.setTimeout, __nativeSI__ = window.setInterval;

window.setTimeout = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
  var oThis = this, aArgs = Array.prototype.slice.call(arguments, 2);
  return __nativeST__(vCallback instanceof Function ? function () {
    vCallback.apply(oThis, aArgs);
  } : vCallback, nDelay);
};

window.setInterval = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
  var oThis = this, aArgs = Array.prototype.slice.call(arguments, 2);
  return __nativeSI__(vCallback instanceof Function ? function () {
    vCallback.apply(oThis, aArgs);
  } : vCallback, nDelay);
};
```

> **备注：** 这两个替换也让 IE 支持了符合 HTML5 标准的定时器函数。所以也能作为一个 polyfills。查看 [Callback arguments](#Callback_arguments) 一段。

新特性检测：

```js
let myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
    alert(arguments.length > 0 ? this[sProperty] : this);
};

setTimeout(alert, 1500, "Hello world!"); // the standard use of setTimeout and setInterval is preserved, but...
setTimeout.call(myArray, myArray.myMethod, 2000); // prints "zero,one,two" after 2 seconds
setTimeout.call(myArray, myArray.myMethod, 2500, 2); // prints "two" after 2,5 seconds
```

针对这个问题并没有原生的解决方案。

> **备注：** JavaScript 1.8.5 引入了 [`Function.prototype.bind()`](/zh-CN/docs/JavaScript/Reference/Global_Objects/Function/bind) 方法，该方法允许显式地指定函数调用时 this 所指向的值。该方法可以帮助你解决 this 指向不确定的问题。

使用`bind()`的例子：

```js
let myArray = ['zero', 'one', 'two'];
myBoundMethod = (function (sProperty) {
    console.log(arguments.length > 0 ? this[sProperty] : this);
}).bind(myArray);

myBoundMethod(); // prints "zero,one,two" because 'this' is bound to myArray in the function
myBoundMethod(1); // prints "one"
setTimeout(myBoundMethod, 1000); // still prints "zero,one,two" after 1 second because of the binding
setTimeout(myBoundMethod, 1500, "1"); // prints "one" after 1.5 seconds
```

## 备注

你可以使用 {{domxref("clearTimeout()")}}来取消定时器。

如果你希望你的代码被重复的调用 (比如每 N 毫秒一次),考虑使用{{domxref("setInterval()")}}。

### 传递字符串字面量

向`setTimeout()`传递一个字符串而不是函数会遭受到与使用[`eval`](/zh-CN/docs/JavaScript/Reference/Global_Objects/eval#Don.27t_use_eval.21)一样的风险。

```js
// 推荐
window.setTimeout(function() {
    alert("Hello World!");
}, 500);

// 不推荐
window.setTimeout("alert(\"Hello World!\");", 500);
```

字符串会在全局作用域内被解释执行，所以当`setTimeout()`函数执行完毕后，字符串中的变量不可用。

### 实际延时比设定值更久的原因：最小延迟时间

有很多因素会导致 setTimeout 的回调函数执行比设定的预期值更久，本节将讨论最常见的原因。

#### 最小延时 >=4ms

在浏览器中，`setTimeout()`/{{domxref("setInterval()")}} 的每调用一次定时器的最小间隔是 4ms，这通常是由于函数嵌套导致（嵌套层级达到一定深度），或者是由于已经执行的 setInterval 的回调函数阻塞导致的。例如：

```js
function cb() { f(); setTimeout(cb, 0); }
setTimeout(cb, 0);
```

```js
setInterval(f, 0);
```

在 Chrome 和 Firefox 中，定时器的第 5 次调用被阻塞了；在 Safari 是在第 6 次；Edge 是在第 3 次。Gecko 从这个版本 [version 56](/zh-CN/docs/Mozilla/Firefox/Releases/56)开始对 `setInterval()` 开始采用这样的机制（`setTimeout()`已经实现，具体请参考以下内容)。

一直以来，不同浏览器中出现这种最小延迟的情况有所不同（例如 Firefox）- 从其他地方调用了 setInterval()，或者在嵌套函数调用 setTimeout() 时（嵌套级别达到特定深度时），都会出现超时延迟。

如果想在浏览器中实现 0ms 延时的定时器，你可以参考[这里](http://dbaron.org/log/20100309-faster-timeouts)所说的 {{domxref("window.postMessage()")}}

> **备注：** 最小延时， `DOM_MIN_TIMEOUT_VALUE`, 是 4ms (但在 Firefox 中通常是是存储在 `dom.min_timeout_value` 这个变量中), `DOM_CLAMP_TIMEOUT_NESTING_LEVEL` 的第 5 层。

> **备注：** 4 ms 是在 [HTML5 spec](http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#timers) 中精确的，并且在 2010 年及以后的跨浏览器中保持了一致，这个数值比 Gecko 5.0 规定的嵌套函数的最小延时 10ms 更为精确。

#### 未被激活的 tabs 的定时最小延迟>=1000ms

为了优化后台 tab 的加载损耗（以及降低耗电量），在未被激活的 tab 中定时器的最小延时限制为 1S(1000ms)。

Firefox 从 version 5 (see [Firefox bug 633421](https://bugzil.la/633421)开始采取这种机制，1000ms 的间隔值可以通过 `dom.min_background_timeout_value` 改变。Chrome 从 version 11 ([crbug.com/66078](http://crbug.com/66078)) 开始采用。

Android 版的 Firefox 对未被激活的后台 tabs 的使用了 15min 的最小延迟间隔时间，并且这些 tabs 也能完全不被加载。

> **备注：** 当 Web Audio API {{domxref("AudioContext")}} 正在被用来播放音频的时候，Firefox 50 不会再限制后台 tabs 的加载。后续的 Firefox 51 版本修正了这个问题，即使在没有音频播放的情况下，也不再限制后台 tabs 的加载。这个解决了一些软件应用在后台 tabs 中播放基于文本的音频 ( note-based) 时，无法去同步音频和画面的问题。

#### 追踪型脚本的最小延时限制

从 Firefox 55 版本开始，追踪型脚本（例如 谷歌分析，或者其他的一些被 Firefox 的 [TP lists](https://wiki.mozilla.org/Security/Tracking_protection#Lists) 识别为追踪型脚本的 外链 URL 脚本）是重点限制加载的对象。在当前正在使用的页面中，这个节流限制的延时依然是 4ms。但是在后台 tabs 中，这个最小延时限制是 10000ms（10s）,这个限制会在文档第一次加载后的 30s 后生效。

控制这些行为的属性包含以下这些：

- `dom.min_tracking_timeout_value`: 4
- `dom.min_tracking_background_timeout_value`: 10000
- `dom.timeout.tracking_throttling_delay`: 30000

#### 超时延迟

除了"最小延时"之外，定时器仍然有可能因为当前页面（或者操作系统/浏览器本身）被其他任务占用导致延时。需要被强调是，直到调用 `setTimeout()`的主线程执行完其他任务之后，回调函数和代码段才能被执行。例如：

```
function foo() {
  console.log('foo has been called');
}
setTimeout(foo, 0);
console.log('After setTimeout');
```

会在控制台输出：

```
After setTimeout
foo has been called
```

出现这个结果的原因是，尽管`setTimeout` 以 0ms 的延迟来调用函数，但这个任务已经被放入了队列中并且等待下一次执行；并不是立即执行；队列中的等待函数被调用之前，当前代码必须全部运行完毕，因此这里运行结果并非预想的那样。

### WebExtension Background pages 和定时器

在 [WebExtension](/zh-CN/docs/Mozilla/Add-ons/WebExtensions) 中 background pages，timers 工作不正常。这主要因为 background pages 实际上，并不是一次性全部加载：如果浏览器没有使用它，就不加载，如果需要就恢复。这对于 WebExtension 是透明的，但是有些事件 (包括 JS 的 timers) 不会在不加载/恢复循环中执行，所以 WebExtension 中建议使用 alarms。更详细的细节在[合并到事件驱动后台脚本](https://developer.chrome.com/extensions/background_migration)。

在本文写作的时候，只有 Chrome 展示了如上的特性 — Firefox 没有未加载/恢复循环的行为，所以 timers 仍然可以工作。但是，仍然建议不要在 WebExtension 中使用 timers:

1. 兼容 Chorme。

2. 未来行为的改变会引起问题。

### 最大延时值

包括 IE、Chrome、Safari、Firefox 在内的浏览器其内部以 32 位带符号整数存储延时。这就会导致如果一个延时 (delay) 大于 2147483647 毫秒 (大约 24.8 天) 时就会溢出，导致定时器将会被立即执行。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JavaScript timers](/zh-CN/docs/JavaScript/Timers)
- [Timer.jsm](/zh-CN/docs/Mozilla/JavaScript_code_modules/Timer.jsm)
- {{domxref("clearTimeout")}}
- {{domxref("WindowTimers.setInterval")}}
- {{domxref("window.requestAnimationFrame")}}
- [_Daemons_ management](/zh-CN/docs/JavaScript/Timers/Daemons)
