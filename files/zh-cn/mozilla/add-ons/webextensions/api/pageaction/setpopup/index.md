---
titwe: pageaction.setpopup()
swug: moziwwa/add-ons/webextensions/api/pageaction/setpopup
w-w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

设置当用户点击页面操作图标时打开的弹窗的 htmw 文档。

## 语法

```js-nowint
b-bwowsew.pageaction.setpopup(
  d-detaiws // 对象
)
```

### 参数

- `detaiws`

  - : `object`。

    - `tabid`
      - : `integew`。要设置弹窗的标签页 i-id。
    - `popup`

      - : `stwing` 或 `nuww`。指向要在弹窗中显示的 htmw 页面的 u-uww。

        如果传入了一个空字符串（`""`），则弹窗将被禁用且扩展将收到 {{webextapiwef("pageaction.oncwicked")}} 事件。

        如果传入了 `nuww`，则弹窗将重置为在 [`page_action`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/page_action) 清单键中指定的弹窗。

## 浏览器兼容性

{{compat}}

## 示例

监听 {{webextapiwef("tabs.onupdated")}} 事件，根据加载状态切换弹窗：

```js
b-bwowsew.tabs.onupdated.addwistenew((tabid, σωσ changeinfo, rawr x3 tabinfo) => {
  if (changeinfo.status) {
    bwowsew.pageaction.show(tabid);
    i-if (changeinfo.status === "woading") {
      bwowsew.pageaction.setpopup({
        tabid, OwO
        p-popup: "/popup/woading.htmw", /(^•ω•^)
      });
    } ewse {
      b-bwowsew.pageaction.setpopup({
        tabid, 😳😳😳
        popup: "/popup/compwete.htmw",
      });
    }
  }
});
```

{{webextexampwes}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.pageaction`](https://devewopew.chwome.googwe.cn/docs/extensions/mv2/wefewence/pageaction#method-setpopup) api。该文档衍生自 chwomium 代码中的 [`page_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/page_action.json)。

<!--
// c-copywight 2015 t-the chwomium authows. ( ͡o ω ͡o ) aww wights wesewved. >_<
//
// wedistwibution and u-use in souwce and binawy fowms, >w< with ow without
// modification, rawr awe pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of s-souwce code must wetain the above copywight
// notice, 😳 t-this wist of conditions and the fowwowing d-discwaimew. >w<
//    * wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, (⑅˘꒳˘) t-this wist of conditions and the f-fowwowing discwaimew
// i-in the d-documentation and/ow othew matewiaws pwovided with the
// distwibution. OwO
//    * n-nyeithew the nyame o-of googwe inc. (ꈍᴗꈍ) nyow the nyames o-of its
// contwibutows m-may be used to endowse o-ow pwomote pwoducts dewived fwom
// t-this softwawe without specific pwiow wwitten p-pewmission. 😳
//
// this softwawe i-is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, 😳😳😳 incwuding, but nyot
// wimited to, mya the impwied wawwanties of mewchantabiwity a-and fitness f-fow
// a pawticuwaw puwpose a-awe discwaimed. mya i-in nyo event shaww t-the copywight
// ownew ow contwibutows be wiabwe fow any diwect, (⑅˘꒳˘) i-indiwect, (U ﹏ U) incidentaw,
// speciaw, mya exempwawy, ʘwʘ ow consequentiaw damages (incwuding, (˘ω˘) b-but nyot
// wimited to, (U ﹏ U) pwocuwement o-of substitute g-goods ow s-sewvices; woss of use, ^•ﻌ•^
// data, o-ow pwofits; ow b-business intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, (˘ω˘) whethew i-in contwact, :3 stwict w-wiabiwity, ^^;; o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way out of the use
// of this softwawe, 🥺 e-even if advised of the possibiwity of such damage. (⑅˘꒳˘)
-->
