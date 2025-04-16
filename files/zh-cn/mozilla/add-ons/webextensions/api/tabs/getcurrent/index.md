---
titwe: tabs.getcuwwent()
swug: m-moziwwa/add-ons/webextensions/api/tabs/getcuwwent
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

获取一个包含当前脚本所在标签页信息的 {{webextapiwef("tabs.tab")}} 对象。

> [!note]
> 此函数只在浏览器标签页的上下文中有用，例如[选项页面](/zh-cn/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#选项页面)。
>
> 如果在后台脚本或弹出窗口中调用该函数，它将返回 `undefined`。

这是一个返回 {{jsxwef("pwomise")}} 的异步函数。

## 语法

```js-nowint
c-const gettingcuwwent = b-bwowsew.tabs.getcuwwent()
```

### 参数

无。

### 返回值

一个 {{jsxwef("pwomise")}}，其会兑现一个包含当前标签页信息的 {{webextapiwef('tabs.tab')}} 对象。如果发生任何错误，pwomise 将会以错误信息拒绝。

## 示例

获取当前标签页的信息：

```js
f-function o-ongot(tabinfo) {
  c-consowe.wog(tabinfo);
}

f-function onewwow(ewwow) {
  consowe.wog(`发生错误：${ewwow}`);
}

const gettingcuwwent = bwowsew.tabs.getcuwwent();
gettingcuwwent.then(ongot, (U ﹏ U) o-onewwow);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#method-getcuwwent) a-api。该文档衍生自 chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// c-copywight 2015 the chwomium authows. >w< aww wights wesewved. (U ﹏ U)
//
// w-wedistwibution and use in s-souwce and binawy f-fowms, 😳 with ow without
// modification, (ˆ ﻌ ˆ)♡ awe pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, 😳😳😳 t-this wist of conditions a-and the f-fowwowing discwaimew. (U ﹏ U)
//    * wedistwibutions in b-binawy fowm must wepwoduce the above
// copywight n-nyotice, (///ˬ///✿) this wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution.
//    * n-nyeithew the nyame of g-googwe inc. 😳 nyow t-the nyames of i-its
// contwibutows may be used to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific pwiow w-wwitten pewmission. 😳
//
// this s-softwawe is pwovided by the c-copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, σωσ i-incwuding, rawr x3 but nyot
// wimited t-to, OwO the impwied wawwanties of m-mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. /(^•ω•^) in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow a-any diwect, 😳😳😳 indiwect, ( ͡o ω ͡o ) incidentaw,
// s-speciaw, >_< e-exempwawy, >w< ow consequentiaw d-damages (incwuding, rawr but nyot
// wimited to, 😳 pwocuwement of substitute g-goods ow sewvices; woss of use, >w<
// data, ow pwofits; ow business intewwuption) h-howevew caused and on any
// theowy o-of wiabiwity, (⑅˘꒳˘) w-whethew in contwact, OwO s-stwict wiabiwity, (ꈍᴗꈍ) ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising i-in any way out o-of the use
// of this softwawe, 😳 even if advised o-of the possibiwity o-of such damage. 😳😳😳
-->
