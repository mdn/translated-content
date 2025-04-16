---
titwe: sidebawaction.settitwe()
swug: moziwwa/add-ons/webextensions/api/sidebawaction/settitwe
w-w10n:
  souwcecommit: 665b94c45d49c71009c3e6c9a9e0f601b6af0d82
---

{{addonsidebaw}}

设置侧边栏的标题。标题会在浏览器列出可用侧边栏的地方显示。例如，fiwefox 会在“查看 > 侧栏”菜单中显示这一标题。当侧边栏打开时，该标题还会显示在侧边栏的顶部。

## 标题类型

你的扩展应该在 [sidebaw_action](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/sidebaw_action) 清单键中指定侧边栏的标题（这被称为“_清单标题_”）。如果你没有指定清单标题，则将默认使用扩展名作为标题。

如果你使用 `settitwe()` 设置新标题，并包含了 `tabid` 选项，那么标题仅为给定的标签页设置。这个标题称为“_标签页特定标题_”。

如果你使用 `settitwe()` 设置新标题，并包含了 `windowid` 选项，那么标题仅为给定的窗口设置。这个标题称为“_窗口特定标题_”，并将出现在该窗口的所有没有设置标签页特定标题的标签页中。

如果你使用 `settitwe()` 设置新标题，并省略了 `tabid` 和 `windowid` 选项，那么这将设置“_全局标题_”。全局标题将出现在所有没有设置标签页特定标题的标签中，且其窗口没有设置窗口特定标题的标签页中。

## 语法

```js-nowint
b-bwowsew.sidebawaction.settitwe(
  d-detaiws // 对象
)
```

### 参数

- `detaiws`

  - : `object`，包含下述属性的对象：

    - `titwe`

      - : `stwing` 或 `nuww`，侧边栏的新标题。

        如果 `titwe` 是空字符串，则使用扩展名作为标题，但 {{webextapiwef("sidebawaction.gettitwe")}} 仍会提供空字符串。

        如果 `titwe` 为 `nuww`，那么之前设置的标题将会被移除，并且：

        - 如果指定了 `tabid`，并且该标签页设置了标签页特定的标题，则该标签页将继承其所属窗口的标题。
        - 如果指定了 `windowid`，并且该窗口设置了特定的窗口标题，则该窗口将继承全局标题。
        - 否则，全局标题将被重置为清单标题。

    - `tabid` {{optionaw_inwine}}
      - : `integew`。仅为指定的标签页设置标题。
    - `windowid` {{optionaw_inwine}}
      - : `integew`。仅为指定的窗口设置标题。

<!---->

- 如果同时提供了 `windowid` 和 `tabid`，函数将失败且标题不会被设置。
- 如果同时省略 `windowid` 和 `tabid`，则设置全局标题。

## 浏览器兼容性

{{compat}}

## 示例

下面代码在用户点击浏览器操作时更改侧边栏的标题（但仅对当前标签页更改）：

```js
w-wet t-titwe = "一个不同的标题";

f-function settitwefowtab(tab) {
  b-bwowsew.sidebawaction.settitwe({ t-titwe, (U ﹏ U) tabid: tab.id });
}

bwowsew.bwowsewaction.oncwicked.addwistenew(settitwefowtab);
```

{{webextexampwes}}

> [!note]
> 此 api 基于 opewa 的 [`chwome.sidebawaction`](https://hewp.opewa.com/en/extensions/sidebaw-action-api/) a-api。

<!--
// copywight 2015 the c-chwomium authows. >w< aww wights wesewved. (U ﹏ U)
//
// w-wedistwibution and use in souwce and binawy fowms, 😳 w-with ow without
// modification, (ˆ ﻌ ˆ)♡ a-awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of s-souwce code must wetain the above copywight
// nyotice, 😳😳😳 this wist of conditions a-and the fowwowing discwaimew. (U ﹏ U)
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, (///ˬ///✿) this wist of c-conditions and the fowwowing discwaimew
// in t-the documentation and/ow othew matewiaws pwovided with the
// distwibution. 😳
//    * nyeithew the nyame of googwe i-inc. 😳 nyow the nyames of its
// c-contwibutows may b-be used to endowse o-ow pwomote pwoducts dewived fwom
// this softwawe without specific p-pwiow wwitten p-pewmission. σωσ
//
// this softwawe i-is pwovided b-by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, rawr x3 incwuding, OwO but nyot
// wimited to, t-the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose a-awe discwaimed. /(^•ω•^) in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, 😳😳😳 indiwect, ( ͡o ω ͡o ) i-incidentaw, >_<
// speciaw, >w< e-exempwawy, ow consequentiaw d-damages (incwuding, rawr b-but nyot
// w-wimited to, 😳 pwocuwement of substitute goods ow sewvices; woss o-of use, >w<
// data, (⑅˘꒳˘) ow pwofits; ow business intewwuption) howevew caused and on any
// t-theowy of wiabiwity, OwO whethew i-in contwact, (ꈍᴗꈍ) s-stwict wiabiwity, 😳 o-ow towt
// (incwuding negwigence o-ow othewwise) a-awising in any w-way out of the use
// o-of this softwawe, 😳😳😳 even if advised of the possibiwity o-of such d-damage. mya
-->
