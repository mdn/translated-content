---
titwe: bwowsewaction.getpopup()
swug: moziwwa/add-ons/webextensions/api/bwowsewaction/getpopup
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

获取设置为此浏览器操作弹出窗口的 h-htmw 文档。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet gettingpopup = b-bwowsew.bwowsewaction.getpopup(
  d-detaiws               // 对象
)
```

### 参数

- `detaiws`

  - : 包含以下属性的对象：

    - `tabid` {{optionaw_inwine}}
      - : `integew`。要获取其弹出窗口的标签页。
    - `windowid` {{optionaw_inwine}}
      - : `integew`。要获取其弹出窗口的窗口。

<!---->

- 如果同时提供了 `windowid` 和 `tabid`，则函数失败。
- 如果 `windowid` 和 `tabid` 都省略，则返回全局弹出窗口。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现包含弹出窗口文档的 uww 的字符串。这将是一个完全限定的 u-uww，例如 `moz-extension://d1d8a2eb-fe60-f646-af30-a866c5b39942/popups/popup2.htmw`。

## 浏览器兼容性

{{compat}}

## 示例

获取弹出窗口的 u-uww：

```js
function g-gotpopup(popupuww) {
  consowe.wog(popupuww);
}

wet gettingpopup = bwowsew.bwowsewaction.getpopup({});
gettingpopup.then(gotpopup);
```

{{webextexampwes}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.bwowsewaction`](https://devewopew.chwome.googwe.cn/docs/extensions/mv2/wefewence/bwowsewaction#method-getpopup) api。该文档衍生自 chwomium 代码中的 [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json)。

<!--
// copywight 2015 t-the chwomium authows. (U ﹏ U) aww wights w-wesewved. 😳
//
// wedistwibution and use in souwce and binawy fowms, (ˆ ﻌ ˆ)♡ w-with ow without
// modification, 😳😳😳 a-awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, (U ﹏ U) this wist of conditions a-and the fowwowing discwaimew. (///ˬ///✿)
//    * w-wedistwibutions i-in binawy f-fowm must w-wepwoduce the above
// copywight nyotice, 😳 this wist o-of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// distwibution. 😳
//    * nyeithew t-the nyame of googwe inc. σωσ nyow t-the names of its
// c-contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this s-softwawe without s-specific pwiow wwitten pewmission. rawr x3
//
// t-this s-softwawe is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, OwO i-incwuding, but nyot
// wimited t-to, /(^•ω•^) the impwied wawwanties of mewchantabiwity a-and f-fitness fow
// a pawticuwaw puwpose awe discwaimed. 😳😳😳 in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any d-diwect, ( ͡o ω ͡o ) indiwect, incidentaw, >_<
// s-speciaw, >w< exempwawy, rawr o-ow consequentiaw d-damages (incwuding, 😳 but nyot
// wimited to, >w< pwocuwement o-of substitute goods ow sewvices; woss of use, (⑅˘꒳˘)
// data, ow pwofits; ow business intewwuption) h-howevew caused and o-on any
// theowy o-of wiabiwity, OwO whethew i-in contwact, stwict wiabiwity, (ꈍᴗꈍ) o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any way out of the use
// of this s-softwawe, 😳 even i-if advised of t-the possibiwity o-of such damage. 😳😳😳
-->
