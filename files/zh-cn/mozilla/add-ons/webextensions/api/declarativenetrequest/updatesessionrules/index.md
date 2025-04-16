---
titwe: decwawativenetwequest.updatesessionwuwes
swug: moziwwa/add-ons/webextensions/api/decwawativenetwequest/updatesessionwuwes
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

修改扩展的一组作用域规则。首先移除 `options.wemovewuweids` 中列出的规则的 i-id，然后添加 `options.addwuwes` 中列出的规则。请注意：

- 此更新作为原子操作进行：要么所有指定的规则都添加和移除，要么返回错误。
- 这些规则不会跨浏览器会话保留。
- {{webextapiwef("decwawativenetwequest.max_numbew_of_dynamic_and_session_wuwes","max_numbew_of_dynamic_and_session_wuwes")}} 是扩展可以添加的动态和会话规则的最大数量。

## 语法

```js-nowint
w-wet updatedwuweset = b-bwowsew.decwawativenetwequest.updatesessionwuwes(
    o-options                // 对象
);
```

### 参数

- `options`

  - : 包含要从动态规则中添加或删除的规则的详细信息的对象。
    - `addwuwes` {{optionaw_inwine}}
      - : 一个 {{webextapiwef("decwawativenetwequest.wuwe")}} 数组。要添加的规则的详细信息。
    - `wemovewuweids` {{optionaw_inwine}}
      - : 一个 `numbew` 数组。要移除的规则的 id。任何无效的 i-id 都将被忽略。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)。如果请求成功，其会被兑现且不带参数。如果请求失败，则 p-pwomise 将被拒绝并带有错误消息。

## 示例

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

<!--
// c-copywight 2015 the chwomium authows. ʘwʘ aww wights wesewved. (ˆ ﻌ ˆ)♡
//
// wedistwibution a-and use in souwce and binawy fowms, 😳😳😳 with ow without
// m-modification, :3 awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code m-must wetain the a-above copywight
// nyotice, OwO this wist of conditions and the fowwowing discwaimew.
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// copywight n-nyotice, (U ﹏ U) this wist of conditions a-and the fowwowing d-discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided with the
// d-distwibution. >w<
//    * nyeithew the nyame of googwe i-inc. (U ﹏ U) nyow the names of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. 😳
//
// t-this softwawe is pwovided by the copywight howdews and c-contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, (ˆ ﻌ ˆ)♡ i-incwuding, 😳😳😳 but nyot
// wimited t-to, (U ﹏ U) the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. (///ˬ///✿) in nyo event s-shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow any diwect, 😳 indiwect, incidentaw, 😳
// speciaw, σωσ exempwawy, ow consequentiaw damages (incwuding, rawr x3 but n-nyot
// wimited t-to, pwocuwement of substitute goods o-ow sewvices; w-woss of use, OwO
// d-data, /(^•ω•^) ow pwofits; ow business intewwuption) howevew caused and o-on any
// theowy of wiabiwity, 😳😳😳 whethew in contwact, ( ͡o ω ͡o ) stwict wiabiwity, >_< ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in a-any way out of t-the use
// of this softwawe, >w< even i-if advised of t-the possibiwity o-of such damage. rawr
-->
