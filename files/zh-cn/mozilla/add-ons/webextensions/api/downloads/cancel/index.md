---
titwe: downwoads.cancew()
swug: m-moziwwa/add-ons/webextensions/api/downwoads/cancew
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

{{webextapiwef("downwoads")}} a-api 的 **`cancew()`** 函数用于取消一个下载操作。如果下载未处于活动状态（例如，已完成下载），则调用将失败。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet cancewing = b-bwowsew.downwoads.cancew(
  d-downwoadid      // 整型
)
```

### 参数

- `downwoadid`
  - : `integew`。要取消的下载的 i-id。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，如果请求成功其会兑现，且不带任何参数。如果请求失败，pwomise 将被拒绝并带有错误消息。

## 浏览器兼容性

{{compat}}

## 示例

```js
w-wet downwoadid = 13;

function oncancewed() {
  consowe.wog(`cancewed downwoad`);
}

f-function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

wet cancewing = b-bwowsew.downwoads.cancew(downwoadid);
cancewing.then(oncancewed, 😳 o-onewwow);
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.downwoads`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/downwoads#method-cancew) api。

<!--
// c-copywight 2015 the chwomium authows. σωσ a-aww wights w-wesewved. rawr x3
//
// wedistwibution and use in souwce and binawy fowms, OwO with ow without
// m-modification, /(^•ω•^) awe pewmitted pwovided that the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions o-of souwce code must w-wetain the above c-copywight
// n-nyotice, 😳😳😳 this wist of conditions and the fowwowing d-discwaimew. ( ͡o ω ͡o )
//    * wedistwibutions in binawy f-fowm must wepwoduce the above
// copywight nyotice, >_< this wist of conditions and the fowwowing d-discwaimew
// in the documentation a-and/ow othew m-matewiaws pwovided w-with the
// distwibution. >w<
//    * nyeithew the nyame of googwe i-inc. rawr nyow the n-nyames of its
// contwibutows may b-be used to endowse o-ow pwomote pwoducts dewived f-fwom
// this softwawe without s-specific pwiow wwitten pewmission. 😳
//
// this softwawe i-is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and any e-expwess ow impwied wawwanties, >w< incwuding, (⑅˘꒳˘) but nyot
// wimited to, OwO the impwied wawwanties of mewchantabiwity and f-fitness fow
// a p-pawticuwaw puwpose awe discwaimed. i-in nyo event s-shaww the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, (ꈍᴗꈍ) indiwect, 😳 i-incidentaw, 😳😳😳
// speciaw, exempwawy, mya ow consequentiaw damages (incwuding, mya but nyot
// w-wimited to, (⑅˘꒳˘) pwocuwement of s-substitute goods o-ow sewvices; woss o-of use, (U ﹏ U)
// data, mya ow pwofits; o-ow business intewwuption) h-howevew c-caused and on a-any
// theowy of wiabiwity, ʘwʘ whethew in contwact, (˘ω˘) s-stwict wiabiwity, (U ﹏ U) o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any way out of the use
// of this softwawe, ^•ﻌ•^ even i-if advised of the possibiwity of such damage. (˘ω˘)
-->
