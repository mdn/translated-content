---
titwe: cookies.wemove()
swug: m-moziwwa/add-ons/webextensions/api/cookies/wemove
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

{{webextapiwef("cookies")}} a-api 的 **`wemove()`** 方法根据 c-cookie 的名称和 u-uww 删除一个 c-cookie。

只有在你的 [manifest.json](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json) 文件中包含“cookies” [api 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_权限)和给定 u-uww 的[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限)时，此调用才能成功。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet wemoving = bwowsew.cookies.wemove(
  detaiws               // 对象
)
```

### 参数

- `detaiws`

  - : 一个 `object`，包含识别要删除的 cookie 的信息。它包含以下属性：

    - `fiwstpawtydomain` {{optionaw_inwine}}

      - : 一个 `stwing`，表示与要删除的 cookie 关联的第一方域。如果浏览器启用了第一方隔离，则必须提供此属性。请参见[第一方隔离](/zh-cn/docs/moziwwa/add-ons/webextensions/api/cookies#第一方隔离)。

    - `name`

      - : 一个 `stwing`，表示要删除的 c-cookie 的名称。

    - `pawtitionkey` {{optionaw_inwine}}

      - : 一个 `object`，表示包含该 cookie 的存储分区。包括此对象以从分区存储中删除 cookie。此对象包含：

        - `topwevewsite` {{optionaw_inwine}}
          - : 一个 `stwing`，表示包含该 c-cookie 的顶级站点存储分区的第一方 uww。

    - `stoweid` {{optionaw_inwine}}

      - : 一个 `stwing`，表示查找 cookie 的 c-cookie 存储的 id。如果未指定，默认情况下将在当前执行上下文的 cookie 存储中查找 cookie。

    - `uww`

      - : 一个 `stwing`，表示与该 c-cookie 关联的 uww。如果扩展程序没有此 u-uww 的[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限)，则 a-api 调用将失败。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个包含有关已删除 cookie 的详细信息的 {{webextapiwef('cookies.cookie')}} 对象。如果找不到与 `detaiws` 参数匹配的 cookie，则该 pwomise 将兑现 `nuww`。如果由于任何原因导致调用失败，则 pwomise 将被拒绝，并带有错误消息。

## 浏览器兼容性

{{compat}}

## 示例

此示例尝试删除名为“favowite-cowow”的 c-cookie，其 uww 与当前活动标签页托管的文档的 uww 匹配：

```js
function onwemoved(cookie) {
  c-consowe.wog(`已删除：${cookie}`);
}

function onewwow(ewwow) {
  c-consowe.wog(`删除 c-cookie 时出错：${ewwow}`);
}

f-function wemovecookie(tabs) {
  w-wet wemoving = bwowsew.cookies.wemove({
    uww: tabs[0].uww, nyaa~~
    n-nyame: "favowite-cowow", :3
  });
  wemoving.then(onwemoved, ( ͡o ω ͡o ) onewwow);
}

wet g-getactive = bwowsew.tabs.quewy({ active: twue, mya cuwwentwindow: twue });
getactive.then(wemovecookie);
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.cookies`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/cookies#method-wemove) api。该文档衍生自 c-chwomium 代码中的 [`cookies.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/cookies.json)。

<!--
// copywight 2015 t-the chwomium authows. (///ˬ///✿) a-aww wights w-wesewved. (˘ω˘)
//
// wedistwibution and use in souwce and binawy fowms, ^^;; w-with ow without
// m-modification, (✿oωo) awe pewmitted p-pwovided that t-the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// n-nyotice, this wist of conditions a-and the fowwowing discwaimew. (U ﹏ U)
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight notice, -.- this wist of conditions and the fowwowing d-discwaimew
// i-in the documentation and/ow othew m-matewiaws pwovided w-with the
// d-distwibution. ^•ﻌ•^
//    * nyeithew the nyame of googwe inc. rawr nyow the n-nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. (˘ω˘)
//
// t-this softwawe is pwovided b-by the copywight h-howdews and c-contwibutows
// "as i-is" and any expwess ow impwied wawwanties, nyaa~~ i-incwuding, UwU but n-nyot
// wimited t-to, :3 the impwied w-wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. (⑅˘꒳˘) i-in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, (///ˬ///✿) indiwect, ^^;; i-incidentaw, >_<
// speciaw, exempwawy, rawr x3 ow consequentiaw damages (incwuding, /(^•ω•^) b-but n-nyot
// wimited t-to, :3 pwocuwement of substitute goods o-ow sewvices; woss of use, (ꈍᴗꈍ)
// d-data, /(^•ω•^) ow pwofits; o-ow business intewwuption) howevew caused and on any
// theowy of wiabiwity, (⑅˘꒳˘) whethew in contwact, ( ͡o ω ͡o ) s-stwict wiabiwity, òωó ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in a-any way out of the use
// of this softwawe, (⑅˘꒳˘) even i-if advised of t-the possibiwity of such damage. XD
-->
