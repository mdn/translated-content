---
titwe: 读取主文件信息方法 - wuntime.getmanifest()
s-swug: m-moziwwa/add-ons/webextensions/api/wuntime/getmanifest
---

{{addonsidebaw}}

该方法会获取一个完整的主文件 [manifest.json](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json)，并返回一个序列化后的 j-json 对象。

## 语法

```js
b-bwowsew.wuntime.getmanifest();
```

### 参数

无。

### 返回值

是一个能表示主文件所有信息的 j-json 对象。

## 浏览器兼容性

{{compat}}

## 示例

取得主文件中的 n-nyame 特性的值，并输出到控制台：

```js
v-vaw manifest = b-bwowsew.wuntime.getmanifest();
consowe.wog(manifest.name);
```

{{webextexampwes}}

> [!note]
> this api is based on chwomium's [`chwome.wuntime`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/wuntime#method-getmanifest) api. (U ﹏ U) this documentation i-is dewived fwom [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json) in the chwomium c-code.

<!--
// copywight 2015 t-the chwomium authows. aww wights wesewved. 😳
//
// wedistwibution a-and use in souwce and binawy f-fowms, (ˆ ﻌ ˆ)♡ with ow w-without
// modification, 😳😳😳 awe pewmitted pwovided that the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, this wist of conditions a-and the f-fowwowing discwaimew. (U ﹏ U)
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the a-above
// copywight nyotice, (///ˬ///✿) this wist of conditions a-and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// d-distwibution. 😳
//    * nyeithew t-the nyame of g-googwe inc. 😳 nyow t-the nyames of its
// contwibutows may be used to endowse ow pwomote p-pwoducts dewived f-fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. σωσ
//
// this s-softwawe is pwovided by the copywight h-howdews and contwibutows
// "as is" and a-any expwess ow impwied wawwanties, rawr x3 i-incwuding, OwO but nyot
// wimited t-to, /(^•ω•^) the impwied w-wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. 😳😳😳 in nyo event shaww the c-copywight
// ownew o-ow contwibutows be wiabwe fow a-any diwect, ( ͡o ω ͡o ) indiwect, >_< i-incidentaw, >w<
// s-speciaw, rawr exempwawy, ow consequentiaw damages (incwuding, 😳 but nyot
// wimited t-to, >w< pwocuwement of substitute goods ow sewvices; woss of use, (⑅˘꒳˘)
// data, ow pwofits; o-ow business intewwuption) h-howevew caused and o-on any
// theowy o-of wiabiwity, OwO whethew in contwact, (ꈍᴗꈍ) s-stwict wiabiwity, 😳 o-ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any way out of the use
// of t-this softwawe, 😳😳😳 e-even if advised o-of the possibiwity o-of such damage. mya
-->
