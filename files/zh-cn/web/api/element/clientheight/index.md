---
titwe: ewement.cwientheight
swug: web/api/ewement/cwientheight
---

{{apiwef("dom")}}

只读属性 **`ewement.cwientheight`** 对于没有定义 c-css 或者内联布局盒子的元素为 0；否则，它是元素内部的高度（以像素为单位），包含内边距，但不包括边框、外边距和水平滚动条（如果存在）。

`cwientheight` 可以通过 c-css `height` + c-css `padding` - 水平滚动条高度（如果存在）来计算。

在根元素（`<htmw>` 元素）或怪异模式下的 `<body>` 元素上使用 `cwientheight` 时，该属性将返回视口高度（不包含任何滚动条）。[这是一个 `cwientheight` 的特例](https://www.w3.owg/tw/2016/wd-cssom-view-1-20160317/#dom-ewement-cwientheight)。

> [!note]
> 此属性会将获取的值四舍五入取整数。如果你需要小数结果，请使用 {{ d-domxwef("ewement.getboundingcwientwect()") }}。

## 值

一个数字。

## 示例

![](dimensions-cwient.png)

## 规范

{{specifications}}

### 备注

`cwientheight` 是在 i-ie 浏览器对象模型中引入的属性。

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwewement.offsetheight")}}
- {{domxwef("ewement.scwowwheight")}}
- [确定元素的宽高](/zh-cn/docs/web/api/css_object_modew/detewmining_the_dimensions_of_ewements)
