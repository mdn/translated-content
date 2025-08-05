---
title: declarativeNetRequest
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest
l10n:
  sourceCommit: c4360f2607e82c7988e560f38384c1623ba38c35
---

此 API 使扩展可以指定描述如何处理网络请求的条件和操作。这些声明性规则使浏览器能够评估和修改网络请求，而无需通知扩展有关单个网络请求。

## 权限

要使用此 API，扩展必须在其 [`manifest.json`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 文件中请求 `"declarativeNetRequest"` 或 `"declarativeNetRequestWithHostAccess"` [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

`"declarativeNetRequest"` 权限允许扩展阻止和升级请求，而无需任何[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)。如果扩展希望重定向请求或修改请求的标头，或者使用 `"declarativeNetRequestWithHostAccess"` 权限代替 `"declarativeNetRequest"` 权限，则需要主机权限。对于所有请求，除了导航请求（即资源类型 `main_frame` 和 `sub_frame`），请求的发起者也需要主机权限。请求的发起者通常是触发请求的文档或 worker。

某些请求是受限制的，扩展无法匹配这些请求。这些请求包括特权浏览器请求、有关[受限域](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#受限域)的请求和来自其他扩展的请求。

使用 {{WebExtAPIRef("declarativeNetRequest.getMatchedRules","getMatchedRules")}} 和 {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug","onRuleMatchedDebug")}} 时需要 `"declarativeNetRequestFeedback"` 权限，因为它们返回与匹配的声明性规则有关的信息。参见[测试](#测试)以获取更多信息。

## 规则

声明性规则由四个字段定义：

- `id`——唯一标识规则集内规则的 ID。必填，应 >= 1。
- `priority`——规则优先级。指定时应 >= 1。默认为 1。有关优先级如何影响应用哪些规则的详细信息，请参见[匹配优先级](#匹配优先级)。
- `condition`——触发此规则的 {{WebExtAPIRef("declarativeNetRequest.RuleCondition","condition")}}。
- `action`——规则匹配时采取的 {{WebExtAPIRef("declarativeNetRequest.RuleAction","action")}}。规则可以执行以下操作之一：
  - 阻止网络请求。
  - 重定向网络请求。
  - 修改网络请求的标头。
  - 阻止应用其他匹配规则。

> [!NOTE]
> 当以下情况发生时，重定向操作不会重定向请求，请求将照常继续：
>
> - 操作不更改请求。
> - 重定向 URL 无效（例如，{{WebExtAPIRef("declarativeNetRequest.redirect","redirect.regexSubstitution")}} 的值不是有效的 URL）。

这是一个阻止所有从 `"foo.com"` 发起的到任何包含 `"abc"` 子串的 URL 的脚本请求的示例规则：

```json
{
  "id": 1,
  "priority": 1,
  "action": { "type": "block" },
  "condition": {
    "urlFilter": "abc",
    "initiatorDomains": ["foo.com"],
    "resourceTypes": ["script"]
  }
}
```

规则条件的 `urlFilter` 字段用于指定与请求 URL 匹配的模式。请参见 {{WebExtAPIRef("declarativeNetRequest.RuleCondition","RuleCondition")}} 获取详细信息。一些 URL 过滤器示例如下：

<table>
<tbody>
<tr>
<th><code>urlFilter</code></th>
<th>匹配</th>
<th>不匹配</th>
</tr>
<tr>
<td><code>"abc"</code></td>
<td>https://abcd.com<br />https://example.com/abcd</td>
<td>https://ab.com</td>
</tr>
<tr>
<td><code>"abc*d"</code></td>
<td>https://abcd.com<br />https://example.com/abcxyzd</td>
<td>https://abc.com</td>
</tr>
<tr>
<td><code>"||a.example.com"</code></td>
<td>https://a.example.com/<br />https://b.a.example.com/xyz</td>
<td>https://example.com/</td>
</tr>
<tr>
<td><code>"|https*"</code></td>
<td>https://example.com</td>
<td>http://example.com/<br />http://https.com</td>
</tr>
</tbody>
</table>

## 规则集

规则被组织成规则集：

- **静态规则集**：使用清单（manifest）键 [`"declarative_net_request"`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) 定义并存储在扩展中的规则集。扩展可以使用 {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets","updateEnabledRulesets")}} 启用和禁用静态规则集。启用的一组静态规则集会在会话之间持久化，但不会在扩展更新之间持久化。在扩展安装和更新时启用的静态规则集由清单（manifest）键 `"declarative_net_request"` 的内容确定。
- **动态规则集**：使用 {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules","updateDynamicRules")}} 添加或删除的规则。这些规则在会话之间和扩展更新之间持久化。
- **会话规则集**：使用 {{WebExtAPIRef("declarativeNetRequest.updateSessionRules","updateSessionRules")}} 添加或删除的规则。这些规则不会在浏览器会话之间持久化。

> [!NOTE]
> 仅在测试期间显示有关无效静态规则的错误和警告。永久安装的扩展中的无效静态规则将被忽略。因此，通过测试验证静态规则集是否有效非常重要。

## 限制

### 静态规则集限制

一个扩展可以：

- 将静态规则集指定为清单键 `"declarative_net_request"` 的一部分，最多可达到 {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_STATIC_RULESETS","MAX_NUMBER_OF_STATIC_RULESETS")}} 个。
- 启用静态规则集，最少可达到 {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES","GUARANTEED_MINIMUM_STATIC_RULES")}} 个，并且启用的静态规则集数量不得超过 {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_ENABLED_STATIC_RULESETS","MAX_NUMBER_OF_ENABLED_STATIC_RULESETS")}} 个。此外，所有扩展启用的静态规则集中规则的数量不得超过全局限制。扩展不应该依赖于全局限制具有特定的值，而应该使用 {{WebExtAPIRef("declarativeNetRequest.getAvailableStaticRuleCount","getAvailableStaticRuleCount")}} 查找它们可以启用的额外规则数。

### 动态和会话规则

一个扩展可以添加的动态和会话规则数量受到 {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}} 的限制。

## 匹配优先级

当浏览器评估如何处理请求时，它会检查每个扩展的规则，这些规则具有与请求匹配的条件，并按以下方式选择要考虑应用的规则：

1. 规则优先级，其中 1 是最低优先级（规则优先级未设置时默认为 1）。<br>如果这没有导致一条规则被应用：
2. 规则动作，按以下优先级顺序：
   1. “allow”表示任何其他剩余规则都将被忽略。
   2. “allowAllRequests”（仅适用于 main_frame 和 sub_frame resourceTypes）具有与 allow 相同的效果，但也适用于从请求生成的文档中的未来子资源加载（包括后代框架）。
   3. “block”取消请求。
   4. “upgradeScheme”升级请求的方案。
   5. “redirect”重定向请求。
   6. “modifyHeaders”重写请求或响应标头或两者。

> [!NOTE]
> 当多个匹配规则具有相同的规则优先级和规则动作类型时，当匹配的动作支持附加属性时，结果可能不明确。这些属性可能导致无法组合的结果。例如：
>
> - “block”动作不支持附加属性，因此没有歧义：所有匹配的“block”动作都会导致相同的结果。
> - “redirect”动作将请求重定向到一个目标。当多个“redirect”动作匹配时，除一个之外的所有“redirect”动作都将被忽略。当重定向的请求匹配另一个规则条件时，仍然可能重定向多次。
> - 当多个“modifyHeaders”动作触及不同的标头时，它们可以被独立应用。当它们触及相同的标头时，结果是不明确的，因为某些组合操作是不允许的（如 {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}} 中所述）。因此，“modifyHeaders”动作的执行顺序非常重要。
>
> 为了控制应用动作的顺序，请为对优先顺序重要的规则分配不同的 `priority` 值。

> [!NOTE]
> 在规则优先级和规则动作之后，Firefox 还考虑规则所属的规则集，按照这个顺序：会话 > 动态 > 会话规则集。在不同浏览器中，不能依赖这一点，参见 [WECG 议题 280](https://github.com/w3c/webextensions/issues/280)。

如果只有一个扩展为请求提供规则，则应用该规则。然而，如果有多个扩展具有匹配的规则，浏览器按以下顺序选择要应用的扩展：

1. “block”
2. “redirect”和“upgradeScheme”
3. “allow”和“allowAllRequests”

如果请求未被阻止或重定向，则应用匹配的 `modifyHeaders` 动作，如 {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}} 中所述。

## 测试

{{WebExtAPIRef("declarativeNetRequest.testMatchOutcome","testMatchOutcome")}}、{{WebExtAPIRef("declarativeNetRequest.getMatchedRules","getMatchedRules")}} 和 {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug","onRuleMatchedDebug")}} 可用于辅助测试规则和规则集。这些 API 需要 `"declarativeNetRequestFeedback"` [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。此外：

- 在 Chrome 中，这些 API 仅对未打包的扩展可用。
- 在 Firefox 中，这些 API 仅在将 `extensions.dnr.feedback` 首选项设置为 `true` 后可用。可以使用 `about:config` 或 [`web-ext` CLI 工具的 `--pref` 标志](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#pref)设置此首选项。

## 与 webRequest API 的比较

- declarativeNetRequest API 在浏览器内部评估网络请求。这使其比 webRequest API 更高效，后者在扩展进程中以 JavaScript 评估每个网络请求。
- 由于请求未被扩展进程拦截，declarativeNetRequest 不需要扩展拥有后台页面。
- 与 webRequest API 不同，使用 declarativeNetRequest API 阻止或升级请求，只需要 `declarativeNetRequest` 权限而不需要主机权限。
- declarativeNetRequest API 为用户提供了更好的隐私保护，因为扩展不会读取用户发起的网络请求。
- （仅 Chrome：）与 webRequest API 不同，使用 declarativeNetRequest API 阻止的任何图像或 iframe 将在 DOM 中自动折叠。
- 在决定是否阻止或重定向请求时，declarativeNetRequest API 优先于 webRequest API，因为它允许同步拦截。同样，通过 declarativeNetRequest API 移除的任何标头都不会对 web 请求扩展可见。
- webRequest API 比 declarativeNetRequest API 更灵活，因为它允许扩展以编程方式评估请求。

## 类型

- {{WebExtAPIRef("declarativeNetRequest.MatchedRule")}}
  - : 匹配规则的详细信息。
- {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}
  - : 要修改的请求或响应标头。
- {{WebExtAPIRef("declarativeNetRequest.Redirect")}}
  - : 重定向应如何执行的详细信息。仅对重定向规则有效。
- {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}
  - : 请求的资源类型。
- {{WebExtAPIRef("declarativeNetRequest.Rule")}}
  - : 包含规则详细信息的对象。
- {{WebExtAPIRef("declarativeNetRequest.RuleAction")}}
  - : 定义匹配规则时要采取的动作的对象。
- {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}
  - : 定义规则触发条件的对象。
- {{WebExtAPIRef("declarativeNetRequest.URLTransform")}}
  - : 包含重定向动作的 URL 转换详细信息的对象。

## 属性

- {{WebExtAPIRef("declarativeNetRequest.DYNAMIC_RULESET_ID")}}
  - : 扩展添加的动态规则的规则集 ID。
- {{WebExtAPIRef("declarativeNetRequest.GETMATCHEDRULES_QUOTA_INTERVAL")}}
  - : 在此时间间隔内可以执行 {{WebExtAPIRef("declarativeNetRequest.MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL")}} 次 {{WebExtAPIRef("declarativeNetRequest.getMatchedRules")}} 的调用。
- {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES")}}
  - : 跨已启用的静态规则集保证给扩展的最小静态规则数。
- {{WebExtAPIRef("declarativeNetRequest.MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL")}}
  - : 在 {{WebExtAPIRef("declarativeNetRequest.GETMATCHEDRULES_QUOTA_INTERVAL")}} 周期内可以调用 {{WebExtAPIRef("declarativeNetRequest.getMatchedRules")}} 的次数。
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}
  - : 扩展可以添加的动态和会话范围规则的最大数量。
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_ENABLED_STATIC_RULESETS")}}
  - : 扩展可以启用的静态规则集的最大数量。
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_REGEX_RULES")}}
  - : 扩展可以添加的正则表达式规则的最大数量。
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_STATIC_RULESETS")}}
  - : 扩展可以作为清单键 [`declarative_net_request.rule_resources`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) 所能指定的静态规则集的最大数量。
- {{WebExtAPIRef("declarativeNetRequest.SESSION_RULESET_ID")}}
  - : 扩展添加的会话范围规则的规则集 ID。

## 函数

- {{WebExtAPIRef("declarativeNetRequest.getAvailableStaticRuleCount()")}}
  - : 返回扩展可以启用的静态规则数，直到达到全局静态规则限制。
- {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds()")}}
  - : 返回静态规则集中已禁用的规则的 ID。
- {{WebExtAPIRef("declarativeNetRequest.getDynamicRules()")}}
  - : 返回扩展的一组动态规则集。
- {{WebExtAPIRef("declarativeNetRequest.getEnabledRulesets()")}}
  - : 返回启用的各组静态规则集的 ID。
- {{WebExtAPIRef("declarativeNetRequest.getMatchedRules()")}}
  - : 返回扩展匹配的所有规则。
- {{WebExtAPIRef("declarativeNetRequest.getSessionRules()")}}
  - : 返回扩展的会话范围规则集。
- {{WebExtAPIRef("declarativeNetRequest.isRegexSupported()")}}
  - : 检查正则表达式是否支持作为 {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}`.regexFilter` 规则条件。
- {{WebExtAPIRef("declarativeNetRequest.setExtensionActionOptions()")}}
  - : 配置如何处理标签页的操作计数。
- {{WebExtAPIRef("declarativeNetRequest.testMatchOutcome()")}}
  - : 检查扩展的 `declarativeNetRequest` 规则是否会匹配假设请求。
- {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules()")}}
  - : 修改扩展的活跃的一组动态规则集。
- {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets()")}}
  - : 更新扩展的活跃的一组静态规则集。
- {{WebExtAPIRef("declarativeNetRequest.updateSessionRules()")}}
  - : 修改扩展的会话范围规则集。
- {{WebExtAPIRef("declarativeNetRequest.updateStaticRules()")}}
  - : 修改静态规则集中的规则的启用状态。
- {{WebExtAPIRef("declarativeNetRequest.updateStaticRules()")}}
  - : 修改静态规则集中的规则的启用状态。

## 事件

- {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug")}}
  - : 当调试具有“declarativeNetRequestFeedback”权限的扩展时，请求匹配规则时触发。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
