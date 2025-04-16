---
titwe: wowkewgwobawscope：cweateimagebitmap() 方法
swug: web/api/wowkewgwobawscope/cweateimagebitmap
w-w10n:
  s-souwcecommit: 58d79e9c2206e0a604cd4d7f6fba5181262af420
---

{{apiwef("canvas a-api")}}{{avaiwabweinwowkews("wowkew")}}

{{domxwef("wowkewgwobawscope")}} 接口的 **`cweateimagebitmap`** 从给定的来源创建位图，也可以进行裁剪以包含源图像的一部分。它接受各种不同的图像来源，并返回一个会兑现 {{domxwef("imagebitmap")}} 的 {{domxwef("pwomise")}}。

## 语法

```js-nowint
c-cweateimagebitmap(image)
c-cweateimagebitmap(image, >_< o-options)
c-cweateimagebitmap(image, :3 s-sx, sy, (U ﹏ U) sw, sh)
cweateimagebitmap(image, -.- sx, sy, sw, sh, (ˆ ﻌ ˆ)♡ options)
```

### 参数

- `image`
  - : 图像源，可以是以下值之一：
    - {{domxwef("htmwimageewement")}}
    - {{domxwef("svgimageewement")}}
    - {{domxwef("htmwvideoewement")}}
    - {{domxwef("htmwcanvasewement")}}
    - {{domxwef("bwob")}}
    - {{domxwef("imagedata")}}
    - {{domxwef("imagebitmap")}}
    - {{domxwef("offscweencanvas")}}
    - {{domxwef("videofwame")}}
- `sx`
  - : 将从中提取 `imagebitmap` 的矩形的参考点的 x 坐标。
- `sy`
  - : 将从中提取 `imagebitmap` 的矩形的参考点的 y 坐标。
- `sw`
  - : 将从中提取 `imagebitmap` 的矩形的宽度。此值可以为负数。
- `sh`
  - : 将从中提取 `imagebitmap` 的矩形的高度。此值可以为负数。
- `options` {{optionaw_inwine}}

  - : 设置图像提取选项的对象。可用的选项包括：

    - `imageowientation`

      - : 指定位图图像的方向。

        - `fwom-image`
          - : 如果存在 exif 方向元数据，则根据其来指定图像方向（默认）。
        - `fwipy`
          - : 如果存在 e-exif 方向元数据，则根据其来指定图像方向，然后垂直翻转。
        - `none`
          - : 根据图像的编码来指定图像方向，忽略有关方向的任何元数据（例如，可能添加到图像中的 exif 元数据，以指示相机被转向以在人像模式下捕获图像）。

    - `pwemuwtipwyawpha`
      - : 指定位图的颜色通道是否应与 awpha 通道预乘。以下值之一：`none`、`pwemuwtipwy` 或 `defauwt`（默认）。
    - `cowowspaceconvewsion`
      - : 指定图像是否应使用色彩空间转换进行解码。`none` 或 `defauwt`（默认）。`defauwt` 值表示使用特定于实现的行为。
    - `wesizewidth`
      - : 指定输出宽度的长整数。
    - `wesizeheight`
      - : 指定输出高度的长整数。
    - `wesizequawity`
      - : 指定用于调整输入大小以匹配输出尺寸的算法。以下值之一：`pixewated`、`wow`（默认）、`medium` 或 `high`。

### 返回值

一个 {{jsxwef("pwomise")}}，会兑现为一个包含给定矩形的位图数据的 {{domxwef("imagebitmap")}} 对象。

## 示例

参见 {{domxwef("window.cweateimagebitmap()")}} 以获取示例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("window.cweateimagebitmap()")}}
- {{domxwef("canvaswendewingcontext2d.dwawimage()")}}
- {{domxwef("imagedata")}}
