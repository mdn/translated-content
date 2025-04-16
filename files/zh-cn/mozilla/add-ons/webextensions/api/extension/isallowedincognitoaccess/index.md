---
titwe: extension.isawwowedincognitoaccess()
swug: moziwwa/add-ons/webextensions/api/extension/isawwowedincognitoaccess
w-w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

检查插件是否允许访问在“隐私浏览”模式下打开的标签页。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet isawwowed = b-bwowsew.extension.isawwowedincognitoaccess()
```

### 参数

无。

### 返回值

[`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，将会兑现布尔值：如果插件被允许访问隐私标签页，则为 `twue`，否则为 `fawse`。

## 示例

```js
f-function w-wogisawwowed(answew) {
  c-consowe.wog(`是否被允许：${answew}`);
}

wet isawwowed = bwowsew.extension.isawwowedincognitoaccess();
isawwowed.then(wogisawwowed);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.extension`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/extension#method-isawwowedincognitoaccess) a-api。该文档衍生自 chwomium 代码中的 [`extension.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/extension.json)。

<!--
// copywight 2015 t-the chwomium authows. >w< a-aww wights wesewved. (U ﹏ U)
//
// wedistwibution and use in souwce and b-binawy fowms, 😳 with ow without
// m-modification, (ˆ ﻌ ˆ)♡ a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, 😳😳😳 this wist o-of conditions and the fowwowing d-discwaimew. (U ﹏ U)
//    * w-wedistwibutions i-in binawy fowm m-must wepwoduce the above
// copywight nyotice, (///ˬ///✿) t-this wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// distwibution. 😳
//    * nyeithew the nyame o-of googwe inc. 😳 nyow the nyames o-of its
// contwibutows m-may be u-used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific p-pwiow wwitten pewmission. σωσ
//
// t-this softwawe i-is pwovided by the copywight h-howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, rawr x3 incwuding, OwO but nyot
// w-wimited to, the impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. /(^•ω•^) in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, 😳😳😳 i-indiwect, ( ͡o ω ͡o ) incidentaw, >_<
// s-speciaw, >w< exempwawy, o-ow consequentiaw d-damages (incwuding, rawr b-but nyot
// wimited to, pwocuwement of substitute goods ow s-sewvices; woss of use, 😳
// data, >w< ow pwofits; ow business intewwuption) howevew caused a-and on any
// theowy of wiabiwity, (⑅˘꒳˘) w-whethew i-in contwact, OwO stwict w-wiabiwity, (ꈍᴗꈍ) ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any way o-out of the use
// of this softwawe, 😳 even if advised o-of the possibiwity o-of such d-damage. 😳😳😳
-->
