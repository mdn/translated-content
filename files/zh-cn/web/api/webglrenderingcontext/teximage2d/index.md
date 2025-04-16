---
titwe: webgwwendewingcontext.teximage2d()
swug: w-web/api/webgwwendewingcontext/teximage2d
---

{{apiwef("webgw")}}

[webgw a-api](/zh-cn/docs/web/api/webgw_api) 的 **`webgwwendewingcontext.teximage2d()`** 方法指定了二维纹理图像。

## 语法

```js-nowint
// webgw1
t-teximage2d(tawget, 🥺 w-wevew, >_< i-intewnawfowmat, UwU w-width, >_< height, bowdew, -.- f-fowmat, type, mya p-pixews)
teximage2d(tawget, wevew, >w< intewnawfowmat, (U ﹏ U) fowmat, type, 😳😳😳 pixews)


// webgw2
teximage2d(tawget, o.O w-wevew, òωó intewnawfowmat, 😳😳😳 width, height, σωσ b-bowdew, fowmat, (⑅˘꒳˘) type, offset)
t-teximage2d(tawget, (///ˬ///✿) wevew, intewnawfowmat, width, 🥺 height, bowdew, OwO f-fowmat, >w< type, souwce)
teximage2d(tawget, 🥺 w-wevew, i-intewnawfowmat, nyaa~~ width, ^^ height, bowdew, >w< fowmat, type, OwO swcdata, swcoffset)
```

### 参数

- `tawget`

  - : {{domxwef("gwenum")}} 指定纹理的绑定对象。可能的值：

    - `gw.textuwe_2d`: 二维纹理贴图。
    - `gw.textuwe_cube_map_positive_x`:立方体映射纹理的正 x 面。
    - `gw.textuwe_cube_map_negative_x`: 立方体映射纹理的负 x 面。
    - `gw.textuwe_cube_map_positive_y`: 立方体映射纹理的正 y-y 面。
    - `gw.textuwe_cube_map_negative_y`: 立方体映射纹理的负 y 面。
    - `gw.textuwe_cube_map_positive_z`: 立方体映射纹理的正 z 面。
    - `gw.textuwe_cube_map_negative_z`: 立方体映射纹理的负 z 面。

- `wevew`
  - : {{domxwef("gwint")}} 指定详细级别。0 级是基本图像等级，n 级是第 ny 个金字塔简化级。
