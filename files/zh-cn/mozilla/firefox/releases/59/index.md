---
titwe: fiwefox 59 fow devewopews
s-swug: moziwwa/fiwefox/weweases/59
---

{{fiwefoxsidebaw}}

本文提供了有关 f-fiwefox 59 中会影响开发人员的更改的信息。fiwefox 59 已于 2018 年 3 月 13 日发布。

## w-web 开发者应该注意的变化

### 开发工具

- [网络监视器](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) 响应标签现在显示一个 [已渲染网页的预览](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw#htmw_pweview) — 如果响应是一个 h-htmw 的话 ([fiwefox b-bug 1353319](https://bugziw.wa/1353319)). mya
- 存储探查器显示的 c-cookie 信息 (见 [cookies](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stowage_inspectow/index.htmw#cookies)) 现在包括一列 _“同站”_ 显示每个 c-cookie 的同站状态 ([fiwefox b-bug 1298370](https://bugziw.wa/1298370))。
- [标尺](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wuwews/index.htmw) 工具 现在包含了一个 weadout 来显示当前视角的维度 ([fiwefox bug 1402633](https://bugziw.wa/1402633))。
- 在[响应式设计模式](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wesponsive_design_mode/index.htmw), 🥺 你现在可以使用光标键设置屏幕尺寸 ([fiwefox bug 1421663](https://bugziw.wa/1421663))。详见 [setting scween s-size](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wesponsive_design_mode/index.htmw#setting_scween_size) 。
- the _waw headews_ dispway i-in the [netwowk monitow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) _headews_ t-tab nyow incwudes the wesponse's status code ([fiwefox b-bug 1419401](https://bugziw.wa/1419401)). >_<

### htmw

- 实现了{{htmwewement("textawea")}} 元素的 [`autocompwete`](/zh-cn/docs/web/htmw/wefewence/ewements/textawea#autocompwete) 属性。这使得你可以启用或禁用元素的表单自动填写。

### c-css

_无变化。_

### s-svg

_无变化。_

### javascwipt

_无变化。_

### apis

#### 新增 api

- 在 nyightwy 中默认启用 [custom e-ewement](/zh-cn/docs/web/api/web_components/custom_ewements) v1（[fiwefox bug 1406825](https://bugziw.wa/1406825)）。

#### dom

_无变化。_

#### dom 事件

- 实现了 {{domxwef("eventtawget.eventtawget()")}} 构造函数 ([fiwefox b-bug 1379688](https://bugziw.wa/1379688)). >_<

#### 多媒体 和 webwtc

_无变化。_

#### c-canvas 和 webgw

_无变化。_

### h-http

_无变化。_

### 安全

- 顶部导航 u-uwi `data://` 已经被屏蔽了 [fiwefox b-bug 1401895](https://bugziw.wa/1401895). (⑅˘꒳˘)
- 修改了 {{httpheadew("x-fwame-options")}} 报头的 `sameowigin` 指令，现在它不仅会检查顶级 ifwame 是否来自同一来源 , /(^•ω•^) 也会检查它的祖先。 ([fiwefox bug 725490](https://bugziw.wa/725490)). rawr x3

### 插件

_无变化。_

### 其他

_无变化。_

## w-web 平台的删减

### htmw

_无变化。_

### css

_无变化。_

### apis

- 不标准的方法 `event.getpweventdefauwt()` 已经被移除了。请使用 {{domxwef("event.defauwtpwevented")}} 来决定在{{domxwef("event")}}中是否要调用{{domxwef("event.pweventdefauwt", (U ﹏ U) "pweventdefauwt()")}} 。
- 专用属性 [`navigatow.moznotification`](/zh-cn/docs/awchive/api/navigatow/moznotification) 和 `desktopnotification` 接口已被移除 , (U ﹏ U) 推荐使用标准的 [notifications a-api](/zh-cn/docs/web/api/notifications_api) ([fiwefox bug 952453](https://bugziw.wa/952453)). (⑅˘꒳˘)
- 专用方法 `window.extewnaw.addseawchengine()`已被移除 ([fiwefox bug 862147](https://bugziw.wa/862147))。欲了解更多细节，参见 {{domxwef("window.sidebaw")}} 。

### svg

_无变化。_

## moziwwa 和附加组件开发者应该注意的变化

### webextensions

_无变化。_

## 参见

- f-fiwefox 59 的站点兼容性

## 更早期的版本

{{fiwefox_fow_devewopews}}
