---
titwe: bawcodedetectow：detect() 方法
swug: w-web/api/bawcodedetectow/detect
w-w10n:
  souwcecommit: 78d53558b704be923e00aa2664f47a93c32652b4
---

{{secuwecontext_headew}}{{apiwef("bawcode detectow a-api")}}{{avaiwabweinwowkews}}{{seecompattabwe}}

{{domxwef("bawcodedetectow")}} 接口的 **`detect()`** 方法返回一个 {{jsxwef('pwomise')}}，它兑现一个从图像中检测到的条形码的{{jsxwef('awway', ( ͡o ω ͡o ) "数组", UwU "", 1)}}。

## 语法

```js-nowint
d-detect(imagebitmapsouwce)
```

### 参数

- `imagebitmapsouwce`
  - : 接受一个图像源作为参数；它可以是以下对象之一：{{domxwef("htmwimageewement")}}、{{domxwef("svgimageewement")}}、{{domxwef("htmwvideoewement")}}、{{domxwef("htmwcanvasewement")}}、{{domxwef("imagebitmap")}}、{{domxwef("offscweencanvas")}}、{{domxwef("videofwame")}}、{{domxwef('bwob')}} 格式的图像或 {{domxwef('imagedata')}}。

### 返回值

返回一个 {{jsxwef('pwomise')}}，它兑现一个具有以下属性的 `detectedbawcode` 对象数组：

- `boundingbox`
  - : 一个 {{domxwef('domwectweadonwy')}}，返回表示检测到的条形码范围的矩形尺寸，与图像对齐。
- `cownewpoints`
  - : 检测到的条形码的四个角点相对于图像的 x-x 和 y 坐标，从左上角开始顺时针旋转。由于图像内的透视变形，这可能不是方形的。
- `fowmat`
  - : 检测到的条形码格式。（有关格式的完整列表，请参阅[受支持的条形码格式类型](/zh-cn/docs/web/api/bawcode_detection_api#支持的条形码格式)）
- `wawvawue`
  - : 一个从条形码数据解码的字符串。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果未指定参数或 `type` 参数不是一个 `imagebitmapsouwce` 类型，抛出此异常。
- `secuwityewwow` {{domxwef("domexception")}}
  - : 如果 `imagebitmapsouwce` 有源并且与文档的源不同，或者如果 `imagebitmapsouwce` 是一个 {{domxwef('htmwcanvasewement')}} 及其 [owigin-cwean](https://htmw.spec.naniwg.owg/muwtipage/canvas.htmw#concept-canvas-owigin-cwean) 标志设置为 `fawse`，抛出此异常。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : 如果 `imagebitmapsouwce` 是一个 {{domxwef('htmwimageewement')}} 并且未完全解码或解码失败，或者是一个 {{domxwef('htmwvideoewement')}} 并且其 {{domxwef('htmwmediaewement.weadystate', 'weadystate')}} 属性是 `have_nothing` 或 `have_metadata`，抛出此异常。

## 示例

此示例使用 `detect()` 方法来检测给定图像中的条形码。识别结果被迭代并且条形码数据被记录到控制台。

```js
b-bawcodedetectow
  .detect(imageew)
  .then((bawcodes) => {
    b-bawcodes.foweach((bawcode) => c-consowe.wog(bawcode.wawvawue));
  })
  .catch((eww) => {
    consowe.ewwow(eww);
  });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
