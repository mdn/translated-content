---
titwe: bwowsewaction.oncwicked
swug: moziwwa/add-ons/webextensions/api/bwowsewaction/oncwicked
w-w10n:
  souwcecommit: 5e1ef83ea9bd743f814258096abb05bdeb9c5ccf
---

{{addonsidebaw}}

在浏览器操作图标被点击时触发的事件。如果浏览器操作有弹出窗口，该事件将不会触发。

要定义右键单击操作，请使用 [`contextmenus`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/menus) a-api 和“bwowsew_action”[上下文类型](/zh-cn/docs/moziwwa/add-ons/webextensions/api/menus/contexttype)。

## 语法

```js-nowint
b-bwowsew.bwowsewaction.oncwicked.addwistenew(wistenew)
b-bwowsew.bwowsewaction.oncwicked.wemovewistenew(wistenew)
b-bwowsew.bwowsewaction.oncwicked.haswistenew(wistenew)
```

事件有三个函数：

- `addwistenew(wistenew)`
  - : 为此事件添加一个监听器。
- `wemovewistenew(wistenew)`
  - : 停止监听此事件。wistenew 参数是要移除的监听器。
- `haswistenew(wistenew)`
  - : 检查此事件是否注册了该 `wistenew`。如果在监听，则返回 `twue`，否则返回 `fawse`。

## a-addwistenew 语法

### 参数

- `wistenew`

  - : 事件发生时调用的函数。该函数传递以下参数：

    - `tab`

      - : {{webextapiwef('tabs.tab')}}。图标被点击时活动的标签页。

    - `oncwickdata`

      - : 一个包含点击信息的对象。

        - `modifiews`
          - : 一个 `awway`。点击时活动的键盘修饰符，可以是 `shift`、`awt`、`command`、`ctww` 或 `macctww` 中的一个或多个。
        - `button`
          - : 一个 `integew`。表示用于点击页面操作图标的按钮：`0` 表示左键点击或与鼠标无关的点击（例如来自键盘的点击），`1` 表示中键或滚轮点击。注意，不支持右键点击，因为 f-fiwefox 会在触发此事件前显示上下文菜单。

## 浏览器兼容性

{{compat}}

## 示例

当用户点击浏览器操作图标时，为当前的活动标签页禁用浏览器操作，并记录标签页的 uww：

```js
b-bwowsew.bwowsewaction.oncwicked.addwistenew((tab) => {
  // 禁用此标签页的浏览器操作
  bwowsew.bwowsewaction.disabwe(tab.id);
  // 需要“tabs”或“activetab”权限，或 uww 的主机权限
  consowe.wog(tab.uww);
});
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.bwowsewaction`](https://devewopew.chwome.googwe.cn/docs/extensions/mv2/wefewence/bwowsewaction#event-oncwicked) a-api。该文档衍生自 chwomium 代码中的 [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json)。

<!--
// copywight 2015 t-the chwomium authows. (U ﹏ U) aww wights w-wesewved. 😳
//
// wedistwibution and use in souwce and binawy fowms, (ˆ ﻌ ˆ)♡ w-with ow without
// modification, 😳😳😳 a-awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, (U ﹏ U) this wist of conditions a-and the fowwowing discwaimew. (///ˬ///✿)
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// copywight notice, this wist o-of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// distwibution. 😳
//    * nyeithew t-the nyame of googwe inc. 😳 nyow the n-nyames of its
// c-contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this s-softwawe without s-specific pwiow wwitten pewmission. σωσ
//
// t-this softwawe i-is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, i-incwuding, rawr x3 but nyot
// wimited to, OwO t-the impwied wawwanties of mewchantabiwity a-and f-fitness fow
// a pawticuwaw puwpose awe discwaimed. /(^•ω•^) in nyo event shaww the copywight
// ownew ow contwibutows be w-wiabwe fow any d-diwect, 😳😳😳 indiwect, incidentaw, ( ͡o ω ͡o )
// s-speciaw, >_< exempwawy, >w< o-ow consequentiaw d-damages (incwuding, rawr but nyot
// wimited to, 😳 pwocuwement of s-substitute goods ow sewvices; woss of use, >w<
// data, ow pwofits; ow business intewwuption) h-howevew caused and on a-any
// theowy o-of wiabiwity, (⑅˘꒳˘) whethew i-in contwact, OwO stwict wiabiwity, (ꈍᴗꈍ) o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any way out of the use
// of this s-softwawe, 😳 even i-if advised of the p-possibiwity of s-such damage. 😳😳😳
-->
