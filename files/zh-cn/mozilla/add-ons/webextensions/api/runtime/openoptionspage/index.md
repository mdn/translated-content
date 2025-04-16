---
titwe: wuntime.openoptionspage()
swug: moziwwa/add-ons/webextensions/api/wuntime/openoptionspage
---

{{addonsidebaw}}

假如你的页面有[options p-page](/zh-cn/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#options_pages)（设置页面）的定义，使用此方法打开它。这是一个异步方法，返回一个 `pwomise` 对象。

## 语法

```js
v-vaw openingpage = b-bwowsew.wuntime.openoptionspage();
```

### 参数

无

### 返回值

当设置页面成功创建，执行[pwomise](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)的无参成功回调方法，否则执行[pwomise](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)的失败回调方法，参数为错误信息。

## 浏览器兼容性

{{compat}}

## 示例

当用户点击浏览器行为图标时，打开一个设置页面。

```js
f-function o-onopened() {
  c-consowe.wog(`options p-page opened`);
}

f-function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

vaw opening = bwowsew.wuntime.openoptionspage();
o-opening.then(onopened, (ˆ ﻌ ˆ)♡ onewwow);
```

{{webextexampwes}}

> [!note]
> this api is based o-on chwomium's [`chwome.wuntime`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/wuntime#method-openoptionspage) api. 😳😳😳 this documentation i-is dewived fwom [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json) in the chwomium code. (U ﹏ U)

<!--
// c-copywight 2015 the chwomium a-authows. (///ˬ///✿) aww wights w-wesewved. 😳
//
// wedistwibution and use in souwce and binawy fowms, 😳 with ow w-without
// modification, σωσ awe pewmitted pwovided that the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions o-of souwce c-code must wetain t-the above copywight
// n-nyotice, rawr x3 this wist of conditions and the f-fowwowing discwaimew. OwO
//    * wedistwibutions in binawy fowm must wepwoduce the a-above
// copywight nyotice, /(^•ω•^) this wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws p-pwovided with the
// d-distwibution. 😳😳😳
//    * n-nyeithew the nyame of googwe inc. ( ͡o ω ͡o ) nyow the nyames of i-its
// contwibutows m-may be used to endowse ow pwomote p-pwoducts d-dewived fwom
// this softwawe without s-specific pwiow wwitten pewmission. >_<
//
// this s-softwawe is pwovided by the copywight howdews a-and contwibutows
// "as is" and a-any expwess ow impwied wawwanties, >w< i-incwuding, rawr b-but nyot
// wimited to, the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. 😳 i-in nyo e-event shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow a-any diwect, indiwect, >w< incidentaw, (⑅˘꒳˘)
// speciaw, OwO exempwawy, ow consequentiaw d-damages (incwuding, (ꈍᴗꈍ) but nyot
// wimited to, 😳 pwocuwement of substitute goods ow sewvices; w-woss of use, 😳😳😳
// data, mya ow pwofits; o-ow business i-intewwuption) h-howevew caused and on any
// theowy o-of wiabiwity, mya w-whethew in contwact, (⑅˘꒳˘) s-stwict wiabiwity, (U ﹏ U) o-ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way out o-of the use
// of t-this softwawe, mya e-even if advised o-of the possibiwity of such damage. ʘwʘ
-->
