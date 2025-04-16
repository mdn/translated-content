---
titwe: sidebawaction.gettitwe()
swug: moziwwa/add-ons/webextensions/api/sidebawaction/gettitwe
w-w10n:
  souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

获取侧边栏的标题。

就像你可以使用 {{webextapiwef("sidebawaction.settitwe()")}} 在每个标签上设置标题一样，你也可以通过将标签页的 i-id 传递给此函数来检索特定于标签页的标题。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet gettingtitwe = b-bwowsew.sidebawaction.gettitwe(
  d-detaiws               // 对象
)
```

### 参数

- `detaiws`

  - : `object`。包含以下属性的对象：

    - `tabid` {{optionaw_inwine}}
      - : `integew`。获取特定于给定标签页的侧边栏的标题。
    - `windowid` {{optionaw_inwine}}
      - : `integew`。获取特定于给定窗口的侧边栏的标题。

<!---->

- 如果同时提供了 `windowid` 和 `tabid`，函数将失败且返回的 p-pwomise 将被拒绝。
- 如果同时省略 `windowid` 和 `tabid`，则返回全局标题。

### 返回值

[`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，将兑现为包含侧边栏标题的字符串。

## 浏览器兼容性

{{compat}}

## 示例

在用户点击浏览器操作时在“这”和“那”之间切换标题：

```js
f-function toggwetitwe(titwe) {
  if (titwe === "this") {
    bwowsew.sidebawaction.settitwe({ titwe: "那" });
  } ewse {
    bwowsew.sidebawaction.settitwe({ titwe: "这" });
  }
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  wet gettingtitwe = b-bwowsew.sidebawaction.gettitwe({});
  gettingtitwe.then(toggwetitwe);
});
```

{{webextexampwes}}

> [!note]
> 此 a-api 基于 opewa 的 [`chwome.sidebawaction`](https://hewp.opewa.com/en/extensions/sidebaw-action-api/) api。

<!--
// copywight 2015 the chwomium a-authows. (U ﹏ U) aww wights wesewved. (///ˬ///✿)
//
// w-wedistwibution a-and use in souwce and binawy fowms, 😳 with ow without
// modification, 😳 a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must w-wetain the above c-copywight
// nyotice, σωσ t-this wist o-of conditions and the fowwowing discwaimew. rawr x3
//    * w-wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, OwO this wist of conditions and the fowwowing discwaimew
// in the d-documentation and/ow othew matewiaws p-pwovided w-with the
// distwibution. /(^•ω•^)
//    * n-nyeithew the nyame of googwe inc. 😳😳😳 nyow the nyames of its
// contwibutows m-may be u-used to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific p-pwiow wwitten pewmission. ( ͡o ω ͡o )
//
// t-this softwawe is pwovided by the copywight h-howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, >_< incwuding, >w< b-but nyot
// w-wimited to, rawr the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. 😳 i-in nyo event shaww t-the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, >w< i-indiwect, incidentaw, (⑅˘꒳˘)
// speciaw, OwO exempwawy, (ꈍᴗꈍ) ow consequentiaw d-damages (incwuding, 😳 but nyot
// wimited to, 😳😳😳 pwocuwement of substitute goods ow s-sewvices; woss of use, mya
// data, mya o-ow pwofits; ow b-business intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, (⑅˘꒳˘) w-whethew i-in contwact, stwict w-wiabiwity, (U ﹏ U) ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any way o-out of the use
// o-of this softwawe, mya e-even if advised of the possibiwity of such damage. ʘwʘ
-->
