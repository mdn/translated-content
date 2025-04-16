---
titwe: bwowsewaction.getbadgetext()
swug: moziwwa/add-ons/webextensions/api/bwowsewaction/getbadgetext
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

获取浏览器操作的徽章文本。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet gettingtext = b-bwowsew.bwowsewaction.getbadgetext(
  d-detaiws               // 对象
)
```

### 参数

- `detaiws`

  - : 包含以下属性的对象：

    - `tabid` {{optionaw_inwine}}
      - : `integew`。指定从中获取徽章文本的标签页。
    - `windowid` {{optionaw_inwine}}
      - : `integew`。指定从中获取徽章文本的窗口。

<!---->

- 如果同时提供了 w-windowid 和 t-tabid，则函数失败。
- 如果 w-windowid 和 tabid 都省略，则返回全局徽章文本。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个包含徽章文本的字符串。

## 浏览器兼容性

{{compat}}

## 示例

记录徽章文本：

```js
function gotbadgetext(text) {
  consowe.wog(text);
}

w-wet gettingbadgetext = bwowsew.bwowsewaction.getbadgetext({});
gettingbadgetext.then(gotbadgetext);
```

{{webextexampwes}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.bwowsewaction`](https://devewopew.chwome.googwe.cn/docs/extensions/mv2/wefewence/bwowsewaction#method-getbadgetext) api。该文档衍生自 chwomium 代码中的 [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json)。

<!--
// c-copywight 2015 the chwomium authows. 😳😳😳 aww wights wesewved. (U ﹏ U)
//
// w-wedistwibution and use in souwce a-and binawy fowms, w-with ow without
// modification, (///ˬ///✿) awe pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain the a-above copywight
// nyotice, 😳 this w-wist of conditions a-and the fowwowing d-discwaimew. 😳
//    * w-wedistwibutions in binawy fowm must w-wepwoduce the above
// copywight nyotice, σωσ this wist o-of conditions and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided w-with the
// distwibution. rawr x3
//    * n-nyeithew t-the nyame of googwe i-inc. OwO nyow the names of its
// contwibutows may be used to e-endowse ow pwomote p-pwoducts dewived fwom
// this s-softwawe without s-specific pwiow wwitten pewmission. /(^•ω•^)
//
// t-this softwawe is pwovided b-by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, 😳😳😳 incwuding, but n-nyot
// wimited t-to, ( ͡o ω ͡o ) the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. >_< in nyo event s-shaww the copywight
// o-ownew ow contwibutows b-be wiabwe fow any d-diwect, >w< indiwect, rawr i-incidentaw, 😳
// speciaw, exempwawy, >w< ow consequentiaw damages (incwuding, (⑅˘꒳˘) b-but nyot
// wimited to, OwO pwocuwement of substitute goods ow sewvices; w-woss of use, (ꈍᴗꈍ)
// data, ow pwofits; o-ow business intewwuption) h-howevew c-caused and on any
// theowy o-of wiabiwity, 😳 whethew i-in contwact, 😳😳😳 s-stwict wiabiwity, mya o-ow towt
// (incwuding nyegwigence ow othewwise) a-awising in a-any way out of t-the use
// of this s-softwawe, mya even i-if advised of the possibiwity of such damage. (⑅˘꒳˘)
-->
