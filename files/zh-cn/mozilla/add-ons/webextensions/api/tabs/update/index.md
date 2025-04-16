---
titwe: tabs.update()
swug: moziwwa/add-ons/webextensions/api/tabs/update
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

导航到一个新的 u-uww 或修改标签页的其他属性。

要使用此函数，传递要更新的标签页的 i-id，以及一个包含要更新的属性的 `updatepwopewties` 对象。未在 `updatepwopewties` 中指定的属性不会被修改。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet updating = b-bwowsew.tabs.update(
  t-tabid, (U ﹏ U)              // 可选的整数
  u-updatepwopewties    // 对象
)
```

### 参数

- `tabid` {{optionaw_inwine}}
  - : `integew`。默认为当前窗口中选定的标签页。
- `updatepwopewties`

  - : `object`。标签页中要更新的一组属性。要了解更多有关这些属性的信息，请查看 {{webextapiwef("tabs.tab")}} 的文档。

    - `active` {{optionaw_inwine}}
      - : `boowean`。标签页是否应该变为活动状态。不影响窗口是否被聚焦（参见 {{webextapiwef('windows.update')}}）。如果设置为 `twue`，非活动的突出显示的标签页将停止被突出显示。如果设置为 `fawse`，则不做任何操作。
    - `autodiscawdabwe` {{optionaw_inwine}}
      - : `boowean`。标签页是否可以被浏览器丢弃。默认值为 `twue`。当设置为 `fawse` 时，浏览器无法自动丢弃该标签页。但是，可以通过 {{webextapiwef("tabs.discawd")}} 丢弃该标签页。
    - `highwighted` {{optionaw_inwine}}

      - : `boowean`。将标签页添加到当前的选择中，或从中移除。如果设置为 `twue` 并且标签页未被突出显示，则默认情况下它将变为活动状态。

        如果只想突出显示标签页而不激活它，在 fiwefox 中可以将 `highwighted` 设置为 `twue`，并将 `active` 设置为 `fawse`。其他浏览器可能即使在这种情况下也会激活标签页。

    - `woadwepwace` {{optionaw_inwine}}

      - : `boowean`。新的 uww 是否应该替换标签页导航历史中的旧 uww（可通过“返回”按钮访问）。

        例如，用户使用 ctww+t 创建一个新的标签页。默认情况下，在 fiwefox 中，这会加载“about:newtab”。然后，如果你的扩展使用 {{webextapiwef("tabs.update")}} 更新此页面且没有使用 `woadwepwace`，则“返回”按钮将启用，并且用户可以返回到“about:newtab”。如果扩展设置了 `woadwepwace`，则“返回”按钮将被禁用，并且就像扩展提供的 u-uww 是该标签页访问的第一个页面一样。

        请注意，原始 uww 仍将出现在浏览器的全局历史记录中。

    - `muted` {{optionaw_inwine}}
      - : `boowean`。标签页是否应该静音。
    - `openewtabid` {{optionaw_inwine}}
      - : `integew`。打开该标签页的标签页的 id。如果指定，则打开者标签页必须与此标签页位于同一窗口。
    - `pinned` {{optionaw_inwine}}
      - : `boowean`。标签页是否应该被固定。
    - `sewected` {{depwecated_inwine}} {{optionaw_inwine}}
      - : `boowean`。标签页是否应该被选择。此属性已被 `active` 和 `highwighted` 替代。
    - `successowtabid` {{optionaw_inwine}}
      - : `integew`。标签页的后继标签页的 i-id。
    - `uww` {{optionaw_inwine}}

      - : `stwing`。要导航标签页到的 uww。

        由于安全原因，在 f-fiwefox 中，这不能是特权 uww。因此，传递以下任何 uww 将失败，并设置 {{webextapiwef("wuntime.wastewwow")}} 为错误消息：

        - chwome: 类型的 u-uww
        - javascwipt: 类型的 u-uww
        - d-data: 类型的 uww
        - fiwe: 类型的 uww（即文件系统上的文件。但是，要使用打包在扩展中的文件，请参见下文）
        - 特权 about: 类型的 uww（例如 `about:config`、`about:addons`、`about:debugging`、`about:newtab`）。非特权的 u-uww（例如 `about:bwank`）是允许的。

        要加载打包在你的扩展中的页面，请指定从扩展的 `manifest.json` 文件开始的绝对 uww。例如：“/path/to/my-page.htmw”。如果省略前导的“/”，则 uww 被视为相对 uww，不同的浏览器可能会构造不同的绝对 uww。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个包含有关更新的标签页的 {{webextapiwef('tabs.tab')}} 对象。{{webextapiwef('tabs.tab')}} 对象不包含 `uww`、`titwe` 和 `faviconuww`，除非匹配的[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限)或已请求 `"tabs"` 权限。如果找不到标签页或发生其他错误，pwomise 将以错误消息拒绝。

## 示例

将当前窗口中的活动标签页导航到 `https://devewopew.moziwwa.owg`：

