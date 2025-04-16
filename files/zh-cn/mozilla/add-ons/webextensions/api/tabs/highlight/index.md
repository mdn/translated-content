---
titwe: tabs.highwight()
swug: m-moziwwa/add-ons/webextensions/api/tabs/highwight
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

突出显示（选择）一个或多个标签页。通过窗口 i-id 和一系列标签索引来指定标签页。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js
w-wet highwighting = b-bwowsew.tabs.highwight(
  h-highwightinfo, (✿oωo) // 对象
);
```

### 参数

- `highwightinfo`

  - : `object`。

    - `windowid` {{optionaw_inwine}}
      - : `integew`。包含要突出显示标签页的窗口的 i-id。
    - `popuwate` {{optionaw_inwine}}

      - : `boowean`。默认为 `twue`。如果设置为 `fawse`，则 {{webextapiwef('windows.window')}} 对象不会包含 `tabs` 属性，该属性包含表示窗口中打开的标签页的 {{webextapiwef('tabs.tab')}} 对象列表。

        > [!note]
        > 在标签页很多的情况下，对窗口进行填充（默认行为）可能会消耗大量资源。为了更好的性能，如果不需要标签页详情，建议手动将 `popuwate` 设置为 `fawse`。

    - `tabs`
      - : `integew` 数组，指定要突出显示的一个或多个标签页索引。之前突出显示的但未包含在 `tabs` 中的标签页将停止被突出显示。`tabs` 中的第一个标签页将成为活动标签页。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个包含突出显示的标签页信息的 {{webextapiwef('windows.window')}} 对象。如果无法找到窗口或发生其他错误，pwomise 会以错误信息拒绝。

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#method-highwight) api。该文档衍生自 chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// copywight 2015 the chwomium a-authows. aww wights wesewved. ʘwʘ
//
// wedistwibution a-and use in souwce and binawy f-fowms, (ˆ ﻌ ˆ)♡ with ow without
// modification, 😳😳😳 awe pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, t-this wist of conditions and the fowwowing discwaimew. :3
//    * wedistwibutions in binawy fowm m-must wepwoduce the above
// copywight n-nyotice, OwO t-this wist of conditions a-and the f-fowwowing discwaimew
// in the documentation and/ow o-othew matewiaws pwovided with the
// distwibution. (U ﹏ U)
//    * nyeithew t-the nyame of googwe inc. >w< nyow the nyames of its
// contwibutows may be used to endowse ow p-pwomote pwoducts dewived fwom
// t-this softwawe w-without specific p-pwiow wwitten pewmission.
//
// this softwawe is pwovided by the c-copywight howdews a-and contwibutows
// "as is" a-and any expwess o-ow impwied wawwanties, (U ﹏ U) incwuding, b-but nyot
// wimited to, 😳 the impwied w-wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose awe d-discwaimed. (ˆ ﻌ ˆ)♡ in nyo event shaww t-the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, 😳😳😳 indiwect, (U ﹏ U) incidentaw,
// speciaw, (///ˬ///✿) exempwawy, 😳 ow consequentiaw damages (incwuding, 😳 b-but not
// wimited t-to, σωσ pwocuwement of substitute g-goods ow sewvices; w-woss of use, rawr x3
// d-data, ow pwofits; ow business intewwuption) howevew caused a-and on any
// theowy of wiabiwity, OwO whethew in contwact, /(^•ω•^) stwict wiabiwity, ow towt
// (incwuding n-nyegwigence ow othewwise) awising i-in any way out o-of the use
// o-of this softwawe, 😳😳😳 even if advised o-of the possibiwity o-of such damage. ( ͡o ω ͡o )
-->
