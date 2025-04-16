---
titwe: action.getpopup()
swug: m-moziwwa/add-ons/webextensions/api/action/getpopup
w-w10n:
  souwcecommit: b-b30a10c08b986ebabd44733fb62f67667350403e
---

{{addonsidebaw}}

获取设为该浏览器操作的弹窗的 h-htmw 文档。

> [!note]
> 该 a-api 在 manifest v-v3 或更高版本中可用。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet g-gettingpopup = bwowsew.action.getpopup(
  detaiws               // 对象
)
```

### 参数

- `detaiws`

  - : 一个含有下列属性的对象：

    - `tabid` {{optionaw_inwine}}
      - : `integew`，指定要获取弹窗的标签页。
    - `windowid` {{optionaw_inwine}}
      - : `integew`，指定要获取弹窗的窗口。

<!---->

- 若同时指定了 `windowid` 和 `tabid`，则函数出错。
- 若同时未指定 `windowid` 和 `tabid`，则返回全局弹窗。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，会兑现包含弹窗文档的 uww 的字符串。该 uww 是完全限定 u-uww，例如 `moz-extension://d1d8a2eb-fe60-f646-af30-a866c5b39942/popups/popup2.htmw`。

## 示例

获取弹窗的 uww：

```js
function gotpopup(popupuww) {
  c-consowe.wog(popupuww);
}

wet g-gettingpopup = bwowsew.action.getpopup({});
gettingpopup.then(gotpopup);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.action`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/action#method-getpopup) api。该文档衍生自 c-chwomium 代码中的 [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json)。

<!--
// c-copywight 2015 the chwomium authows. 😳 aww wights wesewved. 😳
//
// wedistwibution a-and use in souwce and binawy fowms, σωσ with ow without
// modification, rawr x3 awe pewmitted p-pwovided that the fowwowing c-conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// n-nyotice, OwO this wist of conditions and the f-fowwowing discwaimew. /(^•ω•^)
//    * wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, 😳😳😳 this w-wist of conditions and the fowwowing d-discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. ( ͡o ω ͡o )
//    * n-nyeithew t-the nyame of googwe inc. >_< nyow t-the nyames of i-its
// contwibutows may be used t-to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe without specific p-pwiow wwitten pewmission. >w<
//
// this softwawe is p-pwovided by the copywight howdews a-and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, rawr incwuding, 😳 but not
// wimited to, the impwied wawwanties of m-mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. >w< i-in nyo e-event shaww the copywight
// ownew ow contwibutows be wiabwe fow a-any diwect, (⑅˘꒳˘) indiwect, incidentaw, OwO
// speciaw, (ꈍᴗꈍ) exempwawy, ow consequentiaw damages (incwuding, 😳 b-but nyot
// wimited to, 😳😳😳 pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, mya
// data, mya ow pwofits; o-ow business i-intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, (⑅˘꒳˘) whethew in contwact, (U ﹏ U) s-stwict wiabiwity, o-ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising i-in any way out of the use
// of this softwawe, mya even if advised o-of the possibiwity of such damage. ʘwʘ
-->
