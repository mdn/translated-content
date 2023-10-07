---
title: HTMLElement.offsetLeft
slug: Web/API/HTMLElement/offsetLeft
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.offsetLeft`** 是一个只读属性，返回当前元素*左上角*相对于 {{domxref("HTMLElement.offsetParent")}} 节点的左边界偏移的像素值。

对块级元素来说，`offsetTop`、`offsetLeft`、`offsetWidth` 及 `offsetHeight` 描述了元素相对于 `offsetParent` 的边界框。

然而，对于可被截断到下一行的行内元素（如 **span**），`offsetTop` 和 `offsetLeft` 描述的是*第一个*边界框的位置（使用 {{domxref("Element.getClientRects()")}} 来获取其宽度和高度），而 `offsetWidth` 和 `offsetHeight` 描述的是边界框的尺寸（使用 {{domxref("Element.getBoundingClientRect")}} 来获取其位置）。因此，使用 `offsetLeft、offsetTop、offsetWidth`、`offsetHeight` 来对应 left、top、width 和 height 的一个盒子将不会是文本容器 span 的盒子边界。

## 语法

```plain
left = element.offsetLeft;
```

`left` 是一个整数，表示向左偏移的像素值。

## 示例

```plain
var colorTable = document.getElementById("t1");
var tOLeft = colorTable.offsetLeft;

if (tOLeft > 5) {
  // large left offset: do something here
}
```

这个例子展示了蓝色边框的 div 包含一个长的句子，红色的盒子是一个可以表示包含这个长句子的 span 标签的边界。

![Image:offsetLeft.jpg](offsetleft.jpg)

```plain
<div style="width: 300px; border-color:blue;
  border-style:solid; border-width:1;">
  <span>Short span. </span>
  <span id="long">Long span that wraps withing this div.</span>
</div>

<div id="box" style="position: absolute; border-color: red;
  border-width: 1; border-style: solid; z-index: 10">
</div>

<script>
  var box = document.getElementById("box");
  var long = document.getElementById("long");
  //
  // long.offsetLeft 这个值就是 span 的 offsetLeft.
  // long.offsetParent 返回的是 body（在 chrome 浏览器中测试）
  // 如果 id 为 long 的 span 元素的父元素 div，设置了 position 属性值，只要不为 static，那么 long.offsetParent 就是 div

  box.style.left = long.offsetLeft + document.body.scrollLeft + "px";
  box.style.top = long.offsetTop + document.body.scrollTop + "px";
  box.style.width = long.offsetWidth + "px";
  box.style.height = long.offsetHeight + "px";
</script>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLElement.offsetParent")}}、{{domxref("HTMLElement.offsetTop")}}、{{domxref("HTMLElement.offsetWidth")}}、{{domxref("HTMLElement.offsetHeight")}}
