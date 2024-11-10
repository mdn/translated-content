---
title: HTMLMapElement：areas 属性
slug: Web/API/HTMLMapElement/areas
l10n:
  sourceCommit: da6219d9480147488eda1f9120359384ee652b92
---

{{ApiRef("HTML DOM")}}

{{domxref("HTMLMapElement")}} 接口的 **`areas`** 只读属性返回关联 {{HTMLElement("map")}} 元素的 {{HTMLElement("area")}} 元素集合。

## 值

一个包含 {{domxref("HTMLAreaElement")}} 元素的 {{domxref("HTMLCollection")}} 对象。

## 示例

```html
<map id="image-map">
  <area shape="circle" coords="50,50,35" alt="左箭头" />
  <area shape="circle" coords="150,50,35" alt="右箭头" />
</map>
<img usemap="#image-map" src="left-right-arrow.png" alt="左右箭头图片" />
<output></output>
```

```css hidden
output {
  display: block;
}
```

```js
const mapElement = document.getElementById("image-map");
const outputElement = document.querySelector("output");

for (const area of mapElement.areas) {
  area.addEventListener("click", (event) => {
    outputElement.textContent = `你点击了${area.alt}区域。\n\n`;
  });
}
```

### 结果

{{EmbedLiveSample("示例",100,150)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLAreaElement")}}
- {{domxref("HTMLImageElement.useMap")}}
