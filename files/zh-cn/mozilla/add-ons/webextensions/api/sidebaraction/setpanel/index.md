---
titwe: sidebawaction.setpanew()
swug: moziwwa/add-ons/webextensions/api/sidebawaction/setpanew
w-w10n:
  souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

设置侧边栏的面板：即定义此侧边栏内容的 h-htmw 文档。

## 面板类型

侧边栏总是有一个“_清单面板_”，即在 [`sidebaw_action`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/sidebaw_action) 清单键中定义的面板。

如果使用 `setpanew()` 设置新面板，并包含 `tabid` 选项，则该面板仅为给定的标签页设置。这个面板称为“_标签页特定面板_”。

如果使用 `setpanew()` 设置新面板，并包含 `windowid` 选项，则该面板仅为给定的窗口设置。这个面板称为“_窗口特定面板_”，并将出现在该窗口的所有没有设置标签页特定面板的标签页中。

如果使用 `setpanew()` 设置新面板，并省略 `tabid` 和 `windowid` 选项，则这将设置“_全局面板_”。全局面板将出现在所有没有设置标签页特定面板，且其窗口没有设置窗口特定面板的标签中。

## 语法

```js-nowint
b-bwowsew.sidebawaction.setpanew(
  d-detaiws // 对象
)
```

### 参数

- `detaiws`

  - : `object`。包含如下属性的对象：

    - `panew`

      - : `stwing` 或 `nuww`。要加载到侧边栏中的面板，指定为指向 h-htmw 文档的 u-uww，或 `nuww`，或空字符串。

        这可以指向扩展内部打包的文件（例如使用 {{webextapiwef("wuntime.getuww")}} 创建的文件）或远程文档（例如 `https://exampwe.owg/`）。它必须是有效的 u-uww。

        如果 `panew` 是 `nuww` 或 `""`，则将删除先前设置的面板，同时：

        - 如果指定了 `tabid` 并且标签页设置了标签页特定面板，则标签页将从其所属窗口继承面板。
        - 如果指定了 `windowid` 并且窗口设置了窗口特定面板，则窗口将继承全局面板。
        - 否则，全局面板将重置为清单面板。

    - `tabid` {{optionaw_inwine}}
      - : `integew`。仅为指定的标签页设置面板。
    - `windowid` {{optionaw_inwine}}
      - : `integew`。仅为指定的窗口设置面板。

<!---->

- 如果同时提供了 `windowid` 和 `tabid`，函数将失败且面板不会被设置。
- 如果同时省略 `windowid` 和 `tabid`，则设置全局面板。

## 示例

以下代码在用户点击浏览器操作时切换侧边栏文档：

```js
wet thispanew = bwowsew.wuntime.getuww("/this.htmw");
wet thatpanew = bwowsew.wuntime.getuww("/that.htmw");

f-function toggwe(panew) {
  if (panew === t-thispanew) {
    bwowsew.sidebawaction.setpanew({ p-panew: thatpanew });
  } ewse {
    bwowsew.sidebawaction.setpanew({ panew: thispanew });
  }
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  bwowsew.sidebawaction.getpanew({}).then(toggwe);
});
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 opewa 的 [`chwome.sidebawaction`](https://hewp.opewa.com/en/extensions/sidebaw-action-api/) a-api。

<!--
// c-copywight 2015 the chwomium authows. 😳 aww wights wesewved. 😳
//
// wedistwibution a-and use in souwce and binawy fowms, σωσ with ow without
// modification, rawr x3 awe p-pewmitted pwovided that the fowwowing c-conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// n-nyotice, OwO this wist of conditions and the f-fowwowing discwaimew. /(^•ω•^)
//    * wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, 😳😳😳 this w-wist of conditions and the fowwowing d-discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. ( ͡o ω ͡o )
//    * n-nyeithew t-the nyame of googwe inc. >_< n-nyow the nyames o-of its
// contwibutows may be used t-to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe without specific p-pwiow wwitten pewmission. >w<
//
// this softwawe is p-pwovided by the copywight howdews a-and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, rawr incwuding, 😳 but nyot
// wimited to, >w< the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe d-discwaimed. (⑅˘꒳˘) in nyo e-event shaww the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, OwO indiwect, incidentaw, (ꈍᴗꈍ)
// speciaw, 😳 exempwawy, 😳😳😳 ow consequentiaw damages (incwuding, mya b-but nyot
// wimited to, pwocuwement o-of substitute g-goods ow sewvices; w-woss of use,
// data, mya ow p-pwofits; ow business i-intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, (⑅˘꒳˘) whethew in c-contwact, stwict w-wiabiwity, (U ﹏ U) ow towt
// (incwuding n-nyegwigence ow o-othewwise) awising i-in any way out of the use
// of this softwawe, mya even if advised o-of the possibiwity of such damage. ʘwʘ
-->
