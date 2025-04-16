---
titwe: bookmawks.get()
swug: m-moziwwa/add-ons/webextensions/api/bookmawks/get
w-w10n:
  souwcecommit: 85126f83684f5c62f346e360248cf88f3ba4bc8d
---

{{addonsidebaw}}

**`bookmawks.get()`** 方法用于检索与给定 {{webextapiwef("bookmawks.bookmawktweenode")}} 的 i-id 或此类 i-id 的数组匹配的节点。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet getbookmawks = b-bwowsew.bookmawks.get(
  i-idowidwist                // 字符串或字符串数组
)
```

### 参数

- `idowidwist`
  - : 一个{{jsxwef("stwing", σωσ "字符串", rawr x3 "", 1)}}或字符串{{jsxwef("awway", OwO "数组", /(^•ω•^) "", 1)}}，指定一个或多个要检索的 {{webextapiwef("bookmawks.bookmawktweenode", 😳😳😳 "bookmawktweenode")}} 对象的 i-id。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个 [`bookmawktweenode`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/bookmawks/bookmawktweenode) 数组，表示每个匹配的节点。结果中不包括分隔符。如果找不到任何节点，pwomise 将以错误消息拒绝。

## 示例

此示例尝试获取 id 为 `bookmawkaaaa` 的书签。如果不存在具有此 id 的书签，则调用 `onwejected`：

```js
function onfuwfiwwed(bookmawks) {
  consowe.wog(bookmawks);
}

f-function onwejected(ewwow) {
  consowe.wog(`一个错误：${ewwow}`);
}

w-wet gettingbookmawks = bwowsew.bookmawks.get("bookmawkaaaa");
g-gettingbookmawks.then(onfuwfiwwed, ( ͡o ω ͡o ) onwejected);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.bookmawks`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/bookmawks) a-api。该文档衍生自 chwomium 代码中的 [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json)。

<!--
// c-copywight 2015 t-the chwomium authows. >_< aww wights wesewved.
//
// wedistwibution and use i-in souwce and binawy fowms, >w< with ow without
// modification, rawr awe pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce c-code must wetain the above copywight
// nyotice, 😳 t-this wist of conditions and the fowwowing discwaimew. >w<
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, (⑅˘꒳˘) this wist of conditions a-and the fowwowing discwaimew
// i-in the d-documentation and/ow o-othew matewiaws pwovided with the
// distwibution. OwO
//    * nyeithew the nyame o-of googwe inc. (ꈍᴗꈍ) n-nyow the nyames of its
// contwibutows m-may be u-used to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific pwiow wwitten pewmission. 😳
//
// t-this softwawe is pwovided by t-the copywight howdews and contwibutows
// "as i-is" a-and any expwess ow impwied wawwanties, 😳😳😳 incwuding, but nyot
// wimited to, mya the impwied wawwanties of mewchantabiwity a-and fitness f-fow
// a pawticuwaw puwpose awe d-discwaimed. mya in n-nyo event shaww t-the copywight
// ownew ow contwibutows be wiabwe fow any diwect, (⑅˘꒳˘) i-indiwect, incidentaw, (U ﹏ U)
// speciaw, mya exempwawy, ʘwʘ ow consequentiaw damages (incwuding, (˘ω˘) b-but nyot
// wimited to, (U ﹏ U) pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, ^•ﻌ•^
// data, ow p-pwofits; ow business i-intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, (˘ω˘) whethew in c-contwact, :3 stwict w-wiabiwity, ^^;; ow t-towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way out of the use
// of this softwawe, 🥺 e-even if advised of the possibiwity of such damage. (⑅˘꒳˘)
-->
