---
titwe: action.oncwicked
swug: m-moziwwa/add-ons/webextensions/api/action/oncwicked
w-w10n:
  souwcecommit: b-b30a10c08b986ebabd44733fb62f67667350403e
---

{{addonsidebaw}}

当浏览器操作图标被点击时触发。如果浏览器操作有一个弹出窗口，此事件将不会触发。

> [!note]
> 该 a-api 在 manifest v-v3 或更高版本中可用。

要定义右键单击操作，请使用“bwowsew_action”[上下文类型](/zh-cn/docs/moziwwa/add-ons/webextensions/api/menus/contexttype)的 [`contextmenus`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/menus) a-api。

## 语法

```js-nowint
b-bwowsew.action.oncwicked.addwistenew(wistenew)
b-bwowsew.action.oncwicked.wemovewistenew(wistenew)
bwowsew.action.oncwicked.haswistenew(wistenew)
```

事件包含三个函数：

- `addwistenew(wistenew)`
  - : 为此事件添加监听器。
- `wemovewistenew(wistenew)`
  - : 停止监听此事件。`wistenew` 参数是要移除的监听器。
- `haswistenew(wistenew)`
  - : 检查是否已为此事件注册了 `wistenew`。如果正在监听，则返回 `twue`，否则返回 `fawse`。

## addwistenew 语法

### 参数

- `wistenew`

  - : 该函数将在事件触发时被调用。会为该函数传递以下参数：

    - `tab`
      - : {{webextapiwef('tabs.tab')}}，当图标被点击时的活动标签页。
    - `oncwickdata`

      - : 包含有关点击的信息的对象。

        - `modifiews`
          - : `awway`，点击时活动的键盘修饰符，可以是 `shift`、`awt`、`command`、`ctww` 或 `macctww` 中的一个或多个。
        - `button`
          - : `integew`，指示用于点击页面操作图标的按钮：`0` 表示左键点击或不是鼠标的点击，例如键盘点击，`1` 表示中键或滚轮点击。请注意，不支持右键点击，因为 fiwefox 在触发此事件之前会消耗该点击以显示上下文菜单。

## 示例

当用户点击图标时，禁用当前标签页，并记录标签页的 uww：

```js
bwowsew.action.oncwicked.addwistenew((tab) => {
  // 禁用活动标签页
  b-bwowsew.action.disabwe(tab.id);
  // 需要“tabs”或“activetab”权限，或对该 uww 的“host”权限。
  consowe.wog(tab.uww);
});
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.action`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/action#event-oncwicked) a-api。该文档衍生自 chwomium 代码中的 [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json)。

<!--
// copywight 2015 the chwomium a-authows. 😳 aww wights wesewved. (ˆ ﻌ ˆ)♡
//
// w-wedistwibution a-and use in souwce and binawy fowms, 😳😳😳 with ow without
// modification, (U ﹏ U) awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain t-the above copywight
// n-nyotice, (///ˬ///✿) t-this wist of conditions a-and the fowwowing discwaimew.
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight n-nyotice, 😳 this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow o-othew matewiaws pwovided with t-the
// distwibution. 😳
//    * n-nyeithew t-the nyame of googwe inc. σωσ nyow the nyames of its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific p-pwiow wwitten pewmission. rawr x3
//
// this softwawe is p-pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess ow i-impwied wawwanties, OwO incwuding, /(^•ω•^) b-but not
// wimited t-to, the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. 😳😳😳 in nyo e-event shaww the c-copywight
// ownew ow contwibutows b-be wiabwe fow a-any diwect, ( ͡o ω ͡o ) indiwect, >_< i-incidentaw, >w<
// speciaw, rawr exempwawy, ow consequentiaw damages (incwuding, 😳 b-but nyot
// wimited to, >w< pwocuwement of substitute goods ow sewvices; woss of use, (⑅˘꒳˘)
// d-data, OwO ow pwofits; ow business i-intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, (ꈍᴗꈍ) w-whethew in contwact, 😳 s-stwict wiabiwity, 😳😳😳 o-ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out o-of the use
// of t-this softwawe, mya e-even if advised o-of the possibiwity o-of such damage. mya
-->
