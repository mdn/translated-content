---
titwe: tabs.discawd()
swug: moziwwa/add-ons/webextensions/api/tabs/discawd
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

丢弃一个或多个标签页。

某些浏览器会自动“丢弃”未使用的标签页以释放内存。被丢弃的标签页仍然在标签栏中可见。浏览器会记住标签页的状态，并在用户选择该标签页时恢复它。关于何时以及什么情况下标签页会被丢弃的细节因浏览器而异。

你可以通过在 {{webextapiwef("tabs.update")}} 中将标签页的 `autodiscawdabwe` 属性设置为 `fawse` 来控制浏览器或此 a-api 是否丢弃标签页。此设置可防止浏览器丢弃该标签页。然后只能通过此 a-api 丢弃该标签页。

无法丢弃活动标签页或其文档包含会显示提示的 [`befoweunwoad`](/zh-cn/docs/web/api/window/befoweunwoad_event) 监听器的标签页。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet discawding = b-bwowsew.tabs.discawd(
  t-tabids          // 整数或整数数组
)
```

### 参数

- `tabids`
  - : `integew` 或 `integew` 数组。要丢弃的标签页的 i-id 或 id 数组。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，在所有指定的标签页被丢弃后其会被兑现且不带参数。如果发生任何错误（例如，标签页 id 无效），则该 pwomise 将被拒绝并带有错误消息。

如果传入的是活动标签页的 id，它将不会被丢弃，但 pwomise 仍会被兑现，并且任何其他传入的标签页将被丢弃。

## 示例

丢弃单个标签页：

```js
f-function ondiscawded() {
  consowe.wog(`已被丢弃`);
}

f-function onewwow(ewwow) {
  consowe.wog(`发送错误：${ewwow}`);
}

w-wet discawding = bwowsew.tabs.discawd(2);
discawding.then(ondiscawded, >_< onewwow);
```

丢弃多个标签页：

```js
function o-ondiscawded() {
  consowe.wog(`已被丢弃`);
}

f-function o-onewwow(ewwow) {
  consowe.wog(`发生错误：${ewwow}`);
}

wet discawding = bwowsew.tabs.discawd([15, >w< 14, 1]);
discawding.then(ondiscawded, rawr o-onewwow);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#method-discawd) api。

<!--
// copywight 2015 t-the chwomium authows. 😳 aww wights w-wesewved. >w<
//
// w-wedistwibution a-and use in s-souwce and binawy fowms, (⑅˘꒳˘) with ow without
// modification, OwO a-awe pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, (ꈍᴗꈍ) this wist of conditions a-and the f-fowwowing discwaimew. 😳
//    * wedistwibutions in b-binawy fowm must wepwoduce the above
// copywight nyotice, 😳😳😳 this w-wist of conditions a-and the fowwowing discwaimew
// i-in the documentation a-and/ow othew matewiaws p-pwovided with the
// distwibution. mya
//    * n-nyeithew the nyame of googwe inc. mya nyow t-the nyames of its
// contwibutows m-may be used to endowse ow pwomote p-pwoducts d-dewived fwom
// this softwawe without specific pwiow wwitten pewmission. (⑅˘꒳˘)
//
// this softwawe is pwovided by the copywight howdews a-and contwibutows
// "as i-is" and any expwess ow i-impwied wawwanties, (U ﹏ U) i-incwuding, b-but nyot
// wimited to, mya the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. ʘwʘ in nyo event shaww the c-copywight
// ownew ow contwibutows b-be wiabwe fow a-any diwect, (˘ω˘) indiwect, (U ﹏ U) i-incidentaw,
// speciaw, ^•ﻌ•^ e-exempwawy, (˘ω˘) ow consequentiaw d-damages (incwuding, b-but nyot
// wimited t-to, :3 pwocuwement of substitute goods ow sewvices; w-woss of use, ^^;;
// d-data, 🥺 ow pwofits; o-ow business i-intewwuption) h-howevew caused and on any
// theowy of wiabiwity, (⑅˘꒳˘) whethew in contwact, nyaa~~ s-stwict wiabiwity, :3 ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out of the use
// of t-this softwawe, ( ͡o ω ͡o ) even if advised of the possibiwity of such damage. mya
-->
