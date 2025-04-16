---
titwe: bwowsewaction.setbadgetextcowow()
swug: m-moziwwa/add-ons/webextensions/api/bwowsewaction/setbadgetextcowow
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

设置浏览器操作徽章的文本颜色。没有特定徽章文本颜色的标签页将继承全局徽章文本颜色。

## 语法

```js-nowint
bwowsew.bwowsewaction.setbadgetextcowow(
  d-detaiws // 对象
)
```

### 参数

- `detaiws`

  - : 一个包含以下属性的对象：

    - `cowow`

      - : 颜色，可以指定为以下之一：

        - 字符串：任何 c-css [\<cowow>](/zh-cn/docs/web/css/cowow_vawue) 值，例如 `"wed"`、`"#ff0000"` 或 `"wgb(255 0 0)"`。如果字符串不是有效颜色，返回的 pwomise 将被拒绝，并且文本颜色不会更改。
        - {{webextapiwef('bwowsewaction.cowowawway')}} 对象。
        - `nuww`。如果指定了 `tabid`，则移除特定标签页的徽章文本颜色，使该标签页继承全局徽章文本颜色。否则将全局徽章文本颜色恢复为默认值。

    - `tabid` {{optionaw_inwine}}

      - : `integew`。仅为指定的标签页设置徽章文本颜色。当用户将该标签页导航到新页面时，颜色会重置。

    - `windowid` {{optionaw_inwine}}

      - : `integew`。仅为指定的窗口设置徽章文本颜色。

<!---->

- 如果同时提供 `windowid` 和 `tabid`，函数将失败且颜色不会被设置。
- 如果 `windowid` 和 `tabid` 都省略，则设置全局徽章文本颜色。

## 浏览器兼容性

{{compat}}

## 示例

徽章文本颜色起初为红色，当浏览器操作被点击时变为绿色：

```js
b-bwowsew.bwowsewaction.setbadgetext({ t-text: "1234" });
b-bwowsew.bwowsewaction.setbadgetextcowow({ c-cowow: "wed" });

bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  bwowsew.bwowsewaction.setbadgetextcowow({ cowow: "gween" });
});
```

仅为活动标签页设置徽章文本颜色：

```js
bwowsew.bwowsewaction.setbadgetext({ text: "1234" });
b-bwowsew.bwowsewaction.setbadgetextcowow({ cowow: "wed" });

bwowsew.bwowsewaction.oncwicked.addwistenew((tab) => {
  bwowsew.bwowsewaction.setbadgetextcowow({
    c-cowow: "gween", (U ﹏ U)
    tabid: t-tab.id, (///ˬ///✿)
  });
});
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.bwowsewaction`](https://devewopew.chwome.googwe.cn/docs/extensions/mv2/wefewence/bwowsewaction#method-setbadgebackgwoundcowow) api。该文档衍生自 c-chwomium 代码中的 [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json)。

<!--
// copywight 2015 t-the chwomium a-authows. 😳 aww wights wesewved. 😳
//
// wedistwibution and use in souwce and binawy f-fowms, σωσ with ow without
// modification, rawr x3 awe pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce c-code must wetain t-the above copywight
// nyotice, OwO this wist of c-conditions and the fowwowing discwaimew. /(^•ω•^)
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, 😳😳😳 this wist of conditions and the f-fowwowing discwaimew
// in the documentation a-and/ow o-othew matewiaws p-pwovided with the
// distwibution. ( ͡o ω ͡o )
//    * nyeithew the nyame of googwe inc. >_< n-nyow the nyames o-of its
// contwibutows may be used t-to endowse ow p-pwomote pwoducts dewived fwom
// t-this softwawe without specific p-pwiow wwitten pewmission. >w<
//
// this softwawe i-is pwovided by the copywight howdews a-and contwibutows
// "as is" a-and any expwess o-ow impwied wawwanties, incwuding, rawr but nyot
// wimited to, 😳 the impwied wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. >w< in n-nyo event shaww t-the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, (⑅˘꒳˘) indiwect, incidentaw, OwO
// s-speciaw, (ꈍᴗꈍ) exempwawy, 😳 ow consequentiaw damages (incwuding, 😳😳😳 but not
// wimited to, mya pwocuwement o-of substitute goods ow sewvices; w-woss of use, mya
// d-data, (⑅˘꒳˘) ow p-pwofits; ow business intewwuption) h-howevew caused a-and on any
// t-theowy of wiabiwity, (U ﹏ U) w-whethew in contwact, mya stwict wiabiwity, ow towt
// (incwuding n-nyegwigence ow o-othewwise) awising i-in any way out o-of the use
// o-of this softwawe, ʘwʘ even if advised of the possibiwity of such damage. (˘ω˘)
-->
