---
title: Window.name
slug: Web/API/Window/name
---

{{APIRef}}

获取/设置窗口的名称。

## 语法

```plain
string = window.name;
window.name = string;
```

## 示例

```js
window.name = "lab_view";
```

## 备注

窗口的名字主要用于为超链接和表单设置目标（targets）。窗口不需要有名称。

在某些框架里（如，[SessionVars](http://www.thomasfrank.se/sessionvars.html) 和 Dojo's [dojox.io.windowName](http://www.sitepen.com/blog/2008/07/22/windowname-transport/) ，该属性也被用于作为 JSONP 的一个更安全的备选，来提供跨域通信（cross-domain messaging）。现代 web 应用应使用 [postMessage API](/zh-CN/docs/Web/API/Window/postMessage) 进行敏感的跨域通信。

`window.name` 会调用 `toString` 将赋给它的值转换成对应的字符串表示。

（译注：此处似有不妥，私以为调用的应是 `ToString` 抽象方法。事实上，如果将一个 Symbol 类型的值赋给 `window.name`，会报 `TypeError`，而非调用 `Symbol.toString()` 转换成字符串后进行赋值。例如：

```js
window.name = Symbol.for("foo"); // TypeError
window.name = Symbol.for("foo").toString(); // "Symbol(foo)"
```

具体可参见 EMCA 语言规范中 Type Conversion 一节。）

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
