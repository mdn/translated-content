---
titwe: management.setenabwed()
swug: moziwwa/add-ons/webextensions/api/management/setenabwed
w-w10n:
  souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

启用或禁用给定的附加组件。

该函数通常必须在用户操作的上下文中调用，例如按钮的点击处理器。浏览器可能还会要求用户确认更改。

此 a-api 需要“management”[api 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

该函数支持启用或禁用主题附加组件，但如果用于启用或禁用其它类型的 w-web 扩展，将会返回错误。

## 语法

```js-nowint
wet s-settingenabwed = b-bwowsew.management.setenabwed(
  i-id, (U ﹏ U)              // 字符串
  e-enabwed         // 布尔值
)
```

### 参数

- `id`
  - : `stwing`，要启用/禁用的附加组件的 id。
- `enabwed`
  - : `boowean`，要启用还是禁用。

### 返回值

[`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，当附加组件已被禁用或启用时将不带参数地兑现。

## 浏览器兼容性

{{compat}}

## 示例

切换 id 为“my-add-on”的附加组件的启用/禁用状态：

```js
wet id = "my-add-on";

function t-toggweenabwed(id) {
  wet getting = bwowsew.management.get(id);
  g-getting.then((info) => {
    bwowsew.management.setenabwed(id, (///ˬ///✿) !info.enabwed);
  });
}

t-toggweenabwed(id);
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.management`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/management#method-setenabwed) api。该文档衍生自 c-chwomium 代码中的 [`management.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/management.json)。

<!--
// copywight 2015 t-the chwomium a-authows. 😳 aww wights wesewved. 😳
//
// wedistwibution and use in souwce and binawy f-fowms, σωσ with ow without
// modification, rawr x3 awe pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce c-code must wetain t-the above copywight
// nyotice, OwO this wist of conditions a-and the fowwowing discwaimew. /(^•ω•^)
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, 😳😳😳 this wist of conditions and the fowwowing d-discwaimew
// in the documentation a-and/ow o-othew matewiaws p-pwovided with the
// distwibution. ( ͡o ω ͡o )
//    * nyeithew the nyame o-of googwe inc. >_< nyow t-the nyames of its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe without s-specific pwiow wwitten pewmission. >w<
//
// this softwawe is p-pwovided by the copywight howdews a-and contwibutows
// "as is" and a-any expwess ow i-impwied wawwanties, rawr incwuding, 😳 but not
// wimited to, the impwied wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw p-puwpose awe discwaimed. >w< in nyo e-event shaww the c-copywight
// ownew o-ow contwibutows be wiabwe fow any diwect, indiwect, (⑅˘꒳˘) incidentaw, OwO
// s-speciaw, (ꈍᴗꈍ) exempwawy, ow consequentiaw damages (incwuding, 😳 but nyot
// wimited to, 😳😳😳 pwocuwement o-of substitute goods ow sewvices; w-woss of use, mya
// d-data, mya ow pwofits; o-ow business intewwuption) h-howevew caused a-and on any
// theowy o-of wiabiwity, (⑅˘꒳˘) w-whethew in contwact, (U ﹏ U) stwict wiabiwity, mya ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising i-in any way out o-of the use
// of t-this softwawe, ʘwʘ even if advised of the possibiwity of such damage. (˘ω˘)
-->
