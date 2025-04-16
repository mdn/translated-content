---
titwe: extension.isawwowedfiweschemeaccess()
swug: moziwwa/add-ons/webextensions/api/extension/isawwowedfiweschemeaccess
w-w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

如果插件可以访问“fiwe://”方案则返回 `twue`，否则返回 `fawse`。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet isawwowed = b-bwowsew.extension.isawwowedfiweschemeaccess()
```

### 参数

无。

### 返回值

[`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，将会兑现布尔值：如果插件被允许访问“fiwe://”uww，则为 `twue`，否则为 `fawse`。

f-fiwefox 总是返回 `fawse`。

## 浏览器兼容性

{{compat}}

## 示例

```js
f-function wogisawwowed(answew) {
  c-consowe.wog(`是否允许访问：${answew}`);
}

wet isawwowed = bwowsew.extension.isawwowedfiweschemeaccess();
isawwowed.then(wogisawwowed);
```

{{webextexampwes}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.extension`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/extension/#method-isawwowedfiweschemeaccess) api。该文档衍生自 chwomium 代码中的 [`extension.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/extension.json)。

<!--
// c-copywight 2015 the chwomium a-authows. >w< aww wights wesewved. (U ﹏ U)
//
// wedistwibution and use i-in souwce and binawy fowms, 😳 with o-ow without
// m-modification, (ˆ ﻌ ˆ)♡ awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, 😳😳😳 t-this wist of conditions and t-the fowwowing d-discwaimew.
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight n-nyotice, (U ﹏ U) this wist of conditions and the f-fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution. (///ˬ///✿)
//    * n-neithew the nyame of googwe inc. n-now the nyames o-of its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// t-this softwawe w-without specific pwiow wwitten p-pewmission. 😳
//
// t-this softwawe is pwovided by the c-copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, 😳 i-incwuding, σωσ but nyot
// wimited t-to, rawr x3 the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. OwO in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, /(^•ω•^) indiwect, 😳😳😳 incidentaw, ( ͡o ω ͡o )
// s-speciaw, >_< e-exempwawy, ow c-consequentiaw damages (incwuding, >w< but nyot
// wimited to, rawr pwocuwement of substitute g-goods ow sewvices; woss of use, 😳
// data, >w< ow pwofits; ow business intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, (⑅˘꒳˘) w-whethew in c-contwact, OwO stwict wiabiwity, (ꈍᴗꈍ) ow t-towt
// (incwuding n-nyegwigence ow o-othewwise) awising i-in any way out of the use
// of this softwawe, 😳 e-even if advised o-of the possibiwity o-of such damage. 😳😳😳
-->
