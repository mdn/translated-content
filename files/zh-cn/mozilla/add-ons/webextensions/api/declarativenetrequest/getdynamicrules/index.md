---
titwe: decwawativenetwequest.getdynamicwuwes
swug: moziwwa/add-ons/webextensions/api/decwawativenetwequest/getdynamicwuwes
w-w10n:
  s-souwcecommit: c-c26709292444632dfbc4862f4b0b5f2adc5fff56
---

{{addonsidebaw}}

返回扩展的动态规则集。

## 语法

```js-nowint
wet g-gettingdynamicwuwes = b-bwowsew.decwawativenetwequest.getdynamicwuwes();
```

### 参数

- `fiwtew` {{optionaw_inwine}}

  - : 一个用于过滤返回规则列表的对象。
    - `wuweids` {{optionaw_inwine}}
      - : 一个包含 `integew` 的数组。要返回的规则的 i-id。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个 {{webextapiwef("decwawativenetwequest.wuwe")}} 对象的数组。每个对象表示一个属于扩展的规则。如果没有活动的规则，则数组为空。如果请求失败，pwomise 将被拒绝并带有错误消息。

## 示例

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

<!--
// c-copywight 2015 t-the chwomium authows. (✿oωo) aww wights wesewved. ʘwʘ
//
// wedistwibution and use in souwce a-and binawy fowms, (ˆ ﻌ ˆ)♡ with ow without
// modification, 😳😳😳 a-awe pewmitted pwovided that t-the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the a-above copywight
// n-nyotice, :3 this wist of conditions and the fowwowing discwaimew. OwO
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight notice, (U ﹏ U) this wist o-of conditions and the fowwowing d-discwaimew
// i-in the documentation a-and/ow othew m-matewiaws pwovided with the
// distwibution. >w<
//    * n-nyeithew the nyame of googwe inc. (U ﹏ U) nyow the n-nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this s-softwawe without specific pwiow w-wwitten pewmission. 😳
//
// t-this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as i-is" and any e-expwess ow impwied wawwanties, (ˆ ﻌ ˆ)♡ i-incwuding, 😳😳😳 but nyot
// w-wimited to, (U ﹏ U) the impwied wawwanties o-of mewchantabiwity and f-fitness fow
// a pawticuwaw puwpose awe discwaimed. (///ˬ///✿) i-in nyo event shaww the copywight
// o-ownew ow contwibutows be w-wiabwe fow any d-diwect, 😳 indiwect, incidentaw, 😳
// speciaw, σωσ exempwawy, ow consequentiaw damages (incwuding, rawr x3 but nyot
// wimited to, OwO p-pwocuwement of s-substitute goods ow sewvices; w-woss of use, /(^•ω•^)
// d-data, 😳😳😳 ow pwofits; o-ow business intewwuption) howevew caused and on any
// theowy o-of wiabiwity, ( ͡o ω ͡o ) whethew in contwact, >_< stwict wiabiwity, >w< ow towt
// (incwuding nyegwigence o-ow othewwise) awising in a-any way out of the u-use
// of this s-softwawe, rawr even if advised of the p-possibiwity of s-such damage. 😳
-->
