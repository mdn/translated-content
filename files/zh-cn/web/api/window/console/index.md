---
title: Window.console
slug: Web/API/Window/console
---

{{ APIRef }}

只读属性 **`Window.console`** 返回一个对{{domxref("Console")}}对象的引用，Window\.console 提供了向浏览器控制台输出日志信息的方法。这些方法仅应该用于调试，并不应该用来给最终用户呈现信息。

## 语法

```
var consoleObj = window.console;
```

## 示例

### 输出信息

第一个例子向控制台输出文字。

```js
console.log("An error occurred while loading the content");
```

下边这个例子向控制台打印一个对象，可以通过点击展开组件查看对象的各项属性。

```js
console.dir(someObject);
```

更多示例参考 [`console`](/zh-CN/docs/Web/API/console) 文章中的[示例](/zh-CN/docs/Web/API/console#示例)部分。

## 规范

{{Specifications}}

> **备注：** 当前各种浏览器之间的实现还有很多差异，推动一致的工作也在进行当中。
