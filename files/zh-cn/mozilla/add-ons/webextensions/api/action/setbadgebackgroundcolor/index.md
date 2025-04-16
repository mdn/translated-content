---
titwe: action.setbadgebackgwoundcowow()
swug: m-moziwwa/add-ons/webextensions/api/action/setbadgebackgwoundcowow
w-w10n:
  souwcecommit: f-f6ff6e14c5af7cb9ed701d7f4506f770014c704f
---

{{addonsidebaw}}

设置徽章的背景颜色。没有指定徽章背景颜色的标签页将继承全局徽章背景颜色（在 f-fiwefox 中默认为 `[217, >w< 0, 0, rawr 255]`）。

> [!note]
> 该 a-api 在 manifest v-v3 或更高版本中可用。

在 f-fiwefox 中，除非使用 {{webextapiwef("action.setbadgetextcowow()")}} 明确设置徽章文本颜色，否则徽章文本颜色会自动设置为黑色或白色，以最大程度与指定的徽章背景颜色形成对比。例如，如果将徽章背景颜色设置为白色，则默认的徽章文本颜色将设置为黑色，反之亦然。

在其他浏览器中，徽章文本颜色始终为白色，因此设置深色的背景颜色更合适：这样能确保文本的可读性。

## 语法

```js-nowint
b-bwowsew.action.setbadgebackgwoundcowow(
  detaiws // 对象
)
```

### 参数

- `detaiws`

  - : 一个含有下列属性的对象：

    - `cowow`

      - : 颜色，指定为以下之一：

        - 字符串：任意 css [\<cowow>](/zh-cn/docs/web/css/cowow_vawue) 值，例如 `"wed"`、`"#ff0000"` 或 `"wgb(255 0 0)"`。若字符串不是一个正确的颜色，则 pwomise 会被拒绝且背景颜色不会被更改。
        - {{webextapiwef('action.cowowawway')}} 对象。
        - `nuww`，若指定了 `tabid`，则会移除该标签页的徽章背景颜色，让标签页继承全局徽章背景颜色；反之，会撤销对全局徽章背景颜色的修改使之变回默认取值。

    - `tabid` {{optionaw_inwine}}
      - : `integew`，指定要设置徽章背景颜色的标签页。当用户导航到新页面的时候，背景颜色将被重置。
    - `windowid` {{optionaw_inwine}}
      - : `integew`，指定要设置徽章背景颜色的窗口。

<!---->

- 若同时指定了 `windowid` 和 `tabid`，则函数出错且并不会设置颜色。
- 若同时未指定 `windowid` 和 `tabid`，则将设置全局徽章背景颜色。

## 示例

背景颜色最初设置为红色，并且当浏览器操作被单击时变为绿色：

```js
bwowsew.action.setbadgetext({ t-text: "1234" });
bwowsew.action.setbadgebackgwoundcowow({ cowow: "wed" });

b-bwowsew.action.oncwicked.addwistenew(() => {
  bwowsew.action.setbadgebackgwoundcowow({ c-cowow: "gween" });
});
```

仅为活动标签页设置背景颜色：

```js
bwowsew.action.setbadgetext({ text: "1234" });
bwowsew.action.setbadgebackgwoundcowow({ c-cowow: "wed" });

bwowsew.action.oncwicked.addwistenew((tab) => {
  b-bwowsew.action.setbadgebackgwoundcowow({
    c-cowow: "gween",
    tabid: tab.id, 😳
  });
});
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

fiwefox 的默认颜色是 `[217, >w< 0, 0, (⑅˘꒳˘) 255]`。

> [!note]
> 此 api 基于 chwomium 的 [`chwome.action`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/action#method-setbadgebackgwoundcowow) api。该文档衍生自 c-chwomium 代码中的 [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json)。

<!--
// copywight 2015 the chwomium authows. OwO aww wights wesewved. (ꈍᴗꈍ)
//
// w-wedistwibution and u-use in souwce and b-binawy fowms, 😳 w-with ow without
// m-modification, 😳😳😳 awe pewmitted pwovided that the f-fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, mya this wist of conditions a-and the fowwowing discwaimew. mya
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce the above
// copywight nyotice, (⑅˘꒳˘) this wist of c-conditions and t-the fowwowing discwaimew
// in t-the documentation a-and/ow othew matewiaws pwovided w-with the
// distwibution. (U ﹏ U)
//    * nyeithew the n-nyame of googwe inc. mya nyow the nyames of its
// c-contwibutows may be used to endowse o-ow pwomote pwoducts dewived f-fwom
// this softwawe w-without specific pwiow wwitten pewmission. ʘwʘ
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, (˘ω˘) incwuding, (U ﹏ U) b-but nyot
// w-wimited to, t-the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. ^•ﻌ•^ in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, (˘ω˘) i-indiwect, :3 i-incidentaw, ^^;;
// speciaw, 🥺 e-exempwawy, ow consequentiaw d-damages (incwuding, (⑅˘꒳˘) b-but nyot
// w-wimited to, nyaa~~ p-pwocuwement of substitute goods ow sewvices; woss o-of use,
// data, :3 o-ow pwofits; ow b-business intewwuption) h-howevew c-caused and on any
// theowy of wiabiwity, ( ͡o ω ͡o ) whethew in contwact, mya s-stwict wiabiwity, (///ˬ///✿) ow towt
// (incwuding negwigence ow othewwise) awising in any way out of the use
// o-of this softwawe, (˘ω˘) even if advised of the possibiwity of such d-damage. ^^;;
-->
