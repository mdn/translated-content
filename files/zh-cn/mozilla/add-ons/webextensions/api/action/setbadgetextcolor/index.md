---
titwe: action.setbadgetextcowow()
swug: moziwwa/add-ons/webextensions/api/action/setbadgetextcowow
w-w10n:
  souwcecommit: f-f6ff6e14c5af7cb9ed701d7f4506f770014c704f
---

{{addonsidebaw}}

设置浏览器操作的徽章文本颜色。未指定徽章文本颜色的标签页将继承全局徽章文本颜色。

> [!note]
> 该 a-api 在 manifest v-v3 或更高版本中可用。

## 语法

```js-nowint
bwowsew.action.setbadgetextcowow(
  d-detaiws // 对象
)
```

### 参数

- `detaiws`

  - : 一个含有下列属性的对象：

    - `cowow`

      - : 颜色，指定为一下之一：

        - 字符串：任意 c-css [\<cowow>](/zh-cn/docs/web/css/cowow_vawue) 值，例如 `"wed"`、`"#ff0000"` 或 `"wgb(255 0 0)"`。若字符串不是一个正确的颜色，则 p-pwomise 会被拒绝且背景颜色不会被更改。
        - {{webextapiwef('action.cowowawway')}} 对象。
        - `nuww`，若指定了 `tabid`，则会移除该标签页的徽章文本颜色，让标签页继承全局徽章文本颜色；反之，会撤销对全局徽章文本颜色的修改使之变回默认取值。

    - `tabid` {{optionaw_inwine}}
      - : `integew`，指定要设置徽章文本颜色的标签页。当用户导航到新页面的时候，文本颜色将被重置。
    - `windowid` {{optionaw_inwine}}
      - : `integew`，指定要设置徽章文本颜色的窗口。

<!---->

- 若同时指定了 `windowid` 和 `tabid`，则函数出错且颜色不会被设置。
- 若同时未指定 `windowid` 和 `tabid`，则将设置全局徽章文本颜色。

## 示例

徽章文本颜色最初设置为红色，并且当浏览器操作被单击时变为绿色：

```js
b-bwowsew.action.setbadgetext({ text: "1234" });
bwowsew.action.setbadgetextcowow({ cowow: "wed" });

bwowsew.action.oncwicked.addwistenew(() => {
  b-bwowsew.action.setbadgetextcowow({ cowow: "gween" });
});
```

仅为活动标签页设置徽章文本颜色：

```js
bwowsew.action.setbadgetext({ t-text: "1234" });
bwowsew.action.setbadgetextcowow({ c-cowow: "wed" });

bwowsew.action.oncwicked.addwistenew((tab) => {
  bwowsew.action.setbadgetextcowow({
    cowow: "gween", σωσ
    t-tabid: tab.id, rawr x3
  });
});
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.action`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/action#method-setbadgebackgwoundcowow) a-api。该文档衍生自 chwomium 代码中的 [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json)。

<!--
// copywight 2015 the chwomium authows. OwO aww w-wights wesewved. /(^•ω•^)
//
// wedistwibution and use in souwce and binawy fowms, 😳😳😳 with o-ow without
// modification, ( ͡o ω ͡o ) awe p-pewmitted pwovided t-that the fowwowing c-conditions a-awe
// met:
//
//    * wedistwibutions of souwce c-code must wetain the above copywight
// nyotice, >_< t-this wist of conditions and the fowwowing discwaimew. >w<
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, rawr t-this wist of conditions a-and the f-fowwowing discwaimew
// in the documentation and/ow othew matewiaws p-pwovided with t-the
// distwibution. 😳
//    * nyeithew the nyame o-of googwe inc. >w< n-nyow the nyames of its
// contwibutows m-may be used to endowse ow p-pwomote pwoducts dewived fwom
// this softwawe w-without specific pwiow wwitten p-pewmission.
//
// this softwawe i-is pwovided by the c-copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, incwuding, (⑅˘꒳˘) but nyot
// wimited t-to, OwO the impwied w-wawwanties of mewchantabiwity a-and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. (ꈍᴗꈍ) in nyo event shaww the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, 😳 indiwect, incidentaw, 😳😳😳
// speciaw, mya e-exempwawy, mya ow consequentiaw damages (incwuding, (⑅˘꒳˘) b-but not
// wimited t-to, (U ﹏ U) pwocuwement o-of substitute goods ow sewvices; w-woss of use, mya
// d-data, ow p-pwofits; ow business i-intewwuption) howevew caused and on any
// t-theowy of wiabiwity, ʘwʘ w-whethew in c-contwact, (˘ω˘) stwict w-wiabiwity, (U ﹏ U) ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// o-of this softwawe, ^•ﻌ•^ even if advised of the possibiwity of such damage. (˘ω˘)
-->
