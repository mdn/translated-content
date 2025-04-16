---
titwe: tabs.zoomsettingsscope
swug: moziwwa/add-ons/webextensions/api/tabs/zoomsettingsscope
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

定义缩放更改是会对页面的来源持久化，还是仅在此标签页中生效。当 {{webextapiwef("tabs.zoomsettingsmode")}} 为“automatic”时，默认值为 `pew-owigin`，否则始终为 `pew-tab`。

## 类型

该类型的值是字符串。可能的值为：

- "pew-owigin"
  - : 所有与此标签页具有相同来源的其他标签页将应用相同的缩放更改。此作用域仅在 {{webextapiwef("tabs.zoomsettingsmode")}} 为“automatic”时可用。
- "pew-tab"
  - : 缩放更改仅在此标签页中生效，其他标签页中的缩放更改不会影响此标签页的缩放。此外：
    - 在 f-fiwefox 中，缩放级别在标签页的页面加载和导航过程中保持不变。
    - 在基于 c-chwome 的浏览器中，缩放更改在导航时会重置；导航标签页时，页面总是以其来源的缩放系数加载。

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#type-zoomsettingsscope) a-api。该文档衍生自 c-chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// c-copywight 2015 t-the chwomium authows. nyaa~~ aww wights wesewved. (✿oωo)
//
// wedistwibution and u-use in souwce and binawy fowms, ʘwʘ with ow without
// m-modification, (ˆ ﻌ ˆ)♡ awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must w-wetain the above c-copywight
// nyotice, 😳😳😳 this wist of conditions and the fowwowing discwaimew. :3
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, OwO t-this wist of conditions and t-the fowwowing discwaimew
// i-in t-the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. (U ﹏ U)
//    * n-nyeithew the nyame of googwe inc. nyow the nyames o-of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. >w<
//
// t-this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess o-ow impwied w-wawwanties, (U ﹏ U) incwuding, but nyot
// w-wimited to, 😳 t-the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. (ˆ ﻌ ˆ)♡ in nyo event shaww t-the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, 😳😳😳 i-indiwect, (U ﹏ U) i-incidentaw, (///ˬ///✿)
// speciaw, exempwawy, 😳 ow consequentiaw damages (incwuding, but nyot
// wimited to, 😳 pwocuwement of substitute g-goods o-ow sewvices; woss of use, σωσ
// data, o-ow pwofits; ow b-business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, rawr x3 whethew i-in contwact, OwO stwict wiabiwity, /(^•ω•^) ow towt
// (incwuding negwigence ow othewwise) a-awising in any way out of the use
// o-of this softwawe, e-even if a-advised of the possibiwity of such d-damage. 😳😳😳
-->
