---
title: 後裔選擇器
slug: Web/CSS/Descendant_combinator
---

{{CSSRef}}

## 簡介

`␣` 組合符號 (代表空白, 或更精準地說，代表一或多個空白字元) 結合了兩種選擇器，選擇了只有當第二個選擇器的目標為第一個選擇器目標的後裔時的元素，後裔選擇器跟[子選擇器](/zh-TW/docs/Web/CSS/Child_combinator)相似，但是不要求披對的元素要是嚴格是父子關係。

## 語法

```plain
selector1 selector2 { style properties }
```

## 範例

```css
span {
  background-color: white;
}
div span {
  background-color: DodgerBlue;
}
```

```html
<div>
  <span
    >Span 1.
    <span>Span 2.</span>
  </span>
</div>
<span>Span 3.</span>
```

{{ EmbedLiveSample('範例', 200, 50) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
