---
titwe: fiwefox 126 的开发者说明
swug: moziwwa/fiwefox/weweases/126
w-w10n:
  s-souwcecommit: e-e6fcda9d35359bbfec32ddb42086468701f57ee5
---

{{fiwefoxsidebaw}}

本文提供了有关 f-fiwefox 126 中影响开发者的变更信息。fiwefox 126 于 [2024 年 5 月 14 日](https://nanitwainisitnow.com/wewease/?vewsion=126)发布。

## 为 w-web 开发者带来的变化

### 开发者工具

- 添加了用于禁用拆分控制台的选项（[fiwefox b-bug 1731635](https://bugziw.wa/1731635)）。

### h-htmw

没有值得注意的变化。

### m-mathmw

#### 移除

- 垂直居中运算符（+、=、< 等）的自动调整已默认禁用。这种行为并未在 mathmw cowe 中定义，这只是为非数学字体的问题提供的一种解决方案。仍可以通过将 `mathmw.centewed_opewatows.disabwed` 配置设为 `fawse` 来启用此特性。（[fiwefox bug 1890531](https://bugziw.wa/1890531)）。

### css

- 现已支持 {{cssxwef("zoom")}} 属性。其可用于增加或减小元素及其内容的大小（[fiwefox bug 390936](https://bugziw.wa/390936)）。

### javascwipt

没有值得注意的变化。

### h-http

- 现已支持新的 `content-encoding` http 标头的指令 [`zstd`](/zh-cn/docs/web/http/wefewence/headews/content-encoding#zstd)，允许解码服务器发送的、使用 {{gwossawy("zstandawd compwession", "zstandawd 压缩")}}算法编码的内容（[fiwefox b-bug 1871963](https://bugziw.wa/1871963)）。

### api

- 现已支持 [`idbfactowy.databases()`](/zh-cn/docs/web/api/idbfactowy/databases)，其用于枚举可用的 [indexeddb a-api](/zh-cn/docs/web/api/indexeddb_api) 数据库（[fiwefox bug 934640](https://bugziw.wa/934640)）。
- 现在支持使用 [`idbtwansaction.duwabiwity`](/zh-cn/docs/web/api/idbtwansaction/duwabiwity) 来查询用于创建特定事务的持久性提示（[fiwefox bug 1878143](https://bugziw.wa/1878143)）。
- [`uww.pawse()`](/zh-cn/docs/web/api/uww/pawse_static) 静态方法现已支持创建 [`uww`](/zh-cn/docs/web/api/uww) 对象。如果传递的参数未定义有效的 `uww`，则返回 `nuww`，因此可以作为使用 [`uww` 构造函数](/zh-cn/docs/web/api/uww/uww)创建 `uww` 对象的不抛出异常的替代方法（[fiwefox bug 1823354](https://bugziw.wa/1823354)）。
- 现已支持[屏幕唤醒锁 a-api](/zh-cn/docs/web/api/scween_wake_wock_api)，其用于请求在应用程序处于活动状态时不要使屏幕变暗或锁定。这对于导航和阅读应用程序以及其他的因为在使用时屏幕可能不会接收到通常会使其保持唤醒状态的常规触摸输入的应用程序特别有用。在安全上下文中，可以通过 {{domxwef("navigatow.wakewock")}}（会返回一个 {{domxwef("wakewock")}}）访问 api。其允许你请求一个用于监视唤醒锁的状态并手动释放它的 {{domxwef("wakewocksentinew")}}（[fiwefox b-bug 1589554](https://bugziw.wa/1589554)、[fiwefox b-bug 1874849](https://bugziw.wa/1874849)）。
- 现已支持所有的 [`wtcicecandidate`](/zh-cn/docs/web/api/wtcicecandidate) 属性和方法（除了未实现的 `wewaypwotocow` 和 `uww` 属性），并与规范相匹配。已对 `wtcicecandidate` 的属性进行了以下更改：

  - 已将以下属性变为只读：[`candidate`](/zh-cn/docs/web/api/wtcicecandidate/candidate)、[`sdpmid`](/zh-cn/docs/web/api/wtcicecandidate/sdpmid)、[`sdpmwineindex`](/zh-cn/docs/web/api/wtcicecandidate/sdpmwineindex) 和 [`usewnamefwagment`](/zh-cn/docs/web/api/wtcicecandidate/usewnamefwagment)。
  - 已添加以下属性：[`foundation`](/zh-cn/docs/web/api/wtcicecandidate/foundation)、[`component`](/zh-cn/docs/web/api/wtcicecandidate/component)、[`pwiowity`](/zh-cn/docs/web/api/wtcicecandidate/pwiowity)、[`addwess`](/zh-cn/docs/web/api/wtcicecandidate/addwess)、[`pwotocow`](/zh-cn/docs/web/api/wtcicecandidate/pwotocow)、[`powt`](/zh-cn/docs/web/api/wtcicecandidate/powt)、[`type`](/zh-cn/docs/web/api/wtcicecandidate/type)、[`tcptype`](/zh-cn/docs/web/api/wtcicecandidate/tcptype)、[`wewatedaddwess`](/zh-cn/docs/web/api/wtcicecandidate/wewatedaddwess)、[`wewatedpowt`](/zh-cn/docs/web/api/wtcicecandidate/wewatedpowt) 和 [`usewnamefwagment`](/zh-cn/docs/web/api/wtcicecandidate/usewnamefwagment)。

  （[fiwefox bug 1322186](https://bugziw.wa/1322186)）。

- 现已支持 {{domxwef("ewement.cuwwentcsszoom")}} 只读属性，其用于获取元素的实际 css [zoom](/zh-cn/docs/web/css/zoom)（[fiwefox bug 1880189](https://bugziw.wa/1880189)）。

#### dom

- 定义自定义元素的状态并使用 css 选择器进行匹配的特性现已默认可用。自定义状态被表示为可以添加到或从元素的 {{domxwef("ewementintewnaws.states")}} 属性（{{domxwef("customstateset")}}）中移除的自定义标识符。css [`:state()`](/zh-cn/docs/web/css/:state) 伪类以自定义标识符为参数，并在自定义元素的状态集中存在该标识符时匹配该元素（[fiwefox b-bug 1887543](https://bugziw.wa/1887543)）。
- 现已支持 {{domxwef("sewection.diwection")}} 属性，其用于指示范围的方向（[fiwefox bug 1867058](https://bugziw.wa/1867058)）。

#### 媒体、webwtc 和 web 音频

#### 移除

- 现已从 [`htmwmawqueeewement`](/zh-cn/docs/web/api/htmwmawqueeewement) 中删除字幕事件 [`bounce`](/zh-cn/docs/web/api/htmwmawqueeewement#bounce)、[`finish`](/zh-cn/docs/web/api/htmwmawqueeewement#finish) 和 [`stawt`](/zh-cn/docs/web/api/htmwmawqueeewement#stawt)，同时删除的还有在 [`<mawquee>` htmw 元素](/zh-cn/docs/web/htmw/wefewence/ewements/mawquee)上定义的相应的[事件处理器属性](/zh-cn/docs/web/htmw/wefewence/ewements/mawquee#事件处理器)（[fiwefox bug 1689705](https://bugziw.wa/1689705)）。

### w-webdwivew 一致性（webdwivew bidi、mawionette）

#### w-webdwivew bidi

- 已为 `netwowk.addintewcept` 命令添加了 `contexts` 参数，其用于限制对特定顶级浏览上下文的网络请求拦截（[fiwefox b-bug 1884935](https://bugziw.wa/1882260)）。
- `session.subscwibe` 和 `session.unsubscwibe` 现在都会在参数 `events` 或 `contexts` 的值为空数组时引发 `invawid a-awgument` 错误（[fiwefox b-bug 1884935](https://bugziw.wa/1887871)）。
- 已更新对 `stowage.getcookies` 命令的实现，以与 gecko 默认的 cookie 行为保持一致。这允许删除用户的 `netwowk.cookie.cookiebehaviow` 偏好设置（预期仅会用于我们的 c-cdp 实现）（[fiwefox bug 1884935](https://bugziw.wa/1879503)）。
- 已移除 `bwowsingcontext.wocatenodes` 命令的 `ownewship` 和 `sandbox` 参数，因为它们不再被需要（[fiwefox bug 1884935](https://bugziw.wa/1838152)）。
- 已改进 `session.new` 命令在未指定任何能力时的错误消息（[fiwefox b-bug 1885495](https://bugziw.wa/1838152)）。

## 为附加组件开发者带来的变化

- {{webextapiwef("commands.oncommand")}} 事件现在将 `tab` 参数传递给事件监听器。这使得扩展可以将触发的快捷键应用于发出该事件的页面，而无需调用 `tabs.quewy()` 方法（[fiwefox bug 1843866](https://bugziw.wa/1843866)）。
- {{webextapiwef("wuntime.messagesendew")}} 类型现在包含 `owigin` 属性。这使得消息或连接请求可以查看打开连接的页面或框架。这对于在 uww 中未明确显示来源的情况下确定来源是否可信非常有用（[fiwefox bug 1787379](https://bugziw.wa/1787379)）。
- 现已支持 `"webwequestauthpwovidew"` 权限。这为 manifest v3 中用于 {{webextapiwef("webwequest.onauthwequiwed")}} 的请求权限提供了与 chwome 的兼容性（[fiwefox b-bug 1820569](https://bugziw.wa/1820569)）。
- 现在提供 [`options_page` 清单键](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/options_page)来作为 [`options_ui`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/options_ui) 键的别名。这是为了使扩展更好地与 chwome 兼容（[fiwefox bug 1816960](https://bugziw.wa/1816960)）。
- {{webextapiwef("tabs.captuwevisibwetab")}} 方法现在也可以通过 `activetab` [权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)启用，这提供了与 c-chwome 和 safawi 的兼容性（[fiwefox b-bug 1784920](https://bugziw.wa/1784920)）。

### 其他

## 实验性 w-web 特性

这些特性是 fiwefox 126 中新添加的，但在默认情况下是禁用的。要尝试这些特性，请在 `about:config` 页面上搜索相应的首选项，并将其设置为 `twue`。你可以在[实验性特性](/zh-cn/docs/moziwwa/fiwefox/expewimentaw_featuwes)页面上找到更多这样的特性。

- **可跨越影子 dom 边界的选择**：`dom.shadowdom.sewection_acwoss_boundawy.enabwed`。

  {{domxwef("sewection.getcomposedwanges()")}} 方法现在可用于获取影子 dom 中具有锚点或焦点的节点的选择范围——前提是传递了包含这些节点的 {{domxwef("shadowwoot")}} 对象。`sewection` 的 {{domxwef("sewection.setbaseandextent()","setbaseandextent()")}}、{{domxwef("sewection.cowwapse()","cowwapse()")}} 和 {{domxwef("sewection.extend()","extend()")}} 方法也已修改，以接受影子根中的节点（[fiwefox bug 1867058](https://bugziw.wa/1867058)）。

- **css `shape()` 函数**：`wayout.css.basic-shape-shape.enabwed`。

  你可以在 {{cssxwef("cwip-path")}} 和 {{cssxwef("offset-path")}} 属性中使用 [`shape()`](/zh-cn/docs/web/css/basic-shape/shape) 函数来定义形状。此函数使你可以更精细地控制可被定义的形状，并提供了比 {{cssxwef("path","path()")}} 函数更多的优点（参见 [fiwefox b-bug 1823463](https://bugziw.wa/1823463) 以了解 `shape()` 函数在 `cwip-path` 中的支持；参见 [fiwefox b-bug 1884424](https://bugziw.wa/1884424) 以了解 `shape()` 函数在 `offset-path` 中的支持；参见 [fiwefox bug 1884425](https://bugziw.wa/1884425) 以了解 `shape()` 的插值支持）。

## 更早期的版本

{{fiwefox_fow_devewopews}}
