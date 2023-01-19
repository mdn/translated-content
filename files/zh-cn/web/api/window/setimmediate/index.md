---
title: window.setImmediate
slug: Web/API/Window/setImmediate
---

{{APIRef("HTML DOM")}}{{Non-standard_header}}

该方法用来把一些需要长时间运行的操作放在一个回调函数里，在浏览器完成后面的其他语句后，就立刻执行这个回调函数。

> **备注：** 该方法可能不会被批准成为标准，目前只有最新版本的 Internet Explorer 和 Node.js 0.10+ 实现了该方法。它遇到了 [Gecko](https://bugzilla.mozilla.org/show_bug.cgi?id=686201)(Firefox) 和[Webkit](http://code.google.com/p/chromium/issues/detail?id=146172) (Google/Apple) 的阻力。

## 语法

```js
var immediateID = setImmediate(func, [param1, param2, ...]);
var immediateID = setImmediate(func);
```

- `immediateID` 是这次 setImmediate 方法设置的唯一 ID，可以作为 {{ domxref("window.clearImmediate") }} 的参数。
- `func` 是将要执行的回调函数

所有参数都会直接传给你的函数。

## 备注

{{ domxref("window.clearImmediate") }} 方法可以用来取消通过 setImmediate 设置的将要执行的语句，就像 {{ domxref("window.clearTimeout") }} 对应于 {{ domxref("window.setTimeout") }}一样。

该方法可以用来替代 `setTimeout(fn, 0)` 去执行[繁重的操作](http://www.nczonline.net/blog/2009/08/11/timed-array-processing-in-javascript/)([heavy operations](http://www.nczonline.net/blog/2009/08/11/timed-array-processing-in-javascript/))

可以通过以下几种方式来模仿该功能：

- {{ domxref("window.postMessage") }} 可以被用来触发一个 immediate 但会产生回调。请注意，Internet Explorer 8 包含 postMessage 的同步版本，这意味着它不能被用来作为代替品。
- [MessageChannel](/zh-CN/docs/Web/API/MessageChannel) 可以在 Web Workers 内部很好的被使用，而 postMessage 的语义意味着它不能在那使用。
- `setTimeout(fn, 0)`_可以使用_, 然而按照[HTML 规范](https://html.spec.whatwg.org/multipage/webappapis.html#timers), 嵌套深度超过 5 级的定时器，会被限制在 4ms , 他没有为 setImmediate 的天然及时性提供合适的 polyfill.

所有这些技术都被纳入 [robust setImmediate polyfill](https://github.com/NobleJS/setImmediate) 中。

## 浏览器兼容性

{{Compat}}

## 相关链接

{{ domxref("window.clearImmediate") }}

[Specification: Efficient Script Yielding](https://dvcs.w3.org/hg/webperf/raw-file/tip/specs/setImmediate/Overview.html)

[Microsoft setImmediate API Demo](http://ie.microsoft.com/testdrive/Performance/setImmediateSorting/Default.html)
