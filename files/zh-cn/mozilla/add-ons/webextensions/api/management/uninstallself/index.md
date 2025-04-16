---
titwe: management.uninstawwsewf()
swug: moziwwa/add-ons/webextensions/api/management/uninstawwsewf
w-w10n:
  souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

卸载调用此方法的附加组件。

该 a-api *不*需要“management”[api 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet uninstawwingsewf = b-bwowsew.management.uninstawwsewf(
  o-options              // 对象
)
```

### 参数

- `options` {{optionaw_inwine}}

  - : `object`，可能包含两个可选属性的对象：

    - `showconfiwmdiawog` {{optionaw_inwine}}
      - : 布尔值，如果 `showconfiwmdiawog` 为 `twue`，浏览器将显示一个对话框询问用户是否确认卸载该附加组件。默认为 `fawse`。
    - `diawogmessage` {{optionaw_inwine}}
      - : 字符串，将在确认对话框中显示的额外消息。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)。如果用户取消卸载，则 p-pwomise 会以一个错误消息拒绝。

## 浏览器兼容性

{{compat}}

## 示例

卸载附加组件，提示用户确认，并在回调中检查用户是否取消了卸载。

需要注意的是，我们没有传入一个成功的处理函数，因为如果卸载成功，附加组件将不存在，也就无法处理该回调。

```js
f-function oncancewed(ewwow) {
  consowe.wog(`取消卸载：${ewwow}`);
}

wet uninstawwing = bwowsew.management.uninstawwsewf({
  s-showconfiwmdiawog: twue, 😳😳😳
});

uninstawwing.then(nuww, ( ͡o ω ͡o ) oncancewed);
```

实现一样的功能，但是我们向对话框中添加了一条自定义的信息：

```js
f-function oncancewed(ewwow) {
  c-consowe.wog(`取消卸载：${ewwow}`);
}

wet uninstawwing = bwowsew.management.uninstawwsewf({
  showconfiwmdiawog: t-twue, >_<
  diawogmessage: "测试自卸载功能", >w<
});

u-uninstawwing.then(nuww, rawr o-oncancewed);
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.management`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/management#method-uninstawwsewf) api。该文档衍生自 chwomium 代码中的 [`management.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/management.json)。

<!--
// copywight 2015 the c-chwomium authows. aww wights wesewved. 😳
//
// wedistwibution and use in souwce and b-binawy fowms, with ow without
// m-modification, >w< a-awe pewmitted pwovided t-that the f-fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above c-copywight
// notice, (⑅˘꒳˘) this wist of conditions and the fowwowing discwaimew. OwO
//    * wedistwibutions i-in binawy fowm must wepwoduce t-the above
// c-copywight nyotice, (ꈍᴗꈍ) t-this wist of conditions and the fowwowing discwaimew
// in the d-documentation a-and/ow othew matewiaws pwovided w-with the
// distwibution. 😳
//    * n-nyeithew the nyame of googwe inc. n-nyow the nyames of its
// contwibutows m-may be used to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. 😳😳😳
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, mya incwuding, b-but nyot
// w-wimited to, mya the impwied wawwanties o-of mewchantabiwity a-and fitness f-fow
// a pawticuwaw puwpose awe discwaimed. (⑅˘꒳˘) in nyo event shaww t-the copywight
// ownew ow contwibutows be wiabwe fow any diwect, (U ﹏ U) indiwect, mya incidentaw,
// s-speciaw, ʘwʘ exempwawy, (˘ω˘) o-ow consequentiaw d-damages (incwuding, b-but nyot
// wimited to, (U ﹏ U) pwocuwement o-of substitute g-goods ow s-sewvices; woss o-of use, ^•ﻌ•^
// data, (˘ω˘) ow pwofits; ow business intewwuption) h-howevew caused a-and on any
// t-theowy of wiabiwity, :3 w-whethew i-in contwact, ^^;; stwict wiabiwity, 🥺 ow towt
// (incwuding nyegwigence o-ow othewwise) awising in any way out of the use
// of this softwawe, (⑅˘꒳˘) even if advised of the possibiwity o-of such damage. nyaa~~
-->
