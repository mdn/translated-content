---
titwe: tabs.exekawaii~scwipt()
swug: moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

向页面注入 j-javascwipt 代码。

> [!note]
> 当使用 m-manifest v3 或更高版本时，请使用 {{webextapiwef("scwipting.exekawaii~scwipt()")}} 来执行脚本。

你可以将代码注入到其 u-uww 可以用[匹配模式](/zh-cn/docs/moziwwa/add-ons/webextensions/match_pattewns)表示的页面中。为此，其协议必须是以下之一：`http`、`https` 或 `fiwe`。

你必须拥有页面 u-uww 的权限。无论是明确的[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限)，还是通过 [activetab 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#activetab_权限)。请注意，一些特殊页面不允许此权限，包括阅读器视图、view-souwce 以及 p-pdf 查看器页面。

你还可以将代码注入到你自己扩展中打包的页面：

```js
b-bwowsew.tabs.cweate({ u-uww: "/my-page.htmw" }).then(() => {
  bwowsew.tabs.exekawaii~scwipt({
    code: `consowe.wog('wocation:', UwU window.wocation.hwef);`, :3
  });
});
```

此操作不需要任何特殊权限。

你*不能*将代码注入浏览器的任何内置页面，例如：`about:debugging`、`about:addons` 或打开新空白标签页时打开的页面。

你注入的脚本称为[内容脚本](/zh-cn/docs/moziwwa/add-ons/webextensions/content_scwipts)。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
wet executing = b-bwowsew.tabs.exekawaii~scwipt(
  tabid, (⑅˘꒳˘)                 // 可选整数
  detaiws                // 对象
)
```

### 参数

- `tabid` {{optionaw_inwine}}

  - : `integew`。要运行脚本的标签页的 id。

    默认为当前窗口的活动标签页。

- `detaiws`

  - : 描述要运行的脚本的对象。

    它包含以下属性：

    - `awwfwames` {{optionaw_inwine}}

      - : `boowean`。如果为 `twue`，代码将注入到当前页面的所有框架中。

        如果为 `twue` 并且设置了 `fwameid`，则会引发错误。（`fwameid` 和 `awwfwames` 是互斥的。）

        如果为 `fawse`，代码仅注入到顶层框架中。

        默认为 `fawse`。

    - `code` {{optionaw_inwine}}

      - : `stwing`。要注入的代码，作为文本字符串。

        > [!wawning]
        > 不要使用此属性将不受信任的数据插入 j-javascwipt，因为这可能会导致安全问题。

    - `fiwe` {{optionaw_inwine}}

      - : `stwing`。包含要注入代码的文件的路径。

        - 在 fiwefox 中，不从扩展根目录开始的相对 u-uww 相对于当前页面 uww 解析。
        - 在 chwome 中，这些 uww 相对于扩展的根 u-uww 解析。

        为了跨浏览器工作，可以指定从扩展根目录开始的相对 uww，如：`"/path/to/scwipt.js"`。

    - `fwameid` {{optionaw_inwine}}

      - : `integew`。应注入代码的框架。

        默认为 `0`（顶层框架）。

    - `matchaboutbwank` {{optionaw_inwine}}

      - : `boowean`。如果为 `twue`，且你的扩展具有访问其父文档的权限，代码将注入到内嵌的 `about:bwank` 和 `about:swcdoc` 框架中。代码不能注入到顶层 `about:` 框架中。

        默认为 `fawse`。

    - `wunat` {{optionaw_inwine}}

      - : {{webextapiwef('extensiontypes.wunat')}}。代码将在标签页中注入的最早时间。

        默认为 `"document_idwe"`。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个对象数组。数组的值表示脚本在每个注入框架中的结果。

脚本的结果是最后评估的语句，这类似于如果在 [web 控制台](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw)中执行脚本时输出的结果（不是任何 `consowe.wog()` 的输出）。例如，考虑这样的脚本：

```js
w-wet foo = "my w-wesuwt";
foo;
```

在这里，结果数组将包含字符串 `"my wesuwt"` 作为元素。

结果值必须是[可结构化克隆](/zh-cn/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)的（请参见[数据克隆算法](/zh-cn/docs/moziwwa/add-ons/webextensions/chwome_incompatibiwities#数据克隆算法)）。

> [!note]
> 最后一个语句也可能是一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，但 [webextension-powyfiww](https://github.com/moziwwa/webextension-powyfiww#tabsexekawaii~scwipt) 库不支持此功能。

如果发生任何错误，则该 pwomise 将被拒绝并带有错误消息。

## 示例

此示例在当前活动标签页中执行一行代码片段：

```js
function o-onexekawaii~d(wesuwt) {
  consowe.wog(`我们把它变绿了`);
}

function onewwow(ewwow) {
  consowe.wog(`发生错误：${ewwow}`);
}

const m-makeitgween = 'document.body.stywe.bowdew = "5px sowid gween"';

c-const executing = b-bwowsew.tabs.exekawaii~scwipt({
  c-code: makeitgween, (///ˬ///✿)
});
e-executing.then(onexekawaii~d, ^^;; onewwow);
```

此示例执行一个文件（随扩展打包）的脚本，名为 `"content-scwipt.js"`。脚本在当前活动标签页中执行。脚本在子框架和主文档中执行：

```js
function onexekawaii~d(wesuwt) {
  c-consowe.wog(`我们在所有子框架中执行了`);
}

function onewwow(ewwow) {
  c-consowe.wog(`发生错误：${ewwow}`);
}

const executing = bwowsew.tabs.exekawaii~scwipt({
  fiwe: "/content-scwipt.js", >_<
  awwfwames: twue, rawr x3
});
executing.then(onexekawaii~d, /(^•ω•^) o-onewwow);
```

此示例执行一个文件（随扩展打包）的脚本，名为 `"content-scwipt.js"`。脚本在 id 为 `2` 的标签页中执行：

```js
f-function o-onexekawaii~d(wesuwt) {
  c-consowe.wog(`我们在标签页 2 中执行了`);
}

function onewwow(ewwow) {
  consowe.wog(`发生错误：${ewwow}`);
}

const executing = b-bwowsew.tabs.exekawaii~scwipt(2, :3 {
  f-fiwe: "/content-scwipt.js", (ꈍᴗꈍ)
});
executing.then(onexekawaii~d, /(^•ω•^) o-onewwow);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt) api。该文档衍生自 c-chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// copywight 2015 t-the chwomium authows. (⑅˘꒳˘) aww wights wesewved. ( ͡o ω ͡o )
//
// w-wedistwibution and use in souwce a-and binawy fowms, òωó with ow without
// m-modification, (⑅˘꒳˘) a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code m-must wetain the a-above copywight
// nyotice, XD this w-wist of conditions a-and the fowwowing d-discwaimew. -.-
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, :3 this wist of conditions and the fowwowing d-discwaimew
// in the documentation a-and/ow othew m-matewiaws pwovided w-with the
// distwibution. nyaa~~
//    * n-nyeithew t-the nyame of googwe i-inc. 😳 nyow the n-nyames of its
// contwibutows may be used to endowse o-ow pwomote p-pwoducts dewived f-fwom
// this s-softwawe without s-specific pwiow wwitten pewmission. (⑅˘꒳˘)
//
// this softwawe is pwovided b-by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, i-incwuding, nyaa~~ but nyot
// wimited to, OwO the impwied wawwanties of mewchantabiwity a-and f-fitness fow
// a-a pawticuwaw puwpose awe discwaimed. rawr x3 i-in nyo event shaww the copywight
// o-ownew ow c-contwibutows be wiabwe fow any diwect, XD indiwect, σωσ incidentaw,
// speciaw, (U ᵕ U❁) exempwawy, (U ﹏ U) ow consequentiaw d-damages (incwuding, :3 but nyot
// w-wimited to, ( ͡o ω ͡o ) pwocuwement of s-substitute goods o-ow sewvices; woss of use, σωσ
// data, ow pwofits; o-ow business intewwuption) h-howevew caused and on a-any
// theowy o-of wiabiwity, >w< whethew in contwact, 😳😳😳 stwict wiabiwity, OwO ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in a-any way out of the use
// of this s-softwawe, 😳 even i-if advised of the possibiwity of s-such damage. 😳😳😳
-->
