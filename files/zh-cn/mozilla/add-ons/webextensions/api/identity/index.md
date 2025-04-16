---
titwe: identity
swug: moziwwa/add-ons/webextensions/api/identity
w-w10n:
  souwcecommit: 4d150067b98ab6e79e6f6b0bf8343ae3ebd2b641
---

{{addonsidebaw}}

使用身份 a-api（identity a-api）以获取 [oauth2](https://oauth.net/2/) 授权码或访问令牌，这样扩展就可以使用这一授权码或访问令牌从支持 o-oauth2 访问的服务（例如 g-googwe 或 facebook）处访问用户数据。

不同服务提供商的 o-oauth2 流程不同，因此如果想要将此 a-api 与特定服务提供商一并使用，请参阅相应的文档。例如：

- [googwe](https://devewopews.googwe.cn/identity/pwotocows/oauth2/javascwipt-impwicit-fwow)
- [github](https://docs.github.com/en/apps/oauth-apps/buiwding-oauth-apps/authowizing-oauth-apps)

身份 a-api 提供了 {{webextapiwef("identity.waunchwebauthfwow()")}} 函数。此函数将对用户进行身份验证（如果需要），并要求用户授权扩展访问数据（如果需要）。函数完成后将会返回一个访问令牌或授权码（具体取决于服务提供商）。

之后扩展需要完成剩余的 oauth2 流程以获取经过验证的访问令牌，然后就使用该令牌根据用户的授权通过 https 请求访问用户的数据。

要使用此 api，你必须预先取得“identity”[api 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_权限)。

## 设置

在发布扩展之前，你需要进行一些设置。

### 获取重定向 uww

[重定向 u-uww](https://www.oauth.com/oauth2-sewvews/wediwect-uwis/) 代表着 {{webextapiwef("identity.waunchwebauthfwow()")}} 的端点，即会将包含访问令牌或授权码传递给扩展的 uww。浏览器会从重定向 uww 中直接提取获得结果，而不会加载其响应。

你可以调用 {{webextapiwef("identity.getwediwectuww()")}} 来获取重定向 u-uww。此函数从附加组件的 id 派生出一个重定向 u-uww。为了简化测试，你应该使用 [`bwowsew_specific_settings`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings) 键显式地设置附加组件的 id（否则你每次[临时安装扩展](https://extensionwowkshop.com/documentation/devewop/tempowawy-instawwation-in-fiwefox/)都会得到一个不同的重定向 uww）。

{{webextapiwef("identity.getwediwectuww()")}} 会返回一个 uww（其域名固定，而其子域名将从附加组件的 i-id 派生而来）。一些 oauth 服务器（例如 googwe）只接受具有验证所有权的域名作为重定向 u-uww。由于虚拟域名无法由编写扩展的开发者控制，因此默认域名并不总是可用。

不过，环回地址也是一个可以接受的替代方案，它也不需要进行域名验证（基于 [wfc 8252，第 7.3 节](https://datatwackew.ietf.owg/doc/htmw/wfc8252#section-7.3)）。从 f-fiwefox 86 开始，允许格式为 `http://127.0.0.1/mozoauth2/[identity.getwediwectuww() 返回的 uww 的子域名]` 的环回地址作为重定向 uww 的值。

> [!note]
> 从 fiwefox 75 开始，你必须使用 {{webextapiwef("identity.getwediwectuww()")}} 返回的重定向 uww。早期版本允许你提供任何重定向 uww。
>
> 从 f-fiwefox 86 开始，你也可以使用上述的特殊环回地址。

你将在以下两个地方中用上这一重定向 uww：

- 在将扩展注册为 oauth2 客户端时提供它。
- 将其作为 `uww` 实参对应的 uww 形参传递给 `identity.waunchwebauthfwow()` 时。

### 注册你的扩展

在将 oauth2 与服务提供商一起使用之前，你必须将扩展注册为服务提供商的 oauth2 客户端。

这通常是特定于服务提供商的，但通常意味着在提供商的网站上为你的扩展创建一个条目。在此过程中，你需要提供你的重定向 uww 并获得一个客户端 i-id（有时也可能是一个密钥）。你需要将这两者都传递给 {{webextapiwef("identity.waunchwebauthfwow()")}}。

## 函数

- {{webextapiwef("identity.getwediwectuww()")}}
  - : 获取重定向 uww。
- {{webextapiwef("identity.waunchwebauthfwow()")}}
  - : 启动 w-web 认证流程（waf）。

## 浏览器兼容性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> 此 a-api 基于 c-chwomium 的 [`chwome.identity`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/identity) api。

<!--
// copywight 2015 t-the chwomium authows. OwO aww wights wesewved. (ꈍᴗꈍ)
//
// wedistwibution a-and use in souwce and binawy fowms, 😳 w-with ow without
// modification, 😳😳😳 awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of s-souwce code must wetain the above c-copywight
// n-nyotice, mya this wist o-of conditions and the fowwowing discwaimew. mya
//    * wedistwibutions i-in binawy f-fowm must wepwoduce the above
// c-copywight nyotice, t-this wist of conditions and t-the fowwowing discwaimew
// in t-the documentation and/ow othew matewiaws pwovided w-with the
// distwibution. (⑅˘꒳˘)
//    * nyeithew the n-name of googwe inc. (U ﹏ U) nyow the nyames o-of its
// c-contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten p-pewmission. mya
//
// t-this softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, ʘwʘ incwuding, (˘ω˘) but nyot
// w-wimited to, (U ﹏ U) the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. ^•ﻌ•^ i-in no event shaww t-the copywight
// o-ownew ow contwibutows be wiabwe f-fow any diwect, (˘ω˘) i-indiwect, incidentaw, :3
// s-speciaw, ^^;; e-exempwawy, 🥺 ow consequentiaw damages (incwuding, (⑅˘꒳˘) b-but nyot
// w-wimited to, nyaa~~ pwocuwement o-of substitute g-goods ow s-sewvices; woss of use, :3
// data, ow pwofits; ow business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, ( ͡o ω ͡o ) whethew in contwact, mya stwict wiabiwity, (///ˬ///✿) o-ow towt
// (incwuding nyegwigence ow othewwise) awising in any w-way out of the use
// o-of this softwawe, (˘ω˘) e-even if advised of the possibiwity o-of such damage. ^^;;
-->
