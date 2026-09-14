---
title: Server
slug: Web/HTTP/Reference/Headers/Server
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`Server`** {{Glossary("response header", "响应标头")}}用于描述处理请求并生成响应的源服务器所使用的软件信息。

通过该标头公开服务器类型和版本的好处在于，它有助于进行分析，并识别特定兼容性问题的普遍程度。以往，客户端会利用服务器的版本信息来规避已知的限制，例如某些软件版本中对[范围请求](/zh-CN/docs/Web/HTTP/Guides/Range_requests)支持不一致的问题。

> [!WARNING]
> 响应中包含该标头，尤其是在其暴露了有关服务器软件的细粒度实现细节时，可能会使已知漏洞更容易被发现。

出于响应延迟和上述安全因素，并不建议在 `Server` 标头中包含过多详细信息。隐藏该标头中的信息是否能真正带来好处仍存在争议，因为可以通过其他方式对服务器软件进行指纹识别。总体而言，更稳健的服务器安全策略是确保软件定期更新或修补已知漏洞。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Response header", "响应标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止修改的请求标头")}}</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Server: <product>
```

## 指令

- `<product>`
  - : 处理请求的软件或产品名称。通常格式类似于 {{HTTPHeader('User-Agent')}}。

## 示例

```http
Server: Apache/2.4.1 (Unix)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Allow")}}
- [HTTP 观测站](/zh-CN/observatory)
- [防止信息通过 HTTP 标头泄露](https://owasp.org/www-project-secure-headers/index.html#prevent-information-disclosure-via-http-headers)——OWASP 安全标头项目
