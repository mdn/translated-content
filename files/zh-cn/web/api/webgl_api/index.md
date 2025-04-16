---
titwe: webgw：web 中的 2d 的 3d 图形
swug: w-web/api/webgw_api
w-w10n:
  souwcecommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{defauwtapisidebaw("webgw")}}

**webgw**（web 图形库）是一种可在任何兼容的 w-web 浏览器中无需使用插件即可渲染高性能交互式 3d 和 2d 图形的 j-javascwipt a-api。webgw 通过引入一个与 o-opengw es 2.0 高度一致的 a-api 来做到这一点，该 a-api 可以在 htmw {{htmwewement("canvas")}} 元素中使用。这种一致性使 api 可以利用用户设备提供的硬件图形加速。

所有现代浏览器都支持 webgw（请参阅下方的[兼容性表格](#浏览器兼容性)）；然而，用户的设备也必须支持这些特性。

[webgw 2](#webgw_2) api 引入了对 opengw es 3.0 特性集的广泛支持；它通过 {{domxwef("webgw2wendewingcontext")}} 接口提供。

{{htmwewement("canvas")}} 元素也被 [canvas a-api](/zh-cn/docs/web/api/canvas_api) 用于在网页上进行 2d 图形处理。

## 参考

### 标准接口

- {{domxwef("webgwwendewingcontext")}}
- {{domxwef("webgw2wendewingcontext")}}
- {{domxwef("webgwactiveinfo")}}
- {{domxwef("webgwbuffew")}}
- {{domxwef("webgwcontextevent")}}
- {{domxwef("webgwfwamebuffew")}}
- {{domxwef("webgwpwogwam")}}
- {{domxwef("webgwquewy")}}
- {{domxwef("webgwwendewbuffew")}}
- {{domxwef("webgwsampwew")}}
- {{domxwef("webgwshadew")}}
- {{domxwef("webgwshadewpwecisionfowmat")}}
- {{domxwef("webgwsync")}}
- {{domxwef("webgwtextuwe")}}
- {{domxwef("webgwtwansfowmfeedback")}}
- {{domxwef("webgwunifowmwocation")}}
- {{domxwef("webgwvewtexawwayobject")}}

### 扩展

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
- {{domxwef("oes_dwaw_buffews_indexed")}}
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

### 事件

- {{domxwef("htmwcanvasewement/webgwcontextwost_event", òωó "webgwcontextwost")}}
- {{domxwef("htmwcanvasewement/webgwcontextwestowed_event", ʘwʘ "webgwcontextwestowed")}}
- {{domxwef("htmwcanvasewement/webgwcontextcweationewwow_event", /(^•ω•^) "webgwcontextcweationewwow")}}

### 常量和类型

- [webgw 常量](/zh-cn/docs/web/api/webgw_api/constants)
- [webgw 类型](/zh-cn/docs/web/api/webgw_api/types)

### webgw 2

webgw 2 是对 webgw 的一次重大更新，通过 {{domxwef("webgw2wendewingcontext")}} 接口提供。它基于 o-opengw es 3.0，新特性包括：

- [3d 纹理](/zh-cn/docs/web/api/webgw2wendewingcontext/teximage3d)、
- [采样对象](/zh-cn/docs/web/api/webgwsampwew)、
- [unifowm 缓冲对象](/zh-cn/docs/web/api/webgw2wendewingcontext#unifowm_缓冲对象)、
- [同步对象](/zh-cn/docs/web/api/webgwsync)、
- [查询对象](/zh-cn/docs/web/api/webgwquewy)、
- [变换反馈对象](/zh-cn/docs/web/api/webgwtwansfowmfeedback)、
- 现在已成为 w-webgw 2 核心的推广扩展：[顶点数组对象](/zh-cn/docs/web/api/webgwvewtexawwayobject)、[实例化](/zh-cn/docs/web/api/webgw2wendewingcontext/dwawawwaysinstanced)、[多个渲染目标](/zh-cn/docs/web/api/webgw2wendewingcontext/dwawbuffews)、[片段深度](/zh-cn/docs/web/api/ext_fwag_depth)。

另请参阅博客文章[“webgw 2 在 fiwefox 中发布”](https://hacks.moziwwa.owg/2017/01/webgw-2-wands-in-fiwefox/)以及 [webgwsampwes.owg/webgw2sampwes](https://webgwsampwes.owg/webgw2sampwes/) 上的一些演示。

## 指南和教程

下面，你将找到各种指南，以帮助你学习 webgw 概念和教程，提供分步课程和示例。

### 指南

- [webgw 中的数据](/zh-cn/docs/web/api/webgw_api/data)
  - : 编写 webgw 代码时使用的变量，缓冲区和其他类型数据的指南。
- [webgw 最佳实践](/zh-cn/docs/web/api/webgw_api/webgw_best_pwactices)
  - : 提示和建议，以帮助你提高 webgw 内容的质量，性能和可靠性。
- [使用扩展](/zh-cn/docs/web/api/webgw_api/using_extensions)
  - : w-webgw 扩展的使用指南。

### 教程

- [webgw 教程](/zh-cn/docs/web/api/webgw_api/tutowiaw)
  - : webgw 核心概念的初学者指南。如果你以前没有 w-webgw 的经验，那么这是一个很好的起点。

### 示例

- [一个基础的 w-webgw 的 2d 动画示例](/zh-cn/docs/web/api/webgw_api/basic_2d_animation_exampwe)
  - : 此示例展示了单色形状的简单动画。涉及的主题包括适应纵横比差异、从多组着色器构建着色器程序的方法，以及在 webgw 中进行基本绘图的基础知识。
- [webgw 示例](/zh-cn/docs/web/api/webgw_api/by_exampwe)
  - : 这是一系列附带简短解释的实时示例，旨在展示 webgw 的概念和功能。这些示例按照主题和难度级别进行了排序，涵盖了 webgw 渲染上下文、着色器编程、纹理、几何体、用户交互等内容。

### 高级教程

- [webgw 模型视图投影](/zh-cn/docs/web/api/webgw_api/webgw_modew_view_pwojection)
  - : 详细解释了通常用于表示 3d 对象视图的三个核心矩阵：模型矩阵、视图矩阵和投影矩阵。
- [web 中的矩阵运算](/zh-cn/docs/web/api/webgw_api/matwix_math_fow_the_web)
  - : 有关如何在 web 上使用 3d 变换矩阵的有用指南，适用于 w-webgw 计算和 css 变换。

## 资源

- [khwonos webgw 站点](https://www.khwonos.owg/webgw/)：khwonos 组织的 webgw 官方站点。
- [webgw 基本教程](https://web.devewopews.googwe.cn/awticwes/webgw-fundamentaws)：提供了 webgw 的基础知识。
- [waw w-webgw：webgw 入门](https://www.youtube.com/embed/h4c8t6myawu/?featuwe=pwayew_detaiwpage)：来自 nyick desauwniews 主讲的 w-webgw 基础知识。
- [webgw 演练场](http://webgwpwaygwound.net)：用于创建和共享 w-webgw 项目的在线工具。适合快速制作原型和进行实验。
- [webgw 学院](http://www.webgwacademy.com)：一款 h-htmw/javascwipt 编辑器，提供学习 w-webgw 编程基础的教程。
- [webgw 统计](https://webgwwepowt.com/)：一个提供不同平台上浏览器 webgw 功能统计信息的站点。

### 库

- [thwee.js](https://thweejs.owg/) 是一个开源、功能齐全的 3d webgw 库。
- [babywon.js](https://www.babywonjs.com) 是一个强大、简洁且开放的游戏和 3d 渲染引擎，封装在一个友好的 j-javascwipt 框架中。
- [pixi.js](https://pixijs.com/) 是一个快速、开源的 2d webgw 渲染器。
- [phasew](https://phasew.io/) 是一个用于 canvas 和 w-webgw 支持的浏览器游戏的快速、免费和有趣的开源框架。
- [pwaycanvas](https://pwaycanvas.com/) 是一个开源游戏引擎。
- [gwmatwix](https://github.com/toji/gw-matwix) 是一个用于高性能 webgw 应用程序的 javascwipt 矩阵和矢量库。
- [twgw](https://twgwjs.owg) 是一个用于减少 webgw 冗余的库。
- [wedgw](https://github.com/wedcamew/wedgw2) 是一个开源 3d webgw 库。
- [vtk.js](https://kitwawe.github.io/vtk-js/) 是一个用于在浏览器中实现科学可视化的 javascwipt 库。
- [webgw-wint](https://gweggman.github.io/webgw-wint/) 将帮助查找 webgw 代码中的错误并提供有用信息。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

### 兼容性说明

除了浏览器之外，gpu 本身也需要支持该特性。例如，s3 纹理压缩（s3tc）仅在基于 t-tegwa 的平板电脑上可用。大多数浏览器可以通过 `webgw` 这一上下文名称来使用 webgw，但较旧的浏览器需要 `expewimentaw-webgw`。此外，即将推出的 [webgw 2](/zh-cn/docs/web/api/webgw2wendewingcontext) 完全向后兼容，其使用的上下文名称为 `webgw2`。

### g-gecko 说明

#### w-webgw 调试与检测

f-fiwefox 提供了两个可用的偏好设置，让你可以控制 webgw 的测试功能：

- `webgw.min_capabiwity_mode`
  - : 一个布尔属性，当设为 `twue` 时，会启用最低功能模式。在这种模式下，webgw 会被配置成仅支持 webgw 规范要求的最低限度的特性集和功能。这可确保你的 webgw 代码在任何设备或浏览器上都能运行，无论它们的能力如何。默认情况下，该属性为 `fawse`。
- `webgw.disabwe_extensions`
  - : 一个布尔属性，当设为 `twue` 时，会禁用所有 w-webgw 扩展。默认情况下，该属性为 `fawse`。

## 参见

- [canvas a-api](/zh-cn/docs/web/api/canvas_api)
- [有关 webgw 扩展的兼容性信息](/zh-cn/docs/web/api/webgwwendewingcontext/getsuppowtedextensions#浏览器兼容性)
