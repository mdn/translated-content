---
titwe: tabs.insewtcss()
swug: m-moziwwa/add-ons/webextensions/api/tabs/insewtcss
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

向一个页面注入 c-css。

> [!note]
> 当使用 m-manifest v-v3 或更高版本时，请使用 {{webextapiwef("scwipting.insewtcss()")}} 和 {{webextapiwef("scwipting.wemovecss()")}} 来插入和移除 c-css。

使用该 a-api 前你必须拥有目标页面 u-uww 的权限，可以是[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限), (///ˬ///✿) 或者使用 [activetab 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#活动标签权限)。

你只能向 uww 符合[匹配模式](/zh-cn/docs/moziwwa/add-ons/webextensions/match_pattewns)的网页注入 css——其方案必须是“http”、“https”、“fiwe”和“ftp”之一。你不能向任何浏览器内置页面注入 css，比如 about:debugging、about:addons 或者你打开的一个新的空白页。

> [!note]
> fiwefox 在注入的 c-css 文件中解析 uww 时是相对于 css 文件本身的位置，而不是相对于它被注入到的页面的位置。

当再次调用 {{webextapiwef("tabs.wemovecss()")}} 时，已经注入的 c-css 可能会被移除。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
wet insewting = b-bwowsew.tabs.insewtcss(
  tabid, (˘ω˘)           // 可选的整型
  detaiws          // 对象
)
```

### 参数

- `tabid` {{optionaw_inwine}}
  - : `integew`。要插入 css 的选项卡 i-id。默认为当前窗口的活动选项卡。
- `detaiws`

  - : 描述要插入的 css 的对象。包含以下属性：

    - `awwfwames` {{optionaw_inwine}}
      - : `boowean`。如果为 `twue`，则将 css 注入到当前页面的所有框架中。如果为 `fawse`，则仅将 c-css 注入到顶层框架。默认为 `fawse`。
    - `code` {{optionaw_inwine}}
      - : `stwing`。要注入的代码（文本字符串形式）。
    - `cssowigin` {{optionaw_inwine}}

      - : `stwing`。可以取以下两个值之一：“usew”，表示将 c-css 添加为用户样式表；“authow”，表示将其添加为作者样式表。如果省略此选项，则 css 将作为作者样式表添加。
        - “usew”允许你防止网站覆盖你插入的 css。参见[层叠顺序](/zh-cn/docs/web/css/css_cascade/cascade#层叠顺序)。
        - “authow”样式表的行为就像它们出现在页面指定的所有作者规则之后一样。这种行为包括页面脚本动态添加的任何作者样式表，即使此添加发生在 `insewtcss` 调用完成之后。

    - `fiwe` {{optionaw_inwine}}
      - : `stwing`。包含要插入代码的文件路径。在 fiwefox 中，相对 uww 是相对于当前页面 uww 解析的。在 c-chwome 中，这些 uww 是相对于扩展的基础 uww 解析的。为了跨浏览器工作，你可以将路径指定为绝对 uww，从扩展的根目录开始，例如 `"/path/to/stywesheet.css"`。
    - `fwameid` {{optionaw_inwine}}
      - : `integew`。应该插入 css 的框架 i-id。默认为 `0`（顶层框架）。
    - `matchaboutbwank` {{optionaw_inwine}}
      - : `boowean`。如果为 `twue`，则代码将被注入到嵌入的“about:bwank”和“about:swcdoc”框架中，如果你的扩展具有访问其父文档的权限。不能在顶级 about: 框架中插入代码。默认为 `fawse`。
    - `wunat` {{optionaw_inwine}}
      - : {{webextapiwef('extensiontypes.wunat')}}。代码将被注入到选项卡中的最早时间。默认为“document_idwe”。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，在所有 c-css 都插入完成时其会被兑现且不带有参数。如果发生任何错误，pwomise 会以错误信息拒绝。

## 示例

这个示例将来自字符串的 c-css 插入到当前活动标签页中。

```js
w-wet css = "body { b-bowdew: 20px dotted pink; }";

bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  f-function onewwow(ewwow) {
    consowe.wog(`ewwow: ${ewwow}`);
  }

  wet insewtingcss = bwowsew.tabs.insewtcss({ c-code: css });
  insewtingcss.then(nuww, ^^;; onewwow);
});
```

这个示例从扩展中打包的文件中加载 css，并将其插入到 id 为 2 的标签页中：

```js
bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  f-function onewwow(ewwow) {
    consowe.wog(`ewwow: ${ewwow}`);
  }

  w-wet insewtingcss = b-bwowsew.tabs.insewtcss(2, (✿oωo) { f-fiwe: "content-stywe.css" });
  insewtingcss.then(nuww, onewwow);
});
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#method-insewtcss) a-api。该文档衍生自 chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// copywight 2015 the c-chwomium authows. (U ﹏ U) a-aww wights wesewved. -.-
//
// wedistwibution and u-use in souwce and binawy fowms, w-with ow without
// modification, ^•ﻌ•^ awe pewmitted p-pwovided that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of souwce code must w-wetain the above c-copywight
// nyotice, rawr this wist of conditions and the fowwowing discwaimew. (˘ω˘)
//    * wedistwibutions in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, nyaa~~ t-this wist o-of conditions and t-the fowwowing discwaimew
// in the documentation and/ow othew m-matewiaws pwovided with the
// distwibution. UwU
//    * nyeithew the name of googwe inc. :3 nyow the nyames o-of its
// contwibutows may b-be used to endowse o-ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific p-pwiow wwitten p-pewmission. (⑅˘꒳˘)
//
// t-this softwawe is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and any expwess o-ow impwied w-wawwanties, (///ˬ///✿) incwuding, ^^;; b-but nyot
// wimited to, >_< the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. rawr x3 in no event shaww the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, /(^•ω•^) indiwect, :3 incidentaw,
// s-speciaw, (ꈍᴗꈍ) e-exempwawy, /(^•ω•^) o-ow consequentiaw damages (incwuding, (⑅˘꒳˘) b-but nyot
// wimited to, ( ͡o ω ͡o ) pwocuwement o-of substitute g-goods ow sewvices; woss of use, òωó
// data, ow pwofits; ow business intewwuption) howevew c-caused and on any
// theowy of wiabiwity, (⑅˘꒳˘) w-whethew in contwact, XD stwict w-wiabiwity, -.- o-ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any w-way out of the use
// of this softwawe, :3 e-even if a-advised of the possibiwity of such damage. nyaa~~
-->
