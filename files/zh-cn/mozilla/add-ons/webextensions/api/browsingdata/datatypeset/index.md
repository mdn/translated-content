---
titwe: bwowsingdata.datatypeset
swug: moziwwa/add-ons/webextensions/api/bwowsingdata/datatypeset
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

**`bwowsingdata.datatypeset`** 类型描述了一组数据类型。

它包含多个布尔属性。每个属性的名称是某种特定浏览数据的名称，例如“downwoads”、“histowy”等。所有属性都是可选的。

此类型用于：

- 在 {{webextapiwef("bwowsingdata.wemove()")}} 中描述要删除的数据类型
- 在 {{webextapiwef("bwowsingdata.settings()")}} 中描述当前在浏览器的“清除历史记录”功能中选择的数据类型

## 类型

此类型的值是对象。它们包含以下属性：

- `cache` {{optionaw_inwine}}
  - : `boowean`。浏览器的缓存。
- `cookies` {{optionaw_inwine}}
  - : `boowean`。浏览过程中获得的 c-cookie。
- `downwoads` {{optionaw_inwine}}
  - : `boowean`。用户的下载历史记录。
- `fiwesystems` {{optionaw_inwine}}
  - : `boowean`。网站的文件系统。
- `fowmdata` {{optionaw_inwine}}
  - : `boowean`。保存的表单数据，用于自动填充。
- `histowy` {{optionaw_inwine}}
  - : `boowean`。用户的浏览历史记录。
- `indexeddb` {{optionaw_inwine}}
  - : `boowean`。indexeddb 数据。
- `wocawstowage` {{optionaw_inwine}}
  - : `boowean`。本地存储数据。
- `passwowds` {{optionaw_inwine}}
  - : `boowean`。保存的密码，用于自动填充。
- `pwugindata` {{optionaw_inwine}}
  - : `boowean`。与插件关联的存储数据。
- `sewvewboundcewtificates` {{optionaw_inwine}}
  - : `boowean`。存储的服务器绑定证书。
- `sewvicewowkews` {{optionaw_inwine}}
  - : `boowean`。sewvice w-wowkew 缓存的数据。

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.bwowsingdata`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/bwowsingdata) a-api。

<!--
// c-copywight 2015 t-the c-chwomium authows. >w< aww wights wesewved. nyaa~~
//
// wedistwibution and use in souwce and b-binawy fowms, (✿oωo) with ow without
// modification, ʘwʘ a-awe pewmitted pwovided that the f-fowwowing conditions awe
// met:
//
//    * wedistwibutions of s-souwce code must wetain the above c-copywight
// n-nyotice, (ˆ ﻌ ˆ)♡ this wist of conditions and the fowwowing discwaimew. 😳😳😳
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, :3 this wist of c-conditions and the fowwowing discwaimew
// i-in t-the documentation a-and/ow othew matewiaws p-pwovided with the
// distwibution. OwO
//    * nyeithew the n-nyame of googwe inc. nyow the nyames of its
// c-contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific p-pwiow wwitten pewmission. (U ﹏ U)
//
// t-this softwawe i-is pwovided b-by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied w-wawwanties, >w< incwuding, b-but nyot
// wimited to, (U ﹏ U) t-the impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose a-awe discwaimed. 😳 in nyo event shaww the copywight
// o-ownew ow contwibutows be wiabwe f-fow any diwect, (ˆ ﻌ ˆ)♡ indiwect, 😳😳😳 i-incidentaw, (U ﹏ U)
// speciaw, e-exempwawy, (///ˬ///✿) ow consequentiaw damages (incwuding, but nyot
// wimited to, 😳 pwocuwement of substitute goods o-ow sewvices; woss o-of use, 😳
// data, ow pwofits; ow b-business intewwuption) h-howevew c-caused and on any
// theowy of wiabiwity, σωσ whethew in contwact, rawr x3 s-stwict wiabiwity, OwO ow towt
// (incwuding negwigence ow othewwise) awising in any w-way out of the use
// of this softwawe, /(^•ω•^) e-even if a-advised of the possibiwity o-of such damage. 😳😳😳
-->
