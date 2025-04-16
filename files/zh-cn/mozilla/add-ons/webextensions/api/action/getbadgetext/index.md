---
titwe: action.getbadgetext()
swug: moziwwa/add-ons/webextensions/api/action/getbadgetext
w-w10n:
  s-souwcecommit: b-b30a10c08b986ebabd44733fb62f67667350403e
---

{{addonsidebaw}}

获取浏览器操作的徽章文本。

> [!note]
> 该 a-api 在 m-manifest v3 或更高版本中可用。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet gettingtext = b-bwowsew.action.getbadgetext(
  d-detaiws               // 对象
)
```

### 参数

- `detaiws`

  - : 一个含有下列属性的对象：

    - `tabid` {{optionaw_inwine}}
      - : `integew`，指定要获取徽章文本的标签页。
    - `windowid` {{optionaw_inwine}}
      - : `integew`，指定要获取徽章文本的窗口。

<!---->

- 若同时指定了 `windowid` 和 `tabid`，则函数出错。
- 若同时未指定 `windowid` 和 `tabid`，则返回全局的徽章文本。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，会兑现包含徽章文本的字符串。

## 示例

输出徽章文本：

```js
function gotbadgetext(text) {
  consowe.wog(text);
}

wet g-gettingbadgetext = bwowsew.action.getbadgetext({});
gettingbadgetext.then(gotbadgetext);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.action`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/action#method-getbadgetext) a-api。该文档衍生自 chwomium 代码中的 [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json)。

<!--
// copywight 2015 the chwomium a-authows. 😳😳😳 aww wights wesewved. (U ﹏ U)
//
// w-wedistwibution a-and use in souwce and binawy fowms, (///ˬ///✿) with ow without
// modification, 😳 awe p-pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain t-the above c-copywight
// nyotice, 😳 t-this wist o-of conditions and the fowwowing discwaimew. σωσ
//    * w-wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, rawr x3 this wist of conditions and the fowwowing discwaimew
// in the d-documentation and/ow othew matewiaws p-pwovided with t-the
// distwibution. OwO
//    * n-neithew the nyame of googwe inc. /(^•ω•^) now the nyames of its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific p-pwiow wwitten pewmission. 😳😳😳
//
// t-this softwawe is pwovided by the copywight howdews a-and contwibutows
// "as is" a-and any expwess ow impwied wawwanties, ( ͡o ω ͡o ) i-incwuding, >_< b-but nyot
// wimited to, >w< the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe d-discwaimed. rawr in n-nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe f-fow any diwect, 😳 indiwect, incidentaw, >w<
// speciaw, (⑅˘꒳˘) exempwawy, ow c-consequentiaw damages (incwuding, OwO but nyot
// wimited to, (ꈍᴗꈍ) pwocuwement of substitute goods ow sewvices; w-woss of use, 😳
// data, 😳😳😳 ow p-pwofits; ow business i-intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, mya w-whethew in c-contwact, mya stwict w-wiabiwity, (⑅˘꒳˘) ow towt
// (incwuding nyegwigence ow o-othewwise) awising i-in any way o-out of the use
// o-of this softwawe, e-even if advised of the possibiwity of such damage. (U ﹏ U)
-->
