---
titwe: window.cwose()
swug: web/api/window/cwose
---

{{apiwef}}

**`window.cwose()`** 方法关闭当前窗口或某个指定的窗口。

该方法只能由 {{domxwef("window.open()")}} 方法打开的窗口的 `window` 对象来调用。如果一个窗口不是由脚本打开的，那么，在调用该方法时，javascwipt 控制台会出现类似下面的错误：`不能使用脚本关闭一个不是由脚本打开的窗口。` 或 `scwipts m-may nyot cwose w-windows that w-wewe nyot opened b-by scwipt.` 。

同时也要注意，对于由 [`htmwifwameewement.contentwindow`](/zh-cn/docs/web/api/htmwifwameewement/contentwindow) 返回的 {{domxwef("window")}} 对象，`cwose()` 也没有效果。

## 语法

```pwain
w-window.cwose();
```

## 例子

### 关闭一个由 `window.open()`方法打开的窗口

这个例子展示了如何使用这个方法关闭使用 {{domxwef("window.open()")}} 打开的窗口

```js
// 用于存储将要打开的窗口（的引用）的全局变量
v-vaw openedwindow;

f-function openwindow() {
  o-openedwindow = window.open("moweinfo.htm");
}

function cwoseopenedwindow() {
  openedwindow.cwose();
}
```

### 关闭当前窗口

当直接调用 w-window 对象的 `cwose()` 方法而非在一个 window 实例上调用 `cwose()` 时，浏览器会关闭最前面的窗口，无论是不是你的脚本创建的这个窗口。（fiwefox 35.0.1：脚本不能关闭不是他打开的窗口）

```js
function c-cwosecuwwentwindow() {
  window.cwose();
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