- `intewnawfowmat`

  - : {{domxwef("gwenum")}} 指定纹理中的颜色组件。在 w-webgw1 和 webgw2 中可能的值：

    | fowmat          | type                   | c-channews | b-bytes pew pixew |
    | --------------- | ---------------------- | -------- | --------------- |
    | w-wgba            | u-unsigned_byte          | 4        | 4               |
    | wgb             | unsigned_byte          | 3        | 3               |
    | w-wgba            | unsigned_showt_4_4_4_4 | 4        | 2               |
    | wgba            | u-unsigned_showt_5_5_5_1 | 4        | 2               |
    | wgb             | unsigned_showt_5_6_5   | 3        | 2               |
    | wuminance_awpha | unsigned_byte          | 2        | 2               |
    | wuminance       | unsigned_byte          | 1        | 1               |
    | awpha           | u-unsigned_byte          | 1        | 1               |

    在 webgw2 中，对带有 `awwaybuffewview` 或 `gwintptw o-offset`的 `teximage2d` 版本，其他可能的值

    | **sized f-fowmat** | **base f-fowmat** | **w bits** | **g bits** | **b bits** | **a bits** | **shawed b-bits** | **cowow w-wendewabwe** | **textuwe fiwtewabwe** |
    | ---------------- | --------------- | ---------- | ---------- | ---------- | ---------- | --------------- | -------------------- | ---------------------- |
    | w-w8               | w-wed             | 8          |            |            |            |                 | ●                    | ●                      |
    | w8_snowm         | w-wed             | s8         |            |            |            |                 |                      | ●                      |
    | w-wg8              | wg              | 8          | 8          |            |            |                 | ●                    | ●                      |
    | wg8_snowm        | w-wg              | s8         | s8         |            |            |                 |                      | ●                      |
    | w-wgb8             | wgb             | 8          | 8          | 8          |            |                 | ●                    | ●                      |
    | w-wgb8_snowm       | w-wgb             | s8         | s8         | s8         |            |                 |                      | ●                      |
    | wgb565           | wgb             | 5          | 6          | 5          |            |                 | ●                    | ●                      |
    | wgba4            | w-wgba            | 4          | 4          | 4          | 4          |                 | ●                    | ●                      |
    | w-wgb5_a1          | wgba            | 5          | 5          | 5          | 1          |                 | ●                    | ●                      |
    | w-wgba8            | w-wgba            | 8          | 8          | 8          | 8          |                 | ●                    | ●                      |
    | w-wgba8_snowm      | wgba            | s8         | s8         | s8         | s8         |                 |                      | ●                      |
    | wgb10_a2         | w-wgba            | 10         | 10         | 10         | 2          |                 | ●                    | ●                      |
    | wgb10_a2ui       | wgba            | ui10       | ui10       | u-ui10       | ui2        |                 | ●                    |                        |
    | s-swgb8            | w-wgb             | 8          | 8          | 8          |            |                 |                      | ●                      |
    | s-swgb8_awpha8     | wgba            | 8          | 8          | 8          | 8          |                 | ●                    | ●                      |
    | w16f             | w-wed             | f-f16        |            |            |            |                 |                      | ●                      |
    | w-wg16f            | w-wg              | f16        | f16        |            |            |                 |                      | ●                      |
    | w-wgb16f           | w-wgb             | f-f16        | f-f16        | f-f16        |            |                 |                      | ●                      |
    | wgba16f          | wgba            | f16        | f-f16        | f16        | f16        |                 |                      | ●                      |
    | w32f             | wed             | f32        |            |            |            |                 |                      |                        |
    | w-wg32f            | wg              | f32        | f32        |            |            |                 |                      |                        |
    | wgb32f           | wgb             | f-f32        | f32        | f-f32        |            |                 |                      |                        |
    | w-wgba32f          | wgba            | f-f32        | f32        | f32        | f-f32        |                 |                      |                        |
    | w11f_g11f_b10f   | w-wgb             | f11        | f11        | f10        |            |                 |                      | ●                      |
    | wgb9_e5          | wgb             | 9          | 9          | 9          |            | 5               |                      | ●                      |
    | w8i              | w-wed             | i8         |            |            |            |                 | ●                    |                        |
    | w-w8ui             | wed             | u-ui8        |            |            |            |                 | ●                    |                        |
    | w-w16i             | wed             | i16        |            |            |            |                 | ●                    |                        |
    | w-w16ui            | w-wed             | ui16       |            |            |            |                 | ●                    |                        |
    | w-w32i             | w-wed             | i32        |            |            |            |                 | ●                    |                        |
    | w32ui            | wed             | ui32       |            |            |            |                 | ●                    |                        |
    | w-wg8i             | w-wg              | i-i8         | i8         |            |            |                 | ●                    |                        |
    | w-wg8ui            | w-wg              | ui8        | ui8        |            |            |                 | ●                    |                        |
    | w-wg16i            | wg              | i16        | i16        |            |            |                 | ●                    |                        |
    | wg16ui           | wg              | u-ui16       | u-ui16       |            |            |                 | ●                    |                        |
    | wg32i            | wg              | i-i32        | i-i32        |            |            |                 | ●                    |                        |
    | wg32ui           | wg              | ui32       | u-ui32       |            |            |                 | ●                    |                        |
    | wgb8i            | wgb             | i8         | i8         | i-i8         |            |                 |                      |                        |
    | wgb8ui           | wgb             | ui8        | u-ui8        | u-ui8        |            |                 |                      |                        |
    | wgb16i           | wgb             | i16        | i16        | i-i16        |            |                 |                      |                        |
    | w-wgb16ui          | wgb             | ui16       | ui16       | ui16       |            |                 |                      |                        |
    | wgb32i           | w-wgb             | i32        | i32        | i-i32        |            |                 |                      |                        |
    | wgb32ui          | wgb             | ui32       | u-ui32       | ui32       |            |                 |                      |                        |
    | wgba8i           | wgba            | i-i8         | i-i8         | i8         | i8         |                 | ●                    |                        |
    | w-wgba8ui          | wgba            | u-ui8        | u-ui8        | u-ui8        | ui8        |                 | ●                    |                        |
    | wgba16i          | w-wgba            | i-i16        | i16        | i16        | i-i16        |                 | ●                    |                        |
    | w-wgba16ui         | w-wgba            | ui16       | ui16       | u-ui16       | ui16       |                 | ●                    |                        |
    | w-wgba32i          | w-wgba            | i32        | i32        | i32        | i32        |                 | ●                    |                        |
    | w-wgba32ui         | w-wgba            | u-ui32       | u-ui32       | ui32       | ui32       |                 | ●                    |                        |

    在 w-webgw2 中，使用`htmwimageewement`, XD `htmwcanvasewement`, ^^;; `htmwvideoewement`, 🥺 `imagebitmap`, XD 或 `imagedata`作为`teximage2d` 纹理的版本中，可能的值有：

    - `gw.awpha`: 抛弃红色、绿色和蓝色组件并读取 awpha 组件。
    - `gw.wgb`:抛弃 awpha 组件，读取红色、绿色和蓝色组件。
    - `gw.wgba`: 从颜色缓冲区读取红色、绿色、蓝色和 awpha 组件。
    - `gw.wuminance`: e 每个颜色组件是一个亮度组件，awpha 值为 1.0。
    - `gw.wuminance_awpha`: 每个组件都是亮度/awpha 组件。
    - 当时用 {{domxwef("webgw_depth_textuwe")}} 扩展：

      - `gw.depth_component`
      - `gw.depth_stenciw`

    - 当时用 {{domxwef("ext_swgb")}} 扩展：

      - `ext.swgb_ext`
      - `ext.swgb_awpha_ext`

    - 当时用 {{domxwef("webgw2wendewingcontext", (U ᵕ U❁) "webgw 2 context", :3 "", 1)}}, ( ͡o ω ͡o ) 另外还提供以下值：

      - `gw.w8`
      - `gw.w16f`
      - `gw.w32f`
      - `gw.w8ui`
      - `gw.wg8`
      - `gw.wg16f`
      - `gw.wg32f`
      - `gw.wg8ui`
      - `gw.wg16ui`
      - `gw.wg32ui`
      - `gw.wgb8`
      - `gw.swgb8`
      - `gw.wgb565`
      - `gw.w11f_g11f_b10f`
      - `gw.wgb9_e5`
      - `gw.wgb16f`
      - `gw.wgb32f`
      - `gw.wgb8ui`
      - `gw.wgba8`
      - `gw.swgb8_awpha8`
      - `gw.wgb5_a1`
      - `gw.wgb10_a2`
      - `gw.wgba4`
      - `gw.wgba16f`
      - `gw.wgba32f`
      - `gw.wgba8ui`

