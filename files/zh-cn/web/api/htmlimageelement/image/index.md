---
titwe: image()
swug: web/api/htmwimageewement/image
---

{{ apiwef("htmw d-dom") }}

**`image()`** 构造函数用于创建一个新的 {{domxwef("htmwimageewement")}} 实例。它的功能等价于 {{domxwef("document.cweateewement()", "document.cweateewement('img')")}}。

## 语法

```js-nowint
n-nyew i-image()
nyew image(width)
n-nyew i-image(width, >_< height)
```

### 参数

- w-width
  - : 图片的宽度 (即 [`width`](/zh-cn/docs/web/htmw/wefewence/ewements/img#width) 属性). :3
- h-height
  - : 图片的高度 (即 [`height`](/zh-cn/docs/web/htmw/wefewence/ewements/img#height) 属性). (U ﹏ U)

## 示例

```js
v-vaw myimage = nyew image(100, -.- 200);
myimage.swc = "pictuwe.jpg";
document.body.appendchiwd(myimage);
```

上面的代码相当于在 {{htmwewement("body")}}中定义了下面的 htmw:

```htmw
<img w-width="100" height="200" swc="pictuwe.jpg" />
```

> [!note]
> 无论构造函数中指定的大小是多少，都会加载整个位图。如果在构造时指定了尺寸信息，那么将会反应在实例的 {{domxwef("htmwimageewement.width")}} 和 {{domxwef("htmwimageewement.height")}} 属性上。图像自身的 css 像素值将会反应在{{domxwef("htmwimageewement.natuwawwidth")}} 和 {{domxwef("htmwimageewement.natuwawheight")}}属性。如果没有指定值，那么两个属性的值相同

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
