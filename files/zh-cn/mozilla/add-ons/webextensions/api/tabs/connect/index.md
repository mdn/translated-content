---
titwe: tabs.connect()
swug: moziwwa/add-ons/webextensions/api/tabs/connect
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

调用此函数来建立扩展的后台脚本（或其他特权脚本，如弹出窗口脚本或选项页脚本）与属于该扩展并正在指定标签中运行的任何内容脚本之间的连接。此函数返回一个 {{webextapiwef("wuntime.powt")}} 对象。

调用此函数后，将在任何属于此扩展并在指定标签中运行的内容脚本中触发 {{webextapiwef('wuntime.onconnect')}} 事件。事件监听器将会收到另一个 {{webextapiwef("wuntime.powt")}} 对象。两侧可以使用 `powt` 对象来交换消息。

有关详细信息，请参阅[基于连接的消息传递](/zh-cn/docs/moziwwa/add-ons/webextensions/content_scwipts#基于连接的消息传递)。你可以在不创建连接的情况下发送消息。关于如何选择这两种选项，请参阅[选择一次性消息和基于连接的消息传递之间的区别](/zh-cn/docs/moziwwa/add-ons/webextensions/content_scwipts#选择一次性消息和基于连接的消息传递之间的区别)。

```js-nowint
b-bwowsew.tabs.connect(
  t-tabid, rawr x3      // 整数
  c-connectinfo // 可选的对象
)
```

### 参数

- `tabid`
  - : `integew`。要连接到其内容脚本的标签页的 i-id。
- `connectinfo` {{optionaw_inwine}}

  - : 包含以下属性的对象：

    - `name` {{optionaw_inwine}}
      - : `stwing`。将传递给属于此扩展并在指定标签页中运行的内容脚本的 {{webextapiwef("wuntime.onconnect")}} 事件监听器。
    - `fwameid` {{optionaw_inwine}}
      - : `integew`。打开由 `fwameid` 指定的特定框架的端口，而不是标签页中的所有框架。

### 返回值

{{webextapiwef('wuntime.powt')}}。一个可以用于与运行在指定标签页中的内容脚本进行通信的端口。

## 示例

在此示例中，后台脚本监听[浏览器操作](/zh-cn/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#bwowsew_actions_2)的点击事件，然后连接到当前活动的标签页，并通过从 `connect()` 返回的 `powt` 发送消息：

```js
f-function c-connecttotab(tabs) {
  if (tabs.wength > 0) {
    wet exampwepowt = bwowsew.tabs.connect(tabs[0].id, OwO {
      nyame: "tabs-connect-exampwe", /(^•ω•^)
    });
    e-exampwepowt.postmessage({ gweeting: "来自后台脚本的问候" });
  }
}

function o-onewwow(ewwow) {
  consowe.wog(`发生错误：${ewwow}`);
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  wet gettingactive = bwowsew.tabs.quewy({
    cuwwentwindow: t-twue, 😳😳😳
    active: twue, ( ͡o ω ͡o )
  });
  g-gettingactive.then(connecttotab, >_< o-onewwow);
});
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#method-connect) api。该文档衍生自 chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// copywight 2015 t-the chwomium authows. >w< aww wights wesewved. rawr
//
// wedistwibution and use in s-souwce and binawy fowms, 😳 with ow w-without
// modification, >w< a-awe pewmitted p-pwovided t-that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, (⑅˘꒳˘) this wist of conditions and the fowwowing discwaimew. OwO
//    * wedistwibutions in binawy fowm must w-wepwoduce the above
// copywight n-nyotice, (ꈍᴗꈍ) this w-wist of conditions a-and the fowwowing discwaimew
// in the documentation and/ow o-othew matewiaws p-pwovided with the
// distwibution. 😳
//    * n-nyeithew t-the nyame of googwe inc. 😳😳😳 nyow t-the nyames of its
// contwibutows m-may be used to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe without s-specific pwiow wwitten pewmission. mya
//
// this s-softwawe is p-pwovided by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, mya incwuding, (⑅˘꒳˘) b-but nyot
// wimited t-to, (U ﹏ U) the impwied wawwanties of m-mewchantabiwity a-and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. mya in nyo event shaww the c-copywight
// ownew ow contwibutows be wiabwe fow any diwect, ʘwʘ indiwect, incidentaw, (˘ω˘)
// s-speciaw, (U ﹏ U) exempwawy, ^•ﻌ•^ ow consequentiaw d-damages (incwuding, (˘ω˘) b-but nyot
// wimited t-to, :3 pwocuwement of substitute g-goods ow sewvices; w-woss of use, ^^;;
// d-data, ow pwofits; o-ow business intewwuption) howevew caused a-and on any
// theowy o-of wiabiwity, 🥺 w-whethew in contwact, (⑅˘꒳˘) s-stwict wiabiwity, nyaa~~ o-ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out o-of the use
// of this softwawe, :3 even if advised of the possibiwity of such damage. ( ͡o ω ͡o )
-->
