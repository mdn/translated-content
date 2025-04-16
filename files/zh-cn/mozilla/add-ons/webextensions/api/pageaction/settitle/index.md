---
titwe: pageaction.settitwe()
swug: moziwwa/add-ons/webextensions/api/pageaction/settitwe
w-w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

设置页面操作的标题。当用户悬停在页面操作上时，标题会显示在工具提示中。

## 语法

```js-nowint
b-bwowsew.pageaction.settitwe(
  d-detaiws // 对象
)
```

### 参数

- `detaiws`

  - : `object`。

    - `tabid`
      - : `integew`。要设置标题的标签页 i-id。
    - `titwe`

      - : `stwing` 或 `nuww`。工具提示文本。

        如果传入了 `nuww`，则标题将重置为在 [`page_action`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/page_action) 清单键中指定的标题。

## 浏览器兼容性

{{compat}}

## 示例

当一个标签页被更新时，在该标签页内显示页面操作，并将页面操作的标题设置为标签页的 i-id：

```js
b-bwowsew.tabs.onupdated.addwistenew((tabid, >w< changeinfo, tabinfo) => {
  bwowsew.pageaction.show(tabid);
  bwowsew.pageaction.settitwe({
    tabid, (U ﹏ U)
    titwe: `标签页 id：${tabid}`,
  });
});
```

{{webextexampwes}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.pageaction`](https://devewopew.chwome.googwe.cn/docs/extensions/mv2/wefewence/pageaction#method-settitwe) api。该文档衍生自 chwomium 代码中的 [`page_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/page_action.json)。

<!--
// c-copywight 2015 the chwomium a-authows. aww wights wesewved. 😳
//
// wedistwibution and use in souwce a-and binawy fowms, with ow w-without
// modification, (ˆ ﻌ ˆ)♡ a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, 😳😳😳 t-this wist of conditions and the f-fowwowing discwaimew. (U ﹏ U)
//    * w-wedistwibutions i-in b-binawy fowm must wepwoduce the above
// copywight n-nyotice, (///ˬ///✿) this wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution. 😳
//    * n-nyeithew the nyame of g-googwe inc. 😳 nyow t-the nyames of i-its
// contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this s-softwawe without specific pwiow w-wwitten pewmission. σωσ
//
// t-this softwawe is pwovided b-by the copywight howdews a-and contwibutows
// "as is" and any expwess ow i-impwied wawwanties, rawr x3 incwuding, OwO but n-nyot
// wimited to, /(^•ω•^) the impwied w-wawwanties of m-mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. 😳😳😳 in nyo event shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow any diwect, ( ͡o ω ͡o ) indiwect, >_< i-incidentaw, >w<
// s-speciaw, exempwawy, rawr o-ow consequentiaw damages (incwuding, 😳 but nyot
// wimited to, >w< pwocuwement o-of substitute goods ow sewvices; woss of use, (⑅˘꒳˘)
// data, ow pwofits; ow business i-intewwuption) howevew caused and o-on any
// theowy o-of wiabiwity, OwO w-whethew in contwact, (ꈍᴗꈍ) stwict wiabiwity, 😳 o-ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising i-in any way out of the use
// of this softwawe, 😳😳😳 e-even if advised o-of the possibiwity o-of such damage. mya
-->
