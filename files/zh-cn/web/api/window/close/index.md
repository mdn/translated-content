---
title: Window.close()
slug: Web/API/Window/close
---

{{APIRef}}

**`Window.close()`** 方法关闭当前窗口或某个指定的窗口。

该方法只能由 {{domxref("Window.open()")}} 方法打开的窗口的 `window` 对象来调用。如果一个窗口不是由脚本打开的，那么，在调用该方法时，JavaScript 控制台会出现类似下面的错误：`不能使用脚本关闭一个不是由脚本打开的窗口。` 或 `Scripts may not close windows that were not opened by script.` 。

同时也要注意，对于由 [`HTMLIFrameElement.contentWindow`](/zh-CN/docs/Web/API/HTMLIFrameElement/contentWindow) 返回的 {{domxref("Window")}} 对象，`close()` 也没有效果。

## 语法

```plain
window.close();
```

## 例子

### 关闭一个由 `window.open()`方法打开的窗口

这个例子展示了如何使用这个方法关闭使用 {{domxref("window.open()")}} 打开的窗口

```js
// 用于存储将要打开的窗口（的引用）的全局变量
var openedWindow;

function openWindow() {
  openedWindow = window.open("moreinfo.htm");
}

function closeOpenedWindow() {
  openedWindow.close();
}
```

### 关闭当前窗口

当直接调用 window 对象的 `close()` 方法而非在一个 window 实例上调用 `close()` 时，浏览器会关闭最前面的窗口，无论是不是你的脚本创建的这个窗口。（Firefox 35.0.1：脚本不能关闭不是他打开的窗口）

```js
function closeCurrentWindow() {
  window.close();
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
