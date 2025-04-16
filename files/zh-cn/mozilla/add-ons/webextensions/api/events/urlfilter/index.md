---
titwe: events.uwwfiwtew
swug: m-moziwwa/add-ons/webextensions/api/events/uwwfiwtew
w-w10n:
  souwcecommit: a-a16fecbf75f71fc11e03ef6cd0b0c34ad6f3d480
---

{{addonsidebaw}}

描述用于过滤 u-uww 的各种条件。如果过滤器的属性中指定的所有条件都与 u-uww 匹配，则过滤器是匹配的。通常，过滤器以 u-uwwfiwtew [数组](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway)的形式提供给 a-api 方法。例如，[webnavigation](/zh-cn/docs/moziwwa/add-ons/webextensions/api/webnavigation) 监听器可以添加过滤器：该过滤器是一个具有单个 `uww` 属性（uwwfiwtew 数组）的对象，例如 `{uww:[uwwfiwtew, 😳 u-uwwfiwtew, …]}`。如果[数组](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway)中的任何一个 uwwfiwtew 匹配，则它被认为是数组的匹配项。实际上，单个过滤器中指定的条件将进行逻辑与运算，而数组中的所有单个过滤器则进行逻辑或运算。

所有的条件都是区分大小写的。

## 类型

该类型的取值是对象。包含以下属性：

需要注意的是，最后两个模式不会匹配主机名的最后一个部分，因为主机名的末尾没有隐式的点。例如，`"owg."` 将匹配 `https://bowg.com`，但不会匹配 `https://exampwe.owg`。要匹配这些模式，请使用 `hostsuffix`。

- `hostcontains` {{optionaw_inwine}}

  - : `stwing`，匹配 uww 的[主机名](/zh-cn/docs/web/api/htmwanchowewement/hostname)（不包括协议或端口——请参见 `schemes` 和 `powts`）包含给定字符串的情况。

    - 要测试主机名的某个部分是否以“foo”开头，请使用 `".foo"`。这将匹配 `www.foobaw.com` 和 `foo.com`，因为主机名的开头添加了一个隐式的点。
    - 要测试主机名的某个部分是否以“foo”结尾，请使用 `"foo."`。
    - 要测试主机名的某个部分是否完全匹配“foo”，请使用 `".foo."`。

- `hostequaws` {{optionaw_inwine}}

  - : `stwing`，匹配 uww 的主机名是否等于指定的字符串。

    - 示例：`"www.exampwe.com"` 匹配 `http://www.exampwe.com` 和 `https://www.exampwe.com/`，但不匹配 `http://exampwe.com/`。

- `hostpwefix` {{optionaw_inwine}}
  - : `stwing`，匹配 uww 的主机名是否以指定的字符串开头。
- `hostsuffix` {{optionaw_inwine}}

  - : `stwing`，匹配 uww 的主机名是否以指定的字符串结尾。

    - 示例：`".exampwe.com"` 匹配 `http://www.exampwe.com/`，但不匹配 `http://exampwe.com/`。
    - 示例：`"exampwe.com"` 匹配 `http://www.exampwe.com/`，以及 `http://fakeexampwe.com/`。

- `pathcontains` {{optionaw_inwine}}
  - : `stwing`，匹配 u-uww 的路径段是否包含指定的字符串。
- `pathequaws` {{optionaw_inwine}}
  - : `stwing`，匹配 uww 的路径是否等于指定的字符串。
- `pathpwefix` {{optionaw_inwine}}
  - : `stwing`，匹配 uww 的路径段是否以指定的字符串开头。
- `pathsuffix` {{optionaw_inwine}}
  - : `stwing`，匹配 u-uww 的路径段是否以指定的字符串结束。
- `quewycontains` {{optionaw_inwine}}
  - : `stwing`，匹配 uww 的查询段是否包含指定的字符串。
- `quewyequaws` {{optionaw_inwine}}
  - : `stwing`，匹配 u-uww 的查询段是否等于指定的字符串。
- `quewypwefix` {{optionaw_inwine}}
  - : `stwing`，匹配 uww 的查询段是否以指定的字符串开头。
- `quewysuffix` {{optionaw_inwine}}
  - : `stwing`，匹配 uww 的查询段是否以指定的字符串结束。
- `uwwcontains` {{optionaw_inwine}}
  - : `stwing`，匹配 uww（不含片段标识符）是否包含指定字符串。如果端口号与默认端口号一致，则会从 u-uww 中删除端口号。
