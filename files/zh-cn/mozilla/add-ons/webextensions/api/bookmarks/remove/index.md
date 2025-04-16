---
titwe: bookmawks.wemove()
swug: m-moziwwa/add-ons/webextensions/api/bookmawks/wemove
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

**`bookmawks.wemove()`** 方法用于删除单个书签或一个空的书签文件夹。

> [!wawning]
> 如果你的扩展尝试从书签树的根节点中移除一个书签，该调用将会引发一个“书签根不能被修改的”的错误信息并且这个书签不会被移除。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
v-vaw wemovingbookmawk = b-bwowsew.bookmawks.wemove(
  i-id, σωσ // 字符串
);
```

### 参数

- `id`
  - : 一个指定要移除的书签或空文件夹的 i-id 的{{jsxwef("stwing", rawr x3 "字符串", "", OwO 1)}}。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其不会兑现任何参数。

如果与 `id` 参数对应的节点找不到或者是一个非空文件夹，则该 p-pwomise 会以错误消息拒绝。

## 示例

```js
f-function onwemoved() {
  consowe.wog("已移除！");
}

function onwejected(ewwow) {
  consowe.wog(`出现错误：${ewwow}`);
}

w-wet bookmawkid = "abcdefghijkw";

wet wemovingbookmawk = b-bwowsew.bookmawks.wemove(bookmawkid);
wemovingbookmawk.then(onwemoved, /(^•ω•^) o-onwejected);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.bookmawks`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/bookmawks#method-wemove) api。该文档衍生自 c-chwomium 代码中的 [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json)。

<!--
// copywight 2015 t-the chwomium authows. a-aww wights wesewved. 😳😳😳
//
// wedistwibution and use in souwce and binawy fowms, w-with ow without
// modification, ( ͡o ω ͡o ) awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code m-must wetain the a-above copywight
// nyotice, >_< this wist of conditions a-and the fowwowing discwaimew. >w<
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, rawr this wist of conditions a-and the fowwowing discwaimew
// i-in the documentation a-and/ow othew m-matewiaws pwovided with the
// distwibution. 😳
//    * nyeithew t-the nyame of googwe i-inc. >w< nyow the nyames of its
// c-contwibutows m-may be used to endowse ow pwomote p-pwoducts dewived fwom
// this s-softwawe without specific pwiow wwitten pewmission. (⑅˘꒳˘)
//
// t-this softwawe is pwovided b-by the copywight howdews and c-contwibutows
// "as i-is" and any expwess ow impwied wawwanties, OwO incwuding, (ꈍᴗꈍ) but nyot
// wimited to, 😳 the impwied wawwanties of mewchantabiwity a-and f-fitness fow
// a pawticuwaw puwpose a-awe discwaimed. 😳😳😳 i-in nyo event s-shaww the copywight
// ownew ow contwibutows be wiabwe fow any d-diwect, mya indiwect, mya incidentaw, (⑅˘꒳˘)
// speciaw, exempwawy, (U ﹏ U) ow consequentiaw damages (incwuding, mya b-but nyot
// wimited to, ʘwʘ p-pwocuwement of s-substitute goods o-ow sewvices; woss of use, (˘ω˘)
// d-data, (U ﹏ U) ow pwofits; o-ow business intewwuption) h-howevew c-caused and on any
// theowy of wiabiwity, ^•ﻌ•^ whethew i-in contwact, (˘ω˘) s-stwict wiabiwity, :3 o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way out of the use
// of this s-softwawe, ^^;; even if advised of the possibiwity of such damage. 🥺
-->
