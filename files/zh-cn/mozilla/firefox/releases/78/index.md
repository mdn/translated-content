---
title: 对于开发人员的 Firefox 78
slug: Mozilla/Firefox/Releases/78
---

{{FirefoxSidebar}}

本文提供了有关 Firefox 78 中将影响开发人员的更改的信息。Firefox 78 发布于[2020 年 6 月 30 日](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates/docs/).

另请参阅 Firefox 78 中的新增功能：[DevTools 的改进，新的正则表达式引擎以及 Mozilla hacks 上大量的 Web 平台更新。](https://hacks.mozilla.org/2020/06/new-in-firefox-78/)

## 对于 Web 开发人员的更改

### 开发者工具

#### 调试器

- 现在，您可以从[关于：调试](/zh-CN/docs/Tools/about:debugging#Connecting_to_a_remote_device)面板更改远程设备访问的 URL。({{bug("1617237")}})
- 现在，[调试器](/zh-CN/docs/Tools/Debugger/UI_Tour)中的 **禁用 JavaScript** 菜单项仅影响当前选项卡，并且在关闭“开发人员工具”后会重置。({{bug("1640318")}})
- 如果在[作用域](/zh-CN/docs/Tools/Debugger/UI_Tour#Scopes)中启用**映射**，则[日志点](/zh-CN/docs/Tools/Debugger/Set_a_logpoint)可以将源映射代码中的变量名称映射回其原始名称。({{bug("1536857")}})

#### 网络监控器

- In the [Network Monitor](/zh-CN/docs/Tools/Network_Monitor/request_list#Network_request_columns), you can now resize the columns of the request list by dragging the column borders anywhere in the table. ({{bug("1618409")}})
- The [request details panel](/zh-CN/docs/Tools/Network_Monitor/request_details) in the Network Monitor has some UX improvements. ({{bug("1631302")}}, {{bug("1631295")}})
- If a request was blocked, the [request list](/zh-CN/docs/Tools/Network_Monitor/request_list) now shows the reason, such as an add-on, CSP, CORS, or Enhanced Tracking Protection. ({{bug("1555057")}}, {{bug("1445637")}}, {{bug("1556451")}})

#### 其他工具

- The [Accessibility](/zh-CN/docs/Tools/Accessibility_inspector) inspector is out of beta. You can use it to check for various accessibility issues on your site. ({{bug("1602075")}})
- Uncaught promise errors now provide all details in the Console, including their name and stack. ({{bug("1636590")}})

### CSS

- The {{CSSxRef(":is", ":is()")}} and {{CSSxRef(":where", ":where()")}} pseudo-classes are now enabled by default ([Firefox bug 1632646](https://bugzil.la/1632646)).
- The {{CSSxRef(":read-only")}} and {{CSSxRef(":read-write")}} pseudo-classes are now supported without prefixes ([Firefox bug 312971](https://bugzil.la/312971)).

  - In addition, `:read-write` styles are no longer applied to disabled [`<input>`](/zh-CN/docs/Web/HTML/Element/input) and [`<textarea>`](/zh-CN/docs/Web/HTML/Element/textarea) elements, which was a violation of [the HTML spec](https://html.spec.whatwg.org/#selector-read-write) ([Firefox bug 888884](https://bugzil.la/888884)).

### JavaScript

- The [`Intl.ListFormat`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat) API is now supported ([Firefox bug 1589095](https://bugzil.la/1589095)).
- The [`Intl.NumberFormat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) constructor has been extended to support new options specified in the [Intl.NumberFormat Unified API Proposal](https://github.com/tc39/proposal-unified-intl-numberformat) ([Firefox bug 1633836](https://bugzil.la/1633836)). This includes among other things:

  - [Support for scientific notations](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#Scientific_engineering_or_compact_notations)
  - [Unit](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#Unit_formatting), [currency](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#Currency_formatting) and [sign display](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#Displaying_signs) formatting

- The {{JSxRef("RegExp")}} engine [has been updated](https://hacks.mozilla.org/2020/06/a-new-regexp-engine-in-spidermonkey/) and now supports all new features introduced in ECMAScript 2018:

  - [Lookbehind assertions](/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions) ([Firefox bug 1225665](https://bugzil.la/1225665))
  - {{JSxRef("RegExp.prototype.dotAll")}} ([Firefox bug 1361856](https://bugzil.la/1361856))
  - [Unicode property escapes](/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes) ([Firefox bug 1361876](https://bugzil.la/1361876))
  - [Named capture groups](/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges) ([Firefox bug 1362154](https://bugzil.la/1362154))

- Due to a [WebIDL spec change](https://github.com/heycam/webidl/pull/357) in mid-2020, we've [added a `Symbol.toStringTag` property to all DOM prototype objects](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag#toStringTag_available_on_all_DOM_prototype_objects) ([Firefox bug 1277799](https://bugzil.la/1277799)).
- The garbage collection of {{jsxref("WeakMap")}} objects has been improved. `WeakMaps` are now marked incrementally ([Firefox bug 1167452](https://bugzil.la/1167452)).

### 一些 API

#### DOM

- The {{DOMxRef("ParentNode.replaceChildren()")}} method has been implemented ([Firefox bug 1626015](https://bugzil.la/1626015)).

#### 服务工作者

- [Extended Support Releases (ESR)](https://www.mozilla.org/en-US/firefox/organizations/): Firefox 78 is the first ESR release that supports [Service workers](/zh-CN/docs/Web/API/Service_Worker_API) (and the [Push API](/zh-CN/docs/Web/API/Push_API)). Earlier ESR releases had no support ([Firefox bug 1547023](https://bugzil.la/1547023)).

### Web 组装

- [Wasm Multi-value](https://hacks.mozilla.org/2019/11/multi-value-all-the-wasm/) is now supported, meaning that WebAssembly functions can now return multiple values, and instruction sequences can consume and produce multiple stack values ([Firefox bug 1628321](https://bugzil.la/1628321)).
- WebAssembly now supports import and export of 64-bit integer function parameters (i64) using [`BigInt`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt) from JavaScript ([Firefox bug 1608770](https://bugzil.la/1608770)).

### TLS 1.0 和 1.1 已被移除

- 所有浏览器都不再支持[传输层安全](/zh-CN/docs/Web/Security/Transport_Layer_Security) (TLS) 协议的 1.0 和 1.1 版本。阅读[TLS 1.0 和 1.1 删除更新](https://hacks.mozilla.org/2019/05/tls-1-0-and-1-1-removal-update/)以获取先前的公告，以及如果受到影响应采取的措施 ([Firefox bug 1643229](https://bugzil.la/1643229)).

## 对于附加组件开发人员的更改

- {{WebExtAPIRef("browsingData.removeCache")}} 和 {{WebExtAPIRef("browsingData.removePluginData")}} 现在支持按主机名删除。([Firefox bug 1636784](https://bugzil.la/1636784)).
- 使用[`proxy.onRequest`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/proxy/onRequest)时，现在可以正确应用基于选项卡 ID 或窗口 ID 限制的过滤器。这对于希望仅在一个窗口中提供代理功能的加载项很有用。
- 现在，从“所有选项卡”下拉菜单中[单击上下文菜单](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/menus/onClicked)即可传递适当的选项卡对象。过去，活动选项卡被错误地传递了。
- 当使用带有另存为选项的[`downloads.download`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/downloads/download)时，可以记住最近使用的目录。尽管此信息对开发人员用处不大，但对用户而言却非常方便。

## 旧版本

{{Firefox_for_developers(77)}}
