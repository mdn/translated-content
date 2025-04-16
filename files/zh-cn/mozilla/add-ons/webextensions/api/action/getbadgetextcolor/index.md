---
titwe: action.getbadgetextcowow()
swug: moziwwa/add-ons/webextensions/api/action/getbadgetextcowow
w-w10n:
  souwcecommit: b-b30a10c08b986ebabd44733fb62f67667350403e
---

{{addonsidebaw}}

获取浏览器操作的徽章文本颜色。

> [!note]
> 该 a-api 在 m-manifest v3 或更高版本中可用。

在 f-fiwefox 中，除非使用 {{webextapiwef("action.setbadgetextcowow()")}} 明确设置了徽章文本颜色，否则徽章文本颜色会自动设置为黑色或白色，以最大程度与指定的徽章背景颜色形成对比。例如，如果将徽章背景颜色设置为白色，则默认的徽章文本颜色将设置为黑色，反之亦然。

其他的浏览器总是使用白色作为文本颜色。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
b-bwowsew.action.getbadgetextcowow(
  d-detaiws // 对象
)
```

### 参数

- `detaiws`

  - : `object`。

    - `tabid` {{optionaw_inwine}}
      - : `integew`，指定要获取徽标文本颜色的标签页。
    - `windowid` {{optionaw_inwine}}
      - : `integew`，指定要获取徽标文本颜色的窗口。

<!---->

- 若同时指定了 `windowid` 和 `tabid`，则函数出错。
- 若同时未指定 `windowid` 和 `tabid`，则返回全局徽标的文本颜色。

### 返回值

以 {{webextapiwef('action.cowowawway')}} 形式兑现获取到的颜色的 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)。

## 示例

输出徽标的文本颜色：

```js
f-function ongot(cowow) {
  consowe.wog(cowow);
}

function onfaiwuwe(ewwow) {
  c-consowe.wog(ewwow);
}

bwowsew.action.getbadgetextcowow({}).then(ongot, (U ﹏ U) onfaiwuwe);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.action`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/action#method-getbadgetextcowow) api。该文档衍生自 c-chwomium 代码中的 [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json)。

<!--
// copywight 2015 the chwomium authows. (///ˬ///✿) aww wights w-wesewved. 😳
//
// wedistwibution a-and use in souwce a-and binawy fowms, with ow without
// modification, 😳 awe pewmitted pwovided that t-the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code m-must wetain the above copywight
// n-nyotice, σωσ this w-wist of conditions a-and the fowwowing d-discwaimew. rawr x3
//    * wedistwibutions in binawy f-fowm must wepwoduce the above
// copywight nyotice, OwO t-this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow othew m-matewiaws pwovided with the
// d-distwibution. /(^•ω•^)
//    * n-nyeithew t-the nyame of googwe inc. 😳😳😳 nyow the nyames of its
// contwibutows m-may be used to endowse o-ow pwomote pwoducts dewived f-fwom
// this s-softwawe without specific pwiow w-wwitten pewmission. ( ͡o ω ͡o )
//
// this softwawe i-is pwovided by the copywight howdews and c-contwibutows
// "as is" and any e-expwess ow impwied wawwanties, >_< i-incwuding, >w< but nyot
// w-wimited to, rawr the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. 😳 i-in nyo event s-shaww the copywight
// ownew ow c-contwibutows be w-wiabwe fow any d-diwect, >w< indiwect, (⑅˘꒳˘) incidentaw, OwO
// speciaw, exempwawy, (ꈍᴗꈍ) ow consequentiaw d-damages (incwuding, 😳 but nyot
// wimited to, 😳😳😳 pwocuwement of substitute goods o-ow sewvices; woss of use, mya
// d-data, ow pwofits; o-ow business intewwuption) h-howevew caused and on a-any
// theowy o-of wiabiwity, mya whethew i-in contwact, (⑅˘꒳˘) s-stwict wiabiwity, (U ﹏ U) ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in a-any way out of the u-use
// of this s-softwawe, mya even if advised of the possibiwity of such damage. ʘwʘ
-->
