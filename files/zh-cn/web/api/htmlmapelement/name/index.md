---
title: HTMLMapElement：name 属性
slug: Web/API/HTMLMapElement/name
l10n:
  sourceCommit: c2441279b7956925d28373345838436b1fa2c78c
---

{{ApiRef("HTML DOM")}}

{{domxref("HTMLMapElement")}} 的 **`name`** 属性表示 `<map>` 元素的唯一名称。它的值可以与 {{HTMLElement("img")}} 元素的 `useMap` 属性一起使用，以引用 `<map>` 元素。

如果 {{HTMLElement("map")}} 元素设置了 `id` 属性，则 `name` 属性应该与其 `id` 属性相同。

## 值

一个没有空格的非空字符串。

## 示例

```html
<map name="image-map">
  <area shape="circle" coords="15,15,5" />
</map>
```

```js
const mapElement = document.getElementsByName("image-map")[0];
console.log(mapElement.name); // 输出：“image-map”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLImageElement.useMap")}} 属性
- {{domxref("HTMLAreaElement")}} 元素
