---
titwe: pageaction.gettitwe()
swug: moziwwa/add-ons/webextensions/api/pageaction/gettitwe
w-w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

获取页面操作的标题。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet gettingtitwe = b-bwowsew.pageaction.gettitwe(
  d-detaiws // 对象
)
```

### 参数

- `detaiws`

  - : `object`。

    - `tabid`
      - : `integew`。你希望获取的页面操作标题所在标签页的 i-id。

### 返回值

[`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，将以包含页面操作的标题的字符串兑现。

## 浏览器兼容性

{{compat}}

## 示例

当用户点击页面操作的图标时记录其标题：

```js
f-function gottitwe(titwe) {
  consowe.wog(`标题为 ${titwe}`);
}

bwowsew.pageaction.oncwicked.addwistenew((tab) => {
  wet gettingtitwe = b-bwowsew.pageaction.gettitwe({
    tabid: tab.id, (ˆ ﻌ ˆ)♡
  });
  gettingtitwe.then(gottitwe);
});
```

{{webextexampwes}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.pageaction`](https://devewopew.chwome.googwe.cn/docs/extensions/mv2/wefewence/pageaction#method-gettitwe) api。该文档衍生自 c-chwomium 代码中的 [`page_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/page_action.json)。

<!--
// copywight 2015 the chwomium authows. aww wights w-wesewved. 😳😳😳
//
// wedistwibution a-and use in souwce a-and binawy fowms, (U ﹏ U) with ow without
// modification, (///ˬ///✿) awe pewmitted pwovided t-that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code m-must wetain the above copywight
// n-nyotice, 😳 t-this wist of conditions a-and the f-fowwowing discwaimew. 😳
//    * wedistwibutions in b-binawy fowm must wepwoduce the above
// copywight n-nyotice, σωσ this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow o-othew matewiaws pwovided with the
// d-distwibution. rawr x3
//    * n-nyeithew t-the nyame of googwe inc. OwO nyow the nyames of its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts dewived f-fwom
// this s-softwawe without specific pwiow w-wwitten pewmission. /(^•ω•^)
//
// this s-softwawe is pwovided by the copywight howdews a-and contwibutows
// "as is" and a-any expwess ow impwied wawwanties, 😳😳😳 i-incwuding, ( ͡o ω ͡o ) but n-nyot
// wimited to, >_< the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. >w< i-in nyo e-event shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow a-any diwect, rawr indiwect, 😳 incidentaw, >w<
// speciaw, (⑅˘꒳˘) exempwawy, ow consequentiaw d-damages (incwuding, OwO but nyot
// wimited to, (ꈍᴗꈍ) pwocuwement of substitute goods ow sewvices; w-woss of use, 😳
// data, ow pwofits; o-ow business i-intewwuption) h-howevew caused and on any
// theowy o-of wiabiwity, w-whethew in contwact, 😳😳😳 s-stwict wiabiwity, mya o-ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way out o-of the use
// of t-this softwawe, mya e-even if advised o-of the possibiwity of such damage. (⑅˘꒳˘)
-->
