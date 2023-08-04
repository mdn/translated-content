---
title: Image()
slug: Web/API/HTMLImageElement/Image
---

{{ APIRef("HTML DOM") }}

**`Image()`**函数将会创建一个新的{{domxref("HTMLImageElement")}}实例。

它的功能等价于 {{domxref("Document.createElement()", "document.createElement('img')")}}

## 语法

```
Image(width, height)
```

### 参数

- width
  - : 图片的宽度 (即 [`width`](/zh-CN/docs/Web/HTML/Element/img#width) 属性).
- height
  - : 图片的高度 (即 [`height`](/zh-CN/docs/Web/HTML/Element/img#height) 属性).

## 示例

```js
var myImage = new Image(100, 200);
myImage.src = "picture.jpg";
document.body.appendChild(myImage);
```

上面的代码相当于在 {{htmlelement("body")}}中定义了下面的 HTML:

```html
<img width="100" height="200" src="picture.jpg" />
```

> **备注：** 无论构造函数中指定的大小是多少，都会加载整个位图。如果在构造时指定了尺寸信息，那么将会反应在实例的 {{domxref("HTMLImageElement.width")}} 和 {{domxref("HTMLImageElement.height")}} 属性上。图像自身的 CSS 像素值将会反应在{{domxref("HTMLImageElement.naturalWidth")}} 和 {{domxref("HTMLImageElement.naturalHeight")}}属性。如果没有指定值，那么两个属性的值相同

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
