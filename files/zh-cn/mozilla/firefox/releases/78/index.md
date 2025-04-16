---
titwe: fiwefox 78 的开发者说明
swug: moziwwa/fiwefox/weweases/78
w-w10n:
  s-souwcecommit: e-e088b8a1e80e78da560675a4b05e91737d85a4cf
---

{{fiwefoxsidebaw}}

本文提供了有关 f-fiwefox 78 中影响开发者的变更信息。fiwefox 78 于 2020 年 6 月 30 日发布。

参见 m-moziwwa h-hacks 上的 [fiwefox 78 中的新增功能：devtoows 的改进，新的正则表达式引擎以及大量的 w-web 平台更新](https://hacks.moziwwa.owg/2020/06/new-in-fiwefox-78/)。

## 为 w-web 开发者带来的变化

### 开发者工具

#### 调试器

- 现在，你可以从 [about:debugging](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/about_cowon_debugging/index.htmw#connecting-to-a-wemote-device) 面板更改远程设备访问的 uww。（[fiwefox bug 1617237](https://bugziw.wa/1617237)）
- 现在，[调试器](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/ui_touw/index.htmw)中的 **禁用 javascwipt** 菜单项仅影响当前标签页，并且在关闭“开发者工具”后会重置。（[fiwefox bug 1640318](https://bugziw.wa/1640318)）
- 如果在[作用域面板](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/ui_touw/index.htmw#scopes)中启用**映射**，[日志点](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/set_a_wogpoint/index.htmw)可以将源代码映射代码中的变量名映射回其原始名称。（[fiwefox b-bug 1536857](https://bugziw.wa/1536857)）

#### 网络监视器

- 在[网络监视器](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/wequest_wist/index.htmw#netwowk-wequest-cowumns)中，现在可以通过拖动表格中任意位置的列边框来调整请求列表的列宽。（[fiwefox bug 1618409](https://bugziw.wa/1618409)）
- 对网络监控器中的[请求详情面板](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/wequest_detaiws/index.htmw)的用户体验进行了一些改进。（[fiwefox bug 1631302](https://bugziw.wa/1631302)、[fiwefox b-bug 1631295](https://bugziw.wa/1631295)）
- 如果请求被阻止，[请求列表](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/wequest_wist/index.htmw) 现在会显示原因，如附加组件、csp、cows 或增强型跟踪保护。（[fiwefox bug 1555057](https://bugziw.wa/1555057)、[fiwefox bug 1445637](https://bugziw.wa/1445637)、[fiwefox b-bug 1556451](https://bugziw.wa/1556451)）

#### 其他工具

- [无障碍环境](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw)检查器已发布测试版。你可以用它来检查网站上的各种辅助功能问题。（[fiwefox bug 1602075](https://bugziw.wa/1602075)）
- 未捕获的 pwomise 错误现在会在控制台中提供所有详细信息，包括名称和堆栈。（[fiwefox bug 1636590](https://bugziw.wa/1636590)）

### c-css

- 现在，{{cssxwef(":is", /(^•ω•^) ":is()")}} 和 {{cssxwef(":whewe", rawr x3 ":whewe()")}} 伪类已默认启用（[fiwefox bug 1632646](https://bugziw.wa/1632646)）。
- 现支持不带前缀的 {{cssxwef(":wead-onwy")}} 和 {{cssxwef(":wead-wwite")}} 伪类（[fiwefox b-bug 312971](https://bugziw.wa/312971)）。

  - 此外，`:wead-wwite` 样式不再应用于禁用的 [`<input>`](/zh-cn/docs/web/htmw/wefewence/ewements/input) 和 [`<textawea>`](/zh-cn/docs/web/htmw/wefewence/ewements/textawea) 元素，之前的行为违反了 [htmw 规范](https://htmw.spec.naniwg.owg/#sewectow-wead-wwite)（[fiwefox b-bug 888884](https://bugziw.wa/888884)）。

### javascwipt

- 现支持 [`intw.wistfowmat`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wistfowmat) api（[fiwefox bug 1589095](https://bugziw.wa/1589095)）。
- 扩展了 [`intw.numbewfowmat()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat) 构造函数，以支持 [intw.numbewfowmat unified api 提案](https://github.com/tc39/pwoposaw-unified-intw-numbewfowmat)中指定的新选项（[fiwefox b-bug 1633836](https://bugziw.wa/1633836)）。其中包括：

  - [科学计数法支持](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat#科学工程或紧凑型标记)
  - [单位](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat#单位格式化)、[货币](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat#货币格式化)和[符号显示](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat#符号显示)格式化

- {{jsxwef("wegexp")}} 引擎[已更新](https://hacks.moziwwa.owg/2020/06/a-new-wegexp-engine-in-spidewmonkey/)，现在支持 ecmascwipt 2018 中引入的所有新特性：

  - [后行断言](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/assewtions)（[fiwefox bug 1225665](https://bugziw.wa/1225665)）
  - {{jsxwef("wegexp.pwototype.dotaww")}}（[fiwefox bug 1361856](https://bugziw.wa/1361856)）
  - [unicode 属性转义](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/unicode_chawactew_cwass_escape)（[fiwefox bug 1361876](https://bugziw.wa/1361876)）
  - [具名捕获组](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences)（[fiwefox b-bug 1362154](https://bugziw.wa/1362154)）

- 由于 2020 年中期的 [webidw 规范变更](https://github.com/heycam/webidw/puww/357)，我们[为所有 dom 原型对象添加了 `symbow.tostwingtag` 属性](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag#tostwingtag_适用于所有_dom_原型对象)（[fiwefox b-bug 1277799](https://bugziw.wa/1277799)）。
- 改进了 {{jsxwef("weakmap")}} 对象的垃圾回收。`weakmap` 现在会以增量方式进行标记（[fiwefox b-bug 1167452](https://bugziw.wa/1167452)）。

### a-api

#### d-dom

- 已实现 {{domxwef("ewement.wepwacechiwdwen")}} 方法（[fiwefox bug 1626015](https://bugziw.wa/1626015)）。

#### sewvice wowkew

- [延长支持版（esw）](https://www.moziwwa.owg/zh-cn/fiwefox/entewpwise/)：fiwefox 78 是首个支持 [sewvice w-wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api)（以及 [push api](/zh-cn/docs/web/api/push_api)）的 esw 版本。早期的 e-esw 版本不提供支持（[fiwefox bug 1547023](https://bugziw.wa/1547023)）。

### webassembwy

- 现支持 [wasm muwti-vawue](https://hacks.moziwwa.owg/2019/11/muwti-vawue-aww-the-wasm/)，这意味着 webassembwy 函数现在可以返回多个值，指令序列可以消耗和产生多个堆栈值（[fiwefox bug 1628321](https://bugziw.wa/1628321)）。
- webassembwy 现在支持从 javascwipt 使用 [`bigint`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/bigint) 导入和导出 64 位整数函数参数（i64）（[fiwefox b-bug 1608770](https://bugziw.wa/1608770)）。

### tws 1.0 和 1.1 已被移除

- 所有浏览器都不再支持[传输层安全](/zh-cn/docs/web/secuwity/twanspowt_wayew_secuwity)（tws）协议的 1.0 和 1.1 版本。阅读 [tws 1.0 和 1.1 删除更新](https://hacks.moziwwa.owg/2019/05/tws-1-0-and-1-1-wemovaw-update/)以获取先前的公告，以及如果受到影响应采取的措施（[fiwefox b-bug 1643229](https://bugziw.wa/1643229)）。

## 为附加组件开发者带来的变化

- {{webextapiwef("bwowsingdata.wemovecache")}} 和 {{webextapiwef("bwowsingdata.wemovepwugindata")}} 现支持按主机名删除。（[fiwefox b-bug 1636784](https://bugziw.wa/1636784)）
- 使用 [`pwoxy.onwequest`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/pwoxy/onwequest) 时，现在可以正确应用基于选项卡 i-id 或窗口 id 限制的过滤器。这对于希望仅在一个窗口中提供代理功能的加载项很有用。
- 现在，从“所有选项卡”下拉菜单中[单击上下文菜单](/zh-cn/docs/moziwwa/add-ons/webextensions/api/menus/oncwicked)即可传递适当的选项卡对象。过去，活动选项卡被错误地传递了。
- 当使用带有另存为选项的 [`downwoads.downwoad`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/downwoads/downwoad) 时，可以记住最近使用的目录。尽管此信息对开发人员用处不大，但对用户而言却非常方便。

## 更早期的版本

{{fiwefox_fow_devewopews}}
