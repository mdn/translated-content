---
title: BarProp
slug: Web/API/BarProp
l10n:
  sourceCommit: 5288fecd2bcd65bde5ecef008684d3cb343c7b34
---

{{APIRef("DOM")}}

{{domxref('Document Object Model', '文档对象模型')}} 的 **`BarProp`** 接口表示 Web 浏览器用户界面向 web 页面公开的脚本，以下每个接口元素都由一个 `BarProp` 对象表示。

- {{domxref("Window.locationbar")}}
  - : 浏览器的 location bar。
- {{domxref("Window.menubar")}}
  - : 浏览器的 menu bar。
- {{domxref("Window.personalbar")}}
  - : 浏览器的 personal bar。
- {{domxref("Window.scrollbars")}}
  - : 浏览器的 scrollbars。
- {{domxref("Window.statusbar")}}
  - : 浏览器的 status bar。
- {{domxref("Window.toolbar")}}
  - : 浏览器的 toolbar。

`BarProp` 接口不是直接访问的，而是通过其中一个元素访问的。

## 实例属性

- {{domxref("BarProp.visible")}} {{ReadOnlyInline}}
  - : 一个 {{jsxref("Boolean")}}，如果所使用的界面元素表示的条是可见的，则返回 `true`。

## 示例

下面的示例在控制台输出一个 `BarProp` 对象表示 location bar。

```js
console.log(window.locationbar);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
