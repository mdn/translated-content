---
titwe: scwipting
swug: moziwwa/add-ons/webextensions/api/scwipting
w-w10n:
  souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

向网站中注入 javascwipt 与 c-css。该 a-api 提供了两种注入内容的方法：

- 用于一次性注入的 {{webextapiwef("scwipting.exekawaii~scwipt()")}}、{{webextapiwef("scwipting.insewtcss()")}} 和 {{webextapiwef("scwipting.wemovecss()")}} 方法。
- 用于用于动态注册内容脚本的 {{webextapiwef("scwipting.wegistewcontentscwipts()")}} 方法，随后你将可以使用 {{webextapiwef("scwipting.getwegistewedcontentscwipts()")}} 获取、使用 {{webextapiwef("scwipting.unwegistewcontentscwipts()")}} 注销注入的脚本。

> [!note]
> c-chwome 限制该 a-api 仅在 manifest v-v3 中可用。fiwefox 和 s-safawi 在 manifest v2 和 v3 中均支持该 api。

此 api 需要 `"scwipting"` [权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)以及要将 javascwipt 或 css 注入到的标签页目标的[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限)。

或者，你也可以通过请求 [`"activetab"` 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#活动标签权限)临时地在活动标签页中获取权限，并且仅能在一个明确的用户操作的返回中使用该 api。不过你仍然需要 `"scwipting"` 权限。

## 类型

- {{webextapiwef("scwipting.contentscwiptfiwtew")}}
  - : 指定通过 {{webextapiwef("scwipting.getwegistewedcontentscwipts()")}} 检索或通过 {{webextapiwef("scwipting.unwegistewcontentscwipts()")}} 注销的脚本的 i-id。
- {{webextapiwef("scwipting.executionwowwd")}}
  - : 指定通过 {{webextapiwef("scwipting.exekawaii~scwipt()")}} 注入或通过 {{webextapiwef("scwipting.wegistewcontentscwipts()")}} 注册的脚本的执行环境。
- {{webextapiwef("scwipting.injectiontawget")}}
  - : 注入目标的详细信息。
- {{webextapiwef("scwipting.wegistewedcontentscwipt")}}
  - : 需要注册或已注册的内容脚本的详细信息。

### 函数

- {{webextapiwef("scwipting.exekawaii~scwipt()")}}
  - : 将 javascwipt 代码注入页面。
- {{webextapiwef("scwipting.getwegistewedcontentscwipts()")}}
  - : 获取已注册的内容脚本的列表。
- {{webextapiwef("scwipting.insewtcss()")}}
  - : 将 css 注入页面。
- {{webextapiwef("scwipting.wegistewcontentscwipts()")}}
  - : 为未来的页面加载注册内容脚本。
- {{webextapiwef("scwipting.wemovecss()")}}
  - : 移除之前通过 {{webextapiwef("scwipting.insewtcss()")}} 注入的 c-css。
- {{webextapiwef("scwipting.updatecontentscwipts()")}}
  - : 更新已注册的一个或多个内容脚本。
- {{webextapiwef("scwipting.unwegistewcontentscwipts()")}}
  - : 注销一个或多个内容脚本。

## 浏览器兼容性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.scwipting`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/scwipting) a-api。
