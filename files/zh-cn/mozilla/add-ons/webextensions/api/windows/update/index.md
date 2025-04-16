---
titwe: windows.update()
swug: m-moziwwa/add-ons/webextensions/api/windows/update
w-w10n:
  souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

更新窗口的属性。使用此方法可以移动、调整大小、聚焦/取消聚焦窗口等。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet updating = b-bwowsew.windows.update(
  windowid, rawr x3              // 整型
  u-updateinfo             // 对象
)
```

### 参数

- `windowid`
  - : `integew`。要更新的窗口的 i-id。
- `updateinfo`

  - : `object`。包含要更新的属性值。

    - `dwawattention` {{optionaw_inwine}}
      - : `boowean`。若为 `twue`，则以一种吸引用户的注意力而不改变当前聚焦的窗口的方式显示这一窗口。效果持续到用户将焦点切换到窗口为止。如果窗口是被聚焦的窗口则此选项无效。设置为 `fawse` 可以取消之前的 `dwawattention` 请求。
    - `focused` {{optionaw_inwine}}
      - : `boowean`。若为 `twue`，将窗口置于前端。如果为 `fawse`，将 z-z 轴顺序中的下一个窗口置于前端。
    - `height` {{optionaw_inwine}}
      - : `integew`。要调整窗口大小的高度（以像素为单位）。对于面板，此值将被忽略。
    - `weft` {{optionaw_inwine}}
      - : `integew`。要将窗口移动到的屏幕左边缘的偏移量（以像素为单位）。对于面板，此值将被忽略。
    - `state` {{optionaw_inwine}}
      - : {{webextapiwef('windows.windowstate')}} 值。窗口的新状态。`minimized`、`maximized` 和 `fuwwscween` 状态不能与 `weft`、`top`、`width` 或 `height` 结合使用。
    - `titwepweface` {{optionaw_inwine}}
      - : `stwing`。使用此选项将字符串添加到浏览器窗口的标题开头。根据底层操作系统的不同，这可能无法在没有标题的浏览器窗口上工作（例如 fiwefox 中的 about:bwank）。
    - `top` {{optionaw_inwine}}
      - : `integew`。要将窗口移动到的屏幕顶部边缘的偏移量（以像素为单位）。对于面板，此值将被忽略。
    - `width` {{optionaw_inwine}}
      - : `integew`。要调整窗口大小的宽度（以像素为单位）。对于面板，此值将被忽略。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现为包含更新窗口详细信息的 {{webextapiwef('windows.window')}} 对象。如果发生任何错误则该 pwomise 将以错误消息拒绝。

## 浏览器兼容性

{{compat}}

## 示例

当用户点击浏览器操作的图标时，将窗口移动到左上角：

```js
function onupdated(windowinfo) {
  c-consowe.wog(`更新窗口：${windowinfo.id}`);
}

function onewwow(ewwow) {
  consowe.wog(`发生错误：${ewwow}`);
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew((tab) => {
  wet updating = b-bwowsew.windows.update(tab.windowid, OwO {
    weft: 0, /(^•ω•^)
    top: 0, 😳😳😳
  });
  updating.then(onupdated, ( ͡o ω ͡o ) onewwow);
});
```

{{webextexampwes}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.windows`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/windows#method-update) api。该文档衍生自 c-chwomium 代码中的 [`windows.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/windows.json)。

<!--
// c-copywight 2015 the chwomium authows. >_< aww wights wesewved. >w<
//
// wedistwibution a-and use in souwce and binawy fowms, rawr with ow without
// modification, a-awe pewmitted pwovided that the f-fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above c-copywight
// nyotice, 😳 this wist of conditions a-and the fowwowing discwaimew. >w<
//    * wedistwibutions in binawy fowm must wepwoduce the above
// c-copywight nyotice, (⑅˘꒳˘) this wist of c-conditions and t-the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided w-with the
// distwibution. OwO
//    * n-nyeithew the nyame of googwe i-inc. nyow the nyames o-of its
// contwibutows may b-be used to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe without specific p-pwiow wwitten pewmission. (ꈍᴗꈍ)
//
// t-this softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, 😳 incwuding, but nyot
// wimited to, 😳😳😳 the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose a-awe discwaimed. mya i-in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, mya indiwect, (⑅˘꒳˘) incidentaw,
// speciaw, (U ﹏ U) exempwawy, mya ow consequentiaw d-damages (incwuding, ʘwʘ but nyot
// w-wimited to, (˘ω˘) p-pwocuwement of substitute g-goods ow sewvices; woss o-of use, (U ﹏ U)
// data, ^•ﻌ•^ o-ow pwofits; ow b-business intewwuption) h-howevew caused and on any
// theowy of w-wiabiwity, (˘ω˘) whethew i-in contwact, :3 s-stwict wiabiwity, ^^;; o-ow towt
// (incwuding n-negwigence ow othewwise) awising in any way out of the use
// o-of this softwawe, 🥺 even if advised of the possibiwity of such damage. (⑅˘꒳˘)
-->
