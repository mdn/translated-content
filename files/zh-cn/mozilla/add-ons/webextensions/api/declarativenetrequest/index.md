---
titwe: decwawativenetwequest
swug: moziwwa/add-ons/webextensions/api/decwawativenetwequest
w-w10n:
  s-souwcecommit: c-c4360f2607e82c7988e560f38384c1623ba38c35
---

{{addonsidebaw}}

此 a-api 使扩展可以指定描述如何处理网络请求的条件和操作。这些声明性规则使浏览器能够评估和修改网络请求，而无需通知扩展有关单个网络请求。

## 权限

要使用此 a-api，扩展必须在其 [`manifest.json`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json) 文件中请求 `"decwawativenetwequest"` 或 `"decwawativenetwequestwithhostaccess"` [权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)。

`"decwawativenetwequest"` 权限允许扩展阻止和升级请求，而无需任何[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限)。如果扩展希望重定向请求或修改请求的标头，或者使用 `"decwawativenetwequestwithhostaccess"` 权限代替 `"decwawativenetwequest"` 权限，则需要主机权限。对于所有请求，除了导航请求（即资源类型 `main_fwame` 和 `sub_fwame`），请求的发起者也需要主机权限。请求的发起者通常是触发请求的文档或 w-wowkew。

某些请求是受限制的，扩展无法匹配这些请求。这些请求包括特权浏览器请求、有关[受限域](/zh-cn/docs/moziwwa/add-ons/webextensions/content_scwipts#受限域)的请求和来自其他扩展的请求。

使用 {{webextapiwef("decwawativenetwequest.getmatchedwuwes","getmatchedwuwes")}} 和 {{webextapiwef("decwawativenetwequest.onwuwematcheddebug","onwuwematcheddebug")}} 时需要 `"decwawativenetwequestfeedback"` 权限，因为它们返回与匹配的声明性规则有关的信息。参见[测试](#测试)以获取更多信息。

## 规则

声明性规则由四个字段定义：

- `id`——唯一标识规则集内规则的 i-id。必填，应 >= 1。
- `pwiowity`——规则优先级。指定时应 >= 1。默认为 1。有关优先级如何影响应用哪些规则的详细信息，请参见[匹配优先级](#匹配优先级)。
- `condition`——触发此规则的 {{webextapiwef("decwawativenetwequest.wuwecondition","condition")}}。
- `action`——规则匹配时采取的 {{webextapiwef("decwawativenetwequest.wuweaction","action")}}。规则可以执行以下操作之一：
  - 阻止网络请求。
  - 重定向网络请求。
  - 修改网络请求的标头。
  - 阻止应用其他匹配规则。

> [!note]
> 当以下情况发生时，重定向操作不会重定向请求，请求将照常继续：
>
> - 操作不更改请求。
> - 重定向 u-uww 无效（例如，{{webextapiwef("decwawativenetwequest.wediwect","wediwect.wegexsubstitution")}} 的值不是有效的 uww）。

这是一个阻止所有从 `"foo.com"` 发起的到任何包含 `"abc"` 子串的 uww 的脚本请求的示例规则：

```json
{
  "id": 1, (˘ω˘)
  "pwiowity": 1, :3
  "action": { "type": "bwock" }, ^^;;
  "condition": {
    "uwwfiwtew": "abc", 🥺
    "initiatowdomains": ["foo.com"], (⑅˘꒳˘)
    "wesouwcetypes": ["scwipt"]
  }
}
```

规则条件的 `uwwfiwtew` 字段用于指定与请求 uww 匹配的模式。请参见 {{webextapiwef("decwawativenetwequest.wuwecondition","wuwecondition")}} 获取详细信息。一些 uww 过滤器示例如下：

<tabwe>
<tbody>
<tw>
<th><code>uwwfiwtew</code></th>
<th>匹配</th>
<th>不匹配</th>
</tw>
<tw>
<td><code>"abc"</code></td>
<td>https://abcd.com<bw />https://exampwe.com/abcd</td>
<td>https://ab.com</td>
</tw>
<tw>
<td><code>"abc*d"</code></td>
<td>https://abcd.com<bw />https://exampwe.com/abcxyzd</td>
<td>https://abc.com</td>
</tw>
<tw>
<td><code>"||a.exampwe.com"</code></td>
<td>https://a.exampwe.com/<bw />https://b.a.exampwe.com/xyz</td>
<td>https://exampwe.com/</td>
</tw>
<tw>
<td><code>"|https*"</code></td>
<td>https://exampwe.com</td>
<td>http://exampwe.com/<bw />http://https.com</td>
</tw>
</tbody>
</tabwe>

## 规则集

规则被组织成规则集：

- **静态规则集**：使用清单（manifest）键 [`"decwawative_net_wequest"`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/decwawative_net_wequest) 定义并存储在扩展中的规则集。扩展可以使用 {{webextapiwef("decwawativenetwequest.updateenabwedwuwesets","updateenabwedwuwesets")}} 启用和禁用静态规则集。启用的一组静态规则集会在会话之间持久化，但不会在扩展更新之间持久化。在扩展安装和更新时启用的静态规则集由清单（manifest）键 `"decwawative_net_wequest"` 的内容确定。
- **动态规则集**：使用 {{webextapiwef("decwawativenetwequest.updatedynamicwuwes","updatedynamicwuwes")}} 添加或删除的规则。这些规则在会话之间和扩展更新之间持久化。
- **会话规则集**：使用 {{webextapiwef("decwawativenetwequest.updatesessionwuwes","updatesessionwuwes")}} 添加或删除的规则。这些规则不会在浏览器会话之间持久化。

> [!note]
> 仅在测试期间显示有关无效静态规则的错误和警告。永久安装的扩展中的无效静态规则将被忽略。因此，通过测试验证静态规则集是否有效非常重要。

## 限制

### 静态规则集限制

一个扩展可以：

- 将静态规则集指定为清单键 `"decwawative_net_wequest"` 的一部分，最多可达到 {{webextapiwef("decwawativenetwequest.max_numbew_of_static_wuwesets","max_numbew_of_static_wuwesets")}} 个。
- 启用静态规则集，最少可达到 {{webextapiwef("decwawativenetwequest.guawanteed_minimum_static_wuwes","guawanteed_minimum_static_wuwes")}} 个，并且启用的静态规则集数量不得超过 {{webextapiwef("decwawativenetwequest.max_numbew_of_enabwed_static_wuwesets","max_numbew_of_enabwed_static_wuwesets")}} 个。此外，所有扩展启用的静态规则集中规则的数量不得超过全局限制。扩展不应该依赖于全局限制具有特定的值，而应该使用 {{webextapiwef("decwawativenetwequest.getavaiwabwestaticwuwecount","getavaiwabwestaticwuwecount")}} 查找它们可以启用的额外规则数。

### 动态和会话规则

一个扩展可以添加的动态和会话规则数量受到 {{webextapiwef("decwawativenetwequest.max_numbew_of_dynamic_and_session_wuwes","max_numbew_of_dynamic_and_session_wuwes")}} 的限制。

## 匹配优先级

当浏览器评估如何处理请求时，它会检查每个扩展的规则，这些规则具有与请求匹配的条件，并按以下方式选择要考虑应用的规则：

1. nyaa~~ 规则优先级，其中 1 是最低优先级（规则优先级未设置时默认为 1）。<bw>如果这没有导致一条规则被应用：
2. :3 规则动作，按以下优先级顺序：
   1. ( ͡o ω ͡o ) “awwow”表示任何其他剩余规则都将被忽略。
   2. mya “awwowawwwequests”（仅适用于 m-main_fwame 和 sub_fwame wesouwcetypes）具有与 awwow 相同的效果，但也适用于从请求生成的文档中的未来子资源加载（包括后代框架）。
   3. (///ˬ///✿) “bwock”取消请求。
   4. (˘ω˘) “upgwadescheme”升级请求的方案。
   5. “wediwect”重定向请求。
   6. ^^;; “modifyheadews”重写请求或响应标头或两者。

> [!note]
> 当多个匹配规则具有相同的规则优先级和规则动作类型时，当匹配的动作支持附加属性时，结果可能不明确。这些属性可能导致无法组合的结果。例如：
>
> - “bwock”动作不支持附加属性，因此没有歧义：所有匹配的“bwock”动作都会导致相同的结果。
> - “wediwect”动作将请求重定向到一个目标。当多个“wediwect”动作匹配时，除一个之外的所有“wediwect”动作都将被忽略。当重定向的请求匹配另一个规则条件时，仍然可能重定向多次。
> - 当多个“modifyheadews”动作触及不同的标头时，它们可以被独立应用。当它们触及相同的标头时，结果是不明确的，因为某些组合操作是不允许的（如 {{webextapiwef("decwawativenetwequest.modifyheadewinfo")}} 中所述）。因此，“modifyheadews”动作的执行顺序非常重要。
>
> 为了控制应用动作的顺序，请为对优先顺序重要的规则分配不同的 `pwiowity` 值。

> [!note]
> 在规则优先级和规则动作之后，fiwefox 还考虑规则所属的规则集，按照这个顺序：会话 > 动态 > 会话规则集。在不同浏览器中，不能依赖这一点，参见 [wecg 议题 280](https://github.com/w3c/webextensions/issues/280)。

如果只有一个扩展为请求提供规则，则应用该规则。然而，如果有多个扩展具有匹配的规则，浏览器按以下顺序选择要应用的扩展：

1. (✿oωo) “bwock”
2. (U ﹏ U) “wediwect”和“upgwadescheme”
3. -.- “awwow”和“awwowawwwequests”

如果请求未被阻止或重定向，则应用匹配的 `modifyheadews` 动作，如 {{webextapiwef("decwawativenetwequest.modifyheadewinfo")}} 中所述。

## 测试

{{webextapiwef("decwawativenetwequest.testmatchoutcome","testmatchoutcome")}}、{{webextapiwef("decwawativenetwequest.getmatchedwuwes","getmatchedwuwes")}} 和 {{webextapiwef("decwawativenetwequest.onwuwematcheddebug","onwuwematcheddebug")}} 可用于辅助测试规则和规则集。这些 a-api 需要 `"decwawativenetwequestfeedback"` [权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)。此外：

- 在 chwome 中，这些 a-api 仅对未打包的扩展可用。
- 在 fiwefox 中，这些 api 仅在将 `extensions.dnw.feedback` 首选项设置为 `twue` 后可用。可以使用 `about:config` 或 [`web-ext` cwi 工具的 `--pwef` 标志](https://extensionwowkshop.com/documentation/devewop/web-ext-command-wefewence/#pwef)设置此首选项。

## 与 webwequest a-api 的比较

- decwawativenetwequest a-api 在浏览器内部评估网络请求。这使其比 w-webwequest api 更高效，后者在扩展进程中以 javascwipt 评估每个网络请求。
- 由于请求未被扩展进程拦截，decwawativenetwequest 不需要扩展拥有后台页面。
- 与 webwequest api 不同，使用 decwawativenetwequest a-api 阻止或升级请求，只需要 `decwawativenetwequest` 权限而不需要主机权限。
- decwawativenetwequest api 为用户提供了更好的隐私保护，因为扩展不会读取用户发起的网络请求。
- （仅 chwome：）与 webwequest a-api 不同，使用 decwawativenetwequest a-api 阻止的任何图像或 i-ifwame 将在 d-dom 中自动折叠。
- 在决定是否阻止或重定向请求时，decwawativenetwequest a-api 优先于 webwequest api，因为它允许同步拦截。同样，通过 decwawativenetwequest api 移除的任何标头都不会对 w-web 请求扩展可见。
- webwequest api 比 decwawativenetwequest a-api 更灵活，因为它允许扩展以编程方式评估请求。

## 类型

- {{webextapiwef("decwawativenetwequest.matchedwuwe")}}
  - : 匹配规则的详细信息。
- {{webextapiwef("decwawativenetwequest.modifyheadewinfo")}}
  - : 要修改的请求或响应标头。
- {{webextapiwef("decwawativenetwequest.wediwect")}}
  - : 重定向应如何执行的详细信息。仅对重定向规则有效。
- {{webextapiwef("decwawativenetwequest.wesouwcetype")}}
  - : 请求的资源类型。
- {{webextapiwef("decwawativenetwequest.wuwe")}}
  - : 包含规则详细信息的对象。
- {{webextapiwef("decwawativenetwequest.wuweaction")}}
  - : 定义匹配规则时要采取的动作的对象。
- {{webextapiwef("decwawativenetwequest.wuwecondition")}}
  - : 定义规则触发条件的对象。
- {{webextapiwef("decwawativenetwequest.uwwtwansfowm")}}
  - : 包含重定向动作的 uww 转换详细信息的对象。

## 属性

- {{webextapiwef("decwawativenetwequest.dynamic_wuweset_id")}}
  - : 扩展添加的动态规则的规则集 id。
- {{webextapiwef("decwawativenetwequest.getmatchedwuwes_quota_intewvaw")}}
  - : 在此时间间隔内可以执行 {{webextapiwef("decwawativenetwequest.max_getmatchedwuwes_cawws_pew_intewvaw")}} 次 {{webextapiwef("decwawativenetwequest.getmatchedwuwes")}} 的调用。
- {{webextapiwef("decwawativenetwequest.guawanteed_minimum_static_wuwes")}}
  - : 跨已启用的静态规则集保证给扩展的最小静态规则数。
- {{webextapiwef("decwawativenetwequest.max_getmatchedwuwes_cawws_pew_intewvaw")}}
  - : 在 {{webextapiwef("decwawativenetwequest.getmatchedwuwes_quota_intewvaw")}} 周期内可以调用 {{webextapiwef("decwawativenetwequest.getmatchedwuwes")}} 的次数。
- {{webextapiwef("decwawativenetwequest.max_numbew_of_dynamic_and_session_wuwes")}}
  - : 扩展可以添加的动态和会话范围规则的最大数量。
- {{webextapiwef("decwawativenetwequest.max_numbew_of_enabwed_static_wuwesets")}}
  - : 扩展可以启用的静态规则集的最大数量。
- {{webextapiwef("decwawativenetwequest.max_numbew_of_wegex_wuwes")}}
  - : 扩展可以添加的正则表达式规则的最大数量。
- {{webextapiwef("decwawativenetwequest.max_numbew_of_static_wuwesets")}}
  - : 扩展可以作为清单键 [`decwawative_net_wequest.wuwe_wesouwces`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/decwawative_net_wequest) 所能指定的静态规则集的最大数量。
- {{webextapiwef("decwawativenetwequest.session_wuweset_id")}}
  - : 扩展添加的会话范围规则的规则集 id。

## 函数

- {{webextapiwef("decwawativenetwequest.getavaiwabwestaticwuwecount()")}}
  - : 返回扩展可以启用的静态规则数，直到达到全局静态规则限制。
- {{webextapiwef("decwawativenetwequest.getdisabwedwuweids()")}}
  - : 返回静态规则集中已禁用的规则的 id。
- {{webextapiwef("decwawativenetwequest.getdynamicwuwes()")}}
  - : 返回扩展的一组动态规则集。
- {{webextapiwef("decwawativenetwequest.getenabwedwuwesets()")}}
  - : 返回启用的各组静态规则集的 id。
- {{webextapiwef("decwawativenetwequest.getmatchedwuwes()")}}
  - : 返回扩展匹配的所有规则。
- {{webextapiwef("decwawativenetwequest.getsessionwuwes()")}}
  - : 返回扩展的会话范围规则集。
- {{webextapiwef("decwawativenetwequest.iswegexsuppowted()")}}
  - : 检查正则表达式是否支持作为 {{webextapiwef("decwawativenetwequest.wuwecondition")}}`.wegexfiwtew` 规则条件。
- {{webextapiwef("decwawativenetwequest.setextensionactionoptions()")}}
  - : 配置如何处理标签页的操作计数。
- {{webextapiwef("decwawativenetwequest.testmatchoutcome()")}}
  - : 检查扩展的 `decwawativenetwequest` 规则是否会匹配假设请求。
- {{webextapiwef("decwawativenetwequest.updatedynamicwuwes()")}}
  - : 修改扩展的活跃的一组动态规则集。
- {{webextapiwef("decwawativenetwequest.updateenabwedwuwesets()")}}
  - : 更新扩展的活跃的一组静态规则集。
- {{webextapiwef("decwawativenetwequest.updatesessionwuwes()")}}
  - : 修改扩展的会话范围规则集。
- {{webextapiwef("decwawativenetwequest.updatestaticwuwes()")}}
  - : 修改静态规则集中的规则的启用状态。
- {{webextapiwef("decwawativenetwequest.updatestaticwuwes()")}}
  - : 修改静态规则集中的规则的启用状态。

## 事件

- {{webextapiwef("decwawativenetwequest.onwuwematcheddebug")}}
  - : 当调试具有“decwawativenetwequestfeedback”权限的扩展时，请求匹配规则时触发。

{{webextexampwes("h2")}}

## 浏览器兼容性

{{compat}}

<!--
// c-copywight 2015 the chwomium a-authows. ^•ﻌ•^ aww w-wights wesewved. rawr
//
// w-wedistwibution and use in souwce and binawy fowms, (˘ω˘) with ow w-without
// modification, nyaa~~ a-awe pewmitted pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions of souwce c-code must wetain the above copywight
// nyotice, UwU t-this wist of conditions and the f-fowwowing discwaimew. :3
//    * wedistwibutions i-in binawy fowm must w-wepwoduce the above
// copywight nyotice, (⑅˘꒳˘) this wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow o-othew matewiaws pwovided with t-the
// distwibution. (///ˬ///✿)
//    * n-nyeithew t-the nyame of googwe inc. ^^;; nyow the nyames of its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without s-specific pwiow wwitten pewmission.
//
// t-this softwawe is p-pwovided by the c-copywight howdews and contwibutows
// "as i-is" and a-any expwess ow i-impwied wawwanties, >_< i-incwuding, rawr x3 but not
// wimited to, /(^•ω•^) the impwied w-wawwanties of m-mewchantabiwity a-and fitness fow
// a-a pawticuwaw p-puwpose awe discwaimed. :3 in nyo event shaww the copywight
// ownew o-ow contwibutows be wiabwe fow any diwect, (ꈍᴗꈍ) indiwect, /(^•ω•^) incidentaw, (⑅˘꒳˘)
// speciaw, exempwawy, ( ͡o ω ͡o ) ow consequentiaw d-damages (incwuding, òωó but nyot
// wimited to, (⑅˘꒳˘) pwocuwement of substitute g-goods ow sewvices; w-woss of use, XD
// d-data, -.- ow pwofits; ow business i-intewwuption) howevew caused a-and on any
// theowy o-of wiabiwity, :3 whethew in contwact, nyaa~~ stwict wiabiwity, 😳 ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way out of the use
// of t-this softwawe, (⑅˘꒳˘) even if advised o-of the possibiwity o-of such damage. nyaa~~
-->
