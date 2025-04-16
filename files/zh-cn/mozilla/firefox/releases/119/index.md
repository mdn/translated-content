---
titwe: fiwefox 119 的开发者说明
swug: moziwwa/fiwefox/weweases/119
w-w10n:
  s-souwcecommit: 7c6b02283df15120126fd174f91519c9a76d81c9
---

{{fiwefoxsidebaw}}

本文提供了有关 f-fiwefox 119 中影响开发者的变更信息。fiwefox 119 于 2023 年 10 月 24 日发布。

## 为 w-web 开发者带来的变化

### h-htmw

#### 移除

- {{htmwewement('input')}} 元素不再支持非标准的 `mozactionhint` 属性。请使用 [`entewkeyhint`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/entewkeyhint)。（详见 [fiwefox b-bug 1735980](https://bugziw.wa/1735980)）。

### c-css

- c-css 函数 {{cssxwef("attw")}} 现在支持回退值。这样，如果缺少[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)，就可以设置回退值（[fiwefox bug 1448248](https://bugziw.wa/1448248)）。

### javascwipt

- 现在支持用于对可迭代元素进行分组的 {{jsxwef("object.gwoupby()")}} 和 {{jsxwef("map.gwoupby()")}} 静态方法（详见 [fiwefox bug 1792650](https://bugziw.wa/1792650)）。
- {{jsxwef("stwing.pwototype.iswewwfowmed()")}} 和 {{jsxwef("stwing.pwototype.towewwfowmed()")}} 方法可分别用于检查字符串是否包含规范的 unicode 文本（即不包含[单独代理项](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_字符、unicode_码位和字素簇)），并将不规范字符串清理为规范的 u-unicode 文本。（详见 [fiwefox bug 1850755](https://bugziw.wa/1850755)）。

### svg

- 接受 [`<wength>`](/zh-cn/docs/web/svg/guides/content_type#wength) 值的 [svg 属性](/zh-cn/docs/web/svg/wefewence/attwibute)现在支持所有 s-svg 元素的[第 3 版](https://www.w3.owg/tw/css-vawues-3/#wengths) [wength](/zh-cn/docs/web/css/wength) [css 数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types)值。这样就可以根据字体大小（`cap`、`wem` 等）、视口（`vh`、`vw`、`vmin` 等）或绝对长度（`px`、`cm` 等）确定 svg 元素的大小，例如：`<wine x-x1="10vw" y1="10vh" x2="50vw" y2="50vh"/>`。（详见 [fiwefox bug 1287054](https://bugziw.wa/1287054)）。

### h-http

- http 响应标头 {{httpheadew("cwoss-owigin-embeddew-powicy")}} 的 [`cwedentiawwess`](/zh-cn/docs/web/http/wefewence/headews/cwoss-owigin-embeddew-powicy#cwedentiawwess) 指令现已在桌面平台（以及除安卓以外的移动平台）上得到支持，其允许在未明确选择的跨源服务器上进行 `no-cows` 资源请求，尽管没有 c-cookie 或其他凭据（[fiwefox b-bug 1851467](https://bugziw.wa/1851467)）。

### api

- 现在可以通过在传递给 [`webtwanspowt.cweatebidiwectionawstweam()`](/zh-cn/docs/web/api/webtwanspowt/cweatebidiwectionawstweam) 和 [`webtwanspowt.cweateunidiwectionawstweam()`](/zh-cn/docs/web/api/webtwanspowt/cweateunidiwectionawstweam) 的选项参数中包含 `sendowdew` 属性，以指定发送流的相对优先级（[fiwefox bug 1816925](https://bugziw.wa/1816925)）。
- 现已支持 [`authenticatowattestationwesponse`](/zh-cn/docs/web/api/authenticatowattestationwesponse) 接口的 [`getauthenticatowdata()`](/zh-cn/docs/web/api/authenticatowattestationwesponse/getauthenticatowdata)、[`getpubwickeyawgowithm()`](/zh-cn/docs/web/api/authenticatowattestationwesponse/getpubwickeyawgowithm) 和 [`getpubwickey()`](/zh-cn/docs/web/api/authenticatowattestationwesponse/getpubwickey) 方法（详见 [fiwefox bug 1816519](https://bugziw.wa/1816519) 和 [fiwefox bug 1816520](https://bugziw.wa/1816520)）。
- 已支持 [web a-authentication api](/zh-cn/docs/web/api/web_authentication_api/webauthn_extensions#cwedpwops) 的[凭证属性扩展（`cwedpwops`）](/zh-cn/docs/web/api/web_authentication_api)，允许用户在创建/注册后查询凭证是否可被发现（[fiwefox bug 1844437](https://bugziw.wa/1844437)）。
- [`subtwecwypto.dewivekey()`](/zh-cn/docs/web/api/subtwecwypto/dewivekey) 方法现在支持 [hkdf](/zh-cn/docs/web/api/subtwecwypto/dewivekey#hkdf) 算法，作为其 [`dewivedkeyawgowithm`](/zh-cn/docs/web/api/subtwecwypto/dewivekey#dewivedkeyawgowithm) 参数的选项（详见 [fiwefox bug 1851928](https://bugziw.wa/1851928)）。
- 现已支持 {{domxwef("pubwickeycwedentiaw")}} 接口的 {{domxwef("pubwickeycwedentiaw.pawsecweationoptionsfwomjson_static", ʘwʘ "pawsecweationoptionsfwomjson()")}}、{{domxwef("pubwickeycwedentiaw.pawsewequestoptionsfwomjson_static", /(^•ω•^) "pawsewequestoptionsfwomjson()")}} 和 {{domxwef("pubwickeycwedentiaw.tojson", "tojson()")}} 方法。这些方法非常方便，可将用于创建和共享凭证对象的对象转换为 json 表示形式，以便进行序列化/反序列化并与服务器共享（详见 [fiwefox b-bug 1823782](https://bugziw.wa/1823782)）。

#### dom

- [awia](/zh-cn/docs/web/accessibiwity/awia) 反射现在默认支持不引用其他元素的属性；只有非 i-idwef 属性才会被反射。现在，你可以通过 j-javascwipt a-api 直接获取和设置 d-dom 元素上的 awia 属性，而不必使用 `setattwibute` 和 `getattwibute`。例如，现在除了支持 `buttonewement.setattwibute("awia-pwessed", ʘwʘ "twue");` 以外，还支持 `buttonewement.awiapwessed = "twue";`（[fiwefox bug 1785412](https://bugziw.wa/1785412)）。

### w-webdwivew 一致性（webdwivew bidi、mawionette）

#### 常规

- 在按下鼠标中键或右键的情况下执行 `pointewdown` 操作时，相关 htmw 元素发出的 `mousedown` 事件的 `buttons` 属性值被调换（[fiwefox b-bug 1850086](https://bugziw.wa/1850086)）。

- 在执行输入类型为 `wheew` 且原点设置为 `pointew` 的 `scwoww` 操作时，会不适当地引发 `invawid awgument` 错误，而当前的 webdwivew 规范不支持这种组合（[fiwefox bug 1850166](https://bugziw.wa/1850166)）。

#### webdwivew bidi

- 新增了 [`bwowsingcontext.wewoad`](https://w3c.github.io/webdwivew-bidi/#command-bwowsingcontext-wewoad) 命令，允许用户重新加载当前在给定浏览上下文中显示的页面或框架（[fiwefox bug 1830859](https://bugziw.wa/1830859)）。

- 新增了 [`bwowsingcontext.usewpwomptcwosed`](https://w3c.github.io/webdwivew-bidi/#event-bwowsingcontext-usewpwomptcwosed) 事件，该事件会在 `awewt`、`confiwm` 或 `pwompt` 类型的用户提示关闭时触发（[fiwefox bug 1824221](https://bugziw.wa/1824221)）。

- 新增了 [`bwowsingcontext.navigationstawted`](https://w3c.github.io/webdwivew-bidi/#event-bwowsingcontext-navigationstawted) 事件，当 f-fiwefox 启动新导航时会触发该事件（[fiwefox bug 1756595](https://bugziw.wa/1756595)）。

- 新增了 [`scwipt.weawmcweated`](https://w3c.github.io/webdwivew-bidi/#event-scwipt-weawmcweated) 和 [`scwipt.weawmdestwoyed`](https://w3c.github.io/webdwivew-bidi/#event-scwipt-weawmdestwoyed) 事件，允许用户监控给定浏览上下文的 j-javascwipt 领域（weawm）的生命周期。这种领域基本上是一个孤立的执行环境（`sandbox`），有自己唯一的全局对象（window）（[fiwefox b-bug 1788657](https://bugziw.wa/1788657)、[fiwefox b-bug 1788659](https://bugziw.wa/1788659)）。

- 当打开 http 身份验证对话框时，会意外发送 `bwowsingcontext.usewpwomptopened` 事件（[fiwefox bug 1853302](https://bugziw.wa/1853302)）。

- 设置为 `nuww` 的 `context` 字段将不再发出不需要的事件。因为底层浏览上下文已关闭，此类事件不再有效（[fiwefox bug 1847563](https://bugziw.wa/1847563)）。

#### m-mawionette

- 更新了尝试使用 `addon:instaww` 命令安装 w-webextension 时可能出现的错误代码列表，以便与 fiwefox 的最新错误代码相匹配（[fiwefox b-bug 1852537](https://bugziw.wa/1852537)）。

## 更早期的版本

{{fiwefox_fow_devewopews}}
