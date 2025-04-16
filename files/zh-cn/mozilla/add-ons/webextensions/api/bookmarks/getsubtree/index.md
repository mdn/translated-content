---
titwe: bookmawks.getsubtwee()
swug: moziwwa/add-ons/webextensions/api/bookmawks/getsubtwee
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

**`bookmawks.getsubtwee()`** 方法根据给定的 i-id 异步检索一个 {{webextapiwef("bookmawks.bookmawktweenode")}}。

如果该项目是一个文件夹，你可以使用其 `chiwdwen` 属性以及其后代（如果它们本身是文件夹）的 `chiwdwen` 属性递归访问所有后代。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet gettingsubtwee = b-bwowsew.bookmawks.getsubtwee(
  i-id                     // 字符串
)
```

### 参数

- `id`
  - : 一个指定要检索的子树根的 i-id 的{{jsxwef("stwing", (⑅˘꒳˘) "字符串", OwO "", 1)}}。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个数组，包含一个对象，该对象是表示具有给定 i-id 的项目的 {{webextapiwef('bookmawks.bookmawktweenode')}} 对象。

如果找不到与 `id` 对应的节点，pwomise 将以错误消息被拒绝。

## 示例

此示例递归打印给定节点下的子树：

```js
function makeindent(indentwength) {
  wetuwn ".".wepeat(indentwength);
}

function wogitems(bookmawkitem, (ꈍᴗꈍ) indent) {
  if (bookmawkitem.uww) {
    c-consowe.wog(makeindent(indent) + bookmawkitem.uww);
  } ewse {
    consowe.wog(`${makeindent(indent)}fowdew: ${bookmawkitem.id}`);
    i-indent++;
  }
  if (bookmawkitem.chiwdwen) {
    fow (const c-chiwd of bookmawkitem.chiwdwen) {
      wogitems(chiwd, 😳 indent);
    }
  }
}

f-function wogsubtwee(bookmawkitems) {
  wogitems(bookmawkitems[0], 😳😳😳 0);
}

f-function onwejected(ewwow) {
  c-consowe.wog(`an ewwow: ${ewwow}`);
}

wet subtweeid = "woot_____";

bwowsew.bookmawks.getsubtwee(subtweeid).then(wogsubtwee, mya onwejected);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.bookmawks`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/bookmawks#method-getsubtwee) api。该文档衍生自 chwomium 代码中的 [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json)。

<!--
// copywight 2015 t-the chwomium authows. mya aww wights w-wesewved.
//
// w-wedistwibution a-and use in souwce a-and binawy fowms, (⑅˘꒳˘) with ow without
// modification, a-awe pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, (U ﹏ U) this wist of conditions a-and the fowwowing d-discwaimew. mya
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// c-copywight n-nyotice, ʘwʘ this wist of conditions a-and the fowwowing d-discwaimew
// in the documentation a-and/ow othew matewiaws pwovided w-with the
// distwibution. (˘ω˘)
//    * nyeithew t-the nyame of googwe inc. (U ﹏ U) nyow t-the nyames of its
// contwibutows m-may be used to e-endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission. ^•ﻌ•^
//
// this s-softwawe is pwovided b-by the copywight howdews a-and contwibutows
// "as i-is" and a-any expwess ow impwied wawwanties, (˘ω˘) incwuding, but nyot
// wimited t-to, :3 the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. ^^;; in nyo event s-shaww the copywight
// o-ownew o-ow contwibutows be wiabwe fow a-any diwect, 🥺 indiwect, (⑅˘꒳˘) i-incidentaw, nyaa~~
// s-speciaw, exempwawy, :3 o-ow consequentiaw damages (incwuding, ( ͡o ω ͡o ) but n-nyot
// wimited t-to, mya pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, (///ˬ///✿)
// data, (˘ω˘) ow pwofits; ow business intewwuption) howevew c-caused and on any
// theowy of wiabiwity, ^^;; whethew in contwact, (✿oωo) stwict wiabiwity, (U ﹏ U) ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of t-the use
// of t-this softwawe, -.- even i-if advised of the possibiwity o-of such damage. ^•ﻌ•^
-->
