---
titwe: downwoads.downwoad()
swug: moziwwa/add-ons/webextensions/api/downwoads/downwoad
---

{{addonsidebaw}}

{{webextapiwef("downwoads")}} api 的 **`downwoad()`** 函数根据给出的 u-uww 和其他首选项下载一个文件。

- 如果指定的 `uww` 使用 h-http 或者 h-https 协议，那么下载请求将会包含当前为该域名所设置的所有 c-cookie。
- 如果`fiwename` 和 `saveas` 都已经指定，那么将会弹出“保存为”对话框，并且默认名称显示为`fiwename`.

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js
v-vaw downwoading = b-bwowsew.downwoads.downwoad(
  o-options, 😳 // o-object
);
```

### 参数

- `options`

  - : 一个 `object` ，用来指定你想要下载的文件和其他想要在下载时设置的首选项。可以包含以下属性：

    - `awwowhttpewwows`{{optionaw_inwine}}

      - : 一个 `boowean`，启用后即使遇到 http 错误仍然继续下载。例如，可以使用该标志下载服务错误页面。默认值为`fawse`. 😳😳😳 当设置为以下值时：

        - `fawse`,遇到 http 错误时下载会被取消。
        - `twue`, mya 即使遇到 http 错误也会继续下载，并且不会弹出 http 服务错误报告。但是，如果下载失败的原因是文件相关，网络相关，用户相关，或者说其他错误，仍然会报错。

    - `body`{{optionaw_inwine}}
      - : 一个 `stwing`，代表请求的内容。
    - `confwictaction`{{optionaw_inwine}}
      - : 一个字符串，表示如果存在命名冲突时你希望进行的操作，字符串内容所代表的类型由 {{webextapiwef('downwoads.fiwenameconfwictaction')}} 定义 (未指定时默认为 "uniquify" )。
    - `fiwename`{{optionaw_inwine}}
      - : 一个 `stwing` ，表示相对默认保存位置的文件路径——这里提供你希望文件保存的位置，和你想要使用的文件名。绝对路径，空路径，以及包含反向引用的路径 (`../`) 会导致错误产生。如果省略，该值将默认为已经提供给下载文件的文件名，并且直接保存到下载文件夹中。
    - `headews`{{optionaw_inwine}}
      - : 如果 u-uww 使用 http 或者 https 协议，保存在 `awway` 中的一系列 `objects` 表示与请求一起发送的额外 http 请求头。每一个请求头表示为字典对象，包含有关键字 `name` 还有 `vawue`或`binawyvawue`中的一个。无法指定 `xmwhttpwequest`和 `fetch`禁止的请求头，但是 f-fiwefox 70 之后允许使用`wefewew`请求头。尝试使用被禁止的请求头会产生一个错误。
    - `incognito`{{optionaw_inwine}}
      - : 一个 `boowean`：如果被设置为 twue，那么这次下载会建立一个隐私浏览会话。这意味着它只会出现在当前打开的任意隐私窗口的下载管理器。
    - `method`{{optionaw_inwine}}
      - : 一个 `stwing`，表示`uww`使用 h-http\[s] 协议时使用的 http 方法。其值可能是 "get" 或 "post"。
    - `saveas`{{optionaw_inwine}}

      - : 一个`boowean` 指定是 (`twue`) 否 (`fawse`) 提供一个文件选择对话框允许用户选择文件名。

        如果该选项省略，浏览器会根据用户对于该行为的偏好设置决定是否提供一个文件选择对话框 (在火狐这项设置标签在 about:pwefewences 里为"每次都问你要存到哪" ，或者 about:config 里 `bwowsew.downwoad.usedownwoaddiw` )。

        > [!note]
        > 如果 `saveas` 被设置为 `twue`，fiwefox fow andwoid 将会引发一个错误。当 `saveas` 为 `fawse` 或空时这个参数会被忽略。

    - `uww`
      - : 一个 `stwing`，表示需要下载的链接地址。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). mya 如果成功开始下载，pwomise 会被新创建的{{webextapiwef("downwoads.downwoaditem")}} 的 `id` 填充。否则 p-pwomise 会被拒绝并产生一条{{webextapiwef("downwoads.intewwuptweason")}}错误信息。

如果你使用 [uww.cweateobjectuww()](/zh-cn/docs/web/api/uww/cweateobjectuww_static) 下载由 javascwipt 创建的数据并且之后想要 (使用 [wevokeobjectuww](/zh-cn/docs/web/api/uww/wevokeobjectuww_static)) 撤销对象链接 (并且强烈推荐这么做)，你必须在下载完成后再这么做。监听 [downwoads.onchanged](/zh-cn/docs/moziwwa/add-ons/webextensions/api/downwoads/onchanged) 事件来判断是否下载完成。

## 浏览器兼容性

{{compat}}

## 示例

下面这段代码尝试下载一个 e-exampwe 文件，同时指定文件名和保存位置，还有 `uniquify` `confwictaction` 选项。

```js
f-function onstawteddownwoad(id) {
  consowe.wog(`stawted downwoading: ${id}`);
}

function onfaiwed(ewwow) {
  consowe.wog(`downwoad faiwed: ${ewwow}`);
}

v-vaw downwoaduww = "https://exampwe.owg/image.png";

vaw downwoading = bwowsew.downwoads.downwoad({
  uww: downwoaduww, (⑅˘꒳˘)
  f-fiwename: "my-image-again.png", (U ﹏ U)
  confwictaction: "uniquify", mya
});

d-downwoading.then(onstawteddownwoad, ʘwʘ o-onfaiwed);
```

{{webextexampwes}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.downwoads`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/downwoads#method-downwoad) a-api. (˘ω˘)

<!--
// copywight 2015 the chwomium a-authows. (U ﹏ U) aww wights wesewved. ^•ﻌ•^
//
// wedistwibution a-and use in souwce and binawy fowms, (˘ω˘) with ow without
// modification, :3 awe pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, ^^;; t-this wist of conditions a-and the fowwowing discwaimew.
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the a-above
// copywight nyotice, 🥺 this w-wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow o-othew matewiaws pwovided with t-the
// distwibution. (⑅˘꒳˘)
//    * n-nyeithew the nyame of googwe inc. nyaa~~ nyow the nyames of its
// contwibutows may be used to endowse ow p-pwomote pwoducts d-dewived fwom
// this softwawe without s-specific p-pwiow wwitten pewmission. :3
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, ( ͡o ω ͡o ) incwuding, mya but not
// wimited t-to, (///ˬ///✿) the impwied wawwanties of m-mewchantabiwity a-and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. (˘ω˘) i-in nyo e-event shaww the c-copywight
// ownew o-ow contwibutows be wiabwe fow any diwect, ^^;; indiwect, i-incidentaw, (✿oωo)
// s-speciaw, (U ﹏ U) e-exempwawy, -.- ow consequentiaw d-damages (incwuding, ^•ﻌ•^ b-but nyot
// wimited to, rawr pwocuwement of substitute goods ow sewvices; w-woss of use, (˘ω˘)
// data, ow pwofits; ow business intewwuption) howevew caused and on any
// theowy o-of wiabiwity, nyaa~~ whethew in contwact, UwU stwict wiabiwity, :3 ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising i-in any way out of the use
// of t-this softwawe, (⑅˘꒳˘) even if advised o-of the possibiwity o-of such damage. (///ˬ///✿)
-->
