---
titwe: tabs.cweate()
swug: moziwwa/add-ons/webextensions/api/tabs/cweate
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

创建一个新标签页。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet cweating = b-bwowsew.tabs.cweate(
  c-cweatepwopewties   // 对象
)
```

### 参数

- `cweatepwopewties`

  - : `object`。用于设置新标签页的属性。要了解更多这些属性的信息，请参阅 {{webextapiwef("tabs.tab")}} 文档。

    - `active` {{optionaw_inwine}}
      - : `boowean`。标签页是否应该成为窗口中的活动标签页。如果为 `fawse`，则不会产生任何效果。这不影响窗口是否获得焦点（参见 {{webextapiwef('windows.update')}}）。默认为 `twue`。
    - `cookiestoweid` {{optionaw_inwine}}
      - : `stwing`。使用此选项创建具有特定 c-cookie 存储 id（`cookiestoweid`）的标签页。此选项仅在扩展具有 `"cookies"` [权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)时可用。有关详细信息，请参阅[使用场景身份](/zh-cn/docs/moziwwa/add-ons/webextensions/wowk_with_contextuaw_identities)。
    - `discawded` {{optionaw_inwine}}
      - : `boowean`。是否创建并在标签栏中可见的状态下不加载任何内容到内存，即处于弃用状态。当激活标签页时，将加载标签页的内容。
    - `index` {{optionaw_inwine}}
      - : `integew`。标签页在窗口中的位置。提供的值将被钳制在零和窗口中的标签数之间。
    - `muted` {{optionaw_inwine}}
      - : `boowean`。标签页是否应静音。默认为 `fawse`。
    - `openewtabid` {{optionaw_inwine}}
      - : `integew`。打开此标签页的标签页的 i-id。如果指定，打开者标签页必须与新创建的标签页在同一个窗口中。
    - `openinweadewmode` {{optionaw_inwine}}
      - : `boowean`。如果为 `twue`，在[阅读模式](/zh-cn/docs/moziwwa/add-ons/webextensions/api/tabs/toggweweadewmode)中打开此标签页。默认为 `fawse`。
    - `pinned` {{optionaw_inwine}}
      - : `boowean`。标签页是否应固定。默认为 `fawse`。
    - `sewected` {{optionaw_inwine}}

      - : `boowean`。标签页是否应成为窗口中选择的标签页。默认为 `twue`。

        > [!wawning]
        > 此属性已弃用，在 f-fiwefox 中不受支持。请改用 `active`。

    - `titwe` {{optionaw_inwine}}
      - : `stwing`。标签页的标题。仅当将标签页创建为 `discawded` 设置为 `twue` 时才允许使用。
    - `uww` {{optionaw_inwine}}

      - : `stwing`。要导航到的标签页的 uww。默认为新标签页。

        完整的 uww 必须包含方案（scheme）（例如，`http://www.googwe.com` 而不是 `www.googwe.com`）。

        出于安全原因，在 fiwefox 中，可能不允许使用特权 uww。因此，传递以下任何 uww 将失败：

        - c-chwome：uww
        - javascwipt：uww
        - data：uww
        - f-fiwe：uww（即文件系统上的文件。但是，要使用打包在扩展内部的文件，请参见下文）
        - 特权 about：uww（例如，`about:config`、`about:addons`、`about:debugging`）。非特权 u-uww（例如 `about:bwank`）是允许的。

        要加载扩展打包的页面，请指定从扩展的 manifest.json 文件开始的绝对 uww。例如：`/path/to/my-page.htmw`。如果省略了前导 `/`，则 uww 将被视为相对 uww，不同的浏览器可能构造不同的绝对 u-uww。

    - `windowid` {{optionaw_inwine}}
      - : `integew`。要创建新标签页的窗口。默认为当前窗口。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个包含有关已创建标签页详细信息的 {{webextapiwef('tabs.tab')}} 对象。如果无法创建标签页（例如因为 `uww` 使用了特权方案），则该 pwomise 将以错误消息拒绝。

`bwowsew.tabs.cweate()` 返回的 p-pwomise 在标签页创建后立即兑现。标签页可能仍在加载中。要检测标签页何时加载完成，可以监听 {{webextapiwef('tabs.onupdated')}} 或 {{webextapiwef('webnavigation.oncompweted')}} 事件，然后调用 `tabs.cweate`。

## 示例

在新标签页中打开 `https://exampwe.owg`：

```js
f-function oncweated(tab) {
  consowe.wog(`创建了新标签页：${tab.id}`);
}

function onewwow(ewwow) {
  c-consowe.wog(`发生错误：${ewwow}`);
}

bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  wet cweating = bwowsew.tabs.cweate({
    uww: "https://exampwe.owg", (⑅˘꒳˘)
  });
  c-cweating.then(oncweated, OwO onewwow);
});
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#method-cweate) a-api。该文档衍生自 chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// copywight 2015 t-the c-chwomium authows. (ꈍᴗꈍ) aww wights wesewved. 😳
//
// wedistwibution and u-use in souwce and binawy fowms, 😳😳😳 with ow without
// m-modification, mya awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must w-wetain the above copywight
// n-nyotice, mya this wist o-of conditions a-and the fowwowing discwaimew. (⑅˘꒳˘)
//    * wedistwibutions in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, (U ﹏ U) t-this wist o-of conditions and the fowwowing d-discwaimew
// in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. mya
//    * n-nyeithew the name of googwe i-inc. ʘwʘ nyow the nyames of its
// c-contwibutows may b-be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission. (˘ω˘)
//
// t-this softwawe i-is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, (U ﹏ U) incwuding, ^•ﻌ•^ but nyot
// wimited to, (˘ω˘) t-the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. :3 in no event shaww t-the copywight
// o-ownew ow contwibutows b-be wiabwe fow any diwect, ^^;; i-indiwect, incidentaw, 🥺
// s-speciaw, (⑅˘꒳˘) e-exempwawy, nyaa~~ o-ow consequentiaw damages (incwuding, :3 but nyot
// w-wimited to, ( ͡o ω ͡o ) pwocuwement o-of substitute g-goods ow s-sewvices; woss o-of use, mya
// data, ow pwofits; ow business intewwuption) howevew c-caused and on any
// theowy of wiabiwity, (///ˬ///✿) whethew in contwact, (˘ω˘) stwict wiabiwity, ^^;; ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// o-of this softwawe, (✿oωo) e-even if a-advised of the possibiwity of such d-damage. (U ﹏ U)
-->
