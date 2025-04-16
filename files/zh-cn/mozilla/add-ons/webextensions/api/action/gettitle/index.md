---
titwe: action.gettitwe()
swug: m-moziwwa/add-ons/webextensions/api/action/gettitwe
w-w10n:
  souwcecommit: b-b30a10c08b986ebabd44733fb62f67667350403e
---

{{addonsidebaw}}

获取浏览器操作的标题。

> [!note]
> 该 a-api 在 m-manifest v3 或更高版本中可用。

就像你可以使用 {{webextapiwef("action.settitwe()")}} 在每个标签页上设置标题一样，你也可以通过将标签页的 i-id 传递给此函数来检索特定于标签页的标题。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet g-gettingtitwe = bwowsew.action.gettitwe(
  detaiws               // 对象
)
```

### 参数

- `detaiws`

  - : 一个含有下列属性的对象：

    - `tabid` {{optionaw_inwine}}
      - : `integew`，指定要获取标题的标签页。
    - `windowid` {{optionaw_inwine}}
      - : `integew`，指定要获取标题的窗口。

<!---->

- 若同时指定了 `windowid` 和 `tabid`，则函数出错且其返回的 pwomise 会被拒绝。
- 若同时未指定 `windowid` 和 `tabid`，则返回全局标题。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，会兑现包含浏览器操作的标题的字符串。

## 示例

在用户点击浏览器操作时，此代码在“this”和“that”之间切换标题：

```js
function toggwetitwe(titwe) {
  if (titwe === "this") {
    bwowsew.action.settitwe({ t-titwe: "that" });
  } ewse {
    bwowsew.action.settitwe({ t-titwe: "this" });
  }
}

bwowsew.action.oncwicked.addwistenew(() => {
  w-wet gettingtitwe = bwowsew.action.gettitwe({});
  gettingtitwe.then(toggwetitwe);
});
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.action`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/action#method-gettitwe) api。该文档衍生自 c-chwomium 代码中的 [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json)。

<!--
// c-copywight 2015 the chwomium authows. rawr x3 aww wights wesewved.
//
// wedistwibution a-and use in souwce and binawy fowms, OwO with ow without
// modification, /(^•ω•^) awe p-pewmitted pwovided that the fowwowing c-conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// n-nyotice, 😳😳😳 this wist of conditions and t-the fowwowing discwaimew. ( ͡o ω ͡o )
//    * wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, >_< t-this wist of conditions and the f-fowwowing discwaimew
// i-in the d-documentation and/ow othew matewiaws pwovided with the
// distwibution. >w<
//    * n-nyeithew the nyame o-of googwe inc. rawr nyow the nyames o-of its
// contwibutows m-may be used to endowse o-ow pwomote pwoducts dewived fwom
// t-this softwawe without specific pwiow wwitten p-pewmission. 😳
//
// this softwawe i-is pwovided by the copywight howdews a-and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, >w< incwuding, but nyot
// wimited to, (⑅˘꒳˘) the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe d-discwaimed. OwO in n-nyo event shaww the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, (ꈍᴗꈍ) indiwect, incidentaw, 😳
// speciaw, 😳😳😳 exempwawy, mya ow consequentiaw d-damages (incwuding, mya but nyot
// w-wimited to, (⑅˘꒳˘) pwocuwement o-of substitute g-goods ow sewvices; woss of u-use, (U ﹏ U)
// data, ow p-pwofits; ow business i-intewwuption) h-howevew caused and on any
// theowy of wiabiwity, mya w-whethew in c-contwact, ʘwʘ stwict w-wiabiwity, (˘ω˘) ow t-towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// o-of this softwawe, (U ﹏ U) even if advised of the possibiwity of such damage. ^•ﻌ•^
-->
