---
title: Firefox 78 的开发者说明
slug: Mozilla/Firefox/Releases/78
l10n:
  sourceCommit: e088b8a1e80e78da560675a4b05e91737d85a4cf
---

本文提供了有关 Firefox 78 中影响开发者的变更信息。Firefox 78 于 2020 年 6 月 30 日发布。

参见 Mozilla hacks 上的 [Firefox 78 中的新增功能：DevTools 的改进，新的正则表达式引擎以及大量的 Web 平台更新](https://hacks.mozilla.org/2020/06/new-in-firefox-78/)。

## 为 Web 开发者带来的变化

### 开发者工具

#### 调试器

- 现在，你可以从 [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#connecting-to-a-remote-device) 面板更改远程设备访问的 URL。（[Firefox bug 1617237](https://bugzil.la/1617237)）
- 现在，[调试器](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html)中的 **禁用 JavaScript** 菜单项仅影响当前标签页，并且在关闭“开发者工具”后会重置。（[Firefox bug 1640318](https://bugzil.la/1640318)）
- 如果在[作用域面板](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#scopes)中启用**映射**，[日志点](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_a_logpoint/index.html)可以将源代码映射代码中的变量名映射回其原始名称。（[Firefox bug 1536857](https://bugzil.la/1536857)）

#### 网络监视器

- 在[网络监视器](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns)中，现在可以通过拖动表格中任意位置的列边框来调整请求列表的列宽。（[Firefox bug 1618409](https://bugzil.la/1618409)）
- 对网络监控器中的[请求详情面板](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html)的用户体验进行了一些改进。（[Firefox bug 1631302](https://bugzil.la/1631302)、[Firefox bug 1631295](https://bugzil.la/1631295)）
- 如果请求被阻止，[请求列表](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html) 现在会显示原因，如附加组件、CSP、CORS 或增强型跟踪保护。（[Firefox bug 1555057](https://bugzil.la/1555057)、[Firefox bug 1445637](https://bugzil.la/1445637)、[Firefox bug 1556451](https://bugzil.la/1556451)）

#### 其他工具

- [无障碍环境](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html)检查器已发布测试版。你可以用它来检查网站上的各种辅助功能问题。（[Firefox bug 1602075](https://bugzil.la/1602075)）
- 未捕获的 Promise 错误现在会在控制台中提供所有详细信息，包括名称和堆栈。（[Firefox bug 1636590](https://bugzil.la/1636590)）

### CSS

- 现在，{{CSSxRef(":is", ":is()")}} 和 {{CSSxRef(":where", ":where()")}} 伪类已默认启用（[Firefox bug 1632646](https://bugzil.la/1632646)）。
- 现支持不带前缀的 {{CSSxRef(":read-only")}} 和 {{CSSxRef(":read-write")}} 伪类（[Firefox bug 312971](https://bugzil.la/312971)）。
  - 此外，`:read-write` 样式不再应用于禁用的 [`<input>`](/zh-CN/docs/Web/HTML/Reference/Elements/input) 和 [`<textarea>`](/zh-CN/docs/Web/HTML/Reference/Elements/textarea) 元素，之前的行为违反了 [HTML 规范](https://html.spec.whatwg.org/#selector-read-write)（[Firefox bug 888884](https://bugzil.la/888884)）。

### JavaScript

- 现支持 [`Intl.ListFormat`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat) API（[Firefox bug 1589095](https://bugzil.la/1589095)）。
- 扩展了 [`Intl.NumberFormat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) 构造函数，以支持 [Intl.NumberFormat Unified API 提案](https://github.com/tc39/proposal-unified-intl-numberformat)中指定的新选项（[Firefox bug 1633836](https://bugzil.la/1633836)）。其中包括：
  - [科学计数法支持](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#科学工程或紧凑型标记)
  - [单位](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#单位格式化)、[货币](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#货币格式化)和[符号显示](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#符号显示)格式化

- {{JSxRef("RegExp")}} 引擎[已更新](https://hacks.mozilla.org/2020/06/a-new-regexp-engine-in-spidermonkey/)，现在支持 ECMAScript 2018 中引入的所有新特性：
  - [后行断言](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)（[Firefox bug 1225665](https://bugzil.la/1225665)）
  - {{JSxRef("RegExp.prototype.dotAll")}}（[Firefox bug 1361856](https://bugzil.la/1361856)）
  - [Unicode 属性转义](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)（[Firefox bug 1361876](https://bugzil.la/1361876)）
  - [具名捕获组](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)（[Firefox bug 1362154](https://bugzil.la/1362154)）

- 由于 2020 年中期的 [WebIDL 规范变更](https://github.com/heycam/webidl/pull/357)，我们[为所有 DOM 原型对象添加了 `Symbol.toStringTag` 属性](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag#tostringtag_适用于所有_dom_原型对象)（[Firefox bug 1277799](https://bugzil.la/1277799)）。
- 改进了 {{jsxref("WeakMap")}} 对象的垃圾回收。`WeakMap` 现在会以增量方式进行标记（[Firefox bug 1167452](https://bugzil.la/1167452)）。

### API

#### DOM

- 已实现 {{DOMxRef("Element.replaceChildren")}} 方法（[Firefox bug 1626015](https://bugzil.la/1626015)）。

#### Service worker

- [延长支持版（ESR）](https://www.mozilla.org/zh-CN/firefox/enterprise/)：Firefox 78 是首个支持 [Service worker](/zh-CN/docs/Web/API/Service_Worker_API)（以及 [Push API](/zh-CN/docs/Web/API/Push_API)）的 ESR 版本。早期的 ESR 版本不提供支持（[Firefox bug 1547023](https://bugzil.la/1547023)）。

### WebAssembly

- 现支持 [Wasm Multi-value](https://hacks.mozilla.org/2019/11/multi-value-all-the-wasm/)，这意味着 WebAssembly 函数现在可以返回多个值，指令序列可以消耗和产生多个堆栈值（[Firefox bug 1628321](https://bugzil.la/1628321)）。
- WebAssembly 现在支持从 JavaScript 使用 [`BigInt`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt) 导入和导出 64 位整数函数参数（i64）（[Firefox bug 1608770](https://bugzil.la/1608770)）。

### TLS 1.0 和 1.1 已被移除

- 所有浏览器都不再支持[传输层安全](/zh-CN/docs/Web/Security/Defenses/Transport_Layer_Security)（TLS）协议的 1.0 和 1.1 版本。阅读 [TLS 1.0 和 1.1 删除更新](https://hacks.mozilla.org/2019/05/tls-1-0-and-1-1-removal-update/)以获取先前的公告，以及如果受到影响应采取的措施（[Firefox bug 1643229](https://bugzil.la/1643229)）。

## 为附加组件开发者带来的变化

- {{WebExtAPIRef("browsingData.removeCache")}} 和 {{WebExtAPIRef("browsingData.removePluginData")}} 现支持按主机名删除。（[Firefox bug 1636784](https://bugzil.la/1636784)）
- 使用 [`proxy.onRequest`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/proxy/onRequest) 时，现在可以正确应用基于选项卡 ID 或窗口 ID 限制的过滤器。这对于希望仅在一个窗口中提供代理功能的加载项很有用。
- 现在，从“所有选项卡”下拉菜单中[单击上下文菜单](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/menus/onClicked)即可传递适当的选项卡对象。过去，活动选项卡被错误地传递了。
- 当使用带有另存为选项的 [`downloads.download`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/downloads/download) 时，可以记住最近使用的目录。尽管此信息对开发人员用处不大，但对用户而言却非常方便。

## 更早期的版本

{{Firefox_for_developers}}
