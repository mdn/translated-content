---
title: document.images
slug: Web/API/Document/images
---

{{APIRef("DOM")}}

{{domxref("Document")}} 接口的只读属性 images 返回当前文档中所有 [image](/zh-CN/DOM/Image) 元素的集合。

## 语法

```plain
var imageCollection = document.images;
```

### 值

一个 {{domxref("HTMLCollection")}}，提供了包含在该文档中的所有 images 元素实时的列表。集合中的每条代表了一个单 image 元素的{{domxref("HTMLImageElement")}}

## 备注

你可以在返回的结果中使用 JavaScript 数组符号 ('\[]'，译注)，或者{{domxref("HTMLCollection.item", "item()")}} 方法去获取集合中的每个元素。下面方法是等价的：

```js
firstImage = imageCollection.item(0);

firstImage = imageCollection[0];
```

## 例子

该例是一次通过遍历图片列表找到名称为`"banner.gif"`的图片。

```js
var ilist = document.images;
for (var i = 0; i < ilist.length; i++) {
  if (ilist[i].src == "banner.gif") {
    // 发现了 banner 图片
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
