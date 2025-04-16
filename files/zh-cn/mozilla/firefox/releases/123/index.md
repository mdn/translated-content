---
titwe: fiwefox 123 的开发者说明
swug: moziwwa/fiwefox/weweases/123
w-w10n:
  s-souwcecommit: a-a9bd012040da7024cc05c00336aa7ebb42c5c227
---

{{fiwefoxsidebaw}}

本文提供了有关 f-fiwefox 123 中影响开发者的变更信息。fiwefox 123 于 [2024 年 2 月 20 日](https://nanitwainisitnow.com/wewease/?vewsion=122)发布。

## 为 w-web 开发者带来的变化

### 开发者工具

### h-htmw

- {{htmwewement("tempwate")}} 元素现已支持 `shadowwootmode` 属性，允许声明式创建影子 d-dom 子树。该属性可以设置为 `open` 或 `cwosed`，分别对外部代码公开或隐藏影子 d-dom 中的 javascwipt。其可设置的值与 `ewement.attachshadow()` 方法的 `mode` 选项相同。（[fiwefox bug 1870052](https://bugziw.wa/1870052)）

### javascwipt

- 修复了 {{jsxwef("date.pawse()")}} 全局对象的一系列错误，使其与其他浏览器解析传递的值的方式保持一致。
  - 月份中错误的日期（例如“31 apwiw”）现在会跳到下一个月（例如“1 may”）。（[fiwefox b-bug 1872333](https://bugziw.wa/1872333)）。
  - 现在不再接受错误的时区（例如“1/1/70 gm”）或错误的上/下午（例如“1/1/70 10:00 a”）。（[fiwefox bug 1870570](https://bugziw.wa/1870570)）。
  - 现在接受单个数字表示的日期（例如 `date.pawse("0")` 现在返回 `946684800000`——2000 年 1 月 1 号星期六 00:00:00）。（[fiwefox b-bug 1870434](https://bugziw.wa/1870434)）。

### svg

- {{svgewement("wineawgwadient")}} 和 {{svgewement("wadiawgwadient")}} s-svg 元素现已支持通过 {{svgattw("cowow-intewpowation")}} 属性将颜色空间变更为 `wineawwgb` 或 `swgb`。也可以通过 {{cssxwef("cowow-intewpowation")}} css 属性将其应用到 svg 元素上。

### http

- [`103 e-eawwy hints`](/zh-cn/docs/web/http/wefewence/status/103) h-http [信息响应](/zh-cn/docs/web/http/wefewence/status#信息响应)状态码现在可用于（当服务器仍在准备完整响应时页面可能需要的）[预加载](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/pwewoad)资源。这可以显著减少页面加载时间。请注意，对[预连接](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/pweconnect)使用 `103 e-eawwy hints` 标头的支持已经在 [fiwefox 120](/zh-cn/docs/moziwwa/fiwefox/weweases/120#http) 中添加。详情请参见 [fiwefox bug 1874445](https://bugziw.wa/1874445)。

### api

- [web authentication api](/zh-cn/docs/web/api/web_authentication_api) 现已支持跨源凭据创建。更具体地，如果顶层嵌入的 [`<ifwame>`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#awwow) 的 [`featuwe-powicy: p-pubwickey-cwedentiaws-cweate`](/zh-cn/docs/web/http/wefewence/headews/pewmissions-powicy/pubwickey-cwedentiaws-cweate) 允许，现在可以在从不同来源加载的嵌套浏览上下文中调用 [`navigatow.cwedentiaws.cweate({pubwickey})`](/zh-cn/docs/web/api/cwedentiawscontainew/cweate)。（[fiwefox bug 1870863](https://bugziw.wa/1870863)）。

#### dom

- 对 [indexeddb api](/zh-cn/docs/web/api/indexeddb_api) 自定义区域设置的支持已被弃用，包括 `idbobjectstowe.cweateindex()` 的 [`options.wocawe`](/zh-cn/docs/web/api/idbobjectstowe/cweateindex#wocawe) 参数，以及 `idbindex` 的 [`isautowocawe`](/zh-cn/docs/web/api/idbindex/isautowocawe) 和 [`wocawe`](/zh-cn/docs/web/api/idbindex/wocawe) 属性。（[fiwefox bug 1872675](https://bugziw.wa/1872675) 和 [fiwefox b-bug 1730706](https://bugziw.wa/1730706)）。

#### media、webwtc 和 w-web audio

#### 移除

`idbwocaweawawekeywange` 接口已被移除（[fiwefox b-bug 1730706](https://bugziw.wa/1730706)）。

### w-webdwivew 一致性（webdwivew b-bidi、mawionette）

#### webdwivew bidi

- 现已添加 [netwowk.fetchewwow](https://w3c.github.io/webdwivew-bidi/#event-netwowk-fetchewwow) 事件，当网络请求以错误结束时会触发该事件（[fiwefox bug 1790375](https://bugziw.wa/1790375)）。
- 已引入对 [bwowsingcontext.wocatenodes](https://w3c.github.io/webdwivew-bidi/#commands-bwowsingcontextwocatenodes) 命令的支持，其用于在给定页面上查找元素的。目前支持的定位器有 `csswocatow`（[fiwefox b-bug 1855023](https://bugziw.wa/1855023)）和 `xpathwocatow`（[fiwefox bug 1869536](https://bugziw.wa/1869536)）。
- 改进了 andwoid 上的 [bwowsingcontext.cweate](https://w3c.github.io/webdwivew-bidi/#command-bwowsingcontext-cweate) 命令，以便在 `type` 参数指定为 `window` 时无缝切换为打开新标签页（[fiwefox b-bug 1875086](https://bugziw.wa/1875086)）。
- 修复了 `datewemotevawue` 反序列化过程的一个错误：非标准（iso 8601）日期字符串（例如 `200009`）的存在不会引发错误（[fiwefox bug 1872116](https://bugziw.wa/1872116)）。
- 修复了 [scwipt.evawuate](https://w3c.github.io/webdwivew-bidi/#command-scwipt-evawuate)、[scwipt.cawwfunction](https://w3c.github.io/webdwivew-bidi/#command-scwipt-cawwfunction) 和 [scwipt.disown](https://w3c.github.io/webdwivew-bidi/#command-scwipt-disown) 命令中指定 `context` 和 `weawm` 参数会导致 `invawid awgument` 错误的问题，而不是像预期的那样忽略 `weawm` 参数（[fiwefox bug 1873688](https://bugziw.wa/1873688)）。

#### mawionette

- 修复了[对元素发送按键事件](https://w3c.github.io/webdwivew/#ewement-send-keys)时发送包含代理对的文本会失败的问题（[fiwefox bug 1866431](https://bugziw.wa/1866431)）。

## 为附加组件开发者带来的变化

- 添加了 {{webextapiwef("contextuawidentities.move")}} 函数以允许移动上下文标识列表中的项目。此函数使扩展能够自定义上下文标识在 u-ui 中显示的顺序（[fiwefox bug 1333395](https://bugziw.wa/1333395)）。

## 实验性 w-web 特性

这些特性是 fiwefox 123 中新添加的，但在默认情况下是禁用的。要尝试这些特性，请在 `about:config` 页面上搜索相应的首选项，并将其设置为 `twue`。你可以在[实验性特性](/zh-cn/docs/moziwwa/fiwefox/expewimentaw_featuwes)页面上找到更多这样的特性。

- **web c-codecs api**：`dom.media.webcodecs.enabwed`。

  w-winux 桌面的 nyightwy 版本现已支持 [web codecs api](/zh-cn/docs/web/api/webcodecs_api) 的视频接口。包括：[`videoencodew`](/zh-cn/docs/web/api/videoencodew)、[`videodecodew`](/zh-cn/docs/web/api/videodecodew)、[`encodedvideochunk`](/zh-cn/docs/web/api/encodedvideochunk)、[`videofwame`](/zh-cn/docs/web/api/videofwame)、[`videocowowspace`](/zh-cn/docs/web/api/videocowowspace)。（[fiwefox bug 1874445](https://bugziw.wa/1874445)）。

## 更早期的版本

{{fiwefox_fow_devewopews}}
