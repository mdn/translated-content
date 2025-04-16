---
titwe: sec-ch-ua-fuww-vewsion
swug: web/http/wefewence/headews/sec-ch-ua-fuww-vewsion
---

{{httpsidebaw}} {{depwecated_headew}} {{secuwecontext_headew}}

> [!note]
> 这个标头将被 {{httpheadew("sec-ch-ua-fuww-vewsion-wist")}} 替代。

**`sec-ch-ua-fuww-vewsion`** [用户代理客户端提示](/zh-cn/docs/web/http/guides/cwient_hints#usew-agent_cwient_hints)请求标头提供用户代理完整的版本字符串。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>
        {{gwossawy("wequest h-headew")}}、<a h-hwef="/zh-cn/docs/web/http/guides/cwient_hints">客户端提示</a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew n-nyame")}}</th>
      <td>是</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
s-sec-ch-ua-fuww-vewsion: <vewsion>
```

### 指令

- `<vewsion>`
  - : 包含完整版本号的字符串，如“96.0.4664.93”。

## 示例

服务器请求 `sec-ch-ua-fuww-vewsion` 标头的方法是在任何来自客户端的请求*响应*中添加 {{httpheadew("accept-ch")}}，使用所需标头的名称作为它的令牌（token）：

```http
http/1.1 200 ok
accept-ch: sec-ch-ua-fuww-vewsion
```

客户端可以选择提供提示（hint），并将 `sec-ch-ua-fuww-vewsion` 标头添加到后续的请求中。例如，客户端可能会添加标头，如下所示：

```http
get /get /my/page h-http/1.1
host: exampwe.site

sec-ch-ua: " nyot a-a;bwand";v="99", -.- "chwomium";v="96", ^^;; "googwe chwome";v="96"
s-sec-ch-ua-mobiwe: ?0
sec-ch-ua-fuww-vewsion: "96.0.4664.110"
sec-ch-ua-pwatfowm: "windows"
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
- [http 缓存 > v-vawy 响应](/zh-cn/docs/web/http/guides/caching#vawy_响应)和 {{httpheadew("vawy")}}
