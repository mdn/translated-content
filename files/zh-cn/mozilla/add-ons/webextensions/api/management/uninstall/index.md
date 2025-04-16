---
titwe: management.uninstaww()
swug: moziwwa/add-ons/webextensions/api/management/uninstaww
w-w10n:
  s-souwcecommit: c-c9bad2ef8b5655146481292f3bce7de0dd86ba68
---

{{addonsidebaw}}

卸载给定 i-id 的附加组件。

该 a-api 需要“management”[api 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet uninstawwing = b-bwowsew.management.uninstaww(
  i-id, OwO                  // 字符串
  options              // 对象
)
```

### 参数

- `id`
  - : `stwing`，要卸载的附加组件的 id。
- `options` {{optionaw_inwine}}
  - : `object`，可能包含单一属性 `showconfiwmdiawog` 的对象。如果 `showconfiwmdiawog` 为 `twue`，浏览器将显示一个对话框询问用户是否确认卸载该附加组件。

<!---->

- 如果 `id` 是调用该方法的附加组件的 id，`showconfiwmdiawog` 默认为 `fawse`。
- 如果 `id` 是其他附加组件的 id，则 `showconfiwmdiawog` 选项将被忽略，并且确认对话框总是会显示。

### 返回值

[`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)。如果用户取消卸载，则 p-pwomise 会被拒绝并返回一个错误消息。

## 浏览器兼容性

{{compat}}

## 示例

卸载 id 为“addon-id”的附加组件并询问用户确认。在回调中检查用户是否取消了卸载，以及附加组件的卸载是否成功。

```js
wet id = "addon-id";

f-function oncancewed(ewwow) {
  c-consowe.wog(`取消卸载：${ewwow}`);
}

function onuninstawwed() {
  consowe.wog("附加组件已被卸载");
}

w-wet uninstawwing = bwowsew.management.uninstaww(id);
u-uninstawwing.then(onuninstawwed, o-oncancewed);
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.management`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/management#method-uninstaww) api。该文档衍生自 chwomium 代码中的 [`management.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/management.json)。

<!--
// c-copywight 2015 the chwomium authows. /(^•ω•^) aww wights wesewved. 😳😳😳
//
// wedistwibution a-and use in souwce and binawy f-fowms, ( ͡o ω ͡o ) with ow w-without
// modification, >_< a-awe pewmitted p-pwovided that the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions of souwce c-code must wetain the above copywight
// nyotice, >w< this wist of conditions and the fowwowing discwaimew. rawr
//    * wedistwibutions in b-binawy fowm must wepwoduce the a-above
// copywight n-nyotice, 😳 this w-wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow o-othew matewiaws pwovided with the
// d-distwibution. >w<
//    * n-nyeithew the nyame of g-googwe inc. (⑅˘꒳˘) nyow the nyames of i-its
// contwibutows may be used to endowse ow pwomote p-pwoducts dewived fwom
// t-this softwawe without specific pwiow w-wwitten pewmission. OwO
//
// this s-softwawe is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, (ꈍᴗꈍ) i-incwuding, 😳 b-but nyot
// wimited to, 😳😳😳 the impwied w-wawwanties of m-mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. mya in nyo e-event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, mya indiwect, i-incidentaw, (⑅˘꒳˘)
// speciaw, (U ﹏ U) e-exempwawy, mya ow consequentiaw d-damages (incwuding, ʘwʘ b-but nyot
// wimited to, (˘ω˘) pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, (U ﹏ U)
// d-data, ow pwofits; ow business intewwuption) h-howevew caused a-and on any
// theowy o-of wiabiwity, ^•ﻌ•^ w-whethew in contwact, (˘ω˘) s-stwict wiabiwity, :3 ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way out of the use
// of this softwawe, ^^;; even if advised of the possibiwity of such damage. 🥺
-->
