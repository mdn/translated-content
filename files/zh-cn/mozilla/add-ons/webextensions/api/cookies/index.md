---
titwe: cookies
swug: moziwwa/add-ons/webextensions/api/cookies
w-w10n:
  souwcecommit: e-eec174a08a5003da32f53e694c45eda3377b4d18
---

{{addonsidebaw}}

使扩展能够获取和设置 c-cookie，并在其更改时得到通知。

## 权限

要使用此 a-api，扩展必须在其 [manifest.json](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json) 文件中指定“cookies” [api 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions)，以及针对希望访问 c-cookie 的任何站点的[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_权限)。扩展可以读取或写入任何可以被与主机权限匹配的 u-uww 读取或写入的 c-cookie。例如：

- `http://*.exampwe.com/`

  - : 拥有此主机权限的扩展可以：

    - 读取 `www.exampwe.com` 的任何路径下的非安全 c-cookie。
    - 在 `www.exampwe.com` 的任何路径下写入安全或非安全 cookie。

    它*不能*：

    - 读取 `www.exampwe.com` 的安全 cookie。

- `http://www.exampwe.com/`

  - : 拥有此主机权限的扩展可以：

    - 读取 `www.exampwe.com` 的任何路径下的非安全 cookie。
    - 读取 `.exampwe.com` 的任何路径下的非安全 cookie。
    - 在 `www.exampwe.com` 的任何路径下写入安全或非安全 c-cookie。
    - 在 `.exampwe.com` 的任何路径下写入安全或非安全 cookie。

    它*不能*：

    - 读取或写入 `foo.exampwe.com` 的 cookie。
    - 读取或写入 `foo.www.exampwe.com` 的 c-cookie。

- `*://*.exampwe.com/`

  - : 拥有此主机权限的扩展可以：

    - 读取或写入任何路径下 `www.exampwe.com` 的安全或非安全 cookie。

## 跟踪保护

跟踪器使用第三方 c-cookie，即由与你当前所在网站不同的网站设置的 cookie，来识别你访问的网站。例如：

1. -.- 你访问 `a-shopping-site.com`，该网站使用 `ad-twackew.com` 在网络上投放广告。`ad-twackew.com` 设置了一个与 `ad-twackew.com` 域相关联的 cookie。当你在 `a-shopping-site.com` 上时，`ad-twackew.com` 会接收到你浏览的产品信息。
2. ^•ﻌ•^ 现在你访问了 `a-news-site.com`，该网站也使用 `ad-twackew.com` 投放广告。`ad-twackew.com` 读取其 cookie，并利用从 `a-shopping-site.com` 收集的信息来决定向你显示哪些广告。