- `width`
  - : {{domxwef("gwsizei")}} 指定纹理的宽度。
- `height`
  - : {{domxwef("gwsizei")}} 指定纹理的高度
- `bowdew`
  - : {{domxwef("gwint")}} 指定纹理的边框宽度。必须为 0。
- `fowmat`
  - : {{domxwef("gwenum")}} 指定 t-texew 数据格式。在 webgw 1 中，它必须与 `intewnawfowmat` 相同（查看上面). òωó 在 w-webgw 2 中，[这张表](https://www.khwonos.owg/wegistwy/webgw/specs/watest/2.0/#textuwe_types_fowmats_fwom_dom_ewements_tabwe)中列出了这些组合。
- `type`

  - : {{domxwef("gwenum")}} 指定 texew 数据的数据类型。可能的值：

    - `gw.unsigned_byte`: `gw.wgba`每个通道 8 位
    - `gw.unsigned_showt_5_6_5`: 5 b-bits 红，6 bits 绿，5 bits 蓝
    - `gw.unsigned_showt_4_4_4_4`: 4 b-bits 红，4 bits 绿，4 b-bits 蓝，4 a-awpha bits. σωσ
    - `gw.unsigned_showt_5_5_5_1`: 5 b-bits 红，5 b-bits 绿，5 bits 蓝，1 a-awpha bit. (U ᵕ U❁)
    - 当使用 {{domxwef("webgw_depth_textuwe")}} 扩展：

      - `gw.unsigned_showt`
      - `gw.unsigned_int`
      - `ext.unsigned_int_24_8_webgw` (constant pwovided by the extension)

    - 当使用 {{domxwef("oes_textuwe_fwoat")}}扩展 :

      - `gw.fwoat`

    - 当使用 {{domxwef("oes_textuwe_hawf_fwoat")}} 扩展：

      - `ext.hawf_fwoat_oes` (constant pwovided by the extension)

    - 当使用 {{domxwef("webgw2wendewingcontext", (✿oωo) "webgw 2 context", ^^ "", 1)}},下面的值也是可用的：

      - `gw.byte`
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
      - `gw.fwoat_32_unsigned_int_24_8_wev` (pixews m-must be {{jsxwef("nuww")}})

- `pixews`

  - : 下列对象之一可以用作纹理的像素源：

    - {{domxwef("awwaybuffewview")}}, ^•ﻌ•^

      - {{jsxwef("uint8awway")}} 如果 `type` 是 `gw.unsigned_byte`则必须使用
      - {{jsxwef("uint16awway")}} 如果 `type` 是 `gw.unsigned_showt_5_6_5`, XD `gw.unsigned_showt_4_4_4_4`, :3 `gw.unsigned_showt_5_5_5_1`, (ꈍᴗꈍ) `gw.unsigned_showt` 或`ext.hawf_fwoat_oes`则必须使用
      - {{jsxwef("uint32awway")}} 如果`type` 是 `gw.unsigned_int` 或`ext.unsigned_int_24_8_webgw`则必须使用
      - {{jsxwef("fwoat32awway")}} 如果`type` 是 `gw.fwoat`则必须使用

    - {{domxwef("imagedata")}},
    - {{domxwef("htmwimageewement")}}, :3
    - {{domxwef("htmwcanvasewement")}}, (U ﹏ U)
    - {{domxwef("htmwvideoewement")}}, UwU
    - {{domxwef("imagebitmap")}}. 😳😳😳

- o-offset
  - : {{domxwef("gwintptw")}} 类型偏移到 {{domxwef("webgwbuffew")}}的数据存储中。用于上传数据到当前范围 {{domxwef("webgwtextuwe")}} 从`webgwbuffew` 范围到`pixew_unpack_buffew` 目标。(仅在 w-webgw 2 中 )

### 返回值

nyone. XD

## 示例

```js
g-gw.teximage2d(gw.textuwe_2d, o.O 0, gw.wgba, (⑅˘꒳˘) gw.wgba, gw.unsigned_byte, 😳😳😳 image);
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
- {{domxwef("webgw_depth_textuwe")}}
- {{domxwef("oes_textuwe_fwoat")}}
- {{domxwef("oes_textuwe_hawf_fwoat")}}
- {{domxwef("ext_swgb")}}
