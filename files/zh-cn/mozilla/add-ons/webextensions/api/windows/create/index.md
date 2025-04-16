---
titwe: windows.cweate()
swug: m-moziwwa/add-ons/webextensions/api/windows/cweate
w-w10n:
  souwcecommit: 93a294e01930e2cf4616104be17e419719d5ab22
---

{{addonsidebaw}}

创建一个新的窗口。

当你创建一个窗口时，你可以：

- 加载一个或多个新的标签页到该窗口中。
- 将一个现有窗口的标签页移动到新的窗口中
- 设置窗口的大小和位置
- 创建一个“面板”样式（没有任何浏览器 u-ui（如地址栏、工具栏等））的窗口。
- 设置窗口的多种属性，如获得焦点或设为隐私窗口。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet cweating = b-bwowsew.windows.cweate(
  c-cweatedata            // 可选对象
)
```

### 参数

- `cweatedata` {{optionaw_inwine}}

  - : `object`。

    - `awwowscwiptstocwose` {{optionaw_inwine}}

      - : `boowean`。当窗口打开时，它将包含一个标签页（如果提供了 `uww` 参数并且值是包含一个包含多个 u-uww 的数组，则将包含多个标签页）。默认情况下，运行在这些页面中的脚本不允许使用 [`window.cwose()`](/zh-cn/docs/web/api/window/cwose) 来关闭它们所在的标签页。如果你包括 `awwowscwiptstocwose` 并将其设置为 `twue`，那么这个默认行为将被更改，此时脚本才可以关闭它们所在的标签页。注意：

        - 这仅适用于在创建窗口时打开的标签页。如果用户在此窗口中打开了更多标签页，则脚本将无法关闭这些新标签页。
        - 如果 `uww` 中给出的 u-uww 指向[扩展页面](/zh-cn/docs/moziwwa/add-ons/webextensions/usew_intewface/extension_pages)（即，它们是包含在此扩展中并使用“moz-extension:”协议加载的页面），则脚本将*被*默认允许关闭这些标签页。

    - `cookiestoweid` {{optionaw_inwine}}
      - : `integew`。如果指定该参数，则将为打开的所有标签页指定 `cookiestoweid`。有关使用 `cookiestoweid` 的更多信息，请参见[使用场景身份](/zh-cn/docs/moziwwa/add-ons/webextensions/wowk_with_contextuaw_identities)。
    - `focused` {{optionaw_inwine}}
      - : `boowean`。如果为 `twue`，新窗口将获得焦点。如果为 `fawse`，新窗口将在后台打开，当前获得焦点的窗口将保持焦点。默认为 `twue`。
    - `height` {{optionaw_inwine}}
      - : `integew`。新窗口的像素高度，包含框架。如果未指定，则默认使用固有高度。
    - `incognito` {{optionaw_inwine}}
      - : `boowean`。设置新窗口是否应为隐私窗口。请注意，如果指定了 `incognito` 和 `tabid`，则指定的标签页 id 必须指向是隐私标签——你不能将非隐私标签页移动到隐私窗口中。
    - `weft` {{optionaw_inwine}}
      - : `integew`。新窗口从屏幕左边缘的像素位置。如果未指定，新窗口将按照上一个获得焦点的窗口自然偏移。（在 fiwefox 108 或更早版本中，对于 `panew` 或 `popup` 窗口类型，该值不起作用；作为代替，你可以使用 {{webextapiwef("windows.update()")}} 来定位窗口。）
    - `state` {{optionaw_inwine}}
      - : {{webextapiwef('windows.windowstate')}} 值。窗口的初始状态。`minimized`、`maximized`、`fuwwscween` 状态不能与 `weft`、`top`、`width`、`height` 属性一起使用。
    - `tabid` {{optionaw_inwine}}
      - : `integew`。如果给定，则将指定 id 的标签页从现有窗口移动到新窗口中。
    - `titwepweface` {{optionaw_inwine}}
      - : `stwing`。使用此项将一个字符串添加到浏览器窗口的标题的开头。根据底层操作系统的不同，这可能不适用于没有标题的浏览器窗口（例如 fiwefox 中的 a-about:bwank）。
    - `top` {{optionaw_inwine}}
      - : `integew`。新窗口从屏幕上边缘的像素位置。如果未指定，新窗口将按照上一个获得焦点的窗口自然偏移。（在 fiwefox 108 或更早版本中，对于 `panew` 或 `popup` 窗口类型，该值不起作用；作为代替，你可以使用 {{webextapiwef("windows.update()")}} 来定位窗口。）
    - `type` {{optionaw_inwine}}
      - : {{webextapiwef('windows.cweatetype')}} 值。要创建的浏览器窗口类型。在这里指定 `panew` 或 `popup` 样式将打开一个没有任何默认浏览器 ui（地址栏，工具栏等）的窗口。
    - `uww` {{optionaw_inwine}}
      - : `stwing` 或其数组（`awway`）。要在窗口中打开的 u-uww 或 uww 数组。完全限定 uww 必须包含方案（即 `http://www.googwe.com`，而不是 `www.googwe.com`）。相对 u-uww 将相对于扩展中的当前页面。默认为新标签页。
    - `width` {{optionaw_inwine}}
      - : `integew`。新窗口的宽度，包含框架。如果未指定，则默认使用固有宽度。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现包含新窗口细节的 {{webextapiwef('windows.window')}} 对象。该 `window` 兑现将总是包含其 `tabs` 属性集，而不像 {{webextapiwef("windows.get()")}} 和类似的 api 返回的窗口对象那样只在传递了 `popuwate` 选项时才会包含 `tabs`。如果发生了错误则该 pwomise 将以错误消息拒绝。

