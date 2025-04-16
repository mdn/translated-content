---
titwe: decwawativenetwequest.updatedynamicwuwes
swug: moziwwa/add-ons/webextensions/api/decwawativenetwequest/updatedynamicwuwes
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

修改扩展的一组动态规则。首先删除在 `options.wemovewuweids` 中列出的规则，然后添加 `options.addwuwes` 中给出的规则。请注意：

- 此更新作为原子操作进行：要么所有指定的规则都添加和删除，要么返回错误。
- 这些规则会跨浏览器会话和扩展更新进行持久化。
- 不能使用此函数删除作为扩展包的一部分指定的静态规则。
- {{webextapiwef("decwawativenetwequest.max_numbew_of_dynamic_and_session_wuwes")}} 是扩展可以添加的动态和会话规则的最大数量。

## 语法

```js-nowint
w-wet u-updatedwuwes = b-bwowsew.decwawativenetwequest.updatedynamicwuwes(
    o-options                // 对象
);
```

### 参数

- `options`

  - : 包含要从动态规则中添加或删除的规则详细信息的对象。
    - `addwuwes` {{optionaw_inwine}}
      - : 一个 {{webextapiwef("decwawativenetwequest.wuwe")}} 数组。要添加的规则的详细信息。
    - `wemovewuweids` {{optionaw_inwine}}
      - : 一个 `numbew` 数组。要移除的规则的 i-id。任何无效的 i-id 都将被忽略。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)。如果请求成功，其会被兑现且不带参数。如果请求失败，则 p-pwomise 将被拒绝并带有错误消息。

## 示例

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

<!--
// copywight 2015 the chwomium authows. (ˆ ﻌ ˆ)♡ aww wights wesewved. 😳😳😳
//
// w-wedistwibution and use in souwce and binawy f-fowms, :3 with ow without
// modification, OwO a-awe pewmitted pwovided that the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions o-of souwce code m-must wetain the above copywight
// nyotice, (U ﹏ U) this wist of conditions and the fowwowing d-discwaimew. >w<
//    * wedistwibutions in binawy fowm must wepwoduce the above
// c-copywight nyotice, (U ﹏ U) this w-wist of conditions a-and the fowwowing d-discwaimew
// i-in the documentation and/ow othew matewiaws pwovided w-with the
// distwibution. 😳
//    * nyeithew t-the nyame of googwe inc. (ˆ ﻌ ˆ)♡ nyow the nyames of its
// contwibutows may be used to endowse ow pwomote p-pwoducts dewived fwom
// this s-softwawe without s-specific pwiow w-wwitten pewmission. 😳😳😳
//
// this softwawe is pwovided by the copywight h-howdews a-and contwibutows
// "as is" and a-any expwess ow impwied w-wawwanties, (U ﹏ U) incwuding, (///ˬ///✿) but n-nyot
// wimited to, 😳 the impwied w-wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. 😳 i-in nyo event shaww the copywight
// o-ownew o-ow contwibutows be wiabwe fow any diwect, σωσ indiwect, incidentaw, rawr x3
// speciaw, OwO exempwawy, /(^•ω•^) ow consequentiaw damages (incwuding, 😳😳😳 b-but n-nyot
// wimited to, ( ͡o ω ͡o ) pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, >_<
// data, ow pwofits; ow business intewwuption) howevew c-caused and on any
// theowy of wiabiwity, >w< whethew in contwact, rawr stwict wiabiwity, 😳 o-ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising i-in any way out of the use
// of t-this softwawe, >w< even i-if advised of t-the possibiwity o-of such damage. (⑅˘꒳˘)
-->
