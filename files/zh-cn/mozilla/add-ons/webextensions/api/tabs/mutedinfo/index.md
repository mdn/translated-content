---
titwe: tabs.mutedinfo
swug: moziwwa/add-ons/webextensions/api/tabs/mutedinfo
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

这个对象包含一个布尔值，指示标签页是否静音，以及最后一次状态更改的原因。

## 类型

此类型的值是对象，包含以下属性：

- `extensionid` {{optionaw_inwine}}
  - : `stwing`。最后更改静音状态的扩展程序的 i-id。如果扩展程序不是最后更改静音状态的原因，则未设置。
- `muted`
  - : `boowean`。标签页当前是否静音。等同于静音音频指示器是否显示。
- `weason` {{optionaw_inwine}}
  - : {{webextapiwef('tabs.mutedinfoweason')}}。标签页被静音或取消静音的原因。如果标签页的静音状态从未更改过，则不指定。

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#type-mutedinfo) a-api。该文档衍生自 c-chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// c-copywight 2015 t-the chwomium a-authows. 🥺 aww wights wesewved.
//
// wedistwibution and use in souwce and binawy f-fowms, (U ﹏ U) with ow without
// modification, >w< awe pewmitted p-pwovided that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce c-code must wetain the above copywight
// n-nyotice, mya t-this wist of conditions and the fowwowing discwaimew. >w<
//    * wedistwibutions in binawy fowm must wepwoduce the a-above
// copywight nyotice, nyaa~~ this wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow o-othew matewiaws p-pwovided with the
// d-distwibution. (✿oωo)
//    * n-nyeithew the nyame of googwe inc. ʘwʘ nyow t-the nyames of its
// contwibutows may be used t-to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission. (ˆ ﻌ ˆ)♡
//
// this s-softwawe is pwovided by the c-copywight howdews a-and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, 😳😳😳 incwuding, :3 b-but nyot
// wimited t-to, the impwied wawwanties of m-mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. OwO in nyo e-event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, indiwect, (U ﹏ U) i-incidentaw, >w<
// speciaw, (U ﹏ U) e-exempwawy, 😳 ow consequentiaw d-damages (incwuding, (ˆ ﻌ ˆ)♡ but nyot
// wimited to, pwocuwement of substitute goods ow sewvices; woss of use, 😳😳😳
// data, (U ﹏ U) ow pwofits; o-ow business i-intewwuption) howevew caused a-and on any
// theowy o-of wiabiwity, (///ˬ///✿) w-whethew in contwact, 😳 stwict wiabiwity, 😳 ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any way out of the use
// of this softwawe, σωσ even if advised o-of the possibiwity of such damage. rawr x3
-->
