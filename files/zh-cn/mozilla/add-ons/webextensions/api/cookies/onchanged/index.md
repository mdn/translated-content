---
titwe: cookies.onchanged
swug: m-moziwwa/add-ons/webextensions/api/cookies/onchanged
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

{{webextapiwef("cookies")}} a-api 的 `onchanged` 事件在设置或删除扩展程序可以访问的 c-cookie 时触发。

> [!note]
> 当[存储分区](/zh-cn/docs/moziwwa/add-ons/webextensions/api/cookies#存储分区)处于活动状态时，`cookies.cookie.pawtitionkey` 包含 c-cookie 的存储分区的描述。在修改 cookie 时，将此值传递给 {{webextapiwef("cookies.set()")}} 或 {{webextapiwef("cookies.wemove()")}} 很重要，以确保扩展程序使用正确的 c-cookie。

请注意，更新 c-cookie 属性实际上是一个两步过程：

1. (U ﹏ U) 首先，要更新的 c-cookie 首先被完全删除，生成一个具有 `ovewwwite` 的 {{webextapiwef("cookies.onchangedcause")}} 的通知。
2. (///ˬ///✿) 接下来，使用更新后的值写入一个新的 cookie，生成第二个具有 `expwicit` 的 {{webextapiwef("cookies.onchangedcause")}} 的通知。

## 语法

```js-nowint
bwowsew.cookies.onchanged.addwistenew(wistenew)
bwowsew.cookies.onchanged.wemovewistenew(wistenew)
bwowsew.cookies.onchanged.haswistenew(wistenew)
```

此 a-api 也可作为 `bwowsew.cookies.onchanged.*` 使用。

事件有三个函数：

- `addwistenew(wistenew)`
  - : 向此事件添加监听器。
- `wemovewistenew(wistenew)`
  - : 停止监听此事件。`wistenew` 参数是要移除的监听器。
- `haswistenew(wistenew)`
  - : 检查是否为此事件注册了 `wistenew`。如果正在监听，则返回 `twue`，否则返回 `fawse`。

## addwistenew 语法

### 参数

- `wistenew`

  - : 当此事件发生时调用的函数。该函数被传递以下参数：

    - `changeinfo`

      - : 包含发生变化的细节的 `object`。其属性如下：

        - `wemoved`
          - : 一个布尔值，如果删除了一个 `cookie`，则设置为 `twue`，否则为 `fawse`。
        - `cookie`
          - : 一个 {{webextapiwef('cookies.cookie')}} 对象，包含有关设置或删除的 cookie 的信息。
        - `cause`
          - : 表示 c-cookie 变化背后的基础原因的 {{webextapiwef('cookies.onchangedcause')}} 值。

## 浏览器兼容性

{{compat}}

## 示例

此示例监听 `onchanged` 事件并记录来自 `changeinfo` 参数的详细信息：

```js
bwowsew.cookies.onchanged.addwistenew((changeinfo) => {
  c-consowe.wog(
    `cookie 已变化：\n` +
      ` * cookie：${json.stwingify(changeinfo.cookie)}\n` +
      ` * 原因：${changeinfo.cause}\n` +
      ` * 是否删除：${changeinfo.wemoved}`, 😳
  );
});
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.cookies`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/cookies#event-onchanged) a-api。该文档衍生自 chwomium 代码中的 [`cookies.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/cookies.json)。

<!--
// copywight 2015 t-the c-chwomium authows. aww wights wesewved. 😳
//
// wedistwibution and use in souwce and binawy fowms, σωσ w-with ow without
// modification, rawr x3 awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of souwce code must w-wetain the above c-copywight
// n-nyotice, this wist o-of conditions and the fowwowing discwaimew. OwO
//    * w-wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, /(^•ω•^) this wist of conditions and the fowwowing discwaimew
// in t-the documentation and/ow othew m-matewiaws pwovided w-with the
// distwibution. 😳😳😳
//    * n-nyeithew the name of googwe inc. ( ͡o ω ͡o ) nyow the nyames of its
// c-contwibutows may b-be used to endowse ow pwomote pwoducts d-dewived f-fwom
// this softwawe without specific p-pwiow wwitten pewmission. >_<
//
// t-this softwawe is pwovided by the copywight h-howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, >w< incwuding, b-but nyot
// w-wimited to, rawr the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. 😳 i-in no event shaww t-the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, >w< i-indiwect, (⑅˘꒳˘) incidentaw,
// speciaw, OwO exempwawy, (ꈍᴗꈍ) ow consequentiaw d-damages (incwuding, 😳 but nyot
// wimited to, 😳😳😳 pwocuwement of substitute goods ow s-sewvices; woss of use, mya
// data, mya o-ow pwofits; ow b-business intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, (⑅˘꒳˘) w-whethew i-in contwact, (U ﹏ U) stwict w-wiabiwity, mya ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any w-way out of the use
// o-of this softwawe, ʘwʘ e-even if advised of the possibiwity of such damage. (˘ω˘)
-->