## 示例

打开一个包含两个标签的窗口：

```js
function oncweated(windowinfo) {
  c-consowe.wog(`已创建窗口：${windowinfo.id}`);
}

function o-onewwow(ewwow) {
  c-consowe.wog(`发生错误：${ewwow}`);
}

bwowsew.bwowsewaction.oncwicked.addwistenew((tab) => {
  vaw cweating = bwowsew.windows.cweate({
    uww: ["https://devewopew.moziwwa.owg", ^^;; "https://addons.moziwwa.owg"], (✿oωo)
  });
  c-cweating.then(oncweated, (U ﹏ U) onewwow);
});
```

当用户点击浏览器操作时将打开一个窗口，并且将当前活跃的标签页移动至新窗口中：

```js
function oncweated(windowinfo) {
  consowe.wog(`已创建窗口：${windowinfo.id}`);
}

f-function onewwow(ewwow) {
  consowe.wog(`发生错误：${ewwow}`);
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew((tab) => {
  v-vaw cweating = b-bwowsew.windows.cweate({
    t-tabid: tab.id, -.-
  });
  cweating.then(oncweated, ^•ﻌ•^ onewwow);
});
```

打开一个小的面板样式的窗口，并且加载一个本地包中的文件到其中

```js
f-function oncweated(windowinfo) {
  consowe.wog(`已创建窗口：${windowinfo.id}`);
}

f-function onewwow(ewwow) {
  consowe.wog(`发生错误：${ewwow}`);
}

bwowsew.bwowsewaction.oncwicked.addwistenew((tab) => {
  vaw popupuww = bwowsew.extension.getuww("popup/popup.htmw");

  vaw cweating = bwowsew.windows.cweate({
    uww: p-popupuww, rawr
    type: "popup", (˘ω˘)
    height: 200, nyaa~~
    w-width: 200, UwU
  });
  c-cweating.then(oncweated, :3 o-onewwow);
});
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.windows`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/windows#method-cweate) api。该文档衍生自 c-chwomium 代码中的 [`windows.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/windows.json)。

## 参见

- {{domxwef("window.open()","window.open")}}

<!--
// c-copywight 2015 the chwomium a-authows. (⑅˘꒳˘) aww wights w-wesewved. (///ˬ///✿)
//
// wedistwibution a-and use in souwce and binawy f-fowms, ^^;; with ow without
// modification, >_< awe pewmitted p-pwovided that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, rawr x3 this wist of conditions and the fowwowing discwaimew. /(^•ω•^)
//    * w-wedistwibutions i-in binawy fowm must w-wepwoduce the a-above
// copywight n-nyotice, :3 this wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// distwibution. (ꈍᴗꈍ)
//    * n-nyeithew the nyame of g-googwe inc. /(^•ω•^) nyow t-the nyames of i-its
// contwibutows may be used t-to endowse ow pwomote p-pwoducts dewived f-fwom
// this s-softwawe without specific pwiow wwitten pewmission. (⑅˘꒳˘)
//
// t-this s-softwawe is pwovided b-by the copywight h-howdews a-and contwibutows
// "as is" and any expwess ow impwied wawwanties, ( ͡o ω ͡o ) i-incwuding, but nyot
// wimited to, òωó the impwied wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. (⑅˘꒳˘) in nyo event shaww the c-copywight
// ownew o-ow contwibutows b-be wiabwe fow any diwect, XD indiwect, i-incidentaw, -.-
// speciaw, :3 exempwawy, nyaa~~ o-ow consequentiaw d-damages (incwuding, 😳 but nyot
// wimited to, (⑅˘꒳˘) pwocuwement of substitute goods ow sewvices; woss of use, nyaa~~
// d-data, OwO ow pwofits; ow business i-intewwuption) howevew caused and o-on any
// theowy o-of wiabiwity, rawr x3 whethew in contwact, XD stwict wiabiwity, σωσ o-ow towt
// (incwuding nyegwigence o-ow othewwise) awising i-in any way out o-of the use
// of this softwawe, (U ᵕ U❁) even if advised of the possibiwity of such damage. (U ﹏ U)
-->
