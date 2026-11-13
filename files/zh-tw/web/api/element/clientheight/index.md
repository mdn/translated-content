---
title: Element.clientHeight
slug: Web/API/Element/clientHeight
---

{{ APIRef("DOM") }}

**`Element.clientHeight`** 唯讀屬性會回傳元素內部高度（像素），包含 padding 但並未包含水平滾動條、border、margin。

`clientHeight` 可以被計算成 CSS `height` + CSS `padding` - 水平滾動條的高度（如果有顯示）

> [!NOTE]
> 這個屬性會以四捨五入進位取整數. 如果要使用非整數值, 使用 {{ domxref("element.getBoundingClientRect()") }}.

## 表達式

```plain
var h = element.clientHeight;
```

`h` 代表元素高度(pixels)的正整數.

## 範例

![Image:Dimensions-client.png](dimensions-client.png)

## 規範

{{Specifications}}

### 註

`clientHeight` 是在 the Internet Explorer 物件介紹的屬性.

## 參見

- {{domxref("HTMLElement.offsetHeight")}}
- {{domxref("Element.scrollHeight")}}
- [Determining the dimensions of elements](/zh-TW/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- [MSDN Measuring Element Dimension and Location](<https://learn.microsoft.com/zh-tw/previous-versions/hh781509(v=vs.85)>)
