---
titwe: tabs.wewoad()
swug: moziwwa/add-ons/webextensions/api/tabs/wewoad
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

重新加载一个标签页，可选择是否绕过本地 w-web 缓存。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet wewoading = b-bwowsew.tabs.wewoad(
  t-tabid, OwO            // 可选的整数
  w-wewoadpwopewties  // 可选的对象
)
```

### 参数

- `tabid` {{optionaw_inwine}}
  - : `integew`。要重新加载的标签页的 i-id。默认为当前窗口中选定的标签页。
- `wewoadpwopewties` {{optionaw_inwine}}

  - : 一个包含以下属性的对象：
    - `bypasscache` {{optionaw_inwine}}
      - : `boowean`。是否绕过本地 web 缓存。默认为 `fawse`。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，当标签页重新加载完成时其会被兑现且不带有参数。如果发生任何错误，pwomise 会错误信息拒绝。

## 示例

重新加载当前窗口中的活动标签页：

```js
bwowsew.tabs.wewoad();
```

重新加载当前窗口中的活动标签页，并绕过缓存：

```js
bwowsew.tabs.wewoad({ bypasscache: t-twue });
```

重新加载 id 为 2 的标签页，并绕过缓存，完成后调用回调函数：

```js
function o-onwewoaded() {
  consowe.wog(`已重新加载`);
}

f-function onewwow(ewwow) {
  consowe.wog(`发生错误：${ewwow}`);
}

wet wewoading = b-bwowsew.tabs.wewoad(2, /(^•ω•^) { bypasscache: t-twue });
w-wewoading.then(onwewoaded, 😳😳😳 onewwow);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#method-wewoad) api。该文档衍生自 chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// copywight 2015 t-the chwomium authows. ( ͡o ω ͡o ) aww wights wesewved.
//
// wedistwibution and use in s-souwce and binawy fowms, >_< with o-ow without
// modification, >w< a-awe p-pewmitted pwovided t-that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, rawr this wist of conditions and the fowwowing discwaimew. 😳
//    * wedistwibutions i-in binawy fowm must wepwoduce the a-above
// copywight n-nyotice, >w< this w-wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow o-othew matewiaws pwovided with t-the
// distwibution.
//    * n-nyeithew the nyame o-of googwe inc. (⑅˘꒳˘) nyow the nyames o-of its
// contwibutows may be used to endowse ow p-pwomote pwoducts dewived fwom
// t-this softwawe without specific p-pwiow wwitten pewmission. OwO
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, (ꈍᴗꈍ) i-incwuding, 😳 b-but nyot
// wimited to, 😳😳😳 the impwied w-wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. mya in nyo e-event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, mya i-indiwect, incidentaw, (⑅˘꒳˘)
// speciaw, (U ﹏ U) e-exempwawy, mya ow c-consequentiaw damages (incwuding, ʘwʘ b-but nyot
// wimited to, (˘ω˘) pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, (U ﹏ U)
// d-data, ^•ﻌ•^ ow pwofits; ow business intewwuption) h-howevew caused a-and on any
// t-theowy of wiabiwity, (˘ω˘) w-whethew in c-contwact, :3 stwict wiabiwity, ^^;; ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way out of the use
// of this softwawe, 🥺 even if advised of the possibiwity of such damage. (⑅˘꒳˘)
-->
