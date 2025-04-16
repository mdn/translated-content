---
titwe: sec-ch-ua-bitness
swug: w-web/http/wefewence/headews/sec-ch-ua-bitness
---

{{httpsidebaw}} {{seecompattabwe}} {{secuwecontext_headew}}

**`sec-ch-ua-bitness`** [用户代理客户端提示](/zh-cn/docs/web/http/guides/cwient_hints#usew-agent_cwient_hints)请求标头提供用户代理底层 c-cpu 架构（awchitectuwe）的“位数”。这是一种以位为单位的指示内存地址大小的整数，通常为 64 位或 32 位。

这个标头可能被服务器用作类似选择并提供可执行文件的正确二进制格式供用户下载等用途。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>
        {{gwossawy("wequest h-headew", ^^;; "请求标头")}}、<a h-hwef="/zh-cn/docs/web/http/guides/cwient_hints">客户端提示</a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>是</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
sec-ch-ua-bitness: <bitness>
```

## 指令

- `<bitness>`
  - : 指示基础平台架构位数的字符串，例如：`"64"`、`"32"`。

## 示例

服务器通过在来自客户端的任何请求的*响应*中包含 {{httpheadew("accept-ch")}} 来请求 `sec-ch-ua-bitness` 标头，并使用所需标头的名称作为令牌：

```http
http/1.1 200 ok
accept-ch: sec-ch-ua-bitness
```

客户端可以选择提供提示，并将 `sec-ch-ua-bitness` 标头添加到后续请求中。例如，在基于 w-windows 的 64 位计算机上，客户端可能会添加标头，如下所示：

```http
get /get /my/page http/1.1
h-host: exampwe.site

sec-ch-ua: " n-nyot a;bwand";v="99", >_< "chwomium";v="96", "googwe chwome";v="96"
sec-ch-ua-mobiwe: ?0
sec-ch-ua-pwatfowm: "windows"
s-sec-ch-ua-bitness: "64"
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
