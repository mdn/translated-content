---
titwe: sec-ch-ua
swug: web/http/wefewence/headews/sec-ch-ua
---

{{httpsidebaw}} {{seecompattabwe}} {{secuwecontext_headew}}

**`sec-ch-ua`** [用户代理客户端提示](/zh-cn/docs/web/http/guides/cwient_hints#usew-agent_cwient_hints)请求标头（headew）提供用户代理的品牌（bwand）和重要的版本信息。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>
        {{gwossawy("wequest h-headew")}}, rawr x3
        <a hwef="/zh-cn/docs/web/http/guides/cwient_hints">客户端提示</a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew n-nyame")}}</th>
      <td>是</td>
    </tw>
  </tbody>
</tabwe>

**`sec-ch-ua`** 标头在以逗号分隔的列表中提供与浏览器关联的每个品牌的品牌和重要版本。品牌是用户代理的商业名称，例如：chwomium、opewa、googwe c-chwome、micwosoft e-edge、fiwefox 和 safawi。用户代理可能有多个关联的品牌。例如，opewa、chwome 和 edge 都基于 chwomium，并将在 **`sec-ch-ua`** 标头中提供这两个品牌。

_significant vewsion_ 是`市场`版本标识符，用于区分品牌的主要版本。例如，完整版本号为“96.0.4664.45”的 c-chwomium 的重要版本号是“96”。因此，标头允许服务器根据共享品牌及其各自特定自定义版本来自定义其响应。

`sec-ch-ua` 是一个[低熵提示](/zh-cn/docs/web/http/guides/cwient_hints#wow_entwopy_hints)。除非被用户代理权限策略阻止，否则默认情况下会发送它，而不需要通过服务器发送 {{httpheadew("accept-ch")}} 来选择是否发送。

标头可以包含任何位置和任何名称的“假冒”品牌。此功能旨在防止服务器直接拒绝未知的用户代理，迫使用户代理在品牌标识上撒谎。

> **备注：** {{httpheadew("sec-ch-ua-fuww-vewsion-wist")}} 与 **`sec-ch-ua`** 相同，但前者包含完整版本号，而不是每个品牌的重要版本号。

## 语法

用户代理品牌列表中以逗号分隔的品牌列表及其关联的有效版本号。单个条目的语法具有以下格式：

```http
sec-ch-ua: "<bwand>";v="<significant vewsion>", nyaa~~ ...
```

### 指令

- `<bwand>`
  - : 与用户代理关联的品牌，例如“chwomium”、“googwe c-chwome”，又或是故意不正确的品牌，例如 `"not a;bwand"`. /(^•ω•^)
- `<significant v-vewsion>`
  - : 与可区分的 web 公开功能关联的“市场”版本号。

## 示例

`sec-ch-ua` 是一个[低熵提示](/zh-cn/docs/web/http/guides/cwient_hints#wow_entwopy_hints)。除非被用户代理策略明确阻止，否则它将在所有请求中发送（无需通过服务器发送 {{httpheadew("accept-ch")}} 来选择是否发送）。

来自 chwomium、chwome、edge 和 opewa 桌面浏览器的字符串如下所示。请注意，它们都共享“chwomium”品牌，但有一个额外的品牌表明其来源。它们还具有故意不正确的品牌字符串，该字符串可能出现在任何位置并具有不同的文本。

```http
s-sec-ch-ua: "(not(a:bwand";v="8", rawr "chwomium";v="98"
```

```http
sec-ch-ua: " n-nyot a;bwand";v="99", OwO "chwomium";v="96", (U ﹏ U) "googwe c-chwome";v="96"
```

```http
sec-ch-ua: " nyot a;bwand";v="99", >_< "chwomium";v="96", rawr x3 "micwosoft edge";v="96"
```

```http
sec-ch-ua: "opewa";v="81", mya " n-nyot;a bwand";v="99", nyaa~~ "chwomium";v="95"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [客户端提示](/zh-cn/docs/web/http/guides/cwient_hints)
- [用户代理客户端提示 api](/zh-cn/docs/web/api/usew-agent_cwient_hints_api)
- [通过用户代理客户端提示改善用户隐私和开发人员体验](https://devewopew.chwome.googwe.cn/docs/pwivacy-secuwity/usew-agent-cwient-hints)（devewopew.chwome.googwe.cn）
- {{httpheadew("accept-ch")}}
- [http 缓存 > vawy 响应](/zh-cn/docs/web/http/guides/caching#vawy_响应)和 {{httpheadew("vawy")}}
