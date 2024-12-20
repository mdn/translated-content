---
title: Element.scrollTop
slug: Web/API/Element/scrollTop
---

{{ APIRef("DOM") }}

**`Element.scrollTop`** 屬性可以設置和獲取元素被向上捲動的高度(pixels). 元素的 `scrollTop` 是元素頂端和能被看見的最頂端之間的距離. 當元素並未產生滾動條, 那麼 `scrollTop` 的值預設為 `0`.

## 表達式

```js
// 獲得已經被滾動的距離(pixels)
var intElemScrollTop = someElement.scrollTop;
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

### Scrolling an element

In this example, try scrolling the inner container with the dashed border, and see how the value of `scrollTop` changes.

#### HTML

```html
<div id="container">
  <div id="scroller">
    <p>
      Far out in the uncharted backwaters of the unfashionable end of the
      western spiral arm of the Galaxy lies a small unregarded yellow sun.
      Orbiting this at a distance of roughly ninety-two million miles is an
      utterly insignificant little blue green planet whose ape-descended life
      forms are so amazingly primitive that they still think digital watches are
      a pretty neat idea.
    </p>
  </div>
</div>

<div id="output">scrollTop: 0</div>
```

#### CSS

```css
#scroller {
  overflow: scroll;
  height: 150px;
  width: 150px;
  border: 5px dashed orange;
}

#output {
  padding: 1rem 0;
}
```

#### JavaScript

```js
const scroller = document.querySelector("#scroller");
const output = document.querySelector("#output");

scroller.addEventListener("scroll", (event) => {
  output.textContent = `scrollTop: ${scroller.scrollTop}`;
});
```

#### 結果

{{EmbedLiveSample("Scrolling_an_element", 400, 250)}}

## 規範

{{Specifications}}

## 參閱

- [W3C Draft CSSOM View Module](https://drafts.csswg.org/cssom-view/#dom-element-scrolltop)
- [MSDN's Measuring Element Dimension and Location](<https://learn.microsoft.com/zh-tw/previous-versions/hh781509(v=vs.85)>)
