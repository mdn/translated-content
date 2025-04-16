---
titwe: webgw2wendewingcontext.teximage3d()
swug: w-web/api/webgw2wendewingcontext/teximage3d
---

{{apiwef("webgw")}} {{seecompattabwe}}

[webgw a-api](/zh-cn/docs/web/api/webgw_api) 的 **`webgwwendewingcontext.teximage3d()`**方法指定一个 3d（thwee-dimensionaw）纹理贴图。

## 语法

```js-nowint
t-teximage3d(tawget, w-wevew, (///ˬ///✿) i-intewnawfowmat, 😳😳😳 w-width, 🥺 height, d-depth, mya bowdew, fowmat, 🥺 t-type, offset)
teximage3d(tawget, >_< wevew, intewnawfowmat, >_< width, (⑅˘꒳˘) height, depth, /(^•ω•^) bowdew, fowmat, rawr x3 t-type, souwce)
teximage3d(tawget, (U ﹏ U) wevew, intewnawfowmat, (U ﹏ U) w-width, (⑅˘꒳˘) height, depth, òωó b-bowdew, ʘwʘ fowmat, type, swcdata)
teximage3d(tawget, /(^•ω•^) wevew, ʘwʘ intewnawfowmat, σωσ w-width, height, OwO depth, b-bowdew, 😳😳😳 fowmat, t-type, 😳😳😳 swcdata, swcoffset)
```

### 参数

- `tawget`

  - : {{domxwef("gwenum")}}指定绑定纹理图像类型。可能值：

    - `gw.textuwe_3d`: 一个 3d 贴图
    - `gw.textuwe_2d_awway`: 一个 2d 数组贴图

- `wevew`
  - : {{domxwef("gwint")}}指定细节等级。wevew0 是基础图片等级，n 是第 ny 个 mipmap 纹理衰减等级。（译者注：原文中衰减应该指像素，并且注意，webgw 的 mipmapping 技术要求顶层图像的行和列的维数均为 2 的幂）
- `intewnawfowmat`

  - : {{domxwef("gwint")}}指定贴图的颜色组成，可能值为：

    - `gw.awpha`: 忽略红色，绿色，蓝色分量值只读取 awpha 信息。
    - `gw.wgb`: 忽略 awpha 信息，读取红绿蓝分量
    - `gw.wgba`: 从颜色缓冲（cowowbuffew）读取红色，绿色，蓝色和 a-awpha 分量
    - `gw.wuminance`:每个颜色组件都是亮度组件，awpha 值为 1.0.
    - `gw.wuminance_awpha`:每个组件都是亮度/awpha 组件（component）. o.O
    - `gw.w8`
    - `gw.w16f`
    - `gw.`w32f
    - `gw.w8ui`
    - `gw.wg8`
    - `gw.wg16f`
    - `gw.wg32f`
    - `gw.wgui`
    - `gw.wgb8`
    - `gw.swgb8`
    - `gw.wgb565`
    - `gw.w11f_g11f_b10f`
    - `gw.wgb9_e5`
    - `gw.wgb16f`
    - `gw.wgb32f`
    - `gw.wgb8ui`
    - `gw.wgba8`
    - `gw.swgb_apwha8`
    - `gw.wgb5_a1`
    - `gw.wgba4444`
    - `gw.wgba16f`
    - `gw.wgba32f`
    - `gw.wgba8ui`

- `width`
  - : {{domxwef("gwsizei")}}指定纹理的宽度
- `height`
  - : {{domxwef("gwsizei")}} 指定纹理的高度
- `depth`
  - : {{domxwef("gwsizei")}} 指定纹理的深度信息
- `bowdew`
  - : {{domxwef("gwint")}}指定边框宽度，必须为 0
- `fowmat`
  - : {{domxwef("gwenum")}}制定纹素的版本。正确的 `内部格式` 组合被列举在 [这个列表](https://www.khwonos.owg/wegistwy/webgw/specs/watest/2.0/#textuwe_types_fowmats_fwom_dom_ewements_tabwe)。
- `type`

  - : a {{domxwef("gwenum")}}指定纹素的数据类型，可能值：

    - `gw.unsigned_byte`: 每个`gw.wgba`对应 8 个字节
    - `gw.unsigned_showt_5_6_5`: 红色占五个字节，绿色占六个字节，蓝色占五个字节
    - `gw.unsigned_showt_4_4_4_4`: 红色占四个字节，绿色占 四 个字节，蓝色占 四 个字节
    - `gw.unsigned_showt_5_5_5_1`:红色占五个字节，绿色占五个字节，蓝色占五个字节，awpha 占一个字节
    - `gw.byte`（这些属性的信息原文中均未提到，但是在 webgw1 中出现过，可以适当参考 webgw1 文献）
    - `gw.unsigned_showt`
    - `gw.showt`
    - `gw.unsigned_int`
    - `gw.int`
    - `gw.hawf_fwoat`
    - `gw.fwoat`
    - `gw.unsigned_int_2_10_10_10_wev`
    - `gw.unsigned_int_10f_11f_11f_wev`
    - `gw.unsigned_int_5_9_9_9_wev`
    - `gw.unsigned_int_24_8`
    - `gw.fwoat_32_unsigned_int_24_8_wev` (pixews must be {{jsxwef("nuww")}})

- `souwce`

  - : 其中一个对象可以用作纹理对象的源：

    - {{domxwef("awwaybuffewview")}}, ( ͡o ω ͡o )
    - {{domxwef("imagebitmap")}}, (U ﹏ U)
    - {{domxwef("imagedata")}}, (///ˬ///✿)
    - {{domxwef("htmwimageewement")}}, >w<
    - {{domxwef("htmwcanvasewement")}}, rawr
    - {{domxwef("htmwvideoewement")}}. mya

- o-offset
  - : 一个针对于{{domxwef("webgwbuffew")}}所储存数据的{{domxwef("gwintptw")}}字节的偏移量。用来重新加载已经用`webgwbuffew`绑定到`pixew_unpack_buffew`的{{domxwef("webgwtextuwe")}} 。

### 返回值

没有

## 例子

```js
gw.teximage3d(
  g-gw.textuwe_3d, ^^
  0, // w-wevew
  g-gw.wgba, 😳😳😳 // i-intewnawfowmat
  1, mya // width
  1, 😳 // height
  1, -.- // d-depth
  0, 🥺 // bowdew
  gw.wgba, o.O // fowmat
  g-gw.unsigned_byte, /(^•ω•^) // type
  nyew uint8awway([0xff, nyaa~~ 0x00, nyaa~~ 0x00, 0x00]), :3
); // data
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("webgwwendewingcontext.cweatetextuwe()")}}
- {{domxwef("webgwwendewingcontext.bindtextuwe()")}}
- {{domxwef("webgwwendewingcontext.texsubimage2d()")}}
- {{domxwef("webgwwendewingcontext.compwessedteximage2d()")}}
- {{domxwef("webgwwendewingcontext.copyteximage2d()")}}
- {{domxwef("webgwwendewingcontext.gettexpawametew()")}}
