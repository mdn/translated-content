---
title: Firefox 27 for developers
slug: Mozilla/Firefox/Releases/27
---

{{FirefoxSidebar}}

## Web 开发者需要注意的变化

### 开发者工具

- 可以在调试器中监控到 DOM 事件。
- 查看器可以直接编辑元素的 html 源码，不再需要安装额外的扩展。
- 可以在查看器中直接预览背景图片和颜色值。
- 可以输出 reflow 日志。

更多详情，请看[这篇文章](https://hacks.mozilla.org/2013/11/firefox-developer-tools-episode-27-edit-as-html-codemirror-more/).

### CSS

- `CSS {{cssxref("cursor")}} 属性值中 -moz-grab` 和 `-moz-grabbing` 关键字脱前缀，成为 `grab` 和 `grabbing` ([Firefox bug 880672](https://bugzil.la/880672)).

### HTML

- 桌面浏览器上实现了`<input type = "color">`

### JavaScript

[EcmaScript 6](/zh-CN/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla) (Harmony) 实现了：

- [展开运算符](http://wiki.ecmascript.org/doku.php?id=harmony:spread)支持在函数调用时的实参左边位置使用 ([Firefox bug 762363](https://bugzil.la/762363)).
- 实现了多个数学函数 {{jsxref("Global_Objects/Math/hypot", "Math.hypot()")}} ([Firefox bug 896264](https://bugzil.la/896264)).

### Interfaces/APIs/DOM

_No change._

### MathML

_No change._

### SVG

_No change._

## 附加组件和 Mozilla 开发者需要注意的变化

- 移除了 `downloads-indicator`, 你应该使用 `downloads-button` 元素来代替。
- Firefox 不再使用 `chrome://browser/skin/downloads/indicator.css` 样式。

## 参见

- [Site Compatibility for Firefox 27](/zh-CN/docs/Mozilla/Firefox/Releases/27/Site_Compatibility)

### 更早期的版本

{{Firefox_for_developers}}
