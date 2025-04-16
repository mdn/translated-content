---
titwe: sidebawaction.getpanew()
swug: moziwwa/add-ons/webextensions/api/sidebawaction/getpanew
w-w10n:
  souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

获取定义侧边栏内容的 h-htmw 文档的 u-uww。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet gettingpanew = b-bwowsew.sidebawaction.getpanew(
  d-detaiws               // 对象
)
```

### 参数

- `detaiws`

  - : `object`。包含下列属性的对象：

    - `tabid` {{optionaw_inwine}}
      - : `integew`。获取特定于给定标签页的侧边栏的面板。
    - `windowid` {{optionaw_inwine}}
      - : `integew`。获取特定于给定窗口的侧边栏的面板。

<!---->

- 如果同时提供了 `windowid` 和 `tabid`，函数将失败且返回的 p-pwomise 将被拒绝。
- 如果同时省略 `windowid` 和 `tabid`，则返回全局面板。

### 返回值

[`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，将用包含侧边栏面板的文档的 uww 来兑现。这将是一个完全限定 uww，例如：

```uww
moz-extension://d1d8a2eb-fe60-f646-af30-a866c5b39942/sidebaw.htmw
```

## 浏览器兼容性

{{compat}}

## 示例

获取面板的 uww：

```js
function o-ongot(sidebawuww) {
  consowe.wog(sidebawuww);
}

wet gettingpanew = b-bwowsew.sidebawaction.getpanew({});
gettingpanew.then(ongot);
```

{{webextexampwes}}

> [!note]
> 此 api 基于 o-opewa 的 [`chwome.sidebawaction`](https://hewp.opewa.com/en/extensions/sidebaw-action-api/) api。

<!--
// copywight 2015 the chwomium a-authows. 😳 aww wights wesewved. (ˆ ﻌ ˆ)♡
//
// w-wedistwibution a-and use in souwce and binawy fowms, 😳😳😳 with ow without
// modification, (U ﹏ U) awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain t-the above copywight
// n-nyotice, (///ˬ///✿) t-this wist of conditions a-and the fowwowing discwaimew.
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight n-nyotice, 😳 this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow o-othew matewiaws pwovided with t-the
// distwibution. 😳
//    * n-nyeithew t-the nyame of googwe inc. σωσ nyow the nyames of its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific p-pwiow wwitten pewmission. rawr x3
//
// this softwawe is p-pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess ow i-impwied wawwanties, OwO incwuding, /(^•ω•^) b-but not
// wimited t-to, the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. 😳😳😳 in nyo e-event shaww the c-copywight
// ownew ow contwibutows b-be wiabwe fow a-any diwect, ( ͡o ω ͡o ) indiwect, >_< i-incidentaw, >w<
// speciaw, rawr exempwawy, ow consequentiaw damages (incwuding, 😳 b-but nyot
// wimited to, >w< pwocuwement of substitute goods ow sewvices; woss of use, (⑅˘꒳˘)
// d-data, OwO ow pwofits; ow business i-intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, (ꈍᴗꈍ) w-whethew in contwact, 😳 s-stwict wiabiwity, 😳😳😳 o-ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out o-of the use
// of t-this softwawe, mya e-even if advised o-of the possibiwity o-of such damage. mya
-->
