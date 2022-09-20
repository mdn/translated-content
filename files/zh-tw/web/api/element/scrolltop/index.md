---
title: Element.scrollTop
slug: Web/API/Element/scrollTop
---

{{ APIRef("DOM") }}

**`Element.scrollTop`** 屬性可以設置和獲取元素被向上捲動的高度(pixels). 元素的 `scrollTop` 是元素頂端和能被看見的最頂端之間的距離. 當元素並未產生滾動條, 那麼 `scrollTop` 的值預設為 `0`.

## 表達式

```js
// 獲得已經被滾動的距離(pixels)
var  intElemScrollTop = someElement.scrollTop;
```

`intElemScrollTop` 為 {{domxref("element")}}已經被滾動的距離(pixels ).

```js
// 設置已經被滾動的距離(pixels)
element.scrollTop = intValue;
```

`scrollTop` 可以被設置為任何和正整數, 注意事項:

- 如果元素不能滾動, `scrollTop` 被設置為 `0`.
- 如果設置的值小於 `0`, `scrollTop` 被設置為 `0`.
- 如果設置的值大於內容可以被滾動的距離, `scrollTop` 被設置為最大值.

## 範例

padding-top

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

padding-bottom

**Left** **Top** **Right** **Bottom** _margin-top_ _margin-bottom_ _border-top_ _border-bottom_

![Image:scrollTop.png](/@api/deki/files/842/=ScrollTop.png)

## 規範

{{Specifications}}

## 參閱

- [W3C Draft CSSOM View Module](http://dev.w3.org/csswg/cssom-view/#dom-element-scrolltop)
- [MSDN's scrollTop definition](<http://msdn.microsoft.com/en-us/library/ms534618(VS.85).aspx>)
- [MSDN's Measuring Element Dimension and Location](<http://msdn.microsoft.com/en-us/library/hh781509(v=vs.85).aspx>)
