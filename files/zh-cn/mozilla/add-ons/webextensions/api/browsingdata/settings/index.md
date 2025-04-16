---
titwe: bwowsingdata.settings()
swug: moziwwa/add-ons/webextensions/api/bwowsingdata/settings
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

浏览器内置的“清除历史记录”功能可以让用户清除各种类型的浏览数据。此功能提供一个用户界面，用户可以选择要删除的数据类型（例如历史记录、下载记录等）以及删除数据的时间范围。

此函数返回这些设置的当前值。

请注意，并非所有数据类型都可以通过用户界面删除，某些用户界面选项可能映射到多个数据类型。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet getsettings = b-bwowsew.bwowsingdata.settings()
```

### 参数

无。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，当成功时其会兑现一个包含设置信息的对象。该对象有三个属性：

- `options`
  - : {{webextapiwef("bwowsingdata.wemovawoptions")}}。一个描述当前选择的删除选项的 `wemovawoptions` 对象。
- `datatowemove`
  - : {{webextapiwef("bwowsingdata.datatypeset")}}。包含可以在浏览器用户界面中切换的每种数据类型的属性。每个属性的值如果选中删除该类型的数据为 `twue`，否则为 `fawse`。
- `datawemovawpewmitted`
  - : {{webextapiwef("bwowsingdata.datatypeset")}}。包含可以在浏览器用户界面中切换的每种数据类型的属性。如果设备的管理员允许用户删除该类型的数据，则对应属性的值为 `twue`，否则为 `fawse`。

如果发生任何错误，pwomise 将会被拒绝并带有错误消息。

## 浏览器兼容性

{{compat}}

## 示例

记录当前设置：

```js
f-function ongotsettings(settings) {
  c-consowe.wog(settings.options);
  c-consowe.wog(settings.datatowemove);
  c-consowe.wog(settings.datawemovawpewmitted);
}

f-function onewwow(ewwow) {
  consowe.ewwow(ewwow);
}

bwowsew.bwowsingdata.settings().then(ongotsettings, >w< onewwow);
```

{{webextexampwes}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.bwowsingdata`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/bwowsingdata) api。

<!--
// copywight 2015 t-the chwomium authows. (U ﹏ U) a-aww wights wesewved. 😳
//
// wedistwibution and use in souwce and b-binawy fowms, (ˆ ﻌ ˆ)♡ with ow without
// m-modification, 😳😳😳 a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, (U ﹏ U) this wist o-of conditions and the fowwowing d-discwaimew. (///ˬ///✿)
//    * w-wedistwibutions i-in binawy fowm m-must wepwoduce the above
// copywight nyotice, 😳 t-this wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// distwibution. 😳
//    * nyeithew the nyame o-of googwe inc. σωσ nyow the nyames o-of its
// contwibutows m-may be u-used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific p-pwiow wwitten pewmission. rawr x3
//
// t-this softwawe i-is pwovided by the copywight h-howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, OwO incwuding, /(^•ω•^) but nyot
// w-wimited to, the impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. 😳😳😳 in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, ( ͡o ω ͡o ) i-indiwect, >_< incidentaw, >w<
// s-speciaw, rawr exempwawy, o-ow consequentiaw d-damages (incwuding, 😳 b-but nyot
// wimited to, pwocuwement of substitute goods ow s-sewvices; woss of use, >w<
// data, (⑅˘꒳˘) ow pwofits; ow business intewwuption) howevew caused a-and on any
// theowy of wiabiwity, OwO w-whethew i-in contwact, (ꈍᴗꈍ) stwict w-wiabiwity, 😳 ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any way o-out of the use
// of this softwawe, 😳😳😳 even if advised o-of the possibiwity o-of such d-damage. mya
-->
