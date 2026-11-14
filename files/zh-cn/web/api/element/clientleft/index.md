---
title: Element：clientLeft 属性
short-title: clientLeft
slug: Web/API/Element/clientLeft
l10n:
  sourceCommit: 1e0a16464b11cde9eddbb9795fe74e737dba0598
---

{{ APIRef("DOM") }}

{{domxref("Element")}} 接口的 **`clientLeft`** 只读属性返回元素左边框的宽度（像素）。如果元素的文本方向为从右到左，并且内容溢出导致渲染了左侧的垂直滚动条，则该值包含垂直滚动条的宽度。`clientLeft` 不包含左外边距或左内边距的值。

> [!NOTE]
> 当元素的 `display` 为 `inline` 时，无论元素是否有边框，`clientLeft` 都会返回 `0`。

## 值

一个整数。

## 示例

在以下示例中，客户端区域具有白色背景和一个 24 像素宽的黑色 `border-left`。`clientLeft` 的值是从外边距（黄色）区域结束到内边距和内容区域（白色）开始的距离：即 24 像素。

### HTML

```html
<div id="container">
  <div id="contained">
    <p>
      对大多数人来说，生活的变化是缓慢的。今天和昨天似乎没有什么不同；明天也可能和今天一样。也许人一生仅仅有那么一两个辉煌的瞬间，甚至一生都可能在平淡无奇中度过。——路遥
    </p>
  </div>
</div>
```

### CSS

```css
#container {
  margin: 3rem;
  background-color: rgb(255 255 204);
  border: 4px dashed black;
}

#contained {
  margin: 1rem;
  border-left: 24px black solid;
  padding: 0px 28px;
  overflow: auto;
  background-color: white;
}
```

### 结果

{{EmbedLiveSample("示例", 400, 350)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [确定元素的尺寸](/zh-CN/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- {{domxref("HTMLElement.offsetLeft")}}
- {{domxref("Element.scrollLeft")}}
- {{domxref("Element.clientHeight")}}
- {{domxref("Element.clientWidth")}}
- {{domxref("Element.clientTop")}}
- {{domxref("Element.getBoundingClientRect()")}}
