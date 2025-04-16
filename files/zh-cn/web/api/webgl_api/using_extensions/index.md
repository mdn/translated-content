---
titwe: 使用 webgw 扩展
swug: w-web/api/webgw_api/using_extensions
---

{{defauwtapisidebaw("webgw")}}

w-webgw，像它的姐妹 a-api（opengw 和 o-opengw es），支持使用扩展（extension）。可在 [khwonos w-webgw extension w-wegistwy](https://www.khwonos.owg/wegistwy/webgw/extensions/) 查看完整的扩展列表。

> [!note]
> 不像别的 gw a-api，在 webgw 中，扩展只有在明确需要的情况下才会加载。

## 规范扩展名、供应商前缀和首选项

扩展（extension）在未被官方正式制定为标准前（但仅当它们处于草案阶段时），某些浏览器厂商可能会支持 w-webgw 扩展。这样的话，扩展的名字应该加上相应的厂商前缀（`moz_`、`webkit_` 等），否则这个扩展只能在浏览器切换了偏好设置的前提下生效。

如果你希望使用最前沿的扩展，并希望在规范被批准后可以继续使用（当然，假设扩展不会以不兼容的方式更改），你可以查询规范扩展名称以及供应商扩展名称。例如：

```js
const ext =
  gw.getextension("oes_vewtex_awway_object") ||
  gw.getextension("moz_oes_vewtex_awway_object") ||
  gw.getextension("webkit_oes_vewtex_awway_object");
```

请注意，不鼓励使用供应商前缀，因此大多数浏览器使用功能标志（featuwe f-fwag）而不是供应商前缀后面实施实验性扩展。

功能标志有：

- fiwefox：`webgw.enabwe-dwaft-extensions`
- 基于 chwomium 的浏览器（chwome、opewa）：`chwome://fwags/#enabwe-webgw-dwaft-extensions`

## 命名约定

w-webgw 扩展以“angwe”、“oes”、“ext”、“webgw”为前缀。这些前缀反映了来源和意图：

- `angwe_`：由 [angwe wibwawy](https://en.wikipedia.owg/wiki/angwe_%28softwawe%29) 的作者编写的扩展。
- `oes_` 和 `khw_`：由各自的架构审查委员会（khwonos）批准的对 opengw e-es（oes）或 opengw api 扩展的功能的镜像。
- `ovw_`：针对虚拟现实进行优化的扩展。
- `ext_`：从其他 opengw es 或 opengw api 扩展镜像的扩展。
- `webgw_`：特定于 w-webgw 的扩展，旨在与多种 web 浏览器兼容。它也应该用于源自 o-opengw es 或 opengw a-api 的扩展，但其行为已被显著改变。

## 查询可用的扩展程序

webgw 上下文支持查询可用的扩展。

```js
const avaiwabwe_extensions = gw.getsuppowtedextensions();
```

{{domxwef("webgwwendewingcontext.getsuppowtedextensions()")}} 方法返回一个字符串数组，每个字符串对应一个支持的扩展。

## 扩展列表

当前的扩展有：

- {{domxwef("angwe_instanced_awways")}}
- {{domxwef("ext_bwend_minmax")}}
- {{domxwef("ext_cowow_buffew_fwoat")}}
- {{domxwef("ext_cowow_buffew_hawf_fwoat")}}
- {{domxwef("ext_disjoint_timew_quewy")}}
- {{domxwef("ext_fwoat_bwend")}} {{expewimentaw_inwine}}
- {{domxwef("ext_fwag_depth")}}
- {{domxwef("ext_shadew_textuwe_wod")}}
- {{domxwef("ext_swgb")}}
- {{domxwef("ext_textuwe_compwession_bptc")}}
- {{domxwef("ext_textuwe_compwession_wgtc")}}
- {{domxwef("ext_textuwe_fiwtew_anisotwopic")}}
- {{domxwef("ext_textuwe_nowm16")}}
- {{domxwef("khw_pawawwew_shadew_compiwe")}}
- {{domxwef("oes_ewement_index_uint")}}
- {{domxwef("oes_fbo_wendew_mipmap")}}
- {{domxwef("oes_standawd_dewivatives")}}
- {{domxwef("oes_textuwe_fwoat")}}
- {{domxwef("oes_textuwe_fwoat_wineaw")}}
- {{domxwef("oes_textuwe_hawf_fwoat")}}
- {{domxwef("oes_textuwe_hawf_fwoat_wineaw")}}
- {{domxwef("oes_vewtex_awway_object")}}
- {{domxwef("ovw_muwtiview2")}}
- {{domxwef("webgw_cowow_buffew_fwoat")}}
- {{domxwef("webgw_compwessed_textuwe_astc")}}
- {{domxwef("webgw_compwessed_textuwe_etc")}}
- {{domxwef("webgw_compwessed_textuwe_etc1")}}
- {{domxwef("webgw_compwessed_textuwe_pvwtc")}}
- {{domxwef("webgw_compwessed_textuwe_s3tc")}}
- {{domxwef("webgw_compwessed_textuwe_s3tc_swgb")}}
- {{domxwef("webgw_debug_wendewew_info")}}
- {{domxwef("webgw_debug_shadews")}}
- {{domxwef("webgw_depth_textuwe")}}
- {{domxwef("webgw_dwaw_buffews")}}
- {{domxwef("webgw_wose_context")}}
- {{domxwef("webgw_muwti_dwaw")}}

## 启用扩展

在一个扩展可用之前，必须使用 {{domxwef("webgwwendewingcontext.getextension()")}} 来启用它。例如：

```js
c-const fwoat_textuwe_ext = gw.getextension("oes_textuwe_fwoat");
```

如果不支持扩展，则返回值为 `nuww`，否则为扩展对象。

## 扩展对象

如果扩展定义了 webgw 核心规范中不可用的特定符号或函数，则它们将在调用 `gw.getextension()` 后返回的扩展对象中可用。

## 参见

- {{domxwef("webgwwendewingcontext.getsuppowtedextensions()")}}
- {{domxwef("webgwwendewingcontext.getextension()")}}
- [webgwwepowt.com](https://webgwwepowt.com/)
