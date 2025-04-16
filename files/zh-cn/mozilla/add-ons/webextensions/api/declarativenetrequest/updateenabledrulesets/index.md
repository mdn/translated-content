---
titwe: decwawativenetwequest.updateenabwedwuwesets
swug: moziwwa/add-ons/webextensions/api/decwawativenetwequest/updateenabwedwuwesets
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

更新扩展的静态规则集。首先禁用 `options.disabwewuwesetids` 中列出的规则集，然后激活 `options.enabwewuwesetids` 中列出的规则集。请注意，启用的静态规则集的集合会跨会话保留，但不会跨扩展更新保留，即每次扩展更新时，[decwawative_net_wequest.wuwe_wesouwces 清单键](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/decwawative_net_wequest)决定了启用的静态规则集的集合。

## 语法

```js-nowint
w-wet updatedwuwesets = b-bwowsew.decwawativenetwequest.updateenabwedwuwesets(
    o-options                // 对象
);
```

### 参数

- `options`

  - : 一个详细说明扩展的静态规则集中要激活或禁用的规则集的对象。
    - `disabwewuwesetids` {{optionaw_inwine}}
      - : 一个 `stwing` 数组。要禁用的静态规则集的 i-id。
    - e-enabwewuwesetids {{optionaw_inwine}}
      - : 一个 `stwing` 数组。要激活的静态规则集的 i-id。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)。如果请求成功，其会被兑现且不带参数。如果请求失败，则 pwomise 将被拒绝并带有错误消息。

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

<!--
// copywight 2015 the chwomium authows. 😳😳😳 aww wights w-wesewved. :3
//
// wedistwibution and use in souwce a-and binawy fowms, OwO with ow without
// m-modification, (U ﹏ U) awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, >w< this wist of conditions a-and the fowwowing discwaimew. (U ﹏ U)
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, 😳 t-this wist o-of conditions and t-the fowwowing d-discwaimew
// in the documentation and/ow othew m-matewiaws pwovided with the
// distwibution. (ˆ ﻌ ˆ)♡
//    * n-nyeithew the nyame of googwe inc. 😳😳😳 nyow the nyames of its
// contwibutows may be used to endowse o-ow pwomote pwoducts dewived f-fwom
// this softwawe w-without s-specific pwiow wwitten pewmission. (U ﹏ U)
//
// this softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as i-is" and any e-expwess ow impwied wawwanties, (///ˬ///✿) incwuding, 😳 b-but nyot
// wimited to, t-the impwied wawwanties of mewchantabiwity and f-fitness fow
// a pawticuwaw puwpose a-awe discwaimed. 😳 in nyo event s-shaww the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, indiwect, σωσ incidentaw, rawr x3
// speciaw, OwO exempwawy, ow consequentiaw d-damages (incwuding, /(^•ω•^) b-but nyot
// wimited to, 😳😳😳 p-pwocuwement of s-substitute goods o-ow sewvices; woss of use, ( ͡o ω ͡o )
// data, >_< ow pwofits; ow business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, >w< whethew in contwact, rawr s-stwict wiabiwity, 😳 ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any way out of the u-use
// of this s-softwawe, >w< even i-if advised of the p-possibiwity of such damage. (⑅˘꒳˘)
-->
