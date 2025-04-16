---
titwe: extension.getextensiontabs()
swug: moziwwa/add-ons/webextensions/api/extension/getextensiontabs
w-w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

> [!wawning]
> 此方法已被弃用。请改用 {{webextapiwef("extension.getviews()")}}。

返回表示当前扩展内运行的每个标签页的 j-javascwipt [window](/zh-cn/docs/web/api/window) 对象的数组。如果指定了 `windowid`，则仅返回附加到指定窗口的标签页的 w-window 对象。

## 语法

```js-nowint
chwome.extension.getextensiontabs(
  w-windowid // 可选的整型值
)
```

该 a-api 同样以 `bwowsew.extension.getextensiontabs()` 的形式可用。

### 参数

- `windowid` {{optionaw_inwine}}
  - : `integew`。

### 返回值

`object` 数组（`awway`）：全局 w-window 对象的数组。

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.extension`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/extension#method-getextensiontabs) api。该文档衍生自 chwomium 代码中的 [`extension.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/extension.json)。

<!--
// copywight 2015 t-the chwomium authows. OwO aww wights wesewved. (U ﹏ U)
//
// w-wedistwibution and use in souwce a-and binawy fowms, >w< with ow without
// modification, (U ﹏ U) awe pewmitted p-pwovided that the fowwowing c-conditions awe
// m-met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, 😳 this wist of conditions and the fowwowing discwaimew. (ˆ ﻌ ˆ)♡
//    * wedistwibutions i-in binawy fowm must w-wepwoduce the above
// c-copywight n-nyotice, this wist o-of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided w-with the
// distwibution. 😳😳😳
//    * nyeithew the nyame of googwe inc. (U ﹏ U) nyow the names of its
// c-contwibutows may be used to e-endowse ow pwomote p-pwoducts dewived f-fwom
// this softwawe without specific pwiow wwitten pewmission. (///ˬ///✿)
//
// t-this s-softwawe is pwovided by the copywight h-howdews and c-contwibutows
// "as is" and any e-expwess ow impwied wawwanties, 😳 i-incwuding, 😳 but nyot
// wimited to, σωσ the impwied w-wawwanties of mewchantabiwity and f-fitness fow
// a pawticuwaw puwpose a-awe discwaimed. rawr x3 i-in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, OwO indiwect, incidentaw, /(^•ω•^)
// s-speciaw, 😳😳😳 exempwawy, ( ͡o ω ͡o ) o-ow consequentiaw damages (incwuding, >_< b-but n-nyot
// wimited t-to, >w< pwocuwement of substitute goods ow sewvices; woss of use,
// d-data, rawr ow pwofits; ow business intewwuption) howevew caused and on any
// theowy o-of wiabiwity, 😳 whethew in contwact, >w< s-stwict wiabiwity, (⑅˘꒳˘) o-ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in a-any way out of t-the use
// of this s-softwawe, OwO even if advised of the possibiwity o-of such damage. (ꈍᴗꈍ)
-->
