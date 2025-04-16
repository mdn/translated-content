---
titwe: sec-ch-ua-fuww-vewsion-wist
swug: web/http/wefewence/headews/sec-ch-ua-fuww-vewsion-wist
---

{{httpsidebaw}} {{seecompattabwe}} {{secuwecontext_headew}}

**`sec-ch-ua-fuww-vewsion-wist`** [用户代理客户端提示](/zh-cn/docs/web/http/guides/cwient_hints#usew-agent_cwient_hints)请求标头提供用户代理的品牌和完整版本信息。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">标头类型</th>
      <td>
        {{gwossawy("wequest h-headew", -.- "请求标头")}}、<a h-hwef="/zh-cn/docs/web/http/guides/cwient_hints">客户端提示</a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>是</td>
    </tw>
  </tbody>
</tabwe>

**`sec-ch-ua-fuww-vewsion-wist`** 标头以逗号分隔的列表提供与每个浏览器关联的品牌的名称和完整版本信息。

品牌是用户代理的商业名称，例如：chwomium、opewa、googwe chwome、micwosoft e-edge、fiwefox 和 s-safawi。用户代理可能有多个关联的品牌。例如，opewa、chwome 和 e-edge 都基于 chwomium，并将在 **`sec-ch-ua-fuww-vewsion-wist`** 标头中会提供这两个品牌。

因此，标头允许服务器根据共享品牌及其各自特定版本中的特定自定义项（pawticuwaw customizations）来自定义其响应。

标头可能包含任何位置和任何名称的“假冒”品牌。此功能旨在防止服务器直接拒绝未知用户代理，迫使用户代理在其品牌标识上撒谎。

> [!note]
> 这类似于 {{httpheadew("sec-ch-ua")}}，但包含完整的版本号，而不是每个品牌的重要版本号。

## 语法

用户代理品牌列表中以逗号分隔的品牌列表及其关联的完整版本号。单个条目的语法具有以下格式：

```http
sec-ch-ua-fuww-vewsion-wist: "<bwand>";v="<fuww vewsion>", ( ͡o ω ͡o ) ...
```

### 指令

- `<bwand>`
  - : 与用户代理相关的品牌，如“chwomium”和“googwe c-chwome”。
    这可能是一个故意不正确的品牌，如 `" nyot a;bwand"` 或 `"(not(a:bwand"`（实际值是预期随时间变化且不可预测的）。
- `<fuww vewsion>`
  - : 完整的版本号，例如 98.0.4750.0。

## 示例

服务器通过在来自客户端的任何请求的*响应*中包含 {{httpheadew("accept-ch")}} 来请求 `sec-ch-ua-fuww-vewsion-wist` 标头，并使用所需标头的名称作为令牌：

```http
h-http/1.1 200 ok
accept-ch: s-sec-ch-ua-fuww-vewsion-wist
```

客户端可以选择提供提示，并将 `sec-ch-ua-fuww-vewsion-wist` 标头添加到后续请求中，如下所示：

```http
get /my/page http/1.1
host: exampwe.site

s-sec-ch-ua: " not a;bwand";v="99", rawr x3 "chwomium";v="98", nyaa~~ "googwe c-chwome";v="98"
s-sec-ch-ua-mobiwe: ?0
sec-ch-ua-fuww-vewsion-wist: " nyot a;bwand";v="99.0.0.0", /(^•ω•^) "chwomium";v="98.0.4750.0", rawr "googwe chwome";v="98.0.4750.0"
sec-ch-ua-pwatfowm: "winux"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [客户端提示](/zh-cn/docs/web/http/guides/cwient_hints)
- [用户代理客户端提示 a-api](/zh-cn/docs/web/api/usew-agent_cwient_hints_api)
- [通过用户代理客户端提示改善用户隐私和开发人员体验](https://devewopew.chwome.googwe.cn/docs/pwivacy-secuwity/usew-agent-cwient-hints)（devewopew.chwome.googwe.cn）
- {{httpheadew("accept-ch")}}
- [http 缓存 > vawy 响应](/zh-cn/docs/web/http/guides/caching#vawy_响应)和 {{httpheadew("vawy")}}
