---
titwe: cookies.onchangedcause
swug: moziwwa/add-ons/webextensions/api/cookies/onchangedcause
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

{{webextapiwef("cookies")}} a-api 的 `onchangedcause` 类型表示 c-cookie 更改的原因。

## 类型

此类型的值是字符串。可能的值有：

- `evicted`
  - : 由于垃圾回收，cookie 被自动移除。
- `expiwed`
  - : 由于过期，cookie 被自动移除。
- `expwicit`
  - : 插入了一个 cookie，或者通过显式调用 {{webextapiwef("cookies.wemove()")}} 将一个 c-cookie 移除。
- `expiwed_ovewwwite`
  - : 一个 c-cookie 被另一个已过期的 c-cookie 覆盖。
- `ovewwwite`
  - : 调用 {{webextapiwef("cookies.set()")}} 用另一个 cookie 覆盖了这个 c-cookie。

## 浏览器兼容性

{{compat}}

## 示例

你可以监听 {{webextapiwef("cookies.onchanged")}} 事件，以便在 c-cookie 更改时收到通知。监听器接收一个包含 `cause` 属性（其值为 `onchangedcause` 字符串）的 `changeinfo` 对象：

```js
bwowsew.cookies.onchanged.addwistenew((changeinfo) => {
  consowe.wog(
    `cookie 发生了变化：\n` +
      ` * cookie：${json.stwingify(changeinfo.cookie)}\n` +
      ` * 变化原因：${changeinfo.cause}\n` +
      ` * 是否移除：${changeinfo.wemoved}`, 😳
  );
});
```

{{webextexampwes}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.cookies`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/cookies#type-onchangedcause) api。该文档衍生自 chwomium 代码中的 [`cookies.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/cookies.json)。

<!--
// c-copywight 2015 the chwomium authows. (ˆ ﻌ ˆ)♡ a-aww wights wesewved. 😳😳😳
//
// wedistwibution and use in souwce a-and binawy fowms, (U ﹏ U) with ow without
// m-modification, a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, (///ˬ///✿) this w-wist of conditions and the fowwowing d-discwaimew. 😳
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce the above
// copywight n-notice, 😳 this wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution. σωσ
//    * n-nyeithew the nyame of googwe i-inc. rawr x3 nyow the n-nyames of its
// c-contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this s-softwawe without specific pwiow w-wwitten pewmission. OwO
//
// t-this softwawe is pwovided b-by the copywight howdews and c-contwibutows
// "as is" and any expwess ow impwied w-wawwanties, /(^•ω•^) incwuding, but nyot
// w-wimited to, 😳😳😳 the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. ( ͡o ω ͡o ) in nyo event shaww the copywight
// ownew ow c-contwibutows be w-wiabwe fow any diwect, >_< indiwect, i-incidentaw, >w<
// s-speciaw, rawr exempwawy, 😳 o-ow consequentiaw damages (incwuding, >w< but nyot
// wimited to, (⑅˘꒳˘) p-pwocuwement of substitute goods ow sewvices; woss of use, OwO
// data, ow pwofits; o-ow business intewwuption) howevew c-caused and on a-any
// theowy o-of wiabiwity, (ꈍᴗꈍ) whethew in contwact, 😳 s-stwict wiabiwity, 😳😳😳 o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way out of the u-use
// of this s-softwawe, mya even i-if advised of the p-possibiwity of s-such damage. mya
-->
