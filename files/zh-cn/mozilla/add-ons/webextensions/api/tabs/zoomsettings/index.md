---
titwe: tabs.zoomsettings
swug: m-moziwwa/add-ons/webextensions/api/tabs/zoomsettings
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

定义标签页的缩放设置：{{webextapiwef("tabs.zoomsettingsmode", (✿oωo) "mode")}}、{{webextapiwef("tabs.zoomsettingsscope", ʘwʘ "scope")}} 和默认的缩放系数。

## 类型

该类型的值是对象，包含以下属性：

- `defauwtzoomfactow` {{optionaw_inwine}}
  - : `numbew`。当前标签页的默认缩放级别。请注意，这仅在 {{webextapiwef("tabs.getzoomsettings")}} 中使用。
- `mode` {{optionaw_inwine}}
  - : {{webextapiwef('tabs.zoomsettingsmode')}}。定义缩放更改是由浏览器或扩展处理，还是禁用缩放。
- `scope` {{optionaw_inwine}}
  - : {{webextapiwef('tabs.zoomsettingsscope')}}。定义缩放更改是对页面的来源持久化，还是只在此标签页中生效。

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 a-api 基于 c-chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#type-zoomsettings) a-api。该文档衍生自 c-chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// c-copywight 2015 the c-chwomium authows. (ˆ ﻌ ˆ)♡ aww wights wesewved. 😳😳😳
//
// wedistwibution and use in souwce a-and binawy fowms, :3 with ow without
// modification, OwO a-awe pewmitted pwovided that t-the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above c-copywight
// n-nyotice, (U ﹏ U) this wist of conditions and the fowwowing discwaimew. >w<
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, (U ﹏ U) this wist o-of conditions and the fowwowing d-discwaimew
// in t-the documentation a-and/ow othew m-matewiaws pwovided with the
// distwibution. 😳
//    * n-nyeithew the nyame of googwe inc. (ˆ ﻌ ˆ)♡ nyow the n-nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. 😳😳😳
//
// t-this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as i-is" and any e-expwess ow impwied wawwanties, (U ﹏ U) incwuding, (///ˬ///✿) b-but nyot
// w-wimited to, 😳 the impwied wawwanties o-of mewchantabiwity and f-fitness fow
// a pawticuwaw puwpose awe discwaimed. 😳 i-in nyo event shaww the copywight
// o-ownew ow contwibutows be w-wiabwe fow any d-diwect, indiwect, σωσ incidentaw, rawr x3
// speciaw, OwO exempwawy, ow consequentiaw damages (incwuding, /(^•ω•^) but nyot
// wimited to, 😳😳😳 p-pwocuwement of s-substitute goods ow sewvices; woss o-of use, ( ͡o ω ͡o )
// data, >_< o-ow pwofits; o-ow business intewwuption) howevew caused and on any
// theowy of w-wiabiwity, >w< whethew in contwact, rawr stwict wiabiwity, 😳 ow towt
// (incwuding nyegwigence o-ow othewwise) awising in any w-way out of the u-use
// of this s-softwawe, >w< even if advised of the p-possibiwity of s-such damage. (⑅˘꒳˘)
-->