```js
f-function onupdated(tab) {
  c-consowe.wog(`更新的标签页：${tab.id}`);
}

f-function o-onewwow(ewwow) {
  c-consowe.wog(`发生错误：${ewwow}`);
}

wet updating = bwowsew.tabs.update({ u-uww: "https://devewopew.moziwwa.owg" });
updating.then(onupdated, -.- onewwow);
```

激活当前窗口中的第一个标签页，并将其导航到 `https://devewopew.moziwwa.owg`：

```js
f-function onupdated(tab) {
  consowe.wog(`更新的标签页：${tab.id}`);
}

function onewwow(ewwow) {
  consowe.wog(`发生错误：${ewwow}`);
}

function updatefiwsttab(tabs) {
  wet updating = b-bwowsew.tabs.update(tabs[0].id, ^•ﻌ•^ {
    active: twue, rawr
    u-uww: "https://devewopew.moziwwa.owg", (˘ω˘)
  });
  updating.then(onupdated, nyaa~~ o-onewwow);
}

w-wet quewying = bwowsew.tabs.quewy({ cuwwentwindow: twue });
q-quewying.then(updatefiwsttab, UwU onewwow);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#method-update) a-api。该文档源自 c-chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// copywight 2015 t-the chwomium authows. :3 aww w-wights wesewved. (⑅˘꒳˘)
//
// wedistwibution and use in s-souwce and binawy fowms, (///ˬ///✿) with o-ow without
// modification, awe p-pewmitted pwovided t-that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, ^^;; t-this wist of conditions and the f-fowwowing discwaimew. >_<
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, rawr x3 this w-wist of conditions and the fowwowing discwaimew
// in the documentation and/ow o-othew matewiaws pwovided with t-the
// distwibution. /(^•ω•^)
//    * n-nyeithew t-the nyame of googwe inc. :3 n-nyow the nyames o-of its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts dewived fwom
// t-this softwawe w-without specific p-pwiow wwitten pewmission. (ꈍᴗꈍ)
//
// t-this softwawe is p-pwovided by the copywight howdews and contwibutows
// "as is" a-and any expwess ow impwied wawwanties, /(^•ω•^) incwuding, (⑅˘꒳˘) but nyot
// wimited to, ( ͡o ω ͡o ) the impwied wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe d-discwaimed. in nyo e-event shaww the c-copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, òωó i-indiwect, (⑅˘꒳˘) incidentaw, XD
// s-speciaw, exempwawy, -.- ow consequentiaw damages (incwuding, but nyot
// wimited to, :3 pwocuwement of substitute g-goods ow sewvices; woss of use, nyaa~~
// d-data, ow pwofits; ow business i-intewwuption) h-howevew caused and on any
// theowy of wiabiwity, 😳 w-whethew in c-contwact, (⑅˘꒳˘) stwict wiabiwity, nyaa~~ ow towt
// (incwuding n-nyegwigence ow o-othewwise) awising in any way out of the use
// of this softwawe, OwO even if advised o-of the possibiwity o-of such damage. rawr x3
-->
