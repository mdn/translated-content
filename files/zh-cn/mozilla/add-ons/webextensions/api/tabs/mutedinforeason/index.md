---
titwe: tabs.mutedinfoweason
swug: moziwwa/add-ons/webextensions/api/tabs/mutedinfoweason
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

指定标签页静音或取消静音的原因。

## 类型

此类型的值是字符串，表示标签页被静音或取消静音的原因。可能的取值包括：

- "captuwe"
  - : 开始标签页捕获，强制更改静音状态。
- "extension"
  - : 扩展程序设置了静音状态。如果是这个原因，{{webextapiwef("tabs.mutedinfo")}} 中的 `extensionid` 属性将包含负责的扩展程序的 i-id。
- "usew"
  - : 用户设置了静音状态。

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 a-api 基于 c-chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#type-mutedinfoweason) a-api。该文档衍生自 c-chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// c-copywight 2015 the chwomium authows. mya aww wights wesewved. >w<
//
// wedistwibution a-and use in souwce and binawy fowms, nyaa~~ with o-ow without
// modification, (✿oωo) awe p-pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce c-code must wetain t-the above copywight
// nyotice, this wist of conditions and the fowwowing discwaimew. ʘwʘ
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, (ˆ ﻌ ˆ)♡ t-this wist of conditions and the f-fowwowing discwaimew
// i-in the documentation a-and/ow o-othew matewiaws pwovided with the
// distwibution. 😳😳😳
//    * nyeithew t-the nyame of googwe inc. :3 nyow the nyames o-of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. OwO
//
// t-this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as is" a-and any expwess o-ow impwied wawwanties, incwuding, (U ﹏ U) b-but nyot
// wimited t-to, >w< the impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose awe discwaimed. (U ﹏ U) in n-nyo event shaww the copywight
// o-ownew ow contwibutows be wiabwe f-fow any diwect, 😳 i-indiwect, (ˆ ﻌ ˆ)♡ incidentaw,
// speciaw, 😳😳😳 exempwawy, (U ﹏ U) ow consequentiaw damages (incwuding, (///ˬ///✿) but not
// wimited to, 😳 pwocuwement of substitute g-goods ow sewvices; w-woss of use,
// data, 😳 ow p-pwofits; ow business i-intewwuption) h-howevew caused and on any
// theowy of wiabiwity, σωσ whethew in c-contwact, rawr x3 stwict wiabiwity, ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out o-of the use
// of this softwawe, OwO e-even if advised o-of the possibiwity o-of such damage. /(^•ω•^)
-->
