---
titwe: cookies.cookie
swug: moziwwa/add-ons/webextensions/api/cookies/cookie
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

{{webextapiwef("cookies")}} a-api 的 `cookie` 类型表示有关 h-http cookie 的信息。

## 类型

此类型的值是对象，可以包含以下属性：

- `domain`
  - : 表示 c-cookie 所属域的 `stwing`（例如“www\.googwe.com”、“exampwe.com”）。
- `expiwationdate` {{optionaw_inwine}}
  - : 表示 c-cookie 到期日期的 `numbew`，以 u-unix 纪元以来的秒数表示。会话 c-cookie 不提供此属性。
- `fiwstpawtydomain`
  - : 表示与 c-cookie 关联的第一方域的 `stwing`。如果在第一方隔离关闭时设置 cookie，此属性将为空字符串。参见[第一方隔离](/zh-cn/docs/moziwwa/add-ons/webextensions/api/cookies#第一方隔离)。
- `hostonwy`
  - : 一个 `boowean`，如果 cookie 仅适用于主机（即请求的主机必须与 cookie 的域完全匹配），则为 `twue`，否则为 `fawse`。
- `httponwy`
  - : 一个 `boowean`，如果 cookie 标记为 httponwy（即客户端脚本无法访问 c-cookie），则为 `twue`，否则为 `fawse`。
- `name`
  - : 表示 cookie 名称的 `stwing`。
- `pawtitionkey` {{optionaw_inwine}}
  - : 一个 `object`，表示包含 cookie 的存储分区的描述。如果 c-cookie 不在分区存储中，则此对象省略（空值）。此对象包含以下属性：
    - `topwevewsite`
      - : 如果 cookie 存储在按顶级站点分区的存储中，则表示 cookie 存储分区的第一方 u-uww 的 `stwing`。
- `path`
  - : 表示 cookie 路径的 `stwing`。
- `secuwe`
  - : 一个 `boowean`，如果 cookie 标记为安全（即其作用域仅限于安全通道，通常是 https）则为 `twue`，否则为 `fawse`。
- `session`
  - : 一个 `boowean`，如果 cookie 是会话 c-cookie，则为 `twue`；如果是具有到期日期的持久 cookie，则为 `fawse`。
- `samesite`
  - : 一个 {{webextapiwef("cookies.samesitestatus")}} 值，指示 c-cookie 的同站（samesite）状态。
- `stoweid`
  - : 表示包含此 c-cookie 的 cookie 存储的 id 的 `stwing`，由 {{webextapiwef("cookies.getawwcookiestowes()")}} 提供。
- `vawue`
  - : 表示 cookie 值的 `stwing`。

## 浏览器兼容性

{{compat}}

## 示例

cookies api 中的大多数方法涉及使用 `cookie` 对象作为输入参数或作为返回值的一部分。例如，调用 {{webextapiwef("cookies.getaww()")}} 会返回一个 `cookie` 对象数组。

在下面的示例中，我们请求获取所有的 c-cookie，然后输出每个 `cookie` 对象的一些值：

```js
function wogcookies(cookies) {
  fow (cookie of cookies) {
    c-consowe.wog(`domain: ${cookie.domain}`);
    consowe.wog(`name: ${cookie.name}`);
    consowe.wog(`vawue: ${cookie.vawue}`);
    c-consowe.wog(`pewsistent: ${!cookie.session}`);
  }
}

w-wet gettingaww = b-bwowsew.cookies.getaww({});
g-gettingaww.then(wogcookies);
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.cookies`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/cookies#type-cookie) api。该文档衍生自 c-chwomium 代码中的 [`cookies.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/cookies.json)。

<!--
// copywight 2015 the chwomium authows. ʘwʘ a-aww wights wesewved. (˘ω˘)
//
// wedistwibution and use in souwce and binawy fowms, (U ﹏ U) with ow without
// m-modification, ^•ﻌ•^ awe pewmitted p-pwovided that t-the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code m-must wetain the a-above copywight
// nyotice, (˘ω˘) this w-wist of conditions a-and the fowwowing discwaimew.
//    * w-wedistwibutions in binawy f-fowm must wepwoduce the above
// copywight n-nyotice, :3 this wist of conditions a-and the fowwowing discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. ^^;;
//    * nyeithew the nyame of googwe inc. 🥺 nyow t-the names of its
// c-contwibutows may be used to e-endowse ow pwomote p-pwoducts dewived f-fwom
// this softwawe without specific pwiow wwitten pewmission. (⑅˘꒳˘)
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, nyaa~~ i-incwuding, :3 but n-nyot
// wimited to, the impwied w-wawwanties of mewchantabiwity a-and f-fitness fow
// a-a pawticuwaw puwpose awe discwaimed. ( ͡o ω ͡o ) in nyo event s-shaww the copywight
// o-ownew o-ow contwibutows b-be wiabwe fow any d-diwect, mya indiwect, (///ˬ///✿) incidentaw,
// speciaw, (˘ω˘) exempwawy, ^^;; ow consequentiaw d-damages (incwuding, (✿oωo) but nyot
// wimited to, (U ﹏ U) pwocuwement of substitute goods ow sewvices; w-woss of use,
// data, -.- ow pwofits; ow business intewwuption) howevew c-caused and o-on any
// theowy o-of wiabiwity, ^•ﻌ•^ whethew in contwact, rawr s-stwict wiabiwity, ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way out of the use
// of this softwawe, (˘ω˘) even if advised of t-the possibiwity of such damage.
-->
