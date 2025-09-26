---
title: Element：clientLeft 属性
slug: Web/API/Element/clientLeft
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{ APIRef("DOM") }}

元素左侧边框的宽度（像素）。如果元素的文本方向为从右到左，并且内容溢出导致渲染了左侧的垂直滚动条，则该值包含垂直滚动条的宽度。`clientLeft` 不包含左外边距或左内边距的值。`clientLeft` 是只读属性。

> [!NOTE]
> 此属性将会对值取整。如果需要小数值，请使用 {{ domxref("element.getBoundingClientRect()") }}。

> [!NOTE]
> 当元素的属性为 `display: inline` 时，无论元素是否有边框，`clientLeft` 都会返回 `0`。

## 值

数字。

## 示例

在以下示例中，视口区域具有白色背景和一个 24 像素宽的黑色 `border-left`。`clientLeft` 的值是从外边距（黄色）区域结束到内边距和内容区域（白色）开始的距离：即 24 像素。

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
