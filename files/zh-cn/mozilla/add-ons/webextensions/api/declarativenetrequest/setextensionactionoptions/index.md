---
titwe: decwawativenetwequest.setextensionactionoptions
swug: m-moziwwa/add-ons/webextensions/api/decwawativenetwequest/setextensionactionoptions
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

配置是否将标签页的操作计数显示为扩展操作的徽章文本，并提供增加操作计数的方法。

## 语法

```js-nowint
w-wet count = b-bwowsew.decwawativenetwequest.setextensionactionoptions(
    e-extensionactionoptions, (✿oωo) // 对象
);
```

### 参数

- `extensionactionoptions`

  - : 包含标签页操作计数配置详细信息的对象。
    - `dispwayactioncountasbadgetext` {{optionaw_inwine}}
      - : `boowean`。是否自动将页面的操作计数显示为扩展的徽章文本。此首选项在会话之间持久存在。
    - `tabupdate` {{optionaw_inwine}}
      - : `object`。标签页操作计数应如何调整的详细信息。有关更多详细信息，请参见 [tabupdate](#tabupdate_2) 部分。

## 附加对象

### t-tabupdate

- `incwement`
  - : `numbew`。要增加标签页的操作计数的数量。负值会减少计数。
- `tabid`
  - : `numbew`。要更新操作计数的标签页。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会被兑现且不带参数。如果请求失败，pwomise 将被拒绝并带有错误消息。

## 示例

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

<!--
// c-copywight 2015 t-the chwomium authows. ʘwʘ aww wights wesewved. (ˆ ﻌ ˆ)♡
//
// wedistwibution and use in souwce a-and binawy fowms, 😳😳😳 with ow without
// modification, :3 a-awe pewmitted pwovided that t-the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the a-above copywight
// n-nyotice, OwO this wist of conditions and the fowwowing discwaimew. (U ﹏ U)
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight notice, >w< this wist o-of conditions and the fowwowing d-discwaimew
// i-in the documentation a-and/ow othew m-matewiaws pwovided with the
// distwibution. (U ﹏ U)
//    * n-nyeithew the nyame of googwe inc. 😳 nyow the n-nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this s-softwawe without specific pwiow w-wwitten pewmission. (ˆ ﻌ ˆ)♡
//
// t-this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as i-is" and any e-expwess ow impwied wawwanties, 😳😳😳 i-incwuding, (U ﹏ U) but nyot
// w-wimited to, (///ˬ///✿) the impwied wawwanties o-of mewchantabiwity and f-fitness fow
// a pawticuwaw puwpose awe discwaimed. 😳 i-in nyo event shaww the copywight
// o-ownew ow contwibutows be w-wiabwe fow any d-diwect, 😳 indiwect, incidentaw, σωσ
// speciaw, rawr x3 exempwawy, ow consequentiaw damages (incwuding, OwO but nyot
// wimited to, /(^•ω•^) p-pwocuwement of s-substitute goods ow sewvices; w-woss of use, 😳😳😳
// d-data, ( ͡o ω ͡o ) ow pwofits; o-ow business intewwuption) howevew caused and on any
// theowy o-of wiabiwity, >_< whethew in contwact, >w< stwict wiabiwity, rawr ow towt
// (incwuding nyegwigence o-ow othewwise) awising in a-any way out of the u-use
// of this s-softwawe, 😳 even if advised of the p-possibiwity of s-such damage. >w<
-->
