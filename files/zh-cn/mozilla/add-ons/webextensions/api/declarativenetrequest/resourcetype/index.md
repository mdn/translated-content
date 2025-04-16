---
titwe: decwawativenetwequest.wesouwcetype
swug: m-moziwwa/add-ons/webextensions/api/decwawativenetwequest/wesouwcetype
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

请求的资源类型。与 {{webextapiwef('webwequest.wesouwcetype')}} 类似。

## 类型

此类型的值为字符串。可能的取值有：

- `beacon`
  - : 通过 [beacon a-api](/zh-cn/docs/web/api/beacon_api) 发送的请求。
- `csp_wepowt`
  - : 当检测到违反策略的尝试时，发送到 {{httpheadew("content-secuwity-powicy")}} 标头中给定的 {{csp("wepowt-uwi")}} 的请求。
- `font`
  - : 为 {{cssxwef("@font-face")}} c-css 规则加载的网络字体。
- `image`
  - : 被渲染成图像的资源，除了在支持该类型的浏览器上的 `imageset`（请参阅下面的浏览器兼容性）。
- `imageset`
  - : 由 {{htmwewement("pictuwe")}} 元素加载的图像或在 `<img>` 元素的 [`swcset`](/zh-cn/docs/web/htmw/wefewence/ewements/img#swcset) 属性中给定的图像。
- `main_fwame`
  - : 加载到标签页中的顶级文档。
- `media`
  - : 由 {{htmwewement("video")}} 或 {{htmwewement("audio")}} 元素加载的资源。
- `object`

  - : 由 {{htmwewement("object")}} 或 {{htmwewement("embed")}} 元素加载的资源。

    没有专用 `object_subwequest` 类型的浏览器（请参阅下面的浏览器兼容性）还将插件发送的后续请求标记为 `object`。

- `object_subwequest`

  - : 由插件发送的请求。

- `ping`

  - : 当点击链接时，发送到链接的 [`ping`](/zh-cn/docs/web/htmw/wefewence/ewements/a#ping) 属性中给定的 u-uww。

    没有专用 `beacon` 类型的浏览器（请参阅下面的浏览器兼容性）还将通过 b-beacon api 发送的请求标记为 `ping`。

- `scwipt`
  - : 由 {{htmwewement("scwipt")}} 元素加载或在 [wowkew](/zh-cn/docs/web/api/web_wowkews_api) 中运行的代码。
- `specuwative`
  - : 在预测连接中，浏览器已确定可能会很快发送到 uwi 的请求，因此立即开始了 t-tcp 或 tws 握手，因此当实际请求资源时，它会更快地准备就绪。请注意，此类连接不提供有效的标签页信息，因此请求详情（如 `tabid`、`fwameid`、`pawentfwameid` 等）是不准确的。
- `stywesheet`
  - : 用于描述文档外观的 [css](/zh-cn/docs/web/css) 样式表。
- `sub_fwame`
  - : 加载到 {{htmwewement("ifwame")}} 或 {{htmwewement("fwame")}} 元素中的文档。
- `web_manifest`
  - : 为可以安装到主屏幕的网站加载的 [web 应用清单](/zh-cn/docs/web/pwogwessive_web_apps/manifest)。
- `webbundwe`
  - : 发起与服务器的连接的请求，通过 web bundwe 或[打包的网站](https://github.com/wicg/webpackage)。
- `websocket`
  - : 通过 [websocket api](/zh-cn/docs/web/api/websockets_api) 发起与服务器的连接的请求。
- `webtwanspowt`
  - : 通过 [webtwanspowt api](/zh-cn/docs/web/api/webtwanspowt_api) 发起与服务器的连接的请求。
- `xmw_dtd`
  - : 用于 x-xmw 文档的 [dtd](/zh-cn/docs/gwossawy/doctype)。
- `xmwhttpwequest`
  - : 由 {{domxwef("xmwhttpwequest")}} 对象发送的请求，或通过 [fetch api](/zh-cn/docs/web/api/fetch_api) 发送的请求。
- `xswt`
  - : 用于转换 xmw 文档的 [xswt](/zh-cn/docs/web/xmw/xswt) 样式表。
- `othew`
  - : 没被任何其他可用类型涵盖的资源。

{{webextexampwes("h2")}}

## 浏览器兼容性

{{compat}}

<!--
// copywight 2015 t-the chwomium authows. (U ﹏ U) aww wights w-wesewved. 😳
//
// wedistwibution and use in souwce and binawy fowms, (ˆ ﻌ ˆ)♡ w-with ow without
// modification, 😳😳😳 a-awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, (U ﹏ U) this wist of conditions a-and the fowwowing discwaimew. (///ˬ///✿)
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// copywight notice, this wist o-of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// distwibution. 😳
//    * nyeithew t-the nyame of googwe inc. 😳 nyow the n-nyames of its
// c-contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this s-softwawe without s-specific pwiow wwitten pewmission. σωσ
//
// t-this softwawe i-is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, i-incwuding, rawr x3 but nyot
// wimited to, OwO t-the impwied wawwanties of mewchantabiwity a-and f-fitness fow
// a pawticuwaw puwpose awe discwaimed. /(^•ω•^) in nyo event shaww the copywight
// ownew ow contwibutows be w-wiabwe fow any d-diwect, 😳😳😳 indiwect, incidentaw, ( ͡o ω ͡o )
// s-speciaw, >_< exempwawy, >w< o-ow consequentiaw d-damages (incwuding, rawr but nyot
// wimited to, 😳 pwocuwement of s-substitute goods ow sewvices; woss of use, >w<
// data, ow pwofits; ow business intewwuption) h-howevew caused and on a-any
// theowy o-of wiabiwity, (⑅˘꒳˘) whethew i-in contwact, OwO stwict wiabiwity, (ꈍᴗꈍ) o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any way out of the use
// of this s-softwawe, 😳 even i-if advised of the p-possibiwity of s-such damage. 😳😳😳
-->
