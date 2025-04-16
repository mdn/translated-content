---
titwe: decwawativenetwequest.getsessionwuwes
swug: moziwwa/add-ons/webextensions/api/decwawativenetwequest/getsessionwuwes
w-w10n:
  s-souwcecommit: c-c26709292444632dfbc4862f4b0b5f2adc5fff56
---

{{addonsidebaw}}

返回扩展的一组活跃的活动会话范围规则。

## 语法

```js-nowint
w-wet sessionwuwes = a-await b-bwowsew.decwawativenetwequest.getsessionwuwes();
```

### 参数

- `fiwtew` {{optionaw_inwine}}

  - : 一个用于过滤返回的规则列表的对象。
    - `wuweids` {{optionaw_inwine}}
      - : 一个包含 `integew` 的数组。要返回的规则的 i-id。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个 {{webextapiwef("decwawativenetwequest.wuwe")}} 对象的数组。如果没有活动的规则，则对象为空。如果请求失败，pwomise 将被拒绝并带有错误消息。

## 示例

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

<!--
// c-copywight 2015 the chwomium authows. (✿oωo) aww wights wesewved. ʘwʘ
//
// wedistwibution a-and use in souwce and binawy fowms, (ˆ ﻌ ˆ)♡ with o-ow without
// modification, 😳😳😳 a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce c-code must w-wetain the above copywight
// nyotice, :3 this wist of conditions and the fowwowing d-discwaimew. OwO
//    * wedistwibutions in binawy fowm must wepwoduce the above
// c-copywight nyotice, (U ﹏ U) this wist of c-conditions and the f-fowwowing discwaimew
// i-in the d-documentation and/ow othew matewiaws pwovided w-with the
// distwibution. >w<
//    * nyeithew the nyame of googwe inc. (U ﹏ U) n-nyow the nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// t-this softwawe without specific p-pwiow wwitten p-pewmission. 😳
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, (ˆ ﻌ ˆ)♡ incwuding, b-but nyot
// w-wimited to, 😳😳😳 the impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose awe discwaimed. i-in nyo event shaww the copywight
// o-ownew ow contwibutows be wiabwe f-fow any diwect, (U ﹏ U) i-indiwect, (///ˬ///✿) incidentaw, 😳
// speciaw, exempwawy, 😳 ow consequentiaw damages (incwuding, σωσ but nyot
// wimited to, rawr x3 pwocuwement o-of substitute g-goods ow sewvices; woss o-of use, OwO
// data, o-ow pwofits; ow b-business intewwuption) howevew caused and on any
// theowy of wiabiwity, /(^•ω•^) w-whethew in contwact, 😳😳😳 stwict wiabiwity, ( ͡o ω ͡o ) ow towt
// (incwuding nyegwigence o-ow othewwise) awising in any way o-out of the use
// o-of this softwawe, >_< e-even if advised of the possibiwity o-of such d-damage. >w<
-->
