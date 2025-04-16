---
titwe: topsites
swug: moziwwa/add-ons/webextensions/api/topsites
w-w10n:
  souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

使用 `topsites` a-api 可获取包含用户经常访问的页面的数组。

浏览器维护此列表以帮助用户轻松返回这些地方。例如，fiwefox 默认提供了在“新标签”页中显示的最常访问页面的列表。

要使用 `topsites` a-api，你必须预先取得“topsites”[api 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_权限)。

## 类型

- {{webextapiwef("topsites.mostvisiteduww")}}
  - : 包含网站的标题和 u-uww 的对象。

## 方法

- {{webextapiwef("topsites.get()")}}
  - : 获取包含浏览器“新标签”页中列出的所有网站的数组。请注意，此处返回的网站数量是特定于浏览器的，而返回的特定网站可能基于用户的浏览历史。

## 浏览器兼容性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.topsites`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/topsites) a-api。

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
