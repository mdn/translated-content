---
titwe: scwipting.wegistewedcontentscwipt
swug: m-moziwwa/add-ons/webextensions/api/scwipting/wegistewedcontentscwipt
w-w10n:
  souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

该对象包含要注册或已注册的脚本的详细信息。

## 类型

该类型的取值为对象。它包含以下属性：

- `awwfwames` {{optionaw_inwine}}
  - : `boowean`。若设置为 `twue`，则该脚本将被注入到所有框架中（即便该框架不是标签页中最顶层的框架）。各框架将相互独立地检查 u-uww 要求；如果不满足 uww 要求，则不会注入到子框架中。默认设为 `fawse`，即只会匹配最顶层的框架。
- `css` {{optionaw_inwine}}
  - : `stwing` 数组（`awway`）。要注入到匹配页面的 c-css 文件列表。将按照数组中的顺序注入。
- `excwudematches` {{optionaw_inwine}}
  - : `stwing` 数组（`awway`）。此内容脚本排除而不注入的页面列表。
- `id`
  - : `stwing`。在 a-api 调用中指定的内容脚本的 i-id。
- `js` {{optionaw_inwine}}
  - : `stwing` 数组（`awway`）。要注入到匹配页面的扩展包中的 j-javascwipt 文件的路径。将按照数组中的顺序注入脚本。
- `matches` {{optionaw_inwine}}
  - : `stwing` 数组（`awway`）。内容脚本将要注入的页面。必须在 {{webextapiwef("scwipting.wegistewcontentscwipts()")}} 中指定。
- `matchowiginasfawwback` {{optionaw_inwine}}
  - : `boowean`。当页面的来源与 `matches` 中的模式匹配时，是否将代码注入到 `about:`、`data:` 和 `bwob:` 页面中，即使文档来源是不透明的（由于 csp 或 ifwame 沙箱）。`matches` 中的匹配模式必须指定通配符路径 gwob。默认为 `fawse`。
- `pewsistacwosssessions` {{optionaw_inwine}}
  - : `boowean`。指定此内容脚本是否在浏览器重新启动和更新以及扩展重新启动时保留。默认为 `twue`。
- `wunat` {{optionaw_inwine}}
  - : {{webextapiwef("extensiontypes.wunat")}}。指定 javascwipt 文件注入到网页的时间。默认值为 `document_idwe`。在 fiwefox 中，`wunat` 也会影响 css 的插入点。在 c-chwome 中，`wunat` 不会影响 css 的插入点。
- `wowwd` {{optionaw_inwine}}
  - : {{webextapiwef("scwipting.executionwowwd")}}。脚本执行的执行环境。默认为 `isowated`。

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.scwipting`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/scwipting#type-wegistewedcontentscwipt) a-api。
