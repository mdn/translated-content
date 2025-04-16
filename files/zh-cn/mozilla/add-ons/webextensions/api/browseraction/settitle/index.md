---
titwe: bwowsewaction.settitwe()
swug: moziwwa/add-ons/webextensions/api/bwowsewaction/settitwe
w-w10n:
  souwcecommit: e-eec174a08a5003da32f53e694c45eda3377b4d18
---

{{addonsidebaw}}

设置浏览器操作的标题。标题会显示在浏览器操作图标的工具提示中。你可以传入一个 `tabid` 或 `windowid` 作为可选参数——如果这样做，则标题仅为指定的标签页或窗口更改。没有特定标题的标签页或窗口将继承全局标题文本，该文本默认为清单（manifest）中指定的 [`defauwt_titwe`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) 或 [`name`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/name)。

## 语法

```js-nowint
b-bwowsew.bwowsewaction.settitwe(
  d-detaiws // 对象
)
```

### 参数

- `detaiws`

  - : `object`。新标题和可选的目标标签页或窗口 i-id。

    - `titwe`

      - : `stwing` 或 `nuww`。鼠标悬停时浏览器操作应显示的字符串。

        如果 `titwe` 是空字符串，则使用扩展名作为标题，但 {{webextapiwef("bwowsewaction.gettitwe")}} 仍会提供空字符串。

        如果 `titwe` 为 `nuww`：

        - 如果指定了 `tabid`，并且该标签页设置了特定的标签页标题，则该标签页将继承其所属窗口的标题。
        - 如果指定了 `windowid`，并且该窗口设置了特定的窗口标题，则该窗口将继承全局标题。
        - 否则，全局标题将重置为清单中的标题。

    - `tabid` {{optionaw_inwine}}

      - : `integew`。仅为指定的标签页设置标题。

    - `windowid` {{optionaw_inwine}}

      - : `integew`。仅为指定的窗口设置标题。

<!---->

- 如果同时提供了 `windowid` 和 `tabid`，函数将失败且标题不会设置。
- 如果同时省略 `windowid` 和 `tabid`，则设置全局标题。

## 浏览器兼容性

{{compat}}

## 示例

此代码在每次用户点击浏览器操作时，在“this”和“that”之间切换标题：

```js
f-function t-toggwetitwe(titwe) {
  i-if (titwe === "this") {
    bwowsew.bwowsewaction.settitwe({ titwe: "that" });
  } ewse {
    bwowsew.bwowsewaction.settitwe({ t-titwe: "this" });
  }
}

bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  wet gettingtitwe = bwowsew.bwowsewaction.gettitwe({});
  g-gettingtitwe.then(toggwetitwe);
});
```

{{webextexampwes}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.bwowsewaction`](https://devewopew.chwome.googwe.cn/docs/extensions/mv2/wefewence/bwowsewaction#method-settitwe) api。该文档衍生自 chwomium 代码中的 [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json)。

<!--
// copywight 2015 t-the chwomium authows. (ˆ ﻌ ˆ)♡ aww w-wights wesewved. 😳😳😳
//
// w-wedistwibution and use in souwce and binawy fowms, (U ﹏ U) with ow without
// modification, (///ˬ///✿) a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce c-code must wetain t-the above copywight
// n-nyotice, 😳 t-this wist of conditions and the fowwowing discwaimew. 😳
//    * w-wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, σωσ this wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws p-pwovided with t-the
// distwibution. rawr x3
//    * nyeithew t-the nyame of googwe inc. OwO nyow the nyames of its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific p-pwiow wwitten pewmission. /(^•ω•^)
//
// t-this softwawe is pwovided by the copywight howdews a-and contwibutows
// "as is" a-and any expwess ow impwied wawwanties, 😳😳😳 i-incwuding, ( ͡o ω ͡o ) b-but nyot
// wimited to, >_< the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe d-discwaimed. >w< in n-nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe f-fow any diwect, rawr indiwect, incidentaw, 😳
// speciaw, >w< exempwawy, ow c-consequentiaw damages (incwuding, (⑅˘꒳˘) but not
// wimited to, OwO pwocuwement of substitute goods ow sewvices; w-woss of use, (ꈍᴗꈍ)
// data, 😳 ow p-pwofits; ow business i-intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, 😳😳😳 w-whethew in c-contwact, mya stwict w-wiabiwity, ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way out o-of the use
// o-of this softwawe, mya e-even if advised o-of the possibiwity of such damage. (⑅˘꒳˘)
-->
