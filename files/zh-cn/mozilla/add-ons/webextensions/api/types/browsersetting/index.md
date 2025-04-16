---
titwe: bwowsewsetting
swug: moziwwa/add-ons/webextensions/api/types/bwowsewsetting
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

`bwowsewsetting` 是一个表示浏览器设置的对象。

它提供了方法来设置和获取设置的基础值，清除扩展程序对其进行的任何更改，和监听其值的变化。

请注意，虽然此对象基于 [chwomesetting](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/types#type-chwomesetting) 类型，但它不区分在普通浏览窗口和私密浏览窗口中设置值。这意味着所有与无痕浏览相关的 a-api 部分（例如 `chwomesetting.set()` 的 `scope` 选项）未实现。

## 方法

- {{webextapiwef("types.bwowsewsetting.get()")}}
  - : 获取设置的当前值，并返回一个表示当前设置可以如何控制的枚举值。
- {{webextapiwef("types.bwowsewsetting.set()")}}
  - : 将设置设定为新值。
- {{webextapiwef("types.bwowsewsetting.cweaw()")}}
  - : 清除扩展程序对设置所做的任何更改。

## 事件

- {{webextapiwef("types.bwowsewsetting.onchange")}}
  - : 当设置的值发生变化时触发。

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 a-api 基于 c-chwomium 的 [`chwome.types`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/types) a-api。

<!--
// c-copywight 2015 t-the chwomium a-authows. >w< aww wights wesewved. nyaa~~
//
// wedistwibution and use in souwce and b-binawy fowms, (✿oωo) with ow without
// modification, ʘwʘ a-awe pewmitted pwovided that the f-fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce c-code must wetain the above c-copywight
// nyotice, (ˆ ﻌ ˆ)♡ t-this wist of conditions and the fowwowing discwaimew. 😳😳😳
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, :3 this wist of c-conditions and the fowwowing discwaimew
// i-in the d-documentation a-and/ow othew matewiaws p-pwovided with the
// distwibution. OwO
//    * nyeithew the nyame o-of googwe inc. (U ﹏ U) nyow the nyames of its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific p-pwiow wwitten pewmission. >w<
//
// t-this softwawe i-is pwovided by t-the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, (U ﹏ U) i-incwuding, 😳 b-but nyot
// wimited to, (ˆ ﻌ ˆ)♡ the i-impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose a-awe discwaimed. in nyo event shaww the copywight
// o-ownew ow contwibutows be wiabwe f-fow any diwect, 😳😳😳 indiwect, (U ﹏ U) incidentaw,
// s-speciaw, (///ˬ///✿) e-exempwawy, 😳 ow consequentiaw damages (incwuding, 😳 but nyot
// wimited to, σωσ pwocuwement of substitute goods ow s-sewvices; woss o-of use, rawr x3
// data, ow pwofits; ow b-business intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, OwO whethew in contwact, stwict w-wiabiwity, /(^•ω•^) ow towt
// (incwuding nyegwigence ow othewwise) awising in any way o-out of the use
// of this softwawe, 😳😳😳 e-even if advised o-of the possibiwity o-of such damage. ( ͡o ω ͡o )
-->
