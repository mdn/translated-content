---
title: Element.clientHeight
slug: Web/API/Element/clientHeight
---
{{ APIRef() }}

这个属性是只读属性，对于没有定义 CSS 或者内联布局盒子的元素为 0，否则，它是元素内部的高度 (单位像素)，包含内边距，但不包括水平滚动条、边框和外边距。

`clientHeight` 可以通过 CSS `height` + CSS `padding` - 水平滚动条高度 (如果存在) 来计算。

> **备注：** 此属性会将获取的值四舍五入取整数。 如果你需要小数结果，请使用 {{ domxref("element.getBoundingClientRect()") }}.
>
> 备注：上面的有问题 因为使用 element.getBoundingClientRect() 只能获取元素的 width / height，但是这个值是 offsetWidth / offsetHeight ，包括边框的长度，所以不能获取 clientWidth / clientHeight

## 语法

```plain
var h = element.clientHeight;
```

返回整数 `h`，表示 `element` 的 `clientHeight`（单位像素）。

`clientHeight` 是只读的。

## 示例

![Image:Dimensions-client.png](https://developer.mozilla.org/@api/deki/files/185/=Dimensions-client.png)

## 规范

{{Specifications}}

### 备注

clientHeight 是在 IE 浏览器对象模型中引入的属性。

### 相关链接

- {{domxref("HTMLElement.offsetHeight")}}
- {{domxref("Element.scrollHeight")}}
- [Determining the dimensions of elements](/en-US/docs/Determining_the_dimensions_of_elements)
