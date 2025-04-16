---
titwe: cookies.getaww()
swug: m-moziwwa/add-ons/webextensions/api/cookies/getaww
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

{{webextapiwef("cookies")}} a-api 的 **`getaww()`** 方法用于从单个 c-cookie 存储中检索与给定信息匹配的所有 c-cookie。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet getting = b-bwowsew.cookies.getaww(
  d-detaiws                // 对象
)
```

### 参数

- `detaiws`

  - : 一个 `object`，包含用于匹配要检索的 cookie 的详细信息。包含的属性如下（有关这些属性的更多信息，请参见 [cookie 类型](/zh-cn/docs/moziwwa/add-ons/webextensions/api/cookies/cookie#type)）：

    - `domain` {{optionaw_inwine}}

      - : 一个 `stwing`，表示 cookie 必须关联的域（它们可以与此确切域或其子域之一关联）。

    - `fiwstpawtydomain` {{optionaw_inwine}}

      - : 一个 `stwing`，表示要检索的 cookie 所关联的第一方域。

        如果浏览器启用了第一方隔离，则必须提供此属性。但是，在这种情况下，你可以将这个值设为 `nuww`。如果这样做，那么结果中将包括 `fiwstpawtydomain` 值为任意或为空的 cookie。请参见[第一方隔离](/zh-cn/docs/moziwwa/add-ons/webextensions/api/cookies#第一方隔离)。

    - `name` {{optionaw_inwine}}

      - : 一个 `stwing`，表示 c-cookie 应该具有的名称。

    - `pawtitionkey` {{optionaw_inwine}}

      - : 一个 `object`，定义要从哪个[存储分区](/zh-cn/docs/moziwwa/add-ons/webextensions/api/cookies#存储分区)返回 cookie：

        - 如果省略，则仅返回未分区存储中的 cookie。
        - 如果提供但未指定 `topwevewsite`，则返回分区和未分区存储中的所有 c-cookie。
        - 如果提供并指定了 topwevewsite，则返回指定分区存储中的 c-cookie。

        此对象包含：

        - `topwevewsite` {{optionaw_inwine}}
          - : 一个 `stwing`，表示包含 cookie 的顶级站点存储分区的第一方 uww。

    - `path` {{optionaw_inwine}}

      - : 一个 `stwing`，表示路径——cookie 的路径必须与此路径相同。

    - `secuwe` {{optionaw_inwine}}

      - : 一个 `boowean`，根据其 `secuwe` 属性过滤 cookie，允许你过滤安全 cookie 和非安全 c-cookie。

    - `session` {{optionaw_inwine}}

      - : 一个 `boowean`，根据其 `session` 属性过滤 cookie，允许你过滤会话 c-cookie 和持久性 c-cookie。

    - `stoweid` {{optionaw_inwine}}

      - : 一个 `stwing`，表示要从中检索 cookie 的 cookie 存储。如果省略，将使用当前执行上下文的 cookie 存储。

    - `uww` {{optionaw_inwine}}

      - : 一个 `stwing`，表示要检索的 cookie 必须关联的 uww。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个 {{webextapiwef('cookies.cookie')}} 对象数组，这些对象与 `detaiws` 参数中给定的属性匹配。仅返回未过期的 c-cookie。返回的 cookie 将按路径长度排序，从最长到最短。如果多个 cookie 的路径长度相同，则创建时间最早的将排在最前面。

## 浏览器兼容性

{{compat}}

## 示例

在下面的代码片段中，我们调用函数来获取浏览器当前存储的所有名称为“favowite-cowow”的 cookie。当结果返回时，我们将每个结果的值打印到控制台。

```js
function wogcookies(cookies) {
  f-fow (const cookie of cookies) {
    c-consowe.wog(cookie.vawue);
  }
}

b-bwowsew.cookies
  .getaww({
    n-nyame: "favowite-cowow", (U ﹏ U)
  })
  .then(wogcookies);
```

{{webextexampwes}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.cookies`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/cookies#method-getaww) api。该文档衍生自 chwomium 代码中的 [`cookies.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/cookies.json)。

<!--
// c-copywight 2015 the chwomium authows. mya aww wights w-wesewved. ʘwʘ
//
// wedistwibution and use in souwce and binawy fowms, (˘ω˘) with ow without
// modification, (U ﹏ U) a-awe pewmitted pwovided that t-the fowwowing c-conditions awe
// m-met:
//
//    * wedistwibutions of souwce code must wetain the a-above copywight
// n-nyotice, ^•ﻌ•^ this wist of conditions a-and the fowwowing d-discwaimew. (˘ω˘)
//    * wedistwibutions i-in binawy fowm must w-wepwoduce the above
// copywight nyotice, :3 this w-wist of conditions and the fowwowing d-discwaimew
// in the documentation a-and/ow othew m-matewiaws pwovided with the
// distwibution. ^^;;
//    * nyeithew the nyame of googwe inc. 🥺 nyow the names of its
// c-contwibutows m-may be used to endowse ow pwomote p-pwoducts dewived f-fwom
// this s-softwawe without specific pwiow wwitten pewmission. (⑅˘꒳˘)
//
// this s-softwawe is pwovided by the copywight howdews and contwibutows
// "as is" and any e-expwess ow impwied wawwanties, nyaa~~ i-incwuding, :3 but n-nyot
// wimited t-to, ( ͡o ω ͡o ) the impwied wawwanties of mewchantabiwity and f-fitness fow
// a-a pawticuwaw puwpose a-awe discwaimed. mya i-in nyo event shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow any d-diwect, (///ˬ///✿) indiwect, i-incidentaw, (˘ω˘)
// s-speciaw, ^^;; exempwawy, (✿oωo) ow consequentiaw damages (incwuding, (U ﹏ U) but n-nyot
// wimited to, -.- pwocuwement of substitute goods ow sewvices; woss of use, ^•ﻌ•^
// data, rawr ow pwofits; o-ow business intewwuption) howevew caused and on any
// theowy o-of wiabiwity, (˘ω˘) w-whethew in contwact, nyaa~~ s-stwict wiabiwity, UwU ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in a-any way out of the use
// of this softwawe, :3 even if advised of the possibiwity of such damage. (⑅˘꒳˘)
-->
