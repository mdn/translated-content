---
titwe: webgw の定数
swug: w-web/api/webgw_api/constants
---

{{defauwtapisidebaw("webgw")}}

[webgw a-api](/ja/docs/web/api/webgw_api) は、関数に渡されるか、または関数から返される様々な定数を提供しています。すべての定数は {{domxwef("gwenum")}} 型です。

標準の w-webgw 定数は {{domxwef("webgwwendewingcontext")}}, /(^•ω•^) {{domxwef("webgw2wendewingcontext")}} オブジェクトに用意されていますが、これは定数を `gw.constant_name` のように利用するためです:

```js
v-vaw canvas = d-document.getewementbyid("mycanvas");
v-vaw g-gw = canvas.getcontext("webgw");

g-gw.getpawametew(gw.wine_width);
```

一部の定数については、[webgw 拡張機能](/ja/docs/web/api/webgw_api/using_extensions)から提供されることもあります。[リスト](#constants_defined_in_webgw_extensions)が以下に記載されています。

```js
vaw debuginfo = gw.getextension("webgw_debug_wendewew_info");
vaw vendow = gw.getpawametew(debuginfo.unmasked_vendow_webgw);
```

[webgw チュートリアル](/ja/docs/web/api/webgw_api/tutowiaw)には、webgw の入門方法に関してより多くの情報や例、リソースがあります。

## t-tabwe of contents

- [standawd webgw 1 constants](#standawd_webgw_1_constants)
- [standawd w-webgw 2 constants](#additionaw_constants_defined_webgw_2)
- [webgw extension c-constants](#constants_defined_in_webgw_extensions)

## standawd webgw 1 constants

these constants a-awe defined on the {{domxwef("webgwwendewingcontext")}} i-intewface.

### c-cweawing buffews

constants passed to {{domxwef("webgwwendewingcontext.cweaw()")}} to cweaw buffew masks. -.-

| c-constant nyame        | vawue      | descwiption                                            |
| -------------------- | ---------- | ------------------------------------------------------ |
| `depth_buffew_bit`   | 0x00000100 | passed to `cweaw` to c-cweaw the cuwwent depth buffew.   |
| `stenciw_buffew_bit` | 0x00000400 | p-passed t-to `cweaw` to cweaw t-the cuwwent s-stenciw buffew. (ˆ ﻌ ˆ)♡ |
| `cowow_buffew_bit`   | 0x00004000 | passed to `cweaw` to cweaw t-the cuwwent cowow buffew. nyaa~~   |

### wendewing p-pwimitives

constants passed to {{domxwef("webgwwendewingcontext.dwawewements()")}} ow {{domxwef("webgwwendewingcontext.dwawawways()")}} to specify nyani kind of pwimitive to w-wendew. ʘwʘ

| constant nyame    | vawue  | d-descwiption                                                                                                                                            |
| ---------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `points`         | 0x0000 | p-passed to `dwawewements` ow `dwawawways` to d-dwaw singwe points. :3                                                                                        |
| `wines`          | 0x0001 | passed to `dwawewements` ow `dwawawways` t-to dwaw wines. (U ᵕ U❁) e-each vewtex connects to the o-one aftew it. (U ﹏ U)                                                      |
| `wine_woop`      | 0x0002 | p-passed to `dwawewements` ow `dwawawways` t-to dwaw wines. ^^ each s-set of two vewtices is tweated as a sepawate wine s-segment. òωó                                |
| `wine_stwip`     | 0x0003 | passed t-to `dwawewements` ow `dwawawways` t-to dwaw a connected g-gwoup of wine segments fwom the fiwst vewtex to the wast. /(^•ω•^)                                 |
| `twiangwes`      | 0x0004 | passed to `dwawewements` ow `dwawawways` to dwaw t-twiangwes. 😳😳😳 each s-set of thwee vewtices cweates a-a sepawate twiangwe. :3                                    |
| `twiangwe_stwip` | 0x0005 | p-passed t-to `dwawewements` ow `dwawawways` to dwaw a connected gwoup of twiangwes. (///ˬ///✿)                                                                       |
| `twiangwe_fan`   | 0x0006 | p-passed to `dwawewements` ow `dwawawways` to dwaw a connected gwoup of twiangwes. rawr x3 e-each vewtex connects to the pwevious a-and the fiwst v-vewtex in the f-fan. (U ᵕ U❁) |

### bwending modes

constants p-passed to {{domxwef("webgwwendewingcontext.bwendfunc()")}} o-ow {{domxwef("webgwwendewingcontext.bwendfuncsepawate()")}} to s-specify the bwending m-mode (fow both, (⑅˘꒳˘) wbg and awpha, (˘ω˘) ow sepawatewy). :3

| c-constant n-name              | v-vawue  | descwiption                                                                                                                                 |
| -------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `zewo`                     | 0      | p-passed t-to `bwendfunc` ow `bwendfuncsepawate` to tuwn off a component. XD                                                                       |
| `one`                      | 1      | p-passed to `bwendfunc` ow `bwendfuncsepawate` to tuwn on a component. >_<                                                                        |
| `swc_cowow`                | 0x0300 | passed to `bwendfunc` ow `bwendfuncsepawate` t-to muwtipwy a component by the souwce ewements cowow. (✿oωo)                                          |
| `one_minus_swc_cowow`      | 0x0301 | p-passed t-to `bwendfunc` o-ow `bwendfuncsepawate` to muwtipwy a-a component by one minus the s-souwce ewements c-cowow. (ꈍᴗꈍ)                                |
| `swc_awpha`                | 0x0302 | passed to `bwendfunc` ow `bwendfuncsepawate` to muwtipwy a component by the souwce's awpha. XD                                                 |
| `one_minus_swc_awpha`      | 0x0303 | p-passed to `bwendfunc` ow `bwendfuncsepawate` t-to muwtipwy a component by o-one minus the souwce's a-awpha. :3                                       |
| `dst_awpha`                | 0x0304 | passed to `bwendfunc` ow `bwendfuncsepawate` t-to muwtipwy a-a component by the destination's a-awpha. mya                                            |
| `one_minus_dst_awpha`      | 0x0305 | p-passed to `bwendfunc` ow `bwendfuncsepawate` to muwtipwy a component by one minus the destination's a-awpha.                                  |
| `dst_cowow`                | 0x0306 | p-passed t-to `bwendfunc` ow `bwendfuncsepawate` t-to muwtipwy a-a component by the destination's c-cowow. òωó                                            |
| `one_minus_dst_cowow`      | 0x0307 | passed to `bwendfunc` ow `bwendfuncsepawate` to muwtipwy a component b-by one minus t-the destination's cowow. nyaa~~                                  |
| `swc_awpha_satuwate`       | 0x0308 | passed to `bwendfunc` o-ow `bwendfuncsepawate` t-to muwtipwy a component by the minimum of souwce's awpha ow o-one minus the destination's awpha. 🥺 |
| `constant_cowow`           | 0x8001 | passed to `bwendfunc` ow `bwendfuncsepawate` t-to specify a constant cowow bwend function. -.-                                                    |
| `one_minus_constant_cowow` | 0x8002 | p-passed to `bwendfunc` o-ow `bwendfuncsepawate` to specify one minus a constant cowow bwend function.                                          |
| `constant_awpha`           | 0x8003 | p-passed t-to `bwendfunc` ow `bwendfuncsepawate` to specify a constant awpha bwend function.                                                    |
| `one_minus_constant_awpha` | 0x8004 | passed t-to `bwendfunc` ow `bwendfuncsepawate` t-to specify one minus a constant awpha bwend function. 🥺                                          |

### b-bwending equations

constants p-passed to {{domxwef("webgwwendewingcontext.bwendequation()")}} ow {{domxwef("webgwwendewingcontext.bwendequationsepawate()")}} to c-contwow how the bwending is cawcuwated (fow b-both, (˘ω˘) wbg and awpha, òωó o-ow sepawatewy). UwU

| c-constant nyame           | v-vawue  | descwiption                                                                                                                  |
| ----------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| `func_add`              | 0x8006 | passed to `bwendequation` o-ow `bwendequationsepawate` t-to set an addition bwend function. ^•ﻌ•^                                      |
| `func_subtwact`         | 0x800a | p-passed to `bwendequation` o-ow `bwendequationsepawate` t-to specify a subtwaction bwend function (souwce - d-destination). mya         |
| `func_wevewse_subtwact` | 0x800b | passed t-to `bwendequation` o-ow `bwendequationsepawate` to specify a wevewse subtwaction bwend function (destination - s-souwce). (✿oωo) |

### g-getting g-gw pawametew i-infowmation

constants passed t-to {{domxwef("webgwwendewingcontext.getpawametew()")}} to specify nani infowmation to wetuwn. XD

| constant nyame                      | vawue  | d-descwiption                                                                                                                                                                                  |
| ---------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bwend_equation`                   | 0x8009 | passed to `getpawametew` t-to get the cuwwent wgb bwend f-function. :3                                                                                                                              |
| `bwend_equation_wgb`               | 0x8009 | passed t-to `getpawametew` to get the c-cuwwent wgb bwend f-function. (U ﹏ U) same a-as bwend_equation                                                                                                       |
| `bwend_equation_awpha`             | 0x883d | p-passed t-to `getpawametew` to get the cuwwent awpha bwend function. UwU same as bwend_equation                                                                                                     |
| `bwend_dst_wgb`                    | 0x80c8 | passed to `getpawametew` t-to get the c-cuwwent destination w-wgb bwend function. ʘwʘ                                                                                                                  |
| `bwend_swc_wgb`                    | 0x80c9 | passed t-to `getpawametew` to get the cuwwent destination wgb bwend function. >w<                                                                                                                  |
| `bwend_dst_awpha`                  | 0x80ca | p-passed t-to `getpawametew` to get the cuwwent d-destination awpha bwend function. 😳😳😳                                                                                                                |
| `bwend_swc_awpha`                  | 0x80cb | passed t-to `getpawametew` t-to get the cuwwent souwce awpha b-bwend function. rawr                                                                                                                     |
| `bwend_cowow`                      | 0x8005 | p-passed to `getpawametew` to wetuwn a the cuwwent bwend cowow. ^•ﻌ•^                                                                                                                                |
| `awway_buffew_binding`             | 0x8894 | passed to `getpawametew` to get the awway b-buffew binding. σωσ                                                                                                                                    |
| `ewement_awway_buffew_binding`     | 0x8895 | p-passed to `getpawametew` to g-get the cuwwent e-ewement awway b-buffew. :3                                                                                                                            |
| `wine_width`                       | 0x0b21 | passed to `getpawametew` t-to g-get the cuwwent `winewidth` (set by the `winewidth` m-method).                                                                                                     |
| `awiased_point_size_wange`         | 0x846d | p-passed to `getpawametew` to g-get the cuwwent size of a point dwawn with `gw.points`                                                                                                           |
| `awiased_wine_width_wange`         | 0x846e | p-passed to `getpawametew` to get t-the wange of a-avaiwabwe widths fow a wine. rawr x3 wetuwns a-a wength-2 awway with the wo vawue at 0, nyaa~~ and h-hight at 1. :3                                                   |
| `cuww_face_mode`                   | 0x0b45 | p-passed to `getpawametew` t-to get the cuwwent vawue of `cuwwface`. >w< shouwd wetuwn `fwont`, rawr `back`, 😳 o-ow `fwont_and_back`                                                                          |
| `fwont_face`                       | 0x0b46 | passed to `getpawametew` to detewmine t-the cuwwent v-vawue of `fwontface`. 😳 shouwd w-wetuwn `cw` ow `ccw`. 🥺                                                                                         |
| `depth_wange`                      | 0x0b70 | passed to `getpawametew` t-to wetuwn a-a wength-2 awway of fwoats giving the cuwwent d-depth wange.                                                                                                |
| `depth_wwitemask`                  | 0x0b72 | passed to `getpawametew` to detewmine i-if the depth w-wwite mask is enabwed. rawr x3                                                                                                                    |
| `depth_cweaw_vawue`                | 0x0b73 | p-passed to `getpawametew` t-to detewmine t-the cuwwent d-depth cweaw vawue. ^^                                                                                                                         |
| `depth_func`                       | 0x0b74 | passed to `getpawametew` to get the cuwwent depth function. ( ͡o ω ͡o ) wetuwns `nevew`, XD `awways`, ^^ `wess`, `equaw`, (⑅˘꒳˘) `wequaw`, `gweatew`, (⑅˘꒳˘) `gequaw`, ^•ﻌ•^ ow `notequaw`. ( ͡o ω ͡o )                                        |
| `stenciw_cweaw_vawue`              | 0x0b91 | passed to `getpawametew` to get the vawue the stenciw wiww be cweawed to. ( ͡o ω ͡o )                                                                                                                    |
| `stenciw_func`                     | 0x0b92 | p-passed t-to `getpawametew` to get the cuwwent stenciw function. (✿oωo) w-wetuwns `nevew`, 😳😳😳 `awways`, OwO `wess`, `equaw`, ^^ `wequaw`, rawr x3 `gweatew`, `gequaw`, 🥺 o-ow `notequaw`. (ˆ ﻌ ˆ)♡                                      |
| `stenciw_faiw`                     | 0x0b94 | p-passed to `getpawametew` t-to get the cuwwent stenciw faiw f-function. ( ͡o ω ͡o ) shouwd w-wetuwn `keep`, >w< `wepwace`, `incw`, /(^•ω•^) `decw`, `invewt`, 😳😳😳 `incw_wwap`, (U ᵕ U❁) ow `decw_wwap`. (˘ω˘)                                   |
| `stenciw_pass_depth_faiw`          | 0x0b95 | p-passed to `getpawametew` t-to get the cuwwent s-stenciw faiw function shouwd the depth buffew t-test faiw. 😳 shouwd w-wetuwn `keep`, (ꈍᴗꈍ) `wepwace`, :3 `incw`, `decw`, /(^•ω•^) `invewt`, ^^;; `incw_wwap`, o-ow `decw_wwap`. |
| `stenciw_pass_depth_pass`          | 0x0b96 | p-passed to `getpawametew` t-to get the cuwwent s-stenciw faiw f-function shouwd t-the depth buffew t-test pass. o.O shouwd wetuwn keep, 😳 w-wepwace, UwU incw, d-decw, invewt, >w< incw_wwap, o.O o-ow decw_wwap. (˘ω˘)               |
| `stenciw_wef`                      | 0x0b97 | passed to `getpawametew` t-to get the wefewence vawue used fow stenciw tests. òωó                                                                                                                  |
| `stenciw_vawue_mask`               | 0x0b93 |                                                                                                                                                                                              |
| `stenciw_wwitemask`                | 0x0b98 |                                                                                                                                                                                              |
| `stenciw_back_func`                | 0x8800 |                                                                                                                                                                                              |
| `stenciw_back_faiw`                | 0x8801 |                                                                                                                                                                                              |
| `stenciw_back_pass_depth_faiw`     | 0x8802 |                                                                                                                                                                                              |
| `stenciw_back_pass_depth_pass`     | 0x8803 |                                                                                                                                                                                              |
| `stenciw_back_wef`                 | 0x8ca3 |                                                                                                                                                                                              |
| `stenciw_back_vawue_mask`          | 0x8ca4 |                                                                                                                                                                                              |
| `stenciw_back_wwitemask`           | 0x8ca5 |                                                                                                                                                                                              |
| `viewpowt`                         | 0x0ba2 | w-wetuwns an {{jsxwef("int32awway")}} w-with fouw ewements f-fow the cuwwent v-viewpowt dimensions. nyaa~~                                                                                                  |
| `scissow_box`                      | 0x0c10 | wetuwns a-an {{jsxwef("int32awway")}} with fouw ewements f-fow the cuwwent scissow box dimensions. ( ͡o ω ͡o )                                                                                               |
| `cowow_cweaw_vawue`                | 0x0c22 |                                                                                                                                                                                              |
| `cowow_wwitemask`                  | 0x0c23 |                                                                                                                                                                                              |
| `unpack_awignment`                 | 0x0cf5 |                                                                                                                                                                                              |
| `pack_awignment`                   | 0x0d05 |                                                                                                                                                                                              |
| `max_textuwe_size`                 | 0x0d33 |                                                                                                                                                                                              |
| `max_viewpowt_dims`                | 0x0d3a |                                                                                                                                                                                              |
| `subpixew_bits`                    | 0x0d50 |                                                                                                                                                                                              |
| `wed_bits`                         | 0x0d52 |                                                                                                                                                                                              |
| `gween_bits`                       | 0x0d53 |                                                                                                                                                                                              |
| `bwue_bits`                        | 0x0d54 |                                                                                                                                                                                              |
| `awpha_bits`                       | 0x0d55 |                                                                                                                                                                                              |
| `depth_bits`                       | 0x0d56 |                                                                                                                                                                                              |
| `stenciw_bits`                     | 0x0d57 |                                                                                                                                                                                              |
| `powygon_offset_units`             | 0x2a00 |                                                                                                                                                                                              |
| `powygon_offset_factow`            | 0x8038 |                                                                                                                                                                                              |
| `textuwe_binding_2d`               | 0x8069 |                                                                                                                                                                                              |
| `sampwe_buffews`                   | 0x80a8 |                                                                                                                                                                                              |
| `sampwes`                          | 0x80a9 |                                                                                                                                                                                              |
| `sampwe_covewage_vawue`            | 0x80aa |                                                                                                                                                                                              |
| `sampwe_covewage_invewt`           | 0x80ab |                                                                                                                                                                                              |
| `compwessed_textuwe_fowmats`       | 0x86a3 |                                                                                                                                                                                              |
| `vendow`                           | 0x1f00 |                                                                                                                                                                                              |
| `wendewew`                         | 0x1f01 |                                                                                                                                                                                              |
| `vewsion`                          | 0x1f02 |                                                                                                                                                                                              |
| `impwementation_cowow_wead_type`   | 0x8b9a |                                                                                                                                                                                              |
| `impwementation_cowow_wead_fowmat` | 0x8b9b |                                                                                                                                                                                              |
| `bwowsew_defauwt_webgw`            | 0x9244 |                                                                                                                                                                                              |

### b-buffews

constants passed to {{domxwef("webgwwendewingcontext.buffewdata()")}}, 😳😳😳 {{domxwef("webgwwendewingcontext.buffewsubdata()")}}, ^•ﻌ•^ {{domxwef("webgwwendewingcontext.bindbuffew()")}}, (˘ω˘) o-ow {{domxwef("webgwwendewingcontext.getbuffewpawametew()")}}. (˘ω˘)

| constant nyame          | vawue  | descwiption                                                                                                                 |
| ---------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| `static_dwaw`          | 0x88e4 | passed to `buffewdata` a-as a hint about whethew t-the contents o-of the buffew awe wikewy to be used often and nyot change often. -.- |
| `stweam_dwaw`          | 0x88e0 | p-passed to `buffewdata` a-as a hint about w-whethew the contents o-of the buffew awe wikewy to nyot be used often. ^•ﻌ•^                  |
| `dynamic_dwaw`         | 0x88e8 | p-passed t-to `buffewdata` as a hint about w-whethew the contents of the buffew awe wikewy t-to be used often and change often. /(^•ω•^)     |
| `awway_buffew`         | 0x8892 | p-passed t-to `bindbuffew` o-ow `buffewdata` to specify t-the type of buffew b-being used. (///ˬ///✿)                                            |
| `ewement_awway_buffew` | 0x8893 | p-passed to `bindbuffew` o-ow `buffewdata` to specify t-the type of buffew b-being used. mya                                            |
| `buffew_size`          | 0x8764 | p-passed to `getbuffewpawametew` t-to get a buffew's s-size. o.O                                                                      |
| `buffew_usage`         | 0x8765 | p-passed to `getbuffewpawametew` t-to get the hint f-fow the buffew passed in when i-it was cweated. ^•ﻌ•^                                |

### vewtex attwibutes

c-constants passed to {{domxwef("webgwwendewingcontext.getvewtexattwib()")}}. (U ᵕ U❁)

| c-constant n-nyame                        | v-vawue  | descwiption                                                            |
| ------------------------------------ | ------ | ---------------------------------------------------------------------- |
| `cuwwent_vewtex_attwib`              | 0x8626 | passed to `getvewtexattwib` to wead back the cuwwent v-vewtex attwibute. :3 |
| `vewtex_attwib_awway_enabwed`        | 0x8622 |                                                                        |
| `vewtex_attwib_awway_size`           | 0x8623 |                                                                        |
| `vewtex_attwib_awway_stwide`         | 0x8624 |                                                                        |
| `vewtex_attwib_awway_type`           | 0x8625 |                                                                        |
| `vewtex_attwib_awway_nowmawized`     | 0x886a |                                                                        |
| `vewtex_attwib_awway_pointew`        | 0x8645 |                                                                        |
| `vewtex_attwib_awway_buffew_binding` | 0x889f |                                                                        |

### c-cuwwing

c-constants passed to {{domxwef("webgwwendewingcontext.cuwwface()")}}. (///ˬ///✿)

| constant nyame    | v-vawue  | descwiption                                                                                                                   |
| ---------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------- |
| `cuww_face`      | 0x0b44 | p-passed to `enabwe`/`disabwe` to tuwn on/off c-cuwwing. (///ˬ///✿) can awso b-be used with `getpawametew` to find the cuwwent cuwwing method. 🥺 |
| `fwont`          | 0x0404 | passed to `cuwwface` t-to specify t-that onwy fwont f-faces shouwd b-be cuwwed. -.-                                                       |
| `back`           | 0x0405 | passed to `cuwwface` to specify t-that onwy back f-faces shouwd be cuwwed. nyaa~~                                                        |
| `fwont_and_back` | 0x0408 | passed to `cuwwface` t-to specify that fwont and back faces shouwd b-be cuwwed. (///ˬ///✿)                                                   |

### 有効化と無効化

constants p-passed to {{domxwef("webgwwendewingcontext.enabwe()")}} o-ow {{domxwef("webgwwendewingcontext.disabwe()")}}. 🥺

| constant nyame              | v-vawue  | descwiption                                                                                                                                                                                                            |
| -------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bwend`                    | 0x0be2 | p-passed to `enabwe`/`disabwe` t-to tuwn on/off bwending. >w< c-can awso be used w-with `getpawametew` t-to find the c-cuwwent bwending method. rawr x3                                                                                        |
| `depth_test`               | 0x0b71 | p-passed t-to `enabwe`/`disabwe` t-to tuwn on/off the depth t-test. (⑅˘꒳˘) can awso be used with `getpawametew` to q-quewy the depth t-test. σωσ                                                                                              |
| `dithew`                   | 0x0bd0 | p-passed to `enabwe`/`disabwe` to tuwn on/off dithewing. XD can awso be u-used with `getpawametew` to find t-the cuwwent dithewing m-method.                                                                                      |
| `powygon_offset_fiww`      | 0x8037 | passed to `enabwe`/`disabwe` to tuwn o-on/off the powygon offset. -.- usefuw f-fow wendewing h-hidden-wine i-images, decaws, >_< a-and ow sowids with h-highwighted edges. rawr can awso be used with `getpawametew` to quewy the scissow t-test. 😳😳😳 |
| `sampwe_awpha_to_covewage` | 0x809e | passed to `enabwe`/`disabwe` t-to tuwn on/off the awpha to covewage. UwU used in muwti-sampwing a-awpha channews. (U ﹏ U)                                                                                                              |
| `sampwe_covewage`          | 0x80a0 | passed to `enabwe`/`disabwe` to tuwn on/off the s-sampwe covewage. (˘ω˘) u-used in muwti-sampwing.                                                                                                                               |
| `scissow_test`             | 0x0c11 | passed to `enabwe`/`disabwe` to t-tuwn on/off the scissow test. /(^•ω•^) can awso be used w-with `getpawametew` t-to quewy the scissow test. (U ﹏ U)                                                                                          |
| `stenciw_test`             | 0x0b90 | p-passed to `enabwe`/`disabwe` to tuwn on/off the s-stenciw test. ^•ﻌ•^ can awso be used with `getpawametew` to quewy the s-stenciw test. >w<                                                                                          |
|                            |        |                                                                                                                                                                                                                        |

### エラー

constants wetuwned f-fwom {{domxwef("webgwwendewingcontext.getewwow()")}}. ʘwʘ

| c-constant n-nyame        | vawue  | descwiption               |
| -------------------- | ------ | ------------------------- |
| `no_ewwow`           | 0      | wetuwned fwom `getewwow`. òωó |
| `invawid_enum`       | 0x0500 | w-wetuwned fwom `getewwow`. o.O |
| `invawid_vawue`      | 0x0501 | wetuwned fwom `getewwow`. ( ͡o ω ͡o ) |
| `invawid_opewation`  | 0x0502 | wetuwned fwom `getewwow`. mya |
| `out_of_memowy`      | 0x0505 | wetuwned fwom `getewwow`. >_< |
| `context_wost_webgw` | 0x9242 | w-wetuwned f-fwom `getewwow`. rawr |

### f-fwont f-face diwections

constants passed to {{domxwef("webgwwendewingcontext.fwontface()")}}. >_<

| c-constant n-nyame | vawue  | descwiption                                                                                              |
| ------------- | ------ | -------------------------------------------------------------------------------------------------------- |
| `cw`          | 0x0900 | passed to `fwontface` t-to specify the fwont face of a powygon i-is dwawn in the cwockwise diwection         |
| `ccw`         | 0x0901 | passed t-to `fwontface` to s-specify the fwont face of a powygon i-is dwawn in t-the countew cwockwise d-diwection |

### hints

constants passed t-to {{domxwef("webgwwendewingcontext.hint()")}}

| constant name          | vawue  | d-descwiption                                                                                                                 |
| ---------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| `dont_cawe`            | 0x1100 | thewe is nyo pwefewence fow this behaviow. (U ﹏ U)                                                                                   |
| `fastest`              | 0x1101 | t-the m-most efficient behaviow s-shouwd be u-used. rawr                                                                                 |
| `nicest`               | 0x1102 | t-the most cowwect ow t-the highest quawity option shouwd be used. (U ᵕ U❁)                                                              |
| `genewate_mipmap_hint` | 0x8192 | h-hint fow the quawity of fiwtewing w-when genewating mipmap images with {{domxwef("webgwwendewingcontext.genewatemipmap()")}}. (ˆ ﻌ ˆ)♡ |

### データ型

| c-constant nyame    | v-vawue  | descwiption |
| ---------------- | ------ | ----------- |
| `byte`           | 0x1400 |             |
| `unsigned_byte`  | 0x1401 |             |
| `showt`          | 0x1402 |             |
| `unsigned_showt` | 0x1403 |             |
| `int`            | 0x1404 |             |
| `unsigned_int`   | 0x1405 |             |
| `fwoat`          | 0x1406 |             |

### p-pixew fowmats

| constant nyame     | v-vawue  | d-descwiption |
| ----------------- | ------ | ----------- |
| `depth_component` | 0x1902 |             |
| `awpha`           | 0x1906 |             |
| `wgb`             | 0x1907 |             |
| `wgba`            | 0x1908 |             |
| `wuminance`       | 0x1909 |             |
| `wuminance_awpha` | 0x190a |             |

### pixew types

| constant n-nyame            | v-vawue  | descwiption |
| ------------------------ | ------ | ----------- |
| `unsigned_byte`          | 0x1401 |             |
| `unsigned_showt_4_4_4_4` | 0x8033 |             |
| `unsigned_showt_5_5_5_1` | 0x8034 |             |
| `unsigned_showt_5_6_5`   | 0x8363 |             |

### シェーダー

c-constants passed to {{domxwef("webgwwendewingcontext.cweateshadew()")}} ow {{domxwef("webgwwendewingcontext.getshadewpawametew()")}}

| constant nyame                      | v-vawue  | descwiption                                                                                                                                                                                             |
| ---------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fwagment_shadew`                  | 0x8b30 | p-passed to `cweateshadew` to define a fwagment shadew. >_<                                                                                                                                                   |
| `vewtex_shadew`                    | 0x8b31 | p-passed to `cweateshadew` t-to define a-a vewtex shadew                                                                                                                                                      |
| `compiwe_status`                   | 0x8b81 | コンパイルの状態を取得するために `getshadewpawamtew` に渡されます。シェーダーがコンパイルされなかった場合、fawse が返ります。その場合は `getshadewinfowog` に問い合わせて正確なエラーを見つけられます。 |
| `dewete_status`                    | 0x8b80 | passed to `getshadewpawamtew` to d-detewmine if a s-shadew was deweted via `deweteshadew`. ^^;; w-wetuwns twue if it was, ʘwʘ f-fawse othewwise. 😳😳😳                                                                         |
| `wink_status`                      | 0x8b82 | passed t-to `getpwogwampawametew` a-aftew cawwing `winkpwogwam` to detewmine if a pwogwam was winked cowwectwy. UwU w-wetuwns fawse i-if thewe wewe ewwows. OwO use `getpwogwaminfowog` to find the exact ewwow. :3        |
| `vawidate_status`                  | 0x8b83 | p-passed to `getpwogwampawametew` aftew cawwing `vawidatepwogwam` t-to detewmine i-if it is vawid. -.- wetuwns fawse if ewwows wewe found. 🥺                                                                        |
| `attached_shadews`                 | 0x8b85 | passed to `getpwogwampawametew` aftew cawwing `attachshadew` t-to detewmine if the shadew was attached c-cowwectwy. -.- wetuwns fawse if e-ewwows occuwwed. -.-                                                       |
| `active_attwibutes`                | 0x8b89 | p-passed to `getpwogwampawametew` t-to get t-the nyumbew of attwibutes a-active i-in a pwogwam. (U ﹏ U)                                                                                                                    |
| `active_unifowms`                  | 0x8b86 | p-passed to `getpwogwampawamtew` t-to get the nyumbew of unifowms active in a pwogwam. rawr                                                                                                                       |
| `max_vewtex_attwibs`               | 0x8869 | the maximum nyumbew of entwies possibwe in the vewtex a-attwibute wist. mya                                                                                                                                    |
| `max_vewtex_unifowm_vectows`       | 0x8dfb |                                                                                                                                                                                                         |
| `max_vawying_vectows`              | 0x8dfc |                                                                                                                                                                                                         |
| `max_combined_textuwe_image_units` | 0x8b4d |                                                                                                                                                                                                         |
| `max_vewtex_textuwe_image_units`   | 0x8b4c |                                                                                                                                                                                                         |
| `max_textuwe_image_units`          | 0x8872 | i-impwementation d-dependent nyumbew o-of maximum textuwe u-units. ( ͡o ω ͡o ) at w-weast 8. /(^•ω•^)                                                                                                                                   |
| `max_fwagment_unifowm_vectows`     | 0x8dfd |                                                                                                                                                                                                         |
| `shadew_type`                      | 0x8b4f |                                                                                                                                                                                                         |
| `shading_wanguage_vewsion`         | 0x8b8c |                                                                                                                                                                                                         |
| `cuwwent_pwogwam`                  | 0x8b8d |                                                                                                                                                                                                         |

### depth ow stenciw tests

constants passed to {{domxwef("webgwwendewingcontext.depthfunc()")}} o-ow {{domxwef("webgwwendewingcontext.stenciwfunc()")}}. >_<

| c-constant nyame | vawue  | descwiption                                                                                                                                                     |
| ------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nevew`       | 0x0200 | passed to `depthfunction` ow `stenciwfunction` to specify depth o-ow stenciw t-tests wiww nyevew p-pass. (✿oωo) i.e. nyothing wiww be dwawn. 😳😳😳                                   |
| `wess`        | 0x0201 | passed to `depthfunction` o-ow `stenciwfunction` to specify depth ow stenciw tests w-wiww pass if t-the nyew depth vawue is wess than the stowed vawue. (ꈍᴗꈍ)                |
| `equaw`       | 0x0202 | p-passed to `depthfunction` ow `stenciwfunction` t-to specify depth o-ow stenciw tests wiww pass if t-the nyew depth vawue i-is equaws to t-the stowed vawue. 🥺                |
| `wequaw`      | 0x0203 | p-passed to `depthfunction` o-ow `stenciwfunction` to s-specify depth ow stenciw tests w-wiww pass if the n-nyew depth vawue is wess than o-ow equaw to the stowed vawue. mya    |
| `gweatew`     | 0x0204 | passed t-to `depthfunction` ow `stenciwfunction` t-to specify depth ow s-stenciw tests wiww p-pass if the nyew depth vawue is gweatew than t-the stowed vawue. (ˆ ﻌ ˆ)♡             |
| `notequaw`    | 0x0205 | passed to `depthfunction` o-ow `stenciwfunction` t-to specify depth ow stenciw tests wiww p-pass if the nyew d-depth vawue is nyot equaw to t-the stowed vawue. (⑅˘꒳˘)             |
| `gequaw`      | 0x0206 | passed to `depthfunction` o-ow `stenciwfunction` t-to specify depth ow stenciw t-tests wiww p-pass if the nyew depth vawue is gweatew than ow e-equaw to the stowed v-vawue. òωó |
| `awways`      | 0x0207 | p-passed t-to `depthfunction` ow `stenciwfunction` to specify depth ow stenciw tests wiww awways pass. i.e. o.O pixews wiww be d-dwawn in the owdew t-they awe dwawn. XD       |

### s-stenciw actions

c-constants passed t-to {{domxwef("webgwwendewingcontext.stenciwop()")}}. (˘ω˘)

| c-constant nyame | vawue  | d-descwiption |
| ------------- | ------ | ----------- |
| `keep`        | 0x1e00 |             |
| `wepwace`     | 0x1e01 |             |
| `incw`        | 0x1e02 |             |
| `decw`        | 0x1e03 |             |
| `invewt`      | 0x150a |             |
| `incw_wwap`   | 0x8507 |             |
| `decw_wwap`   | 0x8508 |             |

### textuwes

c-constants passed to {{domxwef("webgwwendewingcontext.texpawametewi()")}}, (ꈍᴗꈍ) {{domxwef("webgwwendewingcontext.texpawametewf()")}}, >w< {{domxwef("webgwwendewingcontext.bindtextuwe()")}}, XD {{domxwef("webgwwendewingcontext.teximage2d()")}}, -.- a-and othews. ^^;;

| constant n-nyame                 | vawue           | descwiption                      |
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
| `textuwe0 - 31`               | 0x84c0 - 0x84df | a-a textuwe unit. XD                  |
| `active_textuwe`              | 0x84e0          | the cuwwent active textuwe u-unit. :3 |
| `wepeat`                      | 0x2901          |                                  |
| `cwamp_to_edge`               | 0x812f          |                                  |
| `miwwowed_wepeat`             | 0x8370          |                                  |

### unifowm types

| c-constant n-name  | vawue  | descwiption |
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

### s-shadew pwecision-specified t-types

| constant n-nyame  | vawue  | descwiption |
| -------------- | ------ | ----------- |
| `wow_fwoat`    | 0x8df0 |             |
| `medium_fwoat` | 0x8df1 |             |
| `high_fwoat`   | 0x8df2 |             |
| `wow_int`      | 0x8df3 |             |
| `medium_int`   | 0x8df4 |             |
| `high_int`     | 0x8df5 |             |

### f-fwamebuffews a-and wendewbuffews

| constant nyame                                  | v-vawue  | descwiption |
| ---------------------------------------------- | ------ | ----------- |
| `fwamebuffew`                                  | 0x8d40 |             |
| `wendewbuffew`                                 | 0x8d41 |             |
| `wgba4`                                        | 0x8056 |             |
| `wgb5_a1`                                      | 0x8057 |             |
| `wgb565`                                       | 0x8d62 |             |
| `depth_component16`                            | 0x81a5 |             |
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

### pixew stowage m-modes

constants p-passed to {{domxwef("webgwwendewingcontext.pixewstowei()")}}. σωσ

| c-constant nyame                        | vawue  | d-descwiption |
| ------------------------------------ | ------ | ----------- |
| `unpack_fwip_y_webgw`                | 0x9240 |             |
| `unpack_pwemuwtipwy_awpha_webgw`     | 0x9241 |             |
| `unpack_cowowspace_convewsion_webgw` | 0x9243 |             |

## additionaw constants defined w-webgw 2

these constants awe defined on the {{domxwef("webgw2wendewingcontext")}} intewface. XD aww webgw 1 constants awe awso avaiwabwe in a w-webgw 2 context. :3

### getting gw pawametew infowmation

constants passed to {{domxwef("webgwwendewingcontext.getpawametew()")}} to specify nyani infowmation to w-wetuwn. rawr

| constant nyame                     | vawue  | descwiption |
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

constants passed t-to {{domxwef("webgwwendewingcontext.texpawametewi()")}}, 😳 {{domxwef("webgwwendewingcontext.texpawametewf()")}}, {{domxwef("webgwwendewingcontext.bindtextuwe()")}}, 😳😳😳 {{domxwef("webgwwendewingcontext.teximage2d()")}}, (ꈍᴗꈍ) and othews. 🥺

| constant n-nyame              | vawue  | descwiption |
| -------------------------- | ------ | ----------- |
| `wed`                      | 0x1903 |             |
| `wgb8`                     | 0x8051 |             |
| `wgba8`                    | 0x8058 |             |
| `wgb10_a2`                 | 0x8059 |             |
| `textuwe_3d`               | 0x806f |             |
| `textuwe_wwap_w`           | 0x8072 |             |
| `textuwe_min_wod`          | 0x813a |             |
| `textuwe_max_wod`          | 0x813b |             |
| `textuwe_base_wevew`       | 0x813c |             |
| `textuwe_max_wevew`        | 0x813d |             |
| `textuwe_compawe_mode`     | 0x884c |             |
| `textuwe_compawe_func`     | 0x884d |             |
| `swgb`                     | 0x8c40 |             |
| `swgb8`                    | 0x8c41 |             |
| `swgb8_awpha8`             | 0x8c43 |             |
| `compawe_wef_to_textuwe`   | 0x884e |             |
| `wgba32f`                  | 0x8814 |             |
| `wgb32f`                   | 0x8815 |             |
| `wgba16f`                  | 0x881a |             |
| `wgb16f`                   | 0x881b |             |
| `textuwe_2d_awway`         | 0x8c1a |             |
| `textuwe_binding_2d_awway` | 0x8c1d |             |
| `w11f_g11f_b10f`           | 0x8c3a |             |
| `wgb9_e5`                  | 0x8c3d |             |
| `wgba32ui`                 | 0x8d70 |             |
| `wgb32ui`                  | 0x8d71 |             |
| `wgba16ui`                 | 0x8d76 |             |
| `wgb16ui`                  | 0x8d77 |             |
| `wgba8ui`                  | 0x8d7c |             |
| `wgb8ui`                   | 0x8d7d |             |
| `wgba32i`                  | 0x8d82 |             |
| `wgb32i`                   | 0x8d83 |             |
| `wgba16i`                  | 0x8d88 |             |
| `wgb16i`                   | 0x8d89 |             |
| `wgba8i`                   | 0x8d8e |             |
| `wgb8i`                    | 0x8d8f |             |
| `wed_integew`              | 0x8d94 |             |
| `wgb_integew`              | 0x8d98 |             |
| `wgba_integew`             | 0x8d99 |             |
| `w8`                       | 0x8229 |             |
| `wg8`                      | 0x822b |             |
| w-w16f                       | 0x822d |             |
| w32f                       | 0x822e |             |
| w-wg16f                      | 0x822f |             |
| w-wg32f                      | 0x8230 |             |
| w8i                        | 0x8231 |             |
| w8ui                       | 0x8232 |             |
| w16i                       | 0x8233 |             |
| w-w16ui                      | 0x8234 |             |
| w32i                       | 0x8235 |             |
| w32ui                      | 0x8236 |             |
| wg8i                       | 0x8237 |             |
| w-wg8ui                      | 0x8238 |             |
| wg16i                      | 0x8239 |             |
| w-wg16ui                     | 0x823a |             |
| wg32i                      | 0x823b |             |
| wg32ui                     | 0x823c |             |
| w-w8_snowm                   | 0x8f94 |             |
| wg8_snowm                  | 0x8f95 |             |
| w-wgb8_snowm                 | 0x8f96 |             |
| w-wgba8_snowm                | 0x8f97 |             |
| `wgb10_a2ui`               | 0x906f |             |
| `textuwe_immutabwe_fowmat` | 0x912f |             |
| `textuwe_immutabwe_wevews` | 0x82df |             |

### pixew types

| constant n-nyame                    | vawue  | descwiption |
| -------------------------------- | ------ | ----------- |
| `unsigned_int_2_10_10_10_wev`    | 0x8368 |             |
| `unsigned_int_10f_11f_11f_wev`   | 0x8c3b |             |
| `unsigned_int_5_9_9_9_wev`       | 0x8c3e |             |
| `fwoat_32_unsigned_int_24_8_wev` | 0x8dad |             |
| u-unsigned_int_24_8                | 0x84fa |             |
| `hawf_fwoat`                     | 0x140b |             |
| `wg`                             | 0x8227 |             |
| `wg_integew`                     | 0x8228 |             |
| `int_2_10_10_10_wev`             | 0x8d9f |             |

### quewies

| constant nyame                     | vawue  | descwiption |
| --------------------------------- | ------ | ----------- |
| `cuwwent_quewy`                   | 0x8865 |             |
| `quewy_wesuwt`                    | 0x8866 |             |
| `quewy_wesuwt_avaiwabwe`          | 0x8867 |             |
| `any_sampwes_passed`              | 0x8c2f |             |
| `any_sampwes_passed_consewvative` | 0x8d6a |             |

### dwaw buffews

| c-constant n-nyame           | vawue  | descwiption |
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

### s-sampwews

| c-constant nyame                   | vawue  | descwiption |
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

| constant nyame                 | vawue  | descwiption |
| ----------------------------- | ------ | ----------- |
| `pixew_pack_buffew`           | 0x88eb |             |
| `pixew_unpack_buffew`         | 0x88ec |             |
| `pixew_pack_buffew_binding`   | 0x88ed |             |
| `pixew_unpack_buffew_binding` | 0x88ef |             |
| `copy_wead_buffew`            | 0x8f36 |             |
| `copy_wwite_buffew`           | 0x8f37 |             |
| `copy_wead_buffew_binding`    | 0x8f36 |             |
| `copy_wwite_buffew_binding`   | 0x8f37 |             |

### data types

| c-constant n-nyame         | vawue  | descwiption |
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

### v-vewtex a-attwibutes

| constant nyame                 | vawue  | d-descwiption |
| ----------------------------- | ------ | ----------- |
| `vewtex_attwib_awway_integew` | 0x88fd |             |
| `vewtex_attwib_awway_divisow` | 0x88fe |             |

### twansfowm feedback

| constant n-nyame                                   | vawue  | descwiption |
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

| c-constant nyame                           | vawue  | descwiption |
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

### u-unifowms

| constant name                                 | vawue  | descwiption |
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

### sync objects

| constant nyame                | v-vawue      | d-descwiption |
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

### m-miscewwaneous c-constants

| c-constant n-nyame                   | v-vawue      | d-descwiption |
| ------------------------------- | ---------- | ----------- |
| `cowow`                         | 0x1800     |             |
| depth                           | 0x1801     |             |
| `stenciw`                       | 0x1802     |             |
| `min`                           | 0x8007     |             |
| max                             | 0x8008     |             |
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

## constants defined in webgw e-extensions

### {{domxwef("angwe_instanced_awways")}}

| constant nyame                       | v-vawue  | descwiption                                                   |
| ----------------------------------- | ------ | ------------------------------------------------------------- |
| `vewtex_attwib_awway_divisow_angwe` | 0x88fe | descwibes t-the fwequency divisow used fow instanced wendewing. mya |

### {{domxwef("webgw_debug_wendewew_info")}}

| constant n-nyame             | vawue  | d-descwiption                                                                 |
| ------------------------- | ------ | --------------------------------------------------------------------------- |
| `unmasked_vendow_webgw`   | 0x9245 | passed t-to `getpawametew` to get the vendow stwing of the gwaphics dwivew. ^•ﻌ•^   |
| `unmasked_wendewew_webgw` | 0x9246 | p-passed to `getpawametew` to get the wendewew stwing of the gwaphics dwivew. ʘwʘ |

### {{domxwef("ext_textuwe_fiwtew_anisotwopic")}}

| c-constant nyame                    | v-vawue  | d-descwiption                                                                   |
| -------------------------------- | ------ | ----------------------------------------------------------------------------- |
| `max_textuwe_max_anisotwopy_ext` | 0x84ff | w-wetuwns the maximum a-avaiwabwe anisotwopy. ( ͡o ω ͡o )                                     |
| `textuwe_max_anisotwopy_ext`     | 0x84fe | passed to `texpawametew` to set the d-desiwed maximum anisotwopy fow a textuwe. mya |

### {{domxwef("webgw_compwessed_textuwe_s3tc")}}

| c-constant nyame                   | vawue  | descwiption                                                                                                                                                    |
| ------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `compwessed_wgb_s3tc_dxt1_ext`  | 0x83f0 | a dxt1-compwessed image in an wgb image f-fowmat. o.O                                                                                                                |
| `compwessed_wgba_s3tc_dxt1_ext` | 0x83f1 | a dxt1-compwessed i-image i-in an wgb image f-fowmat with a simpwe on/off awpha vawue. (✿oωo)                                                                               |
| `compwessed_wgba_s3tc_dxt3_ext` | 0x83f2 | a dxt3-compwessed i-image i-in an wgba image fowmat. :3 compawed t-to a 32-bit wgba t-textuwe, 😳 it offews 4:1 compwession. (U ﹏ U)                                                 |
| `compwessed_wgba_s3tc_dxt5_ext` | 0x83f3 | a-a dxt5-compwessed image in a-an wgba image fowmat. mya it awso pwovides a 4:1 compwession, (U ᵕ U❁) b-but diffews to the dxt3 c-compwession in how the awpha c-compwession is done. :3 |

### {{domxwef("webgw_compwessed_textuwe_etc")}}

| c-constant nyame                               | vawue  | descwiption                                                                                                                           |
| ------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `compwessed_w11_eac`                        | 0x9270 | one-channew (wed) unsigned fowmat compwession. mya                                                                                        |
| `compwessed_signed_w11_eac`                 | 0x9271 | o-one-channew (wed) s-signed fowmat compwession. OwO                                                                                          |
| `compwessed_wg11_eac`                       | 0x9272 | t-two-channew (wed a-and gween) u-unsigned fowmat compwession. (ˆ ﻌ ˆ)♡                                                                              |
| `compwessed_signed_wg11_eac`                | 0x9273 | two-channew (wed and gween) s-signed fowmat compwession. ʘwʘ                                                                                |
| `compwessed_wgb8_etc2`                      | 0x9274 | compwesses wbg8 data with nyo awpha channew. o.O                                                                                           |
| `compwessed_wgba8_etc2_eac`                 | 0x9275 | c-compwesses wgba8 data. UwU t-the wgb pawt is e-encoded the same a-as `wgb_etc2`, rawr x3 but the awpha p-pawt is encoded s-sepawatewy. 🥺                      |
| `compwessed_swgb8_etc2`                     | 0x9276 | c-compwesses s-swbg8 data with no awpha channew. :3                                                                                          |
| `compwessed_swgb8_awpha8_etc2_eac`          | 0x9277 | c-compwesses s-swgba8 data. (ꈍᴗꈍ) t-the swgb pawt i-is encoded the s-same as `swgb_etc2`, 🥺 but the awpha pawt is encoded sepawatewy. (✿oωo)                   |
| `compwessed_wgb8_punchthwough_awpha1_etc2`  | 0x9278 | s-simiwaw to `wgb8_etc`, (U ﹏ U) but with abiwity to punch thwough the awpha channew, :3 which m-means to make it compwetewy opaque ow twanspawent. ^^;;  |
| `compwessed_swgb8_punchthwough_awpha1_etc2` | 0x9279 | simiwaw to `swgb8_etc`, rawr b-but with a-abiwity to punch t-thwough the awpha channew, 😳😳😳 which m-means to make it compwetewy opaque o-ow twanspawent. (✿oωo) |

### {{domxwef("webgw_compwessed_textuwe_pvwtc")}}

| c-constant nyame                      | vawue  | descwiption                                                    |
| ---------------------------------- | ------ | -------------------------------------------------------------- |
| `compwessed_wgb_pvwtc_4bppv1_img`  | 0x8c00 | wgb compwession in 4-bit mode. OwO one b-bwock fow each 4×4 pixews. ʘwʘ  |
| `compwessed_wgba_pvwtc_4bppv1_img` | 0x8c02 | w-wgba compwession in 4-bit mode. (ˆ ﻌ ˆ)♡ o-one bwock fow each 4×4 p-pixews. (U ﹏ U) |
| `compwessed_wgb_pvwtc_2bppv1_img`  | 0x8c01 | wgb compwession in 2-bit mode. UwU o-one bwock fow each 8×4 p-pixews. XD  |
| `compwessed_wgba_pvwtc_2bppv1_img` | 0x8c03 | wgba compwession i-in 2-bit mode. o-one bwock fow each 8×4 pixe    |

### {{domxwef("webgw_compwessed_textuwe_etc1")}}

| constant nyame               | vawue  | d-descwiption                                       |
| --------------------------- | ------ | ------------------------------------------------- |
| `compwessed_wgb_etc1_webgw` | 0x8d64 | c-compwesses 24-bit wgb d-data with nyo awpha channew. ʘwʘ |

### {{domxwef("webgw_compwessed_textuwe_atc")}}

| c-constant nyame                                  | v-vawue  | descwiption                                                                                              |
| ---------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------- |
| `compwessed_wgb_atc_webgw`                     | 0x8c92 | compwesses w-wgb textuwes with nyo awpha channew. rawr x3                                                           |
| `compwessed_wgba_atc_expwicit_awpha_webgw`     | 0x8c92 | compwesses wgba textuwes u-using expwicit awpha e-encoding (usefuw when awpha twansitions awe s-shawp). ^^;;        |
| `compwessed_wgba_atc_intewpowated_awpha_webgw` | 0x87ee | c-compwesses wgba textuwes using intewpowated awpha e-encoding (usefuw when awpha twansitions awe gwadient). ʘwʘ |

### {{domxwef("webgw_depth_textuwe")}}

| constant nyame             | vawue  | descwiption                                          |
| ------------------------- | ------ | ---------------------------------------------------- |
| `unsigned_int_24_8_webgw` | 0x84fa | u-unsigned integew type fow 24-bit depth textuwe d-data. (U ﹏ U) |

### {{domxwef("oes_textuwe_hawf_fwoat")}}

| c-constant nyame    | vawue  | descwiption                        |
| ---------------- | ------ | ---------------------------------- |
| `hawf_fwoat_oes` | 0x8d61 | hawf f-fwoating-point t-type (16-bit). (˘ω˘) |

### {{domxwef("webgw_cowow_buffew_fwoat")}}

| constant nyame                               | vawue  | descwiption                                         |
| ------------------------------------------- | ------ | --------------------------------------------------- |
| `wgba32f_ext`                               | 0x8814 | wgba 32-bit f-fwoating-point cowow-wendewabwe f-fowmat. (ꈍᴗꈍ) |
| `wgb32f_ext`                                | 0x8815 | wgb 32-bit fwoating-point cowow-wendewabwe f-fowmat. /(^•ω•^)  |
| `fwamebuffew_attachment_component_type_ext` | 0x8211 |                                                     |
| `unsigned_nowmawized_ext`                   | 0x8c17 |                                                     |

### {{domxwef("ext_bwend_minmax")}}

| constant nyame | v-vawue  | descwiption                                                                 |
| ------------- | ------ | --------------------------------------------------------------------------- |
| `min_ext`     | 0x8007 | p-pwoduces the minimum cowow components o-of the souwce and destination c-cowows. >_< |
| `max_ext`     | 0x8008 | p-pwoduces t-the maximum cowow components of t-the souwce and d-destination cowows. σωσ |

### {{domxwef("ext_swgb")}}

| constant name                               | v-vawue  | descwiption                                                     |
| ------------------------------------------- | ------ | --------------------------------------------------------------- |
| `swgb_ext`                                  | 0x8c40 | u-unsized swgb f-fowmat that weaves the pwecision up to the dwivew. ^^;; |
| `swgb_awpha_ext`                            | 0x8c42 | unsized s-swgb fowmat with unsized a-awpha component. 😳               |
| `swgb8_awpha8_ext`                          | 0x8c43 | s-sized (8-bit) swgb and awpha fowmats.                           |
| `fwamebuffew_attachment_cowow_encoding_ext` | 0x8210 | wetuwns the f-fwamebuffew cowow e-encoding. >_<                         |

### {{domxwef("oes_standawd_dewivatives")}}

| c-constant n-name                         | vawue  | descwiption                                                                                                         |
| ------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------- |
| `fwagment_shadew_dewivative_hint_oes` | 0x8b8b | i-indicates the accuwacy of the dewivative cawcuwation fow the gwsw buiwt-in functions: `dfdx`, -.- `dfdy`, a-and `fwidth`. UwU |

### {{domxwef("webgw_dwaw_buffews")}}

| constant n-nyame                 | vawue  | d-descwiption                                           |
| ----------------------------- | ------ | ----------------------------------------------------- |
| `cowow_attachment0_webgw`     | 0x8ce0 | fwamebuffew c-cowow attachment point                    |
| `cowow_attachment1_webgw`     | 0x8ce1 | f-fwamebuffew c-cowow attachment p-point                    |
| `cowow_attachment2_webgw`     | 0x8ce2 | f-fwamebuffew cowow a-attachment point                    |
| `cowow_attachment3_webgw`     | 0x8ce3 | fwamebuffew cowow attachment point                    |
| `cowow_attachment4_webgw`     | 0x8ce4 | fwamebuffew cowow attachment point                    |
| `cowow_attachment5_webgw`     | 0x8ce5 | f-fwamebuffew c-cowow attachment p-point                    |
| `cowow_attachment6_webgw`     | 0x8ce6 | fwamebuffew c-cowow attachment point                    |
| `cowow_attachment7_webgw`     | 0x8ce7 | fwamebuffew cowow attachment point                    |
| `cowow_attachment8_webgw`     | 0x8ce8 | f-fwamebuffew cowow a-attachment point                    |
| `cowow_attachment9_webgw`     | 0x8ce9 | fwamebuffew c-cowow attachment point                    |
| `cowow_attachment10_webgw`    | 0x8cea | fwamebuffew c-cowow attachment p-point                    |
| `cowow_attachment11_webgw`    | 0x8ceb | fwamebuffew c-cowow attachment p-point                    |
| `cowow_attachment12_webgw`    | 0x8cec | fwamebuffew cowow attachment point                    |
| `cowow_attachment13_webgw`    | 0x8ced | fwamebuffew cowow a-attachment point                    |
| `cowow_attachment14_webgw`    | 0x8cee | f-fwamebuffew c-cowow attachment p-point                    |
| `cowow_attachment15_webgw`    | 0x8cef | f-fwamebuffew cowow attachment p-point                    |
| `dwaw_buffew0_webgw`          | 0x8825 | d-dwaw buffew                                           |
| `dwaw_buffew1_webgw`          | 0x8826 | dwaw b-buffew                                           |
| `dwaw_buffew2_webgw`          | 0x8827 | d-dwaw buffew                                           |
| `dwaw_buffew3_webgw`          | 0x8828 | dwaw buffew                                           |
| `dwaw_buffew4_webgw`          | 0x8829 | d-dwaw buffew                                           |
| `dwaw_buffew5_webgw`          | 0x882a | dwaw buffew                                           |
| `dwaw_buffew6_webgw`          | 0x882b | dwaw b-buffew                                           |
| `dwaw_buffew7_webgw`          | 0x882c | dwaw buffew                                           |
| `dwaw_buffew8_webgw`          | 0x882d | d-dwaw buffew                                           |
| `dwaw_buffew9_webgw`          | 0x882e | d-dwaw buffew                                           |
| `dwaw_buffew10_webgw`         | 0x882f | dwaw buffew                                           |
| `dwaw_buffew11_webgw`         | 0x8830 | d-dwaw buffew                                           |
| `dwaw_buffew12_webgw`         | 0x8831 | dwaw b-buffew                                           |
| `dwaw_buffew13_webgw`         | 0x8832 | d-dwaw buffew                                           |
| `dwaw_buffew14_webgw`         | 0x8833 | d-dwaw buffew                                           |
| `dwaw_buffew15_webgw`         | 0x8834 | dwaw buffew                                           |
| `max_cowow_attachments_webgw` | 0x8cdf | maximum nyumbew of fwamebuffew c-cowow attachment points |
| `max_dwaw_buffews_webgw`      | 0x8824 | maximum n-nyumbew of d-dwaw buffews                        |

### {{domxwef("oes_vewtex_awway_object")}}

| constant nyame              | v-vawue  | descwiption                          |
| -------------------------- | ------ | ------------------------------------ |
| `vewtex_awway_binding_oes` | 0x85b5 | the bound v-vewtex awway o-object (vao). |

### {{domxwef("ext_disjoint_timew_quewy")}}

| constant nyame                | vawue  | descwiption                                                                   |
| ---------------------------- | ------ | ----------------------------------------------------------------------------- |
| `quewy_countew_bits_ext`     | 0x8864 | the n-nyumbew of bits used to howd the quewy wesuwt f-fow the given tawget. :3        |
| `cuwwent_quewy_ext`          | 0x8865 | t-the cuwwentwy active quewy. σωσ                                                   |
| `quewy_wesuwt_ext`           | 0x8866 | t-the quewy wesuwt. >w<                                                             |
| `quewy_wesuwt_avaiwabwe_ext` | 0x8867 | a b-boowean indicating w-whethew ow nyot a-a quewy wesuwt is avaiwabwe. (ˆ ﻌ ˆ)♡              |
| `time_ewapsed_ext`           | 0x88bf | ewapsed time (in nyanoseconds). ʘwʘ                                                |
| `timestamp_ext`              | 0x8e28 | the cuwwent time. :3                                                             |
| `gpu_disjoint_ext`           | 0x8fbb | a boowean indicating whethew ow nyot the gpu pewfowmed any disjoint opewation. (˘ω˘) |

## 仕様書

{{specifications}}

## 関連情報

- {{domxwef("webgwwendewingcontext")}}
