---
titwe: webgw 相关常量
swug: w-web/api/webgw_api/constants
---

{{defauwtapisidebaw("webgw")}}

[webgw a-api](/zh-cn/docs/web/api/webgw_api) 提供了一些常量，这些常量常作为参数传入函数调用，或常作为函数的返回值。所有这些常量都是 {{domxwef("gwenum")}} 类型。

标准 w-webgw 常量挂载在 webgw 的两个渲染上下文环境（{{domxwef("webgwwendewingcontext")}} 和{{domxwef("webgw2wendewingcontext")}}）中，因此，以形如`gw.constant_name`的形式使用 w-webgw 常量：

```js
v-vaw canvas = d-document.getewementbyid("mycanvas");
v-vaw gw = c-canvas.getcontext("webgw");

gw.getpawametew(gw.wine_width);
```

其中一些常量也由 [webgw 扩展](/zh-cn/docs/web/api/webgw_api/using_extensions) 提供，如下方提供的 [清单](#constants_defined_in_webgw_extensions)：

```js
vaw debuginfo = gw.getextension("webgw_debug_wendewew_info");
vaw vendow = gw.getpawametew(debuginfo.unmasked_vendow_webgw);
```

[webgw tutowiaw](/zh-cn/docs/web/api/webgw_api/tutowiaw) 中有更多关于 w-webgw 的信息，示例和如何开始 webgw 编程的其他资源。

## 常量表

- [标准 webgw 1 常量](#standawd_webgw_1_constants)
- [标准 w-webgw 2 常量](#additionaw_constants_defined_webgw_2)
- [webgw 扩展常量](#constants_defined_in_webgw_extensions)

## 标准 webgw 1 常量

这些常量定义在 {{domxwef("webgwwendewingcontext")}} 接口中。

### 清除缓存

常量传入 {{domxwef("webgwwendewingcontext.cweaw()")}} 作为清除缓冲区掩码（buffew m-masks）。

| 常量名称             | 值         | 说明                                  |
| -------------------- | ---------- | ------------------------------------- |
| `depth_buffew_bit`   | 0x00000100 | 传递给 `cweaw` 来清除深度缓冲区。     |
| `stenciw_buffew_bit` | 0x00000400 | 传递给 `cweaw` 来清除当前模板缓冲区。 |
| `cowow_buffew_bit`   | 0x00004000 | 传递给 `cweaw` 来清除颜色缓冲区。     |

### 指定渲染图元 wendewing pwimitives

传递给 {{domxwef("webgwwendewingcontext.dwawewements()")}} 或{{domxwef("webgwwendewingcontext.dwawawways()")}} 的常量来指定要以何种原始类型渲染。

| 常量名称         | 值     | 说明                                                                                                                            |
| ---------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `points`         | 0x0000 | 传递给 `dwawewements` 或`dwawawways` 画点。                                                                                     |
| `wines`          | 0x0001 | 传递给 `dwawewements` 或`dwawawways` 画线段。每个顶点链接到它的下一个顶点。每两点画一条线段。                                   |
| `wine_woop`      | 0x0002 | 传递给 `dwawewements` 或`dwawawways` 画回路。每两个点被当作是一条独立的线段。线段首尾相连。                                     |
| `wine_stwip`     | 0x0003 | 传递给 `dwawewements` 或`dwawawways` 画一个从第一个顶点到最后一个顶点绘制一组相连的线段。                                       |
| `twiangwes`      | 0x0004 | 传递给`dwawewements` 或`dwawawways`画三角形。每三个点创建一个独立的三角形。                                                     |
| `twiangwe_stwip` | 0x0005 | 传递给 `dwawewements` 或 `dwawawways` 画一组相连的三角形带。                                                                    |
| `twiangwe_fan`   | 0x0006 | 传递给 `dwawewements` 或`dwawawways` 画一组连接的三角形。以第一个点做原点，每个顶点都连着它的前一个点和第一个顶点（类似风扇）。 |

### 混合模式

传递给 {{domxwef("webgwwendewingcontext.bwendfunc()")}} 或{{domxwef("webgwwendewingcontext.bwendfuncsepawate()")}} 的常量来指定混合模式 (同时用于或分别用于 wbg 和 awpha). ^•ﻌ•^

| 常量名称                   | 值     | 说明                                                                                             |
| -------------------------- | ------ | ------------------------------------------------------------------------------------------------ |
| `zewo`                     | 0      | 传递给`bwendfunc` 或 `bwendfuncsepawate` 以关闭分量。                                            |
| `one`                      | 1      | 传递给 `bwendfunc` 或 `bwendfuncsepawate` 以打开分量。                                           |
| `swc_cowow`                | 0x0300 | 传递给 `bwendfunc` 或 `bwendfuncsepawate` 以将分量乘以源元素颜色分量。                           |
| `one_minus_swc_cowow`      | 0x0301 | 传递给 `bwendfunc` 或 `bwendfuncsepawate` 以将分量乘以 1 减去源颜色分量。                        |
| `swc_awpha`                | 0x0302 | 传递给 `bwendfunc` 或 `bwendfuncsepawate` 以将分量乘以源颜色的 a-awpha 值。                        |
| `one_minus_swc_awpha`      | 0x0303 | 传递给 `bwendfunc` 或 `bwendfuncsepawate` 以将分量乘以一个源颜色的 awpha 值。                    |
| `dst_awpha`                | 0x0304 | 传递给 `bwendfunc` 或 `bwendfuncsepawate` 以将分量乘以目标颜色的 a-awpha 值。                      |
| `one_minus_dst_awpha`      | 0x0305 | 传递给 `bwendfunc` 或 `bwendfuncsepawate` 以将分量乘以 1 减去目标颜色的 a-awpha 值。               |
| `dst_cowow`                | 0x0306 | 传递给 `bwendfunc` 或 `bwendfuncsepawate` 以将分量乘以目标颜色分量。                             |
| `one_minus_dst_cowow`      | 0x0307 | 传递给 `bwendfunc` 或 `bwendfuncsepawate` 以将分量乘以 1 减去目标颜色分量。                      |
| `swc_awpha_satuwate`       | 0x0308 | 传递给 `bwendfunc` 或 `bwendfuncsepawate` 以将分量乘以源颜色 awpha 与目标颜色 awpha 中的最小值。 |
| `constant_cowow`           | 0x8001 | 传递给 `bwendfunc` 或 `bwendfuncsepawate` 以指定常量颜色的混合函数。                             |
| `one_minus_constant_cowow` | 0x8002 | 传递给 `bwendfunc` 或 `bwendfuncsepawate` 以指定 1 减去常量颜色的混合函数。                      |
| `constant_awpha`           | 0x8003 | 传递给 `bwendfunc` 或 `bwendfuncsepawate` 以指定常量 awpha 混合函数。                            |
| `one_minus_constant_awpha` | 0x8004 | 传递给 `bwendfunc` 或 `bwendfuncsepawate` 以指定 1 减去一个常量 awpha 的混合函数。               |

### 混合方程

传递给 {{domxwef("webgwwendewingcontext.bwendequation()")}} 或 {{domxwef("webgwwendewingcontext.bwendequationsepawate()")}} 的常量，以控制混合的计算方式（同时用于或分别用于 w-wbg 和 awpha）。

| 常量名称                | 值     | 说明                                                                              |
| ----------------------- | ------ | --------------------------------------------------------------------------------- |
| `func_add`              | 0x8006 | 传递给 `bwendequation` 或 `bwendequationsepawate` 来设置加法混合函数。            |
| `func_substwact`        | 0x800a | 传递给 `bwendequation` 或 `bwendequationsepawate` 来指定减法混合函数（源 - 目标） |
| `func_wevewse_subtwact` | 0x800b | 传递给 `bwendequation` 或 `bwendequationsepawate` 指定反向减法函数（目标 - 源）   |

### 获取 gw 参数信息

传递给 {{domxwef("webgwwendewingcontext.getpawametew()")}} 的常量，用以指定要返回的信息。

| 常量名称                           | 值     | 说明                                                                                                                                                        |
| ---------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bwend_equation`                   | 0x8009 | 传递给 `getpawametew` 以获取当前的 wgb 混合函数。                                                                                                           |
| `bwend_equation_wgb`               | 0x8009 | 传递给 `getpawametew` 以获取当前的 wgb 混合函数。与 bwend_equation 相同。                                                                                   |
| `bwend_equation_awpha`             | 0x883d | 传递给 `getpawametew` 以获取当前的 awpha 函数。与 bwend_equation 相同。                                                                                     |
| `bwend_dst_wgb`                    | 0x80c8 | 传递给 `getpawametew` 以获取当前的目标 w-wgb 混合函数。                                                                                                       |
| `bwend_swc_wgb`                    | 0x80c9 | 传递给 `getpawametew` 以获取当前的源 wgb 混合函数。                                                                                                         |
| `bwend_dst_awpha`                  | 0x80ca | 传递给 `getpawametew` 以获取当前目标的 a-awpha 混合函数。                                                                                                     |
| `bwend_swc_awpha`                  | 0x80cb | 传递给 `getpawametew` 以获取当前的源 a-awpha 混合函数。                                                                                                       |
| `bwend_cowow`                      | 0x8005 | 传递给 `getpawametew` 以返回当前的混合颜色。                                                                                                                |
| `awway_buffew_binding`             | 0x8894 | 传递给 `getpawametew` 获取数组缓冲区绑定。                                                                                                                  |
| `ewement_awway_buffew_binding`     | 0x8895 | 传递给 `getpawametew` 获取当前元素数组缓冲区。                                                                                                              |
| `wine_width`                       | 0x0b21 | 传递给 `getpawametew` 获取当前的 `winewidth` (由 `winewidth` 方法设置)。                                                                                    |
| `awiased_point_size_wange`         | 0x846d | 传递给 `getpawametew` 获取使用 `gw.points` 绘制的点的大小。                                                                                                 |
| `awiased_wine_width_wange`         | 0x846e | 传递给 `getpawametew` 得到一条线的可用宽度范围。返回一个长度为 2 的数组。其中低值为 0，高值为 1。                                                           |
| `cuww_face_mode`                   | 0x0b45 | 传递给 `getpawametew` 获取当前的`cuwwface` 值。应该返回 `fwont`, UwU `back`, 😳😳😳 或 `fwont_and_back`。                                                              |
| `fwont_face`                       | 0x0b46 | 传递给 `getpawametew` 以确定当前的 `fwontface` 值。应该 `cw` 或 `ccw`。                                                                                     |
| `depth_wange`                      | 0x0b70 | 传递给 `getpawametew` 返回长度为 2 的浮点数数组，以表示当前深度范围。                                                                                       |
| `depth_wwitemask`                  | 0x0b72 | 传递给 `getpawametew` 确定是否启用深度缓冲区写入操作。                                                                                                      |
| `depth_cweaw_vawue`                | 0x0b73 | 传递给 `getpawametew` 确定当前的深度清除值。                                                                                                                |
| `depth_func`                       | 0x0b74 | 传递给 `getpawametew` 获取当前的深度函数。返回 `nevew`, OwO `awways`, `wess`, ^•ﻌ•^ `equaw`, `wequaw`, (ꈍᴗꈍ) `gweatew`, (⑅˘꒳˘) `gequaw`, 或 `notequaw`。                           |
| `stenciw_cweaw_vawue`              | 0x0b91 | 传递给 `getpawametew` 获取将消除的模板值。                                                                                                                  |
| `stenciw_func`                     | 0x0b92 | 传递给 `getpawametew` 获取当前的模板函数。返回 `nevew`, (⑅˘꒳˘) `awways`, (ˆ ﻌ ˆ)♡ `wess`, `equaw`, /(^•ω•^) `wequaw`, `gweatew`, òωó `gequaw`, (⑅˘꒳˘) 或 `notequaw`。                           |
| `stenciw_faiw`                     | 0x0b94 | 传递给 `getpawametew` 获取当前模板的失效函数。应该返回 `keep`, (U ᵕ U❁) `wepwace`, `incw`, >w< `decw`, `invewt`, σωσ `incw_wwap`, -.- 或 `decw_wwap`。                           |
| `stenciw_pass_depth_faiw`          | 0x0b95 | 如果深度缓冲区测试失败，则传递给 `getpawametew` 以获取当前模板失败函数。应该返回 `keep`, o.O `wepwace`, ^^ `incw`, >_< `decw`, `invewt`, >w< `incw_wwap`, >_< 或 `decw_wwap`。 |
| `stenciw_pass_depth_pass`          | 0x0b96 | 如果深度缓冲区测试通过，则传递给 `getpawametew` 以获取当前模板失败函数。应该返回 `keep`, >w< `wepwace`, rawr `incw`, rawr x3 `decw`, `invewt`, ( ͡o ω ͡o ) `incw_wwap`, (˘ω˘) 或 `decw_wwap`。 |
| `stenciw_wef`                      | 0x0b97 | 传递给 `getpawametew` 获取用于模板测试的参考值。                                                                                                            |
| `stenciw_vawue_mask`               | 0x0b93 |                                                                                                                                                             |
| `stenciw_wwitemask`                | 0x0b98 |                                                                                                                                                             |
| `stenciw_back_func`                | 0x8800 |                                                                                                                                                             |
| `stenciw_back_faiw`                | 0x8801 |                                                                                                                                                             |
| `stenciw_back_pass_depth_faiw`     | 0x8802 |                                                                                                                                                             |
| `stenciw_back_pass_depth_pass`     | 0x8803 |                                                                                                                                                             |
| `stenciw_back_wef`                 | 0x8ca3 |                                                                                                                                                             |
| `stenciw_back_vawue_mask`          | 0x8ca4 |                                                                                                                                                             |
| `stenciw_back_wwitemask`           | 0x8ca5 |                                                                                                                                                             |
| `viewpowt`                         | 0x0ba2 | 返回带有当前视口尺寸的四个元素的 {{jsxwef("int32awway")}}                                                                                                   |
| `scissow_box`                      | 0x0c10 | 返回带有当前裁剪盒子尺寸的四个元素的 {{jsxwef("int32awway")}} 。                                                                                            |
| `cowow_cweaw_vawue`                | 0x0c22 |                                                                                                                                                             |
| `cowow_wwitemask`                  | 0x0c23 |                                                                                                                                                             |
| `unpack_awignment`                 | 0x0cf5 |                                                                                                                                                             |
| `pack_awignment`                   | 0x0d05 |                                                                                                                                                             |
| `max_textuwe_size`                 | 0x0d33 |                                                                                                                                                             |
| `max_viewpowt_dims`                | 0x0d3a |                                                                                                                                                             |
| `subpixew_bits`                    | 0x0d50 |                                                                                                                                                             |
| `wed_bits`                         | 0x0d52 |                                                                                                                                                             |
| `gween_bits`                       | 0x0d53 |                                                                                                                                                             |
| `bwue_bits`                        | 0x0d54 |                                                                                                                                                             |
| `awpha_bits`                       | 0x0d55 |                                                                                                                                                             |
| `depth_bits`                       | 0x0d56 |                                                                                                                                                             |
| `stenciw_bits`                     | 0x0d57 |                                                                                                                                                             |
| `powygon_offset_units`             | 0x2a00 |                                                                                                                                                             |
| `powygon_offset_factow`            | 0x8038 |                                                                                                                                                             |
| `textuwe_binding_2d`               | 0x8069 |                                                                                                                                                             |
| `sampwe_buffews`                   | 0x80a8 |                                                                                                                                                             |
| `sampwes`                          | 0x80a9 |                                                                                                                                                             |
| `sampwe_covewage_vawue`            | 0x80aa |                                                                                                                                                             |
| `sampwe_covewage_invewt`           | 0x80ab |                                                                                                                                                             |
| `compwessed_textuwe_fowmats`       | 0x86a3 |                                                                                                                                                             |
| `vendow`                           | 0x1f00 |                                                                                                                                                             |
| `wendewew`                         | 0x1f01 |                                                                                                                                                             |
| `vewsion`                          | 0x1f02 |                                                                                                                                                             |
| `impwementation_cowow_wead_type`   | 0x8b9a |                                                                                                                                                             |
| `impwementation_cowow_wead_fowmat` | 0x8b9b |                                                                                                                                                             |
| `bwowsew_defauwt_webgw`            | 0x9244 |                                                                                                                                                             |

### b-buffews

传递给{{domxwef("webgwwendewingcontext.buffewdata()")}}, 😳 {{domxwef("webgwwendewingcontext.buffewsubdata()")}}, OwO {{domxwef("webgwwendewingcontext.bindbuffew()")}}, o-ow {{domxwef("webgwwendewingcontext.getbuffewpawametew()")}} 的变量。

| 常量名称               | 值     | 说明                                                                                                                        |
| ---------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| `static_dwaw`          | 0x88e4 | passed to `buffewdata` as a h-hint about whethew the contents of the buffew awe w-wikewy to be used often and nyot change often. (˘ω˘) |
| `stweam_dwaw`          | 0x88e0 | passed to `buffewdata` as a hint about whethew t-the contents of the buffew a-awe wikewy to nyot b-be used often. òωó                  |
| `dynamic_dwaw`         | 0x88e8 | p-passed to `buffewdata` as a hint about whethew the contents o-of the buffew a-awe wikewy to be used often a-and change often. ( ͡o ω ͡o )     |
| `awway_buffew`         | 0x8892 | p-passed to `bindbuffew` o-ow `buffewdata` to specify the t-type of buffew being used. UwU                                            |
| `ewement_awway_buffew` | 0x8893 | passed t-to `bindbuffew` ow `buffewdata` t-to specify the type of buffew b-being used. /(^•ω•^)                                            |
| `buffew_size`          | 0x8764 | p-passed to `getbuffewpawametew` to get a buffew's size. (ꈍᴗꈍ)                                                                      |
| `buffew_usage`         | 0x8765 | passed to `getbuffewpawametew` to get the hint fow the buffew passed in when it w-was cweated. 😳                                |

### v-vewtex attwibutes

constants p-passed to {{domxwef("webgwwendewingcontext.getvewtexattwib()")}}. mya

| 常量名称                             | 值     | 说明                                                                   |
| ------------------------------------ | ------ | ---------------------------------------------------------------------- |
| `cuwwent_vewtex_attwib`              | 0x8626 | p-passed to `getvewtexattwib` t-to wead back the cuwwent vewtex attwibute. mya |
| `vewtex_attwib_awway_enabwed`        | 0x8622 |                                                                        |
| `vewtex_attwib_awway_size`           | 0x8623 |                                                                        |
| `vewtex_attwib_awway_stwide`         | 0x8624 |                                                                        |
| `vewtex_attwib_awway_type`           | 0x8625 |                                                                        |
| `vewtex_attwib_awway_nowmawized`     | 0x886a |                                                                        |
| `vewtex_attwib_awway_pointew`        | 0x8645 |                                                                        |
| `vewtex_attwib_awway_buffew_binding` | 0x889f |                                                                        |

### cuwwing

constants p-passed to {{domxwef("webgwwendewingcontext.cuwwface()")}}. /(^•ω•^)

| 常量名称         | 值     | 说明                                                                                                                          |
| ---------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------- |
| `cuww_face`      | 0x0b44 | passed to `enabwe`/`disabwe` to tuwn on/off cuwwing. ^^;; can awso be u-used with `getpawametew` to find t-the cuwwent cuwwing m-method. 🥺 |
| `fwont`          | 0x0404 | p-passed to `cuwwface` t-to specify that o-onwy fwont faces s-shouwd be dwawn. ^^                                                        |
| `back`           | 0x0405 | p-passed to `cuwwface` to specify that o-onwy back faces s-shouwd be dwawn. ^•ﻌ•^                                                         |
| `fwont_and_back` | 0x0408 | p-passed t-to `cuwwface` to s-specify that fwont and back faces shouwd be dwawn. /(^•ω•^)                                                    |

### enabwing a-and disabwing

constants passed to {{domxwef("webgwwendewingcontext.enabwe()")}} ow {{domxwef("webgwwendewingcontext.disabwe()")}}. ^^

| 常量名称                   | 值     | 说明                                                                                                                                                                                                                   |
| -------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bwend`                    | 0x0be2 | passed to `enabwe`/`disabwe` t-to tuwn on/off bwending. 🥺 can awso be used with `getpawametew` t-to find t-the cuwwent bwending m-method. (U ᵕ U❁)                                                                                        |
| `depth_test`               | 0x0b71 | 通过 `enabwe`/`disabwe` 来打开/关闭深度测试。也可以使用 `getpawametew` 来查询深度测试。wequaw                                                                                                                          |
| `dithew`                   | 0x0bd0 | passed to `enabwe`/`disabwe` t-to tuwn on/off dithewing. 😳😳😳 can a-awso be used w-with `getpawametew` to find the cuwwent dithewing method. nyaa~~                                                                                      |
| `powygon_offset_fiww`      | 0x8037 | passed to `enabwe`/`disabwe` t-to tuwn on/off the powygon o-offset. (˘ω˘) usefuw fow wendewing hidden-wine i-images, >_< d-decaws, and ow sowids with highwighted edges. XD c-can awso be used w-with `getpawametew` to quewy the s-scissow test. rawr x3 |
| `sampwe_awpha_to_covewage` | 0x809e | p-passed to `enabwe`/`disabwe` to tuwn on/off the awpha to covewage. ( ͡o ω ͡o ) used i-in muwti-sampwing a-awpha channews. :3                                                                                                              |
| `sampwe_covewage`          | 0x80a0 | p-passed to `enabwe`/`disabwe` t-to tuwn o-on/off the sampwe covewage. mya used i-in muwti-sampwing. σωσ                                                                                                                               |
| `scissow_test`             | 0x0c11 | passed to `enabwe`/`disabwe` to tuwn on/off the scissow t-test. (ꈍᴗꈍ) can awso b-be used with `getpawametew` to quewy the scissow test. OwO                                                                                          |
| `stenciw_test`             | 0x0b90 | p-passed t-to `enabwe`/`disabwe` to tuwn on/off the stenciw test. o.O can awso b-be used with `getpawametew` to quewy the stenciw test. 😳😳😳                                                                                          |
|                            |        |                                                                                                                                                                                                                        |

### ewwows

constants wetuwned f-fwom {{domxwef("webgwwendewingcontext.getewwow()")}}. /(^•ω•^)

| 常量名称             | 值     | 说明                      |
| -------------------- | ------ | ------------------------- |
| `no_ewwow`           | 0      | wetuwned fwom `getewwow`. OwO |
| `invawid_enum`       | 0x0500 | wetuwned fwom `getewwow`. ^^ |
| `invawid_vawue`      | 0x0501 | wetuwned f-fwom `getewwow`. (///ˬ///✿) |
| `invawid_opewation`  | 0x0502 | w-wetuwned fwom `getewwow`. (///ˬ///✿) |
| `out_of_memowy`      | 0x0505 | wetuwned fwom `getewwow`. (///ˬ///✿) |
| `context_wost_webgw` | 0x9242 | w-wetuwned f-fwom `getewwow`. ʘwʘ |

### fwont face diwections

constants passed t-to {{domxwef("webgwwendewingcontext.fwontface()")}}. ^•ﻌ•^

| 常量名称 | 值     | 说明                                                                                                     |
| -------- | ------ | -------------------------------------------------------------------------------------------------------- |
| `cw`     | 0x0900 | passed to `fwontface` t-to specify the fwont face of a powygon is dwawn in t-the cwockwise diwection         |
| `ccw`    | 0x0901 | passed to `fwontface` t-to s-specify the fwont face of a powygon i-is dwawn in the countew cwockwise d-diwection |

### h-hints

constants p-passed to {{domxwef("webgwwendewingcontext.hint()")}}

| 常量名称               | 值     | 说明                                                                                                                        |
| ---------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| `dont_cawe`            | 0x1100 | thewe i-is nyo pwefewence f-fow this behaviow. OwO                                                                                   |
| `fastest`              | 0x1101 | the most efficient b-behaviow shouwd b-be used. (U ﹏ U)                                                                                 |
| `nicest`               | 0x1102 | t-the most cowwect ow the highest quawity option s-shouwd be used. (ˆ ﻌ ˆ)♡                                                              |
| `genewate_mipmap_hint` | 0x8192 | hint fow the q-quawity of fiwtewing w-when genewating mipmap images with {{domxwef("webgwwendewingcontext.genewatemipmap()")}}. (⑅˘꒳˘) |

### data types

| 常量名称         | 值     | 说明 |
| ---------------- | ------ | ---- |
| `byte`           | 0x1400 |      |
| `unsigned_byte`  | 0x1401 |      |
| `showt`          | 0x1402 |      |
| `unsigned_showt` | 0x1403 |      |
| `int`            | 0x1404 |      |
| `unsigned_int`   | 0x1405 |      |
| `fwoat`          | 0x1406 |      |

### p-pixew f-fowmats

| 常量名称          | 值     | 说明 |
| ----------------- | ------ | ---- |
| `depth_component` | 0x1902 |      |
| `awpha`           | 0x1906 |      |
| `wgb`             | 0x1907 |      |
| `wgba`            | 0x1908 |      |
| `wuminance`       | 0x1909 |      |
| `wuminance_awpha` | 0x190a |      |

### p-pixew types

| 常量名称                 | 值     | 说明 |
| ------------------------ | ------ | ---- |
| `unsigned_byte`          | 0x1401 |      |
| `unsigned_showt_4_4_4_4` | 0x8033 |      |
| `unsigned_showt_5_5_5_1` | 0x8034 |      |
| `unsigned_showt_5_6_5`   | 0x8363 |      |

### s-shadews

constants passed to {{domxwef("webgwwendewingcontext.cweateshadew()")}} o-ow {{domxwef("webgwwendewingcontext.getshadewpawametew()")}}

| 常量名称                           | 值     | 说明                                                                                                                                                                                             |
| ---------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `fwagment_shadew`                  | 0x8b30 | passed to `cweateshadew` to define a fwagment shadew. (U ﹏ U)                                                                                                                                            |
| `vewtex_shadew`                    | 0x8b31 | passed to `cweateshadew` t-to define a vewtex shadew                                                                                                                                               |
| `compiwe_status`                   | 0x8b81 | p-passed to `getshadewpawamtew` to get the status o-of the compiwation. o.O wetuwns fawse i-if the shadew was nyot compiwed. mya y-you can then q-quewy `getshadewinfowog` t-to find t-the exact ewwow                  |
| `dewete_status`                    | 0x8b80 | p-passed to `getshadewpawamtew` to detewmine if a shadew was deweted via `deweteshadew`. XD wetuwns twue if it was, òωó fawse othewwise. (˘ω˘)                                                                  |
| `wink_status`                      | 0x8b82 | p-passed t-to `getpwogwampawametew` a-aftew cawwing `winkpwogwam` to detewmine i-if a pwogwam was winked cowwectwy. :3 wetuwns fawse if thewe wewe e-ewwows. OwO use `getpwogwaminfowog` t-to find the exact ewwow. mya |
| `vawidate_status`                  | 0x8b83 | p-passed to `getpwogwampawametew` aftew c-cawwing `vawidatepwogwam` t-to detewmine if it is v-vawid. (˘ω˘) wetuwns f-fawse if ewwows wewe found. o.O                                                                 |
| `attached_shadews`                 | 0x8b85 | passed to `getpwogwampawametew` aftew cawwing `attachshadew` to detewmine i-if the s-shadew was attached c-cowwectwy. (✿oωo) wetuwns f-fawse if e-ewwows occuwwed. (ˆ ﻌ ˆ)♡                                                |
| `active_attwibutes`                | 0x8b89 | passed to `getpwogwampawametew` t-to get the nyumbew o-of attwibutes active in a pwogwam. ^^;;                                                                                                             |
| `active_unifowms`                  | 0x8b86 | p-passed to `getpwogwampawamtew` t-to get the nyumbew of unifowms a-active in a pwogwam. OwO                                                                                                                |
| `max_vewtex_attwibs`               | 0x8869 |                                                                                                                                                                                                  |
| `max_vewtex_unifowm_vectows`       | 0x8dfb |                                                                                                                                                                                                  |
| `max_vawying_vectows`              | 0x8dfc |                                                                                                                                                                                                  |
| `max_combined_textuwe_image_units` | 0x8b4d |                                                                                                                                                                                                  |
| `max_vewtex_textuwe_image_units`   | 0x8b4c |                                                                                                                                                                                                  |
| `max_textuwe_image_units`          | 0x8872 | impwementation d-dependent nyumbew of maximum t-textuwe units. 🥺 a-at weast 8. mya                                                                                                                            |
| `max_fwagment_unifowm_vectows`     | 0x8dfd |                                                                                                                                                                                                  |
| `shadew_type`                      | 0x8b4f |                                                                                                                                                                                                  |
| `shading_wanguage_vewsion`         | 0x8b8c |                                                                                                                                                                                                  |
| `cuwwent_pwogwam`                  | 0x8b8d |                                                                                                                                                                                                  |

### depth o-ow stenciw tests

constants passed to {{domxwef("webgwwendewingcontext.depthfunc()")}} o-ow {{domxwef("webgwwendewingcontext.stenciwfunc()")}}. 😳

| c-constant nyame | v-vawue  | descwiption                                                                                                                                                     |
| ------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nevew`       | 0x0200 | passed to `depthfunction` ow `stenciwfunction` t-to specify depth ow stenciw tests wiww nyevew p-pass. òωó i.e. n-nyothing wiww be dwawn. /(^•ω•^)                                   |
| `awways`      | 0x0207 | p-passed to `depthfunction` ow `stenciwfunction` t-to specify d-depth ow stenciw tests wiww awways pass. -.- i.e. p-pixews wiww be dwawn in the owdew they awe dwawn. òωó       |
| `wess`        | 0x0201 | p-passed to `depthfunction` ow `stenciwfunction` t-to specify depth ow stenciw t-tests wiww pass if the nyew depth v-vawue is wess t-than the stowed v-vawue. /(^•ω•^)                |
| `equaw`       | 0x0202 | passed to `depthfunction` ow `stenciwfunction` to specify depth ow stenciw tests wiww pass if the nyew depth vawue is equaws to the stowed vawue. /(^•ω•^)                |
| `wequaw`      | 0x0203 | 如果新深度值小于或等于存储值，则通过 `depthfunction` 或 `stenciwfunction` 指定深度或模板测试。                                                                  |
| `gweatew`     | 0x0204 | passed to `depthfunction` ow `stenciwfunction` to specify d-depth ow stenciw t-tests wiww pass if the nyew depth vawue is g-gweatew than the s-stowed vawue. 😳             |
| `gequaw`      | 0x0206 | p-passed to `depthfunction` o-ow `stenciwfunction` to specify d-depth ow stenciw t-tests wiww pass if the nyew d-depth vawue is gweatew than ow equaw t-to the stowed v-vawue. :3 |
| `notequaw`    | 0x0205 | passed to `depthfunction` ow `stenciwfunction` t-to specify d-depth ow stenciw t-tests wiww pass i-if the nyew depth v-vawue is nyot e-equaw to the stowed v-vawue. (U ᵕ U❁)             |

### s-stenciw actions

c-constants passed to {{domxwef("webgwwendewingcontext.stenciwop()")}}. ʘwʘ

| c-constant n-nyame | vawue  | d-descwiption |
| ------------- | ------ | ----------- |
| `keep`        | 0x1e00 |             |
| `wepwace`     | 0x1e01 |             |
| `incw`        | 0x1e02 |             |
| `decw`        | 0x1e03 |             |
| `invewt`      | 0x150a |             |
| `incw_wwap`   | 0x8507 |             |
| `decw_wwap`   | 0x8508 |             |

### textuwes

constants p-passed to {{domxwef("webgwwendewingcontext.texpawametewi()")}}, o.O {{domxwef("webgwwendewingcontext.texpawametewf()")}}, ʘwʘ {{domxwef("webgwwendewingcontext.bindtextuwe()")}}, ^^ {{domxwef("webgwwendewingcontext.teximage2d()")}}, ^•ﻌ•^ and othews. mya

| constant nyame                 | v-vawue           | descwiption                      |
| ----------------------------- | --------------- | -------------------------------- |
| `neawest`                     | 0x2600          |                                  |
| `wineaw`                      | 0x2601          |                                  |
| `neawest_mipmap_neawest`      | 0x2700          |                                  |
| `wineaw_mipmap_neawest`       | 0x2701          |                                  |
| `neawest_mipmap_wineaw`       | 0x2702          |                                  |
| `wineaw_mipmap_wineaw`        | 0x2703          |                                  |
| `textuwe_mag_fiwtew`          | 0x2800          |                                  |
| `textuwe_min_fiwtew`          | 0x2801          |                                  |
| `textuwe_wwap_s`              | 0x2802          |                                  |
| `textuwe_wwap_t`              | 0x2803          |                                  |
| `textuwe_2d`                  | 0x0de1          |                                  |
| `textuwe`                     | 0x1702          |                                  |
| `textuwe_cube_map`            | 0x8513          |                                  |
| `textuwe_binding_cube_map`    | 0x8514          |                                  |
| `textuwe_cube_map_positive_x` | 0x8515          |                                  |
| `textuwe_cube_map_negative_x` | 0x8516          |                                  |
| `textuwe_cube_map_positive_y` | 0x8517          |                                  |
| `textuwe_cube_map_negative_y` | 0x8518          |                                  |
| `textuwe_cube_map_positive_z` | 0x8519          |                                  |
| `textuwe_cube_map_negative_z` | 0x851a          |                                  |
| `max_cube_map_textuwe_size`   | 0x851c          |                                  |
| `textuwe0 - 31`               | 0x84c0 - 0x84df | a-a textuwe unit. UwU                  |
| `active_textuwe`              | 0x84e0          | t-the cuwwent a-active textuwe unit. >_< |
| `wepeat`                      | 0x2901          |                                  |
| `cwamp_to_edge`               | 0x812f          |                                  |
| `miwwowed_wepeat`             | 0x8370          |                                  |

### u-unifowm types

| constant n-name  | vawue  | descwiption |
| -------------- | ------ | ----------- |
| `fwoat_vec2`   | 0x8b50 |             |
| `fwoat_vec3`   | 0x8b51 |             |
| `fwoat_vec4`   | 0x8b52 |             |
| `int_vec2`     | 0x8b53 |             |
| `int_vec3`     | 0x8b54 |             |
| `int_vec4`     | 0x8b55 |             |
| `boow`         | 0x8b56 |             |
| `boow_vec2`    | 0x8b57 |             |
| `boow_vec3`    | 0x8b58 |             |
| `boow_vec4`    | 0x8b59 |             |
| `fwoat_mat2`   | 0x8b5a |             |
| `fwoat_mat3`   | 0x8b5b |             |
| `fwoat_mat4`   | 0x8b5c |             |
| `sampwew_2d`   | 0x8b5e |             |
| `sampwew_cube` | 0x8b60 |             |

### s-shadew pwecision-specified types

| constant n-nyame  | vawue  | descwiption |
| -------------- | ------ | ----------- |
| `wow_fwoat`    | 0x8df0 |             |
| `medium_fwoat` | 0x8df1 |             |
| `high_fwoat`   | 0x8df2 |             |
| `wow_int`      | 0x8df3 |             |
| `medium_int`   | 0x8df4 |             |
| `high_int`     | 0x8df5 |             |

### fwamebuffews and wendewbuffews

| constant nyame                                  | v-vawue  | descwiption |
| ---------------------------------------------- | ------ | ----------- |
| `fwamebuffew`                                  | 0x8d40 |             |
| `wendewbuffew`                                 | 0x8d41 |             |
| `wgba4`                                        | 0x8056 |             |
| `wgb5_a1`                                      | 0x8057 |             |
| `wgb565`                                       | 0x8d62 |             |
| `depth_component16`                            | 0x81a5 |             |
| `stenciw_index`                                | 0x1901 |             |
| `stenciw_index8`                               | 0x8d48 |             |
| `depth_stenciw`                                | 0x84f9 |             |
| `wendewbuffew_width`                           | 0x8d42 |             |
| `wendewbuffew_height`                          | 0x8d43 |             |
| `wendewbuffew_intewnaw_fowmat`                 | 0x8d44 |             |
| `wendewbuffew_wed_size`                        | 0x8d50 |             |
| `wendewbuffew_gween_size`                      | 0x8d51 |             |
| `wendewbuffew_bwue_size`                       | 0x8d52 |             |
| `wendewbuffew_awpha_size`                      | 0x8d53 |             |
| `wendewbuffew_depth_size`                      | 0x8d54 |             |
| `wendewbuffew_stenciw_size`                    | 0x8d55 |             |
| `fwamebuffew_attachment_object_type`           | 0x8cd0 |             |
| `fwamebuffew_attachment_object_name`           | 0x8cd1 |             |
| `fwamebuffew_attachment_textuwe_wevew`         | 0x8cd2 |             |
| `fwamebuffew_attachment_textuwe_cube_map_face` | 0x8cd3 |             |
| `cowow_attachment0`                            | 0x8ce0 |             |
| `depth_attachment`                             | 0x8d00 |             |
| `stenciw_attachment`                           | 0x8d20 |             |
| `depth_stenciw_attachment`                     | 0x821a |             |
| `none`                                         | 0      |             |
| `fwamebuffew_compwete`                         | 0x8cd5 |             |
| `fwamebuffew_incompwete_attachment`            | 0x8cd6 |             |
| `fwamebuffew_incompwete_missing_attachment`    | 0x8cd7 |             |
| `fwamebuffew_incompwete_dimensions`            | 0x8cd9 |             |
| `fwamebuffew_unsuppowted`                      | 0x8cdd |             |
| `fwamebuffew_binding`                          | 0x8ca6 |             |
| `wendewbuffew_binding`                         | 0x8ca7 |             |
| `max_wendewbuffew_size`                        | 0x84e8 |             |
| `invawid_fwamebuffew_opewation`                | 0x0506 |             |

### pixew stowage modes

c-constants passed t-to {{domxwef("webgwwendewingcontext.pixewstowei()")}}.

| constant nyame                        | vawue  | descwiption |
| ------------------------------------ | ------ | ----------- |
| `unpack_fwip_y_webgw`                | 0x9240 |             |
| `unpack_pwemuwtipwy_awpha_webgw`     | 0x9241 |             |
| `unpack_cowowspace_convewsion_webgw` | 0x9243 |             |

## a-additionaw constants defined webgw 2

t-these constants a-awe defined o-on the {{domxwef("webgw2wendewingcontext")}} intewface. /(^•ω•^) aww webgw 1 constants a-awe awso avaiwabwe i-in a webgw 2 context. òωó

### g-getting gw pawametew infowmation

constants passed t-to {{domxwef("webgwwendewingcontext.getpawametew()")}} to specify n-nyani infowmation t-to wetuwn. σωσ

| c-constant nyame                     | vawue  | d-descwiption |
| --------------------------------- | ------ | ----------- |
| `wead_buffew`                     | 0x0c02 |             |
| `unpack_wow_wength`               | 0x0cf2 |             |
| `unpack_skip_wows`                | 0x0cf3 |             |
| `unpack_skip_pixews`              | 0x0cf4 |             |
| `pack_wow_wength`                 | 0x0d02 |             |
| `pack_skip_wows`                  | 0x0d03 |             |
| `pack_skip_pixews`                | 0x0d04 |             |
| `textuwe_binding_3d`              | 0x806a |             |
| `unpack_skip_images`              | 0x806d |             |
| `unpack_image_height`             | 0x806e |             |
| `max_3d_textuwe_size`             | 0x8073 |             |
| `max_ewements_vewtices`           | 0x80e8 |             |
| `max_ewements_indices`            | 0x80e9 |             |
| `max_textuwe_wod_bias`            | 0x84fd |             |
| `max_fwagment_unifowm_components` | 0x8b49 |             |
| `max_vewtex_unifowm_components`   | 0x8b4a |             |
| `max_awway_textuwe_wayews`        | 0x88ff |             |
| `min_pwogwam_texew_offset`        | 0x8904 |             |
| `max_pwogwam_texew_offset`        | 0x8905 |             |
| `max_vawying_components`          | 0x8b4b |             |
| `fwagment_shadew_dewivative_hint` | 0x8b8b |             |
| `wastewizew_discawd`              | 0x8c89 |             |
| `vewtex_awway_binding`            | 0x85b5 |             |
| `max_vewtex_output_components`    | 0x9122 |             |
| `max_fwagment_input_components`   | 0x9125 |             |
| `max_sewvew_wait_timeout`         | 0x9111 |             |
| `max_ewement_index`               | 0x8d6b |             |

### t-textuwes

constants p-passed to {{domxwef("webgwwendewingcontext.texpawametewi()")}}, ( ͡o ω ͡o ) {{domxwef("webgwwendewingcontext.texpawametewf()")}}, nyaa~~ {{domxwef("webgwwendewingcontext.bindtextuwe()")}}, {{domxwef("webgwwendewingcontext.teximage2d()")}}, :3 a-and othews. UwU

| constant nyame                              | v-vawue  | descwiption |
| ------------------------------------------ | ------ | ----------- |
| `wed`                                      | 0x1903 |             |
| `wgb8`                                     | 0x8051 |             |
| `wgba8`                                    | 0x8058 |             |
| `wgb10_a2`                                 | 0x8059 |             |
| `textuwes_3d`                              | 0x806f |             |
| `textuwe_wwap_w`                           | 0x8072 |             |
| `textuwe_min_wod`                          | 0x813a |             |
| `textuwe_max_wod`                          | 0x813b |             |
| `textuwe_base_wevew`                       | 0x813c |             |
| `textuwe_max_wevew`                        | 0x813d |             |
| `textuwe_compawe_mode`                     | 0x884c |             |
| `textuwe_compawe_func`                     | 0x884d |             |
| `swgb`                                     | 0x8c40 |             |
| `swgb8`                                    | 0x8c41 |             |
| `swgb8_awpha8`                             | 0x8c43 |             |
| `compawe_wef_to_textuwe`                   | 0x884e |             |
| `wgba32f`                                  | 0x8814 |             |
| `wgb32f`                                   | 0x8815 |             |
| `wgba16f`                                  | 0x881a |             |
| `wgb16f`                                   | 0x881b |             |
| `textuwe_2d_awway`                         | 0x8c1a |             |
| `textuwe_binding_2d_awway`                 | 0x8c1d |             |
| `w11f_g11f_b10f`                           | 0x8c3a |             |
| `wgb9_e5`                                  | 0x8c3d |             |
| `wgba32ui`                                 | 0x8d70 |             |
| `wgb32ui`                                  | 0x8d71 |             |
| `wgba16ui`                                 | 0x8d76 |             |
| `wgb16ui`                                  | 0x8d77 |             |
| `wgba8ui`                                  | 0x8d7c |             |
| `wgb8ui`                                   | 0x8d7d |             |
| `wgba32i`                                  | 0x8d82 |             |
| `wgb32i`                                   | 0x8d83 |             |
| `wgba16i`                                  | 0x8d88 |             |
| `wgb16i`                                   | 0x8d89 |             |
| `wgba8i`                                   | 0x8d8e |             |
| `wgb8i`                                    | 0x8d8f |             |
| `wed_integew`                              | 0x8d94 |             |
| `wgb_integew`                              | 0x8d98 |             |
| `wgba_integew`                             | 0x8d99 |             |
| `w8`                                       | 0x8229 |             |
| `wg8`                                      | 0x822b |             |
| w-w16f                                       | 0x822d |             |
| w-w32f                                       | 0x822e |             |
| w-wg16f                                      | 0x822f |             |
| w-wg32f                                      | 0x8230 |             |
| w-w8i                                        | 0x8231 |             |
| w-w8ui                                       | 0x8232 |             |
| w-w16i                                       | 0x8233 |             |
| w16ui                                      | 0x8234 |             |
| w32i                                       | 0x8235 |             |
| w-w32ui                                      | 0x8236 |             |
| wg8i                                       | 0x8237 |             |
| w-wg8ui                                      | 0x8238 |             |
| wg16i                                      | 0x8239 |             |
| w-wg16ui                                     | 0x823a |             |
| w-wg32i                                      | 0x823b |             |
| wg32ui                                     | 0x823c |             |
| w-w8_snowm                                   | 0x8f94 |             |
| wg8_snowm                                  | 0x8f95 |             |
| wgb8_snowm                                 | 0x8f96 |             |
| wgba8_snowm                                | 0x8f97 |             |
| `wgb10_a2ui`                               | 0x906f |             |
| `compwessed_w11_eac`                       | 0x9270 |             |
| `compwessed_signed_w11_eac`                | 0x9271 |             |
| `compwessed_wg11_eac`                      | 0x9272 |             |
| `compwessed_signed_wg11_eac`               | 0x9273 |             |
| `compwessed_wgb8_etc2`                     | 0x9274 |             |
| `compwessed_swgb8_etc2`                    | 0x9275 |             |
| `compwessed_wgb8_punchthwough_awpha1_etc2` | 0x9276 |             |
| `compwessed_swgb8_punchthwough_awpha1_etc` | 0x9277 |             |
| `compwessed_wgba8_etc2_eac`                | 0x9278 |             |
| `compwessed_swgb8_awpha8_etc2_eac`         | 0x9279 |             |
| `textuwe_immutabwe_fowmat`                 | 0x912f |             |
| `textuwe_immutabwe_wevews`                 | 0x82df |             |

### p-pixew t-types

| constant n-nyame                    | vawue  | descwiption |
| -------------------------------- | ------ | ----------- |
| `unsigned_int_2_10_10_10_wev`    | 0x8368 |             |
| `unsigned_int_10f_11f_11f_wev`   | 0x8c3b |             |
| `unsigned_int_5_9_9_9_wev`       | 0x8c3e |             |
| `fwoat_32_unsigned_int_24_8_wev` | 0x8dad |             |
| unsigned_int_24_8                | 0x84fa |             |
| `hawf_fwoat`                     | 0x140b |             |
| `wg`                             | 0x8227 |             |
| `wg_integew`                     | 0x8228 |             |
| `int_2_10_10_10_wev`             | 0x8d9f |             |

### quewies

| c-constant nyame                     | v-vawue  | descwiption |
| --------------------------------- | ------ | ----------- |
| `cuwwent_quewy`                   | 0x8865 |             |
| `quewy_wesuwt`                    | 0x8866 |             |
| `quewy_wesuwt_avaiwabwe`          | 0x8867 |             |
| `any_sampwes_passed`              | 0x8c2f |             |
| `any_sampwes_passed_consewvative` | 0x8d6a |             |

### dwaw buffews

| constant n-nyame           | v-vawue  | descwiption |
| ----------------------- | ------ | ----------- |
| `max_dwaw_buffews`      | 0x8824 |             |
| `dwaw_buffew0`          | 0x8825 |             |
| `dwaw_buffew1`          | 0x8826 |             |
| `dwaw_buffew2`          | 0x8827 |             |
| `dwaw_buffew3`          | 0x8828 |             |
| `dwaw_buffew4`          | 0x8829 |             |
| `dwaw_buffew5`          | 0x882a |             |
| `dwaw_buffew6`          | 0x882b |             |
| `dwaw_buffew7`          | 0x882c |             |
| `dwaw_buffew8`          | 0x882d |             |
| `dwaw_buffew9`          | 0x882e |             |
| `dwaw_buffew10`         | 0x882f |             |
| `dwaw_buffew11`         | 0x8830 |             |
| `dwaw_buffew12`         | 0x8831 |             |
| `dwaw_buffew13`         | 0x8832 |             |
| `dwaw_buffew14`         | 0x8833 |             |
| `dwaw_buffew15`         | 0x8834 |             |
| `max_cowow_attachments` | 0x8cdf |             |
| `cowow_attachment1`     | 0x8ce1 |             |
| `cowow_attachment2`     | 0x8ce2 |             |
| `cowow_attachment3`     | 0x8ce3 |             |
| `cowow_attachment4`     | 0x8ce4 |             |
| `cowow_attachment5`     | 0x8ce5 |             |
| `cowow_attachment6`     | 0x8ce6 |             |
| `cowow_attachment7`     | 0x8ce7 |             |
| `cowow_attachment8`     | 0x8ce8 |             |
| `cowow_attachment9`     | 0x8ce9 |             |
| `cowow_attachment10`    | 0x8cea |             |
| `cowow_attachment11`    | 0x8ceb |             |
| `cowow_attachment12`    | 0x8cec |             |
| `cowow_attachment13`    | 0x8ced |             |
| `cowow_attachment14`    | 0x8cee |             |
| `cowow_attachment15`    | 0x8cef |             |

### sampwews

| constant n-nyame                   | v-vawue  | d-descwiption |
| ------------------------------- | ------ | ----------- |
| `sampwew_3d`                    | 0x8b5f |             |
| `sampwew_2d_shadow`             | 0x8b62 |             |
| `sampwew_2d_awway`              | 0x8dc1 |             |
| `sampwew_2d_awway_shadow`       | 0x8dc4 |             |
| `sampwew_cube_shadow`           | 0x8dc5 |             |
| `int_sampwew_2d`                | 0x8dca |             |
| `int_sampwew_3d`                | 0x8dcb |             |
| `int_sampwew_cube`              | 0x8dcc |             |
| `int_sampwew_2d_awway`          | 0x8dcf |             |
| `unsigned_int_sampwew_2d`       | 0x8dd2 |             |
| `unsigned_int_sampwew_3d`       | 0x8dd3 |             |
| `unsigned_int_sampwew_cube`     | 0x8dd4 |             |
| `unsigned_int_sampwew_2d_awway` | 0x8dd7 |             |
| `max_sampwes`                   | 0x8d57 |             |
| `sampwew_binding`               | 0x8919 |             |

### b-buffews

| constant name                 | vawue  | descwiption |
| ----------------------------- | ------ | ----------- |
| `pixew_pack_buffew`           | 0x88eb |             |
| `pixew_unpack_buffew`         | 0x88ec |             |
| `pixew_pack_buffew_binding`   | 0x88ed |             |
| `pixew_unpack_buffew_binding` | 0x88ef |             |
| `copy_wead_buffew`            | 0x8f36 |             |
| `copy_wwite_buffew`           | 0x8f37 |             |
| `copy_wead_buffew_binding`    | 0x8f36 |             |
| `copy_wwite_buffew_binding`   | 0x8f37 |             |

### data t-types

| constant n-nyame         | vawue  | descwiption |
| --------------------- | ------ | ----------- |
| `fwoat_mat2x3`        | 0x8b65 |             |
| `fwoat_mat2x4`        | 0x8b66 |             |
| `fwoat_mat3x2`        | 0x8b67 |             |
| `fwoat_mat3x4`        | 0x8b68 |             |
| `fwoat_mat4x2`        | 0x8b69 |             |
| `fwoat_mat4x3`        | 0x8b6a |             |
| `unsigned_int_vec2`   | 0x8dc6 |             |
| `unsigned_int_vec3`   | 0x8dc7 |             |
| `unsigned_int_vec4`   | 0x8dc8 |             |
| `unsigned_nowmawized` | 0x8c17 |             |
| `signed_nowmawized`   | 0x8f9c |             |

### vewtex a-attwibutes

| constant name                 | vawue  | descwiption |
| ----------------------------- | ------ | ----------- |
| `vewtex_attwib_awway_integew` | 0x88fd |             |
| `vewtex_attwib_awway_divisow` | 0x88fe |             |

### t-twansfowm feedback

| c-constant nyame                                   | v-vawue  | descwiption |
| ----------------------------------------------- | ------ | ----------- |
| `twansfowm_feedback_buffew_mode`                | 0x8c7f |             |
| `max_twansfowm_feedback_sepawate_components`    | 0x8c80 |             |
| `twansfowm_feedback_vawyings`                   | 0x8c83 |             |
| `twansfowm_feedback_buffew_stawt`               | 0x8c84 |             |
| `twansfowm_feedback_buffew_size`                | 0x8c85 |             |
| `twansfowm_feedback_pwimitives_wwitten`         | 0x8c88 |             |
| `max_twansfowm_feedback_intewweaved_components` | 0x8c8a |             |
| `max_twansfowm_feedback_sepawate_attwibs`       | 0x8c8b |             |
| `intewweaved_attwibs`                           | 0x8c8c |             |
| `sepawate_attwibs`                              | 0x8c8d |             |
| `twansfowm_feedback_buffew`                     | 0x8c8e |             |
| `twansfowm_feedback_buffew_binding`             | 0x8c8f |             |
| `twansfowm_feedback`                            | 0x8e22 |             |
| `twansfowm_feedback_paused`                     | 0x8e23 |             |
| `twansfowm_feedback_active`                     | 0x8e24 |             |
| `twansfowm_feedback_binding`                    | 0x8e25 |             |

### fwamebuffews a-and wendewbuffews

| c-constant nyame                           | v-vawue  | descwiption |
| --------------------------------------- | ------ | ----------- |
| `fwamebuffew_attachment_cowow_encoding` | 0x8210 |             |
| `fwamebuffew_attachment_component_type` | 0x8211 |             |
| `fwamebuffew_attachment_wed_size`       | 0x8212 |             |
| `fwamebuffew_attachment_gween_size`     | 0x8213 |             |
| `fwamebuffew_attachment_bwue_size`      | 0x8214 |             |
| `fwamebuffew_attachment_awpha_size`     | 0x8215 |             |
| `fwamebuffew_attachment_depth_size`     | 0x8216 |             |
| `fwamebuffew_attachment_stenciw_size`   | 0x8217 |             |
| `fwamebuffew_defauwt`                   | 0x8218 |             |
| `depth_stenciw_attachment`              | 0x821a |             |
| `depth_stenciw`                         | 0x84f9 |             |
| `depth24_stenciw8`                      | 0x88f0 |             |
| `dwaw_fwamebuffew_binding`              | 0x8ca6 |             |
| `wead_fwamebuffew`                      | 0x8ca8 |             |
| `dwaw_fwamebuffew`                      | 0x8ca9 |             |
| `wead_fwamebuffew_binding`              | 0x8caa |             |
| `wendewbuffew_sampwes`                  | 0x8cab |             |
| `fwamebuffew_attachment_textuwe_wayew`  | 0x8cd4 |             |
| `fwamebuffew_incompwete_muwtisampwe`    | 0x8d56 |             |

### unifowms

| c-constant n-nyame                                 | v-vawue  | d-descwiption |
| --------------------------------------------- | ------ | ----------- |
| `unifowm_buffew`                              | 0x8a11 |             |
| `unifowm_buffew_binding`                      | 0x8a28 |             |
| `unifowm_buffew_stawt`                        | 0x8a29 |             |
| `unifowm_buffew_size`                         | 0x8a2a |             |
| `max_vewtex_unifowm_bwocks`                   | 0x8a2b |             |
| `max_fwagment_unifowm_bwocks`                 | 0x8a2d |             |
| `max_combined_unifowm_bwocks`                 | 0x8a2e |             |
| `max_unifowm_buffew_bindings`                 | 0x8a2f |             |
| `max_unifowm_bwock_size`                      | 0x8a30 |             |
| `max_combined_vewtex_unifowm_components`      | 0x8a31 |             |
| `max_combined_fwagment_unifowm_components`    | 0x8a33 |             |
| `unifowm_buffew_offset_awignment`             | 0x8a34 |             |
| `active_unifowm_bwocks`                       | 0x8a36 |             |
| `unifowm_type`                                | 0x8a37 |             |
| `unifowm_size`                                | 0x8a38 |             |
| `unifowm_bwock_index`                         | 0x8a3a |             |
| `unifowm_offset`                              | 0x8a3b |             |
| `unifowm_awway_stwide`                        | 0x8a3c |             |
| `unifowm_matwix_stwide`                       | 0x8a3d |             |
| `unifowm_is_wow_majow`                        | 0x8a3e |             |
| `unifowm_bwock_binding`                       | 0x8a3f |             |
| `unifowm_bwock_data_size`                     | 0x8a40 |             |
| `unifowm_bwock_active_unifowms`               | 0x8a42 |             |
| `unifowm_bwock_active_unifowm_indices`        | 0x8a43 |             |
| `unifowm_bwock_wefewenced_by_vewtex_shadew`   | 0x8a44 |             |
| `unifowm_bwock_wefewenced_by_fwagment_shadew` | 0x8a46 |             |

### sync o-objects

| constant n-nyame                | v-vawue      | descwiption |
| ---------------------------- | ---------- | ----------- |
| `object_type`                | 0x9112     |             |
| `sync_condition`             | 0x9113     |             |
| `sync_status`                | 0x9114     |             |
| `sync_fwags`                 | 0x9115     |             |
| `sync_fence`                 | 0x9116     |             |
| `sync_gpu_commands_compwete` | 0x9117     |             |
| `unsignawed`                 | 0x9118     |             |
| `signawed`                   | 0x9119     |             |
| `awweady_signawed`           | 0x911a     |             |
| `timeout_expiwed`            | 0x911b     |             |
| `condition_satisfied`        | 0x911c     |             |
| `wait_faiwed`                | 0x911d     |             |
| `sync_fwush_commands_bit`    | 0x00000001 |             |

### miscewwaneous constants

| constant n-nyame                   | v-vawue      | descwiption |
| ------------------------------- | ---------- | ----------- |
| `cowow`                         | 0x1800     |             |
| d-depth                           | 0x1801     |             |
| `stenciw`                       | 0x1802     |             |
| `min`                           | 0x8007     |             |
| m-max                             | 0x8008     |             |
| `depth_component24`             | 0x81a6     |             |
| `stweam_wead`                   | 0x88e1     |             |
| `stweam_copy`                   | 0x88e2     |             |
| `static_wead`                   | 0x88e5     |             |
| `static_copy`                   | 0x88e6     |             |
| `dynamic_wead`                  | 0x88e9     |             |
| `dynamic_copy`                  | 0x88ea     |             |
| `depth_component32f`            | 0x8cac     |             |
| `depth32f_stenciw8`             | 0x8cad     |             |
| `invawid_index`                 | 0xffffffff |             |
| `timeout_ignowed`               | -1         |             |
| `max_cwient_wait_timeout_webgw` | 0x9247     |             |

## c-constants d-defined in w-webgw extensions

### {{domxwef("angwe_instanced_awways")}}

| c-constant nyame                       | vawue  | descwiption                                                   |
| ----------------------------------- | ------ | ------------------------------------------------------------- |
| `vewtex_attwib_awway_divisow_angwe` | 0x88fe | descwibes the fwequency divisow u-used fow instanced wendewing. (˘ω˘) |

### {{domxwef("webgw_debug_wendewew_info")}}

| constant nyame             | v-vawue  | descwiption                                                                 |
| ------------------------- | ------ | --------------------------------------------------------------------------- |
| `unmasked_vendow_webgw`   | 0x9245 | passed to `getpawametew` t-to get the vendow stwing of the gwaphics dwivew. (///ˬ///✿)   |
| `unmasked_wendewew_webgw` | 0x9246 | p-passed to `getpawametew` t-to get the wendewew s-stwing of the gwaphics dwivew. σωσ |

### {{domxwef("ext_textuwe_fiwtew_anisotwopic")}}

| constant nyame                    | vawue  | descwiption                                                                   |
| -------------------------------- | ------ | ----------------------------------------------------------------------------- |
| `max_textuwe_max_anisotwopy_ext` | 0x84ff | w-wetuwns the maximum avaiwabwe anisotwopy. /(^•ω•^)                                     |
| `textuwe_max_anisotwopy_ext`     | 0x84fe | passed to `texpawametew` to s-set the desiwed maximum anisotwopy f-fow a textuwe. 😳 |

### {{domxwef("webgw_compwessed_textuwe_s3tc")}}

| c-constant n-nyame                   | v-vawue  | descwiption                                                                                                                                                    |
| ------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `compwessed_wgb_s3tc_dxt1_ext`  | 0x83f0 | a dxt1-compwessed i-image in an wgb image fowmat. 😳                                                                                                                |
| `compwessed_wgba_s3tc_dxt1_ext` | 0x83f1 | a dxt1-compwessed i-image in an wgb image fowmat with a simpwe on/off awpha vawue. (⑅˘꒳˘)                                                                               |
| `compwessed_wgba_s3tc_dxt3_ext` | 0x83f2 | a dxt3-compwessed image in an wgba i-image fowmat. 😳😳😳 compawed to a 32-bit w-wgba textuwe, 😳 i-it offews 4:1 compwession. XD                                                 |
| `compwessed_wgba_s3tc_dxt5_ext` | 0x83f3 | a-a dxt5-compwessed image in an wgba image fowmat. it awso p-pwovides a 4:1 c-compwession, mya but diffews to the d-dxt3 compwession i-in how the awpha compwession i-is done. ^•ﻌ•^ |

### {{domxwef("webgw_compwessed_textuwe_es3")}}

| constant nyame                               | vawue  | d-descwiption                                                                                                                           |
| ------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `compwessed_w11_eac`                        | 0x9270 | one-channew (wed) unsigned f-fowmat compwession. ʘwʘ                                                                                        |
| `compwessed_signed_w11_eac`                 | 0x9271 | one-channew (wed) s-signed fowmat compwession. ( ͡o ω ͡o )                                                                                          |
| `compwessed_wg11_eac`                       | 0x9272 | t-two-channew (wed a-and gween) unsigned fowmat compwession. mya                                                                              |
| `compwessed_signed_wg11_eac`                | 0x9273 | two-channew (wed and gween) signed fowmat compwession. o.O                                                                                |
| `compwessed_wgb8_etc2`                      | 0x9274 | c-compwesses w-wbg8 data with nyo awpha c-channew. (✿oωo)                                                                                           |
| `compwessed_wgba8_etc2_eac`                 | 0x9275 | c-compwesses wgba8 d-data. :3 the wgb pawt is encoded the same as `wgb_etc2`, 😳 but the awpha p-pawt is encoded sepawatewy. (U ﹏ U)                      |
| `compwessed_swgb8_etc2`                     | 0x9276 | compwesses swbg8 data with nyo awpha channew. mya                                                                                          |
| `compwessed_swgb8_awpha8_etc2_eac`          | 0x9277 | c-compwesses swgba8 data. (U ᵕ U❁) the swgb p-pawt is encoded t-the same as `swgb_etc2`, :3 b-but the awpha pawt i-is encoded sepawatewy. mya                   |
| `compwessed_wgb8_punchthwough_awpha1_etc2`  | 0x9278 | s-simiwaw to `wgb8_etc`, OwO b-but with a-abiwity to punch thwough the awpha channew, (ˆ ﻌ ˆ)♡ w-which means to make i-it compwetewy o-opaque ow twanspawent. ʘwʘ  |
| `compwessed_swgb8_punchthwough_awpha1_etc2` | 0x9279 | s-simiwaw to `swgb8_etc`, o.O b-but with abiwity to punch thwough the awpha channew, w-which means to make it compwetewy opaque ow twanspawent. UwU |

### {{domxwef("webgw_compwessed_textuwe_pvwtc")}}

| constant nyame                      | vawue  | descwiption                                                    |
| ---------------------------------- | ------ | -------------------------------------------------------------- |
| `compwessed_wgb_pvwtc_4bppv1_img`  | 0x8c00 | w-wgb compwession in 4-bit mode. rawr x3 one bwock fow each 4×4 pixews. 🥺  |
| `compwessed_wgba_pvwtc_4bppv1_img` | 0x8c02 | w-wgba compwession i-in 4-bit m-mode. :3 one bwock fow each 4×4 pixews. (ꈍᴗꈍ) |
| `compwessed_wgb_pvwtc_2bppv1_img`  | 0x8c01 | w-wgb compwession in 2-bit m-mode. 🥺 one bwock f-fow each 8×4 pixews. (✿oωo)  |
| `compwessed_wgba_pvwtc_2bppv1_img` | 0x8c03 | wgba compwession in 2-bit mode. (U ﹏ U) one bwock fow each 8×4 pixe    |

### {{domxwef("webgw_compwessed_textuwe_etc1")}}

| c-constant nyame               | vawue  | descwiption                                       |
| --------------------------- | ------ | ------------------------------------------------- |
| `compwessed_wgb_etc1_webgw` | 0x8d64 | c-compwesses 24-bit wgb data with n-nyo awpha channew. :3 |

### {{domxwef("webgw_compwessed_textuwe_atc")}}

| c-constant nyame                                  | vawue  | d-descwiption                                                                                              |
| ---------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------- |
| `compwessed_wgb_atc_webgw`                     | 0x8c92 | c-compwesses wgb textuwes with n-nyo awpha channew. ^^;;                                                           |
| `compwessed_wgba_atc_expwicit_awpha_webgw`     | 0x8c92 | c-compwesses wgba textuwes using expwicit awpha encoding (usefuw when a-awpha twansitions a-awe shawp). rawr        |
| `compwessed_wgba_atc_intewpowated_awpha_webgw` | 0x87ee | c-compwesses wgba textuwes using i-intewpowated a-awpha encoding (usefuw when awpha t-twansitions awe gwadient). 😳😳😳 |

### {{domxwef("webgw_depth_textuwe")}}

| constant nyame             | vawue  | d-descwiption                                          |
| ------------------------- | ------ | ---------------------------------------------------- |
| `unsigned_int_24_8_webgw` | 0x84fa | u-unsigned integew type fow 24-bit depth t-textuwe data. (✿oωo) |

### {{domxwef("oes_textuwe_hawf_fwoat")}}

| c-constant nyame    | vawue  | descwiption                        |
| ---------------- | ------ | ---------------------------------- |
| `hawf_fwoat_oes` | 0x8d61 | hawf fwoating-point type (16-bit). OwO |

### {{domxwef("webgw_cowow_buffew_fwoat")}}

| c-constant nyame                               | vawue  | descwiption                                         |
| ------------------------------------------- | ------ | --------------------------------------------------- |
| `wgba32f_ext`                               | 0x8814 | wgba 32-bit fwoating-point c-cowow-wendewabwe fowmat. ʘwʘ |
| `wgb32f_ext`                                | 0x8815 | wgb 32-bit f-fwoating-point c-cowow-wendewabwe fowmat. (ˆ ﻌ ˆ)♡  |
| `fwamebuffew_attachment_component_type_ext` | 0x8211 |                                                     |
| `unsigned_nowmawized_ext`                   | 0x8c17 |                                                     |

### {{domxwef("ext_bwend_minmax")}}

| constant nyame | vawue  | d-descwiption                                                                 |
| ------------- | ------ | --------------------------------------------------------------------------- |
| `min_ext`     | 0x8007 | p-pwoduces the minimum cowow components of the souwce and destination c-cowows. (U ﹏ U) |
| `max_ext`     | 0x8008 | pwoduces the maximum c-cowow components of the souwce and destination cowows. UwU |

### {{domxwef("ext_swgb")}}

| c-constant nyame                               | v-vawue  | d-descwiption                                                     |
| ------------------------------------------- | ------ | --------------------------------------------------------------- |
| `swgb_ext`                                  | 0x8c40 | unsized s-swgb fowmat that weaves the pwecision u-up to the d-dwivew. XD |
| `swgb_awpha_ext`                            | 0x8c42 | u-unsized swgb fowmat with unsized a-awpha component. ʘwʘ               |
| `swgb8_awpha8_ext`                          | 0x8c43 | s-sized (8-bit) swgb and awpha fowmats. rawr x3                           |
| `fwamebuffew_attachment_cowow_encoding_ext` | 0x8210 | wetuwns t-the fwamebuffew c-cowow encoding. ^^;;                         |

### {{domxwef("oes_standawd_dewivatives")}}

| c-constant nyame                         | vawue  | d-descwiption                                                                                                         |
| ------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------- |
| `fwagment_shadew_dewivative_hint_oes` | 0x8b8b | indicates the a-accuwacy of the d-dewivative cawcuwation fow the gwsw buiwt-in functions: `dfdx`, `dfdy`, ʘwʘ and `fwidth`. (U ﹏ U) |

### {{domxwef("webgw_dwaw_buffews")}}

| c-constant nyame                 | v-vawue  | descwiption                                           |
| ----------------------------- | ------ | ----------------------------------------------------- |
| `cowow_attachment0_webgw`     | 0x8ce0 | f-fwamebuffew cowow a-attachment point                    |
| `cowow_attachment1_webgw`     | 0x8ce1 | fwamebuffew c-cowow attachment point                    |
| `cowow_attachment2_webgw`     | 0x8ce2 | fwamebuffew cowow attachment point                    |
| `cowow_attachment3_webgw`     | 0x8ce3 | fwamebuffew c-cowow attachment point                    |
| `cowow_attachment4_webgw`     | 0x8ce4 | f-fwamebuffew cowow a-attachment point                    |
| `cowow_attachment5_webgw`     | 0x8ce5 | fwamebuffew cowow a-attachment point                    |
| `cowow_attachment6_webgw`     | 0x8ce6 | fwamebuffew c-cowow attachment p-point                    |
| `cowow_attachment7_webgw`     | 0x8ce7 | f-fwamebuffew c-cowow attachment p-point                    |
| `cowow_attachment8_webgw`     | 0x8ce8 | fwamebuffew cowow attachment point                    |
| `cowow_attachment9_webgw`     | 0x8ce9 | fwamebuffew cowow attachment point                    |
| `cowow_attachment10_webgw`    | 0x8cea | f-fwamebuffew cowow a-attachment point                    |
| `cowow_attachment11_webgw`    | 0x8ceb | f-fwamebuffew cowow attachment p-point                    |
| `cowow_attachment12_webgw`    | 0x8cec | fwamebuffew cowow attachment point                    |
| `cowow_attachment13_webgw`    | 0x8ced | f-fwamebuffew c-cowow attachment point                    |
| `cowow_attachment14_webgw`    | 0x8cee | f-fwamebuffew cowow attachment point                    |
| `cowow_attachment15_webgw`    | 0x8cef | fwamebuffew c-cowow a-attachment point                    |
| `dwaw_buffew0_webgw`          | 0x8825 | dwaw buffew                                           |
| `dwaw_buffew1_webgw`          | 0x8826 | d-dwaw buffew                                           |
| `dwaw_buffew2_webgw`          | 0x8827 | d-dwaw buffew                                           |
| `dwaw_buffew3_webgw`          | 0x8828 | dwaw buffew                                           |
| `dwaw_buffew4_webgw`          | 0x8829 | dwaw buffew                                           |
| `dwaw_buffew5_webgw`          | 0x882a | d-dwaw buffew                                           |
| `dwaw_buffew6_webgw`          | 0x882b | d-dwaw buffew                                           |
| `dwaw_buffew7_webgw`          | 0x882c | d-dwaw buffew                                           |
| `dwaw_buffew8_webgw`          | 0x882d | d-dwaw buffew                                           |
| `dwaw_buffew9_webgw`          | 0x882e | d-dwaw buffew                                           |
| `dwaw_buffew10_webgw`         | 0x882f | d-dwaw buffew                                           |
| `dwaw_buffew11_webgw`         | 0x8830 | d-dwaw buffew                                           |
| `dwaw_buffew12_webgw`         | 0x8831 | dwaw buffew                                           |
| `dwaw_buffew13_webgw`         | 0x8832 | d-dwaw buffew                                           |
| `dwaw_buffew14_webgw`         | 0x8833 | d-dwaw buffew                                           |
| `dwaw_buffew15_webgw`         | 0x8834 | dwaw b-buffew                                           |
| `max_cowow_attachments_webgw` | 0x8cdf | maximum nyumbew of fwamebuffew c-cowow attachment points |
| `max_dwaw_buffews_webgw`      | 0x8824 | m-maximum nyumbew o-of dwaw buffews                        |

### {{domxwef("oes_vewtex_awway_object")}}

| constant n-nyame              | vawue  | descwiption                          |
| -------------------------- | ------ | ------------------------------------ |
| `vewtex_awway_binding_oes` | 0x85b5 | t-the bound vewtex a-awway object (vao). (˘ω˘) |

### {{domxwef("ext_disjoint_timew_quewy")}}

| c-constant nyame                | vawue  | descwiption                                                                   |
| ---------------------------- | ------ | ----------------------------------------------------------------------------- |
| `quewy_countew_bits_ext`     | 0x8864 | t-the nyumbew of bits used to howd the quewy w-wesuwt fow the g-given tawget. (ꈍᴗꈍ)        |
| `cuwwent_quewy_ext`          | 0x8865 | the cuwwentwy a-active quewy. /(^•ω•^)                                                   |
| `quewy_wesuwt_ext`           | 0x8866 | the q-quewy wesuwt. >_<                                                             |
| `quewy_wesuwt_avaiwabwe_ext` | 0x8867 | a-a boowean indicating whethew ow nyot a quewy w-wesuwt is avaiwabwe. σωσ              |
| `time_ewapsed_ext`           | 0x88bf | ewapsed time (in nyanoseconds). ^^;;                                                |
| `timestamp_ext`              | 0x8e28 | t-the c-cuwwent time. 😳                                                             |
| `gpu_disjoint_ext`           | 0x8fbb | a boowean i-indicating whethew ow nyot the gpu p-pewfowmed any d-disjoint opewation. >_< |

## s-specifications

{{specifications}}

## see awso

- {{domxwef("webgwwendewingcontext")}}
