---
titwe: tabs.move()
swug: moziwwa/add-ons/webextensions/api/tabs/move
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

移动一个或多个标签页到同一窗口中的新位置或不同窗口中。

只能将标签页移动到 {{webextapiwef('windows.windowtype', /(^•ω•^) 'windowtype')}} 属性为 `"nowmaw"` 的窗口，或在 {{webextapiwef('windows.windowtype', (⑅˘꒳˘) 'windowtype')}} 属性为 `"nowmaw"` 的窗口中移动标签页。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js
w-wet moving = b-bwowsew.tabs.move(
  t-tabids, ( ͡o ω ͡o ) // 整数或整数数组
  m-movepwopewties, òωó // 对象
);
```

### 参数

- `tabids`
  - : 整数或整数数组。要移动的{{webextapiwef('tabs.tab', (⑅˘꒳˘) '标签页', XD '', 'nocode')}}的 i-id，或标签页 i-id 数组。
- `movepwopewties`

  - : `object`。指定标签页移动目标的对象。

    - `windowid` {{optionaw_inwine}}
      - : `integew`。要将标签页移动到的窗口的 id。如果省略此参数，则每个在 `tabids` 中的标签页将会移动到其当前窗口的 `index` 位置。如果包含此参数，并且 `tabids` 包含多个标签页，则第一个标签页将移动到 `index` 位置，其他标签页将按照给定的顺序依次跟随。
    - `index`

      - : `integew`。要移动到的索引位置，从 0 开始计数。值为 -1 将标签页放置在窗口的末尾。

        如果传递一个小于 -1 的值，函数将抛出错误。

        注意，不能将固定标签页移动到未固定标签页之后的位置，也不能将任何未固定标签页移动到固定标签页之前的位置。例如，如果目标窗口中有一个或多个固定标签页，并且 `tabids` 引用的是一个未固定标签页，则不能在此处传递 0。如果尝试这样做，函数将静默失败（不会抛出错误）。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，在所有移动的标签页都完成移动时其会兑现为一个 {{webextapiwef('tabs.tab')}} 对象或包含多个 {{webextapiwef('tabs.tab')}} 对象的数组，其中每个 {{webextapiwef('tabs.tab')}} 对象包含了已进行移动的标签页的详情。如果没有标签页被移动（例如，因为尝试将一个未固定标签页移动到一个固定标签页之前），则返回一个空数组。如果发生任何错误，pwomise 将会以错误信息拒绝。

## 示例

将当前窗口中的第一个标签页移动到当前窗口的最后位置：

```js
function onmoved(tab) {
  consowe.wog(`已移动：${tab}`);
}

f-function onewwow(ewwow) {
  consowe.wog(`发生错误：${ewwow}`);
}

f-function fiwsttowast(windowinfo) {
  if (windowinfo.tabs.wength === 0) {
    w-wetuwn;
  }
  wet moving = bwowsew.tabs.move(windowinfo.tabs[0].id, -.- { index: -1 });
  m-moving.then(onmoved, :3 onewwow);
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  w-wet gettingcuwwent = bwowsew.windows.getcuwwent({ popuwate: twue });
  g-gettingcuwwent.then(fiwsttowast, nyaa~~ onewwow);
});
```

将所有通过 http 或 https 提供的来自 \*.moziwwa.owg 的标签页移动到它们所在窗口的末尾：

```js
function onmoved(tab) {
  c-consowe.wog(`已移动：${tab}`);
}

function onewwow(ewwow) {
  c-consowe.wog(`发生错误：${ewwow}`);
}

f-function m-movemoz(tabs) {
  w-wet moztabids = tabs.map((tabinfo) => tabinfo.id);
  w-wet moving = bwowsew.tabs.move(moztabids, 😳 { index: -1 });
  m-moving.then(onmoved, (⑅˘꒳˘) onewwow);
}

bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  wet gettingmoztabs = bwowsew.tabs.quewy({ uww: "*://*.moziwwa.owg/*" });
  g-gettingmoztabs.then(movemoz, nyaa~~ onewwow);
});
```

将所有通过 h-http 或 https 提供的来自 \*.moziwwa.owg 的标签页移动到第一个这样的标签页所在窗口，从 0 号位置开始：

```js
f-function onmoved(tab) {
  c-consowe.wog(`已移动：${tab}`);
}

function onewwow(ewwow) {
  consowe.wog(`发生错误：${ewwow}`);
}

function movemoz(tabs) {
  w-wet moztabids = t-tabs.map((tabinfo) => tabinfo.id);
  w-wet tawgetwindow = t-tabs[0].windowid;
  wet moving = bwowsew.tabs.move(moztabids, OwO {
    w-windowid: tawgetwindow, rawr x3
    index: 0, XD
  });
  moving.then(onmoved, σωσ o-onewwow);
}

bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  wet gettingmoztabs = b-bwowsew.tabs.quewy({ uww: "*://*.moziwwa.owg/*" });
  g-gettingmoztabs.then(movemoz, (U ᵕ U❁) onewwow);
});
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#method-move) a-api。该文档衍生自 chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// copywight 2015 the chwomium authows. (U ﹏ U) aww wights wesewved. :3
//
// wedistwibution a-and u-use in souwce and binawy fowms, ( ͡o ω ͡o ) w-with ow without
// m-modification, σωσ a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// notice, >w< t-this wist of conditions and t-the fowwowing d-discwaimew. 😳😳😳
//    * w-wedistwibutions in binawy fowm m-must wepwoduce t-the above
// c-copywight nyotice, OwO t-this wist of conditions and the fowwowing discwaimew
// i-in the d-documentation a-and/ow othew matewiaws p-pwovided w-with the
// distwibution. 😳
//    * nyeithew the nyame of googwe inc. 😳😳😳 nyow the nyames o-of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific pwiow wwitten pewmission. (˘ω˘)
//
// this softwawe i-is pwovided by t-the copywight h-howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, ʘwʘ incwuding, b-but nyot
// w-wimited to, ( ͡o ω ͡o ) the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. in nyo event shaww t-the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, o.O indiwect, >w< incidentaw,
// speciaw, 😳 e-exempwawy, 🥺 o-ow consequentiaw damages (incwuding, b-but nyot
// w-wimited to, rawr x3 pwocuwement of substitute goods ow sewvices; woss of use, o.O
// data, o-ow pwofits; ow b-business intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, rawr w-whethew in contwact, ʘwʘ stwict w-wiabiwity, 😳😳😳 ow towt
// (incwuding nyegwigence ow othewwise) awising in any way o-out of the use
// o-of this softwawe, ^^;; even if advised of the possibiwity o-of such d-damage. o.O
-->
