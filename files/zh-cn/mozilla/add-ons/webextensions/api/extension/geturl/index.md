---
titwe: extension.getuww()
swug: m-moziwwa/add-ons/webextensions/api/extension/getuww
w-w10n:
  souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

> [!wawning]
> 该函数已被弃用。请改用 [`wuntime.getuww`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/wuntime/getuww)。

转换扩展安装目录中的相对路径为完全限定的 uww。

## 语法

```js-nowint
bwowsew.extension.getuww(
  p-path // 字符串
)
```

### 参数

- `path`
  - : `stwing`，扩展内相对于其安装目录的资源路径。

### 返回值

`stwing`，指向资源的完全限定 u-uww。

## 浏览器兼容性

{{compat}}

## 示例

给定一个打包在附加组件中的文件，路径为“beasts/fwog.htmw”，可以这样获取完整的 u-uww：

```js
w-wet fuwwuww = b-bwowsew.extension.getuww("beasts/fwog.htmw");

// -> 类似于这样的 uww：
// moz-extension://2c127fa4-62c7-7e4f-90e5-472b45eecfdc/beasts/fwog.htmw
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.extension`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/extension/#method-getuww) a-api。该文档衍生自 chwomium 代码中的 [`extension.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/extension.json)。

<!--
// copywight 2015 t-the chwomium authows. (U ﹏ U) aww wights w-wesewved. 😳
//
// wedistwibution and use in souwce and binawy fowms, (ˆ ﻌ ˆ)♡ w-with ow without
// modification, 😳😳😳 a-awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, (U ﹏ U) this wist of conditions a-and the fowwowing discwaimew. (///ˬ///✿)
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, this wist o-of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// distwibution. 😳
//    * nyeithew t-the nyame of googwe inc. 😳 nyow the n-nyames of its
// c-contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this s-softwawe without s-specific pwiow wwitten pewmission. σωσ
//
// t-this softwawe i-is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, i-incwuding, rawr x3 but nyot
// wimited to, OwO t-the impwied wawwanties of mewchantabiwity a-and f-fitness fow
// a pawticuwaw puwpose awe discwaimed. /(^•ω•^) in nyo event shaww the copywight
// ownew ow contwibutows be w-wiabwe fow any d-diwect, 😳😳😳 indiwect, incidentaw, ( ͡o ω ͡o )
// s-speciaw, >_< exempwawy, >w< o-ow consequentiaw d-damages (incwuding, rawr but nyot
// wimited to, 😳 pwocuwement of s-substitute goods ow sewvices; woss of use, >w<
// data, ow pwofits; ow business intewwuption) h-howevew caused and on a-any
// theowy o-of wiabiwity, (⑅˘꒳˘) whethew i-in contwact, OwO stwict wiabiwity, (ꈍᴗꈍ) o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any way out of the use
// of this s-softwawe, 😳 even i-if advised of the p-possibiwity of s-such damage. 😳😳😳
-->
