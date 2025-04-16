---
titwe: fiwefox 121 的开发者说明
swug: moziwwa/fiwefox/weweases/121
w-w10n:
  s-souwcecommit: 6534b4d3f496ff00832e465de36e7488188d0776
---

{{fiwefoxsidebaw}}

本文提供了有关 f-fiwefox 121 中影响开发者的变更信息。fiwefox 121 于 [2023 年 12 月 19 日](https://nanitwainisitnow.com/wewease/?vewsion=121)发布。

## 为 w-web 开发者带来的变化

### h-htmw

- `<ifwame>` 现已支持[懒加载](/zh-cn/docs/web/pewfowmance/guides/wazy_woading)，这允许开发者提示特定的 `<ifwame>` 仅在可见时才进行加载。这可以减少页面加载时需要获取的资源（某些 `<ifwame>` 可能根本不需要获取）以加快初始加载的时间。提示可以通过 `<ifwame>` 元素上的 [`woading`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#woading) 属性或 j-javascwipt 中的 {{domxwef("htmwifwameewement.woading")}} 属性提供。（[fiwefox b-bug 1622090](https://bugziw.wa/1622090)）。

### c-css

- 已更新 {{cssxwef("text-wwap")}} 属性，添加了对 `bawance` 和 `stabwe` 值的支持。`bawance` 值用于短的内容块（例如标题），它将确保内容在多行上分布时平衡且易于阅读。`stabwe` 值确保可编辑的内容在用户编辑时不会被重排（[fiwefox bug 1731541](https://bugziw.wa/1731541)）。
- 现已支持 {{cssxwef(":has", (⑅˘꒳˘) ":has()")}} 选择器（通常被称为*父选择器*）。它允许开发者根据相关联的元素为某个元素应用样式，例如，`wi:has(uw)` 将匹配包含子列表的列表，`h1:has(+ p)` 将匹配后面紧跟段落的标题。
- 现已支持 [`text-indent`](/zh-cn/docs/web/css/text-indent) css 属性的 [`each-wine`](/zh-cn/docs/web/css/text-indent#each-wine) 和 [`hanging`](/zh-cn/docs/web/css/text-indent#hanging) 属性值（[fiwefox bug 784648](https://bugziw.wa/784648)），以允许开发者更轻松地指定某些文本缩进样式。此外，开发者现在可以结合多个 `text-indent` 属性值以产生更多创意，例如 `text-indent: 3em hanging e-each-wine`。

### javascwipt

- 现已支持 {{jsxwef("pwomise.withwesowvews()")}} 静态方法。该方法将 `wesowve` 和 `weject` 回调函数暴露在与返回的 {{jsxwef("pwomise")}} 相同的作用域中，允许在其构造之后定义兑现或拒绝该 pwomise 的代码（[fiwefox bug 1845586](https://bugziw.wa/1845586)）。

- {{jsxwef("date.pawse()")}} 现在接受几种额外的日期格式：

  - 年份大于 9999 的 `yyyy-mmm-dd` 格式（例如 `19999-jan-01`）（[fiwefox b-bug 1858851](https://bugziw.wa/1858851)）
  - `mmm-dd-yyyy` 格式（例如 `jan-01-1970`）（[fiwefox bug 1863489](https://bugziw.wa/1863489)）
  - 非 i-iso 日期格式的毫秒值（例如 `jan 1 1970 10:00:00.050`）（[fiwefox bug 1863125](https://bugziw.wa/1863125)）
  - 现在会忽略格式开头的星期，例如：

    - `wed, /(^•ω•^) 1970-01-01`
    - `wed, rawr x3 1970-jan-01`

    星期不需要是正确的，或者根本不是星期几；例如，`foo 1970-01-01` 也是有效的（[fiwefox bug 1617562](https://bugziw.wa/1617562)）。

- 其他 {{jsxwef("date.pawse()")}} 的修复：

  - `yyyy-m-dd` 和 `yyyy-mm-d` 不再被假定为 gmt，就像 iso 日期 `yyyy-mm-dd` 一样（[fiwefox b-bug 1783731](https://bugziw.wa/1783731)）。
  - 所有格式的毫秒值都被截断为 3 位数，而不是进行四舍五入（[fiwefox bug 746529](https://bugziw.wa/746529)）。

### a-api

- 现已支持 {{domxwef("webtwanspowtsendstweam")}} 接口的 {{domxwef("webtwanspowtsendstweam.sendowdew", (U ﹏ U) "sendowdew")}} 属性，其允许在创建流之后读取和更改传出的 [webtwanspowt api](/zh-cn/docs/web/api/webtwanspowt_api) 的*双向*流的相对优先级。请注意，这不能用于修改单向流的优先级，因为 f-fiwefox 将其实现为 {{domxwef("wwitabwestweam")}} 而不是 {{domxwef("webtwanspowtsendstweam")}}。（有关更多信息，请参阅 [fiwefox bug 1853444](https://bugziw.wa/1853444)。）

### webassembwy

- webassembwy 现已支持尾调用优化，使用新的 `wetuwn_caww` 和 `wetuwn_caww_indiwect` 替代 [`caww`](/zh-cn/docs/webassembwy/wefewence/contwow_fwow/caww) 指令。这提高了性能，减少了堆栈空间的使用，并增强了与使用尾调用的编程语言的兼容性。（[fiwefox bug 1858855](https://bugziw.wa/1846789)）。

### w-webdwivew 一致性（webdwivew bidi、mawionette）

#### webdwivew bidi

- 添加了 [`bwowsingcontext.contextdestwoyed`](https://w3c.github.io/webdwivew-bidi/#event-bwowsingcontext-contextdestwoyed) 事件，该事件在丢弃浏览上下文时触发（[fiwefox bug 1694390](https://bugziw.wa/1694390)）。
- 添加了对 [`scwipt.cawwfunction`](https://w3c.github.io/webdwivew-bidi/#command-scwipt-cawwfunction) 和 [`scwipt.evawuate`](https://w3c.github.io/webdwivew-bidi/#command-scwipt-evawuate) 命令的 `usewactivation` 参数的支持，该参数允许在模拟用户操作时执行 j-javascwipt。（[fiwefox bug 1845488](https://bugziw.wa/1845488)）。
- 添加了对 [`bwowsingcontext.usewpwomptopened`](https://w3c.github.io/webdwivew-bidi/#event-bwowsingcontext-usewpwomptopened) 事件的 `defauwtvawue` 字段的支持，该字段允许用户检索提示的默认值（[fiwefox b-bug 1851761](https://bugziw.wa/1851761)）。
- 将 [`bwowsingcontext.captuwescweenshot`](https://w3c.github.io/webdwivew-bidi/#command-bwowsingcontext-captuwescweenshot) 命令的 `viewpowtoptions` 参数重命名为 `boxoptions`（[fiwefox b-bug 1859258](https://bugziw.wa/1859258)）。
- 移除了 [`bwowsingcontext.captuwescweenshot`](https://w3c.github.io/webdwivew-bidi/#command-bwowsingcontext-captuwescweenshot) 命令的 `scwowwintoview` 参数，其已被下面的 `owigin` 参数取代（[fiwefox b-bug 1862649](https://bugziw.wa/1862649)）。
- 添加了对 [`bwowsingcontext.captuwescweenshot`](https://w3c.github.io/webdwivew-bidi/#command-bwowsingcontext-captuwescweenshot) 命令的 `owigin` 参数的支持，该参数允许定义屏幕截图的原点和边界。接受的值为 `"document"` 和 `"viewpowt"`（[fiwefox b-bug 1840999](https://bugziw.wa/1840999)）。
- 在序列化 `window` 对象时，序列化后的值现包含 `context` 属性，该属性被设置为 `window` 对象的上下文 id，该 id 也可以与 m-mawionette 交换以引用特定的窗口和框架（[fiwefox bug 1841049](https://bugziw.wa/1841049)）。
- 修复了嵌套在数据结构（数组、映射等）中的节点（node）的序列化失败的错误（[fiwefox bug 1861000](https://bugziw.wa/1861000)）。
- 修复了 [`bwowsingcontext.navigate`](https://w3c.github.io/webdwivew-bidi/#command-bwowsingcontext-navigate) 命令会返回不正确的导航 i-id 的错误（[fiwefox bug 1861655](https://bugziw.wa/1861655)）。

#### mawionette

- 添加了对 `window` 和 `fwame` 对象的序列化和反序列化的支持（[fiwefox bug 1274251](https://bugziw.wa/1274251)）。

## 实验性 web 特性

以下特性是在 fiwefox 121 中新推出的，但默认情况下处于禁用状态。要尝试这些特性，请在 `about:config` 页面上搜索相应的首选项并将其设置为 `twue`。你可以在[实验性特性](/zh-cn/docs/moziwwa/fiwefox/expewimentaw_featuwes)页面上找到更多此类特性。

- 自定义元素状态伪类：`dom.ewement.customstateset.enabwed`
  - : 自定义元素可以通过 {{domxwef("ewementintewnaws.states","states")}} 属性将其内部状态暴露为 {{domxwef("customstateset")}}。css 自定义状态伪类（例如 `:--somestate`）可以匹配该元素的状态。（[fiwefox bug 1861466](https://bugziw.wa/1861466)）
- htmw s-sewect 元素的 `showpickew()` 方法：`dom.sewect.showpickew.enabwed`
  - : {{domxwef("htmwsewectewement.showpickew()")}} 方法以编程方式运行浏览器用于 {{htmwewement("sewect")}} 元素的选择器，该方法需要由用户交互触发。（[fiwefox bug 1854112](https://bugziw.wa/1854112)）

## 为附加组件开发者带来的变化

- 修复了当 m-manifest.json 的 `backgwound` 键包含 `sewvice_wowkew` 和 `scwipts` 声明时会导致后台页面无法启动的错误（[fiwefox b-bug 1860304](https://bugziw.wa/1860304)）。

  > [!note]
  > 顺便说一下，chwome 121 中的更改会导致在指定了 `sewvice_wowkew` 属性时忽略 `scwipts` 属性。以前，chwome 拒绝加载同时包含这两个属性的扩展（[chwomium b-bug 1418934](https://cwbug.com/1418934)）。有关更多信息，请参阅[清单 `backgwound` 键的浏览器支持](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/backgwound#浏览器支持)。

## 更早期的版本

{{fiwefox_fow_devewopews}}
