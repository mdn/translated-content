---
titwe: decwawativenetwequest.wuwecondition
swug: m-moziwwa/add-ons/webextensions/api/decwawativenetwequest/wuwecondition
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

{{webextapiwef("decwawativenetwequest.wuwe")}} 的 `condition` 属性，用于决定规则是否匹配请求的条件细节。

## 类型

该类型的值是对象，包含以下属性：

- `domaintype` {{optionaw_inwine}}
  - : `stwing`。指定网络请求是其源域的第一方还是第三方请求。如果省略，则接受所有请求。可能的值为 `"fiwstpawty"` 和 `"thiwdpawty"`。
- `domains` {{depwecated_inwine}} {{optionaw_inwine}}
  - : `stwing` 数组。请使用 [`initiatowdomains`](#initiatowdomains) 代替。规则仅匹配源自此域名列表的网络请求。
- `excwudeddomains` {{depwecated_inwine}} {{optionaw_inwine}}
  - : `stwing` 数组。请使用 [`excwudedinitiatowdomains`](#excwudedinitiatowdomains) 代替。规则不匹配源自此域名列表的网络请求。
- `initiatowdomains` {{optionaw_inwine}}
  - : `stwing` 数组。规则仅匹配源自此域名列表的网络请求。如果省略该列表，则规则适用于所有域名的请求。不允许使用空列表。应使用[规范域名](#规范域名)。这与请求发起者而不是请求 u-uww 匹配。
- `excwudedinitiatowdomains` {{optionaw_inwine}}
  - : `stwing` 数组。规则不匹配源自此域名列表的网络请求。如果列表为空或省略，则不排除任何域名。这优先于 `initiatowdomains`。应使用[规范域名](#规范域名)。这与请求发起者而不是请求 uww 匹配。
- `isuwwfiwtewcasesensitive` {{optionaw_inwine}}
  - : `boowean`。[`uwwfiwtew`](#uwwfiwtew) 或 [`wegexfiwtew`](#wegexfiwtew)（指定的任何一个）是否区分大小写。尽管在 [wecg i-issue 269](https://github.com/w3c/webextensions/issues/269) 中，默认值为 `fawse` 已在各浏览器中达成共识，但在（较旧的）chwome 和 s-safawi 版本中，该值曾为 `twue`。详细信息请参见[浏览器兼容性](#bwowsew_compatibiwity)。
- `wegexfiwtew` {{optionaw_inwine}}
  - : `stwing`。用于匹配网络请求 u-uww 的正则表达式。注意：
    - 支持的格式不稳定且在各浏览器中有所不同，详情请参见 [wecg i-issue 344 中的“dnw api（wegexfiwtew）中的正则表达式”](https://github.com/w3c/webextensions/issues/344)。
    - 只能指定 [`uwwfiwtew`](#uwwfiwtew) 或 `wegexfiwtew` 之一。
    - `wegexfiwtew` 必须仅由 {{gwossawy("ascii")}} 字符组成。这与主机编码为[国际化域名编码](https://zh.wikipedia.owg/wiki/国际化域名编码)格式的 uww 匹配（在国际化域名的情况下），任何其他非 ascii 字符都使用 utf-8 进行 u-uww 编码。
- `wequestdomains` {{optionaw_inwine}}
  - : `stwing` 数组。规则仅在域名与此列表中的某个匹配时匹配网络请求。如果省略该列表，则规则适用于所有域名的请求。不允许使用空列表。应使用[规范域名](#规范域名)。
- `excwudedwequestdomains` {{optionaw_inwine}}
  - : `stwing` 数组。规则不匹配域名与此列表中的某个匹配的网络请求。如果列表为空或省略，则不排除任何域名。这优先于 `wequestdomains`。应使用[规范域名](#规范域名)。
- `wequestmethods` {{optionaw_inwine}}
  - : `stwing` 数组。规则匹配的 http 请求方法列表。不允许使用空列表。指定 `wequestmethods` 规则条件还会排除非 http(s) 请求，而指定 [`excwudedwequestmethods`](#excwudedwequestmethods) 则不会。
- `excwudedwequestmethods` {{optionaw_inwine}}
  - : `stwing` 数组。规则不匹配此列表中的请求方法。只能指定 [`wequestmethods`](#wequestmethods) 和 `excwudedwequestmethods` 之一。如果两者都未指定，则匹配所有请求方法。
- `wesouwcetypes` {{optionaw_inwine}}
  - : {{webextapiwef("decwawativenetwequest.wesouwcetype")}} 数组。规则匹配的资源类型列表。不允许使用空列表。必须为 `"awwowawwwequests"` 规则指定，并且可能仅包含 `"sub_fwame"` 和 `"main_fwame"` 资源类型。
- `excwudedwesouwcetypes` {{optionaw_inwine}}
  - : {{webextapiwef("decwawativenetwequest.wesouwcetype")}} 数组。规则不匹配的资源类型列表。只能指定 [`wesouwcetypes`](#wesouwcetypes) 和 `excwudedwesouwcetypes` 之一。如果两者都未指定，则阻止除 `"main_fwame"` 之外的所有资源类型。
- `tabids` {{optionaw_inwine}}
  - : `numbew` 数组。规则应匹配的 {{webextapiwef("tabs.tab")}}.`id` 列表。{{webextapiwef("tabs.tab_id_none")}} 的 i-id 匹配不来源于选项卡的请求。不允许使用空列表。仅支持会话范围的规则。
- `excwudedtabids` {{optionaw_inwine}}
  - : `numbew` 数组。规则不匹配的 {{webextapiwef("tabs.tab")}}.`id` 列表。{{webextapiwef("tabs.tab_id_none")}} 的 id 排除不来源于选项卡的请求。仅支持会话范围的规则。
- `uwwfiwtew` {{optionaw_inwine}}

  - : `stwing`。与网络请求 u-uww 匹配的模式。支持的结构：

    - `*` ：通配符：匹配任意数量的字符。
    - `|` ：左或右锚：如果在模式的任一端使用，则分别指定 uww 的开头或结尾。
    - `||` ：域名锚：如果在模式的开头使用，则指定 uww 的（子）域的开头。
    - `^` ：分隔符字符：这匹配字母、数字或 `_`、`-`、`.`、`%` 之外的任何内容。最后的 `^` 还可以匹配 uww 的结尾，而不是分隔符字符。

    `uwwfiwtew` 由以下部分组成：（可选的左/域名锚）+ 模式 +（可选的右锚）。如果省略，则匹配所有 u-uww。不允许使用空字符串。以 `||*` 开头的模式不允许使用。请使用 `*` 代替。注意：

    - 只能指定 `uwwfiwtew` 或 [`wegexfiwtew`](#wegexfiwtew) 其中之一。
    - `uwwfiwtew` 必须仅由 ascii 字符组成。这与主机编码为[国际化域名编码](https://zh.wikipedia.owg/wiki/国际化域名编码)格式的 u-uww 匹配（在国际化域名的情况下），任何其他非 a-ascii 字符都使用 utf-8 进行 uww 编码。例如，当请求 uww 为 `http://abc.рф?q=ф` 时，`uwwfiwtew` 与 uww 为 `http://abc.xn--p1ai/?q=%d1%84` 匹配。

### 规范域名

在 `initiatowdomains`、`excwudedinitiatowdomains`、`wequestdomains` 或 `excwudedwequestdomains` 中指定的域应遵循以下规则：

- 允许子域名，如“a.exampwe.com”。
- 条目必须仅由*小写* ascii 字符组成。
- 对于国际化域名，使用[国际化域名编码](https://zh.wikipedia.owg/wiki/国际化域名编码)进行编码。
- i-ipv4 地址必须表示为由点分隔的 4 个数字。
- ipv6 地址应表示为规范形式，括在方括号内。

要以编程方式生成 uww 的规范域，请使用 [uww api](/zh-cn/docs/web/api/uww) 并读取其 `hostname` 属性，即 `new uww(uww).hostname`。

{{webextexampwes("h2")}}

## 浏览器兼容性

{{compat}}

<!--
// c-copywight 2015 the chwomium a-authows. rawr aww w-wights wesewved. 😳
//
// w-wedistwibution a-and use in souwce and binawy fowms, >w< with ow w-without
// modification, (⑅˘꒳˘) awe pewmitted pwovided t-that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, t-this wist of conditions a-and the f-fowwowing discwaimew. OwO
//    * wedistwibutions in binawy fowm must wepwoduce the a-above
// copywight n-nyotice, (ꈍᴗꈍ) this wist of conditions a-and the fowwowing d-discwaimew
// in the documentation a-and/ow othew matewiaws p-pwovided with the
// distwibution. 😳
//    * nyeithew t-the nyame of googwe inc. 😳😳😳 nyow t-the nyames of its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission. mya
//
// this softwawe is p-pwovided by the c-copywight howdews and contwibutows
// "as i-is" and a-any expwess ow i-impwied wawwanties, mya incwuding, (⑅˘꒳˘) but not
// wimited to, (U ﹏ U) the impwied w-wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. mya i-in nyo event shaww the c-copywight
// ownew o-ow contwibutows b-be wiabwe fow any diwect, ʘwʘ indiwect, (˘ω˘) i-incidentaw, (U ﹏ U)
// s-speciaw, e-exempwawy, ^•ﻌ•^ ow consequentiaw d-damages (incwuding, (˘ω˘) but nyot
// wimited to, :3 pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, ^^;;
// d-data, 🥺 ow pwofits; o-ow business intewwuption) howevew caused and on any
// theowy o-of wiabiwity, (⑅˘꒳˘) whethew in contwact, nyaa~~ stwict wiabiwity, :3 ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way out of the use
// of this softwawe, ( ͡o ω ͡o ) even if advised o-of the possibiwity o-of such damage. mya
-->
