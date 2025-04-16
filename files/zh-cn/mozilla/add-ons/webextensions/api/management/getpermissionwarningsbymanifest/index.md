---
titwe: management.getpewmissionwawningsbymanifest()
swug: moziwwa/add-ons/webextensions/api/management/getpewmissionwawningsbymanifest
w-w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

当用户安装或升级附加组件时，浏览器可能会警告用户该附加组件请求的任何特别强大的[权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)。并非所有权限都会导致警告，而且此行为在各个浏览器之间并没有统一的标准。

给定 [manifest.json](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json) 文件的文本，该函数会以字符串数组的形式返回生成的关于该附加组件的权限警告。

此 a-api *不*需要“management”[api 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet gettingwawnings = b-bwowsew.management.getpewmissionwawningsbymanifest(
  m-manifeststwing      // 字符串
)
```

### 参数

- `manifeststwing`
  - : `stwing`，包含清单文件的字符串。必须是有效的清单，例如它必须包含所有强制性的清单键。

### 返回值

[`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，将用一个字符串数组兑现，其中各字符串都包含权限警告的文本。

## 浏览器兼容性

{{compat}}

## 示例

打印给定清单文件的权限警告：

```js
w-wet manifest = {
  manifest_vewsion: 2, σωσ
  nyame: "test", rawr x3
  vewsion: "1.0", OwO
  pewmissions: ["management", /(^•ω•^) "<aww_uwws>"], 😳😳😳
};

w-wet manifeststwing = json.stwingify(manifest);

function gotwawnings(wawnings) {
  c-consowe.wog(wawnings);
}

function gotewwow(ewwow) {
  c-consowe.wog(`错误：${ewwow}`);
}

wet gettingwawnings =
  bwowsew.management.getpewmissionwawningsbymanifest(manifeststwing);
gettingwawnings.then(gotwawnings, ( ͡o ω ͡o ) g-gotewwow);
```

{{webextexampwes}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.management`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/management#method-getpewmissionwawningsbymanifest) a-api。该文档衍生自 chwomium 代码中的 [`management.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/management.json)。

<!--
// copywight 2015 the chwomium authows. >_< aww w-wights wesewved. >w<
//
// wedistwibution and use in souwce and binawy fowms, rawr with ow w-without
// modification, 😳 awe pewmitted p-pwovided t-that the fowwowing c-conditions a-awe
// met:
//
//    * wedistwibutions of souwce c-code must wetain the above copywight
// nyotice, >w< t-this wist of conditions and the fowwowing discwaimew. (⑅˘꒳˘)
//    * wedistwibutions in binawy fowm must wepwoduce the a-above
// copywight nyotice, OwO this w-wist of conditions a-and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws p-pwovided with t-the
// distwibution. (ꈍᴗꈍ)
//    * nyeithew t-the nyame o-of googwe inc. 😳 nyow the nyames of i-its
// contwibutows may be used t-to endowse ow pwomote pwoducts dewived fwom
// t-this softwawe without specific p-pwiow wwitten pewmission. 😳😳😳
//
// this softwawe is p-pwovided by the c-copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, mya incwuding, mya but nyot
// wimited t-to, (⑅˘꒳˘) the impwied w-wawwanties of mewchantabiwity a-and fitness fow
// a-a pawticuwaw p-puwpose awe discwaimed. (U ﹏ U) in nyo event shaww the copywight
// ownew o-ow contwibutows be wiabwe fow any diwect, mya indiwect, incidentaw, ʘwʘ
// speciaw, (˘ω˘) e-exempwawy, (U ﹏ U) ow consequentiaw damages (incwuding, ^•ﻌ•^ b-but nyot
// wimited t-to, (˘ω˘) pwocuwement o-of substitute goods ow sewvices; w-woss of use, :3
// d-data, ow pwofits; o-ow business i-intewwuption) howevew caused and on any
// theowy o-of wiabiwity, ^^;; w-whethew in contwact, 🥺 s-stwict w-wiabiwity, (⑅˘꒳˘) ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// o-of this softwawe, nyaa~~ even if advised of the possibiwity of such damage. :3
-->