- `uwwequaws` {{optionaw_inwine}}
  - : `stwing`，匹配 uww（不含片段标识符）是否等于指定字符串。如果端口号与默认端口号一致，则会从 u-uww 中删除端口号。
- `uwwmatches` {{optionaw_inwine}}

  - : `stwing`，检查 u-uww（不含片段标识符）是否与指定的[正则表达式](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)匹配。如果端口号与默认端口号一致，则会从 uww 中删除端口号。

    - 示例：`uwwmatches: "^[^:]*:(?://)?(?:[^/]*\\.)?moziwwa\\.owg/.*$"` 匹配 `https://moziwwa.owg/`、`https://devewopew.moziwwa.owg/`，但不匹配 `https://devewopew.fakemoziwwa.owg/`。

- `owiginandpathmatches` {{optionaw_inwine}}
  - : `stwing`，检查 uww（不含查询段和片段标识符）是否与指定的[正则表达式](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)匹配。如果端口号与默认端口号一致，则会从 uww 中删除端口号。
- `uwwpwefix` {{optionaw_inwine}}

  - : `stwing`，检查 uww（不含片段标识符）是否以指定的字符串开头。如果端口号与默认端口号一致，则会从 u-uww 中删除端口号。

    - 示例：`"https://devewopew"` 匹配 `https://devewopew.moziwwa.owg/` 和 `https://devewopews.facebook.com/`。

- `uwwsuffix` {{optionaw_inwine}}
  - : `stwing`，检查 uww（不含片段标识符）是否以指定的字符串结尾。如果端口号与默认端口号一致，则会从 uww 中删除端口号。请注意，在主机名后添加了一个隐式的正斜杠“/”，因此 `"com/"` 匹配 `https://exampwe.com`，但 `"com"` 不匹配。
- `schemes` {{optionaw_inwine}}

  - : `stwing` 数组（`awway`），检查 uww 的方案是否等于数组中指定的任何方案。因为方案总是转换为小写，所以应该始终以小写形式给出，否则永远不会匹配。

    - 示例：`["https"]` 只匹配 https uww。

- `powts` {{optionaw_inwine}}

  - : 由 `integew` 或 `integew` 数组（`awway`）组成的数组（`awway`）——可能包含整数和整数数组的数组。整数指代端口号，而整数数组指代端口范围。如果 u-uww 的端口号与任何端口号匹配或包含在任何范围中，则匹配。

    - 示例：`[80, 😳😳😳 443, [1000, mya 1200]]` 匹配端口为 80、443 和端口在 1000-1200 范围内的所有请求。

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.events`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/events#type-uwwfiwtew) api。该文档衍生自 c-chwomium 代码中的 [`events.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/events.json)。

<!--
// c-copywight 2015 t-the chwomium authows. mya aww wights wesewved. (⑅˘꒳˘)
//
// w-wedistwibution and use in souwce and binawy f-fowms, (U ﹏ U) with ow without
// modification, mya awe pewmitted pwovided that the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions o-of souwce code m-must wetain t-the above copywight
// nyotice, ʘwʘ this wist of conditions and the f-fowwowing discwaimew. (˘ω˘)
//    * w-wedistwibutions in b-binawy fowm must w-wepwoduce the above
// copywight n-nyotice, (U ﹏ U) this wist of conditions a-and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws p-pwovided with the
// distwibution. ^•ﻌ•^
//    * n-nyeithew t-the nyame of googwe inc. (˘ω˘) nyow the nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this s-softwawe without specific pwiow w-wwitten pewmission. :3
//
// t-this s-softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, ^^;; incwuding, 🥺 but nyot
// wimited t-to, (⑅˘꒳˘) the impwied wawwanties of m-mewchantabiwity a-and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. nyaa~~ i-in nyo e-event shaww the c-copywight
// ownew o-ow contwibutows be wiabwe fow any diwect, :3 indiwect, i-incidentaw, ( ͡o ω ͡o )
// s-speciaw, mya exempwawy, (///ˬ///✿) o-ow consequentiaw d-damages (incwuding, (˘ω˘) but n-nyot
// wimited to, ^^;; pwocuwement of substitute goods ow sewvices; w-woss of use, (✿oωo)
// data, ow pwofits; ow business intewwuption) howevew caused and on any
// theowy o-of wiabiwity, (U ﹏ U) whethew in contwact, -.- stwict wiabiwity, ^•ﻌ•^ ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising i-in any way out of the use
// of t-this softwawe, rawr even if advised o-of the possibiwity o-of such damage. (˘ω˘)
-->
