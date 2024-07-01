---
title: Element.clientLeft
slug: Web/API/Element/clientLeft
---

{{ APIRef() }}

表示一个元素的左边框的宽度，以像素表示。如果元素的文本方向是从右向左（RTL, right-to-left），并且由于内容溢出导致左边出现了一个垂直滚动条，则该属性包括滚动条的宽度。`clientLeft` 不包括左外边距和左内边距。`clientLeft` 是只读的。

从 [Gecko](zh-CN/Gecko) 1.9（[Firefox 3](zh-CN/Firefox_3) [Firefox bug 111207](https://bugzil.la/111207)）开始，基于 Gecko 的应用支持 `clientLeft` 属性。该属性在 Firefox 2 及更早的版本中不被支持。

当 [_layout.scrollbar.side_ preference](http://kb.mozillazine.org/Layout.scrollbar.side) （译注：这个属性好像是只在火狐浏览器中才有）被设为 1 或 3，且文本方向被设为从右到左（RTL），则垂直滚动条位于左边，这会影响到 `clientLeft` 属性值的计算。

## 语法

```
var left = element.clientLeft;
```

## 示例

padding-top

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

padding-bottom

**Left** **Top** **Right** **Bottom** _margin-top_ _margin-bottom_ _border-top_ _border-bottom_

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## 备注

`clientLeft` 首次出现于 MS IE DHTML 对象模型中。

元素的文本方向被设为从右到左后，其垂直滚动条的位置取决于 [_layout.scrollbar.side_ preference](http://kb.mozillazine.org/Layout.scrollbar.side)

当元素设置 `display: inline` 后，无论是否有边框，`clientLeft` 始终返回 `0` 。
