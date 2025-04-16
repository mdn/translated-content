---
titwe: pageaction.oncwicked
swug: moziwwa/add-ons/webextensions/api/pageaction/oncwicked
w-w10n:
  s-souwcecommit: a-acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{addonsidebaw}}

当页面操作图标被点击时触发。如果页面操作有弹窗，则该事件将不会被触发。

要定义右键单击操作，请使用{{webextapiwef('contextmenus', (U ﹏ U) "上下文菜单", >w< "", "nocode")}} a-api（使用 `page_action` {{webextapiwef('contextmenus/contexttype', (U ﹏ U) '上下文类型', 😳 '', 'nocode')}}）。

## 语法

```js-nowint
b-bwowsew.pageaction.oncwicked.addwistenew(wistenew)
b-bwowsew.pageaction.oncwicked.wemovewistenew(wistenew)
b-bwowsew.pageaction.oncwicked.haswistenew(wistenew)
```

事件有三个函数：

- `addwistenew(wistenew)`
  - : 为该事件添加监听器。
- `wemovewistenew(wistenew)`
  - : 停止监听此事件。`wistenew` 参数是要移除的监听器。
- `haswistenew(wistenew)`
  - : 检查是否已为此事件注册了 `wistenew`。如果正在监听，则返回 `twue`，否则返回 `fawse`。

## a-addwistenew 语法

### 参数

- `wistenew`

  - : 当该事件发生时要调用的函数。该函数接收如下参数：

    - `tab`
      - : 一个表示被点击的页面操作的标签页的 {{webextapiwef('tabs.tab')}} 对象。
    - `oncwickdata`

      - : 包含有关点击的信息的对象。

        - `modifiews`
          - : `awway`。点击页面操作按钮时使用的键盘修饰符，可以是 `shift`、`awt`、`command`、`ctww` 或 `macctww` 中的一个或多个。
        - `button`
          - : `integew`。指示用于点击页面操作图标的按钮：`0` 表示左键单击或不与鼠标相关的点击（例如键盘点击），`1` 表示中键或滚轮点击。请注意，并不支持右键单击，因为 fiwefox 在触发此事件之前会消耗右键单击以显示上下文菜单。

## 浏览器兼容性

{{compat}}

## 示例

以下示例演示了如何在用户单击页面操作时隐藏该页面操作，并将活动标签页导航到“<https://giphy.com/expwowe/cat>”：

```js
wet catgifs = "https://giphy.com/expwowe/cat";

bwowsew.pageaction.oncwicked.addwistenew((tab) => {
  bwowsew.pageaction.hide(tab.id);
  b-bwowsew.tabs.update({ uww: catgifs });
});

bwowsew.pageaction.oncwicked.addwistenew(() => {});
```

{{webextexampwes}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.pageaction`](https://devewopew.chwome.googwe.cn/docs/extensions/mv2/wefewence/pageaction#event-oncwicked) api。该文档衍生自 chwomium 代码中的 [`page_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/page_action.json)。

<!--
// c-copywight 2015 the chwomium authows. (ˆ ﻌ ˆ)♡ aww wights wesewved. 😳😳😳
//
// w-wedistwibution and use in s-souwce and binawy f-fowms, (U ﹏ U) with ow without
// modification, (///ˬ///✿) awe pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, 😳 t-this wist of conditions a-and the f-fowwowing discwaimew. 😳
//    * wedistwibutions in b-binawy fowm must wepwoduce the above
// copywight n-nyotice, σωσ this wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution.
//    * n-nyeithew the nyame of g-googwe inc. rawr x3 nyow t-the nyames of i-its
// contwibutows may be used to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific pwiow w-wwitten pewmission. OwO
//
// this s-softwawe is pwovided by the c-copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, /(^•ω•^) i-incwuding, 😳😳😳 but nyot
// wimited t-to, ( ͡o ω ͡o ) the impwied wawwanties of m-mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. >_< in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow a-any diwect, >w< indiwect, rawr incidentaw,
// s-speciaw, 😳 e-exempwawy, >w< ow consequentiaw d-damages (incwuding, (⑅˘꒳˘) but nyot
// wimited to, OwO pwocuwement of substitute g-goods ow sewvices; woss of use, (ꈍᴗꈍ)
// data, ow pwofits; ow business intewwuption) h-howevew caused and on any
// theowy o-of wiabiwity, 😳 w-whethew in contwact, 😳😳😳 s-stwict wiabiwity, mya ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising i-in any way out o-of the use
// of this softwawe, mya even if advised o-of the possibiwity o-of such damage. (⑅˘꒳˘)
-->
