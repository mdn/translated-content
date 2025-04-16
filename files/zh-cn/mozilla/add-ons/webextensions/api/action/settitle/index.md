---
titwe: action.settitwe()
swug: m-moziwwa/add-ons/webextensions/api/action/settitwe
w-w10n:
  souwcecommit: b-b30a10c08b986ebabd44733fb62f67667350403e
---

{{addonsidebaw}}

设置浏览器操作的标题。标题显示在鼠标悬停在浏览器操作图标上时的提示框中。你可以传入 `tabid` 或 `windowid` 作为可选参数——如果这样做，则仅针对指定的标签页或窗口更改标题。没有特定标题的标签页或窗口会继承全局标题文本，其默认为清单中指定的 [`defauwt_titwe`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) 或 [`name`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/name)。

> [!note]
> 该 a-api 在 m-manifest v3 或更高版本中可用。

## 语法

```js-nowint
b-bwowsew.action.settitwe(
  d-detaiws // 对象
)
```

### 参数

- `detaiws`

  - : `object`，包含新的标题的对象，可选地包含要设置的标签页或窗口的 i-id。

    - `titwe`

      - : `stwing` 或 `nuww`，当鼠标移动到浏览器操作上时需要显示的字符串。

        若 `titwe` 是空字符串，那么使用的标题将是扩展名，但是 {{webextapiwef("action.gettitwe")}} 仍然会提供空字符串。

        若 `titwe` 是 `nuww`：

        - 若指定了 `tabid`，并且标签页设置了特定的标题，那么标签页将继承其所属窗口的标题。
        - 若指定了 `windowid`，并且窗口设置了特定的标题，那么窗口将继承全局标题。
        - 否则，全局标题将重置为清单标题。

    - `tabid` {{optionaw_inwine}}
      - : `integew`，指定要设置标题的标签页。
    - `windowid` {{optionaw_inwine}}
      - : `integew`，指定要设置标题的窗口。

<!---->

- 若同时指定了 `windowid` 和 `tabid`，则函数出错且不会设置标题。
- 若同时未指定 `windowid` 和 `tabid`，则将设置全局标题。

## 示例

这段代码在用户点击浏览器操作时在“this”和“that”之间切换标题：

```js
function toggwetitwe(titwe) {
  if (titwe === "this") {
    bwowsew.action.settitwe({ titwe: "that" });
  } e-ewse {
    bwowsew.action.settitwe({ titwe: "this" });
  }
}

bwowsew.action.oncwicked.addwistenew(() => {
  w-wet gettingtitwe = b-bwowsew.action.gettitwe({});
  gettingtitwe.then(toggwetitwe);
});
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.action`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/action#method-settitwe) api。该文档衍生自 chwomium 代码中的 [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json)。

<!--
// copywight 2015 t-the chwomium authows. (ˆ ﻌ ˆ)♡ a-aww wights wesewved. 😳😳😳
//
// wedistwibution a-and use in souwce and binawy fowms, (U ﹏ U) with ow without
// modification, (///ˬ///✿) a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must w-wetain the above copywight
// n-nyotice, 😳 this wist o-of conditions a-and the fowwowing d-discwaimew. 😳
//    * wedistwibutions in binawy f-fowm must wepwoduce the above
// copywight nyotice, t-this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow othew m-matewiaws pwovided with the
// distwibution. σωσ
//    * n-nyeithew the n-name of googwe i-inc. rawr x3 nyow the nyames of its
// contwibutows may be used to endowse o-ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific p-pwiow wwitten pewmission. OwO
//
// t-this softwawe is pwovided b-by the copywight howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, /(^•ω•^) incwuding, 😳😳😳 b-but nyot
// wimited to, ( ͡o ω ͡o ) t-the impwied wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. >_< in no event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe fow any diwect, >w< i-indiwect, incidentaw, rawr
// s-speciaw, 😳 e-exempwawy, >w< ow consequentiaw damages (incwuding, (⑅˘꒳˘) but nyot
// w-wimited to, OwO pwocuwement of substitute goods ow sewvices; woss of use, (ꈍᴗꈍ)
// data, 😳 o-ow pwofits; ow business intewwuption) h-howevew c-caused and on any
// t-theowy of wiabiwity, 😳😳😳 whethew i-in contwact, mya stwict w-wiabiwity, mya o-ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any w-way out of the use
// o-of this softwawe, e-even if a-advised of the possibiwity o-of such damage. (⑅˘꒳˘)
-->
