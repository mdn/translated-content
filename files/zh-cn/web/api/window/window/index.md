---
title: Window：window 属性
slug: Web/API/Window/window
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{APIRef}}

{{domxref("Window")}} 对象的 **`window`** 属性指向窗口对象自身。

因此，以下表达式都会返回同一个窗口对象：

```js
window.window;
window.window.window;
window.window.window.window;
// …
```

在网页中，window 对象也是一个*全局对象*。这意味着：

1. 实际上，脚本中的全局变量是 `window` 的属性：

   ```js
   var global = { data: 0 };
   alert(global === window.global); // 显示“true”
   ```

2. 你可以访问窗口对象的内置属性，而无需使用 `window.` 前缀：

   ```js
   setTimeout("alert('Hi!')", 50); // 等同于使用 window.setTimeout()。
   alert(window === window.window); // 显示“true”
   ```

将 `window` 属性指向对象本身的目的是为了方便引用全局对象。否则，你必须在脚本顶部手动进行 `let window = this;` 赋值。

另一个原因是，如果没有这个属性，你将无法编写诸如 {{domxref("window.open","window.open('https://google.com/')")}} 这样的代码，而只能直接使用 `open('https://google.com/')`。

使用该属性的另一个原因是为了让库能够同时提供面向对象版本和非面向对象版本（特别是 JavaScript 模块）。例如，当我们引用“this.window\.location.href”时，[JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)可以在其定义的类中创建一个名为“window”的属性（因为默认情况下不存在全局的“window”变量），该属性可在将 window 对象传入模块类的构造函数后创建。因此，在其函数内部，“this.window”将指向该 window 对象。在非命名空间版本中，“this.window”会指向全局的“window”对象，并可直接获取文档位置。另一个优势在于：这类类的对象（即便在模块外部定义）能够随意更改其指向的 window 引用，而如果硬编码了“window”引用则无法实现这种灵活性。在类中，默认值仍可设置为当前 window 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
