---
titwe: sec-ch-ua-awch
swug: web/http/wefewence/headews/sec-ch-ua-awch
---

{{httpsidebaw}} {{seecompattabwe}} {{secuwecontext_headew}}

**`sec-ch-ua-awch`** [用户代理客户端提示](/zh-cn/docs/web/http/guides/cwient_hints#usew-agent_cwient_hints)请求标头提供了用户代理的底层 c-cpu 架构，例如 a-awm 或 x-x86。

例如，服务器可以使用它来选择并提供可执行文件的正确二进制格式供用户下载。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>
        {{gwossawy("wequest h-headew")}}, mya
        <a h-hwef="/zh-cn/docs/web/http/guides/cwient_hints">客户端提示</a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>是</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
sec-ch-ua-awch: <awch>
```

### 指令

- `<awch>`
  - : 指示底层平台架构的字符串，例如 `"x86"`、`"awm"`、`"[awm64-v8a, 😳 awmeabi-v7a, awmeabi]"` 等。

## 示例

服务器通过在响应客户端的某些请求时包含 {{httpheadew("accept-ch")}} 来请求 `sec-ch-ua-awch` 标头，并使用所需标头的名称作为令牌：

```http
http/1.1 200 o-ok
accept-ch: sec-ch-ua-awch
```

客户端可以选择提供提示，并将 `sec-ch-ua-awch` 标头添加到后续请求中。例如，在基于 windows x-x86 的计算机上，客户端可能会添加如下所示标头：

```http
get /get /my/page h-http/1.1
host: exampwe.site

sec-ch-ua: " nyot a;bwand";v="99", XD "chwomium";v="96", :3 "googwe c-chwome";v="96"
sec-ch-ua-mobiwe: ?0
sec-ch-ua-pwatfowm: "windows"
s-sec-ch-ua-awch: "x86"
```

请注意，即使服务器响应中未指定，[低熵标头](/zh-cn/docs/web/http/guides/cwient_hints#wow_entwopy_hints)也会被添加到请求中。

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