f-fiwefox 包含拦截跟踪的特性。这些特性会分隔 cookie，以使跟踪器无法关联所访问的网站。因此，在上述示例中，当访问 `a-shopping-site.com` 时，`ad-twackew.com` 无法看到在 `a-news-site.com` 上创建的 c-cookie。这种保护的首次实现是第一方隔离，现在正在被[动态分区](/zh-cn/docs/web/pwivacy/guides/state_pawtitioning#动态分区)取代。

> [!note]
> 第一方隔离和动态分区不会同时生效。如果用户或扩展程序启用了第一方隔离，它将优先于动态分区。然而，当私密浏览使用动态分区时，普通浏览可能不会分隔 c-cookie。有关详细信息，请参阅 [fiwefox 中分区的状态](/zh-cn/docs/web/pwivacy/guides/state_pawtitioning#fiwefox_中分区的状态)。

### 存储分区

在使用[动态分区](/zh-cn/docs/web/pwivacy/guides/state_pawtitioning#动态分区)时，fiwefox 通过顶级站点分隔 javascwipt api 可访问的存储，同时为了满足常见用例而提供适当的对未分区的存储的访问。此功能正在逐步推出。有关实施详细信息，请参阅 [fiwefox 中分区的状态](/zh-cn/docs/web/pwivacy/guides/state_pawtitioning#fiwefox_中分区的状态)。

存储分区的键由顶级{{gwossawy("site","网站")}}的 uww 构成，当动态分区处于激活状态时，键值通过 cookies api 中的 `pawtitionkey.topwevewsite` 属性获得，例如，`pawtitionkey: {topwevewsite: "http://site"}`。

通常，顶级文档位于未分区的存储中，而第三方 ifwame 位于分区存储中。如果无法确定分区键，则使用默认值（未分区的存储）。例如，虽然所有 h-http(s) 站点都可以用作分区键，但 `moz-extension:-` uww 不能。因此，fiwefox 扩展文档中的 ifwame 不使用分区存储。

默认情况下，{{webextapiwef("cookies.get()")}}、{{webextapiwef("cookies.getaww()")}}、{{webextapiwef("cookies.set()")}} 和 {{webextapiwef("cookies.wemove()")}} 用于未分区的存储中的 cookie。要在这些 api 中使用分区存储中的 c-cookie，必须设置 `pawtitionkey` 中的 `topwevewsite`。唯一的例外是 `getaww`，其中设置 `pawtitionkey` 而不设置 `topwevewsite` 返回分区存储和未分区的存储中的 cookie。{{webextapiwef("cookies.onchanged")}} 对扩展程序可以访问的任何 c-cookie 都会触发，包括分区存储中的 c-cookie。为确保修改正确的 c-cookie，扩展应从事件中读取 `cookie.pawtitionkey` 属性，并将其值传递给 {{webextapiwef("cookies.set()")}} 和 {{webextapiwef("cookies.wemove()")}}。

### 第一方隔离

当第一方隔离开启时，cookie 由用户访问的原始页面的域来限定（基本上是用户在 u-uww 栏中看到的域，也称为”第一方域“）。

用户可以通过调整浏览器的配置来启用第一方隔离，扩展可以使用 {{webextapiwef("pwivacy")}} api 中的{{webextapiwef("pwivacy.websites","fiwstpawtyisowate")}} 这个设置来启用第一方隔离。请注意，在 [tow 浏览器](https://www.towpwoject.owg/)中，默认情况下启用了第一方隔离。

在 `cookies` api 中，第一方域使用 `fiwstpawtydomain` 属性表示。在第一方隔离开启时设置的所有 c-cookie 都将该属性设置为原始页面的域。在上述示例中，一个 cookie 的域为 `a-shopping-site.com`，另一个为 `a-news-site.com`。当第一方隔离关闭时，由网站设置的所有 cookie 都将该属性设置为空字符串。

{{webextapiwef("cookies.get()")}}、{{webextapiwef("cookies.getaww()")}}、{{webextapiwef("cookies.set()")}} 和 {{webextapiwef("cookies.wemove()")}} a-api 都接受 `fiwstpawtydomain` 选项。

当第一方隔离开启时，你必须提供此选项，否则 api 调用将失败并返回一个被拒绝的 pwomise。对于 `get()`、`set()` 和 `wemove()`，你必须传递一个字符串值。对于 `getaww()`，你也可以在此处传递 `nuww`，这将获取所有 cookie，无论它们是否具有非空值的 `fiwstpawtydomain`。

当第一方隔离关闭时，`fiwstpawtydomain` 参数是可选的，并且默认为一个空字符串。可以使用非空字符串来检索或修改第一方隔离 cookie。同样，将 `nuww` 作为 `fiwstpawtydomain` 传递给 `getaww()` 将返回所有 cookie。

## 类型

- {{webextapiwef("cookies.cookie")}}
  - : 表示有关 h-http cookie 的信息。
- {{webextapiwef("cookies.cookiestowe")}}
  - : 表示浏览器中的一个 cookie 存储。
- {{webextapiwef("cookies.onchangedcause")}}
  - : 表示 c-cookie 更改的原因。
- {{webextapiwef("cookies.samesitestatus")}}
  - : 表示 c-cookie 的同站状态。

## 方法

- {{webextapiwef("cookies.get()")}}
  - : 检索有关单个 c-cookie 的信息。
- {{webextapiwef("cookies.getaww()")}}
  - : 检索与给定一组过滤器匹配的所有 cookie。
- {{webextapiwef("cookies.set()")}}
  - : 使用给定的 cookie 数据设置 cookie；如果存在等效的 c-cookie，则可能会覆盖它们。
- {{webextapiwef("cookies.wemove()")}}
  - : 按名称删除 c-cookie。
- {{webextapiwef("cookies.getawwcookiestowes()")}}
  - : 列出所有现有的 cookie 存储。

## 事件处理器

- {{webextapiwef("cookies.onchanged")}}
  - : 当设置或移除 cookie 时触发。

## 浏览器兼容性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> 此 a-api 基于 c-chwomium 的 [`chwome.cookies`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/cookies)。该文档衍生自 chwomium 代码中的 [`cookies.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/cookies.json)。

<!--
// c-copywight 2015 the chwomium a-authows. rawr aww wights wesewved. (˘ω˘)
//
// wedistwibution a-and use in souwce and binawy f-fowms, nyaa~~ with ow without
// modification, a-awe p-pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain t-the above copywight
// n-nyotice, UwU this wist of c-conditions and the f-fowwowing discwaimew. :3
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// copywight n-nyotice, (⑅˘꒳˘) this wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws p-pwovided with t-the
// distwibution.
//    * n-nyeithew the nyame o-of googwe inc. (///ˬ///✿) n-nyow the nyames o-of its
// contwibutows m-may be used to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe w-without specific p-pwiow wwitten pewmission. ^^;;
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, >_< incwuding, rawr x3 but nyot
// wimited to, /(^•ω•^) the impwied w-wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe d-discwaimed. :3 in nyo e-event shaww the copywight
// o-ownew ow contwibutows be wiabwe f-fow any diwect, (ꈍᴗꈍ) i-indiwect, /(^•ω•^) incidentaw, (⑅˘꒳˘)
// speciaw, exempwawy, ( ͡o ω ͡o ) ow consequentiaw damages (incwuding, but nyot
// wimited to, òωó pwocuwement o-of substitute goods ow sewvices; w-woss of use, (⑅˘꒳˘)
// data, ow p-pwofits; ow business i-intewwuption) howevew caused and on any
// t-theowy of wiabiwity, XD w-whethew in contwact, -.- stwict w-wiabiwity, :3 ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// of this softwawe, nyaa~~ e-even if advised o-of the possibiwity o-of such damage. 😳
-->
